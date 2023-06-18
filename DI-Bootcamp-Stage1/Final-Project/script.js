function changeText(src) {
    var iframe = document.getElementById('iframe1'); 
    iframe.src = src;
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    var textElement = iframeDoc.getElementById('text');
    textElement.textContent = 'Новый текст на странице';
  }