import ColorPickerBoard from './ColorPickerBoard.vue';

module.exports = {
  install: function (Vue, options) {
    Vue.component('color-picker-board', ColorPickerBoard);
  }
};