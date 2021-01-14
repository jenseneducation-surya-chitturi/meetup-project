<template>
  <div class="home">

      <h1>Join and create your own event</h1>
 <!--    <img src="../assets/bg.jpg" alt="" srcset=""> -->
  <AddEvent/>
 <Meetup/>

  </div>
</template>

<script>
import AddEvent from '../components/AddEvent.vue';
import Meetup from './Meetup.vue';
export default {
  name: "Home",
  components: {
    Meetup,
    AddEvent,
  },
};
</script>

<style scoped>

</style>

