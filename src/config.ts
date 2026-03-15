export const LOGO_IMAGE = {
  enable: true,
  svg: false,
  width: 27,
  height: 27,
};

export const SITE = {
  website: "https://sirlisko.com/blog",
  base: "/blog",
  author: "sirlisko",
  profile: "https://sirlisko.com/",
  desc: "Luca's thoughts, stories, and ideas.",
  title: "Blog | sirlisko | Luca Lischetti",
  ogImage: "og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 10,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/sirlisko/blog/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/London", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  trailingSlash: "never",
} as const;
