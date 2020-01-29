# [Programming Functionally [Public]](https://www.notion.so/Programming-Functionally-Public-0e898d0c55fb4a06b5e950856dc1f6a4)

* [Minima](https://www.notion.so/Minima-07fc97f2096440f984dbf1a5de68d696)

```
Given an array return the first k elements of the sorted array. Try to make your solution as efficient as possible.
```

```javascript
//Test Cases
expect(minima(2, [5, 3, 4])).toEqual([3, 4]);
expect(minima(3, [5, 3, 4, 6, 10, 1])).toEqual([1, 3, 4]);
```
* [Aperture](https://www.notion.so/Aperture-aff15bc42f414e47bf3adf6685a31bcb)

```
Returns a new list, composed of n-tuples of consecutive elements. If n is greater than the length of the list, an empty list is returned.
```

```javascript
//Test Cases
expect(aperture(2, [1, 2, 3, 4, 5])).toEqual([[1, 2], [2, 3], [3, 4], [4, 5]]);
expect(aperture(3, [1, 2, 3, 4, 5])).toEqual([[1, 2, 3], [2, 3, 4], [3, 4, 5]]);
expect(aperture(7, [1, 2, 3, 4, 5])).toEqual([]);
```