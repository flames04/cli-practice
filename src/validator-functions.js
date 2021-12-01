const isAmountInvalid = (amount) => {
    return amount === undefined || amount <0;
};

const isIntCurrencyInvalid = (initialCurrency) => {
    return initialCurrency === undefined;
};

module.exports = {
    isAmountInvalid,
    isIntCurrencyInvalid,
};