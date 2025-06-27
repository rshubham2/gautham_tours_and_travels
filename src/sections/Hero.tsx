import { Link } from "wouter";
import { Phone, Award } from "lucide-react";
import ParticleBackground from "../components/ParticleBackground";

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] sm:min-h-[85vh] flex items-center overflow-hidden">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/70 z-10"></div>

        {/* Video Background */}
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="hero_poster.jpg"
        >
          <source src="hero_intro.mp4" type="video/mp4" />
          {/* Fallback image if video fails */}
          <img
            src="hero_poster.jpg"
            alt="Scenic Indian highway"
            className="w-full h-full object-cover"
          />
        </video>

        {/* Particle Background */}
        <ParticleBackground
          className="opacity-20 sm:opacity-30"
          particleCount={20}
          particleColor="#FF6B35"
          particleSize={2}
          speed={0.3}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 pt-16 sm:pt-10">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Hero Content */}
          <div className="text-white fade-in order-2 lg:order-1 lg:col-span-2">
            <div className="relative inline-flex mb-4">
              <div className="flex items-center bg-slate-800/90 backdrop-blur-sm text-blue-100 px-4 py-2 rounded-full text-sm font-medium border border-slate-600/50 shadow-lg">
                <Award className="w-4 h-4 mr-2 text-blue-400" />
                <span>Maharashtra Service</span>
              </div>
            </div>

            <h1 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 leading-[1.1] tracking-tight">
              Your Journey,
              <span className="block text-orange-400 mt-2 drop-shadow-lg">
                Our Responsibility
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-100 max-w-2xl leading-relaxed font-light">
              Experience premium chauffeur-driven cab services across
              Maharashtra and beyond. Travel with comfort, flexibility, and
              peace of mind.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12">
              <Link href="/booking">
                <span className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center cursor-pointer group w-full sm:w-auto transform hover:-translate-y-0.5">
                  <span className="text-base">Book Your Cab Now</span>
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
              </Link>

              <a
                href="tel:9833401900"
                className="bg-slate-100 hover:bg-white text-slate-800 border border-slate-200 hover:border-slate-300 font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group w-full sm:w-auto transform hover:-translate-y-0.5"
              >
                <Phone className="h-5 w-5 mr-2 group-hover:rotate-6 transition-transform duration-300" />
                <span className="text-base">Call Now</span>
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex -space-x-2">
                <img
                  className="w-10 h-10 rounded-full border-2 border-slate-600 shadow-lg"
                  src="https://randomuser.me/api/portraits/women/40.jpg"
                  alt="Customer"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-slate-600 shadow-lg"
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Customer"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-slate-600 shadow-lg"
                  src="https://randomuser.me/api/portraits/women/24.jpg"
                  alt="Customer"
                />
                <div className="w-10 h-10 rounded-full border-2 border-slate-600 bg-blue-600 flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  10K+
                </div>
              </div>
              <div>
                <p className="text-white font-medium text-base">
                  Trusted by 10,000+ customers
                </p>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                  <span className="ml-2 text-slate-300 font-medium text-sm">
                    4.9/5 Rating
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Founder Section */}
          <div className="order-1 lg:order-2 mx-auto w-full max-w-md lg:max-w-none">
            <div className="group flex items-center gap-6 bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 hover:shadow-3xl hover:scale-105 cursor-pointer">
              <div className="relative flex-shrink-0">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 p-1 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  <img
                    src="founder.jpeg"
                    alt="R.K Selvan Nadar - Founder"
                    className="w-full h-full rounded-full object-cover border-4 border-white/50 group-hover:border-white/70 transition-all duration-500"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold shadow-lg border-2 border-white animate-pulse">
                  ✓
                </div>
                <div className="absolute top-0 -left-2 w-6 h-6 bg-orange-400 rounded-full animate-bounce opacity-60"></div>
                <div className="absolute -top-2 right-4 w-4 h-4 bg-blue-400 rounded-full animate-pulse opacity-50"></div>
              </div>
              <div className="flex-1 min-w-0 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg group-hover:text-blue-100 transition-colors duration-300">
                    R.K Selvan Nadar
                  </h3>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
                  <p className="text-blue-100 font-medium text-base">
                    Founder & Managing Director
                  </p>
                </div>
                <p className="text-gray-100 text-base leading-relaxed font-light group-hover:text-white transition-colors duration-300">
                  "15+ years of experience making road travel comfortable, safe,
                  and memorable."
                </p>
                <div className="flex items-center mt-3 gap-2">
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      ></div>
                    ))}
                  </div>
                  <span className="text-xs text-blue-200 font-medium">
                    Trusted Leader
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 hidden sm:block">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
