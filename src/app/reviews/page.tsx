import React from "react";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import SectionBackgroundWrapper from "~/components/SectionBackgroundWrapper";

const ReviewsPage = () => {
  return (
    <div>
      <Header />
      <SectionBackgroundWrapper>
        <section className="w-full py-20">
          <div className="container mx-auto px-4 text-center">
            {/* Section Heading */}
            <h2 className="font-heading mb-12 text-4xl tracking-widest text-(--color-text-primary) uppercase md:text-5xl">
              Reviews
            </h2>

            {/* Placeholder Content */}
            <div className="mx-auto max-w-3xl rounded-2xl border border-(--color-border-subtle) bg-(--color-bg-surface)/50 p-8 backdrop-blur-sm">
              <p className="font-body text-lg text-(--color-text-secondary) italic">
                &#34;Customer reviews and testimonials will appear here.&#34;
              </p>
            </div>
          </div>
        </section>
      </SectionBackgroundWrapper>
      <Footer />
    </div>
  );
};

export default ReviewsPage;
