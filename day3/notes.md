### Dia 3 - JavaScript essencial: lógica no navegador
## Ideia:
- Miniapp de calculadora de gastos funcionando no navegador.
## Propósito:
- Reforçar variáveis, condicionais, loops e funções com um miniapp.
## Como eu fiz?
- Escrevi o HTML com os campos que precisava calcular
- criei a logica em JavaScript que:
    - Define variaveis de entrada, saida, resultado, avaliação e do botão de calculo. Essas referenciam o HTML.
    - Define a function calcular: ela pega os valores de entrada e saida em variaveis internas e a usam para calcular a variavel de resultado que será impresso. loga o resultado e depois converte em texto. no final tem um return que é usado no final para definir a avaliação final do resultado.
    - Define a funcion avaliar(saldo), essa dá um resultado diferente de acordo com o saldo. 
    (ex: if (saldo > 0) { avaliacaoResult = "Você fechou o mês no azul! Continue assim!";})
    - aqui entra o pulo do gato: a logica do botão define que: saldo é igual ao resultado do calcular, ou seja se calcular é 0 saldo é 0 portanto a avaliação é que o usuario fechou mes no 0, e isso é um alerta.
- Deixei "bonitinho" com CSS. (fiquei sem tempo e pedi pro gpt finalizar, sorry)
## O que aprendi?
não lembrava como fazer algumas coisas simples e durante o desenvolvimento dessa task eu acabei relembrando e as colocando em pratica