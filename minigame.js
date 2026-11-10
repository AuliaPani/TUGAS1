// variabel untuk menyiumpan porsi makan kucing
// dengan nilai awal nol(0)
let porsi = 0

function berimakan() {
  // tambah porsi makan +1
  porsi = porsi + 1
  
updateTampilan()

}


//fungsi mengajak main kucing (porsi dkurangi 1)
function ajakmain() {
  //menguragi porsi 1 jagan sampe negatif
  if (porsi > 0) {
    porsi = porsi - 1
    }  
  
  updateTampilan()
  
}
function reset () {
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