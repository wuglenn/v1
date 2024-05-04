import { defineStore } from "pinia";

export const useScrollPositionStore = defineStore("scrollPosition", {
  state: () => ({
    positions: {},
  }),
  actions: {
    savePosition(route, position) {
      this.positions[route.path] = position;
    },
    getPosition(route) {
      return this.positions[route.path] || { top: 0, left: 0 };
    },
  },
});
