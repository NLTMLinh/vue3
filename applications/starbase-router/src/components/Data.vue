<template>
  <div class="col-md-12">
    <Item
      v-for="(item, index) in items"
      :key="index"
      :passed-item="item"
      :type="type"
    >
    </Item>
  </div>
</template>
<script>
import Item from "./Item";
export default {
  components: {
    Item
  },
  data() {
    return {
      type: this.$route.params.type,
      items: []
    };
  },
  watch: {
    $route: "fetchItems"
  },
  methods: {
    fetchItems() {
      this.items = [];
      const inital_ids = [1, 13, 14];

      for (let i in inital_ids) {
        let id = inital_ids[i];
        fetch(`https://swapi.dev/api/${this.type}/${id}`, {
          method: "GET"
        })
          .then(res => res.json())
          .then(json => this.items.push(json))
          .catch(err => console.error(err));
      }
    }
  },
  created() {
    this.fetchItems();
  }
};
</script>
