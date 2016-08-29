import React, {PropTypes, Component} from 'react';
import PostDetailNavigation from "./postdetailnavigation.js";

const Messages = {
  // Local (client-only) collection
  collection: new Meteor.Collection(null),

  flash(content, type) {
    type = (typeof type === 'undefined') ? 'error' : type;
    // Store errors in the local collection
    this.collection.insert({content: content, type: type, seen: false, show: true});
  },

  layout: Component,
  isSearch(search){
    this.layout.setState({isSearching: search})
  },

  postDetailNavigation: new PostDetailNavigation({name: 'wanghao'}),
  pushPostDetail(postID){
    this.postDetailNavigation.properties.name = postID;
    this.layout.setState({name: this.postDetailNavigation.properties.name});
  },

  markAsSeen(messageId) {
    this.collection.update(messageId, {$set: {seen: true}});
  },

  clear(messageId) {
    this.collection.update(messageId, {$set: {show: false}});
  },

  clearSeen() {
    this.collection.update({seen: true}, {$set: {show: false}}, {multi: true});
  }
};

export default Messages;
