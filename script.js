function getIndexToIns(arr, num) {

  arr.sort((a, b) => a - b);

  const index = arr.findIndex(x => x >= num);

  if (index === -1) {
    
    return arr.length;
  }

  return index;
}

console.log(getIndexToIns([3, 10, 5], 3));