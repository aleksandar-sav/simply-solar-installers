export const site = {
  name: "Simply Solar Installers",
  shortName: "Simply Solar",
  tagline: "Sub-contract solar installation to MCS guidelines",
  url: "https://simplysolarinstallers.co.uk",
  email: "jack@simplysolarinstallers.co.uk",
  phone: "+44 7936 042036",
  phoneDisplay: "07936 042036",
  whatsapp: "https://wa.me/447936042036",
  whatsappText:
    "https://wa.me/447936042036?text=Hi%20Jack%2C%20I%27d%20like%20to%20talk%20about%20sub-contract%20solar%20installation%20for%20my%20company.",
  baseLocation: "Hertfordshire, UK",
  founder: "Jack",
  areas: [
    "Hertfordshire",
    "London",
    "Essex",
    "Bedfordshire",
    "Cambridgeshire",
    "Buckinghamshire",
    "Surrey",
    "Kent",
    "Nationwide across England",
  ],
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const painPoints = [
  {
    title: "Hiring in-house teams is a nightmare",
    body: "Contracts, sick pay, liability insurance, training costs — and half the time they still can't do the job to MCS standard. You're running a solar company, not a recruitment agency.",
  },
  {
    title: "One injury on site and you're exposed",
    body: "The liability that comes with in-house installers is a risk no solar company in the UK should be taking. One incident can cost you everything — your accreditation, your reputation, your business.",
  },
  {
    title: "Bad installs damage your brand, not theirs",
    body: "A botched residential or commercial solar installation reflects on you. Your reputation is on the line every time someone goes up on that roof.",
  },
  {
    title: "You're turning down jobs you can't fulfil",
    body: "Every installation you can't take on is revenue walking out the door — and straight to a competitor.",
  },
  {
    title: "Reliable MCS installers are hard to find",
    body: "Finding certified solar installers in Hertfordshire is harder than it should be. By the time they're trained to standard, half of them have left anyway.",
  },
];

export const services = [
  {
    title: "Residential solar panel installation",
    body: "All roof types across Hertfordshire, London and surrounding counties.",
    image: "/images/residential-install.jpg",
    alt: "Black solar panels installed on a residential tiled roof in Hertfordshire",
  },
  {
    title: "Commercial solar installation",
    body: "Warehouses, offices, business parks and industrial units across England.",
    image: "/images/projects/p25.jpg",
    alt: "Commercial solar PV array installed across a large industrial roof in bright sun",
  },
  {
    title: "Solar panel bird proofing",
    body: "Mesh skirting clipped around the array to stop pigeons nesting, fouling and damaging cables in the gap beneath the panels.",
    image: "/images/bird-work.jpg",
    alt: "Black anti-bird mesh fitted around the edge of a solar panel array to stop birds nesting underneath",
  },
  {
    title: "Ongoing solar maintenance contracts",
    body: "Another revenue stream for your business, with zero effort on your end.",
    image: "/images/install-team.jpg",
    alt: "Solar installer measuring a roof during a maintenance visit",
  },
  {
    title: "Work completed to MCS guidelines",
    body: "Every single installation signed off to MCS standards, no exceptions.",
    image: "/images/finished-house.jpg",
    alt: "Completed home with a professionally installed solar system",
  },
];

export const testimonials = [
  {
    quote:
      "We were drowning in installation problems. Cancellations, no-shows, a lad who went off sick for three months and left us in the lurch with six jobs booked. We brought Simply Solar in on a trial and honestly haven't looked back. Proper professional outfit, everything done to MCS standards every time, and Jack actually answers his phone. Rare as anything in this industry.",
    name: "D. Mitchell",
    role: "Operations Director, Bright Arc Solar",
    location: "Leeds",
  },
  {
    quote:
      "We sell solar, we don't install it — that's always been our model. Finding a reliable sub-contractor who works to MCS standards and could keep up with our volume without embarrassing us in front of clients was genuinely difficult until we found Simply Solar. Eighteen months in, not one complaint from a customer about the installation side. That's all I needed.",
    name: "S. Patel",
    role: "Managing Director, Greenlight Energy Solutions",
    location: "Manchester",
  },
  {
    quote:
      "Had a nightmare with our previous installation team — two bad jobs in a row, one client threatening to go to Trading Standards. Brought Jack in to clean up the mess and then just kept him on. The quality is consistent, the paperwork is always in order, and they leave every job tidy. Clients have actually commented on it. Wouldn't use anyone else now.",
    name: "T. Clarke",
    role: "Director, SunRoute Solar",
    location: "Kent",
  },
];

export type ProjectCategory = "Residential" | "Commercial";

export const projects: {
  src: string;
  alt: string;
  category: ProjectCategory;
}[] = [
  { src: "/images/projects/p01.jpg", category: "Residential", alt: "Black solar panels on a tiled house roof at golden hour" },
  { src: "/images/projects/p17.jpg", category: "Residential", alt: "All-black solar panel array on a tiled roof against a dramatic sky" },
  { src: "/images/projects/p03.jpg", category: "Commercial", alt: "Commercial solar PV array on a metal industrial roof in bright sun" },
  { src: "/images/projects/p13.jpg", category: "Residential", alt: "Black solar panels installed on a tiled roof under a blue sky" },
  { src: "/images/projects/p10.jpg", category: "Commercial", alt: "Long commercial solar panel run on an industrial roof against blue sky" },
  { src: "/images/projects/p02.jpg", category: "Residential", alt: "Full-width solar panel array along a red tiled roof" },
  { src: "/images/projects/p06.jpg", category: "Commercial", alt: "Installer fitting solar panels on a large commercial metal roof" },
  { src: "/images/projects/p15.jpg", category: "Residential", alt: "Completed home with solar panels on the rear extension roof" },
  { src: "/images/projects/p11.jpg", category: "Commercial", alt: "Commercial rooftop solar installation under a clear blue sky" },
  { src: "/images/projects/p08.jpg", category: "Residential", alt: "Black solar panels on a slate roof beneath dramatic clouds" },
  { src: "/images/projects/p05.jpg", category: "Commercial", alt: "Flat-roof mounted solar panel array against a blue sky" },
  { src: "/images/projects/p16.jpg", category: "Residential", alt: "Black solar panels on a red tiled roof with a chimney" },
  { src: "/images/projects/p07.jpg", category: "Commercial", alt: "Solar panels on a metal commercial roof backed by tall trees" },
  { src: "/images/projects/p04.jpg", category: "Residential", alt: "Black solar panels neatly installed on a grey tiled roof" },
  { src: "/images/projects/p14.jpg", category: "Commercial", alt: "Commercial solar array on a metal roof beside a business unit" },
  { src: "/images/projects/p12.jpg", category: "Residential", alt: "Aerial view of solar panels installed on a bungalow roof" },
  { src: "/images/projects/p09.jpg", category: "Residential", alt: "Solar panels on a tiled residential roof" },
  { src: "/images/projects/p18.jpg", category: "Residential", alt: "Solar panels on a tiled house roof under a clear blue sky" },
  { src: "/images/projects/p25.jpg", category: "Commercial", alt: "Commercial solar array on an industrial roof in bright winter sun" },
  { src: "/images/projects/p20.jpg", category: "Residential", alt: "All-black solar panels installed on a red tiled roof" },
  { src: "/images/projects/p26.jpg", category: "Commercial", alt: "Installer fitting solar panels on a large commercial metal roof" },
  { src: "/images/projects/p24.jpg", category: "Residential", alt: "Black solar panels on a brick house roof against a blue sky" },
  { src: "/images/projects/p28.jpg", category: "Commercial", alt: "Commercial solar panels on a metal roof beneath a bright blue sky" },
  { src: "/images/projects/p21.jpg", category: "Residential", alt: "Full row of all-black solar panels on a red tiled roof" },
  { src: "/images/projects/p27.jpg", category: "Commercial", alt: "Commercial solar array on an industrial roof backed by trees" },
  { src: "/images/projects/p19.jpg", category: "Residential", alt: "Black solar panels on a tiled roof under blue sky" },
  { src: "/images/projects/p30.jpg", category: "Commercial", alt: "Solar panels on a commercial metal roof overlooking business units" },
  { src: "/images/projects/p22.jpg", category: "Residential", alt: "Black solar panels neatly installed across a red tiled roof" },
  { src: "/images/projects/p29.jpg", category: "Commercial", alt: "Large commercial solar PV array on an industrial roof" },
  { src: "/images/projects/p23.jpg", category: "Residential", alt: "Black solar panels on a tiled roof beside a brick house" },
];

export const whyPoints = [
  {
    title: "Solar specialists, not generalists",
    body: "Jack has been in solar installation since he was 16. It's all he's ever done — and he's built a team with the same obsession for quality.",
  },
  {
    title: "Every roof type, every scale",
    body: "From complex residential roofs across Hertfordshire to large commercial arrays across the UK — we've seen it all and know how to handle it.",
  },
  {
    title: "Every job to MCS guidelines",
    body: "Every install is completed in line with MCS guidelines, supporting your clients' Smart Export Guarantee applications and protecting your company's reputation. No exceptions.",
  },
  {
    title: "Completely white-label",
    body: "We work under your brand, so your customers never know the difference. What they know is the job was done right.",
  },
];

export const faqs = [
  {
    q: "Do you work to MCS standards?",
    a: "Yes — every installation Simply Solar Installers completes is carried out in line with MCS guidelines, supporting your clients' Smart Export Guarantee applications and the relevant UK government incentives.",
  },
  {
    q: "Do you work white-label?",
    a: "Absolutely. We work entirely under your brand. Your clients will never know we're not your in-house team.",
  },
  {
    q: "What areas do you cover?",
    a: "We're based in Hertfordshire and cover the whole of England — including London, Essex, Bedfordshire, Cambridgeshire, Buckinghamshire, Surrey, Kent and nationwide.",
  },
  {
    q: "How quickly can you book an installation?",
    a: "Typically within 48 hours of receiving job details. Contact Jack directly for availability.",
  },
  {
    q: "What types of solar installation do you handle?",
    a: "Residential solar panels, commercial solar PV, bird proofing and ongoing maintenance — all roof types, all property sizes.",
  },
];
