<template>
  <div>
    <Header title="錢錢抱歉" />
    <transition name="out-in" mode="out-in">
      <Nuxt />
    </transition>
    <LoginModal
      :openModal="true"
      modalType="registered"
      @submit-emit="userSubmit"
    />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header/Header.vue';
import ItemList from '~/components/ItemList/ItemList.vue';
import Footer from '~/components/Footer/Footer.vue';
import LoginModal from '~/components/Modal/LoginModal.vue';

export default {
  methods: {
    userSubmit(data) {
      console.log(data);
    },
  },
  components: {
    Header,
    ItemList,
    Footer,
    LoginModal,
  },
};
</script>