"use client";

import { ChevronDown } from "lucide-react";
import { languages } from "../lib/utils";
import OutsideClickHandler from "react-outside-click-handler";
import { useState } from "react";

interface LanguageSelectorProps {
	language: string;
	setLanguage: (language: string) => void;
	setActiveIcon: (icon: string) => void;
}

const LanguageSelector = ({
	language,
	setLanguage,
	setActiveIcon,
}: LanguageSelectorProps) => {
	const [showDropDown, setShowDropdown] = useState(false);

	const toggleDropdown = () => {
		setShowDropdown(!showDropDown);
	};

	const handleLanguageChange = (newLanguage: string) => {
		setLanguage(newLanguage);
		const newActiveIcon = languages.find(
			(lang) => lang.name === newLanguage
		)?.icon;

		if (newActiveIcon) {
			setActiveIcon(newActiveIcon);
		}
	};

	return (
		<OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
			<div onClick={toggleDropdown}>
				<p className="py-[5px] text-sm font-medium">Language</p>
				<div className="dropdown-title"></div>
			</div>
		</OutsideClickHandler>
	);
};

export default LanguageSelector;
