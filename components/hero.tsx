import Image from 'next/image'
import { ArrowRight, Star } from 'lucide-react'
import { site, whatsappUrl } from '@/lib/site'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-10 md:grid-cols-2 md:gap-14 md:pb-24 md:pt-16">
        <div className="order-2 md:order-1">
          <p className="text-xs uppercase tracking-[0.35em] text-gold">
            {site.tagline} &middot; {site.location}
          </p>
          <h1 className="mt-5 text-balance text-5xl leading-[1.05] md:text-7xl">
            Luxury nails, <em className="text-gold">crafted just for you.</em>
          </h1>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
            One client at a time. Professional-grade products, meticulous technique, and a calm,
            private studio where every detail is about you.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#book"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Book Your Appointment
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-7 py-4 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Message on WhatsApp
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4 border-t border-border pt-6">
            <div className="flex text-gold" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">5.0 rating</span> from happy clients in
              Hudson County
            </p>
          </div>
        </div>

        <div className="relative order-1 md:order-2">
          <div
            className="absolute -right-8 -top-8 hidden size-56 rounded-full bg-blush md:block"
            aria-hidden="true"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-3xl border border-gold/30 p-2">
            <div className="relative size-full overflow-hidden rounded-t-full rounded-b-2xl">
              <Image
                src="/images/hero.png"
                alt="Elegant almond nails in blush pink with delicate gold accents"
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-5 left-4 rounded-2xl bg-card px-5 py-4 shadow-lg shadow-foreground/5 md:-left-8">
            <p className="font-serif text-2xl leading-none">Private</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              1-on-1 appointments
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
