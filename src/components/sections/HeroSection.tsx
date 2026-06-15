import * as React from "react";

export function HeroSection() {
  const ratingRef = React.useRef<HTMLDivElement | null>(null);
  const [ratingVisible, setRatingVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ratingRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRatingVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      className="overflow-hidden bg-white"
      style={{ padding: "8px", fontFamily: '"LT Superior", sans-serif' }}
    >
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
        {/* Left: Video panel */}
        <div
          className="overflow-hidden"
          style={{ borderRadius: "16px", height: "930px", maxHeight: "calc(100vh - 16px)" }}
        >
          <video
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80"
          >
            <source
              src="https://cdn.coverr.co/videos/coverr-aerial-view-of-solar-panels-2633/1080p.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Right: Content panel */}
        <div
          className="flex flex-col justify-between"
          style={{
            background: "#eaece4",
            borderRadius: "16px",
            color: "#15190d",
            padding: "132px 32px 64px 64px",
            gap: "24px",
          }}
        >
          {/* Top tile */}
          <div className="flex flex-col" style={{ gap: "24px" }}>
            <div
              style={{
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
              }}
            >
              more than a template
            </div>

            <h1
              style={{
                fontSize: "clamp(56px, 9vw, 112px)",
                fontWeight: 400,
                lineHeight: "93.3%",
                letterSpacing: "-0.04em",
                margin: 0,
              }}
            >
              Solutions for a future
            </h1>

            <p
              style={{
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: "140%",
                maxWidth: "44ch",
                margin: 0,
              }}
            >
              terra–tory™ enhances digital ecosystems by supporting sustainable development, empowering brands.
            </p>

            <div>
              <a
                href="#"
                className="group inline-flex items-center transition-colors duration-200"
                style={{
                  background: "#f6d987",
                  color: "#15190d",
                  borderRadius: "32px",
                  padding: "8px 16px",
                  fontSize: "16px",
                }}
              >
                <span
                  className="block overflow-hidden"
                  style={{ height: "24px" }}
                >
                  <span
                    className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-6"
                  >
                    {[0, 1].map((i) => (
                      <span
                        key={i}
                        className="flex items-center"
                        style={{ height: "24px", gap: "8px" }}
                      >
                        <span>Get Started</span>
                        <svg
                          width="7"
                          height="10"
                          viewBox="0 0 7 10"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M1 1l5 4-5 4" />
                        </svg>
                      </span>
                    ))}
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* Rating badge */}
          <div
            ref={ratingRef}
            className="inline-flex items-center self-start"
            style={{
              gap: "8px",
              background: "rgba(255,255,255,0.6)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderRadius: "24px",
              padding: "4px 12px 4px 4px",
              opacity: ratingVisible ? 1 : 0,
              transition: "opacity 700ms ease-out",
            }}
          >
            <span
              className="inline-flex items-center justify-center"
              style={{
                background: "#ffffff",
                borderRadius: "100vw",
                width: "32px",
                height: "32px",
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="#f6d987"
                aria-hidden="true"
              >
                <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.2L2 10l7.1-1.1L12 2z" />
              </svg>
            </span>
            <span style={{ fontSize: "16px", lineHeight: "150%" }}>
              4.9/5 from over 600 reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
