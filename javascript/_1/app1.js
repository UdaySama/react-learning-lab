function nums(...item) {
  let num = [];
  for (let i = 0; i < item.length; i++) {
    if (typeof(item[i]) === 'number') {
      num.push(item[i]);
    }
  }
  return num;
}

console.log(nums(1, "a", 2, null, 3, undefined));
