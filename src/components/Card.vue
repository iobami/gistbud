<template>
    <transition name="fade">
        <div class="chat-box-watson">
            <i class="mdi mdi-dots-vertical"></i>
            <span class="watson">
            <v-card
                    class="mx"
                    max-width="350"
            >
            <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="newsData.imageUrl"
            >
              <!--<v-card-title>News Feed</v-card-title>-->
            </v-img>

            <v-card-text class="text--primary">
              <div></div>

              <div>{{ newsData.title }}</div>
            </v-card-text>

            <v-card-actions style="margin-top: -10px">

              <v-btn
                      color="#00CC33"
                      text
                      @click="goToPage(newsData.source)"
              >
                Explore
              </v-btn>
            </v-card-actions>
          </v-card>
        </span>
        </div>
    </transition>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: [
    'newsData',
  ],
  methods: {
    goToPage(route) {
      window.open(route, '_blank');
    },
  },
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
</style>
