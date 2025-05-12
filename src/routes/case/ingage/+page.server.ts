import { INGAGE_PREVIEW } from '$lib/images';

export const load = async () => {
	return { INGAGE_PREVIEW: await INGAGE_PREVIEW.toSerializable() };
};
