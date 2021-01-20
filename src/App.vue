<template>
  <div id="app">
    <NavigationBar />
    <div class="container mx-auto">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar";
export default {
  name: "app",
  components: { NavigationBar },
};
</script>
<style scoped>
.container {
  padding: 0 100px;
}
</style>
