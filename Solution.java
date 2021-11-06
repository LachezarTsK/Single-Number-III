
public class Solution {

    public int[] singleNumber(int[] nums) {

        int size = nums.length;
        int xor = 0;
        for (int i = 0; i < size; i++) {
            xor ^= nums[i];
        }

        //the righmost different bit of the two single numbers that are being searched.
        int rightMostDifferentBit = 0;
        while (rightMostDifferentBit < 31) {
            if ((xor & 1) == 1) {
                break;
            }
            xor >>= 1;
            rightMostDifferentBit++;
        }

        int firstSingleNumber = 0;
        int secondSingleNumber = 0;

        for (int i = 0; i < size; i++) {
            int current = nums[i] >> rightMostDifferentBit;
            if ((current & 1) == 1) {
                firstSingleNumber ^= nums[i];
            } else {
                secondSingleNumber ^= nums[i];
            }
        }

        return new int[]{firstSingleNumber, secondSingleNumber};
    }
}
