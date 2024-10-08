import Utilities from "./Utilities.js";
import {currencyGrid} from "./Variables.js";
import DomPercentageBar from "./DomPercentageBar.js";
import DomCurrencyInteractivity from "./DomCurrencyInteractivity.js";

// Adds currency to the DOM

function DomAddCurrency(obj){
	const unitName = obj.unitName;
	const unitPercentage = obj.unitPercentage;
	const smallUnitName = obj.smallUnitName;
	const smallUnitPercentage = obj.smallUnitPercentage;
	const smallestUnitKilled = obj.smallestUnitKilled;
	let itemMain;

	let itemTextString = unitPercentage < 1 ? `${unitName} <1%` : `${unitName} ${unitPercentage}%`;
	let itemTextStringSmall = `${smallUnitName} ${smallUnitPercentage}%`;

	const item = Utilities.buildElement('li', 'c-currencyitem');
	const itemPercentageBar = DomPercentageBar(unitPercentage);
	const itemPercentageBarSmallUnit = DomPercentageBar(smallUnitPercentage);
	const iconContainer = Utilities.buildElement('div', 'c-currencyitem__icon');
	itemMain = Utilities.buildElement('div', 'c-currencyitem__main');
	const itemMainText = Utilities.buildElement('span', 'c-currencyitem__text');
	itemMain.append(itemMainText);
	itemMain.append(itemPercentageBarSmallUnit);
	itemMain.append(iconContainer);
	itemMainText.innerText = itemTextStringSmall;
	item.append(itemMain);
	if (smallestUnitKilled){
		item.setAttribute('tabindex', 0);
		item.classList.add('c-currencyitem--killed');
		const itemSecondary = Utilities.buildElement('div','c-currencyitem__secondary');
		const itemSecondaryText = Utilities.buildElement('span', 'c-currencyitem__text');
		itemSecondary.append(itemSecondaryText);
		itemSecondaryText.innerText = itemTextString;
		itemSecondary.append(itemPercentageBar);
		DomCurrencyInteractivity(item, itemMain, itemSecondary);
	}


	currencyGrid.append(item);
}

export default DomAddCurrency;