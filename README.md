# 🏗️ Terra Building Companies - Strapi CMS

Sistema CMS completo basado en el Landing estático de Terra, implementado con Strapi headless CMS y Next.js 14.

## 📋 Descripción

Este proyecto toma el diseño y contenido del Landing estático original (`index.html`) y lo convierte en un sistema CMS completo donde los administradores pueden gestionar todo el contenido desde un panel de administración en español.

## 🎯 Arquitectura

```
terra-strapi2/
├── backend/          # Strapi CMS v4.24.2
│   ├── config/       # Configuración
│   ├── src/api/      # Content Types
│   └── public/       # Uploads
└── frontend/         # Next.js 14 + TypeScript
    ├── src/
    │   ├── app/      # App Router
    │   ├── components/
    │   ├── lib/      # API client
    │   └── types/
    └── public/
```

## 🚀 Stack Tecnológico

### Backend
- **Strapi v4.24.2** - Headless CMS
- **Better SQLite3** - Base de datos (desarrollo)
- **Node.js 18-20** - Runtime
- **Locale**: Español (es-MX)

### Frontend
- **Next.js 14** - React framework con App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling con colores Terra
- **React 18** - UI library
- **Iconify** - Iconos

## 📊 Content Types

### 1. Global Settings (Single Type)
Configuración general del sitio:
- Información del sitio (nombre, descripción, logo)
- Hero section (título, subtítulo, descripción, imagen de fondo)
- About section (título, contenido, imagen)
- Redes sociales (Facebook, Instagram, LinkedIn, YouTube)
- Información de contacto (dirección, teléfono, email)
- Footer
- SEO metadata

### 2. Projects (Collection)
Proyectos de construcción:
- Título, descripción, categoría
- Ubicación
- Imagen principal y galería
- Link del proyecto
- Estado (activo/completado/planificación)
- Cliente, fecha de completación, presupuesto
- Featured flag

### 3. Services (Collection)
Servicios ofrecidos:
- Título, descripción
- Icono (nombre Iconify)
- Características (array)
- Imagen
- Featured flag, orden

### 4. Perspectives (Collection)
Blog/Artículos:
- Título, contenido (rich text)
- Extracto, autor, categoría
- Imagen
- Featured flag, fecha de publicación

### 5. Newsletter Subscriptions (Collection)
Suscripciones al newsletter:
- Email (único)
- Estado (activo/inactivo)
- Fuente

## 🔧 Instalación

### Requisitos Previos
- Node.js 18.x o 20.x
- npm 6+

### Backend (Strapi)

```bash
cd backend

# Instalar dependencias
npm install

# Copiar variables de entorno
copy .env.example .env

# Generar secrets (reemplazar en .env)
# APP_KEYS, API_TOKEN_SALT, ADMIN_JWT_SECRET, etc.

# Iniciar en modo desarrollo
npm run develop
```

El panel de administración estará disponible en: **http://localhost:1337/admin**

### Frontend (Next.js)

```bash
cd frontend

# Instalar dependencias
npm install

# Copiar variables de entorno
copy .env.example .env.local

# Iniciar en modo desarrollo
npm run dev
```

El sitio estará disponible en: **http://localhost:3000**

## 📝 Primer Uso

### 1. Configurar Strapi

1. Accede a `http://localhost:1337/admin`
2. Crea tu cuenta de administrador
3. El panel estará en español (es-MX)

### 2. Configurar Permisos

1. Ve a **Settings** → **Roles** → **Public**
2. Habilita permisos de **lectura** para:
   - Global Settings (find)
   - Projects (find, findOne)
   - Services (find, findOne)
   - Perspectives (find, findOne)
3. Guarda los cambios

### 3. Poblar Contenido

1. Ve a **Content Manager**
2. Crea contenido en cada tipo:
   - **Global Settings**: Configuración del sitio
   - **Projects**: Agrega 5-6 proyectos
   - **Services**: Agrega 5 servicios
   - **Perspectives**: Agrega 2-3 artículos
3. Publica todo el contenido

### 4. Verificar Frontend

1. Accede a `http://localhost:3000`
2. Verifica que el contenido se muestre correctamente
3. Prueba la navegación y animaciones

## 🎨 Diseño

El diseño mantiene exactamente la estética del Landing original:

### Colores Terra
- `terra-900`: #001E3A
- `terra-800`: #003865
- `terra-600`: #2563EB
- `terra-400`: #60A5FA

### Tipografía
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

### Efectos
- Parallax scrolling en hero
- Scroll-triggered animations
- Mobile menu slide-out
- Carousel de perspectivas
- Counter animations
- Lazy loading de imágenes

## 📱 Características

- ✅ **Responsive Design** - Mobile-first
- ✅ **SEO Optimizado** - Meta tags dinámicos
- ✅ **Performance** - SSG + ISR con Next.js
- ✅ **Accesibilidad** - ARIA labels, keyboard navigation
- ✅ **Animaciones** - Smooth scroll reveals
- ✅ **CMS en Español** - Panel completamente en español
- ✅ **Type Safety** - TypeScript en todo el stack
- ✅ **API REST** - Lista para apps móviles

## 🔐 Seguridad

- Permisos públicos solo para lectura
- Admin protegido con JWT
- Validación de datos en frontend y backend
- CORS configurado correctamente
- Rate limiting en API

## 📚 Documentación

- `SETUP.md` - Guía de instalación detallada
- `CONTENT_GUIDE.md` - Guía para editores de contenido
- `API_DOCS.md` - Documentación de API REST

## 🆚 Comparación con WordPress

| Característica | WordPress | Strapi + Next.js |
|---------------|-----------|------------------|
| Panel Admin | ✅ Nativo | ✅ Moderno |
| Frontend | ❌ PHP templates | ✅ React/Next.js |
| API | ❌ Limitada | ✅ REST completa |
| Performance | ❌ Server-side | ✅ SSG/ISR |
| Modern Stack | ❌ PHP | ✅ JavaScript/React |
| Scalability | ❌ Limitada | ✅ Cloud-native |
| Idioma | ✅ Español | ✅ Español |
| SEO | ✅ Plugins | ✅ Built-in |

## 🚀 Deploy en Producción

### Backend Strapi

```bash
# Build
npm run build

# Start
npm start
```

**Opciones de hosting**:
- Strapi Cloud (recomendado)
- Railway
- Render
- DigitalOcean
- AWS

### Frontend Next.js

```bash
# Build
npm run build

# Start
npm start
```

**Opciones de hosting**:
- Vercel (recomendado)
- Netlify
- AWS Amplify
- DigitalOcean

## 🌐 **Deploy Rápido en Vercel**

### **Opción 1: Vercel CLI**
```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Desplegar frontend
cd frontend
vercel --prod

# 4. Configurar variable de entorno
vercel env add NEXT_PUBLIC_STRAPI_URL production
```

### **Opción 2: GitHub + Vercel (Automático)**
```bash
# 1. Push a GitHub
git add .
git commit -m "Ready for Vercel deployment"
git push origin main

# 2. Importar en Vercel Dashboard
# Dashboard → Add New → Project → Import GitHub
```

### **Variables de Entorno Requeridas**
```bash
NEXT_PUBLIC_STRAPI_URL=https://tu-backend-url.vercel.app
```

### **URLs Finales Esperadas**
```
Frontend: https://terra-landing.vercel.app
Backend:  https://terra-backend.railway.app
Admin:    https://terra-backend.railway.app/admin
```

### **Documentación de Deploy**
- `VERCEL_DEPLOY.md` - Guía completa paso a paso
- `DEPLOYMENT_READY.md` - Checklist de producción
- `IMAGES_GUIDE.md` - Gestión de imágenes

## 📞 Soporte

Para problemas o preguntas:
- Documentación Strapi: https://strapi.io/documentation
- Documentación Next.js: https://nextjs.org/docs
- Documentación Tailwind: https://tailwindcss.com/docs

## 📄 Licencia

MIT

---

**🎉 ¡Disfruta de tu nuevo CMS Terra!**
