import { rgbaToThumbHash, thumbHashToDataURL } from 'thumbhash';
import sharp from 'sharp';
import specFigma from '$lib/assets/spec-figma.png';
import annaLaptop from '$lib/assets/anna-laptop.png';
import specThumbnail from '$lib/assets/spec-thumbnail.png';
import ingagePreview from '$lib/assets/ingage-preview.png';
import policymePreview from '$lib/assets/policyme-preview.png';
import specComments from '$lib/assets/spec-comments.png';
import specFinal1 from '$lib/assets/spec-final-1.png';
import specFinal2 from '$lib/assets/spec-final-2.png';
import specFinal3 from '$lib/assets/spec-final-3.png';
import specFinal4 from '$lib/assets/spec-final-4.png';
import specFinal5 from '$lib/assets/spec-final-5.png';
import specFinal6 from '$lib/assets/spec-final-6.png';
import specFeedback from '$lib/assets/spec-feedback.png';
import specPluginScreenshot from '$lib/assets/spec-plugin-screenshot.png';

export interface SerializableHashableImage {
	src: string;
	alt: string;
	width: number;
	height: number;
	dataUrl: string;
}

export class HashableImage {
	src: string;
	alt: string;
	width: number;
	height: number;
	hash?: Uint8Array;
	dataUrl?: string;

	constructor(src: string, alt: string, width: number, height: number) {
		this.src = src;
		this.alt = alt;
		this.width = width;
		this.height = height;

		this.setHash();
	}

	async setHash() {
		const trimmedSrc = this.src.slice(1);

		const { info, data: buf } = await sharp(trimmedSrc)
			.resize(100, 100)
			.ensureAlpha()
			.raw()
			.toBuffer({ resolveWithObject: true });

		const hash = rgbaToThumbHash(info.width, info.height, buf);

		this.hash = hash;

		return hash;
	}

	async toSerializable(): Promise<SerializableHashableImage> {
		let hash: Uint8Array | undefined = this.hash;

		if (!hash) {
			hash = await this.setHash();
		}

		let dataUrl: string | undefined = this.dataUrl;

		if (!dataUrl) {
			dataUrl = thumbHashToDataURL(hash);
		}

		return {
			src: this.src,
			alt: this.alt,
			width: this.width,
			height: this.height,
			dataUrl
		};
	}
}

export const SPEC_FIGMA = new HashableImage(specFigma, 'alt', 801, 452);
export const ANNA_LAPTOP = new HashableImage(annaLaptop, 'alt', 300, 300);
export const SPEC_THUMBNAIL = new HashableImage(specThumbnail, 'alt', 2432, 1222);
export const SPEC_COMMENTS = new HashableImage(specComments, 'alt', 511, 318);
export const SPEC_FINAL_1 = new HashableImage(specFinal1, 'final 1', 320, 348);
export const SPEC_FINAL_2 = new HashableImage(specFinal2, 'final 2', 320, 348);
export const SPEC_FINAL_3 = new HashableImage(specFinal3, 'final 3', 320, 348);
export const SPEC_FINAL_4 = new HashableImage(specFinal4, 'final 4', 320, 348);
export const SPEC_FINAL_5 = new HashableImage(specFinal5, 'final 5', 320, 348);
export const SPEC_FINAL_6 = new HashableImage(specFinal6, 'final 6', 320, 348);
export const SPEC_FEEDBACK = new HashableImage(specFeedback, 'spec feedback', 1048, 504);
export const SPEC_PLUGIN_SCREENSHOT = new HashableImage(
	specPluginScreenshot,
	'spec plugin screenshot',
	453,
	278
);
export const INGAGE_PREVIEW = new HashableImage(ingagePreview, 'alt', 798, 518);
export const POLICYME_PREVIEW = new HashableImage(policymePreview, 'policyme preview', 578, 635);
