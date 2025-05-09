import { ANNA_LAPTOP } from '$lib/images';

export const load = async () => {
	return { SPEC_FIGMA: await ANNA_LAPTOP.toSerializable() };
};
