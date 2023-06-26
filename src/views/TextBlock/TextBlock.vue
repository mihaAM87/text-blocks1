<template>
  <p>{{ TextContent }}</p>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    content: {
      type: String,
      validator(value) {
        return value.length > 0;
      },
    },
  },
  computed: {
    TextContent() {
      return this.content;
    },
  },
};
</script>

<style scoped></style>
