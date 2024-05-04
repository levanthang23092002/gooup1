//            ------ Home Work 4---------
// formatMoney string "100000000000" ==> ###,###,###,### VND
function formatMoney(money){
    const formatmoney = new Intl.NumberFormat( 'ja').format(money) + ' VND';
    return formatmoney;
}



// console.log(formatMoney("123456789012"));

// format 1289.88 --> 1289 và làm tròn lên hàng nghìn
function formatMoneys(money, numberToRound){
    let number =  Math.round((money / 10**numberToRound )) * 10**numberToRound ;
    const formatmoney = new Intl.NumberFormat( 'ja').format(number) + ' VND';
    return formatmoney;
}
console.log(formatMoneys("1234567456.989", 3));

