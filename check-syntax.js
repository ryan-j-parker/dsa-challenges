function checkSyntax(code) {
    let stack = [];
    let open = ['(', '[', '{'];
    let closed = [')', ']', '}'];
    let pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    for (let i = 0; i < code.length; i++) {
        if (open.includes(code[i])) {
            stack.push(code[i]);
        } else if (closed.includes(code[i])) {
            if (pairs[stack[stack.length - 1]] === code[i]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(checkSyntax('if(true) { return; }'));
console.log(checkSyntax('if(true( { return; }'));
console.log(checkSyntax('if(true) { return;	'));
console.log(checkSyntax('(if(true) { return; }	'));
console.log(checkSyntax('( true && { name: "foo" } )	'));
console.log(checkSyntax('( true && { name: "foo" ) )	'));
console.log(checkSyntax('( true && ( name: "foo" } )	'));
console.log(checkSyntax('((2 + 3) * (4 + 11 * (2 - 1)))	'));
console.log(checkSyntax('((2 + 3) * (4 + 11 * 2 - 1)))	'));
console.log(checkSyntax('((2 + 3) * (4 + 11 * (2 - 1))	'));
