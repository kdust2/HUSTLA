import { useEffect } from 'react';

const businessSteps = [
  'Write the brief',
  'We review it',
  'Reserve the budget',
  'Choose your workers',
  'Approve the work',
];

const workerSteps = [
  'Browse and apply',
  'Get accepted',
  'Deliver the work',
  'Fix once if needed',
  'Withdraw',
];

const faqs = [
  {
    question: 'How do I get paid?',
    answer:
      'Approved and cleared work becomes withdrawable. Payouts run every Tuesday and Friday. You need a verified mobile money or bank payout account; the minimum withdrawal is GH₵20.',
  },
  {
    question: 'What does HUSTLA cost?',
    answer:
      'Task workers pay GH₵20 a month and advertisers pay GH₵30 a month. The advertiser pays 10% on top of the worker reward.',
  },
  {
    question: 'What if a publisher never reviews my work?',
    answer:
      'They have 48 hours and receive a reminder. If nobody acts, it is approved automatically after the policy window.',
  },
  {
    question: 'How do corrections work?',
    answer:
      'There is one correction round. The publisher must request it within 48 hours and describe a specific issue.',
  },
  {
    question: 'How do disputes work?',
    answer:
      'Either side can open a dispute with a reason and evidence. Funds stay held while HUSTLA reviews the brief and submission.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'HUSTLA',
  url: 'https://hustla.com/',
  logo: 'https://hustla.com/logo.svg',
  description:
    'HUSTLA connects Ghanaian businesses and creators with people ready to make, promote and get things done — paid in cedis.',
  areaServed: 'Ghana',
  sameAs: [],
};

export default function App() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const revealTargets = document.querySelectorAll<HTMLElement>(
      '.hero-copy > *, .hero-card, .info-section .container > .eyebrow, .info-section .container > h2, .info-section .container > p, .two-col > div, .price-card, .faq-list details, .footer-wrap > *',
    );
    revealTargets.forEach((element, index) => {
      element.classList.add('motion-reveal');
      element.style.setProperty('--reveal-delay', `${(index % 5) * 75}ms`);
    });

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -36px 0px' },
    );
    revealTargets.forEach((element) => observer.observe(element));

    const magneticButtons = document.querySelectorAll<HTMLElement>('.btn-primary');
    const onPointerMove = (event: PointerEvent) => {
      const button = event.currentTarget as HTMLElement;
      const rect = button.getBoundingClientRect();
      button.style.setProperty('--mag-x', `${(event.clientX - rect.left - rect.width / 2) * 0.1}px`);
      button.style.setProperty('--mag-y', `${(event.clientY - rect.top - rect.height / 2) * 0.1}px`);
    };
    const resetMagnet = (event: PointerEvent) => {
      const button = event.currentTarget as HTMLElement;
      button.style.setProperty('--mag-x', '0px');
      button.style.setProperty('--mag-y', '0px');
    };
    magneticButtons.forEach((button) => {
      button.addEventListener('pointermove', onPointerMove);
      button.addEventListener('pointerleave', resetMagnet);
    });

    return () => {
      observer.disconnect();
      magneticButtons.forEach((button) => {
        button.removeEventListener('pointermove', onPointerMove);
        button.removeEventListener('pointerleave', resetMagnet);
        button.style.removeProperty('--mag-x');
        button.style.removeProperty('--mag-y');
      });
      revealTargets.forEach((element) => {
        element.classList.remove('motion-reveal', 'is-visible');
        element.style.removeProperty('--reveal-delay');
      });
    };
  }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#top" className="brand" aria-label="HUSTLA home">
            <img src="/logo.svg" alt="HUSTLA logo" />
            <span>HUSTLA</span>
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            <a href="#businesses">Businesses</a>
            <a href="#creators">Creators</a>
            <a href="#how-it-works">How it works</a>
            <a href="#pricing">Pricing</a>
            <a href="#help">Help</a>
          </nav>

          <div className="header-actions">
            <a className="btn btn-ghost" href="#help">
              Sign in
            </a>
            <a className="btn btn-primary" href="#pricing">
              Create account
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-orb hero-orb-one" aria-hidden="true" />
          <div className="hero-orb hero-orb-two" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-dot" /> The Ghana work marketplace</p>
              <h1>
                Make your next move <em>count.</em>
              </h1>
              <p className="lead">
                HUSTLA connects Ghanaian businesses and creators with people ready to make,
                promote and get things done — paid in cedis.
              </p>

              <div className="cta-row">
                <a href="#pricing" className="btn btn-primary">
                  Create your account <span aria-hidden="true">↗</span>
                </a>
                <a href="#how-it-works" className="btn btn-ghost">
                  See how it works <span aria-hidden="true">↓</span>
                </a>
              </div>

              <p className="microcopy"><span aria-hidden="true">✳</span> One account for campaign publishers and task workers.</p>
            </div>

            <div className="hero-card" aria-label="HUSTLA platform preview">
              <div className="hero-card-top">
                <span className="card-badge"><span className="status-dot" /> Discover · Hustle · Earn</span>
                <span className="card-mark" aria-hidden="true">H</span>
              </div>
              <div className="card-art" aria-hidden="true">
                <span className="art-ring art-ring-one" />
                <span className="art-ring art-ring-two" />
                <span className="art-star">✳</span>
                <span className="art-caption">WORK<br />IN MOTION</span>
              </div>
              <div className="hero-card-copy">
                <p className="card-kicker">A marketplace with momentum</p>
                <h2>Good work moves both ways.</h2>
                <p>Find people. Find paid work. Build something real.</p>
              </div>
              <ul className="card-highlights">
                <li><span className="highlight-icon">↗</span><span>GH₵40 <small>for your next idea</small></span><span className="highlight-check">✓</span></li>
                <li><span className="highlight-icon">✓</span><span>Approved work <small>only</small></span><span className="highlight-check">✓</span></li>
              </ul>
            </div>
          </div>
          <div className="hero-bottom container" aria-hidden="true"><span>BUILT FOR GHANA</span><span>REAL PEOPLE · REAL WORK · REAL CEDIS</span><span>SCROLL TO EXPLORE ↓</span></div>
        </section>

        <section id="businesses" className="info-section audience-section">
          <div className="container audience-grid">
            <div className="section-index">01 <span>—</span> FOR BUSINESS</div>
            <div>
              <p className="eyebrow">For businesses</p>
              <h2>Find your people.<br /><em>Make good work.</em></h2>
              <p className="section-copy">
                UGC, demos, graphics, testing and research — delivered by real people, with
                your budget held until approval.
              </p>
              <a className="text-link" href="#how-it-works">See the process <span>↗</span></a>
            </div>
            <div className="audience-stamp" aria-hidden="true"><span>GOOD<br />WORK<br /><em>STARTS</em><br />HERE</span><b>✳</b></div>
          </div>
        </section>

        <section id="creators" className="info-section alt audience-section creator-section">
          <div className="container audience-grid">
            <div className="section-index">02 <span>—</span> FOR CREATORS</div>
            <div>
              <p className="eyebrow">For creators</p>
              <h2>Promote your work.<br /><em>Earn from others.</em></h2>
              <p className="section-copy">
                Musicians, creators and freelancers can run campaigns for their own work and
                complete tasks for others — from one account, in one place.
              </p>
              <a className="text-link" href="#pricing">Find your next move <span>↗</span></a>
            </div>
            <div className="creator-note" aria-hidden="true"><span>YOUR<br />NEXT<br />MOVE</span><span className="note-arrow">↗</span><small>MADE TOGETHER</small></div>
          </div>
        </section>

        <section id="how-it-works" className="info-section process-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">The flow / 03</p>
              <h2>Two journeys.<br /><em>One marketplace.</em></h2>
              <p className="section-copy">Clear steps, fair expectations, and a little less guesswork.</p>
            </div>
            <div className="two-col">
              <div className="journey-card">
                <div className="journey-heading"><span className="journey-icon">↗</span><div><span className="card-kicker">THE PUBLISHER</span><h3>If you publish</h3></div></div>
                <ol className="steps">
                  {businessSteps.map((step, index) => (
                    <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><div><strong>{step}</strong></div><b aria-hidden="true">↗</b></li>
                  ))}
                </ol>
              </div>
              <div className="journey-card journey-card-dark">
                <div className="journey-heading"><span className="journey-icon">✳</span><div><span className="card-kicker">THE WORKER</span><h3>If you work</h3></div></div>
                <ol className="steps">
                  {workerSteps.map((step, index) => (
                    <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><div><strong>{step}</strong></div><b aria-hidden="true">↗</b></li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="info-section alt pricing">
          <div className="container pricing-layout">
            <div className="section-heading pricing-heading">
              <p className="eyebrow">Pricing & fees / 04</p>
              <h2>Simple,<br /><em>in cedis.</em></h2>
              <p className="section-copy">Straightforward memberships. No surprises hiding in the fine print.</p>
            </div>
            <div className="pricing-grid">
              <article className="price-card">
                <div className="price-card-head"><span className="label">01 / FOR WORKERS</span><span className="price-symbol">↗</span></div>
                <div className="price">GH₵20 <small>/ month</small></div>
                <p>Access work, apply to campaigns, and withdraw approved earnings.</p>
                <a className="text-link" href="#help">Get started <span>↗</span></a>
              </article>

              <article className="price-card featured">
                <div className="price-card-head"><span className="label">02 / FOR ADVERTISERS</span><span className="price-symbol">✳</span></div>
                <div className="price">GH₵30 <small>/ month</small></div>
                <p>Launch campaigns, manage budgets, and review completed work.</p>
                <a className="text-link" href="#help">Get started <span>↗</span></a>
              </article>
            </div>
          </div>
        </section>

        <section id="help" className="info-section faq-section">
          <div className="container faq-layout">
            <div className="section-heading">
              <p className="eyebrow">Help centre / 05</p>
              <h2>Answers, without<br /><em>the runaround.</em></h2>
              <p className="section-copy">Good work starts with knowing where you stand.</p>
            </div>
            <div className="faq-list">
              {faqs.map((item, index) => (
                <details key={item.question}>
                  <summary><span className="faq-number">0{index + 1}</span>{item.question}<span className="faq-toggle" aria-hidden="true">+</span></summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <a href="#top" className="brand footer-brand" aria-label="HUSTLA home">
            <img src="/logo.svg" alt="" />
            <span>HUSTLA</span>
          </a>
          <p>Built around real work in Ghana.<br />All times are Ghana time (GMT).</p>
          <a className="back-to-top" href="#top">BACK TO TOP <span>↑</span></a>
        </div>
        <div className="container footer-bottom"><span>© HUSTLA</span><span>DISCOVER. HUSTLE. EARN.</span><span>MADE FOR THE MOVERS.</span></div>
      </footer>
    </>
  );
}
