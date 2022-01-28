// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import product from "./documents/product";
import customer from "./documents/customer";
import price from "./documents/price";
import subscriptions from "./documents/subscriptions";
import content from "./documents/content";

import localeString from "./locale/String";
import localeText from "./locale/Text";

import bodyPortableText from "./objects/bodyPortableText";
import mainImage from "./objects/mainImage";
import localfile from "./objects/localfile";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    product,
    price,
    subscriptions,
    customer,
    content,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    localeText,
    bodyPortableText,
    mainImage,
    localeString,
    localfile
  ]),
});
