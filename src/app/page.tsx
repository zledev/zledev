"use client";

import { Cause } from "./fonts";

export default function Home() {
	return (
		<>
			<header
				className="bg-green-700 h-10 shadow-lg
			 shadow-green-600 min-[600px]:h-15 flex 
			 justify-center content-center">
				<h1
					className={`${Cause.className} font-bold text-green-300 text-[1.5rem] 
						min-[600px]:text-[2.5rem] content-center`}>
					ZleDev
				</h1>
			</header>

			<main className={`${Cause.className} flex-col justify-center`}>
				<div className="flex mt-10 min-[600px]:mt-20 justify-center">
					<div className="grid justify-center content-center w-85 min-[600px]:w-60">
						<div className="size-25 shadow-[0_0_2.5rem_#22c55e] rounded-[3rem] min-[600px]:size-40">
							<img src="/zledev.jpg" className="rounded-[3rem]"></img>
						</div>
					</div>
					<div className="min-[600px]:w-[50%] max-w-130">
						<h1 className="font-bold min-[600px]:text-[1.5rem]">
							A Developer who
						</h1>
						<h2
							className="text-[2rem] leading-8 min-[600px]:leading-11 font-extrabold
						 text-shadow-green-700 text-shadow-lg min-[600px]:text-[3rem]">
							Keep solving problems...
						</h2>
						<h6 className="font-medium text-[0.75rem] max-[600px]:w-[70%] mt-2.5 min-[600px]:text-[1.5rem]">
							Because life never ceases to give us problems, so why not make a
							career out of it?
						</h6>
					</div>
				</div>

				<div className="flex justify-center min-[600px]:hidden">
					<div
						className="flex justify-center border-dashed 
				border-b-gray-400 border-b-3 w-[90%] mt-5 mb-5 max-w-250 
				min-[600px]:mt-20 min-[600px]:mb-10"></div>
				</div>

				<div className="flex justify-center min-[600px]:mt-20">
					<div
						className="flex-col w-fit max-[1000px]:pl-10 
				max-[1000px]:pr-10 justify-center max-[600px]:pl-[10%]">
						<h1
							className={`${Cause.className} font-bold text-[2rem] leading-9 min-[600px]:text-[3rem]
							text-shadow-lg text-shadow-green-700`}>
							An Aspiring Computer Engineer!
						</h1>
						<p className="min-[600px]:text-[1.5rem] min-[600px]:mt-2">
							Growing & Learning everyday!{" "}
							<span className="text-red-400 text-[1.3rem] min-[600px]:text-[2rem]">
								{"<3"}
							</span>
						</p>
						<p className="max-w-200 mt-5 min-[600px]:text-[1.5rem]">
							I wake up, code, study, eat, sleep and repeat. Though this sounds
							pretty boring, I am enjoying it. Allow me to introduce myself, I
							am zleDev and as for my real name, it's a secret for now.
						</p>
					</div>
				</div>

				<h1
					className="flex justify-center mt-8 text-[2rem] font-bold min-[600px]:text-[3rem]
				text-shadow-lg text-shadow-green-700 min-[600px]:mt-10">
					Projects
				</h1>

				<div className="flex justify-center mt-10">
					<div className="grid">
						<div className="w-[60vw] col-start-1 row-start-1 z-2 ml-2 max-w-130 min-w-50">
							<img src="/bhesh.png" className=""></img>
						</div>
						<div
							className="blur-2xl col-start-1 row-start-1 z-1 w-[65vw] min-[600px]:mr-10 
						max-w-150 min-w-50">
							<img src="/bhesh.png" className=""></img>
						</div>
						<div
							className="text-center min-[600px]:w-[85vw] min-w-55 h-fit max-w-90 min-[600px]:text-[175%] mt-[55%] 
								text-[1.2rem] w-[35vw] col-start-1 row-start-1 z-3 backdrop-blur-2xl backdrop-brightness-150
								rounded-2xl text-shadow-lg text-shadow-gray-500 p-2 font-medium shadow-lg shadow-gray-500">
							Bhesh is a simple shell made in C. {"[Paused]"}
						</div>
					</div>

					{/* MORE PROJECTS LATER ... */}

					<div></div>
				</div>
			</main>

			<footer
				className="mt-10 flex justify-center w-full bg-green-900
			">
				<div className="w-[70%] max-w-200 p-5">
					<div className="min-[600px]:ml-0">
						<h1
							className={`${Cause.className} text-[1.5rem] min-[600px]:text-[2rem]`}>
							Contact Me ☕
						</h1>
					</div>
					<div className="w-[40vw] min-[600px]:w-[75vw] max-w-150 mt-5">
						<p className={`${Cause.className} min-[600px]:text-[1.5rem]`}>
							Nothing much to say here right now. If you need anything, feel
							free to contact me through here!
						</p>
					</div>
					<div className="mt-5 flex gap-3 min-[600px]:gap-5 w-fit min-[600px]:ml-0">
						<a href="mailto:zledev.tech@gmail.com">
							<img
								src="/gmail.png"
								className="size-5 min-[600px]:size-10"></img>
						</a>
						<img
							src="/discord.png"
							className="size-5 min-[600px]:size-10"
							alt="https://discord.com/users/1289733637163716669"></img>
						<a href="https://github.com/zledev">
							<img
								src="/github-white.png"
								className="size-5 min-[600px]:size-10"></img>
						</a>
					</div>
				</div>
			</footer>
		</>
	);
}
