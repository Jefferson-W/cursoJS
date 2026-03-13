let x = 30

function funcao1() {
    x = 90
    console.log('funcao 1, x = ', x)
}

function funcao2() {
    console.log('funcao 2, x = ', x)
}

funcao2()
funcao1()