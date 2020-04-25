# Be The Hero Back-End

## 💻 Projeto
<p> O BeTheHero é um projeto que visa conectar pessoas que desejam fazer contribuições monetárias a 
ONG's (Organizações não governamentais) que precisam de ajuda.</p>

## :clipboard: End-Points desenvolvidos:
<table>
  <tr>
   <td> GET </td> <td>/profile</td><td> Listagem de casos perfil</rd>
  </tr>
  <tr>
   <td> POST </td> <td>/sessions</td><td> End-point usando para o login </td>
  </tr>
   <tr>
   <td> GET </td> <td>/incidents</td><td> End-point usando para o listagem de todos os casos </td>
  </tr>
  <tr>
   <td> DELETE </td> <td>/incidents/:id</td><td> End-point usando deletar um caso </td>
  </tr>
   <tr>
    <td> POST </td> <td>/incidents</td><td> End-point usando cadastrar um novo caso </td>
  </tr>
  <tr>
    <td> GET </td> <td>/ongs</td><td> End-point usando listar todas as ongs no banco de dados </td>
  </tr>
  <tr>
    <td> POST </td> <td>/ongs</td><td> End-point usando para cadastrar uma nova ong no banco de dados </td>
  </tr>
<table/>  

## :hammer: Scripts

### `yarn start`

Para executar o back-end em desenvoldimento.<br>
Porta usada:3333

### `yarn test`

Para executar os testes desenvolvidos.<br>


## :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://reactjs.org)
- [Express.js](https://expressjs.com/)
- [Jest](https://jestjs.io/)
- [Sqlite3](https://www.sqlite.org/index.html)


## :page_facing_up: Detalhes de implementação:
- O back-end foi feito usando o padrão REST.
- O back foi construido usando express e node.js
- Também foi desenvolvido alguns testes para a aplicação
- [O link do repositorio oficial](https://github.com/Rocketseat/semana-omnistack-11)
