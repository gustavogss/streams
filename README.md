# Streams
- Exemplo de API de cadastro de usuários

## Stacks
- NodeJs
- Streams

## Routes

- Listar Usuários: https://streams-cyan.vercel.app/users
  
- Criar Usuário: https://streams-cyan.vercel.app/users
  ```
  #JSON Content
  {
  "name":"Novo usuário",
  "email": "novo_usuario@email.com"
  }
  ```
- Remover Usuário: https://streams-cyan.vercel.app/users/id_do_usuario
  
- Atualizar Usuário: https://streams-cyan.vercel.app/users/id_do_usuario
  ```
  #JSON Content
  {
  "name":"Outro usuário",
  "email": "outro_usuario@email.com"
  }
  ```
  - Pesquisar por Usuário: https://streams-cyan.vercel.app/users
```
#Query Parameters

search = outro usuário
```