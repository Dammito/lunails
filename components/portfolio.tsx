import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'
import { site } from '@/lib/site'
import { cn } from '@/lib/utils'

const works = [
  { src: '/images/gallery-1.png', alt: 'French manicure with fine gold tips', label: 'Gold French', tall: true },
  { src: '/images/gallery-2.png', alt: 'Nude coffin nails with white flower art and pearls', label: 'Floral Art' },
  { src: '/images/gallery-3.png', alt: 'Almond nails with pearl chrome glaze', label: 'Pearl Chrome' },
  { src: '/images/gallery-4.png', alt: 'Beige nude oval nails with gold dot accent', label: 'Soft Nude' },
  { src: '/images/gallery-5.png', alt: 'Milky white stiletto nails with gold foil marble art', label: 'Gold Marble', tall: true },
  { src: '/images/gallery-6.png', alt: 'Blush pink ombre square nails with rhinestones', label: 'Blush Ombre' },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-secondary/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Portfolio"
          title="Recent sets from the studio"
          description="Clean, aesthetic designs, from timeless nudes to statement nail art."
        />

        <ul className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[240px] md:grid-cols-3 md:gap-4">
          {works.map((work) => (
            <li
              key={work.src}
              className={cn(
                'group relative overflow-hidden rounded-2xl',
                work.tall && 'row-span-2',
              )}
            >
              <Image
                src={work.src}
                alt={work.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/60 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <p className="font-serif text-lg text-background">{work.label}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline decoration-gold underline-offset-8 transition-colors hover:text-gold"
          >
            See more on Instagram {site.instagram.handle}
          </a>
        </div>
      </div>
    </section>
  )
}
