
# 👨🏻‍💻 Desafio Back-end

Aqui você encontra o repositório responsável pelo código do desafio [back-end](https://github.com/naveteam/teste-estagio-2020#desafio-de-back-end) do teste de estágio da [Nave.rs](https://nave.rs)!

# 🚀 Primeiros passos

Primeiro de tudo você precisa ter o `npm` ou o `yarn` instalado na sua máquina.

Comece clonando este repositório :

```bash
$ git clone https://github.com/zTaaso/nave-teste
```

Iniciando a API:

- `cd desafio-backend`
- `npm install` ou `yarn`
- `npm run dev` ou `yarn dev`

Também precisamos iniciar o banco de dados:

```bash
$ npm run setDB
```

ou

```bash
$ yarn setDB
```

<br/>

Prontinho! 🎉 <br/>
O back-end agora está rodando em seu http://localhost:3333.

# 📡 Funcionalidades

Informações detalhadas de rotas e exemplos de requisições e respostas.

### Navers

- **Index**: Rota para listagem dos Navers.

  ```bash
  GET http://localhost:3333/navers
  ```

  | Parâmetro    | Tipo      | Descrição                                         |
  | :----------- | :-------- | :------------------------------------------------ |
  | `timestamps` | `boolean` | Caso igual a `true`, inclui timestamps aos navers |

  Exemplo de resposta:

  ```json
  [
    {
      "id": "da1d9f4e-91d0-4c5e-9671-e3c465e8bdcc",
      "name": "Thiago Afonso",
      "job_role": "Estagiário Back-end",
      "birthdate": 1046314800000,
      "admission_date": 1616209200000,
      "created_at": "2021-03-11 02:53:03",
      "updated_at": "2021-03-11 02:53:03"
    }
  ]
  ```

- **Show**: Rota para detalhar informações de um único naver através de seu identificador.

  ```bash
  GET http://localhost:3333/naver/:id
  ```

  | Parâmetro    | Tipo      | Descrição                                       |
  | :----------- | :-------- | :---------------------------------------------- |
  | `timestamps` | `boolean` | Caso igual a `true`, inclui timestamps ao naver |

	 <br/>
        
   - Exemplo de resposta:
   
	  	```json
	    {
	        "id": "da1d9f4e-91d0-4c5e-9671-e3c465e8bdcc",
	        "name": "Thiago Afonso",
	        "job_role": "Estagiário Back-end",
	        "birthdate": 1046314800000,
	        "admission_date": 1616209200000,
	        "created_at": "2021-03-11 02:53:03",
	        "updated_at": "2021-03-11 02:53:03",
	        "projects": [
	          {
	            "id": "179668c1-dbc8-4a84-abb3-3f1ca80ffb35",
	            "name": "Desenvolvimento de API REST",
	            "created_at": "2021-03-11 02:53:03",
	            "updated_at": "2021-03-11 02:53:03"
	          }
	    }
	  	```

- **Store**: Rota de criação de naver

  ```bash
  POST http://localhost:3333/naver
  ```

  - Exemplo de requisição:

    ```json
    {
      "name": "Thiago Afonso",
      "birthdate": 1046314800000,
      "admission_date": 1046314800000,
      "job_role": "Estagiário Backend",
      "projects": [2, 7]
    }
    ```

    | Propriedade      | Tipo     | Descrição                            |
    | :--------------- | :------- | :----------------------------------- |
    | `name`           | `string` | Nome do naver                        |
    | `birthdate`      | `number` | Data de nascimento em milissegundos  |
    | `admission_date` | `number` | Data de admissão em milissegundos    |
    | `job_role`       | `string` | Cargo na empresa                     |
    | `projects`       | `array`  | Vetor de ids dos projetos envolvidos |

  - Exemplo de resposta:
    ```json
    {
      "id": "23b1ea19-954c-4a09-8559-16e89d73a871",
      "name": "Thiago Afonso",
      "job_role": "Estagiário Backend",
      "birthdate": 1046314800000,
      "admission_date": 1046314800000,
      "created_at": "2021-03-11 08:03:15",
      "updated_at": "2021-03-11 08:03:15"
    }
    ```
