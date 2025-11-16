// Example: replace '#' with your WhatsApp link (with phone & prefilled message)
const link_grupo = 'https://chat.whatsapp.com/BIULFxoiDVI7EmG1Q1a6Yq';
const link_direto = 'https://api.whatsapp.com/send?phone=5511951192135&text=Ol%C3%A1%21+Quero+participar+da+Black+%C3%8Dsis+e+ter+acesso+ao+conte%C3%BAdo+exclus%C3%ADvo%21+%F0%9F%A4%A9';



// Atualiza todos os links dinamicamente para os botões de grupo
document.querySelectorAll('.link-group').forEach(a => {
  // Atualiza os links dinamicamente
  a.setAttribute("href", link_grupo);
  a.setAttribute("target", "_blank");
  a.setAttribute("rel", "noopener noreferrer");

  // Listener do evento
  a.addEventListener("click", function () {
    // Evita duplicação de evento
    if (!this.dataset.pixelSent) {

      // Monta descrição segura e padronizada
      const botao_id = this.id ? this.id : 'sem-id';

      fbq('track', 'Lead', {
        event_id: `lead_${Date.now()}`,
        event_time: Math.floor(Date.now() / 1000),
        content_name: `Lead - Black Ísis`,
        content_id: botao_id,
        value: 0.00,
        currency: 'BRL',
        event_source_url: window.location.href,
      });

      this.dataset.pixelSent = "true";
      console.log("✅ Evento Meta Pixel 'Lead' enviado com sucesso.");

    }
  });
});


// Atualiza todos os links dinamicamente para os botões de contato
document.querySelectorAll('.link-direto').forEach(a => {
  a.setAttribute("href", link_direto);
  a.setAttribute("target", "_blank"); // abre em nova aba
  a.setAttribute("rel", "noopener noreferrer"); //
});


let exibe_politica = false;

// Mostra ou esconde a política de privacidade
document.querySelectorAll('.link-politica-privacidade').forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault(); // evita recarregar a página, se for <a>
    exibe_politica = !exibe_politica;

    const politica = document.querySelector('#politica-privacidade');
    politica.classList.toggle('hidden', !exibe_politica);
  });
});
