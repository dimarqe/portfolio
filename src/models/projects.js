// To add a preview image for a project:
// 1. Take a screenshot of the live site (recommended size: 1280×800)
// 2. Save it to public/images/projects/ (e.g. negril-muay-thai.png)
// 3. Set the image field to '/images/projects/your-file.png'

export const projects = [
  {
    id: 1,
    title: 'Negril Muay Thai Gym',
    description:
      'Full website for a Muay Thai training gym based in Negril, Jamaica.',
    tech: ['React.js', 'PostgreSQL'],
    link: 'https://www.negrilmuaythaigym.com',
    image: `${import.meta.env.BASE_URL}images/projects/negril-muay-thai.png`,
    live: true,
    placeholder: false,
  },
  {
    id: 2,
    title: 'D&D Platform',
    description:
      'Multi-role logistics and container management platform for international shipping operations.',
    tech: ['Laravel', 'PHP', 'PostgreSQL'],
    link: 'https://dnd-sandbox.laravel.cloud/',
    image: `${import.meta.env.BASE_URL}images/projects/dnd-platform.png`,
    live: true,
    placeholder: false,
  },
  {
    id: 3,
    title: 'Jewels & Time',
    description:
      "E-commerce platform for a Jamaican based jewelry retailer.",
    tech: ['Laravel', 'PHP', 'PostgreSQL'],
    link: 'https://jewelsandtime-production.up.railway.app/',
    image: `${import.meta.env.BASE_URL}images/projects/jewels-and-time.png`,
    live: true,
    placeholder: false,
  },
]
