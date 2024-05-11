"use client";

import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import AceEditor from "react-ace";
import Footer from "./components/Footer";
import CodeEditor from "./components/CodeEditor";
import { backgrounds, themes, languages } from "./lib/lib";
import { Download, SunDimIcon } from "lucide-react";
import LanguageSelector from "./components/LanguageSelector";
import CodeThemeSelector from "./components/CodeThemeSelector";
import BackgroundSelector from "./components/BackgroundSelector";
import PaddingSelector from "./components/PaddingSelector";

export default function Page() {
	const editorRef = useRef(null);
	const [language, setLanguage] = useState(languages[0].name);
	const [background, setBackground] = useState(backgrounds[0]);
	const [paddings, setPaddings] = useState(["1rem", "2rem", "3rem", "4rem"]);
	const [theme, setTheme] = useState(themes[0]);
	const [activeIcon, setActiveIcon] = useState(languages[0].icon);
	const [currentPadding, setCurrentPadding] = useState(paddings[2]);

	const exportImage = async () => {
		const editorElement = editorRef.current;

		if (editorElement) {
			// hide elements
			const handleElements = document.querySelector(".handle") as any;
			const cursorElement = document.querySelector(".ace_cursor") as any;
			const codeTitle = document.querySelector(".code-title") as any;
			const codeEditor = document.querySelector(".ace_editor") as any;

			handleElements.forEach((element: any) => {
				element.style.display = "none";
			});
			cursorElement.style.display = "none";
			codeTitle.style.boxShadow = "none";
			codeEditor.style.boxShadow = "none";

			const canvas = await html2canvas(editorElement);
			const image = canvas
				.toDataURL("image/png")
				.replace("image/png", "image/octet-stream");

			const link = document.createElement("a");
			link.download = "code.png";
			link.href = image;
			link.click();

			// Show Elements
			handleElements.forEach((element: any) => {
				element.style.display = "block";
			});
			cursorElement.style.display = "block";
			codeTitle.style.boxShadow = "0 3px 10px rgba(0, 0, 0, 0.2)";
			codeEditor.style.boxShadow = "2px 3px 10px rgba(0, 0, 0, 0.2)";
		}
	};

	return (
		<main className=" h-[100vh] flex flex-col items-center justify-between">
			<section className="flex mt-10 flex-row w-[920px]  items-center justify-between">
				<h1 className="font-mono font-medium text-md">Snap.sh</h1>
				{/* Add Theme Switcher Button Func here */}
				<SunDimIcon />
			</section>

			<section className="mt-6 flex gap-6 w-[920px] p-5 fixed bottom-40 left-1/2 translate-x-[-50%] z-10 bg-[#191919] rounded border-[#3c3c3c] shadow-md">
				<LanguageSelector
					language={language}
					setLanguage={setLanguage}
					setActiveIcon={setActiveIcon}
				/>
				<CodeThemeSelector theme={theme} setTheme={setTheme} />
				<BackgroundSelector
					background={background}
					setBackground={setBackground}
				/>

				<PaddingSelector
					paddings={paddings}
					currentPadding={currentPadding}
					setCurrentPadding={setCurrentPadding}
				/>

				<div className="export-btn self-center ml-auto">
					<button
						className="flex items-center gap-3 py-2 px-3 bg-blue-400 rounded-md text-sm text-blue-400 font-medium bg-opacity-10 hover:bg-opacity-80 hover:text-slate-50 ease-in-out transition-all duration-300"
						onClick={exportImage}
					>
						<Download />
						Export Image
					</button>
				</div>
			</section>

			<section className="code-editor editor-ref mt-10" ref={editorRef}>
				<CodeEditor
					language={language}
					theme={theme}
					background={background}
					icon={activeIcon}
					currentPadding={"2px"}
				/>
			</section>
			<Footer />
		</main>
	);
}
