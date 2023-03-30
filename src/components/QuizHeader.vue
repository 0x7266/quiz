<script setup lang="ts">
import { defineProps } from "vue";

const { questionStatus, quizProgress } = defineProps<{
	questionStatus: string;
	quizProgress: string;
}>();
</script>

<template>
	<header>
		<div class="bar">
			<div class="progress-bar" :style="{ width: quizProgress }"></div>
		</div>
		<p>Question {{ questionStatus }}</p>
	</header>
</template>

<style scoped>
.bar {
	width: 300px;
	height: 50px;
	border: 3px solid bisque;
}
.progress-bar {
	height: 100%;
	width: 0%;
	background-color: bisque;
}
</style>
