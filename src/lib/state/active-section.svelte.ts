import { SITE_SECTIONS, type PageSectionId, type PageSectionName } from '$lib/constants';
import { onMount } from 'svelte';

export const sectionVisibility: { [key in PageSectionId]: boolean } = $state({
	home: true,
	work: false,
	contact: false
});

export const activeSection: () => PageSectionName = () => {
	if (sectionVisibility.contact) {
		return 'CONTACT';
	}

	if (sectionVisibility.work) {
		return 'WORK';
	}

	return 'HOME';
};

export const mountPageObserver = () =>
	onMount(() => {
		const intersectionObserver = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					sectionVisibility[entry.target.id as PageSectionId] = entry.isIntersecting;
				}
			},
			{
				threshold: 0.2
			}
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
