'use strict';

importScripts('/pros/sw-toolbox.js');

toolbox.precache(["/pros/index.html", "/pros/notes.html", "/pros/spreadsheet.html"]);

toolbox.router.get('/pros/icons/*', toolbox.cacheFirst);

toolbox.router.get('/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});
