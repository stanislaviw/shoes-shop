export type LinkType = {
    name: string;
    link: string;
};

export type TextDataType = {
    id: number;
    title: string;
    text: string;
}

export const EMAIL: string = "nyscshoes@gmail.com";

export const EMAIL_VALIDATION_PATTERN: RegExp =
    /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

export const MY_ACCOUNT_LINKS: LinkType[] = [
    {
        name: "Sign In",
        link: "/sign-in",
    },
];
export const HELP_LINKS: LinkType[] = [
    {
        name: "Shipping",
        link: "/shipping",
    },
];

export const ABOUT_LINKS: LinkType[] = [
    {
        name: "Articles",
        link: "/blog",
    },
];

export const LEGAL_LINKS: LinkType[] = [
    {
        name: "Terms of use",
        link: "/doc/tos",
    },
];

export const TERMS_OF_USE_DATA: TextDataType[] = [
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

export const SHIPPING_INFO_DATA: TextDataType[] = [
    {
        id: 1,
        title: "Delivery Services",
        text: "We utilize trusted and reputable courier services for both domestic and international shipping to ensure your orders reach you in top condition and on time.",
    },
    {
        id: 2,
        title: "Processing Time",
        text: "Orders are typically processed within 1-2 business days. During peak seasons, processing times may vary, but we always strive to dispatch your order as quickly as possible.",
    },
    {
        id: 3,
        title: "Shipping Costs",
        text: "Shipping costs are calculated at checkout based on the destination and the chosen shipping method. We offer competitive rates to make your shopping experience more cost-effective.",
    },
    {
        id: 4,
        title: "Domestic Shipping",
        text: `For orders within your country, we partner with local courier service for reliable and speedy delivery. You can expect your package to arrive within estimated timeframe.`,
    },
    {
        id: 5,
        title: "International Shipping",
        text: "Nysc Shoes proudly offers worldwide shipping. International orders are shipped via international courier service, providing a secure and efficient delivery service. Please note that customs duties and taxes may apply, and customers are responsible for these fees.",
    },
    {
        id: 6,
        title: "Order Tracking",
        text: "Once your order is shipped, you will receive a confirmation email with a tracking number. You can use this tracking number to monitor the status and location of your package.",
    },
    {
        id: 7,
        title: "Returns and Exchanges",
        text: "If, for any reason, you are not satisfied with your purchase, please refer to our returns and exchanges policy for information on how to initiate a return or exchange.",
    },
];