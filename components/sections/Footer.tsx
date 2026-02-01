"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Container from "@/components/ui/Container";
import { ICONS } from "@/lib/assets";

const socials: { label: string; icon: string; href: string }[] = [
	{ label: "Discord", icon: ICONS.discord, href: "https://discord.com/users/1289733637163716669" },
	{ label: "Gmail", icon: ICONS.gmail, href: "mailto:zledev.tech@gmail.com" },
	{ label: "Github", icon: ICONS.github, href: "https://github.com/zledev" },
];

export default function FooterLast() {
	return (
		<section className="pb-10 pt-6">
			<Container>
				<div className="rounded-3xl border border-white/10 bg-white/2 p-8 md:p-12">
					<motion.div
						initial={{ opacity: 0, y: 14 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.35 }}
						transition={{ duration: 0.6 }}
						className="text-center">
						<h2 className="text-balance text-[44px] font-semibold leading-[0.95] tracking-tight md:text-[72px]">
							I WILL NEVER
							<br />
							GIVE UP!
						</h2>

						<motion.a
							whileHover={{ scale: 1.03 }}
							whileTap={{ scale: 0.98 }}
							href="mailto:zledev.tech@gmail.com"
							className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/3 px-5 py-3 text-2xl text-white/90 backdrop-blur">
							Contact Zle <span aria-hidden></span>
						</motion.a>
					</motion.div>

					<div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-6 md:flex-row">
						<div className="flex flex-wrap items-center gap-5 text-sm text-white/70">
							{socials.map((s) => (
								<a
									key={s.label}
									href={s.href}
									className="inline-flex items-center gap-2 hover:text-white">
									<span className="relative h-4 w-4">
										<Image src={s.icon} alt="" fill draggable={false}/>
									</span>
									{s.label}
								</a>
							))}
						</div>

						<div className="text-sm text-white/50">
							ZleDev © 2026
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
