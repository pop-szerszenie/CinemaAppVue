<template>
     <div v-if="$route.fullPath == '/reservation'" class="checkout_payment">
                <router-link to="/payment" v-if="$route.fullPath !== '/payment'"><button>Go to payment</button></router-link>
                <router-view/>
            </div>

</template>

<script>
export default {
    
}
</script>

<style lang="scss">

@import '../styles/Reservation/_seating.scss';

</style>