function groupAnagrams() {
  const anagrams = {};
  for (let i = 0; i < strs.length; i++) {
    const sorted = strs[i].split("").sort().join("");
    if (!anagrams[sorted]) {
      anagrams[sorted] = [];
    }
    anagrams[sorted].push(strs[i]);
  }
  return Object.values(anagrams);
}
