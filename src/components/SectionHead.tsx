export function SectionHead({
  index,
  title,
  note,
}: {
  index: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="section-head">
      <span className="eyebrow">{index} · {title}</span>
      <h2>{title}</h2>
      {note ? <p className="note">{note}</p> : null}
    </div>
  );
}