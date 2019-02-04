<template>
    <div class="component color-picker">
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
                default: "#4BBADD",
                validator: value => {
                    return (/^#[0-9a-f]{3,6}$/i).test(value);
                }
            },
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
                const percent = Math.round((this.canvas.width - canvasX) / this.canvas.width * 100);

                const h = 3.6 * percent;
                const s = Math.round((yPosition / 3 + 50));
                const l = Math.round(yPosition / 3 + 40);

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