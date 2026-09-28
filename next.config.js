/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  
  // IMPORTANT: 
  // If your GitHub repo is named "keyur536.github.io", leave the line below COMMENTED OUT.
  // If your GitHub repo is named "Portfolio" (or anything else), UNCOMMENT it and change it to your repo name.
  // basePath: '/Portfolio', 
};

module.exports = nextConfig;
