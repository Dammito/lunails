import { AtSign, MapPin, MessageCircle, Music2 } from 'lucide-react'
import { navLinks, site, whatsappUrl } from '@/lib/site'

const contacts = [
  { icon: MapPin, label: 'Location', value: `${site.location} (exact address on booking)`, href: undefined, wide: true },
  { icon: AtSign, label: 'Studio Instagram', value: site.instagram.handle, href: site.instagram.url },
  { icon: AtSign, label: 'Andrea on Instagram', value: site.personalInstagram.handle, href: site.personalInstagram.url },
  { icon: Music2, label: 'TikTok', value: site.tiktok.handle, href: site.tiktok.url },
  { icon: MessageCircle, label: 'WhatsApp', value: site.whatsappDisplay, href: whatsappUrl },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="pt-20 md:pt-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gold">Contact</p>
            <h2 className="mt-4 text-balance text-4xl leading-tight md:text-5xl">
              We&apos;d love to pamper you
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              Have a question about a design or availability? Send us a message and we&apos;ll get
              back to you quickly.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-sm font-medium text-[#0b2e17] transition-opacity hover:opacity-90"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>

          <ul className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
            {contacts.map(({ icon: Icon, label, value, href, wide }) => {
              const content = (
                <>
                  <Icon className="size-5 text-gold" aria-hidden="true" />
                  <span className="mt-4 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {label}
                  </span>
                  <span className="mt-1 block font-serif text-xl">{value}</span>
                </>
              )
              return (
                <li key={label} className={wide ? 'bg-card sm:col-span-2' : 'bg-card'}>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full p-6 transition-colors hover:bg-secondary"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="h-full p-6">{content}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-border py-8 md:flex-row">
          <a href="#top" className="font-serif text-2xl">
            {site.name}
          </a>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-xs text-muted-foreground">
            {`© ${new Date().getFullYear()} Lunails · ${site.location}`}
          </p>
        </div>
      </div>
    </footer>
  )
}
