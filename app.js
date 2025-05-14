const pages = [ { content: "안녕하세요, 선생님! 한 해 동안 잘 부탁드립니다!<br>감사합니다!", name: "김태은" },
                { content: "선생님 안녕하세요! 1년 동안 잘 부탁드려요!", name: "김효원" },
                { content: "선생님 한 해 동안 잘 부탁드려요!!<br>제 하트를 많이 드릴게요! ♡♡♡♡♡♡♡", name: "(윈터)혜령" },
                { content: "선생님 한 해 동안 잘 부탁드려요.", name: "박지우" },
                { content: "선생님 진짜 진짜 사랑해요!", name: "안유진 양지효" },
                { content: "한 해 동안 열싱히 공부하고<br>예의 바르게 생활하겠습니다. 잘 부탁드립니다♡♡!", name: "이지윤(설윤)" },
                { content: "선생님 1년 동안 잘 부탁드려요.", name: "카리나아윤" },
                { content: "항상 재밌는 수업 만들어 주시는<br>선생님 매일 감사합니다~♡", name: "정예주" },
                { content: "힘드실 때나 아프실 때도 늘 저희를 우선으로<br>밝은 모습 보여주셔서 감사합니다. 사랑해요!", name: "정은우" },
                { content: "항상 감사하고, 존경합니다♡<br>앞으로 조금 조용히 하고, 말도 잘 듣겠습니다!", name: "조민주" },
                { content: "선생님 수업을 매일 재밌게 해주셔서 감사해요.", name: "최소윤" },
                { content: "한 해 동안 잘 부탁드리고요.<br>항상 저희 사랑해 주셔 감사합니다!", name: "최은서" },
                { content: "선생님 항상 수업을 지루하지 않고<br>재밌게 해주셔서 감사해요.", name: "최정안" }, //
                { content: "선생님 재밌고 항상 행복하게<br>가르쳐 주셔서 감사합니다.", name: "강민찬" },
                { content: "선생님 저희를 가르쳐주셔서 감사합니다.", name: "강시훈" },
                { content: "선생님 항상 감사하고 존경합니다.", name: "강지웅" },
                { content: "선생님 저희를 가르쳐주셔서 감사합니다.<br>한 해 동안 잘 부탁드립니다.", name: "구관우" },
                { content: "항상 재미있게 수업해 주셔서 감사합니다.", name: "김선오" },
                { content: "선생님, 항상 저희를 재미있게 수업을<br>진행해 주셔서 정말 감사합니다.", name: "김예성" },
                { content: "선생님, 항상 저희를 재미있게 해주셔서 감사합니다.", name: "김정민" },
                { content: "선생님, 항상 저희를 가르쳐주셔서 감사합니다!<br>더 열심히 노력할게요!", name: "김진표" },
                { content: "뀨? 뀨?<br>저는 3반에서 귀여움을 담당하는 박보검입니다.", name: "박민준" },
                { content: "선생님, 저희를 가르쳐 주시고<br>재밌게 해주셔서 고맙습니다!", name: "박주원" },
                { content: "저희를 가르쳐 주셔서 감사합니다.", name: "이윤우" },
                { content: "선생님 저희를 가르쳐 주셔서 감사합니다.", name: "이재현" },
                { content: "선생님 저희를 가르쳐 주셔서 감사합니다.", name: "장재원" },
                { content: "선생님 제가 3반의 비쥬얼 담당 허현수예요<br>하고 싶은 말은 뀨? 뀨?", name: "허현수" },
];

let currentPage = 0;

function renderFooter(currentIdx, total) {
  let dots = "";
  for (let i = 0; i < total; i++) {
    dots += i === currentIdx ? `<span class="active">●</span>` : `<span>●</span>`;
  }
  return dots;
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    renderPage(currentPage);
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    renderPage(currentPage);
  }
}

function renderPage(index) {
  const page = pages[index];
  const contentDiv = document.getElementById("pageContent");
  const dotsContainer = document.getElementById("footerDots");

  contentDiv.innerHTML = `
    <div class="emoji emoji-top-left">🌸</div>
    <div class="emoji emoji-bottom-right">💐</div>
    <div class="content">“${page.content}”</div>
    <div class="name">${currentPage+1}번 ${page.name}</div>
  `;
  console.log(page.content)
  dotsContainer.innerHTML = renderFooter(index, pages.length);
}

function handleOrientation() {
  const isPortrait = window.matchMedia("(orientation: portrait)").matches;
  document.getElementById("landscapeWarning").style.display = isPortrait ? "flex" : "none";
  document.getElementById("mainContent").style.display = isPortrait ? "none" : "block";
}

window.addEventListener("orientationchange", handleOrientation);
window.addEventListener("resize", handleOrientation);
handleOrientation();


renderPage(currentPage);
