import React from 'react';
import {ListContainer} from "meteor/utilities:react-list-container";
import Categories from "meteor/nova:categories";

const PostDetail = () => {

    return (
      <main className="main_3lfDa">
          {/*post's tags*/}
          <Telescope.components.PostTagItem/>
          {/*post's image*/}
          <section className="container_3tEOd">
              <div>
                  <div className="canvasWrapper_3pQxU">
                      <div className="canvas_3tuA5">
                          <div className="container_22rD3 post_image">
                              <img className="placeholder_E_0qw" height="315"
                                   src="http://www.dailypioneer.com/uploads/main/cl_story_image/T330_8868_Untitled-5.gif"
                                   width="177.32517482517483"/>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </main>
    )
}

PostDetail.displayName = "PostDetail";

module.exports = PostDetail;
export default PostDetail;
