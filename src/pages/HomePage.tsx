import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SharedNav from '../components/SharedNav'
import PageTransition from '../components/PageTransition'
import { useInView } from '../hooks/useInView'

const cards = [
  { num: '01', title: 'TRA Creations', sub: 'Digital media, brand strategy & communications agency', to: '/tra-creations' },
  { num: '02', title: 'TRAC Magazine', sub: 'Digital lifestyle & entertainment publication', to: '/trac-magazine' },
  { num: '03', title: 'Princess Mobeng', sub: 'Media personality, public relations & content creator', to: '/princess' },
]

const stats = [
  { value: '2020', label: 'Established' },
  { value: '3', label: 'Brands & Entities' },
  { value: '50+', label: 'Clients Served' },
  { value: '4', label: 'Magazine Issues' },
]

const values = [
  {
    num: '01',
    title: 'Authenticity',
    body: 'We don\'t follow trends — we set them. Every campaign, story, and brand experience we create is rooted in truth, culture, and genuine connection.',
  },
  {
    num: '02',
    title: 'Excellence',
    body: 'From ideation to execution, we hold every deliverable to the highest standard. Quality is not a goal — it is our baseline.',
  },
  {
    num: '03',
    title: 'Impact',
    body: 'We measure success by the difference we make — in brand growth, audience reach, cultural conversations, and the stories that endure.',
  },
]

export default function HomePage() {
  const [visible, setVisible] = useState(false)
  const [manifestoRef, manifestoVisible] = useInView()
  const [valuesRef, valuesVisible] = useInView()
  const [statsRef, statsVisible] = useInView()

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <PageTransition>
      <div>
        <SharedNav variant="light" />

        {/* Hero */}
        <section className="min-h-screen bg-royal-cream flex flex-col items-center justify-center text-center px-8 pt-24 pb-16 relative overflow-hidden">
          <div className="absolute top-24 left-8 w-14 h-14 border-t border-l border-royal-gold/30 hidden md:block" />
          <div className="absolute top-24 right-8 w-14 h-14 border-t border-r border-royal-gold/30 hidden md:block" />
          <div className="absolute bottom-8 left-8 w-14 h-14 border-b border-l border-royal-gold/30 hidden md:block" />
          <div className="absolute bottom-8 right-8 w-14 h-14 border-b border-r border-royal-gold/30 hidden md:block" />

          <div className="z-10">
            <p className="font-mono text-[10px] tracking-[0.45em] text-royal-muted uppercase mb-10">
              EST. 2020 · SOUTH AFRICA · DIGITAL MEDIA
            </p>

            <h1 className="font-display leading-none text-royal-black tracking-tight">
              {['THE', 'ROYAL', 'AFFAIR'].map((word, i) => (
                <span
                  key={word}
                  className="block transition-all duration-700 ease-out"
                  style={{
                    fontSize: 'clamp(3.5rem, 13vw, 12rem)',
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(24px)',
                    transitionDelay: `${i * 120}ms`,
                  }}
                >
                  {word}
                </span>
              ))}
            </h1>

            <div className="w-16 border-t border-royal-gold mx-auto my-8" />

            <p className="font-body text-royal-muted text-sm tracking-[0.25em] uppercase mb-12">
              Digital Media · Brand Strategy · Creative Excellence
            </p>

            <div className="flex gap-4 flex-wrap justify-center">
              <Link
                to="/tra-creations"
                className="bg-royal-gold text-royal-black px-8 py-3 text-xs tracking-widest uppercase font-body font-medium hover:bg-royal-gold-light transition-all duration-300"
              >
                Explore Our Work
              </Link>
              <Link
                to="/princess"
                className="border border-royal-black text-royal-black px-8 py-3 text-xs tracking-widest uppercase font-body font-medium hover:bg-royal-black hover:text-royal-cream transition-all duration-300"
              >
                Meet Princess M
              </Link>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-royal-gold animate-bounce">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </section>

        {/* Manifesto */}
        <section className="bg-royal-black py-28 px-8 md:px-20 border-b border-royal-dark-border">
          <div
            ref={manifestoRef}
            className={`max-w-5xl mx-auto text-center transition-all duration-700 ease-out ${
              manifestoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="w-8 border-t border-royal-gold mx-auto mb-8" />
            <p className="font-mono text-royal-gold/40 text-[10px] tracking-[0.4em] uppercase mb-8">
              Our Manifesto
            </p>
            <p
              className="font-display text-royal-cream leading-tight mb-8"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)' }}
            >
              "We are not just a brand — we are a movement. A creative ecosystem built to amplify African
              voices, celebrate culture, and craft stories that define generations."
            </p>
            <div className="w-8 border-t border-royal-gold/30 mx-auto mt-8" />
            <p className="font-mono text-royal-cream/20 text-[10px] tracking-[0.4em] uppercase mt-6">
              Princess Tsepiso Mobeng · Founder, The Royal Affair
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-royal-cream border-b border-royal-border py-16 px-8 md:px-20">
          <div
            ref={statsRef}
            className={`max-w-7xl mx-auto transition-all duration-700 ease-out ${
              statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-royal-border">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center py-6 px-4">
                  <p className="font-display text-5xl md:text-6xl text-royal-black leading-none">{stat.value}</p>
                  <p className="font-mono text-royal-muted text-[10px] tracking-[0.35em] uppercase mt-3">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Entity cards */}
        <section className="bg-royal-black py-24 px-8 md:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-16">
              <div className="w-8 border-t border-royal-gold" />
              <p className="font-mono text-royal-gold/50 text-[10px] tracking-[0.4em] uppercase">
                Our Ecosystem
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cards.map((card) => (
                <Link
                  key={card.to}
                  to={card.to}
                  className="bg-royal-cream p-10 group hover:bg-white transition-all duration-300 flex flex-col min-h-[320px] border-t-2 border-transparent hover:border-royal-gold"
                >
                  <span className="font-mono text-royal-muted text-xs tracking-widest mb-6 block">
                    {card.num}
                  </span>
                  <span className="font-display text-3xl text-royal-black block mb-3 leading-tight">
                    {card.title}
                  </span>
                  <span className="font-body text-royal-muted text-sm leading-relaxed mb-auto block">
                    {card.sub}
                  </span>
                  <span className="font-mono text-royal-gold text-xs tracking-widest uppercase mt-8 block group-hover:underline underline-offset-4">
                    Explore →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-royal-cream py-24 px-8 md:px-20 border-t border-royal-border">
          <div
            ref={valuesRef}
            className={`max-w-7xl mx-auto transition-all duration-700 ease-out ${
              valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 border-t border-royal-gold" />
              <p className="font-mono text-royal-gold text-[10px] tracking-[0.4em] uppercase">
                What Drives Us
              </p>
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-royal-black mb-16 leading-none">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {values.map((v) => (
                <div key={v.num}>
                  <span className="font-mono text-royal-muted/30 text-xs tracking-widest block mb-4">{v.num}</span>
                  <h3 className="font-display text-3xl text-royal-black mb-4">{v.title}</h3>
                  <div className="w-6 border-t border-royal-gold mb-4" />
                  <p className="font-body text-royal-muted text-base leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Band */}
        <section className="bg-royal-gold py-16 px-8 md:px-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="font-mono text-royal-black/40 text-[10px] tracking-[0.4em] uppercase mb-2">Ready to Begin?</p>
              <h2 className="font-display text-4xl md:text-5xl text-royal-black leading-tight">
                Let's build something<br />extraordinary together.
              </h2>
            </div>
            <div className="flex gap-4 flex-wrap">
              <Link
                to="/tra-creations"
                className="bg-royal-black text-royal-cream px-8 py-3 text-xs tracking-widest uppercase font-body font-medium hover:bg-royal-black/80 transition-all duration-300"
              >
                Work With Us
              </Link>
              <Link
                to="/trac-magazine"
                className="border border-royal-black text-royal-black px-8 py-3 text-xs tracking-widest uppercase font-body font-medium hover:bg-royal-black hover:text-royal-cream transition-all duration-300"
              >
                Read The Magazine
              </Link>
            </div>
          </div>
        </section>

        <footer className="bg-royal-black border-t border-royal-dark-border py-6 text-center">
          <p className="font-mono text-royal-cream/20 text-xs tracking-widest">
            © {new Date().getFullYear()} The Royal Affair Creations · South Africa
          </p>
        </footer>
      </div>
    </PageTransition>
  )
}
