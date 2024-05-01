"use client";

import { ChevronDown, Key } from "lucide-react";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { backgrounds } from "../lib/lib";

interface BackgroundSelectorProps {
	background: string;
	setBackground: (background: string) => void;
}

const BackgroundSelector = ({
	background,
	setBackground,
}: BackgroundSelectorProps) => {
	const [showDropDown, setShowDropDown] = useState(false);

	const toggleDropDown = () => {
		setShowDropDown(!showDropDown);
	};

	const handleBackgroundChange = (newBackground: string) => {
		setBackground(newBackground);
	};

	return (
		<OutsideClickHandler onOutsideClick={() => setShowDropDown(false)}>
			<div className="bg-selector relative" onClick={toggleDropDown}>
				<p className="py-[5px] text-sm font-medium">Theme</p>
				<div className="dropdown-title w-[62px]">
					<div
						className="rounded-full w-[20px] h-[20px]"
						style={{ background: background }}
					></div>
					<ChevronDown />
				</div>
				{showDropDown && (
					<div className="dropdown-menu top-[74px] w-[62px] rounded-full flex flex-col gap-2">
						{backgrounds.map((bg, i) => {
							return (
								<div
									className="w-[20px] h-[20px] rounded-full"
									style={{ background: bg }}
									key={i}
									onClick={() => handleBackgroundChange(bg)}
								></div>
							);
						})}
					</div>
				)}
			</div>
		</OutsideClickHandler>
	);
};

export default BackgroundSelector;
