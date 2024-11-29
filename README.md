<!-- markdownlint-disable MD001 MD013 MD041 MD033 MD045 -->
<h3 align="center">
  <samp
    >&gt; <b>Saweria Donation Notifier</b
    >
  </samp>
</h3>

<p align="center">
  <samp
    ><br />「 <b>Saweria Donation Notifier</b> adalah aplikasi real-time yang dibuat untuk menangkap webhook dari platform <a href="https://saweria.co" target="_blank">Saweria</a> dan menampilkan notifikasi donasi secara langsung di frontend. 」
    <br />
  </samp>
</p>

<div align="center">

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Bun](https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

</div>
<p align="center">
  <a href="#features-">Features</a> •
  <a href="#workflow-">Workflow</a> •
  <a href="#installation-">Installation</a> •
  <a href="#contribution-">Contribution</a> •
  <a href="#license-">License</a>
</p>

---

<br/>

## Features 🌟

[![](https://markdown-videos-api.jorgenkh.no/youtube/yo8qgjzIfSs)](https://youtu.be/yo8qgjzIfSs)

Proyek ini terdiri dari dua bagian utama:

1. **Server (Backend)**
   <br/>Dibangun menggunakan [Express.js](https://expressjs.com/), server bertugas untuk:
   <br/>• Menerima webhook dari Saweria ketika ada donasi baru.
   <br/>• Memproses data donasi yang diterima.
   <br/>• Mengirimkan data donasi secara real-time ke frontend menggunakan [Socket.IO](https://socket.io/).

2. **Frontend**
   <br/>Dibangun menggunakan [Vite.js](https://vite.dev/) dan [Tailwind CSS](https://tailwindcss.com/), frontend bertugas untuk:
   <br/>• Menerima data donasi dari server secara real-time melalui Socket.IO.
   <br/>• Menampilkan informasi donasi secara dinamis dan menarik di layar.

<br/>

## Workflow 🎡

1. **Webhook**
   <br/>Ketika donasi baru masuk melalui Saweria, webhook akan memicu server untuk menerima data donasi tersebut.

2. **Broadcast**
   <br/>Server memproses data donasi dan mengirimkannya ke semua klien yang terhubung melalui Socket.IO.

3. **Real-Time Display**
   <br/>Frontend menerima data dari server dan langsung memperbarui tampilan untuk menampilkan informasi donasi kepada pengguna.

<br/>

## Installation 📝

1. Clone Repository

   ```bash
   git clone https://github.com/elvxk/saweria-donation-notifer.github
   cd saweria-donation-notifer
   ```

2. Setup Server

   ```bash
   cd server
   bun install    #or npm install
   bun run start  #or npm start
   ```

3. Setup Frontend

   ```bash
   cd frontend
   bun install    #or npm install
   bun run dev    #or npm run dev
   ```

4. Konfigurasi Webhook
   <br>Pastikan URL webhook di Saweria diatur ke endpoint server Anda.

<br/>

## Contribution 🤝

Kontribusi sangat dihargai! Jika Anda menemukan bug atau ingin menambahkan fitur baru, silakan buat issue atau pull request di repository GitHub ini. 🐛🚀

<br/>

## License 📜

Proyek ini dirilis di bawah lisensi MIT. Lihat file `LICENSE` untuk informasi lebih lanjut.

<br/>

---

<div align='center'>
<b>ELVXK</b>
<br/>
<a href="https://github.com/elvxk" target="_blank"><samp>Github</samp></a>
&nbsp;&middot;&nbsp;
<a href="https://github.com/elvxk" target="_blank"><samp>Instagram</samp> </a>
&nbsp;&middot;&nbsp;
<a href="https://www.linkedin.com/in/elvxk/" target="_blank"><samp>Linkedin</samp></a>
&nbsp;&middot;&nbsp;
<a href="https://dribbble.com/elvxk" target="_blank"><samp>Dribbble</samp></a>
<br/>
<a href="https://sandri.my.id" target="_blank"><samp>www.sandri.my.id</samp></a>
</div>
