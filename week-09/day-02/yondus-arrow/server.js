'use strict';

const routes = require('./routes');
const port = 4000;

routes.listen(port, () => {
  console.log(`Server running on port ${port}`);
});