<template>
    <div>
        <div class="new-meetup">
                
                    <h2 class="form-head">Create MeetUp!</h2>
                    
                    <form class="meetup-form" name="newMeetup" >
                         
                        <label for="Meetuptitle">Meetup Name</label>
                        <input name="Meetupname" type="text" id="Meetupname" v-model="title">

                        <label for="Details">Description</label>
                        <input name="Details" type="text" id="details" v-model="description">

                        <label for="Date">Date</label>
                        <input name="Date" type="date" id="Date" v-model="Date">
                        
                        <label for="Adress">Location</label>
                        <input name="Adress" type="text" id="Location" v-model="location">
                        
                        <button class="form-button" @click="addEvent()">ADD meetup</button>
                        
                    </form> 
                </div>

    </div>
    
</template>

<script>
 import axios from "axios";
 const baseURL = "http://localhost:3000/events";
export default {
    data(){
        return{
            
            events:[],
            id:"",
            title:"",
            description:"",
            Date:"",
            location:"",
            
        };
    },
    async created(){
        try{
        const res = await axios.get(baseURL);
        this.events = res.data;
    }catch(e) {
        console.error(e)
    }
 },
   methods: {
        async addEvent(){
           const res = await axios.post(baseURL, {title: this.title,ddescription: this.description , Date: this.Date, location:this.location});
             this.events=[...this.events, res.data];
                this.title="";
                this.description="";
                this.Date="";
                this.location=""; 
       }
   }
   
      
};
</script>

<style scoped >
.new-meetup{
 background-color: grey;
 height: auto;
 display: flex;
 flex-direction:column;
 align-content: center;
 text-align: center;
 font-family: Georgia, 'Times New Roman', Times, serif ;
}
.meetup-form{    
display: grid;
grid-template-columns: [labels] auto [controls] 1fr;
grid-auto-flow: row;
grid-gap: .8em;
background: #eee;
padding: 25px 15px;
}
.meetup-form > label  {
grid-column: labels;
grid-row: auto;
}
.meetup-form > input,
.meetup-form > textarea,
.meetup-form > button {
grid-column: controls;
grid-row: auto;
border: none;
padding: 1em;
}
.form-button{
    color: rgb(34, 30, 30);
    cursor: pointer;
    border-radius: 2px ;
    font-weight: bold;
    width: 120px;
    justify-self: end; 
    background-color: bisque;
}
.form-button:hover{
    background-color: #b478b9;
}
</style>