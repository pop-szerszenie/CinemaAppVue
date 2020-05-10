<template>
        <div v-if="$route.fullPath == '/reservation'" class="check_seating">
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
</template>


<script>
export default {
    

}
</script>

<style lang="scss">

@import '../styles/Reservation/_seating.scss';

</style>