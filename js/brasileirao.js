$(document).ready(function() {
	Init();
	SetActions();
});

function Init()
{
	const dadosAPI = {
        totalTimes: 20,
        totalJogadores: 500,
        artilheiro: "Pedro (Flamengo)",
        classificacao: [
            { posicao: 1, time: "Flamengo", pontos: 45 },
            { posicao: 2, time: "Palmeiras", pontos: 43 },
            { posicao: 3, time: "Atlético-MG", pontos: 40 }
        ],
        jogadores: [
            { nome: "Pedro", time: "Flamengo", gols: 15, assistencias: 5 },
            { nome: "Rony", time: "Palmeiras", gols: 10, assistencias: 7 }
        ],
        jogadoresPorTime: {
            Flamengo: 30,
            Palmeiras: 28,
            "Atlético-MG": 26
        }
    };

	new Chart(document.getElementById("graficoPontos").getContext("2d"), {
	    type: "bar",
	    data: {
	        labels: dadosAPI.classificacao.map(t => t.time),
	        datasets: [{
	            label: "Pontos",
	            data: dadosAPI.classificacao.map(t => t.pontos),
	            backgroundColor: "#FF5733",
	            borderColor: "#FF5733",
	            borderWidth: 1
	        }]
	    },
	    options: {
	        responsive: true,
	        maintainAspectRatio: false,  // Para o gráfico ocupar toda a área disponível
	        devicePixelRatio: window.devicePixelRatio,  // Para aumentar a resolução em telas de alta densidade de pixels
	    }
	});

	new Chart(document.getElementById("graficoJogadores").getContext("2d"), {
	    type: "doughnut",
	    data: {
	        labels: Object.keys(dadosAPI.jogadoresPorTime),
	        datasets: [{
	            label: "Jogadores por Time",
	            data: Object.values(dadosAPI.jogadoresPorTime),
	            backgroundColor: ["#FF5733", "#33FF57", "#3357FF"]
	        }]
	    },
	    options: {
	        responsive: true,
	        maintainAspectRatio: false,  // Para o gráfico ocupar toda a área disponível
	        devicePixelRatio: window.devicePixelRatio,  // Para aumentar a resolução em telas de alta densidade de pixels
	    }
	});

    document.getElementById("totalTimes").textContent = `Total de Times: ${dadosAPI.totalTimes}`;
    document.getElementById("totalJogadores").textContent = `Total de Jogadores: ${dadosAPI.totalJogadores}`;
    document.getElementById("artilheiro").textContent = `Artilheiro: ${dadosAPI.artilheiro}`;
}

function SetActions()
{
	$('.container').on('click', '#btnShowTab', function() {
		const tab = $(this).attr('data-tab')
		showTab(tab)
	})
} 

function atualizarTabela(id, dados, colunas) {
    const tabela = document.getElementById(id);
    if (!dados.length) return tabela.innerHTML = "";
    let html = `<tr>${colunas.map(col => `<th>${col}</th>`).join('')}</tr>`;
    html += dados.map(item => `<tr>${colunas.map(col => `<td>${item[col.toLowerCase()]}</td>`).join('')}</tr>`).join('');
    tabela.innerHTML = html;
}

function atualizarStatsTeam() {
    const teamName = document.getElementById("searchTeam").value.toLowerCase();
    const results = dadosAPI.classificacao.filter(t => t.time.toLowerCase().includes(teamName));
    atualizarTabela("teamTable", results, ["Posição", "Time", "Pontos"]);
}

function atualizarStatsPlayer() {
    const playerName = document.getElementById("searchPlayer").value.toLowerCase();
    const results = dadosAPI.jogadores.filter(j => j.nome.toLowerCase().includes(playerName));
    atualizarTabela("playerTable", results, ["Nome", "Time", "Gols", "Assistencias"]);
}

document.getElementById("searchTeam").addEventListener("input", atualizarStatsTeam);
document.getElementById("searchPlayer").addEventListener("input", atualizarStatsPlayer);

function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.navbar button');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    buttons.forEach(button => button.classList.remove('active'));
    
    document.querySelector(`.${tabName}`).classList.add('active');
    document.querySelector('#btnShowTab').classList.add('active');
}
