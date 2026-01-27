export const groupAnagram = (strs) => {
  const groupMap = strs.reduce((acc, curr) => {
    const sorted = [...curr].sort().join("");
    if (acc.has(sorted)) {
      acc.get(sorted).push(curr);
    } else {
      acc.set(sorted, [curr]);
    }
    return acc;
  }, new Map());

  return Array.from(groupMap.values());
};
