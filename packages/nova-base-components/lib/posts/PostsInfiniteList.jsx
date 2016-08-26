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

    //renderLeftPanel(results, currentUser, hasMore, ready, count, totalCount, loadMore) {
    //    if (!!results.length) {
    //        return this.renderPostsList(results, currentUser, hasMore, ready, count, totalCount, loadMore);
    //    } else if (!ready) {
    //        return this.renderLoading(showHeader);
    //    } else {
    //        return this.renderNoResults(showHeader);
    //    }
    //}

    render() {
        let results = [];//this.props.results;
        let ready = this.props.ready;
        if (!!results.length) {
            return this.renderPostsList(this.props.results, this.props.currentUser, this.props.hasMore, this.props.ready, this.props.count, this.props.totalCount, this.props.loadMore);
        } else if (!ready) {
            return this.renderLoading();
        } else {
            return this.renderNoResults();
        }

        //return this.renderPostsList(this.props.results, this.props.currentUser, this.props.hasMore, this.props.ready, this.props.count, this.props.totalCount, this.props.loadMore);
        //return this.renderLoading();
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