export type Service = {
  slug: string
  title: string
  short: string
  intro: string
  features: { title: string; text: string }[]
  includes: string[]
}

export const services: Service[] = [
  {
    slug: "web-design",
    title: "Web Development",
    short: "Fast, modern web applications and sites built to perform.",
    intro:
      "Clean, modern web applications and custom sites engineered around your business, built for speed, SEO, and conversions.",
    features: [
      { title: "Design", text: "Clean UX/UI layouts tailored specifically to your goals." },
      { title: "Build", text: "Modern stacks like Next.js, React, or WordPress Toolkit." },
      { title: "Launch", text: "Fast deployment onto your managed Plesk server with SSL." },
    ],
    includes: ["Mobile-first responsive design", "SEO foundations", "Fast load times", "Direct maintenance & updates"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    short: "iOS and Android apps, from build to app store.",
    intro:
      "We design, develop, and launch cross-platform apps for iOS and Android, including the secure cloud and Plesk backend APIs that power them.",
    features: [
      { title: "iOS & Android", text: "High performance apps from a clean unified codebase." },
      { title: "Backend & APIs", text: "Secure server endpoints, authentication, databases, and push alerts." },
      { title: "Store launch", text: "End-to-end assistance with App Store and Google Play publishing." },
    ],
    includes: [
      "UX and UI design",
      "Cross-platform mobile development",
      "API and server backend",
      "Push notifications",
      "Store submission assistance",
      "Ongoing app updates",
    ],
  },
  {
    slug: "plesk-management",
    title: "Plesk & Server Management",
    short: "Plesk setup, migrations and managed servers.",
    intro:
      "We set up, harden, and manage Plesk Obsidian on your VPS or dedicated server, giving you an effortless hosting experience without the sysadmin headache.",
    features: [
      { title: "Plesk setup", text: "Installation, licensing, and security hardening of Plesk Obsidian." },
      { title: "Migrations", text: "Zero-downtime transfer of websites, databases, and mailboxes from other hosts." },
      { title: "Managed servers", text: "Routine OS patching, monitoring, automated backups, and uptime checks." },
    ],
    includes: ["Plesk licence management", "WordPress Toolkit", "Automated backups", "Firewall & Fail2Ban", "Performance tuning"],
  },
  {
    slug: "dns-security",
    title: "DNS & Security",
    short: "Managed DNS, SSL certificates and security hardening.",
    intro:
      "Keep your site fast and protected with Anycast DNS routing, automated SSL certificates, and firewall protection.",
    features: [
      { title: "Anycast DNS", text: "Fast record resolution connecting your registrar to your server." },
      { title: "SSL certificates", text: "Automated Let's Encrypt and wildcard SSL installed and auto-renewed." },
      { title: "Protection", text: "Fail2Ban, firewall configuration, DDoS mitigation, and uptime alerts." },
    ],
    includes: ["DNS record management", "Wildcard SSL", "Firewall tuning", "24/7 uptime monitoring"],
  },
  {
    slug: "business-email",
    title: "Business Email",
    short: "Professional email on your own domain.",
    intro:
      "Reliable email on your domain with spam filtering, shared calendars and migration from your existing provider.",
    features: [
      { title: "Your domain", text: "name@yourbusiness.com on every device." },
      { title: "Spam & virus filtering", text: "Keeps your inbox clean and safe." },
      { title: "Migration", text: "We move your mailboxes with no lost messages." },
    ],
    includes: ["Microsoft 365 and Google Workspace", "Plesk-hosted mailboxes", "SPF, DKIM and DMARC setup", "Shared calendars"],
  },
]

export function getService(slug: string) {
  return services.find((s) => s.slug === slug)
}
