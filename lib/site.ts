export const site = {
  name: 'Lunails',
  tagline: 'Luxury Nail Home Studio',
  location: 'Union City, NJ',
  // Replace with the studio's Setmore booking page URL
  setmoreUrl: 'https://lunails.setmore.com',
  whatsappNumber: '15513004961',
  whatsappDisplay: '+1 (551) 300-4961',
  instagram: {
    handle: '@lunails.homestudio',
    url: 'https://www.instagram.com/lunails.homestudio',
  },
  personalInstagram: {
    handle: '@andrea_emilia95',
    url: 'https://instagram.com/andrea_emilia95',
  },
  tiktok: {
    handle: '@lunails.695',
    url: 'https://www.tiktok.com/@lunails.695',
  },
}

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  'Hola Lunails, quiero agendar una cita',
)}`

export const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]
