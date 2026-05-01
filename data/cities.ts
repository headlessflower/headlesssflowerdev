export type CityLanding = {
  slug: string;
  name: string;
  county?: string;
  state: string;

  // Page content
  heroHeadline: string;
  heroSubheadline: string;
  neighborhoods: string[];
  industries: string[];

  // SEO
  seoTitle: string;
  seoDescription: string;
};

export const cities: Record<string, CityLanding> = {
  "east-los-angeles": {
    slug: "east-los-angeles",
    name: "East Los Angeles",
    county: "Los Angeles County",
    state: "CA",
    heroHeadline: "Web Design in East Los Angeles That Turns Local Traffic Into Customers",
    heroSubheadline:
      "Managed websites, lead capture, and conversion-focused systems for businesses in and around the 90022 area.",
    neighborhoods: [
      "East Los Angeles",
      "Boyle Heights",
      "Monterey Park",
      "Montebello",
      "Commerce",
    ],
    industries: [
      "Local services",
      "Home services",
      "Professional services",
      "Beauty and wellness",
      "Restaurants",
    ],
    seoTitle: "Web Design East Los Angeles | Headless Flower",
    seoDescription:
      "Headless Flower builds managed websites, lead capture flows, and conversion-focused pages for East Los Angeles businesses serving the 90022 area.",
  },

  "los-angeles": {
    slug: "los-angeles",
    name: "Los Angeles",
    county: "Los Angeles County",
    state: "CA",
    heroHeadline: "Web Design & Development in Los Angeles That Converts",
    heroSubheadline:
      "High-performance Nuxt + Tailwind sites built to generate leads, bookings, and real growth.",
    neighborhoods: [
      "Silver Lake",
      "Echo Park",
      "Highland Park",
      "Downtown LA",
      "Mid-City",
    ],
    industries: [
      "Creative studios",
      "Local services",
      "Boutiques",
      "Restaurants",
      "Nonprofits",
    ],
    seoTitle: "Web Design Los Angeles | Headless Flower",
    seoDescription:
      "Headless Flower builds fast, SEO-ready Nuxt websites for Los Angeles businesses. Mobile-first design, clean UX, and conversion-focused landing pages.",
  },

  pasadena: {
    slug: "pasadena",
    name: "Pasadena",
    county: "Los Angeles County",
    state: "CA",
    heroHeadline: "Modern Web Design in Pasadena for Professional Brands",
    heroSubheadline:
      "A fast, polished website that builds trust and turns visitors into inquiries.",
    neighborhoods: [
      "Old Town",
      "East Pasadena",
      "Bungalow Heaven",
      "South Pasadena",
      "Altadena",
    ],
    industries: [
      "Professional services",
      "Wellness",
      "Boutiques",
      "Restaurants",
      "Consultants",
    ],
    seoTitle: "Web Design Pasadena | Headless Flower",
    seoDescription:
      "Nuxt + Tailwind web design for Pasadena businesses. Performance, SEO foundations, and conversion-focused layouts.",
  },

  "santa-monica": {
    slug: "santa-monica",
    name: "Santa Monica",
    county: "Los Angeles County",
    state: "CA",
    heroHeadline: "Nuxt Web Development in Santa Monica for Startups & Brands",
    heroSubheadline:
      "Speed, UX, and SEO built-in — ideal for teams that care about performance.",
    neighborhoods: [
      "Downtown",
      "Ocean Park",
      "Pico",
      "North of Montana",
      "Wilshire",
    ],
    industries: [
      "Startups",
      "SaaS",
      "Marketing teams",
      "Media",
      "E-commerce brands",
    ],
    seoTitle: "Web Design Santa Monica | Headless Flower",
    seoDescription:
      "Headless Flower builds high-performance Nuxt websites in Santa Monica. SEO-ready, mobile-first, and conversion-driven.",
  },

  "long-beach": {
    slug: "long-beach",
    name: "Long Beach",
    county: "Los Angeles County",
    state: "CA",
    heroHeadline: " Web Design in Long Beach That Gets Results",
    heroSubheadline:
      "Clean design, fast load times, and local SEO structure to help you win more customers.",
    neighborhoods: [
      "Belmont Shore",
      "Bixby Knolls",
      "Downtown",
      "Eastside",
      "Naples",
    ],
    industries: [
      "Local services",
      "Restaurants",
      "Fitness",
      "Trades",
      "Creative businesses",
    ],
    seoTitle: "Web Design Long Beach | Headless Flower",
    seoDescription:
      "Web design for Long Beach small businesses. Nuxt performance, strong UX, and SEO foundations built in.",
  },

  burbank: {
    slug: "burbank",
    name: "Burbank",
    county: "Los Angeles County",
    state: "CA",
    heroHeadline: "Web Design in Burbank for Creatives & Production Teams",
    heroSubheadline:
      "Portfolio-ready design and performance-focused builds for media-forward businesses.",
    neighborhoods: [
      "Downtown Burbank",
      "Magnolia Park",
      "Rancho Adjacent",
      "Media District",
    ],
    industries: [
      "Production",
      "Freelancers",
      "Studios",
      "Agencies",
      "Creative services",
    ],
    seoTitle: "Web Design Burbank | Headless Flower",
    seoDescription:
      "Nuxt + Tailwind web design in Burbank for creatives and production companies. Fast, modern, and conversion-ready.",
  },

};

export const citySlugs = Object.keys(cities);

export function getCityBySlug(slug: string) {
  return cities[slug];
}
