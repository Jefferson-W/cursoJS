// Crie um programa que
// Receba 2 notas do aluno
// calcule a media

// se media >=7 "Aprovado"
// se media >= 5 "Recuperação"
// se media < 5 "Reprovado"

// let nota1 = 10
// let nota2 = 5
// let media = (nota1 + nota2) / 2

// if (media >= 7) {
//     console.log(`Com a média em ${media}, o aluno(a) está aprovado(a)!`)
// } else if (media >= 5) {
//     console.log(`Com a média em ${media}, o aluno(a) está de recuperação!`)
// } else {
//     console.log(`Com a média em ${media}, o aluno(a) está reprovado(a)!`)
// }


// EX01- Número positivo, negativo ou zero
// Peça um número ao usuário e informe se ele é:

// Positivo
// Negativo
// Zero
//****************************************************************************** */
// EX 02 -> Senha correta
// Crie uma variável com uma senha fixa (ex: "1234").
// Peça para o usuário digitar uma senha e:

// Se for igual → "Acesso permitido"
// Se for diferente → "Acesso negado"

//****************************************************************************** */
// EX 03 ->Pode votar?

// Peça a idade da pessoa.
// Regras no Brasil:

// Menor de 16 → Não pode votar
// 16 e 17 → Voto opcional
// 18 a 69 → Voto obrigatório
// 70 ou mais → Voto opcional






// EX01- Número positivo, negativo ou zero
// Peça um número ao usuário e informe se ele é:

// Positivo
// Negativo
// Zero



// let numeroUsuario = -50

// if(numeroUsuario == 0){
//     console.log('Numero é o zero')
// }else if (numeroUsuario > 0){
//     console.log('Positivo')
// }else {
//     console.log('Negativo')
// }




// EX 02 -> Senha correta
// Crie uma variável com uma senha fixa (ex: "1234").
// Peça para o usuário digitar uma senha e:

// Se for igual → "Acesso permitido"
// Se for diferente → "Acesso negado"

// let senhaPermitida = 9987
// let senhaDigitada = 9987


// if(senhaDigitada == senhaPermitida){
//     console.log('Acesso permitido')
// }else{
//     console.log('Acesso negado!!')
// }




// EX 03 ->Pode votar?

// Peça a idade da pessoa.
// Regras no Brasil:

// Menor de 16 → Não pode votar
// 16 e 17 → Voto opcional
// 18 a 69 → Voto obrigatório
// 70 ou mais → Voto opcional


let idadePessoa = 14

idadePessoa = 35

if(idadePessoa < 16 ){
    console.log("Não pode votar!")
}else if(idadePessoa < 18 || idadePessoa >= 70){
    console.log('Voto opcional')
}else{
    console.log('Voto obrigatorio')
}

