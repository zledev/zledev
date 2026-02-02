"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Container from "@/components/ui/Container";
import { IMAGES } from "@/lib/assets";

const stagger = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.08, delayChildren: 0.12 },
	},
};

const item = {
	hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
	show: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: { duration: 0.6 },
	},
};

export default function Hero() {
	return (
		<section id="home" className="relative overflow-hidden pb-16 pt-8">
			<div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
				<Image
					src={IMAGES.bgStars}
					alt="bgStars"
					fill
					priority
					className="object-cover"
				/>
			</div>

			<Container>
				<div
					className="flex items-center justify-between gap-6 
					py-4 text-sm text-white/70">
					<div className="flex items-center gap-6">
						<a className="hover:text-white" href="#home">
							Home
						</a>
						<a className="hover:text-white" href="#projects">
							Projects
						</a>
						<a className="hover:text-white" href="#about">
							About
						</a>
					</div>

					<div className="flex gap-2 md:hidden mr-5">
						<Image
							src={IMAGES.heroHead}
							alt="ZleDev"
							width={60}
							height={60}
							className="mx-auto opacity-90 rounded-full shadow-[0_0_2.5rem_#22c55e] h-auto w-auto"
							priority
							draggable={false}
						/>
					</div>
				</div>

				<div className="grid items-start gap-10 pt-8 md:grid-cols-[1.2fr_0.8fr]">
					<motion.div variants={stagger} initial="hidden" animate="show">
						<motion.h1
							variants={item}
							className="text-balance text-[46px] font-semibold leading-[0.95] tracking-tight md:text-[72px]">
							A wild
							<br />
							<span className="relative inline-block m-2.5">
								<span className="text-green-500">Developer</span>
								<span
									className="pointer-events-none absolute -inset-x-3 -inset-y-2 
                rounded-xl border-6 border-dashed border-green-500/35 bg-green-500/10"
								/>
							</span>
							<br />
							Appears!
						</motion.h1>

						<motion.div
							variants={item}
							className="mt-10 grid gap-6 md:grid-cols-2">
							<div>
								<p className="max-w-sm text-white/85">Developer Name: ZleDev</p>

								<motion.a
									whileHover={{ scale: 1.03 }}
									whileTap={{ scale: 0.98 }}
									href="mailto:zledev.tech@gmail.com"
									className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15
                   bg-white/3 px-5 py-3 text-2xl text-white/90 backdrop-blur font-bold">
									Contact Zle
								</motion.a>
							</div>

							<p className="max-w-sm text-sm leading-6 text-white/65">
								I wake up, code, study, eat, sleep and repeat. Though this
								sounds pretty boring, I am enjoying it. Allow me to introduce
								myself, I am zleDev and as for my real name, it's a secret for
								now.
							</p>
						</motion.div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.15 }}
						className="relative hidden flex-col items-center md:flex gap-5">
						<div className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-green-500/10 blur-3xl" />
						<div className="absolute -right-10 top-24 h-48 w-48 rounded-full bg-green-300/10 blur-3xl" />

						<Image
							src={IMAGES.heroHead}
							alt="ZleDev"
							width={420}
							height={520}
							className="mx-auto opacity-90 rounded-full shadow-[0_0_2.5rem_#22c55e]"
							priority
							draggable={false}
						/>
					</motion.div>
				</div>
			</Container>
		</section>
	);
}
