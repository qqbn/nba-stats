<template>
  <div class="team-container">
    <div class="logo-container">
      <img :src="require(`@/assets/logos/${id}.png`)" alt="test">
    </div>
    <div class="info-container">
      <div class="info-header">
        <p><span>Team:</span> {{ this.teamName}}</p>
      </div>
      <div class="info-content">
        <div class="info-row">
          <p><span>City:</span> {{this.teamCity}}</p>
        </div>
        <div class="info-row">
          <p><span>Conference:</span> {{this.teamConference}}</p>
        </div>
        <div class="info-row">
          <p><span>Division:</span> {{this.teamDivision}}</p>
        </div>
        <div class="info-row">
          <p><span>Abbreviation:</span> {{this.teamAbbreviation}}</p>
        </div>
      </div>
    </div>
    <div class="games-container">
      <h5>Last 5 games</h5>
      <ul>
        <router-link :to="{name: 'GameScore'}"> <li><span class="team">DEN</span> 101 - SAC 102 <span class="win">W</span> <span class="lose">L</span></li> </router-link>
        <li><span class="team">DEN</span> 101 - SAC 102 <span class="win">W</span> <span class="lose">L</span></li>
        <li><span class="team">DEN</span> 101 - SAC 102 <span class="win">W</span> <span class="lose">L</span></li>
        <li><span class="team">DEN</span> 101 - SAC 102 <span class="win">W</span> <span class="lose">L</span></li>
        <li><span class="team">DEN</span> 101 - SAC 102 <span class="win">W</span> <span class="lose">L</span></li>
      </ul>

      <p class="more-games">To see stats from the game, tap on it!</p>

    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data(){
    return{
      teamId: this.$route.params.id,
      teamName: null,
      teamCity: null,
      teamConference: null,
      teamDivision: null,
      teamAbbreviation: null,
    }
  },
  methods:{
    getTeamData(data){
      this.teamName=data.full_name;
      this.teamCity=data.city;
      this.teamConference=data.conference;
      this.teamDivision=data.division;
      this.teamAbbreviation=data.abbreviation;
    },
  },
  mounted(){
    console.log(this.teamId);
    fetch(`https://www.balldontlie.io/api/v1/teams/${this.teamId}`)
            .then(res => res.json())
            .then(data => this.getTeamData(data))
            .catch(err => console.log(err.message));
  }
}
</script>

<style>
.team-container{
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.logo-container{
  height: 400px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.logo-container img{
  height: 300px;
  width: 300px;
}
.info-container{
  height: 400px;
  width: 550px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

}
.info-header{
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;

}
.info-header p{
  font-size: 32px;
  color: white;
}
.info-header span{
  color: white;
  text-decoration: underline #D28508;
}
.info-content{
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
.info-row{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 26px;
  font-weight: bold;
}
.info-row p{
  color: white;
}
.info-row span{
  color: white;
  text-decoration: underline #D28508;
}
.games-container{
  width: 300px;
  height: 500px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
.games-container ul{
  list-style-type: none;
}
.games-container ul li{
  padding: 25px;
  color: white;
}
.win{
  font-weight: bold;
  color: green;
  visibility: hidden;
}
.lose{
  font-weight: bold;
  color: red;
}
.team{
  font-weight: bold;
  color: #D28508;
}
h5{
  font-size: 24px;
  color: white;
  text-decoration: underline #D28508;
}
.more-games{
color: white;
text-decoration: underline #D28508;
cursor: pointer;
}
.games-container a{
  text-decoration: none;
  cursor: pointer;
}
@media only screen and (max-width: 1250px){
.logo-container{
  width: 33%;
}
.logo-container img{
  height: 250px;
  width: 250px;
}
.info-container{
  width: 33%;
}
.games-container{
  width: 33%;
}
.info-header p{
  font-size: 28px;
}
.info-row p{
  font-size: 22px;
}

}
@media only screen and (max-width: 1200px){
  .info-header p{
  font-size: 26px;
}
.info-row p{
  font-size: 18px;
}
.games-container{
  width: 25%;
}
.games-container ul li{
  font-size: 14px;
}
.info-container{
  width: 41%;
}
}
@media only screen and (max-width: 960px){
  .games-container{
  width: 35%;
}
.info-container{
  width: 30%;

}
.logo-container{
  width: 35%;
}
.info-header{
  display: flex;
  justify-content: center;
  align-items: center;

}
.info-header p{
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
font-size: 22px;
padding: 0;
}
.info-row{
  display: flex;
  justify-content: center;
  align-items: center;
}
.info-row p{
  display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
}
.logo-container img{
  width: 250px;
  height: 250px;
}
}
@media only screen and (max-width: 680px){
  .team-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: unset;
    top: 0%;
    transform: translateY(0%);
  }
  .logo-container{
    width: 100%;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.logo-container img{
  width: 200px;
  height: 200px;
}
.info-container{
  height: 58vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.info-header{
  width: 100%;
  height: 20%;
  justify-content: center;
}
.info-header p{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-size: 24px;
}
.info-header span{
  padding: 20px;
}
.info-content{
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
.info-row{
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
.info-row p{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-size: 24px;
}
.info-row span{
  margin-right: 20px;
}
.games-container{
  height: 100%;
  width: 100%;
  background: #D28508;
  padding: 20px 0px;
}
.games-container ul li{
  font-size: 18px;
  color: white;
}
.team{
  color: #3F3D56;
}
h5{
  font-size: 28px;
  text-decoration: underline #3F3D56;
}
.more-games{
  text-decoration: underline #3F3D56;
}
}

</style>