import React, {PropTypes, Component} from 'react';

class PostsInfiniteList extends Component {

    /**
     * render the Loading block when fetching the posts.
     * @returns {XML}
     */
    renderLoading() {
        return (
          <div>
              <span className="loading_2hQxH featured_2W7jd subtle_1BWOT base_3CbW2">Hunting down posts...</span>
          </div>
        )
    }

    /**
     * Showing no results panel.
     * @returns {XML}
     */
    renderNoResults() {
        return (
          <div>
              <span className="loading_2hQxH featured_2W7jd subtle_1BWOT base_3CbW2">No posts to display.</span>
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
    renderPostsList(results, currentUser, hasMore, ready, count, totalCount, loadMore) {
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

    render() {
        let results = this.props.results;
        let ready = this.props.ready;
        if (!!results.length) {
            return this.renderPostsList(this.props.results, this.props.currentUser, this.props.hasMore, this.props.ready, this.props.count, this.props.totalCount, this.props.loadMore);
        } else if (!ready) {
            return this.renderLoading();
        } else {
            return this.renderNoResults();
        }
    }
}

module.exports = PostsInfiniteList;
export default PostsInfiniteList;