const convenienceStore = (change, total) => {
    const coinValues = { quarters: 25, dimes: 10, nickels: 5, pennies: 1 };

    const totalAmount = total * 100;

    const totalChange = change[0] * coinValues.quarters
        + change[1] * coinValues.dimes
        + change[2] * coinValues.nickels
        + change[3] * coinValues.pennies;

    return totalChange >= totalAmount ? true : false;

};
console.log(convenienceStore([25, 20, 5, 0], 4.25));
