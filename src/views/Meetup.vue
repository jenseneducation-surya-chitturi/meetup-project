<template>
  <div class="about">
   <input type="text" placeholder="Search event" v-model="search" />

     <div class="grid">
        <section class="events" v-for="event in filteredList" :key="event.id">
        <button @click="deleteEvent(event)">x</button>
        <img :src="event.img"
             style="width:350px; height:200px;"
             @click="$router.push({ name: 'event', params: { id: event.id, event } })"
             alt="image"/>
    
 <section class="event-content">
          <h2 class="date">
            <span class="lnr lnr-calendar-full"></span>
            {{ event.date }}
          </h2>
          <p class="title">{{ event.title }}</p>
          <p class="description">{{ event.description }}</p>
          <p class="attendees">
            <span class="lnr lnr-users"></span>
            {{ event.attendees }}
          </p>
        </section>
        </section>
      </div>
  </div>
</template>
<script>

export default {
  name: "Meetup",
data() {
    return {
      msg: "Meetup",
       search: "",
    };
  },
  created() {
    this.$store.dispatch("getData");
  },
  
computed:{
 events() {
      return this.$store.state.events;
    },
    filteredList() {
      return this.events.filter((event) => {
        return event.title.toLowerCase().includes(this.search.toLowerCase());
      });
    },
},
methods:{
deleteEvent(event) {
  this.events.splice(this.events.indexOf(event), 1);
},
  
},
};
</script>
<style  scoped>
input{
  position: relative;
  display: inline-block;
  font-size: 20px;
  box-sizing: border-box;
  transition: .5s;
}
input[type="text"]{
  width:340px;
  height:50px;
  background:#fff;
  outline: none;
  padding:0 25px;
  border-radius: 25px;
}
.grid {
  margin:50px;
  display: grid;
  gap: 2rem;
      grid-template-columns: repeat(3, 1fr);
}
 :hover {
          box-shadow: 0 0 25px rgba(#000, 0.2);
 }
  section{
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid #eee;
  }.event-content {
      padding: 1rem;
      display: flex;
      flex-direction: column;

   }   .date {
        color: #999;
        font-size: 1rem;

  }      span {
          color: #00796b;
        }


      .title {
        margin: 1rem 0;
        font-weight: 600;
        font-size: 1.1rem;
      }

      .description {
        line-height: 1.7;
        font-size: 0.9rem;
      }

      .attendees {
        color: #999;
        font-size: 1rem;
        margin-top: 1rem;
      }
        span {
          font-weight: bold;
          color: #00796b;
        }

h1 {
  font-weight: 100;
}
  button{
    position: relative;
    top:5%;
    left:42%;
    background:green;
    border-radius:50% ;
  }

</style>