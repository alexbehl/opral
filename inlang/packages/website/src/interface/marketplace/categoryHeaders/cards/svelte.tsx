import { Button } from "#src/pages/index/components/Button.jsx";
import * as m from "#src/paraglide/messages.js";
import Link from "#src/renderer/Link.jsx";

const SvelteHeader = () => {
	return (
		<>
			<div class="relative bg-surface-100 overflow-hidden rounded-xl border border-surface-200 flex flex-col md:flex-row flex-wrap md:items-end mb-8 px-4 py-4 gap-4">
				<div class="relative z-30 flex-1 flex flex-col items-start gap-4 px-6 py-3 md:min-w-[380px]">
					<div class="flex flex-col gap-2 pt-2 md:pt-6">
						<p class="text-sm text-[#FF3E00] font-medium">
							For the Svelte Community
						</p>
						<h2 class="font-medium text-xl">Recommended i18n library</h2>
					</div>
					<p class="text-sm text-surface-500 pr-20">
						A small collection of tooling to get you going to build your global
						svelt app.
					</p>
					<div class="pt-6 flex gap-4">
						<Button
							type="secondary"
							href="/m/gerre34r/library-inlang-paraglideJs/sveltekit"
						>
							{m.marketplace_application_header_svelte_button()}
						</Button>
						<Button
							type="text"
							chevron
							href="/m/gerre34r/library-inlang-paraglideJs/sveltekit"
						>
							Svelte Summit Talk 2023
						</Button>
					</div>
				</div>
				<Link
					href="/m/gerre34r/library-inlang-paraglideJs"
					class="relative flex-1 h-[260px] bg-background rounded-xl border border-surface-300 flex flex-col justify-end md:min-w-[380px] group hover:border-surface-400 transition-all cursor-pointer"
				>
					<div class="px-7 pb-4 z-20">
						<img
							class="w-20 pt-20"
							src="/images/paraglideNoBg.png"
							alt="ParaglideJS"
						/>
					</div>
					<h3 class="font-medium text-lg px-8 pb-1 z-20">
						Paraglide JS - i18n library
					</h3>
					<p class="text-surface-500 px-8 pb-6 text-sm pr-20 z-20">
						A i18n library without async resources. Build for the svelte
						community.
					</p>
					<div class="absolute z-20 top-4 right-4 w-8 h-8 border border-surface-400 rounded-full flex justify-center items-center group-hover:bg-surface-100 transition-all text-surface-500 group-hover:text-surface-900">
						<Arrow />
					</div>
					<div class="absolute w-full h-full top-0 bg-gradient-to-r from-[#FF8F8F] to-[#FF906C] rounded-xl z-10 opacity-30" />
					<div class="absolute w-full h-full top-0 bg-gradient-to-t from-background rounded-xl z-10" />
				</Link>
				<div class="flex-1 h-[260px] flex flex-col gap-4 md:min-w-[380px]">
					<Link
						href="/m/gerre34r/library-inlang-paraglideJs/sveltekit"
						class="w-full flex-1 bg-background rounded-xl border border-surface-300 flex flex-col relative group hover:border-surface-400 transition-all cursor-pointer"
					>
						<div class="pl-8 pb-2 -mt-[2px]">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="30"
								fill="none"
								viewBox="0 0 28 38"
							>
								<path fill="#CBD5E1" d="M0 0h28v38L14 26.057 0 38V0z" />
							</svg>
						</div>
						<div class="flex-1 flex flex-col justify-end">
							<h3 class="font-medium text-lg px-8 pb-1">
								Paraglide SvelteKit Documentation
							</h3>
							<p class="text-surface-500 px-8 pb-6 text-sm pr-20">
								Official documentation for Paraglide JS with SvelteKit.
							</p>
						</div>
						<div class="absolute top-4 right-4 w-8 h-8 border border-surface-300 rounded-full flex justify-center items-center group-hover:bg-surface-100 transition-all text-surface-500 group-hover:text-surface-900">
							<Arrow />
						</div>
					</Link>
					<Link
						href="/m/dxnzrydw/paraglide-sveltekit-i18n"
						class="w-full bg-background rounded-xl border border-surface-300 relative group hover:border-surface-400 transition-all cursor-pointer"
					>
						<h3 class="font-medium text-lg px-8 pb-1 pt-6">
							Paraglide-SvelteKit
						</h3>
						<p class="text-surface-500 px-8 pb-6 text-sm pr-20">
							A SvelteKit integration for ParaglideJS.
						</p>
						<div class="absolute top-4 right-4 w-8 h-8 border border-surface-300 rounded-full flex justify-center items-center group-hover:bg-surface-100 transition-all text-surface-500 group-hover:text-surface-900">
							<Arrow />
						</div>
					</Link>
				</div>
			</div>
		</>
	);
};

export default SvelteHeader;

function Arrow() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="18"
			height="18"
			fill="none"
			viewBox="0 0 28 28"
		>
			<path
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2.75"
				d="M3 14h22m0 0l-8.25 8.25M25 14l-8.25-8.25"
			/>
		</svg>
	);
}
