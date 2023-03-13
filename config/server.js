module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: ['D7O0HYAUvX735d6xdaXoZg==','qhYE4krxyqO02DZR4ezFQw==','6RAPs9lhIalhH3pHUuPzxQ==','eOluBzKIkTwFwmLnS7oMZA=='],
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
