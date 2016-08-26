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

const renderPostsList = (results, currentUser, hasMore, ready, count, totalCount, loadMore, showHeader) => {
    return (
      <div className="posts-list">
          {showHeader ? <Telescope.components.PostsListHeader /> : null}
          <div className="posts-list-content">
              {results.map(post => <Telescope.components.PostsItem post={post} currentUser={currentUser}
                                                                   key={post._id}/>)}
          </div>
          {hasMore ? (ready ?
            <Telescope.components.PostsLoadMore loadMore={loadMore} count={count} totalCount={totalCount}/> :
            <Telescope.components.PostsLoading/>) : <Telescope.components.PostsNoMore/>}
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