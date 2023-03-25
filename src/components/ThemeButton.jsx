import {ArrowPathIcon, MoonIcon, SunIcon} from "@heroicons/react/24/outline";
import {AnimatePresence} from "framer-motion";

import {useTheme} from "@/hooks/useTheme";
import {twclsx} from "@/libs/twclsx";

import {ThemeMenu} from "./ThemeMenu";
import {UnstyledButton} from "./unstyle/Button";

export const ThemeButton = ({screen = false}) => {
	const {mounted, dropdownIsOpen, toggleDropdown, theme, systemTheme, changeTheme, closeDropdown} = useTheme();

	if(!mounted){
		return <ArrowPathIcon className="w-5 animate-spin"/>;
	}

	const buttonClasses = twclsx(screen ? "accessible relative" : "", "h-10 w-10 rounded-full bg-white/90 shadow-lg shadow-primary-800/5 ring-1 ring-primary-900/5 backdrop-blur transition", theme === "dark" || (
			theme === "system" && systemTheme === "dark") ? "dark:bg-primary-800/90 dark:ring-white/10 dark:hover:ring-white/20" : "",);

	return (
			<div className="relative z-50">
				<UnstyledButton
						aria-haspopup="listbox"
						aria-expanded={dropdownIsOpen}
						onClick={toggleDropdown}
						title="Switch Theme"
						className={buttonClasses}
				>
					{theme === "dark" || (
							theme === "system" && systemTheme === "dark") ? (
							<MoonIcon className="w-5 text-secondary-400 pointer-events-none"/>) : (
							<SunIcon className="w-5 text-primary-700 pointer-events-none"/>)}
				</UnstyledButton>

				<AnimatePresence mode="wait">
					{dropdownIsOpen && (
							<ThemeMenu
									changeTheme={changeTheme}
									onClose={closeDropdown}
									theme={theme}
							/>)}
				</AnimatePresence>
			</div>);
};
