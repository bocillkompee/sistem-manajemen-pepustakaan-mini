const books = [
    {
        id: 1,
        name: "Laskar Pelangi",
        category: "Novel",
        price: 85000,
        description: "Di sebuah sekolah sederhana di Belitung, sepuluh anak dengan latar belakang berbeda dipertemukan oleh satu hal yang sama: mimpi untuk mendapatkan pendidikan yang lebih baik. Di tengah keterbatasan ekonomi dan ancaman ditutupnya sekolah mereka, Ikal, Lintang, Mahar, dan teman-temannya terus berjuang bersama dua guru yang tidak pernah lelah mempercayai mereka. Persahabatan, persaingan, tawa, dan berbagai kejadian tak terduga mewarnai masa kecil mereka. Dari perjalanan mereka, terlihat bahwa keterbatasan bukanlah alasan untuk berhenti bermimpi. Laskar Pelangi adalah kisah tentang pendidikan, persahabatan, perjuangan, dan keberanian untuk mengejar cita-cita.",
        author: "Andrea Hirata",
        publisher: "Bentang Pustaka",
        year: 2005,
        pages: 529,
        stock: 18,
        image: "https://i.pinimg.com/736x/10/dc/06/10dc06814790d2159ade8a25ac61fa24.jpg",
        rating: {
            rate: 4.9,
            count: 328
        }
    },

    {
        id: 2,
        name: "Bumi",
        category: "Fantasy",
        price: 95000,
        description: "Perjalanan hidup sering kali membawa seseorang ke tempat yang tidak pernah ia bayangkan sebelumnya. Tokoh utama dalam kisah ini harus menghadapi berbagai perubahan yang perlahan mengubah cara pandangnya terhadap keluarga, persahabatan, dan dirinya sendiri. Di tengah perjalanan tersebut, ia bertemu dengan orang-orang yang meninggalkan kesan mendalam dan memberikan pelajaran berharga. Setiap pertemuan membawa cerita, sementara setiap perpisahan meninggalkan sesuatu yang harus dipahami. Sebuah kisah tentang menemukan arti kehidupan melalui perjalanan dan pengalaman yang tidak selalu mudah.",
        author: "Tere Liye",
        publisher: "Gramedia Pustaka Utama",
        year: 2014,
        pages: 440,
        stock: 24,
        image: "https://i.pinimg.com/736x/e1/df/fc/e1dffcf4f2057935640e8a498dc61db9.jpg",
        rating: {
            rate: 4.8,
            count: 291
        }
    },

    {
        id: 3,
        name: "Good Girl, Bad Blood",
        category: "Novel",
        price: 105000,
        description: "Ada kalanya seseorang harus berjalan jauh sebelum akhirnya memahami apa yang sebenarnya ia cari. Tokoh utama dalam cerita ini menjalani perjalanan yang mempertemukannya dengan berbagai karakter, konflik, dan pengalaman yang tidak pernah ia rencanakan. Di balik setiap kejadian, terdapat pertanyaan tentang cinta, pilihan, masa lalu, dan masa depan yang terus menghantuinya. Perlahan, perjalanan tersebut membuatnya melihat kehidupan dari sudut pandang yang berbeda. Sebuah cerita tentang pencarian jati diri, keberanian menghadapi perubahan, dan menemukan makna dari setiap perjalanan.",
        author: "Holly Jackson",
        publisher: "Electric Monkey",
        year: 2020,
        pages: 400,
        stock: 22,
        image: "https://i.pinimg.com/1200x/05/f2/13/05f213443837d372d20c2068e0f9afeb.jpg",
        rating: {
            rate: 4.8,
            count: 680
        }
    },

    {
        id: 4,
        name: "Atomic Habits",
        category: "Self Development",
        price: 115000,
        description: "Tidak semua perjalanan dimulai karena seseorang sudah tahu ke mana ia akan pergi. Terkadang, sebuah keputusan sederhana justru menjadi awal dari perubahan besar dalam hidup. Tokoh utama harus meninggalkan kenyamanan yang selama ini dikenalnya dan menghadapi berbagai situasi yang membuatnya mempertanyakan pilihan sendiri. Dalam perjalanan itu, ia menemukan persahabatan baru, menghadapi kehilangan, dan belajar memahami arti keluarga serta impian. Semakin jauh ia melangkah, semakin ia menyadari bahwa tujuan sebenarnya bukan hanya tentang tempat yang ingin dicapai, tetapi tentang siapa dirinya setelah perjalanan tersebut.",
        author: "James Clear",
        publisher: "Gramedia Pustaka Utama",
        year: 2019,
        pages: 320,
        stock: 30,
        image: "https://i.pinimg.com/736x/84/31/63/84316317e7f2919b153679e534eaffc5.jpg",
        rating: {
            rate: 4.9,
            count: 512
        }
    },

    {
        id: 5,
        name: "Filosofi Teras",
        category: "Self Development",
        price: 89000,
        description: "Masa lalu tidak selalu benar-benar pergi meskipun waktu terus berjalan. Ketika berbagai kejadian lama kembali muncul dalam kehidupan tokoh utama, ia dipaksa untuk menghadapi hal-hal yang selama ini berusaha dilupakannya. Hubungan dengan orang-orang terdekat ikut berubah ketika rahasia dan keputusan dari masa lalu mulai terungkap satu per satu. Di tengah kebingungan tersebut, ia harus menentukan siapa yang dapat dipercaya dan apa yang sebenarnya ingin dipertahankan. Sebuah kisah tentang masa lalu, kepercayaan, hubungan antarmanusia, dan keberanian untuk menghadapi kenyataan.",
        author: "Henry Manampiring",
        publisher: "Kompas",
        year: 2018,
        pages: 320,
        stock: 21,
        image: "https://i.pinimg.com/1200x/ee/20/d2/ee20d232056eca3d231720ef140a9485.jpg",
        rating: {
            rate: 4.8,
            count: 367
        }
    },

    {
        id: 6,
        name: "The Psychology of Money",
        category: "Finance",
        price: 108000,
        description: "Hidup tidak selalu memberikan kesempatan kedua ketika seseorang melakukan kesalahan. Tokoh utama harus menghadapi konsekuensi dari keputusan yang pernah dibuatnya dan perlahan menyadari bahwa setiap pilihan memiliki harga yang harus dibayar. Dalam prosesnya, ia bertemu dengan orang-orang yang membantunya melihat kehidupan dari sisi yang berbeda. Ada persahabatan yang harus dipertahankan, hubungan yang harus diperbaiki, dan masa lalu yang harus diterima. Perjalanan tersebut menjadi proses panjang untuk belajar bahwa kegagalan bukan akhir dari segalanya, melainkan bagian dari perjalanan menuju kehidupan yang lebih baik.",
        author: "Morgan Housel",
        publisher: "Harriman House",
        year: 2020,
        pages: 256,
        stock: 17,
        image: "https://i.pinimg.com/1200x/4e/f2/58/4ef258c122669970e4b43ef23fbc9dd6.jpg",
        rating: {
            rate: 4.9,
            count: 436
        }
    },

    {
        id: 7,
        name: "Anonymous Crush",
        category: "Romance",
        price: 89000,
        description: "Di tengah kehidupan yang berjalan begitu cepat, terkadang seseorang berhenti dan bertanya apakah dirinya benar-benar berada di jalan yang tepat. Pertanyaan tersebut mulai menghantui tokoh utama ketika kehidupannya tidak berjalan seperti yang selama ini direncanakan. Pertemuan dengan beberapa orang baru perlahan membuka pandangan tentang pilihan, impian, dan kehidupan yang selama ini ia jalani. Namun, semakin banyak jawaban yang ditemukan, semakin banyak pula pertanyaan yang muncul. Kisah ini membawa pembaca mengikuti perjalanan seseorang dalam mencari arah, memahami dirinya sendiri, dan menentukan langkah yang benar-benar ingin ia ambil.",
        author: "Salsabila Falensia",
        publisher: "Pastel Books",
        year: 2023,
        pages: 368,
        stock: 17,
        image: "https://i.ibb.co.com/DfC9qhSN/a8e8331def5a455dc82294cbb9e474f0.jpg",
        rating: {
            rate: 4.7,
            count: 185
        }
    },

    {
        id: 8,
        name: "Perahu Kertas",
        category: "Romance",
        price: 87000,
        description: "Perjalanan ke tempat yang belum pernah dikenal selalu membawa kemungkinan akan bertemunya seseorang dengan pengalaman baru. Begitu pula dengan tokoh utama yang memulai perjalanan dengan tujuan sederhana, tetapi justru menemukan banyak hal yang mengubah dirinya. Setiap tempat yang dikunjungi menyimpan cerita, sementara setiap orang yang ditemui memberikan pelajaran yang berbeda. Di antara perjalanan dan berbagai kejadian tak terduga, ia mulai memahami bahwa kehidupan tidak selalu harus berjalan sesuai rencana. Sebuah kisah tentang perjalanan, pertemuan, perubahan, dan keberanian untuk menikmati setiap langkah menuju tujuan.",
        author: "Dee Lestari",
        publisher: "Bentang Pustaka",
        year: 2009,
        pages: 444,
        stock: 19,
        image: "https://i.pinimg.com/736x/d6/f5/69/d6f56921b50cdcee8e625a0a3e91bd6f.jpg",
        rating: {
            rate: 4.7,
            count: 231
        }
    },

    {
        id: 9,
        name: "Cantik Itu Luka",
        category: "Novel",
        price: 105000,
        description: "Ketika kehidupan mulai berubah, seseorang sering kali tidak memiliki pilihan selain belajar untuk beradaptasi. Tokoh utama berada dalam situasi yang memaksanya menghadapi berbagai persoalan yang sebelumnya tidak pernah terpikirkan. Di tengah tekanan dan keraguan, ia menemukan beberapa orang yang menjadi tempat untuk berbagi cerita sekaligus sumber kekuatan. Namun, sebuah keputusan besar membuat hubungan mereka berada dalam ujian yang tidak mudah. Dari sana, ia belajar bahwa menjadi kuat bukan berarti tidak pernah merasa takut, tetapi tetap berani melangkah meskipun rasa takut tersebut masih ada.",
        author: "Eka Kurniawan",
        publisher: "Gramedia Pustaka Utama",
        year: 2002,
        pages: 505,
        stock: 11,
        image: "https://i.pinimg.com/736x/b4/39/48/b439481027ddae82a1839bda635320b2.jpg",
        rating: {
            rate: 4.7,
            count: 198
        }
    },

    {
        id: 10,
        name: "Sapiens",
        category: "Finance",
        price: 135000,
        description: "Ada banyak hal dalam hidup yang terlihat sederhana sampai seseorang harus memilih di antara dua pilihan yang sama-sama sulit. Tokoh utama mengalami hal tersebut ketika sebuah perubahan besar membuatnya harus mempertanyakan kembali apa yang selama ini dianggap benar. Hubungan dengan keluarga, sahabat, dan orang-orang yang ia sayangi perlahan mengalami perubahan. Di tengah berbagai konflik, ia mencoba menemukan jawaban atas apa yang sebenarnya ia inginkan. Perjalanan tersebut membawanya pada sebuah kesadaran bahwa terkadang melepaskan sesuatu bukan berarti kalah, melainkan memberikan kesempatan untuk memulai kembali.",
        author: "Yuval Noah Harari",
        publisher: "Harper",
        year: 2015,
        pages: 464,
        stock: 16,
        image: "https://i.pinimg.com/1200x/69/2b/80/692b807e2837f9645592276778b72bef.jpg",
        rating: {
            rate: 4.9,
            count: 489
        }
    },

    {
        id: 11,
        name: "Tentang Kamu",
        category: "Novel",
        price: 98000,
        description: "Sebuah perjalanan panjang tidak hanya mengubah tempat yang dituju, tetapi juga dapat mengubah seseorang yang menjalaninya. Tokoh utama memulai perjalanan dengan membawa banyak pertanyaan dan luka dari masa lalu. Pertemuan dengan berbagai orang membuatnya perlahan memahami cerita di balik kehidupan mereka, sekaligus melihat kembali kehidupannya sendiri. Ada rahasia yang akhirnya terungkap, kenangan yang kembali muncul, dan keputusan yang tidak dapat terus ditunda. Pada akhirnya, perjalanan ini menjadi sebuah proses untuk berdamai dengan masa lalu dan menemukan alasan untuk kembali berharap pada masa depan.",
        author: "Tere Liye",
        publisher: "Republika",
        year: 2016,
        pages: 524,
        stock: 21,
        image: "https://i.pinimg.com/736x/00/ce/9f/00ce9f0bce4bac9e7cd53000dbe305d3.jpg",
        rating: {
            rate: 4.9,
            count: 423
        }
    },

    {
        id: 12,
        name: "The Alpha Girl's Guide",
        category: "Self Development",
        price: 89000,
        description: "Kehidupan tokoh utama berubah ketika sebuah kejadian tidak terduga memaksanya meninggalkan rutinitas yang selama ini terasa aman. Awalnya, perubahan tersebut terasa seperti sesuatu yang harus dihindari, tetapi perlahan ia menemukan bahwa tidak semua perubahan membawa hal buruk. Orang-orang baru hadir dan memberikan warna berbeda dalam kehidupannya. Dari berbagai pengalaman tersebut, ia mulai belajar tentang keberanian, kepercayaan, dan pentingnya menghargai hal-hal kecil. Sebuah kisah sederhana tentang bagaimana sebuah perubahan dapat menjadi awal dari perjalanan yang jauh lebih berarti.",
        author: "Henry Manampiring",
        publisher: "GagasMedia",
        year: 2015,
        pages: 240,
        stock: 16,
        image: "https://i.pinimg.com/1200x/a0/16/43/a016436ecb0cac9371318b4b8045588b.jpg",
        rating: {
            rate: 4.8,
            count: 276
        }
    },

    {
        id: 13,
        name: "The Alchemist",
        category: "Fantasy",
        price: 88000,
        description: "Sejak awal, tokoh utama selalu merasa ada bagian dari hidupnya yang belum benar-benar ia pahami. Sebuah peristiwa membuatnya mulai mencari jawaban atas pertanyaan yang selama ini disimpannya sendiri. Pencarian tersebut membawanya bertemu dengan orang-orang baru dan membuka kembali cerita yang selama ini terkubur dalam ingatan. Semakin dekat dengan jawaban, semakin banyak hal yang harus ia hadapi. Kisah ini mengajak pembaca mengikuti perjalanan penuh pertanyaan tentang identitas, masa lalu, kepercayaan, dan keberanian untuk menerima kenyataan.",
        author: "Paulo Coelho",
        publisher: "HarperCollins",
        year: 1988,
        pages: 208,
        stock: 14,
        image: "https://i.pinimg.com/1200x/49/7f/22/497f22527c6c0b20fb0bbe814ab918b2.jpg",
        rating: {
            rate: 4.9,
            count: 523
        }
    },

    {
        id: 14,
        name: "The Midnight Library",
        category: "Fantasy",
        price: 102000,
        description: "Sebuah hubungan dapat dimulai dari pertemuan sederhana, tetapi tidak pernah ada yang tahu bagaimana akhirnya akan berkembang. Tokoh-tokoh dalam cerita ini dipertemukan oleh keadaan dan perlahan membangun hubungan yang penuh dengan cerita, kesalahpahaman, serta berbagai pilihan sulit. Ketika sebuah rahasia mulai terbuka, kepercayaan yang telah dibangun pun mulai dipertanyakan. Mereka harus menentukan apakah hubungan tersebut masih layak dipertahankan atau justru harus berakhir. Sebuah kisah tentang kepercayaan, perasaan, pilihan, dan bagaimana manusia belajar memahami satu sama lain.",
        author: "Matt Haig",
        publisher: "Viking",
        year: 2020,
        pages: 304,
        stock: 20,
        image: "https://i.pinimg.com/1200x/4c/69/bb/4c69bb753cd665a9c366db62dca954de.jpg",
        rating: {
            rate: 4.8,
            count: 378
        }
    },

    {
        id: 15,
        name: "Hujan",
        category: "Novel",
        price: 90000,
        description: "Sejak kecil, tokoh utama memiliki sebuah impian yang ingin diwujudkannya suatu hari nanti. Namun, perjalanan menuju impian tersebut ternyata jauh lebih sulit daripada yang pernah dibayangkannya. Kegagalan demi kegagalan membuatnya mulai meragukan kemampuan dirinya sendiri, sementara keadaan di sekitarnya seolah terus memaksanya untuk menyerah. Di tengah semua itu, hadir orang-orang yang mengingatkannya mengapa ia memulai perjalanan tersebut. Dengan keberanian dan tekad yang perlahan tumbuh kembali, ia mencoba membuktikan bahwa sebuah impian layak diperjuangkan meskipun jalannya tidak mudah.",
        author: "Tere Liye",
        publisher: "Gramedia Pustaka Utama",
        year: 2016,
        pages: 318,
        stock: 18,
        image: "https://i.pinimg.com/736x/4a/e2/d8/4ae2d87de234aa6fb954edfe4eee42d9.jpg",
        rating: {
            rate: 4.8,
            count: 302
        }
    },

    {
        id: 16,
        name: "Badan Intelijen Sekolah 2",
        category: "Novel",
        price: 99000,
        description: "Memasuki sebuah fase baru dalam kehidupan membuat tokoh utama mulai menyadari bahwa tidak semua keputusan dapat dibuat dengan mudah. Pilihan yang diambilnya tidak hanya memengaruhi dirinya sendiri, tetapi juga orang-orang yang berada di sekitarnya. Berbagai kejadian membuatnya harus menghadapi konflik antara apa yang diinginkan dan apa yang sebenarnya dibutuhkan. Dalam proses tersebut, ia belajar mengenai tanggung jawab, kehilangan, persahabatan, dan arti menjadi dewasa. Sebuah cerita tentang perjalanan menemukan keberanian untuk mengambil keputusan dan menerima segala konsekuensi yang mengikutinya.",
        author: "Intanzs",
        publisher: "Butterflies Books",
        year: 2025,
        pages: 320,
        stock: 20,
        image: "https://i.ibb.co.com/DDQGM18B/df861db9cbe54e788929c56e7c29fdac.jpg",
        rating: {
            rate: 4.8,
            count: 320
        }
    },

    {
        id: 17,
        name: "Laut Bercerita",
        category: "Novel",
        price: 105000,
        description: "Masa lalu selalu memiliki cara untuk kembali hadir, bahkan ketika seseorang sudah berusaha meninggalkannya sejauh mungkin. Tokoh utama menjalani kehidupannya dengan mencoba melupakan berbagai kejadian yang pernah membuatnya terluka. Namun, sebuah pertemuan tak terduga membuat kenangan lama kembali muncul dan memaksanya menghadapi perasaan yang belum selesai. Di tengah perjalanan tersebut, ia mulai memahami bahwa tidak semua hal harus dilupakan untuk dapat melangkah maju. Terkadang, seseorang hanya perlu menerima apa yang telah terjadi dan belajar mengambil pelajaran darinya. Sebuah kisah tentang masa lalu, penerimaan, hubungan, dan menemukan keberanian untuk memulai lembaran baru.",
        author: "Leila S. Chudori",
        publisher: "Kepustakaan Populer Gramedia",
        year: 2017,
        pages: 379,
        stock: 12,
        image: "https://i.pinimg.com/736x/9a/bb/61/9abb61fcf68afd124375a82dfd02ca6a.jpg",
        rating: {
            rate: 4.9,
            count: 467
        }
    },

    {
        id: 18,
        name: "Home Sweet Loan",
        category: "Romance",
        price: 98000,
        description: "Tidak semua orang mendapatkan kesempatan untuk memulai hidup dari awal. Tokoh utama harus menghadapi berbagai keadaan yang membuatnya mempertanyakan pilihan-pilihan yang pernah dibuat. Di tengah perjalanan, ia bertemu dengan orang-orang yang perlahan mengubah cara pandangnya terhadap kehidupan. Ada hubungan yang harus diperjuangkan, ada masa lalu yang harus diterima, dan ada keputusan yang tidak bisa terus dihindari. Dari semua pengalaman tersebut, ia mulai memahami bahwa setiap orang memiliki cerita yang tidak selalu terlihat dari luar. Sebuah kisah tentang perubahan, keberanian, dan perjalanan untuk menemukan kembali arti kehidupan.",
        author: "Almira Bastari",
        publisher: "Gramedia Pustaka Utama",
        year: 2022,
        pages: 312,
        stock: 16,
        image: "https://i.pinimg.com/736x/50/24/5b/50245beedfccd8ffb26f378a3e09c258.jpg",
        rating: {
            rate: 4.8,
            count: 246
        }
    },

    {
        id: 19,
        name: "Atomic Focus",
        category: "Self Development",
        price: 92000,
        description: "Sebuah kejadian sederhana membawa tokoh utama pada sebuah perjalanan yang sama sekali tidak pernah direncanakannya. Awalnya ia hanya ingin menyelesaikan satu masalah, tetapi semakin jauh ia mencari jawaban, semakin banyak hal baru yang ditemukan. Orang-orang dari masa lalu kembali muncul dan membuatnya harus berhadapan dengan kenangan yang selama ini berusaha dilupakan. Di antara berbagai konflik dan pilihan sulit, ia mulai menyadari bahwa jawaban yang dicari mungkin selama ini berada jauh lebih dekat dari yang ia kira. Kisah ini mengangkat tentang pencarian, hubungan, kehilangan, dan keberanian untuk menerima kenyataan.",
        author: "Chris Bailey",
        publisher: "Vermilion",
        year: 2022,
        pages: 256,
        stock: 23,
        image: "https://i.pinimg.com/236x/ec/ed/71/eced713af1021bab77a0fa54fd9cde95.jpg",
        rating: {
            rate: 4.6,
            count: 173
        }
    },

    {
        id: 20,
        name: "Berandal Bandung",
        category: "Novel",
        price: 95000,
        description: "Setiap orang memiliki impian yang ingin dicapai, tetapi tidak semua orang memiliki keberanian untuk mengejarnya. Tokoh utama harus memilih antara kehidupan yang nyaman atau kesempatan untuk mewujudkan sesuatu yang selama ini hanya menjadi angan-angan. Keputusan tersebut membawanya ke dalam berbagai situasi yang penuh tantangan dan kejutan. Ia bertemu dengan orang-orang yang membantu sekaligus menguji keyakinannya. Perlahan, perjalanan itu membuatnya mengerti bahwa keberhasilan bukan hanya tentang hasil akhir, tetapi juga tentang keberanian untuk terus berjalan ketika semuanya terasa sulit.",
        author: "Wulan Nur Amalia",
        publisher: "Black Swan Books",
        year: 2024,
        pages: 320,
        stock: 17,
        image: "https://i.ibb.co.com/zWHPXg4f/3b030543d57df3c321146378aa1154bb.jpg",
        rating: {
            rate: 4.8,
            count: 245
        }
    },

    {
        id: 21,
        name: "Rumah untuk Alie",
        category: "Novel",
        price: 95000,
        description: "Kehidupan yang selama ini terasa biasa tiba-tiba berubah setelah sebuah peristiwa mempertemukan tokoh utama dengan seseorang dari masa lalunya. Pertemuan tersebut membuka kembali cerita yang belum benar-benar selesai dan membuat berbagai pertanyaan lama muncul kembali. Di tengah hubungan yang semakin rumit, mereka harus menghadapi perasaan, kesalahpahaman, dan pilihan yang dapat mengubah kehidupan masing-masing. Tidak semua hal dapat kembali seperti dulu, tetapi mungkin masih ada kesempatan untuk memperbaiki sesuatu yang pernah rusak. Sebuah kisah tentang pertemuan kembali, kenangan, dan kesempatan kedua.",
        author: "Luluk HF",
        publisher: "Mediakita",
        year: 2024,
        pages: 352,
        stock: 18,
        image: "https://i.pinimg.com/736x/3e/80/62/3e8062e662cc8c45f1e132c42d52c5c7.jpg",
        rating: {
            rate: 4.8,
            count: 280
        }
    },

    {
        id: 22,
        name: "Pulang Pergi",
        category: "Novel",
        price: 105000,
        description: "Di balik kehidupan yang terlihat sempurna, selalu ada cerita yang tidak diketahui oleh orang lain. Tokoh utama menyimpan berbagai masalah yang selama ini dipendam seorang diri hingga sebuah kejadian membuat semuanya perlahan terbuka. Kehadiran seseorang yang tidak pernah ia duga justru membuatnya berani menceritakan hal-hal yang selama ini disembunyikan. Namun, semakin dekat hubungan mereka, semakin besar pula tantangan yang harus dihadapi. Kisah ini mengajak pembaca melihat bahwa terkadang seseorang tidak membutuhkan solusi yang sempurna, melainkan seseorang yang bersedia mendengarkan dan tetap tinggal.",
        author: "Tere Liye",
        publisher: "Sabak Grip",
        year: 2021,
        pages: 414,
        stock: 17,
        image: "https://i.pinimg.com/736x/c3/a1/9d/c3a19d0a7e2a5d221f25f4ff7ba5e49a.jpg",
        rating: {
            rate: 4.8,
            count: 267
        }
    },

    {
        id: 23,
        name: "Think Again",
        category: "Self Development",
        price: 118000,
        description: "Sebuah kota menyimpan begitu banyak cerita dari orang-orang yang datang dan pergi. Di tempat itulah tokoh utama mencoba memulai kehidupan baru setelah meninggalkan sesuatu yang sangat berarti baginya. Hari-hari yang awalnya terasa asing perlahan dipenuhi oleh pertemanan baru, pengalaman baru, dan kejadian-kejadian yang tidak pernah direncanakan. Namun, masa lalu tetap menemukan cara untuk mengejarnya. Ia harus menentukan apakah akan terus melarikan diri atau berhenti dan menghadapi semuanya. Sebuah cerita tentang memulai kembali, menemukan rumah, dan berdamai dengan masa lalu.",
        author: "Adam Grant",
        publisher: "Viking",
        year: 2021,
        pages: 320,
        stock: 19,
        image: "https://i.pinimg.com/736x/fd/0c/8e/fd0c8eab7a41663dea3d69add32fa3b4.jpg",
        rating: {
            rate: 4.7,
            count: 298
        }
    },

    {
        id: 24,
        name: "The Magic Library",
        category: "Fantasy",
        price: 98000,
        description: "Tokoh utama selalu percaya bahwa hidup dapat direncanakan dengan baik selama seseorang memiliki tujuan yang jelas. Namun, sebuah perubahan mendadak membuat semua rencana yang telah disusun menjadi tidak berarti. Ia harus memulai kembali dari keadaan yang sama sekali tidak dikenalnya. Dalam proses tersebut, ia menemukan bahwa beberapa hal terbaik justru muncul dari kejadian yang tidak pernah direncanakan. Persahabatan baru, pengalaman yang berharga, dan berbagai kegagalan perlahan mengubah dirinya. Sebuah kisah tentang menerima perubahan dan belajar menemukan kebahagiaan di tempat yang tidak pernah diduga.",
        author: "J. L. Black",
        publisher: "Magic Library Press",
        year: 2023,
        pages: 280,
        stock: 16,
        image: "https://i.pinimg.com/1200x/e9/b6/35/e9b635c9ae587383377aaa458682084d.jpg",
        rating: {
            rate: 4.7,
            count: 210
        }
    },

    {
        id: 25,
        name: "No More Burnout",
        category: "Self Development",
        price: 95000,
        description: "Di tengah kehidupan yang semakin dipenuhi tuntutan, tekanan, dan kesibukan, rasa lelah yang terus-menerus dapat membuat seseorang kehilangan energi bahkan untuk melakukan hal-hal yang disukai. No More Burnout mengajak pembaca memahami bagaimana burnout dapat muncul dan memengaruhi kehidupan sehari-hari. Buku ini membahas cara mengenali tanda-tanda kelelahan, memahami sumber tekanan, serta membangun kebiasaan yang lebih sehat dalam menjalani aktivitas. Dengan pendekatan yang praktis dan mudah dipahami, pembaca diajak untuk berhenti sejenak, mengevaluasi kembali keseimbangan hidup, dan belajar menjaga diri tanpa harus merasa bersalah. Sebuah panduan bagi siapa saja yang ingin menjalani kehidupan dengan lebih tenang, terarah, dan seimbang.",
        author: "A. P. Rao",
        publisher: "Penguin Books",
        year: 2023,
        pages: 332,
        stock: 18,
        image: "https://i.ibb.co.com/jPHy0cZq/b380c8e039d637f7befdac069ebd2f25.jpg",
        rating: {
            rate: 4.7,
            count: 195
        }
    },

    {
        id: 26,
        name: "Dilan 1990",
        category: "Romance",
        price: 82000,
        description: "Bandung tahun 1990 menjadi awal dari sebuah kisah yang tidak pernah dibayangkan Milea sebelumnya. Setelah pindah sekolah, Milea bertemu dengan Dilan, seorang siswa dengan cara berbicara dan bersikap yang berbeda dari kebanyakan orang. Bukannya mendekati Milea dengan cara biasa, Dilan justru hadir dengan tingkah laku yang membuat Milea bingung sekaligus penasaran. Di antara perjalanan pulang sekolah, percakapan sederhana, pertengkaran kecil, dan perhatian yang tidak terduga, keduanya perlahan menjadi semakin dekat. Namun, hubungan mereka tidak selalu berjalan mudah karena masa lalu, perasaan, dan orang-orang di sekitar mereka ikut memberikan warna pada kisah tersebut. Dilan 1990 menghadirkan cerita cinta remaja yang ringan, jenaka, dan penuh kenangan tentang masa muda.",
        author: "Pidi Baiq",
        publisher: "Pastel Books",
        year: 2014,
        pages: 408,
        stock: 20,
        image: "https://i.pinimg.com/1200x/8f/82/ba/8f82ba34241d0620c96e2b9eb0f66eef.jpg",
        rating: {
            rate: 4.7,
            count: 342
        }
    },

    {
        id: 27,
        name: "Ronggeng Dukuh Paruk",
        category: "Novel",
        price: 97000,
        description: "Di sebuah dusun kecil bernama Dukuh Paruk, kehidupan masyarakat berjalan mengikuti tradisi yang telah diwariskan dari generasi ke generasi. Srintil, seorang gadis yang sejak kecil memiliki bakat menari, dipercaya memiliki takdir untuk menjadi ronggeng bagi dusunnya. Kehidupannya berubah ketika ia mulai menjalankan peran tersebut dan menjadi pusat perhatian masyarakat. Di sisi lain, Rasus, sahabat masa kecilnya, menyimpan perasaan yang membuatnya sulit menerima jalan hidup Srintil. Di tengah kemiskinan, tradisi, cinta, dan perubahan zaman, keduanya harus menghadapi pilihan yang tidak sederhana. Ronggeng Dukuh Paruk menggambarkan kehidupan masyarakat pedesaan Jawa sekaligus memperlihatkan bagaimana tradisi dan keadaan sosial dapat memengaruhi kehidupan seseorang.",
        author: "Ahmad Tohari",
        publisher: "Gramedia Pustaka Utama",
        year: 1982,
        pages: 236,
        stock: 9,
        image: "https://i.pinimg.com/736x/c6/11/0d/c6110df93fe1e6a2013e8a2221cd3e43.jpg",
        rating: {
            rate: 4.8,
            count: 218
        }
    },

    {
        id: 28,
        name: "The Power of Now",
        category: "Self Development",
        price: 112000,
        description: "Banyak orang menghabiskan hidup dengan memikirkan masa lalu atau mencemaskan apa yang mungkin terjadi di masa depan. The Power of Now mengajak pembaca melihat kembali hubungan mereka dengan pikiran dan kesadaran dalam menjalani kehidupan sehari-hari. Melalui berbagai pembahasan dan refleksi, buku ini memperkenalkan gagasan tentang pentingnya hadir sepenuhnya pada saat ini. Pembaca diajak memahami bagaimana pikiran yang terus bekerja dapat memengaruhi perasaan dan cara seseorang melihat kehidupannya. Dengan belajar mengamati pikiran tanpa selalu terbawa olehnya, seseorang dapat menemukan cara baru untuk menghadapi berbagai situasi. Buku ini menjadi sebuah perjalanan reflektif untuk memahami ketenangan, kesadaran, dan arti hidup di masa sekarang.",
        author: "Eckhart Tolle",
        publisher: "New World Library",
        year: 1997,
        pages: 236,
        stock: 14,
        image: "https://i.pinimg.com/236x/e6/85/62/e68562bd294d714ff3c100cc1922b75a.jpg",
        rating: {
            rate: 4.8,
            count: 365
        }
    },

    {
        id: 29,
        name: "The Little Prince",
        category: "Fantasy",
        price: 78000,
        description: "Seorang pilot terdampar di tengah gurun setelah pesawatnya mengalami masalah. Di tempat yang jauh dari kehidupan manusia itu, ia bertemu dengan seorang anak kecil misterius yang datang dari sebuah asteroid kecil. Anak tersebut memperkenalkan dirinya sebagai seorang pangeran yang telah melakukan perjalanan melewati berbagai planet dan bertemu dengan orang-orang aneh yang memiliki cara pandang berbeda tentang kehidupan. Dari perjalanan sang pangeran, muncul berbagai cerita tentang persahabatan, kesepian, cinta, kehilangan, dan cara manusia memahami dunia. Pertemuannya dengan seekor rubah juga memberikan pelajaran tentang arti hubungan dan sesuatu yang membuat seseorang menjadi istimewa. The Little Prince adalah kisah sederhana yang menyimpan banyak makna tentang kehidupan dan cara melihat dunia.",
        author: "Antoine de Saint-Exupéry",
        publisher: "Gallimard",
        year: 1943,
        pages: 96,
        stock: 32,
        image: "https://i.pinimg.com/736x/20/c8/4b/20c84b4c7b0a238c94e24e7c3720d7c5.jpg",
        rating: {
            rate: 4.9,
            count: 521
        }
    },

    {
        id: 30,
        name: "Harry Potter and the Philosopher's Stone",
        category: "Fantasy",
        price: 125000,
        description: "Harry Potter tumbuh sebagai seorang anak yatim yang tinggal bersama keluarga Dursley dan menjalani kehidupan yang jauh dari kata menyenangkan. Hingga suatu hari, surat-surat misterius mulai berdatangan dan mengungkap sebuah kenyataan yang tidak pernah Harry bayangkan: dirinya adalah seorang penyihir. Ia kemudian memasuki Hogwarts, sekolah sihir tempat ia bertemu dengan Ron Weasley dan Hermione Granger yang menjadi sahabat dekatnya. Di sana, Harry mulai mengenal dunia sihir, mengikuti pelajaran, mempelajari berbagai hal baru, dan menemukan fakta-fakta tentang masa lalunya. Namun, kehidupan di Hogwarts ternyata tidak hanya dipenuhi keajaiban. Bersama kedua sahabatnya, Harry mulai menyadari adanya sebuah misteri yang berkaitan dengan Batu Bertuah dan bahaya yang mengancam sekolah mereka. Petualangan tersebut menjadi awal dari perjalanan panjang Harry dalam menghadapi dunia sihir yang penuh rahasia dan tantangan.",
        author: "J.K. Rowling",
        publisher: "Bloomsbury",
        year: 1997,
        pages: 309,
        stock: 25,
        image: "https://i.pinimg.com/1200x/10/36/03/103603cfb9681d280af6cef1de9cb7bb.jpg",
        rating: {
            rate: 4.9,
            count: 1250
        }
    },

    {
        id: 31,
        name: "Malioboro at Midnight",
        category: "Romance",
        price: 99000,
        description: "Serana Nighita mencoba menjalani kehidupannya setelah berbagai hal dalam hidup tidak berjalan seperti yang ia harapkan. Di tengah suasana Yogyakarta yang ramai sekaligus penuh cerita, sebuah pertemuan memperkenalkannya kepada Malioboro Hartigan, sosok dengan kepribadian yang perlahan menarik perhatiannya. Awalnya, hubungan mereka terasa seperti pertemanan biasa yang dipenuhi percakapan dan kejadian-kejadian sederhana. Namun, semakin sering menghabiskan waktu bersama, semakin banyak perasaan yang muncul tanpa mereka sadari. Di balik hubungan tersebut, masing-masing memiliki cerita dan persoalan yang tidak mudah untuk diungkapkan. Dengan suasana malam Malioboro sebagai latarnya, kisah ini membawa pembaca mengikuti perjalanan tentang pertemanan, perasaan, dan hubungan yang tumbuh secara perlahan.",
        author: "Skysphire",
        publisher: "Bukune Kreatif Cipta",
        year: 2023,
        pages: 320,
        stock: 20,
        image: "https://i.pinimg.com/736x/ba/be/97/babe975c886039104d1dcdae3bd79287.jpg",
        rating: {
            rate: 4.8,
            count: 356
        }
    },

    {
        id: 32,
        name: "Bandung After Rain",
        category: "Romance",
        price: 95000,
        description: "Bandung menyimpan banyak kenangan bagi Hema dan Ra, termasuk cerita yang pernah mereka jalani bersama. Setelah waktu berlalu dan kehidupan membawa mereka ke arah yang berbeda, sebuah pertemuan kembali membuat kenangan lama perlahan muncul ke permukaan. Ada perasaan yang belum selesai, ada penyesalan yang belum sempat disampaikan, dan ada pertanyaan tentang apa yang sebenarnya terjadi di antara mereka. Di tengah suasana Bandung yang sering kali terasa sendu setelah hujan, keduanya kembali berhadapan dengan masa lalu. Pertemuan tersebut membuat mereka harus menentukan apakah kenangan yang pernah ada cukup kuat untuk mempertemukan mereka kembali atau justru menjadi alasan untuk benar-benar melangkah pergi. Bandung After Rain menghadirkan kisah tentang cinta, penyesalan, kenangan, dan kesempatan untuk memahami kembali sebuah hubungan.",
        author: "Wulan Nur Amalia",
        publisher: "Black Swan Books",
        year: 2024,
        pages: 320,
        stock: 18,
        image: "https://i.ibb.co.com/tPcZRynz/6926dd3c775fe7d0f852f68cb9819390.jpg",
        rating: {
            rate: 4.9,
            count: 287
        }
    },

    {
        id: 33,
        name: "The Intelligent Investor",
        category: "Finance",
        price: 125000,
        description: "Dunia investasi sering kali terlihat menarik karena menjanjikan peluang untuk mendapatkan keuntungan, tetapi di balik setiap peluang selalu terdapat risiko yang harus dipahami. The Intelligent Investor mengajak pembaca melihat investasi dari sudut pandang yang lebih rasional dan jangka panjang. Benjamin Graham membahas berbagai prinsip penting seperti bagaimana menilai investasi, menghadapi perubahan pasar, memahami risiko, serta mengendalikan emosi ketika mengambil keputusan. Buku ini menekankan pentingnya disiplin dan analisis sebelum seseorang menempatkan uangnya pada suatu investasi. Alih-alih mengejar keuntungan cepat, pembaca diajak membangun cara berpikir yang lebih hati-hati dan terukur. Dengan prinsip-prinsip tersebut, buku ini menjadi salah satu bacaan penting bagi siapa saja yang ingin memahami dasar pemikiran investasi dan pengelolaan risiko.",
        author: "Benjamin Graham",
        publisher: "HarperBusiness",
        year: 1949,
        pages: 640,
        stock: 15,
        image: "https://i.pinimg.com/736x/20/06/4e/20064ec997cf77cbff970890a3c75bc7.jpg",
        rating: {
            rate: 4.8,
            count: 425
        }
    },

    {
        id: 34,
        name: "Think and Grow Rich",
        category: "Finance",
        price: 95000,
        description: "Kesuksesan sering kali dimulai dari sebuah tujuan yang jelas dan keyakinan untuk terus mengejarnya. Think and Grow Rich membahas bagaimana pola pikir, keinginan, ketekunan, dan cara seseorang menentukan tujuan dapat memengaruhi perjalanan menuju kesuksesan. Melalui berbagai prinsip yang disusun dari hasil pengamatan terhadap orang-orang yang berhasil, Napoleon Hill mengajak pembaca memahami pentingnya memiliki tujuan yang terarah dan kemauan untuk terus berusaha. Buku ini juga membahas bagaimana kegagalan dapat menjadi bagian dari proses belajar, bukan alasan untuk berhenti. Dengan mengembangkan pola pikir yang lebih disiplin dan berorientasi pada tujuan, pembaca diajak untuk melihat kembali potensi yang dimiliki serta bagaimana potensi tersebut dapat dikembangkan. Sebuah buku klasik mengenai pola pikir, ambisi, ketekunan, dan perjalanan menuju pencapaian pribadi maupun finansial.",
        author: "Napoleon Hill",
        publisher: "The Ralston Society",
        year: 1937,
        pages: 238,
        stock: 22,
        image: "https://i.pinimg.com/736x/29/cb/09/29cb093a75c57356a8efa8f567dd529b.jpg",
        rating: {
            rate: 4.7,
            count: 510
        }
    }
];


document
    .getElementById("searchInput")
    .addEventListener("input", function () {

        const keyword = this.value.toLowerCase().trim();

        const searchSection = document.getElementById("searchSection");
        const searchResults = document.getElementById("searchResults");
        const bookContent = document.getElementById("bookContent");

        if (keyword === "") {
            searchSection.classList.add("hidden");
            bookContent.classList.remove("hidden");
            searchResults.innerHTML = "";
            return;
        }

        const filtered = books.filter(book =>
            book.name.toLowerCase().includes(keyword) ||
            book.author.toLowerCase().includes(keyword) ||
            book.category.toLowerCase().includes(keyword)
        );

        bookContent.classList.add("hidden");
        searchSection.classList.remove("hidden");

        searchResults.innerHTML = filtered
            .map(book => bookCard(book))
            .join("");
    });


function bookCard(book, showCategory = false) {

    return `
        <div class="book-card min-w-0 flex-col cursor-pointer" onclick="openBookDetail(${book.id})">

            <div class="aspect-[2/3] w-full overflow-hidden rounded-sm bg-gray-200">
                <img
                    src="${book.image}"
                    alt="buku"
                    class="h-full w-full object-cover"
                >
            </div>

            <p class="mt-2 line-clamp-2 text-base font-medium text-gray-800">
                ${book.name}
            </p>

            <p class="mt-1 truncate text-sm text-gray-500">
                ${book.author}
            </p>

            ${showCategory? `
                <p class="mt-1 inline-block rounded-full bg-[#ff9900] px-2 py-[2px] text-[11px] text-white">
                    ${book.category}
                </p>`: ""
            }

        </div>
    `;
}

document.getElementById("new-release-books").innerHTML =
    books
        .slice()
        .sort((a, b) => b.year - a.year)
        .slice(0, 6)
        .map(book => bookCard(book, true))
        .join("");


const categories = [
    "Novel",
    "Romance",
    "Fantasy",
    "Finance",
    "Self Development"
];

const categoryList =
    document.getElementById("category-list");

categoryList.innerHTML = categories
    .map((category, index) => `
        <button
            onclick="filterCategory('${category}')"
            data-category="${category}"
            class="${
                index === 0
                    ? "bg-[#0b55d8] text-white"
                    : "bg-gray-100 text-gray-500"
            } shrink-0 rounded-lg px-3 py-1.5 text-[13px] transition"
        >
            ${category}
        </button>
    `)
    .join("");



function filterCategory(category) {

    const filtered =books.filter(
        book => book.category === category
    );

    document.getElementById("category-books").innerHTML =
        filtered
            .map(book => bookCard(book))
            .join("");

    document
        .querySelectorAll("#category-list button")
        .forEach(button => {

            if (button.dataset.category === category) {

                button.classList.remove(
                    "bg-gray-100",
                    "text-gray-500"
                );

                button.classList.add(
                    "bg-[#001642]",
                    "text-white"
                );

            } else {

                button.classList.remove(
                    "bg-[#001642]",
                    "text-white"
                );

                button.classList.add(
                    "bg-gray-100",
                    "text-gray-500"
                );
            }
        });
}
filterCategory("Novel");

const collections = [
    {
        title: "Romance",
        category: "Romance",
        icon: "solar:heart-outline",
        color: "#34566c"
    },
    {
        title: "Fantasy",
        category: "Fantasy",
        icon: "solar:stars-outline",
        color: "#001642"
    },
    {
        title: "Finance",
        category: "Finance",
        icon: "solar:wallet-money-outline",
        color: "#DDB967"
    },
    {
        title: "Self Development",
        category: "Self Development",
        icon: "solar:book-2-outline",
        color: "#6b7c86"
    }
];

const collectionsContainer =
    document.getElementById("collections");

collectionsContainer.innerHTML = collections
    .map(collection => {

        const totalBooks = books.filter(
            book => book.category === collection.category
        ).length;

        return `
            <div
                class="relative flex h-[120px] items-center overflow-hidden rounded-lg p-4"
                style="background-color: ${collection.color};"
            >

                <div class="relative z-10">

                    <p class="text-[12px] text-white/70">
                        Collection
                    </p>

                    <h3 class="mt-1 text-[18px] font-semibold text-white">
                        ${collection.title}
                    </h3>

                    <p class="text-[10px] text-white/70">
                        ${totalBooks} Books
                    </p>

                </div>

                <iconify-icon
                    icon="${collection.icon}"
                    class="absolute -bottom-3 -right-2 text-[70px] text-white/20">
                </iconify-icon>

            </div>
        `;
    })
    .join("");

const menuItems = document.querySelectorAll(".sidebar-menu");

menuItems.forEach(item => {

    item.addEventListener("click", function (e) {

        e.preventDefault();

        menuItems.forEach(menu => {

            menu.classList.remove(
                "bg-[#001642]",
                "text-white"
            );

            menu.classList.add(
                "text-gray-700"
            );
        });

        this.classList.remove(
            "text-gray-700"
        );

        this.classList.add(
            "bg-[#001642]",
            "text-white"
        );
    });
});

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");

    } else {
        navbar.classList.remove("scrolled");
    }

});
