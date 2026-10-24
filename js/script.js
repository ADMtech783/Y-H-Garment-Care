// ===== 1. BRAND SETTINGS (change your details here) =====
const BRAND = {
  brandName: "Y&H Garment Care",
  tagline: "More than laundry. Complete garment care.",
  phone: "+2348126966400",
  whatsapp: "2348126966400",
  email: "", // add your real email here when you have one
  location: "Ifo, Ogun State, Nigeria"
};

// ===== 2. PAGE TITLE =====
document.title = BRAND.brandName + " | " + BRAND.tagline;

// ===== 3. BOOKING FORM: opens WhatsApp with the customer's details =====
// Note: nothing is saved on a server. The customer must press Send in WhatsApp.
const bookingForm = document.getElementById("booking-form");
const dateInput = document.getElementById("date");

if (bookingForm && dateInput) {
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
}

// ===== 4. MOBILE MENU TOGGLE =====
const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");

if (navToggle && mainNav) {
  const icon = navToggle.querySelector(".material-symbols-outlined");

  function setMenu(open) {
    mainNav.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", open);
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    icon.textContent = open ? "close" : "menu";
  }

  navToggle.addEventListener("click", function () {
    setMenu(!mainNav.classList.contains("open"));
  });

  // Close the menu after tapping a link
  mainNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setMenu(false);
    });
  });

  // Close with the Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setMenu(false);
  });
}