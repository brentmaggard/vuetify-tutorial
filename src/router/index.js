import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import gameInProgress from '@/components/gameIn-Progress'
import NewGame from '@/components/newGame'
import Stats from '@/components/stats'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/stats',
      name: 'Stats',
      component: Stats
    },
    {
      path: '/game-inprogress/:id',
      name: 'Game In-Progress',
      component: gameInProgress
    },
    {
      path: '/newgame',
      name: 'New Game',
      component: NewGame
    }
  ]
})
