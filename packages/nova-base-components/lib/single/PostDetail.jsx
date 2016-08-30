import React from 'react';
import {ListContainer} from "meteor/utilities:react-list-container";
import Categories from "meteor/nova:categories";

const PostDetail = () => {

    return (
      <main className="main_3lfDa">
          <Telescope.components.PostTagItem/>
      </main>
    )
}

PostDetail.displayName = "PostDetail";

module.exports = PostDetail;
export default PostDetail;
