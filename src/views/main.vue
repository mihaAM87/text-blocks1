<template>
  <div class="container">
    <div class="row" id="mainElement">
      <TextBlock
        v-for="data of dataArr"
        :key="data.id"
        :content="data.content"
        class="text-block-width"
      />
      <div class="bacgroundImageDiv" @mousemove="followCursorMouse">
        <img src="img/MainBackgroundImage.jpg" class="bacgroundImage" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import TextBlock from './TextBlock/TextBlock.vue';

export default {
  data() {
    return {
      backgroundPos: {
        top: 0,
        left: 0,
      },
      mousePos: {
        top: 0,
        left: 0,
      },
    };
  },
  props: {},
  computed: {
    ...mapGetters({
      dataArr: 'dataArr',
    }),
  },
  methods: {
    ...mapMutations(['followCursor']),
    followCursorMouse() {
      // const elem = this.$refs;
      // this.followCursor(document);
    },
  },
  components: { TextBlock },
};
</script>

<style scoped>
.row {
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
}

.bacgroundImageDiv,
.bacgroundImage {
  height: 1200px;
  position: fixed;
}

.text-block-width {
  background: transparent;
  z-index: 1;
  justify-content: space-between;
}
@media (max-width: 576px) {
  .text-block-width {
    width: 100%;
  }
}

@media (min-width: 577px) and (max-width: 768px) {
  .text-block-width {
    width: 50%;
  }
}
@media (min-width: 769px) {
  .text-block-width {
    width: 33%;
  }
}
</style>
