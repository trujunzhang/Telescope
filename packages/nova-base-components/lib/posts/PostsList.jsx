import React from 'react';

const renderLoading = (showHeader)=> {
    return (
      <div className="posts-list">
          {showHeader ? <Telescope.components.PostsListHeader /> : null}
          <div className="posts-list-content">
              <Telescope.components.PostsLoading/>
          </div>
      </div>
    )
}

const renderNoResults = (showHeader) => {
    return (
      <div className="posts-list">
          {showHeader ? <Telescope.components.PostsListHeader /> : null}
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
 * @param showHeader
 * @returns {XML}
 */
const renderPostsList = (results, currentUser, hasMore, ready, count, totalCount, loadMore, showHeader) => {
    return (
      <div className="constraintWidth_ZyYbM container_3aBgK">
          <div className="content_1jnXo">
              <section className="results_37tfm">
                  <div>
                      <div className="fullWidthBox_3Dggh box_c4OJj">
                          <div className="content_DcBqe">
                              <div className="header_3GFef">
                                  <span style="font-style: normal; font-weight: normal;">
                                      <span className="title_38djq featured_2W7jd default_tBeAo base_3CbW2">Today</span>
                                  </span>

                              </div>


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
              </section>
              <div className="sidebar_Y2LGQ">

              </div>
          </div>
      </div>
    )
}

const PostsList = ({results, currentUser, hasMore, ready, count, totalCount, loadMore, showHeader = true}) => {

    // console.log(results);
    // console.log(ready);
    // console.log(hasMore);
    // console.log(totalCount);
    // console.log(count);

    if (!!results.length) {
        return renderPostsList(results, currentUser, hasMore, ready, count, totalCount, loadMore, showHeader = true);
    } else if (!ready) {
        return renderLoading(showHeader);
    } else {
        return renderNoResults(showHeader);
    }

};

PostsList.displayName = "PostsList";

module.exports = PostsList;