import React, {PropTypes, Component} from 'react';

class PostsInfiniteList extends Component {

    renderLoading() {
        return (
          <div>
              <span className="loading_2hQxH featured_2W7jd subtle_1BWOT base_3CbW2">Hunting down posts...</span>
          </div>
        )
    }

    renderNoResults() {
        return (
          <div className="posts-list">
              <div className="posts-list-content">
                  <Telescope.components.PostsNoResults/>
              </div>
          </div>
        )
    }

    /**
     * two panels
     * == left panel
     * == right panel
     *
     * @param results
     * @param currentUser
     * @param hasMore
     * @param ready
     * @param count
     * @param totalCount
     * @param loadMore
     * @returns {XML}
     */
    renderPostsList({results, currentUser, hasMore, ready, count, totalCount, loadMore}) {
        return (
          <div>
              <div className="fullWidthBox_3Dggh box_c4OJj">
                  <div className="content_DcBqe">
                      <Telescope.components.PostsListTitle/>
                      {results.map(post => <Telescope.components.PostsItem post={post}
                                                                           currentUser={currentUser}
                                                                           key={post._id}/>)}
                      {hasMore ? (ready ?
                        <Telescope.components.PostsLoadMore loadMore={loadMore} count={count}
                                                            totalCount={totalCount}/> :
                        <Telescope.components.PostsLoading/>) : <Telescope.components.PostsNoMore/>}

                  </div>
              </div>
          </div>
        )
    }

    renderLeftPanel({results, currentUser, hasMore, ready, count, totalCount, loadMore}) {
        //if (!!results.length) {
        return renderPostsList(results, currentUser, hasMore, ready, count, totalCount, loadMore);
        //} else if (!ready) {
        //return renderLoading(showHeader);
        //} else {
        //    return renderNoResults(showHeader);
        //}
    }

    render() {
        //return this.renderPostsList(this.props.results);
        return this.renderLoading();
        //return (
        //  <div className="header_3GFef">
        //                          <span className="header_title">
        //                              <span className="title_38djq featured_2W7jd default_tBeAo base_3CbW2">Today</span>
        //                          </span>
        //      <div className="toggle_Tx6Vy">
        //          <a className="secondaryText_PM80d default_tBeAo base_3CbW2" href="/">Popular</a>
        //          <a className="secondaryText_PM80d subtle_1BWOT base_3CbW2"
        //             href="/newest">Newest</a>
        //      </div>
        //  </div>
        //)
    }
}

module.exports = PostsInfiniteList;
export default PostsInfiniteList;