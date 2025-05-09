import { ANNA_LAPTOP, SPEC_THUMBNAIL } from '$lib/images';

export const load = async () => {
	return {
		annaLaptop: await ANNA_LAPTOP.toSerializable(),
		specThumbnail: await SPEC_THUMBNAIL.toSerializable()
	};
};
