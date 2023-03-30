<script setup lang="ts">
import { useRouter } from "vue-router";
import { Quiz } from "../types/types";

const router = useRouter();
const { quiz } = defineProps<{ quiz: Quiz }>();

function navigateToQuiz() {
	router.push(`quiz/${quiz.name.toLowerCase()}`);
}
</script>

<template>
	<div :key="quiz.id" class="card" @click="navigateToQuiz">
		<img :src="quiz.img" alt="" />
		<div class="card-info">
			<p>{{ quiz.name }}</p>
			<p>{{ quiz.questions.length }} questions</p>
		</div>
	</div>
</template>

<style scoped>
.card {
	border-radius: 10px;
	box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.4);
	cursor: pointer;
	width: 300px;
	background-color: rgb(22, 21, 21);
}

.card img {
	border-radius: 10px 10px 0 0;
	width: 100%;
	height: 150px;
	border: solid white;
}

.card-info {
	padding: 0 10px 10px;
}
</style>
