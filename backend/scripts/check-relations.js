const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '..', '.tmp', 'data.db');
const db = new sqlite3.Database(dbPath);

console.log('🔍 Buscando tablas de relaciones...\n');

// Listar todas las tablas
db.all("SELECT name FROM sqlite_master WHERE type='table' AND name LIKE '%permission%' OR name LIKE '%role%'", [], (err, tables) => {
  if (err) {
    console.error('Error:', err);
    db.close();
    return;
  }

  console.log('📋 Tablas relacionadas con permisos y roles:');
  tables.forEach(table => {
    console.log(`  - ${table.name}`);
  });

  // Buscar tabla de relación
  db.all("SELECT name FROM sqlite_master WHERE type='table' AND (name LIKE '%role%permission%' OR name LIKE '%permission%role%')", [], (err, linkTables) => {
    console.log('\n🔗 Tablas de relación:');
    if (linkTables.length === 0) {
      console.log('  (ninguna encontrada)');
    } else {
      linkTables.forEach(table => {
        console.log(`  - ${table.name}`);
        
        // Ver estructura de la tabla de relación
        db.all(`PRAGMA table_info(${table.name})`, [], (err, cols) => {
          console.log(`\n  Estructura de ${table.name}:`);
          cols.forEach(col => {
            console.log(`    - ${col.name} (${col.type})`);
          });

          // Ver algunos registros
          db.all(`SELECT * FROM ${table.name} LIMIT 5`, [], (err, rows) => {
            console.log(`\n  Ejemplo de registros en ${table.name}:`);
            rows.forEach(row => {
              console.log('   ', row);
            });
          });
        });
      });
    }

    setTimeout(() => {
      db.close();
    }, 2000);
  });
});
