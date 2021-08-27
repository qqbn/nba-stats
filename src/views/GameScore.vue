<template>
    <div class="gamescore-all">
    <div class="gamescore-container">
        <div class="gamescore-header">
            <h6>{{this.homeTeam}} {{this.homeTeamScore}} - {{this.visitorTeam}} {{this.visitorTeamScore}}</h6>
            <p>{{this.gameDate}}</p>
        </div>
        <div class="gamescore-content">
            <div class="teamscore-box">
                <div class="teamscore-header">
                    <div class="teamscore-name">
                        <p>Name</p>
                    </div>
                    <div class="teamscore-points">
                        PTS
                    </div>
                    <div class="teamscore-assists">
                        AST
                    </div>
                    <div class="teamscore-blocks">
                        BLK
                    </div>
                </div>
                <div class="teamscore-content">
                    <ul class="players-stats">
                        <li class="li" @click="openBox(homePlayers[n].player.id)" v-for="(player,n) in homePlayers" :key="player.id"><div class="player-stats-name">{{player.player.first_name}} {{player.player.last_name}}</div> <div class="player-stats-points">{{player.pts}}</div> <div class="player-stats-assists">{{player.ast}}</div> <div class="player-stats-blocks">{{player.blk}}</div></li>
                    </ul>
                </div>
            </div>
            <div class="teamscore-box">
                <div class="teamscore-header">
                    <div class="teamscore-name">
                        <p>Name</p>
                    </div>
                    <div class="teamscore-points">
                        PTS
                    </div>
                    <div class="teamscore-assists">
                        AST
                    </div>
                    <div class="teamscore-blocks">
                        BLK
                    </div>
                </div>
                <div class="teamscore-content">
                    <ul class="players-stats">
                        <li class="li" @click="openBox(visitorPlayers[n].player.id)" v-for="(player,n) in visitorPlayers" :key="player.id"><div class="player-stats-name">{{player.player.first_name}} {{player.player.last_name}}</div> <div class="player-stats-points">{{player.pts}}</div> <div class="player-stats-assists">{{player.ast}}</div> <div class="player-stats-blocks">{{player.blk}}</div></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="small-box">
        <div class="small-box-header">
            <h6 class="small-box-h">{{this.playerName}}  {{this.playerLast}}</h6>
        </div>
        <div class="small-box-minutes">
            <h6 class="minutes">{{this.playerMin}}</h6>
        </div>
        <div class="small-box-content">
            <div class="small-box-row">
                <div class="small-box-left-row">Points: <span> {{this.playerPts}} </span></div>
                <div class="small-box-center-row">Asists: <span> {{this.playerAst}} </span></div>
                <div class="small-box-right-row">Blocks: <span> {{this.playerBlk}} </span></div>
            </div>
            <div class="small-box-row">
                <div class="small-box-left-row">Rebounds: <span> {{this.playerReb}} </span></div>
                <div class="small-box-center-row">DRebeounds: <span> {{this.playerDReb}} </span></div>
                <div class="small-box-right-row">ORebounds: <span> {{this.playerOReb}} </span></div>
            </div>
            <div class="small-box-row">
                <div class="small-box-left-row">FG%: <span> {{this.playerFGpct}} </span></div>
                <div class="small-box-center-row">FGA: <span> {{this.playerFGA}} </span></div>
                <div class="small-box-right-row">FGM: <span> {{this.playerFGM}} </span></div>
            </div>
            <div class="small-box-row">
                <div class="small-box-left-row">FG3%: <span> {{this.playerFG3pct}} </span></div>
                <div class="small-box-center-row">FG3A: <span> {{this.playerFG3A}} </span></div>
                <div class="small-box-right-row">FG3M: <span> {{this.playerFG3M}} </span></div>
            </div>
            <div class="small-box-row">
                <div class="small-box-left-row">FT%: <span> {{this.playerFTpct}} </span></div>
                <div class="small-box-center-row">FTA: <span> {{this.playerFTA}} </span></div>
                <div class="small-box-right-row">FTM: <span> {{this.playerFTM}} </span></div>
            </div>
            <div class="small-box-row">
                <div class="small-box-left-row">PF: <span> {{this.playerPF}} </span></div>
                <div class="small-box-center-row">Turnovers: <span> {{this.playerTr}} </span></div>
                <div class="small-box-right-row">Steals: <span> {{this.playerStl}} </span></div>
            </div>
        </div>
        <div class="small-box-footer">
            <button class="close-btn" @click="closeBox()">CLOSE</button>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data(){
        return{
            isOpened: false,
            gameId: this.$route.params.id,
            homeTeam:null,
            visitorTeam: null,
            homeTeamScore: null,
            visitorTeamScore: null,
            gameDate: null,
            homeTeamId: null,
            visitorTeamId: null,
            homePlayers:[],
            visitorPlayers:[],
            zeroPlayers: [],
            singlePlayerStats:[],
            playerId: null,
            playerPts: null,
            playerBlk: null,
            playerAst: null,
            playerReb: null,
            playerOReb: null,
            playerDReb: null,
            playerFGpct: null,
            playerFGA: null,
            playerFGM: null,
            playerFG3pct: null,
            playerFG3A: null,
            playerFG3M: null,
            playerFTpct: null,
            playerFTA: null,
            playerFTM: null,
            playerPF: null,
            playerTr: null,
            playerStl: null,
            playerMin: null,
            playerName: null,
            playerLast: null,
        }
    },
    methods:{
        openBox(n){
            if(!this.isOpened){
                document.querySelector('.small-box').style.visibility="visible";
                this.isOpened=true;
            }
            this.playerId=n;
            console.log(this.playerId);
            fetch(`https://www.balldontlie.io/api/v1/stats/?game_ids[]=${this.gameId}&player_ids[]=${this.playerId}`)
                .then(res => res.json())
                .then(data => this.getSinglePlayerStats(data))
                .catch(err => console.log(err.message));
        },
        closeBox(){
            this.isOpened=false;
            document.querySelector('.small-box').style.visibility="hidden";
        },
        getGameStats(data){
            this.homeTeam=data.home_team.abbreviation;
            this.visitorTeam=data.visitor_team.abbreviation;
            this.homeTeamScore=data.home_team_score;
            this.visitorTeamScore=data.visitor_team_score;
            this.gameDate=data.date;
            this.homeTeamId=data.home_team.id;
            this.visitorTeamId=data.visitor_team.id;
        },
        getPlayersStats(data){
            //console.log(data.data);
            data.data.forEach(element => {
                if(element.team.id==this.homeTeamId){
                    if(element.pts==0 && element.ast==0 && element.blk==0 && element.stl==0 && element.reb==0){
                        this.zeroPlayers.push(element);
                    }else{
                        this.homePlayers.push(element);
                    }
                }else if(element.team.id==this.visitorTeamId){
                    if(element.pts==0 && element.ast==0 && element.blk==0){
                        this.zeroPlayers.push(element);
                    }else{
                        this.visitorPlayers.push(element);
                    }
                }
            });
        },

        getSinglePlayerStats(data){
            console.log(data);
            data.data.forEach(element => {
                this.playerPts=element.pts;
                this.playerAst=element.ast;
                this.playerReb=element.reb;
                this.playerBlk=element.blk;
                this.playerDReb=element.dreb;
                this.playerOReb=element.oreb;
                this.playerFGpct=element.fg_pct;
                this.playerFGA=element.fga;
                this.playerFGM=element.fgm;
                this.playerFG3pct=element.fg3_pct;
                this.playerFG3A=element.fg3a;
                this.playerFG3M=element.fg3m;
                this.playerFTpct=element.ft_pct;
                this.playerFTA=element.fta;
                this.playerFTM=element.ftm;
                this.playerPF=element.pf;
                this.playerTr=element.turnover;
                this.playerStl=element.stl;
                this.playerMin=element.min;
                this.playerName=element.player.first_name;
                this.playerLast=element.player.last_name;
            });
        }
    },
    mounted(){

        fetch(`https://www.balldontlie.io/api/v1/games/${this.gameId}`)
            .then(res => res.json())
            .then(data => this.getGameStats(data))
            .catch(err => console.log(err.message));

        fetch(`https://www.balldontlie.io/api/v1/stats/?game_ids[]=${this.gameId}&per_page=100`)
            .then(res => res.json())
            .then(data => this.getPlayersStats(data))
            .catch(err => console.log(err.message));
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;1,400&display=swap');
.gamescore-all{
    width: 100%;
    height: 88vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.small-box{
    width: 600px;
    height: 700px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 20px;
    background: #3F3D56;
    visibility: hidden;
    box-shadow: 2px 5px 10px black;
}
.small-box-header{
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid #D28508;
}
.small-box-minutes{
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.minutes{
    text-decoration: underline #D28508;
}
.small-box-h{
    color: white;
    text-decoration: underline #3F3D56;
}
.small-box-content{
    height: 70%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.small-box-row{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background: orange;
    height: 80px;
    border-bottom: 2px solid #3F3D56;
    color: #3F3D56;
    font-weight: bold;
}
.small-box-row span{
    color: white;
}
.small-box-left-row{
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-right: 2px solid #3F3D56;
}
.small-box-center-row{
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-right: 2px solid #3F3D56;
}
.small-box-right-row{
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.small-box-footer{
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.close-btn{
    height: 40px;
    width: 80px;
    font-size: 18px;
    font-weight: bold;
    border: none;
    background: white;
    color: #3F3D56;
    border-radius: 10px;
    cursor: pointer;
}
.close-btn:hover{
    background: #D28508;
    color: white;
}
.gamescore-container{
    width: 100%;
    height: 88vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.gamescore-header{
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #D28508;
}
h6{
    font-size: 32px;
    font-family: 'Montserrat', sans-serif;
    color: white;
    text-decoration: underline #3F3D56;
    width: 50%;
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
.gamescore-header p{
    font-size: 26px;
    font-family: 'Montserrat', sans-serif;
    width: 50%;
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}
.gamescore-content{
    height: 90%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.teamscore-box{
    height: 100%;
    background: white;
    width: 400px;
    box-shadow: 0px 2px 10px black;
    border-radius: 20px;
}
.teamscore-header{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #D28508;
    border-bottom: 2px solid #3F3D56;
}
.teamscore-name{
    width: 40%;
    height: 20%;
    border-right: 2px solid #3F3D56;
    color: #3F3D56;
    font-size: 16px;
}
.teamscore-points{
    width: 20%;
    height: 20%;
    border-right: 2px solid #3F3D56;
    color: #3F3D56;
    font-size: 16px;
}
.teamscore-assists{
    width: 20%;
    height: 20%;
    border-right: 2px solid #3F3D56;
    color: #3F3D56;
    font-size: 16px;
}
.teamscore-blocks{
    width: 20%;
    height: 20%;
    color: #3F3D56;
    font-size: 16px;
}
.players-stats{
    list-style-type: none;
    height: 100%;

}
.players-stats li{
    margin-top: 3px;
    width: 100%;
    cursor: pointer;
    height: 35px;
    border-bottom: 2px solid #3F3D56;
    display: flex;
    justify-content: center;
    align-items: center;
}
.li:hover{
    background: #f7f9fc;
}
.player-stats-name{
    height: 100%;
    width: 40%;
    font-size: 14px;
    border-right: 2px solid #3F3D56;
    font-weight: bold;
    color: #3F3D56;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
}
.player-stats-points{
    height: 100%;
    width: 20%;
    border-right: 2px solid #3F3D56;
    color: #3F3D56;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
}
.player-stats-assists{
    height: 100%;
    width: 20%;
    border-right: 2px solid #3F3D56;
    color: #3F3D56;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
}
.player-stats-blocks{
    height: 100%;
    width: 20%;
    color: #3F3D56;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
}
@media only screen and (max-width: 860px){
  h6{
     font-size: 26px;
 }
 .gamescore-header p{
     font-size: 26px;
 }
 .teamscore-box{
     width: 350px;
 }
}
@media only screen and (max-width: 710px){
    .teamscore-box{
        width: 50%;
        box-shadow: none;
        border-radius: 0;
    }
    .teamscore-content{
        border-right: 2px solid #3F3D56;
        border-left: 2px solid #3F3D56;
    }
}
@media only screen and (max-width: 630px){
    .small-box{
        width: 500px;
    }
}
@media only screen and (max-width: 580px){
    .player-stats-name{
        font-size: 12px;
    }
    .player-stats-points{
        font-size: 12px;
    }
    .player-stats-assists{
        font-size: 12px;
    }
    .player-stats-blocks{
        font-size: 12px;
    }
    h6{
        font-size: 22px;
    }
    .gamescore-header p{
         font-size: 22px;
    }
}
@media only screen and (max-width: 530px){
    .small-box{
        width: 400px;
    }
    .small-box-row{
        font-size: 12px;
    }

}
@media only screen and (max-width: 420px){
 h6{
        font-size: 18px;
    }
    .gamescore-header p{
         font-size: 18px;
    }
    .teamscore-name{
        font-size: 13px;
    }
    .teamscore-points{
        font-size: 13px;
    }
    .teamscore-assists{
        font-size: 13px;
    }
    .teamscore-blocks{
        font-size: 13px;
    }
    .small-box{
        width: 300px;
        height: 500px;
    }
    .small-box-row{
        font-size: 10px;
    }
    .small-box-left-row{
        justify-content: center;
    }
    .small-box-right-row{
        justify-content: center;
    }
    .small-box-center-row{
        justify-content: center;
    }
}

</style>