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
    var postDetail = this.stack.shift();
    return postDetail;
  }
}

export default PostDetailNavigation;
