interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Atchyut', // Site author
	title: 'Ola Electric Blog', // Site title.
	description: 'Comprehensive blog dedicated to electric vehicles (EVs), featuring essential guides on EV basics, ownership tips, cost savings, model comparisons, and sustainability impact.', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
