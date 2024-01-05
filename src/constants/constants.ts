export type LinkType = {
    name: string;
    link: string;
};

export type TermOfUseType = {
    id: number;
    title: string;
    text: string;
}

export const MY_ACCOUNT_LINKS: LinkType[] = [
    {
        name: "Sign In",
        link: "#",
    },
];
export const HELP_LINKS: LinkType[] = [
    {
        name: "Shipping",
        link: "#",
    },
];

export const ABOUT_LINKS: LinkType[] = [
    {
        name: "Our story",
        link: "#",
    },
];

export const LEGAL_LINKS: LinkType[] = [
    {
        name: "Terms of use",
        link: "/doc/tos",
    },
];

export const TERMS_OF_USE_DATA: TermOfUseType[] = [
    {
        id: 1,
        title: "License to Use the Website",
        text: "You may view and interact with the content on this website for personal use. You must not republish any material from this website without prior written consent. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.",
    },
    {
        id: 2,
        title: "User Account",
        text: "If you create an account on our website, you are responsible for maintaining the confidentiality of your account and password. You are responsible for all activities that occur under your account or password.",
    },
    {
        id: 3,
        title: "Products",
        text: "We strive to provide accurate descriptions and images of our products; however, we do not guarantee the accuracy, completeness, or reliability of the product information. Prices for our products are subject to change without notice.",
    },
    {
        id: 4,
        title: "Returns and Refunds",
        text: "Our returns and refunds policy outlines the procedures and conditions for returning products and obtaining refunds. Please refer to the specific policy available on our website.",
    },
    {
        id: 5,
        title: "Intellectual Property",
        text: "All trademarks reproduced on this website that are not the property of, or licensed to, Nycs Shoes are acknowledged on the website.",
    },
    {
        id: 6,
        title: "Limitation of Liability",
        text: "Nycs Shoes shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.",
    },
    {
        id: 7,
        title: "Links to Other Websites",
        text: "Our website may contain links to third-party websites. These links are provided for your convenience to provide further information. We have no control over the nature, content, and availability of those sites.",
    },
    {
        id: 8,
        title: "Changes to Terms of Use",
        text: "We reserve the right to modify these terms of use at any time. It is your responsibility to review these terms periodically for changes.",
    },
    {
        id: 9,
        title: "Governing Law",
        text: "These terms of use shall be governed by and construed in accordance with the laws of [Your Jurisdiction], and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of [Your Jurisdiction].",
    },
];