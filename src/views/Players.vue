<template>
  <div class="players-container">
    <div class="players-search">
      <img class="players-search-img" src="../assets/players-search-img.png" alt="sssss">
    </div>
    <div class="players-searchbar">
      <input class="search-bar-name" type="text" placeholder="Firstname" v-model="firstName">
      <input class="search-bar-lastname" type="text" placeholder="Lastname" v-model="lastName">
      <input type="submit" class="search-btn" value="Search" @click="getPlayerName()">
    </div>
    <div class="players-list">
      <div class="searched-players">
        <ul>
          <li v-for="player in searchedPlayers" :key="player.id">
            <router-link :to="{name: 'Player', params: { id: player.id }}">
            <div class="player-name">
              {{player.first_name}} {{player.last_name}}
            </div>
            <div class="player-team">
              {{player.team.full_name}}
            </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
data(){
  return{
    firstName: '',
    lastName: '',
    searchedPlayers:[],
  }
},
methods:{
  getPlayerName(){
    this.searchedPlayers=[];
    if(this.firstName=='' && this.lastName==''){
      confirm('You left inputs empty, type sth !');
    }
    else{
      this.firstNameCapital(this.firstName);
      this.lastNameCapital(this.lastName);
      fetch(`https://www.balldontlie.io/api/v1/players/?search=${this.firstName}_${this.lastName}&per_page=100`)
            .then(res => res.json())
            .then(data => this.getPlayersData(data))
            .catch(err => console.log(err.message));
    }
  },

  getPlayersData(data){
    console.log(data);
    console.log(this.firstName);
    data.data.forEach(element => {
      if(this.firstName==element.first_name && this.lastName==element.last_name){
        this.searchedPlayers.push(element);
      }else if(this.firstName==element.first_name && this.lastName==''){
        this.searchedPlayers.push(element);
      }else if(this.lastName==element.last_name && this.firstName==''){
        this.searchedPlayers.push(element);
      }
    });
    console.log(this.searchedPlayers);
  },

  firstNameCapital(string){
   this.firstName=string.charAt(0).toUpperCase() + string.slice(1);
  },

  lastNameCapital(string){
    this.lastName=string.charAt(0).toUpperCase() + string.slice(1);
  }
}
}

</script>

<style>
.searched-players a{
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-content: center;
  color: white;
}
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
  align-items: center;
}
.search-bar-name, .search-bar-lastname{
  height: 50px;
  width: 200px;
  border: none;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 22px;
  border-radius: 10px;
  background-color: white;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
}
.search-bar-name::placeholder{
  color: #3F3D56;
  font-weight: bold;
  opacity: 0.7;
}
.search-bar-lastname::placeholder{
color: #3F3D56;
  font-weight: bold;
  opacity: 0.7;
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
  color: #3F3D56;
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
  box-shadow: 0px 0px 10px black;
  overflow-y: scroll;

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
.searched-players a:hover{
  color: #3F3D56;
}
.searched-players ul li:hover{
  border-bottom: 2px solid #3F3D56;
}
.searched-players a{
  text-decoration: none;
  cursor: pointer;
}

@media only screen and (max-width: 680px){
  .search-bar-lastname, .search-bar-name {
    width: 150px;
  }
  .players-search{
    width: 100%;
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
  .search-bar-lastname, .search-bar-name {
    width: 120px;
  }
  .searched-players{
    height: 100%;
  }
}
@media only screen and (max-width: 450px){
  .search-bar-lastname, .search-bar-name {
    width: 100px;
    font-size: 16px;
  }
  .search-btn{
    width: 50px;
    font-size: 14px;
  }
}
</style>