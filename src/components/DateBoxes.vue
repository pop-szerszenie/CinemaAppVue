<template>
      <div v-if="$route.fullPath !== '/reservation'" class="data_reservation"> <!-- HIDDEN DATA RESERVATION WHEN CLICKED ARROW BUTTON -->
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
</template>

<script>
export default {
    
}
</script>

<style lang="scss">

@import "../styles/Homepage/_dateboxes.scss";

</style>