# mobileShop
Aplicação mobile desenvolvida em React Native para funcionalidade de uma loja de produtos com listagem e carrinho de compras.

## Funcionalidades

### Tela inicial

Ao inicializar a aplicação a tela inicial apresenta uma animação de loading indicando o carregamento da listagem de produtos que deverá ser apresentada logo em seguida.
Cada item representa um produto da lista, e em cada item ha um botao com icone de carrinho de compras que e responsavel por adicionar aquele produto ao carrinho.
Ao clicar no item o usuario e direcionado para a tela de detalhes de produto.

### Tela de detalhes do produto

Ao acessar a tela de detalhes e exibida a imagem do produto junto com os detalhes do mesmo, como nome, preço, disponibilidade em estoque. Tambem e exibido um contador para adicionar ou remover o produto do carrinho de compras, juntamente com o valor total daquele produto multiplicado pela quantidade.

## Tela de carrinho de compras

Existe um icone de carrinho de compras no topo da tela inicial que direciona o usuario a respectiva tela.
Ao acessar a tela e exibida a listagem de produtos adicionados ao carrinho de compras. Para cada item existe um contador identico ao disponivel na tela de detalhes de produto.
Para cada item adicionado existe a funcionalidade de long press que possibilita excluir aquele produto do carrinho.
Ao final da lista existe um botao que esvazia o carrinho de compras.
