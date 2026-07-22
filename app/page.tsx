const modules = [
  "Materiais e patrimônios",
  "Estoques e localizações",
  "Movimentações auditáveis",
  "Obras, eventos e romaneios",
  "Manutenção patrimonial",
];

export default function HomePage() {
  return (
    <main className="shell">
      <section className="hero">
        <span className="badge">Preview técnico</span>
        <p className="eyebrow">PredixAI Operations</p>
        <h1>Almoxarifado Inteligente</h1>
        <p className="lead">
          Base inicial da plataforma de inteligência operacional. Nenhum fluxo crítico,
          banco de dados ou operação real está habilitado neste preview.
        </p>
      </section>

      <section className="panel" aria-labelledby="status-title">
        <div>
          <p className="eyebrow">Estado do projeto</p>
          <h2 id="status-title">Fundação técnica em preparação</h2>
        </div>
        <dl className="statusGrid">
          <div>
            <dt>Frontend</dt>
            <dd>Next.js + TypeScript</dd>
          </div>
          <div>
            <dt>Deploy</dt>
            <dd>Preview Vercel</dd>
          </div>
          <div>
            <dt>Banco</dt>
            <dd>Ainda não conectado</dd>
          </div>
          <div>
            <dt>Produção</dt>
            <dd>Bloqueada</dd>
          </div>
        </dl>
      </section>

      <section className="modules" aria-labelledby="modules-title">
        <p className="eyebrow">Escopo planejado</p>
        <h2 id="modules-title">Módulos do primeiro ciclo</h2>
        <div className="cards">
          {modules.map((module) => (
            <article className="card" key={module}>
              <span aria-hidden="true">✓</span>
              <h3>{module}</h3>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
