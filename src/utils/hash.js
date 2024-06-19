// Small utility function to cleanse and hash a JSON object
// predictably so we can ensure we create unique keys for React

import spark from 'spark-md5';
import stringify from './stringify';

const hash = data => spark.hash( stringify( data || {}).replace( /[^a-zA-Z0-9]/g, `` ));

export default hash;
