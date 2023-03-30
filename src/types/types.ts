export type Question = {
	id: number;
	text: string;
	options: { id: number; label: string; text: string; isCorrect: boolean }[];
};
export type Quiz = {
	id: number;
	name: string;
	img: string;
	questions: Question[];
};
