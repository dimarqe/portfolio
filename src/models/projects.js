// To add a preview image for a project:
// 1. Take a screenshot of the live site (recommended size: 1280×800)
// 2. Save it to public/images/projects/ (e.g. negril-muay-thai.png)
// 3. Set the image field to '/images/projects/your-file.png'

export const projects = [
  {
    id: 1,
    title: 'Negril Muay Thai Gym',
    description:
      'Full website for a Muay Thai training gym based in Negril, Jamaica. Covers class information, trainer profiles, and a contact section for prospective members — helping the gym establish its online presence and connect with the local community.',
    tech: ['React.js', 'CSS'],
    link: 'https://www.negrilmuaythaigym.com',
    image: '/images/projects/negril-muay-thai.png',
    live: true,
    placeholder: false,
  },
  {
    id: 2,
    title: 'D&D Platform',
    description:
      'Multi-role logistics and container management platform for international shipping operations. Features shipment tracking with milestone progression, EDI file imports, payment verification, exemption requests, and a full client portal — serving agents, consignees, and administrators.',
    tech: ['Laravel', 'PHP', 'Ziggy.js'],
    link: 'https://dnd-sandbox.laravel.cloud/',
    image: '/images/projects/dnd-platform.png',
    live: true,
    placeholder: false,
  },
  {
    id: 3,
    title: 'Jewels & Time',
    description:
      "E-commerce platform for Jamaica's premier duty-free luxury jewelry retailer. Built to provide an elegant shopping experience for tourists and locals browsing high-end timepieces and jewelry.",
    tech: ['Laravel', 'PHP'],
    link: 'https://jewelsandtime-production.up.railway.app/',
    image: '/images/projects/jewels-and-time.png',
    live: true,
    placeholder: false,
  },
]
