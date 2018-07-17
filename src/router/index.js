import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import gameInProgress from '@/components/gameIn-Progress'
import NewGame from '@/components/newGame'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'HomeMain',
      component: Home
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/game-inprogress',
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
