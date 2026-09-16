export interface NavLink {
  title: string
  description: string
  image: string
  href: string
}

export interface NavSection {
  id: string
  label: string
  href: string
  title: string
  description: string
  cta: { label: string; href: string }
  links: NavLink[]
}

export const NAV_SECTIONS: NavSection[] = [
  {
    id: "about",
    label: "About",
    href: "/about/mission-vision",
    title: "Building Excellence",
    description:
      "Our commitment to quality and innovation drives everything we do — from our skilled professionals to our project managers.",
    cta: { label: "Discover Our Story", href: "/about/mission-vision" },
    links: [
      {
        title: "Mission & Vision",
        description: "World-class infrastructure that stands the test of time.",
        image: "/mega-menu-mission.jpg",
        href: "/about/mission-vision",
      },
      {
        title: "Leadership Team",
        description: "The people driving progress and excellence in every project.",
        image: "/mega-menu-leadership.jpg",
        href: "/about/leadership",
      },
      {
        title: "Why Durabuild",
        description: "Quality, innovation, and trust — the pillars of our work.",
        image: "/mega-menu-why-us.jpg",
        href: "/about/why-durabuild",
      },
    ],
  },
  {
    id: "sectors",
    label: "Sectors",
    href: "/sectors",
    title: "Industry Sectors",
    description:
      "Specialized construction and infrastructure solutions across diverse sectors, from urban development to advanced technology.",
    cta: { label: "Explore Our Sectors", href: "/sectors" },
    links: [
      {
        title: "Urban Infrastructure",
        description: "Roads, drainage systems, and civic infrastructure for modern cities.",
        image: "/mega-menu-infrastructure.jpg",
        href: "/sectors/urban-infrastructure",
      },
      {
        title: "Advanced Technology",
        description: "IT parks, data centers, and technology hubs.",
        image: "/mega-menu-construction.jpg",
        href: "/sectors/advanced-technology",
      },
      {
        title: "Transportation",
        description: "Highways, bridges, and metro systems connecting communities.",
        image: "/mega-menu-infra-projects.jpg",
        href: "/sectors/transportation",
      },
      {
        title: "Water",
        description: "Treatment plants, reservoirs, and distribution networks.",
        image: "/mega-menu-water.jpg",
        href: "/sectors/water",
      },
    ],
  },
  {
    id: "services",
    label: "Services",
    href: "/services",
    title: "Comprehensive Solutions",
    description:
      "From residential buildings to large-scale infrastructure, we provide end-to-end construction solutions tailored to your needs.",
    cta: { label: "Explore All Services", href: "/services" },
    links: [
      {
        title: "Architecture & Planning",
        description: "Architectural planning and structural design.",
        image: "/modern-architectural-blueprints-design-planning.jpg",
        href: "/services/architecture-planning",
      },
      {
        title: "Construction Materials",
        description: "Quality cement, steel, and finishing materials.",
        image: "/construction-materials-cement-steel-supplies.jpg",
        href: "/services/construction-materials",
      },
      {
        title: "Construction Services",
        description: "Residential, commercial, and industrial builds.",
        image: "/construction-site-building-workers-machinery.jpg",
        href: "/services/construction-services",
      },
      {
        title: "Electrical & Technical",
        description: "Electrical and technical systems for modern buildings.",
        image: "/electrical-wiring-technical-infrastructure-panels.jpg",
        href: "/services/electrical-technical",
      },
      {
        title: "Engineering Services",
        description: "Precision engineering with quality execution.",
        image: "/engineering-structural-design-precision-measuremen.jpg",
        href: "/services/engineering-services",
      },
      {
        title: "Infrastructure Development",
        description: "Roads, drainage, and public infrastructure.",
        image: "/road-construction-infrastructure-development-highw.jpg",
        href: "/services/infrastructure-development",
      },
      {
        title: "Interior & Exterior",
        description: "Painting, plastering, POP, and false ceilings.",
        image: "/interior-design-modern-living-space-decoration.jpg",
        href: "/services/interior-exterior",
      },
      {
        title: "Labour & Workforce",
        description: "Skilled workforce for construction projects.",
        image: "/construction-workers-skilled-workforce-safety-gear.jpg",
        href: "/services/labour-workforce",
      },
      {
        title: "Material Supply",
        description: "Reliable supply for every type of project.",
        image: "/building-materials-supply-warehouse-inventory.jpg",
        href: "/services/material-supply",
      },
      {
        title: "Project Management",
        description: "Planning, monitoring, and on-time delivery.",
        image: "/project-management-planning-blueprint-coordination.jpg",
        href: "/services/project-management",
      },
      {
        title: "Renovation & Maintenance",
        description: "Repair, renovation, and long-term upkeep.",
        image: "/renovation-remodeling-maintenance-repair-work.jpg",
        href: "/services/renovation-maintenance",
      },
      {
        title: "Roads & Bridges",
        description: "Roads, highways, and bridge construction.",
        image: "/bridge-construction-highway-roads-infrastructure.jpg",
        href: "/services/roads-bridges",
      },
    ],
  },
  {
    id: "projects",
    label: "Projects",
    href: "/projects",
    title: "Landmark Projects",
    description:
      "Diverse projects across residential, commercial, and infrastructure sectors, each delivered with precision.",
    cta: { label: "View All Projects", href: "/projects" },
    links: [
      {
        title: "Residential Developments",
        description: "Modern housing complexes and luxury apartments.",
        image: "/mega-menu-residential.jpg",
        href: "/projects/residential",
      },
      {
        title: "Commercial Buildings",
        description: "Functional, striking spaces for businesses to thrive.",
        image: "/mega-menu-commercial.jpg",
        href: "/projects/commercial",
      },
      {
        title: "Infrastructure Works",
        description: "Roads, bridges, and government contracts.",
        image: "/mega-menu-infra-projects.jpg",
        href: "/projects/infrastructure",
      },
    ],
  },
  {
    id: "csr",
    label: "CSR",
    href: "/csr",
    title: "Corporate Social Responsibility",
    description:
      "Meaningful initiatives that empower communities, support education, promote health, and encourage sports.",
    cta: { label: "Explore Our CSR Initiatives", href: "/csr" },
    links: [
      {
        title: "Skill Building & Livelihood",
        description: "Vocational training and livelihood opportunities.",
        image: "/vocational-training-skill-development-workshop.jpg",
        href: "/csr/skill-building",
      },
      {
        title: "Education",
        description: "Scholarships and learning resources for children.",
        image: "/children-in-classroom-education-learning.jpg",
        href: "/csr/education",
      },
      {
        title: "Health & Hygiene",
        description: "Health awareness and sanitation facilities.",
        image: "/health-hygiene-awareness-community-program.jpg",
        href: "/csr/health-hygiene",
      },
      {
        title: "India Run Sports",
        description: "Marathons, fitness drives, and athlete support.",
        image: "/india-run-sports.jpg",
        href: "/csr/india-run-sports",
      },
    ],
  },
  {
    id: "contact",
    label: "Contact",
    href: "/contact",
    title: "Let's Build Together",
    description:
      "Ready to start your project? Get in touch for a free consultation, site visit, and detailed quotation.",
    cta: { label: "Contact Us Today", href: "/contact" },
    links: [
      {
        title: "Get a Quote",
        description: "Transparent pricing with no hidden costs.",
        image: "/mega-menu-quote.jpg",
        href: "/contact",
      },
      {
        title: "Visit Our Office",
        description: "Dehradun, Uttarakhand — visit or book an appointment.",
        image: "/mega-menu-office.jpg",
        href: "/contact",
      },
      {
        title: "24/7 Support",
        description: "Reach us by phone, WhatsApp, or email.",
        image: "/mega-menu-support.jpg",
        href: "/contact",
      },
    ],
  },
]

export const CONTACT = {
  phones: ["+91 70003 29644"],
  email: "support@durainfra.com",
  address: ["Maruti Vihar, Raipur", "Dehradun, Uttarakhand 248008"],
}
