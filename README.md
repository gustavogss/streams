# Streams
- Exemplo de API de cadastro de usuários

## Stacks
- NodeJs
- Streams

## Routes

- Listar Usuários: http://localhost:3333/users
  
- Criar Usuário: http://localhost:3333/users
  ```
  #JSON Content
  {
  "name":"Novo usuário",
  "email": "novo_usuario@email.com"
  }
  ```
- Remover Usuário: http://localhost:3333/users/id
  
- Atualizar Usuário: http://localhost:3333/users/id  
  ```
  #JSON Content
  {
  "name":"Outro usuário",
  "email": "outro_usuario@email.com"
  }
  ```
  - Pesquisar por Usuário: http://localhost:3333/users
```
#Query Parameters

search = outro usuário
```