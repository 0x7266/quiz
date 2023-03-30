<script setup lang="ts">
import { ref, watch } from "vue";
import Card from "../components/Card.vue";
import q from "../data/quizzes.json";

const quizzes = ref(q);
const search = ref("");

watch(search, () => {
	quizzes.value = q.filter((quiz) =>
		quiz.name.toLowerCase().includes(search.value.toLowerCase())
	);
});
</script>
<template>
	<div class="container">
		<header>
			<h1>Quizzes</h1>

			<input type="text" placeholder="Search..." v-model.trim="search" />
		</header>
		<div class="cards-grid">
			<Card v-for="quiz in quizzes" :quiz="quiz" />
		</div>
	</div>
</template>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	gap: 2rem;
}

header {
	display: flex;
	gap: 40px;
	align-items: center;
}

header input {
	padding: 5px;
	border-radius: 2%;
	border: none;
	font-size: 1.2rem;
}

.cards-grid {
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
}
</style>
