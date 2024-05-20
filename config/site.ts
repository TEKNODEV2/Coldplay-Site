export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Eventi",
			href: "/events",
		},
    {
      label: "Shop",
      href: "/shop",
    },
    {
      label: "Album",
      href: "/albums",
    },
    {
      label: "Storia",
      href: "/about",
    }
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Eventi",
			href: "/events",
		},
    {
      label: "Shop",
      href: "/shop",
    },
    {
      label: "Album",
      href: "/albums",
    },
    {
      label: "Storia",
      href: "/about",
    }
	],
	navAccountItemsNotLogged: [
		{
			label: "Logout",
			href: "/logout",
			onPress: ""
		},
	],
	navAccountItemsLogged: [
		{
			label: "Logout",
			href: "/logout",
			onPress: "",
		},
	],

	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
