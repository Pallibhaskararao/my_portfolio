document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.textContent = "Sending...";
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mgvylpnd", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        status.textContent = "✅ Message sent!";
        form.reset();
      } else {
        status.textContent = "❌ Failed to send!";
      }
    } catch (err) {
      status.textContent = "⚠️ Error sending message.";
    }
  });
});
