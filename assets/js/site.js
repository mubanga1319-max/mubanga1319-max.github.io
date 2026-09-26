(function () {
  document.querySelectorAll('button.copy').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var art = btn.closest('article');
      var prose = art.querySelector('.prose');
      var sf = art.querySelector('.standfirst');
      var text = art.querySelector('h1').innerText + '\n\n' +
        (sf ? sf.innerText + '\n\n' : '') + prose.innerText + '\n\nMubanga Mwansa';
      var note = btn.parentNode.querySelector('.copied');
      function fallback() {
        var r = document.createRange(); r.selectNodeContents(prose);
        var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
        note.textContent = 'Text selected. Press Ctrl+C or Cmd+C to copy.';
      }
      try {
        navigator.clipboard.writeText(text).then(function () {
          note.textContent = 'Copied.';
        }, fallback);
      } catch (e) { fallback(); }
    });
  });
})();
