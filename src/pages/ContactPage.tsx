import { Phone, Mail, MapPin, Clock, Car, Shield, Star } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

const ContactPage = () => {
  const handleCall = (number: any) => {
    window.location.href = `tel:${number}`;
  };

  const handleEmail = () => {
    window.location.href = "mailto:gauthamnadar123@gmail.com";
  };

  const handleWhatsApp = (number: any) => {
    window.open(`https://wa.me/${number}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Ready to travel with comfort and reliability? Contact our team for
              personalized service and instant bookings.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Quick Contact Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Call Us Now
              </h3>
              <p className="text-slate-600 mb-4">
                Speak directly with our team
              </p>
              <Button
                onClick={() => handleCall("9833401900")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Call +91 9833401900
              </Button>
            </CardContent>
          </Card>

          <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                WhatsApp
              </h3>
              <p className="text-slate-600 mb-4">Quick messaging support</p>
              <Button
                onClick={() => handleWhatsApp("919833401900")}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                Message on WhatsApp
              </Button>
            </CardContent>
          </Card>

          <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Email Us
              </h3>
              <p className="text-slate-600 mb-4">Send detailed inquiries</p>
              <Button
                onClick={handleEmail}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              >
                Send Email
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <Card className="border-slate-200">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">
                  Contact Information
                </h2>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900 mb-2">
                        Phone Numbers
                      </h3>
                      <div className="space-y-2">
                        <a
                          href="tel:9833401900"
                          className="block text-slate-700 hover:text-blue-600 transition-colors"
                        >
                          +91 9833401900 (Primary)
                        </a>
                        <a
                          href="tel:8850919298"
                          className="block text-slate-700 hover:text-blue-600 transition-colors"
                        >
                          +91 8850919298
                        </a>
                        <a
                          href="tel:9619455668"
                          className="block text-slate-700 hover:text-blue-600 transition-colors"
                        >
                          +91 9619455668
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900 mb-2">
                        Email Address
                      </h3>
                      <a
                        href="mailto:gauthamnadar123@gmail.com"
                        className="text-slate-700 hover:text-purple-600 transition-colors"
                      >
                        gauthamnadar123@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900 mb-2">
                        Head Office
                      </h3>
                      <p className="text-slate-700 leading-relaxed">
                        113, 4/B, Matoshree, Maharashtra nagar
                        <br />
                        Mumbai - 400088, Maharashtra, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900 mb-2">
                        Business Hours
                      </h3>
                      <div className="text-slate-700 space-y-1">
                        <p>Monday - Sunday: 24/7 Available</p>
                        <p className="text-sm text-slate-500">
                          Emergency bookings accepted anytime
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Services Overview & Map */}
          <div className="space-y-8">
            {/* Services */}
            <Card className="border-slate-200">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Our Services
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                    <Car className="w-6 h-6 text-blue-600" />
                    <span className="font-medium text-slate-900">
                      Outstation Trips
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                    <Clock className="w-6 h-6 text-green-600" />
                    <span className="font-medium text-slate-900">
                      Local Travel
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                    <MapPin className="w-6 h-6 text-purple-600" />
                    <span className="font-medium text-slate-900">
                      Airport Transfer
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                    <Shield className="w-6 h-6 text-orange-600" />
                    <span className="font-medium text-slate-900">
                      Premium Cars
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="border-slate-200">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Find Us
                </h2>
                <div className="rounded-lg overflow-hidden border border-slate-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3224708648645!2d72.93836767600082!3d19.04955445280064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c67eb82d84c1%3A0x6403d6c27b46cba!2sMatoshri%20sahakari%20Grah%20Nirman%20Sanstha!5e0!3m2!1sen!2sin!4v1748951980887!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Gautham Tours and Travels Office Location"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-16">
          <Card className="border-slate-200 bg-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
                Why Choose Gautham Tours?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">
                    Premium Service
                  </h3>
                  <p className="text-slate-600">
                    Professional drivers, well-maintained vehicles, and punctual
                    service every time.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">
                    Safe & Reliable
                  </h3>
                  <p className="text-slate-600">
                    Your safety is our priority with GPS tracking and 24/7
                    customer support.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">
                    24/7 Available
                  </h3>
                  <p className="text-slate-600">
                    Round-the-clock service for all your travel needs, whenever
                    you need us.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
