
// Defining Next.js configuration
const nextConfig = {
    reactStrictMode: true,
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "campuslive24.com",
                port: "",
                pathname: "/**"
            }, {
                protocol: "https",
                hostname: 'www.campuslive24.com',
                port: "",
                pathname: "/**"
            } , {
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