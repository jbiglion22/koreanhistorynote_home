// 질문 카드: 누르면 답(한 줄 요약)을 펼친다.
document.querySelectorAll('.q').forEach(function (card) {
  card.addEventListener('click', function () {
    var open = card.getAttribute('aria-expanded') === 'true';
    card.setAttribute('aria-expanded', open ? 'false' : 'true');
    var more = card.querySelector('.q-more');
    if (more) more.firstChild.nodeValue = open ? '답 보기' : '접기';
  });
});

// 바닥글의 연도를 올해로.
document.querySelectorAll('.year').forEach(function (el) {
  var y = new Date().getFullYear();
  if (y > 2026) el.textContent = '2026–' + y;
});
