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
        if(opcao == 1){
            console.log("Digite o nome do livro:")
        }else if(opcao == 2){
            console.log("Qual livro você deseja remover?")
            console.log(biblioteca)
        }else
            console.log("Pressione enter para continuar")
    } else {
        switch (opcao) {
            case 1:
                if(!livros.nome) {
                    console.log("Digite o tamanho do livro:")
                    livros.nome = entrada_usuario
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
                    console.log(" \n Livro inserido com sucesso! \n")
                    mensagem()
                }
            break;
                
            case 2:
                if(biblioteca.length >= 1){
                for(let i = 0; i < biblioteca.length; i++){
                    if(biblioteca[i].nome == entrada_usuario){
                        biblioteca.splice([i]) 
                        console.log("Livro removido com sucesso!")
                    } else
                        console.log("Livro inválido")
                }
            } else
                console.log("Sem nenhum livro adicionado até o momento \n")
                opcao = 0;
                mensagem()

              break;
            
            case 3:
                if(biblioteca.length >= 1){
                biblioteca.forEach(livros => {
                    console.log(livros)
                    opcao = 0;
                    console.log("\n")
                })  
            }else 
                console.log("Nenhum livro na lista. \n")    
                opcao = 0;
                mensagem()
            break;
        
            default:
                console.log("Opção inválida")
                opcao = 0;
                break;
        }
    }
})