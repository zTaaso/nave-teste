const { client } = require('../../knexfile');

// gera um uuid 'manualmente' caso o banco de dados usado seja o sqlite3
const uuidGenerationRaw =
  client === 'sqlite3'
    ? `(lower(hex(randomblob(4))) || '-' || lower(hex(randomblob(2))) || '-4' || substr(lower(hex(randomblob(2))),2) || '-' || substr('89ab',abs(random()) % 4 + 1, 1) || substr(lower(hex(randomblob(2))),2) || '-' || lower(hex(randomblob(6))))`
    : `uuid_generate_v4()`;

module.exports = uuidGenerationRaw;
