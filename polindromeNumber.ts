function isPalindrome(x: number): boolean {
const revert = x.toString().split('').reverse().join('');
const result = x.toString() == revert ? true : false;
return result;
};