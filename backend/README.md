# React Native Challenge 20200810

### Obrigatório
 
- Leia atentamente todo o descritivo desse documento antes de qualquer coisa;
- Trabalhar em um FORK deste repositório em seu usuário;
- O aplicativo deve utilizar React Native superior a versão 0.50;
- O projeto back-end deverá ser desenvolvido em Java + Spring;
- O Front-End deve utilizar [Native Base](https://github.com/GeekyAnts/NativeBase) ou [UI Kitten](https://github.com/akveo/react-native-ui-kitten);
- Os produtos disponíveis no projeto da aplicação devem ser recuperados através da Rest WebAPI desenvolvida em Java + Spring;
- Utilize sempre boas práticas nas implementações. OOP, SOLID, DDD, Clean Code, Injeção de Dependência são sempre bem-vindos e fazem toda diferença!!!


## API / Back-End Java + Spring
 
###  Base de Dados
 
- Criar um banco de dados MySQL no Heroku: https://elements.heroku.com/addons/jawsdb

- Utilizar Migrations
        
- Utilizar Repository Pattern
        
### Endpoints
        
- Criar uma API REST usando Java com os seguintes endpoints:
    
        `GET /`: Retornar um Status: 200 e uma Mensagem "RN Challenge 20200810 Running"
        `PUT /products/:productId`: Será responsável por receber atualizações realizadas no Projeto Web
        `DELETE /products/:productId`: Remover o produto da base
        `GET /products/:productId`: Obter a informação somente de um produto da base de dados
        `GET /products`: Listar todos os produtos da base de dados
        
- Integrar a API com o banco de dados MySQL criado no Heroku para persistir os dados

- Processar os produtos do arquivo [products.json](products.json) para termos dados para editar e excluir durante os testes 

- Até o momento, os Endpoints estão todos abertos para acesso. Isso não é legal a nível de segurança, dessa forma, queremos que você use um esquema para bloquear qualquer tipo de acesso, configurando
uma **API Key** para que somente possa acessar os Endpoints, "Requests" autorizadas;

> Dica: Talvez o endpoint de Hello precisa estar público.


### Documentação

Escrever a documentação da API utlizando conceito [OpenAPI Specification](https://github.com/OAI/OpenAPI-Specification), utilizar versões superiores ao v2.0

### Extras

- **Diferencial 1 -** Executar o projeto usando Docker
- **Diferencial 2 -** Escrever o esquema de segurança aplicado nos endpoints 

## Aplicação React Native
 
![<img src="assets/images/home.png" height="500" alt="Home" title="Home"/>](assets/images/home.png)

#### Listar produtos
 
Criar uma sessão na tela com uma lista de os produtos processados pela API. É importante ter os seguintes campos:
 
        - Foto
        - Title
        - Type
        - Rating
        - Price
        - Created (Data do upload do produto a nova base de datos)
        - Actions (Botões Editar e Excluir)
 
#### Editar produto
 
Na tabela com os produtos precisamos disponibilizar os formulários com todos os campos dos produtos para que a equipe possa editá-los. 
Fazer validação de alguns campos obrigatórios:

        - Title
        - Type
        - Price
 
#### Remover produto
 
Antes de completar a ação de remover produto, devemos perguntar ao usuário se ele realmente 
quer realizar a ação. Para evitar a remoção de produtos de maneira indesejada. Após remover com êxito, notificar o usuário com um alerta de sucesso. 

#### Unit Testing
 
**Diferencial 1** - Utilizar Unit Test no front-end para a opção de `Remover produto`. 

**Diferencial 2** - Utilizar Unit Test para revisar se está listando produtos 

### Documentação

#### Publicar

Utilizar o [Expo](https://expo.io/) para disponibilizar a aplicação nas duas versões Android e iOS.

## Readme do Repositório
 
- Deve conter o título de cada projeto
- Uma descrição de uma frase
- Como instalar e usar o projeto (instruções)
- Não esqueça o [.gitignore](https://www.toptal.com/developers/gitignore)
- Link do Expo do Projeto publicado e links de downloads para iOS e Android
 
## Finalização 

Avisar sobre a finalização e enviar para correção em: [https://bit.ly/3e7MjcK](https://bit.ly/3e7MjcK) 

Após essa etapa será marcado a apresentação/correção do projeto.

## Instruções para a Apresentação: 

1. Será necessário compartilhar a tela durante a vídeo chamada;
2. Deixe todos os projetos de solução previamente abertos em seu computador antes de iniciar a chamada;
3. Deixe os ambientes configurados e prontos para rodar; 
4. Prepara-se pois você será questionado sobre cada etapa e decisão do Challenge;
5. Prepare uma lista de perguntas, dúvidas, sugestões de melhorias e feedbacks (caso tenha).


## Suporte

Use o nosso canal no slack: http://bit.ly/32CuOMy para tirar dúvidas sobre o processo ou envie um e-mail para contato@coodesh.com. 

