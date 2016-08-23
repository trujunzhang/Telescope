import React from 'react';
//import { Messages } from "meteor/nova:core";

const Header = ({currentUser}) => {

    const logoUrl = Telescope.settings.get("logoUrl");
    const siteTitle = Telescope.settings.get("title", "Nova");
    const tagline = Telescope.settings.get("tagline");

    return (
      <div class="header_2k8Jf">
          <div class="constraintWidth_ZyYbM">
              <div class="headerContent_3umLL centerItems_222KX">
                  <div class="headerLeft_1Kke2 centerItems_222KX"><a class="logo_5Pf3F" href="/">
                      <span
                        class="logoIcon_1Mp0b">
                          <svg width="40" height="40" viewBox="0 0 40 40"
                               xmlns="http://www.w3.org/2000/svg">
                              <g fill="none"
                                 fill-rule="evenodd">
                                  <path
                                    d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20"
                                    fill="#DA552F"></path>
                                  <path
                                    d="M22.667 20H17v-6h5.667c1.656 0 3 1.343 3 3s-1.344 3-3 3m0-10H13v20h4v-6h5.667c3.866 0 7-3.134 7-7s-3.134-7-7-7"
                                    fill="#FFF"></path>
                  </g>
                  </svg>
                  </span>
                  </a>
                      <form class="container_2cR6a" method="GET" action="/search/posts">
                          <label
                            class="text_3Wjo0 subtle_1BWOT base_3CbW2">
                          <span class="searchIcon_3L3Y2">
                              <svg width="15"
                                   height="15"
                                   viewBox="0 0 15 15"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <title>Oval 95</title>
                              <path
                                d="M9.383 10.347c-.987.78-2.233 1.244-3.588 1.244C2.595 11.59 0 8.997 0 5.796 0 2.595 2.595 0 5.795 0c3.2 0 5.796 2.595 5.796 5.795 0 1.355-.464 2.6-1.243 3.588L15 14.036l-.964.964-4.653-4.653zm-3.588-.12c2.448 0 4.432-1.984 4.432-4.432 0-2.447-1.984-4.43-4.432-4.43-2.447 0-4.43 1.983-4.43 4.43 0 2.448 1.983 4.432 4.43 4.432z"
                                fill="#BBB" fill-rule="evenodd"></path></svg>
                          </span>
                              <div class="tags_1FTZg" data-test="search-trigger">
                                  <div class="tagScrollWrapper_2vzLG">
                                      <div class="tagWrapper_2hyXS"><span
                                        class="placeholder_KtrAE ellipsis_2lgar text_3Wjo0 subtle_1BWOT base_3CbW2">Discover your next favorite thing…</span>
                                      </div>
                                  </div>
                              </div>
                              <button class="close_19Ofw" type="reset"><span><svg width="12" height="12"
                                                                                  viewBox="0 0 12 12"
                                                                                  xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M6 4.586l4.24-4.24c.395-.395 1.026-.392 1.416-.002.393.393.39 1.024 0 1.415L7.413 6l4.24 4.24c.395.395.392 1.026.002 1.416-.393.393-1.024.39-1.415 0L6 7.413l-4.24 4.24c-.395.395-1.026.392-1.416.002-.393-.393-.39-1.024 0-1.415L4.587 6 .347 1.76C-.05 1.364-.048.733.342.343c.393-.393 1.024-.39 1.415 0L6 4.587z"
                                    fill-rule="evenodd"></path></svg></span></button>
                          </label></form>
                  </div>
                  <div class="headerRight_2DQLQ centerItems_222KX"><a href="#" class="metaMenu_3AKjk menuLink_1h9ZN"
                                                                      data-test="more"><span><svg width="20" height="4"
                                                                                                  viewBox="0 0 20 4"
                                                                                                  xmlns="http://www.w3.org/2000/svg"><path
                    d="M2 4c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm8 0c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm8 0c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z"
                    fill="#BBB" fill-rule="evenodd"></path>
                  </svg>
                  </span></a><a
                    class="login_258vb header--login-button-legacy-tests-only secondaryBoldText_1PBCf secondaryText_PM80d subtle_1BWOT base_3CbW2"
                    href="/login">Login</a></div>
              </div>
              <nav class="navigation_1H-Yv text_3Wjo0 subtle_1BWOT base_3CbW2"><a
                class="item_1k3Lx itemActive_3HLKr item_1k3Lx" href="/">Home</a>
                  <div class="subNavigation_iLJXz">
                      <div class="gradientLeft_33bxf gradient_fDMJD"></div>
                      <div class="gradientRight_Rp6ob gradient_fDMJD"></div>
                      <ol>
                          <li><a class="item_1k3Lx" href="/tech">Tech</a></li>
                          <li><a class="item_1k3Lx" href="/games">Games</a></li>
                          <li><a class="item_1k3Lx" href="/podcasts">Podcasts</a></li>
                          <li><a class="item_1k3Lx" href="/books">Books</a></li>
                          <li><a class="item_1k3Lx" href="/topics/bots">Bots</a></li>
                          <li><a class="item_1k3Lx" href="/topics/developer-tools">Developer Tools</a></li>
                          <li><a class="item_1k3Lx" href="/topics/photography-tools">Photography Tools</a></li>
                          <li><a class="item_1k3Lx" href="/topics/pokemon">Pokemon</a></li>
                          <li><a class="item_1k3Lx" href="/topics/slack">Slack</a></li>
                          <li><a class="item_1k3Lx" href="/topics/wearables">Wearables</a></li>
                          <li><a class="all_P8Pm- item_1k3Lx secondaryText_PM80d default_tBeAo base_3CbW2"
                                 href="/topics">See all</a></li>
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
          </div>
      </div>
    )
};

Header.displayName = "Header";

module.exports = Header;
