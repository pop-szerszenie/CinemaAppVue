<template>
<div v-if="$route.fullPath == '/reservation'" class="boxes_seating">
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

</template>

<script>
export default {
  
}
</script>


<style lang="scss">

@import '../styles/Reservation/_seating.scss';

</style>