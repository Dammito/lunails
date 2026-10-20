import { CalendarCheck, Clock, ExternalLink, MessageCircle } from 'lucide-react'
import { site, whatsappUrl } from '@/lib/site'

const steps = [
  { icon: CalendarCheck, text: 'Choose your service and a time that works for you' },
  { icon: Clock, text: 'Receive instant confirmation and reminders' },
  { icon: MessageCircle, text: 'Questions? Message us on WhatsApp anytime' },
]

export function Booking() {
  return (
    <section id="book" className="bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-gold">Book Online</p>
          <h2 className="mt-4 text-balance text-4xl leading-tight md:text-5xl">
            Reserve your moment of luxury
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/75">
            Booking takes less than a minute. Pick your service, choose a time, and we&apos;ll take
            care of the rest.
          </p>

          <ul className="mt-10 flex flex-col gap-5">
            {steps.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <span className="text-sm text-primary-foreground/85">{text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <a
              href={site.setmoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-7 py-4 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
            >
              Open Booking Page
              <ExternalLink className="size-4" aria-hidden="true" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-4 text-sm font-medium transition-colors hover:bg-primary-foreground/10"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Book via WhatsApp
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl bg-background p-2 text-foreground">
          <iframe
            src={site.setmoreUrl}
            title="Book an appointment with Lunails on Setmore"
            loading="lazy"
            className="h-[640px] w-full rounded-2xl border-0 bg-card"
          />
        </div>
      </div>
    </section>
  )
}
