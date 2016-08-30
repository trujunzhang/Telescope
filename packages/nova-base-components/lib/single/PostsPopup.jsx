import React from 'react';
import {ListContainer} from "meteor/utilities:react-list-container";
import Categories from "meteor/nova:categories";

const PostsPopup = () => {

    return (
      <div className="overlay_1AkSl modal-spotlight">
          <a className="closeDesktop_XydFN" title="Close" data-test="modal-close">
                <span>
                    <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M6 4.586l4.24-4.24c.395-.395 1.026-.392 1.416-.002.393.393.39 1.024 0 1.415L7.413 6l4.24 4.24c.395.395.392 1.026.002 1.416-.393.393-1.024.39-1.415 0L6 7.413l-4.24 4.24c-.395.395-1.026.392-1.416.002-.393-.393-.39-1.024 0-1.415L4.587 6 .347 1.76C-.05 1.364-.048.733.342.343c.393-.393 1.024-.39 1.415 0L6 4.587z"
                          fill-rule="evenodd"></path>
                    </svg>
                </span>
          </a>
          <a className="closeMobile_15z3i" title="Close" data-test="modal-close">
                <span>
                    <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M6 4.586l4.24-4.24c.395-.395 1.026-.392 1.416-.002.393.393.39 1.024 0 1.415L7.413 6l4.24 4.24c.395.395.392 1.026.002 1.416-.393.393-1.024.39-1.415 0L6 7.413l-4.24 4.24c-.395.395-1.026.392-1.416.002-.393-.393-.39-1.024 0-1.415L4.587 6 .347 1.76C-.05 1.364-.048.733.342.343c.393-.393 1.024-.39 1.415 0L6 4.587z"
                          fill-rule="evenodd"></path>
                    </svg>
                </span>
          </a>
          <div className="content_3X9xi">

              <div className="container_2uJxj">
                  <section className="postSection_1iIbk">
                      <div className="sectionContent_21Amp">

                          <Telescope.components.PostsSingleHeader />

                          <div className="constraintWidth_ZyYbM body_1a08C">
                              <Telescope.components.PostDetail/>
                          </div>

                      </div>
                  </section>
                  <section className="popularTodaySection_30n6J">
                      <div className="sectionContent_21Amp">


                      </div>
                  </section>
              </div>

          </div>
      </div>
    )
}

PostsPopup.displayName = "PostsPopup";

module.exports = PostsPopup;
export default PostsPopup;
