import Image from 'next/image'
import { Gem, HeartHandshake, Home } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const highlights = [
  {
    icon: Home,
    title: 'Cozy home studio',
    text: 'A private, relaxing space in Union City, NJ. No crowds, no rush.',
  },
  {
    icon: HeartHandshake,
    title: 'Personalized attention',
    text: 'One client at a time, with designs tailored to your style and nail health.',
  },
  {
    icon: Gem,
    title: 'Professional-grade products',
    text: 'Premium gels and tools, with strict hygiene and sanitized instruments.',
  },
]

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="/images/studio.png"
              alt="The cozy Lunails home studio with a manicure table and nail polish collection"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div
            className="absolute -bottom-4 -right-4 -z-10 size-full rounded-3xl border border-gold/40"
            aria-hidden="true"
          />
        </div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About Lunails"
            title="A boutique experience, right in Union City"
            description="Lunails was born from a love for detail and a belief that beauty appointments should feel like a little escape. In our home studio, you get the full focus of your artist, a calm atmosphere, and nails made to last."
          />

          <ul className="mt-10 flex flex-col gap-6">
            {highlights.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-blush text-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-sans text-base font-medium">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
