# restaurantfriends

Proyecto de seguimiento de visitas a restaurantes con registro de usuario (email + contraseña + nombre de usuario), lista de amigos y resumen de valoraciones.

## Cómo subirlo a GitHub

```bash
cd restaurantfriends
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/pacocone/restaurantfriends.git
git push -u origin main
```

Luego, en GitHub:
1. **Settings → Pages → Deploy from a branch**
2. Branch: `main` &nbsp;|&nbsp; Folder: `/` (root)

Dominios que debes autorizar en **Firebase → Authentication → Settings**:
- `localhost`
- `TU_USUARIO.github.io`
