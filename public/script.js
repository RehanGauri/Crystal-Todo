document.addEventListener("DOMContentLoaded", () => {
  // ✅ ADD TASK
  document.querySelectorAll(".todo-form").forEach(form => {
    form.addEventListener("submit", async e => {
      e.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      const action = form.getAttribute("action");

      const res = await fetch(action, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        location.reload(); // Optional: can use JS to append new item without reload
      }
    });
  });

  // ✅ TOGGLE CHECKBOX (No Reload, Apply strikethrough)
  document.querySelectorAll(".checkbox-form input[type='checkbox']").forEach(checkbox => {
    checkbox.addEventListener("change", async function (e) {
      e.preventDefault();

      const form = this.closest("form");
      const li = form.closest("li");
      const url = form.getAttribute("action");

      try {
        const res = await fetch(url, { method: "POST" });

        if (res.ok) {
          li.classList.toggle("completed-task");
        //   this.checked = !this.checked;
        } else {
          console.error("Toggle failed");
        }
      } catch (err) {
        console.error("Error:", err);
      }
    });
  });

  // ✅ UPDATE TASK
  document.querySelectorAll(".edit-form").forEach(form => {
    form.addEventListener("submit", async e => {
      e.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      const res = await fetch(form.action, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        location.reload();
      }
    });
  });

  // ✅ DELETE TASK
  document.querySelectorAll(".delete-form").forEach(form => {
    form.addEventListener("submit", async e => {
      e.preventDefault();
      const res = await fetch(form.action, { method: "POST" });
      if (res.ok) {
        location.reload();
      }
    });
  });
});


