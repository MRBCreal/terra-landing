# 🚀 Terra Landing - Deploy Script para Vercel
# Ejecutar: .\deploy.ps1

Write-Host "🏗️  Terra Landing - Deploy en Vercel" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan

# Paso 1: Verificar ubicación
Write-Host "`n📍 Paso 1: Verificando ubicación..." -ForegroundColor Yellow
$currentDir = Get-Location
Write-Host "Directorio actual: $currentDir" -ForegroundColor Green

# Paso 2: Navegar al frontend
Write-Host "`n📁 Paso 2: Navegando al frontend..." -ForegroundColor Yellow
Set-Location "frontend"
$frontendDir = Get-Location
Write-Host "Directorio frontend: $frontendDir" -ForegroundColor Green

# Paso 3: Verificar archivos clave
Write-Host "`n🔍 Paso 3: Verificando archivos clave..." -ForegroundColor Yellow
$files = @("package.json", "next.config.js", "vercel.json", "src/app/page.tsx")
foreach ($file in $files) {
    if (Test-Path $file) {
        Write-Host "✅ $file encontrado" -ForegroundColor Green
    } else {
        Write-Host "❌ $file NO encontrado" -ForegroundColor Red
    }
}

# Paso 4: Verificar dependencias
Write-Host "`n📦 Paso 4: Verificando dependencias..." -ForegroundColor Yellow
if (Test-Path "node_modules") {
    Write-Host "✅ node_modules existe" -ForegroundColor Green
} else {
    Write-Host "📥 Instalando dependencias..." -ForegroundColor Yellow
    npm install
}

# Paso 5: Build test
Write-Host "`n🔨 Paso 5: Test de build..." -ForegroundColor Yellow
try {
    npm run build
    Write-Host "✅ Build exitoso" -ForegroundColor Green
} catch {
    Write-Host "❌ Build falló" -ForegroundColor Red
    Write-Host "Revisa los errores arriba y corrige antes de continuar" -ForegroundColor Red
    exit 1
}

# Paso 6: Deploy en Vercel
Write-Host "`n🚀 Paso 6: Desplegando en Vercel..." -ForegroundColor Yellow
Write-Host "📋 Sigue las instrucciones interactivas de Vercel:" -ForegroundColor Cyan
Write-Host "   1. Selecciona 'Y' para configurar proyecto" -ForegroundColor White
Write-Host "   2. Elige tu scope/cuenta" -ForegroundColor White
Write-Host "   3. Nombre del proyecto: terra-landing" -ForegroundColor White
Write-Host "   4. Confirmar configuración Next.js" -ForegroundColor White
Write-Host "`n🎯 Ejecutando vercel --prod..." -ForegroundColor Cyan

# Ejecutar Vercel (requiere interacción humana)
vercel --prod

# Paso 7: Resultado
Write-Host "`n🎉 Paso 7: ¡Despliegue completado!" -ForegroundColor Green
Write-Host "📊 Revisa la URL proporcionada por Vercel" -ForegroundColor Cyan
Write-Host "🔍 Visita tu sitio en la URL mostrada arriba" -ForegroundColor Cyan

Write-Host "`n✨ ¡Terra Landing está en vivo!" -ForegroundColor Green
Write-Host "======================================" -ForegroundColor Green
