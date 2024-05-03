export const languages = [
	{
		name: "JavaScript",
		icon: "icons/javascript.svg",
	},
	{
		name: "HTML",
		icon: "icons/html/.svg",
	},
	{
		name: "CSS",
		icon: "icons/css.svg",
	},
	{
		name: "Python",
		icon: "icons/python",
	},
	{
		name: "Java",
		icon: "icons/java.svg",
	},
	{
		name: "TypeScript",
		icon: "icons/typescript.svg",
	},
	{
		name: "Rust",
		icon: "icons/rust.svg",
	},
];

export const getExtension = (language: string) => {
	switch (language) {
		case "JavaScript":
			return ".js";
		case "HTML":
			return ".html";
		case "CSS":
			return ".css";
		case "Python":
			return ".py";
		case "Java":
			return ".java";
		case "TypeScript":
			return ".ts";
		case "Rust":
			return ".rs";
		default:
			return ".js";
	}
};

export const themes = [
	"xcode",
	"gruvbox",
	"one dark",
	"nord dark",
	"dracula",
	"eclipse",
];

export const backgrounds = [
	"linear-gradient(354deg,#EB6F92,#F6C177)",
	"linear-gradient(90deg,#93f9b9,#1d976c)",
	"linear-gradient(140deg, rgb(142, 199, 251), rgb(28, 85, 170))",
	"linear-gradient(140deg, rgb(255, 207, 115), rgb(255, 122, 47))",
	"linear-gradient(337deg,#654ea3,#da98b4)",
	"linear-gradient(270deg,#fc6767,#ec008c)",
	"linear-gradient(140deg, rgb(165, 142, 251), rgb(233, 191, 248))",
	"linear-gradient(270deg,#514a9d,#24c6dc)",
];

export const initialCode = `function guessMyNumber() {
  const userGuess = prompt("Guess a number between 1 and 10:");
  const secretNumber = Math.ceil(Math.random() * 10);

  if (parseInt(userGuess) === secretNumber) {
    return "Wow, you must be a psychic!";
  } else {
    return \`Nope, the number was \${secretNumber}. Better luck next time!\`;
  }
}

console.log(guessMyNumber());`;
