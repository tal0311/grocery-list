import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import { useUserStore } from "@/stores/user-store";
import { useListStore } from "@/stores/list-store";
import { useAppStore } from "@/stores/app-store";
import { useRecipeStore } from "@/stores/recipe-store";
import { showUserMsg, showSuccessMsg } from "@/services/event-bus.service";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/user",
      name: "user",
      component: () => import("@/views/UserView.vue"),
    },
    {
      path: "/list",
      name: "list",
      component: () => import("@/views/ListIdx.vue"),
      children: [
        {
          path: "summary",
          name: "list-summary",
          component: () => import("@/views/SummaryView.vue"),
        },
      ],
    },
    {
      path: "/debug",
      name: "debug",
      component: () => import("@/views/DebugView.vue"),
    },
    {
      path: "/error",
      name: "error-admin",
      component: () => import("@/views/ErrorView.vue"),
    },
    {
      path: "/recipe",
      name: "recipe",
      component: () => import("@/components/RecipeView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/LoginView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/error",
    },

  ],
});


const routeHistory = []
router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()
  const listStore = useListStore()
  const recipeStore = useRecipeStore()
  const { logError } = useAppStore()

  routeHistory.push({ to, from, user: userStore.loggedUser })

  // this is to make sure that the user is logged in before entering the home page
  if (to.name === "home") {
    if (!userStore.loggedUser) {
      next({ name: "login" });
      return
    }

  }

  // this is to determine to load the matches or not
  if (to.name === "recipe") {
    if (!to.query.inspiration) {
      // next({ name: "list" });
      // listStore.loadList()
      recipeStore.loadMatches();

    }

  }

  // this to load the list when the user enters the list page
  if (to.name === "list") {
    // userStore.loadList()
    await listStore.loadList()

  }

  // default to the next route
  next();
})

export default router;
