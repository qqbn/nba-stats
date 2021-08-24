<template>
    <div class="gamescore-all">
    <div class="gamescore-container">
        <div class="gamescore-header">
            <h6>DEN 101 - SAC 102</h6>
            <p>DATA</p>
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
                        <li class="li" @click="openBox()"><div class="player-stats-name">Michael Jordan</div> <div class="player-stats-points">32</div> <div class="player-stats-assists">5</div> <div class="player-stats-blocks">3</div></li>
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
                        <li><div class="player-stats-name">Michael Jordan</div> <div class="player-stats-points">32</div> <div class="player-stats-assists">5</div> <div class="player-stats-blocks">3</div></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="small-box">
        <div class="small-box-header">
            <h6 class="small-box-h">PLAYER NAME</h6>
        </div>
        <div class="small-box-minutes">
            <h6 class="minutes">31;23 min</h6>
        </div>
        <div class="small-box-content">
            <div class="small-box-row">
                <div class="small-box-left-row">Points: <span>22</span></div>
                <div class="small-box-center-row">Asists: <span> 2</span></div>
                <div class="small-box-right-row">Blocks: <span> 2</span></div>
            </div>
            <div class="small-box-row">
                <div class="small-box-left-row">Rebounds: <span> 2</span></div>
                <div class="small-box-center-row">DRebeounds: <span> 8</span></div>
                <div class="small-box-right-row">ORebounds: <span> 10</span></div>
            </div>
            <div class="small-box-row">
                <div class="small-box-left-row">FG%: <span> 0.429</span></div>
                <div class="small-box-center-row">FGA: <span> 21</span></div>
                <div class="small-box-right-row">FGM: <span> 9</span></div>
            </div>
            <div class="small-box-row">
                <div class="small-box-left-row">FG3%: <span> 0.25</span></div>
                <div class="small-box-center-row">FG3A: <span> 4</span></div>
                <div class="small-box-right-row">FG3M: <span> 1</span></div>
            </div>
            <div class="small-box-row">
                <div class="small-box-left-row">FT%: <span> 0.8</span></div>
                <div class="small-box-center-row">FTA: <span> 5</span></div>
                <div class="small-box-right-row">FTM: <span> 4</span></div>
            </div>
            <div class="small-box-row">
                <div class="small-box-left-row">PF: <span> 3</span></div>
                <div class="small-box-center-row">Turnovers: <span> 5</span></div>
                <div class="small-box-right-row">Steals: <span> 1</span></div>
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
    data(){
        return{
            isOpened: false,
        }
    },
    methods:{
        openBox(){
            if(!this.isOpened){
                document.querySelector('.gamescore-container').style.filter="blur(5px)";
                document.querySelector('.small-box').style.visibility="visible";
                this.isOpened=true;
            }
        },
        closeBox(){
            this.isOpened=false;
            document.querySelector('.gamescore-container').style.filter="blur(0px)";
            document.querySelector('.small-box').style.visibility="hidden";
        }
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