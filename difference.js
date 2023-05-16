function difference(arr1, arr2) {
    return arr1.filter(element => !arr2.includes(element)).concat(arr2.filter(element => !arr1.includes(element)));
  }
  console.log(difference([1, 2, 3], [100, 2, 1, 10]));
