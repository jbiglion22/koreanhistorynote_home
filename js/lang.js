// 언어 고르기.
// - 기본 언어는 영어(index.html, privacy-policy.html). 다른 언어는 "-언어" 파일(index-ko.html …).
// - 영어 페이지를 처음 열었을 때, 브라우저의 첫 번째 언어가 한국어면 한국어 페이지로 보낸다.
// - 사용자가 언어 링크(.lang-switch)를 누르면 그 선택을 기억해, 다음부터는 자동으로 보내지 않는다.
// 이 파일은 <head>에서 읽어 화면이 그려지기 전에 이동한다.
(function () {
  var KEY = 'lang';
  var html = document.documentElement;

  function saved() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  // 영어(기본) 페이지에서만 자동 이동한다. 이동할 곳은 html의 data-ko 속성.
  var koPage = html.getAttribute('data-ko');
  if (html.lang === 'en' && koPage) {
    var choice = saved();
    var first = (navigator.languages && navigator.languages[0]) || navigator.language || '';
    if (choice === 'ko' || (choice === null && /^ko\b/i.test(first))) {
      location.replace(koPage + location.hash);
      return;
    }
  }

  // 언어 링크를 누르면 고른 언어를 기억한다.
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a.lang-switch');
    if (!a) return;
    try { localStorage.setItem(KEY, a.getAttribute('hreflang')); } catch (err) { /* 저장 못 해도 이동은 된다 */ }
  });
})();
