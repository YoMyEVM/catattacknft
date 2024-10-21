import Image from "next/image";

const Footer = () => {
	return (
		<>
			<div className="flex flex-col space-y-2 w-full max-w-xs justify-center">
				<a
					href="https://github.com/myemv-dev"
					target="_blank"
					className="p-3 text-xs font-semibold border border-white/20 rounded flex items-center justify-center space-x-1 hover:bg-white/10 transition"
					rel="noreferrer"
				>
					<Image src="/icons/github.svg" width={14} height={12} alt="Zap" />
					<span>github</span>
				</a>
			</div>
		</>
	);
};

export default Footer;
