const isAmountValid = (amount) => {
    return amount === undefined || amount <0;
};

module.exports = {
    isAmountValid,
};