# QATESTPOSTMAN e CYPRESS

# Passo a Passo para rodar o Postman e a Coleção para executar o CRUD

Passo 1: Baixar e instalar o Postman
- Primeiro, basta baixar e instalar o Postman, que pode ser encontrado no site oficial do Postman (https://www.postman.com/downloads/).

Passo 2: Abrir o Postman
- Após a instalação, abra o Postman.

Passo 3: Fazer login (opcional)
- Você pode optar por fazer login para sincronizar suas coleções na nuvem.

Passo 4: Importar uma coleção
- Para importar uma coleção, clique no botão "Importar" localizado na barra lateral esquerda do Postman.
- Selecione o arquivo da coleção que deseja importar. As coleções do Postman são arquivos JSON com a extensão .json. Neste caso, o POSTMAN_QA_TEST.json
- Após selecionar o arquivo da coleção, clique em "Abrir" para importá-lo para o Postman.

Passo 5: Explorar e utilizar a coleção
- Após importar a coleção, você verá que ela foi adicionada à sua barra lateral esquerda, sob a seção "Coleções".
- Clique na coleção importada para expandi-la e visualizar as requisições e realizar o CRUD

# Passo a Passo para rodar o teste em Cypress

Passo 1: Instalar o Node.js
- Primeiro, basta baixar e instalar o Node.js: (https://nodejs.org/)
- Faça o download do instalador adequado para o seu sistema operacional.

Passo 2: Inicializar um novo projeto Node.js
- Abra seu terminal ou prompt de comando e siga estas etapas:
- Abra o terminal no diretório QA TEST 
- Execute o comando npm init -y

Passo 3: Instalar o Cypress
- Execute o seguinte comando para instalar o Cypress localmente no seu projeto: npm install cypress --save-dev

Passo 4: Abrir o Cypress e criar arquivos de teste
- Depois de instalar o Cypress, você pode abrir o Cypress Runner 
- Execute o seguinte comando: npx cypress open
- Na interface que se abre, clique em 'E2E', escolha o navegador Chrome e clique para começar os testes
- Selecione o arquivo spec.cy.js e o teste rodará automaticamente
- Verifique as validações no lado esquerdo da interface e compare com o resultado esperado
