# 🚀 Guía de Instalación - Terra Strapi2

Guía paso a paso para instalar y configurar el sistema CMS Terra con Strapi y Next.js.

## 📋 Requisitos Previos

- **Node.js**: Versión 18.x o 20.x (⚠️ NO usar Node 22)
- **npm**: Versión 6.0.0 o superior
- **Git**: Para clonar el repositorio (opcional)

### Verificar versiones instaladas

```bash
node --version  # Debe mostrar v18.x.x o v20.x.x
npm --version   # Debe mostrar 6.x.x o superior
```

## 🔧 Instalación del Backend (Strapi)

### Paso 1: Navegar al directorio del backend

```bash
cd terra-strapi2/backend
```

### Paso 2: Instalar dependencias

```bash
npm install
```

Este proceso puede tomar varios minutos. Instalará Strapi v4.24.2 y todas sus dependencias.

### Paso 3: Configurar variables de entorno

Copia el archivo de ejemplo y edítalo:

```bash
copy .env.example .env
```

Edita el archivo `.env` y genera secrets únicos. Puedes usar este comando de Node.js para generar secrets:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

Ejecuta el comando anterior 4 veces y reemplaza estos valores en `.env`:

```env
HOST=0.0.0.0
PORT=1337

# Reemplaza estos valores con los generados
APP_KEYS=<secret1>,<secret2>
API_TOKEN_SALT=<secret3>
ADMIN_JWT_SECRET=<secret4>
TRANSFER_TOKEN_SALT=<secret5>
JWT_SECRET=<secret6>

# Database
DATABASE_CLIENT=better-sqlite3
DATABASE_FILENAME=.tmp/data.db

# Locale
DEFAULT_LOCALE=es-MX
```

### Paso 4: Iniciar Strapi en modo desarrollo

```bash
npm run develop
```

Strapi se iniciará y estará disponible en: **http://localhost:1337**

### Paso 5: Configurar el administrador

1. Abre tu navegador en `http://localhost:1337/admin`
2. Verás la pantalla de registro del primer administrador
3. Completa el formulario:
   - **Nombre**: Tu nombre
   - **Email**: Tu email
   - **Contraseña**: Una contraseña segura (mínimo 8 caracteres)
4. Haz clic en "Let's start"

¡El panel de administración de Strapi estará listo! 🎉

### Paso 6: Configurar permisos públicos

Para que el frontend pueda acceder a los datos:

1. Ve a **Settings** (⚙️) en el menú lateral
2. Selecciona **Roles** bajo "USERS & PERMISSIONS PLUGIN"
3. Haz clic en **Public**
4. Expande cada Content Type y habilita los siguientes permisos:
   - **Global-setting**: `find`
   - **Project**: `find`, `findOne`
   - **Service**: `find`, `findOne`
   - **Perspective**: `find`, `findOne`
   - **Newsletter-subscription**: `create` (para el formulario)
5. Haz clic en **Save** arriba a la derecha

### Paso 7: Poblar contenido de ejemplo

1. Ve a **Content Manager** en el menú lateral
2. Crea contenido en cada tipo:

#### Global Settings (Single Type)
- Haz clic en "Global Setting" en el menú lateral
- Completa los campos con la información del sitio
- Haz clic en **Save** y luego en **Publish**

#### Projects
- Haz clic en "Projects" → **Create new entry**
- Completa los campos:
  - Title: "Allegiant Stadium"
  - Description: "Estadio de última generación en Las Vegas"
  - Category: "Estadio"
  - Location: "Las Vegas, NV"
  - Featured: ✓
  - Status: "completed"
- Haz clic en **Save** y luego en **Publish**
- Repite para crear 4-5 proyectos más

#### Services
- Haz clic en "Services" → **Create new entry**
- Completa los campos:
  - Title: "Construcción General"
  - Description: "Servicios completos de construcción"
  - Icon: "lucide:hard-hat"
  - Featured: ✓
  - Order: 1
- Haz clic en **Save** y luego en **Publish**
- Repite para crear 4-5 servicios más

#### Perspectives
- Haz clic en "Perspectives" → **Create new entry**
- Completa los campos:
  - Title: "Innovación en Construcción"
  - Content: "Contenido del artículo..."
  - Excerpt: "Resumen breve"
  - Author: "Terra Team"
  - Category: "Noticias"
  - Featured: ✓
- Haz clic en **Save** y luego en **Publish**
- Repite para crear 2-3 artículos más

## 🎨 Instalación del Frontend (Next.js)

### Paso 1: Abrir una nueva terminal

Mantén el backend corriendo y abre una nueva terminal.

### Paso 2: Navegar al directorio del frontend

```bash
cd terra-strapi2/frontend
```

### Paso 3: Instalar dependencias

```bash
npm install
```

Este proceso instalará Next.js 14, React 18, TypeScript y Tailwind CSS.

### Paso 4: Configurar variables de entorno

Crea un archivo `.env.local`:

```bash
echo NEXT_PUBLIC_STRAPI_URL=http://localhost:1337 > .env.local
```

O créalo manualmente con este contenido:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

### Paso 5: Iniciar Next.js en modo desarrollo

```bash
npm run dev
```

El frontend estará disponible en: **http://localhost:3000**

## ✅ Verificación

### Backend (Strapi)
- ✅ Panel admin accesible en `http://localhost:1337/admin`
- ✅ API REST disponible en `http://localhost:1337/api`
- ✅ Contenido creado y publicado
- ✅ Permisos públicos configurados

### Frontend (Next.js)
- ✅ Sitio accesible en `http://localhost:3000`
- ✅ Contenido de Strapi visible
- ✅ Sin errores en consola del navegador

### Prueba de API

Abre en tu navegador:
```
http://localhost:1337/api/projects?populate=*
```

Deberías ver un JSON con los proyectos creados.

## 🐛 Solución de Problemas

### Error: "Cannot find module"

**Solución**: Asegúrate de haber ejecutado `npm install` en ambos directorios (backend y frontend).

```bash
# En backend
cd backend
npm install

# En frontend
cd frontend
npm install
```

### Error: "Port 1337 already in use"

**Solución**: Otro proceso está usando el puerto 1337. Ciérralo o cambia el puerto en `.env`:

```env
PORT=1338
```

Y actualiza el frontend `.env.local`:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1338
```

### Error: "ENOENT: no such file or directory"

**Solución**: Asegúrate de estar en el directorio correcto:

```bash
# Para backend
cd terra-strapi2/backend

# Para frontend
cd terra-strapi2/frontend
```

### Error de Node.js versión

**Solución**: Strapi v4 requiere Node.js 18-20. Si tienes Node 22:

1. Instala [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager)
2. Instala Node 20:
   ```bash
   nvm install 20
   nvm use 20
   ```

### Backend inicia pero no puedo acceder al admin

**Solución**: Limpia la caché y reinicia:

```bash
# En el directorio backend
rm -rf .cache
rm -rf build
npm run develop
```

### Frontend no muestra contenido de Strapi

**Solución**: Verifica que:
1. El backend esté corriendo en `http://localhost:1337`
2. Los permisos públicos estén configurados
3. El contenido esté publicado (no solo guardado)
4. La variable `NEXT_PUBLIC_STRAPI_URL` esté correcta en `.env.local`

## 📚 Próximos Pasos

Una vez que todo esté funcionando:

1. **Personaliza el contenido** en el panel de Strapi
2. **Sube imágenes** para proyectos, servicios y perspectivas
3. **Configura las redes sociales** en Global Settings
4. **Prueba el formulario de newsletter**
5. **Explora la API** en `http://localhost:1337/api`

## 🚀 Deploy en Producción

### Backend Strapi

**Opciones recomendadas**:
- [Railway](https://railway.app/)
- [Render](https://render.com/)
- [DigitalOcean](https://www.digitalocean.com/)
- [Heroku](https://www.heroku.com/)

**Pasos generales**:
1. Cambia la base de datos a PostgreSQL en producción
2. Configura las variables de entorno en el hosting
3. Ejecuta `npm run build` antes de deploy
4. Configura CORS para permitir tu dominio frontend

### Frontend Next.js

**Opciones recomendadas**:
- [Vercel](https://vercel.com/) (recomendado, creadores de Next.js)
- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)

**Pasos generales**:
1. Conecta tu repositorio Git
2. Configura la variable `NEXT_PUBLIC_STRAPI_URL` con tu URL de producción
3. El deploy es automático en cada push

## 📞 Soporte

- **Documentación Strapi**: https://docs.strapi.io
- **Documentación Next.js**: https://nextjs.org/docs
- **Documentación Tailwind**: https://tailwindcss.com/docs

---

**🎉 ¡Disfruta construyendo con Terra Strapi2!**
