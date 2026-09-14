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
      <main className="w-full relative z-10 bg-transparent min-h-[100dvh] pt-32 pb-24 px-6 max-w-5xl mx-auto">
        {children}
      </main>
    </>
  );
}
