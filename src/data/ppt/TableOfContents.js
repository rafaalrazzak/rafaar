// Section Image
const Cover = {
  container: {
    bg: "/ppt/background/4-dark@1.5x.png",
  },
  content: {
    title: [
      "Laporan Praktek Kerja Industri",
      "Dinas Pemadam Kebakaran Kota Depok",
    ],
    image: "/ppt/logo-alas.png",
    footer: ["SMK AL-ASIYAH", "CIBINONG"],
  },
}

// Section Card
const ProfilPenulis = {
  container: {
    bg: "/ppt/background/hero-dark.png",
  },
  content: {
    title: "Profil Penulis",
    table: [
      ["Nama", ":", "Rafa Al Razzak"],
      ["NIS", ":", "0057680592"],
      ["Kelas", ":", "XI TKJ 3"],
      [
        "Alamat",
        ":",
        "Jl. Kerkop, Kp. Kebon Kopi, RT. 02 / RW.10, Kel. Puspanegara, Kec. Citeureup, Kab. Bogor",
      ],
    ],
  },
}

// Section Card
const ProfilPerusahaan = {
  container: {
    bg: "/ppt/background/5-dark@1.5x.png",
    bgImg: "/ppt/background/damkar-gdc-bg.png",
    gradientBg: {
      color: "tealSky",
      possition: "toR",
    },
  },
  content: {
    title: "Profil Perusahaan",
    table: [
      ["Nama Perusahaan", ":", "Dinas Pemadam Kebakaran Kota Depok"],
      ["Bidang Usaha", ":", "Pemadam Kebakaran"],
      ["Alamat", ":", "Jl. Boulevard Grand Depok City, Depok"],
      ["Kepala Dinas", ":", "Drs. R. Gandara Budiana"],
      ["Pembimbing", ":", "Nurahman, Atmaja"],
    ],
  },
}

// Section Text
const LatarBelakang = {
  container: {
    bg: "/ppt/background/5-dark@1.5x.png",
  },
  content: {
    title: "Latar Belakang Prakerin",
    description:
      "Praktik Kerja Lapangan (PKL) merupakan program penyelenggara pendidikan yang di rancang untuk memudahkan para siswa mencapai keterampilan masing-masing. Dalam Pelaksanaan PKL, pemberian pengalaman belajar sebagian diberikan oleh dunia usaha",
    align: "text-center",
  },
}

// Section Text
const Manfaat = {
  container: {
    bg: "/ppt/background/6-dark@1.5x.png",
  },
  content: {
    title: "Manfaat",
    list: [
      "Mengenlkan siswa-siswi pada pekerjaanlapangan di dunia industry dan usaha sehingga pada saatnya mereka terjun ke lapangan pekerjaan yang sesungguhnya dapat beradaptasi dengan cepat.",
      "Menambah keterampilan, pengetahuan, gagasan-gagasan seputar dunia usaha serta industri yang professional dan handal.",
      "Mengasah keterampilan yang diberikan sekolah menengah kejuruan (SMK)",
    ],
    align: "text-center",
  },
}

const WaktuTempat = {
  container: {
    bg: "/ppt/background/7-dark@1.5x.png",
  },
  content: {
    title: "Waktu dan Tempat",
    icon: [
      {
        title: "13 Desember 2022-13 Januari 2023",
        icon: "CalendarDaysIcon",
      },
      {
        title: "07.30-14.30",
        icon: "ClockIcon",
      },
      {
        title: "Dinas Pemadam Kebakaran Kota Depok",
        icon: "MapPinIcon",
      },
    ],
    align: "text-center",
  },
}

const JaringanKomputer = {
  container: {
    bg: "/ppt/background/8-dark@1.5x.png",
    center: false,
  },
  content: {
    title: "Jaringan Komputer",
    subtitle: "Kajian Teoritis",
    description:
      "Jaringan komputer adalah kumpulan perangkat yang terhubung untuk berbagi sumber daya dan informasi.",
    listTitle: "Jaringan Komputer Terdiri Dari:",
    list: [
      "Personal Area Network (PAN)",
      "Local Area Network (LAN)",
      "Wide Area Network (WAN)",
    ],
  },
}

const Website = {
  container: {
    bg: "/ppt/background/hero-dark.png",
    center: false,
  },
  content: {
    title: "Website",
    subtitle: "Kajian Teoritis",
    description:
      "Website adalah halaman web yang tersimpan di server dan bisa diakses melalui internet menggunakan browser.",
    image: "/ppt/thum/website@4x.png",
    cardImage: true,
    flex: true,
    contentAlign: "justify-between",
  },
}
const Komunikasi = {
  container: {
    bg: "/ppt/background/4-dark@1.5x.png",
    center: false,
  },
  content: {
    title: "Bagaimana Cara Berkomunikasi Pada Web?",
    subtitle: "Kajian Teoritis",
    description:
      "Ada berbagai macam protokol yang digunakan pada web untuk berkomunikasi, diantaranya:",
    list: [
      "HTTP untuk mentransfer halaman web, gambar, dan file lainnya pada website.",
      "HTTPS adalah versi aman dari HTTP.",
      "WS untuk mentransfer data secara interaktif.",
      "SMTP untuk mentransfer email.",
    ],
    image: "/ppt/thum/http.png",
    imageBg: "bg-gradient-to-t from-teal-500 to-yellow-500",
    imageTitle: "fetch(http://api.request)",
    cardImage: true,
    flex: true,
    contentAlign: "justify-between",
    order: "last",
  },
}
const TemanKerja = {
  container: {
    bg: "/ppt/background/4-dark@1.5x.png",
    center: false,
  },
  content: {
    title: "Teman Kerja",
    subtitle: "Kajian Teoritis",
    description:
      "Dinas Komunikasi dan Informatika (Diskominfo) Kota Depok sedang melakukan sosialisasi untuk Aplikasi Teman Kerja, yaitu e-office yang dikembangkan untuk membantu Perangkat Daerah (PD) melakukan pekerjaan kantor, seperti pengelolaan surat masuk dan keluar. Ini merupakan komitmen pemerintah untuk mengurangi penggunaan kertas dan mewujudkan papperless office.",
    image: "/ppt/thum/teman-kerja-depok@4x.png",
    gradientBg: {
      color: "purplePink",
      possition: "toTR",
    },
    imageTitle: "https://temankerja.depok.go.id",
    cardImage: true,
    flex: true,
    contentAlign: "justify-between",
    order: "last",
  },
}

const WhyPHP = {
  container: {
    bg: "/ppt/background/5-dark@1.5x.png",
    bgImg: "/ppt/background/go.id.png",
    bgImgOpacity: "opacity-30",
  },
  content: {
    title: "Mengapa Web Pemerintah Dominan Menggunakan PHP?",
    description:
      "PHP adalah bahasa pemrograman populer untuk website dinamis, mudah digunakan, dan murah tetapi rentan serangan hacker jika tidak ditulis dengan benar. Faktor seperti kode tidak aman, plugin tidak aman, dan konfigurasi server yang tidak aman dapat membuat website PHP rentan terhadap serangan hacker.",
  },
}

export default Object.assign({
  Cover,
  ProfilPenulis,
  ProfilPerusahaan,
  LatarBelakang,
  Manfaat,
  WaktuTempat,
  JaringanKomputer,
  Website,
  Komunikasi,
  TemanKerja,
  WhyPHP,
})
