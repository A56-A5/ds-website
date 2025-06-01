export default function Hero() {
  return (
    <header className="bg-[var(--color-grey)] text-center py-16">
      <img src="/ds-logo.png" alt="Data Science Logo" className="mx-auto mb-6 w-40 h-40 rounded-full shadow-lg border-4 border-[var(--color-blue)] bg-[var(--color-grey)]" />
      <h1 className="text-4xl font-bold mb-4 text-[var(--color-blue)]">Welcome to the Department of Data Science</h1>
      <p className="text-lg text-gray-700">Explore our research, achievements, and upcoming events.</p>
    </header>
  );
} 