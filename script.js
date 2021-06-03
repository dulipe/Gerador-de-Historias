function montarHistoria() {
    const nome = document.getElementById('protagonista')
    if (nome.value === '') {
        alert('Digite um nome')
    } else {
        // variaveis dinamicas do texto
        const protagonista = document.getElementById('protagonista').value.toUpperCase()
        const classe = document.getElementById('classe').value.toUpperCase()
        const vilao = document.getElementById('vilao').value.toUpperCase()
        const armamento = document.getElementById('armamento').value.toUpperCase()
        const local = document.getElementById('local').value.toUpperCase()
        const tema = document.getElementById('tema').value.toUpperCase()
        const ano = new Date().getFullYear()
        
        // 6 tipos de Historias criadas a partir do select do tema

        const virus = `Uma vez um certo cientista ganancioso Clodoaldo Einsten criou um virus que ele nomeou de ${tema}, querendo ganhar dinheiro encima dos antidotos que apenas ele sabia criar, certo dia seu laboratorio que se localizava ${local} misteriosamente explodiu no ano de ${ano}, espalhando esse virus pelo ar, a maioria das pessoas foram transformadas em ${vilao}, o Mundo ficou um caos até que surgiu o nosso Herói ${protagonista} o famoso ${classe} que encontrou ${armamento} e derrotou Clodoaldo, conseguindo o antidoto para salvar o Mundo.`

        const morte = `Existia um Mundo de Magia que era protegido pelo Feiticeiro mais experiente Merlin, que morava ${local}, ele viveu por 500 anos, mas no ano de ${ano} ele faleceu devido a uma doença mortal que ele tinha, e por causa da ${tema} todos os ${vilao} se juntaram para tomar o seu lugar, porem o Sucessor de Merlin ${protagonista} o Feiticeiro ${classe} superou as expectativas de seu antigo mestre e derrotou todos aqueles ${vilao} com ${armamento}, protegendo o Mundo da Magia`

        const assassinato = `Em um Faroeste que era localizado em São Tomé das Letras, existia um famoso ladrão chamado Jesse James, ele era um cara ruim que roubava todo mundo junto com sua gangue de ${vilao} ele morava ${local},mas no ano de ${ano} o povo cansado dessa gangue de ${vilao} contratou um assassino chamado ${protagonista} o ${classe} que se livrou de Jesse James com ${armamento}, depois do ${tema}, sua gangue de ${vilao} se juntaram ao famoso ${classe} e agora eles são justiceiros ${local}.`

        const roubo = `No ano de ${ano} um pirata de codinome Capitão Sparrow invadiu a casa de ${protagonista} que morava ${local} e roubou seu tesouro, apos o ${tema} Capitão Sparrow descobriu que ${protagonista} era um ${classe} das chamas, e que o tesouro roubado era uma chave que aprisionava os ${vilao}, Sparrow foi morto pelos ${vilao}, e o ${classe} das chamas com  ${armamento} conseguiu derrotar os ${vilao} e aprisionalos novamente ${local}.`

        const sequestro = `no ano de ${ano} a princesa Minerva vai completar 18 anos e assumir o trono da Inglaterra, no entanto um exercito revolucionario junto com seus vassalos ${vilao} sequestraram a princesa antes do seu decimo oitavo aniversario, a Rainha Elizabeth quando soube do ${tema}, chamou o seu melhor comandante do exército, o General ${protagonista} tambem conhecido como o grande ${classe} que morava ${local}, o general ${protagonista} possuia ${armamento} e com seu exercito leal a rainha, derrotou facilmente o exercito revolucionario e salvou a princesa Minerva.`

        const reliquia = `${protagonista} se reuniu com Harry Potter, Hermione Granger e Ronald Wesley em busca das ${tema} que eles desconfiavam que estava ${local}. No ano de ${ano}, eles foram ate la e descobriram que as reliquias eram protegidas por Lord Voldemort e seus ${vilao}, mas como ${protagonista} era um ${classe} muito bom com ${armamento}, derrotou lord Voldemort e seus ${vilao}, conseguindo assim a posse das ${tema}.`


        // Selecionando a Historia a partir da escolha do tema

        let history = tema
        let historia;

        switch(tema) {
            case 'RELIQUIAS DA MORTE':
                historia = reliquia
                break
            case 'T-VIRUS':
                historia = virus
                break
            case 'MORTE DE MERLIN':
                historia = morte
                break
            case 'ASSASSINATO DE JESSE JAMES':
                historia = assassinato
                break
            case 'ROUBO DO TESOURO':
                historia = roubo
                break
            case 'SEQUESTRO DA PRINCESA':
                historia = sequestro
                break    
        }

        let body = document.querySelector('body')
        let paragrafo = document.createElement('p')
        let div = document.createElement('div')
        let btn = document.createElement('a')
        btn.innerText = 'Gerar outra História'
        btn.setAttribute('href', './index.html')
        div.setAttribute('id', 'historia')
        body.innerHTML = ''
        paragrafo.append(historia)
        div.append(paragrafo, btn)
        body.appendChild(div)
        
        
    }
}

document.querySelector('#btn').addEventListener('click', montarHistoria)

