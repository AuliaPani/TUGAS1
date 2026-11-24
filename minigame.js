// variabel untuk menyiumpan porsi makan kucing
// dengan nilai awal nol(0)
let porsi = 0

//siapkan aset suara di variabel
let suaramakan = new Audio("minigame/makan.mp3")
let suaramain = new Audio ("minigame/main.mp3")
let suarariset = new Audio ("minigame/riset.mp3")


function berimakan() {
  // efek suara makan
  suaramakan.currentTime = 0
  suaramakan.play()
  
// 1.ambil tekas dari input angka kotak teks
let teksinput = document.getElementById('input-makanan').value 

// 2.ubah string menjadi agka
let jumblahmakanan = Number (teksinput)

// 3.oprasi penjumblahan agka
porsi = porsi + jumblahmakanan
  
updateTampilan()

}


//fungsi mengajak main kucing (porsi dkurangi 1)
function ajakmain() {
  // efek suara main
suaramain.currentTime = 0
suaramain.play()

  if (porsi > 0) {
    porsi = porsi - 1
    }  
  
  updateTampilan()
  
}
function reset() {
  // efek suara riset
  suarariset.currentTime = 0
  suarariset.play()
  
  porsi = 0
  
  updateTampilan()
}




//fungsi untuk memperbarui tampilan html
function updateTampilan(){
  // update angaka porsi makan
  document.getElementById('teks-porsi').innerText = porsi
  
  if (porsi >= 20) {
    // ganti gambar menjadi kucing gemuk
    document.getElementById('foto-kucing').src = "minigame/kucing3.jpg"
    
    //menampilkan tulisan kucing gemuk
    document.getElementById('status-kucing').innerText = "kucing gemuk 😻"
    
  } else if (porsi >= 5) {
    
    //ganti gambar kucing menjadi sedang
    document.getElementById('foto-kucing').src = "minigame/kucing2.jpg"
  
    //menampilkan tulisan kucing sedang 
    document.getElementById('status-kucing').innerText = "kucing sedang  😼"
  
} else {
  //ganti gambar kucing menjadi sedang
    document.getElementById('foto-kucing').src = "minigame/kucing1.jpg"
  
    //menampilkan tulisan kucing sedang 
    document.getElementById('status-kucing').innerText = "kucing kurus😼"
}
}