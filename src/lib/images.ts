import { rgbaToThumbHash, thumbHashToDataURL } from 'thumbhash';
import sharp from 'sharp';
import path from 'path';

export interface SerializableHashableImage {
	src: string;
	alt: string;
	width: number;
	height: number;
	dataUrl: string;
}

const CWD = process.cwd();
const ASSETS_PATH = path.join(CWD, 'static', 'assets');
const createImagePath = (fileName: string) => path.join(ASSETS_PATH, fileName);

export class HashableImage {
	path: string;
	src: string;
	alt: string;
	width: number;
	height: number;
	hash?: Uint8Array;
	dataUrl?: string;

	constructor(fileName: string, alt: string, width: number, height: number) {
		this.path = createImagePath(fileName);
		this.src = `/assets/${fileName}`;
		this.alt = alt;
		this.width = width;
		this.height = height;

		this.setHash().then(() => this.setDataUrl());
	}

	async setHash() {
		const { info, data: buf } = await sharp(this.path)
			.resize(100, 100)
			.ensureAlpha()
			.raw()
			.toBuffer({ resolveWithObject: true });

		const hash = rgbaToThumbHash(info.width, info.height, buf);

		this.hash = hash;

		return hash;
	}

	setDataUrl() {
		if (!this.hash) {
			throw new Error('Hash not set');
		}

		const dataUrl = thumbHashToDataURL(this.hash);

		this.dataUrl = dataUrl;

		return dataUrl;
	}

	async toSerializable(): Promise<SerializableHashableImage> {
		let hash: Uint8Array | undefined = this.hash;

		if (!hash) {
			hash = await this.setHash();
		}

		let dataUrl: string | undefined = this.dataUrl;

		if (!dataUrl) {
			dataUrl = this.setDataUrl();
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

export const SPEC_FIGMA = new HashableImage('spec-figma.png', 'alt', 801, 452);
export const ANNA_LAPTOP = new HashableImage('anna-laptop.png', 'alt', 300, 300);
export const SPEC_THUMBNAIL = new HashableImage('spec-thumbnail.png', 'alt', 2432, 1222);
export const SPEC_COMMENTS = new HashableImage('spec-comments.png', 'alt', 511, 318);
export const SPEC_FINAL_1 = new HashableImage('spec-final-1.png', 'final 1', 320, 348);
export const SPEC_FINAL_2 = new HashableImage('spec-final-2.png', 'final 2', 320, 348);
export const SPEC_FINAL_3 = new HashableImage('spec-final-3.png', 'final 3', 320, 348);
export const SPEC_FINAL_4 = new HashableImage('spec-final-4.png', 'final 4', 320, 348);
export const SPEC_FINAL_5 = new HashableImage('spec-final-5.png', 'final 5', 320, 348);
export const SPEC_FINAL_6 = new HashableImage('spec-final-6.png', 'final 6', 320, 348);
export const SPEC_FEEDBACK = new HashableImage('spec-feedback.png', 'spec feedback', 1048, 504);
export const SPEC_PLUGIN_SCREENSHOT = new HashableImage(
	'spec-plugin-screenshot.png',
	'spec plugin screenshot',
	453,
	278
);
export const INGAGE_PREVIEW = new HashableImage('ingage-preview.png', 'alt', 798, 518);
export const POLICYME_PREVIEW = new HashableImage(
	'policyme-preview.png',
	'policyme preview',
	578,
	635
);
