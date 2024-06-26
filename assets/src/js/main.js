// DOM elements
const container = document.querySelector('.currency-grid');
// Data
const tickerFetchUrl = "https://blockchain.info/ticker";

let fetchedData;

async function fetchData(){
    try {
        fetchedData = await fetch(tickerFetchUrl);
        fetchedData = await fetchedData.json();
    } catch (error) {
        console.log('No data');
    } finally {
        dataFetched();
    }
}


function dataFetched(){

    function getPercentage(unitPrice){
        return Math.floor(unitPrice * 100);
    }

    function additionalDetails(price, currencyName, smallUnitName){
        this.currencyName = currencyName;
        this.unitPrice = price / 100000000;
        this.unitPercentage = getPercentage(this.unitPrice);
        this.smallUnitName = smallUnitName;
        this.smallestUnitPrice = this.currencyName === this.smallUnitName ? this.unitPrice : price * 100 / 100000000;
        this.smallestUnitPercentage = getPercentage(this.smallestUnitPrice);
        this.smallestUnitKilled = this.currencyName != this.smallUnitName && this.smallestUnitPercentage > 100;
    }

    function buildElement(ElementType, elementClassName){
        const domElement = document.createElement(ElementType);
        domElement.classList.add(elementClassName);
        return domElement;
    }

    function addToDOM(unitName, smallUnitName, unitPercentage, smallestUnitPercentage,  smallestUnitKilled){
        const item = buildElement('li', 'item');
        const itemTitle = buildElement('h2', 'item__text');
        if (smallestUnitKilled){
            // main title
            const itemTextString = unitName < 1 ? `${unitPercentage} <1%` : `${unitName} ${unitPercentage}%`;
            itemTitle.innerText = itemTextString;
            // sub title
            const itemSubtitleString = `${smallUnitName} ${smallestUnitPercentage}%`;
            const itemSubtitle = buildElement('span', 'item__subtitle');
            itemSubtitle.innerText = itemSubtitleString;
            // add together
            item.append(itemTitle, itemSubtitle);
        } else {
            // main title
            itemTextString = smallUnitName < 1 ? `${smallestUnitPercentage} <1%` : `${smallUnitName} ${smallestUnitPercentage}%`;
            itemTitle.innerText = itemTextString;
            item.append(itemTitle);
        }
        currencyList.append(item);
    }


    function addCurrencyDetails(symbol, price, data){
        switch (symbol) {
            case "ARS" : {
                const newData = new additionalDetails(price, 'Argentine Peso', 'Argentine Peso');
                Object.assign(data, newData);
                break;
            }
            case "AUD" : {
                const newData = new additionalDetails(price, 'Australian Dollar', 'Australian Cent');
                Object.assign(data, newData);
                break;
            }
            case "BRL" : {
                const newData = new additionalDetails(price, 'Brazilian Real', 'Brazilian Centavo');
                Object.assign(data, newData);
                break;
            }
            case "CAD" : {
                const newData = new additionalDetails(price, 'Canadian Dollar', 'Canadian Cent');
                Object.assign(data, newData);
                break;
            }
            case "CHF" : {
                const newData = new additionalDetails(price, 'Swiss Franc', 'Swiss Rappen');
                Object.assign(data, newData);
                break;
            }
            case "CLP" : {
                const newData = new additionalDetails(price, 'Chilean Peso', 'Chilean Peso');
                Object.assign(data, newData);
                break;
            }
            case "CNY" : {
                const newData = new additionalDetails(price, 'Chinese Yuan', 'Chinese Fen');
                Object.assign(data, newData);
                break;
            }
            case "CZK" : {
                const newData = new additionalDetails(price, 'Czech Koruna', 'Czech Haléř');
                Object.assign(data, newData);
                break;
            }
            case "DKK" : {
                const newData = new additionalDetails(price, 'Danish Krone', 'Danish Øre');
                Object.assign(data, newData);
                break;
            }
            case "EUR" : {
                const newData = new additionalDetails(price, 'Euro', 'Euro Cent');
                Object.assign(data, newData);
                break;
            }
            case "GBP" : {
                const newData = new additionalDetails(price, 'Pound Sterling', 'British Penny');
                Object.assign(data, newData);
                break;
            }
            case "HKD" : {
                const newData = new additionalDetails(price, 'Hong Kong Dollar', 'Hong Kong Cent');
                Object.assign(data, newData);
                break;
            }
            case "HRK" : {
                const newData = new additionalDetails(price, 'Croatian Kuna', 'Croatian Lipa');
                Object.assign(data, newData);
                break;
            }
            case "HUF" : {
                const newData = new additionalDetails(price, 'Hungarian Forint', 'Hungarian Forint');
                Object.assign(data, newData);
                break;
            }
            case "INR" : {
                const newData = new additionalDetails(price, 'Indian Rupee', 'Indian Paisa');
                Object.assign(data, newData);
                break;
            }
            case "ISK" : {
                const newData = new additionalDetails(price, 'Icelandic Króna', 'Icelandic Króna');
                Object.assign(data, newData);
                break;
            }
            case "JPY" : {
                const newData = new additionalDetails(price, 'Japanese Yen', 'Japanese Yen');
                Object.assign(data, newData);
                break;
            }
            case "KRW" : {
                const newData = new additionalDetails(price, 'South Korean Won', 'South Korean Won');
                Object.assign(data, newData);
                break;
            }
            case "NZD" : {
                const newData = new additionalDetails(price, 'New Zealand Dollar', 'New Zealand Cent');
                Object.assign(data, newData);
                break;
            }
            case "PLN" : {
                const newData = new additionalDetails(price, 'Polish Złoty', 'Polish Grosz');
                Object.assign(data, newData);
                break;
            }
            case "RON" : {
                const newData = new additionalDetails(price, 'Romanian Leu', 'Romanian Ban');
                Object.assign(data, newData);
                break;
            }
            case "RUB" : {
                const newData = new additionalDetails(price, 'Russian Ruble', 'Russian Kopek');
                Object.assign(data, newData);
                break;
            }
            case "SEK" : {
                const newData = new additionalDetails(price, 'Swedish Krona', 'Swedish Öre');
                Object.assign(data, newData);
                break;
            }
            case "SGD" : {
                const newData = new additionalDetails(price, 'Singapore Dollar', 'Singapore Cent');
                Object.assign(data, newData);
                break;
            }
            case "THB" : {
                const newData = new additionalDetails(price, 'Thai Baht', 'Thai Satang');
                Object.assign(data, newData);
                break;
            }
            case "TRY" : {
                const newData = new additionalDetails(price, 'Turkish Lira', 'Turkish Kuruş');
                Object.assign(data, newData);
                break;
            }
            case "TWD" : {
                const newData = new additionalDetails(price, 'New Taiwan Dollar', 'Taiwanese Cent');
                Object.assign(data, newData);
                break;
            }
            case "USD" : {
                const newData = new additionalDetails(price, 'United States Dollar', 'United States Cent');
                Object.assign(data, newData);
                break;
            }
        }
        
    };


    // Do stuff --------------------------------------------

    const currencyList = document.createElement('ul');
    container.append(currencyList);

    for (const currencyItem in fetchedData) {
        let details = fetchedData[currencyItem];
        const symbol = details['symbol'];
        const price = details['sell'];
        const deleteDeets = ['15m', 'buy', 'last'];
        deleteDeets.forEach((item) => {
            delete details[item];
        })
        addCurrencyDetails(symbol, price, details);
        addToDOM(details['currencyName'], details['smallUnitName'], details['unitPercentage'], details['smallestUnitPercentage'], details['smallestUnitKilled']);
    }
    console.log(fetchedData);

};


fetchData();