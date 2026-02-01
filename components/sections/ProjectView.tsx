"use client";

import Container from "@/components/ui/Container";
import GlowCard from "../ui/GlowCard";
import { BADGE_NUMBER, works } from "@/lib/assets";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import IconButton from "../ui/IconButton";

export default function ProjectView() {
	const [currentView, setView] = useState(0);

	return (
		<section id="projects">
			<Container>
				<h2
					className="text-[40px] font-semibold
                 tracking-tight md:text-[56px] mb-5">
					PROJECTS
				</h2>
				<div>
					<GlowCard>
						<motion.a
							key={works[currentView].description}
							href={works[currentView].href}
							initial={{ opacity: 0, x: -8 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.5, delay: currentView * 0.05 }}
							className="group flex items-center justify-between gap-6 px-6 py-5 md:max-h-35 min-h-35">
							<div className="flex items-center gap-4">
								<div className="flex-col">
									{works[currentView].thumb ? (
										<div className="flex justify-center">
											<div className="relative h-10 w-10 md:h-18 md:w-18 overflow-hidden rounded-lg border border-white/10 bg-white/3">
												<Image
													src={works[currentView].thumb}
													alt=""
													fill
													className="object-cover bg-white"
													draggable={false}
												/>
											</div>
										</div>
									) : (
										<div className="h-10 w-10 rounded-lg border border-white/10 bg-white/3" />
									)}
									<h2
										className={`font-bold text-sm md:text-3xl p-2 rounded-2xl`}>
										{works[currentView].name}
									</h2>
								</div>

								<div className="text-lg text-white/90 max-w-110 max-md:text-[0.8rem]">
									{works[currentView].description}
								</div>

								{works[currentView].badge ? (
									<span
										className={`ml-2 rounded-full ${works[currentView].badge_color} px-3 py-1 text-xs font-medium text-black`}>
										{works[currentView].badge}
									</span>
								) : null}
							</div>

							<span className="text-white/40 transition group-hover:text-white/80">
								➜
							</span>
						</motion.a>
					</GlowCard>
					<div className="flex justify-center items-center gap-5 p-15">
						<IconButton
							className="hover:bg-white/20"
							ariaLabel="Previous View"
							OnClick={() => {
								setView(
									currentView - 1 > 0 ? currentView - 1 : works.length - 1,
								);
							}}>
							❮
						</IconButton>
						<div className="flex-col justify-center items-center">
							<motion.div
								key={works[currentView].description}
								initial={{ opacity: 0, y: -8 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, amount: 0.3 }}
								transition={{ duration: 0.5, delay: currentView * 0.05 }}>
								<div className="w-75 h-48  sm:w-95 sm:h-75 md:w-120 md:h-85 lg:w-180 lg:h-115 flex justify-center">
									<Image
										fill
										src={works[currentView].view}
										alt=""
										className={`border-8 border-dashed border-gray-400/20 rounded-4xl`}
										draggable={false}></Image>
								</div>
							</motion.div>
						</div>
						<IconButton
							className="hover:bg-white/20"
							ariaLabel="Previous View"
							OnClick={() => {
								setView(currentView + 1 < works.length ? currentView + 1 : 0);
							}}>
							❯
						</IconButton>
					</div>
				</div>
			</Container>
		</section>
	);
}
