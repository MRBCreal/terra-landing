# 📸 Guía de Imágenes para Terra Strapi2

## 🎯 **Estado Actual**
- ✅ **Imágenes funcionando**: Unsplash como fallback
- ✅ **Strapi preparado**: Campos de imagen configurados
- ✅ **Frontend listo**: Soporta ambos sistemas

## 🖼️ **Cómo Subir Imágenes a Strapi**

### **1. Acceder al Panel Admin**
```
http://localhost:1337/admin
```

### **2. Subir Imágenes a Media Library**
1. **Media Library** (menú izquierdo)
2. **Upload new assets**
3. Arrastrar o seleccionar archivos
4. **Configurar**:
   - Nombre descriptivo
   - Alt text (accesibilidad)
   - Tags opcionales

### **3. Asociar Imágenes a Contenido**

#### **Proyectos**
1. **Content Type Builder** → **Projects**
2. Editar un proyecto existente o crear nuevo
3. Campo **Image**: Seleccionar imagen de Media Library
4. Campo **Gallery**: Seleccionar múltiples imágenes (opcional)

#### **Servicios**
1. **Content Type Builder** → **Services**
2. Editar servicio
3. Campo **Image**: Seleccionar imagen principal

#### **Perspectivas**
1. **Content Type Builder** → **Perspectives**
2. Editar perspectiva
3. Campo **Image**: Seleccionar imagen del artículo

## 📁 **Estructura de URLs**

### **Imágenes de Strapi**
```
http://localhost:1337/uploads/nombre_imagen.jpg
```

### **Fallback Unsplash**
```
https://images.unsplash.com/photo-XXXXX?auto=format&fit=crop&q=80&w=1200
```

## 🔄 **Cómo Funciona el Frontend**

### **Lógica de Prioridad**
1. **Primero**: Imagen de Strapi (si existe)
2. **Fallback**: Imagen de Unsplash (si no hay Strapi)

### **Código Ejemplo**
```tsx
// El frontend automáticamente detecta y usa la mejor opción
<img 
  src={getImageUrl(project.attributes.image, 'projects', index)}
  alt={project.attributes.title}
/>
```

## 📋 **Recomendaciones de Imágenes**

### **Dimensiones Óptimas**
- **Hero**: 2000x1200px (parallax)
- **Projects**: 1200x800px (horizontal)
- **Perspectives**: 600x400px (horizontal)
- **About**: 1000x600px (horizontal)

### **Formatos**
- ✅ **JPG**: Para fotografías
- ✅ **PNG**: Para gráficos con transparencia
- ✅ **WebP**: Moderno, mejor compresión

### **Tamaño Máximo**
- **Recomendado**: < 2MB por imagen
- **Máximo**: 10MB (configuración Strapi)

## 🚀 **Pasos para Reemplazar Imágenes**

### **1. Preparar Imágenes**
- Dimensiones correctas
- Optimizadas para web
- Nombres descriptivos

### **2. Subir a Strapi**
1. Media Library → Upload
2. Configurar metadatos
3. Save

### **3. Asociar a Contenido**
1. Editar contenido específico
2. Seleccionar imagen
3. Save & Publish

### **4. Verificar Resultado**
- Visitar: http://localhost:3000
- Las imágenes de Strapi reemplazarán automáticamente a Unsplash

## 🎨 **Imágenes Sugeridas por Sección**

### **Proyectos de Construcción**
- Estadios y arenas
- Centros médicos/hospitales
- Puertos marítimos
- Aeropuertos
- Plantas industriales
- Edificios comerciales

### **Servicios**
- Equipos de construcción
- Maquinaria pesada
- Planos y arquitectura
- Procesos de construcción

### **Perspectivas**
- Reuniones de equipo
- Tecnología BIM
- Sostenibilidad
- Innovación en construcción

## ⚡ **Ventajas de este Sistema**

1. **Flexibilidad**: Usa Unsplash mientras preparas tus imágenes
2. **Control**: Sube tus propias imágenes cuando quieras
3. **Automático**: El frontend cambia automáticamente
4. **Profesional**: Imágenes de construcción específicas

## 🔧 **Solución de Problemas**

### **Imágenes no cargan**
1. Verificar que Strapi esté corriendo
2. Revisar Media Library
3. Verificar permisos de archivos

### **URLs rotas**
1. Limpiar caché del navegador
2. Reiniciar frontend: `npm run dev`
3. Verificar conexión a Strapi

---

**🎯 ¡Listo para usar! Puedes subir tus imágenes cuando quieras y reemplazarán automáticamente las de Unsplash.**
