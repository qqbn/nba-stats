<template>
  <div id="nav">
    <div class="header-box">
      <h1>NBAstats</h1>
    </div>
    <div class="links-box">
      <router-link class="link" :to="{ name: 'Home'}">Home</router-link>
      <router-link class="link" :to="{ name: 'Teams'}">Teams</router-link>
      <router-link class="link" :to="{ name: 'Players'}">Players</router-link>
    </div>
    <div class="img-box">
      <img class="nba-logo" src="./assets/nba-logo.svg" alt="nba-logo">
    </div>
  </div>
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"> </component>
    </transition>
  </router-view>


</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;1,400&display=swap');
*{
  box-sizing: border-box;
  padding: 0%;
  margin: 0%;
}
#app {
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  box-sizing: border-box;
  height: 100vh;
}

#nav{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 12vh;
  padding: 20px;
  color: white;
}

#nav a {
  font-weight: bold;
  color: #D28508;
  text-decoration: underline #D28508;
  font-size: 30px;
}

#nav a.router-link-exact-active {
  color: white;
}
.nba-logo{
  height: 150px;
  width: 150px;
}
.header-box{
  height: 10vh;
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.links-box{
  width: 50%;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.img-box{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 25%;
}
h1{
  font-family: 'Montserrat', sans-serif;
  font-size: 48px;
  text-decoration: underline #D28508;
}
/* route transition*/
.route-enter-from{
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active{
  transition: all 0.4s ease-out;
}
.route-leave-to{
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active{
  transition: all 0.4s ease-in;
}
@media only screen and (max-width: 980px){
  h1{
    font-size: 38px;
  }
  #nav a{
    font-size: 28px;
  }
}

@media only screen and (max-width: 820px){
  h1{
    font-size: 32px;
  }
  #nav a{
    font-size: 24px;
  }
  .nba-logo{
    height: 130px;
    width: 130px;
  }
}
@media only screen and (max-width: 680px){
  h1{
    font-size: 28px;
  }
  #nav a{
    font-size: 22px;
  }
  .nba-logo{
    height: 130px;
    width: 130px;
  }
}
@media only screen and (max-width: 580px){
  h1{
    font-size: 24px;
  }
  #nav a{
    font-size: 18px;
  }
  .nba-logo{
    height: 100px;
    width: 100px;
  }
}
@media only screen and (max-width: 580px){
  .img-box{
    display: none;
    width: 0;
  }
  #nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .header-box{
    width: 40%;
  }
  .links-box{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60%;
  }
}
@media only screen and (max-width: 400px){
  h1{
    font-size: 22px;
  }
  #nav a{
    font-size: 16px;
  }
}
</style>
