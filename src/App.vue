<template>
  <div id="app">
    
    <Reserve></Reserve>
    <Payment></Payment>
    <ConfirmationPayment></ConfirmationPayment>
    <Header v-if="$route.fullPath !== '/reservation' && $route.fullPath !== '/payment' && $route.fullPath !== '/confirm'"></Header>
    <DateBoxes v-if="$route.fullPath !== '/payment' && $route.fullPath !== '/confirm'"></DateBoxes>
    <FilmsBoxes v-if="$route.fullPath !== '/payment' && $route.fullPath !== '/confirm'"></FilmsBoxes>
    <BannerTop v-if="$route.fullPath !== '/reservation' && $route.fullPath !== '/payment'"></BannerTop>
    <ChooseSeating v-if="$route.fullPath !== '/reservation'"></ChooseSeating>
    <InfoSeating v-if="$route.fullPath !== '/reservation'"></InfoSeating>
    <CheckPayment v-if="$route.fullPath !== '/reservation'"></CheckPayment>
    
  </div>
</template>

<script>
import Reserve from "./components/Reserve.vue";
import Header from "./components/Header.vue";
import DateBoxes from "./components/DateBoxes.vue";
import FilmsBoxes from "./components/FilmsBoxes.vue";
import Payment from "./components/Payment.vue";
import ConfirmationPayment from "./components/ConfirmationPayment.vue";
import BannerTop from "./components/BannerTop.vue";
import ChooseSeating from "./components/ChooseSeating.vue";
import InfoSeating from "./components/InfoSeating.vue";
import CheckPayment from "./components/CheckPayment.vue";

export default {
  name: 'App',
  components:{
    Reserve,
    Header,
    DateBoxes,
    FilmsBoxes,
    Payment,
    BannerTop,
    ChooseSeating,
    InfoSeating,
    CheckPayment,
    ConfirmationPayment,
    }
}
</script>

<style lang="scss">

  @import "./styles/Homepage/_header.scss";
  @import "./styles/Homepage/_dateboxes.scss";
  @import "./styles/Homepage/_filmsboxes.scss";
  @import "./styles/Homepage/_style.scss";

</style>