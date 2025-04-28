export type SiteSection = {
	name: string;
	slug: string;
};

export const SITE_SECTIONS: {
	name: string;
	slug: string;
}[] = [
	{ name: 'ABOUT', slug: '' },
	{ name: 'WORK', slug: 'work' },
	{ name: 'CONTACT', slug: 'contact' }
];
