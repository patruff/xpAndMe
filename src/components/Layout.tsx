export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <header className="relative z-50">
        {/* Your header/navigation */}
      </header>
      
      <main className="relative">
        {children}
      </main>
      
      <footer className="relative z-40">
        {/* Your footer */}
      </footer>
    </div>
  );
} 