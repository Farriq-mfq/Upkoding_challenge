function caesar(pesan) {
  const katekter = [..."abcdefghijklmnopqrstuvwxyz1234567890"]; // deklarasikan constant karakter dengan memecah karakter
  let enkripsi = []; // Membuat array kosong untuk menampung enkripsi
  for (let i = 0; i < [...pesan].length; i++) {
    // looping pesan dengan di pecah 1 per 1
    const word = [...pesan][i]; // deklarasikan variable word
    if (katekter.indexOf(word) != -1) {
      // logic indexOF
      enkripsi.push(katekter[katekter.indexOf(word) + 1]);
    } else {
      enkripsi.push(word);
    }
  }
  return enkripsi.join("");
}


// pesan => hallo kunci menjadi ibmmp lvodj
