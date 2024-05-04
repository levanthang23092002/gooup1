// Bài 1 : Kiểm Tra số nguyên dương chia hết cho hai
let a =  8;
let b =  5;
let c = 10;

function checkNumbe(number){
    if(number % 2 == 0) 
        return true;
    else
        return false;
}
console.log(a +" is a number that is divisible by 2 "+checkNumbe(a));
console.log(b +" is a number that is divisible by 2 "+checkNumbe(b));
console.log(c +" is a number that is divisible by 2 "+checkNumbe(c));