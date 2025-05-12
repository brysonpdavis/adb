import { POLICYME_PREVIEW } from '$lib/images';

export const load = async () => {
	return { POLICYME_PREVIEW: await POLICYME_PREVIEW.toSerializable() };
};
