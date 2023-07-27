s = 'anagram'
t = 'nagaram'

var isAnagram = function(s, t) {
 const result = s.split("").sort().toString() == t.split("").sort().toString() ? true : false
 return result;
}

console.log(isAnagram(s, t));