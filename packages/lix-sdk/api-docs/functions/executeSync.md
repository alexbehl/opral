[**@lix-js/sdk**](../README.md)

***

[@lix-js/sdk](../README.md) / executeSync

# Function: executeSync()

> **executeSync**(`args`): `any`[]

Defined in: [packages/lix-sdk/src/database/execute-sync.ts:15](https://github.com/opral/monorepo/blob/985ffce1eb6542fd7d2a659b02ab83cb2ccd8d57/packages/lix-sdk/src/database/execute-sync.ts#L15)

Execute a query synchronously.

WARNING: This function is not recommended for general use.
Only if you need sync queries, like in a trigger for exmaple,
you should use this function. The function is not transforming
the query or the result as the db API does. You get raw SQL.

## Parameters

### args

#### lix

`Pick`\<[`Lix`](../type-aliases/Lix.md), `"sqlite"`\>

#### query

`any`

## Returns

`any`[]

## Example

```ts
const query = lix.db.selectFrom("key_value").selectAll();
  const result = executeSync({ lix, query }) as KeyValue[];
```
