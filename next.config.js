/**
 * @type {import('next').NextConfig}
 */

const { i18n } = require("./next-i18next.config");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  reactStrictMode: false,
  i18n,
  env: {
    API_URL: "https://next-property-front-end-9jni-8o0nod1cu-ahmad-umais-projects.vercel.app/api",
  },
});
