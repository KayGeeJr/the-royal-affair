import SharedNav from '../components/SharedNav'
import PageFooter from '../components/PageFooter'
import PageTransition from '../components/PageTransition'
import { ContactBrandIcon } from '../components/ContactBrandIcons'
import { useInView } from '../hooks/useInView'

const services = [
  'Digital Media Production',
  'Social Media Management',
  'Digital Marketing Campaigns',
  'Professional Branded Shoots',
  'Strategic Brand Consulting',
  'Public Relations & Media Communications',
  'Brand Visibility & Creative Direction',
]

const process = [
  {
    step: '01',
    title: 'Discover',
    body: 'We start by deeply understanding your brand, audience, goals, and competitive landscape. No guesswork — only informed strategy.',
  },
  {
    step: '02',
    title: 'Strategise',
    body: 'We develop a tailored creative roadmap — positioning, messaging, content direction, and channel strategy — built to perform.',
  },
  {
    step: '03',
    title: 'Create',
    body: 'Our team brings the strategy to life through compelling visuals, copy, campaigns, and media production crafted to your brand voice.',
  },
  {
    step: '04',
    title: 'Launch & Grow',
    body: 'We execute, publish, and amplify across the right platforms — then measure, optimise, and scale for sustained brand growth.',
  },
]

const pillars = [
  {
    title: 'Creative Thinking',
    body: 'Ideas that challenge the ordinary and position your brand as a leader, not a follower.',
  },
  {
    title: 'Strategic Precision',
    body: 'Every creative decision is backed by audience insight, market intelligence, and clear objectives.',
  },
  {
    title: 'Cultural Relevance',
    body: 'We understand South African culture and craft stories that resonate with real people in real moments.',
  },
]

const industries = [
  'Fashion & Beauty',
  'Events & Entertainment',
  'Music & Media',
  'Construction & Real Estate',
  'Corporate & Finance',
  'Food & Lifestyle',
  'Health & Wellness',
  'Non-Profit & Social Impact',
  'Tech & Innovation',
]

export default function TRACreationsPage() {
  const [aboutRef, aboutVisible] = useInView()
  const [pillarsRef, pillarsVisible] = useInView()
  const [processRef, processVisible] = useInView()
  const [servicesRef, servicesVisible] = useInView()
  const [industriesRef, industriesVisible] = useInView()
  const [photoRef, photoVisible] = useInView()
  const [contactRef, contactVisible] = useInView()

  return (
    <PageTransition>
      <div className="bg-royal-cream">
        <SharedNav variant="light" />

        {/* Hero — split layout */}
        <section className="min-h-[85vh] grid grid-cols-1 md:grid-cols-2 border-b border-royal-border bg-royal-cream">
          <div className="flex flex-col justify-end px-8 md:px-16 pb-16 pt-32">
            <p className="font-mono text-[10px] tracking-[0.3em] text-royal-muted uppercase mb-16">
              DIGITAL MEDIA AGENCY · TRA CREATIONS
            </p>
            <h1 className="font-display leading-none text-royal-black">
              <span className="block" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 6rem)' }}>
                A Creative Agency
              </span>
              <span className="block italic text-royal-burgundy" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 6rem)' }}>
                Built on Purpose.
              </span>
            </h1>
            <div className="brand-rule mt-8 mb-4" />
            <p className="font-body text-royal-muted text-sm tracking-widest uppercase">
              Communications · Media · Strategy
            </p>
          </div>

          <div className="relative min-h-[55vh] md:min-h-0 md:h-full overflow-hidden bg-royal-cream">
            <img
              src="/images/tra_creations/DSC_9401.JPG"
              alt="TRA Creations"
              className="absolute inset-0 w-full h-full object-cover object-top md:object-contain md:object-center"
            />
            <div className="absolute inset-0 bg-royal-black/10 pointer-events-none md:bg-transparent" aria-hidden="true" />
          </div>
        </section>

        {/* About */}
        <section className="py-24 px-8 md:px-20 bg-royal-cream">
          <div
            ref={aboutRef}
            className={`max-w-6xl mx-auto transition-all duration-700 ease-out ${
              aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-16">
              <div className="md:sticky md:top-28 h-fit">
                <div className="brand-rule mb-4" />
                <p className="font-mono text-royal-gold text-xs tracking-widest uppercase">
                  01 / About
                </p>
              </div>

              <div>
                <p className="font-body text-royal-muted text-lg leading-relaxed mb-5">
                  TRA Creations is a forward-thinking digital media, communications, and brand strategy
                  agency dedicated to helping brands grow with purpose, presence, and impact. Built on
                  creativity, innovation, and authentic storytelling, we specialize in crafting modern
                  brand experiences that connect with audiences in meaningful ways.
                </p>
                <p className="font-body text-royal-muted text-lg leading-relaxed mb-5">
                  Championing brands through a team of professionals with deep-rooted experience in the
                  entertainment, media, marketing, and communications industries, TRA Creations understands
                  what it takes to stand out in an ever-evolving digital landscape.
                </p>
                <p className="font-body text-royal-muted text-lg leading-relaxed">
                  From emerging businesses to established brands, we partner with clients to strengthen
                  their visibility, elevate their identity, and create digital footprints that inspire
                  engagement, trust, and growth.
                </p>

                <blockquote className="border-l-2 border-royal-burgundy pl-6 my-10">
                  <p className="font-display text-2xl text-royal-black italic leading-snug">
                    "We don't just create content — we build brands, shape narratives, and create
                    experiences that leave lasting impressions."
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach / Pillars */}
        <section className="bg-royal-black py-24 px-8 md:px-20 border-t border-royal-dark-border">
          <div
            ref={pillarsRef}
            className={`max-w-7xl mx-auto transition-all duration-700 ease-out ${
              pillarsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="brand-rule" />
              <p className="font-mono text-royal-burgundy/70 text-[10px] tracking-[0.4em] uppercase">
                02 / Our Approach
              </p>
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-royal-cream mb-16 leading-none">
              Why TRA Creations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-royal-dark-border">
              {pillars.map((p) => (
                <div key={p.title} className="bg-royal-black p-10 hover:bg-royal-black/70 transition-colors duration-300">
                  <div className="brand-rule-sm mb-6" />
                  <h3 className="font-display text-2xl text-royal-cream mb-4">{p.title}</h3>
                  <p className="font-body text-royal-cream/40 text-base leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-royal-cream py-24 px-8 md:px-20 border-t border-royal-border">
          <div
            ref={processRef}
            className={`max-w-7xl mx-auto transition-all duration-700 ease-out ${
              processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="brand-rule" />
              <p className="font-mono text-royal-gold text-[10px] tracking-[0.4em] uppercase">
                03 / Process
              </p>
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-royal-black mb-16 leading-none">
              How We Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-royal-border">
              {process.map((p) => (
                <div key={p.step} className="bg-royal-cream p-10 hover:bg-white transition-colors duration-300">
                  <span className="font-mono text-royal-muted/30 text-xs tracking-widest block mb-6">{p.step}</span>
                  <h3 className="font-display text-2xl text-royal-black mb-3">{p.title}</h3>
                  <div className="brand-rule-sm mb-4" />
                  <p className="font-body text-royal-muted text-sm leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo grid */}
        <section className="bg-royal-cream border-t border-royal-border" ref={photoRef}>
          <div
            className={`transition-all duration-700 ease-out ${
              photoVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="grid grid-cols-3 gap-px bg-royal-border">
              {['DSC_9305.JPG', 'DSC_9480.JPG', 'DSC_9308.JPG'].map((file) => (
                <div key={file} className="aspect-[4/3] overflow-hidden">
                  <img
                    src={`/images/tra_creations/${file}`}
                    alt="TRA Creations work"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-royal-black py-24 px-8 md:px-20">
          <div
            ref={servicesRef}
            className={`max-w-7xl mx-auto transition-all duration-700 ease-out ${
              servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="brand-rule" />
              <p className="font-mono text-royal-burgundy/70 text-[10px] tracking-[0.4em] uppercase">
                04 / Services
              </p>
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-royal-cream mb-16 leading-none">
              What We Offer
            </h2>
            <div>
              {services.map((service, i) => (
                <div
                  key={service}
                  className="border-b border-royal-dark-border py-5 flex items-center justify-between group hover:border-royal-burgundy/30 transition-all duration-300 px-2"
                >
                  <div className="flex items-center gap-8">
                    <span className="font-mono text-royal-gold/40 text-xs w-8 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-display text-xl md:text-2xl text-royal-cream group-hover:text-royal-burgundy-light transition-colors duration-300">
                      {service}
                    </span>
                  </div>
                  <span className="text-royal-gold/30 group-hover:text-royal-burgundy group-hover:translate-x-2 transition-all duration-300 text-lg shrink-0 ml-4">
                    →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="bg-royal-cream py-24 px-8 md:px-20 border-t border-royal-border">
          <div
            ref={industriesRef}
            className={`max-w-7xl mx-auto transition-all duration-700 ease-out ${
              industriesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="brand-rule" />
              <p className="font-mono text-royal-gold text-[10px] tracking-[0.4em] uppercase">
                05 / Industries
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-display text-5xl md:text-6xl text-royal-black mb-6 leading-none">
                  Sectors We Serve
                </h2>
                <p className="font-body text-royal-muted text-base leading-relaxed max-w-md">
                  Our expertise spans a wide range of industries. Whether you are an entrepreneur, a growing
                  brand, or an established organisation — we have the insight to serve you.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {industries.map((industry) => (
                  <span
                    key={industry}
                    className="border border-royal-border text-royal-muted font-mono text-xs tracking-widest uppercase px-6 py-3 hover:border-royal-burgundy hover:text-royal-black transition-all duration-300 cursor-default"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Start a Project CTA */}
        <section className="bg-brand-gradient py-20 px-8 md:px-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="font-mono text-royal-black/40 text-[10px] tracking-[0.4em] uppercase mb-2">Ready to Elevate Your Brand?</p>
              <h2 className="font-display text-4xl md:text-5xl text-royal-black leading-tight">
                Let's start your<br />next project.
              </h2>
            </div>
            <a
              href="mailto:traccreationss@gmail.com"
              className="bg-royal-black text-royal-cream px-10 py-4 text-xs tracking-widest uppercase font-body font-medium hover:bg-royal-black/80 transition-all duration-300 shrink-0"
            >
              Get In Touch →
            </a>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-royal-cream py-16 px-8 md:px-20 border-t border-royal-border">
          <div
            ref={contactRef}
            className={`max-w-7xl mx-auto transition-all duration-700 ease-out ${
              contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-start justify-between flex-wrap gap-12">
              <div>
                <div className="brand-rule mb-4" />
                <h2 className="font-display text-4xl text-royal-black">Get in Touch</h2>
                <p className="font-body text-royal-muted text-sm mt-2">
                  Ready to grow your brand?
                </p>
              </div>

              <div className="flex flex-col gap-4 min-w-[260px]">
                {[
                  { brand: 'email' as const, href: 'mailto:traccreationss@gmail.com', label: 'traccreationss@gmail.com', external: false },
                  { brand: 'whatsapp' as const, href: 'https://wa.me/27769072410', label: 'WhatsApp/ Call: 076 907 2410', external: true },
                  { brand: 'instagram' as const, href: 'https://instagram.com/tra_creationss', label: '@tra_creationss', external: true },
                  { brand: 'facebook' as const, href: 'https://www.facebook.com/profile.php?id=61563269788400', label: 'TRA Creations', external: true },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="flex items-center gap-3 font-body text-royal-muted hover:text-royal-burgundy transition-colors duration-300 text-sm group"
                  >
                    <span className="flex shrink-0 items-center justify-center opacity-90 group-hover:opacity-100">
                      <ContactBrandIcon brand={item.brand} />
                    </span>
                    <span className="group-hover:underline underline-offset-4">{item.label}</span>
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
