/* Login e cadastro com validação acessível (mensagens por campo, aria-invalid, role=alert). */
(() => {
  const $ = id => document.getElementById(id);
  const goHome = () => { location.href = 'pages/loja.html'; };
  let signup = false;

  if (LW.hasSession()) goHome();

  function mode(up) {
    signup = up;
    $('tIn').setAttribute('aria-selected', String(!up));
    $('tUp').setAttribute('aria-selected', String(up));
    $('nameBox').hidden = $('confBox').hidden = $('hint').hidden = !up;
    $('go').textContent = up ? 'Criar conta' : 'Entrar';
    $('pass').autocomplete = up ? 'new-password' : 'current-password';
    ['eName', 'eMail', 'ePass', 'eConf', 'eForm'].forEach(i => { $(i).textContent = ''; });
  }

  function check(id, errId, msg) {
    $(errId).textContent = msg || '';
    $(id).setAttribute('aria-invalid', String(!!msg));
    return !msg;
  }

  function validate() {
    const mail = $('email').value.trim(), pass = $('pass').value;
    let ok = check('email', 'eMail', /^\S+@\S+\.\S+$/.test(mail) ? '' : 'Digite um e-mail válido, como nome@email.com.');
    if (signup) {
      ok = check('name', 'eName', $('name').value.trim().length >= 2 ? '' : 'Informe seu nome.') && ok;
      ok = check('pass', 'ePass', /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(pass) ? '' : 'Use 8 ou mais caracteres, com letras e números.') && ok;
      ok = check('conf', 'eConf', $('conf').value === pass ? '' : 'As senhas não são iguais.') && ok;
    } else {
      ok = check('pass', 'ePass', pass ? '' : 'Digite sua senha.') && ok;
    }
    return ok;
  }

  function submit(e) {
    e.preventDefault();
    $('eForm').textContent = '';
    try {
      if (!LW.storageOk()) {
        $('eForm').textContent = 'O navegador bloqueou o armazenamento local. Saia da aba anônima ou abra o site por um servidor local (python -m http.server).';
        return;
      }
      if (!validate()) return;
      const mail = $('email').value.trim().toLowerCase();
      const err = signup
        ? LW.register($('name').value.trim(), mail, $('pass').value)
        : LW.login(mail, $('pass').value);
      if (err) $('eForm').textContent = err; else goHome();
    } catch (error) {
      console.error(error);
      $('eForm').textContent = 'Algo deu errado ao entrar. Tente de novo ou crie uma conta nova.';
    }
  }

  function google() {
    try {
      const mail = 'cliente.google@gmail.com';
      if (LW.login(mail, 'google-demo1')) LW.register('Cliente Google', mail, 'google-demo1');
      goHome();
    } catch (error) {
      console.error(error);
      $('eForm').textContent = 'Não foi possível entrar com a conta simulada do Google.';
    }
  }

  $('tIn').onclick = () => mode(false);
  $('tUp').onclick = () => mode(true);
  $('show').onchange = e => { $('pass').type = $('conf').type = e.target.checked ? 'text' : 'password'; };
  $('f').onsubmit = submit;
  $('google').onclick = google;
})();