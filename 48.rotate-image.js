/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let left = 0
    let right = matrix.length - 1
    let top = 0
    let bottom = right

    while (left < 1) {
        let tmp = []
        let target
        // 下
        for (let i = left; i <= right; i++) {
            target = matrix[i][right]

            matrix[i][right] = matrix[top][i]
            tmp.push(target)
        }

        // 左
        for (let i = top; i <= bottom; i++) {
            tmp.unshift(matrix[i][bottom])
            target = tmp.pop()

            matrix[right][i] = target
        }

        // 上
        for (let i = left; i <= right; i++) {
            tmp.unshift(matrix[i][left])
            target = tmp.pop()
            matrix[i][left] = target
        }

        // 右
        for (let i = top; i <= bottom; i++) {
            tmp.unshift(matrix[top][i])
            target = tmp.pop()
            matrix[top][i] = target
        }
        left++
        right--
        top++
        bottom--
    }
    console.log(matrix)
};
