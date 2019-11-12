'use strict';

const routes = require('./routes');
const port = 5000;

routes.listen(port, () => {
  console.log(`Server running on port ${port}`);
});