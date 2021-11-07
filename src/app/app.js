import { channels } from './channels/channels';

export const app = Object.create (null);

app.channels = channels;

app.init = function () {
  channels.init ();
};
