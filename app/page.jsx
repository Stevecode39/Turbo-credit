export default function Home() {
  return (
    <main className="shell">
      <section className="panel" aria-labelledby="title">
        <p className="eyebrow">Vercel deployment ready</p>
        <h1 id="title">Turbo-credit</h1>
        <p className="lede">
          A clean Next.js foundation is configured for production builds from the
          main branch.
        </p>
        <div className="status-grid" aria-label="Deployment checklist">
          <div>
            <span>Build</span>
            <strong>npm run build</strong>
          </div>
          <div>
            <span>Framework</span>
            <strong>Next.js</strong>
          </div>
          <div>
            <span>Platform</span>
            <strong>Vercel</strong>
          </div>
        </div>
      </section>
    </main>
  );
}
