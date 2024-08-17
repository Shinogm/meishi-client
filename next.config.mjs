/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'upload.wikimedia.org',
              pathname: '/**',
          },
      ],
  },
  async redirects() {
      return [
        {
          source: '/meishi',
          destination: 'https://meishi.com.mx/',
          permanent: false,
          basePath: false
        },
        {
          source: '/grupocom',
          destination: 'https://grupocom.com.mx/',
          permanent: false,
          basePath: false
        },
        {
          source: '/crt-c',
          destination: 'https://ctrl-c.com.mx/',
          permanent: false,
          basePath: false
        },
        {
          source: '/whatsapp',
          destination: 'https://wa.me/551199123456',
          permanent: false,
          basePath: false
        }
      ];
    },
};

export default nextConfig;
