import Server from './app.js';

Server.listen(`${Server.get('PORT')}`, Server.get('run'))
