<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="css/brasileirao.css" rel="stylesheet">
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>Dashboard Futebol</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
</head>
<body>
    <div class="container">
        <header>Brasileirão 2024 - Sofascore</header>     

        <ul class="nav nav-tabs" id="myTab" role="tablist" style="display:flex;justify-content:center;">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#dashboards" type="button" role="tab" aria-controls=dashboards" aria-selected="true">Dashboards</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#analiticos" type="button" role="tab" aria-controls="analiticos" aria-selected="false">Analítico</button>
            </li>
        </ul>
        <div class="tab-content fade show active" id="dashboards" role="tabpanel" aria-labelledby="dashboards" tabindex="0">
            <div class="charts">
                <div class="chart-container">
                    <h3 class="font-white">Pontuação por Time</h3>
                    <canvas id="graficoPontos"></canvas>
                </div>
                <div class="chart-container">
                    <h3>Distribuição de Jogadores</h3>
                    <canvas id="graficoJogadores"></canvas>
                </div>
            </div>
        </div>

        <div class="tab-content fade" id="analiticos" role="tabpanel" aria-labelledby="analiticos" tabindex="0">
            <div class="search-bars">
                <input type="text" id="searchTeam" placeholder="Buscar time...">
                <input type="text" id="searchPlayer" placeholder="Buscar jogador...">
            </div>

            <div class="cards">
                <div class="card" id="totalTimes">Total de Times: 0</div>
                <div class="card" id="totalJogadores">Total de Jogadores: 0</div>
                <div class="card" id="artilheiro">Artilheiro: -</div>
            </div>

            <table id="teamTable"></table>
            <table id="playerTable"></table>
        </div>

    </div>        
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="js/brasileirao.js"></script>
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
