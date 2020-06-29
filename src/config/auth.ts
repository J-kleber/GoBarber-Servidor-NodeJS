export default {
  jwt: {
    secret: process.env.APP_SECRET || 'default',
    expiresIn: '1d',
  },
};

// secret: 'f9e937f5adaed8a2f45e98a295fe4779',
