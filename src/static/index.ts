/*
 * HSStaticMethods
 * @author: Ilsyaa
 * @license: Licensed under MIT
 * Copyright 2024 velixs.com
 */

import { getClassProperty, afterTransition } from '../utils';
import { COLLECTIONS } from '../spa';
import { IStaticMethods } from './interfaces';

declare global {
	interface Window {
		HSStaticMethods: IStaticMethods;
	}
}

const HSStaticMethods: IStaticMethods = {
	getClassProperty,
	afterTransition,
	autoInit(collection: string | string[] = 'all') {
		if (collection === 'all') {
			COLLECTIONS.forEach(({ fn }) => {
				fn?.autoInit();
			});
		} else {
			COLLECTIONS.forEach(({ key, fn }) => {
				if (collection.includes(key)) fn?.autoInit();
			});
		}
	},
};

if (typeof window !== 'undefined') {
	window.HSStaticMethods = HSStaticMethods;
}

export default HSStaticMethods;
