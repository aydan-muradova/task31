let body = document.querySelector("body");
let table = document.createElement("table");
body.append(table);
console.log(table);

// Basliq
function createTableHeader(headers) {
    let headerRow = document.createElement("tr");
    headers.forEach(text => {
        let th = document.createElement("th");
        th.textContent = text;
        headerRow.append(th);
    });
    table.append(headerRow);
}
createTableHeader(["Name", "Ticker", "Value", "Change"]);


// govde
function addTableRow(data) {
    let row = document.createElement("tr");

    data.forEach(text => {
        let td = document.createElement("td");
        td.textContent = text;
        row.append(td);
    });

    table.append(row);


}
addTableRow(["Bitcoin", "BTC", "9685", "2.83%"]);
addTableRow(["Ethereum", "ETH", "210.5","6.17%"]);
addTableRow(["Solana", "SOL", "98", "4.01%"]);
addTableRow([ "Ripple",  "XRP",  "0.2812",  "2.47%"]);
addTableRow ([ "Bitcoin Cash",  "BCH",  "441.4", "5.01%"]);
addTableRow(["Bitcoin SV",  "BSV", "303.17",  "5.53%" ]);
addTableRow ([ "Litecoin", "LTC", "74.935","4.25%"]);
addTableRow([ "Tether", "USDT",  "0.9994","-1.7%" ]);
addTableRow([ "EOS",  "EOS", "4.6161",  "3.15%"]);
addTableRow ([ "Binance Coin", "BNB",  "19.824",  "-3.82%"]);
addTableRow (["Cardano",  "ADA", "0.060389",  "2.93%" ]);
addTableRow   (["Tezos", "XTZ",  "2.1247",  "6.12%" ]);
addTableRow ([ "Ethereum Classic","ETC",  "12.5988", "4.09%"]);
addTableRow ([ "Stellar",  "XLM",  "0.07034", "-4.10%" ]);
addTableRow (["Monero", "XMR",  "79.523",  "3.45%" ]);
addTableRow  ([ "TRON", "TRX",  "0.020881", "5.21%" ]);




let rows = table.querySelectorAll("tr:nth-child(n+2)"); 

rows.forEach(row => {
    let changeCell = row.children[3];


    if (changeCell.textContent.includes("-")) {
        changeCell.style.color = "red";
    } else {
        changeCell.style.color = "green";
    }
});








// let users = [
//   { name: "Bitcoin", ticker: "BTC", value: "9685", change: "2.83%" },
 // { name: "Ethereum", ticker: "ETH", value: "210.5", change: "6.17%" },
 // { name: "Ripple", ticker: "XRP", value: "0.2812", change: "2.47%" },
// ];

// let body = document.querySelector("body");

// let table = document.createElement("table");

// body.append(table);

// // 1 BAŞLIQLAR (yalnız 1 dəfə)
// let headerRow = document.createElement("tr");
// table.append(headerRow);

// let headers = Object.keys(users[0]);

// headers.forEach(key => {
//     let th = document.createElement("th");
//     th.textContent = key;
//     headerRow.append(th);
// });

// // 2 DATA SƏTİRLƏRİ
// users.forEach(user => {
//     let row = document.createElement("tr");

//     headers.forEach(key => {
//         let td = document.createElement("td");
//         td.textContent = user[key];
//         row.append(td);
//     });

//     table.append(row);
// });

// console.log(users);