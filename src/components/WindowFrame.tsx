import type { ReactNode } from "react";

export function WindowFrame({
  title,
  actions,
  children,
  className = "",
}: {
  title: string;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`window ${className}`}>
      <div className="window-bar">
        <span className="traffic" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="window-title">{title}</span>
        <span className="window-actions">{actions ?? <span />}</span>
      </div>
      {children}
    </div>
  );
}