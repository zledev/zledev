export default function Home() {
	return (
		<div>
			<header>
				<div className="profile-container">
					<div id="profile-box">
						<img
							src="/bhenzy.jpg"
							alt="zleDev"
							id="profile-photo"
							draggable="false"
						/>
					</div>

					<div id="profile-name-box">
						<h1 id="profile-name">zleDev</h1>
					</div>
				</div>

				<div className="head-break"></div>

				<div id="about" className="section">
					<h2>About Me</h2>

					<p>
						I wake up, code, study, eat, sleep and repeat. Though this sounds
						pretty boring, I am enjoying it. Allow me to introduce myself, I am
						"zleDev" andn welcome to my portfolio, I hope it finds you well.
					</p>
				</div>
			</header>

			<div className="flex justify-center">
				<div className="section-break"></div>
			</div>

			<main>
				<section id="sections">
					<div id="section1">
						<h2>Projects</h2>

						<div id="section-project-separator"></div>

						<div id="project-data" className="project">
							<div>
								<h3>bhesh</h3>
								<p>
									A simple shell made in C designed to mimick a full shell like:
									Bash, ZSH, ... Its whole purpose is to help you communicate
									with your operating system through common shell commands! :D
									This project is currently paused due to some reasons.
								</p>
							</div>
							<div id="project-data-separator"></div>
							<img src="/bhesh.png" id="bhesh-png" />
						</div>
					</div>
				</section>
			</main>

			<footer>
				<div id="contacts">
					<h2>Contacts</h2>
					<div id="contact-row">
						<div className="contact-column">
							<a href="mailto:bhenzyldavepegarido@gmail.com">
								<img src="/gmail.png" alt="Designed by Freepik from Flaticon" />
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
