const channels = {};

const send = (channel, msg) => {
  typeof channels[channel] === "function" && channels[channel](msg);
};

const onReceive = (channel, callback) => {
  channels[channel] = callback;
};

MessageTunnel = {
  send,
  onReceive,
};

export default MessageTunnel;
