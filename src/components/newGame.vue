<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout row align-center>
        <v-flex xs12 sm6 offset-sm3 mt-3>
        <h1>Create a New Game</h1>
        <form @submit.prevent="addGame(gameDate, who)">
          <v-layout column>
            <v-flex>
              <v-menu
                ref="menu1"
                :close-on-content-click="false"
                v-model="menu1"
                :nudge-right="40"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                max-width="290px"
                min-width="290px"
              >
                <v-text-field
                  slot="activator"
                  v-model="dateFormatted"
                  label="Date"
                  hint="MM/DD/YYYY format"
                  persistent-hint
                  prepend-icon="event"
                  @blur="gameDate = parseDate(dateFormatted)"
                >
              </v-text-field>
              <v-date-picker v-model="gameDate" no-title @input="menu1 = false"></v-date-picker>
            </v-menu>
            </v-flex>
            <v-flex>
              <v-combobox
              v-model="who"
              :items="players"
              label="Who is Playing"
              >
              </v-combobox>
            </v-flex>
            <v-flex class="text-xs-center" mt-5>
              <v-btn color="primary" type="submit">Create New Game</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  import { db } from '../main'

  export default {
    data: () => ({
      players: ['Nathan', 'Natalie'],
      gameDate: null,
      who: null,
      dateFormatted: null,
      menu1: false
    }),

    computed: {
      computedDateFormatted () {
        return this.formatDate(this.gameDate)
      }
    },

    watch: {
      gameDate (val) {
        this.dateFormatted = this.formatDate(this.gameDate)
      }
    },

    methods: {
      addGame: function (gameDate, who) {
        const createdAt = new Date()
        const uuid = this.generateUUID()
        const gameYear = ''
        const playTime = ''
        const scoreThem = 0
        const scoreUs = 0
        const shotsBlocked = 0
        const shotsMissed = 0
        db.collection('goals').add({ gameDate, who, createdAt, uuid, gameYear, playTime, scoreThem, scoreUs, shotsBlocked, shotsMissed })
          .then((docRef) => {
            console.log('Document written with ID: ', docRef.id)
            // const docID = docRef.id
            this.$router.push({name: 'Game In-Progress', params: { id: uuid }})
          })
          .catch((error) => {
            console.error('Error adding document: ', error)
          })
      },

      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
      generateUUID () {
        let d = new Date().getTime()
        let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          let r = (d + Math.random() * 16) % 16 | 0
          d = Math.floor(d / 16)
          return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
        })
        return uuid
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
