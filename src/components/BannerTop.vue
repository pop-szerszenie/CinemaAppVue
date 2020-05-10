<template>
    <div class="banner-top" v-if="$route.fullPath == '/reservation'">
              <img src="../assets/banner-top.png">
            <div class="text_banner">
                  <h4>TRANSFORMERS</h4>
            </div>
            <div class="button_banner">
                <button><span>Tuesday 30.03.2020</span><br>12:00</button>
            </div>
        </div>
</template>

<script>
export default {
    name: "BannerTop",
}
</script>


<style lang="scss">

@import "../styles/Reservation/_banner.scss";

</style>