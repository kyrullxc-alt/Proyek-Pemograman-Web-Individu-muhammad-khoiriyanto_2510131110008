# LAPORAN TUGAS — ETERNAL REALM ROBLOX CLAN

## Identitas
Nama proyek: ETERNAL REALM Roblox Clan Website
Tema: Roblox Clan / Community
Teknologi: HTML5, CSS3, JavaScript, Figma

## A. Perancangan UI/UX (Figma)
Proyek memiliki minimal 3 tampilan:
1. Desktop Home — 1440×1000.
2. Mobile Home — 390×844.
3. Desktop Join Clan — 1440×1000.

Design system konsisten menggunakan warna hitam (#08090D), biru-ungu (#6F4CFF dan #2F7CFF), putih (#F5F5F7), abu-abu (#A8ADBA), typography Inter/system sans, spacing kelipatan 8px, dan radius 12–20px.

Prototype sederhana:
- Home → Members.
- Home → Events.
- Home → Join Clan.
- Mobile Home → buka hamburger → halaman Members/Events/Join.
- Join Clan → submit → state sukses.

## B. Struktur Halaman (HTML)
Website menggunakan HTML5 semantic berupa `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, dan `<footer>`.
Setiap menu dibuat dalam file HTML berbeda:
- `index.html` = Home
- `members.html` = Members
- `events.html` = Events
- `join.html` = Join Clan

Struktur dibuat terindentasi dan rapi. Aksesibilitas dasar diterapkan dengan label pada form, placeholder yang jelas, `aria-label`, `aria-expanded`, dan `role="status"`.

## C. Tampilan & Tata Letak (CSS)
CSS menggunakan:
- Flexbox untuk navbar, tombol, dan beberapa layout.
- CSS Grid untuk kartu informasi, member, event, dan layout halaman.
- Media Queries pada 900px dan 650px untuk tablet dan mobile.
- Design system warna, typography, spacing, border, dan radius yang konsisten.

## D. Logika & Interaktivitas (JavaScript)
JavaScript memiliki Array of Objects:
```js
const members = [
  {name:"AdityaAPR", role:"Owner", initials:"AA"}
];
```

```js
let events = [
  {title:"ERL Community Night", date:"2026-10-10", time:"20:00", type:"Mabar Roblox"}
];
```

Implementasi:
1. Manipulasi DOM untuk membuat kartu member dan event secara dinamis.
2. Event click untuk menu mobile, filter role, dan sorting event.
3. Event input untuk pencarian member dan character counter.
4. Event submit untuk form Join Clan.
5. Percabangan digunakan pada filter dan validasi form.
6. Perulangan digunakan melalui `map()`, `filter()`, dan `forEach()`.
7. Fungsi modular dan arrow function digunakan agar kode lebih terstruktur.

## Kesimpulan
Kesimpulan yang saya dapat dari pembuatan website ETERNAL REALM adalah HTML digunakan untuk membuat struktur beberapa halaman, CSS digunakan untuk membuat tampilan yang rapi dan responsif, sedangkan JavaScript digunakan untuk membuat halaman menjadi interaktif. Website ini membagi Home, Members, Events, dan Join Clan ke HTML yang berbeda, tetapi tetap menggunakan satu design system dan satu JavaScript agar tampilannya konsisten dan fitur interaktifnya dapat berjalan.


## Data komunitas yang digunakan
Website menggunakan struktur organisasi ERL terbaru: Owner KayyERL, Co-Owner KinkERL, Invitation Manager ZeeERL, Staff Recruitment YellowERL dan RirinERL, Content Creator KyyERL dan XbaralERL, Lead Dance ERL BaronERL dan RenzERL, serta daftar member sesuai data proyek.
