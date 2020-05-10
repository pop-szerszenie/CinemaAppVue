<template>
  <div v-if="$route.fullPath == '/reservation'" id="reservation">
        <BannerTop></BannerTop>
          <div class="text_h4">
            <p>Choose</p>
          </div>
        <ChooseSeating></ChooseSeating>
        <InfoSeating></InfoSeating>
        <CheckPayment></CheckPayment>
        <Header></Header>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import BannerTop from "../components/BannerTop.vue";
import ChooseSeating from "../components/ChooseSeating.vue";
import InfoSeating from "../components/InfoSeating.vue";
import CheckPayment from "../components/CheckPayment.vue";

export default {
  name: "Reserve",
  components:{
    Header,
    BannerTop,
    ChooseSeating,
    InfoSeating,
    CheckPayment,
  }
}
</script>

<style lang="scss">

@import "../styles/Reservation/_headerbottom.scss";
@import "../styles/Reservation/_banner.scss";
@import "../styles/Reservation/_seating.scss";


</style>
