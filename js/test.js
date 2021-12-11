// Make Cards
const sectionCards = document.querySelector("div.cards");

const card = document.querySelector("div.cardd");

const videos = [
  {
    title: "Primeira-dama Promove diálogo Intergeracional Plataforma “Dikota e_6.0”",
    duration: "2:05:26",
    thumb: "https://i.ytimg.com/vi/MQ4OHrxSRBA/hqdefault.jpg",
    video_id: "MQ4OHrxSRBA"
  },
  {
    title: "UNITEL GO CHALLENGE_2021",
    duration: "1:54:56",
    thumb: "https://i.ytimg.com/vi/s1sAz-Pz_Dg/hqdefault.jpg",
    video_id: "s1sAz-Pz_Dg"
  },
  {
    title: "Live Banco Sol com Diva Ary",
    duration: "1:39:08",
    thumb: "https://i.ytimg.com/vi/505yC4CBo9c/hqdefault.jpg",
    video_id: "505yC4CBo9c"
  },
  {
    title: "BAI premeia 161 técnicos do MINSA destacados no processo massivo de vacinação contra COVID-19",
    duration: "39:39",
    thumb: "https://i.ytimg.com/vi/kqsNIKIUV4E/hqdefault.jpg",
    video_id: "kqsNIKIUV4E"
  },
  {
    title: "Talento global inspirador para mudar o futuro Se ... tes do futuro Angola 2021 cerimônia de abertura",
    duration: "1:14:10",
    thumb: "https://i.ytimg.com/vi/eEs37QjOFEI/hqdefault.jpg",
    video_id: "eEs37QjOFEI"
  },
  {
    title:"Girabola: Kabuscorp VS Petro de Luanda",
    duration: "1:16:25",
    thumb: "https://i.ytimg.com/vi/lDgiqvQZ5rI/hqdefault.jpg",
    video_id: "lDgiqvQZ5rI"
  }
];

videos.map(video => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", video.video_id);
  cardClone.querySelector("img").src = video.thumb;
  cardClone.querySelector(".title").innerHTML = video.title;
  // cardClone.querySelector(".info > p.text--medium").innerHTML =
  //   video.duration;
  sectionCards.appendChild(cardClone);
});

card.remove();

// Modal actions
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const cards = [...document.querySelectorAll(".cards .cardd")];

cards.forEach(card => {
  card.addEventListener("click", () => {
    modal.querySelector(
      "iframe"
    ).src = `https://www.youtube.com/embed/${card.getAttribute("id")}`;

    modalOverlay.classList.add("active");
    modal.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
  });
});

document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  modal.classList.remove("active");
  modal.querySelector("iframe").src = ``;
  document.querySelector("body").style.overflow = "initial";
});