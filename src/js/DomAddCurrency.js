import Utilities from "./Utilities.js";
import {currencyGrid} from "./Variables.js";
import DomPercentageBar from "./DomPercentageBar.js";

// Adds currency to the DOM

function DomAddCurrency(obj){
	const mql = window.matchMedia('(max-width: 600px)');

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
		function responsiveBehaviour(){
			function handleMouseEnter(){
				item.append(itemSecondary);
				itemMain.remove();
			};
			function handleMouseLeave(){
				item.append(itemMain);
				itemSecondary.remove();
			}
			if(mql.matches){
				// Mobile
				item.append(itemSecondary);
				item.removeEventListener('mouseenter', handleMouseEnter);
				item.removeEventListener('mouseleave', handleMouseLeave);
			} else {
				// Desktop
				itemSecondary.remove();
				item.addEventListener('mouseenter', handleMouseEnter);
				item.addEventListener('mouseleave', handleMouseLeave);
			}
		}
		responsiveBehaviour();
		let resizeTimeout;
		window.addEventListener('resize', () => {
			clearTimeout(resizeTimeout);
			resizeTimeout = setTimeout(() => {
				responsiveBehaviour();
			}, 200);
		});
	}


	currencyGrid.append(item);
}

export default DomAddCurrency;