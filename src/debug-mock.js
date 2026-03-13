// TODO: https://github.com/natemoo-re/astro-icon/issues/277
// Mock for debug package in Cloudflare Workers dev environment
export default function debug(namespace) {
  return function () {}; // No-op
}

export function debuglog() {
  return function () {}; // No-op
}
