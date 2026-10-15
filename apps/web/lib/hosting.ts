export type HostingPlan = {
  slug: string
  title: string
  price: string
  short: string
  intro: string
  features: { title: string; text: string }[]
  specs: string[]
}

export const hostingPlans: HostingPlan[] = [
  {
    slug: "web",
    title: "Web Hosting",
    price: "$9",
    short: "Plesk-powered shared hosting for small sites.",
    intro:
      "Fast, reliable shared hosting managed through Plesk. Everything a small business site needs, with none of the server work.",
    features: [
      { title: "Plesk control panel", text: "Manage sites, email, databases and DNS from one dashboard." },
      { title: "Free SSL", text: "Automatic Let's Encrypt certificates on every site." },
      { title: "Daily backups", text: "One-click restore whenever you need it." },
    ],
    specs: ["10 GB SSD storage", "Unlimited bandwidth", "Free SSL", "5 email accounts", "Daily backups"],
  },
  {
    slug: "wordpress",
    title: "WordPress Hosting",
    price: "$24",
    short: "Managed with Plesk WordPress Toolkit.",
    intro:
      "WordPress hosting tuned for speed and security, with automatic updates and a staging site, powered by the Plesk WordPress Toolkit.",
    features: [
      { title: "WordPress Toolkit", text: "Update, clone, secure and manage every install in one place." },
      { title: "Staging", text: "Test changes safely before pushing them live." },
      { title: "Caching", text: "Server-level caching on NVMe storage for fast page loads." },
    ],
    specs: ["50 GB NVMe storage", "Automatic updates", "Staging site", "Malware scanning", "Daily backups"],
  },
  {
    slug: "vps",
    title: "VPS Hosting",
    price: "$49",
    short: "Dedicated resources, full root, Plesk included.",
    intro:
      "Your own virtual server with dedicated resources and full root access. Plesk is installed and configured for you, or we can manage the whole server.",
    features: [
      { title: "Full root", text: "Install anything you need with complete control." },
      { title: "Plesk included", text: "Licensed, installed and hardened by our team." },
      { title: "Managed option", text: "Add patching, monitoring and 24/7 support." },
    ],
    specs: ["4 vCPU / 8 GB RAM", "100 GB NVMe", "Full root access", "Plesk Obsidian licence", "99.99% uptime"],
  },
  {
    slug: "cloud",
    title: "Cloud Hosting",
    price: "$79",
    short: "Scale on demand with 99.99% uptime.",
    intro:
      "Resilient cloud infrastructure that grows with you. Add resources in minutes and pay only for what you use.",
    features: [
      { title: "Scale on demand", text: "Increase CPU, memory and storage without downtime." },
      { title: "High availability", text: "Redundant infrastructure across multiple zones." },
      { title: "Load balancing", text: "Handle traffic spikes without breaking a sweat." },
    ],
    specs: ["Elastic CPU and RAM", "Multi-zone redundancy", "Load balancer", "Snapshots and backups", "Plesk available"],
  },
]

export function getHostingPlan(slug: string) {
  return hostingPlans.find((p) => p.slug === slug)
}
