# [Break 1 Questions](https://www.notion.so/Break-1-Questions-Public-5950ecba1320468d8353e1690f4fc316)

* [Isomorphic](https://www.notion.so/Isomorphic-17ad260ad1484eaca9eb4d435b2b68d5)

```
Given two strings, determine if they are isomorphic. Two strings are isomorphic if they are the same length and you can replace all occurrences of each letter in the first string with the same letter to create the second string.

For example,"egg" and "add" are isomorphic, replace all occurrence of e with a and g with d. "paper" and "title" are also isomorphic. These strings are not isomorphic: "foo" and "bar", "it" and "odd".
```
```javascript
//Test Cases

expect(isomorphic(['egg', 'add'])).toBe(true);
expect(isomorphic(['foo', 'bar'])).toBe(false);
expect(isomorphic(['asdfghjkl', 'qwertyuio'])).toBe(true);
expect(isomorphic(['asdfgsjkl', 'qwertyuio'])).toBe(false);
expect(isomorphic(['better', 'fetter'])).toBe(true);
```

* [Balanced Braces](https://www.notion.so/Balanced-Braces-f15abccc2d6d40fc8aeffe176525bbd2)

```
Determine if a string contains matching Braces, Brackets and Parentheses. Additionally all Braces, Brackets, and Parentheses must be nested correctly for JavaScript code.

All other characters in the string can be ignored.

input: String

output: true if all opening Braces/Brackets/Parentheses have matching closing Braces/Brackets/Parentheses that are correctly nested else false.
```

```javascript
// Examples
"{}" => true
"{()[{}[]]}" => true
"{(})" => false
"{()[}[]]}" => false
"if(a==b) x = y;" => true
"if(a==b x = y;" => false
"if(x<10}(b++;}else{b+=10;}" => false

// Test cases
expect(balancedBraces('for(i=0;i<x[i];i++){if(x[i]<10){b++;}else{b+=10;}}')).toBe(true);
expect(balancedBraces('for(i=0;i<x[i];i++){if(x[i]<10){b++;}else{b+=10;}')).toBe(false);
```
* [Update Inventory](https://www.notion.so/Update-Inventory-e52343010c5640bab5f717ea06b5eb1a)

```
Compare and update the inventory stored in a 2D array against a second 2D array of a
fresh delivery. Update the current existing inventory item quantities (in arr1).

If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
```
```javascript
// Test cases
expect(updateInventory([
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone'],
], [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste'],
]).length).toBe(6);

expect(updateInventory([
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone'],
], [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste'],
]))
.toEqual([
  [88, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [3, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [5, 'Microphone'],
  [7, 'Toothpaste'],
]);
```
* [Pangram](https://www.notion.so/Pangram-302c70c995dd4c9a811eaaf308521ac3)

```
Determine if a sentence is a pangram.

A pangram is a sentence using every letter of the alphabet at least once. The best known English pangram is:

```
> The quick brown fox jumps over the lazy dog.
```

The alphabet used consists of ASCII letters `a` to `z`, inclusive, and is case insensitive. Input will not contain non-ASCII symbols.
```
```javascript
//Test Cases
expect(isPangram('the quick brown fox jumps over the lazy dog')).toBe(true);
expect(isPangram('a quick of the enemy will jeopardize gunboats')).toBe(false);
```