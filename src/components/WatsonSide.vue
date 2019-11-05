<template>
    <div class="chat-box-watson">
        <i class="mdi mdi-dots-vertical"></i>
        <span class="watson">
          {{ watsonMessage }}
        </span>
    </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: [
    'watsonMessage',
  ],
};
</script>
<style scoped>
    .chat-box-watson {
        width: 70%;
        float: left;
        clear: both;
    }
    .chat-box-watson .watson {
        margin: 6px;
        /*background-color: blue;*/
        float: left;
        clear: right;
        padding: 1px;
        width: 91%;
    }
    .chat-box-watson i {
        float: left;
        font-size: 26px;
        color: #00CC33;
    }
</style>
