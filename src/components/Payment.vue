<template>
    <div v-if="$route.fullPath == '/payment'" id="payment">
    sdd
         <Header></Header>
    </div>
</template>


<script>
import Header from "../components/Header.vue";

export default {
    name: "Payment",
    components: {
        Header,
    }
}
</script>


<style lang="scss">

@import "../styles/Reservation/_headerbottom.scss";

</style>