// ===== 1. BRAND SETTINGS (change your details here) =====
const BRAND = {
  brandName: "Y&H Garment Care",
  tagline: "More than laundry. Complete garment care.",
  phone: "+2348126966400",
  whatsapp: "2348126966400",
  email: "hello@yourdomain.com",
  location: "Ifo, Ogun State, Nigeria"
};

// ===== 2. PAGE TITLE =====
document.title = BRAND.brandName + " | " + BRAND.tagline;

// ===== 3. BOOKING FORM: sends the details to WhatsApp =====
const bookingForm = document.getElementById("booking-form");
const dateInput = document.getElementById("date");

// Block past dates
dateInput.min = new Date().toISOString().split("T")[0];

bookingForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const f = new FormData(bookingForm);

  const message =
    "Hello " + BRAND.brandName + ", I would like to book a pickup.\n\n" +
    "Name: " + f.get("name") + "\n" +
    "Phone: " + f.get("phone") + "\n" +
    "Address: " + f.get("address") + "\n" +
    "Service: " + f.get("service") + "\n" +
    "Pickup date: " + f.get("date") + "\n" +
    "Notes: " + (f.get("notes") || "None");

  window.open(
    "https://wa.me/" + BRAND.whatsapp + "?text=" + encodeURIComponent(message),
    "_blank"
  );
});