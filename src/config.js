const os = require('os');
const {
  MEDIASOUP_MIN_PORT,
  MEDIASOUP_MAX_PORT,
  MEDIASOUP_LISTEN_IP,
  MEDIASOUP_ANNOUNCED_IP,
} = require('../env');

module.exports = Object.freeze({
  numWorkers: Object.keys(os.cpus()).length,
  worker: {
    logLevel: 'debug',
    logTags: [
      'rtp',
      'rtcp',
      'ice',
      'dtls'
    ],
    rtcMinPort: MEDIASOUP_MIN_PORT,
    rtcMaxPort: MEDIASOUP_MAX_PORT
  },
  router: {
    mediaCodecs: [
      {
        kind: 'audio',
        mimeType: 'audio/opus',
        clockRate: 48000,
        channels: 2,
      },
      {
        kind: 'video',
        mimeType: 'video/VP8',
        clockRate: 90000,
      }
    ]
  },
  webRtcTransport: {
    listenIps: [ { ip: MEDIASOUP_LISTEN_IP, announcedIp: MEDIASOUP_ANNOUNCED_IP } ],
    enableUdp: true,
    enableTcp: true,
    preferUdp: true,
    preferTcp: false
  }
});
