const nama = "dwiki putra";
let usia = 22;

let biodata = document.getElementById("biodata");
console.log(biodata);

function generateBiodata() {
  let kelompok;

  if (usia >= 2 && usia <= 8) {
    kelompok = "usia kelompok anak-anak";
  } else if (usia > 8 && usia <= 21) {
    kelompok = "usia kelompok remaja";
  } else if (usia > 21 && usia <= 56) {
    kelompok = "usia kelompok dewasa";
  } else if (usia > 56) {
    kelompok = "usia kelompok tua";
  } else {
    kelompok = "usia kelompok bayi";
  }
  return (biodata.innerHTML = kelompok);
}

console.log(nama);
console.log(usia);

generateBiodata();
