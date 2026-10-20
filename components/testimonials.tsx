import { Star } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const testimonials = [
  {
    quote:
      'The most relaxing nail appointment I have ever had. My Softgel set lasted over three weeks and still looked perfect.',
    name: 'Valeria M.',
    service: 'Softgel',
  },
  {
    quote:
      'She takes her time and really listens to what you want. The studio is spotless and so cozy. I will never go anywhere else.',
    name: 'Ashley R.',
    service: 'PolyGel',
  },
  {
    quote:
      'My nail art was beyond what I imagined, so delicate and clean. I get compliments every single day.',
    name: 'Daniela P.',
    service: 'Nail Art',
  },
]

export function Testimonials() {
  return (
    <section id="reviews" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Kind Words"
          title="Loved by our clients"
          description="Quality, care, and an atmosphere that keeps them coming back."
        />

        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name}>
              <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-8">
                <div className="flex text-gold" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 font-serif text-xl leading-snug">
                  {`“${t.quote}”`}
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between border-t border-border pt-5 text-sm">
                  <span className="font-medium">{t.name}</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {t.service}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
