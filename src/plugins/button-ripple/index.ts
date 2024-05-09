/*
 * HSButtonRipple
 * @author: Ilsyaa
 * @license: Licensed under MIT
 * Copyright 2024 velixs.com
 */

import HSBasePlugin from '../base-plugin';
import { ICollectionItem } from '../../interfaces';

class HSButtonRipple extends HSBasePlugin<{}> {
	private rippleWrapper: HTMLElement;

	constructor(el: HTMLElement) {
		super(el, {});
        this.rippleWrapper;
		this.init();
	}

	private init() {
		this.createCollection(window.$hsButtonRippleCollection, this);

		this.setDefaultStyles();
        this.rippleWrapper = this.el.appendChild(this.createWrapperRippleElement());
        this.event();
	}

	private event(){
        this.el.addEventListener("click", (event) => {
            this.createEffectRipple(event);
        })
    }

	private createEffectRipple(el: any) {
        function findFurthestPoint(
            clickPointX: any,
            elementWidth: any,
            offsetX: any,
            clickPointY: any,
            elementHeight: any,
            offsetY: any
        ) {
            let x =
                clickPointX - offsetX > elementWidth / 2 ? 0 : elementWidth;
            let y =
                clickPointY - offsetY > elementHeight / 2 ? 0 : elementHeight;
            let z = Math.hypot(
                x - (clickPointX - offsetX),
                y - (clickPointY - offsetY)
            );
            return z;
        }

        function applyStyles(element: HTMLElement, rect: any, radius: any, event: any) {
            element.style.borderRadius = "50%";
            element.style.pointerEvents = "none";
            element.style.position = "absolute";
            element.style.left = event.clientX - rect.left - radius + "px";
            element.style.top = event.clientY - rect.top - radius + "px";
            element.style.width = element.style.height = radius * 2 + "px";
        }

        function applyAnimation(element: HTMLElement) {
            element.animate(
                [
                    { transform: "scale(0)", opacity: 1 },
                    { transform: "scale(1.5)", opacity: 0 },
                ],
                { duration: 500, easing: "linear" }
            );
        }

        var element = el.currentTarget;
        var rect = element.getBoundingClientRect();
        var radius = findFurthestPoint(
            el.clientX,
            element.offsetWidth,
            rect.left,
            el.clientY,
            element.offsetHeight,
            rect.top
        );
        var circle = document.createElement("span");
        applyStyles(circle, rect, radius, el);
        applyAnimation(circle);
        this.rippleWrapper.appendChild(circle);
        setTimeout(function () {
            return circle.remove();
        }, 500);
    }

	private createWrapperRippleElement(){
        const el = document.createElement("span");
        el.classList.add("hs-ripple");
        el.style.position = "absolute";
        el.style.overflow = "hidden";
        el.style.inset = "0";
        el.style.pointerEvents = "none";
        el.style.zIndex = "0";
        el.style.borderRadius = "inherit";
        return el
    }

    private setDefaultStyles() {
        this.el.style.position = "relative";
    }

	// Static methods
	static getInstance(target: HTMLElement, isInstance = false) {
		const elInCollection = window.$hsButtonRippleCollection.find(
			(el) =>
				el.element.el ===
				(typeof target === 'string' ? document.querySelector(target) : target),
		);

		return elInCollection
			? isInstance
				? elInCollection
				: elInCollection.element.el
			: null;
	}

	static autoInit() {
		if (!window.$hsButtonRippleCollection) window.$hsButtonRippleCollection = [];

		document
			.querySelectorAll('[data-hs-ripple]')
			.forEach((el: HTMLElement) => {
				if (
					!window.$hsButtonRippleCollection.find(
						(elC) => (elC?.element?.el as HTMLElement) === el,
					)
				)
					new HSButtonRipple(el);
			});
	}
}

declare global {
	interface Window {
		HSButtonRipple: Function;
		$hsButtonRippleCollection: ICollectionItem<HSButtonRipple>[];
	}
}

window.addEventListener('load', () => {
	HSButtonRipple.autoInit();
});

if (typeof window !== 'undefined') {
	window.HSButtonRipple = HSButtonRipple;
}

export default HSButtonRipple;
