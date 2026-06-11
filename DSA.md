# dsa log

personal leetcode tracker — interview prep. started march 2026.

**last updated:** 2026-06-11  
**progress:** 164 / 176 · 12 still open  
**langs:** python first, redoing interesting ones in rust (sometimes both)

`✅` done · `🔄` stuck / partial · `⬜` not started

---

### 2026-03-08 · easy warmup (~1.5h)

got back into it. python only this session.


| LC  | problem                                                                                           | diff | intuition               | lang |     |
| --- | ------------------------------------------------------------------------------------------------- | ---- | ----------------------- | ---- | --- |
| 1   | [Two Sum](https://leetcode.com/problems/two-sum/)                                                 | E    | hash `target - x`       | py   | ✅   |
| 217 | [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)                           | E    | set len vs n            | py   | ✅   |
| 242 | [Valid Anagram](https://leetcode.com/problems/valid-anagram/)                                     | E    | freq count              | py   | ✅   |
| 121 | [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | E    | min so far + max profit | py   | ✅   |
| 20  | [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)                             | E    | stack                   | py   | ✅   |
| 704 | [Binary Search](https://leetcode.com/problems/binary-search/)                                     | E    | lo/hi/mid               | py   | ✅   |
| 206 | [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)                         | E    | prev/curr/next          | py   | ✅   |
| 21  | [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)                   | E    | dummy head              | py   | ✅   |


---

### 2026-03-11 · arrays + hashing


| LC  | problem                                                                                       | diff | intuition                  | lang |     |
| --- | --------------------------------------------------------------------------------------------- | ---- | -------------------------- | ---- | --- |
| 49  | [Group Anagrams](https://leetcode.com/problems/group-anagrams/)                               | M    | key = sorted or freq tuple | py   | ✅   |
| 347 | [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)             | M    | count + heap k             | py   | ✅   |
| 238 | [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)   | M    | prefix L then suffix R     | py   | ✅   |
| 128 | [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/)   | M    | only start from seq head   | py   | ✅   |
| 36  | [Valid Sudoku](https://leetcode.com/problems/valid-sudoku/)                                   | M    | 9 row/col/box sets         | py   | ✅   |
| 560 | [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)                 | M    | prefix sum + map counts    | py   | ✅   |
| 271 | [Encode and Decode Strings](https://leetcode.com/problems/encode-and-decode-strings/)         | M    | `len#str` encoding         | rs   | ✅   |
| 438 | [Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/) | M    | fixed window freq          | rs   | ✅   |
| 31  | [Next Permutation](https://leetcode.com/problems/next-permutation/)                           | M    | pivot, swap, reverse tail  | both | ✅   |
| 169 | [Majority Element](https://leetcode.com/problems/majority-element/)                           | E    | boyer-moore vote           | py   | ✅   |


note: started rust on 271 — borrow checker fought me for 20 min

---

### 2026-03-15 · two pointers


| LC  | problem                                                                               | diff | intuition              | lang |     |
| --- | ------------------------------------------------------------------------------------- | ---- | ---------------------- | ---- | --- |
| 125 | [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)                   | E    | skip junk, lo/hi       | py   | ✅   |
| 167 | [Two Sum II](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)         | M    | sorted two ptr         | rs   | ✅   |
| 15  | [3Sum](https://leetcode.com/problems/3sum/)                                           | M    | sort, fix i, pair      | both | ✅   |
| 11  | [Container With Most Water](https://leetcode.com/problems/container-with-most-water/) | M    | move shorter side      | py   | ✅   |
| 42  | [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/)             | H    | max L/R per idx        | rs   | ✅   |
| 18  | [4Sum](https://leetcode.com/problems/4sum/)                                           | M    | 3sum + extra loop      | py   | ✅   |
| 881 | [Boats to Save People](https://leetcode.com/problems/boats-to-save-people/)           | M    | sort, pair heavy/light | rs   | ✅   |
| 16  | [3Sum Closest](https://leetcode.com/problems/3sum-closest/)                           | M    | track closest sum      | py   | ✅   |


---

### 2026-03-18 · sliding window

min window still haunts me (see open list)


| LC  | problem                                                                                                                         | diff | intuition                    | lang |     |
| --- | ------------------------------------------------------------------------------------------------------------------------------- | ---- | ---------------------------- | ---- | --- |
| 3   | [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | M    | expand/shrink on dup         | rs   | ✅   |
| 424 | [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)               | M    | window ok if len-maxFreq ≤ k | both | ✅   |
| 567 | [Permutation in String](https://leetcode.com/problems/permutation-in-string/)                                                   | M    | fixed window match freq      | py   | ✅   |
| 239 | [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)                                                 | H    | mono deque indices           | rs   | ✅   |
| 904 | [Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/)                                                         | M    | at most 2 types              | py   | ✅   |
| 209 | [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/)                                           | M    | shrink when sum ≥ target     | py   | ✅   |
| 974 | [Subarray Sums Divisible by K](https://leetcode.com/problems/subarray-sums-divisible-by-k/)                                     | M    | prefix mod k                 | rs   | ✅   |


---

### 2026-03-22 · stack


| LC  | problem                                                                                             | diff | intuition             | lang |     |
| --- | --------------------------------------------------------------------------------------------------- | ---- | --------------------- | ---- | --- |
| 155 | [Min Stack](https://leetcode.com/problems/min-stack/)                                               | M    | aux stack for min     | both | ✅   |
| 150 | [Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/) | M    | stack eval            | py   | ✅   |
| 22  | [Generate Parentheses](https://leetcode.com/problems/generate-parentheses/)                         | M    | backtrack open/close  | rs   | ✅   |
| 739 | [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/)                             | M    | mono dec stack        | both | ✅   |
| 853 | [Car Fleet](https://leetcode.com/problems/car-fleet/)                                               | M    | sort pos, stack times | py   | ✅   |
| 84  | [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/)     | H    | mono stack pop width  | rs   | ✅   |
| 735 | [Asteroid Collision](https://leetcode.com/problems/asteroid-collision/)                             | M    | stack sim             | py   | ✅   |
| 496 | [Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/)                     | E    | mono stack map        | py   | ✅   |
| 503 | [Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/)                   | M    | circular mono stack   | rs   | ✅   |


---

### 2026-03-28 · binary search

median of two sorted arrays — deferred (hard)


| LC  | problem                                                                                                     | diff | intuition                 | lang |     |
| --- | ----------------------------------------------------------------------------------------------------------- | ---- | ------------------------- | ---- | --- |
| 74  | [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/)                                     | M    | treat flat or corner walk | py   | ✅   |
| 875 | [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/)                                   | M    | bs on speed               | rs   | ✅   |
| 153 | [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) | M    | compare mid vs hi         | both | ✅   |
| 33  | [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)             | M    | one half always sorted    | py   | ✅   |
| 981 | [Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/)                     | M    | map + bs timestamps       | rs   | ✅   |
| 162 | [Find Peak Element](https://leetcode.com/problems/find-peak-element/)                                       | M    | bs toward bigger neighbor | py   | ✅   |
| 240 | [Search a 2D Matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii/)                               | M    | start top-right           | both | ✅   |
| 215 | [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)           | M    | quickselect or heap k     | rs   | ✅   |


---

### 2026-04-02 · linked list

lru took forever. worth it for interviews.


| LC  | problem                                                                                                 | diff | intuition               | lang |     |
| --- | ------------------------------------------------------------------------------------------------------- | ---- | ----------------------- | ---- | --- |
| 143 | [Reorder List](https://leetcode.com/problems/reorder-list/)                                             | M    | mid, reverse 2nd, merge | both | ✅   |
| 19  | [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)     | M    | fast n ahead            | py   | ✅   |
| 138 | [Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/)           | M    | old→new map             | rs   | ✅   |
| 2   | [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)                                       | M    | digit carry             | py   | ✅   |
| 287 | [Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/)                   | M    | floyd cycle             | rs   | ✅   |
| 146 | [LRU Cache](https://leetcode.com/problems/lru-cache/)                                                   | M    | map + dll               | both | ✅   |
| 23  | [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)                             | H    | heap heads              | rs   | ✅   |
| 25  | [Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/)                     | H    | reverse chunks          | py   | ✅   |
| 141 | [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)                                   | E    | tortoise hare           | py   | ✅   |
| 61  | [Rotate List](https://leetcode.com/problems/rotate-list/)                                               | M    | len, tail→head, break   | rs   | ✅   |
| 83  | [Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/) | E    | skip same val           | py   | ✅   |


---

### 2026-04-10 · trees (weekend)

did a bunch of easy tree dfs — good confidence boost


| LC   | problem                                                                                                                           | diff | intuition              | lang |     |
| ---- | --------------------------------------------------------------------------------------------------------------------------------- | ---- | ---------------------- | ---- | --- |
| 226  | [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)                                                           | E    | swap children          | rs   | ✅   |
| 104  | [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)                                       | E    | 1+max(L,R)             | py   | ✅   |
| 543  | [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/)                                                 | E    | max path through node  | py   | ✅   |
| 110  | [Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/)                                                       | E    | height or -1           | rs   | ✅   |
| 100  | [Same Tree](https://leetcode.com/problems/same-tree/)                                                                             | E    | structural dfs         | py   | ✅   |
| 572  | [Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/)                                                 | E    | dfs + same check       | both | ✅   |
| 235  | [LCA of BST](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)                                       | M    | walk until split       | rs   | ✅   |
| 102  | [Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)                                         | M    | bfs queue              | py   | ✅   |
| 199  | [Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/)                                                     | M    | bfs last per level     | both | ✅   |
| 1448 | [Count Good Nodes](https://leetcode.com/problems/count-good-nodes-in-binary-tree/)                                                | M    | dfs max on path        | rs   | ✅   |
| 98   | [Validate BST](https://leetcode.com/problems/validate-binary-search-tree/)                                                        | M    | min/max bounds         | py   | ✅   |
| 230  | [Kth Smallest in BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)                                               | M    | inorder kth            | both | ✅   |
| 105  | [Construct from Preorder and Inorder](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)   | M    | root pre[0], split in  | rs   | ✅   |
| 124  | [Max Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)                                                       | H    | postorder gain         | py   | ✅   |
| 297  | [Serialize and Deserialize BT](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/)                              | H    | bfs/dfs null markers   | both | ✅   |
| 236  | [LCA of BT](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)                                               | M    | return p/q or lift     | rs   | ✅   |
| 112  | [Path Sum](https://leetcode.com/problems/path-sum/)                                                                               | E    | dfs subtract to leaf 0 | py   | ✅   |
| 114  | [Flatten BT to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/)                                    | M    | reverse preorder       | rs   | ✅   |
| 106  | [Construct from Inorder and Postorder](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/) | M    | root post[-1]          | py   | ✅   |


---

### 2026-04-18 · trie + heap


| LC  | problem                                                                                           | diff | intuition               | lang |     |
| --- | ------------------------------------------------------------------------------------------------- | ---- | ----------------------- | ---- | --- |
| 208 | [Implement Trie](https://leetcode.com/problems/implement-trie-prefix-tree/)                       | M    | char nodes + end flag   | py   | ✅   |
| 211 | [Add and Search Words](https://leetcode.com/problems/design-add-and-search-words-data-structure/) | M    | trie + dfs `.`          | both | ✅   |
| 621 | [Task Scheduler](https://leetcode.com/problems/task-scheduler/)                                   | M    | (maxF-1)*(n+1)+countMax | py   | ✅   |
| 355 | [Design Twitter](https://leetcode.com/problems/design-twitter/)                                   | M    | feeds + heap merge      | rs   | ✅   |
| 703 | [Kth Largest in Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/)           | E    | min heap size k         | py   | ✅   |
| 229 | [Majority Element II](https://leetcode.com/problems/majority-element-ii/)                         | M    | boyer-moore x2 verify   | rs   | ✅   |
| 274 | [H-Index](https://leetcode.com/problems/h-index/)                                                 | M    | bucket sort citations   | py   | ✅   |


---

### 2026-04-25 · backtracking

n-queens not yet — backtracking depth scary


| LC  | problem                                                                                              | diff | intuition         | lang |     |
| --- | ---------------------------------------------------------------------------------------------------- | ---- | ----------------- | ---- | --- |
| 78  | [Subsets](https://leetcode.com/problems/subsets/)                                                    | M    | include/exclude   | rs   | ✅   |
| 39  | [Combination Sum](https://leetcode.com/problems/combination-sum/)                                    | M    | reuse idx, prune  | both | ✅   |
| 46  | [Permutations](https://leetcode.com/problems/permutations/)                                          | M    | used[] backtrack  | py   | ✅   |
| 90  | [Subsets II](https://leetcode.com/problems/subsets-ii/)                                              | M    | sort skip dupes   | rs   | ✅   |
| 40  | [Combination Sum II](https://leetcode.com/problems/combination-sum-ii/)                              | M    | sort no reuse dup | both | ✅   |
| 79  | [Word Search](https://leetcode.com/problems/word-search/)                                            | M    | dfs mark undo     | py   | ✅   |
| 131 | [Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/)                    | M    | cut + recurse     | rs   | ✅   |
| 17  | [Letter Combinations of Phone](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) | M    | digit→letters     | py   | ✅   |


---

### 2026-05-03 · graphs


| LC  | problem                                                                                                      | diff | intuition               | lang |     |
| --- | ------------------------------------------------------------------------------------------------------------ | ---- | ----------------------- | ---- | --- |
| 200 | [Number of Islands](https://leetcode.com/problems/number-of-islands/)                                        | M    | dfs flood fill          | rs   | ✅   |
| 133 | [Clone Graph](https://leetcode.com/problems/clone-graph/)                                                    | M    | old→clone map           | both | ✅   |
| 417 | [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/)                    | M    | reverse dfs from oceans | py   | ✅   |
| 207 | [Course Schedule](https://leetcode.com/problems/course-schedule/)                                            | M    | topo / cycle            | rs   | ✅   |
| 210 | [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)                                      | M    | kahn bfs                | both | ✅   |
| 684 | [Redundant Connection](https://leetcode.com/problems/redundant-connection/)                                  | M    | union find cycle edge   | py   | ✅   |
| 127 | [Word Ladder](https://leetcode.com/problems/word-ladder/)                                                    | H    | bfs change 1 char       | rs   | ✅   |
| 994 | [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/)                                            | M    | multi-source bfs        | py   | ✅   |
| 286 | [Walls and Gates](https://leetcode.com/problems/walls-and-gates/)                                            | M    | bfs from gates          | both | ✅   |
| 721 | [Accounts Merge](https://leetcode.com/problems/accounts-merge/)                                              | M    | uf on emails            | rs   | ✅   |
| 323 | [Connected Components](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/) | M    | uf or dfs count         | py   | ✅   |
| 261 | [Graph Valid Tree](https://leetcode.com/problems/graph-valid-tree/)                                          | M    | n-1 edges connected     | both | ✅   |
| 130 | [Surrounded Regions](https://leetcode.com/problems/surrounded-regions/)                                      | M    | dfs border O            | py   | ✅   |
| 695 | [Max Area of Island](https://leetcode.com/problems/max-area-of-island/)                                      | M    | dfs count max           | rs   | ✅   |
| 797 | [All Paths Source to Target](https://leetcode.com/problems/all-paths-from-source-to-target/)                 | M    | dag backtrack path      | py   | ✅   |


---

### 2026-05-10 · advanced graphs + misc graph


| LC   | problem                                                                                           | diff | intuition        | lang |     |
| ---- | ------------------------------------------------------------------------------------------------- | ---- | ---------------- | ---- | --- |
| 332  | [Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary/)                     | H    | hierholzer euler | both | ✅   |
| 1584 | [Min Cost Connect Points](https://leetcode.com/problems/min-cost-to-connect-all-points/)          | M    | mst prim/kruskal | py   | ✅   |
| 743  | [Network Delay Time](https://leetcode.com/problems/network-delay-time/)                           | M    | dijkstra         | rs   | ✅   |
| 778  | [Swim in Rising Water](https://leetcode.com/problems/swim-in-rising-water/)                       | H    | bs time + bfs    | both | ✅   |
| 787  | [Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/) | M    | bellman-ford k+1 | py   | ✅   |


---

### 2026-05-17 · 1d dp

house robber variants click now


| LC  | problem                                                                                       | diff | intuition              | lang |     |
| --- | --------------------------------------------------------------------------------------------- | ---- | ---------------------- | ---- | --- |
| 70  | [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)                             | E    | fib                    | rs   | ✅   |
| 746 | [Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/)           | E    | dp min prev two        | both | ✅   |
| 198 | [House Robber](https://leetcode.com/problems/house-robber/)                                   | M    | rob vs skip roll       | py   | ✅   |
| 213 | [House Robber II](https://leetcode.com/problems/house-robber-ii/)                             | M    | two passes circular    | rs   | ✅   |
| 5   | [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/) | M    | expand center          | both | ✅   |
| 647 | [Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/)               | M    | expand all centers     | py   | ✅   |
| 91  | [Decode Ways](https://leetcode.com/problems/decode-ways/)                                     | M    | dp[i]+=valid 1/2 digit | rs   | ✅   |
| 322 | [Coin Change](https://leetcode.com/problems/coin-change/)                                     | M    | unbounded knapsack     | both | ✅   |
| 152 | [Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/)           | M    | track max AND min      | py   | ✅   |
| 139 | [Word Break](https://leetcode.com/problems/word-break/)                                       | M    | dp prefix breakable    | rs   | ✅   |
| 300 | [LIS](https://leetcode.com/problems/longest-increasing-subsequence/)                          | M    | patience / bs tails    | both | ✅   |
| 416 | [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/)       | M    | 0/1 knapsack sum/2     | py   | ✅   |


---

### 2026-05-24 · 2d dp + greedy

regex matching — nope, added to queue


| LC   | problem                                                                                              | diff | intuition          | lang |     |
| ---- | ---------------------------------------------------------------------------------------------------- | ---- | ------------------ | ---- | --- |
| 62   | [Unique Paths](https://leetcode.com/problems/unique-paths/)                                          | M    | grid dp            | rs   | ✅   |
| 1143 | [LCS](https://leetcode.com/problems/longest-common-subsequence/)                                     | M    | match +1 else max  | both | ✅   |
| 309  | [Stock with Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)  | M    | hold/sold/rest     | py   | ✅   |
| 518  | [Coin Change II](https://leetcode.com/problems/coin-change-ii/)                                      | M    | count ways         | rs   | ✅   |
| 494  | [Target Sum](https://leetcode.com/problems/target-sum/)                                              | M    | subset sum +/-     | both | ✅   |
| 97   | [Interleaving String](https://leetcode.com/problems/interleaving-string/)                            | M    | dp 2d match s3     | py   | ✅   |
| 329  | [Longest Increasing Path Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/) | H    | dfs memo           | rs   | ✅   |
| 115  | [Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/)                        | H    | dp count           | both | ✅   |
| 72   | [Edit Distance](https://leetcode.com/problems/edit-distance/)                                        | M    | insert del replace | py   | ✅   |
| 53   | [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)                                  | M    | kadane             | rs   | ✅   |
| 55   | [Jump Game](https://leetcode.com/problems/jump-game/)                                                | M    | farthest reach     | py   | ✅   |
| 45   | [Jump Game II](https://leetcode.com/problems/jump-game-ii/)                                          | M    | greedy layers      | both | ✅   |
| 134  | [Gas Station](https://leetcode.com/problems/gas-station/)                                            | M    | total tank check   | rs   | ✅   |
| 846  | [Hand of Straights](https://leetcode.com/problems/hand-of-straights/)                                | M    | sort greed groups  | py   | ✅   |
| 763  | [Partition Labels](https://leetcode.com/problems/partition-labels/)                                  | M    | last index cuts    | both | ✅   |
| 678  | [Valid Parenthesis String](https://leetcode.com/problems/valid-parenthesis-string/)                  | M    | min/max open range | py   | ✅   |


---

### 2026-05-31 · intervals + math + bits


| LC  | problem                                                                               | diff | intuition           | lang |     |
| --- | ------------------------------------------------------------------------------------- | ---- | ------------------- | ---- | --- |
| 57  | [Insert Interval](https://leetcode.com/problems/insert-interval/)                     | M    | merge after insert  | rs   | ✅   |
| 56  | [Merge Intervals](https://leetcode.com/problems/merge-intervals/)                     | M    | sort start merge    | both | ✅   |
| 435 | [Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/) | M    | greedy end time     | py   | ✅   |
| 252 | [Meeting Rooms](https://leetcode.com/problems/meeting-rooms/)                         | E    | sort overlap        | rs   | ✅   |
| 253 | [Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/)                   | M    | min heap ends       | both | ✅   |
| 48  | [Rotate Image](https://leetcode.com/problems/rotate-image/)                           | M    | transpose reverse   | rs   | ✅   |
| 54  | [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/)                         | M    | shrink bounds       | both | ✅   |
| 73  | [Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/)                 | M    | first row/col flag  | py   | ✅   |
| 202 | [Happy Number](https://leetcode.com/problems/happy-number/)                           | E    | floyd cycle digits  | rs   | ✅   |
| 66  | [Plus One](https://leetcode.com/problems/plus-one/)                                   | E    | carry right         | py   | ✅   |
| 50  | [Pow(x, n)](https://leetcode.com/problems/powx-n/)                                    | M    | binary exp          | both | ✅   |
| 43  | [Multiply Strings](https://leetcode.com/problems/multiply-strings/)                   | M    | grade school digits | rs   | ✅   |
| 136 | [Single Number](https://leetcode.com/problems/single-number/)                         | E    | xor all             | py   | ✅   |
| 191 | [Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/)                   | E    | n &= n-1            | both | ✅   |
| 338 | [Counting Bits](https://leetcode.com/problems/counting-bits/)                         | E    | dp i>>1 + i&1       | rs   | ✅   |
| 190 | [Reverse Bits](https://leetcode.com/problems/reverse-bits/)                           | E    | shift result        | py   | ✅   |
| 268 | [Missing Number](https://leetcode.com/problems/missing-number/)                       | E    | xor idx val         | both | ✅   |
| 371 | [Sum of Two Integers](https://leetcode.com/problems/sum-of-two-integers/)             | M    | xor + carry loop    | rs   | ✅   |
| 7   | [Reverse Integer](https://leetcode.com/problems/reverse-integer/)                     | M    | pop push overflow   | py   | ✅   |


---

### 2026-06-06 · design


| LC  | problem                                                                                   | diff | intuition          | lang |     |
| --- | ----------------------------------------------------------------------------------------- | ---- | ------------------ | ---- | --- |
| 380 | [Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/) | M    | vec + map swap pop | both | ✅   |
| 622 | [Design Circular Queue](https://leetcode.com/problems/design-circular-queue/)             | M    | ring buffer mod    | py   | ✅   |


---

### 2026-06-10 · added more from blind 75 gaps

dumped a batch i hadn't done. several hard ones still sitting.


| LC   | problem                                                                                                                             | diff | intuition                  | lang |     |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------- | ---- | -------------------------- | ---- | --- |
| 76   | [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)                                                 | H    | expand/shrink valid window | py   | 🔄  |
| 4    | [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/)                                           | H    | partition smaller arr      | —    | ⬜   |
| 212  | [Word Search II](https://leetcode.com/problems/word-search-ii/)                                                                     | H    | trie + grid dfs            | —    | ⬜   |
| 295  | [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/)                                         | H    | two heaps                  | —    | ⬜   |
| 51   | [N-Queens](https://leetcode.com/problems/n-queens/)                                                                                 | H    | row backtrack cols/diag    | —    | ⬜   |
| 312  | [Burst Balloons](https://leetcode.com/problems/burst-balloons/)                                                                     | H    | interval dp last burst     | —    | ⬜   |
| 10   | [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/)                                           | H    | 2d dp . and *              | —    | ⬜   |
| 269  | [Alien Dictionary](https://leetcode.com/problems/alien-dictionary/)                                                                 | H    | graph topo from words      | —    | ⬜   |
| 460  | [LFU Cache](https://leetcode.com/problems/lfu-cache/)                                                                               | H    | freq buckets + dll         | —    | ⬜   |
| 1851 | [Minimum Interval to Include Each Query](https://leetcode.com/problems/minimum-interval-to-include-each-query/)                     | H    | sort + offline heap        | —    | ⬜   |
| 378  | [Kth Smallest in Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/)                             | M    | bs on value count          | —    | ⬜   |
| 889  | [Construct from Preorder and Postorder](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/) | M    | root pre[0], split post    | —    | ⬜   |


min window: py works, rust version TLE'd — need to redo

---

## open / retry (12)


| LC   | problem                      | diff | why still open                           |
| ---- | ---------------------------- | ---- | ---------------------------------------- |
| 76   | Minimum Window Substring     | H    | 🔄 py ok, rust TLE                       |
| 4    | Median of Two Sorted Arrays  | H    | looked at solution once, can't reproduce |
| 212  | Word Search II               | H    | trie on grid — haven't started           |
| 295  | Find Median from Data Stream | H    | two heap impl fuzzy                      |
| 51   | N-Queens                     | H    | backtracking practice                    |
| 312  | Burst Balloons               | H    | interval dp hurts                        |
| 10   | Regular Expression Matching  | H    | dp edge cases                            |
| 269  | Alien Dictionary             | H    | topo from word order                     |
| 460  | LFU Cache                    | H    | design — worse than lru                  |
| 1851 | Minimum Interval Query       | H    | offline queries + heap                   |
| 378  | Kth Smallest Sorted Matrix   | M    | bs on answer space                       |
| 889  | Construct Preorder Postorder | M    | added jun 10, not attempted              |


**next up:** 378 then 889 (mediums) before tackling 4 / 460

---

## patterns (scratch — added apr)

hash map · two ptr · sliding window · mono stack · bfs/dfs · uf · dp · bs on answer

re-read intuition col before mocks — not memorizing code