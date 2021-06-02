// 6 tipos de Historias criadas a partir do select do tema

const virus = `Uma vez um certo cientista ganancioso Clodoaldo Einsten criou um virus que ele nomeou de 'T-Virus', querendo ganhar dinheiro encima dos antidotos que apenas ele sabia criar, certo dia seu laboratorio que se localizava 'no Castelo de Hogwarts' misteriosamente explodiu no ano de '2021', espalhando esse virus pelo ar, a maioria das pessoas foram transformadas em 'Dragões', o Mundo ficou um caos até que surgiu o nosso Herói 'Protagonista' o famoso 'Guerreiro' que encontrou 'a Espada de Grifinoria' e derrotou o Clodoaldo, conseguindo o antidoto para salvar o Mundo.`

const morte = `Existia um Mundo de Magia que era protegido pelo Feiticeiro mais experiente Merlin, que morava 'no Castelo de Hogwarts', ele viveu por 500 anos, mas no ano de '2021' ele faleceu devido a uma doença mortal que ele tinha, e por causa da 'Morte de Merlin' todos os 'Dragoes' se juntaram para tomar o seu lugar, porem o Sucessor de Merlin 'Protagonista' o Feiticeiro 'Guerreiro' superou as expectativas de seu antigo mestre e derrotou todos aqueles 'Dragões' com 'a Espada de Grifinoria', protegendo o Mundo da Magia`

const assassinato = `Em um Faroeste que era localizado em São Tomé das Letras, existia um famoso ladrão chamado Jesse James, ele era um cara ruim que roubava todo mundo junto com sua gangue de 'Dragões' ele morava 'no Castelo de Hogwarts',mas no ano de '2021' o povo cansado dessa gangue de 'Dragões' contratou um pistoleiro chamado 'Protagonista' o 'Guerreiro' que se livrou de Jesse James com 'a Espada de Grifinoria', depois do 'Assassinato de Jesse James', sua gangue de 'Dragões' se juntaram ao famoso 'Guerreiro' e agora eles são justiceiros 'no castelo de hogwarts.`

const roubo = `No ano de '2021' um pirata de codinome Capitão Sparrow invadiu a casa de 'Protagonista' que morava 'no castelo de hogwarts' e roubou seu tesouro, apos o 'Roubo do tesouro' Capitão Sparrow descobriu que 'Protagonista' era um 'Guerreiro' das chamas, e que o tesouro roubado era uma chave que aprisionava os 'Dragões', Sparrow foi morto pelos 'Dragões', e o 'Guerreiro' das chamas com a 'Espada de Grifinoria' conseguiu derrotar os 'Dragões' e aprisionalos novamente 'no castelo de hogwarts'.`


const nome = document.querySelector('#protagonista')
function montarHistoria() {
    if (nome.value === '') {
        alert('Digite um nome')
    } else {
        
    }
}

document.querySelector('#btn').addEventListener('click', montarHistoria)

