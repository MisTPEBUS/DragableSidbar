import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
const sidbarMaxWidth = 200;
const maxPercent = 100;
const minPercent = 10;
const defaultPercent = 20;


createApp({
  data: () => ({
    dividerPosition: 0,

  }),
  methods: {
    handleDragging(e) {
      const percentage = (e.pageX / window.innerWidth) * 100
      
      if (e.pageX >= sidbarMaxWidth && percentage >= minPercent && percentage <= maxPercent) {
        this.dividerPosition = percentage.toFixed(2)
      }
    },
    startDragging() {
      
      document.addEventListener('mousemove', this.handleDragging)
    },
    endDragging() {
      document.removeEventListener('mousemove', this.handleDragging)
    },
  },
  mounted() {
    this.dividerPosition = defaultPercent;
    this.dividerPosition = (sidbarMaxWidth / window.innerWidth <= 20) ? 20 : (sidbarMaxWidth / window.innerWidth);

  }
}).mount('#app');
