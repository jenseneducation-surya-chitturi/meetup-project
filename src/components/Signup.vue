<template>
  <form  @submit.prevent="handleSubmit" action="#" method="post">
  <h2>Sign Up</h2>
  	<p>
			<label for="Name" class="floatLabel">Name</label>
			<input id="Name" name="Name" type="text"  v-model="userName" data-userName >
		</p>
		<p>
			<label for="Email" class="floatLabel">Email</label>
			<input id="Email" name="Email" type="text"  v-model="userEmail" data-userEmail >
		</p>
		<p>
			<label for="password" class="floatLabel">Password</label>
			<input id="password" name="password" type="password"  >
		</p>
		<p>
			<label for="confirm_password" class="floatLabel">Confirm Password</label>
			<input id="confirm_password" name="confirm_password" type="password">
		</p>
		<p>
			<input type="submit" value="Register" id="submit">
		</p>
    <div class="msg" v-if="submitted">Thank you for joining us, {{ userName }}</div>
  </div>
	</form>
</template>

<script>
export default {
  name: "Signup",

  data() {
    return {
      userName: "",
      submitted: false,
      userEmail: "",
      submited: false,
    };
  },

  methods: {
    handleSubmit() {
      this.submitted = true;
    },
  },
};
</script>

<style scoped>

form {
  background: #fff;
  padding: 4em 4em 2em;
  max-width: 400px;
  margin: 50px auto 0;
  box-shadow: 0 0 1em #222;
  border-radius: 2px;
}
  h2 {
    margin:0 0 50px 0;
    padding:10px;
    text-align:center;
    font-size:30px;
    color:darken(#e5e5e5, 50%);
    border-bottom:solid 1px #e5e5e5;
  }
  p {
    margin: 0 0 3em 0;
    position: relative;
  }
  input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    outline: none;
    margin:0;
  }
  input[type="text"],
  input[type="password"] {
    background: #fff;
    border: 1px solid #dbdbdb;
    font-size: 1.2em;
    padding: .8em .5em;
    border-radius: 2px;
  }
  input[type="text"]:focus,
  input[type="password"]:focus {
    background: #fff
  }
  input[type="submit"] {
    background: rgba(148,186,101,0.7);
    box-shadow: 0 3px 0 0 darken(rgba(148,186,101,0.7), 10%);
    border-radius: 2px;
    border: none;
    color: #fff;
    cursor: pointer;
    display: block;
    font-size: 2em;
    margin: 1em 0 0;
    outline: none;
    padding: .4em 0;
    text-shadow: 0 1px #68B25B;
  }
  input[type="submit"]:hover {
    background: rgba(148,175,101,1);
    text-shadow:0 1px 3px darken(rgba(148,186,101,0.7), 30%);
  }
  label{
    position: absolute;
    left: 8px;
    top: 12px;
    color: #999;
    font-size: 16px;
    display: inline-block;
    padding: 4px 10px;
    font-weight: 400;
    background-color: rgba(255,255,255,0);
  }
    .floatLabel{
      top: -11px;
      background-color: rgba(255,255,255,0.8);
      font-size: 14px;
    }
</style>