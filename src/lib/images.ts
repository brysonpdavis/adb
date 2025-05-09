import { rgbaToThumbHash, thumbHashToDataURL } from 'thumbhash';
import sharp from 'sharp';
import specFigma from '$lib/assets/spec-figma.png';
import annaLaptop from '$lib/assets/anna-laptop.png';
import specThumbnail from '$lib/assets/spec-thumbnail.png';

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
