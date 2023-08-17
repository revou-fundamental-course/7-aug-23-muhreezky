function hitungLuas (alas, tinggi) {
  return alas * tinggi / 2;
}

function hitungKeliling(...sisi) {
  let result = 0;
  sisi.forEach((v) => result += v);
  return result;
}

function handleLuas (e, targetId) {
  e.preventDefault();
  const t = document.getElementById(targetId);
  const frm = new FormData(e.target);
  const alas = Number(frm.get("alas"));
  const tinggi = Number(frm.get("tinggi"));
  t.innerHTML = hitungLuas(alas, tinggi);
}

function handleKeliling (e, targetId) {
  e.preventDefault();
  const t = document.getElementById(targetId);
  const sisi = [];
  const frm = new FormData(e.target);
  frm.forEach((e) => sisi.push(Number(e)));
  t.innerHTML = hitungKeliling(...sisi);
}