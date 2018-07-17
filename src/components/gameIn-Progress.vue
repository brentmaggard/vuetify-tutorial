<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3 mt-3>
          <h1>Game Date: {{goals.gameDate}}</h1>
        </v-flex>
        <v-flex xs6>
          <p>{{blockedGoals}}</p>
          <button v-on:click="addToBlocked">Blocked Shots</button>
        </v-flex>
        <v-flex xs6>
          <p>{{missedGoals}}</p>
          <button v-on:click="addToMissed">Missed Shots</button>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>


<script>
import { db } from '../main'

export default {
  name: 'gameInProgress',
  data () {
    return {
      goals: [],
      gameDate: null
    }
  },
  beforeRouteEnter (to, from, next) {
    db.collection('goals').where('uuid', '==', to.params.id).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        next(vm => {
          vm.gamDate = doc.data().firstname
        })
      })
    })
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      db.collection('goals').where('uuid', '==', this.$route.params.id).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, ' => ', doc.data())
          this.gameDate = doc.data().gameDate
        })
      })
    },
    addToMissed () {
      this.missedGoals += 1
    },
    addToBlocked () {
      this.blockedGoals += 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
