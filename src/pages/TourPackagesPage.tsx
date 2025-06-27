import { Helmet } from "react-helmet";
import { Link } from "wouter";
import {
  MapPin,
  Users,
  Star,
  ArrowRight,
  Phone,
  Calendar,
  Eye,
  Award,
} from "lucide-react";

const TourPackagesPage = () => {
  const packageCategories = [
    {
      id: "pilgrimage",
      title: "Pilgrimage Tours",
      description: "Sacred journeys to holy destinations across India",
      icon: "🕉️",
      color: "bg-orange-50 border-orange-200 text-orange-800",
    },
    {
      id: "hill-stations",
      title: "Hill Stations",
      description: "Scenic mountain getaways in Western Ghats",
      icon: "🏔️",
      color: "bg-green-50 border-green-200 text-green-800",
    },
    {
      id: "beaches",
      title: "Beach Destinations",
      description: "Coastal paradise experiences along Arabian Sea",
      icon: "🏖️",
      color: "bg-blue-50 border-blue-200 text-blue-800",
    },
    {
      id: "mumbai-local",
      title: "Mumbai Local Tours",
      description: "Explore the commercial capital of India",
      icon: "🏙️",
      color: "bg-purple-50 border-purple-200 text-purple-800",
    },
    {
      id: "heritage",
      title: "Heritage Sites",
      description: "Historical monuments and cultural landmarks",
      icon: "🏛️",
      color: "bg-amber-50 border-amber-200 text-amber-800",
    },
    {
      id: "adventure",
      title: "Adventure Tours",
      description: "Thrilling outdoor activities in nature",
      icon: "🎯",
      color: "bg-red-50 border-red-200 text-red-800",
    },
  ];

  const tourPackages = {
    pilgrimage: [
      {
        name: "Shirdi Darshan",
        image: "shirdi_darshan.jpg",
        canSee: [
          "Sai Baba Temple",
          "Dwarkamai Mosque",
          "Chavadi",
          "Shani Shingnapur",
        ],
        famousFor: [
          "Sai Baba's Miracles",
          "Spiritual Healing",
          "Aarti Ceremonies",
          "Sacred Atmosphere",
        ],
        rating: 4.8,
        description:
          "Experience divine blessings at the holy shrine of Sai Baba. The temple complex attracts millions of devotees annually who come seeking peace and spiritual guidance.",
        bestTime: "October to March",
        difficulty: "Easy",
      },
      {
        name: "Bhimashankar Jyotirlinga",
        image: "bhimashankar-temple.jpg",
        canSee: [
          "Ancient Jyotirlinga Temple",
          "Wildlife Sanctuary",
          "Hanuman Lake",
          "Gupt Bhimashankar",
        ],
        famousFor: [
          "One of 12 Jyotirlingas",
          "Biodiversity Hotspot",
          "Trekking Trails",
          "Sacred Geometry",
        ],
        rating: 4.7,
        description:
          "Sacred Jyotirlinga temple nestled in the pristine Sahyadri mountains, surrounded by rich flora and fauna of the Western Ghats.",
        bestTime: "October to February",
        difficulty: "Moderate",
      },
      {
        name: "Trimbakeshwar Temple",
        image: "Trimbakeshwar_Temple-Nashik-Maharashtra-1.jpg",
        canSee: [
          "Trimbakeshwar Temple",
          "Brahmagiri Hill",
          "Kushavarta Kund",
          "Godavari Origin",
        ],
        famousFor: [
          "Source of Godavari River",
          "Unique Shivalinga",
          "Kumbh Mela Site",
          "Pitra Paksha Rituals",
        ],
        rating: 4.9,
        description:
          "One of the twelve sacred Jyotirlingas and the origin point of the holy Godavari river, making it doubly significant for Hindu pilgrims.",
        bestTime: "September to March",
        difficulty: "Easy",
      },
      {
        name: "Somnath Dwarka Tour",
        image: "dwarka-and-somnath-tour-1.png",
        canSee: [
          "Somnath Temple",
          "Dwarka Temple",
          "Bet Dwarka Island",
          "Nageshwar Jyotirlinga",
        ],
        famousFor: [
          "Krishna's Kingdom",
          "First Jyotirlinga",
          "Ancient Architecture",
          "Arabian Sea Views",
        ],
        rating: 4.8,
        description:
          "Complete Gujarat pilgrimage covering Lord Krishna's ancient kingdom of Dwarka and the magnificent Somnath temple by the Arabian Sea.",
        bestTime: "October to March",
        difficulty: "Easy",
      },
    ],
    "hill-stations": [
      {
        name: "Lonavala Khandala",
        image:
          "https://cdn1.tripoto.com/media/filter/tst/img/1524784/Image/1586616431_5_3.jpg.webp",
        canSee: [
          "Tiger Point Viewpoint",
          "Bhushi Dam",
          "Ancient Karla Caves",
          "Historic Lohagad Fort",
        ],
        famousFor: [
          "Chikki (Local Sweet)",
          "Monsoon Waterfalls",
          "Valley Views",
          "Pleasant Climate",
        ],
        rating: 4.6,
        description:
          "Popular twin hill stations offering respite from city heat with lush green valleys, cascading waterfalls, and colonial-era charm.",
        bestTime: "October to May",
        difficulty: "Easy",
      },
      {
        name: "Mahabaleshwar Panchgani",
        image: "https://i.cdn.newsbytesapp.com/images/l4120211229212844.jpeg",
        canSee: [
          "Elephant's Head Point",
          "Fresh Strawberry Gardens",
          "Flat Table Land",
          "Arthur's Seat Cliff",
        ],
        famousFor: [
          "Strawberry Capital",
          "Panoramic Valleys",
          "Colonial Architecture",
          "Cool Climate",
        ],
        rating: 4.7,
        description:
          "The queen of hill stations renowned for strawberry cultivation, offering breathtaking valley views and pleasant weather year-round.",
        bestTime: "October to June",
        difficulty: "Easy",
      },
      {
        name: "Matheran Hill Station",
        image: "MATHERAN-4.jpg",
        canSee: [
          "Panorama Point Sunrise",
          "Echo Point Valley",
          "Serene Charlotte Lake",
          "One Tree Hill Peak",
        ],
        famousFor: [
          "Vehicle-Free Zone",
          "Toy Train Journey",
          "Pristine Nature",
          "Sunset Points",
        ],
        rating: 4.5,
        description:
          "Asia's only automobile-free hill station, accessible by heritage toy train, offering pristine nature and pollution-free environment.",
        bestTime: "October to May",
        difficulty: "Moderate",
      },
    ],
    beaches: [
      {
        name: "Goa Beach Holiday",
        image:
          "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        canSee: [
          "Golden Baga Beach",
          "Vibrant Calangute Beach",
          "Historic Old Goa Churches",
          "Aromatic Spice Plantations",
        ],
        famousFor: [
          "Beach Nightlife",
          "Portuguese Heritage",
          "Water Sports",
          "Seafood Cuisine",
        ],
        rating: 4.8,
        description:
          "India's premier beach destination combining sun, sand, and sea with rich Portuguese colonial heritage and vibrant nightlife.",
        bestTime: "November to March",
        difficulty: "Easy",
      },
      {
        name: "Konkan Coast Tour",
        image:
          "https://d3sftlgbtusmnv.cloudfront.net/blog/wp-content/uploads/2024/10/Places-To-Visit-In-Konkan-In-August-Cover-Photo-840x425.jpg",
        canSee: [
          "Sacred Ganpatipule Beach",
          "Historic Ratnagiri Port",
          "Pristine Tarkarli Beach",
          "Ancient Sindhudurg Fort",
        ],
        famousFor: [
          "Alphonso Mangoes",
          "Malvani Cuisine",
          "Clear Waters",
          "Coconut Groves",
        ],
        rating: 4.6,
        description:
          "Pristine Konkan coastline featuring unspoiled beaches, traditional fishing villages, and world-famous Alphonso mangoes.",
        bestTime: "October to March",
        difficulty: "Easy",
      },
    ],
    "mumbai-local": [
      {
        name: "Mumbai City Tour",
        image:
          "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        canSee: [
          "Iconic Gateway of India",
          "Queen's Necklace Marine Drive",
          "UNESCO Elephanta Caves",
          "Bustling Crawford Market",
        ],
        famousFor: [
          "Bollywood Capital",
          "Financial Hub",
          "Street Food",
          "Colonial Architecture",
        ],
        rating: 4.7,
        description:
          "Comprehensive exploration of Mumbai's iconic landmarks, from British colonial architecture to modern skyscrapers and vibrant street life.",
        bestTime: "October to March",
        difficulty: "Easy",
      },
      {
        name: "Bollywood & Film City Tour",
        image:
          "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        canSee: [
          "Film City Studios",
          "Celebrity Residences",
          "Bollywood Museum",
          "Scenic Juhu Beach",
        ],
        famousFor: [
          "Film Industry Hub",
          "Movie Sets",
          "Celebrity Culture",
          "Entertainment Capital",
        ],
        rating: 4.5,
        description:
          "Behind-the-scenes journey through Bollywood's heart, including studio visits, celebrity homes, and the glamorous world of Indian cinema.",
        bestTime: "Year Round",
        difficulty: "Easy",
      },
      {
        name: "Mumbai Heritage Walk",
        image:
          "https://images.unsplash.com/photo-1595658658481-d53d3f999875?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        canSee: [
          "Victorian CST Station",
          "Gothic High Court",
          "Neo-Gothic University",
          "Historic Oval Maidan",
        ],
        famousFor: [
          "UNESCO World Heritage",
          "Gothic Architecture",
          "British Legacy",
          "Art Deco Buildings",
        ],
        rating: 4.6,
        description:
          "Walking tour through Mumbai's architectural heritage, showcasing the world's largest collection of Victorian Gothic and Art Deco buildings.",
        bestTime: "October to March",
        difficulty: "Easy",
      },
    ],
    heritage: [
      {
        name: "Ajanta Ellora Caves",
        image:
          "ajanta-caves-chhatrapati-sambhaji-nagar-maharashtra-attr-hero-1.jpeg",
        canSee: [
          "Ancient Ajanta Paintings",
          "Monolithic Ellora Caves",
          "Imposing Daulatabad Fort",
          "Mughal Bibi Ka Maqbara",
        ],
        famousFor: [
          "UNESCO World Heritage",
          "Rock-Cut Architecture",
          "Buddhist Art",
          "Ancient Sculptures",
        ],
        rating: 4.9,
        description:
          "UNESCO World Heritage masterpieces showcasing 2000 years of ancient Indian art, architecture, and religious devotion carved into solid rock.",
        bestTime: "October to March",
        difficulty: "Moderate",
      },
      {
        name: "Pune Heritage Tour",
        image: "shaniwar-wada-pune-maharashtra-tri-iter-day1.jpg",
        canSee: [
          "Historic Shaniwar Wada",
          "Memorial Aga Khan Palace",
          "Hilltop Sinhagad Fort",
          "Peaceful Osho Ashram",
        ],
        famousFor: [
          "Maratha Empire Capital",
          "Educational Hub",
          "Cultural Center",
          "IT City",
        ],
        rating: 4.4,
        description:
          "Historical and cultural exploration of Pune, the former seat of Maratha power and modern educational hub known as the Oxford of the East.",
        bestTime: "October to March",
        difficulty: "Easy",
      },
    ],
    adventure: [
      {
        name: "Sahyadri Adventure",
        image:
          "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        canSee: [
          "Mountain Peaks",
          "River Rapids",
          "Forest Camps",
          "Rock Formations",
        ],
        famousFor: [
          "Trekking Trails",
          "White Water Rafting",
          "Wildlife Spotting",
          "Adventure Sports",
        ],
        rating: 4.6,
        description:
          "Thrilling adventure activities in the Western Ghats including trekking, river rafting, camping under stars, and rock climbing challenges.",
        bestTime: "October to May",
        difficulty: "Challenging",
      },
      {
        name: "Dandeli Adventure",
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        canSee: [
          "Kali River Rapids",
          "Dense Forest Wildlife",
          "Adventure Courses",
          "Scenic Valleys",
        ],
        famousFor: [
          "Water Sports Hub",
          "Wildlife Sanctuary",
          "Adventure Capital",
          "Eco-Tourism",
        ],
        rating: 4.7,
        description:
          "Ultimate adventure destination offering white water rafting, jungle safaris, zip-lining through forests, and kayaking in pristine waters.",
        bestTime: "October to May",
        difficulty: "Challenging",
      },
    ],
  };

  const scrollToCategory = (categoryId: any) => {
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  const renderRating = (rating: any) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? "fill-amber-400 text-amber-400"
            : "text-gray-300"
        }`}
      />
    ));
  };

  const getDifficultyColor = (difficulty: any) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800";
      case "Moderate":
        return "bg-yellow-100 text-yellow-800";
      case "Challenging":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <>
      <Helmet>
        <title>Tour Packages - Gautham Tours and Travels</title>
        <meta
          name="description"
          content="Explore our comprehensive tour packages including pilgrimage tours, hill stations, beaches, Mumbai local tours, heritage sites and adventure tours across Maharashtra and India."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Tour Packages
            </h1>
            <p className="text-xl mb-12 text-slate-300 leading-relaxed">
              Discover amazing destinations with our carefully curated tour
              packages across Maharashtra and beyond.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-slate-800 rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-400">50+</div>
                <div className="text-sm text-slate-400 mt-2">Tour Packages</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-6">
                <div className="text-3xl font-bold text-green-400">6</div>
                <div className="text-sm text-slate-400 mt-2">Categories</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-6">
                <div className="text-3xl font-bold text-purple-400">100%</div>
                <div className="text-sm text-slate-400 mt-2">Customizable</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-6">
                <div className="text-3xl font-bold text-orange-400">24/7</div>
                <div className="text-sm text-slate-400 mt-2">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Tour Categories
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Choose from our diverse range of tour categories designed to suit
              every traveler's preference and create unforgettable memories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packageCategories.map((category) => (
              <div
                key={category.id}
                className="group cursor-pointer"
                onClick={() => scrollToCategory(category.id)}
              >
                <div
                  className={`${category.color} border-2 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="text-5xl mb-6">{category.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                  <p className="text-sm leading-relaxed opacity-80">
                    {category.description}
                  </p>
                  <div className="mt-6 flex items-center opacity-70 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium">
                      Explore packages
                    </span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Packages by Category */}
      {Object.entries(tourPackages).map(([categoryId, packages]) => {
        const category = packageCategories.find((cat) => cat.id === categoryId);
        return (
          <section
            key={categoryId}
            id={categoryId}
            className="py-20 bg-white scroll-mt-20"
          >
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center mb-6">
                  <span className="text-5xl mr-4">{category?.icon}</span>
                  <h2 className="text-4xl font-bold text-gray-900">
                    {category?.title}
                  </h2>
                </div>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                  {category?.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {packages.map((pkg, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="h-56 overflow-hidden relative">
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-md">
                        <div className="flex items-center">
                          {renderRating(pkg.rating)}
                          <span className="ml-2 text-sm font-semibold text-gray-800">
                            {pkg.rating}
                          </span>
                        </div>
                      </div>
                      <div
                        className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                          pkg.difficulty
                        )}`}
                      >
                        {pkg.difficulty}
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {pkg.name}
                        </h3>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {pkg.description}
                      </p>

                      <div className="space-y-4 mb-6">
                        <div>
                          <div className="flex items-center mb-3">
                            <Eye className="h-4 w-4 mr-2 text-blue-600" />
                            <h4 className="font-semibold text-gray-900">
                              What You Can See
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {pkg.canSee.map((item, i) => (
                              <span
                                key={i}
                                className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center mb-3">
                            <Award className="h-4 w-4 mr-2 text-green-600" />
                            <h4 className="font-semibold text-gray-900">
                              Famous For
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {pkg.famousFor.map((item, i) => (
                              <span
                                key={i}
                                className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full border border-green-200"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="text-sm text-gray-600 mb-6">
                        <span className="font-medium">Best Time:</span>{" "}
                        {pkg.bestTime}
                      </div>

                      <Link href="/booking" className="block">
                        <span className="block w-full text-center py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition font-medium cursor-pointer">
                          Book Now
                        </span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Custom Tour Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              Custom Tour Packages
            </h2>
            <p className="text-gray-600 mb-12 text-lg leading-relaxed">
              Don't see what you're looking for? We create personalized tour
              packages based on your preferences, budget, and schedule.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Flexible Dates
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Choose your preferred travel dates that fit your schedule
                  perfectly
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Any Group Size
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Customized packages for solo travelers, couples, families, and
                  large groups
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Custom Routes
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Design your own itinerary with multiple destinations and
                  unique experiences
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <span className="inline-flex items-center bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition cursor-pointer">
                  Plan Custom Tour <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Link>
              <Link href="/contact">
                <span className="inline-flex items-center bg-transparent border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition cursor-pointer">
                  Contact Us
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TourPackagesPage;
