<template>
  <div class="home">
    <div class="big-img-box">
      <img class="big-img" alt="home-img" src="../assets/home-img.png">
    </div>
    <div class="info-box">
      <div class="header-home">
        <h2>Hi its nice to see u there!</h2>
      </div>
      <div class="p-box">
        <p>So I'm huge NBA fan, and I made this page for all NBA fans.This page is dedicated to information and statistics for individual teams and players. If you're wondering how it works, it's easy, you have a navbar above that will direct you to the appropriate page. Click and then select or search for what you need</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  }
}
</script>
<style scoped>
.home{
  height: 88vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.big-img-box{
margin-top: 20px;
height: 30%;
width: 300px;
display: flex;
justify-content: center;
align-items: flex-end;
}
.big-img{
  height: 200px;
  width: 300px;
}
.info-box{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 800px;
  height: 500px;
  background-color: #D28508;
  border-radius: 20px;
  box-shadow: 0px 5px 10px black;
}
.header-home{
width: 100%;
height: 20%;
display: flex;
justify-content: center;
align-items: flex-start;
}
.p-box{
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
}
.p-box p{
  height: 100%;
  width: 100%;
  font-size: 26px;
  color: white;
  text-shadow: 1px 1px 10px black;
}
h2{
  margin-top: 35px;
  font-size: 42px;
  color: white;
  text-decoration: underline #3F3D56;
}
@media only screen and (max-width: 980px){
  .info-box{
    width: 600px;
  }
}
@media only screen and (max-width: 820px){
  h2{
    font-size: 38px;
  }
  .p-box p{
    font-size: 24px;
  }
}
@media only screen and (max-width: 680px){
  h2{
    font-size: 32px;
  }
  .p-box p{
    font-size: 22px;
  }
  .info-box{
    width: 500px;
  }
}
@media only screen and (max-width: 580px){
  .info-box{
    width: 100%;
    background-color: #D28508;
    border-radius: 0;
    border-top: 5px solid #3F3D56;
  }
  h2{
    font-size: 30px;
  }
  .p-box p{
    font-size: 18px;
  }
}
</style>
