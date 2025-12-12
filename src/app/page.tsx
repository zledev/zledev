export default function Home() {
	return (
		<>
			<div className="grid gap-1 mt-5 justify-center">
				<div className="flex justify-center">
					<img src={"/bhenzy.jpg"} className="rounded-[3rem]"></img>
				</div>
				<div className="flex justify-center font-bold text-[1.5rem]">
					<h2>ZleDev</h2>
				</div>
				<div className="flex justify-center mt-2">
					<div
						className="border-b-2 border-gray-400
						w-[70%] border-dashed"></div>
				</div>

				<div className="w-65 mt-3">
					<p className="text-center font-medium">
						I wake up, code, study, eat, sleep and repeat. Though this sounds
						pretty boring, I am enjoying it. Allow me to introduce myself, I am
						"zleDev" and welcome to my portfolio, I hope it finds you well.
					</p>
				</div>
			</div>
		</>
	);
}
