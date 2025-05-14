import classNames from 'classnames';

export const cn = classNames;

export const px = (size: number) => `${size}px`;

export const TypedObject = {
	// Typed version of Object.entries
	entries<T extends object>(obj: T): Array<[keyof T, T[keyof T]]> {
		return Object.keys(obj).map((key) => [key as keyof T, obj[key as keyof T]]);
	},

	// Typed version of Object.keys
	keys<T extends object>(obj: T): (keyof T)[] {
		return Object.keys(obj) as (keyof T)[];
	},

	// Typed version of Object.values
	values<T extends object>(obj: T): T[keyof T][] {
		return Object.values(obj) as T[keyof T][];
	},

	// Typed version of Object.fromEntries
	fromEntries<T extends string | number | symbol, V>(entries: [T, V][]): Record<T, V> {
		return Object.fromEntries(entries) as Record<T, V>;
	},
};
