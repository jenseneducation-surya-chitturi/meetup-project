<template>
  <div class="create-event-container">
    <label for="file-input">
      <img :src="img" alt="event image" />
    </label>
    <input type="file" accept="image/*" id="file-input" @change="chooseImage" />
    <form @submit.prevent="createEvent">
      <h1>Create your event</h1>
      <input
        type="text"
        v-model="input.title"
        id="title"
        placeholder="Event title"
      />
      <textarea
        v-model="input.description"
        placeholder="Enter a description"
      ></textarea> <br>
      <input class="date" type="date" id="date" v-model="input.date" />
      <button>Create</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Create",
  data() {
    return {
      input: {
        title: "",
        description: "",
        date: "",
        attendees: 0,
      },
      img: require("@/assets/placeholder.png"),
    };
  },

  methods: {
    chooseImage(e) {
      const file = e.target.files[0];
      this.img= URL.createObjectURL(file);
    },

    createEvent() {
      this.$store.commit("CREATE_EVENT", {
        id: Date.now(),
        title: this.input.title,
        date: this.input.date,
        description: this.input.description,
        img: this.img,
      });
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
<style scoped>
.create-event-container {
  top: 50%;
  left: 50%;
  z-index: 1;
  z-index: 4;
  width: 95%;
  height: 95%;
  position: fixed;
  max-width: 560px;
  overflow-y: auto;
  border-radius: 5px;
  background: #fff;
  padding: 2rem 1rem;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);
}
  #file-input {
    display: none;
  }

  img {
    width: 100%;
    display: block;
    cursor: pointer;
    border: 1px solid #ddd;
  }

    h1 {
      margin: 3rem 0 2rem 0;
    }
    ::before {
      display: none;
    }
    form{}
    button{
     border: none;
    color: #fff;
    transition: 0.3s;
    font-size: 1rem;
    border-radius: 3px;
    margin-left: 0.5rem;
    padding: 0.5rem 1rem;
    background: #687271;
     position: relative;
       top:18px;
       left: 60px;
  }
   input{
        border:none;
        background:lightgrey;
        border-radius: 7px;
        padding:5px;
         position: relative;
         left:135px;
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
right: 80px;
    }
    .date{
      border:none;
        background:lightgrey;
        border-radius: 7px;
        padding:5px;
         position: relative;
       top:17px;
       left: 60px;
         
    }

</style>

