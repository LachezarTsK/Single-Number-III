
public class Solution {

    public int[] singleNumber(int[] nums) {

        int bitmask = 0;
        for (int n : nums) {
            bitmask ^= n;
        }

        int firstDifferentRightmostBit_for_theSearchedSingles = bitmask & (-bitmask);
        int firstSingle = 0;

        for (int n : nums) {
            if ((firstDifferentRightmostBit_for_theSearchedSingles & n) != 0) {
                firstSingle ^= n;
            }
        }

        return new int[]{firstSingle, (firstSingle ^ bitmask)};
    }
}
