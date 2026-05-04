const D1_COLORS = {
  bg: '#f8f9fa', bgCard: '#ffffff', bgSection: '#f1f3f4',
  text: '#202124', textMuted: '#5f6368', accent: '#1a73e8', border: '#dadce0',
  darkBg: '#1a1a2e', darkBgCard: '#16213e', darkBgSection: '#0f3460',
  darkText: '#e8eaed', darkTextMuted: '#9aa0a6', darkAccent: '#8ab4f8', darkBorder: '#3c4043',
};

function Portfolio() {
  const [dark, setDark] = React.useState(false);
  const [activeNav, setActiveNav] = React.useState('hero');
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });
  const [formSent, setFormSent] = React.useState(false);

  const c = {
    bg: dark ? D1_COLORS.darkBg : D1_COLORS.bg,
    bgCard: dark ? D1_COLORS.darkBgCard : D1_COLORS.bgCard,
    bgSection: dark ? D1_COLORS.darkBgSection : D1_COLORS.bgSection,
    text: dark ? D1_COLORS.darkText : D1_COLORS.text,
    textMuted: dark ? D1_COLORS.darkTextMuted : D1_COLORS.textMuted,
    accent: dark ? D1_COLORS.darkAccent : D1_COLORS.accent,
    border: dark ? D1_COLORS.darkBorder : D1_COLORS.border,
  };

  const services = [
    { icon: '◻', title: 'Sites Vitrines', desc: 'Identité en ligne soignée, responsive, pensée pour convertir.' },
    { icon: '◈', title: 'E-commerce', desc: "Boutiques performantes avec expérience d'achat optimisée." },
    { icon: '◉', title: 'SEO & Performance', desc: 'Optimisation technique pour dominer les résultats de recherche.' },
    { icon: '◎', title: 'Maintenance', desc: 'Suivi, mises à jour et support réactif pour votre sérénité.' },
  ];

  const projects = [
    { tag: 'E-commerce', title: 'Maison Lumière', desc: 'Boutique en ligne de luminaires design. +40% de conversions.', tech: ['Next.js', 'Stripe', 'Sanity'] },
    { tag: 'Site Vitrine', title: 'Cabinet Morel', desc: "Site cabinet d'avocats, sobre et professionnel.", tech: ['React', 'Tailwind', 'Framer'] },
    { tag: 'Web App', title: 'PlannerPro', desc: 'Application de gestion de projets pour équipes créatives.', tech: ['Vue.js', 'Node', 'PostgreSQL'] },
    { tag: 'SEO', title: 'BioMarché Local', desc: 'Refonte SEO complète. ×3 visiteurs organiques en 6 mois.', tech: ['WordPress', 'GSC', 'Schema.org'] },
  ];

  const tagColors = { 'E-commerce': '#1a73e8', 'Site Vitrine': '#0f9d58', 'Web App': '#7c4dff', 'SEO': '#f4511e' };

  const navItems = [
    { id: 'hero', label: 'Accueil' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projets' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setActiveNav(id);
  };

  const GitHubIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );

  const LinkedInIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );

  return (
    <div style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", background: c.bg, color: c.text, minHeight: '100vh', transition: 'all 0.3s ease' }}>

      {/* ── NAV ── */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: dark ? 'rgba(26,26,46,0.95)' : 'rgba(248,249,250,0.95)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: `1px solid ${c.border}`, padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <div style={{ fontWeight: 700, fontSize: 18, color: c.accent, letterSpacing: '-0.5px', cursor: 'pointer' }} onClick={() => scrollTo('hero')}>
          Benjamin<span style={{ color: c.text }}>.</span>
        </div>
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          {navItems.map(n => (
            <button key={n.id} onClick={() => scrollTo(n.id)}
              style={{ background: activeNav === n.id ? (dark ? 'rgba(138,180,248,0.15)' : 'rgba(26,115,232,0.08)') : 'none', border: 'none', color: activeNav === n.id ? c.accent : c.textMuted, fontFamily: 'inherit', fontSize: 14, fontWeight: 500, padding: '6px 16px', borderRadius: 20, cursor: 'pointer', transition: 'all 0.2s' }}>
              {n.label}
            </button>
          ))}
          <div style={{ width: 1, height: 24, background: c.border, margin: '0 6px' }}></div>
          <button onClick={() => setDark(!dark)}
            style={{ background: dark ? 'rgba(138,180,248,0.15)' : 'rgba(26,115,232,0.08)', border: 'none', color: c.accent, padding: '6px 14px', borderRadius: 20, cursor: 'pointer', fontSize: 13, fontWeight: 500, fontFamily: 'inherit' }}>
            {dark ? '☀ Clair' : '◐ Sombre'}
          </button>
          {[
            { href: 'https://github.com', icon: <GitHubIcon /> },
            { href: 'https://linkedin.com', icon: <LinkedInIcon /> },
          ].map(({ href, icon }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '50%', background: dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)', color: c.textMuted, textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = c.accent; e.currentTarget.style.background = dark ? 'rgba(138,180,248,0.15)' : 'rgba(26,115,232,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = c.textMuted; e.currentTarget.style.background = dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)'; }}>
              {icon}
            </a>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="hero" style={{ minHeight: '92vh', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        {/* Background net — dégradé vif avec orbes colorées */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, background: dark ? 'linear-gradient(135deg, #0a0e2e 0%, #1a1060 40%, #0e2050 70%, #071428 100%)' : 'linear-gradient(135deg, #1a6cf5 0%, #6c3ef7 40%, #0e8cf5 70%, #4158f5 100%)' }}>
          <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: 600, height: 600, borderRadius: '50%', background: dark ? 'radial-gradient(circle, rgba(99,102,241,0.5) 0%, transparent 65%)' : 'radial-gradient(circle, rgba(255,255,255,0.22) 0%, transparent 65%)' }}></div>
          <div style={{ position: 'absolute', bottom: '-15%', right: '5%', width: 700, height: 700, borderRadius: '50%', background: dark ? 'radial-gradient(circle, rgba(59,130,246,0.45) 0%, transparent 65%)' : 'radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 65%)' }}></div>
          <div style={{ position: 'absolute', top: '30%', right: '20%', width: 350, height: 350, borderRadius: '50%', background: dark ? 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 65%)' : 'radial-gradient(circle, rgba(100,220,255,0.25) 0%, transparent 65%)' }}></div>
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.12 }} xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="white"/></pattern></defs>
            <rect width="100%" height="100%" fill="url(#dots)"/>
          </svg>
        </div>

        {/* Contenu hero — grande carte glass avec 2 colonnes internes */}
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '60px 48px', width: '100%' }}>
          <div style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 28, padding: '56px 60px', boxShadow: '0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.35)', display: 'grid', gridTemplateColumns: '1fr 380px', gap: 48, alignItems: 'center' }}>

            {/* Colonne gauche — texte */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 20, padding: '6px 16px', marginBottom: 32, fontSize: 13, color: '#fff', fontWeight: 500 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', display: 'inline-block', boxShadow: '0 0 8px #4ade80' }}></span>
                Disponible pour de nouveaux projets
              </div>
              <h1 style={{ fontSize: 52, fontWeight: 700, lineHeight: 1.1, margin: '0 0 20px', letterSpacing: '-2px', color: '#ffffff' }}>
                Je transforme vos <span style={{ color: '#bfdbfe' }}>idées</span> en expériences numériques
              </h1>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, margin: '0 0 36px' }}>
                Développeur &amp; éditeur de sites web basé en France. Je conçois des sites et applications qui allient design soigné et performance technique.
              </p>
              <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 44 }}>
                <button onClick={() => scrollTo('projects')} style={{ background: '#fff', color: '#1a6cf5', border: 'none', padding: '13px 28px', borderRadius: 24, fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', boxShadow: '0 4px 20px rgba(0,0,0,0.2)', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.25)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)'; }}>
                  Voir mes projets →
                </button>
                <button onClick={() => scrollTo('contact')} style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1.5px solid rgba(255,255,255,0.4)', padding: '12px 24px', borderRadius: 24, fontSize: 15, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}>
                  Me contacter
                </button>
              </div>
              <div style={{ display: 'flex', paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
                {[['12+', 'Projets livrés'], ['5 ans', "D'expérience"], ['100%', 'Clients satisfaits']].map(([val, label], i) => (
                  <div key={label} style={{ flex: 1, paddingRight: i < 2 ? 24 : 0, borderRight: i < 2 ? '1px solid rgba(255,255,255,0.15)' : 'none', paddingLeft: i > 0 ? 24 : 0 }}>
                    <div style={{ fontSize: 28, fontWeight: 700, color: '#fff', letterSpacing: '-1px' }}>{val}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', marginTop: 3 }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Colonne droite — terminal intégré dans la carte glass */}
            <div style={{ background: 'rgba(8,12,28,0.70)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 14, overflow: 'hidden', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 4px 24px rgba(0,0,0,0.3)', fontFamily: "'Courier New', Courier, monospace" }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 7 }}>
                <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }}></span>
                <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#febc2e', display: 'inline-block' }}></span>
                <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28c840', display: 'inline-block' }}></span>
              </div>
              <div style={{ padding: '28px 24px', fontSize: 13.5, lineHeight: 1.9 }}>
                <div><span style={{ color: '#7c9cf5' }}>const </span><span style={{ color: '#e2e8f0' }}>creator </span><span style={{ color: '#7c9cf5' }}>= </span><span style={{ color: 'rgba(255,255,255,0.5)' }}>{'{'}</span></div>
                <div style={{ paddingLeft: 18 }}><span style={{ color: '#94b4f8' }}>name</span><span style={{ color: 'rgba(255,255,255,0.35)' }}>: </span><span style={{ color: '#86efac' }}>"Benjamin"</span><span style={{ color: 'rgba(255,255,255,0.35)' }}>,</span></div>
                <div style={{ paddingLeft: 18 }}><span style={{ color: '#94b4f8' }}>surname</span><span style={{ color: 'rgba(255,255,255,0.35)' }}>: </span><span style={{ color: '#86efac' }}>"Pelissier"</span><span style={{ color: 'rgba(255,255,255,0.35)' }}>,</span></div>
                <div style={{ paddingLeft: 18 }}><span style={{ color: '#94b4f8' }}>skills</span><span style={{ color: 'rgba(255,255,255,0.35)' }}>: [</span><span style={{ color: '#86efac' }}>"PHP"</span><span style={{ color: 'rgba(255,255,255,0.35)' }}>, </span><span style={{ color: '#86efac' }}>"WordPress"</span><span style={{ color: 'rgba(255,255,255,0.35)' }}>, </span><span style={{ color: '#86efac' }}>"SEO"</span><span style={{ color: 'rgba(255,255,255,0.35)' }}>],</span></div>
                <div style={{ paddingLeft: 18 }}><span style={{ color: '#94b4f8' }}>mission</span><span style={{ color: 'rgba(255,255,255,0.35)' }}>: </span><span style={{ color: '#86efac' }}>"Créer &amp; éditer des sites"</span><span style={{ color: 'rgba(255,255,255,0.35)' }}>,</span></div>
                <div style={{ paddingLeft: 18 }}><span style={{ color: '#94b4f8' }}>location</span><span style={{ color: 'rgba(255,255,255,0.35)' }}>: </span><span style={{ color: '#86efac' }}>"Métropole Lilloise"</span></div>
                <div><span style={{ color: 'rgba(255,255,255,0.4)' }}>{'};'}</span></div>
                <div style={{ marginTop: 14 }}><span style={{ color: '#94b4f8' }}>creator</span><span style={{ color: 'rgba(255,255,255,0.4)' }}>.</span><span style={{ color: '#fbbf24' }}>buildAwesomeWebsite</span><span style={{ color: 'rgba(255,255,255,0.35)' }}>{'();'}</span></div>
                <div style={{ marginTop: 2 }}><span style={{ display: 'inline-block', width: 9, height: 17, background: '#7c9cf5', verticalAlign: 'middle', animation: 'blink 1.1s step-end infinite' }}></span></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ background: dark ? 'rgba(255,255,255,0.02)' : '#f1f3f4', padding: '96px 64px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 64 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: c.accent, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Services</div>
            <h2 style={{ fontSize: 48, fontWeight: 700, letterSpacing: '-1.5px', margin: 0, color: c.text }}>Ce que je fais</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {services.map((s, i) => (
              <div key={i} style={{ background: c.bgCard, borderRadius: 16, padding: 32, border: `1px solid ${c.border}`, transition: 'all 0.25s', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = dark ? '0 12px 32px rgba(0,0,0,0.4)' : '0 12px 32px rgba(26,115,232,0.12)'; e.currentTarget.style.borderColor = c.accent; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = c.border; }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: dark ? 'rgba(138,180,248,0.12)' : 'rgba(26,115,232,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, fontSize: 22, color: c.accent }}>{s.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 600, margin: '0 0 12px', color: c.text }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: c.textMuted, lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJETS ── */}
      <section id="projects" style={{ padding: '96px 64px', background: c.bg }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 64 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: c.accent, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Projets</div>
            <h2 style={{ fontSize: 48, fontWeight: 700, letterSpacing: '-1.5px', margin: 0, color: c.text }}>Réalisations récentes</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}>
            {projects.map((p, i) => (
              <div key={i} style={{ background: c.bgCard, borderRadius: 16, overflow: 'hidden', border: `1px solid ${c.border}`, transition: 'all 0.25s', cursor: 'pointer' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = dark ? '0 16px 48px rgba(0,0,0,0.4)' : '0 16px 48px rgba(0,0,0,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div style={{ height: 180, background: dark ? 'linear-gradient(135deg, rgba(138,180,248,0.08), rgba(138,180,248,0.03))' : 'linear-gradient(135deg, rgba(26,115,232,0.06), rgba(26,115,232,0.02))', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: `1px solid ${c.border}` }}>
                  <div style={{ fontFamily: 'monospace', fontSize: 12, color: c.textMuted, textAlign: 'center' }}>
                    <div style={{ color: c.accent, marginBottom: 4 }}>— capture d'écran —</div>
                    <div>{p.title}</div>
                  </div>
                </div>
                <div style={{ padding: 28 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                    <span style={{ fontSize: 12, fontWeight: 600, color: tagColors[p.tag] || c.accent, background: `${tagColors[p.tag] || c.accent}18`, padding: '4px 12px', borderRadius: 12 }}>{p.tag}</span>
                    <span style={{ fontSize: 13, color: c.accent, fontWeight: 500 }}>Voir →</span>
                  </div>
                  <h3 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 8px', color: c.text, letterSpacing: '-0.5px' }}>{p.title}</h3>
                  <p style={{ fontSize: 14, color: c.textMuted, lineHeight: 1.5, margin: '0 0 16px' }}>{p.desc}</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {p.tech.map(t => (
                      <span key={t} style={{ fontSize: 12, color: c.textMuted, background: dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)', padding: '4px 10px', borderRadius: 8, fontFamily: 'monospace' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ position: 'relative', padding: '96px 64px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: dark ? 'linear-gradient(135deg, #0a0e2e 0%, #1a1060 50%, #0e2050 100%)' : 'linear-gradient(135deg, #1a6cf5 0%, #6c3ef7 50%, #0e8cf5 100%)' }}>
          <div style={{ position: 'absolute', top: '-20%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 65%)' }}></div>
          <div style={{ position: 'absolute', bottom: '-20%', left: '5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 65%)' }}></div>
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.1 }} xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="dots-contact" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="white"/></pattern></defs>
            <rect width="100%" height="100%" fill="url(#dots-contact)"/>
          </svg>
        </div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 680, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.7)', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Contact</div>
            <h2 style={{ fontSize: 48, fontWeight: 700, letterSpacing: '-1.5px', margin: '0 0 16px', color: '#fff' }}>Parlons de votre projet</h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0 }}>Une idée ? Un projet ? Je suis disponible pour en discuter.</p>
          </div>
          {formSent ? (
            <div style={{ textAlign: 'center', padding: '48px 32px', background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderRadius: 20, border: '1px solid rgba(255,255,255,0.25)' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(74,222,128,0.2)', border: '1px solid rgba(74,222,128,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: '#4ade80', fontSize: 24 }}>✓</div>
              <h3 style={{ fontSize: 24, fontWeight: 700, color: '#fff', margin: '0 0 8px' }}>Message envoyé !</h3>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15 }}>Je vous réponds sous 24h.</p>
            </div>
          ) : (
            <div style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderRadius: 24, padding: '48px 48px', border: '1px solid rgba(255,255,255,0.25)', boxShadow: '0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)' }}>
              <form onSubmit={e => { e.preventDefault(); setFormSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[['name', 'Votre nom', 'text'], ['email', 'Votre email', 'email']].map(([field, placeholder, type]) => (
                  <div key={field}>
                    <label style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.8)', display: 'block', marginBottom: 8 }}>{placeholder}</label>
                    <input type={type} required placeholder={placeholder} value={formData[field]} onChange={e => setFormData(p => ({ ...p, [field]: e.target.value }))}
                      style={{ width: '100%', padding: '13px 16px', borderRadius: 12, border: '1.5px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: 15, fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                      onFocus={e => { e.target.style.borderColor = 'rgba(255,255,255,0.6)'; e.target.style.background = 'rgba(255,255,255,0.15)'; }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.2)'; e.target.style.background = 'rgba(255,255,255,0.1)'; }}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.8)', display: 'block', marginBottom: 8 }}>Votre message</label>
                  <textarea required placeholder="Décrivez votre projet..." rows={5} value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                    style={{ width: '100%', padding: '13px 16px', borderRadius: 12, border: '1.5px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: 15, fontFamily: 'inherit', outline: 'none', resize: 'vertical', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                    onFocus={e => { e.target.style.borderColor = 'rgba(255,255,255,0.6)'; e.target.style.background = 'rgba(255,255,255,0.15)'; }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.2)'; e.target.style.background = 'rgba(255,255,255,0.1)'; }}
                  ></textarea>
                </div>
                <button type="submit" style={{ background: '#fff', color: '#1a6cf5', border: 'none', padding: '14px 32px', borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.25)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)'; }}>
                  Envoyer le message →
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: '32px 64px', borderTop: `1px solid ${c.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: c.bg }}>
        <div style={{ fontSize: 14, color: c.textMuted }}>© 2026 Benjamin Pelissier</div>
        <div style={{ display: 'flex', gap: 24 }}>
          {[
            { href: 'https://github.com', label: 'GitHub', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg> },
            { href: 'https://linkedin.com', label: 'LinkedIn', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
          ].map(({ href, label, icon }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: c.textMuted, textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = c.accent}
              onMouseLeave={e => e.currentTarget.style.color = c.textMuted}>
              {icon}{label}
            </a>
          ))}
        </div>
      </footer>

    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(Portfolio));