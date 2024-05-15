import { GitBranchIcon, Github, GithubIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
	return (
		<footer className="w-full max-w-4xl mx-auto px-4 mt-1 pb-16 flex gap-6 py-16 justify-center items-center">
			<Link
				className="text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
				href="https://xoboid.vercel.app"
				target="_blank"
			>
				&copy; xoboid
			</Link>
			<Link
				target="_blank"
				href="https://ray.so"
				className="flex items-center text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
			>
				<span className="pr-1">Inspired by</span>
				<span className="font-medium text-slate-200">ray.so</span>
			</Link>
			<Link
				target="_blank"
				href="https://github.com/x0bd/snap.sh"
				className="flex items-center text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
			>
				<span className="">source code</span>
			</Link>
		</footer>
	);
}
