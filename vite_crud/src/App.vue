

<template>
  <div id='app'>
    <div id="'nav'">
      <router-link to="/users">List of Users</router-link> | 
      <router-link to="/home">Home</router-link> | 
      <router-link to="/about">About</router-link> | 
      <button class="btn btn-success btn-block full-width" @click="logout">Logout</button>
    </div>
    <router-view/>
  </div>
</template>
<script>
import {getAuth, signOut} from 'firebase/auth'
export default {
  name: 'App',
  methods: {
    logout (){
      const auth = getAuth()
      signOut(auth)
      .then(()=>{
        this.$router.replace('/signin')
      })
      .catch((error)=>{
        alert(error.message)
      })
    }
  },

}
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
