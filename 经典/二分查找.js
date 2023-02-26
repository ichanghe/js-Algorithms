function binarySearch(arr, target) {
  const length = arr.length;
  if (length === 0) return -1;
  let startIndex = 0;
  let endIndex = length - 1;
  while (startIndex <= endIndex) {
    const midIndex = Math.floor((startIndex + endIndex) / 2);
    const midValue = arr[midIndex];
    if (target < midValue) {
      endIndex = midIndex - 1;
    } else if (target > midValue) {
      startIndex = midIndex + 1;
    } else {
      return midIndex;
    }
  }
  return -1;
}
let arr = [1, 3, 4, 5, 6, 7, 89, 100];
console.log(binarySearch2(arr, 4));

function binarySearch2(arr, target, startIndex, endIndex) {
  let length = arr.length;
  if (length == 0) return -1;
  if (startIndex == null) startIndex = 0;
  if (endIndex == null) endIndex = length - 1;
  if (startIndex > endIndex) return -1;
  const midIndex = Math.floor((startIndex + endIndex) / 2);
  const midValue = arr[midIndex];
  if (target < midValue) {
    return binarySearch2(arr, target, startIndex, midIndex - 1);
  } else if (target > midValue) {
    return binarySearch2(arr, target, midIndex + 1, endIndex);
  } else {
    return midIndex;
  }
}
