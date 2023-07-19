const isPalindrome = (string) =>{

    const ignoreCase = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    const reverseStr = ignoreCase.split('').reverse().join('')
    if(ignoreCase === reverseStr){
        return true
    }else{
        return false
    }
}

const theStr = isPalindrome("A man, a plan, a canal: Panama")
console.log(theStr);