<template>
    <div class="options-container">
        <div class="chat-option-button-outer">
            <div class="chat-option-button">
                <v-btn
                        outlined
                        rounded
                        elevation="10"
                        dark
                        color="#00CC33"
                        v-for="(optionValue, optionsKey) in optionsArray"
                        :key="optionsKey"
                        @click="getOptionValue(optionValue.text)"
                        style="margin-right: 5px"
                >{{ optionValue.text }}</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      optionsArray: this.optionValue,
    };
  },
  props: {
    optionValue: Array,
  },
  methods: {
    getOptionValue(option) {
      this.$emit('get-option-value', option);
    },
  },
};
</script>
<style scoped>
    .chat-option-button {
        height: 62px;
        width: 100%;
        text-align: center;
        bottom: 70px;
        overflow-x: scroll;
        white-space: nowrap;
        margin-bottom: -28px;
    }
    .chat-option-button-outer {
        height: 47px;
        width: 100%;
        overflow: hidden;
        margin-bottom: -30px;
    }
    .options-container {
        width: 100%;
        z-index: 1;
        bottom: 0;
        position: absolute;
        padding: 0 51px 0 0;
        margin-top: 12px;
    }
</style>
