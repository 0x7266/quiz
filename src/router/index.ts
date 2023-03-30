import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "quizzes",
			component: Home,
		},
		{
			path: "/home",
			redirect: "/",
		},
		{
			path: "/quiz/:name",
			name: "quiz",
			component: () => import("../views/Quiz.vue"),
		},
	],
});

export default router;
