"use client";

import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import AceEditor from "react-ace";
import Footer from "./components/Footer";
import CodeEditor from "./components/CodeEditor";
import { backgrounds, themes, languages } from "./lib/lib";
import { Download } from "lucide-react";
import LanguageSelector from "./components/LanguageSelector";

export default function Page() {
	const editorRef = useRef(null);

	const [language, setLanguage] = useState(languages[0].name);
	const [background, setBackground] = useState(backgrounds[0]);
	const [paddings, setPaddings] = useState(["1rem", "2rem", "3rem", "4rem"]);
	const [theme, setTheme] = useState(themes[0]);
	const [activeIcon, setActiveIcon] = useState(languages[0].icon);

	return (
		<main className="h-[100vh] flex flex-col items-center justify-between">
			<header className="mt-6 flex gap-6 w-[880px] p-5 fixed top-0 left-1/2 translate-x-[-50%] z-10 bg-[#191919] rounded-border border-[#3C3C3C] shadow-md">
				<LanguageSelector
					language={language}
					setLanguage={setLanguage}
					setActiveIcon={setActiveIcon}
				/>
			</header>
			<Footer />
		</main>
	);
}
