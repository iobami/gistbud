<template>
    <div class="text-center ma-2 quick-reply-button">
        <!--<v-btn dark color="#00CC33" @click="snackbar = true">{{ action }}</v-btn>-->
        <v-btn dark color="#00CC33" :disabled="loader" @click="getQuickReply">{{ action }}</v-btn>
        <v-snackbar
                v-model="snackbar"
        >
            {{ text }}
            <v-btn
                    color="pink"
                    text
                    @click="closeSnackBar"
            >
                Close
            </v-btn>
        </v-snackbar>
    </div>
</template>
<script>
export default {
  data() {
    return {
      snackbar: false,
    };
  },
  props: [
    'action', 'text', 'loader',
  ],
  methods: {
    getQuickReply() {
      this.snackbar = false;
      this.snackbar = true;
      setTimeout(function closeBar() {
        this.snackbar = false;
      }, 2000);
      // this.$emit('clicked', 'someValue');
      this.$emit('get-quick-reply');
    },
    closeSnackBar() {
      this.snackbar = false;
    },
  },
};
</script>
<style>
    .quick-reply-button button {
        width: 90%;
        margin-left: 5%;
        margin-right: 5%;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .8s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
