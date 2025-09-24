type MenuItem = {
    title: string;
    href?: string;
    links: Array<{
        href?: string;
        label: string;
        isCurrent?: boolean;
        sub?: Array<{ href: string; label: string }>;
    }>;
    isCurrent?: boolean;
};

export const menuItems: MenuItem[] = [
    {
        title: "Homepage",
        href: "/",
        links: [],
        isCurrent: true,
    },
    {
        title: "About",
        href: "/about-us",
        links: [],
    },
    {
        title: "FAQs",
        href: "/FAQs",
        links: [],
    },
    {
        title: "Contacts",
        href: "/contacts",
        links: [],
    },
];
