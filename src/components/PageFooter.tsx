import { Link } from 'react-router-dom'

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/tra-creations', label: 'TRA Creations' },
  { to: '/trac-magazine', label: 'TRAC Magazine' },
  { to: '/princess', label: 'Princess M' },
]

export default function PageFooter() {
  return (
    <footer className="bg-royal-black border-t border-royal-dark-border py-10 px-8 md:px-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-6">
        <div className="flex items-center gap-4">
          <div className="w-6 border-t border-royal-gold" />
          <p className="font-mono text-royal-cream/20 text-xs tracking-widest">
            © {new Date().getFullYear()} The Royal Affair Creations
          </p>
        </div>
        <nav className="flex gap-6 flex-wrap">
          {footerLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-mono text-royal-cream/20 text-[10px] tracking-widest uppercase hover:text-royal-gold transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
