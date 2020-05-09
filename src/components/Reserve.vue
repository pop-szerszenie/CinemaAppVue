<template>
  <div v-if="$route.fullPath == '/reservation'" id="reservation">
        <div class="banner-top">
              <img src="../assets/banner-top.png">
            <div class="text_banner">
                  <h4>TRANSFORMERS</h4>
            </div>
            <div class="button_banner">
                <button><span>Tuesday 30.03.2020</span><br>12:00</button>
            </div>
        </div>
          <div class="text_h4">
            <p>Choose</p>
          </div>
          <div class="boxes_seating">
             <div class="box_seating">
               <div class="left_seating_column">
                 <span class="left_column"></span>
                 <span class="left_column"></span>
                 <span class="left_column"></span>
                 <span class="left_column"></span>
                 <span class="left_column"></span>
                 <span class="left_column"></span>
                 <span class="left_column"></span>
                 <span class="left_column"></span>

                 <div class="right_seating_column">
                   <span class="right_column"></span>
                   <span class="right_column"></span>
                   <span class="right_column"></span>
                   <span class="right_column"></span>
                   <span class="right_column"></span>
                   <span class="right_column"></span>
                   <span class="right_column"></span>
                   <span class="right_column"></span>
                 </div>
               </div>

              <div class="midleft_seating_column">
               <div class="left_seating_column">
                 <span class="left_column"></span>
                 <span class="left_column"></span>
                 <span class="left_column"></span>
                 <span class="left_column"></span>
                 <span class="left_column"></span>
                 <span class="left_column"></span>
                 <span class="left_column"></span>
                 <span class="left_column"></span>

                 <div class="right_seating_column">
                   <span class="right_column"></span>
                   <span class="right_column"></span>
                   <span class="right_column"></span>
                   <span class="right_column"></span>
                   <span class="right_column"></span>
                   <span class="right_column"></span>
                   <span class="right_column"></span>
                   <span class="right_column"></span>
                 </div>
               </div>
              </div>
              <div class="midright_seating_column">
               <div class="left_seating_column">
                 <span class="left_column"></span>
                 <span class="left_column"></span>
                 <span class="left_column"></span>
                 <span class="left_column"></span>
                 <span class="left_column"></span>
                 <span class="left_column"></span>
                 <span class="left_column"></span>
                 <span class="left_column"></span>

                 <div class="right_seating_column">
                   <span class="right_column"></span>
                   <span class="right_column"></span>
                   <span class="right_column"></span>
                   <span class="right_column"></span>
                   <span class="right_column"></span>
                   <span class="right_column"></span>
                   <span class="right_column"></span>
                   <span class="right_column"></span>
                 </div>
               </div>
              </div>

               <div class="leftmost_seating_column">
                 <span class="leftmost_column"></span>
                 <span class="leftmost_column"></span>
                 <span class="leftmost_column"></span>
                 <span class="leftmost_column"></span>
                 <span class="leftmost_column"></span>
                 <span class="leftmost_column"></span>
                 <span class="leftmost_column"></span>
                 <span class="leftmost_column"></span>
               </div>
               <div class="rightmost_seating_column">
                   <span class="rightmost_column"></span>
                   <span class="rightmost_column"></span>
                   <span class="rightmost_column"></span>
                   <span class="rightmost_column"></span>
                   <span class="rightmost_column"></span>
                   <span class="rightmost_column"></span>
                   <span class="rightmost_column"></span>
                   <span class="rightmost_column"></span>
                 </div>
             </div>
        </div>

            <div class="check_seating">
              <div class="check_place">
                 <span class="free"></span><p>Free</p>
              </div>
              <div class="check_place">
                 <span class="chosen"></span><p>Chosen</p>
              </div>
              <div class="check_place">
                 <span class="reserved"></span><p>Reserved</p>
              </div>
            </div>

            <div class="checkout_payment">
                <button>Go to payment</button>
            </div>
 

    <Header></Header>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "Reserve",
  components:{
    Header,
  }
}
</script>

<style lang="scss">

@import "../styles/Reservation/_headerbottom.scss";
@import "../styles/Reservation/_banner.scss";
@import "../styles/Reservation/_seating.scss";


</style>
