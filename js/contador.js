// contador.js

// ===============================
// CONFIGURAÇÃO
// ===============================

// Data-alvo: 24/11/2025 às 09:00 (Horário de Brasília)
const DATA_ALVO = new Date("2025-11-24T09:00:00-03:00");

// Elementos do DOM
const elDias = document.getElementById("contador-dias");
const elHoras = document.getElementById("contador-horas");
const elMinutos = document.getElementById("contador-minutos");
const elSegundos = document.getElementById("contador-segundos");

// ===============================
// FUNÇÃO PRINCIPAL
// ===============================
function atualizarContagem() {
    const agora = new Date();
    const diff = DATA_ALVO - agora;

    // Se passou do prazo, zera tudo
    if (diff <= 0) {
        elDias.textContent = "0";
        elHoras.textContent = "00";
        elMinutos.textContent = "00";
        elSegundos.textContent = "00";
        return;
    }

    const totalSegundos = Math.floor(diff / 1000);

    const dias = Math.floor(totalSegundos / 86400);
    const horas = Math.floor((totalSegundos % 86400) / 3600);
    const minutos = Math.floor((totalSegundos % 3600) / 60);
    const segundos = totalSegundos % 60;

    elDias.textContent = dias;
    elHoras.textContent = horas.toString().padStart(2, "0");
    elMinutos.textContent = minutos.toString().padStart(2, "0");
    elSegundos.textContent = segundos.toString().padStart(2, "0");
}

// Atualiza imediatamente ao carregar
atualizarContagem();

// Atualiza a cada segundo
setInterval(atualizarContagem, 1000);
