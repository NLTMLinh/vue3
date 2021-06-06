<template>
  <div>
    <h3>Events Dashboard</h3>
    <div class="mb-3 form-check form-check-inline">
      <input
        type="checkbox"
        class="form-check-input"
        id="showForm"
        v-model="showForm"
      />
      <label class="form-check-label" for="showForm">Show form</label>
    </div>
    <hr />
    <AddEvent v-show="showForm" />

    <br />
    <hr />
    <br />

    <button class="btn btn-danger signout-btn" @click="_signOut">
      Sign out
    </button>
    {{ user }}
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { firebaseApp } from "../firebaseApp";
import AddEvent from "./AddEvent.vue";

export default {
  data() {
    return {
      showForm: true
    };
  },
  computed: {
    ...mapState(["user"])
  },
  methods: {
    ...mapActions(["signOut"]),
    _signOut() {
      firebaseApp.auth().signOut();
      // this.$store.dispatch("signOut");
      this.signOut();
    }
  },
  components: {
    AddEvent
  }
};
</script>
