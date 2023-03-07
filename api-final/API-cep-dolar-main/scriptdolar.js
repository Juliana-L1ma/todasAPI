/*JavaScript do Dólar*/

fetch (`https://economia.awesomeapi.com.br/json/last/USD-BRL`).then(response =>{
    return response.json();
}).then(dolar => {
    console.log(dolar)
    document.getElementById("dolar").value = dolar.USDBRL.bid;
    document.getElementById("low-dolar").value = dolar.USDBRL.low;
    document.getElementById("high-dolar").value = dolar.USDBRL.high;
})

fetch (`http://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL`).then(response =>{
    return response.json();
}).then(euro => {
    console.log(euro)
    document.getElementById("euro").value = euro.EURBRL.bid;
    document.getElementById("low-euro").value = euro.EURBRL.low;
    document.getElementById("high-euro").value = euro.EURBRL.high;

})

fetch (`http://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL`).then(response =>{
    return response.json();
}).then(bitcoin => {
    console.log(bitcoin)
    document.getElementById("bitcoin").value = bitcoin.BTCBRL.bid;
    document.getElementById("low-bitcoin").value = bitcoin.BTCBRL.low;
    document.getElementById("high-bitcoin").value = bitcoin.BTCBRL.high;

})