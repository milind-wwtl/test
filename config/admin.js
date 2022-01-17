module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '01e663e0e267654b8b7a23b4e86dcd44'),
  },
});
