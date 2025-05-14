import { SITE_SECTIONS, type PageSectionId, type PageSectionName } from '$lib/constants';
import { TypedObject } from '$lib/utils';
import { onMount } from 'svelte';

export const sectionVisibility: Record<PageSectionId, number> = $state({
	home: 1,
	work: 0,
	contact: 0,
});

export const activeSection: () => PageSectionName = () => {
	const sections = TypedObject.entries(sectionVisibility).reduce(
		([aString, aNumber], [bString, bNumber]) =>
			aNumber > bNumber ? [aString, aNumber] : [bString, bNumber],
	);
	return sections[0].toUpperCase() as PageSectionName;
};

export const mountPageObserver = () =>
	onMount(() => {
		const intersectionObserver = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					sectionVisibility[entry.target.id as PageSectionId] = entry.intersectionRatio;
				}
			},
			{
				threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
			},
		);

		const aboutSection = document.getElementById(SITE_SECTIONS[0].id);
		const workSection = document.getElementById(SITE_SECTIONS[1].id);
		const contactSection = document.getElementById(SITE_SECTIONS[2].id);

		if (aboutSection) {
			intersectionObserver.observe(aboutSection);
		}
		if (workSection) {
			intersectionObserver.observe(workSection);
		}
		if (contactSection) {
			intersectionObserver.observe(contactSection);
		}
		return () => {
			if (aboutSection) {
				intersectionObserver.unobserve(aboutSection);
			}
			if (workSection) {
				intersectionObserver.unobserve(workSection);
			}
			if (contactSection) {
				intersectionObserver.unobserve(contactSection);
			}
		};
	});
