// import Vue from 'vue';
export default {
  methods: {
    // errorNotification: (text, title = 'Error!') => {
    //   Vue.notify({ type: 'error', title, text });
    // },
    // successNotification: (text, title = 'Successful') => {
    //   Vue.notify({ type: 'success', title, text });
    // },
  },
  computed: {
    hideHeader: function isBusy() {
      return this.$store.getters.getHideHeader;
    },
    errorMessage: function errorMessage() {
      return this.$store.getters.getErrorMessage;
    },
    successMessage: function successMessage() {
      return this.$store.getters.getSuccessMessage;
    },
  },
};
