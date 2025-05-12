import {
	SPEC_COMMENTS,
	SPEC_FEEDBACK,
	SPEC_FIGMA,
	SPEC_FINAL_1,
	SPEC_FINAL_2,
	SPEC_FINAL_3,
	SPEC_FINAL_4,
	SPEC_FINAL_5,
	SPEC_FINAL_6,
	SPEC_PLUGIN_SCREENSHOT
} from '$lib/images';

export const load = async () => {
	return {
		SPEC_FIGMA: await SPEC_FIGMA.toSerializable(),
		SPEC_COMMENTS: await SPEC_COMMENTS.toSerializable(),
		SPEC_FINAL_1: await SPEC_FINAL_1.toSerializable(),
		SPEC_FINAL_2: await SPEC_FINAL_2.toSerializable(),
		SPEC_FINAL_3: await SPEC_FINAL_3.toSerializable(),
		SPEC_FINAL_4: await SPEC_FINAL_4.toSerializable(),
		SPEC_FINAL_5: await SPEC_FINAL_5.toSerializable(),
		SPEC_FINAL_6: await SPEC_FINAL_6.toSerializable(),
		SPEC_FEEDBACK: await SPEC_FEEDBACK.toSerializable(),
		SPEC_PLUGIN_SCREENSHOT: await SPEC_PLUGIN_SCREENSHOT.toSerializable()
	};
};
