// A short visible Q&A list. Pages that publish FAQPage data must show the same questions on the page.
export function QaList({ id, title, items }: { id: string; title: string; items: { question: string; answer: string }[] }) {
  return (
    <section className="section" aria-labelledby={`${id}-title`}>
      <div className="wrap seo">
        <div className="seo-text">
          <h2 id={`${id}-title`}>{title}</h2>
        </div>
        <div className="qa">
          {items.map((q) => (
            <details key={q.question}>
              <summary>{q.question}</summary>
              <p>{q.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
