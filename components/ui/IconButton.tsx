"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/cn";

export default function IconButton({
	className,
	children,
	ariaLabel,
	OnClick,
}: {
	className?: string;
	children: React.ReactNode;
	ariaLabel: string;
	OnClick: () => void;
}) {
	return (
		<motion.button
			whileHover={{ scale: 1.06 }}
			whileTap={{ scale: 0.98 }}
			aria-label={ariaLabel}
			onClick={() => {
				OnClick();
			}}
			className={cn(
				"grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/3 backdrop-blur transition",
				className,
			)}>
			{children}
		</motion.button>
	);
}
