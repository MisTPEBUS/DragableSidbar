import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
const sidbarMaxWidth = 200;
const maxPercent = 100;
const minPercent = 10;
const defaultPercent = 20;


createApp({
  data: () => ({
    dividerPosition: 0,
    isDragging: true
  }),
  methods: {
    handleDragging(e) {
      let pageX;
      let pageY;
      if (e.type.startsWith('touch')) {
        // mobile
        pageX = e.touches[0].pageX;
        pageY = e.touches[0].pageY;
      } else {
        // PC
        pageX = e.pageX;
        pageY = e.pageY;
      }

      if (pageY < 0) {
        this.endDragging();
      }
      const percentage = (pageX / window.innerWidth) * 100

      /*  if (e.pageX >= sidbarMaxWidth && percentage >= minPercent && percentage <= maxPercent) {
         this.dividerPosition = percentage.toFixed(2)
       } */
      this.dividerPosition = percentage.toFixed(2)
    },
    startDragging() {
      this.isDragging = false
      if (navigator.maxTouchPoints > 0) {
        document.addEventListener('touchmove', this.handleDragging);
      }
      else {

        document.addEventListener('mousemove', this.handleDragging);
      }
    },
    endDragging() {
      this.isDragging = true
      if (navigator.maxTouchPoints > 0) {

        document.removeEventListener('touchmove', this.handleDragging);
      }
      else {
        alert();
        document.removeEventListener('mousemove', this.handleDragging)
      }
    },
  },
  mounted() {
    // 初始直
    this.dividerPosition = defaultPercent;
    this.dividerPosition = (sidbarMaxWidth / window.innerWidth <= 20) ? 20 : (sidbarMaxWidth / window.innerWidth);

  }
}).mount('#app');
