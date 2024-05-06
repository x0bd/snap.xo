"use client";

import Link from "next/Link";

const Footer = () => {
	return (
		<div className="flex items-center mt-10 gap-10 py-16">
			<Link
				className="text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
				href="https://xoboid.vercel.app"
				target="_blank"
			>
				{" "}
				&copy; xoboid
			</Link>
			<Link
				className="text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
				href="https://ray.so"
				target="_blank"
			>
				{" "}
				inspired by ray.so&nbsp;&#129109;
			</Link>
			<Link
				className="text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
				href="https://github.com/x0bd/snap.sh"
				target="_blank"
			>
				Github
			</Link>
		</div>
	);
};

export default Footer;
