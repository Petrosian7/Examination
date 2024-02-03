class PostId {
  async fetch_data() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  }

  async postIdGroup() {
    const data = await this.fetch_data();

    const groupedData = data.reduce((result, entry) => {
      const postId = entry.userId;
      if (postId !== undefined) {
        if (!result[postId]) {
          result[postId] = [];
        }
        result[postId].push(entry);
      }
      return result;
    }, {});

    return groupedData;
  }
}

const service = new PostId();

service.postIdGroup().then((groupedData) => {
  console.log(groupedData);
});
