// Imagery comes from the Axonix Framer template (axonix.framer.ai) and is
// loaded from its host — license or replace these before going live.
const img = (id: string) => `https://framerusercontent.com/images/${id}`;

export const BRAND = "Revent.ai";

export const CONTACT_EMAIL = "support@revent.ai";

export const images = {
  heroBg: img("CXf1VtliCLhgE72rnxykPb20LI8.png"),
  hands: img("G0SpZp0WpTBVplZfXSIJemcW0o.png"),
  cubes: img("MSeK5W7fBYbdR7MTmXOXfO9sQE8.png"),
  handshake: img("AeD4G2F6xtDTfPZxF3cBhE7iaE.png"),
  footerBg: img("u57K7Fq0qMUmxKlucOIkzn6tRPk.png"),
};

export const navLinks = [
  { href: "#process", label: "How We Work" },
  { href: "#solutions", label: "Solutions" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#why-us", label: "Why Us" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const industries = [
  "Textile Trading",
  "Cement Manufacturing",
  "Logistics",
  "Shipping",
  "EXIM Facilitation",
];

export const stats = [
  { value: "3", suffix: "+", label: "Industries served" },
  { value: "3", suffix: "", label: "Countries delivered in" },
  { value: "3", suffix: "", label: "Platforms: desktop, Android, iOS" },
];

export const solutions = [
  {
    icon: img("LzPBtaHdymAROYB08IBc75GUdqY.svg"),
    image: "/mockups/ai-operations.svg",
    title: "Business operations",
    description:
      "Track information from an operating lens, not an accounting lens. Automate quotations, purchase orders, invoices and receipts.",
  },
  {
    icon: img("ZQ9LRkDUzuQmxgdHJQPqanCyMDI.svg"),
    image: "/mockups/ai-inventory.svg",
    title: "Inventory and workflow management",
    description:
      "Track everything from raw materials to finished goods, with no duplicate billing or missing inventory. AI-generated product images for sales.",
  },
  {
    icon: img("iQSfPi1dWWpgZ9D8UHbgEo7DyM.svg"),
    image: "/mockups/ai-workforce.svg",
    title: "Workforce applications",
    description:
      "Simple apps for employees to track ongoing orders and work in progress.",
  },
  {
    icon: img("S7cumS8E2Yglc5jE9tHBvTzuk.svg"),
    image: "/mockups/ai-reporting.svg",
    title: "Management reporting",
    description:
      "Dashboards for key business metrics, client updates and anything that makes your business tick.",
  },
];

export const automations = [
  "Quotations",
  "Purchase orders",
  "Invoices",
  "Delivery documents",
  "Receipts",
  "Product cataloguing",
  "Sub inventory management",
  "Order tracking",
  "Dashboards",
];

export const caseStudies = [
  {
    name: "Textile Business",
    location: "Mumbai, India",
    image: "/mockups/case-textile.svg",
    description:
      "Custom MIS for textile traders.",
    challenges: [
      "Raw material accounting",
      "Design management",
      "Packaging & documentation",
      "Order tracking",
      "Customer invoicing",
    ],
  },
  {
    name: "Cement Manufacturers",
    location: "Senegal, Africa",
    image: "/mockups/case-cement.svg",
    description:
      "Custom MIS for a cement manufacturing plant.",
    challenges: [
      "Inventory formulation",
      "Compliance documentation",
      "Plant scheduling",
      "Capacity planning",
      "Customer flow management",
    ],
  },
  {
    name: "EXIM Facilitators",
    location: "Dubai, UAE",
    image: "/mockups/case-exim.svg",
    description:
      "Custom MIS for an EXIM facilitator.",
    challenges: [
      "Central container tracking",
      "Export documentation",
      "Bookings & fulfillment",
      "Order pipeline management",
    ],
  },
];

export const reasons = [
  {
    icon: img("hWQHlGPYF3FrI8QTwSLZvjuMQ.svg"),
    title: "SME-MSME specific challenges",
    description:
      "Owner-managed businesses need information that's easy to capture and organise, for quick decision making.",
  },
  {
    icon: img("niTgfBhce8UUqjXS5klg4rOJg.svg"),
    title: "Unique problems",
    description:
      "We shadow your business to build systems that solve real problems, not add to the workload.",
  },
  {
    icon: img("XzS2vY4d5PCcZuXHrpjUaLD0.svg"),
    title: "Employee first UI",
    description:
      "Interfaces anyone on the floor can use: multiple languages, near zero data entry and image-based reconfirmation. No separate data entry clerk needed.",
  },
];

export const steps = [
  {
    title: "Understand",
    description:
      "We shadow your team to understand existing workflows, identify challenges, and uncover opportunities for improvement.",
  },
  {
    title: "Design",
    description:
      "We design a tailored solution while minimising disruption to your day-to-day operations.",
  },
  {
    title: "Test",
    description:
      "We test the system against real-world scenarios to ensure it's ready for everyday use.",
  },
  {
    title: "Implement",
    description:
      "We work alongside your team during rollout, providing hands-on training to ensure a smooth transition.",
  },
  {
    title: "Refine",
    description:
      "We continuously evolve the software to accommodate changing workflows, new requirements, and business growth.",
  },
];

export const testimonials = [
  {
    quote:
      "We were running ₹40 Cr in turnover on 18 Excel sheets that kept crashing and corrupting. Revent shadowed our clerks for 3 days and built an MIS so intuitive that our floor team logs daily rolls in Hindi. Dispatch delays dropped to zero.",
    highlight: "Dispatch delays dropped to zero in month one",
    author: "Rajesh Singhania",
    role: "Managing Director",
    company: "Singhania Textiles",
    location: "Mumbai, India",
    industry: "Textile Trading",
    metric: "4 hrs saved daily on reconciliation",
    rating: 5,
    initials: "RS",
  },
  {
    quote:
      "Our manufacturing plant had blind spots in raw material formulation and compliance logs for audits. Revent automated recipes and truck weight receipts right at the weighbridge. Our inventory reconciliation is now real-time instead of month-end.",
    highlight: "Real-time inventory instead of month-end guesswork",
    author: "Abdoulaye Diallo",
    role: "VP of Plant Operations",
    company: "West Coast Cement Co.",
    location: "Dakar, Senegal",
    industry: "Manufacturing",
    metric: "100% audit-ready compliance logs",
    rating: 5,
    initials: "AD",
  },
  {
    quote:
      "Tracking 200+ container bookings across shipping lines used to take three dedicated coordinators sending WhatsApp updates. Revent built us a unified container tracking and customs documentation dashboard. Clearance is two days faster.",
    highlight: "Turnaround is 2 days faster across all shipments",
    author: "Farhan Al-Mansoori",
    role: "Head of Logistics",
    company: "Apex Maritime Cargo",
    location: "Dubai, UAE",
    industry: "EXIM & Logistics",
    metric: "2 days faster customs clearance",
    rating: 5,
    initials: "FA",
  },
];
