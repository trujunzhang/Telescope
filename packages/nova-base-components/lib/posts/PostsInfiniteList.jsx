import React, {PropTypes, Component} from 'react';

import InfiniteScroll from 'react-infinite-scroller'

class PostsInfiniteList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: this.props.results,
            currentPage: 1,
            isLoadingMore: false,
        }
    }

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

    loadFunc() {
        if (this.state.isLoadingMore) {
            return;
        }

        this.setState({isLoadingMore: true})

        //this.setState({ list: [...this.state.list, ...[newObject]] });
        let num = this.state.currentPage;
        let fetchedPosts = Posts.find().fetch();
        //.map(function (post, index) {
        //    let id = post._id;
        //    //post._id = num * 10 + index;
        //    //post.title = num * 10 + index;
        //    return post;
        //})
        this.setState({
            posts: [...this.state.posts, ...[fetchedPosts]],
            currentPage: this.state.currentPage + 1,
        })

        //setTimeout(() => {
        //      this.setState({isLoadingMore: false})
        //  }, 50
        //);
    }

    render() {
        return (
          <InfiniteScroll
            threshold={800}
            pageStart={0}
            loadMore={this.loadFunc()}
            hasMore={true}
            loader={<div className="loader">Loading ...</div>}>

              {this.state.posts.map(post => <Telescope.components.PostsItem post={post}
                                                                            currentUser={this.props.currentUser}
                                                                            key={post._id + this.state.currentPage}/>)}
          </InfiniteScroll>
        )

        //let results = this.props.results;
        //let ready = this.props.ready;
        //if (!!results.length) {
        //    return this.renderPostsList(this.props.results, this.props.currentUser, this.props.hasMore, this.props.ready, this.props.count, this.props.totalCount, this.props.loadMore);
        //} else if (!ready) {
        //    return this.renderLoading();
        //} else {
        //    return this.renderNoResults();
        //}
    }
}

module.exports = PostsInfiniteList;
export default PostsInfiniteList;