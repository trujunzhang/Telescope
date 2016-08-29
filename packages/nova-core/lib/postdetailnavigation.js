import PostDetail from "./postdetail.js";

class PostDetailNavigation {
  constructor() {
    this.stack = [];
  }

  push(postDetail) {
    this.stack.push(postDetail);
  }

  pop() {
    var postDetail = this.stack.pop();
    return postDetail;
  }

  current() {
    if (this.stack.length == 0)
      return null;

    var postDetail = this.stack.shift();
    return postDetail;
  }
}

export default PostDetailNavigation;
