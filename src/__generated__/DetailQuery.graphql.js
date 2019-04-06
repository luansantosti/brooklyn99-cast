/**
 * @flow
 * @relayHash 63708a690141c6f9db54539c9a75850b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DetailQueryVariables = {|
  idTest: string
|};
export type DetailQueryResponse = {|
  +viewer: {|
    +Post: ?{|
      +title: string,
      +imageUrl: string,
      +description: string,
    |}
  |}
|};
export type DetailQuery = {|
  variables: DetailQueryVariables,
  response: DetailQueryResponse,
|};
*/


/*
query DetailQuery(
  $idTest: ID!
) {
  viewer {
    Post(id: $idTest) {
      title
      imageUrl
      description
      id
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "idTest",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "idTest",
    "type": "ID"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "imageUrl",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DetailQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "Post",
            "storageKey": null,
            "args": (v1/*: any*/),
            "concreteType": "Post",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DetailQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "Post",
            "storageKey": null,
            "args": (v1/*: any*/),
            "concreteType": "Post",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/)
            ]
          },
          (v5/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "DetailQuery",
    "id": null,
    "text": "query DetailQuery(\n  $idTest: ID!\n) {\n  viewer {\n    Post(id: $idTest) {\n      title\n      imageUrl\n      description\n      id\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '418e6521b0ef1952408103ff757296bf';
module.exports = node;
