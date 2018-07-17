<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap>
boom
        <v-flex grid-list-lg>
          <v-card xs12 v-for="(goal, idx) in goals" :key="idx">
            <v-card-title primary-title >
              <div>
                <h3 class="headline mb-0"><strong>Game On: </strong>{{ goal.gameDate }} </h3>
                <div>
                  <p><strong>Shots Blocked: </strong>{{goal.shotsBlocked}} -- <strong>Shots Missed: </strong>{{goal.shotsMissed}}</p>
                  <p><strong>Play Time: </strong>{{ goal.playTime}}</p>
                  <p><strong>Score: </strong>{{goal.scoreUs}} <strong>to </strong>{{goal.scoreThem}}</p>
                </div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="orange">Details</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>

      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import { db } from '../main'
export default {
  name: 'HomeView',
  firestore () {
    return {
      goals: db.collection('goals').orderBy('gameDate')
    }
  },
  data () {
    return {
      goals: []
    }
  }
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
