// BookingForm.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { useToast } from "../hooks/use-toast";
import { Helmet } from "react-helmet";
import {
  Plus,
  X,
  MapPin,
  Calendar,
  Car,
  Phone,
  Mail,
  Languages,
  FileText,
} from "lucide-react";
import Swal from "sweetalert2";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const bookingFormSchema = z.object({
  tripType: z.string().min(1, "Trip type is required"),
  from: z.string().min(1, "From location is required"),
  destinations: z
    .array(z.string().min(1, "Destination is required"))
    .min(1, "At least one destination is required"),
  startDate: z.string().min(1, "Start date is required"),
  returnDate: z.string().optional(),
  vehicleType: z.string().min(1, "Vehicle type is required"),
  contactNumber: z.string().min(10, "Valid contact number is required"),
  email: z.string().email("Please enter a valid email address").optional(),
  driverLanguage: z.string().optional(),
  additionalRequirements: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

const BookingForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [destinations, setDestinations] = useState<string[]>([""]);

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      tripType: "",
      from: "",
      destinations: [""],
      startDate: "",
      returnDate: "",
      vehicleType: "",
      contactNumber: "",
      email: "",
      driverLanguage: "",
      additionalRequirements: "",
    },
  });

  const addDestination = () => {
    const newDestinations = [...destinations, ""];
    setDestinations(newDestinations);
    form.setValue("destinations", newDestinations);
  };

  const removeDestination = (index: number) => {
    if (destinations.length > 1) {
      const newDestinations = destinations.filter((_, i) => i !== index);
      setDestinations(newDestinations);
      form.setValue("destinations", newDestinations);
    }
  };

  const updateDestination = (index: number, value: string) => {
    const newDestinations = [...destinations];
    newDestinations[index] = value;
    setDestinations(newDestinations);
    form.setValue("destinations", newDestinations);
  };

  const resetForm = () => {
    form.reset({
      tripType: "",
      from: "",
      destinations: [""],
      startDate: "",
      returnDate: "",
      vehicleType: "",
      contactNumber: "",
      email: "",
      driverLanguage: "",
      additionalRequirements: "",
    });
    setDestinations([""]);
  };

  async function onSubmit(values: BookingFormValues) {
    setIsSubmitting(true);

    try {
      // Filter out empty destinations
      const filteredDestinations = values.destinations.filter(
        (dest) => dest.trim() !== ""
      );
      const bookingData = {
        ...values,
        destinations: filteredDestinations,
      };

      // Send to backend API
      const response = await fetch(
        "https://gautham-tours-and-travels.vercel.app/api/bookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit booking");
      }

      const result = await response.json();

      if (result.success) {
        // Success SweetAlert
        await Swal.fire({
          icon: "success",
          title: "Booking Submitted Successfully!",
          html: bookingData.email
            ? `<div class="text-center">
                <p class="mb-3 text-gray-700">Your booking request has been submitted successfully.</p>
                <p class="mb-2 text-gray-600">✅ Confirmation sent to your email</p>
                <p class="text-gray-600">📞 We'll contact you within 24 hours</p>
               </div>`
            : `<div class="text-center">
                <p class="mb-3 text-gray-700">Your booking request has been submitted successfully.</p>
                <p class="text-gray-600">📞 We'll contact you within 24 hours to confirm your booking</p>
               </div>`,
          confirmButtonColor: "#2563eb",
          confirmButtonText: "Great!",
          timer: 0,
          showClass: {
            popup: "animate__animated animate__fadeInUp animate__faster",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutDown animate__faster",
          },
        });

        // Reset form after successful submission
        resetForm();
      } else {
        throw new Error(result.message || "Booking submission failed");
      }
    } catch (error) {
      console.error("Booking submission error:", error);

      // Error SweetAlert
      await Swal.fire({
        icon: "error",
        title: "Submission Error",
        html: `<div class="text-center">
                <p class="mb-3 text-gray-700">There was an error submitting your booking.</p>
                <p class="text-gray-600">Please try again or contact us directly.</p>
               </div>`,
        confirmButtonColor: "#dc2626",
        confirmButtonText: "Try Again",
        showClass: {
          popup: "animate__animated animate__fadeInUp animate__faster",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutDown animate__faster",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Helmet>
        <title>Book Your Cab - Gautham Tours and Travels</title>
        <meta
          name="description"
          content="Book your chauffeur-driven cab for outstation trips, local travel, airport transfers across Maharashtra and India."
        />
      </Helmet>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Card className="border-slate-200 shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-3xl font-semibold text-slate-800 text-center">
              Book Your Ride
            </CardTitle>
            <p className="text-center text-slate-600 mt-2 font-medium">
              Complete the form below and we'll get back to you within 24 hours
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mt-4 hover:bg-emerald-100 transition-colors duration-200">
              <p className="text-emerald-800 text-sm font-medium text-center">
                ✅ Quick Response • 📞 Personal Service • 🚗 Professional
                Drivers
              </p>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Trip Type */}
                <FormField
                  control={form.control}
                  name="tripType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700 font-medium flex items-center gap-2">
                        <Car className="w-4 h-4 text-blue-600" />
                        Trip Type
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 hover:border-slate-400 transition-colors duration-200">
                            <SelectValue placeholder="Select Trip Type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-white border-slate-200 shadow-lg">
                          <SelectItem
                            value="outstation"
                            className="hover:bg-slate-50 cursor-pointer"
                          >
                            🛣️ Outstation Trip
                          </SelectItem>
                          <SelectItem
                            value="local"
                            className="hover:bg-slate-50 cursor-pointer"
                          >
                            🏙️ Local Travel
                          </SelectItem>
                          <SelectItem
                            value="airport"
                            className="hover:bg-slate-50 cursor-pointer"
                          >
                            ✈️ Airport Transfer
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* From Location */}
                <FormField
                  control={form.control}
                  name="from"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700 font-medium flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-green-600" />
                        From (Pickup Location)
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter pickup location"
                          className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 hover:border-slate-400 transition-colors duration-200"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Multiple Destinations */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <FormLabel className="text-slate-700 font-medium flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-red-600" />
                      Destinations
                    </FormLabel>
                    <Button
                      type="button"
                      onClick={addDestination}
                      variant="outline"
                      size="sm"
                      className="border-blue-300 text-blue-600 hover:bg-blue-50 hover:border-blue-400 transition-all duration-200"
                    >
                      <Plus className="w-4 h-4 mr-1" />
                      Add Destination
                    </Button>
                  </div>

                  {destinations.map((destination, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <div className="flex-1">
                        <Input
                          placeholder={`Destination ${index + 1}`}
                          value={destination}
                          onChange={(e) =>
                            updateDestination(index, e.target.value)
                          }
                          className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 hover:border-slate-400 transition-colors duration-200"
                        />
                      </div>
                      {destinations.length > 1 && (
                        <Button
                          type="button"
                          onClick={() => removeDestination(index)}
                          variant="outline"
                          size="sm"
                          className="border-red-300 text-red-600 hover:bg-red-50 hover:border-red-400 transition-all duration-200 mt-0"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>

                {/* Dates */}
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-purple-600" />
                          Start Date
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 hover:border-slate-400 transition-colors duration-200"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="returnDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-purple-600" />
                          Return Date
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 hover:border-slate-400 transition-colors duration-200"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Vehicle Type and Contact */}
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="vehicleType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium flex items-center gap-2">
                          <Car className="w-4 h-4 text-orange-600" />
                          Vehicle Type & Capacity
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 hover:border-slate-400 transition-colors duration-200">
                              <SelectValue placeholder="Choose based on passengers" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-white border-slate-200 shadow-lg">
                            <SelectItem
                              value="sedan-4"
                              className="hover:bg-slate-50 cursor-pointer"
                            >
                              🚗 Sedan (4 Seater) - Comfortable for families
                            </SelectItem>
                            <SelectItem
                              value="suv-7"
                              className="hover:bg-slate-50 cursor-pointer"
                            >
                              🚙 SUV (7 Seater) - Perfect for groups
                            </SelectItem>
                            <SelectItem
                              value="innova-8"
                              className="hover:bg-slate-50 cursor-pointer"
                            >
                              🚐 Innova (8 Seater) - Spacious & reliable
                            </SelectItem>
                            <SelectItem
                              value="tempo-12"
                              className="hover:bg-slate-50 cursor-pointer"
                            >
                              🚌 Tempo Traveller (12 Seater) - Group travel
                            </SelectItem>
                            <SelectItem
                              value="tempo-17"
                              className="hover:bg-slate-50 cursor-pointer"
                            >
                              🚌 Tempo Traveller (17 Seater) - Large groups
                            </SelectItem>
                            <SelectItem
                              value="bus-35"
                              className="hover:bg-slate-50 cursor-pointer"
                            >
                              🚍 Mini Bus (35 Seater) - Corporate/Events
                            </SelectItem>
                            <SelectItem
                              value="bus-45"
                              className="hover:bg-slate-50 cursor-pointer"
                            >
                              🚍 Bus (45+ Seater) - Large events/tours
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription className="text-slate-500">
                          Select based on number of passengers for comfortable
                          travel
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="contactNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium flex items-center gap-2">
                          <Phone className="w-4 h-4 text-green-600" />
                          Contact Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your phone number"
                            className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 hover:border-slate-400 transition-colors duration-200"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Email and Language */}
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium flex items-center gap-2">
                          <Mail className="w-4 h-4 text-blue-600" />
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Enter your email for booking confirmation"
                            className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 hover:border-slate-400 transition-colors duration-200"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="text-slate-500">
                          We'll send your booking confirmation to this email
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="driverLanguage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium flex items-center gap-2">
                          <Languages className="w-4 h-4 text-indigo-600" />
                          Preferred Driver Language
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 hover:border-slate-400 transition-colors duration-200">
                              <SelectValue placeholder="Select Language" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-white border-slate-200 shadow-lg">
                            <SelectItem
                              value="hindi"
                              className="hover:bg-slate-50 cursor-pointer"
                            >
                              🇮🇳 Hindi
                            </SelectItem>
                            <SelectItem
                              value="english"
                              className="hover:bg-slate-50 cursor-pointer"
                            >
                              🇬🇧 English
                            </SelectItem>
                            <SelectItem
                              value="marathi"
                              className="hover:bg-slate-50 cursor-pointer"
                            >
                              🇮🇳 Marathi
                            </SelectItem>
                            <SelectItem
                              value="gujarati"
                              className="hover:bg-slate-50 cursor-pointer"
                            >
                              🇮🇳 Gujarati
                            </SelectItem>
                            <SelectItem
                              value="tamil"
                              className="hover:bg-slate-50 cursor-pointer"
                            >
                              🇮🇳 Tamil
                            </SelectItem>
                            <SelectItem
                              value="telugu"
                              className="hover:bg-slate-50 cursor-pointer"
                            >
                              🇮🇳 Telugu
                            </SelectItem>
                            <SelectItem
                              value="kannada"
                              className="hover:bg-slate-50 cursor-pointer"
                            >
                              🇮🇳 Kannada
                            </SelectItem>
                            <SelectItem
                              value="bengali"
                              className="hover:bg-slate-50 cursor-pointer"
                            >
                              🇮🇳 Bengali
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription className="text-slate-500">
                          Choose your preferred language for better
                          communication
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Additional Requirements */}
                <FormField
                  control={form.control}
                  name="additionalRequirements"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700 font-medium flex items-center gap-2">
                        <FileText className="w-4 h-4 text-teal-600" />
                        Additional Requirements
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Special requests: Child seats, wheelchair accessibility, stops for meals, hotel bookings, sightseeing preferences, etc."
                          className="resize-none border-slate-300 focus:border-blue-500 focus:ring-blue-500 hover:border-slate-400 transition-colors duration-200"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="text-slate-500">
                        💡 We provide: Hotel bookings • Trip planning •
                        Sightseeing guides • Meal arrangements
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing Your Request...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <Car className="w-4 h-4" />
                      Submit Booking Request
                    </div>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default BookingForm;
