const isAmountInvalid = (amount) => {
    return amount === undefined || amount <0;
};

const isIntCurrencyInvalid = (initialCurrency) => {
    return initialCurrency === undefined;
};

const isTrgtCurrencyInvalid = (targetCurrency) => {
    return targetCurrency === undefined;
};

module.exports = {
    isAmountInvalid,
    isIntCurrencyInvalid,
    isTrgtCurrencyInvalid,
};