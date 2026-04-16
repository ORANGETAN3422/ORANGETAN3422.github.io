import type { Level } from '$lib/types';

const levelRoute = 'https://aredl-roulette.vercel.app/api/aredl/level/';

export async function fetchLevel({ id }: { id: number }): Promise<Level> {
	const res = await fetch(`${levelRoute}${id}`);
	if (!res.ok) throw new Error(`Failed to fetch level ${id}: ${res.status}`);
	return res.json();
}
