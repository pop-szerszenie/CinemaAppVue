<template>
    <div v-if="$route.fullPath == '/reservation'">
          <Header></Header>
    </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "Reserve",
  components:{
    Header,
  }
}
</script>

<style>

@import "../styles/_header.scss";

</style>
