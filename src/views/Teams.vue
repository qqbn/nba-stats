<template>
  <div class="teams-container">
    <div class="west-conference">
      <h2 class="conference-title">Western Conference</h2>
      <div class="conference-teams">
        <ul>
          <li v-for="team in westTeams" :key="team.id"> <router-link :to="{ name: 'Team', params: { id: team.id }}"> {{team.full_name}} </router-link></li>
        </ul>
      </div>
    </div>
    <div class="east-conference">
      <h2 class="conference-title">Eastern Conference</h2>
      <div class="conference-teams">
        <ul>
         <li v-for="team in eastTeams" :key="team.id"> <router-link :to="{ name: 'Team', params: { id: team.id }}">{{team.full_name}} </router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      eastTeams: [],
      westTeams: [],
    }
  },
  methods:{
     getData(data){
        data.data.forEach(element => {
          if(element.conference==="West"){
            this.westTeams.push(element);
          }
          else{
            this.eastTeams.push(element);
          }
        });
        //console.log(this.westTeams);
        //console.log(this.eastTeams);
      }
  },
  mounted(){
    fetch('https://www.balldontlie.io/api/v1/teams')
            .then(res => res.json())
            .then(data => this.getData(data))
            .catch(err => console.log(err.message));
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;1,400&display=swap');
.teams-container{
  height: 88vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.conference-title{
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  text-shadow: 0px 0px 10px #3F3D56;
  color: white;
}

.west-conference{
height: 600px;
width: 400px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #D28508;
border-radius: 10px;
box-shadow: 0px 5px 10px black;
}
.east-conference{
height: 600px;
width: 400px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #D28508;
border-radius: 10px;
box-shadow: 0px 5px 10px black;
}
.east-conference:hover .conference-title{
    font-size: 32px;
    color: #3F3D56;
}
.west-conference:hover .conference-title{
    font-size: 32px;
    color: #3F3D56;
}
.conference-teams{
  width: 100%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
}
.conference-teams ul{
  width: 100%;
  height: 100%;
  list-style-type: none;
  text-decoration: none;
}
.conference-teams ul li{
  width: auto;
  height: 34px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: white;
  text-decoration: underline #3F3D56;
}
.conference-teams a{
  text-decoration: underline #3F3D56;
  cursor: pointer;
  color: white;

}
.conference-teams a:hover{
  text-decoration: none;
  color: #3F3D56;
  font-size: 20px;
}
@media only screen and (max-width: 850px){
.west-conference{
    width: 50%;
    border-radius: 0;
    box-shadow: none;
    border-right: 5px solid #3F3D56;
    box-shadow: 5px 5px 10px #3F3D56;
  }
  .east-conference{
    width: 50%;
    border-radius: 0;
    box-shadow: none;
    border-left: 5px solid #3F3D56;
    box-shadow: 5px 5px 10px #3F3D56;
  }
}
@media only screen and (max-width: 500px){
  .east-conference ul li {
    font-size: 16px;
  }
  .west-conference ul li {
    font-size: 16px;
  }
  .conference-teams a:hover{
    font-size: 16px;
  }
  .conference-title{
    font-size: 24px;
  }
    .east-conference:hover .conference-title{
      font-size: 24px;
      color: #3F3D56;
  }
  .west-conference:hover .conference-title{
      font-size: 24px;
      color: #3F3D56;
  }
  .west-conference ul li:hover{
    font-size: 16px;
  }
  .east-conference ul li:hover{
    font-size: 16px;
  }
}
@media only screen and (max-width: 430px){
   .west-conference ul li {
    font-size: 12px;
  }
  .east-conference ul li {
    font-size: 12px;
  }
   .conference-teams a:hover{
    font-size: 12px;
  }
  .conference-title{
    font-size: 22px;
  }
  .west-conference ul li:hover{
    font-size: 12px;
  }
  .east-conference ul li:hover{
    font-size: 12px;
  }
}

</style>