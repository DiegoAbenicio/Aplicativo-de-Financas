import LayoutDefault from "@/components/layout/LayoutDefault.vue";
import PaginaInicial from "@/views/PaginaInicial.vue";
import { createRouter, createWebHistory } from "vue-router";


const routeLayoutInicial = [
	{
		path: "/",
		component: LayoutDefault,
		meta: {
			requiresAuth: false,
		},
		children: [
			{
				path: "/",
				name: "PaginaInicial",
				component: PaginaInicial,
				props: false,
			},
		],
	},
];


const routes = routeLayoutInicial;


const router = createRouter({
	history: createWebHistory("/aplicativo-financas"),
	routes,
});

export default router;