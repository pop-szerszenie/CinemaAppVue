<template>
     <div class="films_info" v-if="$route.fullPath !== '/reservation'"> <!-- HIDDEN FILMS BOX WHEN CLICKED ARROW BUTTON -->
          <div class="film_box">
             <img src="../assets/transformers.png">
             <h3>Transformers: The last knight</h3>
             <router-link to="/reservation" v-if="$route.fullPath !== '/reservation'"><img class="arrow" src="../assets/right-arrow.png" alt="We cant load arrow"></router-link>
             <router-view/>
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
             <img src="../assets/transformers.png">
             <h3>Transformers: The last knight</h3>
             <router-link to="/reservation" v-if="$route.fullPath !== '/reservation'"><img class="arrow" src="../assets/right-arrow.png" alt="We cant load arrow"></router-link>
             <router-view/>
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
             <img src="../assets/transformers.png">
             <h3>Transformers: The last knight</h3>
             <router-link to="/reservation" v-if="$route.fullPath !== '/reservation'"><img class="arrow" src="/assets/right-arrow.png" alt="We cant load arrow"></router-link>
             <router-view/>
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
</template>

<script>
export default {
    
}
</script>

<style lang="scss">

@import "../styles/Homepage/_filmsboxes.scss";

</style>