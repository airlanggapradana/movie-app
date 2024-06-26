import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <section className="container">
        <div className="w-full px-5 pt-24 pb-16">
          <Hero />
        </div>
      </section>
    </main>
  );
}
