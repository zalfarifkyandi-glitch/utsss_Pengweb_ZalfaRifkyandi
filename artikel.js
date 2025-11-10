const articles = [
  {
    title: "burung love brid",
    content: "Burung lovebird (Agapornis sp.) adalah salah satu jenis burung paruh bengkok yang terkenal dengan warna bulunya yang cerah dan perilakunya yang menggemaskan. Nama “lovebird” berasal dari kebiasaannya yang selalu tampak berpasangan dan saling menyayangi. Karena itulah, burung ini sering dijadikan simbol cinta dan kesetiaan.Anakan lovebird adalah burung lovebird muda yang baru menetas dan masih dalam tahap awal pertumbuhannya. Pada fase ini, anakan sangat rentan dan membutuhkan perhatian khusus, terutama dalam hal suhu, pakan, dan kebersihan kandang. Saat baru menetas, anakan lovebird belum memiliki bulu, matanya tertutup, dan sepenuhnya bergantung pada induknya untuk mendapatkan makanan berupa regurgitasi dari paruh induk. Seiring bertambahnya usia, bulu halus mulai tumbuh, mata terbuka, dan anakan mulai belajar makan sendiri. Dalam perawatan manusia, anakan lovebird biasanya diberi pakan berupa bubur khusus dengan takaran yang disesuaikan menggunakan sendok atau spuit. Perawatan yang konsisten dan penuh kasih akan membuat anakan tumbuh sehat, aktif, dan memiliki warna bulu yang cerah. Dengan latihan yang tepat, lovebird muda juga dapat menjadi jinak serta mudah berinteraksi dengan manusia.",
    image: "images/anakan love bird.jpeg"
  },
  {
    title: "burung kenari",
    content: "Anakan kenari adalah fase penting dalam proses beternak burung kenari. Setelah telur menetas, anakan kenari memerlukan perhatian ekstra agar tumbuh sehat dan cepat mandiri. Pada usia 0–7 hari, anakan masih sangat lemah dan sepenuhnya bergantung pada induknya. Biasanya indukan betina akan menyuapi anak-anaknya dengan makanan yang sudah dicerna terlebih dahulu, seperti biji-bijian lembut atau pakan khusus kenari yang telah direndam.Anakan kenari adalah burung kenari muda yang baru menetas dari telur dan masih berada dalam masa pertumbuhan. Pada tahap ini, anakan kenari sangat bergantung pada induknya untuk mendapatkan makanan dan kehangatan. Induk kenari biasanya memberi makan anaknya dengan makanan lembek yang berasal dari biji-bijian yang telah dicerna sebagian. Ciri-ciri anakan kenari antara lain tubuh yang kecil dengan bulu halus belum tumbuh sempurna, mata yang baru mulai terbuka, dan suara yang masih berupa ciapan halus. Dalam perawatan oleh manusia, anakan kenari membutuhkan suhu yang stabil, pakan lembut seperti bubur khusus atau telur rebus halus, serta lingkungan yang tenang dan bersih. Dengan perawatan yang baik, anakan kenari akan tumbuh sehat, cepat belajar berkicau, dan menjadi burung kenari dewasa dengan suara yang indah serta penampilan yang menarik.",
    image: "images/anakan kenari.jpeg"
  },
  {
    title: "burung murai",
    content: "Burung murai batu (Copsychus malabaricus) dikenal sebagai salah satu burung kicau paling populer dan bergengsi di Indonesia. Dikenal juga dengan sebutan “si raja kicau,” murai batu memiliki suara yang merdu, bervariasi, dan bisa menirukan suara burung lain. Keindahan suaranya inilah yang membuatnya sering dijadikan peserta utama dalam berbagai lomba burung kicau di seluruh nusantara.Anakan burung murai batu merupakan tahap awal kehidupan dari burung murai batu yang terkenal dengan kicauannya yang merdu dan bervariasi. Pada fase ini, anakan masih sangat bergantung pada induknya, baik untuk makanan maupun perlindungan. Biasanya, anakan murai batu diberi makan oleh induknya berupa serangga kecil seperti jangkrik atau ulat hongkong yang membantu pertumbuhannya. Ciri khas anakan murai batu antara lain bulu yang masih halus dan belum tumbuh sempurna, paruh yang tampak lembek, serta gerakannya yang masih terbatas. Dalam proses perawatan, anakan perlu mendapatkan suhu yang hangat, pakan bergizi, dan lingkungan yang tenang agar tumbuh menjadi burung dewasa yang sehat dan memiliki mental serta suara yang baik. Perawatan yang tepat sejak anakan sangat menentukan kualitas murai batu saat dewasa nanti, terutama bagi penghobi burung kicauan yang mengutamakan suara dan penampilan.",
    image: "images/anakan murai.jpeg"
  }
];

const articleImg = document.getElementById("articleImg");
const articleTitle = document.getElementById("articleTitle");
const articleContent = document.getElementById("articleContent");
const container = document.querySelector(".article-container");

const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const outBtn = document.getElementById("outBtn");

let currentIndex = 0;

// Menampilkan artikel dengan animasi fade
function showArticle(index) {
  container.classList.remove("show");
  setTimeout(() => {
    const article = articles[index];
    articleImg.src = article.image;
    articleTitle.textContent = article.title;
    articleContent.textContent = article.content;
    container.classList.add("show");
  }, 300);
}

nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % articles.length;
  showArticle(currentIndex);
};

backBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + articles.length) % articles.length;
  showArticle(currentIndex);
};

outBtn.onclick = () => {
  alert("Terima kasih! Anda akan keluar dari galeri artikel.");
  window.location.href = "index.html";
};

showArticle(currentIndex);
