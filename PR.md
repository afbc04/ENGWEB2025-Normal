# 1. Alterações do dataset

Percebi que o dataset tinha alguns erros e campos com caracteres especiais.  
Tirei os caracteres especiais, substituí os campos **id** por **_id**, pois o mongoDB utiliza _id, e fiz outras alterações para permitir a importação dos datasets no mongoDB (Por exemplo, o formato do dataset tinha formato de dicionário. Alterei para que tivesse formato de lista).
Criei tambem dois outros datasets, com base no dataset **[edicoes.json](ex1/database/edicoes.json)**, dataset que resulta da correção do dataset [dataset.json](ex1/database/dataset.json), com a ajuda da script feita em python chamada [gerarDB.py](ex1/database/gerarDB.py).  
Esta script permite coletar todos os intérpretes, e coletar todos os países, tais como as edições que ele participou e organizações (com os campos que serão necessários futuramente).  
Estes dois datasets são [paises.json](ex1/database/paises.json) e [interpretes.json](ex1/database/interpretes.json)

# 2. Iniciar o mongoDB e importar os datasets

sudo docker start mongoEW
sudo docker cp interpretes.json mongoEW:/tmp
sudo docker cp edicoes.json mongoEW:/tmp
sudo docker cp paises.json mongoEW:/tmp
sudo docker exec -it mongoEW sh
cd /tmp
mongoimport -d eurovisao -c edicoes edicoes.json --jsonArray
mongoimport -d eurovisao -c interpretes interpretes.json --jsonArray
mongoimport -d eurovisao -c paises paises.json --jsonArray

# 3. Queries

As queries pedidas encontram-se no ficheiro [queries.txt](ex1/queries.txt)

# 4. Backend

Criei 3 models : Edicao, Pais e Interprete.  
Criei um controller com todos os métodos necessários para o frontend e API.  
Testei com Postman e pareceu estar tudo certo.

# 5. Frontend

Criei um router com as 3 principais **URL**, onde cada URL vai buscar os dados ao frontend e utiliza uma página PUG para apresentar a informação ao utilizador.

# 6. Como executar as aplicações

## 6.1 Backend

- Ter o docker com o mongoDB iniciado
- Ter importado corretamente os datasets
- cd ex1/
- npm i
- npm start

## 6.2 Frontend

- npm i
- npm start
- [Todas as edições](http://localhost:25001/)
- [Página da Edição 1957](http://localhost:25001/ed1957)
- [Página do Pais França](http://localhost:25001/paises/France)
