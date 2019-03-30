# Color picker for Vue.js 

A [Vue.js](https://vuejs.org/) color picker component designed for humans.

Inspired by [Svbtle's](https://svbtle.com/) color picker.

![Color picker board example](https://s3-us-west-2.amazonaws.com/betamark/6a363e608fc71.gif)

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
<color-picker-board :defaultColor="'#00AAFF'"
                    :width="800"
                    :height="100"
                    @onSelection="colorSelection">
</color-picker-board>
```

## Properties

  | Property value | Type | Default value | Description |
  | -------------- | ---- | ------------- | ----------- |
  | `defaultColor` | `string` | `'#00AAFF'` | The default color shown once the component renders |
  | `width` | `number` | `800` | The width of the color picker in pixels |
  | `height` | `number` | `100` | The height of the color picker in pixels |
