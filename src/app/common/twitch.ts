export class Twitch {
  public static get isReady(): boolean {
    return this.isLoggedIn && this.isSidebarLoaded;
  }

  private static get isLoggedIn(): boolean {
    return document.body.classList[0] === 'logged-in';
  }

  private static get isSidebarLoaded(): boolean {
    return document.getElementsByClassName('side-bar-contents')[0].children[0].children[0].children.length > 0;
  }
}
