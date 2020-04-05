// tag: 1. array
// link: https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0
    let minPrice = Infinity

    for (let i = 0; i < prices.length; i++) {
        if (minPrice > prices[i]) {
            minPrice = prices[i]
        }

        if (prices[i] - minPrice > profit) {
            profit = prices[i] - minPrice
        }
    }  

    return profit
};
