// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import product from "./documents/product";
import price from "./documents/price";
import content from "./documents/content";
import customer from "./documents/customer";
import subscriptions from "./documents/subscriptions";


import localfile from "./objects/localfile";
import mainImage from "./objects/mainImage";
import bodyPortableText from "./objects/bodyPortableText";

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
    customer,
    content,
    subscriptions,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    bodyPortableText,
    mainImage,
    localfile
  ]),
});
