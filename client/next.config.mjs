/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "s3inventorymanagementnew.s3.us-east-2.amazonaws.com",
                port: "",
                pathname: "/s3-inventorymanagement.2/**"

            }
        ]
    }
};

export default nextConfig;
https://s3inventorymanagementnew.s3.us-east-2.amazonaws.com/product1.png