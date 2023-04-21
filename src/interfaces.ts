export interface IRawBook {
	id: number;
	idCode: string;
	title: string;
	description: string;
	notes: string;
	yearMonth: string;
	rank: number;
	language: string;
	extras: string;
	systemWhenCreated: string;
	systemWhoCreated: string;
}

export interface IBook {
	id: number;
	idCode: string;
	title: string;
	description: string;
	language: string;
}

export interface ISkill {
	idCode: string;
	name: string;
	url: string;
	description: string;
}