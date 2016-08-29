import PostDetail from "./postdetail.js";

class PostDetailSet {
  constructor() {
    this.stack = [];
  }

  push(postId) {
    this.isPopPage = true;
    this.stack.push(postId);

    return this.fetchPostPage(postId);
  }

  lastPage() {
    if (this.stack.length == 0) {
      return null;
    }
    this.stack.pop();
    console.log("pop:" + this.stack);
    var last = this.stack[this.stack.length - 1];
    return last;
  }

  fetchPostPage(postId) {
    return postId
  }
}

export default PostDetailSet;
