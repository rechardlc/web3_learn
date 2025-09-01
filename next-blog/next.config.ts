import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer";
const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["next-mdx-remote"],
};

export default withContentlayer(nextConfig);
