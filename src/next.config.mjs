
// Defining Next.js configuration
const nextConfig = {
    reactStrictMode: true,
    // output: 'export',
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "5001",
                pathname: "/**"
            }, 
            {
                protocol: "https",
                hostname: "i.ytimg.com",
                port: "",
                pathname: "/**"
            }, 
            {
                protocol: "https",
                hostname: "s0.2mdn.net",
                port: "",
                pathname: "/**"
            }, 
            {
                protocol: "https",
                hostname: "tpc.googlesyndication.com",
                port: "",
                pathname: "/**"
            }, 
            {
                protocol: "https",
                hostname: "campuslive24.com",
                port: "",
                pathname: "/**"
            }, 
            {
                protocol: "https",
                hostname: 'www.campuslive24.com',
                port: "",
                pathname: "/**"
            } , 
            {
                protocol: "https",
                hostname: 'img.youtube.com',
                port: "",
                pathname: "/**"
            }
        ],
    },
};

// Exporting Next.js configuration for use in the application
export default nextConfig;