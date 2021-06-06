<template>
  <div class="form-block">
    <h4>Add an Event</h4>
    <div class="form form-card">
      <div class="form-group">
        <label>Title</label>
        <input type="text" class="form-control" v-model="event.title" />
      </div>
      <div class="form-group">
        <label>Description</label>
        <input type="text" class="form-control" v-model="event.description" />
      </div>
      <div class="form-group">
        <label>Date</label>
        <input type="date" class="form-control" v-model="event.date" />
      </div>
      <div class="form-group">
        <label>Location</label>
        <input type="text" class="form-control" v-model="event.location" />
      </div>
      <button
        type="submit"
        class="btn btn-success mt-3 w-100"
        @click="addEvent"
      >
        Add Event
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { eventsRef } from "../firebaseApp";
export default {
  data() {
    return {
      event: {
        title: "",
        description: "",
        date: "",
        location: "",
        email: ""
      }
    };
  },
  methods: {
    addEvent() {
      this.event.email = this.user.email;
      eventsRef.push(this.event);
    }
  },
  computed: {
    ...mapState(["user"])
  }
};
</script>
