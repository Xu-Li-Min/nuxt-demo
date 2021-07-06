<template>
  <div>
    Demo {{ message }}
    <button type="button" @click="count">Click</button>
    <slot>這是預設</slot>
  </div>
</template>

<script>
export default {
  props: ['message'],
  methods: {
    count() {
      this.$emit('count-emit', 1);
    },
  },
};
</script>