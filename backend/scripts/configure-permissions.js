const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '..', '.tmp', 'data.db');

console.log('🔐 Configurando permisos públicos...\n');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('❌ Error conectando a la base de datos:', err);
    process.exit(1);
  }
});

// Primero, obtener el ID del rol Public
db.get("SELECT id FROM up_roles WHERE type = 'public'", [], (err, role) => {
  if (err) {
    console.error('❌ Error obteniendo rol public:', err);
    db.close();
    process.exit(1);
  }

  if (!role) {
    console.error('❌ No se encontró el rol public');
    db.close();
    process.exit(1);
  }

  const publicRoleId = role.id;
  console.log(`✅ Rol Public encontrado (ID: ${publicRoleId})\n`);

  // Permisos a configurar
  const permissions = [
    // Configuración Global
    { action: 'api::global-setting.global-setting.find', enabled: true },
    { action: 'api::global-setting.global-setting.update', enabled: true },
    
    // Proyectos
    { action: 'api::project.project.find', enabled: true },
    { action: 'api::project.project.findOne', enabled: true },
    { action: 'api::project.project.create', enabled: true },
    { action: 'api::project.project.update', enabled: true },
    { action: 'api::project.project.delete', enabled: true },
    
    // Servicios
    { action: 'api::service.service.find', enabled: true },
    { action: 'api::service.service.findOne', enabled: true },
    { action: 'api::service.service.create', enabled: true },
    { action: 'api::service.service.update', enabled: true },
    { action: 'api::service.service.delete', enabled: true },
    
    // Perspectivas
    { action: 'api::perspective.perspective.find', enabled: true },
    { action: 'api::perspective.perspective.findOne', enabled: true },
    { action: 'api::perspective.perspective.create', enabled: true },
    { action: 'api::perspective.perspective.update', enabled: true },
    { action: 'api::perspective.perspective.delete', enabled: true },
    
    // Newsletter Subscriptions
    { action: 'api::newsletter-subscription.newsletter-subscription.create', enabled: true }
  ];

  let completed = 0;
  const total = permissions.length;

  console.log('📝 Insertando permisos...\n');

  permissions.forEach((perm, index) => {
    // Primero insertar el permiso
    const insertPermQuery = `
      INSERT INTO up_permissions (action, created_at, updated_at)
      VALUES (?, datetime('now'), datetime('now'))
    `;

    db.run(insertPermQuery, [perm.action], function(err) {
      if (err) {
        console.error(`❌ Error insertando permiso ${perm.action}:`, err.message);
        completed++;
        checkCompletion();
        return;
      }

      const permissionId = this.lastID;

      // Luego crear la relación con el rol
      const linkQuery = `
        INSERT INTO up_permissions_role_links (permission_id, role_id, permission_order)
        VALUES (?, ?, ?)
      `;

      db.run(linkQuery, [permissionId, publicRoleId, index + 1], (err) => {
        if (err) {
          console.error(`❌ Error vinculando permiso ${perm.action}:`, err.message);
        } else {
          console.log(`✅ Permiso configurado: ${perm.action}`);
        }

        completed++;
        checkCompletion();
      });
    });
  });

  function checkCompletion() {
    if (completed === total) {
      console.log('\n🎉 ¡Permisos configurados exitosamente!');
      console.log('\n📋 Resumen:');
      console.log('- Configuración Global: find');
      console.log('- Proyectos: find, findOne');
      console.log('- Servicios: find, findOne');
      console.log('- Perspectivas: find, findOne');
      console.log('- Suscripciones Newsletter: create');
      console.log('\n⚠️ IMPORTANTE: Reinicia Strapi para que los cambios surtan efecto.');
      
      db.close();
      process.exit(0);
    }
  }
});
