<template>
  <div>
    <Header title="錢錢抱歉" />
    <ItemList />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header/Header.vue';
import ItemList from '~/components/ItemList/ItemList.vue';
import Footer from '~/components/Footer/Footer.vue';

export default {
  components: {
    Header,
    ItemList,
    Footer,
  },
};
</script>
