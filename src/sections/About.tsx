import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl md:text-4xl mb-4">
            About Gautham Tours and Travels
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover why we're passionate about making road trips comfortable,
            flexible, and enjoyable across Maharashtra and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-sans font-semibold text-2xl mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 mb-4">
              At Gautham Tours and Travels, we believe that journey matters as much as the
              destination. Our mission is to transform the way Maharashtra travels by
              road, offering premium chauffeur-driven services that prioritize
              your comfort, safety, and experience.
            </p>

            <h3 className="font-sans font-semibold text-2xl mb-4">
              Why We Love Road Trips
            </h3>
            <p className="text-gray-700 mb-4">
              Maharashtra's diverse landscapes, from misty mountain passes to coastal
              highways, deserve to be experienced up close. Road trips offer
              flexibility, authentic experiences, and the chance to discover
              hidden gems that most travelers miss.
            </p>

            <p className="text-gray-700">
              Our team of travel enthusiasts has curated services that eliminate
              the typical hassles of road travel while preserving the joy of
              discovery and freedom that makes road trips special.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Shirdi */}
            <img
              src="src/assets/shirdi.jpg"
              alt="shirdi temple"
              className="rounded-xl shadow-md h-full object-cover"
            />

            {/* Bus */}
            <img
              src="src/assets/image.png"
              alt="Bus"
              className="rounded-xl shadow-md object-cover mb-4"
            />

            {/* Grishneshwar */}
            <img
              src="src/assets/grishneshwar.jpg"
              alt="Maharashtra tourist destination"
              className="rounded-xl shadow-md object-cover mt-4 col-span-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;