<script setup lang="ts">
import { Question } from "../types/types";
const { question } = defineProps<{ question: Question }>();
const emit = defineEmits(["selectOption"]);
function emitSelectedOption(isCorrect: boolean) {
	emit("selectOption", isCorrect);
}
</script>

<template>
	<div class="question">
		<p class="question-text">
			<span class="question-number">{{ question.id }}</span
			>{{ question.text }}
		</p>
		<div class="options">
			<div
				v-for="option in question.options"
				@click="emitSelectedOption(option.isCorrect)"
			>
				<span class="option-label">{{ option.label }}</span>
				{{ option.text }}
			</div>
		</div>
	</div>
</template>

<style scoped>
.question {
	border-radius: 10px;
	box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.4);
	cursor: pointer;
	width: 300px;
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.question .question-text {
	background-color: #fff;
	border-radius: 10px 10px 0 0;
	color: black;
	font-size: 1.2rem;
	padding: 10px;
}

.question .question-text .question-number {
	font-weight: bolder;
}

.question .options {
	padding: 0 10px;
}
</style>
