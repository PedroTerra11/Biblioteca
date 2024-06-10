const biblioteca = [];
let livros = {};
let opcao = 0;

function mensagem(){
console.log("Digite 1 para inserir um novo livro")
console.log("Digite 2 para remover um livro")
console.log("Digite 3 para visualizar os livros.")
}

mensagem()
process.stdin.on("data", function(data){
    let entrada_usuario = data.toString().trim();

    if(!opcao) {
        opcao = Number(entrada_usuario);
        console.log("Digite Enter para continuar")
    } else {
        switch (opcao) {
            case 1:
                if(!livros.nome) {
                    livros.nome = entrada_usuario
                    console.log("Digite o nome do livro:")
                } else if(!livros.tamanho){
                    livros.tamanho = entrada_usuario
                    console.log("Digite o Autor:")
                } else if(!livros.autor){
                    livros.autor = entrada_usuario
                    console.log("Digite o Gênero")
                } else {
                    livros.genero = entrada_usuario 
                    biblioteca.push(livros)
                    livros = {}
                    opcao = 0;
                    console.log("Livro inserido com sucesso!")
                    mensagem()
                }
            break;
                
            case 2:
                
              break;
            
            case 3:
                biblioteca.forEach(livros => {
                    console.log(livros)
                    opcao = 0;

                })  
            break;
        
            default:
                console.log("Opção inválida")
                opcao = 0;
                break;
        }
    }
})