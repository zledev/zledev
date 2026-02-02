import { cn } from "@/lib/cn";

export default function GlowCard({
	className,
	children,
	shadeColor = "bg-green-500/20",
}: {
	className?: string;
	children: React.ReactNode;
	shadeColor: string;
}) {
	return (
		<div
			className={cn(
				"relative overflow-hidden rounded-2xl border border-white/10 bg-white/4 shadow-[0_30px_80px_rgba(0,0,0,0.55)] backdrop-blur",
				className,
			)}>
			<div className="pointer-events-none absolute inset-0 opacity-60">
				<div
					className={`absolute -left-24 -top-24 h-56 w-56 rounded-full ${shadeColor} blur-3xl`}
				/>
				<div
					className={`absolute -right-24 -bottom-24 h-56 w-56 rounded-full ${shadeColor} blur-3xl`}
				/>
			</div>
			<div className="relative">{children}</div>
		</div>
	);
}
