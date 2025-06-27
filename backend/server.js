const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: "gmail", // or your email service
  auth: {
    user: process.env.EMAIL_USER, // your email
    pass: process.env.EMAIL_PASS, // your app password
  },
});

// Verify transporter
transporter.verify((error, success) => {
  if (error) {
    console.log("Email transporter error:", error);
  } else {
    console.log("Email transporter ready");
  }
});

// Booking API endpoint
app.post("/api/bookings", async (req, res) => {
  try {
    const bookingData = req.body;

    // Validate required fields
    if (
      !bookingData.contactNumber ||
      !bookingData.from ||
      !bookingData.destinations?.length
    ) {
      return res.status(400).json({
        success: false,
        message: "Required fields are missing",
      });
    }

    // Create email content for admin
    const adminEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="color: #2563eb; text-align: center; margin-bottom: 30px;">New Booking Request</h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #334155; margin-top: 0;">Trip Details</h3>
          <p><strong>Trip Type:</strong> ${bookingData.tripType}</p>
          <p><strong>From:</strong> ${bookingData.from}</p>
          <p><strong>Destinations:</strong> ${bookingData.destinations.join(
            ", "
          )}</p>
          <p><strong>Start Date:</strong> ${bookingData.startDate}</p>
          ${
            bookingData.returnDate
              ? `<p><strong>Return Date:</strong> ${bookingData.returnDate}</p>`
              : ""
          }
          <p><strong>Car Type:</strong> ${bookingData.carType}</p>
        </div>

        <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #334155; margin-top: 0;">Contact Information</h3>
          <p><strong>Contact Number:</strong> ${bookingData.contactNumber}</p>
          ${
            bookingData.email
              ? `<p><strong>Email:</strong> ${bookingData.email}</p>`
              : ""
          }
          ${
            bookingData.driverLanguage
              ? `<p><strong>Preferred Driver Language:</strong> ${bookingData.driverLanguage}</p>`
              : ""
          }
        </div>

        ${
          bookingData.additionalRequirements
            ? `
        <div style="background-color: #fefce8; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #334155; margin-top: 0;">Additional Requirements</h3>
          <p>${bookingData.additionalRequirements}</p>
        </div>
        `
            : ""
        }

        <div style="text-align: center; padding: 20px; background-color: #fee2e2; border-radius: 8px;">
          <p style="color: #dc2626; font-weight: bold; margin: 0;">
            📞 Please contact the customer within 24 hours!
          </p>
        </div>
      </div>
    `;

    // Send email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL, // Admin email address
      subject: `New Booking Request - ${bookingData.tripType} from ${bookingData.from}`,
      html: adminEmailContent,
    };

    await transporter.sendMail(adminMailOptions);

    // Send confirmation email to customer (if email provided)
    if (bookingData.email) {
      const customerEmailContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #2563eb; text-align: center; margin-bottom: 30px;">Booking Confirmation - Gautham Tours and Travels</h2>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin-bottom: 20px; text-align: center;">
            <h3 style="color: #059669; margin-top: 0;">✅ Your booking request has been received!</h3>
            <p style="color: #334155;">We will contact you within 24 hours to confirm your booking.</p>
          </div>

          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #334155; margin-top: 0;">Your Trip Details</h3>
            <p><strong>Trip Type:</strong> ${bookingData.tripType}</p>
            <p><strong>From:</strong> ${bookingData.from}</p>
            <p><strong>Destinations:</strong> ${bookingData.destinations.join(
              ", "
            )}</p>
            <p><strong>Start Date:</strong> ${bookingData.startDate}</p>
            ${
              bookingData.returnDate
                ? `<p><strong>Return Date:</strong> ${bookingData.returnDate}</p>`
                : ""
            }
            <p><strong>Car Type:</strong> ${bookingData.carType}</p>
            <p><strong>Contact Number:</strong> ${bookingData.contactNumber}</p>
          </div>

          <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; text-align: center;">
            <p style="color: #92400e; margin: 0;">
              <strong>Need to make changes?</strong><br>
              Contact us at: ${process.env.ADMIN_EMAIL} or call ${
        process.env.ADMIN_PHONE || "our support number"
      }
            </p>
          </div>
        </div>
      `;

      const customerMailOptions = {
        from: process.env.EMAIL_USER,
        to: bookingData.email,
        subject: "Booking Confirmation - Gautham Tours and Travels",
        html: customerEmailContent,
      };

      await transporter.sendMail(customerMailOptions);
    }

    res.json({
      success: true,
      message: "Booking submitted successfully",
    });
  } catch (error) {
    console.error("Booking submission error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit booking",
    });
  }
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
