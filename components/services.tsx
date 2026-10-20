import { SectionHeading } from '@/components/section-heading'

const services = [
  {
    name: 'Manicure',
    description:
      'Detailed cuticle care, precise shaping, and a flawless polish finish for naturally beautiful hands.',
    detail: 'Classic · Gel polish',
  },
  {
    name: 'Softgel',
    description:
      'Lightweight full-cover extensions with a natural feel and a glossy, long-lasting finish.',
    detail: 'Extensions · Any shape',
  },
  {
    name: 'PolyGel',
    description:
      'The strength of acrylic with the comfort of gel. Durable, flexible, and odor-free.',
    detail: 'Strong · Lightweight',
  },
  {
    name: 'Dual System',
    description:
      'Perfectly uniform, sculpted extensions created with dual forms for a refined, even structure.',
    detail: 'Sculpted · Even shape',
  },
  {
    name: 'Nail Art',
    description:
      'From minimal gold details to hand-painted florals, chrome, and gems. Custom designs that feel like you.',
    detail: 'Custom · Hand-painted',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-secondary/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Services"
          title="Professional techniques, premium products"
          description="Every service uses professional-grade, salon-quality products for results that look stunning and last."
        />

        <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <li key={service.name} className="flex flex-col bg-card p-8 md:p-10">
              <span className="font-serif text-sm text-gold">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 text-3xl">{service.name}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-foreground/70">
                {service.detail}
              </p>
            </li>
          ))}
          <li className="flex flex-col justify-between bg-primary p-8 text-primary-foreground md:p-10">
            <div>
              <p className="font-serif text-sm text-gold">Ready?</p>
              <h3 className="mt-4 text-3xl">Find your perfect set</h3>
              <p className="mt-3 leading-relaxed text-primary-foreground/75">
                Not sure which service to choose? Book a consultation or message us for advice.
              </p>
            </div>
            <a
              href="#book"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
