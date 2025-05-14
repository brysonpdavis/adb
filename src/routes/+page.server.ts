import {
	ANNA_LAPTOP,
	SPEC_THUMBNAIL,
	SPROWT_THUMBNAIL,
	POLICYME_THUMBNAIL,
	INGAGE_THUMBNAIL,
} from '$lib/images';

export const load = async () => {
	return {
		annaLaptop: await ANNA_LAPTOP.toSerializable(),
		specThumbnail: await SPEC_THUMBNAIL.toSerializable(),
		ingageThumbnail: await INGAGE_THUMBNAIL.toSerializable(),
		policymeThumbnail: await POLICYME_THUMBNAIL.toSerializable(),
		sprowtThumbnail: await SPROWT_THUMBNAIL.toSerializable(),
	};
};
