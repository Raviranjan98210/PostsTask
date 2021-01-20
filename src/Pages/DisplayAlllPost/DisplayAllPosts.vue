<template>
  <div class="py-10">
    <h1 class="text-3xl">All Posts</h1>
    <div>
      <div v-for="post in posts" :key="post.id">
        <h1 class="text-lg uppercase mt-8 font-semibold">Title: {{ post.title }}</h1>
        <div class="bg-gray-300 h-20 p-4 mt-4">
          {{ post.body }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todos",
  methods: {},

  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  created() {
    this.$store.dispatch("fetchPosts");
  },
};
</script>

<style scoped>
.heading {
  font-size: 30px;
  text-align: center;
}
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}
.todo {
  padding: 20px 30px;

  color: white;
  background-color: teal;
}
</style>
