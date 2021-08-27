import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Players from '../views/Players.vue'
import Teams from '../views/Teams.vue'
import Team from '../views/Team.vue'
import Player from '../views/Player.vue'
import GameScore from '../views/GameScore.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/teams',
    name: 'Teams',
    component: Teams
  },
  {
    path: '/players',
    name: 'Players',
    component: Players
  },
  {
    path: '/teams/:id',
    name: 'Team',
    component: Team,
    props: true,
  },
  {
    path: '/player/:id',
    name: 'Player',
    component: Player,
    props: true
  },
  {
    path: '/gameScore/:id',
    name: 'GameScore',
    component: GameScore,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
