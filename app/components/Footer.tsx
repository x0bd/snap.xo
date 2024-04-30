"use client";

import Link from "next/Link";

const Footer = () => {
	return (
		<div className="flex items-center gap-10 py-16">
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
				href="https://vercel.com"
				target="_blank"
			>
				{" "}
				Hosted on 🔺
			</Link>
			<Link
				className="text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
				href="https://github.com/x0bd/snap.sh"
				target="_blank"
			>
				Source Code &nbsp;&#129109;
			</Link>
		</div>
	);
};

export default Footer;
