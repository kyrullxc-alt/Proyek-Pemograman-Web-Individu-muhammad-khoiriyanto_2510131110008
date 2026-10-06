const LOGO_URL = "assets/erl-logo.png";

const members = [
  { name: "KayyERL", role: "Owner", initials: "KE" },
  { name: "KinkERL", role: "Co-Owner", initials: "KI" },
  { name: "ZeeERL", role: "Invitation Manager", initials: "ZE" },
  { name: "YellowERL", role: "Staff Recruitment", initials: "YE" },
  { name: "RirinERL", role: "Staff Recruitment", initials: "RE" },
  { name: "KyyERL", role: "Content Creator", initials: "KY" },
  { name: "XbaralERL", role: "Content Creator", initials: "XB" },
  { name: "BaronERL", role: "Lead Dance ERL", initials: "BA" },
  { name: "RenzERL", role: "Lead Dance ERL", initials: "RZ" },
  { name: "YukachanERL", role: "Member", initials: "YU" },
  { name: "BeeYUIN19_ERL", role: "Member", initials: "BE" },
  { name: "ERLncaa", role: "Member", initials: "EN" },
  { name: "Numb_ERL", role: "Member", initials: "NU" },
  { name: "Princes_ERL", role: "Member", initials: "PR" },
  { name: "ErniSk_ERL", role: "Member", initials: "ES" },
  { name: "Vortex_ERL", role: "Member", initials: "VO" },
  { name: "MoolinaaERL", role: "Member", initials: "MO" },
  { name: "ERL_shenjiejie", role: "Member", initials: "SH" },
  { name: "ERl_Queen", role: "Member", initials: "EQ" }
];

let events = [
  {
    title: "ERL Community Night",
    date: "2026-10-10",
    time: "20:00",
    type: "Mabar Roblox",
    image: "https://placehold.co/900x550/11131a/6f4cff?text=ERL+Community+Night"
  },
  {
    title: "Eternal Training",
    date: "2026-10-17",
    time: "19:30",
    type: "Training",
    image: "https://placehold.co/900x550/11131a/2f7cff?text=Eternal+Training"
  },
  {
    title: "ERL Tournament",
    date: "2026-10-24",
    time: "20:00",
    type: "Competition",
    image: "https://placehold.co/900x550/11131a/a855f7?text=ERL+Tournament"
  }
];

let activeRole = "All";

const $ = (selector) => document.querySelector(selector);

const formatDate = (date) => {
  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  }).format(new Date(`${date}T00:00:00`));
};

function setLogos() {
  document.querySelectorAll("[data-erl-logo]").forEach((logo) => {
    logo.src = LOGO_URL;
    logo.alt = "Logo ETERNAL REALM";
  });
}

function initMenu() {
  const toggle = $("#menuToggle");
  const nav = $("#navLinks");

  if (!toggle || !nav) {
    return;
  }

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      nav.classList.remove("open");
    }
  });
}

function renderMembers() {
  const grid = $("#memberGrid");
  const search = $("#memberSearch");
  const empty = $("#emptyMembers");

  if (!grid || !search) {
    return;
  }

  const keyword = search.value.trim().toLowerCase();
  const filteredMembers = members.filter((member) => {
    const matchRole = activeRole === "All" || member.role === activeRole;
    const matchSearch =
      member.name.toLowerCase().includes(keyword) ||
      member.role.toLowerCase().includes(keyword);

    return matchRole && matchSearch;
  });

  grid.innerHTML = filteredMembers
    .map(
      (member) => `
        <article class="member-card">
          <div class="avatar" aria-hidden="true">${member.initials}</div>
          <div class="member-info">
            <h3>${member.name}</h3>
            <p>ETERNAL REALM</p>
            <span class="role-tag">${member.role}</span>
          </div>
        </article>
      `
    )
    .join("");

  if (empty) {
    empty.classList.toggle("hidden", filteredMembers.length !== 0);
  }
}

function renderFilters() {
  const filters = $("#roleFilters");

  if (!filters) {
    return;
  }

  const roles = ["All", ...new Set(members.map((member) => member.role))];

  filters.innerHTML = roles
    .map(
      (role) => `
        <button class="filter-btn ${role === activeRole ? "active" : ""}" data-role="${role}">
          ${role}
        </button>
      `
    )
    .join("");

  filters.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      activeRole = button.dataset.role;
      renderFilters();
      renderMembers();
    });
  });
}

function renderEvents() {
  const grid = $("#eventGrid");

  if (!grid) {
    return;
  }

  grid.innerHTML = events
    .map(
      (event) => `
        <article class="event-card">
          <img class="event-image" src="${event.image}" alt="Foto kegiatan ${event.title}">
          <div class="event-content">
            <span class="event-date">${formatDate(event.date)}</span>
            <h3>${event.title}</h3>
            <p>Event komunitas ETERNAL REALM untuk member Roblox.</p>
            <div class="event-meta">
              <span>${event.type}</span>
              <span>${event.time} WITA</span>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function initJoinForm() {
  const form = $("#joinForm");
  const reason = $("#reason");

  if (!form || !reason) {
    return;
  }

  reason.addEventListener("input", () => {
    $("#charCount").textContent = reason.value.length;
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    ["usernameError", "discordError", "roleError", "reasonError"].forEach(
      (id) => {
        $("#" + id).textContent = "";
      }
    );

    const username = $("#username").value.trim();
    const discord = $("#discord").value.trim();
    const role = $("#role").value;
    const reasonText = reason.value.trim();
    const agree = $("#agree").checked;
    const status = $("#formStatus");
    let valid = true;

    if (username.length < 3) {
      $("#usernameError").textContent = "Username minimal 3 karakter.";
      valid = false;
    }

    if (discord.length < 2) {
      $("#discordError").textContent = "Discord wajib diisi.";
      valid = false;
    }

    if (!role) {
      $("#roleError").textContent = "Pilih role terlebih dahulu.";
      valid = false;
    }

    if (reasonText.length < 10) {
      $("#reasonError").textContent = "Alasan minimal 10 karakter.";
      valid = false;
    }

    status.className = "form-status";

    if (!agree) {
      status.textContent = "Centang persetujuan data terlebih dahulu.";
      status.classList.add("fail");
      valid = false;
    }

    if (valid) {
      status.textContent = `Pendaftaran ${username} berhasil dikirim sebagai ${role}!`;
      status.classList.add("success");
      form.reset();
      $("#charCount").textContent = "0";
    }
  });
}

setLogos();
initMenu();

$("#memberSearch")?.addEventListener("input", renderMembers);

$("#sortEvents")?.addEventListener("click", () => {
  events = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));
  renderEvents();
  $("#sortEvents").textContent = "Sudah Diurutkan ✓";
});

renderFilters();
renderMembers();
renderEvents();
initJoinForm();
