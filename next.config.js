const securityHeaders =
  process.env.NODE_ENV === "production"
    ? [
        {
          key: "Strict-Transport-Security",
          value: "max-age=31536000; preload",
        },
        {
          key: "X-XSS-protection",
          value: "1; mode=block",
        },
        {
          key: "X-Frame-Options",
          value: "SAMEORIGIN",
        },
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "Access-Control-Allow-Origin",
          value: "https://www.kickante.com.br",
        },
        {
          key: "Access-Control-Allow-Method",
          value: "GET",
        },
        {
          key: "Vary",
          value: "Origin",
        },
      ]
    : [];

const nextConfig = {
  poweredByHeader: false,
  distDir: "build",
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [...securityHeaders],
      },
    ];
  },
};

module.exports = nextConfig;
