function countPass(a){
    let pass = a.length ;
    let countNumber = 0;
    let countLower = 0;
    let countUpper = 0;
    let countSpecial = 0;
    for (let i = 0; i < pass; i++) {
        if (a[i]>= 48 || a[i] <= 57) {
            countNumber ++;
        }else{
            if(a[i].match(/[A-Z]/)){
                countUpper ++;
            }else if(a[i].match(/[a-z]/)){
                countLower ++;
            }else {
                countSpecial ++;
            }
        }
    }                                                                                       
    let password = {length: pass,NumbericCharacter: countNumber,specialCharacters: countSpecial ,upperCaseCharacter: countUpper,lowerCaseCharacter: countLower}
    return password;
}

// console.log(countPass("abc123%^%A"));

let password ={
    minLength: 8,
    maxLenght: 16,
    specialCharacters:1,
    NumbericCharacter: 1,
    upperCaseCharacter:1,
    lowerCaseCharacter:1 
}
function checkPassword(password, passPolicy){
    let passwordCount = countPass(password);
    let error = {isValiPassword: true, message:""};
    if(passwordCount.length < passPolicy.minLength || passwordCount.length > passPolicy.maxLength){
        error.isValiPassword = false;
        error.message = "Password must be at least " + passPolicy.minLength + " to " + passPolicy.maxLenght + " characters";
    }
    if (passwordCount.lowerCaseCharacter < passPolicy.lowerCaseCharacter ){
        error.isValiPassword = false;
        error.message= error.message +", Password should be at least " + passPolicy.lowerCaseCharacter +" lowerCase Character";
    }
    if (passwordCount.upperCaseCharacter < passPolicy.upperCaseCharacter ){
        error.isValiPassword = false;
        error.message = error.message +", Password should be at least " + passPolicy.upperCaseCharacter +" upperCase Character";
    }
    if (passwordCount.specialCharacters < passPolicy.specialCharacters ){
        error.isValiPassword = false;
        error.message =error.message +", Password should be at least " + passPolicy.specialCharacters +" specialCase Character";
    }
    if (passwordCount.NumbericCharacter < passPolicy.NumbericCharacter ){
        error.isValiPassword = false;
        error.message =error.message +", Password should be at least " + passPolicy.NumbericCharacter +" numberic Character";
    }
    if(error.isValiPassword){
        result ={isValiPassword: true}
        return result;
    }
    return error;

}
console.log(checkPassword("",password));