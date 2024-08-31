import Utilities from "./Utilities.js";

const DomPercentageBar = (percentage) => {
	const width = percentage > 100 ? 100 : percentage;
	const element = Utilities.buildElement('span', 'c-currencyitem__percentage-bar');
	element.style.width = width + '%';
	return element;
};

export default DomPercentageBar;