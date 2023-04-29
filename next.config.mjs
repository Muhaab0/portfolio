/** @type {import('next').NextConfig} */
module.exports = () => {
  basePath: '/PortofolioFront'
  const rewrites = () => {
    return [
      {
        source: "/portfolio/me5a/api/:path*",
        destination: "https://portofolionodejs-production.up.railway.app/api/:path*",
      },
    ];
  };
  return {
    rewrites,
  }
}

