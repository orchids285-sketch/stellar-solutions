import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/sections/HeroSection";
import { ValueFeaturesSection } from "@/components/sections/ValueFeaturesSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "terra–tory™ — Solutions for a future" },
      { name: "description", content: "terra–tory™ enhances digital ecosystems by supporting sustainable development, empowering brands." },
      { property: "og:title", content: "terra–tory™ — Solutions for a future" },
      { property: "og:description", content: "terra–tory™ enhances digital ecosystems by supporting sustainable development, empowering brands." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSection />
      <ValueFeaturesSection />
    </>
  );
}
