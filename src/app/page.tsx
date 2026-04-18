"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="compact"
        sizing="medium"
        background="noiseDiagonalGradient"
        cardStyle="layered-gradient"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Showreel", id: "showreel" },
        { name: "Portfolio", id: "portfolio" },
        { name: "Processo", id: "processo" },
        { name: "Contatti", id: "contact" },
      ]}
      brandName="FPH Production"
      button={{ text: "Prenota una call", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{ variant: "radial-gradient" }}
      title="Transform Your Brand Identity into High-Performance Cinematic Assets"
      description="Trasformiamo l'identità visiva di brand automotive, lifestyle e luxury in asset cinematici ad alte prestazioni."
      buttons={[
        { text: "Prenota una call", href: "#contact" },
        { text: "Guarda il reel", href: "#showreel" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/portrait-brunette-bride-sitting-front-seat-pink-retro-car_8353-11671.jpg"
    />
  </div>

  <div id="showreel" data-section="showreel">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Direzione Creativa",          description: "Progettiamo lo storytelling che converte.",          phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/black-white-view-theatre_23-2151184687.jpg", imageAlt: "Showreel" },
          phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/african-american-music-producer-finishing-his-new-track-professional-studio_482257-122055.jpg", imageAlt: "Showreel" }
        },
        {
          title: "Produzione Cinematic",          description: "Qualità visiva superiore per ogni asset.",          phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/stylish-elegant-woman-car-salon_1157-33509.jpg", imageAlt: "Showreel" },
          phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/luggage-seen-from-rear-car-window_23-2150934313.jpg", imageAlt: "Showreel" }
        },
        {
          title: "Strategia Social",          description: "Asset ottimizzati per performance organica.",          phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/man-recording-studio-music-production_1303-20393.jpg", imageAlt: "Showreel" },
          phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/man-wearing-surfer-clothes-horizontal-shot_23-2148823848.jpg", imageAlt: "Showreel" }
        }
      ]}
      showStepNumbers={false}
      title="Il nostro Showreel"
      description="Una selezione dei progetti che hanno definito l'identità visiva di brand ambiziosi."
    />
  </div>

  <div id="cosa-facciamo" data-section="cosa-facciamo">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        { id: "f1", value: "Brand Film", title: "Cinematic Storytelling", items: ["Lanci Prodotto", "Brand Identity", "Eventi Premium"] },
        { id: "f2", value: "Social", title: "Reels & TikToks", items: ["Organico", "Strategia ADV", "User Retention"] },
        { id: "f3", value: "Packshot", title: "Prodotto & Food", items: ["Studio Shooting", "High-end Editing", "CGI Integration"] },
        { id: "f4", value: "Campaign", title: "Digital ADV", items: ["Retail Launch", "Conversion Oriented", "Format Diversi"] }
      ]}
      title="Cosa Facciamo"
      description="Produzioni studiate per il massimo ritorno sull'investimento marketing."
    />
  </div>

  <div id="portfolio" data-section="portfolio">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="asymmetric-60-wide-40-narrow"
      useInvertedBackground={false}
      products={[
        { id: "p1", name: "Harley-Davidson Launch", price: "+120K Views", imageSrc: "http://img.b2bpic.net/free-photo/urban-mysterious-lights-film-aesthetic_23-2149098542.jpg" },
        { id: "p2", name: "Luxury Beauty Tech", price: "35% CTR", imageSrc: "http://img.b2bpic.net/free-photo/sparkle-spikes-close-up-ferromagnetic-metal_23-2148253625.jpg" },
        { id: "p3", name: "Automotive Retail", price: "2.4x Conversions", imageSrc: "http://img.b2bpic.net/free-photo/cinema-seats_23-2147988957.jpg" },
        { id: "p4", name: "Lifestyle Campaign", price: "1.2M Reach", imageSrc: "http://img.b2bpic.net/free-photo/abstract-blur-empty-green-gradient-studio-well-use-as-backgroundwebsite-templateframebusiness-report_1258-107734.jpg" },
        { id: "p5", name: "Events Recap", price: "High Engagement", imageSrc: "http://img.b2bpic.net/free-photo/close-up-garbage-plastic-cups_23-2148393480.jpg" },
        { id: "p6", name: "Corporate Identity", price: "Premium Positioning", imageSrc: "http://img.b2bpic.net/free-photo/view-travel-items-inside-car-ready-trip_23-2151078229.jpg" }
      ]}
      title="Selected Work"
      description="Progetti scelti per il loro impatto concreto sul mercato."
    />
  </div>

  <div id="processo" data-section="processo">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Brief",          description: "Definiamo gli obiettivi di business.",          phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/professional-post-processing-photography-studio-with-editing-software-interface-pc-screens_482257-87241.jpg" },
          phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/view-travel-items-inside-car-ready-trip_23-2151078273.jpg" }
        },
        {
          title: "Pre-produzione",          description: "Storyboarding e planning meticoloso.",          phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/developing-photos-blurry-darkroom_23-2149893978.jpg" },
          phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-holding-beautiful-flowers_23-2149540010.jpg" }
        },
        {
          title: "Shoot",          description: "Esecuzione cinematografica.",          phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/movie-background-collage_23-2149876007.jpg" },
          phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/african-american-tracking-engineer-works-with-greenscreen_482257-122196.jpg" }
        },
        {
          title: "Delivery",          description: "Post-produzione veloce e asset pronti.",          phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/woman-getting-taxi-car_23-2149149590.jpg" },
          phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/asian-video-editor-working-with-multimedia-footage-editing-film-montage-with-color-grading-sound-working-freelance-home-using-post-production-software-make-movie_482257-48024.jpg" }
        }
      ]}
      showStepNumbers={true}
      title="Il Nostro Processo"
      description="Semplice, lineare, strategico."
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Chi siamo"
      description={[
        "Michele Floridia e il team FPH Production trasformano le esigenze di marketing in contenuti visivi memorabili. Non cerchiamo solo la bellezza, cerchiamo il risultato.",        "Cinematici per natura, strategici per scelta, veloci per necessità."]}
    />
  </div>

  <div id="clients" data-section="clients">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Automotive Group", "Moto Brand", "Luxury Beauty", "Tech Solutions", "Sportswear Intl", "Fashion House", "Agency Partners"
      ]}
      title="Brand che si affidano a noi"
      description="Collaboriamo con aziende leader per ridefinire la loro presenza digitale."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Sarah J.", role: "Marketing Manager", testimonial: "I contenuti di FPH hanno trasformato le performance social del nostro ultimo lancio.", imageSrc: "http://img.b2bpic.net/free-photo/content-senior-businessman-with-arms-crossed_1262-1790.jpg" },
        { id: "2", name: "Mark D.", role: "Brand Leader", testimonial: "Veloci, strategici e visivamente impeccabili. Non torneremo più indietro.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-woman-posing-with-blue-jacket_23-2149020777.jpg" },
        { id: "3", name: "Elena R.", role: "CMO", testimonial: "Finalmente un partner che capisce la differenza tra un bel video e un video che vende.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-woman-working-business-with-computer_482257-20185.jpg" },
        { id: "4", name: "Luca P.", role: "CEO", testimonial: "Michele è un regista che pensa come un imprenditore. È esattamente quello che ci serviva.", imageSrc: "http://img.b2bpic.net/free-photo/business-woman-making-quarter-review_23-2148411833.jpg" },
        { id: "5", name: "Giacomo V.", role: "Head of Social", testimonial: "I loro contenuti hanno triplicato l'engagement organico in soli due mesi.", imageSrc: "http://img.b2bpic.net/free-photo/focused-businessman-is-looking-screen-laptop-talking-cellphone_8353-10546.jpg" }
      ]}
      title="Dicono di noi"
      description="I risultati del nostro lavoro nelle parole di chi gestisce i brand."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        { id: "q1", title: "Tempi di consegna?", content: "Solitamente dai 15 ai 30 giorni dalla fine dello shoot, a seconda della complessità." },
        { id: "q2", title: "Budget indicativo?", content: "Lavoriamo su progetti premium partendo da un investimento minimo che garantisca standard cinematografici." },
        { id: "q3", title: "Diritti d'uso?", content: "Tutti i diritti di utilizzo commerciale sono inclusi nel pacchetto pattuito." },
        { id: "q4", title: "Aree geografiche?", content: "Siamo basati a Crema ma operiamo in tutta Italia e all'estero." },
        { id: "q5", title: "Come iniziare?", content: "Prenota una call tramite il link per discutere il tuo progetto." }
      ]}
      title="Domande Frequenti"
      description="Tutto quello che devi sapere prima di iniziare."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      background={{ variant: "gradient-bars" }}
      tag="Parliamo"
      title="Parliamo del tuo prossimo progetto"
      description="Pronto a elevare la tua comunicazione? Prenota una chiamata conoscitiva."
      buttonText="Prenota una call"
      mediaPosition="left"
      useInvertedBackground={false}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CX1xH7y0jxZ0fhv28YS97mOKD2/uploaded-1776519160163-6gjc83ut.png"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="FPH Production"
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CX1xH7y0jxZ0fhv28YS97mOKD2/uploaded-1776517996654-kbihox3z.png"
      leftLink={{ text: "Privacy Policy", href: "#" }}
      rightLink={{ text: "P.IVA 01858540196", href: "#" }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
