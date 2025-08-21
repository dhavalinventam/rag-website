import HeroSection from "@/components/pages/home/hero-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="py-5">
        <div className="container">
          <div className="row g-3">
            <div className="col-12 col-md-4">
              <div className="cardGlass h-100">
                <h3 className="h5 mb-2">Connect your data</h3>
                <p className="mb-0 text-secondary">
                  Bring files, URLs, and more. We handle chunking, embeddings, and storage.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="cardGlass h-100">
                <h3 className="h5 mb-2">Choose your model</h3>
                <p className="mb-0 text-secondary">
                  Works with popular LLM providers and lets you switch anytime.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="cardGlass h-100">
                <h3 className="h5 mb-2">Deploy in minutes</h3>
                <p className="mb-0 text-secondary">
                  Drop-in SDK and API to go from prototype to production fast.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
