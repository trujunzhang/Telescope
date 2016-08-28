import React, {PropTypes, Component} from 'react';
import {FormattedMessage, FormattedRelative} from 'react-intl';
import {Button} from 'react-bootstrap';
import moment from 'moment';
import {ModalTrigger} from "meteor/nova:core";
import {Link} from 'react-router';
import Posts from "meteor/nova:posts";
import Users from 'meteor/nova:users';

class PostsItem extends Component {

    renderCategories() {
        return this.props.post.categoriesArray ? <Telescope.components.PostsCategories post={this.props.post}/> : "";
    }

    renderCommenters() {
        return this.props.post.commentersArray ? <Telescope.components.PostsCommenters post={this.props.post}/> : "";
    }

    renderActions() {

        const component = (
          <ModalTrigger title="Edit Post"
                        component={<a className="posts-action-edit"><FormattedMessage id="posts.edit"/></a>}>
              <Telescope.components.PostsEditForm post={this.props.post}/>
          </ModalTrigger>
        );

        return (
          <div className="post-actions">
              {Users.canEdit(this.context.currentUser, this.props.post) ? component : ""}
          </div>
        )
    }

    renderActionButtons() {
        return (
          <div className="meta_2lIV-">
              <div className="actionButtons_2mJsw">
                  <Telescope.components.Vote post={post} currentUser={this.context.currentUser}/>
                  <a
                    className="button_2I1re smallSize_1da-r secondaryText_PM80d subtleVariant_tlhj3 simpleVariant_1Nl54 button_2n20W"
                    href="/tech/ui-temple">
                      <div className="buttonContainer_wTYxi">
                    <span>
                        <svg width="12" height="11" viewBox="0 0 12 11"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M10.0124802,16.8320558 C9.21033653,16.0515289 8.72727273,15.044941 8.72727273,13.9462121 C8.72727273,11.4655331 11.1897066,9.45454545 14.2272727,9.45454545 C17.2648389,9.45454545 19.7272727,11.4655331 19.7272727,13.9462121 C19.7272727,16.4268911 17.2648389,18.4378788 14.2272727,18.4378788 C13.4722764,18.4378788 12.752811,18.3136428 12.0978565,18.0888377 C11.026169,18.7087928 8.93104025,19.527919 8.93104025,19.527919 C8.93104025,19.527919 9.63175021,17.8427438 10.0124802,16.8320558 Z"
                              transform="translate(-8 -9)" fill="#FFF" fill-rule="evenodd">
                        </path>
                        </svg>
                    </span>
                          13
                      </div>
                  </a>
                  <div className="additionalActionButtons_BoErh">
                      <a
                        className="button_2I1re smallSize_1da-r secondaryText_PM80d subtleVariant_tlhj3 simpleVariant_1Nl54 button_2n20W"
                        href="#" rel="save-button" label="save">
                          <div className="buttonContainer_wTYxi">
                        <span>
                            <span>
                                <svg width="13" height="10" viewBox="0 0 13 10"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      d="M9,6 L6,6 L6,7 L9,7 L9,10 L10,10 L10,7 L13,7 L13,6 L10,6 L10,3 L9,3 L9,6 Z M0,0 L8,0 L8,1 L0,1 L0,0 Z M0,3 L8,3 L8,4 L0,4 L0,3 Z M0,6 L5,6 L5,7 L0,7 L0,6 Z"
                                      fill="#FFF" fill-rule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            save
                        </span>
                          </div>
                      </a>
                      <a
                        className="button_2I1re smallSize_1da-r secondaryText_PM80d subtleVariant_tlhj3 simpleVariant_1Nl54 button_2n20W"
                        target="_blank" href="/r/a7b2435b0265fd/74101">
                          <div className="buttonContainer_wTYxi">
                        <span>
                        <svg width="10" height="10" viewBox="0 0 10 10"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M5.9816,1.0418 L8.2136,1.0418 L3.8976,5.3578 L4.6426,6.1018 L8.9586,1.7858 L8.9586,4.0188 L9.9996,4.0188 L9.9996,0.5208 C9.9996,0.2228 9.7766,-0.0002 9.4786,-0.0002 L5.9816,-0.0002 L5.9816,1.0418 Z M9,9 L1,9 L1,1 L3.97833252,1 L3.97833252,0 L0.51,0 C0.228,0 0,0.228 0,0.51 L0,9.49 C0,9.772 0.228,10 0.51,10 L9.49,10 C9.772,10 10,9.772 10,9.49 L10,6.02606201 L9,6.02606201 L9,9 Z"
                              fill="#FFF" fill-rule="evenodd">
                            </path>
                        </svg>
                        </span>
                          </div>
                      </a>
                  </div>
              </div>
              <div className="annotations_X03xJ annotations_2Ditj">
                  <div className="secondaryText_PM80d subtle_1BWOT base_3CbW2">
                      <span >🏆</span>
                      #1 in Tech
                  </div>
              </div>
              <div className="associations_2dmvY">
                  <div>
                      <a
                        className="button_2I1re smallSize_1da-r secondaryText_PM80d greySolidColor_270pZ solidVariant_2wWrf"
                        href="/topics/web">
                          <div className="buttonContainer_wTYxi">Web</div>
                      </a>
                      <a href="#" className="moreAssociations_28e7H"><span
                        className="secondaryText_PM80d subtle_1BWOT base_3CbW2">
                    +2
                </span>
                      </a>
                  </div>
              </div>
          </div>
        )
    }

    render() {

        const post = this.props.post;

        //let postClass = "posts-item";
        //if (post.sticky)
        //  postClass += " posts-sticky";

        // console.log(post)
        // console.log(post.user)

        return (
          <div className="postItem_2pV9v" rel="post-item-#74101">

              <a className="link_3fUGJ" href="/tech/ui-temple">
                  <div className="post-thumbnail thumbnail_JX64A">
                      <div className="container_22rD3">
                          {post.thumbnailUrl ? <Telescope.components.PostsThumbnail post={post}/> : null}
                      </div>
                  </div>
                  <div className="content_3oLx4">
                      <span className="title_2p9fd featured_2W7jd default_tBeAo base_3CbW2">{post.title}</span>
                      <span className="text_3Wjo0 subtle_1BWOT base_3CbW2">
                          Curated collection of the best web page designs
                      </span>
                  </div>
              </a>
              {this.renderActionButtons()}
          </div>
        )
    }
}

PostsItem.propTypes = {
    post: React.PropTypes.object.isRequired
}

PostsItem.contextTypes = {
    currentUser: React.PropTypes.object
};

module.exports = PostsItem;
export default PostsItem;