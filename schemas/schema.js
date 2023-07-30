// We import object and document schemas
import product from "./documents/product";
import price from "./documents/price";
import content from "./documents/content";
import customer from "./documents/customer";
import subscriptions from "./documents/subscriptions";


import localfile from "./objects/localfile";
import mainImage from "./objects/mainImage";
import bodyPortableText from "./objects/bodyPortableText";


export const schemaTypes = [
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
]