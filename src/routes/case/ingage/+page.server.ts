import { INGAGE_PREVIEW, INGAGE_PROBLEM } from '$lib/images';

export const load = async () => {
	return {
		INGAGE_PREVIEW: await INGAGE_PREVIEW.toSerializable(),
		INGAGE_PROBLEM: await INGAGE_PROBLEM.toSerializable(),
	};
};
