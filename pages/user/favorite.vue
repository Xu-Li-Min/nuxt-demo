<template>
  <div>
    <section class="hero is-light">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">我的收藏</h1>
          <h2 class="subtitle">Primary bold subtitle</h2>
        </div>
      </div>
    </section>
    <ItemList />
  </div>
</template>

<script>
import ItemList from '~/components/ItemList/ItemList.vue';

export default {
  methods: {},
  components: {
    ItemList,
  },
};
</script>
