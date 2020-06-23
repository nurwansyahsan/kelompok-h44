// ketika scroll ke bawah 200px dari atas, maka tombol ditampilkan
window.onscroll = function() {
   scrollFunction()
};

function scrollFunction() {
   if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      document.getElementById("scroll-btn").style.display = "block";
   } else {
      document.getElementById("scroll-btn").style.display = "none";
   }
}

// ketika tombol diklik, maka lakukan scroll ke atas
function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
}