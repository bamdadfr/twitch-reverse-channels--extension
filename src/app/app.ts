import {Channels} from './common/channels';

export class App {
  private channels: Channels;

  private constructor() {
    this.channels = Channels.init();
  }

  public static init(): App {
    return new App();
  }
}
