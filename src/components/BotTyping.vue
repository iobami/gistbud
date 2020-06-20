<template>
    <div class="chat-box-watson" id="isTyping" v-if="isTyping">
        <!--<i class="mdi mdi-dots-vertical"></i>-->
        <span class="watson" style="padding: 14px 0 0 20px">
          <div class="typing-indicator" v-if="isTyping">
                <span></span>
                <span></span>
                <span></span>
          </div>
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
    'isTyping',
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
    @media only screen and (max-width: 765px) {
        .chat-box-out {
            width: 95%;
            margin: auto;
        }
        .chat-box-watson {
            width: 88%;
        }
        .chat-box .watson {
            margin: 6px;
            width: 90%;
        }
    }
    @media only screen and (min-width: 444px) and (max-width: 574px) {
        .chat-box-watson {
            width: 92%;
        }
        .chat-box-user {
            width: 85%;
        }
        .chat-box .watson {
            margin: 6px 4px 4px 4px;
            width: 90%;
        }
    }
    @media only screen and (min-width: 295px) and (max-width: 444px) {
        .chat-box-out {
            width: 95%;
            margin: 2.5%;
        }
        .chat-box-watson {
            width: 92%;
        }
        .chat-box-watson .watson {
            margin: 6px;
            width: 86%;
        }
        .chat-box-watson i {
            float: left;
            font-size: 22px;
            color: #00CC33;
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
            width: 83%;
        }
    }
    @media only screen and (max-width: 245px) {
        .chat-box .watson {
            margin: 6px;
            width: 90%;
        }
        .chat-box .watson {
            margin: 6px;
            width: 75%;
        }
    }
    @media only screen and (max-width: 225px) {
        .chat-box-watson {
            width: 93%;
        }
        .chat-box .watson {
            margin: 6px;
            width: 75%;
        }
    }


    .typing-indicator {
        background-color: #F5F5F5;
        animation: 2s pulse infinite ease-out;
    }

    /*main guy here*/
    .typing-indicator span {
        height: 10px;
        width: 10px;
        float: left;
        margin: 0 3px;
        background-color: #00CC33;
        display: block;
        border-radius: 50%;
        opacity: 0.4;
    }

    .typing-indicator span:nth-child(1)
    {
        animation: 1s blink infinite .3333s;
    }

    .typing-indicator span:nth-child(2)
    {
        animation: 1s blink infinite .6666s;
    }

    .typing-indicator span:nth-child(3)
    {
        animation: 1s blink infinite .9999s;
    }

    @keyframes blink
    {
        50%
        {
            opacity: 1;
        }
    }

    @keyframes pulse
    {
        50% {
            transform: scale(1.05);
        }
    }
</style>
