<template>
  <div id="app">
    <!-- START HEADER SECTION -->
      <div class="header">
         <div class="left_logo">
          <p>CINCITY</p>
         </div>
         <div class="icon_right">
           <img class="icon1" src="#">
           <img class="icon2" src="#">
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
          
      </div>
      <!-- END DATE INFORMATION -->

      <!-- START FILMS SECTION -->
      <div class="films_info">
          <div class="film_box">
             <img src="./assets/transformers.png">
             <h3>Transformers: The last knight</h3>
             <a href="reservation.html"><img class="arrow" src="./assets/right-arrow.png" alt="We cant load arrow"></a>
             <p>2017 | Fantasy film | 2h 34min</p>
             <h5>2D</h5>
             <div class="buttons_2d">
             <button class="film_cost">12:00<br><span>20 PLN</span></button>
             <button class="film_cost">12:00<br><span>20 PLN</span></button>
             <button class="film_cost">12:00<br><span>20 PLN</span></button>
             </div>
             <h4>3D</h4>
             <div class="buttons_3d">
             <button class="film_cost">12:00<br><span>20 PLN</span></button>
             <button class="film_cost">12:00<br><span>20 PLN</span></button>
             </div>
          </div>
         <div class="film_box">
             <img src="./assets/transformers.png">
             <h3>Transformers: The last knight</h3>
             <a href="#"><img class="arrow" src="./assets/right-arrow.png" alt="We cant load arrow"></a>
             <p>2017 | Fantasy film | 2h 34min</p>
             <h5>2D</h5>
             <div class="buttons_2d">
             <button class="film_cost">12:00<br><span>20 PLN</span></button>
             <button class="film_cost">12:00<br><span>20 PLN</span></button>
             <button class="film_cost">12:00<br><span>20 PLN</span></button>
             </div>
             <h4>3D</h4>
             <div class="buttons_3d">
             <button class="film_cost">12:00<br><span>20 PLN</span></button>
             <button class="film_cost">12:00<br><span>20 PLN</span></button>
             </div>
          </div>
          <div class="film_box">
             <img src="./assets/transformers.png">
             <h3>Transformers: The last knight</h3>
             <a href="#"><img class="arrow" src="./assets/right-arrow.png" alt="We cant load arrow"></a>
             <p>2017 | Fantasy film | 2h 34min</p>
             <h5>2D</h5>
             <div class="buttons_2d">
             <button class="film_cost">12:00<br><span>20 PLN</span></button>
             <button class="film_cost">12:00<br><span>20 PLN</span></button>
             <button class="film_cost">12:00<br><span>20 PLN</span></button>
             </div>
             <h4>3D</h4>
             <div class="buttons_3d">
             <button class="film_cost">12:00<br><span>20 PLN</span></button>
             <button class="film_cost">12:00<br><span>20 PLN</span></button>
             </div>
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

<style lang="scss">
  @import "./styles/_style.scss";
  @import "./styles/_media.scss";
</style>