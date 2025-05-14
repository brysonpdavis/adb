export type SiteSection = {
	name: string;
	id: string;
};

export const SITE_SECTIONS = [
	{ name: 'ABOUT', id: 'about' },
	{ name: 'WORK', id: 'work' },
	{ name: 'CONTACT', id: 'contact' },
] as const satisfies SiteSection[];

export const SECTION_NAMES = SITE_SECTIONS.map((section) => section.name);

export const SECTION_IDS = SITE_SECTIONS.map((section) => section.id);

export type PageSectionName = (typeof SECTION_NAMES)[number];

export type PageSectionId = (typeof SECTION_IDS)[number];

export const BRYSON_LINKEDIN = 'https://www.linkedin.com/in/bryson-davis-76855214a/';

export const ANNA_LINKEDIN = 'https://www.linkedin.com/in/annabandi/';

export const ANNA_EMAIL = 'annadanilabandi@gmail.com';

export const SPEC_URL = 'https://www.specai.io/';

export const INGAGE_URL = 'https://ingagenow.co/';

export const POLICYME_URL = 'https://www.policyme.com/';

export const SPEC_PLUGIN_URL =
	'https://www.figma.com/community/plugin/1431766216793635236/specai-enhance-ui-ux-accessibility-copy-with-ai';
