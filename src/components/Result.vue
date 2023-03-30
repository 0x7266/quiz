<script setup lang="ts">
import { defineProps } from "vue";
import { RouterLink } from "vue-router";
const { numberOfCorrectAnswers, quizQuestionLength } = defineProps<{
	numberOfCorrectAnswers: number;
	quizQuestionLength: number;
}>();
</script>

<template>
	<div class="results">
		<p>Your Results...</p>
		<h1>{{ numberOfCorrectAnswers }}/{{ quizQuestionLength }}</h1>
		<RouterLink to="/">Go Back</RouterLink>
	</div>
</template>

<style scoped>
.results {
	color: black;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: center;
	justify-content: center;
}
p {
	font-size: 2rem;
}
h1 {
	font-size: 3rem;
}
</style>
