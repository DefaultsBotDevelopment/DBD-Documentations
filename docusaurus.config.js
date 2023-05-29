// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Defaults Bot Development',
	tagline: 'Get all the information you need to get started with your dream bot!',
	favicon: 'img/favicon.ico',

	// Set the production url of your site here
	url: 'https://defaultsbotdev.com',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'defaultsbotdevelopment', // Usually your GitHub org/user name.
	projectName: 'dbd-docs', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/Default-01/DBD-Documentations/blob/main',
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/Default-01/DBD-Documentations/blob/main',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
			image: 'img/docusaurus-social-card.jpg',
			navbar: {
				title: 'DBD Docs',
				logo: {
					alt: 'DBD Logo',
					src: 'img/logo.png',
				},
				items: [
					{
						type: 'docSidebar',
						sidebarId: 'tutorialSidebar',
						position: 'left',
						label: 'Documentation',
					},
					{ to: '/blog', label: 'Updates', position: 'left' },
					{
						href: 'https://discord.gg/5xEwm8e6Vy',
						label: 'Discord',
						position: 'right',
					},
					{
						href: 'https://defaultsbotdev.com',
						label: 'Dashboard',
						position: 'right',
					},
					{
						href: 'https://github.com/facebook/docusaurus',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'light',
				links: [
					{
						title: 'Docs',
						items: [
							{
								label: 'Documentation',
								to: '/docs/information',
							},
						],
					},
					{
						title: 'Community',
						items: [
							{
								label: 'GitHub',
								href: 'https://github.com/Default-01/DBD-Documentations',
							},
							{
								label: 'Discord',
								href: 'https://discord.gg/5xEwm8e6Vy',
							},
							{
								label: 'Dashboard',
								href: 'https://defaultsbotdev.com',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Defaultsbotdev, Inc. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
