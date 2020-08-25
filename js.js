import { createClient } from "pexels";
const client = createClient(
  "563492ad6f917000010000011efeea7f897441ed84fcbfd27ceb6a18"
);

import { createClient } from 'pexels';

const client = createClient('563492ad6f917000010000011efeea7f897441ed84fcbfd27ceb6a18');
const query = 'Nature';

client.photos.search({ query, per_page: 1 }).then(photos => {...});
