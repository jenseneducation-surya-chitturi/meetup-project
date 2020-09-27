<template>  
     <div class="id" v-if="event">
    <div class="id-content">
        <h1 class="title">
          {{ event.title }}
          <span class="close" @click="$router.go(-1)">&times;</span>
        </h1>
         <div class="content-left">
        <img :src="event.image" style="width:400px; height:250px;" />
      </div>
      <div class="content-right">
        <p>{{ event.description }}</p>
        <button class="signup" @click="signupDetails">Register</button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Event",
   props: {
    event: {
      type: Object,
      default: null,
    },
  },
  methods: {
    signupDetails(){
         this.$router.push('/signup');
    }
  }
};
</script>

<style scoped>
.id{
  width: 900px;
  box-shadow:-2px 0px 33px 0px rgba(0,0,0,0.75);
display: flex;
margin-left:200px;
float: left;
}
p{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  margin-left: 40px;
  margin-right: 40px;
}
.close{
  display: flex;
  float:right;
  margin-right: 10px;

        
}
button {
      width: 20%;
      border: none;
      padding: .8rem;
      color: white;
      font-size: 24px;
      cursor: pointer;
      font-weight: bold;
      border-radius: 10px;
      background: grey;
    }

</style>