import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source:
          "/projects/project-01",
        destination:
          "/projects/paypart",
        permanent: true,
      },
      {
        source:
          "/projects/project-02",
        destination:
          "/projects/liio",
        permanent: true,
      },
      {
        source:
          "/projects/son",
        destination:
          "/projects/liio",
        permanent: true,
      },
      {
        source:
          "/projects/project-03",
        destination:
          "/projects/alta",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
