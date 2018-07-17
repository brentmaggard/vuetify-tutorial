<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout row align-center>
        <v-flex xs12 sm6 offset-sm3 mt-3>
        <h1>Create a New Game</h1>
        <form @submit="addGame(gameDate, who)">
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
      addGame (gameDate, who) {
        console.log(gameDate)
        console.log(who)
        const createdAt = new Date()
        db.collection('goals').add({ gameDate, who, createdAt })

          .then(function (docRef) {
            console.log('Document written with ID: ', docRef.id)
            this.$router.push('/gameIn-Progress/' + docRef.id)
          })

          .catch(function (error) {
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
