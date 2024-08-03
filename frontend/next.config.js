module.exports = {
  output: 'standalone',
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_PAGINATION_LIMIT: '10',
    NEXT_PUBLIC_API_HOST: 'https://psy135-production.up.railway.app/api',
    NEXT_PUBLIC_LOGOUT_TIMER: '10',
  },
};
