
#include <vector>
using namespace std;

class Solution {
    
public:

    vector<int> singleNumber(vector<int>& nums) {
        
        int bitmask = 0;
        for (const auto& n : nums) {
            bitmask ^= n;
        }

        int firstDifferentRightmostBit_for_theSearchedSingles = bitmask & (-static_cast<long> (bitmask));
        int firstSingle = 0;

        for (const auto& n : nums) {
            if ((firstDifferentRightmostBit_for_theSearchedSingles & n) != 0) {
                firstSingle ^= n;
            }
        }

        return vector<int>{firstSingle, (firstSingle^ bitmask)};
    }
};
