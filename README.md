# Mongo-jwt
## Este projeto é uma API RESTful construída com Node.js, Fastify, MongoDB e JWT para autenticação e autorização de usuários.

## 🔐 Funcionalidades
Registro de usuários com opção de código secreto para atribuição de papel de administrador.

- Login de usuários com geração de token JWT.
- Rotas protegidas acessíveis apenas por usuários autenticados.
- Rotas exclusivas para administradores.

## 🛠️ Tecnologias Utilizadas
- Node.js

- Fastify

- MongoDB

- Mongoose

- jsonwebtoken

## 📁 Estrutura do Projeto
```
Mongo-jwt/
├── controller/
│   └── authController.js
├── models/
│   └── User.js
├── plugins/
│   └── authMiddleware.js
├── routes/
│   └── authRoutes.js
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```
## 📌 Rotas Disponíveis
### POST /register
Registra um novo usuário. Se adminCode corresponder ao ADMIN_SECRET, o usuário será registrado como administrador.

Corpo da requisição:
```
{
  "email": "usuario@example.com",
  "password": "senha123",
  "adminCode": "seu_codigo_admin" // opcional
}
```

### POST /login
Autentica um usuário e retorna um token JWT.

Corpo da requisição:
```
{
  "email": "usuario@example.com",
  "password": "senha123"
}
```

### GET /admin-only
Rota exclusiva para administradores. Requer o cabeçalho Authorization: Bearer <token> e que o usuário tenha o papel de administrador.

---
Desenvolvido por Anderson Freire. 🚀