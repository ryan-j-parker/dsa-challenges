// function pluralize(words) {

//     let newArr = [];
//     let repeats = {};

//     for (let i = 0; i < words.length; i++) {
//         if (repeats[words[i]]) {
//             repeats[words[i]] += 1;
//         } else {
//             repeats[words[i]] = 1;
//         }
//         for (let word in repeats) {
//             if (repeats[word] >= 2) {
//                 word.replace('');
//                 newArr.push(`${word}s`);
//             }
//         }
//         newArr.push(i);
//     }
//     return newArr;
//     // const newArr = words.map((word) => word);
//     // const dupes = newArr.filter((word, index) => newArr.indexOf(item) !== index);
//     // console.log(newArr);
//     // console.log(dupes);

//     // return '';

// }
function pluralize(...words) {
    let repeats = {};
    let newArr = [];
    for (let i = 0; i < words.length; i++) {
        if (repeats[words[i]]) {
            repeats[words[i]] += 1;
        } else {
            repeats[words[i]] = 1;
        }
        for (let word in repeats) {
            if (repeats[word] >= 2) {
                newArr.push(`${word}s`);
                word = word.replace(`${word}`, '');
            }
        }
        newArr.push(words[i]);
    
        newArr = newArr.filter((item, index) => newArr.indexOf(item) === index);

        
    }


    return newArr;
}

console.log(pluralize('cat', 'cat', 'ham', 'banana', 'cat', 'cat', 'cat', 'melon'));
