import PortfolioNavbar from "@/features/portfolio/components/PortfolioNavbar";
import PortfolioCursor from "@/features/portfolio/components/PortfolioCursor";
import RetroBackground from "@/features/portfolio/components/RetroBackground";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PortfolioCursor />
      <PortfolioNavbar />
      <RetroBackground />
      <main className="w-full relative z-10 bg-transparent min-h-screen pt-28 pb-16 px-4 md:px-8 max-w-6xl mx-auto">
        {children}
      </main>
    </>
  );
}
