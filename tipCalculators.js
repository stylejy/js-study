function totalMoney(totalBill,serviceQual,numPeople){
    return totalBill*(1+serviceQual)/numPeople;
};
console.log(totalMoney(390,0.3,5).toFixed(2)); //Total money that each person needs to pay