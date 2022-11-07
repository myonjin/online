function palindrome(str) {
    if (str === str.split('').reverse().join('')){
      return true
    } else {
      return false
    }
  }
  
  // 출력
  // palindrome('level') => true
  // palindrome('hi') => false
console.log(palindrome('hi'))