# Color picker board for Vue.js 

A [Vue.js](https://vuejs.org/) color picker component designed for humans.

Inspired by [Svbtle](https://svbtle.com/).

![Color picker board example](https://s3-us-west-2.amazonaws.com/betamark/6a363e608fc7.gif)

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
<color-picker-board default-color="#00AAFF"
                    :width="800"
                    :height="100"
                    @onSelection="colorSelection">
</color-picker-board>
```

## Properties
**default-color** | optional | string<br/>
The default color that will be shown once the component is mounted.<br/>
Example: `default-color="#00AAFF"`

**width** | optional | number | default: 800<br/>
The width of the color picker board in pixels.<br/>
Example: `:width="800"`

**height** | optional | number | default: 100<br/>
The height of the color picker board in pixels.<br/>
Example: `:height="600"`
