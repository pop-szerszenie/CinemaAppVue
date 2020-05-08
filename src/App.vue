<template>
  <div id="app">
    
    <Reserve></Reserve>
    <Header v-if="$route.fullPath !== '/reservation'"></Header>
    <DateBoxes></DateBoxes>
    <FilmsBoxes></FilmsBoxes>

  </div>
</template>

<script>
import Reserve from "./components/Reserve.vue";
import Header from "./components/Header.vue";
import DateBoxes from "./components/DateBoxes.vue";
import FilmsBoxes from "./components/FilmsBoxes.vue";

export default {
  name: 'App',
  components:{
    Reserve,
    Header,
    DateBoxes,
    FilmsBoxes,
    }
}
</script>

<style lang="scss">

  @import "./styles/_header.scss";
  @import "./styles/_dateboxes.scss";
  @import "./styles/_filmsboxes.scss";
  @import "./styles/_style.scss";
  @import "./styles/_media.scss";

</style>