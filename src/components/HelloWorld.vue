<template>
  <div class='hello'>
    <div class="text-xs-center">
      <v-badge color="purple" left overlap >
        <v-icon slot="badge" dark small >done</v-icon>
        <v-icon color="grey lighten-1" large > account_circle </v-icon>
      </v-badge>
    </div>
    <h1>{{ name }}</h1>
    <v-btn @click="signOut" outline color="indigo">Sign out</v-btn>
    <div class="text-xs-center">
      <v-btn @click="apiPublic" outline color="indigo">public</v-btn>
      <v-btn @click="apiPrivate" outline color="indigo">private</v-btn>
    </div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import axios from 'axios'
import firebase from 'firebase'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: firebase.auth().currentUser.email
    }
  },
  methods: {
    signOut: function () {
      firebase.auth().signOut().then(() => {
        localStorage.removeItem('jwt')
        this.$router.push('/signin')
      })
    },
    apiPublic: async function () {
      let res = await axios.get('http://localhost:8000/public')
      this.msg = res.data
    },
    apiPrivate: async function () {
      let res = await axios.get('http://localhost:8000/private', {
        headers: {'Authorization': `Bearer ${localStorage.getItem('jwt')}`}
      })
      this.msg = res.data
    }
  }
}
</script>
