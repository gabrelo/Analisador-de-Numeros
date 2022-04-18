let num = document.querySelector ('input#fnum')
let lista = document.querySelector ('select#flista')
let res = document.querySelector ('div#res')
let valores = []


function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){ //se o numero de N for maior ou igual a 1 e o number de N for menor ou igual a 100. ele só vai aceitar valores entre 0 e 100, ele vai ter retorno verdadeiro. 
    return true
    }
    else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''//quando eu conseguir adicionar um elemento ele precisa limpar o resultado.
    }
    else{
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = '' //serve para esvaziar o input
    num.focus()//botar o foco lá no input, como se colocasse o mouse lá denovo.
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores para finalizar')
    }else{
        let total = valores.length // variavel total para total de numerdos cadastrados
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos] 
        }
        media = soma / total
        res.innerHTML = '' // Zerar o res
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}