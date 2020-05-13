<template>
    <div v-if="$route.fullPath == '/payment'" id="payment">
         <BannerTop></BannerTop>
         <div class="summary-box">
            <div class="summary">
            <h5>Summary</h5>
            <div class="amount_price">
                <span>5 tickets</span><br>
                <span>100 pln</span>
             </div>
            </div>
         </div>
         <h4>Choose payment method</h4>
         <div class="choose_payment">
            <div class="payment_box">
                <h5>Paypal</h5>
              <img src="../assets/paypal.png">
            </div>
            <div class="payment_box">
                <h5>Card</h5>
               <img src="../assets/mastercard.png">
            </div>
            <div class="payment_box">
                <h5>BLIK</h5>
               <img src="../assets/mastercard.png">
            </div>
         </div>
         <div class="pay">
           <router-link to="/confirm"><button>Pay</button></router-link>
           <router-view/>
         </div>
         <Header></Header>
    </div>
</template>


<script>
import Header from "../components/Header.vue";
import BannerTop from "../components/BannerTop.vue";

export default {
    name: "Payment",
    components: {
        Header,
        BannerTop,
    }
}
</script>


<style lang="scss">

@import "../styles/Reservation/_headerbottom.scss";
@import "../styles/Reservation/_banner.scss";
@import "../styles/CheckPayment/_summary.scss";

</style>