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
    cardBg: "tealSky",
    cardBgPoss: "toR",
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

export default Object.assign({
  Cover,
  ProfilPenulis,
  ProfilPerusahaan,
  LatarBelakang,
  Manfaat,
  WaktuTempat,
})
