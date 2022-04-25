import {Twitch} from './twitch';
import {observeElement} from '../utils/observe-element';

export class Channels {
  private readonly selector = '[aria-label="Followed Channels"]';

  private readonly node: HTMLDivElement;

  private readonly content: HTMLDivElement;

  private constructor() {
    this.node = document.querySelector(this.selector);
    this.content = this.node.children[1] as HTMLDivElement;

    this.observeContent();
    this.applyContentStyles();

    this.arrangeNavigation();
  }

  private get navigation(): HTMLDivElement {
    return this.node.children[2] as HTMLDivElement;
  }

  public static init(): Channels {
    if (!Twitch.isReady) {
      setTimeout(this.init, 1000);
      return;
    }

    return new Channels();
  }

  private applyContentStyles() {
    this.content.style.display = 'flex';
    this.content.style.flexDirection = 'column-reverse';
  }

  private arrangeNavigation() {
    this.navigation.style.transform = 'translateY(-10px)';
    this.node.insertBefore(this.navigation, this.content);
  }

  private observeContent() {
    observeElement(this.content, () => {
      this.arrangeNavigation();
    });
  }
}
