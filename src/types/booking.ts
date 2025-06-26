// src/types/booking.ts

export interface BookingFormValues {
  tripType: string;
  from: string;
  destinations: string[];
  startDate: string;
  returnDate?: string;
  carType: string;
  contactNumber: string;
  email?: string;
  driverLanguage?: string;
  additionalRequirements?: string;
}

export interface EmailResult {
  adminSent: boolean;
  userSent: boolean;
}

export interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

// Trip type options
export const TRIP_TYPES = {
  OUTSTATION: "outstation",
  LOCAL: "local",
  AIRPORT: "airport",
} as const;

// Car type options
export const CAR_TYPES = {
  SEDAN: "sedan",
  SUV: "suv",
  LUXURY: "luxury",
  TEMPO: "tempo",
} as const;

// Language options
export const DRIVER_LANGUAGES = {
  HINDI: "hindi",
  ENGLISH: "english",
  MARATHI: "marathi",
  GUJARATI: "gujarati",
  TAMIL: "tamil",
  TELUGU: "telugu",
  KANNADA: "kannada",
  BENGALI: "bengali",
} as const;

export type TripType = (typeof TRIP_TYPES)[keyof typeof TRIP_TYPES];
export type CarType = (typeof CAR_TYPES)[keyof typeof CAR_TYPES];
export type DriverLanguage =
  (typeof DRIVER_LANGUAGES)[keyof typeof DRIVER_LANGUAGES];
