<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3 mt-3>
          <h1>Game Date: [date of game]</h1>
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
export default {
  name: 'gameInProgress',
  data () {
    return {
      missedGoals: 0,
      blockedGoals: 0
    }
  },
  methods: {
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
