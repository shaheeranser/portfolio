export function SectionHead({ title, note }: { title: string; note?: string }) {
  return (
    <div className="section-head">
      <h2>{title}</h2>
      {note ? <p className="section-note">{note}</p> : null}
    </div>
  );
}
