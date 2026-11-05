
let pilotos = [
    {
        nome: 'Lewis Hamilton',
        equipe: 'Ferrari',
        pontos: 241
    },
    {
        nome: 'Max Verstappen',
        equipe: 'Red Bull',
        pontos: 236
    },
    {
        nome: 'Charles Leclerc',
        equipe: 'Ferrari',
        pontos: 233
    },
    {
        nome: 'Sergio Perez',
        equipe: 'Cadillac',
        pontos: 0
    },
    {
        nome: 'Fernando Alonso',
        equipe: 'Aston Martin',
        pontos: 7
    },
    {
        nome: 'George Russell',
        equipe: 'Mercedes',
        pontos: 242
    },
    {
        nome: 'Lando Norris',
        equipe: 'McLaren',
        pontos: 211
    },
    {
        nome: 'Carlos Sainz',
        equipe: 'Williams',
        pontos: 7
    },
    {
        nome: 'Valtteri Bottas',
        equipe: 'Cadillac',
        pontos: 0
    },
    {
        nome: 'Pierre Gasly',
        equipe: 'Alpine',
        pontos: 42
    },
    {
        nome: 'Esteban Ocon',
        equipe: 'Haas',
        pontos: 7
    },
    {
        nome: 'Franco Colapinto',
        equipe: 'Alpine',
        pontos: 27
    },
    {
        nome: 'Gabriel Bortoleto',
        equipe: 'Audi',
        pontos: 10
    },
    {
        nome: 'Oscar Piastri',
        equipe: 'McLaren',
        pontos: 144
    },
    {
        nome: 'Isack Hadjar',
        equipe: 'Red Bull',
        pontos: 105
    },
    {
        nome: 'Liam Lawson',
        equipe: 'Racing Bulls',
        pontos: 77
    },
    {
        nome: 'Arvid Lindblad',
        equipe: 'Racing Bulls',
        pontos: 38
    },
    {
        nome: 'Oliver Bearman',
        equipe: 'Haas',
        pontos: 23
    },
    {
        nome: 'Nico Hülkenberg',
        equipe: 'Audi',
        pontos: 13
    },
    {
        nome: 'Alexander Albon',
        equipe: 'Williams',
        pontos: 5
    },
    {
        nome: 'Lance Stroll',
        equipe: 'Aston Martin',
        pontos: 0
    },
    {
        nome: 'Andrea Kimi Antonelli',
        equipe: 'Mercedes',
        pontos: 380
    }
]
pilotos.sort(function(a, b) {
    return b.pontos - a.pontos;
});

let tabela = document.getElementById('classificacao');
console.log(tabela);

for (let i = 0; i < pilotos.length; i++) {
    console.log(i + 1, pilotos[i].nome, pilotos[i].pontos);
    
    let linha = document.createElement('tr');
    let posicao = document.createElement('td');
    posicao.textContent = i + 1;
    let nome = document.createElement('td');
    nome.textContent = pilotos[i].nome;
    let equipe = document.createElement('td');
    equipe.textContent = pilotos[i].equipe;
    let pontos = document.createElement('td');
    pontos.textContent = pilotos[i].pontos;
    linha.appendChild(posicao);
    linha.appendChild(nome);
    linha.appendChild(equipe);
    linha.appendChild(pontos);
    tabela.appendChild(linha);
    posicao.style.color = '#949393';
    if (i === 0) {
        posicao.style.color = 'gold';
        pontos.style.color = 'gold';
        
    } else if (i === 1) {
        posicao.style.color = 'silver';
    } else if (i === 2) {
        posicao.style.color = '#CD7F32';
    }

}

let lider = pilotos[0];
let liderNome = document.getElementById('classificacao-lider-nome');
liderNome.textContent = lider.nome;
liderNome.style.fontSize = '2em';
liderNome.style.fontWeight = 'bolder';
let liderEquipe = document.getElementById('classificacao-lider-equipe');
liderEquipe.textContent = lider.equipe;
liderEquipe.style.fontSize = '1.1em';
liderEquipe.classList.add('classificacao-lider-equipe');
if (lider.equipe === 'Mercedes') {
    liderEquipe.classList.add('mercedes');
} else if (lider.equipe === 'Ferrari') {
    liderEquipe.classList.add('ferrari');
} else if (lider.equipe === 'Audi') {
    liderEquipe.classList.add('audi');
} else if (lider.equipe === 'Red Bull') {
    liderEquipe.classList.add('redbull');
} else if (lider.equipe === 'McLaren') {
    liderEquipe.classList.add('mclaren');
} else if (lider.equipe === 'Alpine') {
    liderEquipe.classList.add('alpine');
} else if (lider.equipe === 'Aston Martin') {
    liderEquipe.classList.add('astonmartin');
} else if (lider.equipe === 'Williams') {
    liderEquipe.classList.add('williams');
} else if (lider.equipe === 'Cadillac') {
    liderEquipe.classList.add('cadillac');
} else if (lider.equipe === 'Haas') {
    liderEquipe.classList.add('haas');
} else if (lider.equipe === 'Racing Bulls') {
    liderEquipe.classList.add('racingbulls');
}
let liderPontos = document.getElementById('classificacao-lider-pontos');
liderPontos.style.fontSize = '1.1em';
liderPontos.textContent = lider.pontos + ' Pontos';