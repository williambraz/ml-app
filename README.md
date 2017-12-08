ML APP
==================

ML APP é uma aplicação de busca desenvolvida com React + Webpack + Node (Express) + SASS
A aplicação consiste em dois pacotes separados, um para frontend, um de backend.

Para rodar o APP no modo de server local:
	
	-> verificar a disponibilidade das portas 3005 e 3004 do http(cada um dos pacotes fará uso de uma das portas)

	//backend
	-> acessar a pasta "server" na raiz do APP
	-> instalar os pacotes node do server com a linha de comando: npm i
	-> rodar o server com o comando: npm run start
	-> A aplicação exibirá uma mensagem de que está sendo rodada na porta 3004.

	//frontend
	-> acessar a pasta "client" na raiz do APP
	-> instalar os pacotes node do client com a linha de comando: npm i
	-> rodar o client com o comando: npm run start
	-> A aplicação poderá ser acessada em http://localhost:3005 (pode ser configurado em hosts/vhost)

	-> Alternativamente, o frontend pode ser rodado localmente fazendo um apontamento do host/vhost para client/public/index.html (versão de prod)