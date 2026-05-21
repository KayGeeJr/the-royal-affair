import SharedNav from '../components/SharedNav'
import PageFooter from '../components/PageFooter'
import PageTransition from '../components/PageTransition'
import { useInView } from '../hooks/useInView'

const pillars = [
  {
    index: '01',
    glyph: 'C',
    category: 'Culture & Entertainment',
    description: 'Celebrating creatives shaping African culture',
    keywords: ['Film', 'Arts', 'Heritage'],
    wash: 'linear-gradient(135deg, rgba(120, 53, 15, 0.35) 0%, #0a0a0a 55%)',
  },
  {
    index: '02',
    glyph: 'F',
    category: 'Fashion & Beauty',
    description: 'Style, identity, and self-expression',
    keywords: ['Runway', 'Beauty', 'Identity'],
    wash: 'linear-gradient(135deg, rgba(136, 19, 55, 0.28) 0%, #0a0a0a 55%)',
  },
  {
    index: '03',
    glyph: 'B',
    category: 'Business & Entrepreneurship',
    description: 'Spotlighting builders and changemakers',
    keywords: ['Startups', 'Leaders', 'Hustle'],
    wash: 'linear-gradient(135deg, rgba(6, 78, 59, 0.28) 0%, #0a0a0a 55%)',
  },
  {
    index: '04',
    glyph: 'M',
    category: 'Music & Media',
    description: 'The sounds and stories defining a generation',
    keywords: ['Sound', 'Media', 'Artists'],
    wash: 'linear-gradient(135deg, rgba(76, 29, 149, 0.28) 0%, #0a0a0a 55%)',
  },
  {
    index: '05',
    glyph: 'L',
    category: 'Lifestyle',
    description: 'How Africa lives, eats, travels, and thrives',
    keywords: ['Food', 'Travel', 'Living'],
    wash: 'linear-gradient(135deg, rgba(12, 74, 110, 0.22) 0%, #0a0a0a 55%)',
  },
  {
    index: '06',
    glyph: 'Y',
    category: 'Youth Culture',
    description: 'Bold voices from the next generation',
    keywords: ['Gen-Z', 'Voices', 'Future'],
    wash: 'linear-gradient(135deg, rgba(201, 168, 76, 0.12) 0%, #0a0a0a 55%)',
  },
]

const issues = [
  { title: 'Issue 01', file: 'TRAC MAG ISSUE 01.pdf', cover: 'issue1_cover.JPG' },
  { title: 'Issue 02', file: 'TRAC MAG ISSUE 02.pdf', cover: 'issue2_cover.JPG' },
  { title: 'Issue 03', file: 'TRAC MAG ISSUE 03.pdf', cover: 'issue3_cover.JPG' },
  { title: 'Issue 04', file: 'TRAC MAG ISSUE 04.pdf', cover: 'issue4_cover.JPG' },
]

const stats = [
  { value: '2020', label: 'Founded' },
  { value: '4+', label: 'Issues Published' },
  { value: '6+', label: 'Content Pillars' },
  { value: '∞', label: 'Stories to Tell' },
]

const whyTrac = [
  {
    num: '01',
    title: 'Authentic Voice',
    body: 'TRAC Magazine doesn\'t follow trends — it creates them. Our editorial lens is rooted in African authenticity, not imitation.',
  },
  {
    num: '02',
    title: 'Community-First',
    body: 'We amplify voices that are often overlooked. Every feature is an opportunity to give a creative, entrepreneur, or changemaker their platform.',
  },
  {
    num: '03',
    title: 'Culturally Relevant',
    body: 'Our content reflects the real texture of African life — the fashion, music, hustle, dreams, and conversations that matter to our readers.',
  },
]

const advertiseOptions = [
  {
    title: 'Full Page Feature',
    body: 'Premium placement with editorial integration — your brand story told in TRAC\'s distinctive voice.',
  },
  {
    title: 'Brand Spotlight',
    body: 'A dedicated editorial spotlight that positions your brand, product, or service in front of our engaged audience.',
  },
  {
    title: 'Digital Banner',
    body: 'Strategic digital placements across our platforms for maximum visibility and click-through reach.',
  },
  {
    title: 'Event Coverage',
    body: 'We cover your launch, activation, or event with full editorial and social media coverage.',
  },
]

export default function TracMagazinePage() {
  const [aboutRef, aboutVisible] = useInView()
  const [whyRef, whyVisible] = useInView()
  const [pillarsRef, pillarsVisible] = useInView()
  const [issuesRef, issuesVisible] = useInView()
  const [advertiseRef, advertiseVisible] = useInView()
  const [pitchRef, pitchVisible] = useInView()
  const [contactRef, contactVisible] = useInView()

  return (
    <PageTransition>
      <div className="bg-royal-black">
        <SharedNav variant="dark" />

        {/* Hero */}
        <section className="min-h-[90vh] bg-royal-black relative overflow-hidden flex flex-col justify-between px-8 md:px-20 pt-32 pb-16 border-b border-royal-dark-border">
          <span
            aria-hidden="true"
            className="absolute top-0 right-0 font-display leading-none select-none pointer-events-none"
            style={{ fontSize: '40vw', color: 'rgba(201,168,76,0.04)' }}
          >
            T
          </span>

          <div className="flex justify-between items-start z-10">
            <img
              src="/images/TRAC/TRAC MAG LOGO WHITE .PNG"
              alt="TRAC Magazine"
              className="h-8 w-auto object-contain opacity-70"
            />
            <p className="font-mono text-royal-cream/20 text-[10px] tracking-[0.4em]">
              DIGITAL PUBLICATION · EST. 2020
            </p>
          </div>

          <div className="z-10 my-16">
            <p className="font-display text-royal-cream leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 10rem)' }}>
              AUTHENTIC
            </p>
            <p className="font-display leading-none text-royal-gold" style={{ fontSize: 'clamp(3rem, 10vw, 10rem)' }}>
              AFRICAN
            </p>
            <p className="font-display text-royal-cream leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 10rem)' }}>
              STORIES.
            </p>
          </div>

          <div className="z-10 border-t border-royal-dark-border pt-6 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <div className="flex items-center gap-4">
              <div className="w-8 border-t border-royal-gold" />
              <p className="font-body text-royal-cream/40 text-sm max-w-md">
                Celebrating creative excellence, cultural conversations, and voices that shape Africa.
              </p>
            </div>
            <a
              href="/images/TRAC/TRAC MAG ISSUE 04.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 border border-royal-gold/40 text-royal-gold px-6 py-2 text-xs tracking-widest uppercase font-mono hover:bg-royal-gold hover:text-royal-black transition-all duration-300"
            >
              Read Latest Issue →
            </a>
          </div>
        </section>

        {/* About */}
        <section className="bg-royal-cream py-24 px-8 md:px-20">
          <div
            ref={aboutRef}
            className={`max-w-6xl mx-auto transition-all duration-700 ease-out ${
              aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-16 mb-16">
              <div className="md:sticky md:top-28 h-fit">
                <div className="w-8 border-t border-royal-gold mb-4" />
                <p className="font-mono text-royal-gold text-xs tracking-widest uppercase">
                  01 / About
                </p>
              </div>
              <div className="space-y-5 font-body text-royal-muted text-lg leading-relaxed">
                <p>
                  TRAC Magazine is a dynamic digital lifestyle and entertainment publication dedicated to
                  telling authentic African stories, celebrating creative excellence, and spotlighting voices
                  that shape culture, business, fashion, music, media, and everyday inspiration.
                </p>
                <p>
                  Founded with a passion for impactful storytelling and modern media, the magazine serves as
                  a platform for emerging and established creatives, entrepreneurs, public figures, brands,
                  and changemakers to share their journeys, achievements, and influence with a wider audience.
                </p>
                <p>
                  Through exclusive features, interviews, event coverage, entertainment news, fashion and
                  beauty content, lifestyle conversations, and youth culture storytelling, TRAC Magazine
                  creates content that is engaging, relatable, and culturally relevant.
                </p>
                <p>
                  More than just a magazine — it's a growing media platform that bridges creativity, culture,
                  and conversation, delivering fresh, bold, and meaningful content for a new generation of readers.
                </p>
              </div>
            </div>

            <div className="border-t border-royal-border pt-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-royal-border">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center py-4 px-4">
                  <p className="font-display text-4xl md:text-5xl text-royal-black">{stat.value}</p>
                  <p className="font-mono text-royal-muted text-[10px] tracking-widest uppercase mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why TRAC */}
        <section className="bg-royal-black py-24 px-8 md:px-20 border-t border-royal-dark-border">
          <div
            ref={whyRef}
            className={`max-w-7xl mx-auto transition-all duration-700 ease-out ${
              whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 border-t border-royal-gold" />
              <p className="font-mono text-royal-gold/50 text-[10px] tracking-[0.4em] uppercase">
                02 / Why TRAC
              </p>
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-royal-cream mb-16 leading-none">
              What Sets Us Apart
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-royal-dark-border">
              {whyTrac.map((item) => (
                <div key={item.num} className="bg-royal-black p-10 hover:bg-royal-black/60 transition-colors duration-300">
                  <span className="font-mono text-royal-gold/30 text-xs tracking-widest block mb-6">{item.num}</span>
                  <h3 className="font-display text-2xl text-royal-cream mb-4">{item.title}</h3>
                  <div className="w-6 border-t border-royal-gold mb-4" />
                  <p className="font-body text-royal-cream/40 text-base leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Pillars */}
        <section className="bg-royal-black py-24 px-8 md:px-20 border-t border-royal-dark-border">
          <div
            ref={pillarsRef}
            className={`max-w-7xl mx-auto transition-all duration-700 ease-out ${
              pillarsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 border-t border-royal-gold" />
              <p className="font-mono text-royal-gold/50 text-[10px] tracking-[0.4em] uppercase">
                03 / Coverage
              </p>
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-royal-cream mb-16 leading-none">
              What We Cover
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-royal-dark-border">
              {pillars.map((pillar) => (
                <div
                  key={pillar.category}
                  className="relative min-h-[300px] bg-royal-black p-8 flex flex-col justify-between overflow-hidden group"
                >
                  <div className="absolute inset-0" style={{ background: pillar.wash }} />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-700"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(0deg, transparent, transparent 11px, rgba(201,168,76,1) 11px, rgba(201,168,76,1) 12px)',
                    }}
                  />
                  <span
                    aria-hidden="true"
                    className="absolute -right-2 top-4 font-display leading-none select-none pointer-events-none text-royal-gold/[0.07] group-hover:text-royal-gold/[0.14] transition-colors duration-700"
                    style={{ fontSize: 'clamp(6rem, 18vw, 9rem)' }}
                  >
                    {pillar.glyph}
                  </span>
                  <div
                    aria-hidden="true"
                    className="absolute top-0 left-0 w-10 h-10 border-l border-t border-royal-gold/0 group-hover:border-royal-gold/50 transition-colors duration-500"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute bottom-0 right-0 w-10 h-10 border-r border-b border-royal-gold/0 group-hover:border-royal-gold/30 transition-colors duration-500"
                  />

                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <span className="font-mono text-royal-gold/50 text-[10px] tracking-[0.4em]">
                      {pillar.index}
                    </span>
                    <div className="flex flex-wrap justify-end gap-1.5 max-w-[60%]">
                      {pillar.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="font-mono text-[8px] tracking-[0.2em] uppercase text-royal-cream/20 border border-royal-cream/10 px-2 py-0.5 group-hover:border-royal-gold/30 group-hover:text-royal-cream/40 transition-colors duration-500"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 mt-16">
                    <div className="w-8 border-t border-royal-gold mb-5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                    <h3 className="font-display text-2xl text-royal-cream mb-2 group-hover:text-royal-gold transition-colors duration-300">
                      {pillar.category}
                    </h3>
                    <p className="font-body text-royal-cream/40 text-sm leading-relaxed max-w-[90%]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Magazine Issues */}
        <section className="bg-royal-cream py-24 px-8 md:px-20 border-t border-royal-border">
          <div
            ref={issuesRef}
            className={`max-w-7xl mx-auto transition-all duration-700 ease-out ${
              issuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 border-t border-royal-gold" />
              <p className="font-mono text-royal-gold text-[10px] tracking-[0.4em] uppercase">
                04 / Archive
              </p>
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-royal-black mb-16 leading-none">
              Past Issues
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {issues.map((issue) => (
                <a
                  key={issue.file}
                  href={`/images/TRAC/${issue.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-royal-border mb-4 ring-1 ring-royal-border group-hover:ring-royal-gold transition-all duration-300">
                    <img
                      src={`/images/TRAC/${issue.cover}`}
                      alt={`${issue.title} cover`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <p className="font-mono text-royal-muted text-[10px] tracking-widest uppercase mb-1">
                    TRAC Magazine
                  </p>
                  <p className="font-display text-2xl md:text-3xl text-royal-black mb-2">{issue.title}</p>
                  <p className="font-mono text-royal-gold/40 text-xs tracking-widest uppercase group-hover:text-royal-gold transition-colors duration-300">
                    Read PDF →
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Advertise With Us */}
        <section className="bg-royal-black py-24 px-8 md:px-20 border-t border-royal-dark-border">
          <div
            ref={advertiseRef}
            className={`max-w-7xl mx-auto transition-all duration-700 ease-out ${
              advertiseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 border-t border-royal-gold" />
              <p className="font-mono text-royal-gold/50 text-[10px] tracking-[0.4em] uppercase">
                05 / Advertising
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-16">
              <div>
                <h2 className="font-display text-5xl md:text-6xl text-royal-cream leading-none mb-6">
                  Advertise<br />With TRAC
                </h2>
                <p className="font-body text-royal-cream/40 text-base leading-relaxed max-w-md">
                  Put your brand in front of a culturally engaged, fashion-forward, and entrepreneurially
                  minded African audience. Our readers are trendsetters, decision-makers, and early adopters.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-royal-dark-border">
                {advertiseOptions.map((opt) => (
                  <div key={opt.title} className="bg-royal-black p-8 hover:bg-royal-black/60 transition-colors duration-300">
                    <h3 className="font-display text-xl text-royal-cream mb-3">{opt.title}</h3>
                    <p className="font-body text-royal-cream/30 text-sm leading-relaxed">{opt.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-royal-gold/20 p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <p className="font-mono text-royal-gold text-[10px] tracking-widest uppercase mb-2">Media Kit Available</p>
                <p className="font-body text-royal-cream/50 text-sm">
                  Reach out to receive our full media kit including audience demographics, platform reach, and advertising rates.
                </p>
              </div>
              <a
                href="mailto:tracmagazinesa@gmail.com?subject=Advertising Enquiry"
                className="shrink-0 bg-royal-gold text-royal-black px-8 py-3 text-xs tracking-widest uppercase font-mono hover:bg-royal-gold/80 transition-all duration-300"
              >
                Request Media Kit →
              </a>
            </div>
          </div>
        </section>

        {/* Submit a Story */}
        <section className="bg-royal-cream py-24 px-8 md:px-20 border-t border-royal-border">
          <div
            ref={pitchRef}
            className={`max-w-7xl mx-auto transition-all duration-700 ease-out ${
              pitchVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 border-t border-royal-gold" />
              <p className="font-mono text-royal-gold text-[10px] tracking-[0.4em] uppercase">
                06 / Contribute
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-5xl md:text-6xl text-royal-black mb-6 leading-none">
                  Have a Story<br />to Tell?
                </h2>
                <p className="font-body text-royal-muted text-base leading-relaxed mb-6">
                  TRAC Magazine is always looking for authentic stories, emerging voices, and bold ideas.
                  Whether you are a creative, entrepreneur, public figure, or brand — if your story is worth
                  telling, we want to hear it.
                </p>
                <p className="font-body text-royal-muted text-base leading-relaxed mb-8">
                  Submit your pitch, interview request, feature idea, or press release to our editorial
                  team. We read every submission.
                </p>
                <a
                  href="mailto:tracmagazinesa@gmail.com?subject=Story Pitch"
                  className="inline-block bg-royal-black text-royal-cream px-8 py-3 text-xs tracking-widest uppercase font-body font-medium hover:bg-royal-black/80 transition-all duration-300"
                >
                  Submit Your Story →
                </a>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Feature Interviews', desc: 'In-depth profiles of creatives and changemakers' },
                  { label: 'Brand Stories', desc: 'Origin, mission, and growth narratives for businesses' },
                  { label: 'Event Coverage', desc: 'Launches, activations, fashion shows, and more' },
                  { label: 'Opinion & Commentary', desc: 'Thought leadership on culture, business, and society' },
                ].map((item) => (
                  <div key={item.label} className="border-b border-royal-border pb-4">
                    <p className="font-display text-lg text-royal-black">{item.label}</p>
                    <p className="font-body text-royal-muted text-sm mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-royal-black border-t border-royal-dark-border py-16 px-8 md:px-20">
          <div
            ref={contactRef}
            className={`max-w-7xl mx-auto transition-all duration-700 ease-out ${
              contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-start justify-between flex-wrap gap-12">
              <div>
                <div className="w-8 border-t border-royal-gold mb-4" />
                <h2 className="font-display text-4xl text-royal-cream">Collaborate With Us</h2>
                <p className="font-body text-royal-cream/30 text-sm mt-2">
                  Features · Advertising · Partnerships
                </p>
              </div>

              <div className="flex flex-col gap-4 min-w-[260px]">
                {[
                  { icon: '✉', href: 'mailto:tracmagazinesa@gmail.com', label: 'tracmagazinesa@gmail.com', external: false },
                  { icon: '💬', href: 'https://wa.me/27769072410', label: 'WhatsApp: 076 907 2410', external: true },
                  { icon: '📞', href: 'tel:+27630292113', label: '+27 63 029 2113', external: false },
                  { icon: '📸', href: 'https://instagram.com/trac_magazine', label: '@trac_magazine', external: true },
                  { icon: '👥', href: 'https://facebook.com/TRACMagazine', label: 'Facebook: TRAC Magazine', external: true },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="flex items-center gap-3 font-body text-royal-cream/40 hover:text-royal-gold transition-colors duration-300 text-sm group"
                  >
                    <span className="text-royal-gold">{item.icon}</span>
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
