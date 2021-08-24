<template>
  <div class="players-container">
    <div class="players-search">
      <img class="players-search-img" src="../assets/players-search-img.png" alt="sssss">
    </div>
    <div class="players-searchbar">
      <input class="search-bar" type="text" placeholder="Type a player">
      <input type="submit" class="search-btn" value="Search">
    </div>
    <div class="players-list">
      <div class="searched-players">
        <ul>
          <router-link :to="{name: 'Player'}">
          <li>
            <div class="player-name">
              Lebron James
            </div>
            <div class="player-team">
              Los Angeles Lakers
            </div>
          </li>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.players-container{
  height: 88vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.players-search{
  width: 300px;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 20px;
}
.players-search-img{
  width: 300px;
  height: 200px;
}
.players-searchbar{
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.search-bar{
  height: 50px;
  width: 600px;
  border: none;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 22px;
  border-radius: 10px;
  background-color: white;
  padding: 20px;
}
.search-bar::placeholder{
  color: #3F3D56;
  font-weight: bold;
}
.search-btn{
  height: 50px;
  width: 70px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  font-family: 'Montserrat', sans-serif;
  margin-left: 10px;
  background-color: white;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
}
.search-btn:hover{
  background-color: #D28508;
  color: white;
}
input[type=text]{
  color: #3F3D56;
  font-weight: bold;
}
input[type=text]:focus{
  color: #D28508;
  font-weight: bold;
}
.players-list{
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.searched-players{
  width: 600px;
  height: 390px;
  background-color: #D28508;
  border-radius: 10px;
  box-shadow: 0px 0px 10px grey;
}
.searched-players ul li{
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #3F3D56;
  color: white;
  font-weight: bold;
}
.searched-players ul li:hover{
  color: #3F3D56;
  border-bottom: 3px solid #3F3D56;
}
.searched-players a{
  text-decoration: none;
  cursor: pointer;
}

@media only screen and (max-width: 680px){
  .search-bar {
    width: 500px;
  }
  .searched-players{
    width: 100%;
    border-radius: 0;
    border-top: 5px solid #3F3D56;
  }
  .search-btn{
    width: 60px;
    font-size: 16px;
  }
}
@media only screen and (max-width: 570px){
  .search-bar{
    width: 400px;
  }
  .searched-players{
    height: 100%;
  }
}
@media only screen and (max-width: 450px){
  .search-bar{
    width: 300px;
  }
  .search-btn{
    width: 50px;
    font-size: 14px;
  }
}
</style>