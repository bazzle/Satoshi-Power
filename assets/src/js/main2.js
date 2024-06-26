const container = document.querySelector('.currency-grid');
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

    function additionalDetails(mainObj, currencyName, smallestUnit){
        this.currencyName = currencyName;
        this.smallestUnit = smallestUnit;
        this.smallestUnitPrice = getSmallestUnitPrice(
            this.currencyName,
            this.smallestUnit,
            mainObj.sell
        );
    }

    for (const currencyItem in fetchedData) {
        let details = fetchedData[currencyItem];
        const symbol = details['symbol'];
        const price = details['sell'];
        const newGBP = new additionalDetails(details, 'Pound Sterling', 'British Penny');
        if (symbol === "GBP"){
            Object.assign(details, newGBP);
        };
    }

    function getSmallestUnitPrice(currencyName, smallestUnit, price){
        let smallestUnitPrice;
        if (smallestUnit === currencyName){
            smallestUnitPrice = price / 100000000;
        } else {
            smallestUnitPrice = price * 100 / 100000000;
        }
        return smallestUnitPrice;
    }

    console.log(fetchedData);

};

// Do stuff

fetchData();