export const channels = Object.create (null);

channels.selector = '[aria-label="Followed Channels"]';
channels.node = null;
channels.content = null;
channels.navigation = null;

channels.init = function () {
  if (!this.isReady ()) {
    setTimeout (this.init.bind (this), 1000);
    return;
  }

  this.node = document.querySelector (this.selector);
  this.content = this.node.children[1];
  this.navigation = this.node.children[2];

  this.content.style.display = 'flex';
  this.content.style.flexDirection = 'column-reverse';

  this.navigation.setAttribute ('style', 'margin-top: -10px');
  this.node.insertBefore (this.navigation, this.content);
};

channels.isReady = function () {
  return this.isLoggedIn () && this.isSideBarLoaded ();
};

channels.isLoggedIn = function () {
  return document.body.classList[0] === 'logged-in';
};

channels.isSideBarLoaded = function () {
  return document.getElementsByClassName ('side-bar-contents')[0].children[0].children[0].children.length > 0;
};
