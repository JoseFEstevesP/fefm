export const textToFirstCapitalLetter = ({ text }: { text: string }) =>
	text.charAt(0).toUpperCase() + text.slice(1);
