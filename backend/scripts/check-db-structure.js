const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '..', '.tmp', 'data.db');

const db = new sqlite3.Database(dbPath);

console.log('🔍 Verificando estructura de la base de datos...\n');

// Ver estructura de la tabla up_permissions
db.all("PRAGMA table_info(up_permissions)", [], (err, columns) => {
  if (err) {
    console.error('Error:', err);
    db.close();
    return;
  }

  console.log('📋 Estructura de la tabla up_permissions:');
  columns.forEach(col => {
    console.log(`  - ${col.name} (${col.type})`);
  });

  // Ver algunos registros existentes
  db.all("SELECT * FROM up_permissions LIMIT 5", [], (err, rows) => {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log('\n📄 Ejemplo de permisos existentes:');
      rows.forEach(row => {
        console.log(row);
      });
    }

    db.close();
  });
});
