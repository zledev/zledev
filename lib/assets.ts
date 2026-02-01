export const IMAGES = {
	bgStars: "/images/bg-stars.jpg",
	heroHead: "/images/hero-head.jpg",

	serviceDevelop: "/images/code.svg",
	serviceSolve: "/images/math.svg",

	avatarMartin: "/images/martin.png",
} as const;

export const ICONS = {
	gmail: "/icons/gmail.png",
	discord: "/icons/discord.png",
	github: "/icons/github-white.png",
} as const;

export enum BADGE_NUMBER {
	CANCELLED,
	PAUSED,
	ONGOING,
}

export const works: {
	name: string;
	description: string;
	thumb: string;
	view: string;
	badge: string | null;
	badge_status: number;
	badge_color: string;
	href: string;
}[] = [
	{
		name: "Lout",
		description: `A random messaging web application with unique and
		squirky features composed with multiple ideas. Inspired by other messaging applications.`,
		thumb: "/images/lout.png",
		view: "/images/lout_view.png",
		badge: "Ongoing",
		badge_status: BADGE_NUMBER.ONGOING,
		badge_color: "bg-green-500",
		href: "https://github.com/zledev/Lout",
	},
	{
		name: "Vulgine",
		description: `A random Vulkan Engine to make people's lives easier
		by making Vulkan simple while keeping Vulkan's power intact.`,
		thumb: "/images/vulkan.svg",
		view: "/images/vulgine_view.png",
		badge: "Ongoing",
		badge_status: BADGE_NUMBER.PAUSED,
		badge_color: "bg-green-500",
		href: "https://github.com/zledev/Vulgine",
	},
	{
		name: "Bhesh",
		description: `A random shell written in C. Its whole purpose is to help 
		you communicate with your operating system through common shell commands!`,
		thumb: "/images/bhesh.png",
		view: "/images/bhesh_view.png",
		badge: "PAUSED",
		badge_status: BADGE_NUMBER.PAUSED,
		badge_color: "bg-amber-500",
		href: "https://github.com/zledev/Bhesh",
	},
	{
		name: "Listo",
		description: `A random to do list web application that saves 
		your list in your local browser that nobody cares about.`,
		badge: "CANCELLED",
		badge_status: BADGE_NUMBER.CANCELLED,
		view: "/images/listo_view.png",
		thumb: "/images/listo.png",
		badge_color: "bg-red-500",
		href: "https://github.com/zledev/Listo",
	},
];
