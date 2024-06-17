import { MutableRefObject } from "react";
import { backgrounds, initialCode, languages, paddings, themes } from "@/data";

export const initialState = {
	language: languages[0],
	theme: themes[2],
	padding: paddings[2],
	background: backgrounds[1],
	code: initialCode,
	editorRef: {} as MutableRefObject<HTMLDivElement>,
	dimensions: {
		width: 1020,
		height: 500,
	},
};

export type State = typeof initialState;
