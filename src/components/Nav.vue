<template>
<div>
  <div class="nav-container">
    <div class="logoName">MeetUp</div>
    <ul class="ul-links">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/meetup">MeetUp</router-link>
      </li>
     <!--  <li>
        <router-link to="/event">Events</router-link>
      </li> -->
      <li>
        <router-link to="/signup">SignUp</router-link>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {};
</script>

<style scoped>


*{
  box-sizing: border-box;
}

body{
  margin: 0;
  padding: 0;
}

.nav-container {
   display:flex;
   justify-content: space-between;
   align-items: center;
   background-color:grey;
   color:white;

}

.logoName{
    font-size: 1.5rem;
    margin: .5rem
}


ul{
  margin:0;
  padding:0;
  display:flex;
}

li{
  list-style: none;
}

a{
  text-decoration: none;
  color:white;
  padding:1rem;
  display: block;
}

li :hover{
  background-color: gray;
}


.toggle-button{
  position:absolute;
  top:.75rem;
  right:1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width:30px;
  height: 21px;

}


@media only screen and (max-width:500px){
  .nav-container{
    display:flex;
    flex-direction: column;

  }

  .ul-links{
     display:flex;
    flex-direction: column;

  }
}
</style>

