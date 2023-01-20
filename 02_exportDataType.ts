// true if the input string is a palindromeexport 
export function isPalindromessss(str: string): boolean 
{
    return str === str.split('').reverse().join('');
}