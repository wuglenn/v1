// spotifyStore.js
import { defineStore } from "pinia";
import { url } from "~/api";

let eventSource = null;

export const useSpotifyStore = defineStore("spotify", {
  state: () => ({
    currentSong: null,
  }),
  actions: {
    initializeSSE() {
      // eventSource = new EventSource("http://localhost:3000/spotify/status");
      eventSource = new EventSource(`${url}/spotify/status`);

      eventSource.onmessage = (event) => {
        const currentSong = JSON.parse(event.data);
        this.updateCurrentSong(currentSong);
      };

      eventSource.onerror = (error) => {
        console.error("SSE error:", error);
        // eventSource.close();
      };
    },
    updateCurrentSong(currentSong) {
      this.currentSong = currentSong;
    },
    closeSSE() {
      if (eventSource) {
        eventSource.close();
      }
    },
  },
});
