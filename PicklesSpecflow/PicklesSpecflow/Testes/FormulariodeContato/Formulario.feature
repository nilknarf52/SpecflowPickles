﻿#language: pt-BR
Funcionalidade: Formulario de Contato
	Eu como usuário, preciso contactar o prestador de serviço
	Para que seja necessário um possível retorno
	Preciso preencher as informações do formulário corretamente.

Contexto: 
	Dado que eu esteja no site jobmidia
	E navego em formulario de contato

@Browser:Firefox @Browser:IE @Browser:Edge @Browser:Chrome @Browser:Phantom
Cenário: Preenchimento do formulario corretamente
	E informo todos os dados
	 |Nome		|Email					|Telefone	  | Mensagem		  |
	 |Franklin	|franklinjob@hotmail.com|(21)991475281|	Teste de Mensagem |
	Quando envio o formulario
	Então recebo a mensagem de sucesso 'Sua mensagem foi enviada com sucesso.'

@Browser:Firefox @Browser:IE @Browser:Edge @Browser:Chrome @Browser:Phantom
Cenário: Preenchimento do formulario com email incorreto
	Mas informo o email incompleto
	|Nome		|Email					|Telefone	  | Mensagem		  |
    |Franklin	|franklinjob@           |(21)991475281|	Teste de Mensagem |
	Quando envio o formulario
	Então recebo a mensagem de validação do e-mail 'Formato de e-mail inválido'

@Browser:Firefox @Browser:IE @Browser:Edge @Browser:Chrome @Browser:Phantom
Cenário: Preenchimento do formulario sem mensagem
	Mas não informo mensagem
	|Nome		|Email					|Telefone	  | Mensagem		  |
    |Franklin	|franklinjob@hotmail.com|(21)991475281|					  |
	Quando envio o formulario
	Então recebo a mensagem de validação de mensagem 'Por favor informe uma mensagem.'

@Browser:Firefox @Browser:IE @Browser:Edge @Browser:Chrome @Browser:Phantom
Cenário: Preenchimento do formulario telefone incorreto
	Mas não informo telefone
	|Nome		|Email					|Telefone	  | Mensagem		  |
    |Franklin	|franklinjob@hotmail.com|			  |	Teste de Mensagem |
	Quando envio o formulario
	Então recebo a mensagem de validação de telefone 'Por favor informe seu telefone.'