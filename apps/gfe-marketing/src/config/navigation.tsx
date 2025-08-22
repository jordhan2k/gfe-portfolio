import { RiFacebookBoxLine, RiGithubLine, RiInstagramLine, RiTwitchLine, RiTwitterXLine, RiYoutubeLine } from "@remixicon/react";
import {
  NavLinkType,
  SocialLinkType,
} from "@repo/ui/src/components/marketing/footer-section";

const FOOTER_NAV_LINKS: NavLinkType[] = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
];
const HEADER_NAV_LINKS: NavLinkType[] = [
  { label: "Home", href: "/" },
  ...FOOTER_NAV_LINKS,
];

const FOOTER_SOCIAL_LINKS: SocialLinkType[] = [
  { icon: <RiYoutubeLine />, href: 'https://youtube.com', label: 'Youtube' },
  { icon: <RiInstagramLine />, href: 'https://instagram.com', label: 'Instagram' },
  { icon: <RiFacebookBoxLine />, href: 'https://facebook.com', label: 'Facebook' },
  { icon: <RiGithubLine />, href: 'https://github.com', label: 'Github' },
  { icon: <RiTwitterXLine />, href: 'https://twitter.com', label: 'Twitter' },

];

export { FOOTER_NAV_LINKS, HEADER_NAV_LINKS, FOOTER_SOCIAL_LINKS };
