import type { RouterConfig } from "@nuxt/schema";

import { useScrollPositionStore } from "@/stores/scrollPosition";

export default <RouterConfig>{
    scrollBehavior(to, from, savedPosition) {
      const scrollPositionStore = useScrollPositionStore();
      if (savedPosition) {
        return savedPosition;
      } else {
        return scrollPositionStore.getPosition(to);
      }
    }
};