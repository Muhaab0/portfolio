/** @type {import('next').NextConfig} */
module.exports = () => {
  swcMinify: true
  basePath: "/PortofolioFront"
  const rewrites = () => {
    return [
      {
        source: "/me5a/api/:path*",
        destination: "https://portofolionodejs-production.up.railway.app/api/:path*",
      },
    ];
  };
  return {
    rewrites,
  }
}

