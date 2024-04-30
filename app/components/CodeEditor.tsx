"use client";

import React, { useEffect, useState } from "react";
import { Resizable } from "re-resizable";
import ace from "react-ace";
import { getExtension, initialCode } from "../lib/lib";

// languages
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-lua";
import "ace-builds/src-noconflict/mode-rust";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-dart";
import "ace-builds/src-noconflict/mode-swift";
import "ace-builds/src-noconflict/mode-zig";
import "ace-builds/src-noconflict/mode-ruby";

// themes
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-gruvbox";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/theme-nord_dark";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-eclipse";

interface CodeEditorProps {
	language: string;
	theme: string;
	icon: string;
	background?: string;
	currentPadding?: string;
}

function CodeEditor({
	language,
	theme,
	icon,
	background,
	currentPadding,
}: CodeEditorProps) {
	const [width, setWidth] = useState(1000);
	const [height, setHeight] = useState<number | null>(500);
	const [title, SetTitle] = useState("App");
	// Work this part
	const [code, SetCode] = useState(initialCode);

	const [extension, setExtension] = useState(".js");

	useEffect(() => {
		// Update the extension when the language changes
		setExtension(getExtension(language));
	}, [language]);

	const handleCodeChange = (newCode: string) => {
		SetCode(newCode);
	};

	const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// Extract the title without the extension
		const newTitle = e.target.value.split(".")[0];
		SetTitle(newTitle);
	};

	// @ts-ignore
	const handleResize = (evt, direction, ref, pos) => {
		const newHeight = ref.style.height;
		setHeight(parseInt(newHeight, 10));
	};

	const updateSize = () => {
		setWidth(window.innerHeight);
	};

	useEffect(() => {
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	return (
		<Resizable
			minHeight={466}
			minWidth={510}
			defaultSize={{
				width: width,
				height: height || 500,
			}}
			onResize={handleResize}
			className="resize-container relative"
			style={{ background: background }}
		>
			<div
				className="code-block"
				style={{ padding: currentPadding }}
			></div>
		</Resizable>
	);
}

export default CodeEditor;
