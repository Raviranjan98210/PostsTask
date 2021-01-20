<template>
  <div>
    <nav class="bg-purple-500  h-20 navbar   ">
      <router-link to="/" class="ml-4">
        Logo
      </router-link>

      <ul class="nav_menu mr-4">
        <li>
          <router-link to="/">
            All Post
          </router-link>
        </li>
        <li>
          <router-link to="/your-post">
            Your Posts
          </router-link>
        </li>
        <li>
          <router-link to="/">
            Logout
          </router-link>
        </li>
        <li>
          <router-link to="/">
            User
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  color: white;
}
.nav_menu {
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 20px;
  list-style: none;
  text-align: center;
  justify-content: end;
}
</style>
