<template>
  <div class="toast" ref="toast">
      <div v-if="dangerouslyUseHTMLString" v-html="$slot.default[0]"></div>
      <slot v-else></slot>
      <div class="toast-line" ref="line"></div>
      <span class="close" v-if="closeOption" @click="closeOpt">
          {{closeOption.text}}
      </span>
  </div>
</template>

<script>
export default {
    name: 'NcToast',
    props: {
        autoClose: {
            type: Boolean,
            default: true
        },
        delay: {
            type: Number,
            default: 3
        },
        closeOption: {
            type: Object,
            default: () => {
                return {
                    text: '关闭',
                    callback: (toast) => {
                        console.log('xxx');
                        toast.close();
                    }
                }
            }
        },
        dangerouslyUseHTMLString: {
            type: Boolean,
            default: false
        },
        position: {
            type: String,
            default: 'top',
            validator(value) {
                return ['top', 'bottom', 'middle'].includes(value);
            }
        }
    },
    methods: {
        closeOpt() {
            this.close();
            if(this.closeOption && typeof this.closeOption.callback === 'function') {
                this.closeOption.callback();
            }
        },
        close() {
            this.$el.remove();
            this.$destroy();
        }
    },
    mounted() {
        if(this.autoClose) {
            setTimeout(() => {
                this.close();
            }, this.delay * 1000);
        }
        this.$nextTick(() => {
            this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`;
        });
    }
}
</script>

<style lang="scss" scoped>
$toast-color: #fff;
$toast-font-size: 14px;
$toast-min-height: 40px;
$toast-background-color: rgba(0, 0, 0, 0.75);
.toast {
    color: $toast-color;
    border-radius: 4px;
    line-height: 1.8;
    min-height: $toast-min-height;
    font-size: $toast-font-size;
    background-color: $toast-background-color;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
}
.close {
    padding-left: 16px;
}
.toast-line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
}
</style>