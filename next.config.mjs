/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode : true,
    webpack : function(config) {
        config.module.rules.push({
            test : /\.md$/,
            use : "raw-loader",
        });
        return config;
    }
};

export default nextConfig;
