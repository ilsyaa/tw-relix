
export interface IBasePlugin<O, E> {
	el: E;
	options?: O;
	events?: {};
}
declare class HSBasePlugin<O, E = HTMLElement> implements IBasePlugin<O, E> {
	el: E;
	options: O;
	events?: any;
	constructor(el: E, options: O, events?: any);
	createCollection(collection: any[], element: any): void;
	fireEvent(evt: string, payload?: any): any;
	on(evt: string, cb: Function): void;
}
export interface ICollectionItem<T> {
	id: string | number;
	element: T;
}
declare class HSButtonRipple extends HSBasePlugin<{}> {
	private rippleWrapper;
	constructor(el: HTMLElement);
	private init;
	private event;
	private createEffectRipple;
	private createWrapperRippleElement;
	private setDefaultStyles;
	static getInstance(target: HTMLElement, isInstance?: boolean): HTMLElement | ICollectionItem<HSButtonRipple>;
	static autoInit(): void;
}

export {
	HSButtonRipple as default,
};

export {};
