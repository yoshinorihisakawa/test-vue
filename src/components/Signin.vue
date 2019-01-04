<template>
    <div class="signin">
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar color="#EEEEEE">
                  <v-toolbar-title>Login form</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field prepend-icon="email" name="email" label="Email" type="text" v-model="email"></v-text-field>
                    <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" v-model="password"></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="#EEEEEE" @click="signIn">Sign in</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      <v-btn  @click="authGoogle" outline midium fab color="black">
        <i class="fab fa-google fa-2x"></i>
      </v-btn>
      <v-btn  @click="authFaceBook" outline midium fab color="black">
        <i class="fab fa-facebook fa-2x"></i>
      </v-btn>
      <v-btn  @click="authTwitter" outline midium fab color="black">
        <i class="fab fa-twitter-square fa-2x"></i>
      </v-btn>
      <p>You don't have an account?
        <router-link to="/signup">create account now!!</router-link>
      </p>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Signin',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(res => {
        res.user.getIdToken().then(idToken => {
          localStorage.setItem('jwt', idToken.toString())
        })
        this.$router.push('/')
      }, err => {
        alert(err.message)
      })
    },
    authGoogle: function () {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider).then(res => {
        res.user.getIdToken().then(idToken => {
          localStorage.setItem('jwt', idToken.toString())
        })
        this.$router.push('/')
      }, err => {
        alert(err.message)
      })
    },
    authTwitter: function () {
      const provider = new firebase.auth.TwitterAuthProvider()
      firebase.auth().signInWithPopup(provider).then(res => {
        res.user.getIdToken().then(idToken => {
          localStorage.setItem('jwt', idToken.toString())
        })
        this.$router.push('/')
      }, err => {
        alert(err.message)
      })
    },
    authFaceBook: function () {
      const provider = new firebase.auth.FacebookAuthProvider()
      firebase.auth().signInWithPopup(provider).then(res => {
        res.user.getIdToken().then(idToken => {
          localStorage.setItem('jwt', idToken.toString())
        })
        this.$router.push('/')
      }, err => {
        alert(err.message)
      })
    }
  }
}
</script>
