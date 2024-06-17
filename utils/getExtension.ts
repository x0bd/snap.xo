const languageExtensions: Record<string, string> = {
	javascript: ".js",
	html: ".html",
	css: ".css",
	python: ".py",
	java: ".java",
	typescript: ".ts",
	csharp: ".cs",
	golang: ".go",
	rust: ".rs",
	kotlin: ".kt",
	markdown: ".md",
};

export function getExtension(language: string): string {
	const lowerCaseLanguage = language.toLowerCase();
	return languageExtensions[lowerCaseLanguage] || ".rs";
}
