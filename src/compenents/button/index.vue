<template>
    <button class="nc-button">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'nc-button',
    props: {
        icon: {
            type: String
        },
        iconPosition: {
            type: String,
            default: 'left',
            validator: (value) => {
                return ['left', 'right', 'top', 'bottom'].includes(value);
            }
        }
    }
}
</script>

<style lang="scss">
:root {
    --nc-button-height: 32px;
    --nc-font-size: 14px;
    --nc-button-bg: #fff;
    --nc-button-active-bg: #eee;
    --border-radius: 4px;
    --color: #999;
    --border-color: #999;
    --border-color-hover: #666;
}
.nc-button {
    padding: 0 1em;
    color: var(--color);
    height: var(--nc-button-height);
    font-size: var(--nc-font-size);
    border-color: var(--border-color);
    border-radius: var(--border-radius);
    background-color:var(--nc-button-bg);
    &:hover {
        border-color: var(--border-color-hover);
    }
    &:active {
        background-color:var(--nc-button-active-bg);
    }
    &:focus {
        outline: none;
    }
}
</style>