import { SITE_SECTIONS, type PageSectionId, type PageSectionName } from '$lib/constants';
import { onMount } from 'svelte';

export let sectionVisibility: { [key in PageSectionId]: boolean } = $state({
	about: true,
	work: false,
	contact: false
});

export let activeSection: () => PageSectionName = () => {
	if (sectionVisibility.contact) {
		return 'CONTACT';
	}

	if (sectionVisibility.work) {
		return 'WORK';
	}

	return 'ABOUT';
};

export const mountPageObserver = () =>
	onMount(() => {
		const aboutIntersectionObserver = new IntersectionObserver(
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
			aboutIntersectionObserver.observe(aboutSection);
		}
		if (workSection) {
			aboutIntersectionObserver.observe(workSection);
		}
		if (contactSection) {
			aboutIntersectionObserver.observe(contactSection);
		}
		return () => {
			if (aboutSection) {
				aboutIntersectionObserver.unobserve(aboutSection);
			}
			if (workSection) {
				aboutIntersectionObserver.unobserve(workSection);
			}
			if (contactSection) {
				aboutIntersectionObserver.unobserve(contactSection);
			}
		};
	});
