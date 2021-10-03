export const app = {
  name: process.env.APP_NAME || 'Node Structure',
  env: process.env.APP_ENV || 'production',
  url: process.env.APP_URL || 'http://localhost',
  debug: process.env.APP_DEBUG || false,
  port: process.env.APP_PORT || 3000
}

export default app