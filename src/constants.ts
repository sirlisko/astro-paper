import type { Props } from "astro";
import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconLinkedin from "@/assets/icons/IconLinkedin.svg";
import IconHome from "@/assets/icons/IconHome.svg";
import { SITE } from "@/config";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

export const SOCIALS: Social[]  = [
  {
    name: "Home",
    href: "https://sirlisko.com",
    linkTitle: ` ${SITE.author} on Home`,
    icon: IconHome,
  },
  {
    name: "Github",
    href: "https://github.com/sirlisko",
    linkTitle: ` ${SITE.author} on Github`,
    icon: IconGitHub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/lucalischetti",
    linkTitle: `${SITE.author} on LinkedIn`,
    icon: IconLinkedin,
  },
  {
    name: "Mail",
    href: "mailto:luca@sirlisko.com",
    linkTitle: `Send an email to ${SITE.author}`,
    icon: IconMail,

  },
] as const;

export const SHARE_LINKS: Social[] = [

] as const;
