import * as React from "react";

function useInView<T extends HTMLElement>() {
  const ref = React.useRef<T | null>(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

type StatProps = {
  label: string;
  stat: string;
  body: string;
  accent?: boolean;
  delay?: number;
  visible: boolean;
  className?: string;
  children?: React.ReactNode;
};

function StatCard({ label, stat, body, accent, delay = 0, visible, className, children }: StatProps) {
  return (
    <div
      className={`relative flex flex-col justify-between overflow-hidden ${className ?? ""}`}
      style={{
        background: accent ? "#f6d987" : "#eaece4",
        color: "#15190d",
        borderRadius: "16px",
        padding: "32px",
        minHeight: "304px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 700ms ease-out ${delay}ms, transform 700ms ease-out ${delay}ms`,
      }}
    >
      <div
        style={{
          fontSize: "12px",
          fontWeight: 500,
          letterSpacing: "0.02em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
      <div className="relative z-10 flex flex-col" style={{ gap: "8px" }}>
        <div
          style={{
            fontSize: "clamp(56px, 7vw, 96px)",
            fontWeight: 400,
            lineHeight: "92%",
            letterSpacing: "-0.04em",
          }}
        >
          {stat}
        </div>
        <div style={{ fontSize: "16px", lineHeight: "150%", maxWidth: "32ch" }}>
          {body}
        </div>
      </div>
      {children}
    </div>
  );
}

type ImgProps = {
  src: string;
  alt: string;
  delay?: number;
  visible: boolean;
  className?: string;
  style?: React.CSSProperties;
};

function ImageCard({ src, alt, delay = 0, visible, className, style }: ImgProps) {
  return (
    <div
      className={`overflow-hidden ${className ?? ""}`}
      style={{
        borderRadius: "16px",
        minHeight: "304px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 700ms ease-out ${delay}ms, transform 700ms ease-out ${delay}ms`,
        ...style,
      }}
    >
      <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
    </div>
  );
}

export function ValueFeaturesSection() {
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <section
      className="bg-white"
      style={{
        padding: "120px 0",
        fontFamily: '"LT Superior", sans-serif',
        color: "#15190d",
      }}
    >
      <div
        ref={ref}
        className="mx-auto"
        style={{ maxWidth: "1800px", padding: "0 32px" }}
      >
        {/* Headline */}
        <div style={{ marginBottom: "80px" }}>
          <div
            style={{
              height: "1px",
              borderTop: "1px dashed rgba(21,25,13,0.4)",
              marginBottom: "32px",
              opacity: visible ? 1 : 0,
              transition: "opacity 600ms ease-out",
            }}
          />
          <div
            style={{
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              marginBottom: "24px",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 600ms ease-out 100ms, transform 600ms ease-out 100ms",
            }}
          >
            Human Intelligence.
          </div>
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 48px)",
              fontWeight: 400,
              lineHeight: "92%",
              letterSpacing: "-0.04em",
              maxWidth: "18ch",
              margin: 0,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 700ms ease-out 200ms, transform 700ms ease-out 200ms",
            }}
          >
            Shape your sustainable vision with terra–tory™
          </h2>
        </div>

        {/* Bento grid */}
        <div
          className="grid"
          style={{
            gap: "16px",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gridAutoRows: "304px",
          }}
        >
          <StatCard
            visible={visible}
            delay={100}
            label="Human Result"
            stat="5,000+"
            body="Sustainable projects supported."
          />
          <ImageCard
            visible={visible}
            delay={150}
            src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80"
            alt="Macro of a green leaf"
            style={{ gridRow: "span 2", minHeight: "624px" }}
          />
          <StatCard
            visible={visible}
            delay={200}
            label="Human Result"
            stat="99.7%"
            body="Reliability guaranteed"
          />
          <ImageCard
            visible={visible}
            delay={250}
            src="https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=1200&q=80"
            alt="White cow facing camera"
          />
          <ImageCard
            visible={visible}
            delay={300}
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
            alt="Solar panels from above"
          />
          <StatCard
            visible={visible}
            delay={350}
            accent
            className="md:col-span-2"
            label="flexible design"
            stat="100+"
            body="Custom layouts tailored to green initiatives."
          >
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                width: "400px",
                height: "400px",
                borderRadius: "100vw",
                border: "1px dashed rgba(21,25,13,0.6)",
                bottom: "-172px",
                right: "-122px",
                pointerEvents: "none",
              }}
            />
          </StatCard>
        </div>
      </div>

      <style>{`
        .grid > :last-child { grid-column: span 2; }
        @media (max-width: 991px) {
          section[data-vf] { padding: 64px 0 !important; }
        }
        @media (max-width: 767px) {
          .grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          .grid > :nth-child(2) { grid-row: span 2 !important; }
          .grid > :last-child { grid-column: span 2 !important; }
        }
        @media (max-width: 479px) {
          .grid { grid-template-columns: 1fr !important; grid-auto-rows: auto !important; }
          .grid > * { grid-row: auto !important; grid-column: auto !important; min-height: 240px !important; }
          .grid > :nth-child(2) { min-height: 300px !important; }
        }
      `}</style>
    </section>
  );
}

export default ValueFeaturesSection;
