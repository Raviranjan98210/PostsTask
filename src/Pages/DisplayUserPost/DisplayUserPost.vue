<template>
  <div>
    <div class="py-10">
      <form @submit.prevent="submitForm">
        <p class="mb-2">Enter Title</p>
        <input
          type="text"
          v-model="post.title"
          placeholder="Enter Title"
          class="border px-2 py-2  mb-4 focus:outline-none block"
        />
        <textarea
          placeholder="What's in your mind?"
          rows="4"
          cols="50"
          class="block border px-2 py-2"
          v-model="post.body"
        >
             At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
        </textarea>
        <button
          type="submit"
          class=" px-2 py-2 mt-4 mb-8 bg-pink-600 uppercase text-white"
        >
          Post
        </button>
      </form>
    </div>
    <div>
      <h1 class="text-3xl mb-10">Your Posts</h1>
      <div v-for="post in userPosts" :key="post.id">
        <h1 class="text-lg uppercase mt-8 font-semibold">Title: {{ post.title }}</h1>
        <div class="bg-gray-300  p-4 mt-4 mb-8">
          {{ post.body }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DisplayUserPost",
  components: {},
  props: {},
  data() {
    return {
      userPosts: [
        {
          id: 1,
          title: "Welcome to rivulet",
          body:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        },
      ],
      post: {
        title: "",
        body: "",
      },
    };
  },
  watch: {},
  computed: {},
  methods: {
    submitForm() {
      this.userPosts.unshift(this.post);
      this.$store.dispatch("addUserPost", this.userPosts);
      this.post = {};
    },
  },
  created() {
    if (localStorage.getItem("authToken") === null) {
      this.$router.push("/login");
    }
  },
  mounted() {},
};
</script>

<style lang="css"></style>
