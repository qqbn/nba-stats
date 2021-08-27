<template>
  <div class="player-container">
      <div class="left-stats">
          <div class="left-stats-header">
              <p> <span>Player:</span> {{this.playerFirstName}} {{this.playerLastName}} </p>
          </div>
          <div class="left-stats-content">
              <div class="left-single-row">
                  <p><span>Team:</span> {{this.playerTeam}}</p>
              </div>
              <div class="left-single-row">
                  <p><span class="span">Position:</span> <span v-show="playerPosition">{{this.playerPosition}}</span> <span v-show="!playerPosition"> No data</span></p>
              </div>
              <div class="left-single-row">
                  <p><span class="span">Heigth:</span> <span v-show="playerHeightF">{{this.playerHeightF}}'{{this.playerHeightI}}</span> <span v-show="!playerHeightF"> No data</span></p>
              </div>
              <div class="left-single-row">
                  <p><span class="span">Weight:</span> <span v-show="playerWeight"> {{this.playerWeight}} pounds</span> <span v-show="!playerWeight">No data</span></p>
              </div>
          </div>
      </div>
      <div class="right-stats">
          <div class="right-stats-header">
              <p>Averages of <span>2020</span> season</p>
          </div>
          <ul class="right-stats-content">
              <li class="right-stats-row" v-for="stat  in testArr" :key="stat.id" v-show="played">
                  <div class="row-left">
                      <p>{{Object.keys(stat)[0]}}: <span>{{Object.values(stat)[0]}} </span></p>
                  </div>
                  <div class="row-right">
                      <p>{{Object.keys(stat)[1]}}: <span> {{Object.values(stat)[1]}}</span></p>
                  </div>
              </li>
              <h3 v-show="notPlayed">Player has not played 2020 season</h3>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        playerId: this.$route.params.id,
        playerFirstName: null,
        playerLastName: null,
        playerTeam: null,
        playerPosition: null,
        playerWeight: null,
        playerHeightF: null,
        playerHeightI: null,
        playerAvg:[],
        testArr:[],
        played: false,
        notPlayed: true,
    }
},
methods:{
    getPlayerInfo(data){
        //console.log(data);
        this.playerFirstName=data.first_name;
        this.playerLastName=data.last_name;
        this.playerTeam=data.team.full_name;
        this.playerPosition=data.position;
        this.playerWeight=data.weight_pounds;
        this.playerHeightF=data.height_feet;
        this.playerHeightI=data.height_inches;
    },

    getPlayerAverages(data){
        console.log(data);
        if(data.data.length>0){
            this.notPlayed=false;
            const test2=data.data[0];
            const {season,player_id, ...newObj} = test2;

            Object.entries(newObj).forEach(element =>{
                var key=element[0];
                key=this.firstNameCapital(key);
                var testObj={};
                testObj[key]=element[1];
                this.playerAvg.push(testObj)
            })

            for(let i=0;i<20;i+=2){
                let merged={...this.playerAvg[i], ...this.playerAvg[i+1]}
                this.testArr.push(merged);
            }

            console.log(this.testArr);
            if(this.testArr.length>0){
                this.played=true;
            }
        }
    },
    firstNameCapital(string){
        let test=string.charAt(0).toUpperCase() + string.slice(1);
        test=test.replace(/_/g, ' ');
        test=test.replace(/pct/g, '%');
        return test;
  },
},
    mounted(){

        fetch(`https://www.balldontlie.io/api/v1/players/${this.playerId}`)
                .then(res => res.json())
                .then(data => this.getPlayerInfo(data))
                .catch(err => console.log(err.message));

        fetch(`https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=${this.playerId}`)
                .then(res => res.json())
                .then(data => this.getPlayerAverages(data))
                .catch(err => console.log(err.message));
    }
}
</script>

<style>
h3{
    color: #3F3D56;
}
.player-container{
    width: 100%;
    height: 88vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.left-stats{
    width: 600px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}
.right-stats{
    width: 700px;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.left-stats-header{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 10%;
    background-color: #D28508;
}
.left-stats-header p{
    color: white;
    font-size: 32px;
    font-weight: bold;
    color: #3F3D56;
    padding: 20px;
}
.left-stats-header p span{
    text-decoration: underline #D28508;
    color: white;
    font-weight: bold;
    color: white;
}
.player-name{
    text-decoration: none;
}
.left-stats-content{
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
}
.left-single-row{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 50px;
    font-size: 28px;
    color: white;
    font-weight: bold;
}
.left-single-row p{
    padding: 20px;
}
.span{
    color: white;
    text-decoration: underline #D28508;
}
.right-stats-header{
    width: 100%;
    height: 80px;
    background-color: #D28508;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    font-weight: bold;
    color: white;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}
.right-stats-header span{
    color: #3F3D56;
}
.right-stats-content{
    width: 100%;
    height: 520px;
    background: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
}
.right-stats-row{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    border-bottom: 2px solid #3F3D56;
    border-top: 2px solid #3F3D56;
}
.row-right{
    height: 100%;
    width: 50%;
    color: #3F3D56;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: bold;
    font-size: 28px;
}
.row-right span{
    font-weight: normal;
}
.row-left{
    height: 100%;
    width: 50%;
    color: #3F3D56;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    font-weight: bold;
    font-size: 28px;
}
.row-left span{
    font-weight: normal;
}
.row-left p{
    padding: 20px;
}
.row-right p{
    padding: 20px;
}
@media only screen and (max-width: 1120px){
    .left-stats-header{
       width: 100%;
    }
    .left-stats-header p{
        font-size: 28px;
    }
   .row-left p{
   font-size: 22px;
    }
.row-right p{
    font-size: 22px;
}
.left-single-row{
    font-size: 24px;
}

}
@media only screen and (max-width: 960px){
    .left-stats-header{
        width: 400px;
    }
    .left-stats-header p{
        font-size: 26px;
    }
    .left-single-row{
        width: 400px;
        font-size: 22px;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .left-stats{
         display: flex;
        justify-content: space-around;
        align-items: flex-start;
        flex-direction: column;
    }
    .left-stats-content{
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        flex-direction: column;
    }
    .right-stats-header{
        font-size: 28px;
    }
     .row-left p{
        font-size: 20px;
    }
    .row-right p{
        font-size: 20px;
    }
}
@media only screen and (max-width: 880px){
.left-stats-header{
        width: 350px;
    }
    .left-stats-header p{
        font-size: 24px;
    }
    .left-single-row{
        width: 350px;
        font-size: 20px;
    }
     .row-left p{
        font-size: 18px;
    }
    .row-right p{
        font-size: 18px;
    }
}
@media only screen and (max-width: 730px){
    .left-stats-header{
        width: 350px;
    }
    .left-stats-header p{
        font-size: 22px;
    }
    .left-single-row{
        width: 350px;
        font-size: 18px;
    }
     .row-left p{
        font-size: 16px;
        padding: 0;
        margin-left: 10px;
    }
    .row-right p{
        font-size: 16px;
        padding: 0;
        margin-left: 10px;
    }
    .right-stats-header{
        font-size: 24px;
    }
    .right-stats-content{
        border-radius: 0;
    }
}
@media only screen and (max-width: 670px){
    .player-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 130vh;
}
.left-stats{
    height: 50vh;
    width: 100%;
}
.right-stats{
    height: 80vh;
    width: 100%;
}
 .left-stats-header{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .left-single-row{
        width: 100%;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .right-stats-header{
        border-radius: 0;
        height: 10%;
    }
    .right-stats-content{
        height: 90%;
    }
}
</style>