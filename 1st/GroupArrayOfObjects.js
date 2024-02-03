function groupBy(arr, key) {
  return arr.reduce((res, item) => {
    const groupKey = item[key];
    res[groupKey] = res[groupKey] || [];
    res[groupKey].push(item);
    return res;
  }, {});
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    const groupedPosts = groupBy(posts, "userId");
    console.log(groupedPosts);
  })
  .catch((error) => console.error("Error fetching data:", error));
