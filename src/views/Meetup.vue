<template>
  <div class="about">
    <input type="text" placeholder="Search event" v-model="search" />
     <ul>
        <li v-for="event in filteredList" :key="event.id">
        <button @click="deleteEvent(event)">x</button>
        <img :src="event.image"
             style="width:200px; height:200px;"
             @click="$router.push({ name: 'event', params: { id: event.id, event } })"
             alt="image"/>
        <h1 class="title">{{ event.title }}</h1>
        <h2>{{ event.location }}</h2>
        <h3>{{event.shortInfo}}</h3>
        <h4>{{event.timeFrom}} - {{event.timeTo}}</h4>

        </li>
      </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Meetup",
 data() {
    return {
      search: "",
      events: [],
    };
 },
 async created() {
    try {
      const res = await axios.get(`http://localhost:3000/events`);
      this.events = res.data;
    } catch (e) {
      console.log(e);
    }
  },
computed:{
filteredList() {
      return this.events.filter((event) => {
        return event.title.toLowerCase().includes(this.search.toLowerCase());
      });
    },
},
methods:{
deleteEvent(event) {
  this.events.splice(this.events.indexOf(event), 1);
}
},
};
</script>
<style  scoped>
ul {
  list-style: none;
  display: grid;
  gap: 1rem 1rem;

}
li {
background: white;
gap: 2rem;
border-bottom: 1px solid #b1b1b1;
}
img{
display: flex;
float: left;
margin-bottom: 25px;
margin-left:20%;
border-radius: 5%;
}
h1, h2, h3, h4{
font-family: Arial, Helvetica, sans-serif;
display: flex;
float: center;
margin-left: 50%;
}
h4{
  color: grey;
}
button{
  background:grey;
  border-radius: 50%;
  display: flex;
  float:center;
  margin-left: 34%;
  margin-top:10px;
}
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
</style>