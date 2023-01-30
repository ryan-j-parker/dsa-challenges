function pluralize(words) {
  let newArray = [];

  for (let i = 0; i < words.length; i++) {
    let index = newArray.indexOf(words[i]);
    if (newArray.includes(`${words[i]}s`)) {
      continue;
    }
  
    if (!newArray.includes(words[i])) {
      newArray.push(words[i]);
    }
  
    if (index > -1) {
      newArray.splice(index, 1);
      newArray.push(`${words[i]}s`);
    }
  }
  
  return newArray;
}

console.log(
  pluralize(['cat', 'cat', 'ham', 'banana', 'melon', 'cat', 'cat', 'cat', 'melon'])
);
console.log(
  pluralize(['giraffe', 'hippo', 'chips', 'giraffe', 'ham', 'banana', 'melon', 'giraffe', 'cat', 'cat', 'melon'])
);
