(function(){
  var KEY = 'lgpd_consent';
  try {
    var consent = localStorage.getItem(KEY);
    if (consent) return;
  } catch (e) { /* localStorage indisponivel, exibe banner */ }

  var banner = document.createElement('div');
  banner.id = 'lgpd-banner';
  banner.innerHTML = `
    <style>
      #lgpd-banner{position:fixed;bottom:0;left:0;right:0;background:#1a365d;color:#fff;padding:18px 20px;z-index:9999;box-shadow:0 -2px 10px rgba(0,0,0,.2);font-family:'Segoe UI',Arial,sans-serif}
      #lgpd-banner .wrap{max-width:1200px;margin:0 auto;display:flex;align-items:center;gap:20px;flex-wrap:wrap}
      #lgpd-banner p{flex:1;font-size:14px;line-height:1.5;margin:0}
      #lgpd-banner a{color:#c9a227;text-decoration:underline}
      #lgpd-banner button{padding:8px 18px;border:none;border-radius:4px;cursor:pointer;font-weight:600;font-size:13px}
      #lgpd-banner .aceitar{background:#c9a227;color:#1a365d}
      #lgpd-banner .recusar{background:transparent;color:#fff;border:1px solid #fff}
      @media(max-width:600px){#lgpd-banner .wrap{flex-direction:column;align-items:stretch}#lgpd-banner button{width:100%}}
    </style>
    <div class="wrap">
      <p>Utilizamos cookies técnicos essenciais para o funcionamento do site. Ao continuar, você concorda com nossa <a href="privacidade.html" target="_blank">Política de Privacidade</a>, com os <a href="termos.html" target="_blank">Termos de Uso</a> e com a <a href="cookies.html" target="_blank">Política de Cookies</a>, em conformidade com a LGPD (Lei 13.709/2018).</p>
      <button class="aceitar" id="lgpd-ok">Aceitar</button>
      <button class="recusar" id="lgpd-no">Recusar</button>
    </div>
  `;
  document.body.appendChild(banner);

  function registrar(valor){
    try {
      var registro = {
        valor: valor,
        data: new Date().toISOString(),
        pagina: window.location.href
      };
      localStorage.setItem(KEY, JSON.stringify(registro));
    } catch (e) { /* armazenamento indisponivel */ }
    banner.remove();
  }

  document.getElementById('lgpd-ok').addEventListener('click', function(){
    registrar('accepted');
  });
  document.getElementById('lgpd-no').addEventListener('click', function(){
    registrar('declined');
  });
})();