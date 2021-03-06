# Gerenciador de senhas

Sistema de controle de senhas para atendimento bancário. O sistema será utilizado por dois perfis de usuários: GERENTE e CLIENTE. O Gerente será responsável pela administração do sistema, chamando novas senhas e reiniciando a contagem de senhas quando for necessário. Ao cliente caberá apenas a retirada e acompanhamento das senhas.

# Framework
Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 11.2.2.


## Criação do ambiente
### Node
Instale o node: https://nodejs.org/pt-br/download/

### Clonar projeto do GitHub
`git clone https://github.com/BatistaYuri/controle-senha-front-end.git`

### Instalar dependências
`npm install`

### Configurar arquivo environment
no caminho: scr/environments/environment.ts
a váriavel **backendUrl** está configurada com o link do back-end no servidor da [Amazon AWS](https://aws.amazon.com/pt/)

APIs: http://gerenciadordesenhas2-env.eba-2iebjrez.sa-east-1.elasticbeanstalk.com/swagger-ui.html#/senha45controller;
OBS: Servidor Amazon AWS pausado durante final de semana para não exeder tempo limite para servidores gratuitos.

E caso você esteja usando o ambiente back-end local troque o valor da variável por http://localhost:8080.

### Rodar projeto
`npm start`

### Navegando pelo gerenciador
Ao entrar na tela principal, escolha entre os perfis Gerente e Cliente. O perfil Gerente tem a posibilidade de voltar para tela incial para escolher outro perfil.

Link para o Gerente: http://localhost:4200/gerente
Link para o Cliente: http://localhost:4200/cliente
