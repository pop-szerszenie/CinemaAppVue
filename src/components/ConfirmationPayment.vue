<template>
    <div id="confirmation" v-if="$route.fullPath == '/confirm'">
    <div class="text_center">
       <h1>Pay was accepted!</h1>
       <p>We invite you to a film</p>
       <span>On Tuesday 30.03.2020 at 12 p.m</span>
       <div class="backToMain">
    <button>Go to main page</button>
    </div>
    </div>
        <Header></Header>
    </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
    name: "Confirm",
    components: {
        Header,
    }
}
</script>

<style lang="scss">

@import "../styles/ConfirmedPayment/_confirmPay.scss";
@import "../styles/Reservation/_headerbottom.scss";

</style>