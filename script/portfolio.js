const illustrations = [
  {
    src: "Quality time1.png",
    title: "Quality Time",
  },
  {
    src: "singalong.png",
    title: "Sing Along",
  },
  {
    src: "Ketiduran.png",
    title: "Overslept",
  },
  {
    src: "Kerry.png",
    title: "Kerry The Snep",
  },
  {
    src: "arcanine2.png",
    title: "Kerry The Snep",
  },
  {
    src: "Ryan.png",
    title: "Ryan The Rabbit",
  },
  {
    src: "Kuga.png",
    title: "Kuga Yuma",
  },
];
const cerpen = [
  {
    title: "Sialan Kau, Bastet. Aku ini menyayangimu",
    capaian: "Rank 19th National, Tulis.Me 2023",
    tanggal: "February 13th 2023",
    src: "https://images.unsplash.com/photo-1662994314076-68a7573a1e23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
  },
  {
    title: "Matilah Sesuai Keinginanmu",
    capaian: "Rank 13th National, ikutlomba 2020",
    tanggal: "November 30th 2020",
    src: "https://images.unsplash.com/photo-1626663082675-6be9ee82c4ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Kisah Manusia Gajah",
    capaian: "Rank 52th National, Tulis.Me 2020",
    tanggal: "September 10th 2020",
    src: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlcGhhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  },
];

const card = document.getElementById("illustration");
card.innerHTML = "";
for (let i = 0; i < illustrations.length; i++) {
  card.innerHTML += `<div class="card mx-2">
  <img src="aset/img/${illustrations[i].src}" class="card-img-top"  />
  <div class="card-body">
    <p class="card-text">${illustrations[i].title}</p>
  </div>
</div>`;
}

const card2 = document.getElementById("litteral");
card2.innerHTML = "";
for (let i = 0; i < cerpen.length; i++) {
  card2.innerHTML += `<div class="card" style="width: 18rem">
  <img src="${cerpen[i].src}" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title"><a href="#">${cerpen[i].title} </a></h5>
    <p style="color: blue"> ${cerpen[i].capaian} </p>
    <p class="card-text"><small class="text-body-secondary"> ${cerpen[i].tanggal} </small></p>
  </div>
</div>`;
}
