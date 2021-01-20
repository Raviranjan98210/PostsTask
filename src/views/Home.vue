<template>
  <div class="home">
    <NavigationBar />
    <Posts />
  </div>
</template>

<script>
// @ is an alias to /src
import Posts from "../Pages/DisplayAlllPost/DisplayAllPosts";
import NavigationBar from "../components/NavigationBar";
export default {
  name: "Home",
  components: { Posts, NavigationBar },
};
</script>
