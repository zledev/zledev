"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Container from "@/components/ui/Container";
import GlowCard from "@/components/ui/GlowCard";
import { IMAGES } from "@/lib/assets";

export default function Testimonial() {
	return (
		<section className="pb-14 pt-2">
			<Container>
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.35 }}
					transition={{ duration: 0.6 }}>
					<GlowCard className="p-7">
						<div className="grid gap-6 md:grid-cols-[1fr_240px] md:items-end">
							<div>
								<div className="text-4xl leading-none text-white/15">“</div>
								<p className="mt-3 max-w-2xl text-xl leading-8 text-white/85">
									Anyone can write code that a computer can understand. Good
									programmers write code that humans can.
								</p>
							</div>

							<div className="flex items-center justify-between gap-4 md:justify-end">
								<div className="h-10 w-0.5 bg-linear-to-b from-white/0 via-white/35 to-white/0" />
								<div className="flex items-center gap-3">
									<div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/15">
										<Image
											src={IMAGES.avatarMartin}
											alt="Client avatar"
											fill
											className="object-cover"
											draggable={false}
										/>
									</div>
									<div className="text-sm">
										<div className="text-white/90">Martin Fowler</div>
										<div className="text-white/55">
											British Software Developer
										</div>
									</div>
								</div>
							</div>
						</div>
					</GlowCard>
				</motion.div>
			</Container>
		</section>
	);
}
