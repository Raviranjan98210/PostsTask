<template>
  <div class="flex justify-center items-center mt-10">
    <div class="bg-gray-300 h-full p-10">
      <h1 class="text-2xl text-center uppercase mb-10">login</h1>

      <div>
        <p class="mb-2">Enter your email</p>
        <form @submit.prevent="submitEmail">
          <input
            type="text"
            v-model="email"
            placeholder="Enter email"
            class="border px-6 py-2 w-full mb-4 focus:outline-none"
          />
          <button type="submit" class="w-full px-2 py-2 bg-pink-600 uppercase text-white">
            login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",

  props: {},
  data() {
    return {
      email: "",
    };
  },
  watch: {},
  computed: {},
  methods: {
    submitEmail() {
      let email = this.email;
      this.$store.dispatch("verifyUser", { email, window });
    },
  },
  created() {},
  mounted() {},
};
</script>

<style lang="css"></style>
