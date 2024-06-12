const biblioteca = [];
let livros = {};
let opcao = 0;

function mensagem(){
console.log("Digite 1 para inserir um novo livro")
console.log("Digite 2 para remover um livro")
console.log("Digite 3 para visualizar os livros. \n")
}


mensagem()
process.stdin.on("data", function(data){
    let entrada_usuario = data.toString().trim();
    
    function verificar(){
        for(let i = 0; i < biblioteca.length; i++){
            if(entrada_usuario == biblioteca[i].nome){
            console.log(" \n Este livro já foi adicionado \n")
                opcao = 0;
                mensagem()
                return true
            }
        }
    }

    if(!opcao) {
        opcao = Number(entrada_usuario);
        if(opcao == 1){
            console.log("Digite o nome do livro:")
        }else if(opcao == 2){
            if(biblioteca.length > 0){
                console.log("Qual livro você deseja remover? \n")
                console.log(biblioteca)
            } else{
                console.log("\n Sem livros para excluir \n")
                opcao = 0;
                mensagem()
            }
        }else if(opcao == 3){
            console.log("Pressione enter para continuar")
        }else
            console.log("Opção inválida")
    } else {
        switch (opcao) {
            case 1:
                if(!verificar()){
                if(!livros.nome) {
                    if(entrada_usuario.length > 3){
                        console.log("Digite o tamanho do livro:")
                        livros.nome = entrada_usuario
                    }else
                        console.log("Nome inválido")
                } else if(!livros.tamanho){
                    if(entrada_usuario > 0){
                        livros.tamanho = entrada_usuario
                        console.log("Digite o Autor:")
                    } else
                        console.log("Número de páginas inválidas.")
                } else if(!livros.autor){
                    if(entrada_usuario.length > 3){
                        livros.autor = entrada_usuario
                        console.log("Digite o Gênero")
                    } else
                        console.log("Nome do autor inválido")
                } else {
                    if(entrada_usuario.length > 3){
                        livros.genero = entrada_usuario 
                        biblioteca.push(livros)
                        livros = {}
                        opcao = 0;
                        console.log(" \n Livro inserido com sucesso! \n")
                        mensagem()
                    } else
                        console.log("Gênero inválido")
                }
            }    
            break;
                
            case 2:
                if(biblioteca.length >= 1){
                for(let i = 0; i < biblioteca.length; i++){
                    if(biblioteca[i].nome == entrada_usuario){
                        biblioteca.splice([i]) 
                        console.log(" \n Livro removido com sucesso! \n")
                    } else
                        console.log("Livro inválido \n")
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

