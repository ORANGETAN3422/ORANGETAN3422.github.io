export interface Project {
	name: string;
	description: string;
	tags: string[];
	link: string;
	github: string;
}

export interface Completion {
	name: string;
	id: number;
	position: number;
	video: string;
}

export interface Level {
	id: string;
	position: number;
	name: string;
	points: number;
	legacy: boolean;
	level_id: number;
	two_player: boolean;
	tags: string[];
	description: string;
	song: number;
	edel_enjoyment: number;
	is_edel_pending: boolean;
	gddl_tier: number;
	nlw_tier: string;
	publisher: Publisher;
	verifications: Verification[];
}

export interface Publisher {
	id: string;
	username: string;
	global_name: string;
}

export interface Verification {
	id: string;
	submitted_by: Publisher;
	mobile: boolean;
	video_url: string;
	hide_video: boolean;
	achieved_at: Date;
	created_at: Date;
	updated_at: Date;
}
