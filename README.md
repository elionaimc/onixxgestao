# onixxgestao

**Sistema de gestão de despesas e autorização**

POST /api/users para adicionar um novo usuário

---
sucesso: 

```json
{
    "message": "Novo usuário cadastrado com sucesso.",
    "user": {
        "status": "ativo",
        "role": "analista",
        "id": 1,
        "name": "Elionai Moura Cordeiro",
        "username": "elionaimc",
        "email": "eli.embits@gmail.com",
        "password": "$2b$10$v8jce1PFGSpdmbKJAkE5SuFsoZvVOzFXVff.9a7MKYAq3QN2wy5au",
        "updatedAt": "2019-02-10T17:01:40.111Z",
        "createdAt": "2019-02-10T17:01:40.111Z"
    },
    "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE1NDk4MTgxMDAsImV4cCI6MTU0OTgyODEwMH0.t9V5fHsJHvuKURj8ZGwBQITKZMzzTedoIJLzOpWSGqc",
    "success": true
}
```

erro:

```json
{
    "success": false,
    "message": "Não foi possível cadastrar novo usuário!"
}
```
 ---

 GET /api/users para adicionar um novo usuário
---

sucesso:
```json
{
    "users": [
        {
            "id": 1,
            "status": "ativo",
            "name": "Elionai Moura Cordeiro",
            "role": "analista",
            "email": "eli.embits@gmail.com",
            "username": "elionaimc",
            "createdAt": "2019-02-10T17:01:40.000Z",
            "updatedAt": "2019-02-10T17:01:40.000Z"
        },
        {
            "id": 3,
            "status": "ativo",
            "name": "Elton Cayo",
            "role": "gestor",
            "email": "eltoncayo@gmail.com",
            "username": "eltoncayo",
            "createdAt": "2019-02-10T19:30:23.000Z",
            "updatedAt": "2019-02-10T19:30:23.000Z"
        }
    ],
    "success": true
}
```

erro:
```json

```
---
