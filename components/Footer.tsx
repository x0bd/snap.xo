import { Github, GithubIcon } from "lucide-react";


export function Footer() {
	return (
		<footer className="w-full max-w-4xl mx-auto px-4 mt-16 pb-16 flex items-center justify-between">
			<h2>snap.sh</h2>
			<div className="text-xs flex gap-4">
				<span>
					Developed by{" "}
					<a
						href="https://github.com/x0bd"
						target="blank"
						className="text-white"
					>
						@xoboid
					</a>
				</span>
				<a
					href="https://github.com/sammarxz/codart"
					target="blank"
					className="text-white flex gap-1 items-center"
				>
					<GithubIcon size={16} />
					source code
				</a>
			</div>
		</footer>
	);
}
