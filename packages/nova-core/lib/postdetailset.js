import PostDetail from "./postdetail.js";

class PostDetailSet {
  constructor() {
    this.isPopPage = true;
    this.stack = [];
  }

  push(postId) {
    this.isPopPage = true;
    this.stack.push(postId);
    console.log("push:" + this.stack);

    return this.fetchPostPage(postId);
  }

  lastPage() {
    // When the current page is the pushed page,
    // Need to close it(pop) firstly.
    if (this.isPopPage) {
      this.stack.pop();
      this.isPopPage = false;
    }
    if (this.stack.length == 0) {
      return null;
    }
    console.log("pop:" + this.stack);
    var last = this.stack[this.stack.length - 1];
    return last;
  }

  fetchPostPage(postId) {
    return postId
  }
}

export default PostDetailSet;
