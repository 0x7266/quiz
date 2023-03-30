<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed, ref, watch } from "vue";
import q from "../data/quizzes.json";
import Question from "../components/Question.vue";
import QuizHeader from "../components/QuizHeader.vue";
import Result from "../components/Result.vue";

const { name } = useRoute().params;
const quiz = q.find((quiz) => quiz.name.toLowerCase() === name);
const currentQuestionIndex = ref(0);
const numberOfCorrectAnswers = ref(0);
const showResult = ref(false);
const questionStatus = computed(
	() => `${currentQuestionIndex.value + 1}/${quiz?.questions.length}`
);
const quizProgress = computed(
	() =>
		`${Math.floor(
			(currentQuestionIndex.value / quiz!.questions.length) * 100
		)}%`
);

function handleSelection(isCorrect: boolean) {
	if (currentQuestionIndex.value === quiz!.questions.length - 1) {
		showResult.value = true;
	}
	if (isCorrect) {
		numberOfCorrectAnswers.value++;
	}
	currentQuestionIndex.value++;
}
</script>

<template>
	{{ quizProgress }}
	<div class="container">
		<h1>{{ name }} quiz</h1>
		<QuizHeader :questionStatus="questionStatus" :quizProgress="quizProgress" />
		<Question
			:question="quiz!.questions[currentQuestionIndex]"
			@selectOption="handleSelection"
			v-if="!showResult"
		/>
		<Result
			:numberOfCorrectAnswers="numberOfCorrectAnswers"
			:quizQuestionLength="quiz!.questions.length"
			v-else="showResult"
		/>
	</div>
</template>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	gap: 2rem;
}
</style>
