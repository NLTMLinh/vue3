<template>
  <div id="app">
    <h3>Got jokes?</h3>
    <button class="btn btn-primary" @click="initJokes">
      Add Ten Random Jokes
    </button>
    <button class="btn btn-success" @click="addJoke">
      Add a Joke
    </button>

    <br />

    <div
      class="form-check form-check-inline"
      v-for="(type, index) in types"
      :key="index"
    >
      <input
        class="form-check-input "
        type="checkbox"
        :value="type"
        id="type"
        checked
        v-model="checkedTypes"
      />
      <label class="form-check-label" for="type">
        {{ type }}
      </label>
    </div>
    <br />
    <div class="col-md-12">
      <Joke
        v-for="(joke, index) in fiterJokes"
        :joke="joke"
        :index="index"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Joke from "./Joke";

export default {
  data() {
    return {
      types: ["general", "knock-knock", "programming"],
      checkedTypes: ["general", "knock-knock", "programming"]
    };
  },
  computed: {
    ...mapState(["jokes"]),
    fiterJokes: function() {
      return this.jokes.filter(item => this.checkedTypes.includes(item.type));
    }
  },
  methods: {
    ...mapActions(["initJokes", "addJoke"])
  },
  components: {
    Joke
  }
};
</script>
