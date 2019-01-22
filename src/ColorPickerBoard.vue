<template>
    <div class="component color-picker">
        <div class="form-group">
            <label><span>{{ label }}</span></label>
            <div class="input-wrapper">
                <input type="text" v-model="selectedColor" class="text-input" />
                <div class="color-swatch" v-bind:style="{ backgroundColor: selectedColor }"></div>
            </div>
        </div>
        <canvas id="canvas" 
                @mousemove="onMouseMove" 
                @click="onClick" 
                v-bind:width="width"
                v-bind:height="height"
                v-bind:style="{ backgroundColor: color }">
        </canvas>
    </div>
</template>
<script>
    export default {
        mounted() {
            this.color = this.defaultColor;
            this.selectedColor = this.color;
            this.canvas = document.getElementById("canvas");
        },
        props: {
            width: {
                type: Number,
                default: 800
            },
            height: {
                type: Number,
                default: 100
            },
            defaultColor: {
                type: String,
                required: true
            },
            label: {
                type: String,
                default: "Color picker"
            }
        },
        data: function(){
            return {
                canvas: null,
                color: null,
                selectedColor: null
            }
        },
        methods: {
            onClick() {
                this.selectedColor = this.color;
                this.$emit("onSelection", this.color);
            },
            onMouseMove(evt) {
                const hexColor = this.getHexColor(evt);
                this.color = hexColor;
            },
            getHexColor(evt) {
                const canvasX = evt.pageX - this.canvas.offsetLeft;
                const canvasY = evt.pageY - this.canvas.offsetTop;
                const yPosition = (this.canvas.height - canvasY) / this.canvas.height * 100;

                const h = Math.round((this.canvas.width - canvasX) / this.canvas.width * 100);
                const s = Math.round(100 - (yPosition / 3 + 30));
                const l = Math.round(yPosition / 3 + 35);

                const hex = this.hslToHex(h, s, l);
                return hex;
            },
            hslToHex(h, s, l) {
                h /= 360;
                s /= 100;
                l /= 100;

                let r, g, b;

                if (s === 0) {
                    r = g = b = l;
                } else {
                    const hueToRgb = (p, q, t) => {
                        if (t < 0) t += 1;
                        if (t > 1) t -= 1;
                        if (t < 1 / 6) return p + (q - p) * 6 * t;
                        if (t < 1 / 2) return q;
                        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                        return p;
                    }

                    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                    const p = 2 * l - q; 

                    r = hueToRgb(p, q, h + 1 / 3);
                    g = hueToRgb(p, q, h);
                    b = hueToRgb(p, q, h - 1 / 3);
                }

                const toHex = x => {
                    const hex = Math.round(x * 255).toString(16);
                    return hex.length === 1 ? '0' + hex : hex;
                }

                return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
            }
        },
    }
</script>
<style lang="less" scoped>
.component {
    &.color-picker {
        @border-radius: 5px;
        @swatch-radius: 25px;
        @input-width: 120px;

        canvas {
            border-radius: @border-radius;
        }

        label {
                padding-bottom: 10px;
            }

        .input-wrapper {
            position: relative;
            max-width: @input-width;

            

            input {
                width: 100%;
            }

            .color-swatch {
                position: absolute;
                width: @swatch-radius;
                height: @swatch-radius;
                border-radius: @swatch-radius / 2;
                bottom: 5px;
                right: -@swatch-radius - 15px;
            }
        }
    }
}
</style>