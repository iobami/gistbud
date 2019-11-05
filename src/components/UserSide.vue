<template>
    <div class="chat-box-user">
        <span class="user">{{ currentUserMessage }}</span>
    </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: [
    'currentUserMessage',
  ],
};
</script>
<style scoped>
    .chat-box-user {
        width: 70%;
        float: right;
        clear: both;
    }
    .chat-box-user .user {
        margin: 6px;
        background-color: #00CC33;
        float: right;
        clear: both;
        /*padding: 5px 8px 5px 8px;*/
        padding: 9px;
        border-radius: 25px;
        min-width: 12%;
        text-align: center;
    }
</style>
