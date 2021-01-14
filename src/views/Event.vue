<template>
  <div class="event-container flex" v-if="event">
    <section>
      <h1 class="title">Event: {{ event.title }}</h1>
      <img :src="event.img" alt="event image"   style="width:50%; height:30%;"/>
    </section>
    <section>
      <span class="btn-back" @click="$router.go(-1)"
        >&times;</span
      >
      <h1 class="date">
        <span class="lnr lnr-calendar-full"></span>
        {{ event.date  }}
      </h1>
      <p class="description">{{ event.description }}</p>
      <p class="attendees">
        <span class="lnr lnr-users"></span>
        {{ isAttended ? event.attendees + 1 : event.attendees }}
        <button
          class="btn-attend"
          @click="attendToEvent"
          :style="[
            isAttended ? { background: 'red' } : { background: '#00796b' },
          ]"
        >
          {{ isAttended ? "Leave" : "Attend" }}
        </button>
      </p>

      <form @submit.prevent="createReview">
        <h2>Review</h2>
        <input
          required
          type="text"
          placeholder="Title"
          id="title"
          v-model="input.title"
        />
        <textarea
          required
          v-model="input.message"
          placeholder="What did you like/dislike about this event?"
        ></textarea>
        <button style="position:relative; top:20px; right:15px;">Send</button>
      </form>

      <ul class="review-container" ref="review">
        <li
          class="review-item"
          v-for="(eventReview, idx) in showCurrentReview(event.id)"
          :key="idx"
        >
          <h1>{{ eventReview.review.title }}</h1>
          <p>{{ eventReview.review.message }}</p>
          <span class="review-date">{{ eventReview.date}}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Event",
  data() {
    return {
      input: {
        title: null,
        message: null,
      },
    };
  },
  props: {
    event: Object,
  },
  methods: {
    attendToEvent() {
      if (!this.$store.getters.loggedIn) {
        alert("Please log in to attend to event");
        return;
      }
      this.$store.commit("SET_EVENT_DATA", this.event);
    },

    createReview() {
      if (!this.$store.getters.loggedIn) {
        alert("Please log in to attend to event");
        this.input = "";
        return;
      }
      this.$store.commit("SET_EVENT_REVIEW", {
        review: this.input,
        id: this.event.id,
        date: new Date(),
      });
      this.input = {};
      this.$nextTick(() => {
        this.$refs.review.scrollIntoView();
      });
    },
  },
  computed: {
    isAttended() {
      return this.$store.state.events.find((e) => e.id === this.event.id);
    },
    ...mapGetters(["showCurrentReview"]),
  },
};
</script>

<style  scoped>
.event-container {
  top: 50%;
  left: 50%;
  z-index: 4;
  width: 95%;
  height: 95%;
  position: fixed;
  overflow-y: auto;
  max-width: 1168px;
  background: #fff;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 5px rgba(#000, 0.3);
}
  img {
    width: 100%;
    object-fit: contain;
    float: left;
  }

  section {
    padding: 1rem;
    margin: 5rem 0;
    font-size: 0.9rem;
  }


    span.btn-back {
      top: 0.5rem;
      right: 1rem;
      font-size: 2rem;
      position: absolute;
      display: inline-block;
    }

    .title {
      font-weight: 100%;
    }
     .date {
        color: #999;
        font-size: 1rem;
        position: relative;
        bottom:110px;
     }
      .description {
        line-height: 1.7;
        font-size: 0.9rem;
         position: relative;
        bottom:110px;
      }

    p {
      margin: 2rem 0;
    }
    .attendees {
      align-items: center;
       position: relative;
        bottom:110px;
    }
      span {
        margin-right: 0.5rem;
      }
      button {
        margin-left: auto;
      }
    form{
        border:solid grey 1px;
        width:40%;
        float:right;
         position: relative;
        bottom:110px;
        height:200px;
    }
    input{
        border:none;
        background:lightgrey;
        border-radius: 7px;
        padding:5px;
         position: relative;
         left:90px;
        bottom:50px;
    }
    textarea{
         border:none;
        background:lightgrey;
        border-radius: 7px;
        padding:5px;
        margin:10px 0 0 45px; 
        height:50px;
          position: relative;
          top:25px;
right: 130px;

    }
     button{
     border: none;
    color: #fff;
    transition: 0.3s;
    font-size: 1rem;
    border-radius: 3px;
    margin-left: 0.5rem;
    padding: 0.5rem 1rem;
    background: #687271;
  }
      .review-item {
        padding: 10px;
        margin: 1rem 0;
        font-weight: 100;
        border-radius: 5px;
        border:none;
          width:40%;
          height: 10%;
               position: relative;
               top:30px;
          bottom:20px;
          left: 600px;
          list-style: none;

      }
        h1 {
          font-size: 1.2rem;
        }
        p {
          margin: 1rem 0;
          font-style: italic;
        }
      .review-date {
        font-weight: 100;
        font-size: 0.7rem;
      }
</style>
