module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8d27b5260096afe43f6a43497e311f4f'),
  },
});
