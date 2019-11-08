<template>
  <div class="my-container">
    <div class="about-us" style="margin-top: 10%">
      <AboutUs
      style="width: 85%; margin: auto;"
      />
    </div>
    <div class="chat-box-out">
      <div class="chat-box-in">
        <div class="chat-box-top">
          <h5>
            <i class="mdi mdi-checkbox-blank-circle"
               style="color: #00CC33; font-size: 15px; padding: 2px"></i>Bam Bam
          </h5>
        </div>
        <div class="chat-box" ref="container">
          <div class="chat-box-watson">
            <i class="mdi mdi-dots-vertical"></i>
            <span class="watson">
              Hello there, I'm Bam Bam.
            </span>
          </div>
          <UserSide
                  v-if="currentUserMessage"
                  v-bind:current-user-message="currentUserMessage"
          />
          <WatsonSide
                  v-if="watsonSide"
                  v-bind:watson-message="watsonReply"
          />
        </div>
        <div class="chat-box-bottom">
          <form v-on:submit.prevent="sendMessage()">
            <v-text-field
                    color="#00CC33"
                    label=""
                    :dark=nightMode
                    autocomplete="off"
                    autofocus
                    :disabled="loader"
                    :loading=!getServiceReply
                    placeholder="Type here..."
                    v-model="getUserMessage"
            ></v-text-field>
          </form>
        </div>
      </div>
    </div>
    <div class="quick-reply">
      <h5 style="text-align: center">Quick Actions</h5>
      <hr style="border-color: white">
      <br>
      <QuickAction v-for="(action, actionKey) in quickAction" :key="actionKey"
              v-bind:loader="loader"
              v-bind:action="action"
              v-bind:text="action"
              v-on:get-quick-reply="getQuickReply(action)"
      />
      <!--<v-btn dark color="#00CC33" @click="changeMode()"-->
             <!--style="width: 84%; margin-left: 8%; margin-right: 8%">Night Mode</v-btn>-->
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client';
import Vue from 'vue';
import UserSide from '../components/UserSide.vue';
import WatsonSide from '../components/WatsonSide.vue';
import AboutUs from '../components/About-Us.vue';
import QuickAction from '../components/QuickAction.vue';

export default {
  name: 'WatsonService',
  mounted() {
    /* eslint-env jquery */
    this.getWatsonService();
  },
  components: {
    UserSide,
    WatsonSide,
    AboutUs,
    QuickAction,
  },
  data() {
    return {
      userMessage: [],
      getUserMessage: '',
      currentUserMessage: '',
      getServiceReply: '#8c9eff',
      loader: false,
      watsonReply: 'yeah I\'m here',
      watsonSide: '',
      socketObj: {},
      userConversation: [],
      nightMode: true,
      quickAction: [
        'Check school fees', 'Get directions', 'Admissions', 'Post UTME', 'FAQs',
      ],
    };
  },
  methods: {
    // changeMode() {
    //   alert('heyyy');
    // },
    getQuickReply(value) {
      this.userSide(value);
      this.socketObj.emit('chat message', value);
      this.getServiceReply = false;
      this.loader = true;
    },
    async getWatsonService() {
      this.socketObj = await io('http://localhost:5000/');
      this.socketObj.on('connect', () => {
        console.log('user connected');
        this.getResponse();
      });
      this.socketObj.on('disconnect', () => {
        console.log('user disconnected');
      });
      const handle = 'Hello World from client';
      this.socketObj.emit('join', { handle });
    },
    sendMessage() {
      this.socketObj.emit('chat message', this.getUserMessage);
      this.getServiceReply = false;
      this.loader = true;
      this.userSide(this.getUserMessage);
      this.getUserMessage = '';
    },
    getResponse() {
      this.socketObj.on('chat message', async (data) => {
        console.log(JSON.parse(data).output);
        this.watsonReply = '';
        this.watsonReply = await JSON.parse(data).output.generic[0].text;
        this.serviceSide(this.watsonReply);
        // this.userConversation.push({ watson: this.watsonReply, user: this.currentUserMessage });
        this.getServiceReply = await true;
        this.loader = await false;
      });
    },
    userSide(message) {
      const ComponentClass = Vue.extend(UserSide);
      const instance = new ComponentClass({
        propsData: { currentUserMessage: message },
      });
      instance.$mount();
      this.$refs.container.appendChild(instance.$el);
    },
    serviceSide(serviceReply) {
      const ComponentClass = Vue.extend(WatsonSide);
      const instance = new ComponentClass({
        propsData: { watsonMessage: serviceReply },
      });
      instance.$mount();
      this.$refs.container.appendChild(instance.$el);
    },
  },
};
</script>

<style scoped>
  .about-us {
    width: 25%;
    float: left;
  }
  .chat-box-out {
    float: left;
    width: 55%;
    /*margin: auto;*/
    background-color: #101010;
    min-height: 85vh;
    max-height: 85vh;
    border-radius: 8px;
    margin-top: 40px;
  }
  .quick-reply {
    width: 20%;
    padding: 15px;
    float: left;
    margin-top: 10%;
  }
  .chat-box-in {
    /*margin-top: 40px;*/
    position: relative;
  }
  .chat-box-top {
    padding: 12px 12px 10px 24px;
    background-color: #282828;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .chat-box {
    padding: 16px 16px 16px 26px;
    min-height: 67vh;
    max-height: 67vh;
    overflow-y: auto;
  }
  .chat-box-watson {
    width: 70%;
    float: left;
    clear: both;
  }
  .chat-box-user {
    width: 70%;
    float: right;
    clear: both;
  }
  .chat-box .watson {
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
  .chat-box .user {
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
  .chat-box-bottom {
    position: absolute;
    /*bottom: 63px;*/
    height: 68px;
    width: 100%;
    padding: 5px;
  }
  .chat-box-bottom form {
    width: 94%;
    margin: auto;
  }
  @media only screen and (max-width: 1190px) {
    .about-us {
      display: none;
    }
    .quick-reply {
      display: none;
    }
    .chat-box-out {
      width: 65%;
      float: none;
      margin: auto;
    }
    .chat-box-in {
      margin-top: 40px;
      /*position: relative;*/
    }
    .chat-box-watson {
      width: 75%;
    }
    .chat-box-user {
      width: 75%;
    }
  }
  @media only screen and (max-width: 1015px) {
    .chat-box-out {
      width: 85%;
      margin: auto;
    }
    .chat-box-watson {
      width: 80%;
    }
    .chat-box-user {
      width: 80%;
    }
  }
  @media only screen and (max-width: 675px) {
    .chat-box-out {
      width: 95%;
      margin: auto;
    }
    .chat-box-watson {
      width: 82%;
    }
    .chat-box-user {
      width: 82%;
    }
  }
  @media only screen and (min-width: 444px) and (max-width: 574px) {
    .chat-box-watson {
      width: 85%;
    }
    .chat-box-user {
      width: 85%;
    }
    .chat-box .watson {
      margin: 6px;
      width: 87%;
    }
  }
  @media only screen and (min-width: 295px) and (max-width: 444px) {
    .chat-box-out {
      width: 95%;
      margin: 2.5%;
    }
    .chat-box-watson {
      width: 87%;
    }
    .chat-box-user {
      width: 87%;
    }
    .chat-box .watson {
      margin: 6px;
      width: 80%;
    }
  }
  @media only screen and (max-width: 295px) {
    .chat-box-watson {
      width: 90%;
    }
    .chat-box-user {
      width: 88%;
    }
    .chat-box .watson {
      margin: 6px;
      width: 75%;
    }
  }
  @media only screen and (max-width: 245px) {
    .chat-box .watson {
      margin: 6px;
      width: 87%;
    }
    .chat-box .watson {
      margin: 6px;
      width: 72%;
    }
  }
  @media only screen and (max-width: 225px) {
    .chat-box-watson {
      width: 94%;
    }
    .chat-box .watson {
      margin: 6px;
      width: 72%;
    }
  }
</style>
