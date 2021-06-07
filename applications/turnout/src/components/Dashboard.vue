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
    <div class="container">
      <div class="col-12 row">
        <EventItem
          v-for="(event, index) in events"
          :key="index"
          :event="event"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { firebaseApp } from "../firebaseApp";
import AddEvent from "./AddEvent.vue";
import EventItem from "./EventItem.vue";
import { eventsRef } from "../firebaseApp";

export default {
  data() {
    return {
      showForm: true
    };
  },
  computed: {
    ...mapState(["user", "events"])
  },
  methods: {
    ...mapActions(["signOut", "setEvents"]),
    _signOut() {
      firebaseApp.auth().signOut();
      // this.$store.dispatch("signOut");
      this.signOut();
    }
  },
  components: {
    AddEvent,
    EventItem
  },
  mounted() {
    eventsRef.on("value", snap => {
      let events = [];
      snap.forEach(event => {
        events.push(event.val());
      });
      this.setEvents(events);
    });
  }
};
</script>
