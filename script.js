// Add your preferred email address here before publishing.
const CONTACT_EMAIL = "ankitgupta734867@gmail.com";

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Freelance project enquiry from ${form.get("name")}`);
  const body = encodeURIComponent(`Name: ${form.get("name")}\nEmail: ${form.get("email")}\n\nProject details:\n${form.get("message")}`);
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});
