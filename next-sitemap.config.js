/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://clizsec.com',
  generateRobotsTxt: true,
  exclude: ['/server', '/admin'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/server', '/admin'],
      },
    ],
  }
}
