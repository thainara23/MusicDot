var $tdTotalCursos = document.querySelector('.js-total-de-cursos')
var $tdTotalDeHoras = document.querySelector('.js-total-de-horas')
var $buttonConfirmar = document.querySelector('.js-botao-matricula')

var TotalHoras = 0
var TotalCursos = 0

function adicionaCurso(checkbox) {
    if(checkbox.checked){
        TotalCursos ++
        TotalHoras += parseInt(checkbox.value)
    }
    else{
        TotalCursos --
        TotalHoras -= parseInt(checkbox.value)
    }

    $tdTotalDeHoras.textContent = TotalHoras + 'h'
    $tdTotalCursos.textContent = TotalCursos + ' cursos(s)'
}

$buttonConfirmar.onclick = confirmaMatriculas

function confirmaMatriculas() {
    if(TotalCursos == 0) {
        alert('Nenhum curso selecionado')
    } else {
        alert('Matricula confirmada nos cursos!')
        window.location.href = 'index.html'
    }
}