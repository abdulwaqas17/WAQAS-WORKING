// -------- offer task --------

// ----------- SOLVE WITH FOR IN LOOP -------------
let prices = [250, 645, 300, 900, 50, 10];

// let sum = 0;
// for (let price in prices){ // S A M E
    // console.log(`${price} = ${prices[price]}*0.10`);
    // console.log(price, '=' ,prices[price]*0.10);
    // let offer = (price, '=' ,prices[price]*0.90);
    // let offer = prices[price] / 10; // S A M E
    // console.log(offer);
    // prices[price] = prices[price] - offer;// S A M E // direct assign, change in original store value DIRECTLY
    // finalPrice = prices[price] - offer; //indirect assign
    // console.log(finalPrice);
    // console.log(`value after offer ${prices[price]}`) // S A M E
    
    // console.log(price,offer);

    // sum = sum + offer;
    
    // console.log('Your total price after applying offer is =',sum);  // code run top to bottom LITTLE BIT CONFUSING
//}

// console.log('Your total price after applying offer is =',sum);

// console.log(prices); // S A M E




// ----------- SOLVE WITH FOR OF LOOP -------------
// let i = 0;
// for (let price of prices ){
//     console.log(`price at index ${i} = ${price}`)


//         // 1st way
//     let offer = prices[i] / 10;
//     prices[i] = prices[i] - offer;
//     console.log(`value after offer = ${prices[i]}`) // CHANGE THE VALUES OF ARRAY


//           // 2nd Way
//     // let offer = price / 10;   
//     // price = price - offer; 
//     // console.log(`value after offer = ${price}`) NOT CHANGE THE VALUES OF ARRAY

//     // console.log(prices[i]);
//     // console.log(price);
//     i++; // MUST BE WRITTEN IN END, BECAUSE KUCH WAJAH HAY!
// }

// console.log(prices);





// ----------- SOLVE WITH FOR LOOP ------------- SIMPILER
for (let i = 0; i < prices.length; i++) {
    
    console.log(prices[i]);
    let offer = prices[i] / 10;
    prices[i] = prices[i] - offer;
    console.log(`value after offer ${prices[i]}`);
}

console.log(prices);
