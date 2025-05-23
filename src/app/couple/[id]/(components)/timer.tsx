'use client';

import moment from 'moment';
import { useEffect, useState } from 'react';

interface ICoupleTimerProps {
	startDate: string | Date;
}

export function CoupleTimer({ startDate }: ICoupleTimerProps) {
	const [difference, setDifference] = useState<number>(0);

	useEffect(() => {
		setDifference(moment(new Date()).diff(startDate, 'seconds'));
	}, [startDate]);

	useEffect(() => {
		const interval = setInterval(() => {
			setDifference(prev => prev + 1);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	let offset = difference;

	const days = Math.floor(offset / (60 * 60 * 24));
	offset %= 60 * 60 * 24;

	const hours = Math.floor(offset / (60 * 60));
	offset %= 60 * 60;

	const minutes = Math.floor(offset / 60);
	offset %= 60;

	const seconds = offset;

	if (!difference) return <div className="h-[4.75rem] max-xl:h-[10.75rem]" />;

	return (
		<div className="flex flex-col items-center gap-2">
			<h3 className="flex justify-center flex-wrap gap-2 text-4xl font-bold text-center">
				{days ? (
					<span>
						{days} <span className="text-red-300">dias</span>,
					</span>
				) : null}

				<span>
					{hours} <span className="text-red-300">horas</span>,
				</span>

				<span>
					{minutes} <span className="text-red-300">minutos</span> e
				</span>

				<span>
					{seconds} <span className="text-red-300">segundos</span>
				</span>
			</h3>

			<span className="inline-block ml-2 font-bold text-lg">
				de <span className="text-red-300">nós 💓</span>
			</span>
		</div>
	);
}
