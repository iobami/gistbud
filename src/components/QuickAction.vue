<template>
    <div class="text-center ma-2 quick-reply-button">
        <v-btn dark color="#00CC33" @click="snackbar = true">{{ action }}</v-btn>
        <v-snackbar
                v-model="snackbar"
        >
            {{ text }}
            <v-btn
                    color="pink"
                    text
                    @click="snackbar = false"
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
    'action', 'text',
  ],
};
</script>
<style>
    .quick-reply-button button {
        width: 90%;
        margin-left: 5%;
        margin-right: 5%;
    }
</style>
