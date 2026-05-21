import SharedNav from '../components/SharedNav'
import PageFooter from '../components/PageFooter'
import PageTransition from '../components/PageTransition'
import { useInView } from '../hooks/useInView'

const brands = [
  { name: 'Opera Mini', logo: '/images/princess_m/brand-logos/opera-mini.jpeg' },
  { name: 'Matumi Retail Centre', logo: '/images/princess_m/brand-logos/matumi.png' },
  { name: 'Maybelline New York', logo: '/images/princess_m/brand-logos/maybelline.png' },
  { name: 'MTN MoMo', logo: '/images/princess_m/brand-logos/mtn-momo.png' },
  { name: 'Vital', logo: '/images/princess_m/brand-logos/vital.png' },
  { name: 'Auramatic', logo: '/images/princess_m/brand-logos/auramatic.jpeg' },
]

const testimonials = [
  {
    num: '01',
    quote:
      "Not a lot of young people nowadays hold their work to a great standard however I continue to be amazed by how Princess handles and delivers her work. To us, it showed that it is more than just passion and the professionalism displayed in MCing our event is commendable.",
    attribution: 'MTHUNZI GAMA',
  },
  {
    num: '02',
    quote:
      "Princess was professional, patient, creative, and incredibly hands-on throughout the entire event. She went beyond simply capturing content but helped bring the vision of the experience to life. The final visuals and reel exceeded our expectations and perfectly captured the essence of Scent & Serenity.",
    attribution: 'ZILUNGILE · AURAMATIC SCENTS',
  },
  {
    num: '03',
    quote:
      "The service was absolutely impeccable from start to finish. They didn't miss a single beat capturing all the important moments and finding the perfect angles for every shot. They handled the social media and content creation for our event and killed it.",
    attribution: 'ISABEL LUKHANYO EVENTS',
  },
]

const contactLinks = [
  { icon: '✉', label: 'Email', value: 'princessmobeng@icloud.co.za', href: 'mailto:princessmobeng@icloud.co.za', external: false },
  { icon: '📞', label: 'Phone', value: '+27 63 029 2113', href: 'tel:+27630292113', external: false },
  { icon: '📸', label: 'Instagram', value: '@princess_mobeng', href: 'https://instagram.com/princess_mobeng', external: true },
  { icon: '🎵', label: 'TikTok', value: '@princess_mobeng', href: 'https://tiktok.com/@princess_mobeng', external: true },
  { icon: '👤', label: 'Facebook', value: 'Princess_M', href: 'https://facebook.com/Princess_M', external: true },
]

const services = [
  {
    num: '01',
    title: 'MC & Event Hosting',
    body: 'From corporate conferences and product launches to entertainment events and brand activations — Princess brings energy, eloquence, and professionalism to every stage.',
  },
  {
    num: '02',
    title: 'Content Creation',
    body: 'Strategic, visually compelling content for social media, campaigns, and brand storytelling. From concept to camera to caption — handled with creative precision.',
  },
  {
    num: '03',
    title: 'Brand Collaborations',
    body: 'Authentic influencer partnerships that reach a highly engaged audience. Princess brings genuine connection and cultural credibility to every brand she partners with.',
  },
  {
    num: '04',
    title: 'Public Relations',
    body: 'Media communications, press releases, reputation management, and strategic brand positioning. Backed by a qualification in Public Relations and real-world industry experience.',
  },
]

const events = [
  {
    year: '2024',
    title: 'Engen Sportscaster Search',
    detail: 'Winner — First Official National Edition',
  },
  {
    year: '2024',
    title: 'Auramatic Scents & Serenity',
    detail: 'Event MC & Content Creator',
  },
  {
    year: '2023',
    title: 'Matumi Retail Centre Campaigns',
    detail: 'Brand Ambassador & Content Creation',
  },
  {
    year: '2023',
    title: 'Isabel Lukhanyo Events',
    detail: 'Social Media & Event Coverage',
  },
  {
    year: '2022',
    title: 'MTN MoMo Campaign',
    detail: 'Brand Collaboration & Digital Content',
  },
  {
    year: '2020',
    title: 'Industry Entry',
    detail: 'Launched TRA Creations & began media career',
  },
]

export default function PrincessPage() {
  const [bioRef, bioVisible] = useInView()
  const [servicesRef, servicesVisible] = useInView()
  const [eventsRef, eventsVisible] = useInView()
  const [brandsRef, brandsVisible] = useInView()
  const [testimonialsRef, testimonialsVisible] = useInView()
  const [profileRef, profileVisible] = useInView()
  const [contactRef, contactVisible] = useInView()

  return (
    <PageTransition>
      <div className="bg-royal-cream">
        <SharedNav variant="light" />

        {/* Hero — split layout */}
        <section className="min-h-[90vh] grid grid-cols-1 md:grid-cols-2 border-b border-royal-border">
          <div className="flex flex-col justify-end px-8 md:px-16 pb-16 pt-32 bg-royal-cream">
            <p className="font-mono text-[10px] tracking-[0.3em] text-royal-muted uppercase mb-16">
              MEDIA PERSONALITY · PUBLIC RELATIONS · ENTREPRENEUR
            </p>
            <h1 className="font-display leading-tight text-royal-black" style={{ fontSize: 'clamp(2.2rem, 5vw, 5.5rem)' }}>
              Princess Tsepiso<br />
              <span className="italic text-royal-gold">Mobeng</span>
            </h1>
            <div className="w-12 border-t border-royal-gold mt-8 mb-4" />
            <p className="font-mono text-royal-muted text-xs tracking-widest uppercase">
              Princess_M · The Lady with the Royal Affair
            </p>
          </div>

          <div className="relative min-h-[55vh] md:min-h-0 overflow-hidden">
            <img
              src="/images/princess_m/Princess_M .jpg"
              alt="Princess Tsepiso Mobeng"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-royal-black/10" />
          </div>
        </section>

        {/* Bio */}
        <section className="bg-royal-black py-24 px-8 md:px-20">
          <div
            ref={bioRef}
            className={`max-w-6xl mx-auto transition-all duration-700 ease-out ${
              bioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-16">
              <div className="md:sticky md:top-28 h-fit">
                <div className="w-8 border-t border-royal-gold mb-4" />
                <p className="font-mono text-royal-gold text-xs tracking-widest uppercase">
                  01 / Her Story
                </p>
              </div>

              <div>
                <div className="space-y-5 font-body text-royal-cream/60 text-lg leading-relaxed">
                  <p>
                    Princess Tsepiso Mobeng, popularly known as Princess_M "The Lady with the Royal Affair,"
                    is a South African media personality, public relations professional, and entrepreneur born
                    in Barberton, Mpumalanga. With a qualification in Public Relations, she has steadily built
                    her name in broadcasting, content creation, brand communications, and event hosting since
                    officially stepping into the entertainment industry in 2020.
                  </p>
                  <p>
                    Having lived in both Pretoria and Johannesburg before returning to Mpumalanga to complete
                    her matric, Princess_M brings a relatable, vibrant, and authentic touch to everything she
                    does. Her growing journey in media reached a major milestone in 2024 when she became the
                    winner of the first official national Engen Sportscaster Search 2024.
                  </p>
                  <p>
                    Over the years, she has also collaborated with a variety of well-known brands including
                    Opera Mini, Matumi Retail Centre, Maybelline New York, MTN MoMo, Vital, and Auramatic,
                    continuing to position herself as a fresh and dynamic personality.
                  </p>
                </div>

                <div className="mt-12 border border-royal-gold/30 p-8 bg-royal-gold/5">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-6 border-t border-royal-gold" />
                    <p className="font-mono text-royal-gold text-[10px] tracking-widest uppercase">
                      Achievement
                    </p>
                  </div>
                  <h3 className="font-display text-3xl text-royal-cream leading-tight">
                    Winner — Engen Sportscaster Search 2024
                  </h3>
                  <p className="font-body text-royal-cream/40 text-base mt-2">
                    First Official National Edition
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-royal-cream py-24 px-8 md:px-20 border-t border-royal-border">
          <div
            ref={servicesRef}
            className={`max-w-7xl mx-auto transition-all duration-700 ease-out ${
              servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 border-t border-royal-gold" />
              <p className="font-mono text-royal-gold text-[10px] tracking-[0.4em] uppercase">
                02 / Services
              </p>
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-royal-black mb-16 leading-none">
              What She Offers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-royal-border">
              {services.map((s) => (
                <div key={s.num} className="bg-royal-cream p-10 hover:bg-white transition-colors duration-300">
                  <span className="font-mono text-royal-muted/30 text-xs tracking-widest block mb-4">{s.num}</span>
                  <h3 className="font-display text-2xl text-royal-black mb-3">{s.title}</h3>
                  <div className="w-6 border-t border-royal-gold mb-4" />
                  <p className="font-body text-royal-muted text-base leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo strip */}
        <section className="bg-royal-black border-t border-royal-dark-border overflow-x-auto">
          <div className="flex gap-px min-w-max">
            {['DSC_7949.jpg', 'DSC_7951.jpg', 'DSC_7968.jpg', 'DSC_7975.jpg', 'DSC_0557.JPG', 'DSC_0524.JPG', 'DSC_0597.jpg'].map((file) => (
              <div key={file} className="w-56 h-72 shrink-0 overflow-hidden">
                <img
                  src={`/images/princess_m/${file}`}
                  alt="Princess Mobeng"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Timeline / Events */}
        <section className="bg-royal-cream py-24 px-8 md:px-20 border-t border-royal-border">
          <div
            ref={eventsRef}
            className={`max-w-7xl mx-auto transition-all duration-700 ease-out ${
              eventsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 border-t border-royal-gold" />
              <p className="font-mono text-royal-gold text-[10px] tracking-[0.4em] uppercase">
                03 / Highlights
              </p>
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-royal-black mb-16 leading-none">
              Notable Work &<br />Milestones
            </h2>
            <div>
              {events.map((event, i) => (
                <div
                  key={i}
                  className="border-b border-royal-border py-6 grid grid-cols-[80px_1fr_auto] md:grid-cols-[120px_1fr_auto] items-center gap-4 group hover:border-royal-gold/30 transition-all duration-300"
                >
                  <span className="font-mono text-royal-muted/40 text-xs tracking-widest">{event.year}</span>
                  <div>
                    <p className="font-display text-xl text-royal-black group-hover:text-royal-black transition-colors">{event.title}</p>
                    <p className="font-body text-royal-muted text-sm mt-1">{event.detail}</p>
                  </div>
                  <span className="text-royal-gold/20 group-hover:text-royal-gold transition-colors duration-300 text-lg">→</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brands */}
        <section className="bg-royal-black py-24 px-8 md:px-20 border-t border-royal-dark-border">
          <div
            ref={brandsRef}
            className={`max-w-7xl mx-auto transition-all duration-700 ease-out ${
              brandsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 border-t border-royal-gold" />
              <p className="font-mono text-royal-gold/50 text-[10px] tracking-[0.4em] uppercase">
                04 / Partnerships
              </p>
            </div>
            <div className="mb-12 leading-none">
              <h2 className="font-display text-5xl md:text-6xl text-royal-cream">Brands She's</h2>
              <h2 className="font-display text-5xl md:text-6xl text-royal-cream/20">Worked With</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-royal-dark-border">
              {brands.map((brand) => (
                <div
                  key={brand.name}
                  className="bg-royal-black flex flex-col items-center justify-center gap-5 p-10 md:p-14 min-h-[180px] group"
                >
                  <div className="flex items-center justify-center w-full h-16 md:h-20 px-4 rounded-sm bg-royal-cream/[0.03] border border-royal-dark-border group-hover:border-royal-gold/30 group-hover:bg-royal-cream/[0.06] transition-all duration-300">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-10 md:max-h-12 w-auto max-w-full object-contain opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <p className="font-mono text-royal-cream/30 text-[9px] tracking-[0.25em] uppercase text-center group-hover:text-royal-gold/70 transition-colors duration-300">
                    {brand.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-royal-cream py-24 px-8 md:px-20 border-t border-royal-border">
          <div
            ref={testimonialsRef}
            className={`max-w-6xl mx-auto transition-all duration-700 ease-out ${
              testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 border-t border-royal-gold" />
              <p className="font-mono text-royal-gold text-[10px] tracking-[0.4em] uppercase">
                05 / Testimonials
              </p>
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-royal-black mb-16 leading-none">
              What They Say
            </h2>
            {testimonials.map((t) => (
              <div
                key={t.num}
                className="border-b border-royal-border py-12 grid grid-cols-1 md:grid-cols-[6rem_1fr] gap-6 md:gap-8 items-start"
              >
                <span
                  className="font-display text-royal-gold/20 leading-none select-none"
                  style={{ fontSize: '5rem' }}
                >
                  {t.num}
                </span>
                <div>
                  <p className="font-display text-xl md:text-2xl text-royal-black/70 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                  <p className="font-mono text-royal-gold/50 text-xs tracking-widest uppercase mt-6">
                    — {t.attribution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Media Profile Download */}
        <section className="bg-royal-gold py-20 px-8 md:px-20">
          <div
            ref={profileRef}
            className={`max-w-7xl mx-auto transition-all duration-700 ease-out ${
              profileVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <p className="font-mono text-royal-black/40 text-[10px] tracking-[0.4em] uppercase mb-2">Official Media Profile</p>
                <h2 className="font-display text-4xl md:text-5xl text-royal-black leading-tight">
                  Download Princess M's<br />Media Profile 2026
                </h2>
                <p className="font-body text-royal-black/50 text-sm mt-3 max-w-md">
                  Full portfolio, biography, brand partnerships, achievements, and collaboration details — all in one document.
                </p>
              </div>
              <a
                href="/images/princess_m/PRINCESS MOBENG PROFILE 2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 bg-royal-black text-royal-cream px-10 py-4 text-xs tracking-widest uppercase font-body font-medium hover:bg-royal-black/80 transition-all duration-300"
              >
                Download PDF →
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-royal-cream py-24 px-8 md:px-20 border-t border-royal-border">
          <div
            ref={contactRef}
            className={`max-w-7xl mx-auto transition-all duration-700 ease-out ${
              contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-start justify-between flex-wrap gap-12">
              <div>
                <div className="w-8 border-t border-royal-gold mb-4" />
                <h2 className="font-display text-4xl text-royal-black">Work With Princess</h2>
                <p className="font-body text-royal-muted text-sm mt-2">
                  MC · Content Creation · Brand Collaborations
                </p>
              </div>

              <div className="flex flex-col gap-4 min-w-[260px]">
                {contactLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="flex items-center gap-3 font-body text-royal-muted hover:text-royal-gold transition-colors duration-300 text-sm group"
                  >
                    <span className="text-royal-gold">{link.icon}</span>
                    <span className="font-body text-royal-muted/50 text-xs w-20 shrink-0 uppercase tracking-widest">
                      {link.label}
                    </span>
                    <span className="group-hover:underline underline-offset-4">{link.value}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <PageFooter />
      </div>
    </PageTransition>
  )
}
