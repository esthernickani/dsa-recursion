/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1))
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length == 1) {
    return words[0].length
  }

  return Math.max(
    words[0].length, longest(words.slice(1))
  )
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, newStr = "") {
  if (str === "") {
    return newStr
  }
  newStr += str[idx]

  return everyOther(str.slice(2), idx, newStr)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, revStr = "") {
  const revString = (str, revStr) => {
    if (str.length === 0) {
      return revStr
    }

    revStr += str[str.length - 1]
    console.log(revStr)
  
    return revString(str.slice(0, -1), revStr)
  }

  return revString(str, revStr) === str

}

isPalindrome('porcupine')

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length ) {
    return - 1
  }
  if (arr[idx] === val) {
    return idx
  }

  return findIndex(arr, val, idx + 1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, revStr = "") {
  if (str.length === 0) {
    return revStr
  }

  revStr += str[str.length - 1]
  console.log(revStr)

  return revString(str.slice(0, -1), revStr)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = []
  for (let key in obj) {
    if (typeof obj[key] === 'string') stringArr.push(obj[key])
    if (typeof obj[key] === 'object') stringArr.push(...gatherStrings(obj[key]))
  }

  return stringArr
}
module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings
};
