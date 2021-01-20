<template>
  <div>
    <nav className="bg-purple-500 shadow-xl h-20  navbar "></nav>
  </div>
</template>

<script>
export default {
  name: "componentName",
  components: { components },
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
  justify-content: space-around;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  transition: top 0.6s;
}
</style>
