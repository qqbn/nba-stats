<template>
  <div class="player-container">
      <div class="left-stats">
          <div class="left-stats-header">
              <p> <span>Player:</span> Lebron James </p>
          </div>
          <div class="left-stats-content">
              <div class="left-single-row">
                  <p><span>Team:</span> Los Angeles Lakers</p>
              </div>
              <div class="left-single-row">
                  <p><span>Position:</span> Los Angeles Lakers</p>
              </div>
              <div class="left-single-row">
                  <p><span>Heigth:</span> Los Angeles Lakers</p>
              </div>
              <div class="left-single-row">
                  <p><span>Weight:</span> Los Angeles Lakers</p>
              </div>
          </div>
      </div>
      <div class="right-stats">
          <div class="right-stats-header">
              <p>Averages of <span>2020</span> season</p>
          </div>
          <div class="right-stats-content">
              <div class="right-stats-row">
                  <div class="row-left">
                      <p>Games Played: <span> 37</span></p>
                  </div>
                  <div class="row-right">
                      <p>Minutes: <span> 34:46</span></p>
                  </div>
              </div>
              <div class="right-stats-row">
                  <div class="row-left">
                     <p>FGM <span> 37</span></p>
                  </div>
                  <div class="row-right">
                      <p>FGA <span> 34:46</span></p>
                  </div>
              </div>
              <div class="right-stats-row">
                  <div class="row-left">
                     <p>FG3M <span> 37</span></p>
                  </div>
                  <div class="row-right">
                      <p>FG3A <span> 34:46</span></p>
                  </div>
              </div>
              <div class="right-stats-row">
                  <div class="row-left">
                      <p>FTM <span> 37</span></p>
                  </div>
                  <div class="row-right">
                      <p>FTA <span> 34:46</span></p>
                  </div>
              </div>
              <div class="right-stats-row">
                  <div class="row-left">
                      <p>OREB <span> 37</span></p>
                  </div>
                  <div class="row-right">
                      <p>DREB <span> 34:46</span></p>
                  </div>
              </div>
              <div class="right-stats-row">
                  <div class="row-left">
                     <p>REB <span> 37</span></p>
                  </div>
                  <div class="row-right">
                      <p>AST <span> 34:46</span></p>
                  </div>
              </div>
              <div class="right-stats-row">
                  <div class="row-left">
                      <p>STL <span> 37</span></p>
                  </div>
                  <div class="row-right">
                      <p>BLK <span> 34:46</span></p>
                  </div>
              </div>
              <div class="right-stats-row">
                  <div class="row-left">
                      <p>Turnover <span> 37</span></p>
                  </div>
                  <div class="row-right">
                      <p>PF <span> 34:46</span></p>
                  </div>
              </div>
              <div class="right-stats-row">
                  <div class="row-left">
                      <p>Points <span> 37</span></p>
                  </div>
                  <div class="row-right">
                      <p>FG% <span> 34:46</span></p>
                  </div>
              </div>
              <div class="right-stats-row">
                  <div class="row-left">
                      <p>FG3% <span> 37</span></p>
                  </div>
                  <div class="row-right">
                      <p>FT% <span> 34:46</span></p>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
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
.left-single-row span{
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