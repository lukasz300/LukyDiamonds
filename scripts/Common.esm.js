export const HIDDEN_CLASS = 'hidden';
export const HIDDEN_SCREEN = false;
export const VISIBLE_SCREEN = true;

export class Common {
	constructor(elementId) {
		if (typeof elementId === 'undefined') {
			return;
		}
		
		this.element = this.bindToElement(elementId);
	}

	bindToElement(elementToFindById) {
		const element = document.getElementById(elementToFindById);

		if (!element) {
			throw new Error(`Nie znaleziono elementu o Id: ${elementToFindById}`);
		}

		return element;
	}

	changeVisibilityScreen(element, mode) {
		mode === VISIBLE_SCREEN
			? element.classList.remove(HIDDEN_CLASS)
			: element.classList.add(HIDDEN_CLASS);
	}
}