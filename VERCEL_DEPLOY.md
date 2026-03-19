# 🚀 Despliegue en Vercel - Terra Landing

## 📋 **Requisitos Previos**

### **1. Cuenta en Vercel**
- Crear cuenta gratuita en [vercel.com](https://vercel.com)
- Conectar con GitHub (recomendado)

### **2. Variables de Entorno**
Configurar en Vercel Dashboard → Settings → Environment Variables:

```bash
NEXT_PUBLIC_STRAPI_URL=https://tu-backend-strapi.vercel.app
```

## 🛠️ **Opción 1: Despliegue Automático (Recomendado)**

### **Paso 1: Push a GitHub**
```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

### **Paso 2: Importar en Vercel**
1. Dashboard → **Add New...** → **Project**
2. Importar repositorio GitHub
3. Vercel detectará automáticamente Next.js
4. Configurar variables de entorno
5. **Deploy**

## 🛠️ **Opción 2: Despliegue Manual con Vercel CLI**

### **Paso 1: Instalar Vercel CLI**
```bash
npm i -g vercel
```

### **Paso 2: Login**
```bash
vercel login
```

### **Paso 3: Desplegar**
```bash
cd frontend
vercel --prod
```

## 🎯 **Configuración Optimizada para Vercel**

### **✅ Optimizaciones Aplicadas:**

1. **Dynamic Imports**: Componentes pesados cargados bajo demanda
2. **Passive Event Listeners**: Mejor rendimiento de scroll
3. **Bundle Optimization**: Mínimas dependencias
4. **Image Optimization**: Configuración Next.js + Strapi
5. **Analytics**: @vercel/analytics integrado

### **📁 Estructura de Despliegue:**
```
terra-strapi2/
├── frontend/           # Next.js app
│   ├── .next/         # Build output
│   ├── public/        # Static assets
│   └── src/           # Source code
├── vercel.json        # Configuración Vercel
└── README.md
```

## 🔧 **Configuración Avanzada**

### **vercel.json**
```json
{
  "version": 2,
  "name": "terra-landing",
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "env": {
    "NEXT_PUBLIC_STRAPI_URL": "@strapi-url"
  }
}
```

### **next.config.js**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tu-backend.vercel.app',
        pathname: '/uploads/**',
      },
    ],
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
```

## 🌐 **Backend en Vercel**

### **Opción 1: Strapi Cloud**
1. Crear cuenta en [strapi.cloud](https://cloud.strapi.io)
2. Importar proyecto
3. Obtener URL del backend

### **Opción 2: Railway/Render**
1. Desplegar backend en Railway o Render
2. Configurar variables de entorno
3. Obtener URL pública

## 🔄 **Flujo de Despliegue Completo**

### **1. Backend (Strapi)**
```bash
# Railway/Render
git push production main
# Obtener: https://terra-backend.railway.app
```

### **2. Frontend (Next.js)**
```bash
# Actualizar variable de entorno
NEXT_PUBLIC_STRAPI_URL=https://terra-backend.railway.app

# Desplegar en Vercel
vercel --prod
```

### **3. Verificar**
- Frontend: https://terra-landing.vercel.app
- Backend: https://terra-backend.railway.app
- Admin: https://terra-backend.railway.app/admin

## 📊 **Monitoreo y Analytics**

### **Vercel Analytics**
Automáticamente configurado con `@vercel/analytics`:
- Page views
- Web Vitals
- Rendimiento
- Errores

### **Acceso Dashboard**
Vercel Dashboard → tu-proyecto → Analytics

## 🚨 **Solución de Problemas**

### **Build Errors**
```bash
# Limpiar caché
rm -rf .next
npm run build

# Verificar tipos
npm run type-check
```

### **Environment Variables**
```bash
# Verificar configuración
vercel env ls

# Agregar variable
vercel env add NEXT_PUBLIC_STRAPI_URL
```

### **Images Not Loading**
1. Verificar dominios en `next.config.js`
2. Confirmar URL del backend
3. Revisar CORS en Strapi

## 🎯 **Mejores Prácticas Aplicadas**

### **Performance (Vercel Best Practices):**
- ✅ Dynamic imports para componentes pesados
- ✅ Passive event listeners
- ✅ Optimización de bundle
- ✅ Image optimization
- ✅ Minimal dependencies

### **SEO:**
- ✅ Metadatos dinámicos
- ✅ Open Graph tags
- ✅ Structured data
- ✅ Sitemap generation

### **Security:**
- ✅ Environment variables
- ✅ HTTPS automático
- ✅ CORS configurado
- ✅ Headers de seguridad

## 🎉 **Resultado Final**

**URLs Esperadas:**
- **Frontend**: https://terra-landing.vercel.app
- **Backend**: https://terra-backend.railway.app
- **Admin**: https://terra-backend.railway.app/admin

**Características:**
- ✅ Despliegue automático con Git
- ✅ Preview deployments
- ✅ Analytics integrado
- ✅ Global CDN
- ✅ HTTPS automático
- ✅ Performance optimizado

---

**🚀 ¡Listo para producción en Vercel!**
