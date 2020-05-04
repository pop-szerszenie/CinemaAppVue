<template>
  <div id="app">
    <!-- START HEADER SECTION -->
      <div class="header">
         <div class="left_logo">
          <p>CINCITY</p>
         </div>
         <div class="icon_right">
           <img class="icon1" src="assets/#">
           <img class="icon2" src="assets/#">
         </div>
      </div>
      <!-- END HEADER SECTION -->
      <!-- START DATE INFORMATION -->
      <div class="data_reservation">
          <div class="box">
            PN
            <span>30.03</span>
          </div>
          <div class="box">
            PN
            <span>30.03</span>
          </div>
          <div class="box">
            PN
            <span>30.03</span>
          </div>
          <div class="box">
            PN
            <span>30.03</span>
          </div>
          <div class="box">
            PN
            <span>30.03</span>
          </div>
          <div class="box">
            PN
            <span>30.03</span>
          </div>
          <div class="box">
            PN
            <span>30.03</span>
          </div>
      </div>
      <!-- END DATE INFORMATION -->
      <!-- START FILMS SECTION -->
      <div class="films_info">
          <div class="film_box">
             <img src="assets/#">
             <h3>Transformers: The last knight</h3>
             <p>2017 | Fantasy film | 2h 34min</p>
             <h5>2D</h5>
             <button class="film_cost">12:00<br><span>20 PLN</span></button>
             <button class="film_cost">12:00<br><span>20 PLN</span></button>
             <button class="film_cost">12:00<br><span>20 PLN</span></button>
             <h4>3D</h4>
             <button class="film_cost">12:00<br><span>20 PLN</span></button>
             <button class="film_cost">12:00<br><span>20 PLN</span></button>
             
          </div>
          <div class="film_box">
             <img src="assets/#">
             <h3>Transformers: The last knight</h3>
             <p>2017 | Fantasy film | 2h 34min</p>
             <h5>2D</h5>
             <button class="film_cost">12:00<br><span>20 PLN</span></button>
             <button class="film_cost">12:00<br><span>20 PLN</span></button>
             <button class="film_cost">12:00<br><span>20 PLN</span></button>
             <h4>3D</h4>
             <button class="film_cost">12:00<br><span>20 PLN</span></button>
             <button class="film_cost">12:00<br><span>20 PLN</span></button>
          </div>
          <div class="film_box">
             <img src="assets/#">
             <h3>Transformers: The last knight</h3>
             <p>2017 | Fantasy film | 2h 34min</p>
             <h5>2D</h5>
             <button class="film_cost">12:00<br><span>20 PLN</span></button>
             <button class="film_cost">12:00<br><span>20 PLN</span></button>
             <button class="film_cost">12:00<br><span>20 PLN</span></button>
             <h4>3D</h4>
             <button class="film_cost">12:00<br><span>20 PLN</span></button>
             <button class="film_cost">12:00<br><span>20 PLN</span></button>
          </div>
      </div>
      <!-- END FILMS SECTION -->
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>

body{
  margin: 0 auto;
  padding: 0;
}
.header{
  background-color: black !important;
  padding: 5px;
}
.left_logo p{
  color: rgb(235, 35, 118);;
  font-family: Arial;
  letter-spacing: 1px;
}
.icon_right img.icon1{
   float: right;
   margin-top: -30px;
   margin-right: 80px;
}
.icon_right img.icon2{
  float: right;
  margin-top: -30px;
  margin-right: 40px;
}
.data_reservation{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 40px;
}
.data_reservation .box{
  width: 50px;
  height: 50px;
  background-color: #fff;
  font-family: Arial;
  text-align: center;
  margin-right: 20px;
  font-weight: bold;
  border-radius: 15px;
  box-shadow: 0 0 10px gray;
  padding: 10px;
}
.data_reservation .box:hover{
  background-color: #000;
  color:rgb(235, 35, 118);
  box-shadow: none;
  transition: .2s all ease-in-out;
  cursor: pointer;
}
.films_info{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}
.films_info .film_box{
  margin-right: 20px;
  box-shadow: 0 0 10px gray;
  border-radius: 15px;
  padding: 20px;
  width: 390px;
}
.films_info .film_box h5{
  color:rgb(235, 35, 118);
  text-align: right !important;
}
.films_info .film_box h3{
  font-family: Arial;
  font-size: 16px;
  margin-top: -5px;
  float:right;
}
.films_info .film_box h4{
  color: rgb(235, 35, 118);
  text-align: right;
  font-size: 14px;
  margin-top: 80px;
}
.films_info .film_box p{
  color: gray;
  font-family: Arial;
  font-size: 13px;
  margin-bottom: 50px !important;
  margin-top: 20px;
  text-align: right;
}
.films_info .film_box button.film_cost{
  font-weight: bold;
}
.films_info .film_box button.film_cost span{
  color: #fff;
}
.films_info .film_box button{
  float: right;
  background-color: rgb(42, 187, 187);
  border: none;
  border-radius: 4px;
  margin-right: 5px;
  padding: 4px;
  position: relative;
}
.films_info .film_box button:hover{
  background-color:rgb(235, 35, 118);
  transition: .3s all ease-in-out;
  cursor: pointer;
}
</style>
