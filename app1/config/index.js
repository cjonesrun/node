const _db_properties = {
  host: '127.0.0.1',
  port: 5432,
  database: 'testing',
  user: 'cj',
  password: 'cj',
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000
};

const _log_config = './config/log4js.json';

module.exports = {
  dbprops : _db_properties,
  logprops : _log_config
}
