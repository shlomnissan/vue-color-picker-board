# Color picker board for Vue.js 

A [Vue.js](https://vuejs.org/) color picker component designed for humans.

Inspired by [Svbtle](https://svbtle.com/).

## Installation

```js
npm i --save-dev vue-color-picker-board
```

### Browser

Include the script file, then install the component with `Vue.use(VueColorPickerBoard);` e.g.:

```html
<script type="text/javascript" src="node_modules/vuejs/dist/vue.min.js"></script>
<script type="text/javascript" src="node_modules/vue-color-picker-board/dist/vue-color-picker-board.min.js"></script>
<script type="text/javascript">
  Vue.use(VueColorPickerBoard);
</script>
```

### Module

```js
import VueColorPickerBoard from 'vue-color-picker-board';
```

## Usage

Once installed, it can be used in a template as simply as:

```html
<color-picker-board></color-picker-board>
```