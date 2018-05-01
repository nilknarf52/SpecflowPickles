jsonPWrapper ({
  "Features": [
    {
      "RelativeFolder": "FormulariodeContato\\Formulario.feature",
      "Feature": {
        "Name": "Formulario de Contato",
        "Description": "Eu como usuário, preciso contactar o prestador de serviço\r\nPara que seja necessário um possível retorno\r\nPreciso preencher as informações do formulário corretamente.",
        "FeatureElements": [
          {
            "Name": "Preenchimento do formulario corretamente",
            "Slug": "preenchimento-do-formulario-corretamente",
            "Description": "",
            "Steps": [
              {
                "Keyword": "And",
                "NativeKeyword": "E ",
                "Name": "informo todos os dados",
                "TableArgument": {
                  "HeaderRow": [
                    "Nome",
                    "Email",
                    "Telefone",
                    "Mensagem"
                  ],
                  "DataRows": [
                    [
                      "Franklin",
                      "franklinjob@hotmail.com",
                      "(21)991475281",
                      "Teste de Mensagem"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "Quando ",
                "Name": "envio o formulario",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Então ",
                "Name": "recebo a mensagem de sucesso 'Sua mensagem foi enviada com sucesso.'",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@Browser:Firefox",
              "@Browser:IE",
              "@Browser:Edge",
              "@Browser:Chrome",
              "@Browser:Phantom"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Preenchimento do formulario com email incorreto",
            "Slug": "preenchimento-do-formulario-com-email-incorreto",
            "Description": "",
            "Steps": [
              {
                "Keyword": "But",
                "NativeKeyword": "Mas ",
                "Name": "informo o email incompleto",
                "TableArgument": {
                  "HeaderRow": [
                    "Nome",
                    "Email",
                    "Telefone",
                    "Mensagem"
                  ],
                  "DataRows": [
                    [
                      "Franklin",
                      "franklinjob@",
                      "(21)991475281",
                      "Teste de Mensagem"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "Quando ",
                "Name": "envio o formulario",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Então ",
                "Name": "recebo a mensagem de validação do e-mail 'Formato de e-mail inválido'",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@Browser:Firefox",
              "@Browser:IE",
              "@Browser:Edge",
              "@Browser:Chrome",
              "@Browser:Phantom"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Preenchimento do formulario sem mensagem",
            "Slug": "preenchimento-do-formulario-sem-mensagem",
            "Description": "",
            "Steps": [
              {
                "Keyword": "But",
                "NativeKeyword": "Mas ",
                "Name": "não informo mensagem",
                "TableArgument": {
                  "HeaderRow": [
                    "Nome",
                    "Email",
                    "Telefone",
                    "Mensagem"
                  ],
                  "DataRows": [
                    [
                      "Franklin",
                      "franklinjob@hotmail.com",
                      "(21)991475281",
                      ""
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "Quando ",
                "Name": "envio o formulario",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Então ",
                "Name": "recebo a mensagem de validação de mensagem 'Por favor informe uma mensagem.'",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@Browser:Firefox",
              "@Browser:IE",
              "@Browser:Edge",
              "@Browser:Chrome",
              "@Browser:Phantom"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Preenchimento do formulario telefone incorreto",
            "Slug": "preenchimento-do-formulario-telefone-incorreto",
            "Description": "",
            "Steps": [
              {
                "Keyword": "But",
                "NativeKeyword": "Mas ",
                "Name": "não informo telefone",
                "TableArgument": {
                  "HeaderRow": [
                    "Nome",
                    "Email",
                    "Telefone",
                    "Mensagem"
                  ],
                  "DataRows": [
                    [
                      "Franklin",
                      "franklinjob@hotmail.com",
                      "",
                      "Teste de Mensagem"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "Quando ",
                "Name": "envio o formulario",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Então ",
                "Name": "recebo a mensagem de validação de telefone 'Por favor informe seu telefone.'",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@Browser:Firefox",
              "@Browser:IE",
              "@Browser:Edge",
              "@Browser:Chrome",
              "@Browser:Phantom"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Background": {
          "Name": "",
          "Description": "",
          "Steps": [
            {
              "Keyword": "Given",
              "NativeKeyword": "Dado ",
              "Name": "que eu esteja no site jobmidia",
              "StepComments": [],
              "AfterLastStepComments": []
            },
            {
              "Keyword": "And",
              "NativeKeyword": "E ",
              "Name": "navego em formulario de contato",
              "StepComments": [],
              "AfterLastStepComments": []
            }
          ],
          "Tags": [],
          "Result": {
            "WasExecuted": false,
            "WasSuccessful": false
          }
        },
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    }
  ],
  "Summary": {
    "Tags": [
      {
        "Tag": "@Browser:Firefox",
        "Total": 4,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 4
      },
      {
        "Tag": "@Browser:IE",
        "Total": 4,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 4
      },
      {
        "Tag": "@Browser:Edge",
        "Total": 4,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 4
      },
      {
        "Tag": "@Browser:Chrome",
        "Total": 4,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 4
      },
      {
        "Tag": "@Browser:Phantom",
        "Total": 4,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 4
      }
    ],
    "Folders": [
      {
        "Folder": "FormulariodeContato",
        "Total": 4,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 4
      }
    ],
    "NotTestedFolders": [
      {
        "Folder": "FormulariodeContato",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      }
    ],
    "Scenarios": {
      "Total": 4,
      "Passing": 0,
      "Failing": 0,
      "Inconclusive": 4
    },
    "Features": {
      "Total": 1,
      "Passing": 0,
      "Failing": 0,
      "Inconclusive": 1
    }
  },
  "Configuration": {
    "GeneratedOn": "1 maio 2018 14:20:34"
  }
});