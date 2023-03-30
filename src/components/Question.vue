<script setup lang="ts">
import { Question } from "../types/types";
const { question } = defineProps<{ question: Question }>();
const emit = defineEmits(["selectOption"]);
function emitSelectedOption(isCorrect: boolean) {
	emit("selectOption", isCorrect);
}
</script>

<template>
	<div class="question-container">
		<p class="question">
			<span class="question-number">{{ question.id }}</span
			><span class="question-text">{{ question.text }}</span>
		</p>
		<div class="options-container">
			<div
				class="options"
				v-for="option in question.options"
				@click="emitSelectedOption(option.isCorrect)"
			>
				<span class="option-label">{{ option.label }}</span>
				<span>{{ option.text }}</span>
			</div>
		</div>
	</div>
</template>

<style scoped>
.question-container {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}
.question {
	border: solid 2px black;
	cursor: pointer;
	width: 300px;
	display: flex;
	gap: 1rem;
	align-items: center;
	width: 100%;
}

.question .question-number {
	background-color: #869b9c;
	font-size: 2rem;
	padding: 1rem;
	border-right: solid 2px black;
}

.question .question-text {
	font-size: 1.2rem;
	color: white;
	flex-grow: 1;
}

.question .question-text .question-number {
	font-weight: bolder;
}

.options {
	display: flex;
	gap: 1rem;
	align-items: center;
	border: solid 1px gray;
}

.options .option-label {
	padding: 1rem;
	background-color: #352233;
	font-size: 0.8rem;
	border-right: solid 1px gray;
}
</style>
