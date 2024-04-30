"use client";

import OutsideClickHandler from "react-outside-click-handler";
import { themes } from "../lib/lib";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface CodeThemeSelectorProps {
	theme: string;
	setTheme: (theme: string) => void;
}

const CodeThemeSelector = ({ theme, setTheme }: CodeThemeSelectorProps) => {
	const [showDropDown, setShowDropDown] = useState(false);

	const toggleDropDown = () => {
		setShowDropDown(!showDropDown);
	};

	const handleThemeChange = (newTheme: string) => {
		setTheme(newTheme);
	};

	return (
		<OutsideClickHandler onOutsideClick={() => setShowDropDown(false)}>
			<div className="theme-selector" onClick={toggleDropDown}>
				<p className="py-[5px] font-medium text-sm">Code Colors</p>
				<div className="hover:text-slate-50 dropdown-title transition-all duration-300 ease-in-out  capitalize w-[120px]">
					{theme} <ChevronDown />
				</div>
				{showDropDown && (
					<div className="dropdown-menu relative top-[94px] w-[120px]">
						{themes.map((theme, i) => {
							return (
								<button
									key={i}
									onClick={() => handleThemeChange(theme)}
									className="capitalize text-left hover:text-slate-50 transition-all duration-300 ease-in-out"
								>
									{theme}
								</button>
							);
						})}
					</div>
				)}
			</div>
		</OutsideClickHandler>
	);
};

export default CodeThemeSelector;
