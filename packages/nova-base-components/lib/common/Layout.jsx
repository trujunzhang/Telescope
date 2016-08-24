import React, {PropTypes, Component} from 'react';
import {FlashContainer} from "meteor/nova:core";

class Layout extends Component {

    constructor(props) {
        super(props);
        //<div className="search-mode overlayActive_oQWJ3"></div>
        this.state = this.initialState = {
            isSearching: false
        };
    }

    render() {

        return (
          <div className="wrapper {this.state.isSearching?'search-mode':''}" id="wrapper">

              <Telescope.components.HeadTags />

              <Telescope.components.UsersProfileCheck {...this.props} />

              <Telescope.components.Header {...this.props}/>

              <div className="{this.state.isSearching?'overlayActive_oQWJ3':'overlayInactive_1UI7W'}"></div>

              <div className="main">

                  <FlashContainer component={Telescope.components.FlashMessages}/>

                  <Telescope.components.Newsletter />

                  {this.props.children}

              </div>

              <Telescope.components.Footer {...this.props}/>

          </div>
        )

    }
}

Layout.displayName = "Layout";

module.exports = Layout;
