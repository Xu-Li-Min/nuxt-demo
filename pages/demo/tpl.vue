<template>
  <div>
    <logo />
    <Demo message="props message" @count-emit="countFn" />
    <Demo>
      <span>這是slot</span>
    </Demo>
    {{ count }}
    <img src="@/assets/images/logo.jpg" alt="" />
    <img src="@/assets/images/store_img.jpg" alt="" />
    <h1>
      {{ title }}
    </h1>
    <h2>
      {{ h2 }}
    </h2>
    <h2>
      {{ demoH2 }}
    </h2>
    <nuxt-link to="/">回首頁</nuxt-link>
    <nuxt-link to="/demo/tpl">demo-tpl</nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
/* scoped */
// @import '@/assets/scss/demo.scss';

.example {
  display: grid;
  transition: all 0.5s;
  user-select: none;
  background: linear-gradient(to bottom, white, black);
}

// h2 {
//   font-size: 30px;
// }
</style>

<script>
import Logo from '~/components/Logo.vue';
// import { sleep, deepCopy } from '@/assets/js/tool.js';
import * as tool from '~/assets/js/tool.js';
import test from '~/assets/js/test.js';
import Demo from '~/components/Demo.vue';

export default {
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'tpl-demo-description',
          name: 'tpl-demo-description',
          content: 'My tpl-demo description',
        },
      ],
    };
  },
  data() {
    return {
      title: 'tpl-demo',
      h2: '這是 h2',
      count: 0,
    };
  },
  created() {
    // console.log(sleep, deepCopy);
    // console.log(tool.sleep, tool.deepCopy);
    console.log(test.test1);
    // console.log("created")
  },
  mounted() {
    console.log('mounted');
    this.$gsap.to('img', { rotation: 27, x: 100, duration: 1 });
    this.$axios.get('http://localhost:3031/demo/tplRouter').then((response) => {
      console.log(response);
    });
  },
  computed: {
    demoH2() {
      return this.h2 + '(computed)';
    },
  },
  methods: {
    demoFn() {
      console.log('demoFn');
    },
    countFn(index) {
      this.count = this.count + index;
    },
  },
  components: {
    Logo,
    Demo,
  },
};
</script>
