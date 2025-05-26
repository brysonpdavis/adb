import { rgbaToThumbHash, thumbHashToDataURL } from 'thumbhash';
import sharp from 'sharp';
import path from 'path';
import { TypedObject } from '$lib/utils';

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
			dataUrl,
		};
	}
}

export const allImagesToSerializable = async <T extends string>(
	images: Record<T, HashableImage>,
) => {
	const promises = TypedObject.entries(images).map(
		async ([key, image]) => [key, await image.toSerializable()] as [T, SerializableHashableImage],
	);

	return TypedObject.fromEntries(await Promise.all(promises));
};

export const ANNA_LAPTOP = new HashableImage('anna-laptop.png', 'alt', 300, 300);

// SPEC IMAGES
export const SPEC_FIGMA = new HashableImage('spec-figma.png', 'alt', 801, 452);
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
	278,
);

// INGAGE IMAGES
export const INGAGE_PREVIEW = new HashableImage('ingage-preview.png', 'alt', 798, 518);
export const INGAGE_THUMBNAIL = new HashableImage(
	'ingage-thumbnail.png',
	'ingage thumbnail',
	2402,
	1340,
);
export const INGAGE_PROBLEM = new HashableImage('ingage-problem.png', 'ingage problem', 491, 341);
export const INGAGE_SCREENSHOT = new HashableImage(
	'ingage-screenshot.png',
	'ingage screenshot',
	444,
	429,
);
export const INGAGE_INPUT_FIELDS = new HashableImage(
	'ingage-input-fields.png',
	'ingage input fields',
	510,
	334,
);
export const INGAGE_BUTTONS = new HashableImage('ingage-buttons.png', 'ingage buttons', 514, 333);
export const INGAGE_FLOWCHART = new HashableImage(
	'ingage-flowchart.png',
	'ingage flowchart',
	1048,
	438,
);
export const INGAGE_REVIEWS = new HashableImage('ingage-reviews.png', 'ingage reviews', 450, 398);
export const INGAGE_EXTENSION_1 = new HashableImage(
	'ingage-extension-1.png',
	'ingage extension 1',
	262,
	452,
);
export const INGAGE_EXTENSION_2 = new HashableImage(
	'ingage-extension-2.png',
	'ingage extension 2',
	262,
	452,
);
export const INGAGE_EXTENSION_3 = new HashableImage(
	'ingage-extension-3.png',
	'ingage extension 3',
	262,
	452,
);
export const INGAGE_EXTENSION_4 = new HashableImage(
	'ingage-extension-4.png',
	'ingage extension 4',
	262,
	452,
);
export const INGAGE_EXTENSION_5 = new HashableImage(
	'ingage-extension-5.png',
	'ingage extension 5',
	262,
	452,
);
export const INGAGE_EXTENSION_6 = new HashableImage(
	'ingage-extension-6.png',
	'ingage extension 6',
	262,
	452,
);
export const INGAGE_EXTENSION_7 = new HashableImage(
	'ingage-extension-7.png',
	'ingage extension 7',
	262,
	452,
);
export const INGAGE_EXTENSION_8 = new HashableImage(
	'ingage-extension-8.png',
	'ingage extension 8',
	262,
	452,
);
export const INGAGE_WEB_1 = new HashableImage('ingage-web-1.png', 'ingage web 1', 516, 339);
export const INGAGE_WEB_2 = new HashableImage('ingage-web-2.png', 'ingage web 2', 516, 339);
export const INGAGE_WEB_3 = new HashableImage('ingage-web-3.png', 'ingage web 3', 516, 339);
export const INGAGE_WEB_4 = new HashableImage('ingage-web-4.png', 'ingage web 4', 516, 339);
export const INGAGE_LAPTOP = new HashableImage('ingage-laptop.png', 'ingage laptop', 1048, 543);

// POLICYME IMAGES
export const POLICYME_PREVIEW = new HashableImage(
	'policyme-preview.png',
	'policyme preview',
	578,
	635,
);
export const POLICYME_THUMBNAIL = new HashableImage(
	'policyme-thumbnail.png',
	'policyme thumbnail',
	509,
	306,
);
export const POLICYME_PROBLEM = new HashableImage(
	'policyme-problem.png',
	'policyme problem',
	463,
	380,
);
export const POLICYME_INTERVIEW_1 = new HashableImage(
	'policyme-interview-1.png',
	'policyme interview 1',
	504,
	285,
);
export const POLICYME_INTERVIEW_2 = new HashableImage(
	'policyme-interview-2.png',
	'policyme interview 2',
	504,
	285,
);
export const POLICYME_MOBILE_1 = new HashableImage(
	'policyme-mobile-1.png',
	'policyme mobile 1',
	323,
	647,
);
export const POLICYME_MOBILE_2 = new HashableImage(
	'policyme-mobile-2.png',
	'policyme mobile 2',
	323,
	647,
);
export const POLICYME_MOBILE_3 = new HashableImage(
	'policyme-mobile-3.png',
	'policyme mobile 3',
	323,
	647,
);
export const POLICYME_DESKTOP_1 = new HashableImage(
	'policyme-desktop-1.png',
	'policyme desktop 1',
	1048,
	542,
);
export const POLICYME_DESKTOP_2 = new HashableImage(
	'policyme-desktop-2.png',
	'policyme desktop 2',
	1048,
	542,
);
export const POLICYME_DESKTOP_3 = new HashableImage(
	'policyme-desktop-3.png',
	'policyme desktop 3',
	1048,
	542,
);
export const POLICYME_DESIGN_ELEMENTS = new HashableImage(
	'policyme-design-elements.png',
	'policyme design elements',
	1048,
	619,
);
export const POLICYME_DESIGN_SYSTEM = new HashableImage(
	'policyme-design-system.png',
	'policyme design system',
	449,
	296,
);
export const POLICYME_IMPACT = new HashableImage(
	'policyme-impact.png',
	'policyme impact',
	523,
	333,
);

// SPROWT IMAGES
export const SPROWT_THUMBNAIL = new HashableImage(
	'sprowt-thumbnail.png',
	'sprowt thumbnail',
	509,
	309,
);
