"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Container from "@/components/ui/Container";
import { IMAGES } from "@/lib/assets";

const works: {
	title: string;
	thumb: string;
	badge: string | null;
	badge_color: string;
	href: string;
}[] = [
	{
		title: "Lout: A random messaging app",
		thumb: IMAGES.projects.lout,
		badge: "Ongoing",
		badge_color: "bg-green-500",
		href: "https://github.com/zledev/Lout",
	},
	{
		title: "Vulgine: A random vulkan engine",
		thumb: IMAGES.projects.vulgine,
		badge: "Ongoing",
		badge_color: "bg-green-500",
		href: "https://github.com/zledev/Vulgine",
	},
	{
		title: "Bhesh: A random shell made in C",
		thumb: IMAGES.projects.bhesh,
		badge: "PAUSED",
		badge_color: "bg-amber-500",
		href: "https://github.com/zledev/Bhesh",
	},
	{
		title: "Listo: A random local To-Do List",
		badge: "CANCELLED",
		thumb: IMAGES.projects.listo,
		badge_color: "bg-red-500",
		href: "https://github.com/zledev/Listo",
	},
];

export default function Projects() {
	return (
		<section className="pb-14 pt-4" id="projects">
			<Container>
				<h2 className="text-[40px] font-semibold tracking-tight md:text-[56px]">
					PROJECTS
				</h2>

				<div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/2">
					{works.map((w, idx) => (
						<motion.a
							key={w.title}
							href={w.href}
							initial={{ opacity: 0, x: -8 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.5, delay: idx * 0.05 }}
							className="group flex items-center justify-between gap-6 px-6 py-5">
							<div className="flex items-center gap-4">
								{w.thumb ? (
									<div className="relative h-10 w-10 overflow-hidden rounded-lg border border-white/10 bg-white/3">
										<Image
											src={w.thumb}
											alt=""
											fill
											className="object-cover"
											draggable={false}
										/>
									</div>
								) : (
									<div className="h-10 w-10 rounded-lg border border-white/10 bg-white/3" />
								)}

								<div className="text-lg text-white/90">{w.title}</div>

								{w.badge ? (
									<span
										className={`ml-2 rounded-full ${w.badge_color} px-3 py-1 text-xs font-medium text-black`}>
										{w.badge}
									</span>
								) : null}
							</div>

							<span className="text-white/40 transition group-hover:text-white/80">
								➜
							</span>
						</motion.a>
					))}
				</div>
			</Container>
		</section>
	);
}
