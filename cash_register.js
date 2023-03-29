// Cash Register
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)
// See below for an example of a cash-in-drawer array:

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]

function checkCashRegister(price, cash, cid) {
  // Currency units
  const currencyValues = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];

  // Calculate change
  let changeDue = cash - price;
  let change = [];
  let totalCid = cid.reduce((acc, curr) => acc + curr[1], 0);

  // Check if cid is less than change due
  if (totalCid < changeDue) {
    return {status: 'INSUFFICIENT_FUNDS', change: [] };
  } else if (totalCid === changeDue) {
    return {status: 'CLOSED', change: cid};
  } else {
    // Loop through currency array
    for (let i = currencyValues.length - 1; i >= 0; i--) {
      let currencyName = currencyValues[i][0];
      let currencyValue = currencyValues[i][1];
      let currencyAmount = 0;
      // While changeDue is greater than currencyValue and cid is greater than 0
      while (changeDue >= currencyValue && cid[i][1] > 0) {
        changeDue -= currencyValue;
        cid[i][1] -= currencyValue;
        currencyAmount += currencyValue;

        // Round to two decimal places to avoid floating point issues
        changeDue = Math.round(changeDue * 100) / 100;
      }
      // Add currency to change array
      if (currencyAmount > 0) {
        change.push([currencyName, currencyAmount]);
      }
    }
    // Check if changeDue is greater than 0
    if (changeDue > 0) {
      return {status: 'INSUFFICIENT_FUNDS', change: []};
    }
    return {status: 'OPEN', change: change};
  }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);