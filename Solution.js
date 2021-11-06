
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    let size = nums.length;
    let xor = 0;
    for (let i = 0; i < size; i++) {
        xor ^= nums[i];
    }

    //the righmost different bit of the two single numbers that are being searched.
    let rightMostDifferentBit = 0;
    while (rightMostDifferentBit < 31) {
        if ((xor & 1) === 1) {
            break;
        }
        xor >>= 1;
        rightMostDifferentBit++;
    }

    let firstSingleNumber = 0;
    let secondSingleNumber = 0;

    for (let i = 0; i < size; i++) {
        let current = nums[i] >> rightMostDifferentBit;
        if ((current & 1) === 1) {
            firstSingleNumber ^= nums[i];
        } else {
            secondSingleNumber ^= nums[i];
        }
    }

    return [firstSingleNumber, secondSingleNumber];
};
