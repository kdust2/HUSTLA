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
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">The Ghana work marketplace</p>
              <h1>
                Make your next move <em>count.</em>
              </h1>
              <p className="lead">
                HUSTLA connects Ghanaian businesses and creators with people ready to make,
                promote and get things done — paid in cedis.
              </p>

              <div className="cta-row">
                <a href="#pricing" className="btn btn-primary">
                  Create your account
                </a>
                <a href="#how-it-works" className="btn btn-ghost">
                  See how it works
                </a>
              </div>

              <p className="microcopy">One account for campaign publishers and task workers.</p>
            </div>

            <div className="hero-card" aria-label="HUSTLA platform preview">
              <div className="card-badge">Discover · Hustle · Earn</div>
              <h2>Good work moves both ways.</h2>
              <p>Find people. Find paid work. Build something real.</p>
              <ul>
                <li>GH₵40 for your next idea</li>
                <li>Approved work only</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="businesses" className="info-section">
          <div className="container">
            <p className="eyebrow">For businesses</p>
            <h2>Find your people. Make good work.</h2>
            <p>
              UGC, demos, graphics, testing and research — delivered by real people, with
              your budget held until approval.
            </p>
          </div>
        </section>

        <section id="creators" className="info-section alt">
          <div className="container">
            <p className="eyebrow">For creators</p>
            <h2>Promote your work. Earn from others.</h2>
            <p>
              Musicians, creators and freelancers can run campaigns for their own work and
              complete tasks for others — from one account, in one place.
            </p>
          </div>
        </section>

        <section id="how-it-works" className="info-section">
          <div className="container">
            <p className="eyebrow">The flow</p>
            <h2>Two journeys. One marketplace.</h2>
            <div className="two-col">
              <div>
                <h3>If you publish</h3>
                <ol className="steps">
                  {businessSteps.map((step, index) => (
                    <li key={step}>
                      <span>{index + 1}</span>
                      <div>
                        <strong>{step}</strong>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h3>If you work</h3>
                <ol className="steps">
                  {workerSteps.map((step, index) => (
                    <li key={step}>
                      <span>{index + 1}</span>
                      <div>
                        <strong>{step}</strong>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="info-section alt pricing">
          <div className="container">
            <p className="eyebrow">Pricing & fees</p>
            <h2>Simple, in cedis.</h2>
            <div className="pricing-grid">
              <article className="price-card">
                <span className="label">Task workers</span>
                <div className="price">GH₵20 <small>/ month</small></div>
                <p>Access work, apply to campaigns, and withdraw approved earnings.</p>
              </article>

              <article className="price-card featured">
                <span className="label">Advertisers</span>
                <div className="price">GH₵30 <small>/ month</small></div>
                <p>Launch campaigns, manage budgets, and review completed work.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="help" className="info-section faq-section">
          <div className="container">
            <p className="eyebrow">Help centre</p>
            <h2>Answers, without the runaround.</h2>

            <div className="faq-list">
              {faqs.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <div className="brand footer-brand">
            <img src="/logo.svg" alt="HUSTLA logo" />
            <span>HUSTLA</span>
          </div>
          <p>Built around real work in Ghana. All times are Ghana time (GMT).</p>
        </div>
      </footer>
    </>
  );
}
