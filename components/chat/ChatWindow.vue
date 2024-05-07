<script setup>
const chatHistory = ref([]);
const userOptions = ref([]);

const initialResponse = ["Hi, how can I help you today?"];

const possibleQueries = { "Hi, how can I help you today?": ["Just saying hi!", "We'd like to hire you"], "Can I help you with anything else?": ["Just saying hi!", "We'd like to hire you"], "Sure, here you go": ["Just saying hi!", "We'd like to hire you"], "Send me a message and lets chat further!": ["Other options?"] };

const possibleResponses = { "Just saying hi!": ["Hello!", "Thanks for saying hi 😁", "I hope you've enjoyed browsing my work", "Can I help you with anything else?"], "We'd like to hire you": ["Awesome!", "Send me a message and lets chat further!"], "Other options?": ["Sure, here you go"] };

const DELAY = 20;

function makeResponse(response, callback) {
  const idx = chatHistory.value.length;
  chatHistory.value.push({ text: "", isBot: true });
  pushToResponse(response, idx, 0, callback);
}

function pushToResponse(response, idx, i, callback) {
  setTimeout(function () {
    chatHistory.value[idx].text = chatHistory.value[idx].text + response[i];
    scrollWithMsg();
    if (i + 1 < response.length) {
      pushToResponse(response, idx, i + 1, callback);
    } else {
      callback();
    }
  }, DELAY);
}

function showResponses(responses, idx, callback) {
  if (idx != responses.length - 1) {
    makeResponse(responses[idx], function () {
      showResponses(responses, idx + 1, callback);
    });
  } else {
    makeResponse(responses[idx], callback);
  }
}

onMounted(function () {
  showResponses(initialResponse, 0, function () {
    showOptions(initialResponse[initialResponse.length - 1]);
  }); // start chat
});

function showOptions(response) { // allow user to respond
  possibleQueries[response].forEach(function (option) {
    userOptions.value.push(option);
  });
  setTimeout(function () {
    scrollWithMsg();
  }, 100);
}

function chooseOption(option) {
  userOptions.value.length = 0;
  chatHistory.value.push({ text: option, isBot: false });
  showResponses(possibleResponses[option], 0, function () {
    showOptions(possibleResponses[option][possibleResponses[option].length - 1]);
  });
}

const scrollWithMsg = () => {
  const messageBody = document.querySelector("#scroller");
  messageBody.scrollTop = messageBody.scrollHeight;
}

</script>

<template>
  <div class="relative top-[100px] h-[calc(100%-100px)] w-full overflow-y-scroll scrollbar-hide flex flex-col"
    id="scroller">
    <div class="mt-[10px] mx-[10px] flex flex-col gap-1 grow">
      <div v-for="(chat, index) in chatHistory" :key="index">
        <ChatResponse v-if="chat.isBot" :response=chat.text />
        <ChatQuery v-else :query=chat.text @click="chat.text" />
      </div>
    </div>
    <div class="p-[10px] flex flex-row-reverse flex-wrap gap-2 mt-2"
      :class="{'bg-theme-700/50': userOptions.length > 0}">
      <ChatOption v-for="(option, index) in userOptions" :key="index" :option="option" @click="chooseOption(option)" />
    </div>
  </div>
</template>
