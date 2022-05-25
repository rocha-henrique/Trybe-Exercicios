// 1- Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.


function verificationPalindrome(param) {
    for(index in param) {
        if(param[index] != param[(param.length - 1) - index]){
            return false;
        }
    }
    return true;    
}
function verificationPalindrome(string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
        return true;
    } else {
        return false;
    }
}

console.log(verificationPalindrome('arara'))
console.log(verificationPalindrome('desenvolvimento'))