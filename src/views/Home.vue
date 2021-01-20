<template>
  <div class="home">
    <Posts />
  </div>
</template>

<script>
// @ is an alias to /src
import Posts from "../Pages/DisplayAlllPost/DisplayAllPosts";
export default {
  name: "Home",
  components: { Posts }
};
</script>
