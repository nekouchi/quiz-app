import getConfig from "next/config";

export default function customLoader({ src, width, quality }) {
  const config = getConfig() || {}; // getConfig()がundefinedの場合に対応
  const { publicRuntimeConfig = {} } = config; // publicRuntimeConfigがundefinedの場合に対応
  const basePath = "/kids";

  return `${basePath}${src}?w=${width}&q=${quality || 75}`;
}
