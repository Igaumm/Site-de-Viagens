function mostrarInfo(destino) {
    alert(`Você escolheu ${destino}!`);
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulário enviado com sucesso!');
});
