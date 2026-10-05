// 단말 언어에 따라 문서 언어를 고른다: ko* → 한국어, 그 외 전부 영어.
// 사용자가 상단 링크로 수동 전환하면 그 선택을 기억한다.
(function () {
  function setLang(lang) {
    var isKo = lang === 'ko';
    var ko = document.getElementById('doc-ko');
    var en = document.getElementById('doc-en');
    if (ko) ko.hidden = !isKo;
    if (en) en.hidden = isKo;
    document.documentElement.lang = isKo ? 'ko' : 'en';
    try { localStorage.setItem('policyLang', isKo ? 'ko' : 'en'); } catch (e) {}
  }
  window.setLang = setLang;

  var saved = null;
  try { saved = localStorage.getItem('policyLang'); } catch (e) {}
  var nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  var initial = saved || (nav.indexOf('ko') === 0 ? 'ko' : 'en');
  setLang(initial);
})();
