import React, {PropTypes, Component} from 'react';
import {FormattedMessage} from 'react-intl';
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/std:accounts-ui';
import {Modal, Dropdown, MenuItem} from 'react-bootstrap';
import {ContextPasser} from "meteor/nova:core";
import {LinkContainer} from 'react-router-bootstrap';
import Users from 'meteor/nova:users';

class HeaderNavigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            subNavigationItems: [
                {"href": "/tech", "title": "Tech"},
                {"href": "/games", "title": "Games"},
                {"href": "/podcasts", "title": "Podcasts"},
                {"href": "/books", "title": "Books"},
                //{"href": "/topics/bots", "title": "Bots"},
                {"href": "/topics/developer-tools", "title": "Developer Tools"},
                {"href": "/topics/photography-tools", "title": "Photography Tools"},
                //{"href": "/topics/pokemon", "title": "Pokemon"},
                //{"href": "/topics/slack", "title": "Slack"},
                {"href": "/topics/wearables", "title": "Wearables"},
            ]
        }
    }

    render() {
        return (
          <nav class="navigation_1H-Yv text_3Wjo0 subtle_1BWOT base_3CbW2"><a
            class="item_1k3Lx itemActive_3HLKr item_1k3Lx" href="/">Home</a>
              <div class="subNavigation_iLJXz">
                  <div class="gradientLeft_33bxf gradient_fDMJD"></div>
                  <div class="gradientRight_Rp6ob gradient_fDMJD"></div>
                  <ol>
                      {this.state.subNavigationItems.map((menu, key) => {
                          return (
                          <li><a class="item_1k3Lx" href="{menu.href}">{menu.title}</a></li>
                          );
                      })}
                      <li><a class="all_P8Pm- item_1k3Lx secondaryText_PM80d default_tBeAo base_3CbW2" href="/topics">See
                          all</a></li>
                  </ol>
              </div>
              <div class="arrows_3W6MJ"><a class="arrowLeft_2dYJG arrow__5txj" disabled="">
                      <span>
                          <svg width="9"
                               height="16"
                               viewBox="0 0 9 16"
                               xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M1.05833636,0 L0,1.05654696 L6.95502928,8 L6.64746554e-16,14.943453 L1.05833636,16 L8.54271718,8.52827348 C8.83496729,8.23651377 8.83496729,7.7634825 8.54271718,7.47172652 L1.05833636,0 L1.05833636,0 Z"
                                fill="#999" transform="matrix(-1 0 0 1 8.762 0)"
                                fill-rule="evenodd"></path>
                          </svg></span></a><a
                class="arrowRight_2eZTP arrow__5txj">
                      <span>
                          <svg width="9" height="16" viewBox="0 0 9 16"
                               xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M1.05833636,0 L0,1.05654696 L6.95502928,8 L6.64746554e-16,14.943453 L1.05833636,16 L8.54271718,8.52827348 C8.83496729,8.23651377 8.83496729,7.7634825 8.54271718,7.47172652 L1.05833636,0 L1.05833636,0 Z"
                                fill="#999" fill-rule="evenodd"></path>
                          </svg>
                      </span>
              </a>
              </div>
          </nav>
        )
    }

}

module.exports = HeaderNavigation;
export default HeaderNavigation;