<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout row align-center>
        <v-flex xs12 sm6 offset-sm3 mt-3>
        <v-btn block color="success">
          <router-link tag="button" class="myClass" id="button" to="/newgame">New Game <v-icon right>add_circle_outline</v-icon></router-link>
        </v-btn>
        <v-btn block color="success">
          <router-link tag="button" class="myClass" id="button" to="/stats">Stats <v-icon right>list</v-icon></router-link>
        </v-btn>

      </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      players: ['Nathan', 'Natalie']
    })
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
