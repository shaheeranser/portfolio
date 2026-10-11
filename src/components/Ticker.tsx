const items = [
  "Next.js",
  "TypeScript",
  "FastAPI",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure",
  "GitHub Actions",
  "React",
  "MongoDB",
  "C++",
  "TensorFlow",
  "Linux",
];

function Group({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="ticker-group" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <span className="ticker-item" key={`${hidden ? "b" : "a"}-${item}`}>
          <span className="ticker-style">✦</span>
          {item}
        </span>
      ))}
    </div>
  );
}

export function Ticker() {
  return (
    <div className="ticker" aria-label="Technologies I work with">
      <div className="ticker-track">
        <Group />
        <Group hidden />
      </div>
    </div>
  );
}