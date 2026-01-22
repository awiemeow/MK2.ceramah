// DFK20013 – DOM Manipulation sahaja, TIADA alert()
document.getElementById('borangTempah').addEventListener('submit', function (e) {
  e.preventDefault(); // halang refresh

  // Ambil nilai
  const nama = this.nama.value.trim();
  const email = this.email.value.trim();
  const telefon = this.telefon.value.trim();
  const kategori = this.kategori.value;
  const slot = parseInt(this.slot.value);
  const hargaUnit = 250;
  const jumlah = slot * hargaUnit;

  // Wajib validasi (HTML5 dah buat, tapi tambah safety)
  if (!this.perakuan.checked) return;

  // Sembunyi borang, papar kad pengesahan
  document.querySelector('.form-section').classList.add('hidden');
  const kad = document.getElementById('pengesahan');
  kad.classList.remove('hidden');

  // Isi maklumat
  document.getElementById('maklumatPeserta').innerHTML = `
    <p><strong>Nama:</strong> ${nama}</p>
    <p><strong>E-mel:</strong> ${email}</p>
    <p><strong>Telefon:</strong> ${telefon}</p>
    <p><strong>Kategori:</strong> ${kategori}</p>
    <p><strong>Bilangan Slot:</strong> ${slot}</p>
    <p><strong>Jumlah Yuran:</strong> RM ${jumlah.toFixed(2)}</p>
    <p><em>Sila simpan resit asal semasa hari ceramah. Terima kasih!</em></p>
  `;
});