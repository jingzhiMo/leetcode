/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let l = '('
    let r = ')'
    let result = []

    let helper = (left, right, originBase) => {
        console.log('originBase', originBase)
        let base = originBase.slice(0)

        if (left === 0 && right === 0) {
            result.push(base)
            return
        }
        if (left > 0) {
            left--
            base.push(l)
            helper(left, right, base)
        } else {
            while (right > 0) {
                right--
                base.push(r)
            }

            helper(left, right, base)
            return
        }

        if (left === 0) return

        if (right > 0) {
            right--
            base.push(r)
            helper(left, right, base)
        }
    }
    helper(n, n, [])

    console.log(result)
};


[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

0: (6) ["(", "(", "(", ")", ")", ")"]
1: (6) ["(", "(", ")", "(", ")", ")"]
2: (6) ["(", ")", "(", "(", ")", ")"]
3: (6) ["(", ")", "(", ")", "(", ")"]
