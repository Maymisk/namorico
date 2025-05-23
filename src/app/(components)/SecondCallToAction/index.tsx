import { BlurFade } from '@/shared/components/blur-fade';
import { HeartIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function LandingPageSecondCallToAction() {
	return (
		<section className="mx-auto p-8 mt-24 ">
			<BlurFade
				className="relative w-full max-w-5xl flex flex-col items-center justify-between gap-9"
				delay={0.4}
				inView
			>
				<Image
					src="/love_arrow.png"
					alt="Love arrow image"
					className="absolute -top-14 -left-10 -rotate-[20deg]"
					width={100}
					height={100}
				/>

				<Image
					src="/love_potion.png"
					alt="Love potion image"
					className="absolute -top-[3.75rem] -right-6 rotate-[-45deg]"
					width={70}
					height={70}
				/>

				<h2 className="text-2xl font-bold text-center">
					Conte-nos sua história, pegue seu QR Code, compartilhe
				</h2>

				<p className="text-center font-light">
					Crie uma surpresa de amor atemporal em menos de 5 minutos -
					é realmente rápido assim!
				</p>

				<Link
					href="/subscribe"
					className="w-full flex justify-center items-center gap-3 xl:min-h-14 text-center text-lg rounded-md font-bold border-none px-4 py-5 transition-all text-white bg-red-200 shadow-glow shadow-red-200/80 hover:bg-red-400"
				>
					<HeartIcon className="fill-white" />
					Quero criar meu site
				</Link>
			</BlurFade>
		</section>
	);
}
