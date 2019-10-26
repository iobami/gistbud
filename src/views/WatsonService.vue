<template>
  <div class="my-container">
    <div class="chat-box-out">
      <div class="chat-box-in">
        <div class="chat-box-top">
          <h5>
            <i class="mdi mdi-checkbox-blank-circle"
               style="color: #00CC33; font-size: 15px; padding: 2px"></i>Bam Bam
          </h5>
        </div>
        <div class="chat-box">
          <div class="chat-box-watson">
            <i class="mdi mdi-dots-vertical"></i>
            <span class="watson">
              Hello there, I'm Bam Bam.
            </span>
          </div>
          <div class="chat-box-user">
            <span class="user">I neep your help please.</span>
          </div>
          <div class="chat-box-user">
            <span class="user" v-if="userMessage !== ''">{{ userMessage }}</span>
          </div>
          <div class="chat-box-watson" v-if="watsonReply !== ''">
            <i class="mdi mdi-dots-vertical"></i>
            <span class="watson">
              {{ watsonReply }}
            </span>
          </div>
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
  </div>
</template>

<script>
import io from 'socket.io-client';

export default {
  name: 'WatsonService',
  mounted() {
    this.getWatsonService();
  },
  data() {
    return {
      userMessage: '',
      getUserMessage: '',
      getServiceReply: '#8c9eff',
      loader: false,
      watsonReply: '',
      socketObj: {},
      nightMode: true,
    };
  },
  methods: {
    sendMessage() {
      this.socketObj.emit('chat message', this.getUserMessage);
      this.getServiceReply = false;
      this.loader = true;
      this.userMessage = this.getUserMessage;
      this.getUserMessage = '';
      this.getResponse();
    },
    async getWatsonService() {
      this.socketObj = await io('http://localhost:5000/');
      this.socketObj.on('connect', () => {
        console.log('user connected');
      });
      this.socketObj.on('disconnect', () => {
        console.log('user disconnected');
      });
      const handle = 'Hello World from client';
      this.socketObj.emit('join', { handle });
    },
    getResponse() {
      this.socketObj.on('chat message', async (data) => {
        console.log(JSON.parse(data).output.generic[0].text);
        this.watsonReply = await JSON.parse(data).output.generic[0].text;
        this.getServiceReply = await true;
        this.loader = await false;
      });
    },
  },
};
</script>

<style scoped>
  .chat-box-out {
    width: 55%;
    margin: auto;
    background-color: #101010;
    min-height: 85vh;
    max-height: 85vh;
    border-radius: 8px;
    /*box-shadow: 2px 8px 2px 2px #181818;*/
  }
  .chat-box-in {
    margin-top: 40px;
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
    .chat-box-out {
      width: 65%;
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
