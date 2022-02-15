
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {

    let bitmask = 0;
    for (let n of nums) {
        bitmask ^= n;
    }

    let firstDifferentRightmostBit_for_theSearchedSingles = bitmask & (-bitmask);
    let firstSingle = 0;

    for (let n of nums) {
        if ((firstDifferentRightmostBit_for_theSearchedSingles & n) !== 0) {
            firstSingle ^= n;
        }
    }

    return [firstSingle, (firstSingle ^ bitmask)];
};
