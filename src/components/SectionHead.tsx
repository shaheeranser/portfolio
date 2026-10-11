export function SectionHead({
  index,
  title,
  kicker,
  note,
}: {
  index: string;
  title: string;
  kicker?: string;
  note?: string;
}) {
  return (
    <div className="section-head">
      <span className="section-kicker">
        <span className="p">~/</span>
        <span className="n">{index}</span>
        <span className="c"> · </span>
        {kicker ?? title}
        <span className="c">_</span>
      </span>
      <h2>{title}</h2>
      {note ? <p className="section-note">{note}</p> : null}
    </div>
  );
}