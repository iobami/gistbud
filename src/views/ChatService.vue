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
        <div id="chat-box" class="chat-box" ref="container">
          <div class="chat-box-watson">
            <i class="mdi mdi-dots-vertical"></i>
            <span class="watson">
              Hello ! I'm Bam Bam. I can help you get top stories.
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
          <WatsonOption
                v-if="showOptions"
                v-bind:option-value="options"
                v-on:get-option-value="getOptionValue"
          />
          <BotTyping
                  v-if="botReply"
                  v-bind:is-typing="loader"
          />
          <Card
                  v-if="botReply"
                  v-bind:news-data="newsFeed"
          />


          <transition name="fade">

            <div class="quick-reply-mobile-section" v-if="showQuickR">

              <h5 style="text-align: center; font-size: 17px">Quick Actions</h5>
              <hr style="border-color: white">
              <QuickActionMobile v-for="(action, actionKey) in quickAction" :key="actionKey"
                                 v-bind:loader="loader"
                                 v-bind:action="action"
                                 v-bind:text="action"
                                 v-on:get-quick-reply="getQuickReply(action)"
              />

            </div>

          </transition>

        </div>

        <div class="chat-box-bottom">
          <form v-on:submit.prevent="sendMessage()">

            <v-row style="margin-top: -10px;" justify="center">
              <v-col
                      cols="2"
                      md="1"
                      class="quick-reply-mobile"
              >
              <span v-if="showQuickR">
                <v-btn @click="showQuickR = !showQuickR" class="mx-2"
                       fab dark x-small color="#00CC33">
                  <v-icon dark>mdi-minus</v-icon>
                </v-btn>
              </span>
                <span v-else>
                <v-btn @click="showQuickR = !showQuickR" class="mx-2"
                       fab dark x-small color="#00CC33">
                  <v-icon dark>mdi-plus</v-icon>
                </v-btn>
              </span>
              </v-col>
              <v-col
                      cols="8"
                      sm="12"
                      md="12"
                      lg="12"
                      xl="12"
              >
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
              </v-col>
              <v-col
                      cols="2"
                      md="4"
                      class="quick-reply-mobile"
              >
                <v-btn class="mx-2" fab dark x-small color="#00CC33" @click="sendMessage()">
                  <v-icon dark style="padding-left: 3px">mdi-send</v-icon>
                </v-btn>
              </v-col>
            </v-row>

            <!--INITIAL FORM-->
            <!--<v-text-field-->
                    <!--v-if="!getDirection"-->
                    <!--color="#00CC33"-->
                    <!--label=""-->
                    <!--:dark=nightMode-->
                    <!--autocomplete="off"-->
                    <!--autofocus-->
                    <!--:disabled="loader"-->
                    <!--:loading=!getServiceReply-->
                    <!--placeholder="Type here..."-->
                    <!--v-model="getUserMessage"-->
            <!--&gt;</v-text-field>-->
            <!--<v-text-field-->
                    <!--v-if="getDirection"-->
                    <!--color="#00CC33"-->
                    <!--:dark=nightMode-->
                    <!--autofocus-->
                    <!--placeholder="Type here..."-->
                    <!--v-model="getUserMessage"-->
                    <!--id="pac-input"-->
                    <!--class="controls"-->
            <!--&gt;</v-text-field>-->

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
      <audio id="userAudio">
        <!--<source src="notification.ogg" type="audio/ogg">-->
        <source src="../assets/sounds/notification.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
      <audio id="botAudio">
        <!--<source src="notification.ogg" type="audio/ogg">-->
        <source src="../assets/sounds/soft_notification.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client';
import Vue from 'vue';
import UserSide from '../components/UserSide.vue';
import WatsonSide from '../components/WatsonSide.vue';
import AboutUs from '../components/About-Us.vue';
import Card from '../components/Card.vue';
import QuickAction from '../components/QuickAction.vue';
import QuickActionMobile from '../components/QuickActionMobile.vue';
import WatsonOption from '../components/WatsonOption.vue';
import BotTyping from '../components/BotTyping.vue';

export default {
  name: 'WatsonService',
  async mounted() {
    /* eslint-env jquery */
    this.getWatsonService();
    $(window).on('resize', () => {
      this.showQuickR = false;
    });
  },
  components: {
    UserSide,
    WatsonSide,
    AboutUs,
    Card,
    QuickAction,
    QuickActionMobile,
    WatsonOption,
    BotTyping,
  },
  data() {
    return {
      userMessage: [],
      getUserMessage: '',
      currentUserMessage: '',
      getServiceReply: '#8c9eff',
      botReply: '',
      loader: false,
      showQuickR: false,
      watsonReply: 'yeah I\'m here',
      watsonSide: '',
      socketObj: {},
      newsFeed: {},
      userConversation: [],
      options: [],
      showOptions: false,
      nightMode: true,
      quickAction: [
        // 'Check school fees', 'Get directions', 'Admissions', 'Post UTME', 'FAQs',
        'News', 'Dry Jokes', 'Fun Facts',
      ],
    };
  },
  methods: {
    getQuickReply(value) {
      this.userSide(value);
      this.socketObj.emit('chat', value);
      this.playAudio('userAudio');
      this.getServiceReply = false;
      this.showOptions = false;
      this.showQuickR = false;
      this.loader = true;
      this.isLoading(this.loader);
      const element = document.getElementById('chat-box');
      element.scrollTop = element.scrollHeight;
    },
    async getWatsonService() {
      this.socketObj = await io('https://gistbud-api.herokuapp.com/');
      // this.socketObj = await io('http://localhost:5003/');
      this.socketObj.once('connect', () => {
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
      if (this.getUserMessage.trim() === '') return;
      this.socketObj.emit('chat', this.getUserMessage);
      this.playAudio('userAudio');
      this.getServiceReply = false;
      this.showOptions = false;
      this.loader = true;
      this.userSide(this.getUserMessage);
      this.isLoading(this.loader);
      this.getUserMessage = '';
      const element = document.getElementById('chat-box');
      element.scrollTop = element.scrollHeight;
    },
    playAudio(value) {
      const x = document.getElementById(value);
      x.play();
    },
    getResponse() {
      this.socketObj.on('chat', async (data) => {
        this.watsonReply = '';
        this.options = [];
        // this.watsonReply = await JSON.parse(data).output.generic[0].text;
        const { response } = await data;

        response.forEach((responseObject) => {
          if ((responseObject.text !== '') && (responseObject.text !== null)) {
            if (responseObject.text) {
              this.serviceSide(responseObject.text);
            }
          }
          if (responseObject.options !== null) {
            this.showOptions = true;
            this.options = responseObject.options;
          }
          if (responseObject.card) {
            this.newsCard(responseObject);
          }
        });

        // this.userConversation.push({ watson: this.watsonReply, user: this.currentUserMessage });
        this.getServiceReply = await true;
        this.loader = await false;

        const loader = document.getElementById('isTyping');
        if (loader !== null) {
          loader.remove();
        }

        const element = document.getElementById('chat-box');
        element.scrollTop = element.scrollHeight;
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
    newsCard(message) {
      const ComponentClass = Vue.extend(Card);
      const instance = new ComponentClass({
        propsData: { newsData: message },
      });
      instance.$mount();
      this.$refs.container.appendChild(instance.$el);
    },
    isLoading(loader) {
      const ComponentClass = Vue.extend(BotTyping);
      const instance = new ComponentClass({
        propsData: { isTyping: loader },
      });
      instance.$mount();
      this.$refs.container.appendChild(instance.$el);
    },
    serviceSide(serviceReply) {
      this.playAudio('botAudio');
      const ComponentClass = Vue.extend(WatsonSide);
      const instance = new ComponentClass({
        propsData: { watsonMessage: serviceReply },
      });
      instance.$mount();
      this.$refs.container.appendChild(instance.$el);
    },
    getOptionValue(option) {
      this.showOptions = false;
      this.socketObj.emit('chat', option);
      this.playAudio('userAudio');
      this.userSide(option);
      this.getServiceReply = false;
      this.loader = true;
      this.isLoading(this.loader);
      const element = document.getElementById('chat-box');
      element.scrollTop = element.scrollHeight;
    },
  },
};
</script>

<style scoped>

    /*QUICK REPLY TRANSITION*/

    .fade-enter-active, .fade-leave-active {
      transition: opacity .6s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }

    /*QUICK REPLY TRANSITION END*/

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
  .quick-reply-mobile {
    display: none;
  }
  .quick-reply-mobile-section {
    /*width: 30%;*/
    position: fixed;
    bottom: 118px;
    z-index: 20;
  }
  @media screen and (max-width: 495px) {
    .quick-reply-mobile {
      display: block;
    }
  }
  .chat-box-in {
    /*margin-top: 40px;*/
    position: relative;
    z-index: 1;
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
  @media only screen and (max-width: 765px) {
    .chat-box-out {
      width: 95%;
      margin: auto;
    }
    .chat-box-watson {
      width: 88%;
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
    .chat-box .watson {
      margin: 6px;
      width: 90%;
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
