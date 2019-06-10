# Color picker for Vue.js [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) 

A [Vue.js](https://vuejs.org/) color picker component designed for humans.

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
<vue-color-picker-board :width="800"
                        :height="100"
                        :defaultColor="'#00AAFF'"
                        @onSelection="colorSelection">
</vue-color-picker-board>
```

## Properties

  | Property value | Type | Default value | Description |
  | -------------- | ---- | ------------- | ----------- |
  | `width` | `number` | `800` | The width of the color picker in pixels |
  | `height` | `number` | `100` | The height of the color picker in pixels |
  | `defaultColor` | `string` | `'#00AAFF'` | The default color shown once the component renders |

## MIT license:	

 ```	
Copyright (c) 2019 Betamark (Shlomi Nissan)	
 Permission is hereby granted, free of charge, to any person obtaining a copy	
of this software and associated documentation files (the "Software"), to deal	
in the Software without restriction, including without limitation the rights	
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell	
copies of the Software, and to permit persons to whom the Software is	
furnished to do so, subject to the following conditions:	
 The above copyright notice and this permission notice shall be included in all	
copies or substantial portions of the Software.	
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR	
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,	
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE	
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER	
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,	
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE	
SOFTWARE.
