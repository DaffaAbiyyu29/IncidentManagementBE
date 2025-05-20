
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Process
 * 
 */
export type Process = $Result.DefaultSelection<Prisma.$ProcessPayload>
/**
 * Model ProcessActivity
 * 
 */
export type ProcessActivity = $Result.DefaultSelection<Prisma.$ProcessActivityPayload>
/**
 * Model ProcessAssign
 * 
 */
export type ProcessAssign = $Result.DefaultSelection<Prisma.$ProcessAssignPayload>
/**
 * Model vwPRO_2
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type vwPRO_2 = $Result.DefaultSelection<Prisma.$vwPRO_2Payload>
/**
 * Model vwProcess
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type vwProcess = $Result.DefaultSelection<Prisma.$vwProcessPayload>
/**
 * Model vwProcessActivity
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type vwProcessActivity = $Result.DefaultSelection<Prisma.$vwProcessActivityPayload>
/**
 * Model vwProcessAssign2All
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type vwProcessAssign2All = $Result.DefaultSelection<Prisma.$vwProcessAssign2AllPayload>
/**
 * Model vwProcessGroup
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type vwProcessGroup = $Result.DefaultSelection<Prisma.$vwProcessGroupPayload>
/**
 * Model vwProduct
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type vwProduct = $Result.DefaultSelection<Prisma.$vwProductPayload>
/**
 * Model vwUnit
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type vwUnit = $Result.DefaultSelection<Prisma.$vwUnitPayload>
/**
 * Model vwProductGroup
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type vwProductGroup = $Result.DefaultSelection<Prisma.$vwProductGroupPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Processes
 * const processes = await prisma.process.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Processes
   * const processes = await prisma.process.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.process`: Exposes CRUD operations for the **Process** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Processes
    * const processes = await prisma.process.findMany()
    * ```
    */
  get process(): Prisma.ProcessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.processActivity`: Exposes CRUD operations for the **ProcessActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProcessActivities
    * const processActivities = await prisma.processActivity.findMany()
    * ```
    */
  get processActivity(): Prisma.ProcessActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.processAssign`: Exposes CRUD operations for the **ProcessAssign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProcessAssigns
    * const processAssigns = await prisma.processAssign.findMany()
    * ```
    */
  get processAssign(): Prisma.ProcessAssignDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vwPRO_2`: Exposes CRUD operations for the **vwPRO_2** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VwPRO_2s
    * const vwPRO_2s = await prisma.vwPRO_2.findMany()
    * ```
    */
  get vwPRO_2(): Prisma.vwPRO_2Delegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vwProcess`: Exposes CRUD operations for the **vwProcess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VwProcesses
    * const vwProcesses = await prisma.vwProcess.findMany()
    * ```
    */
  get vwProcess(): Prisma.vwProcessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vwProcessActivity`: Exposes CRUD operations for the **vwProcessActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VwProcessActivities
    * const vwProcessActivities = await prisma.vwProcessActivity.findMany()
    * ```
    */
  get vwProcessActivity(): Prisma.vwProcessActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vwProcessAssign2All`: Exposes CRUD operations for the **vwProcessAssign2All** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VwProcessAssign2Alls
    * const vwProcessAssign2Alls = await prisma.vwProcessAssign2All.findMany()
    * ```
    */
  get vwProcessAssign2All(): Prisma.vwProcessAssign2AllDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vwProcessGroup`: Exposes CRUD operations for the **vwProcessGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VwProcessGroups
    * const vwProcessGroups = await prisma.vwProcessGroup.findMany()
    * ```
    */
  get vwProcessGroup(): Prisma.vwProcessGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vwProduct`: Exposes CRUD operations for the **vwProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VwProducts
    * const vwProducts = await prisma.vwProduct.findMany()
    * ```
    */
  get vwProduct(): Prisma.vwProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vwUnit`: Exposes CRUD operations for the **vwUnit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VwUnits
    * const vwUnits = await prisma.vwUnit.findMany()
    * ```
    */
  get vwUnit(): Prisma.vwUnitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vwProductGroup`: Exposes CRUD operations for the **vwProductGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VwProductGroups
    * const vwProductGroups = await prisma.vwProductGroup.findMany()
    * ```
    */
  get vwProductGroup(): Prisma.vwProductGroupDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Process: 'Process',
    ProcessActivity: 'ProcessActivity',
    ProcessAssign: 'ProcessAssign',
    vwPRO_2: 'vwPRO_2',
    vwProcess: 'vwProcess',
    vwProcessActivity: 'vwProcessActivity',
    vwProcessAssign2All: 'vwProcessAssign2All',
    vwProcessGroup: 'vwProcessGroup',
    vwProduct: 'vwProduct',
    vwUnit: 'vwUnit',
    vwProductGroup: 'vwProductGroup'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    satria?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "process" | "processActivity" | "processAssign" | "vwPRO_2" | "vwProcess" | "vwProcessActivity" | "vwProcessAssign2All" | "vwProcessGroup" | "vwProduct" | "vwUnit" | "vwProductGroup"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Process: {
        payload: Prisma.$ProcessPayload<ExtArgs>
        fields: Prisma.ProcessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProcessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProcessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload>
          }
          findFirst: {
            args: Prisma.ProcessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProcessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload>
          }
          findMany: {
            args: Prisma.ProcessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload>[]
          }
          create: {
            args: Prisma.ProcessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload>
          }
          createMany: {
            args: Prisma.ProcessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProcessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload>
          }
          update: {
            args: Prisma.ProcessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload>
          }
          deleteMany: {
            args: Prisma.ProcessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProcessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProcessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload>
          }
          aggregate: {
            args: Prisma.ProcessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProcess>
          }
          groupBy: {
            args: Prisma.ProcessGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProcessGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProcessCountArgs<ExtArgs>
            result: $Utils.Optional<ProcessCountAggregateOutputType> | number
          }
        }
      }
      ProcessActivity: {
        payload: Prisma.$ProcessActivityPayload<ExtArgs>
        fields: Prisma.ProcessActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProcessActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProcessActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessActivityPayload>
          }
          findFirst: {
            args: Prisma.ProcessActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProcessActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessActivityPayload>
          }
          findMany: {
            args: Prisma.ProcessActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessActivityPayload>[]
          }
          create: {
            args: Prisma.ProcessActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessActivityPayload>
          }
          createMany: {
            args: Prisma.ProcessActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProcessActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessActivityPayload>
          }
          update: {
            args: Prisma.ProcessActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessActivityPayload>
          }
          deleteMany: {
            args: Prisma.ProcessActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProcessActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProcessActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessActivityPayload>
          }
          aggregate: {
            args: Prisma.ProcessActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProcessActivity>
          }
          groupBy: {
            args: Prisma.ProcessActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProcessActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProcessActivityCountArgs<ExtArgs>
            result: $Utils.Optional<ProcessActivityCountAggregateOutputType> | number
          }
        }
      }
      ProcessAssign: {
        payload: Prisma.$ProcessAssignPayload<ExtArgs>
        fields: Prisma.ProcessAssignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProcessAssignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessAssignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProcessAssignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessAssignPayload>
          }
          findFirst: {
            args: Prisma.ProcessAssignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessAssignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProcessAssignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessAssignPayload>
          }
          findMany: {
            args: Prisma.ProcessAssignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessAssignPayload>[]
          }
          create: {
            args: Prisma.ProcessAssignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessAssignPayload>
          }
          createMany: {
            args: Prisma.ProcessAssignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProcessAssignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessAssignPayload>
          }
          update: {
            args: Prisma.ProcessAssignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessAssignPayload>
          }
          deleteMany: {
            args: Prisma.ProcessAssignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProcessAssignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProcessAssignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessAssignPayload>
          }
          aggregate: {
            args: Prisma.ProcessAssignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProcessAssign>
          }
          groupBy: {
            args: Prisma.ProcessAssignGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProcessAssignGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProcessAssignCountArgs<ExtArgs>
            result: $Utils.Optional<ProcessAssignCountAggregateOutputType> | number
          }
        }
      }
      vwPRO_2: {
        payload: Prisma.$vwPRO_2Payload<ExtArgs>
        fields: Prisma.vwPRO_2FieldRefs
        operations: {
          findUnique: {
            args: Prisma.vwPRO_2FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwPRO_2Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vwPRO_2FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwPRO_2Payload>
          }
          findFirst: {
            args: Prisma.vwPRO_2FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwPRO_2Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vwPRO_2FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwPRO_2Payload>
          }
          findMany: {
            args: Prisma.vwPRO_2FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwPRO_2Payload>[]
          }
          create: {
            args: Prisma.vwPRO_2CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwPRO_2Payload>
          }
          createMany: {
            args: Prisma.vwPRO_2CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.vwPRO_2DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwPRO_2Payload>
          }
          update: {
            args: Prisma.vwPRO_2UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwPRO_2Payload>
          }
          deleteMany: {
            args: Prisma.vwPRO_2DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vwPRO_2UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.vwPRO_2UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwPRO_2Payload>
          }
          aggregate: {
            args: Prisma.VwPRO_2AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVwPRO_2>
          }
          groupBy: {
            args: Prisma.vwPRO_2GroupByArgs<ExtArgs>
            result: $Utils.Optional<VwPRO_2GroupByOutputType>[]
          }
          count: {
            args: Prisma.vwPRO_2CountArgs<ExtArgs>
            result: $Utils.Optional<VwPRO_2CountAggregateOutputType> | number
          }
        }
      }
      vwProcess: {
        payload: Prisma.$vwProcessPayload<ExtArgs>
        fields: Prisma.vwProcessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vwProcessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProcessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vwProcessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProcessPayload>
          }
          findFirst: {
            args: Prisma.vwProcessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProcessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vwProcessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProcessPayload>
          }
          findMany: {
            args: Prisma.vwProcessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProcessPayload>[]
          }
          create: {
            args: Prisma.vwProcessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProcessPayload>
          }
          createMany: {
            args: Prisma.vwProcessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.vwProcessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProcessPayload>
          }
          update: {
            args: Prisma.vwProcessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProcessPayload>
          }
          deleteMany: {
            args: Prisma.vwProcessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vwProcessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.vwProcessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProcessPayload>
          }
          aggregate: {
            args: Prisma.VwProcessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVwProcess>
          }
          groupBy: {
            args: Prisma.vwProcessGroupByArgs<ExtArgs>
            result: $Utils.Optional<VwProcessGroupByOutputType>[]
          }
          count: {
            args: Prisma.vwProcessCountArgs<ExtArgs>
            result: $Utils.Optional<VwProcessCountAggregateOutputType> | number
          }
        }
      }
      vwProcessActivity: {
        payload: Prisma.$vwProcessActivityPayload<ExtArgs>
        fields: Prisma.vwProcessActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vwProcessActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProcessActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vwProcessActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProcessActivityPayload>
          }
          findFirst: {
            args: Prisma.vwProcessActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProcessActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vwProcessActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProcessActivityPayload>
          }
          findMany: {
            args: Prisma.vwProcessActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProcessActivityPayload>[]
          }
          create: {
            args: Prisma.vwProcessActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProcessActivityPayload>
          }
          createMany: {
            args: Prisma.vwProcessActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.vwProcessActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProcessActivityPayload>
          }
          update: {
            args: Prisma.vwProcessActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProcessActivityPayload>
          }
          deleteMany: {
            args: Prisma.vwProcessActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vwProcessActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.vwProcessActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProcessActivityPayload>
          }
          aggregate: {
            args: Prisma.VwProcessActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVwProcessActivity>
          }
          groupBy: {
            args: Prisma.vwProcessActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<VwProcessActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.vwProcessActivityCountArgs<ExtArgs>
            result: $Utils.Optional<VwProcessActivityCountAggregateOutputType> | number
          }
        }
      }
      vwProcessAssign2All: {
        payload: Prisma.$vwProcessAssign2AllPayload<ExtArgs>
        fields: Prisma.vwProcessAssign2AllFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vwProcessAssign2AllFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProcessAssign2AllPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vwProcessAssign2AllFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProcessAssign2AllPayload>
          }
          findFirst: {
            args: Prisma.vwProcessAssign2AllFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProcessAssign2AllPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vwProcessAssign2AllFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProcessAssign2AllPayload>
          }
          findMany: {
            args: Prisma.vwProcessAssign2AllFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProcessAssign2AllPayload>[]
          }
          create: {
            args: Prisma.vwProcessAssign2AllCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProcessAssign2AllPayload>
          }
          createMany: {
            args: Prisma.vwProcessAssign2AllCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.vwProcessAssign2AllDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProcessAssign2AllPayload>
          }
          update: {
            args: Prisma.vwProcessAssign2AllUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProcessAssign2AllPayload>
          }
          deleteMany: {
            args: Prisma.vwProcessAssign2AllDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vwProcessAssign2AllUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.vwProcessAssign2AllUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProcessAssign2AllPayload>
          }
          aggregate: {
            args: Prisma.VwProcessAssign2AllAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVwProcessAssign2All>
          }
          groupBy: {
            args: Prisma.vwProcessAssign2AllGroupByArgs<ExtArgs>
            result: $Utils.Optional<VwProcessAssign2AllGroupByOutputType>[]
          }
          count: {
            args: Prisma.vwProcessAssign2AllCountArgs<ExtArgs>
            result: $Utils.Optional<VwProcessAssign2AllCountAggregateOutputType> | number
          }
        }
      }
      vwProcessGroup: {
        payload: Prisma.$vwProcessGroupPayload<ExtArgs>
        fields: Prisma.vwProcessGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vwProcessGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProcessGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vwProcessGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProcessGroupPayload>
          }
          findFirst: {
            args: Prisma.vwProcessGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProcessGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vwProcessGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProcessGroupPayload>
          }
          findMany: {
            args: Prisma.vwProcessGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProcessGroupPayload>[]
          }
          create: {
            args: Prisma.vwProcessGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProcessGroupPayload>
          }
          createMany: {
            args: Prisma.vwProcessGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.vwProcessGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProcessGroupPayload>
          }
          update: {
            args: Prisma.vwProcessGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProcessGroupPayload>
          }
          deleteMany: {
            args: Prisma.vwProcessGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vwProcessGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.vwProcessGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProcessGroupPayload>
          }
          aggregate: {
            args: Prisma.VwProcessGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVwProcessGroup>
          }
          groupBy: {
            args: Prisma.vwProcessGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<VwProcessGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.vwProcessGroupCountArgs<ExtArgs>
            result: $Utils.Optional<VwProcessGroupCountAggregateOutputType> | number
          }
        }
      }
      vwProduct: {
        payload: Prisma.$vwProductPayload<ExtArgs>
        fields: Prisma.vwProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vwProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vwProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProductPayload>
          }
          findFirst: {
            args: Prisma.vwProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vwProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProductPayload>
          }
          findMany: {
            args: Prisma.vwProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProductPayload>[]
          }
          create: {
            args: Prisma.vwProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProductPayload>
          }
          createMany: {
            args: Prisma.vwProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.vwProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProductPayload>
          }
          update: {
            args: Prisma.vwProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProductPayload>
          }
          deleteMany: {
            args: Prisma.vwProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vwProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.vwProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProductPayload>
          }
          aggregate: {
            args: Prisma.VwProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVwProduct>
          }
          groupBy: {
            args: Prisma.vwProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<VwProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.vwProductCountArgs<ExtArgs>
            result: $Utils.Optional<VwProductCountAggregateOutputType> | number
          }
        }
      }
      vwUnit: {
        payload: Prisma.$vwUnitPayload<ExtArgs>
        fields: Prisma.vwUnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vwUnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwUnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vwUnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwUnitPayload>
          }
          findFirst: {
            args: Prisma.vwUnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwUnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vwUnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwUnitPayload>
          }
          findMany: {
            args: Prisma.vwUnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwUnitPayload>[]
          }
          create: {
            args: Prisma.vwUnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwUnitPayload>
          }
          createMany: {
            args: Prisma.vwUnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.vwUnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwUnitPayload>
          }
          update: {
            args: Prisma.vwUnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwUnitPayload>
          }
          deleteMany: {
            args: Prisma.vwUnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vwUnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.vwUnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwUnitPayload>
          }
          aggregate: {
            args: Prisma.VwUnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVwUnit>
          }
          groupBy: {
            args: Prisma.vwUnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<VwUnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.vwUnitCountArgs<ExtArgs>
            result: $Utils.Optional<VwUnitCountAggregateOutputType> | number
          }
        }
      }
      vwProductGroup: {
        payload: Prisma.$vwProductGroupPayload<ExtArgs>
        fields: Prisma.vwProductGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vwProductGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProductGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vwProductGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProductGroupPayload>
          }
          findFirst: {
            args: Prisma.vwProductGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProductGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vwProductGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProductGroupPayload>
          }
          findMany: {
            args: Prisma.vwProductGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProductGroupPayload>[]
          }
          create: {
            args: Prisma.vwProductGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProductGroupPayload>
          }
          createMany: {
            args: Prisma.vwProductGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.vwProductGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProductGroupPayload>
          }
          update: {
            args: Prisma.vwProductGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProductGroupPayload>
          }
          deleteMany: {
            args: Prisma.vwProductGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vwProductGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.vwProductGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vwProductGroupPayload>
          }
          aggregate: {
            args: Prisma.VwProductGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVwProductGroup>
          }
          groupBy: {
            args: Prisma.vwProductGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<VwProductGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.vwProductGroupCountArgs<ExtArgs>
            result: $Utils.Optional<VwProductGroupCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    process?: ProcessOmit
    processActivity?: ProcessActivityOmit
    processAssign?: ProcessAssignOmit
    vwPRO_2?: vwPRO_2Omit
    vwProcess?: vwProcessOmit
    vwProcessActivity?: vwProcessActivityOmit
    vwProcessAssign2All?: vwProcessAssign2AllOmit
    vwProcessGroup?: vwProcessGroupOmit
    vwProduct?: vwProductOmit
    vwUnit?: vwUnitOmit
    vwProductGroup?: vwProductGroupOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProcessCountOutputType
   */

  export type ProcessCountOutputType = {
    ProcessAssign: number
  }

  export type ProcessCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProcessAssign?: boolean | ProcessCountOutputTypeCountProcessAssignArgs
  }

  // Custom InputTypes
  /**
   * ProcessCountOutputType without action
   */
  export type ProcessCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessCountOutputType
     */
    select?: ProcessCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProcessCountOutputType without action
   */
  export type ProcessCountOutputTypeCountProcessAssignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessAssignWhereInput
  }


  /**
   * Count Type ProcessAssignCountOutputType
   */

  export type ProcessAssignCountOutputType = {
    ProcessActivity: number
  }

  export type ProcessAssignCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProcessActivity?: boolean | ProcessAssignCountOutputTypeCountProcessActivityArgs
  }

  // Custom InputTypes
  /**
   * ProcessAssignCountOutputType without action
   */
  export type ProcessAssignCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessAssignCountOutputType
     */
    select?: ProcessAssignCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProcessAssignCountOutputType without action
   */
  export type ProcessAssignCountOutputTypeCountProcessActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessActivityWhereInput
  }


  /**
   * Count Type VwPRO_2CountOutputType
   */

  export type VwPRO_2CountOutputType = {
    vwUnit: number
  }

  export type VwPRO_2CountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vwUnit?: boolean | VwPRO_2CountOutputTypeCountVwUnitArgs
  }

  // Custom InputTypes
  /**
   * VwPRO_2CountOutputType without action
   */
  export type VwPRO_2CountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VwPRO_2CountOutputType
     */
    select?: VwPRO_2CountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VwPRO_2CountOutputType without action
   */
  export type VwPRO_2CountOutputTypeCountVwUnitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vwUnitWhereInput
  }


  /**
   * Count Type VwProcessCountOutputType
   */

  export type VwProcessCountOutputType = {
    vwProcessAssign: number
  }

  export type VwProcessCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vwProcessAssign?: boolean | VwProcessCountOutputTypeCountVwProcessAssignArgs
  }

  // Custom InputTypes
  /**
   * VwProcessCountOutputType without action
   */
  export type VwProcessCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VwProcessCountOutputType
     */
    select?: VwProcessCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VwProcessCountOutputType without action
   */
  export type VwProcessCountOutputTypeCountVwProcessAssignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vwProcessAssign2AllWhereInput
  }


  /**
   * Count Type VwProcessAssign2AllCountOutputType
   */

  export type VwProcessAssign2AllCountOutputType = {
    vwProcessActivity: number
  }

  export type VwProcessAssign2AllCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vwProcessActivity?: boolean | VwProcessAssign2AllCountOutputTypeCountVwProcessActivityArgs
  }

  // Custom InputTypes
  /**
   * VwProcessAssign2AllCountOutputType without action
   */
  export type VwProcessAssign2AllCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VwProcessAssign2AllCountOutputType
     */
    select?: VwProcessAssign2AllCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VwProcessAssign2AllCountOutputType without action
   */
  export type VwProcessAssign2AllCountOutputTypeCountVwProcessActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vwProcessActivityWhereInput
  }


  /**
   * Count Type VwProductCountOutputType
   */

  export type VwProductCountOutputType = {
    vwUnit: number
  }

  export type VwProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vwUnit?: boolean | VwProductCountOutputTypeCountVwUnitArgs
  }

  // Custom InputTypes
  /**
   * VwProductCountOutputType without action
   */
  export type VwProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VwProductCountOutputType
     */
    select?: VwProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VwProductCountOutputType without action
   */
  export type VwProductCountOutputTypeCountVwUnitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vwUnitWhereInput
  }


  /**
   * Count Type VwUnitCountOutputType
   */

  export type VwUnitCountOutputType = {
    vwProcess: number
  }

  export type VwUnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vwProcess?: boolean | VwUnitCountOutputTypeCountVwProcessArgs
  }

  // Custom InputTypes
  /**
   * VwUnitCountOutputType without action
   */
  export type VwUnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VwUnitCountOutputType
     */
    select?: VwUnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VwUnitCountOutputType without action
   */
  export type VwUnitCountOutputTypeCountVwProcessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vwProcessWhereInput
  }


  /**
   * Count Type VwProductGroupCountOutputType
   */

  export type VwProductGroupCountOutputType = {
    vwProduct: number
  }

  export type VwProductGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vwProduct?: boolean | VwProductGroupCountOutputTypeCountVwProductArgs
  }

  // Custom InputTypes
  /**
   * VwProductGroupCountOutputType without action
   */
  export type VwProductGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VwProductGroupCountOutputType
     */
    select?: VwProductGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VwProductGroupCountOutputType without action
   */
  export type VwProductGroupCountOutputTypeCountVwProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vwProductWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Process
   */

  export type AggregateProcess = {
    _count: ProcessCountAggregateOutputType | null
    _avg: ProcessAvgAggregateOutputType | null
    _sum: ProcessSumAggregateOutputType | null
    _min: ProcessMinAggregateOutputType | null
    _max: ProcessMaxAggregateOutputType | null
  }

  export type ProcessAvgAggregateOutputType = {
    ID: number | null
    UnitID: number | null
    MasterProcessID: number | null
    Status: number | null
  }

  export type ProcessSumAggregateOutputType = {
    ID: number | null
    UnitID: number | null
    MasterProcessID: number | null
    Status: number | null
  }

  export type ProcessMinAggregateOutputType = {
    ID: number | null
    UnitID: number | null
    MasterProcessID: number | null
    Status: number | null
    PlanStartDate: Date | null
    PlanEndDate: Date | null
    ActualStartDate: Date | null
    ActualEndDate: Date | null
    IsHold: boolean | null
    HoldDate: Date | null
    Created: Date | null
    CreatedBy: string | null
    LastModified: Date | null
    LastModifiedBy: string | null
  }

  export type ProcessMaxAggregateOutputType = {
    ID: number | null
    UnitID: number | null
    MasterProcessID: number | null
    Status: number | null
    PlanStartDate: Date | null
    PlanEndDate: Date | null
    ActualStartDate: Date | null
    ActualEndDate: Date | null
    IsHold: boolean | null
    HoldDate: Date | null
    Created: Date | null
    CreatedBy: string | null
    LastModified: Date | null
    LastModifiedBy: string | null
  }

  export type ProcessCountAggregateOutputType = {
    ID: number
    UnitID: number
    MasterProcessID: number
    Status: number
    PlanStartDate: number
    PlanEndDate: number
    ActualStartDate: number
    ActualEndDate: number
    IsHold: number
    HoldDate: number
    Created: number
    CreatedBy: number
    LastModified: number
    LastModifiedBy: number
    _all: number
  }


  export type ProcessAvgAggregateInputType = {
    ID?: true
    UnitID?: true
    MasterProcessID?: true
    Status?: true
  }

  export type ProcessSumAggregateInputType = {
    ID?: true
    UnitID?: true
    MasterProcessID?: true
    Status?: true
  }

  export type ProcessMinAggregateInputType = {
    ID?: true
    UnitID?: true
    MasterProcessID?: true
    Status?: true
    PlanStartDate?: true
    PlanEndDate?: true
    ActualStartDate?: true
    ActualEndDate?: true
    IsHold?: true
    HoldDate?: true
    Created?: true
    CreatedBy?: true
    LastModified?: true
    LastModifiedBy?: true
  }

  export type ProcessMaxAggregateInputType = {
    ID?: true
    UnitID?: true
    MasterProcessID?: true
    Status?: true
    PlanStartDate?: true
    PlanEndDate?: true
    ActualStartDate?: true
    ActualEndDate?: true
    IsHold?: true
    HoldDate?: true
    Created?: true
    CreatedBy?: true
    LastModified?: true
    LastModifiedBy?: true
  }

  export type ProcessCountAggregateInputType = {
    ID?: true
    UnitID?: true
    MasterProcessID?: true
    Status?: true
    PlanStartDate?: true
    PlanEndDate?: true
    ActualStartDate?: true
    ActualEndDate?: true
    IsHold?: true
    HoldDate?: true
    Created?: true
    CreatedBy?: true
    LastModified?: true
    LastModifiedBy?: true
    _all?: true
  }

  export type ProcessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Process to aggregate.
     */
    where?: ProcessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Processes to fetch.
     */
    orderBy?: ProcessOrderByWithRelationInput | ProcessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProcessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Processes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Processes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Processes
    **/
    _count?: true | ProcessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProcessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProcessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProcessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProcessMaxAggregateInputType
  }

  export type GetProcessAggregateType<T extends ProcessAggregateArgs> = {
        [P in keyof T & keyof AggregateProcess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProcess[P]>
      : GetScalarType<T[P], AggregateProcess[P]>
  }




  export type ProcessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessWhereInput
    orderBy?: ProcessOrderByWithAggregationInput | ProcessOrderByWithAggregationInput[]
    by: ProcessScalarFieldEnum[] | ProcessScalarFieldEnum
    having?: ProcessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProcessCountAggregateInputType | true
    _avg?: ProcessAvgAggregateInputType
    _sum?: ProcessSumAggregateInputType
    _min?: ProcessMinAggregateInputType
    _max?: ProcessMaxAggregateInputType
  }

  export type ProcessGroupByOutputType = {
    ID: number
    UnitID: number
    MasterProcessID: number
    Status: number
    PlanStartDate: Date
    PlanEndDate: Date | null
    ActualStartDate: Date | null
    ActualEndDate: Date | null
    IsHold: boolean
    HoldDate: Date | null
    Created: Date
    CreatedBy: string
    LastModified: Date
    LastModifiedBy: string
    _count: ProcessCountAggregateOutputType | null
    _avg: ProcessAvgAggregateOutputType | null
    _sum: ProcessSumAggregateOutputType | null
    _min: ProcessMinAggregateOutputType | null
    _max: ProcessMaxAggregateOutputType | null
  }

  type GetProcessGroupByPayload<T extends ProcessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProcessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProcessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProcessGroupByOutputType[P]>
            : GetScalarType<T[P], ProcessGroupByOutputType[P]>
        }
      >
    >


  export type ProcessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    UnitID?: boolean
    MasterProcessID?: boolean
    Status?: boolean
    PlanStartDate?: boolean
    PlanEndDate?: boolean
    ActualStartDate?: boolean
    ActualEndDate?: boolean
    IsHold?: boolean
    HoldDate?: boolean
    Created?: boolean
    CreatedBy?: boolean
    LastModified?: boolean
    LastModifiedBy?: boolean
    ProcessAssign?: boolean | Process$ProcessAssignArgs<ExtArgs>
    _count?: boolean | ProcessCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["process"]>



  export type ProcessSelectScalar = {
    ID?: boolean
    UnitID?: boolean
    MasterProcessID?: boolean
    Status?: boolean
    PlanStartDate?: boolean
    PlanEndDate?: boolean
    ActualStartDate?: boolean
    ActualEndDate?: boolean
    IsHold?: boolean
    HoldDate?: boolean
    Created?: boolean
    CreatedBy?: boolean
    LastModified?: boolean
    LastModifiedBy?: boolean
  }

  export type ProcessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "UnitID" | "MasterProcessID" | "Status" | "PlanStartDate" | "PlanEndDate" | "ActualStartDate" | "ActualEndDate" | "IsHold" | "HoldDate" | "Created" | "CreatedBy" | "LastModified" | "LastModifiedBy", ExtArgs["result"]["process"]>
  export type ProcessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProcessAssign?: boolean | Process$ProcessAssignArgs<ExtArgs>
    _count?: boolean | ProcessCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProcessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Process"
    objects: {
      ProcessAssign: Prisma.$ProcessAssignPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      UnitID: number
      MasterProcessID: number
      Status: number
      PlanStartDate: Date
      PlanEndDate: Date | null
      ActualStartDate: Date | null
      ActualEndDate: Date | null
      IsHold: boolean
      HoldDate: Date | null
      Created: Date
      CreatedBy: string
      LastModified: Date
      LastModifiedBy: string
    }, ExtArgs["result"]["process"]>
    composites: {}
  }

  type ProcessGetPayload<S extends boolean | null | undefined | ProcessDefaultArgs> = $Result.GetResult<Prisma.$ProcessPayload, S>

  type ProcessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProcessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProcessCountAggregateInputType | true
    }

  export interface ProcessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Process'], meta: { name: 'Process' } }
    /**
     * Find zero or one Process that matches the filter.
     * @param {ProcessFindUniqueArgs} args - Arguments to find a Process
     * @example
     * // Get one Process
     * const process = await prisma.process.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProcessFindUniqueArgs>(args: SelectSubset<T, ProcessFindUniqueArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Process that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProcessFindUniqueOrThrowArgs} args - Arguments to find a Process
     * @example
     * // Get one Process
     * const process = await prisma.process.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProcessFindUniqueOrThrowArgs>(args: SelectSubset<T, ProcessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Process that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessFindFirstArgs} args - Arguments to find a Process
     * @example
     * // Get one Process
     * const process = await prisma.process.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProcessFindFirstArgs>(args?: SelectSubset<T, ProcessFindFirstArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Process that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessFindFirstOrThrowArgs} args - Arguments to find a Process
     * @example
     * // Get one Process
     * const process = await prisma.process.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProcessFindFirstOrThrowArgs>(args?: SelectSubset<T, ProcessFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Processes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Processes
     * const processes = await prisma.process.findMany()
     * 
     * // Get first 10 Processes
     * const processes = await prisma.process.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const processWithIDOnly = await prisma.process.findMany({ select: { ID: true } })
     * 
     */
    findMany<T extends ProcessFindManyArgs>(args?: SelectSubset<T, ProcessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Process.
     * @param {ProcessCreateArgs} args - Arguments to create a Process.
     * @example
     * // Create one Process
     * const Process = await prisma.process.create({
     *   data: {
     *     // ... data to create a Process
     *   }
     * })
     * 
     */
    create<T extends ProcessCreateArgs>(args: SelectSubset<T, ProcessCreateArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Processes.
     * @param {ProcessCreateManyArgs} args - Arguments to create many Processes.
     * @example
     * // Create many Processes
     * const process = await prisma.process.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProcessCreateManyArgs>(args?: SelectSubset<T, ProcessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Process.
     * @param {ProcessDeleteArgs} args - Arguments to delete one Process.
     * @example
     * // Delete one Process
     * const Process = await prisma.process.delete({
     *   where: {
     *     // ... filter to delete one Process
     *   }
     * })
     * 
     */
    delete<T extends ProcessDeleteArgs>(args: SelectSubset<T, ProcessDeleteArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Process.
     * @param {ProcessUpdateArgs} args - Arguments to update one Process.
     * @example
     * // Update one Process
     * const process = await prisma.process.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProcessUpdateArgs>(args: SelectSubset<T, ProcessUpdateArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Processes.
     * @param {ProcessDeleteManyArgs} args - Arguments to filter Processes to delete.
     * @example
     * // Delete a few Processes
     * const { count } = await prisma.process.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProcessDeleteManyArgs>(args?: SelectSubset<T, ProcessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Processes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Processes
     * const process = await prisma.process.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProcessUpdateManyArgs>(args: SelectSubset<T, ProcessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Process.
     * @param {ProcessUpsertArgs} args - Arguments to update or create a Process.
     * @example
     * // Update or create a Process
     * const process = await prisma.process.upsert({
     *   create: {
     *     // ... data to create a Process
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Process we want to update
     *   }
     * })
     */
    upsert<T extends ProcessUpsertArgs>(args: SelectSubset<T, ProcessUpsertArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Processes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessCountArgs} args - Arguments to filter Processes to count.
     * @example
     * // Count the number of Processes
     * const count = await prisma.process.count({
     *   where: {
     *     // ... the filter for the Processes we want to count
     *   }
     * })
    **/
    count<T extends ProcessCountArgs>(
      args?: Subset<T, ProcessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProcessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Process.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProcessAggregateArgs>(args: Subset<T, ProcessAggregateArgs>): Prisma.PrismaPromise<GetProcessAggregateType<T>>

    /**
     * Group by Process.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProcessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProcessGroupByArgs['orderBy'] }
        : { orderBy?: ProcessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProcessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Process model
   */
  readonly fields: ProcessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Process.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProcessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ProcessAssign<T extends Process$ProcessAssignArgs<ExtArgs> = {}>(args?: Subset<T, Process$ProcessAssignArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessAssignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Process model
   */
  interface ProcessFieldRefs {
    readonly ID: FieldRef<"Process", 'Int'>
    readonly UnitID: FieldRef<"Process", 'Int'>
    readonly MasterProcessID: FieldRef<"Process", 'Int'>
    readonly Status: FieldRef<"Process", 'Int'>
    readonly PlanStartDate: FieldRef<"Process", 'DateTime'>
    readonly PlanEndDate: FieldRef<"Process", 'DateTime'>
    readonly ActualStartDate: FieldRef<"Process", 'DateTime'>
    readonly ActualEndDate: FieldRef<"Process", 'DateTime'>
    readonly IsHold: FieldRef<"Process", 'Boolean'>
    readonly HoldDate: FieldRef<"Process", 'DateTime'>
    readonly Created: FieldRef<"Process", 'DateTime'>
    readonly CreatedBy: FieldRef<"Process", 'String'>
    readonly LastModified: FieldRef<"Process", 'DateTime'>
    readonly LastModifiedBy: FieldRef<"Process", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Process findUnique
   */
  export type ProcessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    /**
     * Filter, which Process to fetch.
     */
    where: ProcessWhereUniqueInput
  }

  /**
   * Process findUniqueOrThrow
   */
  export type ProcessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    /**
     * Filter, which Process to fetch.
     */
    where: ProcessWhereUniqueInput
  }

  /**
   * Process findFirst
   */
  export type ProcessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    /**
     * Filter, which Process to fetch.
     */
    where?: ProcessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Processes to fetch.
     */
    orderBy?: ProcessOrderByWithRelationInput | ProcessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Processes.
     */
    cursor?: ProcessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Processes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Processes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Processes.
     */
    distinct?: ProcessScalarFieldEnum | ProcessScalarFieldEnum[]
  }

  /**
   * Process findFirstOrThrow
   */
  export type ProcessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    /**
     * Filter, which Process to fetch.
     */
    where?: ProcessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Processes to fetch.
     */
    orderBy?: ProcessOrderByWithRelationInput | ProcessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Processes.
     */
    cursor?: ProcessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Processes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Processes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Processes.
     */
    distinct?: ProcessScalarFieldEnum | ProcessScalarFieldEnum[]
  }

  /**
   * Process findMany
   */
  export type ProcessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    /**
     * Filter, which Processes to fetch.
     */
    where?: ProcessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Processes to fetch.
     */
    orderBy?: ProcessOrderByWithRelationInput | ProcessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Processes.
     */
    cursor?: ProcessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Processes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Processes.
     */
    skip?: number
    distinct?: ProcessScalarFieldEnum | ProcessScalarFieldEnum[]
  }

  /**
   * Process create
   */
  export type ProcessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    /**
     * The data needed to create a Process.
     */
    data: XOR<ProcessCreateInput, ProcessUncheckedCreateInput>
  }

  /**
   * Process createMany
   */
  export type ProcessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Processes.
     */
    data: ProcessCreateManyInput | ProcessCreateManyInput[]
  }

  /**
   * Process update
   */
  export type ProcessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    /**
     * The data needed to update a Process.
     */
    data: XOR<ProcessUpdateInput, ProcessUncheckedUpdateInput>
    /**
     * Choose, which Process to update.
     */
    where: ProcessWhereUniqueInput
  }

  /**
   * Process updateMany
   */
  export type ProcessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Processes.
     */
    data: XOR<ProcessUpdateManyMutationInput, ProcessUncheckedUpdateManyInput>
    /**
     * Filter which Processes to update
     */
    where?: ProcessWhereInput
    /**
     * Limit how many Processes to update.
     */
    limit?: number
  }

  /**
   * Process upsert
   */
  export type ProcessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    /**
     * The filter to search for the Process to update in case it exists.
     */
    where: ProcessWhereUniqueInput
    /**
     * In case the Process found by the `where` argument doesn't exist, create a new Process with this data.
     */
    create: XOR<ProcessCreateInput, ProcessUncheckedCreateInput>
    /**
     * In case the Process was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProcessUpdateInput, ProcessUncheckedUpdateInput>
  }

  /**
   * Process delete
   */
  export type ProcessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    /**
     * Filter which Process to delete.
     */
    where: ProcessWhereUniqueInput
  }

  /**
   * Process deleteMany
   */
  export type ProcessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Processes to delete
     */
    where?: ProcessWhereInput
    /**
     * Limit how many Processes to delete.
     */
    limit?: number
  }

  /**
   * Process.ProcessAssign
   */
  export type Process$ProcessAssignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessAssign
     */
    select?: ProcessAssignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessAssign
     */
    omit?: ProcessAssignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessAssignInclude<ExtArgs> | null
    where?: ProcessAssignWhereInput
    orderBy?: ProcessAssignOrderByWithRelationInput | ProcessAssignOrderByWithRelationInput[]
    cursor?: ProcessAssignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProcessAssignScalarFieldEnum | ProcessAssignScalarFieldEnum[]
  }

  /**
   * Process without action
   */
  export type ProcessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
  }


  /**
   * Model ProcessActivity
   */

  export type AggregateProcessActivity = {
    _count: ProcessActivityCountAggregateOutputType | null
    _avg: ProcessActivityAvgAggregateOutputType | null
    _sum: ProcessActivitySumAggregateOutputType | null
    _min: ProcessActivityMinAggregateOutputType | null
    _max: ProcessActivityMaxAggregateOutputType | null
  }

  export type ProcessActivityAvgAggregateOutputType = {
    ID: number | null
    ProcessAssignID: number | null
    Status: number | null
    ReasonPauseID: number | null
    ActualHours: Decimal | null
  }

  export type ProcessActivitySumAggregateOutputType = {
    ID: number | null
    ProcessAssignID: number | null
    Status: number | null
    ReasonPauseID: number | null
    ActualHours: Decimal | null
  }

  export type ProcessActivityMinAggregateOutputType = {
    ID: number | null
    ProcessAssignID: number | null
    Status: number | null
    ReasonPauseID: number | null
    ActivityDateTime: Date | null
    ActualHours: Decimal | null
    Created: Date | null
    CreatedBy: string | null
    LastModified: Date | null
    LastModifiedBy: string | null
  }

  export type ProcessActivityMaxAggregateOutputType = {
    ID: number | null
    ProcessAssignID: number | null
    Status: number | null
    ReasonPauseID: number | null
    ActivityDateTime: Date | null
    ActualHours: Decimal | null
    Created: Date | null
    CreatedBy: string | null
    LastModified: Date | null
    LastModifiedBy: string | null
  }

  export type ProcessActivityCountAggregateOutputType = {
    ID: number
    ProcessAssignID: number
    Status: number
    ReasonPauseID: number
    ActivityDateTime: number
    ActualHours: number
    Created: number
    CreatedBy: number
    LastModified: number
    LastModifiedBy: number
    _all: number
  }


  export type ProcessActivityAvgAggregateInputType = {
    ID?: true
    ProcessAssignID?: true
    Status?: true
    ReasonPauseID?: true
    ActualHours?: true
  }

  export type ProcessActivitySumAggregateInputType = {
    ID?: true
    ProcessAssignID?: true
    Status?: true
    ReasonPauseID?: true
    ActualHours?: true
  }

  export type ProcessActivityMinAggregateInputType = {
    ID?: true
    ProcessAssignID?: true
    Status?: true
    ReasonPauseID?: true
    ActivityDateTime?: true
    ActualHours?: true
    Created?: true
    CreatedBy?: true
    LastModified?: true
    LastModifiedBy?: true
  }

  export type ProcessActivityMaxAggregateInputType = {
    ID?: true
    ProcessAssignID?: true
    Status?: true
    ReasonPauseID?: true
    ActivityDateTime?: true
    ActualHours?: true
    Created?: true
    CreatedBy?: true
    LastModified?: true
    LastModifiedBy?: true
  }

  export type ProcessActivityCountAggregateInputType = {
    ID?: true
    ProcessAssignID?: true
    Status?: true
    ReasonPauseID?: true
    ActivityDateTime?: true
    ActualHours?: true
    Created?: true
    CreatedBy?: true
    LastModified?: true
    LastModifiedBy?: true
    _all?: true
  }

  export type ProcessActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProcessActivity to aggregate.
     */
    where?: ProcessActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessActivities to fetch.
     */
    orderBy?: ProcessActivityOrderByWithRelationInput | ProcessActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProcessActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProcessActivities
    **/
    _count?: true | ProcessActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProcessActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProcessActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProcessActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProcessActivityMaxAggregateInputType
  }

  export type GetProcessActivityAggregateType<T extends ProcessActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateProcessActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProcessActivity[P]>
      : GetScalarType<T[P], AggregateProcessActivity[P]>
  }




  export type ProcessActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessActivityWhereInput
    orderBy?: ProcessActivityOrderByWithAggregationInput | ProcessActivityOrderByWithAggregationInput[]
    by: ProcessActivityScalarFieldEnum[] | ProcessActivityScalarFieldEnum
    having?: ProcessActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProcessActivityCountAggregateInputType | true
    _avg?: ProcessActivityAvgAggregateInputType
    _sum?: ProcessActivitySumAggregateInputType
    _min?: ProcessActivityMinAggregateInputType
    _max?: ProcessActivityMaxAggregateInputType
  }

  export type ProcessActivityGroupByOutputType = {
    ID: number
    ProcessAssignID: number
    Status: number
    ReasonPauseID: number | null
    ActivityDateTime: Date
    ActualHours: Decimal | null
    Created: Date
    CreatedBy: string
    LastModified: Date
    LastModifiedBy: string
    _count: ProcessActivityCountAggregateOutputType | null
    _avg: ProcessActivityAvgAggregateOutputType | null
    _sum: ProcessActivitySumAggregateOutputType | null
    _min: ProcessActivityMinAggregateOutputType | null
    _max: ProcessActivityMaxAggregateOutputType | null
  }

  type GetProcessActivityGroupByPayload<T extends ProcessActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProcessActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProcessActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProcessActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ProcessActivityGroupByOutputType[P]>
        }
      >
    >


  export type ProcessActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    ProcessAssignID?: boolean
    Status?: boolean
    ReasonPauseID?: boolean
    ActivityDateTime?: boolean
    ActualHours?: boolean
    Created?: boolean
    CreatedBy?: boolean
    LastModified?: boolean
    LastModifiedBy?: boolean
    ProcessAssign?: boolean | ProcessAssignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["processActivity"]>



  export type ProcessActivitySelectScalar = {
    ID?: boolean
    ProcessAssignID?: boolean
    Status?: boolean
    ReasonPauseID?: boolean
    ActivityDateTime?: boolean
    ActualHours?: boolean
    Created?: boolean
    CreatedBy?: boolean
    LastModified?: boolean
    LastModifiedBy?: boolean
  }

  export type ProcessActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "ProcessAssignID" | "Status" | "ReasonPauseID" | "ActivityDateTime" | "ActualHours" | "Created" | "CreatedBy" | "LastModified" | "LastModifiedBy", ExtArgs["result"]["processActivity"]>
  export type ProcessActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProcessAssign?: boolean | ProcessAssignDefaultArgs<ExtArgs>
  }

  export type $ProcessActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProcessActivity"
    objects: {
      ProcessAssign: Prisma.$ProcessAssignPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      ProcessAssignID: number
      Status: number
      ReasonPauseID: number | null
      ActivityDateTime: Date
      ActualHours: Prisma.Decimal | null
      Created: Date
      CreatedBy: string
      LastModified: Date
      LastModifiedBy: string
    }, ExtArgs["result"]["processActivity"]>
    composites: {}
  }

  type ProcessActivityGetPayload<S extends boolean | null | undefined | ProcessActivityDefaultArgs> = $Result.GetResult<Prisma.$ProcessActivityPayload, S>

  type ProcessActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProcessActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProcessActivityCountAggregateInputType | true
    }

  export interface ProcessActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProcessActivity'], meta: { name: 'ProcessActivity' } }
    /**
     * Find zero or one ProcessActivity that matches the filter.
     * @param {ProcessActivityFindUniqueArgs} args - Arguments to find a ProcessActivity
     * @example
     * // Get one ProcessActivity
     * const processActivity = await prisma.processActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProcessActivityFindUniqueArgs>(args: SelectSubset<T, ProcessActivityFindUniqueArgs<ExtArgs>>): Prisma__ProcessActivityClient<$Result.GetResult<Prisma.$ProcessActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProcessActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProcessActivityFindUniqueOrThrowArgs} args - Arguments to find a ProcessActivity
     * @example
     * // Get one ProcessActivity
     * const processActivity = await prisma.processActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProcessActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, ProcessActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProcessActivityClient<$Result.GetResult<Prisma.$ProcessActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProcessActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessActivityFindFirstArgs} args - Arguments to find a ProcessActivity
     * @example
     * // Get one ProcessActivity
     * const processActivity = await prisma.processActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProcessActivityFindFirstArgs>(args?: SelectSubset<T, ProcessActivityFindFirstArgs<ExtArgs>>): Prisma__ProcessActivityClient<$Result.GetResult<Prisma.$ProcessActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProcessActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessActivityFindFirstOrThrowArgs} args - Arguments to find a ProcessActivity
     * @example
     * // Get one ProcessActivity
     * const processActivity = await prisma.processActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProcessActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, ProcessActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProcessActivityClient<$Result.GetResult<Prisma.$ProcessActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProcessActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProcessActivities
     * const processActivities = await prisma.processActivity.findMany()
     * 
     * // Get first 10 ProcessActivities
     * const processActivities = await prisma.processActivity.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const processActivityWithIDOnly = await prisma.processActivity.findMany({ select: { ID: true } })
     * 
     */
    findMany<T extends ProcessActivityFindManyArgs>(args?: SelectSubset<T, ProcessActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProcessActivity.
     * @param {ProcessActivityCreateArgs} args - Arguments to create a ProcessActivity.
     * @example
     * // Create one ProcessActivity
     * const ProcessActivity = await prisma.processActivity.create({
     *   data: {
     *     // ... data to create a ProcessActivity
     *   }
     * })
     * 
     */
    create<T extends ProcessActivityCreateArgs>(args: SelectSubset<T, ProcessActivityCreateArgs<ExtArgs>>): Prisma__ProcessActivityClient<$Result.GetResult<Prisma.$ProcessActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProcessActivities.
     * @param {ProcessActivityCreateManyArgs} args - Arguments to create many ProcessActivities.
     * @example
     * // Create many ProcessActivities
     * const processActivity = await prisma.processActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProcessActivityCreateManyArgs>(args?: SelectSubset<T, ProcessActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProcessActivity.
     * @param {ProcessActivityDeleteArgs} args - Arguments to delete one ProcessActivity.
     * @example
     * // Delete one ProcessActivity
     * const ProcessActivity = await prisma.processActivity.delete({
     *   where: {
     *     // ... filter to delete one ProcessActivity
     *   }
     * })
     * 
     */
    delete<T extends ProcessActivityDeleteArgs>(args: SelectSubset<T, ProcessActivityDeleteArgs<ExtArgs>>): Prisma__ProcessActivityClient<$Result.GetResult<Prisma.$ProcessActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProcessActivity.
     * @param {ProcessActivityUpdateArgs} args - Arguments to update one ProcessActivity.
     * @example
     * // Update one ProcessActivity
     * const processActivity = await prisma.processActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProcessActivityUpdateArgs>(args: SelectSubset<T, ProcessActivityUpdateArgs<ExtArgs>>): Prisma__ProcessActivityClient<$Result.GetResult<Prisma.$ProcessActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProcessActivities.
     * @param {ProcessActivityDeleteManyArgs} args - Arguments to filter ProcessActivities to delete.
     * @example
     * // Delete a few ProcessActivities
     * const { count } = await prisma.processActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProcessActivityDeleteManyArgs>(args?: SelectSubset<T, ProcessActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProcessActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProcessActivities
     * const processActivity = await prisma.processActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProcessActivityUpdateManyArgs>(args: SelectSubset<T, ProcessActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProcessActivity.
     * @param {ProcessActivityUpsertArgs} args - Arguments to update or create a ProcessActivity.
     * @example
     * // Update or create a ProcessActivity
     * const processActivity = await prisma.processActivity.upsert({
     *   create: {
     *     // ... data to create a ProcessActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProcessActivity we want to update
     *   }
     * })
     */
    upsert<T extends ProcessActivityUpsertArgs>(args: SelectSubset<T, ProcessActivityUpsertArgs<ExtArgs>>): Prisma__ProcessActivityClient<$Result.GetResult<Prisma.$ProcessActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProcessActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessActivityCountArgs} args - Arguments to filter ProcessActivities to count.
     * @example
     * // Count the number of ProcessActivities
     * const count = await prisma.processActivity.count({
     *   where: {
     *     // ... the filter for the ProcessActivities we want to count
     *   }
     * })
    **/
    count<T extends ProcessActivityCountArgs>(
      args?: Subset<T, ProcessActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProcessActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProcessActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProcessActivityAggregateArgs>(args: Subset<T, ProcessActivityAggregateArgs>): Prisma.PrismaPromise<GetProcessActivityAggregateType<T>>

    /**
     * Group by ProcessActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessActivityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProcessActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProcessActivityGroupByArgs['orderBy'] }
        : { orderBy?: ProcessActivityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProcessActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcessActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProcessActivity model
   */
  readonly fields: ProcessActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProcessActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProcessActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ProcessAssign<T extends ProcessAssignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProcessAssignDefaultArgs<ExtArgs>>): Prisma__ProcessAssignClient<$Result.GetResult<Prisma.$ProcessAssignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProcessActivity model
   */
  interface ProcessActivityFieldRefs {
    readonly ID: FieldRef<"ProcessActivity", 'Int'>
    readonly ProcessAssignID: FieldRef<"ProcessActivity", 'Int'>
    readonly Status: FieldRef<"ProcessActivity", 'Int'>
    readonly ReasonPauseID: FieldRef<"ProcessActivity", 'Int'>
    readonly ActivityDateTime: FieldRef<"ProcessActivity", 'DateTime'>
    readonly ActualHours: FieldRef<"ProcessActivity", 'Decimal'>
    readonly Created: FieldRef<"ProcessActivity", 'DateTime'>
    readonly CreatedBy: FieldRef<"ProcessActivity", 'String'>
    readonly LastModified: FieldRef<"ProcessActivity", 'DateTime'>
    readonly LastModifiedBy: FieldRef<"ProcessActivity", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProcessActivity findUnique
   */
  export type ProcessActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessActivity
     */
    select?: ProcessActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessActivity
     */
    omit?: ProcessActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessActivityInclude<ExtArgs> | null
    /**
     * Filter, which ProcessActivity to fetch.
     */
    where: ProcessActivityWhereUniqueInput
  }

  /**
   * ProcessActivity findUniqueOrThrow
   */
  export type ProcessActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessActivity
     */
    select?: ProcessActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessActivity
     */
    omit?: ProcessActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessActivityInclude<ExtArgs> | null
    /**
     * Filter, which ProcessActivity to fetch.
     */
    where: ProcessActivityWhereUniqueInput
  }

  /**
   * ProcessActivity findFirst
   */
  export type ProcessActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessActivity
     */
    select?: ProcessActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessActivity
     */
    omit?: ProcessActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessActivityInclude<ExtArgs> | null
    /**
     * Filter, which ProcessActivity to fetch.
     */
    where?: ProcessActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessActivities to fetch.
     */
    orderBy?: ProcessActivityOrderByWithRelationInput | ProcessActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProcessActivities.
     */
    cursor?: ProcessActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProcessActivities.
     */
    distinct?: ProcessActivityScalarFieldEnum | ProcessActivityScalarFieldEnum[]
  }

  /**
   * ProcessActivity findFirstOrThrow
   */
  export type ProcessActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessActivity
     */
    select?: ProcessActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessActivity
     */
    omit?: ProcessActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessActivityInclude<ExtArgs> | null
    /**
     * Filter, which ProcessActivity to fetch.
     */
    where?: ProcessActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessActivities to fetch.
     */
    orderBy?: ProcessActivityOrderByWithRelationInput | ProcessActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProcessActivities.
     */
    cursor?: ProcessActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProcessActivities.
     */
    distinct?: ProcessActivityScalarFieldEnum | ProcessActivityScalarFieldEnum[]
  }

  /**
   * ProcessActivity findMany
   */
  export type ProcessActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessActivity
     */
    select?: ProcessActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessActivity
     */
    omit?: ProcessActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessActivityInclude<ExtArgs> | null
    /**
     * Filter, which ProcessActivities to fetch.
     */
    where?: ProcessActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessActivities to fetch.
     */
    orderBy?: ProcessActivityOrderByWithRelationInput | ProcessActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProcessActivities.
     */
    cursor?: ProcessActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessActivities.
     */
    skip?: number
    distinct?: ProcessActivityScalarFieldEnum | ProcessActivityScalarFieldEnum[]
  }

  /**
   * ProcessActivity create
   */
  export type ProcessActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessActivity
     */
    select?: ProcessActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessActivity
     */
    omit?: ProcessActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a ProcessActivity.
     */
    data: XOR<ProcessActivityCreateInput, ProcessActivityUncheckedCreateInput>
  }

  /**
   * ProcessActivity createMany
   */
  export type ProcessActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProcessActivities.
     */
    data: ProcessActivityCreateManyInput | ProcessActivityCreateManyInput[]
  }

  /**
   * ProcessActivity update
   */
  export type ProcessActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessActivity
     */
    select?: ProcessActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessActivity
     */
    omit?: ProcessActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a ProcessActivity.
     */
    data: XOR<ProcessActivityUpdateInput, ProcessActivityUncheckedUpdateInput>
    /**
     * Choose, which ProcessActivity to update.
     */
    where: ProcessActivityWhereUniqueInput
  }

  /**
   * ProcessActivity updateMany
   */
  export type ProcessActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProcessActivities.
     */
    data: XOR<ProcessActivityUpdateManyMutationInput, ProcessActivityUncheckedUpdateManyInput>
    /**
     * Filter which ProcessActivities to update
     */
    where?: ProcessActivityWhereInput
    /**
     * Limit how many ProcessActivities to update.
     */
    limit?: number
  }

  /**
   * ProcessActivity upsert
   */
  export type ProcessActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessActivity
     */
    select?: ProcessActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessActivity
     */
    omit?: ProcessActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the ProcessActivity to update in case it exists.
     */
    where: ProcessActivityWhereUniqueInput
    /**
     * In case the ProcessActivity found by the `where` argument doesn't exist, create a new ProcessActivity with this data.
     */
    create: XOR<ProcessActivityCreateInput, ProcessActivityUncheckedCreateInput>
    /**
     * In case the ProcessActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProcessActivityUpdateInput, ProcessActivityUncheckedUpdateInput>
  }

  /**
   * ProcessActivity delete
   */
  export type ProcessActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessActivity
     */
    select?: ProcessActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessActivity
     */
    omit?: ProcessActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessActivityInclude<ExtArgs> | null
    /**
     * Filter which ProcessActivity to delete.
     */
    where: ProcessActivityWhereUniqueInput
  }

  /**
   * ProcessActivity deleteMany
   */
  export type ProcessActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProcessActivities to delete
     */
    where?: ProcessActivityWhereInput
    /**
     * Limit how many ProcessActivities to delete.
     */
    limit?: number
  }

  /**
   * ProcessActivity without action
   */
  export type ProcessActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessActivity
     */
    select?: ProcessActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessActivity
     */
    omit?: ProcessActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessActivityInclude<ExtArgs> | null
  }


  /**
   * Model ProcessAssign
   */

  export type AggregateProcessAssign = {
    _count: ProcessAssignCountAggregateOutputType | null
    _avg: ProcessAssignAvgAggregateOutputType | null
    _sum: ProcessAssignSumAggregateOutputType | null
    _min: ProcessAssignMinAggregateOutputType | null
    _max: ProcessAssignMaxAggregateOutputType | null
  }

  export type ProcessAssignAvgAggregateOutputType = {
    ID: number | null
    ProcessID: number | null
    Status: number | null
    Type: number | null
  }

  export type ProcessAssignSumAggregateOutputType = {
    ID: number | null
    ProcessID: number | null
    Status: number | null
    Type: number | null
  }

  export type ProcessAssignMinAggregateOutputType = {
    ID: number | null
    ProcessID: number | null
    UserID: string | null
    EmployeeNumber: string | null
    Status: number | null
    Type: number | null
    Created: Date | null
    CreatedBy: string | null
    LastModified: Date | null
    LastModifiedBy: string | null
    remark: string | null
  }

  export type ProcessAssignMaxAggregateOutputType = {
    ID: number | null
    ProcessID: number | null
    UserID: string | null
    EmployeeNumber: string | null
    Status: number | null
    Type: number | null
    Created: Date | null
    CreatedBy: string | null
    LastModified: Date | null
    LastModifiedBy: string | null
    remark: string | null
  }

  export type ProcessAssignCountAggregateOutputType = {
    ID: number
    ProcessID: number
    UserID: number
    EmployeeNumber: number
    Status: number
    Type: number
    Created: number
    CreatedBy: number
    LastModified: number
    LastModifiedBy: number
    remark: number
    _all: number
  }


  export type ProcessAssignAvgAggregateInputType = {
    ID?: true
    ProcessID?: true
    Status?: true
    Type?: true
  }

  export type ProcessAssignSumAggregateInputType = {
    ID?: true
    ProcessID?: true
    Status?: true
    Type?: true
  }

  export type ProcessAssignMinAggregateInputType = {
    ID?: true
    ProcessID?: true
    UserID?: true
    EmployeeNumber?: true
    Status?: true
    Type?: true
    Created?: true
    CreatedBy?: true
    LastModified?: true
    LastModifiedBy?: true
    remark?: true
  }

  export type ProcessAssignMaxAggregateInputType = {
    ID?: true
    ProcessID?: true
    UserID?: true
    EmployeeNumber?: true
    Status?: true
    Type?: true
    Created?: true
    CreatedBy?: true
    LastModified?: true
    LastModifiedBy?: true
    remark?: true
  }

  export type ProcessAssignCountAggregateInputType = {
    ID?: true
    ProcessID?: true
    UserID?: true
    EmployeeNumber?: true
    Status?: true
    Type?: true
    Created?: true
    CreatedBy?: true
    LastModified?: true
    LastModifiedBy?: true
    remark?: true
    _all?: true
  }

  export type ProcessAssignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProcessAssign to aggregate.
     */
    where?: ProcessAssignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessAssigns to fetch.
     */
    orderBy?: ProcessAssignOrderByWithRelationInput | ProcessAssignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProcessAssignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessAssigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessAssigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProcessAssigns
    **/
    _count?: true | ProcessAssignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProcessAssignAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProcessAssignSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProcessAssignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProcessAssignMaxAggregateInputType
  }

  export type GetProcessAssignAggregateType<T extends ProcessAssignAggregateArgs> = {
        [P in keyof T & keyof AggregateProcessAssign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProcessAssign[P]>
      : GetScalarType<T[P], AggregateProcessAssign[P]>
  }




  export type ProcessAssignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessAssignWhereInput
    orderBy?: ProcessAssignOrderByWithAggregationInput | ProcessAssignOrderByWithAggregationInput[]
    by: ProcessAssignScalarFieldEnum[] | ProcessAssignScalarFieldEnum
    having?: ProcessAssignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProcessAssignCountAggregateInputType | true
    _avg?: ProcessAssignAvgAggregateInputType
    _sum?: ProcessAssignSumAggregateInputType
    _min?: ProcessAssignMinAggregateInputType
    _max?: ProcessAssignMaxAggregateInputType
  }

  export type ProcessAssignGroupByOutputType = {
    ID: number
    ProcessID: number
    UserID: string
    EmployeeNumber: string | null
    Status: number
    Type: number | null
    Created: Date
    CreatedBy: string
    LastModified: Date
    LastModifiedBy: string
    remark: string | null
    _count: ProcessAssignCountAggregateOutputType | null
    _avg: ProcessAssignAvgAggregateOutputType | null
    _sum: ProcessAssignSumAggregateOutputType | null
    _min: ProcessAssignMinAggregateOutputType | null
    _max: ProcessAssignMaxAggregateOutputType | null
  }

  type GetProcessAssignGroupByPayload<T extends ProcessAssignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProcessAssignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProcessAssignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProcessAssignGroupByOutputType[P]>
            : GetScalarType<T[P], ProcessAssignGroupByOutputType[P]>
        }
      >
    >


  export type ProcessAssignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    ProcessID?: boolean
    UserID?: boolean
    EmployeeNumber?: boolean
    Status?: boolean
    Type?: boolean
    Created?: boolean
    CreatedBy?: boolean
    LastModified?: boolean
    LastModifiedBy?: boolean
    remark?: boolean
    ProcessActivity?: boolean | ProcessAssign$ProcessActivityArgs<ExtArgs>
    Process?: boolean | ProcessDefaultArgs<ExtArgs>
    _count?: boolean | ProcessAssignCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["processAssign"]>



  export type ProcessAssignSelectScalar = {
    ID?: boolean
    ProcessID?: boolean
    UserID?: boolean
    EmployeeNumber?: boolean
    Status?: boolean
    Type?: boolean
    Created?: boolean
    CreatedBy?: boolean
    LastModified?: boolean
    LastModifiedBy?: boolean
    remark?: boolean
  }

  export type ProcessAssignOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "ProcessID" | "UserID" | "EmployeeNumber" | "Status" | "Type" | "Created" | "CreatedBy" | "LastModified" | "LastModifiedBy" | "remark", ExtArgs["result"]["processAssign"]>
  export type ProcessAssignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProcessActivity?: boolean | ProcessAssign$ProcessActivityArgs<ExtArgs>
    Process?: boolean | ProcessDefaultArgs<ExtArgs>
    _count?: boolean | ProcessAssignCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProcessAssignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProcessAssign"
    objects: {
      ProcessActivity: Prisma.$ProcessActivityPayload<ExtArgs>[]
      Process: Prisma.$ProcessPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      ProcessID: number
      UserID: string
      EmployeeNumber: string | null
      Status: number
      Type: number | null
      Created: Date
      CreatedBy: string
      LastModified: Date
      LastModifiedBy: string
      remark: string | null
    }, ExtArgs["result"]["processAssign"]>
    composites: {}
  }

  type ProcessAssignGetPayload<S extends boolean | null | undefined | ProcessAssignDefaultArgs> = $Result.GetResult<Prisma.$ProcessAssignPayload, S>

  type ProcessAssignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProcessAssignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProcessAssignCountAggregateInputType | true
    }

  export interface ProcessAssignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProcessAssign'], meta: { name: 'ProcessAssign' } }
    /**
     * Find zero or one ProcessAssign that matches the filter.
     * @param {ProcessAssignFindUniqueArgs} args - Arguments to find a ProcessAssign
     * @example
     * // Get one ProcessAssign
     * const processAssign = await prisma.processAssign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProcessAssignFindUniqueArgs>(args: SelectSubset<T, ProcessAssignFindUniqueArgs<ExtArgs>>): Prisma__ProcessAssignClient<$Result.GetResult<Prisma.$ProcessAssignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProcessAssign that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProcessAssignFindUniqueOrThrowArgs} args - Arguments to find a ProcessAssign
     * @example
     * // Get one ProcessAssign
     * const processAssign = await prisma.processAssign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProcessAssignFindUniqueOrThrowArgs>(args: SelectSubset<T, ProcessAssignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProcessAssignClient<$Result.GetResult<Prisma.$ProcessAssignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProcessAssign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessAssignFindFirstArgs} args - Arguments to find a ProcessAssign
     * @example
     * // Get one ProcessAssign
     * const processAssign = await prisma.processAssign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProcessAssignFindFirstArgs>(args?: SelectSubset<T, ProcessAssignFindFirstArgs<ExtArgs>>): Prisma__ProcessAssignClient<$Result.GetResult<Prisma.$ProcessAssignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProcessAssign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessAssignFindFirstOrThrowArgs} args - Arguments to find a ProcessAssign
     * @example
     * // Get one ProcessAssign
     * const processAssign = await prisma.processAssign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProcessAssignFindFirstOrThrowArgs>(args?: SelectSubset<T, ProcessAssignFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProcessAssignClient<$Result.GetResult<Prisma.$ProcessAssignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProcessAssigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessAssignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProcessAssigns
     * const processAssigns = await prisma.processAssign.findMany()
     * 
     * // Get first 10 ProcessAssigns
     * const processAssigns = await prisma.processAssign.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const processAssignWithIDOnly = await prisma.processAssign.findMany({ select: { ID: true } })
     * 
     */
    findMany<T extends ProcessAssignFindManyArgs>(args?: SelectSubset<T, ProcessAssignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessAssignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProcessAssign.
     * @param {ProcessAssignCreateArgs} args - Arguments to create a ProcessAssign.
     * @example
     * // Create one ProcessAssign
     * const ProcessAssign = await prisma.processAssign.create({
     *   data: {
     *     // ... data to create a ProcessAssign
     *   }
     * })
     * 
     */
    create<T extends ProcessAssignCreateArgs>(args: SelectSubset<T, ProcessAssignCreateArgs<ExtArgs>>): Prisma__ProcessAssignClient<$Result.GetResult<Prisma.$ProcessAssignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProcessAssigns.
     * @param {ProcessAssignCreateManyArgs} args - Arguments to create many ProcessAssigns.
     * @example
     * // Create many ProcessAssigns
     * const processAssign = await prisma.processAssign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProcessAssignCreateManyArgs>(args?: SelectSubset<T, ProcessAssignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProcessAssign.
     * @param {ProcessAssignDeleteArgs} args - Arguments to delete one ProcessAssign.
     * @example
     * // Delete one ProcessAssign
     * const ProcessAssign = await prisma.processAssign.delete({
     *   where: {
     *     // ... filter to delete one ProcessAssign
     *   }
     * })
     * 
     */
    delete<T extends ProcessAssignDeleteArgs>(args: SelectSubset<T, ProcessAssignDeleteArgs<ExtArgs>>): Prisma__ProcessAssignClient<$Result.GetResult<Prisma.$ProcessAssignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProcessAssign.
     * @param {ProcessAssignUpdateArgs} args - Arguments to update one ProcessAssign.
     * @example
     * // Update one ProcessAssign
     * const processAssign = await prisma.processAssign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProcessAssignUpdateArgs>(args: SelectSubset<T, ProcessAssignUpdateArgs<ExtArgs>>): Prisma__ProcessAssignClient<$Result.GetResult<Prisma.$ProcessAssignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProcessAssigns.
     * @param {ProcessAssignDeleteManyArgs} args - Arguments to filter ProcessAssigns to delete.
     * @example
     * // Delete a few ProcessAssigns
     * const { count } = await prisma.processAssign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProcessAssignDeleteManyArgs>(args?: SelectSubset<T, ProcessAssignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProcessAssigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessAssignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProcessAssigns
     * const processAssign = await prisma.processAssign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProcessAssignUpdateManyArgs>(args: SelectSubset<T, ProcessAssignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProcessAssign.
     * @param {ProcessAssignUpsertArgs} args - Arguments to update or create a ProcessAssign.
     * @example
     * // Update or create a ProcessAssign
     * const processAssign = await prisma.processAssign.upsert({
     *   create: {
     *     // ... data to create a ProcessAssign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProcessAssign we want to update
     *   }
     * })
     */
    upsert<T extends ProcessAssignUpsertArgs>(args: SelectSubset<T, ProcessAssignUpsertArgs<ExtArgs>>): Prisma__ProcessAssignClient<$Result.GetResult<Prisma.$ProcessAssignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProcessAssigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessAssignCountArgs} args - Arguments to filter ProcessAssigns to count.
     * @example
     * // Count the number of ProcessAssigns
     * const count = await prisma.processAssign.count({
     *   where: {
     *     // ... the filter for the ProcessAssigns we want to count
     *   }
     * })
    **/
    count<T extends ProcessAssignCountArgs>(
      args?: Subset<T, ProcessAssignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProcessAssignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProcessAssign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessAssignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProcessAssignAggregateArgs>(args: Subset<T, ProcessAssignAggregateArgs>): Prisma.PrismaPromise<GetProcessAssignAggregateType<T>>

    /**
     * Group by ProcessAssign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessAssignGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProcessAssignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProcessAssignGroupByArgs['orderBy'] }
        : { orderBy?: ProcessAssignGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProcessAssignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcessAssignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProcessAssign model
   */
  readonly fields: ProcessAssignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProcessAssign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProcessAssignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ProcessActivity<T extends ProcessAssign$ProcessActivityArgs<ExtArgs> = {}>(args?: Subset<T, ProcessAssign$ProcessActivityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Process<T extends ProcessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProcessDefaultArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProcessAssign model
   */
  interface ProcessAssignFieldRefs {
    readonly ID: FieldRef<"ProcessAssign", 'Int'>
    readonly ProcessID: FieldRef<"ProcessAssign", 'Int'>
    readonly UserID: FieldRef<"ProcessAssign", 'String'>
    readonly EmployeeNumber: FieldRef<"ProcessAssign", 'String'>
    readonly Status: FieldRef<"ProcessAssign", 'Int'>
    readonly Type: FieldRef<"ProcessAssign", 'Int'>
    readonly Created: FieldRef<"ProcessAssign", 'DateTime'>
    readonly CreatedBy: FieldRef<"ProcessAssign", 'String'>
    readonly LastModified: FieldRef<"ProcessAssign", 'DateTime'>
    readonly LastModifiedBy: FieldRef<"ProcessAssign", 'String'>
    readonly remark: FieldRef<"ProcessAssign", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProcessAssign findUnique
   */
  export type ProcessAssignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessAssign
     */
    select?: ProcessAssignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessAssign
     */
    omit?: ProcessAssignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessAssignInclude<ExtArgs> | null
    /**
     * Filter, which ProcessAssign to fetch.
     */
    where: ProcessAssignWhereUniqueInput
  }

  /**
   * ProcessAssign findUniqueOrThrow
   */
  export type ProcessAssignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessAssign
     */
    select?: ProcessAssignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessAssign
     */
    omit?: ProcessAssignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessAssignInclude<ExtArgs> | null
    /**
     * Filter, which ProcessAssign to fetch.
     */
    where: ProcessAssignWhereUniqueInput
  }

  /**
   * ProcessAssign findFirst
   */
  export type ProcessAssignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessAssign
     */
    select?: ProcessAssignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessAssign
     */
    omit?: ProcessAssignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessAssignInclude<ExtArgs> | null
    /**
     * Filter, which ProcessAssign to fetch.
     */
    where?: ProcessAssignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessAssigns to fetch.
     */
    orderBy?: ProcessAssignOrderByWithRelationInput | ProcessAssignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProcessAssigns.
     */
    cursor?: ProcessAssignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessAssigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessAssigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProcessAssigns.
     */
    distinct?: ProcessAssignScalarFieldEnum | ProcessAssignScalarFieldEnum[]
  }

  /**
   * ProcessAssign findFirstOrThrow
   */
  export type ProcessAssignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessAssign
     */
    select?: ProcessAssignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessAssign
     */
    omit?: ProcessAssignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessAssignInclude<ExtArgs> | null
    /**
     * Filter, which ProcessAssign to fetch.
     */
    where?: ProcessAssignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessAssigns to fetch.
     */
    orderBy?: ProcessAssignOrderByWithRelationInput | ProcessAssignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProcessAssigns.
     */
    cursor?: ProcessAssignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessAssigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessAssigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProcessAssigns.
     */
    distinct?: ProcessAssignScalarFieldEnum | ProcessAssignScalarFieldEnum[]
  }

  /**
   * ProcessAssign findMany
   */
  export type ProcessAssignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessAssign
     */
    select?: ProcessAssignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessAssign
     */
    omit?: ProcessAssignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessAssignInclude<ExtArgs> | null
    /**
     * Filter, which ProcessAssigns to fetch.
     */
    where?: ProcessAssignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessAssigns to fetch.
     */
    orderBy?: ProcessAssignOrderByWithRelationInput | ProcessAssignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProcessAssigns.
     */
    cursor?: ProcessAssignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessAssigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessAssigns.
     */
    skip?: number
    distinct?: ProcessAssignScalarFieldEnum | ProcessAssignScalarFieldEnum[]
  }

  /**
   * ProcessAssign create
   */
  export type ProcessAssignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessAssign
     */
    select?: ProcessAssignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessAssign
     */
    omit?: ProcessAssignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessAssignInclude<ExtArgs> | null
    /**
     * The data needed to create a ProcessAssign.
     */
    data: XOR<ProcessAssignCreateInput, ProcessAssignUncheckedCreateInput>
  }

  /**
   * ProcessAssign createMany
   */
  export type ProcessAssignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProcessAssigns.
     */
    data: ProcessAssignCreateManyInput | ProcessAssignCreateManyInput[]
  }

  /**
   * ProcessAssign update
   */
  export type ProcessAssignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessAssign
     */
    select?: ProcessAssignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessAssign
     */
    omit?: ProcessAssignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessAssignInclude<ExtArgs> | null
    /**
     * The data needed to update a ProcessAssign.
     */
    data: XOR<ProcessAssignUpdateInput, ProcessAssignUncheckedUpdateInput>
    /**
     * Choose, which ProcessAssign to update.
     */
    where: ProcessAssignWhereUniqueInput
  }

  /**
   * ProcessAssign updateMany
   */
  export type ProcessAssignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProcessAssigns.
     */
    data: XOR<ProcessAssignUpdateManyMutationInput, ProcessAssignUncheckedUpdateManyInput>
    /**
     * Filter which ProcessAssigns to update
     */
    where?: ProcessAssignWhereInput
    /**
     * Limit how many ProcessAssigns to update.
     */
    limit?: number
  }

  /**
   * ProcessAssign upsert
   */
  export type ProcessAssignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessAssign
     */
    select?: ProcessAssignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessAssign
     */
    omit?: ProcessAssignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessAssignInclude<ExtArgs> | null
    /**
     * The filter to search for the ProcessAssign to update in case it exists.
     */
    where: ProcessAssignWhereUniqueInput
    /**
     * In case the ProcessAssign found by the `where` argument doesn't exist, create a new ProcessAssign with this data.
     */
    create: XOR<ProcessAssignCreateInput, ProcessAssignUncheckedCreateInput>
    /**
     * In case the ProcessAssign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProcessAssignUpdateInput, ProcessAssignUncheckedUpdateInput>
  }

  /**
   * ProcessAssign delete
   */
  export type ProcessAssignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessAssign
     */
    select?: ProcessAssignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessAssign
     */
    omit?: ProcessAssignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessAssignInclude<ExtArgs> | null
    /**
     * Filter which ProcessAssign to delete.
     */
    where: ProcessAssignWhereUniqueInput
  }

  /**
   * ProcessAssign deleteMany
   */
  export type ProcessAssignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProcessAssigns to delete
     */
    where?: ProcessAssignWhereInput
    /**
     * Limit how many ProcessAssigns to delete.
     */
    limit?: number
  }

  /**
   * ProcessAssign.ProcessActivity
   */
  export type ProcessAssign$ProcessActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessActivity
     */
    select?: ProcessActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessActivity
     */
    omit?: ProcessActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessActivityInclude<ExtArgs> | null
    where?: ProcessActivityWhereInput
    orderBy?: ProcessActivityOrderByWithRelationInput | ProcessActivityOrderByWithRelationInput[]
    cursor?: ProcessActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProcessActivityScalarFieldEnum | ProcessActivityScalarFieldEnum[]
  }

  /**
   * ProcessAssign without action
   */
  export type ProcessAssignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessAssign
     */
    select?: ProcessAssignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessAssign
     */
    omit?: ProcessAssignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessAssignInclude<ExtArgs> | null
  }


  /**
   * Model vwPRO_2
   */

  export type AggregateVwPRO_2 = {
    _count: VwPRO_2CountAggregateOutputType | null
    _avg: VwPRO_2AvgAggregateOutputType | null
    _sum: VwPRO_2SumAggregateOutputType | null
    _min: VwPRO_2MinAggregateOutputType | null
    _max: VwPRO_2MaxAggregateOutputType | null
  }

  export type VwPRO_2AvgAggregateOutputType = {
    ID: number | null
    ProductID: number | null
    Quantity: number | null
  }

  export type VwPRO_2SumAggregateOutputType = {
    ID: number | null
    ProductID: number | null
    Quantity: number | null
  }

  export type VwPRO_2MinAggregateOutputType = {
    ID: number | null
    Number: string | null
    ProductID: number | null
    Quantity: number | null
    DueDate: Date | null
    Created: Date | null
    CreatedBy: string | null
    LastModified: Date | null
    LastModifiedBy: string | null
  }

  export type VwPRO_2MaxAggregateOutputType = {
    ID: number | null
    Number: string | null
    ProductID: number | null
    Quantity: number | null
    DueDate: Date | null
    Created: Date | null
    CreatedBy: string | null
    LastModified: Date | null
    LastModifiedBy: string | null
  }

  export type VwPRO_2CountAggregateOutputType = {
    ID: number
    Number: number
    ProductID: number
    Quantity: number
    DueDate: number
    Created: number
    CreatedBy: number
    LastModified: number
    LastModifiedBy: number
    _all: number
  }


  export type VwPRO_2AvgAggregateInputType = {
    ID?: true
    ProductID?: true
    Quantity?: true
  }

  export type VwPRO_2SumAggregateInputType = {
    ID?: true
    ProductID?: true
    Quantity?: true
  }

  export type VwPRO_2MinAggregateInputType = {
    ID?: true
    Number?: true
    ProductID?: true
    Quantity?: true
    DueDate?: true
    Created?: true
    CreatedBy?: true
    LastModified?: true
    LastModifiedBy?: true
  }

  export type VwPRO_2MaxAggregateInputType = {
    ID?: true
    Number?: true
    ProductID?: true
    Quantity?: true
    DueDate?: true
    Created?: true
    CreatedBy?: true
    LastModified?: true
    LastModifiedBy?: true
  }

  export type VwPRO_2CountAggregateInputType = {
    ID?: true
    Number?: true
    ProductID?: true
    Quantity?: true
    DueDate?: true
    Created?: true
    CreatedBy?: true
    LastModified?: true
    LastModifiedBy?: true
    _all?: true
  }

  export type VwPRO_2AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vwPRO_2 to aggregate.
     */
    where?: vwPRO_2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vwPRO_2s to fetch.
     */
    orderBy?: vwPRO_2OrderByWithRelationInput | vwPRO_2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vwPRO_2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vwPRO_2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vwPRO_2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vwPRO_2s
    **/
    _count?: true | VwPRO_2CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VwPRO_2AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VwPRO_2SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VwPRO_2MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VwPRO_2MaxAggregateInputType
  }

  export type GetVwPRO_2AggregateType<T extends VwPRO_2AggregateArgs> = {
        [P in keyof T & keyof AggregateVwPRO_2]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVwPRO_2[P]>
      : GetScalarType<T[P], AggregateVwPRO_2[P]>
  }




  export type vwPRO_2GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vwPRO_2WhereInput
    orderBy?: vwPRO_2OrderByWithAggregationInput | vwPRO_2OrderByWithAggregationInput[]
    by: VwPRO_2ScalarFieldEnum[] | VwPRO_2ScalarFieldEnum
    having?: vwPRO_2ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VwPRO_2CountAggregateInputType | true
    _avg?: VwPRO_2AvgAggregateInputType
    _sum?: VwPRO_2SumAggregateInputType
    _min?: VwPRO_2MinAggregateInputType
    _max?: VwPRO_2MaxAggregateInputType
  }

  export type VwPRO_2GroupByOutputType = {
    ID: number
    Number: string
    ProductID: number
    Quantity: number
    DueDate: Date
    Created: Date
    CreatedBy: string
    LastModified: Date
    LastModifiedBy: string
    _count: VwPRO_2CountAggregateOutputType | null
    _avg: VwPRO_2AvgAggregateOutputType | null
    _sum: VwPRO_2SumAggregateOutputType | null
    _min: VwPRO_2MinAggregateOutputType | null
    _max: VwPRO_2MaxAggregateOutputType | null
  }

  type GetVwPRO_2GroupByPayload<T extends vwPRO_2GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VwPRO_2GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VwPRO_2GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VwPRO_2GroupByOutputType[P]>
            : GetScalarType<T[P], VwPRO_2GroupByOutputType[P]>
        }
      >
    >


  export type vwPRO_2Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    Number?: boolean
    ProductID?: boolean
    Quantity?: boolean
    DueDate?: boolean
    Created?: boolean
    CreatedBy?: boolean
    LastModified?: boolean
    LastModifiedBy?: boolean
    vwUnit?: boolean | vwPRO_2$vwUnitArgs<ExtArgs>
    _count?: boolean | VwPRO_2CountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vwPRO_2"]>



  export type vwPRO_2SelectScalar = {
    ID?: boolean
    Number?: boolean
    ProductID?: boolean
    Quantity?: boolean
    DueDate?: boolean
    Created?: boolean
    CreatedBy?: boolean
    LastModified?: boolean
    LastModifiedBy?: boolean
  }

  export type vwPRO_2Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "Number" | "ProductID" | "Quantity" | "DueDate" | "Created" | "CreatedBy" | "LastModified" | "LastModifiedBy", ExtArgs["result"]["vwPRO_2"]>
  export type vwPRO_2Include<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vwUnit?: boolean | vwPRO_2$vwUnitArgs<ExtArgs>
    _count?: boolean | VwPRO_2CountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $vwPRO_2Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vwPRO_2"
    objects: {
      vwUnit: Prisma.$vwUnitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      Number: string
      ProductID: number
      Quantity: number
      DueDate: Date
      Created: Date
      CreatedBy: string
      LastModified: Date
      LastModifiedBy: string
    }, ExtArgs["result"]["vwPRO_2"]>
    composites: {}
  }

  type vwPRO_2GetPayload<S extends boolean | null | undefined | vwPRO_2DefaultArgs> = $Result.GetResult<Prisma.$vwPRO_2Payload, S>

  type vwPRO_2CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vwPRO_2FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VwPRO_2CountAggregateInputType | true
    }

  export interface vwPRO_2Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vwPRO_2'], meta: { name: 'vwPRO_2' } }
    /**
     * Find zero or one VwPRO_2 that matches the filter.
     * @param {vwPRO_2FindUniqueArgs} args - Arguments to find a VwPRO_2
     * @example
     * // Get one VwPRO_2
     * const vwPRO_2 = await prisma.vwPRO_2.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vwPRO_2FindUniqueArgs>(args: SelectSubset<T, vwPRO_2FindUniqueArgs<ExtArgs>>): Prisma__vwPRO_2Client<$Result.GetResult<Prisma.$vwPRO_2Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VwPRO_2 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vwPRO_2FindUniqueOrThrowArgs} args - Arguments to find a VwPRO_2
     * @example
     * // Get one VwPRO_2
     * const vwPRO_2 = await prisma.vwPRO_2.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vwPRO_2FindUniqueOrThrowArgs>(args: SelectSubset<T, vwPRO_2FindUniqueOrThrowArgs<ExtArgs>>): Prisma__vwPRO_2Client<$Result.GetResult<Prisma.$vwPRO_2Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VwPRO_2 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwPRO_2FindFirstArgs} args - Arguments to find a VwPRO_2
     * @example
     * // Get one VwPRO_2
     * const vwPRO_2 = await prisma.vwPRO_2.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vwPRO_2FindFirstArgs>(args?: SelectSubset<T, vwPRO_2FindFirstArgs<ExtArgs>>): Prisma__vwPRO_2Client<$Result.GetResult<Prisma.$vwPRO_2Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VwPRO_2 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwPRO_2FindFirstOrThrowArgs} args - Arguments to find a VwPRO_2
     * @example
     * // Get one VwPRO_2
     * const vwPRO_2 = await prisma.vwPRO_2.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vwPRO_2FindFirstOrThrowArgs>(args?: SelectSubset<T, vwPRO_2FindFirstOrThrowArgs<ExtArgs>>): Prisma__vwPRO_2Client<$Result.GetResult<Prisma.$vwPRO_2Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VwPRO_2s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwPRO_2FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VwPRO_2s
     * const vwPRO_2s = await prisma.vwPRO_2.findMany()
     * 
     * // Get first 10 VwPRO_2s
     * const vwPRO_2s = await prisma.vwPRO_2.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const vwPRO_2WithIDOnly = await prisma.vwPRO_2.findMany({ select: { ID: true } })
     * 
     */
    findMany<T extends vwPRO_2FindManyArgs>(args?: SelectSubset<T, vwPRO_2FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vwPRO_2Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VwPRO_2.
     * @param {vwPRO_2CreateArgs} args - Arguments to create a VwPRO_2.
     * @example
     * // Create one VwPRO_2
     * const VwPRO_2 = await prisma.vwPRO_2.create({
     *   data: {
     *     // ... data to create a VwPRO_2
     *   }
     * })
     * 
     */
    create<T extends vwPRO_2CreateArgs>(args: SelectSubset<T, vwPRO_2CreateArgs<ExtArgs>>): Prisma__vwPRO_2Client<$Result.GetResult<Prisma.$vwPRO_2Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VwPRO_2s.
     * @param {vwPRO_2CreateManyArgs} args - Arguments to create many VwPRO_2s.
     * @example
     * // Create many VwPRO_2s
     * const vwPRO_2 = await prisma.vwPRO_2.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vwPRO_2CreateManyArgs>(args?: SelectSubset<T, vwPRO_2CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VwPRO_2.
     * @param {vwPRO_2DeleteArgs} args - Arguments to delete one VwPRO_2.
     * @example
     * // Delete one VwPRO_2
     * const VwPRO_2 = await prisma.vwPRO_2.delete({
     *   where: {
     *     // ... filter to delete one VwPRO_2
     *   }
     * })
     * 
     */
    delete<T extends vwPRO_2DeleteArgs>(args: SelectSubset<T, vwPRO_2DeleteArgs<ExtArgs>>): Prisma__vwPRO_2Client<$Result.GetResult<Prisma.$vwPRO_2Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VwPRO_2.
     * @param {vwPRO_2UpdateArgs} args - Arguments to update one VwPRO_2.
     * @example
     * // Update one VwPRO_2
     * const vwPRO_2 = await prisma.vwPRO_2.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vwPRO_2UpdateArgs>(args: SelectSubset<T, vwPRO_2UpdateArgs<ExtArgs>>): Prisma__vwPRO_2Client<$Result.GetResult<Prisma.$vwPRO_2Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VwPRO_2s.
     * @param {vwPRO_2DeleteManyArgs} args - Arguments to filter VwPRO_2s to delete.
     * @example
     * // Delete a few VwPRO_2s
     * const { count } = await prisma.vwPRO_2.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vwPRO_2DeleteManyArgs>(args?: SelectSubset<T, vwPRO_2DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VwPRO_2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwPRO_2UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VwPRO_2s
     * const vwPRO_2 = await prisma.vwPRO_2.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vwPRO_2UpdateManyArgs>(args: SelectSubset<T, vwPRO_2UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VwPRO_2.
     * @param {vwPRO_2UpsertArgs} args - Arguments to update or create a VwPRO_2.
     * @example
     * // Update or create a VwPRO_2
     * const vwPRO_2 = await prisma.vwPRO_2.upsert({
     *   create: {
     *     // ... data to create a VwPRO_2
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VwPRO_2 we want to update
     *   }
     * })
     */
    upsert<T extends vwPRO_2UpsertArgs>(args: SelectSubset<T, vwPRO_2UpsertArgs<ExtArgs>>): Prisma__vwPRO_2Client<$Result.GetResult<Prisma.$vwPRO_2Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VwPRO_2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwPRO_2CountArgs} args - Arguments to filter VwPRO_2s to count.
     * @example
     * // Count the number of VwPRO_2s
     * const count = await prisma.vwPRO_2.count({
     *   where: {
     *     // ... the filter for the VwPRO_2s we want to count
     *   }
     * })
    **/
    count<T extends vwPRO_2CountArgs>(
      args?: Subset<T, vwPRO_2CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VwPRO_2CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VwPRO_2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwPRO_2AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VwPRO_2AggregateArgs>(args: Subset<T, VwPRO_2AggregateArgs>): Prisma.PrismaPromise<GetVwPRO_2AggregateType<T>>

    /**
     * Group by VwPRO_2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwPRO_2GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends vwPRO_2GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vwPRO_2GroupByArgs['orderBy'] }
        : { orderBy?: vwPRO_2GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, vwPRO_2GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVwPRO_2GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vwPRO_2 model
   */
  readonly fields: vwPRO_2FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vwPRO_2.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vwPRO_2Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vwUnit<T extends vwPRO_2$vwUnitArgs<ExtArgs> = {}>(args?: Subset<T, vwPRO_2$vwUnitArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vwUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the vwPRO_2 model
   */
  interface vwPRO_2FieldRefs {
    readonly ID: FieldRef<"vwPRO_2", 'Int'>
    readonly Number: FieldRef<"vwPRO_2", 'String'>
    readonly ProductID: FieldRef<"vwPRO_2", 'Int'>
    readonly Quantity: FieldRef<"vwPRO_2", 'Int'>
    readonly DueDate: FieldRef<"vwPRO_2", 'DateTime'>
    readonly Created: FieldRef<"vwPRO_2", 'DateTime'>
    readonly CreatedBy: FieldRef<"vwPRO_2", 'String'>
    readonly LastModified: FieldRef<"vwPRO_2", 'DateTime'>
    readonly LastModifiedBy: FieldRef<"vwPRO_2", 'String'>
  }
    

  // Custom InputTypes
  /**
   * vwPRO_2 findUnique
   */
  export type vwPRO_2FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwPRO_2
     */
    select?: vwPRO_2Select<ExtArgs> | null
    /**
     * Omit specific fields from the vwPRO_2
     */
    omit?: vwPRO_2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwPRO_2Include<ExtArgs> | null
    /**
     * Filter, which vwPRO_2 to fetch.
     */
    where: vwPRO_2WhereUniqueInput
  }

  /**
   * vwPRO_2 findUniqueOrThrow
   */
  export type vwPRO_2FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwPRO_2
     */
    select?: vwPRO_2Select<ExtArgs> | null
    /**
     * Omit specific fields from the vwPRO_2
     */
    omit?: vwPRO_2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwPRO_2Include<ExtArgs> | null
    /**
     * Filter, which vwPRO_2 to fetch.
     */
    where: vwPRO_2WhereUniqueInput
  }

  /**
   * vwPRO_2 findFirst
   */
  export type vwPRO_2FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwPRO_2
     */
    select?: vwPRO_2Select<ExtArgs> | null
    /**
     * Omit specific fields from the vwPRO_2
     */
    omit?: vwPRO_2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwPRO_2Include<ExtArgs> | null
    /**
     * Filter, which vwPRO_2 to fetch.
     */
    where?: vwPRO_2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vwPRO_2s to fetch.
     */
    orderBy?: vwPRO_2OrderByWithRelationInput | vwPRO_2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vwPRO_2s.
     */
    cursor?: vwPRO_2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vwPRO_2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vwPRO_2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vwPRO_2s.
     */
    distinct?: VwPRO_2ScalarFieldEnum | VwPRO_2ScalarFieldEnum[]
  }

  /**
   * vwPRO_2 findFirstOrThrow
   */
  export type vwPRO_2FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwPRO_2
     */
    select?: vwPRO_2Select<ExtArgs> | null
    /**
     * Omit specific fields from the vwPRO_2
     */
    omit?: vwPRO_2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwPRO_2Include<ExtArgs> | null
    /**
     * Filter, which vwPRO_2 to fetch.
     */
    where?: vwPRO_2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vwPRO_2s to fetch.
     */
    orderBy?: vwPRO_2OrderByWithRelationInput | vwPRO_2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vwPRO_2s.
     */
    cursor?: vwPRO_2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vwPRO_2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vwPRO_2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vwPRO_2s.
     */
    distinct?: VwPRO_2ScalarFieldEnum | VwPRO_2ScalarFieldEnum[]
  }

  /**
   * vwPRO_2 findMany
   */
  export type vwPRO_2FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwPRO_2
     */
    select?: vwPRO_2Select<ExtArgs> | null
    /**
     * Omit specific fields from the vwPRO_2
     */
    omit?: vwPRO_2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwPRO_2Include<ExtArgs> | null
    /**
     * Filter, which vwPRO_2s to fetch.
     */
    where?: vwPRO_2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vwPRO_2s to fetch.
     */
    orderBy?: vwPRO_2OrderByWithRelationInput | vwPRO_2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vwPRO_2s.
     */
    cursor?: vwPRO_2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vwPRO_2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vwPRO_2s.
     */
    skip?: number
    distinct?: VwPRO_2ScalarFieldEnum | VwPRO_2ScalarFieldEnum[]
  }

  /**
   * vwPRO_2 create
   */
  export type vwPRO_2CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwPRO_2
     */
    select?: vwPRO_2Select<ExtArgs> | null
    /**
     * Omit specific fields from the vwPRO_2
     */
    omit?: vwPRO_2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwPRO_2Include<ExtArgs> | null
    /**
     * The data needed to create a vwPRO_2.
     */
    data: XOR<vwPRO_2CreateInput, vwPRO_2UncheckedCreateInput>
  }

  /**
   * vwPRO_2 createMany
   */
  export type vwPRO_2CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vwPRO_2s.
     */
    data: vwPRO_2CreateManyInput | vwPRO_2CreateManyInput[]
  }

  /**
   * vwPRO_2 update
   */
  export type vwPRO_2UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwPRO_2
     */
    select?: vwPRO_2Select<ExtArgs> | null
    /**
     * Omit specific fields from the vwPRO_2
     */
    omit?: vwPRO_2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwPRO_2Include<ExtArgs> | null
    /**
     * The data needed to update a vwPRO_2.
     */
    data: XOR<vwPRO_2UpdateInput, vwPRO_2UncheckedUpdateInput>
    /**
     * Choose, which vwPRO_2 to update.
     */
    where: vwPRO_2WhereUniqueInput
  }

  /**
   * vwPRO_2 updateMany
   */
  export type vwPRO_2UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vwPRO_2s.
     */
    data: XOR<vwPRO_2UpdateManyMutationInput, vwPRO_2UncheckedUpdateManyInput>
    /**
     * Filter which vwPRO_2s to update
     */
    where?: vwPRO_2WhereInput
    /**
     * Limit how many vwPRO_2s to update.
     */
    limit?: number
  }

  /**
   * vwPRO_2 upsert
   */
  export type vwPRO_2UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwPRO_2
     */
    select?: vwPRO_2Select<ExtArgs> | null
    /**
     * Omit specific fields from the vwPRO_2
     */
    omit?: vwPRO_2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwPRO_2Include<ExtArgs> | null
    /**
     * The filter to search for the vwPRO_2 to update in case it exists.
     */
    where: vwPRO_2WhereUniqueInput
    /**
     * In case the vwPRO_2 found by the `where` argument doesn't exist, create a new vwPRO_2 with this data.
     */
    create: XOR<vwPRO_2CreateInput, vwPRO_2UncheckedCreateInput>
    /**
     * In case the vwPRO_2 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vwPRO_2UpdateInput, vwPRO_2UncheckedUpdateInput>
  }

  /**
   * vwPRO_2 delete
   */
  export type vwPRO_2DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwPRO_2
     */
    select?: vwPRO_2Select<ExtArgs> | null
    /**
     * Omit specific fields from the vwPRO_2
     */
    omit?: vwPRO_2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwPRO_2Include<ExtArgs> | null
    /**
     * Filter which vwPRO_2 to delete.
     */
    where: vwPRO_2WhereUniqueInput
  }

  /**
   * vwPRO_2 deleteMany
   */
  export type vwPRO_2DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vwPRO_2s to delete
     */
    where?: vwPRO_2WhereInput
    /**
     * Limit how many vwPRO_2s to delete.
     */
    limit?: number
  }

  /**
   * vwPRO_2.vwUnit
   */
  export type vwPRO_2$vwUnitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwUnit
     */
    select?: vwUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwUnit
     */
    omit?: vwUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwUnitInclude<ExtArgs> | null
    where?: vwUnitWhereInput
    orderBy?: vwUnitOrderByWithRelationInput | vwUnitOrderByWithRelationInput[]
    cursor?: vwUnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VwUnitScalarFieldEnum | VwUnitScalarFieldEnum[]
  }

  /**
   * vwPRO_2 without action
   */
  export type vwPRO_2DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwPRO_2
     */
    select?: vwPRO_2Select<ExtArgs> | null
    /**
     * Omit specific fields from the vwPRO_2
     */
    omit?: vwPRO_2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwPRO_2Include<ExtArgs> | null
  }


  /**
   * Model vwProcess
   */

  export type AggregateVwProcess = {
    _count: VwProcessCountAggregateOutputType | null
    _avg: VwProcessAvgAggregateOutputType | null
    _sum: VwProcessSumAggregateOutputType | null
    _min: VwProcessMinAggregateOutputType | null
    _max: VwProcessMaxAggregateOutputType | null
  }

  export type VwProcessAvgAggregateOutputType = {
    ProcessID: number | null
    UnitID: number | null
    ProcessPlanDuration: number | null
    ProcessActualDuration: number | null
    StandardMH: Decimal | null
    ProcessDelayInDay: number | null
    ProcessOrder: number | null
    MasterProcessID: number | null
  }

  export type VwProcessSumAggregateOutputType = {
    ProcessID: number | null
    UnitID: number | null
    ProcessPlanDuration: number | null
    ProcessActualDuration: number | null
    StandardMH: Decimal | null
    ProcessDelayInDay: number | null
    ProcessOrder: number | null
    MasterProcessID: number | null
  }

  export type VwProcessMinAggregateOutputType = {
    ProcessID: number | null
    UnitID: number | null
    ProcessStatus: string | null
    ProcessPlanStartDate: Date | null
    ProcessPlanEndDate: Date | null
    ProcessPlanDuration: number | null
    ProcessActualStartDate: Date | null
    ProcessActualEndDate: Date | null
    ProcessActualDuration: number | null
    MasterProcessName: string | null
    StandardMH: Decimal | null
    ProcessGroupName: string | null
    ProcessDelayInDay: number | null
    ProcessOrder: number | null
    LastModified: Date | null
    MasterProcessID: number | null
  }

  export type VwProcessMaxAggregateOutputType = {
    ProcessID: number | null
    UnitID: number | null
    ProcessStatus: string | null
    ProcessPlanStartDate: Date | null
    ProcessPlanEndDate: Date | null
    ProcessPlanDuration: number | null
    ProcessActualStartDate: Date | null
    ProcessActualEndDate: Date | null
    ProcessActualDuration: number | null
    MasterProcessName: string | null
    StandardMH: Decimal | null
    ProcessGroupName: string | null
    ProcessDelayInDay: number | null
    ProcessOrder: number | null
    LastModified: Date | null
    MasterProcessID: number | null
  }

  export type VwProcessCountAggregateOutputType = {
    ProcessID: number
    UnitID: number
    ProcessStatus: number
    ProcessPlanStartDate: number
    ProcessPlanEndDate: number
    ProcessPlanDuration: number
    ProcessActualStartDate: number
    ProcessActualEndDate: number
    ProcessActualDuration: number
    MasterProcessName: number
    StandardMH: number
    ProcessGroupName: number
    ProcessDelayInDay: number
    ProcessOrder: number
    LastModified: number
    MasterProcessID: number
    _all: number
  }


  export type VwProcessAvgAggregateInputType = {
    ProcessID?: true
    UnitID?: true
    ProcessPlanDuration?: true
    ProcessActualDuration?: true
    StandardMH?: true
    ProcessDelayInDay?: true
    ProcessOrder?: true
    MasterProcessID?: true
  }

  export type VwProcessSumAggregateInputType = {
    ProcessID?: true
    UnitID?: true
    ProcessPlanDuration?: true
    ProcessActualDuration?: true
    StandardMH?: true
    ProcessDelayInDay?: true
    ProcessOrder?: true
    MasterProcessID?: true
  }

  export type VwProcessMinAggregateInputType = {
    ProcessID?: true
    UnitID?: true
    ProcessStatus?: true
    ProcessPlanStartDate?: true
    ProcessPlanEndDate?: true
    ProcessPlanDuration?: true
    ProcessActualStartDate?: true
    ProcessActualEndDate?: true
    ProcessActualDuration?: true
    MasterProcessName?: true
    StandardMH?: true
    ProcessGroupName?: true
    ProcessDelayInDay?: true
    ProcessOrder?: true
    LastModified?: true
    MasterProcessID?: true
  }

  export type VwProcessMaxAggregateInputType = {
    ProcessID?: true
    UnitID?: true
    ProcessStatus?: true
    ProcessPlanStartDate?: true
    ProcessPlanEndDate?: true
    ProcessPlanDuration?: true
    ProcessActualStartDate?: true
    ProcessActualEndDate?: true
    ProcessActualDuration?: true
    MasterProcessName?: true
    StandardMH?: true
    ProcessGroupName?: true
    ProcessDelayInDay?: true
    ProcessOrder?: true
    LastModified?: true
    MasterProcessID?: true
  }

  export type VwProcessCountAggregateInputType = {
    ProcessID?: true
    UnitID?: true
    ProcessStatus?: true
    ProcessPlanStartDate?: true
    ProcessPlanEndDate?: true
    ProcessPlanDuration?: true
    ProcessActualStartDate?: true
    ProcessActualEndDate?: true
    ProcessActualDuration?: true
    MasterProcessName?: true
    StandardMH?: true
    ProcessGroupName?: true
    ProcessDelayInDay?: true
    ProcessOrder?: true
    LastModified?: true
    MasterProcessID?: true
    _all?: true
  }

  export type VwProcessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vwProcess to aggregate.
     */
    where?: vwProcessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vwProcesses to fetch.
     */
    orderBy?: vwProcessOrderByWithRelationInput | vwProcessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vwProcessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vwProcesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vwProcesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vwProcesses
    **/
    _count?: true | VwProcessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VwProcessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VwProcessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VwProcessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VwProcessMaxAggregateInputType
  }

  export type GetVwProcessAggregateType<T extends VwProcessAggregateArgs> = {
        [P in keyof T & keyof AggregateVwProcess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVwProcess[P]>
      : GetScalarType<T[P], AggregateVwProcess[P]>
  }




  export type vwProcessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vwProcessWhereInput
    orderBy?: vwProcessOrderByWithAggregationInput | vwProcessOrderByWithAggregationInput[]
    by: VwProcessScalarFieldEnum[] | VwProcessScalarFieldEnum
    having?: vwProcessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VwProcessCountAggregateInputType | true
    _avg?: VwProcessAvgAggregateInputType
    _sum?: VwProcessSumAggregateInputType
    _min?: VwProcessMinAggregateInputType
    _max?: VwProcessMaxAggregateInputType
  }

  export type VwProcessGroupByOutputType = {
    ProcessID: number
    UnitID: number
    ProcessStatus: string | null
    ProcessPlanStartDate: Date | null
    ProcessPlanEndDate: Date | null
    ProcessPlanDuration: number | null
    ProcessActualStartDate: Date | null
    ProcessActualEndDate: Date | null
    ProcessActualDuration: number | null
    MasterProcessName: string | null
    StandardMH: Decimal | null
    ProcessGroupName: string | null
    ProcessDelayInDay: number | null
    ProcessOrder: number | null
    LastModified: Date
    MasterProcessID: number
    _count: VwProcessCountAggregateOutputType | null
    _avg: VwProcessAvgAggregateOutputType | null
    _sum: VwProcessSumAggregateOutputType | null
    _min: VwProcessMinAggregateOutputType | null
    _max: VwProcessMaxAggregateOutputType | null
  }

  type GetVwProcessGroupByPayload<T extends vwProcessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VwProcessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VwProcessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VwProcessGroupByOutputType[P]>
            : GetScalarType<T[P], VwProcessGroupByOutputType[P]>
        }
      >
    >


  export type vwProcessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ProcessID?: boolean
    UnitID?: boolean
    ProcessStatus?: boolean
    ProcessPlanStartDate?: boolean
    ProcessPlanEndDate?: boolean
    ProcessPlanDuration?: boolean
    ProcessActualStartDate?: boolean
    ProcessActualEndDate?: boolean
    ProcessActualDuration?: boolean
    MasterProcessName?: boolean
    StandardMH?: boolean
    ProcessGroupName?: boolean
    ProcessDelayInDay?: boolean
    ProcessOrder?: boolean
    LastModified?: boolean
    MasterProcessID?: boolean
    vwUnit?: boolean | vwUnitDefaultArgs<ExtArgs>
    vwProcessAssign?: boolean | vwProcess$vwProcessAssignArgs<ExtArgs>
    _count?: boolean | VwProcessCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vwProcess"]>



  export type vwProcessSelectScalar = {
    ProcessID?: boolean
    UnitID?: boolean
    ProcessStatus?: boolean
    ProcessPlanStartDate?: boolean
    ProcessPlanEndDate?: boolean
    ProcessPlanDuration?: boolean
    ProcessActualStartDate?: boolean
    ProcessActualEndDate?: boolean
    ProcessActualDuration?: boolean
    MasterProcessName?: boolean
    StandardMH?: boolean
    ProcessGroupName?: boolean
    ProcessDelayInDay?: boolean
    ProcessOrder?: boolean
    LastModified?: boolean
    MasterProcessID?: boolean
  }

  export type vwProcessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ProcessID" | "UnitID" | "ProcessStatus" | "ProcessPlanStartDate" | "ProcessPlanEndDate" | "ProcessPlanDuration" | "ProcessActualStartDate" | "ProcessActualEndDate" | "ProcessActualDuration" | "MasterProcessName" | "StandardMH" | "ProcessGroupName" | "ProcessDelayInDay" | "ProcessOrder" | "LastModified" | "MasterProcessID", ExtArgs["result"]["vwProcess"]>
  export type vwProcessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vwUnit?: boolean | vwUnitDefaultArgs<ExtArgs>
    vwProcessAssign?: boolean | vwProcess$vwProcessAssignArgs<ExtArgs>
    _count?: boolean | VwProcessCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $vwProcessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vwProcess"
    objects: {
      vwUnit: Prisma.$vwUnitPayload<ExtArgs>
      vwProcessAssign: Prisma.$vwProcessAssign2AllPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ProcessID: number
      UnitID: number
      ProcessStatus: string | null
      ProcessPlanStartDate: Date | null
      ProcessPlanEndDate: Date | null
      ProcessPlanDuration: number | null
      ProcessActualStartDate: Date | null
      ProcessActualEndDate: Date | null
      ProcessActualDuration: number | null
      MasterProcessName: string | null
      StandardMH: Prisma.Decimal | null
      ProcessGroupName: string | null
      ProcessDelayInDay: number | null
      ProcessOrder: number | null
      LastModified: Date
      MasterProcessID: number
    }, ExtArgs["result"]["vwProcess"]>
    composites: {}
  }

  type vwProcessGetPayload<S extends boolean | null | undefined | vwProcessDefaultArgs> = $Result.GetResult<Prisma.$vwProcessPayload, S>

  type vwProcessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vwProcessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VwProcessCountAggregateInputType | true
    }

  export interface vwProcessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vwProcess'], meta: { name: 'vwProcess' } }
    /**
     * Find zero or one VwProcess that matches the filter.
     * @param {vwProcessFindUniqueArgs} args - Arguments to find a VwProcess
     * @example
     * // Get one VwProcess
     * const vwProcess = await prisma.vwProcess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vwProcessFindUniqueArgs>(args: SelectSubset<T, vwProcessFindUniqueArgs<ExtArgs>>): Prisma__vwProcessClient<$Result.GetResult<Prisma.$vwProcessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VwProcess that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vwProcessFindUniqueOrThrowArgs} args - Arguments to find a VwProcess
     * @example
     * // Get one VwProcess
     * const vwProcess = await prisma.vwProcess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vwProcessFindUniqueOrThrowArgs>(args: SelectSubset<T, vwProcessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vwProcessClient<$Result.GetResult<Prisma.$vwProcessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VwProcess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwProcessFindFirstArgs} args - Arguments to find a VwProcess
     * @example
     * // Get one VwProcess
     * const vwProcess = await prisma.vwProcess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vwProcessFindFirstArgs>(args?: SelectSubset<T, vwProcessFindFirstArgs<ExtArgs>>): Prisma__vwProcessClient<$Result.GetResult<Prisma.$vwProcessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VwProcess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwProcessFindFirstOrThrowArgs} args - Arguments to find a VwProcess
     * @example
     * // Get one VwProcess
     * const vwProcess = await prisma.vwProcess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vwProcessFindFirstOrThrowArgs>(args?: SelectSubset<T, vwProcessFindFirstOrThrowArgs<ExtArgs>>): Prisma__vwProcessClient<$Result.GetResult<Prisma.$vwProcessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VwProcesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwProcessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VwProcesses
     * const vwProcesses = await prisma.vwProcess.findMany()
     * 
     * // Get first 10 VwProcesses
     * const vwProcesses = await prisma.vwProcess.findMany({ take: 10 })
     * 
     * // Only select the `ProcessID`
     * const vwProcessWithProcessIDOnly = await prisma.vwProcess.findMany({ select: { ProcessID: true } })
     * 
     */
    findMany<T extends vwProcessFindManyArgs>(args?: SelectSubset<T, vwProcessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vwProcessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VwProcess.
     * @param {vwProcessCreateArgs} args - Arguments to create a VwProcess.
     * @example
     * // Create one VwProcess
     * const VwProcess = await prisma.vwProcess.create({
     *   data: {
     *     // ... data to create a VwProcess
     *   }
     * })
     * 
     */
    create<T extends vwProcessCreateArgs>(args: SelectSubset<T, vwProcessCreateArgs<ExtArgs>>): Prisma__vwProcessClient<$Result.GetResult<Prisma.$vwProcessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VwProcesses.
     * @param {vwProcessCreateManyArgs} args - Arguments to create many VwProcesses.
     * @example
     * // Create many VwProcesses
     * const vwProcess = await prisma.vwProcess.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vwProcessCreateManyArgs>(args?: SelectSubset<T, vwProcessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VwProcess.
     * @param {vwProcessDeleteArgs} args - Arguments to delete one VwProcess.
     * @example
     * // Delete one VwProcess
     * const VwProcess = await prisma.vwProcess.delete({
     *   where: {
     *     // ... filter to delete one VwProcess
     *   }
     * })
     * 
     */
    delete<T extends vwProcessDeleteArgs>(args: SelectSubset<T, vwProcessDeleteArgs<ExtArgs>>): Prisma__vwProcessClient<$Result.GetResult<Prisma.$vwProcessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VwProcess.
     * @param {vwProcessUpdateArgs} args - Arguments to update one VwProcess.
     * @example
     * // Update one VwProcess
     * const vwProcess = await prisma.vwProcess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vwProcessUpdateArgs>(args: SelectSubset<T, vwProcessUpdateArgs<ExtArgs>>): Prisma__vwProcessClient<$Result.GetResult<Prisma.$vwProcessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VwProcesses.
     * @param {vwProcessDeleteManyArgs} args - Arguments to filter VwProcesses to delete.
     * @example
     * // Delete a few VwProcesses
     * const { count } = await prisma.vwProcess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vwProcessDeleteManyArgs>(args?: SelectSubset<T, vwProcessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VwProcesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwProcessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VwProcesses
     * const vwProcess = await prisma.vwProcess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vwProcessUpdateManyArgs>(args: SelectSubset<T, vwProcessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VwProcess.
     * @param {vwProcessUpsertArgs} args - Arguments to update or create a VwProcess.
     * @example
     * // Update or create a VwProcess
     * const vwProcess = await prisma.vwProcess.upsert({
     *   create: {
     *     // ... data to create a VwProcess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VwProcess we want to update
     *   }
     * })
     */
    upsert<T extends vwProcessUpsertArgs>(args: SelectSubset<T, vwProcessUpsertArgs<ExtArgs>>): Prisma__vwProcessClient<$Result.GetResult<Prisma.$vwProcessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VwProcesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwProcessCountArgs} args - Arguments to filter VwProcesses to count.
     * @example
     * // Count the number of VwProcesses
     * const count = await prisma.vwProcess.count({
     *   where: {
     *     // ... the filter for the VwProcesses we want to count
     *   }
     * })
    **/
    count<T extends vwProcessCountArgs>(
      args?: Subset<T, vwProcessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VwProcessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VwProcess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwProcessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VwProcessAggregateArgs>(args: Subset<T, VwProcessAggregateArgs>): Prisma.PrismaPromise<GetVwProcessAggregateType<T>>

    /**
     * Group by VwProcess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwProcessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends vwProcessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vwProcessGroupByArgs['orderBy'] }
        : { orderBy?: vwProcessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, vwProcessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVwProcessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vwProcess model
   */
  readonly fields: vwProcessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vwProcess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vwProcessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vwUnit<T extends vwUnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, vwUnitDefaultArgs<ExtArgs>>): Prisma__vwUnitClient<$Result.GetResult<Prisma.$vwUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vwProcessAssign<T extends vwProcess$vwProcessAssignArgs<ExtArgs> = {}>(args?: Subset<T, vwProcess$vwProcessAssignArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vwProcessAssign2AllPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the vwProcess model
   */
  interface vwProcessFieldRefs {
    readonly ProcessID: FieldRef<"vwProcess", 'Int'>
    readonly UnitID: FieldRef<"vwProcess", 'Int'>
    readonly ProcessStatus: FieldRef<"vwProcess", 'String'>
    readonly ProcessPlanStartDate: FieldRef<"vwProcess", 'DateTime'>
    readonly ProcessPlanEndDate: FieldRef<"vwProcess", 'DateTime'>
    readonly ProcessPlanDuration: FieldRef<"vwProcess", 'Int'>
    readonly ProcessActualStartDate: FieldRef<"vwProcess", 'DateTime'>
    readonly ProcessActualEndDate: FieldRef<"vwProcess", 'DateTime'>
    readonly ProcessActualDuration: FieldRef<"vwProcess", 'Int'>
    readonly MasterProcessName: FieldRef<"vwProcess", 'String'>
    readonly StandardMH: FieldRef<"vwProcess", 'Decimal'>
    readonly ProcessGroupName: FieldRef<"vwProcess", 'String'>
    readonly ProcessDelayInDay: FieldRef<"vwProcess", 'Int'>
    readonly ProcessOrder: FieldRef<"vwProcess", 'Int'>
    readonly LastModified: FieldRef<"vwProcess", 'DateTime'>
    readonly MasterProcessID: FieldRef<"vwProcess", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * vwProcess findUnique
   */
  export type vwProcessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcess
     */
    select?: vwProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcess
     */
    omit?: vwProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProcessInclude<ExtArgs> | null
    /**
     * Filter, which vwProcess to fetch.
     */
    where: vwProcessWhereUniqueInput
  }

  /**
   * vwProcess findUniqueOrThrow
   */
  export type vwProcessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcess
     */
    select?: vwProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcess
     */
    omit?: vwProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProcessInclude<ExtArgs> | null
    /**
     * Filter, which vwProcess to fetch.
     */
    where: vwProcessWhereUniqueInput
  }

  /**
   * vwProcess findFirst
   */
  export type vwProcessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcess
     */
    select?: vwProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcess
     */
    omit?: vwProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProcessInclude<ExtArgs> | null
    /**
     * Filter, which vwProcess to fetch.
     */
    where?: vwProcessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vwProcesses to fetch.
     */
    orderBy?: vwProcessOrderByWithRelationInput | vwProcessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vwProcesses.
     */
    cursor?: vwProcessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vwProcesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vwProcesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vwProcesses.
     */
    distinct?: VwProcessScalarFieldEnum | VwProcessScalarFieldEnum[]
  }

  /**
   * vwProcess findFirstOrThrow
   */
  export type vwProcessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcess
     */
    select?: vwProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcess
     */
    omit?: vwProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProcessInclude<ExtArgs> | null
    /**
     * Filter, which vwProcess to fetch.
     */
    where?: vwProcessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vwProcesses to fetch.
     */
    orderBy?: vwProcessOrderByWithRelationInput | vwProcessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vwProcesses.
     */
    cursor?: vwProcessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vwProcesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vwProcesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vwProcesses.
     */
    distinct?: VwProcessScalarFieldEnum | VwProcessScalarFieldEnum[]
  }

  /**
   * vwProcess findMany
   */
  export type vwProcessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcess
     */
    select?: vwProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcess
     */
    omit?: vwProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProcessInclude<ExtArgs> | null
    /**
     * Filter, which vwProcesses to fetch.
     */
    where?: vwProcessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vwProcesses to fetch.
     */
    orderBy?: vwProcessOrderByWithRelationInput | vwProcessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vwProcesses.
     */
    cursor?: vwProcessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vwProcesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vwProcesses.
     */
    skip?: number
    distinct?: VwProcessScalarFieldEnum | VwProcessScalarFieldEnum[]
  }

  /**
   * vwProcess create
   */
  export type vwProcessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcess
     */
    select?: vwProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcess
     */
    omit?: vwProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProcessInclude<ExtArgs> | null
    /**
     * The data needed to create a vwProcess.
     */
    data: XOR<vwProcessCreateInput, vwProcessUncheckedCreateInput>
  }

  /**
   * vwProcess createMany
   */
  export type vwProcessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vwProcesses.
     */
    data: vwProcessCreateManyInput | vwProcessCreateManyInput[]
  }

  /**
   * vwProcess update
   */
  export type vwProcessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcess
     */
    select?: vwProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcess
     */
    omit?: vwProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProcessInclude<ExtArgs> | null
    /**
     * The data needed to update a vwProcess.
     */
    data: XOR<vwProcessUpdateInput, vwProcessUncheckedUpdateInput>
    /**
     * Choose, which vwProcess to update.
     */
    where: vwProcessWhereUniqueInput
  }

  /**
   * vwProcess updateMany
   */
  export type vwProcessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vwProcesses.
     */
    data: XOR<vwProcessUpdateManyMutationInput, vwProcessUncheckedUpdateManyInput>
    /**
     * Filter which vwProcesses to update
     */
    where?: vwProcessWhereInput
    /**
     * Limit how many vwProcesses to update.
     */
    limit?: number
  }

  /**
   * vwProcess upsert
   */
  export type vwProcessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcess
     */
    select?: vwProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcess
     */
    omit?: vwProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProcessInclude<ExtArgs> | null
    /**
     * The filter to search for the vwProcess to update in case it exists.
     */
    where: vwProcessWhereUniqueInput
    /**
     * In case the vwProcess found by the `where` argument doesn't exist, create a new vwProcess with this data.
     */
    create: XOR<vwProcessCreateInput, vwProcessUncheckedCreateInput>
    /**
     * In case the vwProcess was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vwProcessUpdateInput, vwProcessUncheckedUpdateInput>
  }

  /**
   * vwProcess delete
   */
  export type vwProcessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcess
     */
    select?: vwProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcess
     */
    omit?: vwProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProcessInclude<ExtArgs> | null
    /**
     * Filter which vwProcess to delete.
     */
    where: vwProcessWhereUniqueInput
  }

  /**
   * vwProcess deleteMany
   */
  export type vwProcessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vwProcesses to delete
     */
    where?: vwProcessWhereInput
    /**
     * Limit how many vwProcesses to delete.
     */
    limit?: number
  }

  /**
   * vwProcess.vwProcessAssign
   */
  export type vwProcess$vwProcessAssignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcessAssign2All
     */
    select?: vwProcessAssign2AllSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcessAssign2All
     */
    omit?: vwProcessAssign2AllOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProcessAssign2AllInclude<ExtArgs> | null
    where?: vwProcessAssign2AllWhereInput
    orderBy?: vwProcessAssign2AllOrderByWithRelationInput | vwProcessAssign2AllOrderByWithRelationInput[]
    cursor?: vwProcessAssign2AllWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VwProcessAssign2AllScalarFieldEnum | VwProcessAssign2AllScalarFieldEnum[]
  }

  /**
   * vwProcess without action
   */
  export type vwProcessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcess
     */
    select?: vwProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcess
     */
    omit?: vwProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProcessInclude<ExtArgs> | null
  }


  /**
   * Model vwProcessActivity
   */

  export type AggregateVwProcessActivity = {
    _count: VwProcessActivityCountAggregateOutputType | null
    _avg: VwProcessActivityAvgAggregateOutputType | null
    _sum: VwProcessActivitySumAggregateOutputType | null
    _min: VwProcessActivityMinAggregateOutputType | null
    _max: VwProcessActivityMaxAggregateOutputType | null
  }

  export type VwProcessActivityAvgAggregateOutputType = {
    ProcessActivityID: number | null
    ProcessAssignID: number | null
    ActualHoursNonProductive: number | null
    ProcessActivityActualHours: Decimal | null
  }

  export type VwProcessActivitySumAggregateOutputType = {
    ProcessActivityID: number | null
    ProcessAssignID: number | null
    ActualHoursNonProductive: number | null
    ProcessActivityActualHours: Decimal | null
  }

  export type VwProcessActivityMinAggregateOutputType = {
    atasan: string | null
    EmployeeNumber: string | null
    ActivityDateTime: Date | null
    ProcessActivityID: number | null
    ProcessAssignID: number | null
    ProcessActivityName: string | null
    ProcessActivityStatus: string | null
    ProcessActivityReasonPause: string | null
    ActualHoursNonProductive: number | null
    ProcessActivityActualHours: Decimal | null
    ProcessActivityDateTime: Date | null
    LastModifiedBy: string | null
    LastModified: Date | null
  }

  export type VwProcessActivityMaxAggregateOutputType = {
    atasan: string | null
    EmployeeNumber: string | null
    ActivityDateTime: Date | null
    ProcessActivityID: number | null
    ProcessAssignID: number | null
    ProcessActivityName: string | null
    ProcessActivityStatus: string | null
    ProcessActivityReasonPause: string | null
    ActualHoursNonProductive: number | null
    ProcessActivityActualHours: Decimal | null
    ProcessActivityDateTime: Date | null
    LastModifiedBy: string | null
    LastModified: Date | null
  }

  export type VwProcessActivityCountAggregateOutputType = {
    atasan: number
    EmployeeNumber: number
    ActivityDateTime: number
    ProcessActivityID: number
    ProcessAssignID: number
    ProcessActivityName: number
    ProcessActivityStatus: number
    ProcessActivityReasonPause: number
    ActualHoursNonProductive: number
    ProcessActivityActualHours: number
    ProcessActivityDateTime: number
    LastModifiedBy: number
    LastModified: number
    _all: number
  }


  export type VwProcessActivityAvgAggregateInputType = {
    ProcessActivityID?: true
    ProcessAssignID?: true
    ActualHoursNonProductive?: true
    ProcessActivityActualHours?: true
  }

  export type VwProcessActivitySumAggregateInputType = {
    ProcessActivityID?: true
    ProcessAssignID?: true
    ActualHoursNonProductive?: true
    ProcessActivityActualHours?: true
  }

  export type VwProcessActivityMinAggregateInputType = {
    atasan?: true
    EmployeeNumber?: true
    ActivityDateTime?: true
    ProcessActivityID?: true
    ProcessAssignID?: true
    ProcessActivityName?: true
    ProcessActivityStatus?: true
    ProcessActivityReasonPause?: true
    ActualHoursNonProductive?: true
    ProcessActivityActualHours?: true
    ProcessActivityDateTime?: true
    LastModifiedBy?: true
    LastModified?: true
  }

  export type VwProcessActivityMaxAggregateInputType = {
    atasan?: true
    EmployeeNumber?: true
    ActivityDateTime?: true
    ProcessActivityID?: true
    ProcessAssignID?: true
    ProcessActivityName?: true
    ProcessActivityStatus?: true
    ProcessActivityReasonPause?: true
    ActualHoursNonProductive?: true
    ProcessActivityActualHours?: true
    ProcessActivityDateTime?: true
    LastModifiedBy?: true
    LastModified?: true
  }

  export type VwProcessActivityCountAggregateInputType = {
    atasan?: true
    EmployeeNumber?: true
    ActivityDateTime?: true
    ProcessActivityID?: true
    ProcessAssignID?: true
    ProcessActivityName?: true
    ProcessActivityStatus?: true
    ProcessActivityReasonPause?: true
    ActualHoursNonProductive?: true
    ProcessActivityActualHours?: true
    ProcessActivityDateTime?: true
    LastModifiedBy?: true
    LastModified?: true
    _all?: true
  }

  export type VwProcessActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vwProcessActivity to aggregate.
     */
    where?: vwProcessActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vwProcessActivities to fetch.
     */
    orderBy?: vwProcessActivityOrderByWithRelationInput | vwProcessActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vwProcessActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vwProcessActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vwProcessActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vwProcessActivities
    **/
    _count?: true | VwProcessActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VwProcessActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VwProcessActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VwProcessActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VwProcessActivityMaxAggregateInputType
  }

  export type GetVwProcessActivityAggregateType<T extends VwProcessActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateVwProcessActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVwProcessActivity[P]>
      : GetScalarType<T[P], AggregateVwProcessActivity[P]>
  }




  export type vwProcessActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vwProcessActivityWhereInput
    orderBy?: vwProcessActivityOrderByWithAggregationInput | vwProcessActivityOrderByWithAggregationInput[]
    by: VwProcessActivityScalarFieldEnum[] | VwProcessActivityScalarFieldEnum
    having?: vwProcessActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VwProcessActivityCountAggregateInputType | true
    _avg?: VwProcessActivityAvgAggregateInputType
    _sum?: VwProcessActivitySumAggregateInputType
    _min?: VwProcessActivityMinAggregateInputType
    _max?: VwProcessActivityMaxAggregateInputType
  }

  export type VwProcessActivityGroupByOutputType = {
    atasan: string
    EmployeeNumber: string | null
    ActivityDateTime: Date
    ProcessActivityID: number
    ProcessAssignID: number
    ProcessActivityName: string
    ProcessActivityStatus: string | null
    ProcessActivityReasonPause: string
    ActualHoursNonProductive: number | null
    ProcessActivityActualHours: Decimal | null
    ProcessActivityDateTime: Date
    LastModifiedBy: string
    LastModified: Date
    _count: VwProcessActivityCountAggregateOutputType | null
    _avg: VwProcessActivityAvgAggregateOutputType | null
    _sum: VwProcessActivitySumAggregateOutputType | null
    _min: VwProcessActivityMinAggregateOutputType | null
    _max: VwProcessActivityMaxAggregateOutputType | null
  }

  type GetVwProcessActivityGroupByPayload<T extends vwProcessActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VwProcessActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VwProcessActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VwProcessActivityGroupByOutputType[P]>
            : GetScalarType<T[P], VwProcessActivityGroupByOutputType[P]>
        }
      >
    >


  export type vwProcessActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    atasan?: boolean
    EmployeeNumber?: boolean
    ActivityDateTime?: boolean
    ProcessActivityID?: boolean
    ProcessAssignID?: boolean
    ProcessActivityName?: boolean
    ProcessActivityStatus?: boolean
    ProcessActivityReasonPause?: boolean
    ActualHoursNonProductive?: boolean
    ProcessActivityActualHours?: boolean
    ProcessActivityDateTime?: boolean
    LastModifiedBy?: boolean
    LastModified?: boolean
    vwProcessAssign?: boolean | vwProcessAssign2AllDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vwProcessActivity"]>



  export type vwProcessActivitySelectScalar = {
    atasan?: boolean
    EmployeeNumber?: boolean
    ActivityDateTime?: boolean
    ProcessActivityID?: boolean
    ProcessAssignID?: boolean
    ProcessActivityName?: boolean
    ProcessActivityStatus?: boolean
    ProcessActivityReasonPause?: boolean
    ActualHoursNonProductive?: boolean
    ProcessActivityActualHours?: boolean
    ProcessActivityDateTime?: boolean
    LastModifiedBy?: boolean
    LastModified?: boolean
  }

  export type vwProcessActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"atasan" | "EmployeeNumber" | "ActivityDateTime" | "ProcessActivityID" | "ProcessAssignID" | "ProcessActivityName" | "ProcessActivityStatus" | "ProcessActivityReasonPause" | "ActualHoursNonProductive" | "ProcessActivityActualHours" | "ProcessActivityDateTime" | "LastModifiedBy" | "LastModified", ExtArgs["result"]["vwProcessActivity"]>
  export type vwProcessActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vwProcessAssign?: boolean | vwProcessAssign2AllDefaultArgs<ExtArgs>
  }

  export type $vwProcessActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vwProcessActivity"
    objects: {
      vwProcessAssign: Prisma.$vwProcessAssign2AllPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      atasan: string
      EmployeeNumber: string | null
      ActivityDateTime: Date
      ProcessActivityID: number
      ProcessAssignID: number
      ProcessActivityName: string
      ProcessActivityStatus: string | null
      ProcessActivityReasonPause: string
      ActualHoursNonProductive: number | null
      ProcessActivityActualHours: Prisma.Decimal | null
      ProcessActivityDateTime: Date
      LastModifiedBy: string
      LastModified: Date
    }, ExtArgs["result"]["vwProcessActivity"]>
    composites: {}
  }

  type vwProcessActivityGetPayload<S extends boolean | null | undefined | vwProcessActivityDefaultArgs> = $Result.GetResult<Prisma.$vwProcessActivityPayload, S>

  type vwProcessActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vwProcessActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VwProcessActivityCountAggregateInputType | true
    }

  export interface vwProcessActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vwProcessActivity'], meta: { name: 'vwProcessActivity' } }
    /**
     * Find zero or one VwProcessActivity that matches the filter.
     * @param {vwProcessActivityFindUniqueArgs} args - Arguments to find a VwProcessActivity
     * @example
     * // Get one VwProcessActivity
     * const vwProcessActivity = await prisma.vwProcessActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vwProcessActivityFindUniqueArgs>(args: SelectSubset<T, vwProcessActivityFindUniqueArgs<ExtArgs>>): Prisma__vwProcessActivityClient<$Result.GetResult<Prisma.$vwProcessActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VwProcessActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vwProcessActivityFindUniqueOrThrowArgs} args - Arguments to find a VwProcessActivity
     * @example
     * // Get one VwProcessActivity
     * const vwProcessActivity = await prisma.vwProcessActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vwProcessActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, vwProcessActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vwProcessActivityClient<$Result.GetResult<Prisma.$vwProcessActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VwProcessActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwProcessActivityFindFirstArgs} args - Arguments to find a VwProcessActivity
     * @example
     * // Get one VwProcessActivity
     * const vwProcessActivity = await prisma.vwProcessActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vwProcessActivityFindFirstArgs>(args?: SelectSubset<T, vwProcessActivityFindFirstArgs<ExtArgs>>): Prisma__vwProcessActivityClient<$Result.GetResult<Prisma.$vwProcessActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VwProcessActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwProcessActivityFindFirstOrThrowArgs} args - Arguments to find a VwProcessActivity
     * @example
     * // Get one VwProcessActivity
     * const vwProcessActivity = await prisma.vwProcessActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vwProcessActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, vwProcessActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__vwProcessActivityClient<$Result.GetResult<Prisma.$vwProcessActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VwProcessActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwProcessActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VwProcessActivities
     * const vwProcessActivities = await prisma.vwProcessActivity.findMany()
     * 
     * // Get first 10 VwProcessActivities
     * const vwProcessActivities = await prisma.vwProcessActivity.findMany({ take: 10 })
     * 
     * // Only select the `atasan`
     * const vwProcessActivityWithAtasanOnly = await prisma.vwProcessActivity.findMany({ select: { atasan: true } })
     * 
     */
    findMany<T extends vwProcessActivityFindManyArgs>(args?: SelectSubset<T, vwProcessActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vwProcessActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VwProcessActivity.
     * @param {vwProcessActivityCreateArgs} args - Arguments to create a VwProcessActivity.
     * @example
     * // Create one VwProcessActivity
     * const VwProcessActivity = await prisma.vwProcessActivity.create({
     *   data: {
     *     // ... data to create a VwProcessActivity
     *   }
     * })
     * 
     */
    create<T extends vwProcessActivityCreateArgs>(args: SelectSubset<T, vwProcessActivityCreateArgs<ExtArgs>>): Prisma__vwProcessActivityClient<$Result.GetResult<Prisma.$vwProcessActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VwProcessActivities.
     * @param {vwProcessActivityCreateManyArgs} args - Arguments to create many VwProcessActivities.
     * @example
     * // Create many VwProcessActivities
     * const vwProcessActivity = await prisma.vwProcessActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vwProcessActivityCreateManyArgs>(args?: SelectSubset<T, vwProcessActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VwProcessActivity.
     * @param {vwProcessActivityDeleteArgs} args - Arguments to delete one VwProcessActivity.
     * @example
     * // Delete one VwProcessActivity
     * const VwProcessActivity = await prisma.vwProcessActivity.delete({
     *   where: {
     *     // ... filter to delete one VwProcessActivity
     *   }
     * })
     * 
     */
    delete<T extends vwProcessActivityDeleteArgs>(args: SelectSubset<T, vwProcessActivityDeleteArgs<ExtArgs>>): Prisma__vwProcessActivityClient<$Result.GetResult<Prisma.$vwProcessActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VwProcessActivity.
     * @param {vwProcessActivityUpdateArgs} args - Arguments to update one VwProcessActivity.
     * @example
     * // Update one VwProcessActivity
     * const vwProcessActivity = await prisma.vwProcessActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vwProcessActivityUpdateArgs>(args: SelectSubset<T, vwProcessActivityUpdateArgs<ExtArgs>>): Prisma__vwProcessActivityClient<$Result.GetResult<Prisma.$vwProcessActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VwProcessActivities.
     * @param {vwProcessActivityDeleteManyArgs} args - Arguments to filter VwProcessActivities to delete.
     * @example
     * // Delete a few VwProcessActivities
     * const { count } = await prisma.vwProcessActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vwProcessActivityDeleteManyArgs>(args?: SelectSubset<T, vwProcessActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VwProcessActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwProcessActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VwProcessActivities
     * const vwProcessActivity = await prisma.vwProcessActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vwProcessActivityUpdateManyArgs>(args: SelectSubset<T, vwProcessActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VwProcessActivity.
     * @param {vwProcessActivityUpsertArgs} args - Arguments to update or create a VwProcessActivity.
     * @example
     * // Update or create a VwProcessActivity
     * const vwProcessActivity = await prisma.vwProcessActivity.upsert({
     *   create: {
     *     // ... data to create a VwProcessActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VwProcessActivity we want to update
     *   }
     * })
     */
    upsert<T extends vwProcessActivityUpsertArgs>(args: SelectSubset<T, vwProcessActivityUpsertArgs<ExtArgs>>): Prisma__vwProcessActivityClient<$Result.GetResult<Prisma.$vwProcessActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VwProcessActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwProcessActivityCountArgs} args - Arguments to filter VwProcessActivities to count.
     * @example
     * // Count the number of VwProcessActivities
     * const count = await prisma.vwProcessActivity.count({
     *   where: {
     *     // ... the filter for the VwProcessActivities we want to count
     *   }
     * })
    **/
    count<T extends vwProcessActivityCountArgs>(
      args?: Subset<T, vwProcessActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VwProcessActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VwProcessActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwProcessActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VwProcessActivityAggregateArgs>(args: Subset<T, VwProcessActivityAggregateArgs>): Prisma.PrismaPromise<GetVwProcessActivityAggregateType<T>>

    /**
     * Group by VwProcessActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwProcessActivityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends vwProcessActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vwProcessActivityGroupByArgs['orderBy'] }
        : { orderBy?: vwProcessActivityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, vwProcessActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVwProcessActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vwProcessActivity model
   */
  readonly fields: vwProcessActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vwProcessActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vwProcessActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vwProcessAssign<T extends vwProcessAssign2AllDefaultArgs<ExtArgs> = {}>(args?: Subset<T, vwProcessAssign2AllDefaultArgs<ExtArgs>>): Prisma__vwProcessAssign2AllClient<$Result.GetResult<Prisma.$vwProcessAssign2AllPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the vwProcessActivity model
   */
  interface vwProcessActivityFieldRefs {
    readonly atasan: FieldRef<"vwProcessActivity", 'String'>
    readonly EmployeeNumber: FieldRef<"vwProcessActivity", 'String'>
    readonly ActivityDateTime: FieldRef<"vwProcessActivity", 'DateTime'>
    readonly ProcessActivityID: FieldRef<"vwProcessActivity", 'Int'>
    readonly ProcessAssignID: FieldRef<"vwProcessActivity", 'Int'>
    readonly ProcessActivityName: FieldRef<"vwProcessActivity", 'String'>
    readonly ProcessActivityStatus: FieldRef<"vwProcessActivity", 'String'>
    readonly ProcessActivityReasonPause: FieldRef<"vwProcessActivity", 'String'>
    readonly ActualHoursNonProductive: FieldRef<"vwProcessActivity", 'Int'>
    readonly ProcessActivityActualHours: FieldRef<"vwProcessActivity", 'Decimal'>
    readonly ProcessActivityDateTime: FieldRef<"vwProcessActivity", 'DateTime'>
    readonly LastModifiedBy: FieldRef<"vwProcessActivity", 'String'>
    readonly LastModified: FieldRef<"vwProcessActivity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * vwProcessActivity findUnique
   */
  export type vwProcessActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcessActivity
     */
    select?: vwProcessActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcessActivity
     */
    omit?: vwProcessActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProcessActivityInclude<ExtArgs> | null
    /**
     * Filter, which vwProcessActivity to fetch.
     */
    where: vwProcessActivityWhereUniqueInput
  }

  /**
   * vwProcessActivity findUniqueOrThrow
   */
  export type vwProcessActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcessActivity
     */
    select?: vwProcessActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcessActivity
     */
    omit?: vwProcessActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProcessActivityInclude<ExtArgs> | null
    /**
     * Filter, which vwProcessActivity to fetch.
     */
    where: vwProcessActivityWhereUniqueInput
  }

  /**
   * vwProcessActivity findFirst
   */
  export type vwProcessActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcessActivity
     */
    select?: vwProcessActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcessActivity
     */
    omit?: vwProcessActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProcessActivityInclude<ExtArgs> | null
    /**
     * Filter, which vwProcessActivity to fetch.
     */
    where?: vwProcessActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vwProcessActivities to fetch.
     */
    orderBy?: vwProcessActivityOrderByWithRelationInput | vwProcessActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vwProcessActivities.
     */
    cursor?: vwProcessActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vwProcessActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vwProcessActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vwProcessActivities.
     */
    distinct?: VwProcessActivityScalarFieldEnum | VwProcessActivityScalarFieldEnum[]
  }

  /**
   * vwProcessActivity findFirstOrThrow
   */
  export type vwProcessActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcessActivity
     */
    select?: vwProcessActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcessActivity
     */
    omit?: vwProcessActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProcessActivityInclude<ExtArgs> | null
    /**
     * Filter, which vwProcessActivity to fetch.
     */
    where?: vwProcessActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vwProcessActivities to fetch.
     */
    orderBy?: vwProcessActivityOrderByWithRelationInput | vwProcessActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vwProcessActivities.
     */
    cursor?: vwProcessActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vwProcessActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vwProcessActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vwProcessActivities.
     */
    distinct?: VwProcessActivityScalarFieldEnum | VwProcessActivityScalarFieldEnum[]
  }

  /**
   * vwProcessActivity findMany
   */
  export type vwProcessActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcessActivity
     */
    select?: vwProcessActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcessActivity
     */
    omit?: vwProcessActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProcessActivityInclude<ExtArgs> | null
    /**
     * Filter, which vwProcessActivities to fetch.
     */
    where?: vwProcessActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vwProcessActivities to fetch.
     */
    orderBy?: vwProcessActivityOrderByWithRelationInput | vwProcessActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vwProcessActivities.
     */
    cursor?: vwProcessActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vwProcessActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vwProcessActivities.
     */
    skip?: number
    distinct?: VwProcessActivityScalarFieldEnum | VwProcessActivityScalarFieldEnum[]
  }

  /**
   * vwProcessActivity create
   */
  export type vwProcessActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcessActivity
     */
    select?: vwProcessActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcessActivity
     */
    omit?: vwProcessActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProcessActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a vwProcessActivity.
     */
    data: XOR<vwProcessActivityCreateInput, vwProcessActivityUncheckedCreateInput>
  }

  /**
   * vwProcessActivity createMany
   */
  export type vwProcessActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vwProcessActivities.
     */
    data: vwProcessActivityCreateManyInput | vwProcessActivityCreateManyInput[]
  }

  /**
   * vwProcessActivity update
   */
  export type vwProcessActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcessActivity
     */
    select?: vwProcessActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcessActivity
     */
    omit?: vwProcessActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProcessActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a vwProcessActivity.
     */
    data: XOR<vwProcessActivityUpdateInput, vwProcessActivityUncheckedUpdateInput>
    /**
     * Choose, which vwProcessActivity to update.
     */
    where: vwProcessActivityWhereUniqueInput
  }

  /**
   * vwProcessActivity updateMany
   */
  export type vwProcessActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vwProcessActivities.
     */
    data: XOR<vwProcessActivityUpdateManyMutationInput, vwProcessActivityUncheckedUpdateManyInput>
    /**
     * Filter which vwProcessActivities to update
     */
    where?: vwProcessActivityWhereInput
    /**
     * Limit how many vwProcessActivities to update.
     */
    limit?: number
  }

  /**
   * vwProcessActivity upsert
   */
  export type vwProcessActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcessActivity
     */
    select?: vwProcessActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcessActivity
     */
    omit?: vwProcessActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProcessActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the vwProcessActivity to update in case it exists.
     */
    where: vwProcessActivityWhereUniqueInput
    /**
     * In case the vwProcessActivity found by the `where` argument doesn't exist, create a new vwProcessActivity with this data.
     */
    create: XOR<vwProcessActivityCreateInput, vwProcessActivityUncheckedCreateInput>
    /**
     * In case the vwProcessActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vwProcessActivityUpdateInput, vwProcessActivityUncheckedUpdateInput>
  }

  /**
   * vwProcessActivity delete
   */
  export type vwProcessActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcessActivity
     */
    select?: vwProcessActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcessActivity
     */
    omit?: vwProcessActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProcessActivityInclude<ExtArgs> | null
    /**
     * Filter which vwProcessActivity to delete.
     */
    where: vwProcessActivityWhereUniqueInput
  }

  /**
   * vwProcessActivity deleteMany
   */
  export type vwProcessActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vwProcessActivities to delete
     */
    where?: vwProcessActivityWhereInput
    /**
     * Limit how many vwProcessActivities to delete.
     */
    limit?: number
  }

  /**
   * vwProcessActivity without action
   */
  export type vwProcessActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcessActivity
     */
    select?: vwProcessActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcessActivity
     */
    omit?: vwProcessActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProcessActivityInclude<ExtArgs> | null
  }


  /**
   * Model vwProcessAssign2All
   */

  export type AggregateVwProcessAssign2All = {
    _count: VwProcessAssign2AllCountAggregateOutputType | null
    _avg: VwProcessAssign2AllAvgAggregateOutputType | null
    _sum: VwProcessAssign2AllSumAggregateOutputType | null
    _min: VwProcessAssign2AllMinAggregateOutputType | null
    _max: VwProcessAssign2AllMaxAggregateOutputType | null
  }

  export type VwProcessAssign2AllAvgAggregateOutputType = {
    ID: number | null
    ProcessID: number | null
    UnitID: number | null
  }

  export type VwProcessAssign2AllSumAggregateOutputType = {
    ID: number | null
    ProcessID: number | null
    UnitID: number | null
  }

  export type VwProcessAssign2AllMinAggregateOutputType = {
    ID: number | null
    ProcessID: number | null
    UnitID: number | null
    LeaderName: string | null
    OperatorName: string | null
    NRP: string | null
    TglAssign: Date | null
    ProcessassignStatus: string | null
    Startassign: string | null
    Stopassign: string | null
    ProcessAssignType: string | null
    LastModified: Date | null
    lastStart: Date | null
    lastStop: Date | null
    remark: string | null
    IsActive: boolean | null
  }

  export type VwProcessAssign2AllMaxAggregateOutputType = {
    ID: number | null
    ProcessID: number | null
    UnitID: number | null
    LeaderName: string | null
    OperatorName: string | null
    NRP: string | null
    TglAssign: Date | null
    ProcessassignStatus: string | null
    Startassign: string | null
    Stopassign: string | null
    ProcessAssignType: string | null
    LastModified: Date | null
    lastStart: Date | null
    lastStop: Date | null
    remark: string | null
    IsActive: boolean | null
  }

  export type VwProcessAssign2AllCountAggregateOutputType = {
    ID: number
    ProcessID: number
    UnitID: number
    LeaderName: number
    OperatorName: number
    NRP: number
    TglAssign: number
    ProcessassignStatus: number
    Startassign: number
    Stopassign: number
    ProcessAssignType: number
    LastModified: number
    lastStart: number
    lastStop: number
    remark: number
    IsActive: number
    _all: number
  }


  export type VwProcessAssign2AllAvgAggregateInputType = {
    ID?: true
    ProcessID?: true
    UnitID?: true
  }

  export type VwProcessAssign2AllSumAggregateInputType = {
    ID?: true
    ProcessID?: true
    UnitID?: true
  }

  export type VwProcessAssign2AllMinAggregateInputType = {
    ID?: true
    ProcessID?: true
    UnitID?: true
    LeaderName?: true
    OperatorName?: true
    NRP?: true
    TglAssign?: true
    ProcessassignStatus?: true
    Startassign?: true
    Stopassign?: true
    ProcessAssignType?: true
    LastModified?: true
    lastStart?: true
    lastStop?: true
    remark?: true
    IsActive?: true
  }

  export type VwProcessAssign2AllMaxAggregateInputType = {
    ID?: true
    ProcessID?: true
    UnitID?: true
    LeaderName?: true
    OperatorName?: true
    NRP?: true
    TglAssign?: true
    ProcessassignStatus?: true
    Startassign?: true
    Stopassign?: true
    ProcessAssignType?: true
    LastModified?: true
    lastStart?: true
    lastStop?: true
    remark?: true
    IsActive?: true
  }

  export type VwProcessAssign2AllCountAggregateInputType = {
    ID?: true
    ProcessID?: true
    UnitID?: true
    LeaderName?: true
    OperatorName?: true
    NRP?: true
    TglAssign?: true
    ProcessassignStatus?: true
    Startassign?: true
    Stopassign?: true
    ProcessAssignType?: true
    LastModified?: true
    lastStart?: true
    lastStop?: true
    remark?: true
    IsActive?: true
    _all?: true
  }

  export type VwProcessAssign2AllAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vwProcessAssign2All to aggregate.
     */
    where?: vwProcessAssign2AllWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vwProcessAssign2Alls to fetch.
     */
    orderBy?: vwProcessAssign2AllOrderByWithRelationInput | vwProcessAssign2AllOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vwProcessAssign2AllWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vwProcessAssign2Alls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vwProcessAssign2Alls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vwProcessAssign2Alls
    **/
    _count?: true | VwProcessAssign2AllCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VwProcessAssign2AllAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VwProcessAssign2AllSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VwProcessAssign2AllMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VwProcessAssign2AllMaxAggregateInputType
  }

  export type GetVwProcessAssign2AllAggregateType<T extends VwProcessAssign2AllAggregateArgs> = {
        [P in keyof T & keyof AggregateVwProcessAssign2All]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVwProcessAssign2All[P]>
      : GetScalarType<T[P], AggregateVwProcessAssign2All[P]>
  }




  export type vwProcessAssign2AllGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vwProcessAssign2AllWhereInput
    orderBy?: vwProcessAssign2AllOrderByWithAggregationInput | vwProcessAssign2AllOrderByWithAggregationInput[]
    by: VwProcessAssign2AllScalarFieldEnum[] | VwProcessAssign2AllScalarFieldEnum
    having?: vwProcessAssign2AllScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VwProcessAssign2AllCountAggregateInputType | true
    _avg?: VwProcessAssign2AllAvgAggregateInputType
    _sum?: VwProcessAssign2AllSumAggregateInputType
    _min?: VwProcessAssign2AllMinAggregateInputType
    _max?: VwProcessAssign2AllMaxAggregateInputType
  }

  export type VwProcessAssign2AllGroupByOutputType = {
    ID: number
    ProcessID: number
    UnitID: number | null
    LeaderName: string
    OperatorName: string | null
    NRP: string | null
    TglAssign: Date
    ProcessassignStatus: string | null
    Startassign: string | null
    Stopassign: string | null
    ProcessAssignType: string | null
    LastModified: Date
    lastStart: Date | null
    lastStop: Date | null
    remark: string | null
    IsActive: boolean | null
    _count: VwProcessAssign2AllCountAggregateOutputType | null
    _avg: VwProcessAssign2AllAvgAggregateOutputType | null
    _sum: VwProcessAssign2AllSumAggregateOutputType | null
    _min: VwProcessAssign2AllMinAggregateOutputType | null
    _max: VwProcessAssign2AllMaxAggregateOutputType | null
  }

  type GetVwProcessAssign2AllGroupByPayload<T extends vwProcessAssign2AllGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VwProcessAssign2AllGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VwProcessAssign2AllGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VwProcessAssign2AllGroupByOutputType[P]>
            : GetScalarType<T[P], VwProcessAssign2AllGroupByOutputType[P]>
        }
      >
    >


  export type vwProcessAssign2AllSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    ProcessID?: boolean
    UnitID?: boolean
    LeaderName?: boolean
    OperatorName?: boolean
    NRP?: boolean
    TglAssign?: boolean
    ProcessassignStatus?: boolean
    Startassign?: boolean
    Stopassign?: boolean
    ProcessAssignType?: boolean
    LastModified?: boolean
    lastStart?: boolean
    lastStop?: boolean
    remark?: boolean
    IsActive?: boolean
    vwProcess?: boolean | vwProcessDefaultArgs<ExtArgs>
    vwProcessActivity?: boolean | vwProcessAssign2All$vwProcessActivityArgs<ExtArgs>
    _count?: boolean | VwProcessAssign2AllCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vwProcessAssign2All"]>



  export type vwProcessAssign2AllSelectScalar = {
    ID?: boolean
    ProcessID?: boolean
    UnitID?: boolean
    LeaderName?: boolean
    OperatorName?: boolean
    NRP?: boolean
    TglAssign?: boolean
    ProcessassignStatus?: boolean
    Startassign?: boolean
    Stopassign?: boolean
    ProcessAssignType?: boolean
    LastModified?: boolean
    lastStart?: boolean
    lastStop?: boolean
    remark?: boolean
    IsActive?: boolean
  }

  export type vwProcessAssign2AllOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "ProcessID" | "UnitID" | "LeaderName" | "OperatorName" | "NRP" | "TglAssign" | "ProcessassignStatus" | "Startassign" | "Stopassign" | "ProcessAssignType" | "LastModified" | "lastStart" | "lastStop" | "remark" | "IsActive", ExtArgs["result"]["vwProcessAssign2All"]>
  export type vwProcessAssign2AllInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vwProcess?: boolean | vwProcessDefaultArgs<ExtArgs>
    vwProcessActivity?: boolean | vwProcessAssign2All$vwProcessActivityArgs<ExtArgs>
    _count?: boolean | VwProcessAssign2AllCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $vwProcessAssign2AllPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vwProcessAssign2All"
    objects: {
      vwProcess: Prisma.$vwProcessPayload<ExtArgs>
      vwProcessActivity: Prisma.$vwProcessActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      ProcessID: number
      UnitID: number | null
      LeaderName: string
      OperatorName: string | null
      NRP: string | null
      TglAssign: Date
      ProcessassignStatus: string | null
      Startassign: string | null
      Stopassign: string | null
      ProcessAssignType: string | null
      LastModified: Date
      lastStart: Date | null
      lastStop: Date | null
      remark: string | null
      IsActive: boolean | null
    }, ExtArgs["result"]["vwProcessAssign2All"]>
    composites: {}
  }

  type vwProcessAssign2AllGetPayload<S extends boolean | null | undefined | vwProcessAssign2AllDefaultArgs> = $Result.GetResult<Prisma.$vwProcessAssign2AllPayload, S>

  type vwProcessAssign2AllCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vwProcessAssign2AllFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VwProcessAssign2AllCountAggregateInputType | true
    }

  export interface vwProcessAssign2AllDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vwProcessAssign2All'], meta: { name: 'vwProcessAssign2All' } }
    /**
     * Find zero or one VwProcessAssign2All that matches the filter.
     * @param {vwProcessAssign2AllFindUniqueArgs} args - Arguments to find a VwProcessAssign2All
     * @example
     * // Get one VwProcessAssign2All
     * const vwProcessAssign2All = await prisma.vwProcessAssign2All.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vwProcessAssign2AllFindUniqueArgs>(args: SelectSubset<T, vwProcessAssign2AllFindUniqueArgs<ExtArgs>>): Prisma__vwProcessAssign2AllClient<$Result.GetResult<Prisma.$vwProcessAssign2AllPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VwProcessAssign2All that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vwProcessAssign2AllFindUniqueOrThrowArgs} args - Arguments to find a VwProcessAssign2All
     * @example
     * // Get one VwProcessAssign2All
     * const vwProcessAssign2All = await prisma.vwProcessAssign2All.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vwProcessAssign2AllFindUniqueOrThrowArgs>(args: SelectSubset<T, vwProcessAssign2AllFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vwProcessAssign2AllClient<$Result.GetResult<Prisma.$vwProcessAssign2AllPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VwProcessAssign2All that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwProcessAssign2AllFindFirstArgs} args - Arguments to find a VwProcessAssign2All
     * @example
     * // Get one VwProcessAssign2All
     * const vwProcessAssign2All = await prisma.vwProcessAssign2All.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vwProcessAssign2AllFindFirstArgs>(args?: SelectSubset<T, vwProcessAssign2AllFindFirstArgs<ExtArgs>>): Prisma__vwProcessAssign2AllClient<$Result.GetResult<Prisma.$vwProcessAssign2AllPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VwProcessAssign2All that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwProcessAssign2AllFindFirstOrThrowArgs} args - Arguments to find a VwProcessAssign2All
     * @example
     * // Get one VwProcessAssign2All
     * const vwProcessAssign2All = await prisma.vwProcessAssign2All.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vwProcessAssign2AllFindFirstOrThrowArgs>(args?: SelectSubset<T, vwProcessAssign2AllFindFirstOrThrowArgs<ExtArgs>>): Prisma__vwProcessAssign2AllClient<$Result.GetResult<Prisma.$vwProcessAssign2AllPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VwProcessAssign2Alls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwProcessAssign2AllFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VwProcessAssign2Alls
     * const vwProcessAssign2Alls = await prisma.vwProcessAssign2All.findMany()
     * 
     * // Get first 10 VwProcessAssign2Alls
     * const vwProcessAssign2Alls = await prisma.vwProcessAssign2All.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const vwProcessAssign2AllWithIDOnly = await prisma.vwProcessAssign2All.findMany({ select: { ID: true } })
     * 
     */
    findMany<T extends vwProcessAssign2AllFindManyArgs>(args?: SelectSubset<T, vwProcessAssign2AllFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vwProcessAssign2AllPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VwProcessAssign2All.
     * @param {vwProcessAssign2AllCreateArgs} args - Arguments to create a VwProcessAssign2All.
     * @example
     * // Create one VwProcessAssign2All
     * const VwProcessAssign2All = await prisma.vwProcessAssign2All.create({
     *   data: {
     *     // ... data to create a VwProcessAssign2All
     *   }
     * })
     * 
     */
    create<T extends vwProcessAssign2AllCreateArgs>(args: SelectSubset<T, vwProcessAssign2AllCreateArgs<ExtArgs>>): Prisma__vwProcessAssign2AllClient<$Result.GetResult<Prisma.$vwProcessAssign2AllPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VwProcessAssign2Alls.
     * @param {vwProcessAssign2AllCreateManyArgs} args - Arguments to create many VwProcessAssign2Alls.
     * @example
     * // Create many VwProcessAssign2Alls
     * const vwProcessAssign2All = await prisma.vwProcessAssign2All.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vwProcessAssign2AllCreateManyArgs>(args?: SelectSubset<T, vwProcessAssign2AllCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VwProcessAssign2All.
     * @param {vwProcessAssign2AllDeleteArgs} args - Arguments to delete one VwProcessAssign2All.
     * @example
     * // Delete one VwProcessAssign2All
     * const VwProcessAssign2All = await prisma.vwProcessAssign2All.delete({
     *   where: {
     *     // ... filter to delete one VwProcessAssign2All
     *   }
     * })
     * 
     */
    delete<T extends vwProcessAssign2AllDeleteArgs>(args: SelectSubset<T, vwProcessAssign2AllDeleteArgs<ExtArgs>>): Prisma__vwProcessAssign2AllClient<$Result.GetResult<Prisma.$vwProcessAssign2AllPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VwProcessAssign2All.
     * @param {vwProcessAssign2AllUpdateArgs} args - Arguments to update one VwProcessAssign2All.
     * @example
     * // Update one VwProcessAssign2All
     * const vwProcessAssign2All = await prisma.vwProcessAssign2All.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vwProcessAssign2AllUpdateArgs>(args: SelectSubset<T, vwProcessAssign2AllUpdateArgs<ExtArgs>>): Prisma__vwProcessAssign2AllClient<$Result.GetResult<Prisma.$vwProcessAssign2AllPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VwProcessAssign2Alls.
     * @param {vwProcessAssign2AllDeleteManyArgs} args - Arguments to filter VwProcessAssign2Alls to delete.
     * @example
     * // Delete a few VwProcessAssign2Alls
     * const { count } = await prisma.vwProcessAssign2All.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vwProcessAssign2AllDeleteManyArgs>(args?: SelectSubset<T, vwProcessAssign2AllDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VwProcessAssign2Alls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwProcessAssign2AllUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VwProcessAssign2Alls
     * const vwProcessAssign2All = await prisma.vwProcessAssign2All.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vwProcessAssign2AllUpdateManyArgs>(args: SelectSubset<T, vwProcessAssign2AllUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VwProcessAssign2All.
     * @param {vwProcessAssign2AllUpsertArgs} args - Arguments to update or create a VwProcessAssign2All.
     * @example
     * // Update or create a VwProcessAssign2All
     * const vwProcessAssign2All = await prisma.vwProcessAssign2All.upsert({
     *   create: {
     *     // ... data to create a VwProcessAssign2All
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VwProcessAssign2All we want to update
     *   }
     * })
     */
    upsert<T extends vwProcessAssign2AllUpsertArgs>(args: SelectSubset<T, vwProcessAssign2AllUpsertArgs<ExtArgs>>): Prisma__vwProcessAssign2AllClient<$Result.GetResult<Prisma.$vwProcessAssign2AllPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VwProcessAssign2Alls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwProcessAssign2AllCountArgs} args - Arguments to filter VwProcessAssign2Alls to count.
     * @example
     * // Count the number of VwProcessAssign2Alls
     * const count = await prisma.vwProcessAssign2All.count({
     *   where: {
     *     // ... the filter for the VwProcessAssign2Alls we want to count
     *   }
     * })
    **/
    count<T extends vwProcessAssign2AllCountArgs>(
      args?: Subset<T, vwProcessAssign2AllCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VwProcessAssign2AllCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VwProcessAssign2All.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwProcessAssign2AllAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VwProcessAssign2AllAggregateArgs>(args: Subset<T, VwProcessAssign2AllAggregateArgs>): Prisma.PrismaPromise<GetVwProcessAssign2AllAggregateType<T>>

    /**
     * Group by VwProcessAssign2All.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwProcessAssign2AllGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends vwProcessAssign2AllGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vwProcessAssign2AllGroupByArgs['orderBy'] }
        : { orderBy?: vwProcessAssign2AllGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, vwProcessAssign2AllGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVwProcessAssign2AllGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vwProcessAssign2All model
   */
  readonly fields: vwProcessAssign2AllFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vwProcessAssign2All.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vwProcessAssign2AllClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vwProcess<T extends vwProcessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, vwProcessDefaultArgs<ExtArgs>>): Prisma__vwProcessClient<$Result.GetResult<Prisma.$vwProcessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vwProcessActivity<T extends vwProcessAssign2All$vwProcessActivityArgs<ExtArgs> = {}>(args?: Subset<T, vwProcessAssign2All$vwProcessActivityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vwProcessActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the vwProcessAssign2All model
   */
  interface vwProcessAssign2AllFieldRefs {
    readonly ID: FieldRef<"vwProcessAssign2All", 'Int'>
    readonly ProcessID: FieldRef<"vwProcessAssign2All", 'Int'>
    readonly UnitID: FieldRef<"vwProcessAssign2All", 'Int'>
    readonly LeaderName: FieldRef<"vwProcessAssign2All", 'String'>
    readonly OperatorName: FieldRef<"vwProcessAssign2All", 'String'>
    readonly NRP: FieldRef<"vwProcessAssign2All", 'String'>
    readonly TglAssign: FieldRef<"vwProcessAssign2All", 'DateTime'>
    readonly ProcessassignStatus: FieldRef<"vwProcessAssign2All", 'String'>
    readonly Startassign: FieldRef<"vwProcessAssign2All", 'String'>
    readonly Stopassign: FieldRef<"vwProcessAssign2All", 'String'>
    readonly ProcessAssignType: FieldRef<"vwProcessAssign2All", 'String'>
    readonly LastModified: FieldRef<"vwProcessAssign2All", 'DateTime'>
    readonly lastStart: FieldRef<"vwProcessAssign2All", 'DateTime'>
    readonly lastStop: FieldRef<"vwProcessAssign2All", 'DateTime'>
    readonly remark: FieldRef<"vwProcessAssign2All", 'String'>
    readonly IsActive: FieldRef<"vwProcessAssign2All", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * vwProcessAssign2All findUnique
   */
  export type vwProcessAssign2AllFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcessAssign2All
     */
    select?: vwProcessAssign2AllSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcessAssign2All
     */
    omit?: vwProcessAssign2AllOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProcessAssign2AllInclude<ExtArgs> | null
    /**
     * Filter, which vwProcessAssign2All to fetch.
     */
    where: vwProcessAssign2AllWhereUniqueInput
  }

  /**
   * vwProcessAssign2All findUniqueOrThrow
   */
  export type vwProcessAssign2AllFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcessAssign2All
     */
    select?: vwProcessAssign2AllSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcessAssign2All
     */
    omit?: vwProcessAssign2AllOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProcessAssign2AllInclude<ExtArgs> | null
    /**
     * Filter, which vwProcessAssign2All to fetch.
     */
    where: vwProcessAssign2AllWhereUniqueInput
  }

  /**
   * vwProcessAssign2All findFirst
   */
  export type vwProcessAssign2AllFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcessAssign2All
     */
    select?: vwProcessAssign2AllSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcessAssign2All
     */
    omit?: vwProcessAssign2AllOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProcessAssign2AllInclude<ExtArgs> | null
    /**
     * Filter, which vwProcessAssign2All to fetch.
     */
    where?: vwProcessAssign2AllWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vwProcessAssign2Alls to fetch.
     */
    orderBy?: vwProcessAssign2AllOrderByWithRelationInput | vwProcessAssign2AllOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vwProcessAssign2Alls.
     */
    cursor?: vwProcessAssign2AllWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vwProcessAssign2Alls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vwProcessAssign2Alls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vwProcessAssign2Alls.
     */
    distinct?: VwProcessAssign2AllScalarFieldEnum | VwProcessAssign2AllScalarFieldEnum[]
  }

  /**
   * vwProcessAssign2All findFirstOrThrow
   */
  export type vwProcessAssign2AllFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcessAssign2All
     */
    select?: vwProcessAssign2AllSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcessAssign2All
     */
    omit?: vwProcessAssign2AllOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProcessAssign2AllInclude<ExtArgs> | null
    /**
     * Filter, which vwProcessAssign2All to fetch.
     */
    where?: vwProcessAssign2AllWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vwProcessAssign2Alls to fetch.
     */
    orderBy?: vwProcessAssign2AllOrderByWithRelationInput | vwProcessAssign2AllOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vwProcessAssign2Alls.
     */
    cursor?: vwProcessAssign2AllWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vwProcessAssign2Alls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vwProcessAssign2Alls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vwProcessAssign2Alls.
     */
    distinct?: VwProcessAssign2AllScalarFieldEnum | VwProcessAssign2AllScalarFieldEnum[]
  }

  /**
   * vwProcessAssign2All findMany
   */
  export type vwProcessAssign2AllFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcessAssign2All
     */
    select?: vwProcessAssign2AllSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcessAssign2All
     */
    omit?: vwProcessAssign2AllOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProcessAssign2AllInclude<ExtArgs> | null
    /**
     * Filter, which vwProcessAssign2Alls to fetch.
     */
    where?: vwProcessAssign2AllWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vwProcessAssign2Alls to fetch.
     */
    orderBy?: vwProcessAssign2AllOrderByWithRelationInput | vwProcessAssign2AllOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vwProcessAssign2Alls.
     */
    cursor?: vwProcessAssign2AllWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vwProcessAssign2Alls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vwProcessAssign2Alls.
     */
    skip?: number
    distinct?: VwProcessAssign2AllScalarFieldEnum | VwProcessAssign2AllScalarFieldEnum[]
  }

  /**
   * vwProcessAssign2All create
   */
  export type vwProcessAssign2AllCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcessAssign2All
     */
    select?: vwProcessAssign2AllSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcessAssign2All
     */
    omit?: vwProcessAssign2AllOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProcessAssign2AllInclude<ExtArgs> | null
    /**
     * The data needed to create a vwProcessAssign2All.
     */
    data: XOR<vwProcessAssign2AllCreateInput, vwProcessAssign2AllUncheckedCreateInput>
  }

  /**
   * vwProcessAssign2All createMany
   */
  export type vwProcessAssign2AllCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vwProcessAssign2Alls.
     */
    data: vwProcessAssign2AllCreateManyInput | vwProcessAssign2AllCreateManyInput[]
  }

  /**
   * vwProcessAssign2All update
   */
  export type vwProcessAssign2AllUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcessAssign2All
     */
    select?: vwProcessAssign2AllSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcessAssign2All
     */
    omit?: vwProcessAssign2AllOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProcessAssign2AllInclude<ExtArgs> | null
    /**
     * The data needed to update a vwProcessAssign2All.
     */
    data: XOR<vwProcessAssign2AllUpdateInput, vwProcessAssign2AllUncheckedUpdateInput>
    /**
     * Choose, which vwProcessAssign2All to update.
     */
    where: vwProcessAssign2AllWhereUniqueInput
  }

  /**
   * vwProcessAssign2All updateMany
   */
  export type vwProcessAssign2AllUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vwProcessAssign2Alls.
     */
    data: XOR<vwProcessAssign2AllUpdateManyMutationInput, vwProcessAssign2AllUncheckedUpdateManyInput>
    /**
     * Filter which vwProcessAssign2Alls to update
     */
    where?: vwProcessAssign2AllWhereInput
    /**
     * Limit how many vwProcessAssign2Alls to update.
     */
    limit?: number
  }

  /**
   * vwProcessAssign2All upsert
   */
  export type vwProcessAssign2AllUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcessAssign2All
     */
    select?: vwProcessAssign2AllSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcessAssign2All
     */
    omit?: vwProcessAssign2AllOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProcessAssign2AllInclude<ExtArgs> | null
    /**
     * The filter to search for the vwProcessAssign2All to update in case it exists.
     */
    where: vwProcessAssign2AllWhereUniqueInput
    /**
     * In case the vwProcessAssign2All found by the `where` argument doesn't exist, create a new vwProcessAssign2All with this data.
     */
    create: XOR<vwProcessAssign2AllCreateInput, vwProcessAssign2AllUncheckedCreateInput>
    /**
     * In case the vwProcessAssign2All was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vwProcessAssign2AllUpdateInput, vwProcessAssign2AllUncheckedUpdateInput>
  }

  /**
   * vwProcessAssign2All delete
   */
  export type vwProcessAssign2AllDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcessAssign2All
     */
    select?: vwProcessAssign2AllSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcessAssign2All
     */
    omit?: vwProcessAssign2AllOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProcessAssign2AllInclude<ExtArgs> | null
    /**
     * Filter which vwProcessAssign2All to delete.
     */
    where: vwProcessAssign2AllWhereUniqueInput
  }

  /**
   * vwProcessAssign2All deleteMany
   */
  export type vwProcessAssign2AllDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vwProcessAssign2Alls to delete
     */
    where?: vwProcessAssign2AllWhereInput
    /**
     * Limit how many vwProcessAssign2Alls to delete.
     */
    limit?: number
  }

  /**
   * vwProcessAssign2All.vwProcessActivity
   */
  export type vwProcessAssign2All$vwProcessActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcessActivity
     */
    select?: vwProcessActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcessActivity
     */
    omit?: vwProcessActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProcessActivityInclude<ExtArgs> | null
    where?: vwProcessActivityWhereInput
    orderBy?: vwProcessActivityOrderByWithRelationInput | vwProcessActivityOrderByWithRelationInput[]
    cursor?: vwProcessActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VwProcessActivityScalarFieldEnum | VwProcessActivityScalarFieldEnum[]
  }

  /**
   * vwProcessAssign2All without action
   */
  export type vwProcessAssign2AllDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcessAssign2All
     */
    select?: vwProcessAssign2AllSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcessAssign2All
     */
    omit?: vwProcessAssign2AllOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProcessAssign2AllInclude<ExtArgs> | null
  }


  /**
   * Model vwProcessGroup
   */

  export type AggregateVwProcessGroup = {
    _count: VwProcessGroupCountAggregateOutputType | null
    _avg: VwProcessGroupAvgAggregateOutputType | null
    _sum: VwProcessGroupSumAggregateOutputType | null
    _min: VwProcessGroupMinAggregateOutputType | null
    _max: VwProcessGroupMaxAggregateOutputType | null
  }

  export type VwProcessGroupAvgAggregateOutputType = {
    UnitID: number | null
    ProcessGroupNameSort: number | null
    ProcessGroupPlanDuration: number | null
    ProcessGroupActualDuration: number | null
    ProcessGroupDelayInDay: number | null
  }

  export type VwProcessGroupSumAggregateOutputType = {
    UnitID: number | null
    ProcessGroupNameSort: number | null
    ProcessGroupPlanDuration: number | null
    ProcessGroupActualDuration: number | null
    ProcessGroupDelayInDay: number | null
  }

  export type VwProcessGroupMinAggregateOutputType = {
    UnitID: number | null
    ProcessGroupNameSort: number | null
    ProcessGroupName: string | null
    ProcessGroupPlanStartDate: Date | null
    ProcessGroupPlanEndDate: Date | null
    ProcessGroupPlanDuration: number | null
    ProcessGroupActualStartDate: Date | null
    ProcessGroupActualEndDate: Date | null
    ProcessGroupActualDuration: number | null
    ProcessGroupDelayInDay: number | null
    LastModified: Date | null
  }

  export type VwProcessGroupMaxAggregateOutputType = {
    UnitID: number | null
    ProcessGroupNameSort: number | null
    ProcessGroupName: string | null
    ProcessGroupPlanStartDate: Date | null
    ProcessGroupPlanEndDate: Date | null
    ProcessGroupPlanDuration: number | null
    ProcessGroupActualStartDate: Date | null
    ProcessGroupActualEndDate: Date | null
    ProcessGroupActualDuration: number | null
    ProcessGroupDelayInDay: number | null
    LastModified: Date | null
  }

  export type VwProcessGroupCountAggregateOutputType = {
    UnitID: number
    ProcessGroupNameSort: number
    ProcessGroupName: number
    ProcessGroupPlanStartDate: number
    ProcessGroupPlanEndDate: number
    ProcessGroupPlanDuration: number
    ProcessGroupActualStartDate: number
    ProcessGroupActualEndDate: number
    ProcessGroupActualDuration: number
    ProcessGroupDelayInDay: number
    LastModified: number
    _all: number
  }


  export type VwProcessGroupAvgAggregateInputType = {
    UnitID?: true
    ProcessGroupNameSort?: true
    ProcessGroupPlanDuration?: true
    ProcessGroupActualDuration?: true
    ProcessGroupDelayInDay?: true
  }

  export type VwProcessGroupSumAggregateInputType = {
    UnitID?: true
    ProcessGroupNameSort?: true
    ProcessGroupPlanDuration?: true
    ProcessGroupActualDuration?: true
    ProcessGroupDelayInDay?: true
  }

  export type VwProcessGroupMinAggregateInputType = {
    UnitID?: true
    ProcessGroupNameSort?: true
    ProcessGroupName?: true
    ProcessGroupPlanStartDate?: true
    ProcessGroupPlanEndDate?: true
    ProcessGroupPlanDuration?: true
    ProcessGroupActualStartDate?: true
    ProcessGroupActualEndDate?: true
    ProcessGroupActualDuration?: true
    ProcessGroupDelayInDay?: true
    LastModified?: true
  }

  export type VwProcessGroupMaxAggregateInputType = {
    UnitID?: true
    ProcessGroupNameSort?: true
    ProcessGroupName?: true
    ProcessGroupPlanStartDate?: true
    ProcessGroupPlanEndDate?: true
    ProcessGroupPlanDuration?: true
    ProcessGroupActualStartDate?: true
    ProcessGroupActualEndDate?: true
    ProcessGroupActualDuration?: true
    ProcessGroupDelayInDay?: true
    LastModified?: true
  }

  export type VwProcessGroupCountAggregateInputType = {
    UnitID?: true
    ProcessGroupNameSort?: true
    ProcessGroupName?: true
    ProcessGroupPlanStartDate?: true
    ProcessGroupPlanEndDate?: true
    ProcessGroupPlanDuration?: true
    ProcessGroupActualStartDate?: true
    ProcessGroupActualEndDate?: true
    ProcessGroupActualDuration?: true
    ProcessGroupDelayInDay?: true
    LastModified?: true
    _all?: true
  }

  export type VwProcessGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vwProcessGroup to aggregate.
     */
    where?: vwProcessGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vwProcessGroups to fetch.
     */
    orderBy?: vwProcessGroupOrderByWithRelationInput | vwProcessGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vwProcessGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vwProcessGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vwProcessGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vwProcessGroups
    **/
    _count?: true | VwProcessGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VwProcessGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VwProcessGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VwProcessGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VwProcessGroupMaxAggregateInputType
  }

  export type GetVwProcessGroupAggregateType<T extends VwProcessGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateVwProcessGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVwProcessGroup[P]>
      : GetScalarType<T[P], AggregateVwProcessGroup[P]>
  }




  export type vwProcessGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vwProcessGroupWhereInput
    orderBy?: vwProcessGroupOrderByWithAggregationInput | vwProcessGroupOrderByWithAggregationInput[]
    by: VwProcessGroupScalarFieldEnum[] | VwProcessGroupScalarFieldEnum
    having?: vwProcessGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VwProcessGroupCountAggregateInputType | true
    _avg?: VwProcessGroupAvgAggregateInputType
    _sum?: VwProcessGroupSumAggregateInputType
    _min?: VwProcessGroupMinAggregateInputType
    _max?: VwProcessGroupMaxAggregateInputType
  }

  export type VwProcessGroupGroupByOutputType = {
    UnitID: number
    ProcessGroupNameSort: number | null
    ProcessGroupName: string | null
    ProcessGroupPlanStartDate: Date | null
    ProcessGroupPlanEndDate: Date | null
    ProcessGroupPlanDuration: number | null
    ProcessGroupActualStartDate: Date | null
    ProcessGroupActualEndDate: Date | null
    ProcessGroupActualDuration: number | null
    ProcessGroupDelayInDay: number | null
    LastModified: Date | null
    _count: VwProcessGroupCountAggregateOutputType | null
    _avg: VwProcessGroupAvgAggregateOutputType | null
    _sum: VwProcessGroupSumAggregateOutputType | null
    _min: VwProcessGroupMinAggregateOutputType | null
    _max: VwProcessGroupMaxAggregateOutputType | null
  }

  type GetVwProcessGroupGroupByPayload<T extends vwProcessGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VwProcessGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VwProcessGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VwProcessGroupGroupByOutputType[P]>
            : GetScalarType<T[P], VwProcessGroupGroupByOutputType[P]>
        }
      >
    >


  export type vwProcessGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UnitID?: boolean
    ProcessGroupNameSort?: boolean
    ProcessGroupName?: boolean
    ProcessGroupPlanStartDate?: boolean
    ProcessGroupPlanEndDate?: boolean
    ProcessGroupPlanDuration?: boolean
    ProcessGroupActualStartDate?: boolean
    ProcessGroupActualEndDate?: boolean
    ProcessGroupActualDuration?: boolean
    ProcessGroupDelayInDay?: boolean
    LastModified?: boolean
  }, ExtArgs["result"]["vwProcessGroup"]>



  export type vwProcessGroupSelectScalar = {
    UnitID?: boolean
    ProcessGroupNameSort?: boolean
    ProcessGroupName?: boolean
    ProcessGroupPlanStartDate?: boolean
    ProcessGroupPlanEndDate?: boolean
    ProcessGroupPlanDuration?: boolean
    ProcessGroupActualStartDate?: boolean
    ProcessGroupActualEndDate?: boolean
    ProcessGroupActualDuration?: boolean
    ProcessGroupDelayInDay?: boolean
    LastModified?: boolean
  }

  export type vwProcessGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"UnitID" | "ProcessGroupNameSort" | "ProcessGroupName" | "ProcessGroupPlanStartDate" | "ProcessGroupPlanEndDate" | "ProcessGroupPlanDuration" | "ProcessGroupActualStartDate" | "ProcessGroupActualEndDate" | "ProcessGroupActualDuration" | "ProcessGroupDelayInDay" | "LastModified", ExtArgs["result"]["vwProcessGroup"]>

  export type $vwProcessGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vwProcessGroup"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      UnitID: number
      ProcessGroupNameSort: number | null
      ProcessGroupName: string | null
      ProcessGroupPlanStartDate: Date | null
      ProcessGroupPlanEndDate: Date | null
      ProcessGroupPlanDuration: number | null
      ProcessGroupActualStartDate: Date | null
      ProcessGroupActualEndDate: Date | null
      ProcessGroupActualDuration: number | null
      ProcessGroupDelayInDay: number | null
      LastModified: Date | null
    }, ExtArgs["result"]["vwProcessGroup"]>
    composites: {}
  }

  type vwProcessGroupGetPayload<S extends boolean | null | undefined | vwProcessGroupDefaultArgs> = $Result.GetResult<Prisma.$vwProcessGroupPayload, S>

  type vwProcessGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vwProcessGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VwProcessGroupCountAggregateInputType | true
    }

  export interface vwProcessGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vwProcessGroup'], meta: { name: 'vwProcessGroup' } }
    /**
     * Find zero or one VwProcessGroup that matches the filter.
     * @param {vwProcessGroupFindUniqueArgs} args - Arguments to find a VwProcessGroup
     * @example
     * // Get one VwProcessGroup
     * const vwProcessGroup = await prisma.vwProcessGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vwProcessGroupFindUniqueArgs>(args: SelectSubset<T, vwProcessGroupFindUniqueArgs<ExtArgs>>): Prisma__vwProcessGroupClient<$Result.GetResult<Prisma.$vwProcessGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VwProcessGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vwProcessGroupFindUniqueOrThrowArgs} args - Arguments to find a VwProcessGroup
     * @example
     * // Get one VwProcessGroup
     * const vwProcessGroup = await prisma.vwProcessGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vwProcessGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, vwProcessGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vwProcessGroupClient<$Result.GetResult<Prisma.$vwProcessGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VwProcessGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwProcessGroupFindFirstArgs} args - Arguments to find a VwProcessGroup
     * @example
     * // Get one VwProcessGroup
     * const vwProcessGroup = await prisma.vwProcessGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vwProcessGroupFindFirstArgs>(args?: SelectSubset<T, vwProcessGroupFindFirstArgs<ExtArgs>>): Prisma__vwProcessGroupClient<$Result.GetResult<Prisma.$vwProcessGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VwProcessGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwProcessGroupFindFirstOrThrowArgs} args - Arguments to find a VwProcessGroup
     * @example
     * // Get one VwProcessGroup
     * const vwProcessGroup = await prisma.vwProcessGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vwProcessGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, vwProcessGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__vwProcessGroupClient<$Result.GetResult<Prisma.$vwProcessGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VwProcessGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwProcessGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VwProcessGroups
     * const vwProcessGroups = await prisma.vwProcessGroup.findMany()
     * 
     * // Get first 10 VwProcessGroups
     * const vwProcessGroups = await prisma.vwProcessGroup.findMany({ take: 10 })
     * 
     * // Only select the `UnitID`
     * const vwProcessGroupWithUnitIDOnly = await prisma.vwProcessGroup.findMany({ select: { UnitID: true } })
     * 
     */
    findMany<T extends vwProcessGroupFindManyArgs>(args?: SelectSubset<T, vwProcessGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vwProcessGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VwProcessGroup.
     * @param {vwProcessGroupCreateArgs} args - Arguments to create a VwProcessGroup.
     * @example
     * // Create one VwProcessGroup
     * const VwProcessGroup = await prisma.vwProcessGroup.create({
     *   data: {
     *     // ... data to create a VwProcessGroup
     *   }
     * })
     * 
     */
    create<T extends vwProcessGroupCreateArgs>(args: SelectSubset<T, vwProcessGroupCreateArgs<ExtArgs>>): Prisma__vwProcessGroupClient<$Result.GetResult<Prisma.$vwProcessGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VwProcessGroups.
     * @param {vwProcessGroupCreateManyArgs} args - Arguments to create many VwProcessGroups.
     * @example
     * // Create many VwProcessGroups
     * const vwProcessGroup = await prisma.vwProcessGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vwProcessGroupCreateManyArgs>(args?: SelectSubset<T, vwProcessGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VwProcessGroup.
     * @param {vwProcessGroupDeleteArgs} args - Arguments to delete one VwProcessGroup.
     * @example
     * // Delete one VwProcessGroup
     * const VwProcessGroup = await prisma.vwProcessGroup.delete({
     *   where: {
     *     // ... filter to delete one VwProcessGroup
     *   }
     * })
     * 
     */
    delete<T extends vwProcessGroupDeleteArgs>(args: SelectSubset<T, vwProcessGroupDeleteArgs<ExtArgs>>): Prisma__vwProcessGroupClient<$Result.GetResult<Prisma.$vwProcessGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VwProcessGroup.
     * @param {vwProcessGroupUpdateArgs} args - Arguments to update one VwProcessGroup.
     * @example
     * // Update one VwProcessGroup
     * const vwProcessGroup = await prisma.vwProcessGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vwProcessGroupUpdateArgs>(args: SelectSubset<T, vwProcessGroupUpdateArgs<ExtArgs>>): Prisma__vwProcessGroupClient<$Result.GetResult<Prisma.$vwProcessGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VwProcessGroups.
     * @param {vwProcessGroupDeleteManyArgs} args - Arguments to filter VwProcessGroups to delete.
     * @example
     * // Delete a few VwProcessGroups
     * const { count } = await prisma.vwProcessGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vwProcessGroupDeleteManyArgs>(args?: SelectSubset<T, vwProcessGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VwProcessGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwProcessGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VwProcessGroups
     * const vwProcessGroup = await prisma.vwProcessGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vwProcessGroupUpdateManyArgs>(args: SelectSubset<T, vwProcessGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VwProcessGroup.
     * @param {vwProcessGroupUpsertArgs} args - Arguments to update or create a VwProcessGroup.
     * @example
     * // Update or create a VwProcessGroup
     * const vwProcessGroup = await prisma.vwProcessGroup.upsert({
     *   create: {
     *     // ... data to create a VwProcessGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VwProcessGroup we want to update
     *   }
     * })
     */
    upsert<T extends vwProcessGroupUpsertArgs>(args: SelectSubset<T, vwProcessGroupUpsertArgs<ExtArgs>>): Prisma__vwProcessGroupClient<$Result.GetResult<Prisma.$vwProcessGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VwProcessGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwProcessGroupCountArgs} args - Arguments to filter VwProcessGroups to count.
     * @example
     * // Count the number of VwProcessGroups
     * const count = await prisma.vwProcessGroup.count({
     *   where: {
     *     // ... the filter for the VwProcessGroups we want to count
     *   }
     * })
    **/
    count<T extends vwProcessGroupCountArgs>(
      args?: Subset<T, vwProcessGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VwProcessGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VwProcessGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwProcessGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VwProcessGroupAggregateArgs>(args: Subset<T, VwProcessGroupAggregateArgs>): Prisma.PrismaPromise<GetVwProcessGroupAggregateType<T>>

    /**
     * Group by VwProcessGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwProcessGroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends vwProcessGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vwProcessGroupGroupByArgs['orderBy'] }
        : { orderBy?: vwProcessGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, vwProcessGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVwProcessGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vwProcessGroup model
   */
  readonly fields: vwProcessGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vwProcessGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vwProcessGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the vwProcessGroup model
   */
  interface vwProcessGroupFieldRefs {
    readonly UnitID: FieldRef<"vwProcessGroup", 'Int'>
    readonly ProcessGroupNameSort: FieldRef<"vwProcessGroup", 'Int'>
    readonly ProcessGroupName: FieldRef<"vwProcessGroup", 'String'>
    readonly ProcessGroupPlanStartDate: FieldRef<"vwProcessGroup", 'DateTime'>
    readonly ProcessGroupPlanEndDate: FieldRef<"vwProcessGroup", 'DateTime'>
    readonly ProcessGroupPlanDuration: FieldRef<"vwProcessGroup", 'Int'>
    readonly ProcessGroupActualStartDate: FieldRef<"vwProcessGroup", 'DateTime'>
    readonly ProcessGroupActualEndDate: FieldRef<"vwProcessGroup", 'DateTime'>
    readonly ProcessGroupActualDuration: FieldRef<"vwProcessGroup", 'Int'>
    readonly ProcessGroupDelayInDay: FieldRef<"vwProcessGroup", 'Int'>
    readonly LastModified: FieldRef<"vwProcessGroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * vwProcessGroup findUnique
   */
  export type vwProcessGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcessGroup
     */
    select?: vwProcessGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcessGroup
     */
    omit?: vwProcessGroupOmit<ExtArgs> | null
    /**
     * Filter, which vwProcessGroup to fetch.
     */
    where: vwProcessGroupWhereUniqueInput
  }

  /**
   * vwProcessGroup findUniqueOrThrow
   */
  export type vwProcessGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcessGroup
     */
    select?: vwProcessGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcessGroup
     */
    omit?: vwProcessGroupOmit<ExtArgs> | null
    /**
     * Filter, which vwProcessGroup to fetch.
     */
    where: vwProcessGroupWhereUniqueInput
  }

  /**
   * vwProcessGroup findFirst
   */
  export type vwProcessGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcessGroup
     */
    select?: vwProcessGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcessGroup
     */
    omit?: vwProcessGroupOmit<ExtArgs> | null
    /**
     * Filter, which vwProcessGroup to fetch.
     */
    where?: vwProcessGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vwProcessGroups to fetch.
     */
    orderBy?: vwProcessGroupOrderByWithRelationInput | vwProcessGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vwProcessGroups.
     */
    cursor?: vwProcessGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vwProcessGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vwProcessGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vwProcessGroups.
     */
    distinct?: VwProcessGroupScalarFieldEnum | VwProcessGroupScalarFieldEnum[]
  }

  /**
   * vwProcessGroup findFirstOrThrow
   */
  export type vwProcessGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcessGroup
     */
    select?: vwProcessGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcessGroup
     */
    omit?: vwProcessGroupOmit<ExtArgs> | null
    /**
     * Filter, which vwProcessGroup to fetch.
     */
    where?: vwProcessGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vwProcessGroups to fetch.
     */
    orderBy?: vwProcessGroupOrderByWithRelationInput | vwProcessGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vwProcessGroups.
     */
    cursor?: vwProcessGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vwProcessGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vwProcessGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vwProcessGroups.
     */
    distinct?: VwProcessGroupScalarFieldEnum | VwProcessGroupScalarFieldEnum[]
  }

  /**
   * vwProcessGroup findMany
   */
  export type vwProcessGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcessGroup
     */
    select?: vwProcessGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcessGroup
     */
    omit?: vwProcessGroupOmit<ExtArgs> | null
    /**
     * Filter, which vwProcessGroups to fetch.
     */
    where?: vwProcessGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vwProcessGroups to fetch.
     */
    orderBy?: vwProcessGroupOrderByWithRelationInput | vwProcessGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vwProcessGroups.
     */
    cursor?: vwProcessGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vwProcessGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vwProcessGroups.
     */
    skip?: number
    distinct?: VwProcessGroupScalarFieldEnum | VwProcessGroupScalarFieldEnum[]
  }

  /**
   * vwProcessGroup create
   */
  export type vwProcessGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcessGroup
     */
    select?: vwProcessGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcessGroup
     */
    omit?: vwProcessGroupOmit<ExtArgs> | null
    /**
     * The data needed to create a vwProcessGroup.
     */
    data: XOR<vwProcessGroupCreateInput, vwProcessGroupUncheckedCreateInput>
  }

  /**
   * vwProcessGroup createMany
   */
  export type vwProcessGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vwProcessGroups.
     */
    data: vwProcessGroupCreateManyInput | vwProcessGroupCreateManyInput[]
  }

  /**
   * vwProcessGroup update
   */
  export type vwProcessGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcessGroup
     */
    select?: vwProcessGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcessGroup
     */
    omit?: vwProcessGroupOmit<ExtArgs> | null
    /**
     * The data needed to update a vwProcessGroup.
     */
    data: XOR<vwProcessGroupUpdateInput, vwProcessGroupUncheckedUpdateInput>
    /**
     * Choose, which vwProcessGroup to update.
     */
    where: vwProcessGroupWhereUniqueInput
  }

  /**
   * vwProcessGroup updateMany
   */
  export type vwProcessGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vwProcessGroups.
     */
    data: XOR<vwProcessGroupUpdateManyMutationInput, vwProcessGroupUncheckedUpdateManyInput>
    /**
     * Filter which vwProcessGroups to update
     */
    where?: vwProcessGroupWhereInput
    /**
     * Limit how many vwProcessGroups to update.
     */
    limit?: number
  }

  /**
   * vwProcessGroup upsert
   */
  export type vwProcessGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcessGroup
     */
    select?: vwProcessGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcessGroup
     */
    omit?: vwProcessGroupOmit<ExtArgs> | null
    /**
     * The filter to search for the vwProcessGroup to update in case it exists.
     */
    where: vwProcessGroupWhereUniqueInput
    /**
     * In case the vwProcessGroup found by the `where` argument doesn't exist, create a new vwProcessGroup with this data.
     */
    create: XOR<vwProcessGroupCreateInput, vwProcessGroupUncheckedCreateInput>
    /**
     * In case the vwProcessGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vwProcessGroupUpdateInput, vwProcessGroupUncheckedUpdateInput>
  }

  /**
   * vwProcessGroup delete
   */
  export type vwProcessGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcessGroup
     */
    select?: vwProcessGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcessGroup
     */
    omit?: vwProcessGroupOmit<ExtArgs> | null
    /**
     * Filter which vwProcessGroup to delete.
     */
    where: vwProcessGroupWhereUniqueInput
  }

  /**
   * vwProcessGroup deleteMany
   */
  export type vwProcessGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vwProcessGroups to delete
     */
    where?: vwProcessGroupWhereInput
    /**
     * Limit how many vwProcessGroups to delete.
     */
    limit?: number
  }

  /**
   * vwProcessGroup without action
   */
  export type vwProcessGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcessGroup
     */
    select?: vwProcessGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcessGroup
     */
    omit?: vwProcessGroupOmit<ExtArgs> | null
  }


  /**
   * Model vwProduct
   */

  export type AggregateVwProduct = {
    _count: VwProductCountAggregateOutputType | null
    _avg: VwProductAvgAggregateOutputType | null
    _sum: VwProductSumAggregateOutputType | null
    _min: VwProductMinAggregateOutputType | null
    _max: VwProductMaxAggregateOutputType | null
  }

  export type VwProductAvgAggregateOutputType = {
    ProductID: number | null
    ProductGroupID: number | null
    ProductTotalDay: number | null
    ProductStandardHours: Decimal | null
  }

  export type VwProductSumAggregateOutputType = {
    ProductID: number | null
    ProductGroupID: number | null
    ProductTotalDay: number | null
    ProductStandardHours: Decimal | null
  }

  export type VwProductMinAggregateOutputType = {
    ProductID: number | null
    ProductGroupID: number | null
    ProductName: string | null
    ProductPN: string | null
    ProductTotalDay: number | null
    ProductSubGroupName: string | null
    ProductSubGroupSAPCode: string | null
    ProductStandardHours: Decimal | null
    LastModified: Date | null
  }

  export type VwProductMaxAggregateOutputType = {
    ProductID: number | null
    ProductGroupID: number | null
    ProductName: string | null
    ProductPN: string | null
    ProductTotalDay: number | null
    ProductSubGroupName: string | null
    ProductSubGroupSAPCode: string | null
    ProductStandardHours: Decimal | null
    LastModified: Date | null
  }

  export type VwProductCountAggregateOutputType = {
    ProductID: number
    ProductGroupID: number
    ProductName: number
    ProductPN: number
    ProductTotalDay: number
    ProductSubGroupName: number
    ProductSubGroupSAPCode: number
    ProductStandardHours: number
    LastModified: number
    _all: number
  }


  export type VwProductAvgAggregateInputType = {
    ProductID?: true
    ProductGroupID?: true
    ProductTotalDay?: true
    ProductStandardHours?: true
  }

  export type VwProductSumAggregateInputType = {
    ProductID?: true
    ProductGroupID?: true
    ProductTotalDay?: true
    ProductStandardHours?: true
  }

  export type VwProductMinAggregateInputType = {
    ProductID?: true
    ProductGroupID?: true
    ProductName?: true
    ProductPN?: true
    ProductTotalDay?: true
    ProductSubGroupName?: true
    ProductSubGroupSAPCode?: true
    ProductStandardHours?: true
    LastModified?: true
  }

  export type VwProductMaxAggregateInputType = {
    ProductID?: true
    ProductGroupID?: true
    ProductName?: true
    ProductPN?: true
    ProductTotalDay?: true
    ProductSubGroupName?: true
    ProductSubGroupSAPCode?: true
    ProductStandardHours?: true
    LastModified?: true
  }

  export type VwProductCountAggregateInputType = {
    ProductID?: true
    ProductGroupID?: true
    ProductName?: true
    ProductPN?: true
    ProductTotalDay?: true
    ProductSubGroupName?: true
    ProductSubGroupSAPCode?: true
    ProductStandardHours?: true
    LastModified?: true
    _all?: true
  }

  export type VwProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vwProduct to aggregate.
     */
    where?: vwProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vwProducts to fetch.
     */
    orderBy?: vwProductOrderByWithRelationInput | vwProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vwProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vwProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vwProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vwProducts
    **/
    _count?: true | VwProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VwProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VwProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VwProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VwProductMaxAggregateInputType
  }

  export type GetVwProductAggregateType<T extends VwProductAggregateArgs> = {
        [P in keyof T & keyof AggregateVwProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVwProduct[P]>
      : GetScalarType<T[P], AggregateVwProduct[P]>
  }




  export type vwProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vwProductWhereInput
    orderBy?: vwProductOrderByWithAggregationInput | vwProductOrderByWithAggregationInput[]
    by: VwProductScalarFieldEnum[] | VwProductScalarFieldEnum
    having?: vwProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VwProductCountAggregateInputType | true
    _avg?: VwProductAvgAggregateInputType
    _sum?: VwProductSumAggregateInputType
    _min?: VwProductMinAggregateInputType
    _max?: VwProductMaxAggregateInputType
  }

  export type VwProductGroupByOutputType = {
    ProductID: number
    ProductGroupID: number
    ProductName: string
    ProductPN: string
    ProductTotalDay: number | null
    ProductSubGroupName: string
    ProductSubGroupSAPCode: string
    ProductStandardHours: Decimal | null
    LastModified: Date
    _count: VwProductCountAggregateOutputType | null
    _avg: VwProductAvgAggregateOutputType | null
    _sum: VwProductSumAggregateOutputType | null
    _min: VwProductMinAggregateOutputType | null
    _max: VwProductMaxAggregateOutputType | null
  }

  type GetVwProductGroupByPayload<T extends vwProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VwProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VwProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VwProductGroupByOutputType[P]>
            : GetScalarType<T[P], VwProductGroupByOutputType[P]>
        }
      >
    >


  export type vwProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ProductID?: boolean
    ProductGroupID?: boolean
    ProductName?: boolean
    ProductPN?: boolean
    ProductTotalDay?: boolean
    ProductSubGroupName?: boolean
    ProductSubGroupSAPCode?: boolean
    ProductStandardHours?: boolean
    LastModified?: boolean
    vwProductGroup?: boolean | vwProductGroupDefaultArgs<ExtArgs>
    vwUnit?: boolean | vwProduct$vwUnitArgs<ExtArgs>
    _count?: boolean | VwProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vwProduct"]>



  export type vwProductSelectScalar = {
    ProductID?: boolean
    ProductGroupID?: boolean
    ProductName?: boolean
    ProductPN?: boolean
    ProductTotalDay?: boolean
    ProductSubGroupName?: boolean
    ProductSubGroupSAPCode?: boolean
    ProductStandardHours?: boolean
    LastModified?: boolean
  }

  export type vwProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ProductID" | "ProductGroupID" | "ProductName" | "ProductPN" | "ProductTotalDay" | "ProductSubGroupName" | "ProductSubGroupSAPCode" | "ProductStandardHours" | "LastModified", ExtArgs["result"]["vwProduct"]>
  export type vwProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vwProductGroup?: boolean | vwProductGroupDefaultArgs<ExtArgs>
    vwUnit?: boolean | vwProduct$vwUnitArgs<ExtArgs>
    _count?: boolean | VwProductCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $vwProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vwProduct"
    objects: {
      vwProductGroup: Prisma.$vwProductGroupPayload<ExtArgs>
      vwUnit: Prisma.$vwUnitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ProductID: number
      ProductGroupID: number
      ProductName: string
      ProductPN: string
      ProductTotalDay: number | null
      ProductSubGroupName: string
      ProductSubGroupSAPCode: string
      ProductStandardHours: Prisma.Decimal | null
      LastModified: Date
    }, ExtArgs["result"]["vwProduct"]>
    composites: {}
  }

  type vwProductGetPayload<S extends boolean | null | undefined | vwProductDefaultArgs> = $Result.GetResult<Prisma.$vwProductPayload, S>

  type vwProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vwProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VwProductCountAggregateInputType | true
    }

  export interface vwProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vwProduct'], meta: { name: 'vwProduct' } }
    /**
     * Find zero or one VwProduct that matches the filter.
     * @param {vwProductFindUniqueArgs} args - Arguments to find a VwProduct
     * @example
     * // Get one VwProduct
     * const vwProduct = await prisma.vwProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vwProductFindUniqueArgs>(args: SelectSubset<T, vwProductFindUniqueArgs<ExtArgs>>): Prisma__vwProductClient<$Result.GetResult<Prisma.$vwProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VwProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vwProductFindUniqueOrThrowArgs} args - Arguments to find a VwProduct
     * @example
     * // Get one VwProduct
     * const vwProduct = await prisma.vwProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vwProductFindUniqueOrThrowArgs>(args: SelectSubset<T, vwProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vwProductClient<$Result.GetResult<Prisma.$vwProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VwProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwProductFindFirstArgs} args - Arguments to find a VwProduct
     * @example
     * // Get one VwProduct
     * const vwProduct = await prisma.vwProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vwProductFindFirstArgs>(args?: SelectSubset<T, vwProductFindFirstArgs<ExtArgs>>): Prisma__vwProductClient<$Result.GetResult<Prisma.$vwProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VwProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwProductFindFirstOrThrowArgs} args - Arguments to find a VwProduct
     * @example
     * // Get one VwProduct
     * const vwProduct = await prisma.vwProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vwProductFindFirstOrThrowArgs>(args?: SelectSubset<T, vwProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__vwProductClient<$Result.GetResult<Prisma.$vwProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VwProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VwProducts
     * const vwProducts = await prisma.vwProduct.findMany()
     * 
     * // Get first 10 VwProducts
     * const vwProducts = await prisma.vwProduct.findMany({ take: 10 })
     * 
     * // Only select the `ProductID`
     * const vwProductWithProductIDOnly = await prisma.vwProduct.findMany({ select: { ProductID: true } })
     * 
     */
    findMany<T extends vwProductFindManyArgs>(args?: SelectSubset<T, vwProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vwProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VwProduct.
     * @param {vwProductCreateArgs} args - Arguments to create a VwProduct.
     * @example
     * // Create one VwProduct
     * const VwProduct = await prisma.vwProduct.create({
     *   data: {
     *     // ... data to create a VwProduct
     *   }
     * })
     * 
     */
    create<T extends vwProductCreateArgs>(args: SelectSubset<T, vwProductCreateArgs<ExtArgs>>): Prisma__vwProductClient<$Result.GetResult<Prisma.$vwProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VwProducts.
     * @param {vwProductCreateManyArgs} args - Arguments to create many VwProducts.
     * @example
     * // Create many VwProducts
     * const vwProduct = await prisma.vwProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vwProductCreateManyArgs>(args?: SelectSubset<T, vwProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VwProduct.
     * @param {vwProductDeleteArgs} args - Arguments to delete one VwProduct.
     * @example
     * // Delete one VwProduct
     * const VwProduct = await prisma.vwProduct.delete({
     *   where: {
     *     // ... filter to delete one VwProduct
     *   }
     * })
     * 
     */
    delete<T extends vwProductDeleteArgs>(args: SelectSubset<T, vwProductDeleteArgs<ExtArgs>>): Prisma__vwProductClient<$Result.GetResult<Prisma.$vwProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VwProduct.
     * @param {vwProductUpdateArgs} args - Arguments to update one VwProduct.
     * @example
     * // Update one VwProduct
     * const vwProduct = await prisma.vwProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vwProductUpdateArgs>(args: SelectSubset<T, vwProductUpdateArgs<ExtArgs>>): Prisma__vwProductClient<$Result.GetResult<Prisma.$vwProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VwProducts.
     * @param {vwProductDeleteManyArgs} args - Arguments to filter VwProducts to delete.
     * @example
     * // Delete a few VwProducts
     * const { count } = await prisma.vwProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vwProductDeleteManyArgs>(args?: SelectSubset<T, vwProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VwProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VwProducts
     * const vwProduct = await prisma.vwProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vwProductUpdateManyArgs>(args: SelectSubset<T, vwProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VwProduct.
     * @param {vwProductUpsertArgs} args - Arguments to update or create a VwProduct.
     * @example
     * // Update or create a VwProduct
     * const vwProduct = await prisma.vwProduct.upsert({
     *   create: {
     *     // ... data to create a VwProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VwProduct we want to update
     *   }
     * })
     */
    upsert<T extends vwProductUpsertArgs>(args: SelectSubset<T, vwProductUpsertArgs<ExtArgs>>): Prisma__vwProductClient<$Result.GetResult<Prisma.$vwProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VwProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwProductCountArgs} args - Arguments to filter VwProducts to count.
     * @example
     * // Count the number of VwProducts
     * const count = await prisma.vwProduct.count({
     *   where: {
     *     // ... the filter for the VwProducts we want to count
     *   }
     * })
    **/
    count<T extends vwProductCountArgs>(
      args?: Subset<T, vwProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VwProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VwProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VwProductAggregateArgs>(args: Subset<T, VwProductAggregateArgs>): Prisma.PrismaPromise<GetVwProductAggregateType<T>>

    /**
     * Group by VwProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends vwProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vwProductGroupByArgs['orderBy'] }
        : { orderBy?: vwProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, vwProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVwProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vwProduct model
   */
  readonly fields: vwProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vwProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vwProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vwProductGroup<T extends vwProductGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, vwProductGroupDefaultArgs<ExtArgs>>): Prisma__vwProductGroupClient<$Result.GetResult<Prisma.$vwProductGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vwUnit<T extends vwProduct$vwUnitArgs<ExtArgs> = {}>(args?: Subset<T, vwProduct$vwUnitArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vwUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the vwProduct model
   */
  interface vwProductFieldRefs {
    readonly ProductID: FieldRef<"vwProduct", 'Int'>
    readonly ProductGroupID: FieldRef<"vwProduct", 'Int'>
    readonly ProductName: FieldRef<"vwProduct", 'String'>
    readonly ProductPN: FieldRef<"vwProduct", 'String'>
    readonly ProductTotalDay: FieldRef<"vwProduct", 'Int'>
    readonly ProductSubGroupName: FieldRef<"vwProduct", 'String'>
    readonly ProductSubGroupSAPCode: FieldRef<"vwProduct", 'String'>
    readonly ProductStandardHours: FieldRef<"vwProduct", 'Decimal'>
    readonly LastModified: FieldRef<"vwProduct", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * vwProduct findUnique
   */
  export type vwProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProduct
     */
    select?: vwProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProduct
     */
    omit?: vwProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProductInclude<ExtArgs> | null
    /**
     * Filter, which vwProduct to fetch.
     */
    where: vwProductWhereUniqueInput
  }

  /**
   * vwProduct findUniqueOrThrow
   */
  export type vwProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProduct
     */
    select?: vwProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProduct
     */
    omit?: vwProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProductInclude<ExtArgs> | null
    /**
     * Filter, which vwProduct to fetch.
     */
    where: vwProductWhereUniqueInput
  }

  /**
   * vwProduct findFirst
   */
  export type vwProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProduct
     */
    select?: vwProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProduct
     */
    omit?: vwProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProductInclude<ExtArgs> | null
    /**
     * Filter, which vwProduct to fetch.
     */
    where?: vwProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vwProducts to fetch.
     */
    orderBy?: vwProductOrderByWithRelationInput | vwProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vwProducts.
     */
    cursor?: vwProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vwProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vwProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vwProducts.
     */
    distinct?: VwProductScalarFieldEnum | VwProductScalarFieldEnum[]
  }

  /**
   * vwProduct findFirstOrThrow
   */
  export type vwProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProduct
     */
    select?: vwProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProduct
     */
    omit?: vwProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProductInclude<ExtArgs> | null
    /**
     * Filter, which vwProduct to fetch.
     */
    where?: vwProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vwProducts to fetch.
     */
    orderBy?: vwProductOrderByWithRelationInput | vwProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vwProducts.
     */
    cursor?: vwProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vwProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vwProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vwProducts.
     */
    distinct?: VwProductScalarFieldEnum | VwProductScalarFieldEnum[]
  }

  /**
   * vwProduct findMany
   */
  export type vwProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProduct
     */
    select?: vwProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProduct
     */
    omit?: vwProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProductInclude<ExtArgs> | null
    /**
     * Filter, which vwProducts to fetch.
     */
    where?: vwProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vwProducts to fetch.
     */
    orderBy?: vwProductOrderByWithRelationInput | vwProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vwProducts.
     */
    cursor?: vwProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vwProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vwProducts.
     */
    skip?: number
    distinct?: VwProductScalarFieldEnum | VwProductScalarFieldEnum[]
  }

  /**
   * vwProduct create
   */
  export type vwProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProduct
     */
    select?: vwProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProduct
     */
    omit?: vwProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProductInclude<ExtArgs> | null
    /**
     * The data needed to create a vwProduct.
     */
    data: XOR<vwProductCreateInput, vwProductUncheckedCreateInput>
  }

  /**
   * vwProduct createMany
   */
  export type vwProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vwProducts.
     */
    data: vwProductCreateManyInput | vwProductCreateManyInput[]
  }

  /**
   * vwProduct update
   */
  export type vwProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProduct
     */
    select?: vwProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProduct
     */
    omit?: vwProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProductInclude<ExtArgs> | null
    /**
     * The data needed to update a vwProduct.
     */
    data: XOR<vwProductUpdateInput, vwProductUncheckedUpdateInput>
    /**
     * Choose, which vwProduct to update.
     */
    where: vwProductWhereUniqueInput
  }

  /**
   * vwProduct updateMany
   */
  export type vwProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vwProducts.
     */
    data: XOR<vwProductUpdateManyMutationInput, vwProductUncheckedUpdateManyInput>
    /**
     * Filter which vwProducts to update
     */
    where?: vwProductWhereInput
    /**
     * Limit how many vwProducts to update.
     */
    limit?: number
  }

  /**
   * vwProduct upsert
   */
  export type vwProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProduct
     */
    select?: vwProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProduct
     */
    omit?: vwProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProductInclude<ExtArgs> | null
    /**
     * The filter to search for the vwProduct to update in case it exists.
     */
    where: vwProductWhereUniqueInput
    /**
     * In case the vwProduct found by the `where` argument doesn't exist, create a new vwProduct with this data.
     */
    create: XOR<vwProductCreateInput, vwProductUncheckedCreateInput>
    /**
     * In case the vwProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vwProductUpdateInput, vwProductUncheckedUpdateInput>
  }

  /**
   * vwProduct delete
   */
  export type vwProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProduct
     */
    select?: vwProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProduct
     */
    omit?: vwProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProductInclude<ExtArgs> | null
    /**
     * Filter which vwProduct to delete.
     */
    where: vwProductWhereUniqueInput
  }

  /**
   * vwProduct deleteMany
   */
  export type vwProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vwProducts to delete
     */
    where?: vwProductWhereInput
    /**
     * Limit how many vwProducts to delete.
     */
    limit?: number
  }

  /**
   * vwProduct.vwUnit
   */
  export type vwProduct$vwUnitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwUnit
     */
    select?: vwUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwUnit
     */
    omit?: vwUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwUnitInclude<ExtArgs> | null
    where?: vwUnitWhereInput
    orderBy?: vwUnitOrderByWithRelationInput | vwUnitOrderByWithRelationInput[]
    cursor?: vwUnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VwUnitScalarFieldEnum | VwUnitScalarFieldEnum[]
  }

  /**
   * vwProduct without action
   */
  export type vwProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProduct
     */
    select?: vwProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProduct
     */
    omit?: vwProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProductInclude<ExtArgs> | null
  }


  /**
   * Model vwUnit
   */

  export type AggregateVwUnit = {
    _count: VwUnitCountAggregateOutputType | null
    _avg: VwUnitAvgAggregateOutputType | null
    _sum: VwUnitSumAggregateOutputType | null
    _min: VwUnitMinAggregateOutputType | null
    _max: VwUnitMaxAggregateOutputType | null
  }

  export type VwUnitAvgAggregateOutputType = {
    UnitID: number | null
    PROID: number | null
    ProductID: number | null
    UnitPlanDuration: number | null
    UnitActualDuration: number | null
    UnitActualHoursCompleted: Decimal | null
    UnitDelayInDay: number | null
    SOUnitprice: Decimal | null
    SalesOrderID: number | null
  }

  export type VwUnitSumAggregateOutputType = {
    UnitID: number | null
    PROID: number | null
    ProductID: number | null
    UnitPlanDuration: number | null
    UnitActualDuration: number | null
    UnitActualHoursCompleted: Decimal | null
    UnitDelayInDay: number | null
    SOUnitprice: Decimal | null
    SalesOrderID: number | null
  }

  export type VwUnitMinAggregateOutputType = {
    UnitID: number | null
    PROID: number | null
    ProductID: number | null
    UnitSerialNumber: string | null
    UnitChasisNumber: string | null
    UnitDueDate: Date | null
    UnitPlanStartDate: Date | null
    UnitPlanEndDate: Date | null
    UnitPlanDuration: number | null
    UnitActualStartDate: Date | null
    UnitActualEndDate: Date | null
    UnitActualDuration: number | null
    Unit_Status: string | null
    UnitMPSDueDate: Date | null
    UnitActualDeliveryDate: Date | null
    UnitActualHoursCompleted: Decimal | null
    UnitDelayInDay: number | null
    SOUnitprice: Decimal | null
    SalesOrderID: number | null
    UnitProcessLastStatus: string | null
    UnitProcessLastActualStartDate: Date | null
    UnitProcessLastPlanStartDate: Date | null
    IsHold: boolean | null
    LastModified: Date | null
  }

  export type VwUnitMaxAggregateOutputType = {
    UnitID: number | null
    PROID: number | null
    ProductID: number | null
    UnitSerialNumber: string | null
    UnitChasisNumber: string | null
    UnitDueDate: Date | null
    UnitPlanStartDate: Date | null
    UnitPlanEndDate: Date | null
    UnitPlanDuration: number | null
    UnitActualStartDate: Date | null
    UnitActualEndDate: Date | null
    UnitActualDuration: number | null
    Unit_Status: string | null
    UnitMPSDueDate: Date | null
    UnitActualDeliveryDate: Date | null
    UnitActualHoursCompleted: Decimal | null
    UnitDelayInDay: number | null
    SOUnitprice: Decimal | null
    SalesOrderID: number | null
    UnitProcessLastStatus: string | null
    UnitProcessLastActualStartDate: Date | null
    UnitProcessLastPlanStartDate: Date | null
    IsHold: boolean | null
    LastModified: Date | null
  }

  export type VwUnitCountAggregateOutputType = {
    UnitID: number
    PROID: number
    ProductID: number
    UnitSerialNumber: number
    UnitChasisNumber: number
    UnitDueDate: number
    UnitPlanStartDate: number
    UnitPlanEndDate: number
    UnitPlanDuration: number
    UnitActualStartDate: number
    UnitActualEndDate: number
    UnitActualDuration: number
    Unit_Status: number
    UnitMPSDueDate: number
    UnitActualDeliveryDate: number
    UnitActualHoursCompleted: number
    UnitDelayInDay: number
    SOUnitprice: number
    SalesOrderID: number
    UnitProcessLastStatus: number
    UnitProcessLastActualStartDate: number
    UnitProcessLastPlanStartDate: number
    IsHold: number
    LastModified: number
    _all: number
  }


  export type VwUnitAvgAggregateInputType = {
    UnitID?: true
    PROID?: true
    ProductID?: true
    UnitPlanDuration?: true
    UnitActualDuration?: true
    UnitActualHoursCompleted?: true
    UnitDelayInDay?: true
    SOUnitprice?: true
    SalesOrderID?: true
  }

  export type VwUnitSumAggregateInputType = {
    UnitID?: true
    PROID?: true
    ProductID?: true
    UnitPlanDuration?: true
    UnitActualDuration?: true
    UnitActualHoursCompleted?: true
    UnitDelayInDay?: true
    SOUnitprice?: true
    SalesOrderID?: true
  }

  export type VwUnitMinAggregateInputType = {
    UnitID?: true
    PROID?: true
    ProductID?: true
    UnitSerialNumber?: true
    UnitChasisNumber?: true
    UnitDueDate?: true
    UnitPlanStartDate?: true
    UnitPlanEndDate?: true
    UnitPlanDuration?: true
    UnitActualStartDate?: true
    UnitActualEndDate?: true
    UnitActualDuration?: true
    Unit_Status?: true
    UnitMPSDueDate?: true
    UnitActualDeliveryDate?: true
    UnitActualHoursCompleted?: true
    UnitDelayInDay?: true
    SOUnitprice?: true
    SalesOrderID?: true
    UnitProcessLastStatus?: true
    UnitProcessLastActualStartDate?: true
    UnitProcessLastPlanStartDate?: true
    IsHold?: true
    LastModified?: true
  }

  export type VwUnitMaxAggregateInputType = {
    UnitID?: true
    PROID?: true
    ProductID?: true
    UnitSerialNumber?: true
    UnitChasisNumber?: true
    UnitDueDate?: true
    UnitPlanStartDate?: true
    UnitPlanEndDate?: true
    UnitPlanDuration?: true
    UnitActualStartDate?: true
    UnitActualEndDate?: true
    UnitActualDuration?: true
    Unit_Status?: true
    UnitMPSDueDate?: true
    UnitActualDeliveryDate?: true
    UnitActualHoursCompleted?: true
    UnitDelayInDay?: true
    SOUnitprice?: true
    SalesOrderID?: true
    UnitProcessLastStatus?: true
    UnitProcessLastActualStartDate?: true
    UnitProcessLastPlanStartDate?: true
    IsHold?: true
    LastModified?: true
  }

  export type VwUnitCountAggregateInputType = {
    UnitID?: true
    PROID?: true
    ProductID?: true
    UnitSerialNumber?: true
    UnitChasisNumber?: true
    UnitDueDate?: true
    UnitPlanStartDate?: true
    UnitPlanEndDate?: true
    UnitPlanDuration?: true
    UnitActualStartDate?: true
    UnitActualEndDate?: true
    UnitActualDuration?: true
    Unit_Status?: true
    UnitMPSDueDate?: true
    UnitActualDeliveryDate?: true
    UnitActualHoursCompleted?: true
    UnitDelayInDay?: true
    SOUnitprice?: true
    SalesOrderID?: true
    UnitProcessLastStatus?: true
    UnitProcessLastActualStartDate?: true
    UnitProcessLastPlanStartDate?: true
    IsHold?: true
    LastModified?: true
    _all?: true
  }

  export type VwUnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vwUnit to aggregate.
     */
    where?: vwUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vwUnits to fetch.
     */
    orderBy?: vwUnitOrderByWithRelationInput | vwUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vwUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vwUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vwUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vwUnits
    **/
    _count?: true | VwUnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VwUnitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VwUnitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VwUnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VwUnitMaxAggregateInputType
  }

  export type GetVwUnitAggregateType<T extends VwUnitAggregateArgs> = {
        [P in keyof T & keyof AggregateVwUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVwUnit[P]>
      : GetScalarType<T[P], AggregateVwUnit[P]>
  }




  export type vwUnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vwUnitWhereInput
    orderBy?: vwUnitOrderByWithAggregationInput | vwUnitOrderByWithAggregationInput[]
    by: VwUnitScalarFieldEnum[] | VwUnitScalarFieldEnum
    having?: vwUnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VwUnitCountAggregateInputType | true
    _avg?: VwUnitAvgAggregateInputType
    _sum?: VwUnitSumAggregateInputType
    _min?: VwUnitMinAggregateInputType
    _max?: VwUnitMaxAggregateInputType
  }

  export type VwUnitGroupByOutputType = {
    UnitID: number
    PROID: number
    ProductID: number
    UnitSerialNumber: string
    UnitChasisNumber: string | null
    UnitDueDate: Date
    UnitPlanStartDate: Date | null
    UnitPlanEndDate: Date | null
    UnitPlanDuration: number | null
    UnitActualStartDate: Date | null
    UnitActualEndDate: Date | null
    UnitActualDuration: number | null
    Unit_Status: string
    UnitMPSDueDate: Date | null
    UnitActualDeliveryDate: Date | null
    UnitActualHoursCompleted: Decimal | null
    UnitDelayInDay: number | null
    SOUnitprice: Decimal | null
    SalesOrderID: number | null
    UnitProcessLastStatus: string
    UnitProcessLastActualStartDate: Date | null
    UnitProcessLastPlanStartDate: Date | null
    IsHold: boolean
    LastModified: Date
    _count: VwUnitCountAggregateOutputType | null
    _avg: VwUnitAvgAggregateOutputType | null
    _sum: VwUnitSumAggregateOutputType | null
    _min: VwUnitMinAggregateOutputType | null
    _max: VwUnitMaxAggregateOutputType | null
  }

  type GetVwUnitGroupByPayload<T extends vwUnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VwUnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VwUnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VwUnitGroupByOutputType[P]>
            : GetScalarType<T[P], VwUnitGroupByOutputType[P]>
        }
      >
    >


  export type vwUnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UnitID?: boolean
    PROID?: boolean
    ProductID?: boolean
    UnitSerialNumber?: boolean
    UnitChasisNumber?: boolean
    UnitDueDate?: boolean
    UnitPlanStartDate?: boolean
    UnitPlanEndDate?: boolean
    UnitPlanDuration?: boolean
    UnitActualStartDate?: boolean
    UnitActualEndDate?: boolean
    UnitActualDuration?: boolean
    Unit_Status?: boolean
    UnitMPSDueDate?: boolean
    UnitActualDeliveryDate?: boolean
    UnitActualHoursCompleted?: boolean
    UnitDelayInDay?: boolean
    SOUnitprice?: boolean
    SalesOrderID?: boolean
    UnitProcessLastStatus?: boolean
    UnitProcessLastActualStartDate?: boolean
    UnitProcessLastPlanStartDate?: boolean
    IsHold?: boolean
    LastModified?: boolean
    vwPRO?: boolean | vwPRO_2DefaultArgs<ExtArgs>
    vwProduct?: boolean | vwProductDefaultArgs<ExtArgs>
    vwProcess?: boolean | vwUnit$vwProcessArgs<ExtArgs>
    _count?: boolean | VwUnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vwUnit"]>



  export type vwUnitSelectScalar = {
    UnitID?: boolean
    PROID?: boolean
    ProductID?: boolean
    UnitSerialNumber?: boolean
    UnitChasisNumber?: boolean
    UnitDueDate?: boolean
    UnitPlanStartDate?: boolean
    UnitPlanEndDate?: boolean
    UnitPlanDuration?: boolean
    UnitActualStartDate?: boolean
    UnitActualEndDate?: boolean
    UnitActualDuration?: boolean
    Unit_Status?: boolean
    UnitMPSDueDate?: boolean
    UnitActualDeliveryDate?: boolean
    UnitActualHoursCompleted?: boolean
    UnitDelayInDay?: boolean
    SOUnitprice?: boolean
    SalesOrderID?: boolean
    UnitProcessLastStatus?: boolean
    UnitProcessLastActualStartDate?: boolean
    UnitProcessLastPlanStartDate?: boolean
    IsHold?: boolean
    LastModified?: boolean
  }

  export type vwUnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"UnitID" | "PROID" | "ProductID" | "UnitSerialNumber" | "UnitChasisNumber" | "UnitDueDate" | "UnitPlanStartDate" | "UnitPlanEndDate" | "UnitPlanDuration" | "UnitActualStartDate" | "UnitActualEndDate" | "UnitActualDuration" | "Unit_Status" | "UnitMPSDueDate" | "UnitActualDeliveryDate" | "UnitActualHoursCompleted" | "UnitDelayInDay" | "SOUnitprice" | "SalesOrderID" | "UnitProcessLastStatus" | "UnitProcessLastActualStartDate" | "UnitProcessLastPlanStartDate" | "IsHold" | "LastModified", ExtArgs["result"]["vwUnit"]>
  export type vwUnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vwPRO?: boolean | vwPRO_2DefaultArgs<ExtArgs>
    vwProduct?: boolean | vwProductDefaultArgs<ExtArgs>
    vwProcess?: boolean | vwUnit$vwProcessArgs<ExtArgs>
    _count?: boolean | VwUnitCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $vwUnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vwUnit"
    objects: {
      vwPRO: Prisma.$vwPRO_2Payload<ExtArgs>
      vwProduct: Prisma.$vwProductPayload<ExtArgs>
      vwProcess: Prisma.$vwProcessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      UnitID: number
      PROID: number
      ProductID: number
      UnitSerialNumber: string
      UnitChasisNumber: string | null
      UnitDueDate: Date
      UnitPlanStartDate: Date | null
      UnitPlanEndDate: Date | null
      UnitPlanDuration: number | null
      UnitActualStartDate: Date | null
      UnitActualEndDate: Date | null
      UnitActualDuration: number | null
      Unit_Status: string
      UnitMPSDueDate: Date | null
      UnitActualDeliveryDate: Date | null
      UnitActualHoursCompleted: Prisma.Decimal | null
      UnitDelayInDay: number | null
      SOUnitprice: Prisma.Decimal | null
      SalesOrderID: number | null
      UnitProcessLastStatus: string
      UnitProcessLastActualStartDate: Date | null
      UnitProcessLastPlanStartDate: Date | null
      IsHold: boolean
      LastModified: Date
    }, ExtArgs["result"]["vwUnit"]>
    composites: {}
  }

  type vwUnitGetPayload<S extends boolean | null | undefined | vwUnitDefaultArgs> = $Result.GetResult<Prisma.$vwUnitPayload, S>

  type vwUnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vwUnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VwUnitCountAggregateInputType | true
    }

  export interface vwUnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vwUnit'], meta: { name: 'vwUnit' } }
    /**
     * Find zero or one VwUnit that matches the filter.
     * @param {vwUnitFindUniqueArgs} args - Arguments to find a VwUnit
     * @example
     * // Get one VwUnit
     * const vwUnit = await prisma.vwUnit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vwUnitFindUniqueArgs>(args: SelectSubset<T, vwUnitFindUniqueArgs<ExtArgs>>): Prisma__vwUnitClient<$Result.GetResult<Prisma.$vwUnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VwUnit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vwUnitFindUniqueOrThrowArgs} args - Arguments to find a VwUnit
     * @example
     * // Get one VwUnit
     * const vwUnit = await prisma.vwUnit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vwUnitFindUniqueOrThrowArgs>(args: SelectSubset<T, vwUnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vwUnitClient<$Result.GetResult<Prisma.$vwUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VwUnit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwUnitFindFirstArgs} args - Arguments to find a VwUnit
     * @example
     * // Get one VwUnit
     * const vwUnit = await prisma.vwUnit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vwUnitFindFirstArgs>(args?: SelectSubset<T, vwUnitFindFirstArgs<ExtArgs>>): Prisma__vwUnitClient<$Result.GetResult<Prisma.$vwUnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VwUnit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwUnitFindFirstOrThrowArgs} args - Arguments to find a VwUnit
     * @example
     * // Get one VwUnit
     * const vwUnit = await prisma.vwUnit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vwUnitFindFirstOrThrowArgs>(args?: SelectSubset<T, vwUnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__vwUnitClient<$Result.GetResult<Prisma.$vwUnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VwUnits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwUnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VwUnits
     * const vwUnits = await prisma.vwUnit.findMany()
     * 
     * // Get first 10 VwUnits
     * const vwUnits = await prisma.vwUnit.findMany({ take: 10 })
     * 
     * // Only select the `UnitID`
     * const vwUnitWithUnitIDOnly = await prisma.vwUnit.findMany({ select: { UnitID: true } })
     * 
     */
    findMany<T extends vwUnitFindManyArgs>(args?: SelectSubset<T, vwUnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vwUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VwUnit.
     * @param {vwUnitCreateArgs} args - Arguments to create a VwUnit.
     * @example
     * // Create one VwUnit
     * const VwUnit = await prisma.vwUnit.create({
     *   data: {
     *     // ... data to create a VwUnit
     *   }
     * })
     * 
     */
    create<T extends vwUnitCreateArgs>(args: SelectSubset<T, vwUnitCreateArgs<ExtArgs>>): Prisma__vwUnitClient<$Result.GetResult<Prisma.$vwUnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VwUnits.
     * @param {vwUnitCreateManyArgs} args - Arguments to create many VwUnits.
     * @example
     * // Create many VwUnits
     * const vwUnit = await prisma.vwUnit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vwUnitCreateManyArgs>(args?: SelectSubset<T, vwUnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VwUnit.
     * @param {vwUnitDeleteArgs} args - Arguments to delete one VwUnit.
     * @example
     * // Delete one VwUnit
     * const VwUnit = await prisma.vwUnit.delete({
     *   where: {
     *     // ... filter to delete one VwUnit
     *   }
     * })
     * 
     */
    delete<T extends vwUnitDeleteArgs>(args: SelectSubset<T, vwUnitDeleteArgs<ExtArgs>>): Prisma__vwUnitClient<$Result.GetResult<Prisma.$vwUnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VwUnit.
     * @param {vwUnitUpdateArgs} args - Arguments to update one VwUnit.
     * @example
     * // Update one VwUnit
     * const vwUnit = await prisma.vwUnit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vwUnitUpdateArgs>(args: SelectSubset<T, vwUnitUpdateArgs<ExtArgs>>): Prisma__vwUnitClient<$Result.GetResult<Prisma.$vwUnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VwUnits.
     * @param {vwUnitDeleteManyArgs} args - Arguments to filter VwUnits to delete.
     * @example
     * // Delete a few VwUnits
     * const { count } = await prisma.vwUnit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vwUnitDeleteManyArgs>(args?: SelectSubset<T, vwUnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VwUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwUnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VwUnits
     * const vwUnit = await prisma.vwUnit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vwUnitUpdateManyArgs>(args: SelectSubset<T, vwUnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VwUnit.
     * @param {vwUnitUpsertArgs} args - Arguments to update or create a VwUnit.
     * @example
     * // Update or create a VwUnit
     * const vwUnit = await prisma.vwUnit.upsert({
     *   create: {
     *     // ... data to create a VwUnit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VwUnit we want to update
     *   }
     * })
     */
    upsert<T extends vwUnitUpsertArgs>(args: SelectSubset<T, vwUnitUpsertArgs<ExtArgs>>): Prisma__vwUnitClient<$Result.GetResult<Prisma.$vwUnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VwUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwUnitCountArgs} args - Arguments to filter VwUnits to count.
     * @example
     * // Count the number of VwUnits
     * const count = await prisma.vwUnit.count({
     *   where: {
     *     // ... the filter for the VwUnits we want to count
     *   }
     * })
    **/
    count<T extends vwUnitCountArgs>(
      args?: Subset<T, vwUnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VwUnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VwUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwUnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VwUnitAggregateArgs>(args: Subset<T, VwUnitAggregateArgs>): Prisma.PrismaPromise<GetVwUnitAggregateType<T>>

    /**
     * Group by VwUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwUnitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends vwUnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vwUnitGroupByArgs['orderBy'] }
        : { orderBy?: vwUnitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, vwUnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVwUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vwUnit model
   */
  readonly fields: vwUnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vwUnit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vwUnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vwPRO<T extends vwPRO_2DefaultArgs<ExtArgs> = {}>(args?: Subset<T, vwPRO_2DefaultArgs<ExtArgs>>): Prisma__vwPRO_2Client<$Result.GetResult<Prisma.$vwPRO_2Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vwProduct<T extends vwProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, vwProductDefaultArgs<ExtArgs>>): Prisma__vwProductClient<$Result.GetResult<Prisma.$vwProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vwProcess<T extends vwUnit$vwProcessArgs<ExtArgs> = {}>(args?: Subset<T, vwUnit$vwProcessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vwProcessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the vwUnit model
   */
  interface vwUnitFieldRefs {
    readonly UnitID: FieldRef<"vwUnit", 'Int'>
    readonly PROID: FieldRef<"vwUnit", 'Int'>
    readonly ProductID: FieldRef<"vwUnit", 'Int'>
    readonly UnitSerialNumber: FieldRef<"vwUnit", 'String'>
    readonly UnitChasisNumber: FieldRef<"vwUnit", 'String'>
    readonly UnitDueDate: FieldRef<"vwUnit", 'DateTime'>
    readonly UnitPlanStartDate: FieldRef<"vwUnit", 'DateTime'>
    readonly UnitPlanEndDate: FieldRef<"vwUnit", 'DateTime'>
    readonly UnitPlanDuration: FieldRef<"vwUnit", 'Int'>
    readonly UnitActualStartDate: FieldRef<"vwUnit", 'DateTime'>
    readonly UnitActualEndDate: FieldRef<"vwUnit", 'DateTime'>
    readonly UnitActualDuration: FieldRef<"vwUnit", 'Int'>
    readonly Unit_Status: FieldRef<"vwUnit", 'String'>
    readonly UnitMPSDueDate: FieldRef<"vwUnit", 'DateTime'>
    readonly UnitActualDeliveryDate: FieldRef<"vwUnit", 'DateTime'>
    readonly UnitActualHoursCompleted: FieldRef<"vwUnit", 'Decimal'>
    readonly UnitDelayInDay: FieldRef<"vwUnit", 'Int'>
    readonly SOUnitprice: FieldRef<"vwUnit", 'Decimal'>
    readonly SalesOrderID: FieldRef<"vwUnit", 'Int'>
    readonly UnitProcessLastStatus: FieldRef<"vwUnit", 'String'>
    readonly UnitProcessLastActualStartDate: FieldRef<"vwUnit", 'DateTime'>
    readonly UnitProcessLastPlanStartDate: FieldRef<"vwUnit", 'DateTime'>
    readonly IsHold: FieldRef<"vwUnit", 'Boolean'>
    readonly LastModified: FieldRef<"vwUnit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * vwUnit findUnique
   */
  export type vwUnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwUnit
     */
    select?: vwUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwUnit
     */
    omit?: vwUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwUnitInclude<ExtArgs> | null
    /**
     * Filter, which vwUnit to fetch.
     */
    where: vwUnitWhereUniqueInput
  }

  /**
   * vwUnit findUniqueOrThrow
   */
  export type vwUnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwUnit
     */
    select?: vwUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwUnit
     */
    omit?: vwUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwUnitInclude<ExtArgs> | null
    /**
     * Filter, which vwUnit to fetch.
     */
    where: vwUnitWhereUniqueInput
  }

  /**
   * vwUnit findFirst
   */
  export type vwUnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwUnit
     */
    select?: vwUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwUnit
     */
    omit?: vwUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwUnitInclude<ExtArgs> | null
    /**
     * Filter, which vwUnit to fetch.
     */
    where?: vwUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vwUnits to fetch.
     */
    orderBy?: vwUnitOrderByWithRelationInput | vwUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vwUnits.
     */
    cursor?: vwUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vwUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vwUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vwUnits.
     */
    distinct?: VwUnitScalarFieldEnum | VwUnitScalarFieldEnum[]
  }

  /**
   * vwUnit findFirstOrThrow
   */
  export type vwUnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwUnit
     */
    select?: vwUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwUnit
     */
    omit?: vwUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwUnitInclude<ExtArgs> | null
    /**
     * Filter, which vwUnit to fetch.
     */
    where?: vwUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vwUnits to fetch.
     */
    orderBy?: vwUnitOrderByWithRelationInput | vwUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vwUnits.
     */
    cursor?: vwUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vwUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vwUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vwUnits.
     */
    distinct?: VwUnitScalarFieldEnum | VwUnitScalarFieldEnum[]
  }

  /**
   * vwUnit findMany
   */
  export type vwUnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwUnit
     */
    select?: vwUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwUnit
     */
    omit?: vwUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwUnitInclude<ExtArgs> | null
    /**
     * Filter, which vwUnits to fetch.
     */
    where?: vwUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vwUnits to fetch.
     */
    orderBy?: vwUnitOrderByWithRelationInput | vwUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vwUnits.
     */
    cursor?: vwUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vwUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vwUnits.
     */
    skip?: number
    distinct?: VwUnitScalarFieldEnum | VwUnitScalarFieldEnum[]
  }

  /**
   * vwUnit create
   */
  export type vwUnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwUnit
     */
    select?: vwUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwUnit
     */
    omit?: vwUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwUnitInclude<ExtArgs> | null
    /**
     * The data needed to create a vwUnit.
     */
    data: XOR<vwUnitCreateInput, vwUnitUncheckedCreateInput>
  }

  /**
   * vwUnit createMany
   */
  export type vwUnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vwUnits.
     */
    data: vwUnitCreateManyInput | vwUnitCreateManyInput[]
  }

  /**
   * vwUnit update
   */
  export type vwUnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwUnit
     */
    select?: vwUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwUnit
     */
    omit?: vwUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwUnitInclude<ExtArgs> | null
    /**
     * The data needed to update a vwUnit.
     */
    data: XOR<vwUnitUpdateInput, vwUnitUncheckedUpdateInput>
    /**
     * Choose, which vwUnit to update.
     */
    where: vwUnitWhereUniqueInput
  }

  /**
   * vwUnit updateMany
   */
  export type vwUnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vwUnits.
     */
    data: XOR<vwUnitUpdateManyMutationInput, vwUnitUncheckedUpdateManyInput>
    /**
     * Filter which vwUnits to update
     */
    where?: vwUnitWhereInput
    /**
     * Limit how many vwUnits to update.
     */
    limit?: number
  }

  /**
   * vwUnit upsert
   */
  export type vwUnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwUnit
     */
    select?: vwUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwUnit
     */
    omit?: vwUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwUnitInclude<ExtArgs> | null
    /**
     * The filter to search for the vwUnit to update in case it exists.
     */
    where: vwUnitWhereUniqueInput
    /**
     * In case the vwUnit found by the `where` argument doesn't exist, create a new vwUnit with this data.
     */
    create: XOR<vwUnitCreateInput, vwUnitUncheckedCreateInput>
    /**
     * In case the vwUnit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vwUnitUpdateInput, vwUnitUncheckedUpdateInput>
  }

  /**
   * vwUnit delete
   */
  export type vwUnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwUnit
     */
    select?: vwUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwUnit
     */
    omit?: vwUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwUnitInclude<ExtArgs> | null
    /**
     * Filter which vwUnit to delete.
     */
    where: vwUnitWhereUniqueInput
  }

  /**
   * vwUnit deleteMany
   */
  export type vwUnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vwUnits to delete
     */
    where?: vwUnitWhereInput
    /**
     * Limit how many vwUnits to delete.
     */
    limit?: number
  }

  /**
   * vwUnit.vwProcess
   */
  export type vwUnit$vwProcessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProcess
     */
    select?: vwProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProcess
     */
    omit?: vwProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProcessInclude<ExtArgs> | null
    where?: vwProcessWhereInput
    orderBy?: vwProcessOrderByWithRelationInput | vwProcessOrderByWithRelationInput[]
    cursor?: vwProcessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VwProcessScalarFieldEnum | VwProcessScalarFieldEnum[]
  }

  /**
   * vwUnit without action
   */
  export type vwUnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwUnit
     */
    select?: vwUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwUnit
     */
    omit?: vwUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwUnitInclude<ExtArgs> | null
  }


  /**
   * Model vwProductGroup
   */

  export type AggregateVwProductGroup = {
    _count: VwProductGroupCountAggregateOutputType | null
    _avg: VwProductGroupAvgAggregateOutputType | null
    _sum: VwProductGroupSumAggregateOutputType | null
    _min: VwProductGroupMinAggregateOutputType | null
    _max: VwProductGroupMaxAggregateOutputType | null
  }

  export type VwProductGroupAvgAggregateOutputType = {
    ProductGroupID: number | null
    ProductGroupCapacity: number | null
  }

  export type VwProductGroupSumAggregateOutputType = {
    ProductGroupID: number | null
    ProductGroupCapacity: number | null
  }

  export type VwProductGroupMinAggregateOutputType = {
    ProductGroupID: number | null
    ProductGroupName: string | null
    ProductGroupDescription: string | null
    ProductGroupCapacity: number | null
    ProductGroupStartMonth: Date | null
    LastModified: Date | null
  }

  export type VwProductGroupMaxAggregateOutputType = {
    ProductGroupID: number | null
    ProductGroupName: string | null
    ProductGroupDescription: string | null
    ProductGroupCapacity: number | null
    ProductGroupStartMonth: Date | null
    LastModified: Date | null
  }

  export type VwProductGroupCountAggregateOutputType = {
    ProductGroupID: number
    ProductGroupName: number
    ProductGroupDescription: number
    ProductGroupCapacity: number
    ProductGroupStartMonth: number
    LastModified: number
    _all: number
  }


  export type VwProductGroupAvgAggregateInputType = {
    ProductGroupID?: true
    ProductGroupCapacity?: true
  }

  export type VwProductGroupSumAggregateInputType = {
    ProductGroupID?: true
    ProductGroupCapacity?: true
  }

  export type VwProductGroupMinAggregateInputType = {
    ProductGroupID?: true
    ProductGroupName?: true
    ProductGroupDescription?: true
    ProductGroupCapacity?: true
    ProductGroupStartMonth?: true
    LastModified?: true
  }

  export type VwProductGroupMaxAggregateInputType = {
    ProductGroupID?: true
    ProductGroupName?: true
    ProductGroupDescription?: true
    ProductGroupCapacity?: true
    ProductGroupStartMonth?: true
    LastModified?: true
  }

  export type VwProductGroupCountAggregateInputType = {
    ProductGroupID?: true
    ProductGroupName?: true
    ProductGroupDescription?: true
    ProductGroupCapacity?: true
    ProductGroupStartMonth?: true
    LastModified?: true
    _all?: true
  }

  export type VwProductGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vwProductGroup to aggregate.
     */
    where?: vwProductGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vwProductGroups to fetch.
     */
    orderBy?: vwProductGroupOrderByWithRelationInput | vwProductGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vwProductGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vwProductGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vwProductGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vwProductGroups
    **/
    _count?: true | VwProductGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VwProductGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VwProductGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VwProductGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VwProductGroupMaxAggregateInputType
  }

  export type GetVwProductGroupAggregateType<T extends VwProductGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateVwProductGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVwProductGroup[P]>
      : GetScalarType<T[P], AggregateVwProductGroup[P]>
  }




  export type vwProductGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vwProductGroupWhereInput
    orderBy?: vwProductGroupOrderByWithAggregationInput | vwProductGroupOrderByWithAggregationInput[]
    by: VwProductGroupScalarFieldEnum[] | VwProductGroupScalarFieldEnum
    having?: vwProductGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VwProductGroupCountAggregateInputType | true
    _avg?: VwProductGroupAvgAggregateInputType
    _sum?: VwProductGroupSumAggregateInputType
    _min?: VwProductGroupMinAggregateInputType
    _max?: VwProductGroupMaxAggregateInputType
  }

  export type VwProductGroupGroupByOutputType = {
    ProductGroupID: number
    ProductGroupName: string
    ProductGroupDescription: string
    ProductGroupCapacity: number | null
    ProductGroupStartMonth: Date | null
    LastModified: Date
    _count: VwProductGroupCountAggregateOutputType | null
    _avg: VwProductGroupAvgAggregateOutputType | null
    _sum: VwProductGroupSumAggregateOutputType | null
    _min: VwProductGroupMinAggregateOutputType | null
    _max: VwProductGroupMaxAggregateOutputType | null
  }

  type GetVwProductGroupGroupByPayload<T extends vwProductGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VwProductGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VwProductGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VwProductGroupGroupByOutputType[P]>
            : GetScalarType<T[P], VwProductGroupGroupByOutputType[P]>
        }
      >
    >


  export type vwProductGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ProductGroupID?: boolean
    ProductGroupName?: boolean
    ProductGroupDescription?: boolean
    ProductGroupCapacity?: boolean
    ProductGroupStartMonth?: boolean
    LastModified?: boolean
    vwProduct?: boolean | vwProductGroup$vwProductArgs<ExtArgs>
    _count?: boolean | VwProductGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vwProductGroup"]>



  export type vwProductGroupSelectScalar = {
    ProductGroupID?: boolean
    ProductGroupName?: boolean
    ProductGroupDescription?: boolean
    ProductGroupCapacity?: boolean
    ProductGroupStartMonth?: boolean
    LastModified?: boolean
  }

  export type vwProductGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ProductGroupID" | "ProductGroupName" | "ProductGroupDescription" | "ProductGroupCapacity" | "ProductGroupStartMonth" | "LastModified", ExtArgs["result"]["vwProductGroup"]>
  export type vwProductGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vwProduct?: boolean | vwProductGroup$vwProductArgs<ExtArgs>
    _count?: boolean | VwProductGroupCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $vwProductGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vwProductGroup"
    objects: {
      vwProduct: Prisma.$vwProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ProductGroupID: number
      ProductGroupName: string
      ProductGroupDescription: string
      ProductGroupCapacity: number | null
      ProductGroupStartMonth: Date | null
      LastModified: Date
    }, ExtArgs["result"]["vwProductGroup"]>
    composites: {}
  }

  type vwProductGroupGetPayload<S extends boolean | null | undefined | vwProductGroupDefaultArgs> = $Result.GetResult<Prisma.$vwProductGroupPayload, S>

  type vwProductGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vwProductGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VwProductGroupCountAggregateInputType | true
    }

  export interface vwProductGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vwProductGroup'], meta: { name: 'vwProductGroup' } }
    /**
     * Find zero or one VwProductGroup that matches the filter.
     * @param {vwProductGroupFindUniqueArgs} args - Arguments to find a VwProductGroup
     * @example
     * // Get one VwProductGroup
     * const vwProductGroup = await prisma.vwProductGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vwProductGroupFindUniqueArgs>(args: SelectSubset<T, vwProductGroupFindUniqueArgs<ExtArgs>>): Prisma__vwProductGroupClient<$Result.GetResult<Prisma.$vwProductGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VwProductGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vwProductGroupFindUniqueOrThrowArgs} args - Arguments to find a VwProductGroup
     * @example
     * // Get one VwProductGroup
     * const vwProductGroup = await prisma.vwProductGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vwProductGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, vwProductGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vwProductGroupClient<$Result.GetResult<Prisma.$vwProductGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VwProductGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwProductGroupFindFirstArgs} args - Arguments to find a VwProductGroup
     * @example
     * // Get one VwProductGroup
     * const vwProductGroup = await prisma.vwProductGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vwProductGroupFindFirstArgs>(args?: SelectSubset<T, vwProductGroupFindFirstArgs<ExtArgs>>): Prisma__vwProductGroupClient<$Result.GetResult<Prisma.$vwProductGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VwProductGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwProductGroupFindFirstOrThrowArgs} args - Arguments to find a VwProductGroup
     * @example
     * // Get one VwProductGroup
     * const vwProductGroup = await prisma.vwProductGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vwProductGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, vwProductGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__vwProductGroupClient<$Result.GetResult<Prisma.$vwProductGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VwProductGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwProductGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VwProductGroups
     * const vwProductGroups = await prisma.vwProductGroup.findMany()
     * 
     * // Get first 10 VwProductGroups
     * const vwProductGroups = await prisma.vwProductGroup.findMany({ take: 10 })
     * 
     * // Only select the `ProductGroupID`
     * const vwProductGroupWithProductGroupIDOnly = await prisma.vwProductGroup.findMany({ select: { ProductGroupID: true } })
     * 
     */
    findMany<T extends vwProductGroupFindManyArgs>(args?: SelectSubset<T, vwProductGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vwProductGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VwProductGroup.
     * @param {vwProductGroupCreateArgs} args - Arguments to create a VwProductGroup.
     * @example
     * // Create one VwProductGroup
     * const VwProductGroup = await prisma.vwProductGroup.create({
     *   data: {
     *     // ... data to create a VwProductGroup
     *   }
     * })
     * 
     */
    create<T extends vwProductGroupCreateArgs>(args: SelectSubset<T, vwProductGroupCreateArgs<ExtArgs>>): Prisma__vwProductGroupClient<$Result.GetResult<Prisma.$vwProductGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VwProductGroups.
     * @param {vwProductGroupCreateManyArgs} args - Arguments to create many VwProductGroups.
     * @example
     * // Create many VwProductGroups
     * const vwProductGroup = await prisma.vwProductGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vwProductGroupCreateManyArgs>(args?: SelectSubset<T, vwProductGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VwProductGroup.
     * @param {vwProductGroupDeleteArgs} args - Arguments to delete one VwProductGroup.
     * @example
     * // Delete one VwProductGroup
     * const VwProductGroup = await prisma.vwProductGroup.delete({
     *   where: {
     *     // ... filter to delete one VwProductGroup
     *   }
     * })
     * 
     */
    delete<T extends vwProductGroupDeleteArgs>(args: SelectSubset<T, vwProductGroupDeleteArgs<ExtArgs>>): Prisma__vwProductGroupClient<$Result.GetResult<Prisma.$vwProductGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VwProductGroup.
     * @param {vwProductGroupUpdateArgs} args - Arguments to update one VwProductGroup.
     * @example
     * // Update one VwProductGroup
     * const vwProductGroup = await prisma.vwProductGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vwProductGroupUpdateArgs>(args: SelectSubset<T, vwProductGroupUpdateArgs<ExtArgs>>): Prisma__vwProductGroupClient<$Result.GetResult<Prisma.$vwProductGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VwProductGroups.
     * @param {vwProductGroupDeleteManyArgs} args - Arguments to filter VwProductGroups to delete.
     * @example
     * // Delete a few VwProductGroups
     * const { count } = await prisma.vwProductGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vwProductGroupDeleteManyArgs>(args?: SelectSubset<T, vwProductGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VwProductGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwProductGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VwProductGroups
     * const vwProductGroup = await prisma.vwProductGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vwProductGroupUpdateManyArgs>(args: SelectSubset<T, vwProductGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VwProductGroup.
     * @param {vwProductGroupUpsertArgs} args - Arguments to update or create a VwProductGroup.
     * @example
     * // Update or create a VwProductGroup
     * const vwProductGroup = await prisma.vwProductGroup.upsert({
     *   create: {
     *     // ... data to create a VwProductGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VwProductGroup we want to update
     *   }
     * })
     */
    upsert<T extends vwProductGroupUpsertArgs>(args: SelectSubset<T, vwProductGroupUpsertArgs<ExtArgs>>): Prisma__vwProductGroupClient<$Result.GetResult<Prisma.$vwProductGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VwProductGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwProductGroupCountArgs} args - Arguments to filter VwProductGroups to count.
     * @example
     * // Count the number of VwProductGroups
     * const count = await prisma.vwProductGroup.count({
     *   where: {
     *     // ... the filter for the VwProductGroups we want to count
     *   }
     * })
    **/
    count<T extends vwProductGroupCountArgs>(
      args?: Subset<T, vwProductGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VwProductGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VwProductGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwProductGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VwProductGroupAggregateArgs>(args: Subset<T, VwProductGroupAggregateArgs>): Prisma.PrismaPromise<GetVwProductGroupAggregateType<T>>

    /**
     * Group by VwProductGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vwProductGroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends vwProductGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vwProductGroupGroupByArgs['orderBy'] }
        : { orderBy?: vwProductGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, vwProductGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVwProductGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vwProductGroup model
   */
  readonly fields: vwProductGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vwProductGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vwProductGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vwProduct<T extends vwProductGroup$vwProductArgs<ExtArgs> = {}>(args?: Subset<T, vwProductGroup$vwProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vwProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the vwProductGroup model
   */
  interface vwProductGroupFieldRefs {
    readonly ProductGroupID: FieldRef<"vwProductGroup", 'Int'>
    readonly ProductGroupName: FieldRef<"vwProductGroup", 'String'>
    readonly ProductGroupDescription: FieldRef<"vwProductGroup", 'String'>
    readonly ProductGroupCapacity: FieldRef<"vwProductGroup", 'Int'>
    readonly ProductGroupStartMonth: FieldRef<"vwProductGroup", 'DateTime'>
    readonly LastModified: FieldRef<"vwProductGroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * vwProductGroup findUnique
   */
  export type vwProductGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProductGroup
     */
    select?: vwProductGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProductGroup
     */
    omit?: vwProductGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProductGroupInclude<ExtArgs> | null
    /**
     * Filter, which vwProductGroup to fetch.
     */
    where: vwProductGroupWhereUniqueInput
  }

  /**
   * vwProductGroup findUniqueOrThrow
   */
  export type vwProductGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProductGroup
     */
    select?: vwProductGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProductGroup
     */
    omit?: vwProductGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProductGroupInclude<ExtArgs> | null
    /**
     * Filter, which vwProductGroup to fetch.
     */
    where: vwProductGroupWhereUniqueInput
  }

  /**
   * vwProductGroup findFirst
   */
  export type vwProductGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProductGroup
     */
    select?: vwProductGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProductGroup
     */
    omit?: vwProductGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProductGroupInclude<ExtArgs> | null
    /**
     * Filter, which vwProductGroup to fetch.
     */
    where?: vwProductGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vwProductGroups to fetch.
     */
    orderBy?: vwProductGroupOrderByWithRelationInput | vwProductGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vwProductGroups.
     */
    cursor?: vwProductGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vwProductGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vwProductGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vwProductGroups.
     */
    distinct?: VwProductGroupScalarFieldEnum | VwProductGroupScalarFieldEnum[]
  }

  /**
   * vwProductGroup findFirstOrThrow
   */
  export type vwProductGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProductGroup
     */
    select?: vwProductGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProductGroup
     */
    omit?: vwProductGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProductGroupInclude<ExtArgs> | null
    /**
     * Filter, which vwProductGroup to fetch.
     */
    where?: vwProductGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vwProductGroups to fetch.
     */
    orderBy?: vwProductGroupOrderByWithRelationInput | vwProductGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vwProductGroups.
     */
    cursor?: vwProductGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vwProductGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vwProductGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vwProductGroups.
     */
    distinct?: VwProductGroupScalarFieldEnum | VwProductGroupScalarFieldEnum[]
  }

  /**
   * vwProductGroup findMany
   */
  export type vwProductGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProductGroup
     */
    select?: vwProductGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProductGroup
     */
    omit?: vwProductGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProductGroupInclude<ExtArgs> | null
    /**
     * Filter, which vwProductGroups to fetch.
     */
    where?: vwProductGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vwProductGroups to fetch.
     */
    orderBy?: vwProductGroupOrderByWithRelationInput | vwProductGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vwProductGroups.
     */
    cursor?: vwProductGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vwProductGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vwProductGroups.
     */
    skip?: number
    distinct?: VwProductGroupScalarFieldEnum | VwProductGroupScalarFieldEnum[]
  }

  /**
   * vwProductGroup create
   */
  export type vwProductGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProductGroup
     */
    select?: vwProductGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProductGroup
     */
    omit?: vwProductGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProductGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a vwProductGroup.
     */
    data: XOR<vwProductGroupCreateInput, vwProductGroupUncheckedCreateInput>
  }

  /**
   * vwProductGroup createMany
   */
  export type vwProductGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vwProductGroups.
     */
    data: vwProductGroupCreateManyInput | vwProductGroupCreateManyInput[]
  }

  /**
   * vwProductGroup update
   */
  export type vwProductGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProductGroup
     */
    select?: vwProductGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProductGroup
     */
    omit?: vwProductGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProductGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a vwProductGroup.
     */
    data: XOR<vwProductGroupUpdateInput, vwProductGroupUncheckedUpdateInput>
    /**
     * Choose, which vwProductGroup to update.
     */
    where: vwProductGroupWhereUniqueInput
  }

  /**
   * vwProductGroup updateMany
   */
  export type vwProductGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vwProductGroups.
     */
    data: XOR<vwProductGroupUpdateManyMutationInput, vwProductGroupUncheckedUpdateManyInput>
    /**
     * Filter which vwProductGroups to update
     */
    where?: vwProductGroupWhereInput
    /**
     * Limit how many vwProductGroups to update.
     */
    limit?: number
  }

  /**
   * vwProductGroup upsert
   */
  export type vwProductGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProductGroup
     */
    select?: vwProductGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProductGroup
     */
    omit?: vwProductGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProductGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the vwProductGroup to update in case it exists.
     */
    where: vwProductGroupWhereUniqueInput
    /**
     * In case the vwProductGroup found by the `where` argument doesn't exist, create a new vwProductGroup with this data.
     */
    create: XOR<vwProductGroupCreateInput, vwProductGroupUncheckedCreateInput>
    /**
     * In case the vwProductGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vwProductGroupUpdateInput, vwProductGroupUncheckedUpdateInput>
  }

  /**
   * vwProductGroup delete
   */
  export type vwProductGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProductGroup
     */
    select?: vwProductGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProductGroup
     */
    omit?: vwProductGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProductGroupInclude<ExtArgs> | null
    /**
     * Filter which vwProductGroup to delete.
     */
    where: vwProductGroupWhereUniqueInput
  }

  /**
   * vwProductGroup deleteMany
   */
  export type vwProductGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vwProductGroups to delete
     */
    where?: vwProductGroupWhereInput
    /**
     * Limit how many vwProductGroups to delete.
     */
    limit?: number
  }

  /**
   * vwProductGroup.vwProduct
   */
  export type vwProductGroup$vwProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProduct
     */
    select?: vwProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProduct
     */
    omit?: vwProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProductInclude<ExtArgs> | null
    where?: vwProductWhereInput
    orderBy?: vwProductOrderByWithRelationInput | vwProductOrderByWithRelationInput[]
    cursor?: vwProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VwProductScalarFieldEnum | VwProductScalarFieldEnum[]
  }

  /**
   * vwProductGroup without action
   */
  export type vwProductGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vwProductGroup
     */
    select?: vwProductGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vwProductGroup
     */
    omit?: vwProductGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vwProductGroupInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProcessScalarFieldEnum: {
    ID: 'ID',
    UnitID: 'UnitID',
    MasterProcessID: 'MasterProcessID',
    Status: 'Status',
    PlanStartDate: 'PlanStartDate',
    PlanEndDate: 'PlanEndDate',
    ActualStartDate: 'ActualStartDate',
    ActualEndDate: 'ActualEndDate',
    IsHold: 'IsHold',
    HoldDate: 'HoldDate',
    Created: 'Created',
    CreatedBy: 'CreatedBy',
    LastModified: 'LastModified',
    LastModifiedBy: 'LastModifiedBy'
  };

  export type ProcessScalarFieldEnum = (typeof ProcessScalarFieldEnum)[keyof typeof ProcessScalarFieldEnum]


  export const ProcessActivityScalarFieldEnum: {
    ID: 'ID',
    ProcessAssignID: 'ProcessAssignID',
    Status: 'Status',
    ReasonPauseID: 'ReasonPauseID',
    ActivityDateTime: 'ActivityDateTime',
    ActualHours: 'ActualHours',
    Created: 'Created',
    CreatedBy: 'CreatedBy',
    LastModified: 'LastModified',
    LastModifiedBy: 'LastModifiedBy'
  };

  export type ProcessActivityScalarFieldEnum = (typeof ProcessActivityScalarFieldEnum)[keyof typeof ProcessActivityScalarFieldEnum]


  export const ProcessAssignScalarFieldEnum: {
    ID: 'ID',
    ProcessID: 'ProcessID',
    UserID: 'UserID',
    EmployeeNumber: 'EmployeeNumber',
    Status: 'Status',
    Type: 'Type',
    Created: 'Created',
    CreatedBy: 'CreatedBy',
    LastModified: 'LastModified',
    LastModifiedBy: 'LastModifiedBy',
    remark: 'remark'
  };

  export type ProcessAssignScalarFieldEnum = (typeof ProcessAssignScalarFieldEnum)[keyof typeof ProcessAssignScalarFieldEnum]


  export const VwPRO_2ScalarFieldEnum: {
    ID: 'ID',
    Number: 'Number',
    ProductID: 'ProductID',
    Quantity: 'Quantity',
    DueDate: 'DueDate',
    Created: 'Created',
    CreatedBy: 'CreatedBy',
    LastModified: 'LastModified',
    LastModifiedBy: 'LastModifiedBy'
  };

  export type VwPRO_2ScalarFieldEnum = (typeof VwPRO_2ScalarFieldEnum)[keyof typeof VwPRO_2ScalarFieldEnum]


  export const VwProcessScalarFieldEnum: {
    ProcessID: 'ProcessID',
    UnitID: 'UnitID',
    ProcessStatus: 'ProcessStatus',
    ProcessPlanStartDate: 'ProcessPlanStartDate',
    ProcessPlanEndDate: 'ProcessPlanEndDate',
    ProcessPlanDuration: 'ProcessPlanDuration',
    ProcessActualStartDate: 'ProcessActualStartDate',
    ProcessActualEndDate: 'ProcessActualEndDate',
    ProcessActualDuration: 'ProcessActualDuration',
    MasterProcessName: 'MasterProcessName',
    StandardMH: 'StandardMH',
    ProcessGroupName: 'ProcessGroupName',
    ProcessDelayInDay: 'ProcessDelayInDay',
    ProcessOrder: 'ProcessOrder',
    LastModified: 'LastModified',
    MasterProcessID: 'MasterProcessID'
  };

  export type VwProcessScalarFieldEnum = (typeof VwProcessScalarFieldEnum)[keyof typeof VwProcessScalarFieldEnum]


  export const VwProcessActivityScalarFieldEnum: {
    atasan: 'atasan',
    EmployeeNumber: 'EmployeeNumber',
    ActivityDateTime: 'ActivityDateTime',
    ProcessActivityID: 'ProcessActivityID',
    ProcessAssignID: 'ProcessAssignID',
    ProcessActivityName: 'ProcessActivityName',
    ProcessActivityStatus: 'ProcessActivityStatus',
    ProcessActivityReasonPause: 'ProcessActivityReasonPause',
    ActualHoursNonProductive: 'ActualHoursNonProductive',
    ProcessActivityActualHours: 'ProcessActivityActualHours',
    ProcessActivityDateTime: 'ProcessActivityDateTime',
    LastModifiedBy: 'LastModifiedBy',
    LastModified: 'LastModified'
  };

  export type VwProcessActivityScalarFieldEnum = (typeof VwProcessActivityScalarFieldEnum)[keyof typeof VwProcessActivityScalarFieldEnum]


  export const VwProcessAssign2AllScalarFieldEnum: {
    ID: 'ID',
    ProcessID: 'ProcessID',
    UnitID: 'UnitID',
    LeaderName: 'LeaderName',
    OperatorName: 'OperatorName',
    NRP: 'NRP',
    TglAssign: 'TglAssign',
    ProcessassignStatus: 'ProcessassignStatus',
    Startassign: 'Startassign',
    Stopassign: 'Stopassign',
    ProcessAssignType: 'ProcessAssignType',
    LastModified: 'LastModified',
    lastStart: 'lastStart',
    lastStop: 'lastStop',
    remark: 'remark',
    IsActive: 'IsActive'
  };

  export type VwProcessAssign2AllScalarFieldEnum = (typeof VwProcessAssign2AllScalarFieldEnum)[keyof typeof VwProcessAssign2AllScalarFieldEnum]


  export const VwProcessGroupScalarFieldEnum: {
    UnitID: 'UnitID',
    ProcessGroupNameSort: 'ProcessGroupNameSort',
    ProcessGroupName: 'ProcessGroupName',
    ProcessGroupPlanStartDate: 'ProcessGroupPlanStartDate',
    ProcessGroupPlanEndDate: 'ProcessGroupPlanEndDate',
    ProcessGroupPlanDuration: 'ProcessGroupPlanDuration',
    ProcessGroupActualStartDate: 'ProcessGroupActualStartDate',
    ProcessGroupActualEndDate: 'ProcessGroupActualEndDate',
    ProcessGroupActualDuration: 'ProcessGroupActualDuration',
    ProcessGroupDelayInDay: 'ProcessGroupDelayInDay',
    LastModified: 'LastModified'
  };

  export type VwProcessGroupScalarFieldEnum = (typeof VwProcessGroupScalarFieldEnum)[keyof typeof VwProcessGroupScalarFieldEnum]


  export const VwProductScalarFieldEnum: {
    ProductID: 'ProductID',
    ProductGroupID: 'ProductGroupID',
    ProductName: 'ProductName',
    ProductPN: 'ProductPN',
    ProductTotalDay: 'ProductTotalDay',
    ProductSubGroupName: 'ProductSubGroupName',
    ProductSubGroupSAPCode: 'ProductSubGroupSAPCode',
    ProductStandardHours: 'ProductStandardHours',
    LastModified: 'LastModified'
  };

  export type VwProductScalarFieldEnum = (typeof VwProductScalarFieldEnum)[keyof typeof VwProductScalarFieldEnum]


  export const VwUnitScalarFieldEnum: {
    UnitID: 'UnitID',
    PROID: 'PROID',
    ProductID: 'ProductID',
    UnitSerialNumber: 'UnitSerialNumber',
    UnitChasisNumber: 'UnitChasisNumber',
    UnitDueDate: 'UnitDueDate',
    UnitPlanStartDate: 'UnitPlanStartDate',
    UnitPlanEndDate: 'UnitPlanEndDate',
    UnitPlanDuration: 'UnitPlanDuration',
    UnitActualStartDate: 'UnitActualStartDate',
    UnitActualEndDate: 'UnitActualEndDate',
    UnitActualDuration: 'UnitActualDuration',
    Unit_Status: 'Unit_Status',
    UnitMPSDueDate: 'UnitMPSDueDate',
    UnitActualDeliveryDate: 'UnitActualDeliveryDate',
    UnitActualHoursCompleted: 'UnitActualHoursCompleted',
    UnitDelayInDay: 'UnitDelayInDay',
    SOUnitprice: 'SOUnitprice',
    SalesOrderID: 'SalesOrderID',
    UnitProcessLastStatus: 'UnitProcessLastStatus',
    UnitProcessLastActualStartDate: 'UnitProcessLastActualStartDate',
    UnitProcessLastPlanStartDate: 'UnitProcessLastPlanStartDate',
    IsHold: 'IsHold',
    LastModified: 'LastModified'
  };

  export type VwUnitScalarFieldEnum = (typeof VwUnitScalarFieldEnum)[keyof typeof VwUnitScalarFieldEnum]


  export const VwProductGroupScalarFieldEnum: {
    ProductGroupID: 'ProductGroupID',
    ProductGroupName: 'ProductGroupName',
    ProductGroupDescription: 'ProductGroupDescription',
    ProductGroupCapacity: 'ProductGroupCapacity',
    ProductGroupStartMonth: 'ProductGroupStartMonth',
    LastModified: 'LastModified'
  };

  export type VwProductGroupScalarFieldEnum = (typeof VwProductGroupScalarFieldEnum)[keyof typeof VwProductGroupScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ProcessWhereInput = {
    AND?: ProcessWhereInput | ProcessWhereInput[]
    OR?: ProcessWhereInput[]
    NOT?: ProcessWhereInput | ProcessWhereInput[]
    ID?: IntFilter<"Process"> | number
    UnitID?: IntFilter<"Process"> | number
    MasterProcessID?: IntFilter<"Process"> | number
    Status?: IntFilter<"Process"> | number
    PlanStartDate?: DateTimeFilter<"Process"> | Date | string
    PlanEndDate?: DateTimeNullableFilter<"Process"> | Date | string | null
    ActualStartDate?: DateTimeNullableFilter<"Process"> | Date | string | null
    ActualEndDate?: DateTimeNullableFilter<"Process"> | Date | string | null
    IsHold?: BoolFilter<"Process"> | boolean
    HoldDate?: DateTimeNullableFilter<"Process"> | Date | string | null
    Created?: DateTimeFilter<"Process"> | Date | string
    CreatedBy?: StringFilter<"Process"> | string
    LastModified?: DateTimeFilter<"Process"> | Date | string
    LastModifiedBy?: StringFilter<"Process"> | string
    ProcessAssign?: ProcessAssignListRelationFilter
  }

  export type ProcessOrderByWithRelationInput = {
    ID?: SortOrder
    UnitID?: SortOrder
    MasterProcessID?: SortOrder
    Status?: SortOrder
    PlanStartDate?: SortOrder
    PlanEndDate?: SortOrderInput | SortOrder
    ActualStartDate?: SortOrderInput | SortOrder
    ActualEndDate?: SortOrderInput | SortOrder
    IsHold?: SortOrder
    HoldDate?: SortOrderInput | SortOrder
    Created?: SortOrder
    CreatedBy?: SortOrder
    LastModified?: SortOrder
    LastModifiedBy?: SortOrder
    ProcessAssign?: ProcessAssignOrderByRelationAggregateInput
  }

  export type ProcessWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: ProcessWhereInput | ProcessWhereInput[]
    OR?: ProcessWhereInput[]
    NOT?: ProcessWhereInput | ProcessWhereInput[]
    UnitID?: IntFilter<"Process"> | number
    MasterProcessID?: IntFilter<"Process"> | number
    Status?: IntFilter<"Process"> | number
    PlanStartDate?: DateTimeFilter<"Process"> | Date | string
    PlanEndDate?: DateTimeNullableFilter<"Process"> | Date | string | null
    ActualStartDate?: DateTimeNullableFilter<"Process"> | Date | string | null
    ActualEndDate?: DateTimeNullableFilter<"Process"> | Date | string | null
    IsHold?: BoolFilter<"Process"> | boolean
    HoldDate?: DateTimeNullableFilter<"Process"> | Date | string | null
    Created?: DateTimeFilter<"Process"> | Date | string
    CreatedBy?: StringFilter<"Process"> | string
    LastModified?: DateTimeFilter<"Process"> | Date | string
    LastModifiedBy?: StringFilter<"Process"> | string
    ProcessAssign?: ProcessAssignListRelationFilter
  }, "ID">

  export type ProcessOrderByWithAggregationInput = {
    ID?: SortOrder
    UnitID?: SortOrder
    MasterProcessID?: SortOrder
    Status?: SortOrder
    PlanStartDate?: SortOrder
    PlanEndDate?: SortOrderInput | SortOrder
    ActualStartDate?: SortOrderInput | SortOrder
    ActualEndDate?: SortOrderInput | SortOrder
    IsHold?: SortOrder
    HoldDate?: SortOrderInput | SortOrder
    Created?: SortOrder
    CreatedBy?: SortOrder
    LastModified?: SortOrder
    LastModifiedBy?: SortOrder
    _count?: ProcessCountOrderByAggregateInput
    _avg?: ProcessAvgOrderByAggregateInput
    _max?: ProcessMaxOrderByAggregateInput
    _min?: ProcessMinOrderByAggregateInput
    _sum?: ProcessSumOrderByAggregateInput
  }

  export type ProcessScalarWhereWithAggregatesInput = {
    AND?: ProcessScalarWhereWithAggregatesInput | ProcessScalarWhereWithAggregatesInput[]
    OR?: ProcessScalarWhereWithAggregatesInput[]
    NOT?: ProcessScalarWhereWithAggregatesInput | ProcessScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"Process"> | number
    UnitID?: IntWithAggregatesFilter<"Process"> | number
    MasterProcessID?: IntWithAggregatesFilter<"Process"> | number
    Status?: IntWithAggregatesFilter<"Process"> | number
    PlanStartDate?: DateTimeWithAggregatesFilter<"Process"> | Date | string
    PlanEndDate?: DateTimeNullableWithAggregatesFilter<"Process"> | Date | string | null
    ActualStartDate?: DateTimeNullableWithAggregatesFilter<"Process"> | Date | string | null
    ActualEndDate?: DateTimeNullableWithAggregatesFilter<"Process"> | Date | string | null
    IsHold?: BoolWithAggregatesFilter<"Process"> | boolean
    HoldDate?: DateTimeNullableWithAggregatesFilter<"Process"> | Date | string | null
    Created?: DateTimeWithAggregatesFilter<"Process"> | Date | string
    CreatedBy?: StringWithAggregatesFilter<"Process"> | string
    LastModified?: DateTimeWithAggregatesFilter<"Process"> | Date | string
    LastModifiedBy?: StringWithAggregatesFilter<"Process"> | string
  }

  export type ProcessActivityWhereInput = {
    AND?: ProcessActivityWhereInput | ProcessActivityWhereInput[]
    OR?: ProcessActivityWhereInput[]
    NOT?: ProcessActivityWhereInput | ProcessActivityWhereInput[]
    ID?: IntFilter<"ProcessActivity"> | number
    ProcessAssignID?: IntFilter<"ProcessActivity"> | number
    Status?: IntFilter<"ProcessActivity"> | number
    ReasonPauseID?: IntNullableFilter<"ProcessActivity"> | number | null
    ActivityDateTime?: DateTimeFilter<"ProcessActivity"> | Date | string
    ActualHours?: DecimalNullableFilter<"ProcessActivity"> | Decimal | DecimalJsLike | number | string | null
    Created?: DateTimeFilter<"ProcessActivity"> | Date | string
    CreatedBy?: StringFilter<"ProcessActivity"> | string
    LastModified?: DateTimeFilter<"ProcessActivity"> | Date | string
    LastModifiedBy?: StringFilter<"ProcessActivity"> | string
    ProcessAssign?: XOR<ProcessAssignScalarRelationFilter, ProcessAssignWhereInput>
  }

  export type ProcessActivityOrderByWithRelationInput = {
    ID?: SortOrder
    ProcessAssignID?: SortOrder
    Status?: SortOrder
    ReasonPauseID?: SortOrderInput | SortOrder
    ActivityDateTime?: SortOrder
    ActualHours?: SortOrderInput | SortOrder
    Created?: SortOrder
    CreatedBy?: SortOrder
    LastModified?: SortOrder
    LastModifiedBy?: SortOrder
    ProcessAssign?: ProcessAssignOrderByWithRelationInput
  }

  export type ProcessActivityWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: ProcessActivityWhereInput | ProcessActivityWhereInput[]
    OR?: ProcessActivityWhereInput[]
    NOT?: ProcessActivityWhereInput | ProcessActivityWhereInput[]
    ProcessAssignID?: IntFilter<"ProcessActivity"> | number
    Status?: IntFilter<"ProcessActivity"> | number
    ReasonPauseID?: IntNullableFilter<"ProcessActivity"> | number | null
    ActivityDateTime?: DateTimeFilter<"ProcessActivity"> | Date | string
    ActualHours?: DecimalNullableFilter<"ProcessActivity"> | Decimal | DecimalJsLike | number | string | null
    Created?: DateTimeFilter<"ProcessActivity"> | Date | string
    CreatedBy?: StringFilter<"ProcessActivity"> | string
    LastModified?: DateTimeFilter<"ProcessActivity"> | Date | string
    LastModifiedBy?: StringFilter<"ProcessActivity"> | string
    ProcessAssign?: XOR<ProcessAssignScalarRelationFilter, ProcessAssignWhereInput>
  }, "ID">

  export type ProcessActivityOrderByWithAggregationInput = {
    ID?: SortOrder
    ProcessAssignID?: SortOrder
    Status?: SortOrder
    ReasonPauseID?: SortOrderInput | SortOrder
    ActivityDateTime?: SortOrder
    ActualHours?: SortOrderInput | SortOrder
    Created?: SortOrder
    CreatedBy?: SortOrder
    LastModified?: SortOrder
    LastModifiedBy?: SortOrder
    _count?: ProcessActivityCountOrderByAggregateInput
    _avg?: ProcessActivityAvgOrderByAggregateInput
    _max?: ProcessActivityMaxOrderByAggregateInput
    _min?: ProcessActivityMinOrderByAggregateInput
    _sum?: ProcessActivitySumOrderByAggregateInput
  }

  export type ProcessActivityScalarWhereWithAggregatesInput = {
    AND?: ProcessActivityScalarWhereWithAggregatesInput | ProcessActivityScalarWhereWithAggregatesInput[]
    OR?: ProcessActivityScalarWhereWithAggregatesInput[]
    NOT?: ProcessActivityScalarWhereWithAggregatesInput | ProcessActivityScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"ProcessActivity"> | number
    ProcessAssignID?: IntWithAggregatesFilter<"ProcessActivity"> | number
    Status?: IntWithAggregatesFilter<"ProcessActivity"> | number
    ReasonPauseID?: IntNullableWithAggregatesFilter<"ProcessActivity"> | number | null
    ActivityDateTime?: DateTimeWithAggregatesFilter<"ProcessActivity"> | Date | string
    ActualHours?: DecimalNullableWithAggregatesFilter<"ProcessActivity"> | Decimal | DecimalJsLike | number | string | null
    Created?: DateTimeWithAggregatesFilter<"ProcessActivity"> | Date | string
    CreatedBy?: StringWithAggregatesFilter<"ProcessActivity"> | string
    LastModified?: DateTimeWithAggregatesFilter<"ProcessActivity"> | Date | string
    LastModifiedBy?: StringWithAggregatesFilter<"ProcessActivity"> | string
  }

  export type ProcessAssignWhereInput = {
    AND?: ProcessAssignWhereInput | ProcessAssignWhereInput[]
    OR?: ProcessAssignWhereInput[]
    NOT?: ProcessAssignWhereInput | ProcessAssignWhereInput[]
    ID?: IntFilter<"ProcessAssign"> | number
    ProcessID?: IntFilter<"ProcessAssign"> | number
    UserID?: StringFilter<"ProcessAssign"> | string
    EmployeeNumber?: StringNullableFilter<"ProcessAssign"> | string | null
    Status?: IntFilter<"ProcessAssign"> | number
    Type?: IntNullableFilter<"ProcessAssign"> | number | null
    Created?: DateTimeFilter<"ProcessAssign"> | Date | string
    CreatedBy?: StringFilter<"ProcessAssign"> | string
    LastModified?: DateTimeFilter<"ProcessAssign"> | Date | string
    LastModifiedBy?: StringFilter<"ProcessAssign"> | string
    remark?: StringNullableFilter<"ProcessAssign"> | string | null
    ProcessActivity?: ProcessActivityListRelationFilter
    Process?: XOR<ProcessScalarRelationFilter, ProcessWhereInput>
  }

  export type ProcessAssignOrderByWithRelationInput = {
    ID?: SortOrder
    ProcessID?: SortOrder
    UserID?: SortOrder
    EmployeeNumber?: SortOrderInput | SortOrder
    Status?: SortOrder
    Type?: SortOrderInput | SortOrder
    Created?: SortOrder
    CreatedBy?: SortOrder
    LastModified?: SortOrder
    LastModifiedBy?: SortOrder
    remark?: SortOrderInput | SortOrder
    ProcessActivity?: ProcessActivityOrderByRelationAggregateInput
    Process?: ProcessOrderByWithRelationInput
  }

  export type ProcessAssignWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: ProcessAssignWhereInput | ProcessAssignWhereInput[]
    OR?: ProcessAssignWhereInput[]
    NOT?: ProcessAssignWhereInput | ProcessAssignWhereInput[]
    ProcessID?: IntFilter<"ProcessAssign"> | number
    UserID?: StringFilter<"ProcessAssign"> | string
    EmployeeNumber?: StringNullableFilter<"ProcessAssign"> | string | null
    Status?: IntFilter<"ProcessAssign"> | number
    Type?: IntNullableFilter<"ProcessAssign"> | number | null
    Created?: DateTimeFilter<"ProcessAssign"> | Date | string
    CreatedBy?: StringFilter<"ProcessAssign"> | string
    LastModified?: DateTimeFilter<"ProcessAssign"> | Date | string
    LastModifiedBy?: StringFilter<"ProcessAssign"> | string
    remark?: StringNullableFilter<"ProcessAssign"> | string | null
    ProcessActivity?: ProcessActivityListRelationFilter
    Process?: XOR<ProcessScalarRelationFilter, ProcessWhereInput>
  }, "ID">

  export type ProcessAssignOrderByWithAggregationInput = {
    ID?: SortOrder
    ProcessID?: SortOrder
    UserID?: SortOrder
    EmployeeNumber?: SortOrderInput | SortOrder
    Status?: SortOrder
    Type?: SortOrderInput | SortOrder
    Created?: SortOrder
    CreatedBy?: SortOrder
    LastModified?: SortOrder
    LastModifiedBy?: SortOrder
    remark?: SortOrderInput | SortOrder
    _count?: ProcessAssignCountOrderByAggregateInput
    _avg?: ProcessAssignAvgOrderByAggregateInput
    _max?: ProcessAssignMaxOrderByAggregateInput
    _min?: ProcessAssignMinOrderByAggregateInput
    _sum?: ProcessAssignSumOrderByAggregateInput
  }

  export type ProcessAssignScalarWhereWithAggregatesInput = {
    AND?: ProcessAssignScalarWhereWithAggregatesInput | ProcessAssignScalarWhereWithAggregatesInput[]
    OR?: ProcessAssignScalarWhereWithAggregatesInput[]
    NOT?: ProcessAssignScalarWhereWithAggregatesInput | ProcessAssignScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"ProcessAssign"> | number
    ProcessID?: IntWithAggregatesFilter<"ProcessAssign"> | number
    UserID?: StringWithAggregatesFilter<"ProcessAssign"> | string
    EmployeeNumber?: StringNullableWithAggregatesFilter<"ProcessAssign"> | string | null
    Status?: IntWithAggregatesFilter<"ProcessAssign"> | number
    Type?: IntNullableWithAggregatesFilter<"ProcessAssign"> | number | null
    Created?: DateTimeWithAggregatesFilter<"ProcessAssign"> | Date | string
    CreatedBy?: StringWithAggregatesFilter<"ProcessAssign"> | string
    LastModified?: DateTimeWithAggregatesFilter<"ProcessAssign"> | Date | string
    LastModifiedBy?: StringWithAggregatesFilter<"ProcessAssign"> | string
    remark?: StringNullableWithAggregatesFilter<"ProcessAssign"> | string | null
  }

  export type vwPRO_2WhereInput = {
    AND?: vwPRO_2WhereInput | vwPRO_2WhereInput[]
    OR?: vwPRO_2WhereInput[]
    NOT?: vwPRO_2WhereInput | vwPRO_2WhereInput[]
    ID?: IntFilter<"vwPRO_2"> | number
    Number?: StringFilter<"vwPRO_2"> | string
    ProductID?: IntFilter<"vwPRO_2"> | number
    Quantity?: IntFilter<"vwPRO_2"> | number
    DueDate?: DateTimeFilter<"vwPRO_2"> | Date | string
    Created?: DateTimeFilter<"vwPRO_2"> | Date | string
    CreatedBy?: StringFilter<"vwPRO_2"> | string
    LastModified?: DateTimeFilter<"vwPRO_2"> | Date | string
    LastModifiedBy?: StringFilter<"vwPRO_2"> | string
    vwUnit?: VwUnitListRelationFilter
  }

  export type vwPRO_2OrderByWithRelationInput = {
    ID?: SortOrder
    Number?: SortOrder
    ProductID?: SortOrder
    Quantity?: SortOrder
    DueDate?: SortOrder
    Created?: SortOrder
    CreatedBy?: SortOrder
    LastModified?: SortOrder
    LastModifiedBy?: SortOrder
    vwUnit?: vwUnitOrderByRelationAggregateInput
  }

  export type vwPRO_2WhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: vwPRO_2WhereInput | vwPRO_2WhereInput[]
    OR?: vwPRO_2WhereInput[]
    NOT?: vwPRO_2WhereInput | vwPRO_2WhereInput[]
    Number?: StringFilter<"vwPRO_2"> | string
    ProductID?: IntFilter<"vwPRO_2"> | number
    Quantity?: IntFilter<"vwPRO_2"> | number
    DueDate?: DateTimeFilter<"vwPRO_2"> | Date | string
    Created?: DateTimeFilter<"vwPRO_2"> | Date | string
    CreatedBy?: StringFilter<"vwPRO_2"> | string
    LastModified?: DateTimeFilter<"vwPRO_2"> | Date | string
    LastModifiedBy?: StringFilter<"vwPRO_2"> | string
    vwUnit?: VwUnitListRelationFilter
  }, "ID">

  export type vwPRO_2OrderByWithAggregationInput = {
    ID?: SortOrder
    Number?: SortOrder
    ProductID?: SortOrder
    Quantity?: SortOrder
    DueDate?: SortOrder
    Created?: SortOrder
    CreatedBy?: SortOrder
    LastModified?: SortOrder
    LastModifiedBy?: SortOrder
    _count?: vwPRO_2CountOrderByAggregateInput
    _avg?: vwPRO_2AvgOrderByAggregateInput
    _max?: vwPRO_2MaxOrderByAggregateInput
    _min?: vwPRO_2MinOrderByAggregateInput
    _sum?: vwPRO_2SumOrderByAggregateInput
  }

  export type vwPRO_2ScalarWhereWithAggregatesInput = {
    AND?: vwPRO_2ScalarWhereWithAggregatesInput | vwPRO_2ScalarWhereWithAggregatesInput[]
    OR?: vwPRO_2ScalarWhereWithAggregatesInput[]
    NOT?: vwPRO_2ScalarWhereWithAggregatesInput | vwPRO_2ScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"vwPRO_2"> | number
    Number?: StringWithAggregatesFilter<"vwPRO_2"> | string
    ProductID?: IntWithAggregatesFilter<"vwPRO_2"> | number
    Quantity?: IntWithAggregatesFilter<"vwPRO_2"> | number
    DueDate?: DateTimeWithAggregatesFilter<"vwPRO_2"> | Date | string
    Created?: DateTimeWithAggregatesFilter<"vwPRO_2"> | Date | string
    CreatedBy?: StringWithAggregatesFilter<"vwPRO_2"> | string
    LastModified?: DateTimeWithAggregatesFilter<"vwPRO_2"> | Date | string
    LastModifiedBy?: StringWithAggregatesFilter<"vwPRO_2"> | string
  }

  export type vwProcessWhereInput = {
    AND?: vwProcessWhereInput | vwProcessWhereInput[]
    OR?: vwProcessWhereInput[]
    NOT?: vwProcessWhereInput | vwProcessWhereInput[]
    ProcessID?: IntFilter<"vwProcess"> | number
    UnitID?: IntFilter<"vwProcess"> | number
    ProcessStatus?: StringNullableFilter<"vwProcess"> | string | null
    ProcessPlanStartDate?: DateTimeNullableFilter<"vwProcess"> | Date | string | null
    ProcessPlanEndDate?: DateTimeNullableFilter<"vwProcess"> | Date | string | null
    ProcessPlanDuration?: IntNullableFilter<"vwProcess"> | number | null
    ProcessActualStartDate?: DateTimeNullableFilter<"vwProcess"> | Date | string | null
    ProcessActualEndDate?: DateTimeNullableFilter<"vwProcess"> | Date | string | null
    ProcessActualDuration?: IntNullableFilter<"vwProcess"> | number | null
    MasterProcessName?: StringNullableFilter<"vwProcess"> | string | null
    StandardMH?: DecimalNullableFilter<"vwProcess"> | Decimal | DecimalJsLike | number | string | null
    ProcessGroupName?: StringNullableFilter<"vwProcess"> | string | null
    ProcessDelayInDay?: IntNullableFilter<"vwProcess"> | number | null
    ProcessOrder?: IntNullableFilter<"vwProcess"> | number | null
    LastModified?: DateTimeFilter<"vwProcess"> | Date | string
    MasterProcessID?: IntFilter<"vwProcess"> | number
    vwUnit?: XOR<VwUnitScalarRelationFilter, vwUnitWhereInput>
    vwProcessAssign?: VwProcessAssign2AllListRelationFilter
  }

  export type vwProcessOrderByWithRelationInput = {
    ProcessID?: SortOrder
    UnitID?: SortOrder
    ProcessStatus?: SortOrderInput | SortOrder
    ProcessPlanStartDate?: SortOrderInput | SortOrder
    ProcessPlanEndDate?: SortOrderInput | SortOrder
    ProcessPlanDuration?: SortOrderInput | SortOrder
    ProcessActualStartDate?: SortOrderInput | SortOrder
    ProcessActualEndDate?: SortOrderInput | SortOrder
    ProcessActualDuration?: SortOrderInput | SortOrder
    MasterProcessName?: SortOrderInput | SortOrder
    StandardMH?: SortOrderInput | SortOrder
    ProcessGroupName?: SortOrderInput | SortOrder
    ProcessDelayInDay?: SortOrderInput | SortOrder
    ProcessOrder?: SortOrderInput | SortOrder
    LastModified?: SortOrder
    MasterProcessID?: SortOrder
    vwUnit?: vwUnitOrderByWithRelationInput
    vwProcessAssign?: vwProcessAssign2AllOrderByRelationAggregateInput
  }

  export type vwProcessWhereUniqueInput = Prisma.AtLeast<{
    ProcessID?: number
    AND?: vwProcessWhereInput | vwProcessWhereInput[]
    OR?: vwProcessWhereInput[]
    NOT?: vwProcessWhereInput | vwProcessWhereInput[]
    UnitID?: IntFilter<"vwProcess"> | number
    ProcessStatus?: StringNullableFilter<"vwProcess"> | string | null
    ProcessPlanStartDate?: DateTimeNullableFilter<"vwProcess"> | Date | string | null
    ProcessPlanEndDate?: DateTimeNullableFilter<"vwProcess"> | Date | string | null
    ProcessPlanDuration?: IntNullableFilter<"vwProcess"> | number | null
    ProcessActualStartDate?: DateTimeNullableFilter<"vwProcess"> | Date | string | null
    ProcessActualEndDate?: DateTimeNullableFilter<"vwProcess"> | Date | string | null
    ProcessActualDuration?: IntNullableFilter<"vwProcess"> | number | null
    MasterProcessName?: StringNullableFilter<"vwProcess"> | string | null
    StandardMH?: DecimalNullableFilter<"vwProcess"> | Decimal | DecimalJsLike | number | string | null
    ProcessGroupName?: StringNullableFilter<"vwProcess"> | string | null
    ProcessDelayInDay?: IntNullableFilter<"vwProcess"> | number | null
    ProcessOrder?: IntNullableFilter<"vwProcess"> | number | null
    LastModified?: DateTimeFilter<"vwProcess"> | Date | string
    MasterProcessID?: IntFilter<"vwProcess"> | number
    vwUnit?: XOR<VwUnitScalarRelationFilter, vwUnitWhereInput>
    vwProcessAssign?: VwProcessAssign2AllListRelationFilter
  }, "ProcessID">

  export type vwProcessOrderByWithAggregationInput = {
    ProcessID?: SortOrder
    UnitID?: SortOrder
    ProcessStatus?: SortOrderInput | SortOrder
    ProcessPlanStartDate?: SortOrderInput | SortOrder
    ProcessPlanEndDate?: SortOrderInput | SortOrder
    ProcessPlanDuration?: SortOrderInput | SortOrder
    ProcessActualStartDate?: SortOrderInput | SortOrder
    ProcessActualEndDate?: SortOrderInput | SortOrder
    ProcessActualDuration?: SortOrderInput | SortOrder
    MasterProcessName?: SortOrderInput | SortOrder
    StandardMH?: SortOrderInput | SortOrder
    ProcessGroupName?: SortOrderInput | SortOrder
    ProcessDelayInDay?: SortOrderInput | SortOrder
    ProcessOrder?: SortOrderInput | SortOrder
    LastModified?: SortOrder
    MasterProcessID?: SortOrder
    _count?: vwProcessCountOrderByAggregateInput
    _avg?: vwProcessAvgOrderByAggregateInput
    _max?: vwProcessMaxOrderByAggregateInput
    _min?: vwProcessMinOrderByAggregateInput
    _sum?: vwProcessSumOrderByAggregateInput
  }

  export type vwProcessScalarWhereWithAggregatesInput = {
    AND?: vwProcessScalarWhereWithAggregatesInput | vwProcessScalarWhereWithAggregatesInput[]
    OR?: vwProcessScalarWhereWithAggregatesInput[]
    NOT?: vwProcessScalarWhereWithAggregatesInput | vwProcessScalarWhereWithAggregatesInput[]
    ProcessID?: IntWithAggregatesFilter<"vwProcess"> | number
    UnitID?: IntWithAggregatesFilter<"vwProcess"> | number
    ProcessStatus?: StringNullableWithAggregatesFilter<"vwProcess"> | string | null
    ProcessPlanStartDate?: DateTimeNullableWithAggregatesFilter<"vwProcess"> | Date | string | null
    ProcessPlanEndDate?: DateTimeNullableWithAggregatesFilter<"vwProcess"> | Date | string | null
    ProcessPlanDuration?: IntNullableWithAggregatesFilter<"vwProcess"> | number | null
    ProcessActualStartDate?: DateTimeNullableWithAggregatesFilter<"vwProcess"> | Date | string | null
    ProcessActualEndDate?: DateTimeNullableWithAggregatesFilter<"vwProcess"> | Date | string | null
    ProcessActualDuration?: IntNullableWithAggregatesFilter<"vwProcess"> | number | null
    MasterProcessName?: StringNullableWithAggregatesFilter<"vwProcess"> | string | null
    StandardMH?: DecimalNullableWithAggregatesFilter<"vwProcess"> | Decimal | DecimalJsLike | number | string | null
    ProcessGroupName?: StringNullableWithAggregatesFilter<"vwProcess"> | string | null
    ProcessDelayInDay?: IntNullableWithAggregatesFilter<"vwProcess"> | number | null
    ProcessOrder?: IntNullableWithAggregatesFilter<"vwProcess"> | number | null
    LastModified?: DateTimeWithAggregatesFilter<"vwProcess"> | Date | string
    MasterProcessID?: IntWithAggregatesFilter<"vwProcess"> | number
  }

  export type vwProcessActivityWhereInput = {
    AND?: vwProcessActivityWhereInput | vwProcessActivityWhereInput[]
    OR?: vwProcessActivityWhereInput[]
    NOT?: vwProcessActivityWhereInput | vwProcessActivityWhereInput[]
    atasan?: StringFilter<"vwProcessActivity"> | string
    EmployeeNumber?: StringNullableFilter<"vwProcessActivity"> | string | null
    ActivityDateTime?: DateTimeFilter<"vwProcessActivity"> | Date | string
    ProcessActivityID?: IntFilter<"vwProcessActivity"> | number
    ProcessAssignID?: IntFilter<"vwProcessActivity"> | number
    ProcessActivityName?: StringFilter<"vwProcessActivity"> | string
    ProcessActivityStatus?: StringNullableFilter<"vwProcessActivity"> | string | null
    ProcessActivityReasonPause?: StringFilter<"vwProcessActivity"> | string
    ActualHoursNonProductive?: IntNullableFilter<"vwProcessActivity"> | number | null
    ProcessActivityActualHours?: DecimalNullableFilter<"vwProcessActivity"> | Decimal | DecimalJsLike | number | string | null
    ProcessActivityDateTime?: DateTimeFilter<"vwProcessActivity"> | Date | string
    LastModifiedBy?: StringFilter<"vwProcessActivity"> | string
    LastModified?: DateTimeFilter<"vwProcessActivity"> | Date | string
    vwProcessAssign?: XOR<VwProcessAssign2AllScalarRelationFilter, vwProcessAssign2AllWhereInput>
  }

  export type vwProcessActivityOrderByWithRelationInput = {
    atasan?: SortOrder
    EmployeeNumber?: SortOrderInput | SortOrder
    ActivityDateTime?: SortOrder
    ProcessActivityID?: SortOrder
    ProcessAssignID?: SortOrder
    ProcessActivityName?: SortOrder
    ProcessActivityStatus?: SortOrderInput | SortOrder
    ProcessActivityReasonPause?: SortOrder
    ActualHoursNonProductive?: SortOrderInput | SortOrder
    ProcessActivityActualHours?: SortOrderInput | SortOrder
    ProcessActivityDateTime?: SortOrder
    LastModifiedBy?: SortOrder
    LastModified?: SortOrder
    vwProcessAssign?: vwProcessAssign2AllOrderByWithRelationInput
  }

  export type vwProcessActivityWhereUniqueInput = Prisma.AtLeast<{
    ProcessActivityID?: number
    AND?: vwProcessActivityWhereInput | vwProcessActivityWhereInput[]
    OR?: vwProcessActivityWhereInput[]
    NOT?: vwProcessActivityWhereInput | vwProcessActivityWhereInput[]
    atasan?: StringFilter<"vwProcessActivity"> | string
    EmployeeNumber?: StringNullableFilter<"vwProcessActivity"> | string | null
    ActivityDateTime?: DateTimeFilter<"vwProcessActivity"> | Date | string
    ProcessAssignID?: IntFilter<"vwProcessActivity"> | number
    ProcessActivityName?: StringFilter<"vwProcessActivity"> | string
    ProcessActivityStatus?: StringNullableFilter<"vwProcessActivity"> | string | null
    ProcessActivityReasonPause?: StringFilter<"vwProcessActivity"> | string
    ActualHoursNonProductive?: IntNullableFilter<"vwProcessActivity"> | number | null
    ProcessActivityActualHours?: DecimalNullableFilter<"vwProcessActivity"> | Decimal | DecimalJsLike | number | string | null
    ProcessActivityDateTime?: DateTimeFilter<"vwProcessActivity"> | Date | string
    LastModifiedBy?: StringFilter<"vwProcessActivity"> | string
    LastModified?: DateTimeFilter<"vwProcessActivity"> | Date | string
    vwProcessAssign?: XOR<VwProcessAssign2AllScalarRelationFilter, vwProcessAssign2AllWhereInput>
  }, "ProcessActivityID">

  export type vwProcessActivityOrderByWithAggregationInput = {
    atasan?: SortOrder
    EmployeeNumber?: SortOrderInput | SortOrder
    ActivityDateTime?: SortOrder
    ProcessActivityID?: SortOrder
    ProcessAssignID?: SortOrder
    ProcessActivityName?: SortOrder
    ProcessActivityStatus?: SortOrderInput | SortOrder
    ProcessActivityReasonPause?: SortOrder
    ActualHoursNonProductive?: SortOrderInput | SortOrder
    ProcessActivityActualHours?: SortOrderInput | SortOrder
    ProcessActivityDateTime?: SortOrder
    LastModifiedBy?: SortOrder
    LastModified?: SortOrder
    _count?: vwProcessActivityCountOrderByAggregateInput
    _avg?: vwProcessActivityAvgOrderByAggregateInput
    _max?: vwProcessActivityMaxOrderByAggregateInput
    _min?: vwProcessActivityMinOrderByAggregateInput
    _sum?: vwProcessActivitySumOrderByAggregateInput
  }

  export type vwProcessActivityScalarWhereWithAggregatesInput = {
    AND?: vwProcessActivityScalarWhereWithAggregatesInput | vwProcessActivityScalarWhereWithAggregatesInput[]
    OR?: vwProcessActivityScalarWhereWithAggregatesInput[]
    NOT?: vwProcessActivityScalarWhereWithAggregatesInput | vwProcessActivityScalarWhereWithAggregatesInput[]
    atasan?: StringWithAggregatesFilter<"vwProcessActivity"> | string
    EmployeeNumber?: StringNullableWithAggregatesFilter<"vwProcessActivity"> | string | null
    ActivityDateTime?: DateTimeWithAggregatesFilter<"vwProcessActivity"> | Date | string
    ProcessActivityID?: IntWithAggregatesFilter<"vwProcessActivity"> | number
    ProcessAssignID?: IntWithAggregatesFilter<"vwProcessActivity"> | number
    ProcessActivityName?: StringWithAggregatesFilter<"vwProcessActivity"> | string
    ProcessActivityStatus?: StringNullableWithAggregatesFilter<"vwProcessActivity"> | string | null
    ProcessActivityReasonPause?: StringWithAggregatesFilter<"vwProcessActivity"> | string
    ActualHoursNonProductive?: IntNullableWithAggregatesFilter<"vwProcessActivity"> | number | null
    ProcessActivityActualHours?: DecimalNullableWithAggregatesFilter<"vwProcessActivity"> | Decimal | DecimalJsLike | number | string | null
    ProcessActivityDateTime?: DateTimeWithAggregatesFilter<"vwProcessActivity"> | Date | string
    LastModifiedBy?: StringWithAggregatesFilter<"vwProcessActivity"> | string
    LastModified?: DateTimeWithAggregatesFilter<"vwProcessActivity"> | Date | string
  }

  export type vwProcessAssign2AllWhereInput = {
    AND?: vwProcessAssign2AllWhereInput | vwProcessAssign2AllWhereInput[]
    OR?: vwProcessAssign2AllWhereInput[]
    NOT?: vwProcessAssign2AllWhereInput | vwProcessAssign2AllWhereInput[]
    ID?: IntFilter<"vwProcessAssign2All"> | number
    ProcessID?: IntFilter<"vwProcessAssign2All"> | number
    UnitID?: IntNullableFilter<"vwProcessAssign2All"> | number | null
    LeaderName?: StringFilter<"vwProcessAssign2All"> | string
    OperatorName?: StringNullableFilter<"vwProcessAssign2All"> | string | null
    NRP?: StringNullableFilter<"vwProcessAssign2All"> | string | null
    TglAssign?: DateTimeFilter<"vwProcessAssign2All"> | Date | string
    ProcessassignStatus?: StringNullableFilter<"vwProcessAssign2All"> | string | null
    Startassign?: StringNullableFilter<"vwProcessAssign2All"> | string | null
    Stopassign?: StringNullableFilter<"vwProcessAssign2All"> | string | null
    ProcessAssignType?: StringNullableFilter<"vwProcessAssign2All"> | string | null
    LastModified?: DateTimeFilter<"vwProcessAssign2All"> | Date | string
    lastStart?: DateTimeNullableFilter<"vwProcessAssign2All"> | Date | string | null
    lastStop?: DateTimeNullableFilter<"vwProcessAssign2All"> | Date | string | null
    remark?: StringNullableFilter<"vwProcessAssign2All"> | string | null
    IsActive?: BoolNullableFilter<"vwProcessAssign2All"> | boolean | null
    vwProcess?: XOR<VwProcessScalarRelationFilter, vwProcessWhereInput>
    vwProcessActivity?: VwProcessActivityListRelationFilter
  }

  export type vwProcessAssign2AllOrderByWithRelationInput = {
    ID?: SortOrder
    ProcessID?: SortOrder
    UnitID?: SortOrderInput | SortOrder
    LeaderName?: SortOrder
    OperatorName?: SortOrderInput | SortOrder
    NRP?: SortOrderInput | SortOrder
    TglAssign?: SortOrder
    ProcessassignStatus?: SortOrderInput | SortOrder
    Startassign?: SortOrderInput | SortOrder
    Stopassign?: SortOrderInput | SortOrder
    ProcessAssignType?: SortOrderInput | SortOrder
    LastModified?: SortOrder
    lastStart?: SortOrderInput | SortOrder
    lastStop?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    IsActive?: SortOrderInput | SortOrder
    vwProcess?: vwProcessOrderByWithRelationInput
    vwProcessActivity?: vwProcessActivityOrderByRelationAggregateInput
  }

  export type vwProcessAssign2AllWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: vwProcessAssign2AllWhereInput | vwProcessAssign2AllWhereInput[]
    OR?: vwProcessAssign2AllWhereInput[]
    NOT?: vwProcessAssign2AllWhereInput | vwProcessAssign2AllWhereInput[]
    ProcessID?: IntFilter<"vwProcessAssign2All"> | number
    UnitID?: IntNullableFilter<"vwProcessAssign2All"> | number | null
    LeaderName?: StringFilter<"vwProcessAssign2All"> | string
    OperatorName?: StringNullableFilter<"vwProcessAssign2All"> | string | null
    NRP?: StringNullableFilter<"vwProcessAssign2All"> | string | null
    TglAssign?: DateTimeFilter<"vwProcessAssign2All"> | Date | string
    ProcessassignStatus?: StringNullableFilter<"vwProcessAssign2All"> | string | null
    Startassign?: StringNullableFilter<"vwProcessAssign2All"> | string | null
    Stopassign?: StringNullableFilter<"vwProcessAssign2All"> | string | null
    ProcessAssignType?: StringNullableFilter<"vwProcessAssign2All"> | string | null
    LastModified?: DateTimeFilter<"vwProcessAssign2All"> | Date | string
    lastStart?: DateTimeNullableFilter<"vwProcessAssign2All"> | Date | string | null
    lastStop?: DateTimeNullableFilter<"vwProcessAssign2All"> | Date | string | null
    remark?: StringNullableFilter<"vwProcessAssign2All"> | string | null
    IsActive?: BoolNullableFilter<"vwProcessAssign2All"> | boolean | null
    vwProcess?: XOR<VwProcessScalarRelationFilter, vwProcessWhereInput>
    vwProcessActivity?: VwProcessActivityListRelationFilter
  }, "ID">

  export type vwProcessAssign2AllOrderByWithAggregationInput = {
    ID?: SortOrder
    ProcessID?: SortOrder
    UnitID?: SortOrderInput | SortOrder
    LeaderName?: SortOrder
    OperatorName?: SortOrderInput | SortOrder
    NRP?: SortOrderInput | SortOrder
    TglAssign?: SortOrder
    ProcessassignStatus?: SortOrderInput | SortOrder
    Startassign?: SortOrderInput | SortOrder
    Stopassign?: SortOrderInput | SortOrder
    ProcessAssignType?: SortOrderInput | SortOrder
    LastModified?: SortOrder
    lastStart?: SortOrderInput | SortOrder
    lastStop?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    IsActive?: SortOrderInput | SortOrder
    _count?: vwProcessAssign2AllCountOrderByAggregateInput
    _avg?: vwProcessAssign2AllAvgOrderByAggregateInput
    _max?: vwProcessAssign2AllMaxOrderByAggregateInput
    _min?: vwProcessAssign2AllMinOrderByAggregateInput
    _sum?: vwProcessAssign2AllSumOrderByAggregateInput
  }

  export type vwProcessAssign2AllScalarWhereWithAggregatesInput = {
    AND?: vwProcessAssign2AllScalarWhereWithAggregatesInput | vwProcessAssign2AllScalarWhereWithAggregatesInput[]
    OR?: vwProcessAssign2AllScalarWhereWithAggregatesInput[]
    NOT?: vwProcessAssign2AllScalarWhereWithAggregatesInput | vwProcessAssign2AllScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"vwProcessAssign2All"> | number
    ProcessID?: IntWithAggregatesFilter<"vwProcessAssign2All"> | number
    UnitID?: IntNullableWithAggregatesFilter<"vwProcessAssign2All"> | number | null
    LeaderName?: StringWithAggregatesFilter<"vwProcessAssign2All"> | string
    OperatorName?: StringNullableWithAggregatesFilter<"vwProcessAssign2All"> | string | null
    NRP?: StringNullableWithAggregatesFilter<"vwProcessAssign2All"> | string | null
    TglAssign?: DateTimeWithAggregatesFilter<"vwProcessAssign2All"> | Date | string
    ProcessassignStatus?: StringNullableWithAggregatesFilter<"vwProcessAssign2All"> | string | null
    Startassign?: StringNullableWithAggregatesFilter<"vwProcessAssign2All"> | string | null
    Stopassign?: StringNullableWithAggregatesFilter<"vwProcessAssign2All"> | string | null
    ProcessAssignType?: StringNullableWithAggregatesFilter<"vwProcessAssign2All"> | string | null
    LastModified?: DateTimeWithAggregatesFilter<"vwProcessAssign2All"> | Date | string
    lastStart?: DateTimeNullableWithAggregatesFilter<"vwProcessAssign2All"> | Date | string | null
    lastStop?: DateTimeNullableWithAggregatesFilter<"vwProcessAssign2All"> | Date | string | null
    remark?: StringNullableWithAggregatesFilter<"vwProcessAssign2All"> | string | null
    IsActive?: BoolNullableWithAggregatesFilter<"vwProcessAssign2All"> | boolean | null
  }

  export type vwProcessGroupWhereInput = {
    AND?: vwProcessGroupWhereInput | vwProcessGroupWhereInput[]
    OR?: vwProcessGroupWhereInput[]
    NOT?: vwProcessGroupWhereInput | vwProcessGroupWhereInput[]
    UnitID?: IntFilter<"vwProcessGroup"> | number
    ProcessGroupNameSort?: IntNullableFilter<"vwProcessGroup"> | number | null
    ProcessGroupName?: StringNullableFilter<"vwProcessGroup"> | string | null
    ProcessGroupPlanStartDate?: DateTimeNullableFilter<"vwProcessGroup"> | Date | string | null
    ProcessGroupPlanEndDate?: DateTimeNullableFilter<"vwProcessGroup"> | Date | string | null
    ProcessGroupPlanDuration?: IntNullableFilter<"vwProcessGroup"> | number | null
    ProcessGroupActualStartDate?: DateTimeNullableFilter<"vwProcessGroup"> | Date | string | null
    ProcessGroupActualEndDate?: DateTimeNullableFilter<"vwProcessGroup"> | Date | string | null
    ProcessGroupActualDuration?: IntNullableFilter<"vwProcessGroup"> | number | null
    ProcessGroupDelayInDay?: IntNullableFilter<"vwProcessGroup"> | number | null
    LastModified?: DateTimeNullableFilter<"vwProcessGroup"> | Date | string | null
  }

  export type vwProcessGroupOrderByWithRelationInput = {
    UnitID?: SortOrder
    ProcessGroupNameSort?: SortOrderInput | SortOrder
    ProcessGroupName?: SortOrderInput | SortOrder
    ProcessGroupPlanStartDate?: SortOrderInput | SortOrder
    ProcessGroupPlanEndDate?: SortOrderInput | SortOrder
    ProcessGroupPlanDuration?: SortOrderInput | SortOrder
    ProcessGroupActualStartDate?: SortOrderInput | SortOrder
    ProcessGroupActualEndDate?: SortOrderInput | SortOrder
    ProcessGroupActualDuration?: SortOrderInput | SortOrder
    ProcessGroupDelayInDay?: SortOrderInput | SortOrder
    LastModified?: SortOrderInput | SortOrder
  }

  export type vwProcessGroupWhereUniqueInput = Prisma.AtLeast<{
    UnitID?: number
    AND?: vwProcessGroupWhereInput | vwProcessGroupWhereInput[]
    OR?: vwProcessGroupWhereInput[]
    NOT?: vwProcessGroupWhereInput | vwProcessGroupWhereInput[]
    ProcessGroupNameSort?: IntNullableFilter<"vwProcessGroup"> | number | null
    ProcessGroupName?: StringNullableFilter<"vwProcessGroup"> | string | null
    ProcessGroupPlanStartDate?: DateTimeNullableFilter<"vwProcessGroup"> | Date | string | null
    ProcessGroupPlanEndDate?: DateTimeNullableFilter<"vwProcessGroup"> | Date | string | null
    ProcessGroupPlanDuration?: IntNullableFilter<"vwProcessGroup"> | number | null
    ProcessGroupActualStartDate?: DateTimeNullableFilter<"vwProcessGroup"> | Date | string | null
    ProcessGroupActualEndDate?: DateTimeNullableFilter<"vwProcessGroup"> | Date | string | null
    ProcessGroupActualDuration?: IntNullableFilter<"vwProcessGroup"> | number | null
    ProcessGroupDelayInDay?: IntNullableFilter<"vwProcessGroup"> | number | null
    LastModified?: DateTimeNullableFilter<"vwProcessGroup"> | Date | string | null
  }, "UnitID">

  export type vwProcessGroupOrderByWithAggregationInput = {
    UnitID?: SortOrder
    ProcessGroupNameSort?: SortOrderInput | SortOrder
    ProcessGroupName?: SortOrderInput | SortOrder
    ProcessGroupPlanStartDate?: SortOrderInput | SortOrder
    ProcessGroupPlanEndDate?: SortOrderInput | SortOrder
    ProcessGroupPlanDuration?: SortOrderInput | SortOrder
    ProcessGroupActualStartDate?: SortOrderInput | SortOrder
    ProcessGroupActualEndDate?: SortOrderInput | SortOrder
    ProcessGroupActualDuration?: SortOrderInput | SortOrder
    ProcessGroupDelayInDay?: SortOrderInput | SortOrder
    LastModified?: SortOrderInput | SortOrder
    _count?: vwProcessGroupCountOrderByAggregateInput
    _avg?: vwProcessGroupAvgOrderByAggregateInput
    _max?: vwProcessGroupMaxOrderByAggregateInput
    _min?: vwProcessGroupMinOrderByAggregateInput
    _sum?: vwProcessGroupSumOrderByAggregateInput
  }

  export type vwProcessGroupScalarWhereWithAggregatesInput = {
    AND?: vwProcessGroupScalarWhereWithAggregatesInput | vwProcessGroupScalarWhereWithAggregatesInput[]
    OR?: vwProcessGroupScalarWhereWithAggregatesInput[]
    NOT?: vwProcessGroupScalarWhereWithAggregatesInput | vwProcessGroupScalarWhereWithAggregatesInput[]
    UnitID?: IntWithAggregatesFilter<"vwProcessGroup"> | number
    ProcessGroupNameSort?: IntNullableWithAggregatesFilter<"vwProcessGroup"> | number | null
    ProcessGroupName?: StringNullableWithAggregatesFilter<"vwProcessGroup"> | string | null
    ProcessGroupPlanStartDate?: DateTimeNullableWithAggregatesFilter<"vwProcessGroup"> | Date | string | null
    ProcessGroupPlanEndDate?: DateTimeNullableWithAggregatesFilter<"vwProcessGroup"> | Date | string | null
    ProcessGroupPlanDuration?: IntNullableWithAggregatesFilter<"vwProcessGroup"> | number | null
    ProcessGroupActualStartDate?: DateTimeNullableWithAggregatesFilter<"vwProcessGroup"> | Date | string | null
    ProcessGroupActualEndDate?: DateTimeNullableWithAggregatesFilter<"vwProcessGroup"> | Date | string | null
    ProcessGroupActualDuration?: IntNullableWithAggregatesFilter<"vwProcessGroup"> | number | null
    ProcessGroupDelayInDay?: IntNullableWithAggregatesFilter<"vwProcessGroup"> | number | null
    LastModified?: DateTimeNullableWithAggregatesFilter<"vwProcessGroup"> | Date | string | null
  }

  export type vwProductWhereInput = {
    AND?: vwProductWhereInput | vwProductWhereInput[]
    OR?: vwProductWhereInput[]
    NOT?: vwProductWhereInput | vwProductWhereInput[]
    ProductID?: IntFilter<"vwProduct"> | number
    ProductGroupID?: IntFilter<"vwProduct"> | number
    ProductName?: StringFilter<"vwProduct"> | string
    ProductPN?: StringFilter<"vwProduct"> | string
    ProductTotalDay?: IntNullableFilter<"vwProduct"> | number | null
    ProductSubGroupName?: StringFilter<"vwProduct"> | string
    ProductSubGroupSAPCode?: StringFilter<"vwProduct"> | string
    ProductStandardHours?: DecimalNullableFilter<"vwProduct"> | Decimal | DecimalJsLike | number | string | null
    LastModified?: DateTimeFilter<"vwProduct"> | Date | string
    vwProductGroup?: XOR<VwProductGroupScalarRelationFilter, vwProductGroupWhereInput>
    vwUnit?: VwUnitListRelationFilter
  }

  export type vwProductOrderByWithRelationInput = {
    ProductID?: SortOrder
    ProductGroupID?: SortOrder
    ProductName?: SortOrder
    ProductPN?: SortOrder
    ProductTotalDay?: SortOrderInput | SortOrder
    ProductSubGroupName?: SortOrder
    ProductSubGroupSAPCode?: SortOrder
    ProductStandardHours?: SortOrderInput | SortOrder
    LastModified?: SortOrder
    vwProductGroup?: vwProductGroupOrderByWithRelationInput
    vwUnit?: vwUnitOrderByRelationAggregateInput
  }

  export type vwProductWhereUniqueInput = Prisma.AtLeast<{
    ProductID?: number
    AND?: vwProductWhereInput | vwProductWhereInput[]
    OR?: vwProductWhereInput[]
    NOT?: vwProductWhereInput | vwProductWhereInput[]
    ProductGroupID?: IntFilter<"vwProduct"> | number
    ProductName?: StringFilter<"vwProduct"> | string
    ProductPN?: StringFilter<"vwProduct"> | string
    ProductTotalDay?: IntNullableFilter<"vwProduct"> | number | null
    ProductSubGroupName?: StringFilter<"vwProduct"> | string
    ProductSubGroupSAPCode?: StringFilter<"vwProduct"> | string
    ProductStandardHours?: DecimalNullableFilter<"vwProduct"> | Decimal | DecimalJsLike | number | string | null
    LastModified?: DateTimeFilter<"vwProduct"> | Date | string
    vwProductGroup?: XOR<VwProductGroupScalarRelationFilter, vwProductGroupWhereInput>
    vwUnit?: VwUnitListRelationFilter
  }, "ProductID">

  export type vwProductOrderByWithAggregationInput = {
    ProductID?: SortOrder
    ProductGroupID?: SortOrder
    ProductName?: SortOrder
    ProductPN?: SortOrder
    ProductTotalDay?: SortOrderInput | SortOrder
    ProductSubGroupName?: SortOrder
    ProductSubGroupSAPCode?: SortOrder
    ProductStandardHours?: SortOrderInput | SortOrder
    LastModified?: SortOrder
    _count?: vwProductCountOrderByAggregateInput
    _avg?: vwProductAvgOrderByAggregateInput
    _max?: vwProductMaxOrderByAggregateInput
    _min?: vwProductMinOrderByAggregateInput
    _sum?: vwProductSumOrderByAggregateInput
  }

  export type vwProductScalarWhereWithAggregatesInput = {
    AND?: vwProductScalarWhereWithAggregatesInput | vwProductScalarWhereWithAggregatesInput[]
    OR?: vwProductScalarWhereWithAggregatesInput[]
    NOT?: vwProductScalarWhereWithAggregatesInput | vwProductScalarWhereWithAggregatesInput[]
    ProductID?: IntWithAggregatesFilter<"vwProduct"> | number
    ProductGroupID?: IntWithAggregatesFilter<"vwProduct"> | number
    ProductName?: StringWithAggregatesFilter<"vwProduct"> | string
    ProductPN?: StringWithAggregatesFilter<"vwProduct"> | string
    ProductTotalDay?: IntNullableWithAggregatesFilter<"vwProduct"> | number | null
    ProductSubGroupName?: StringWithAggregatesFilter<"vwProduct"> | string
    ProductSubGroupSAPCode?: StringWithAggregatesFilter<"vwProduct"> | string
    ProductStandardHours?: DecimalNullableWithAggregatesFilter<"vwProduct"> | Decimal | DecimalJsLike | number | string | null
    LastModified?: DateTimeWithAggregatesFilter<"vwProduct"> | Date | string
  }

  export type vwUnitWhereInput = {
    AND?: vwUnitWhereInput | vwUnitWhereInput[]
    OR?: vwUnitWhereInput[]
    NOT?: vwUnitWhereInput | vwUnitWhereInput[]
    UnitID?: IntFilter<"vwUnit"> | number
    PROID?: IntFilter<"vwUnit"> | number
    ProductID?: IntFilter<"vwUnit"> | number
    UnitSerialNumber?: StringFilter<"vwUnit"> | string
    UnitChasisNumber?: StringNullableFilter<"vwUnit"> | string | null
    UnitDueDate?: DateTimeFilter<"vwUnit"> | Date | string
    UnitPlanStartDate?: DateTimeNullableFilter<"vwUnit"> | Date | string | null
    UnitPlanEndDate?: DateTimeNullableFilter<"vwUnit"> | Date | string | null
    UnitPlanDuration?: IntNullableFilter<"vwUnit"> | number | null
    UnitActualStartDate?: DateTimeNullableFilter<"vwUnit"> | Date | string | null
    UnitActualEndDate?: DateTimeNullableFilter<"vwUnit"> | Date | string | null
    UnitActualDuration?: IntNullableFilter<"vwUnit"> | number | null
    Unit_Status?: StringFilter<"vwUnit"> | string
    UnitMPSDueDate?: DateTimeNullableFilter<"vwUnit"> | Date | string | null
    UnitActualDeliveryDate?: DateTimeNullableFilter<"vwUnit"> | Date | string | null
    UnitActualHoursCompleted?: DecimalNullableFilter<"vwUnit"> | Decimal | DecimalJsLike | number | string | null
    UnitDelayInDay?: IntNullableFilter<"vwUnit"> | number | null
    SOUnitprice?: DecimalNullableFilter<"vwUnit"> | Decimal | DecimalJsLike | number | string | null
    SalesOrderID?: IntNullableFilter<"vwUnit"> | number | null
    UnitProcessLastStatus?: StringFilter<"vwUnit"> | string
    UnitProcessLastActualStartDate?: DateTimeNullableFilter<"vwUnit"> | Date | string | null
    UnitProcessLastPlanStartDate?: DateTimeNullableFilter<"vwUnit"> | Date | string | null
    IsHold?: BoolFilter<"vwUnit"> | boolean
    LastModified?: DateTimeFilter<"vwUnit"> | Date | string
    vwPRO?: XOR<VwPRO_2ScalarRelationFilter, vwPRO_2WhereInput>
    vwProduct?: XOR<VwProductScalarRelationFilter, vwProductWhereInput>
    vwProcess?: VwProcessListRelationFilter
  }

  export type vwUnitOrderByWithRelationInput = {
    UnitID?: SortOrder
    PROID?: SortOrder
    ProductID?: SortOrder
    UnitSerialNumber?: SortOrder
    UnitChasisNumber?: SortOrderInput | SortOrder
    UnitDueDate?: SortOrder
    UnitPlanStartDate?: SortOrderInput | SortOrder
    UnitPlanEndDate?: SortOrderInput | SortOrder
    UnitPlanDuration?: SortOrderInput | SortOrder
    UnitActualStartDate?: SortOrderInput | SortOrder
    UnitActualEndDate?: SortOrderInput | SortOrder
    UnitActualDuration?: SortOrderInput | SortOrder
    Unit_Status?: SortOrder
    UnitMPSDueDate?: SortOrderInput | SortOrder
    UnitActualDeliveryDate?: SortOrderInput | SortOrder
    UnitActualHoursCompleted?: SortOrderInput | SortOrder
    UnitDelayInDay?: SortOrderInput | SortOrder
    SOUnitprice?: SortOrderInput | SortOrder
    SalesOrderID?: SortOrderInput | SortOrder
    UnitProcessLastStatus?: SortOrder
    UnitProcessLastActualStartDate?: SortOrderInput | SortOrder
    UnitProcessLastPlanStartDate?: SortOrderInput | SortOrder
    IsHold?: SortOrder
    LastModified?: SortOrder
    vwPRO?: vwPRO_2OrderByWithRelationInput
    vwProduct?: vwProductOrderByWithRelationInput
    vwProcess?: vwProcessOrderByRelationAggregateInput
  }

  export type vwUnitWhereUniqueInput = Prisma.AtLeast<{
    UnitID?: number
    AND?: vwUnitWhereInput | vwUnitWhereInput[]
    OR?: vwUnitWhereInput[]
    NOT?: vwUnitWhereInput | vwUnitWhereInput[]
    PROID?: IntFilter<"vwUnit"> | number
    ProductID?: IntFilter<"vwUnit"> | number
    UnitSerialNumber?: StringFilter<"vwUnit"> | string
    UnitChasisNumber?: StringNullableFilter<"vwUnit"> | string | null
    UnitDueDate?: DateTimeFilter<"vwUnit"> | Date | string
    UnitPlanStartDate?: DateTimeNullableFilter<"vwUnit"> | Date | string | null
    UnitPlanEndDate?: DateTimeNullableFilter<"vwUnit"> | Date | string | null
    UnitPlanDuration?: IntNullableFilter<"vwUnit"> | number | null
    UnitActualStartDate?: DateTimeNullableFilter<"vwUnit"> | Date | string | null
    UnitActualEndDate?: DateTimeNullableFilter<"vwUnit"> | Date | string | null
    UnitActualDuration?: IntNullableFilter<"vwUnit"> | number | null
    Unit_Status?: StringFilter<"vwUnit"> | string
    UnitMPSDueDate?: DateTimeNullableFilter<"vwUnit"> | Date | string | null
    UnitActualDeliveryDate?: DateTimeNullableFilter<"vwUnit"> | Date | string | null
    UnitActualHoursCompleted?: DecimalNullableFilter<"vwUnit"> | Decimal | DecimalJsLike | number | string | null
    UnitDelayInDay?: IntNullableFilter<"vwUnit"> | number | null
    SOUnitprice?: DecimalNullableFilter<"vwUnit"> | Decimal | DecimalJsLike | number | string | null
    SalesOrderID?: IntNullableFilter<"vwUnit"> | number | null
    UnitProcessLastStatus?: StringFilter<"vwUnit"> | string
    UnitProcessLastActualStartDate?: DateTimeNullableFilter<"vwUnit"> | Date | string | null
    UnitProcessLastPlanStartDate?: DateTimeNullableFilter<"vwUnit"> | Date | string | null
    IsHold?: BoolFilter<"vwUnit"> | boolean
    LastModified?: DateTimeFilter<"vwUnit"> | Date | string
    vwPRO?: XOR<VwPRO_2ScalarRelationFilter, vwPRO_2WhereInput>
    vwProduct?: XOR<VwProductScalarRelationFilter, vwProductWhereInput>
    vwProcess?: VwProcessListRelationFilter
  }, "UnitID">

  export type vwUnitOrderByWithAggregationInput = {
    UnitID?: SortOrder
    PROID?: SortOrder
    ProductID?: SortOrder
    UnitSerialNumber?: SortOrder
    UnitChasisNumber?: SortOrderInput | SortOrder
    UnitDueDate?: SortOrder
    UnitPlanStartDate?: SortOrderInput | SortOrder
    UnitPlanEndDate?: SortOrderInput | SortOrder
    UnitPlanDuration?: SortOrderInput | SortOrder
    UnitActualStartDate?: SortOrderInput | SortOrder
    UnitActualEndDate?: SortOrderInput | SortOrder
    UnitActualDuration?: SortOrderInput | SortOrder
    Unit_Status?: SortOrder
    UnitMPSDueDate?: SortOrderInput | SortOrder
    UnitActualDeliveryDate?: SortOrderInput | SortOrder
    UnitActualHoursCompleted?: SortOrderInput | SortOrder
    UnitDelayInDay?: SortOrderInput | SortOrder
    SOUnitprice?: SortOrderInput | SortOrder
    SalesOrderID?: SortOrderInput | SortOrder
    UnitProcessLastStatus?: SortOrder
    UnitProcessLastActualStartDate?: SortOrderInput | SortOrder
    UnitProcessLastPlanStartDate?: SortOrderInput | SortOrder
    IsHold?: SortOrder
    LastModified?: SortOrder
    _count?: vwUnitCountOrderByAggregateInput
    _avg?: vwUnitAvgOrderByAggregateInput
    _max?: vwUnitMaxOrderByAggregateInput
    _min?: vwUnitMinOrderByAggregateInput
    _sum?: vwUnitSumOrderByAggregateInput
  }

  export type vwUnitScalarWhereWithAggregatesInput = {
    AND?: vwUnitScalarWhereWithAggregatesInput | vwUnitScalarWhereWithAggregatesInput[]
    OR?: vwUnitScalarWhereWithAggregatesInput[]
    NOT?: vwUnitScalarWhereWithAggregatesInput | vwUnitScalarWhereWithAggregatesInput[]
    UnitID?: IntWithAggregatesFilter<"vwUnit"> | number
    PROID?: IntWithAggregatesFilter<"vwUnit"> | number
    ProductID?: IntWithAggregatesFilter<"vwUnit"> | number
    UnitSerialNumber?: StringWithAggregatesFilter<"vwUnit"> | string
    UnitChasisNumber?: StringNullableWithAggregatesFilter<"vwUnit"> | string | null
    UnitDueDate?: DateTimeWithAggregatesFilter<"vwUnit"> | Date | string
    UnitPlanStartDate?: DateTimeNullableWithAggregatesFilter<"vwUnit"> | Date | string | null
    UnitPlanEndDate?: DateTimeNullableWithAggregatesFilter<"vwUnit"> | Date | string | null
    UnitPlanDuration?: IntNullableWithAggregatesFilter<"vwUnit"> | number | null
    UnitActualStartDate?: DateTimeNullableWithAggregatesFilter<"vwUnit"> | Date | string | null
    UnitActualEndDate?: DateTimeNullableWithAggregatesFilter<"vwUnit"> | Date | string | null
    UnitActualDuration?: IntNullableWithAggregatesFilter<"vwUnit"> | number | null
    Unit_Status?: StringWithAggregatesFilter<"vwUnit"> | string
    UnitMPSDueDate?: DateTimeNullableWithAggregatesFilter<"vwUnit"> | Date | string | null
    UnitActualDeliveryDate?: DateTimeNullableWithAggregatesFilter<"vwUnit"> | Date | string | null
    UnitActualHoursCompleted?: DecimalNullableWithAggregatesFilter<"vwUnit"> | Decimal | DecimalJsLike | number | string | null
    UnitDelayInDay?: IntNullableWithAggregatesFilter<"vwUnit"> | number | null
    SOUnitprice?: DecimalNullableWithAggregatesFilter<"vwUnit"> | Decimal | DecimalJsLike | number | string | null
    SalesOrderID?: IntNullableWithAggregatesFilter<"vwUnit"> | number | null
    UnitProcessLastStatus?: StringWithAggregatesFilter<"vwUnit"> | string
    UnitProcessLastActualStartDate?: DateTimeNullableWithAggregatesFilter<"vwUnit"> | Date | string | null
    UnitProcessLastPlanStartDate?: DateTimeNullableWithAggregatesFilter<"vwUnit"> | Date | string | null
    IsHold?: BoolWithAggregatesFilter<"vwUnit"> | boolean
    LastModified?: DateTimeWithAggregatesFilter<"vwUnit"> | Date | string
  }

  export type vwProductGroupWhereInput = {
    AND?: vwProductGroupWhereInput | vwProductGroupWhereInput[]
    OR?: vwProductGroupWhereInput[]
    NOT?: vwProductGroupWhereInput | vwProductGroupWhereInput[]
    ProductGroupID?: IntFilter<"vwProductGroup"> | number
    ProductGroupName?: StringFilter<"vwProductGroup"> | string
    ProductGroupDescription?: StringFilter<"vwProductGroup"> | string
    ProductGroupCapacity?: IntNullableFilter<"vwProductGroup"> | number | null
    ProductGroupStartMonth?: DateTimeNullableFilter<"vwProductGroup"> | Date | string | null
    LastModified?: DateTimeFilter<"vwProductGroup"> | Date | string
    vwProduct?: VwProductListRelationFilter
  }

  export type vwProductGroupOrderByWithRelationInput = {
    ProductGroupID?: SortOrder
    ProductGroupName?: SortOrder
    ProductGroupDescription?: SortOrder
    ProductGroupCapacity?: SortOrderInput | SortOrder
    ProductGroupStartMonth?: SortOrderInput | SortOrder
    LastModified?: SortOrder
    vwProduct?: vwProductOrderByRelationAggregateInput
  }

  export type vwProductGroupWhereUniqueInput = Prisma.AtLeast<{
    ProductGroupID?: number
    AND?: vwProductGroupWhereInput | vwProductGroupWhereInput[]
    OR?: vwProductGroupWhereInput[]
    NOT?: vwProductGroupWhereInput | vwProductGroupWhereInput[]
    ProductGroupName?: StringFilter<"vwProductGroup"> | string
    ProductGroupDescription?: StringFilter<"vwProductGroup"> | string
    ProductGroupCapacity?: IntNullableFilter<"vwProductGroup"> | number | null
    ProductGroupStartMonth?: DateTimeNullableFilter<"vwProductGroup"> | Date | string | null
    LastModified?: DateTimeFilter<"vwProductGroup"> | Date | string
    vwProduct?: VwProductListRelationFilter
  }, "ProductGroupID">

  export type vwProductGroupOrderByWithAggregationInput = {
    ProductGroupID?: SortOrder
    ProductGroupName?: SortOrder
    ProductGroupDescription?: SortOrder
    ProductGroupCapacity?: SortOrderInput | SortOrder
    ProductGroupStartMonth?: SortOrderInput | SortOrder
    LastModified?: SortOrder
    _count?: vwProductGroupCountOrderByAggregateInput
    _avg?: vwProductGroupAvgOrderByAggregateInput
    _max?: vwProductGroupMaxOrderByAggregateInput
    _min?: vwProductGroupMinOrderByAggregateInput
    _sum?: vwProductGroupSumOrderByAggregateInput
  }

  export type vwProductGroupScalarWhereWithAggregatesInput = {
    AND?: vwProductGroupScalarWhereWithAggregatesInput | vwProductGroupScalarWhereWithAggregatesInput[]
    OR?: vwProductGroupScalarWhereWithAggregatesInput[]
    NOT?: vwProductGroupScalarWhereWithAggregatesInput | vwProductGroupScalarWhereWithAggregatesInput[]
    ProductGroupID?: IntWithAggregatesFilter<"vwProductGroup"> | number
    ProductGroupName?: StringWithAggregatesFilter<"vwProductGroup"> | string
    ProductGroupDescription?: StringWithAggregatesFilter<"vwProductGroup"> | string
    ProductGroupCapacity?: IntNullableWithAggregatesFilter<"vwProductGroup"> | number | null
    ProductGroupStartMonth?: DateTimeNullableWithAggregatesFilter<"vwProductGroup"> | Date | string | null
    LastModified?: DateTimeWithAggregatesFilter<"vwProductGroup"> | Date | string
  }

  export type ProcessCreateInput = {
    ID: number
    UnitID: number
    MasterProcessID: number
    Status: number
    PlanStartDate: Date | string
    PlanEndDate?: Date | string | null
    ActualStartDate?: Date | string | null
    ActualEndDate?: Date | string | null
    IsHold: boolean
    HoldDate?: Date | string | null
    Created: Date | string
    CreatedBy: string
    LastModified: Date | string
    LastModifiedBy: string
    ProcessAssign?: ProcessAssignCreateNestedManyWithoutProcessInput
  }

  export type ProcessUncheckedCreateInput = {
    ID: number
    UnitID: number
    MasterProcessID: number
    Status: number
    PlanStartDate: Date | string
    PlanEndDate?: Date | string | null
    ActualStartDate?: Date | string | null
    ActualEndDate?: Date | string | null
    IsHold: boolean
    HoldDate?: Date | string | null
    Created: Date | string
    CreatedBy: string
    LastModified: Date | string
    LastModifiedBy: string
    ProcessAssign?: ProcessAssignUncheckedCreateNestedManyWithoutProcessInput
  }

  export type ProcessUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    UnitID?: IntFieldUpdateOperationsInput | number
    MasterProcessID?: IntFieldUpdateOperationsInput | number
    Status?: IntFieldUpdateOperationsInput | number
    PlanStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    PlanEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ActualEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsHold?: BoolFieldUpdateOperationsInput | boolean
    HoldDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    LastModifiedBy?: StringFieldUpdateOperationsInput | string
    ProcessAssign?: ProcessAssignUpdateManyWithoutProcessNestedInput
  }

  export type ProcessUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    UnitID?: IntFieldUpdateOperationsInput | number
    MasterProcessID?: IntFieldUpdateOperationsInput | number
    Status?: IntFieldUpdateOperationsInput | number
    PlanStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    PlanEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ActualEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsHold?: BoolFieldUpdateOperationsInput | boolean
    HoldDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    LastModifiedBy?: StringFieldUpdateOperationsInput | string
    ProcessAssign?: ProcessAssignUncheckedUpdateManyWithoutProcessNestedInput
  }

  export type ProcessCreateManyInput = {
    ID: number
    UnitID: number
    MasterProcessID: number
    Status: number
    PlanStartDate: Date | string
    PlanEndDate?: Date | string | null
    ActualStartDate?: Date | string | null
    ActualEndDate?: Date | string | null
    IsHold: boolean
    HoldDate?: Date | string | null
    Created: Date | string
    CreatedBy: string
    LastModified: Date | string
    LastModifiedBy: string
  }

  export type ProcessUpdateManyMutationInput = {
    ID?: IntFieldUpdateOperationsInput | number
    UnitID?: IntFieldUpdateOperationsInput | number
    MasterProcessID?: IntFieldUpdateOperationsInput | number
    Status?: IntFieldUpdateOperationsInput | number
    PlanStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    PlanEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ActualEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsHold?: BoolFieldUpdateOperationsInput | boolean
    HoldDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    LastModifiedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProcessUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    UnitID?: IntFieldUpdateOperationsInput | number
    MasterProcessID?: IntFieldUpdateOperationsInput | number
    Status?: IntFieldUpdateOperationsInput | number
    PlanStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    PlanEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ActualEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsHold?: BoolFieldUpdateOperationsInput | boolean
    HoldDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    LastModifiedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProcessActivityCreateInput = {
    ID: number
    Status: number
    ReasonPauseID?: number | null
    ActivityDateTime: Date | string
    ActualHours?: Decimal | DecimalJsLike | number | string | null
    Created: Date | string
    CreatedBy: string
    LastModified: Date | string
    LastModifiedBy: string
    ProcessAssign: ProcessAssignCreateNestedOneWithoutProcessActivityInput
  }

  export type ProcessActivityUncheckedCreateInput = {
    ID: number
    ProcessAssignID: number
    Status: number
    ReasonPauseID?: number | null
    ActivityDateTime: Date | string
    ActualHours?: Decimal | DecimalJsLike | number | string | null
    Created: Date | string
    CreatedBy: string
    LastModified: Date | string
    LastModifiedBy: string
  }

  export type ProcessActivityUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Status?: IntFieldUpdateOperationsInput | number
    ReasonPauseID?: NullableIntFieldUpdateOperationsInput | number | null
    ActivityDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    ActualHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    LastModifiedBy?: StringFieldUpdateOperationsInput | string
    ProcessAssign?: ProcessAssignUpdateOneRequiredWithoutProcessActivityNestedInput
  }

  export type ProcessActivityUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    ProcessAssignID?: IntFieldUpdateOperationsInput | number
    Status?: IntFieldUpdateOperationsInput | number
    ReasonPauseID?: NullableIntFieldUpdateOperationsInput | number | null
    ActivityDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    ActualHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    LastModifiedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProcessActivityCreateManyInput = {
    ID: number
    ProcessAssignID: number
    Status: number
    ReasonPauseID?: number | null
    ActivityDateTime: Date | string
    ActualHours?: Decimal | DecimalJsLike | number | string | null
    Created: Date | string
    CreatedBy: string
    LastModified: Date | string
    LastModifiedBy: string
  }

  export type ProcessActivityUpdateManyMutationInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Status?: IntFieldUpdateOperationsInput | number
    ReasonPauseID?: NullableIntFieldUpdateOperationsInput | number | null
    ActivityDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    ActualHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    LastModifiedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProcessActivityUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    ProcessAssignID?: IntFieldUpdateOperationsInput | number
    Status?: IntFieldUpdateOperationsInput | number
    ReasonPauseID?: NullableIntFieldUpdateOperationsInput | number | null
    ActivityDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    ActualHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    LastModifiedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProcessAssignCreateInput = {
    ID: number
    UserID: string
    EmployeeNumber?: string | null
    Status: number
    Type?: number | null
    Created: Date | string
    CreatedBy: string
    LastModified: Date | string
    LastModifiedBy: string
    remark?: string | null
    ProcessActivity?: ProcessActivityCreateNestedManyWithoutProcessAssignInput
    Process: ProcessCreateNestedOneWithoutProcessAssignInput
  }

  export type ProcessAssignUncheckedCreateInput = {
    ID: number
    ProcessID: number
    UserID: string
    EmployeeNumber?: string | null
    Status: number
    Type?: number | null
    Created: Date | string
    CreatedBy: string
    LastModified: Date | string
    LastModifiedBy: string
    remark?: string | null
    ProcessActivity?: ProcessActivityUncheckedCreateNestedManyWithoutProcessAssignInput
  }

  export type ProcessAssignUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    UserID?: StringFieldUpdateOperationsInput | string
    EmployeeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: IntFieldUpdateOperationsInput | number
    Type?: NullableIntFieldUpdateOperationsInput | number | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    LastModifiedBy?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessActivity?: ProcessActivityUpdateManyWithoutProcessAssignNestedInput
    Process?: ProcessUpdateOneRequiredWithoutProcessAssignNestedInput
  }

  export type ProcessAssignUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    ProcessID?: IntFieldUpdateOperationsInput | number
    UserID?: StringFieldUpdateOperationsInput | string
    EmployeeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: IntFieldUpdateOperationsInput | number
    Type?: NullableIntFieldUpdateOperationsInput | number | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    LastModifiedBy?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessActivity?: ProcessActivityUncheckedUpdateManyWithoutProcessAssignNestedInput
  }

  export type ProcessAssignCreateManyInput = {
    ID: number
    ProcessID: number
    UserID: string
    EmployeeNumber?: string | null
    Status: number
    Type?: number | null
    Created: Date | string
    CreatedBy: string
    LastModified: Date | string
    LastModifiedBy: string
    remark?: string | null
  }

  export type ProcessAssignUpdateManyMutationInput = {
    ID?: IntFieldUpdateOperationsInput | number
    UserID?: StringFieldUpdateOperationsInput | string
    EmployeeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: IntFieldUpdateOperationsInput | number
    Type?: NullableIntFieldUpdateOperationsInput | number | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    LastModifiedBy?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessAssignUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    ProcessID?: IntFieldUpdateOperationsInput | number
    UserID?: StringFieldUpdateOperationsInput | string
    EmployeeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: IntFieldUpdateOperationsInput | number
    Type?: NullableIntFieldUpdateOperationsInput | number | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    LastModifiedBy?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type vwPRO_2CreateInput = {
    ID: number
    Number: string
    ProductID: number
    Quantity: number
    DueDate: Date | string
    Created: Date | string
    CreatedBy: string
    LastModified: Date | string
    LastModifiedBy: string
    vwUnit?: vwUnitCreateNestedManyWithoutVwPROInput
  }

  export type vwPRO_2UncheckedCreateInput = {
    ID: number
    Number: string
    ProductID: number
    Quantity: number
    DueDate: Date | string
    Created: Date | string
    CreatedBy: string
    LastModified: Date | string
    LastModifiedBy: string
    vwUnit?: vwUnitUncheckedCreateNestedManyWithoutVwPROInput
  }

  export type vwPRO_2UpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Number?: StringFieldUpdateOperationsInput | string
    ProductID?: IntFieldUpdateOperationsInput | number
    Quantity?: IntFieldUpdateOperationsInput | number
    DueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    LastModifiedBy?: StringFieldUpdateOperationsInput | string
    vwUnit?: vwUnitUpdateManyWithoutVwPRONestedInput
  }

  export type vwPRO_2UncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Number?: StringFieldUpdateOperationsInput | string
    ProductID?: IntFieldUpdateOperationsInput | number
    Quantity?: IntFieldUpdateOperationsInput | number
    DueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    LastModifiedBy?: StringFieldUpdateOperationsInput | string
    vwUnit?: vwUnitUncheckedUpdateManyWithoutVwPRONestedInput
  }

  export type vwPRO_2CreateManyInput = {
    ID: number
    Number: string
    ProductID: number
    Quantity: number
    DueDate: Date | string
    Created: Date | string
    CreatedBy: string
    LastModified: Date | string
    LastModifiedBy: string
  }

  export type vwPRO_2UpdateManyMutationInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Number?: StringFieldUpdateOperationsInput | string
    ProductID?: IntFieldUpdateOperationsInput | number
    Quantity?: IntFieldUpdateOperationsInput | number
    DueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    LastModifiedBy?: StringFieldUpdateOperationsInput | string
  }

  export type vwPRO_2UncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Number?: StringFieldUpdateOperationsInput | string
    ProductID?: IntFieldUpdateOperationsInput | number
    Quantity?: IntFieldUpdateOperationsInput | number
    DueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    LastModifiedBy?: StringFieldUpdateOperationsInput | string
  }

  export type vwProcessCreateInput = {
    ProcessID: number
    ProcessStatus?: string | null
    ProcessPlanStartDate?: Date | string | null
    ProcessPlanEndDate?: Date | string | null
    ProcessPlanDuration?: number | null
    ProcessActualStartDate?: Date | string | null
    ProcessActualEndDate?: Date | string | null
    ProcessActualDuration?: number | null
    MasterProcessName?: string | null
    StandardMH?: Decimal | DecimalJsLike | number | string | null
    ProcessGroupName?: string | null
    ProcessDelayInDay?: number | null
    ProcessOrder?: number | null
    LastModified: Date | string
    MasterProcessID: number
    vwUnit: vwUnitCreateNestedOneWithoutVwProcessInput
    vwProcessAssign?: vwProcessAssign2AllCreateNestedManyWithoutVwProcessInput
  }

  export type vwProcessUncheckedCreateInput = {
    ProcessID: number
    UnitID: number
    ProcessStatus?: string | null
    ProcessPlanStartDate?: Date | string | null
    ProcessPlanEndDate?: Date | string | null
    ProcessPlanDuration?: number | null
    ProcessActualStartDate?: Date | string | null
    ProcessActualEndDate?: Date | string | null
    ProcessActualDuration?: number | null
    MasterProcessName?: string | null
    StandardMH?: Decimal | DecimalJsLike | number | string | null
    ProcessGroupName?: string | null
    ProcessDelayInDay?: number | null
    ProcessOrder?: number | null
    LastModified: Date | string
    MasterProcessID: number
    vwProcessAssign?: vwProcessAssign2AllUncheckedCreateNestedManyWithoutVwProcessInput
  }

  export type vwProcessUpdateInput = {
    ProcessID?: IntFieldUpdateOperationsInput | number
    ProcessStatus?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessPlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessPlanEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessPlanDuration?: NullableIntFieldUpdateOperationsInput | number | null
    ProcessActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessActualEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessActualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    MasterProcessName?: NullableStringFieldUpdateOperationsInput | string | null
    StandardMH?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ProcessGroupName?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessDelayInDay?: NullableIntFieldUpdateOperationsInput | number | null
    ProcessOrder?: NullableIntFieldUpdateOperationsInput | number | null
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    MasterProcessID?: IntFieldUpdateOperationsInput | number
    vwUnit?: vwUnitUpdateOneRequiredWithoutVwProcessNestedInput
    vwProcessAssign?: vwProcessAssign2AllUpdateManyWithoutVwProcessNestedInput
  }

  export type vwProcessUncheckedUpdateInput = {
    ProcessID?: IntFieldUpdateOperationsInput | number
    UnitID?: IntFieldUpdateOperationsInput | number
    ProcessStatus?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessPlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessPlanEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessPlanDuration?: NullableIntFieldUpdateOperationsInput | number | null
    ProcessActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessActualEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessActualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    MasterProcessName?: NullableStringFieldUpdateOperationsInput | string | null
    StandardMH?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ProcessGroupName?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessDelayInDay?: NullableIntFieldUpdateOperationsInput | number | null
    ProcessOrder?: NullableIntFieldUpdateOperationsInput | number | null
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    MasterProcessID?: IntFieldUpdateOperationsInput | number
    vwProcessAssign?: vwProcessAssign2AllUncheckedUpdateManyWithoutVwProcessNestedInput
  }

  export type vwProcessCreateManyInput = {
    ProcessID: number
    UnitID: number
    ProcessStatus?: string | null
    ProcessPlanStartDate?: Date | string | null
    ProcessPlanEndDate?: Date | string | null
    ProcessPlanDuration?: number | null
    ProcessActualStartDate?: Date | string | null
    ProcessActualEndDate?: Date | string | null
    ProcessActualDuration?: number | null
    MasterProcessName?: string | null
    StandardMH?: Decimal | DecimalJsLike | number | string | null
    ProcessGroupName?: string | null
    ProcessDelayInDay?: number | null
    ProcessOrder?: number | null
    LastModified: Date | string
    MasterProcessID: number
  }

  export type vwProcessUpdateManyMutationInput = {
    ProcessID?: IntFieldUpdateOperationsInput | number
    ProcessStatus?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessPlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessPlanEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessPlanDuration?: NullableIntFieldUpdateOperationsInput | number | null
    ProcessActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessActualEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessActualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    MasterProcessName?: NullableStringFieldUpdateOperationsInput | string | null
    StandardMH?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ProcessGroupName?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessDelayInDay?: NullableIntFieldUpdateOperationsInput | number | null
    ProcessOrder?: NullableIntFieldUpdateOperationsInput | number | null
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    MasterProcessID?: IntFieldUpdateOperationsInput | number
  }

  export type vwProcessUncheckedUpdateManyInput = {
    ProcessID?: IntFieldUpdateOperationsInput | number
    UnitID?: IntFieldUpdateOperationsInput | number
    ProcessStatus?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessPlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessPlanEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessPlanDuration?: NullableIntFieldUpdateOperationsInput | number | null
    ProcessActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessActualEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessActualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    MasterProcessName?: NullableStringFieldUpdateOperationsInput | string | null
    StandardMH?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ProcessGroupName?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessDelayInDay?: NullableIntFieldUpdateOperationsInput | number | null
    ProcessOrder?: NullableIntFieldUpdateOperationsInput | number | null
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    MasterProcessID?: IntFieldUpdateOperationsInput | number
  }

  export type vwProcessActivityCreateInput = {
    atasan: string
    EmployeeNumber?: string | null
    ActivityDateTime: Date | string
    ProcessActivityID: number
    ProcessActivityName: string
    ProcessActivityStatus?: string | null
    ProcessActivityReasonPause: string
    ActualHoursNonProductive?: number | null
    ProcessActivityActualHours?: Decimal | DecimalJsLike | number | string | null
    ProcessActivityDateTime: Date | string
    LastModifiedBy: string
    LastModified: Date | string
    vwProcessAssign: vwProcessAssign2AllCreateNestedOneWithoutVwProcessActivityInput
  }

  export type vwProcessActivityUncheckedCreateInput = {
    atasan: string
    EmployeeNumber?: string | null
    ActivityDateTime: Date | string
    ProcessActivityID: number
    ProcessAssignID: number
    ProcessActivityName: string
    ProcessActivityStatus?: string | null
    ProcessActivityReasonPause: string
    ActualHoursNonProductive?: number | null
    ProcessActivityActualHours?: Decimal | DecimalJsLike | number | string | null
    ProcessActivityDateTime: Date | string
    LastModifiedBy: string
    LastModified: Date | string
  }

  export type vwProcessActivityUpdateInput = {
    atasan?: StringFieldUpdateOperationsInput | string
    EmployeeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ActivityDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    ProcessActivityID?: IntFieldUpdateOperationsInput | number
    ProcessActivityName?: StringFieldUpdateOperationsInput | string
    ProcessActivityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessActivityReasonPause?: StringFieldUpdateOperationsInput | string
    ActualHoursNonProductive?: NullableIntFieldUpdateOperationsInput | number | null
    ProcessActivityActualHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ProcessActivityDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    LastModifiedBy?: StringFieldUpdateOperationsInput | string
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    vwProcessAssign?: vwProcessAssign2AllUpdateOneRequiredWithoutVwProcessActivityNestedInput
  }

  export type vwProcessActivityUncheckedUpdateInput = {
    atasan?: StringFieldUpdateOperationsInput | string
    EmployeeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ActivityDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    ProcessActivityID?: IntFieldUpdateOperationsInput | number
    ProcessAssignID?: IntFieldUpdateOperationsInput | number
    ProcessActivityName?: StringFieldUpdateOperationsInput | string
    ProcessActivityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessActivityReasonPause?: StringFieldUpdateOperationsInput | string
    ActualHoursNonProductive?: NullableIntFieldUpdateOperationsInput | number | null
    ProcessActivityActualHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ProcessActivityDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    LastModifiedBy?: StringFieldUpdateOperationsInput | string
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vwProcessActivityCreateManyInput = {
    atasan: string
    EmployeeNumber?: string | null
    ActivityDateTime: Date | string
    ProcessActivityID: number
    ProcessAssignID: number
    ProcessActivityName: string
    ProcessActivityStatus?: string | null
    ProcessActivityReasonPause: string
    ActualHoursNonProductive?: number | null
    ProcessActivityActualHours?: Decimal | DecimalJsLike | number | string | null
    ProcessActivityDateTime: Date | string
    LastModifiedBy: string
    LastModified: Date | string
  }

  export type vwProcessActivityUpdateManyMutationInput = {
    atasan?: StringFieldUpdateOperationsInput | string
    EmployeeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ActivityDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    ProcessActivityID?: IntFieldUpdateOperationsInput | number
    ProcessActivityName?: StringFieldUpdateOperationsInput | string
    ProcessActivityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessActivityReasonPause?: StringFieldUpdateOperationsInput | string
    ActualHoursNonProductive?: NullableIntFieldUpdateOperationsInput | number | null
    ProcessActivityActualHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ProcessActivityDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    LastModifiedBy?: StringFieldUpdateOperationsInput | string
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vwProcessActivityUncheckedUpdateManyInput = {
    atasan?: StringFieldUpdateOperationsInput | string
    EmployeeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ActivityDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    ProcessActivityID?: IntFieldUpdateOperationsInput | number
    ProcessAssignID?: IntFieldUpdateOperationsInput | number
    ProcessActivityName?: StringFieldUpdateOperationsInput | string
    ProcessActivityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessActivityReasonPause?: StringFieldUpdateOperationsInput | string
    ActualHoursNonProductive?: NullableIntFieldUpdateOperationsInput | number | null
    ProcessActivityActualHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ProcessActivityDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    LastModifiedBy?: StringFieldUpdateOperationsInput | string
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vwProcessAssign2AllCreateInput = {
    ID: number
    UnitID?: number | null
    LeaderName: string
    OperatorName?: string | null
    NRP?: string | null
    TglAssign: Date | string
    ProcessassignStatus?: string | null
    Startassign?: string | null
    Stopassign?: string | null
    ProcessAssignType?: string | null
    LastModified: Date | string
    lastStart?: Date | string | null
    lastStop?: Date | string | null
    remark?: string | null
    IsActive?: boolean | null
    vwProcess: vwProcessCreateNestedOneWithoutVwProcessAssignInput
    vwProcessActivity?: vwProcessActivityCreateNestedManyWithoutVwProcessAssignInput
  }

  export type vwProcessAssign2AllUncheckedCreateInput = {
    ID: number
    ProcessID: number
    UnitID?: number | null
    LeaderName: string
    OperatorName?: string | null
    NRP?: string | null
    TglAssign: Date | string
    ProcessassignStatus?: string | null
    Startassign?: string | null
    Stopassign?: string | null
    ProcessAssignType?: string | null
    LastModified: Date | string
    lastStart?: Date | string | null
    lastStop?: Date | string | null
    remark?: string | null
    IsActive?: boolean | null
    vwProcessActivity?: vwProcessActivityUncheckedCreateNestedManyWithoutVwProcessAssignInput
  }

  export type vwProcessAssign2AllUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    UnitID?: NullableIntFieldUpdateOperationsInput | number | null
    LeaderName?: StringFieldUpdateOperationsInput | string
    OperatorName?: NullableStringFieldUpdateOperationsInput | string | null
    NRP?: NullableStringFieldUpdateOperationsInput | string | null
    TglAssign?: DateTimeFieldUpdateOperationsInput | Date | string
    ProcessassignStatus?: NullableStringFieldUpdateOperationsInput | string | null
    Startassign?: NullableStringFieldUpdateOperationsInput | string | null
    Stopassign?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessAssignType?: NullableStringFieldUpdateOperationsInput | string | null
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    lastStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastStop?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    IsActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vwProcess?: vwProcessUpdateOneRequiredWithoutVwProcessAssignNestedInput
    vwProcessActivity?: vwProcessActivityUpdateManyWithoutVwProcessAssignNestedInput
  }

  export type vwProcessAssign2AllUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    ProcessID?: IntFieldUpdateOperationsInput | number
    UnitID?: NullableIntFieldUpdateOperationsInput | number | null
    LeaderName?: StringFieldUpdateOperationsInput | string
    OperatorName?: NullableStringFieldUpdateOperationsInput | string | null
    NRP?: NullableStringFieldUpdateOperationsInput | string | null
    TglAssign?: DateTimeFieldUpdateOperationsInput | Date | string
    ProcessassignStatus?: NullableStringFieldUpdateOperationsInput | string | null
    Startassign?: NullableStringFieldUpdateOperationsInput | string | null
    Stopassign?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessAssignType?: NullableStringFieldUpdateOperationsInput | string | null
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    lastStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastStop?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    IsActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vwProcessActivity?: vwProcessActivityUncheckedUpdateManyWithoutVwProcessAssignNestedInput
  }

  export type vwProcessAssign2AllCreateManyInput = {
    ID: number
    ProcessID: number
    UnitID?: number | null
    LeaderName: string
    OperatorName?: string | null
    NRP?: string | null
    TglAssign: Date | string
    ProcessassignStatus?: string | null
    Startassign?: string | null
    Stopassign?: string | null
    ProcessAssignType?: string | null
    LastModified: Date | string
    lastStart?: Date | string | null
    lastStop?: Date | string | null
    remark?: string | null
    IsActive?: boolean | null
  }

  export type vwProcessAssign2AllUpdateManyMutationInput = {
    ID?: IntFieldUpdateOperationsInput | number
    UnitID?: NullableIntFieldUpdateOperationsInput | number | null
    LeaderName?: StringFieldUpdateOperationsInput | string
    OperatorName?: NullableStringFieldUpdateOperationsInput | string | null
    NRP?: NullableStringFieldUpdateOperationsInput | string | null
    TglAssign?: DateTimeFieldUpdateOperationsInput | Date | string
    ProcessassignStatus?: NullableStringFieldUpdateOperationsInput | string | null
    Startassign?: NullableStringFieldUpdateOperationsInput | string | null
    Stopassign?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessAssignType?: NullableStringFieldUpdateOperationsInput | string | null
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    lastStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastStop?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    IsActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type vwProcessAssign2AllUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    ProcessID?: IntFieldUpdateOperationsInput | number
    UnitID?: NullableIntFieldUpdateOperationsInput | number | null
    LeaderName?: StringFieldUpdateOperationsInput | string
    OperatorName?: NullableStringFieldUpdateOperationsInput | string | null
    NRP?: NullableStringFieldUpdateOperationsInput | string | null
    TglAssign?: DateTimeFieldUpdateOperationsInput | Date | string
    ProcessassignStatus?: NullableStringFieldUpdateOperationsInput | string | null
    Startassign?: NullableStringFieldUpdateOperationsInput | string | null
    Stopassign?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessAssignType?: NullableStringFieldUpdateOperationsInput | string | null
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    lastStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastStop?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    IsActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type vwProcessGroupCreateInput = {
    UnitID: number
    ProcessGroupNameSort?: number | null
    ProcessGroupName?: string | null
    ProcessGroupPlanStartDate?: Date | string | null
    ProcessGroupPlanEndDate?: Date | string | null
    ProcessGroupPlanDuration?: number | null
    ProcessGroupActualStartDate?: Date | string | null
    ProcessGroupActualEndDate?: Date | string | null
    ProcessGroupActualDuration?: number | null
    ProcessGroupDelayInDay?: number | null
    LastModified?: Date | string | null
  }

  export type vwProcessGroupUncheckedCreateInput = {
    UnitID: number
    ProcessGroupNameSort?: number | null
    ProcessGroupName?: string | null
    ProcessGroupPlanStartDate?: Date | string | null
    ProcessGroupPlanEndDate?: Date | string | null
    ProcessGroupPlanDuration?: number | null
    ProcessGroupActualStartDate?: Date | string | null
    ProcessGroupActualEndDate?: Date | string | null
    ProcessGroupActualDuration?: number | null
    ProcessGroupDelayInDay?: number | null
    LastModified?: Date | string | null
  }

  export type vwProcessGroupUpdateInput = {
    UnitID?: IntFieldUpdateOperationsInput | number
    ProcessGroupNameSort?: NullableIntFieldUpdateOperationsInput | number | null
    ProcessGroupName?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessGroupPlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessGroupPlanEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessGroupPlanDuration?: NullableIntFieldUpdateOperationsInput | number | null
    ProcessGroupActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessGroupActualEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessGroupActualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    ProcessGroupDelayInDay?: NullableIntFieldUpdateOperationsInput | number | null
    LastModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type vwProcessGroupUncheckedUpdateInput = {
    UnitID?: IntFieldUpdateOperationsInput | number
    ProcessGroupNameSort?: NullableIntFieldUpdateOperationsInput | number | null
    ProcessGroupName?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessGroupPlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessGroupPlanEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessGroupPlanDuration?: NullableIntFieldUpdateOperationsInput | number | null
    ProcessGroupActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessGroupActualEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessGroupActualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    ProcessGroupDelayInDay?: NullableIntFieldUpdateOperationsInput | number | null
    LastModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type vwProcessGroupCreateManyInput = {
    UnitID: number
    ProcessGroupNameSort?: number | null
    ProcessGroupName?: string | null
    ProcessGroupPlanStartDate?: Date | string | null
    ProcessGroupPlanEndDate?: Date | string | null
    ProcessGroupPlanDuration?: number | null
    ProcessGroupActualStartDate?: Date | string | null
    ProcessGroupActualEndDate?: Date | string | null
    ProcessGroupActualDuration?: number | null
    ProcessGroupDelayInDay?: number | null
    LastModified?: Date | string | null
  }

  export type vwProcessGroupUpdateManyMutationInput = {
    UnitID?: IntFieldUpdateOperationsInput | number
    ProcessGroupNameSort?: NullableIntFieldUpdateOperationsInput | number | null
    ProcessGroupName?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessGroupPlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessGroupPlanEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessGroupPlanDuration?: NullableIntFieldUpdateOperationsInput | number | null
    ProcessGroupActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessGroupActualEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessGroupActualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    ProcessGroupDelayInDay?: NullableIntFieldUpdateOperationsInput | number | null
    LastModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type vwProcessGroupUncheckedUpdateManyInput = {
    UnitID?: IntFieldUpdateOperationsInput | number
    ProcessGroupNameSort?: NullableIntFieldUpdateOperationsInput | number | null
    ProcessGroupName?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessGroupPlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessGroupPlanEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessGroupPlanDuration?: NullableIntFieldUpdateOperationsInput | number | null
    ProcessGroupActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessGroupActualEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessGroupActualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    ProcessGroupDelayInDay?: NullableIntFieldUpdateOperationsInput | number | null
    LastModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type vwProductCreateInput = {
    ProductID: number
    ProductName: string
    ProductPN: string
    ProductTotalDay?: number | null
    ProductSubGroupName: string
    ProductSubGroupSAPCode: string
    ProductStandardHours?: Decimal | DecimalJsLike | number | string | null
    LastModified: Date | string
    vwProductGroup: vwProductGroupCreateNestedOneWithoutVwProductInput
    vwUnit?: vwUnitCreateNestedManyWithoutVwProductInput
  }

  export type vwProductUncheckedCreateInput = {
    ProductID: number
    ProductGroupID: number
    ProductName: string
    ProductPN: string
    ProductTotalDay?: number | null
    ProductSubGroupName: string
    ProductSubGroupSAPCode: string
    ProductStandardHours?: Decimal | DecimalJsLike | number | string | null
    LastModified: Date | string
    vwUnit?: vwUnitUncheckedCreateNestedManyWithoutVwProductInput
  }

  export type vwProductUpdateInput = {
    ProductID?: IntFieldUpdateOperationsInput | number
    ProductName?: StringFieldUpdateOperationsInput | string
    ProductPN?: StringFieldUpdateOperationsInput | string
    ProductTotalDay?: NullableIntFieldUpdateOperationsInput | number | null
    ProductSubGroupName?: StringFieldUpdateOperationsInput | string
    ProductSubGroupSAPCode?: StringFieldUpdateOperationsInput | string
    ProductStandardHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    vwProductGroup?: vwProductGroupUpdateOneRequiredWithoutVwProductNestedInput
    vwUnit?: vwUnitUpdateManyWithoutVwProductNestedInput
  }

  export type vwProductUncheckedUpdateInput = {
    ProductID?: IntFieldUpdateOperationsInput | number
    ProductGroupID?: IntFieldUpdateOperationsInput | number
    ProductName?: StringFieldUpdateOperationsInput | string
    ProductPN?: StringFieldUpdateOperationsInput | string
    ProductTotalDay?: NullableIntFieldUpdateOperationsInput | number | null
    ProductSubGroupName?: StringFieldUpdateOperationsInput | string
    ProductSubGroupSAPCode?: StringFieldUpdateOperationsInput | string
    ProductStandardHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    vwUnit?: vwUnitUncheckedUpdateManyWithoutVwProductNestedInput
  }

  export type vwProductCreateManyInput = {
    ProductID: number
    ProductGroupID: number
    ProductName: string
    ProductPN: string
    ProductTotalDay?: number | null
    ProductSubGroupName: string
    ProductSubGroupSAPCode: string
    ProductStandardHours?: Decimal | DecimalJsLike | number | string | null
    LastModified: Date | string
  }

  export type vwProductUpdateManyMutationInput = {
    ProductID?: IntFieldUpdateOperationsInput | number
    ProductName?: StringFieldUpdateOperationsInput | string
    ProductPN?: StringFieldUpdateOperationsInput | string
    ProductTotalDay?: NullableIntFieldUpdateOperationsInput | number | null
    ProductSubGroupName?: StringFieldUpdateOperationsInput | string
    ProductSubGroupSAPCode?: StringFieldUpdateOperationsInput | string
    ProductStandardHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vwProductUncheckedUpdateManyInput = {
    ProductID?: IntFieldUpdateOperationsInput | number
    ProductGroupID?: IntFieldUpdateOperationsInput | number
    ProductName?: StringFieldUpdateOperationsInput | string
    ProductPN?: StringFieldUpdateOperationsInput | string
    ProductTotalDay?: NullableIntFieldUpdateOperationsInput | number | null
    ProductSubGroupName?: StringFieldUpdateOperationsInput | string
    ProductSubGroupSAPCode?: StringFieldUpdateOperationsInput | string
    ProductStandardHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vwUnitCreateInput = {
    UnitID: number
    UnitSerialNumber: string
    UnitChasisNumber?: string | null
    UnitDueDate: Date | string
    UnitPlanStartDate?: Date | string | null
    UnitPlanEndDate?: Date | string | null
    UnitPlanDuration?: number | null
    UnitActualStartDate?: Date | string | null
    UnitActualEndDate?: Date | string | null
    UnitActualDuration?: number | null
    Unit_Status: string
    UnitMPSDueDate?: Date | string | null
    UnitActualDeliveryDate?: Date | string | null
    UnitActualHoursCompleted?: Decimal | DecimalJsLike | number | string | null
    UnitDelayInDay?: number | null
    SOUnitprice?: Decimal | DecimalJsLike | number | string | null
    SalesOrderID?: number | null
    UnitProcessLastStatus: string
    UnitProcessLastActualStartDate?: Date | string | null
    UnitProcessLastPlanStartDate?: Date | string | null
    IsHold: boolean
    LastModified: Date | string
    vwPRO: vwPRO_2CreateNestedOneWithoutVwUnitInput
    vwProduct: vwProductCreateNestedOneWithoutVwUnitInput
    vwProcess?: vwProcessCreateNestedManyWithoutVwUnitInput
  }

  export type vwUnitUncheckedCreateInput = {
    UnitID: number
    PROID: number
    ProductID: number
    UnitSerialNumber: string
    UnitChasisNumber?: string | null
    UnitDueDate: Date | string
    UnitPlanStartDate?: Date | string | null
    UnitPlanEndDate?: Date | string | null
    UnitPlanDuration?: number | null
    UnitActualStartDate?: Date | string | null
    UnitActualEndDate?: Date | string | null
    UnitActualDuration?: number | null
    Unit_Status: string
    UnitMPSDueDate?: Date | string | null
    UnitActualDeliveryDate?: Date | string | null
    UnitActualHoursCompleted?: Decimal | DecimalJsLike | number | string | null
    UnitDelayInDay?: number | null
    SOUnitprice?: Decimal | DecimalJsLike | number | string | null
    SalesOrderID?: number | null
    UnitProcessLastStatus: string
    UnitProcessLastActualStartDate?: Date | string | null
    UnitProcessLastPlanStartDate?: Date | string | null
    IsHold: boolean
    LastModified: Date | string
    vwProcess?: vwProcessUncheckedCreateNestedManyWithoutVwUnitInput
  }

  export type vwUnitUpdateInput = {
    UnitID?: IntFieldUpdateOperationsInput | number
    UnitSerialNumber?: StringFieldUpdateOperationsInput | string
    UnitChasisNumber?: NullableStringFieldUpdateOperationsInput | string | null
    UnitDueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UnitPlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitPlanEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitPlanDuration?: NullableIntFieldUpdateOperationsInput | number | null
    UnitActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    Unit_Status?: StringFieldUpdateOperationsInput | string
    UnitMPSDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualDeliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualHoursCompleted?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    UnitDelayInDay?: NullableIntFieldUpdateOperationsInput | number | null
    SOUnitprice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    SalesOrderID?: NullableIntFieldUpdateOperationsInput | number | null
    UnitProcessLastStatus?: StringFieldUpdateOperationsInput | string
    UnitProcessLastActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitProcessLastPlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsHold?: BoolFieldUpdateOperationsInput | boolean
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    vwPRO?: vwPRO_2UpdateOneRequiredWithoutVwUnitNestedInput
    vwProduct?: vwProductUpdateOneRequiredWithoutVwUnitNestedInput
    vwProcess?: vwProcessUpdateManyWithoutVwUnitNestedInput
  }

  export type vwUnitUncheckedUpdateInput = {
    UnitID?: IntFieldUpdateOperationsInput | number
    PROID?: IntFieldUpdateOperationsInput | number
    ProductID?: IntFieldUpdateOperationsInput | number
    UnitSerialNumber?: StringFieldUpdateOperationsInput | string
    UnitChasisNumber?: NullableStringFieldUpdateOperationsInput | string | null
    UnitDueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UnitPlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitPlanEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitPlanDuration?: NullableIntFieldUpdateOperationsInput | number | null
    UnitActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    Unit_Status?: StringFieldUpdateOperationsInput | string
    UnitMPSDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualDeliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualHoursCompleted?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    UnitDelayInDay?: NullableIntFieldUpdateOperationsInput | number | null
    SOUnitprice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    SalesOrderID?: NullableIntFieldUpdateOperationsInput | number | null
    UnitProcessLastStatus?: StringFieldUpdateOperationsInput | string
    UnitProcessLastActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitProcessLastPlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsHold?: BoolFieldUpdateOperationsInput | boolean
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    vwProcess?: vwProcessUncheckedUpdateManyWithoutVwUnitNestedInput
  }

  export type vwUnitCreateManyInput = {
    UnitID: number
    PROID: number
    ProductID: number
    UnitSerialNumber: string
    UnitChasisNumber?: string | null
    UnitDueDate: Date | string
    UnitPlanStartDate?: Date | string | null
    UnitPlanEndDate?: Date | string | null
    UnitPlanDuration?: number | null
    UnitActualStartDate?: Date | string | null
    UnitActualEndDate?: Date | string | null
    UnitActualDuration?: number | null
    Unit_Status: string
    UnitMPSDueDate?: Date | string | null
    UnitActualDeliveryDate?: Date | string | null
    UnitActualHoursCompleted?: Decimal | DecimalJsLike | number | string | null
    UnitDelayInDay?: number | null
    SOUnitprice?: Decimal | DecimalJsLike | number | string | null
    SalesOrderID?: number | null
    UnitProcessLastStatus: string
    UnitProcessLastActualStartDate?: Date | string | null
    UnitProcessLastPlanStartDate?: Date | string | null
    IsHold: boolean
    LastModified: Date | string
  }

  export type vwUnitUpdateManyMutationInput = {
    UnitID?: IntFieldUpdateOperationsInput | number
    UnitSerialNumber?: StringFieldUpdateOperationsInput | string
    UnitChasisNumber?: NullableStringFieldUpdateOperationsInput | string | null
    UnitDueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UnitPlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitPlanEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitPlanDuration?: NullableIntFieldUpdateOperationsInput | number | null
    UnitActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    Unit_Status?: StringFieldUpdateOperationsInput | string
    UnitMPSDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualDeliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualHoursCompleted?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    UnitDelayInDay?: NullableIntFieldUpdateOperationsInput | number | null
    SOUnitprice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    SalesOrderID?: NullableIntFieldUpdateOperationsInput | number | null
    UnitProcessLastStatus?: StringFieldUpdateOperationsInput | string
    UnitProcessLastActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitProcessLastPlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsHold?: BoolFieldUpdateOperationsInput | boolean
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vwUnitUncheckedUpdateManyInput = {
    UnitID?: IntFieldUpdateOperationsInput | number
    PROID?: IntFieldUpdateOperationsInput | number
    ProductID?: IntFieldUpdateOperationsInput | number
    UnitSerialNumber?: StringFieldUpdateOperationsInput | string
    UnitChasisNumber?: NullableStringFieldUpdateOperationsInput | string | null
    UnitDueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UnitPlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitPlanEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitPlanDuration?: NullableIntFieldUpdateOperationsInput | number | null
    UnitActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    Unit_Status?: StringFieldUpdateOperationsInput | string
    UnitMPSDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualDeliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualHoursCompleted?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    UnitDelayInDay?: NullableIntFieldUpdateOperationsInput | number | null
    SOUnitprice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    SalesOrderID?: NullableIntFieldUpdateOperationsInput | number | null
    UnitProcessLastStatus?: StringFieldUpdateOperationsInput | string
    UnitProcessLastActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitProcessLastPlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsHold?: BoolFieldUpdateOperationsInput | boolean
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vwProductGroupCreateInput = {
    ProductGroupID: number
    ProductGroupName: string
    ProductGroupDescription: string
    ProductGroupCapacity?: number | null
    ProductGroupStartMonth?: Date | string | null
    LastModified: Date | string
    vwProduct?: vwProductCreateNestedManyWithoutVwProductGroupInput
  }

  export type vwProductGroupUncheckedCreateInput = {
    ProductGroupID: number
    ProductGroupName: string
    ProductGroupDescription: string
    ProductGroupCapacity?: number | null
    ProductGroupStartMonth?: Date | string | null
    LastModified: Date | string
    vwProduct?: vwProductUncheckedCreateNestedManyWithoutVwProductGroupInput
  }

  export type vwProductGroupUpdateInput = {
    ProductGroupID?: IntFieldUpdateOperationsInput | number
    ProductGroupName?: StringFieldUpdateOperationsInput | string
    ProductGroupDescription?: StringFieldUpdateOperationsInput | string
    ProductGroupCapacity?: NullableIntFieldUpdateOperationsInput | number | null
    ProductGroupStartMonth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    vwProduct?: vwProductUpdateManyWithoutVwProductGroupNestedInput
  }

  export type vwProductGroupUncheckedUpdateInput = {
    ProductGroupID?: IntFieldUpdateOperationsInput | number
    ProductGroupName?: StringFieldUpdateOperationsInput | string
    ProductGroupDescription?: StringFieldUpdateOperationsInput | string
    ProductGroupCapacity?: NullableIntFieldUpdateOperationsInput | number | null
    ProductGroupStartMonth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    vwProduct?: vwProductUncheckedUpdateManyWithoutVwProductGroupNestedInput
  }

  export type vwProductGroupCreateManyInput = {
    ProductGroupID: number
    ProductGroupName: string
    ProductGroupDescription: string
    ProductGroupCapacity?: number | null
    ProductGroupStartMonth?: Date | string | null
    LastModified: Date | string
  }

  export type vwProductGroupUpdateManyMutationInput = {
    ProductGroupID?: IntFieldUpdateOperationsInput | number
    ProductGroupName?: StringFieldUpdateOperationsInput | string
    ProductGroupDescription?: StringFieldUpdateOperationsInput | string
    ProductGroupCapacity?: NullableIntFieldUpdateOperationsInput | number | null
    ProductGroupStartMonth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vwProductGroupUncheckedUpdateManyInput = {
    ProductGroupID?: IntFieldUpdateOperationsInput | number
    ProductGroupName?: StringFieldUpdateOperationsInput | string
    ProductGroupDescription?: StringFieldUpdateOperationsInput | string
    ProductGroupCapacity?: NullableIntFieldUpdateOperationsInput | number | null
    ProductGroupStartMonth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ProcessAssignListRelationFilter = {
    every?: ProcessAssignWhereInput
    some?: ProcessAssignWhereInput
    none?: ProcessAssignWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProcessAssignOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProcessCountOrderByAggregateInput = {
    ID?: SortOrder
    UnitID?: SortOrder
    MasterProcessID?: SortOrder
    Status?: SortOrder
    PlanStartDate?: SortOrder
    PlanEndDate?: SortOrder
    ActualStartDate?: SortOrder
    ActualEndDate?: SortOrder
    IsHold?: SortOrder
    HoldDate?: SortOrder
    Created?: SortOrder
    CreatedBy?: SortOrder
    LastModified?: SortOrder
    LastModifiedBy?: SortOrder
  }

  export type ProcessAvgOrderByAggregateInput = {
    ID?: SortOrder
    UnitID?: SortOrder
    MasterProcessID?: SortOrder
    Status?: SortOrder
  }

  export type ProcessMaxOrderByAggregateInput = {
    ID?: SortOrder
    UnitID?: SortOrder
    MasterProcessID?: SortOrder
    Status?: SortOrder
    PlanStartDate?: SortOrder
    PlanEndDate?: SortOrder
    ActualStartDate?: SortOrder
    ActualEndDate?: SortOrder
    IsHold?: SortOrder
    HoldDate?: SortOrder
    Created?: SortOrder
    CreatedBy?: SortOrder
    LastModified?: SortOrder
    LastModifiedBy?: SortOrder
  }

  export type ProcessMinOrderByAggregateInput = {
    ID?: SortOrder
    UnitID?: SortOrder
    MasterProcessID?: SortOrder
    Status?: SortOrder
    PlanStartDate?: SortOrder
    PlanEndDate?: SortOrder
    ActualStartDate?: SortOrder
    ActualEndDate?: SortOrder
    IsHold?: SortOrder
    HoldDate?: SortOrder
    Created?: SortOrder
    CreatedBy?: SortOrder
    LastModified?: SortOrder
    LastModifiedBy?: SortOrder
  }

  export type ProcessSumOrderByAggregateInput = {
    ID?: SortOrder
    UnitID?: SortOrder
    MasterProcessID?: SortOrder
    Status?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type ProcessAssignScalarRelationFilter = {
    is?: ProcessAssignWhereInput
    isNot?: ProcessAssignWhereInput
  }

  export type ProcessActivityCountOrderByAggregateInput = {
    ID?: SortOrder
    ProcessAssignID?: SortOrder
    Status?: SortOrder
    ReasonPauseID?: SortOrder
    ActivityDateTime?: SortOrder
    ActualHours?: SortOrder
    Created?: SortOrder
    CreatedBy?: SortOrder
    LastModified?: SortOrder
    LastModifiedBy?: SortOrder
  }

  export type ProcessActivityAvgOrderByAggregateInput = {
    ID?: SortOrder
    ProcessAssignID?: SortOrder
    Status?: SortOrder
    ReasonPauseID?: SortOrder
    ActualHours?: SortOrder
  }

  export type ProcessActivityMaxOrderByAggregateInput = {
    ID?: SortOrder
    ProcessAssignID?: SortOrder
    Status?: SortOrder
    ReasonPauseID?: SortOrder
    ActivityDateTime?: SortOrder
    ActualHours?: SortOrder
    Created?: SortOrder
    CreatedBy?: SortOrder
    LastModified?: SortOrder
    LastModifiedBy?: SortOrder
  }

  export type ProcessActivityMinOrderByAggregateInput = {
    ID?: SortOrder
    ProcessAssignID?: SortOrder
    Status?: SortOrder
    ReasonPauseID?: SortOrder
    ActivityDateTime?: SortOrder
    ActualHours?: SortOrder
    Created?: SortOrder
    CreatedBy?: SortOrder
    LastModified?: SortOrder
    LastModifiedBy?: SortOrder
  }

  export type ProcessActivitySumOrderByAggregateInput = {
    ID?: SortOrder
    ProcessAssignID?: SortOrder
    Status?: SortOrder
    ReasonPauseID?: SortOrder
    ActualHours?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProcessActivityListRelationFilter = {
    every?: ProcessActivityWhereInput
    some?: ProcessActivityWhereInput
    none?: ProcessActivityWhereInput
  }

  export type ProcessScalarRelationFilter = {
    is?: ProcessWhereInput
    isNot?: ProcessWhereInput
  }

  export type ProcessActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProcessAssignCountOrderByAggregateInput = {
    ID?: SortOrder
    ProcessID?: SortOrder
    UserID?: SortOrder
    EmployeeNumber?: SortOrder
    Status?: SortOrder
    Type?: SortOrder
    Created?: SortOrder
    CreatedBy?: SortOrder
    LastModified?: SortOrder
    LastModifiedBy?: SortOrder
    remark?: SortOrder
  }

  export type ProcessAssignAvgOrderByAggregateInput = {
    ID?: SortOrder
    ProcessID?: SortOrder
    Status?: SortOrder
    Type?: SortOrder
  }

  export type ProcessAssignMaxOrderByAggregateInput = {
    ID?: SortOrder
    ProcessID?: SortOrder
    UserID?: SortOrder
    EmployeeNumber?: SortOrder
    Status?: SortOrder
    Type?: SortOrder
    Created?: SortOrder
    CreatedBy?: SortOrder
    LastModified?: SortOrder
    LastModifiedBy?: SortOrder
    remark?: SortOrder
  }

  export type ProcessAssignMinOrderByAggregateInput = {
    ID?: SortOrder
    ProcessID?: SortOrder
    UserID?: SortOrder
    EmployeeNumber?: SortOrder
    Status?: SortOrder
    Type?: SortOrder
    Created?: SortOrder
    CreatedBy?: SortOrder
    LastModified?: SortOrder
    LastModifiedBy?: SortOrder
    remark?: SortOrder
  }

  export type ProcessAssignSumOrderByAggregateInput = {
    ID?: SortOrder
    ProcessID?: SortOrder
    Status?: SortOrder
    Type?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type VwUnitListRelationFilter = {
    every?: vwUnitWhereInput
    some?: vwUnitWhereInput
    none?: vwUnitWhereInput
  }

  export type vwUnitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type vwPRO_2CountOrderByAggregateInput = {
    ID?: SortOrder
    Number?: SortOrder
    ProductID?: SortOrder
    Quantity?: SortOrder
    DueDate?: SortOrder
    Created?: SortOrder
    CreatedBy?: SortOrder
    LastModified?: SortOrder
    LastModifiedBy?: SortOrder
  }

  export type vwPRO_2AvgOrderByAggregateInput = {
    ID?: SortOrder
    ProductID?: SortOrder
    Quantity?: SortOrder
  }

  export type vwPRO_2MaxOrderByAggregateInput = {
    ID?: SortOrder
    Number?: SortOrder
    ProductID?: SortOrder
    Quantity?: SortOrder
    DueDate?: SortOrder
    Created?: SortOrder
    CreatedBy?: SortOrder
    LastModified?: SortOrder
    LastModifiedBy?: SortOrder
  }

  export type vwPRO_2MinOrderByAggregateInput = {
    ID?: SortOrder
    Number?: SortOrder
    ProductID?: SortOrder
    Quantity?: SortOrder
    DueDate?: SortOrder
    Created?: SortOrder
    CreatedBy?: SortOrder
    LastModified?: SortOrder
    LastModifiedBy?: SortOrder
  }

  export type vwPRO_2SumOrderByAggregateInput = {
    ID?: SortOrder
    ProductID?: SortOrder
    Quantity?: SortOrder
  }

  export type VwUnitScalarRelationFilter = {
    is?: vwUnitWhereInput
    isNot?: vwUnitWhereInput
  }

  export type VwProcessAssign2AllListRelationFilter = {
    every?: vwProcessAssign2AllWhereInput
    some?: vwProcessAssign2AllWhereInput
    none?: vwProcessAssign2AllWhereInput
  }

  export type vwProcessAssign2AllOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type vwProcessCountOrderByAggregateInput = {
    ProcessID?: SortOrder
    UnitID?: SortOrder
    ProcessStatus?: SortOrder
    ProcessPlanStartDate?: SortOrder
    ProcessPlanEndDate?: SortOrder
    ProcessPlanDuration?: SortOrder
    ProcessActualStartDate?: SortOrder
    ProcessActualEndDate?: SortOrder
    ProcessActualDuration?: SortOrder
    MasterProcessName?: SortOrder
    StandardMH?: SortOrder
    ProcessGroupName?: SortOrder
    ProcessDelayInDay?: SortOrder
    ProcessOrder?: SortOrder
    LastModified?: SortOrder
    MasterProcessID?: SortOrder
  }

  export type vwProcessAvgOrderByAggregateInput = {
    ProcessID?: SortOrder
    UnitID?: SortOrder
    ProcessPlanDuration?: SortOrder
    ProcessActualDuration?: SortOrder
    StandardMH?: SortOrder
    ProcessDelayInDay?: SortOrder
    ProcessOrder?: SortOrder
    MasterProcessID?: SortOrder
  }

  export type vwProcessMaxOrderByAggregateInput = {
    ProcessID?: SortOrder
    UnitID?: SortOrder
    ProcessStatus?: SortOrder
    ProcessPlanStartDate?: SortOrder
    ProcessPlanEndDate?: SortOrder
    ProcessPlanDuration?: SortOrder
    ProcessActualStartDate?: SortOrder
    ProcessActualEndDate?: SortOrder
    ProcessActualDuration?: SortOrder
    MasterProcessName?: SortOrder
    StandardMH?: SortOrder
    ProcessGroupName?: SortOrder
    ProcessDelayInDay?: SortOrder
    ProcessOrder?: SortOrder
    LastModified?: SortOrder
    MasterProcessID?: SortOrder
  }

  export type vwProcessMinOrderByAggregateInput = {
    ProcessID?: SortOrder
    UnitID?: SortOrder
    ProcessStatus?: SortOrder
    ProcessPlanStartDate?: SortOrder
    ProcessPlanEndDate?: SortOrder
    ProcessPlanDuration?: SortOrder
    ProcessActualStartDate?: SortOrder
    ProcessActualEndDate?: SortOrder
    ProcessActualDuration?: SortOrder
    MasterProcessName?: SortOrder
    StandardMH?: SortOrder
    ProcessGroupName?: SortOrder
    ProcessDelayInDay?: SortOrder
    ProcessOrder?: SortOrder
    LastModified?: SortOrder
    MasterProcessID?: SortOrder
  }

  export type vwProcessSumOrderByAggregateInput = {
    ProcessID?: SortOrder
    UnitID?: SortOrder
    ProcessPlanDuration?: SortOrder
    ProcessActualDuration?: SortOrder
    StandardMH?: SortOrder
    ProcessDelayInDay?: SortOrder
    ProcessOrder?: SortOrder
    MasterProcessID?: SortOrder
  }

  export type VwProcessAssign2AllScalarRelationFilter = {
    is?: vwProcessAssign2AllWhereInput
    isNot?: vwProcessAssign2AllWhereInput
  }

  export type vwProcessActivityCountOrderByAggregateInput = {
    atasan?: SortOrder
    EmployeeNumber?: SortOrder
    ActivityDateTime?: SortOrder
    ProcessActivityID?: SortOrder
    ProcessAssignID?: SortOrder
    ProcessActivityName?: SortOrder
    ProcessActivityStatus?: SortOrder
    ProcessActivityReasonPause?: SortOrder
    ActualHoursNonProductive?: SortOrder
    ProcessActivityActualHours?: SortOrder
    ProcessActivityDateTime?: SortOrder
    LastModifiedBy?: SortOrder
    LastModified?: SortOrder
  }

  export type vwProcessActivityAvgOrderByAggregateInput = {
    ProcessActivityID?: SortOrder
    ProcessAssignID?: SortOrder
    ActualHoursNonProductive?: SortOrder
    ProcessActivityActualHours?: SortOrder
  }

  export type vwProcessActivityMaxOrderByAggregateInput = {
    atasan?: SortOrder
    EmployeeNumber?: SortOrder
    ActivityDateTime?: SortOrder
    ProcessActivityID?: SortOrder
    ProcessAssignID?: SortOrder
    ProcessActivityName?: SortOrder
    ProcessActivityStatus?: SortOrder
    ProcessActivityReasonPause?: SortOrder
    ActualHoursNonProductive?: SortOrder
    ProcessActivityActualHours?: SortOrder
    ProcessActivityDateTime?: SortOrder
    LastModifiedBy?: SortOrder
    LastModified?: SortOrder
  }

  export type vwProcessActivityMinOrderByAggregateInput = {
    atasan?: SortOrder
    EmployeeNumber?: SortOrder
    ActivityDateTime?: SortOrder
    ProcessActivityID?: SortOrder
    ProcessAssignID?: SortOrder
    ProcessActivityName?: SortOrder
    ProcessActivityStatus?: SortOrder
    ProcessActivityReasonPause?: SortOrder
    ActualHoursNonProductive?: SortOrder
    ProcessActivityActualHours?: SortOrder
    ProcessActivityDateTime?: SortOrder
    LastModifiedBy?: SortOrder
    LastModified?: SortOrder
  }

  export type vwProcessActivitySumOrderByAggregateInput = {
    ProcessActivityID?: SortOrder
    ProcessAssignID?: SortOrder
    ActualHoursNonProductive?: SortOrder
    ProcessActivityActualHours?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type VwProcessScalarRelationFilter = {
    is?: vwProcessWhereInput
    isNot?: vwProcessWhereInput
  }

  export type VwProcessActivityListRelationFilter = {
    every?: vwProcessActivityWhereInput
    some?: vwProcessActivityWhereInput
    none?: vwProcessActivityWhereInput
  }

  export type vwProcessActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type vwProcessAssign2AllCountOrderByAggregateInput = {
    ID?: SortOrder
    ProcessID?: SortOrder
    UnitID?: SortOrder
    LeaderName?: SortOrder
    OperatorName?: SortOrder
    NRP?: SortOrder
    TglAssign?: SortOrder
    ProcessassignStatus?: SortOrder
    Startassign?: SortOrder
    Stopassign?: SortOrder
    ProcessAssignType?: SortOrder
    LastModified?: SortOrder
    lastStart?: SortOrder
    lastStop?: SortOrder
    remark?: SortOrder
    IsActive?: SortOrder
  }

  export type vwProcessAssign2AllAvgOrderByAggregateInput = {
    ID?: SortOrder
    ProcessID?: SortOrder
    UnitID?: SortOrder
  }

  export type vwProcessAssign2AllMaxOrderByAggregateInput = {
    ID?: SortOrder
    ProcessID?: SortOrder
    UnitID?: SortOrder
    LeaderName?: SortOrder
    OperatorName?: SortOrder
    NRP?: SortOrder
    TglAssign?: SortOrder
    ProcessassignStatus?: SortOrder
    Startassign?: SortOrder
    Stopassign?: SortOrder
    ProcessAssignType?: SortOrder
    LastModified?: SortOrder
    lastStart?: SortOrder
    lastStop?: SortOrder
    remark?: SortOrder
    IsActive?: SortOrder
  }

  export type vwProcessAssign2AllMinOrderByAggregateInput = {
    ID?: SortOrder
    ProcessID?: SortOrder
    UnitID?: SortOrder
    LeaderName?: SortOrder
    OperatorName?: SortOrder
    NRP?: SortOrder
    TglAssign?: SortOrder
    ProcessassignStatus?: SortOrder
    Startassign?: SortOrder
    Stopassign?: SortOrder
    ProcessAssignType?: SortOrder
    LastModified?: SortOrder
    lastStart?: SortOrder
    lastStop?: SortOrder
    remark?: SortOrder
    IsActive?: SortOrder
  }

  export type vwProcessAssign2AllSumOrderByAggregateInput = {
    ID?: SortOrder
    ProcessID?: SortOrder
    UnitID?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type vwProcessGroupCountOrderByAggregateInput = {
    UnitID?: SortOrder
    ProcessGroupNameSort?: SortOrder
    ProcessGroupName?: SortOrder
    ProcessGroupPlanStartDate?: SortOrder
    ProcessGroupPlanEndDate?: SortOrder
    ProcessGroupPlanDuration?: SortOrder
    ProcessGroupActualStartDate?: SortOrder
    ProcessGroupActualEndDate?: SortOrder
    ProcessGroupActualDuration?: SortOrder
    ProcessGroupDelayInDay?: SortOrder
    LastModified?: SortOrder
  }

  export type vwProcessGroupAvgOrderByAggregateInput = {
    UnitID?: SortOrder
    ProcessGroupNameSort?: SortOrder
    ProcessGroupPlanDuration?: SortOrder
    ProcessGroupActualDuration?: SortOrder
    ProcessGroupDelayInDay?: SortOrder
  }

  export type vwProcessGroupMaxOrderByAggregateInput = {
    UnitID?: SortOrder
    ProcessGroupNameSort?: SortOrder
    ProcessGroupName?: SortOrder
    ProcessGroupPlanStartDate?: SortOrder
    ProcessGroupPlanEndDate?: SortOrder
    ProcessGroupPlanDuration?: SortOrder
    ProcessGroupActualStartDate?: SortOrder
    ProcessGroupActualEndDate?: SortOrder
    ProcessGroupActualDuration?: SortOrder
    ProcessGroupDelayInDay?: SortOrder
    LastModified?: SortOrder
  }

  export type vwProcessGroupMinOrderByAggregateInput = {
    UnitID?: SortOrder
    ProcessGroupNameSort?: SortOrder
    ProcessGroupName?: SortOrder
    ProcessGroupPlanStartDate?: SortOrder
    ProcessGroupPlanEndDate?: SortOrder
    ProcessGroupPlanDuration?: SortOrder
    ProcessGroupActualStartDate?: SortOrder
    ProcessGroupActualEndDate?: SortOrder
    ProcessGroupActualDuration?: SortOrder
    ProcessGroupDelayInDay?: SortOrder
    LastModified?: SortOrder
  }

  export type vwProcessGroupSumOrderByAggregateInput = {
    UnitID?: SortOrder
    ProcessGroupNameSort?: SortOrder
    ProcessGroupPlanDuration?: SortOrder
    ProcessGroupActualDuration?: SortOrder
    ProcessGroupDelayInDay?: SortOrder
  }

  export type VwProductGroupScalarRelationFilter = {
    is?: vwProductGroupWhereInput
    isNot?: vwProductGroupWhereInput
  }

  export type vwProductCountOrderByAggregateInput = {
    ProductID?: SortOrder
    ProductGroupID?: SortOrder
    ProductName?: SortOrder
    ProductPN?: SortOrder
    ProductTotalDay?: SortOrder
    ProductSubGroupName?: SortOrder
    ProductSubGroupSAPCode?: SortOrder
    ProductStandardHours?: SortOrder
    LastModified?: SortOrder
  }

  export type vwProductAvgOrderByAggregateInput = {
    ProductID?: SortOrder
    ProductGroupID?: SortOrder
    ProductTotalDay?: SortOrder
    ProductStandardHours?: SortOrder
  }

  export type vwProductMaxOrderByAggregateInput = {
    ProductID?: SortOrder
    ProductGroupID?: SortOrder
    ProductName?: SortOrder
    ProductPN?: SortOrder
    ProductTotalDay?: SortOrder
    ProductSubGroupName?: SortOrder
    ProductSubGroupSAPCode?: SortOrder
    ProductStandardHours?: SortOrder
    LastModified?: SortOrder
  }

  export type vwProductMinOrderByAggregateInput = {
    ProductID?: SortOrder
    ProductGroupID?: SortOrder
    ProductName?: SortOrder
    ProductPN?: SortOrder
    ProductTotalDay?: SortOrder
    ProductSubGroupName?: SortOrder
    ProductSubGroupSAPCode?: SortOrder
    ProductStandardHours?: SortOrder
    LastModified?: SortOrder
  }

  export type vwProductSumOrderByAggregateInput = {
    ProductID?: SortOrder
    ProductGroupID?: SortOrder
    ProductTotalDay?: SortOrder
    ProductStandardHours?: SortOrder
  }

  export type VwPRO_2ScalarRelationFilter = {
    is?: vwPRO_2WhereInput
    isNot?: vwPRO_2WhereInput
  }

  export type VwProductScalarRelationFilter = {
    is?: vwProductWhereInput
    isNot?: vwProductWhereInput
  }

  export type VwProcessListRelationFilter = {
    every?: vwProcessWhereInput
    some?: vwProcessWhereInput
    none?: vwProcessWhereInput
  }

  export type vwProcessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type vwUnitCountOrderByAggregateInput = {
    UnitID?: SortOrder
    PROID?: SortOrder
    ProductID?: SortOrder
    UnitSerialNumber?: SortOrder
    UnitChasisNumber?: SortOrder
    UnitDueDate?: SortOrder
    UnitPlanStartDate?: SortOrder
    UnitPlanEndDate?: SortOrder
    UnitPlanDuration?: SortOrder
    UnitActualStartDate?: SortOrder
    UnitActualEndDate?: SortOrder
    UnitActualDuration?: SortOrder
    Unit_Status?: SortOrder
    UnitMPSDueDate?: SortOrder
    UnitActualDeliveryDate?: SortOrder
    UnitActualHoursCompleted?: SortOrder
    UnitDelayInDay?: SortOrder
    SOUnitprice?: SortOrder
    SalesOrderID?: SortOrder
    UnitProcessLastStatus?: SortOrder
    UnitProcessLastActualStartDate?: SortOrder
    UnitProcessLastPlanStartDate?: SortOrder
    IsHold?: SortOrder
    LastModified?: SortOrder
  }

  export type vwUnitAvgOrderByAggregateInput = {
    UnitID?: SortOrder
    PROID?: SortOrder
    ProductID?: SortOrder
    UnitPlanDuration?: SortOrder
    UnitActualDuration?: SortOrder
    UnitActualHoursCompleted?: SortOrder
    UnitDelayInDay?: SortOrder
    SOUnitprice?: SortOrder
    SalesOrderID?: SortOrder
  }

  export type vwUnitMaxOrderByAggregateInput = {
    UnitID?: SortOrder
    PROID?: SortOrder
    ProductID?: SortOrder
    UnitSerialNumber?: SortOrder
    UnitChasisNumber?: SortOrder
    UnitDueDate?: SortOrder
    UnitPlanStartDate?: SortOrder
    UnitPlanEndDate?: SortOrder
    UnitPlanDuration?: SortOrder
    UnitActualStartDate?: SortOrder
    UnitActualEndDate?: SortOrder
    UnitActualDuration?: SortOrder
    Unit_Status?: SortOrder
    UnitMPSDueDate?: SortOrder
    UnitActualDeliveryDate?: SortOrder
    UnitActualHoursCompleted?: SortOrder
    UnitDelayInDay?: SortOrder
    SOUnitprice?: SortOrder
    SalesOrderID?: SortOrder
    UnitProcessLastStatus?: SortOrder
    UnitProcessLastActualStartDate?: SortOrder
    UnitProcessLastPlanStartDate?: SortOrder
    IsHold?: SortOrder
    LastModified?: SortOrder
  }

  export type vwUnitMinOrderByAggregateInput = {
    UnitID?: SortOrder
    PROID?: SortOrder
    ProductID?: SortOrder
    UnitSerialNumber?: SortOrder
    UnitChasisNumber?: SortOrder
    UnitDueDate?: SortOrder
    UnitPlanStartDate?: SortOrder
    UnitPlanEndDate?: SortOrder
    UnitPlanDuration?: SortOrder
    UnitActualStartDate?: SortOrder
    UnitActualEndDate?: SortOrder
    UnitActualDuration?: SortOrder
    Unit_Status?: SortOrder
    UnitMPSDueDate?: SortOrder
    UnitActualDeliveryDate?: SortOrder
    UnitActualHoursCompleted?: SortOrder
    UnitDelayInDay?: SortOrder
    SOUnitprice?: SortOrder
    SalesOrderID?: SortOrder
    UnitProcessLastStatus?: SortOrder
    UnitProcessLastActualStartDate?: SortOrder
    UnitProcessLastPlanStartDate?: SortOrder
    IsHold?: SortOrder
    LastModified?: SortOrder
  }

  export type vwUnitSumOrderByAggregateInput = {
    UnitID?: SortOrder
    PROID?: SortOrder
    ProductID?: SortOrder
    UnitPlanDuration?: SortOrder
    UnitActualDuration?: SortOrder
    UnitActualHoursCompleted?: SortOrder
    UnitDelayInDay?: SortOrder
    SOUnitprice?: SortOrder
    SalesOrderID?: SortOrder
  }

  export type VwProductListRelationFilter = {
    every?: vwProductWhereInput
    some?: vwProductWhereInput
    none?: vwProductWhereInput
  }

  export type vwProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type vwProductGroupCountOrderByAggregateInput = {
    ProductGroupID?: SortOrder
    ProductGroupName?: SortOrder
    ProductGroupDescription?: SortOrder
    ProductGroupCapacity?: SortOrder
    ProductGroupStartMonth?: SortOrder
    LastModified?: SortOrder
  }

  export type vwProductGroupAvgOrderByAggregateInput = {
    ProductGroupID?: SortOrder
    ProductGroupCapacity?: SortOrder
  }

  export type vwProductGroupMaxOrderByAggregateInput = {
    ProductGroupID?: SortOrder
    ProductGroupName?: SortOrder
    ProductGroupDescription?: SortOrder
    ProductGroupCapacity?: SortOrder
    ProductGroupStartMonth?: SortOrder
    LastModified?: SortOrder
  }

  export type vwProductGroupMinOrderByAggregateInput = {
    ProductGroupID?: SortOrder
    ProductGroupName?: SortOrder
    ProductGroupDescription?: SortOrder
    ProductGroupCapacity?: SortOrder
    ProductGroupStartMonth?: SortOrder
    LastModified?: SortOrder
  }

  export type vwProductGroupSumOrderByAggregateInput = {
    ProductGroupID?: SortOrder
    ProductGroupCapacity?: SortOrder
  }

  export type ProcessAssignCreateNestedManyWithoutProcessInput = {
    create?: XOR<ProcessAssignCreateWithoutProcessInput, ProcessAssignUncheckedCreateWithoutProcessInput> | ProcessAssignCreateWithoutProcessInput[] | ProcessAssignUncheckedCreateWithoutProcessInput[]
    connectOrCreate?: ProcessAssignCreateOrConnectWithoutProcessInput | ProcessAssignCreateOrConnectWithoutProcessInput[]
    createMany?: ProcessAssignCreateManyProcessInputEnvelope
    connect?: ProcessAssignWhereUniqueInput | ProcessAssignWhereUniqueInput[]
  }

  export type ProcessAssignUncheckedCreateNestedManyWithoutProcessInput = {
    create?: XOR<ProcessAssignCreateWithoutProcessInput, ProcessAssignUncheckedCreateWithoutProcessInput> | ProcessAssignCreateWithoutProcessInput[] | ProcessAssignUncheckedCreateWithoutProcessInput[]
    connectOrCreate?: ProcessAssignCreateOrConnectWithoutProcessInput | ProcessAssignCreateOrConnectWithoutProcessInput[]
    createMany?: ProcessAssignCreateManyProcessInputEnvelope
    connect?: ProcessAssignWhereUniqueInput | ProcessAssignWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ProcessAssignUpdateManyWithoutProcessNestedInput = {
    create?: XOR<ProcessAssignCreateWithoutProcessInput, ProcessAssignUncheckedCreateWithoutProcessInput> | ProcessAssignCreateWithoutProcessInput[] | ProcessAssignUncheckedCreateWithoutProcessInput[]
    connectOrCreate?: ProcessAssignCreateOrConnectWithoutProcessInput | ProcessAssignCreateOrConnectWithoutProcessInput[]
    upsert?: ProcessAssignUpsertWithWhereUniqueWithoutProcessInput | ProcessAssignUpsertWithWhereUniqueWithoutProcessInput[]
    createMany?: ProcessAssignCreateManyProcessInputEnvelope
    set?: ProcessAssignWhereUniqueInput | ProcessAssignWhereUniqueInput[]
    disconnect?: ProcessAssignWhereUniqueInput | ProcessAssignWhereUniqueInput[]
    delete?: ProcessAssignWhereUniqueInput | ProcessAssignWhereUniqueInput[]
    connect?: ProcessAssignWhereUniqueInput | ProcessAssignWhereUniqueInput[]
    update?: ProcessAssignUpdateWithWhereUniqueWithoutProcessInput | ProcessAssignUpdateWithWhereUniqueWithoutProcessInput[]
    updateMany?: ProcessAssignUpdateManyWithWhereWithoutProcessInput | ProcessAssignUpdateManyWithWhereWithoutProcessInput[]
    deleteMany?: ProcessAssignScalarWhereInput | ProcessAssignScalarWhereInput[]
  }

  export type ProcessAssignUncheckedUpdateManyWithoutProcessNestedInput = {
    create?: XOR<ProcessAssignCreateWithoutProcessInput, ProcessAssignUncheckedCreateWithoutProcessInput> | ProcessAssignCreateWithoutProcessInput[] | ProcessAssignUncheckedCreateWithoutProcessInput[]
    connectOrCreate?: ProcessAssignCreateOrConnectWithoutProcessInput | ProcessAssignCreateOrConnectWithoutProcessInput[]
    upsert?: ProcessAssignUpsertWithWhereUniqueWithoutProcessInput | ProcessAssignUpsertWithWhereUniqueWithoutProcessInput[]
    createMany?: ProcessAssignCreateManyProcessInputEnvelope
    set?: ProcessAssignWhereUniqueInput | ProcessAssignWhereUniqueInput[]
    disconnect?: ProcessAssignWhereUniqueInput | ProcessAssignWhereUniqueInput[]
    delete?: ProcessAssignWhereUniqueInput | ProcessAssignWhereUniqueInput[]
    connect?: ProcessAssignWhereUniqueInput | ProcessAssignWhereUniqueInput[]
    update?: ProcessAssignUpdateWithWhereUniqueWithoutProcessInput | ProcessAssignUpdateWithWhereUniqueWithoutProcessInput[]
    updateMany?: ProcessAssignUpdateManyWithWhereWithoutProcessInput | ProcessAssignUpdateManyWithWhereWithoutProcessInput[]
    deleteMany?: ProcessAssignScalarWhereInput | ProcessAssignScalarWhereInput[]
  }

  export type ProcessAssignCreateNestedOneWithoutProcessActivityInput = {
    create?: XOR<ProcessAssignCreateWithoutProcessActivityInput, ProcessAssignUncheckedCreateWithoutProcessActivityInput>
    connectOrCreate?: ProcessAssignCreateOrConnectWithoutProcessActivityInput
    connect?: ProcessAssignWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ProcessAssignUpdateOneRequiredWithoutProcessActivityNestedInput = {
    create?: XOR<ProcessAssignCreateWithoutProcessActivityInput, ProcessAssignUncheckedCreateWithoutProcessActivityInput>
    connectOrCreate?: ProcessAssignCreateOrConnectWithoutProcessActivityInput
    upsert?: ProcessAssignUpsertWithoutProcessActivityInput
    connect?: ProcessAssignWhereUniqueInput
    update?: XOR<XOR<ProcessAssignUpdateToOneWithWhereWithoutProcessActivityInput, ProcessAssignUpdateWithoutProcessActivityInput>, ProcessAssignUncheckedUpdateWithoutProcessActivityInput>
  }

  export type ProcessActivityCreateNestedManyWithoutProcessAssignInput = {
    create?: XOR<ProcessActivityCreateWithoutProcessAssignInput, ProcessActivityUncheckedCreateWithoutProcessAssignInput> | ProcessActivityCreateWithoutProcessAssignInput[] | ProcessActivityUncheckedCreateWithoutProcessAssignInput[]
    connectOrCreate?: ProcessActivityCreateOrConnectWithoutProcessAssignInput | ProcessActivityCreateOrConnectWithoutProcessAssignInput[]
    createMany?: ProcessActivityCreateManyProcessAssignInputEnvelope
    connect?: ProcessActivityWhereUniqueInput | ProcessActivityWhereUniqueInput[]
  }

  export type ProcessCreateNestedOneWithoutProcessAssignInput = {
    create?: XOR<ProcessCreateWithoutProcessAssignInput, ProcessUncheckedCreateWithoutProcessAssignInput>
    connectOrCreate?: ProcessCreateOrConnectWithoutProcessAssignInput
    connect?: ProcessWhereUniqueInput
  }

  export type ProcessActivityUncheckedCreateNestedManyWithoutProcessAssignInput = {
    create?: XOR<ProcessActivityCreateWithoutProcessAssignInput, ProcessActivityUncheckedCreateWithoutProcessAssignInput> | ProcessActivityCreateWithoutProcessAssignInput[] | ProcessActivityUncheckedCreateWithoutProcessAssignInput[]
    connectOrCreate?: ProcessActivityCreateOrConnectWithoutProcessAssignInput | ProcessActivityCreateOrConnectWithoutProcessAssignInput[]
    createMany?: ProcessActivityCreateManyProcessAssignInputEnvelope
    connect?: ProcessActivityWhereUniqueInput | ProcessActivityWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProcessActivityUpdateManyWithoutProcessAssignNestedInput = {
    create?: XOR<ProcessActivityCreateWithoutProcessAssignInput, ProcessActivityUncheckedCreateWithoutProcessAssignInput> | ProcessActivityCreateWithoutProcessAssignInput[] | ProcessActivityUncheckedCreateWithoutProcessAssignInput[]
    connectOrCreate?: ProcessActivityCreateOrConnectWithoutProcessAssignInput | ProcessActivityCreateOrConnectWithoutProcessAssignInput[]
    upsert?: ProcessActivityUpsertWithWhereUniqueWithoutProcessAssignInput | ProcessActivityUpsertWithWhereUniqueWithoutProcessAssignInput[]
    createMany?: ProcessActivityCreateManyProcessAssignInputEnvelope
    set?: ProcessActivityWhereUniqueInput | ProcessActivityWhereUniqueInput[]
    disconnect?: ProcessActivityWhereUniqueInput | ProcessActivityWhereUniqueInput[]
    delete?: ProcessActivityWhereUniqueInput | ProcessActivityWhereUniqueInput[]
    connect?: ProcessActivityWhereUniqueInput | ProcessActivityWhereUniqueInput[]
    update?: ProcessActivityUpdateWithWhereUniqueWithoutProcessAssignInput | ProcessActivityUpdateWithWhereUniqueWithoutProcessAssignInput[]
    updateMany?: ProcessActivityUpdateManyWithWhereWithoutProcessAssignInput | ProcessActivityUpdateManyWithWhereWithoutProcessAssignInput[]
    deleteMany?: ProcessActivityScalarWhereInput | ProcessActivityScalarWhereInput[]
  }

  export type ProcessUpdateOneRequiredWithoutProcessAssignNestedInput = {
    create?: XOR<ProcessCreateWithoutProcessAssignInput, ProcessUncheckedCreateWithoutProcessAssignInput>
    connectOrCreate?: ProcessCreateOrConnectWithoutProcessAssignInput
    upsert?: ProcessUpsertWithoutProcessAssignInput
    connect?: ProcessWhereUniqueInput
    update?: XOR<XOR<ProcessUpdateToOneWithWhereWithoutProcessAssignInput, ProcessUpdateWithoutProcessAssignInput>, ProcessUncheckedUpdateWithoutProcessAssignInput>
  }

  export type ProcessActivityUncheckedUpdateManyWithoutProcessAssignNestedInput = {
    create?: XOR<ProcessActivityCreateWithoutProcessAssignInput, ProcessActivityUncheckedCreateWithoutProcessAssignInput> | ProcessActivityCreateWithoutProcessAssignInput[] | ProcessActivityUncheckedCreateWithoutProcessAssignInput[]
    connectOrCreate?: ProcessActivityCreateOrConnectWithoutProcessAssignInput | ProcessActivityCreateOrConnectWithoutProcessAssignInput[]
    upsert?: ProcessActivityUpsertWithWhereUniqueWithoutProcessAssignInput | ProcessActivityUpsertWithWhereUniqueWithoutProcessAssignInput[]
    createMany?: ProcessActivityCreateManyProcessAssignInputEnvelope
    set?: ProcessActivityWhereUniqueInput | ProcessActivityWhereUniqueInput[]
    disconnect?: ProcessActivityWhereUniqueInput | ProcessActivityWhereUniqueInput[]
    delete?: ProcessActivityWhereUniqueInput | ProcessActivityWhereUniqueInput[]
    connect?: ProcessActivityWhereUniqueInput | ProcessActivityWhereUniqueInput[]
    update?: ProcessActivityUpdateWithWhereUniqueWithoutProcessAssignInput | ProcessActivityUpdateWithWhereUniqueWithoutProcessAssignInput[]
    updateMany?: ProcessActivityUpdateManyWithWhereWithoutProcessAssignInput | ProcessActivityUpdateManyWithWhereWithoutProcessAssignInput[]
    deleteMany?: ProcessActivityScalarWhereInput | ProcessActivityScalarWhereInput[]
  }

  export type vwUnitCreateNestedManyWithoutVwPROInput = {
    create?: XOR<vwUnitCreateWithoutVwPROInput, vwUnitUncheckedCreateWithoutVwPROInput> | vwUnitCreateWithoutVwPROInput[] | vwUnitUncheckedCreateWithoutVwPROInput[]
    connectOrCreate?: vwUnitCreateOrConnectWithoutVwPROInput | vwUnitCreateOrConnectWithoutVwPROInput[]
    createMany?: vwUnitCreateManyVwPROInputEnvelope
    connect?: vwUnitWhereUniqueInput | vwUnitWhereUniqueInput[]
  }

  export type vwUnitUncheckedCreateNestedManyWithoutVwPROInput = {
    create?: XOR<vwUnitCreateWithoutVwPROInput, vwUnitUncheckedCreateWithoutVwPROInput> | vwUnitCreateWithoutVwPROInput[] | vwUnitUncheckedCreateWithoutVwPROInput[]
    connectOrCreate?: vwUnitCreateOrConnectWithoutVwPROInput | vwUnitCreateOrConnectWithoutVwPROInput[]
    createMany?: vwUnitCreateManyVwPROInputEnvelope
    connect?: vwUnitWhereUniqueInput | vwUnitWhereUniqueInput[]
  }

  export type vwUnitUpdateManyWithoutVwPRONestedInput = {
    create?: XOR<vwUnitCreateWithoutVwPROInput, vwUnitUncheckedCreateWithoutVwPROInput> | vwUnitCreateWithoutVwPROInput[] | vwUnitUncheckedCreateWithoutVwPROInput[]
    connectOrCreate?: vwUnitCreateOrConnectWithoutVwPROInput | vwUnitCreateOrConnectWithoutVwPROInput[]
    upsert?: vwUnitUpsertWithWhereUniqueWithoutVwPROInput | vwUnitUpsertWithWhereUniqueWithoutVwPROInput[]
    createMany?: vwUnitCreateManyVwPROInputEnvelope
    set?: vwUnitWhereUniqueInput | vwUnitWhereUniqueInput[]
    disconnect?: vwUnitWhereUniqueInput | vwUnitWhereUniqueInput[]
    delete?: vwUnitWhereUniqueInput | vwUnitWhereUniqueInput[]
    connect?: vwUnitWhereUniqueInput | vwUnitWhereUniqueInput[]
    update?: vwUnitUpdateWithWhereUniqueWithoutVwPROInput | vwUnitUpdateWithWhereUniqueWithoutVwPROInput[]
    updateMany?: vwUnitUpdateManyWithWhereWithoutVwPROInput | vwUnitUpdateManyWithWhereWithoutVwPROInput[]
    deleteMany?: vwUnitScalarWhereInput | vwUnitScalarWhereInput[]
  }

  export type vwUnitUncheckedUpdateManyWithoutVwPRONestedInput = {
    create?: XOR<vwUnitCreateWithoutVwPROInput, vwUnitUncheckedCreateWithoutVwPROInput> | vwUnitCreateWithoutVwPROInput[] | vwUnitUncheckedCreateWithoutVwPROInput[]
    connectOrCreate?: vwUnitCreateOrConnectWithoutVwPROInput | vwUnitCreateOrConnectWithoutVwPROInput[]
    upsert?: vwUnitUpsertWithWhereUniqueWithoutVwPROInput | vwUnitUpsertWithWhereUniqueWithoutVwPROInput[]
    createMany?: vwUnitCreateManyVwPROInputEnvelope
    set?: vwUnitWhereUniqueInput | vwUnitWhereUniqueInput[]
    disconnect?: vwUnitWhereUniqueInput | vwUnitWhereUniqueInput[]
    delete?: vwUnitWhereUniqueInput | vwUnitWhereUniqueInput[]
    connect?: vwUnitWhereUniqueInput | vwUnitWhereUniqueInput[]
    update?: vwUnitUpdateWithWhereUniqueWithoutVwPROInput | vwUnitUpdateWithWhereUniqueWithoutVwPROInput[]
    updateMany?: vwUnitUpdateManyWithWhereWithoutVwPROInput | vwUnitUpdateManyWithWhereWithoutVwPROInput[]
    deleteMany?: vwUnitScalarWhereInput | vwUnitScalarWhereInput[]
  }

  export type vwUnitCreateNestedOneWithoutVwProcessInput = {
    create?: XOR<vwUnitCreateWithoutVwProcessInput, vwUnitUncheckedCreateWithoutVwProcessInput>
    connectOrCreate?: vwUnitCreateOrConnectWithoutVwProcessInput
    connect?: vwUnitWhereUniqueInput
  }

  export type vwProcessAssign2AllCreateNestedManyWithoutVwProcessInput = {
    create?: XOR<vwProcessAssign2AllCreateWithoutVwProcessInput, vwProcessAssign2AllUncheckedCreateWithoutVwProcessInput> | vwProcessAssign2AllCreateWithoutVwProcessInput[] | vwProcessAssign2AllUncheckedCreateWithoutVwProcessInput[]
    connectOrCreate?: vwProcessAssign2AllCreateOrConnectWithoutVwProcessInput | vwProcessAssign2AllCreateOrConnectWithoutVwProcessInput[]
    createMany?: vwProcessAssign2AllCreateManyVwProcessInputEnvelope
    connect?: vwProcessAssign2AllWhereUniqueInput | vwProcessAssign2AllWhereUniqueInput[]
  }

  export type vwProcessAssign2AllUncheckedCreateNestedManyWithoutVwProcessInput = {
    create?: XOR<vwProcessAssign2AllCreateWithoutVwProcessInput, vwProcessAssign2AllUncheckedCreateWithoutVwProcessInput> | vwProcessAssign2AllCreateWithoutVwProcessInput[] | vwProcessAssign2AllUncheckedCreateWithoutVwProcessInput[]
    connectOrCreate?: vwProcessAssign2AllCreateOrConnectWithoutVwProcessInput | vwProcessAssign2AllCreateOrConnectWithoutVwProcessInput[]
    createMany?: vwProcessAssign2AllCreateManyVwProcessInputEnvelope
    connect?: vwProcessAssign2AllWhereUniqueInput | vwProcessAssign2AllWhereUniqueInput[]
  }

  export type vwUnitUpdateOneRequiredWithoutVwProcessNestedInput = {
    create?: XOR<vwUnitCreateWithoutVwProcessInput, vwUnitUncheckedCreateWithoutVwProcessInput>
    connectOrCreate?: vwUnitCreateOrConnectWithoutVwProcessInput
    upsert?: vwUnitUpsertWithoutVwProcessInput
    connect?: vwUnitWhereUniqueInput
    update?: XOR<XOR<vwUnitUpdateToOneWithWhereWithoutVwProcessInput, vwUnitUpdateWithoutVwProcessInput>, vwUnitUncheckedUpdateWithoutVwProcessInput>
  }

  export type vwProcessAssign2AllUpdateManyWithoutVwProcessNestedInput = {
    create?: XOR<vwProcessAssign2AllCreateWithoutVwProcessInput, vwProcessAssign2AllUncheckedCreateWithoutVwProcessInput> | vwProcessAssign2AllCreateWithoutVwProcessInput[] | vwProcessAssign2AllUncheckedCreateWithoutVwProcessInput[]
    connectOrCreate?: vwProcessAssign2AllCreateOrConnectWithoutVwProcessInput | vwProcessAssign2AllCreateOrConnectWithoutVwProcessInput[]
    upsert?: vwProcessAssign2AllUpsertWithWhereUniqueWithoutVwProcessInput | vwProcessAssign2AllUpsertWithWhereUniqueWithoutVwProcessInput[]
    createMany?: vwProcessAssign2AllCreateManyVwProcessInputEnvelope
    set?: vwProcessAssign2AllWhereUniqueInput | vwProcessAssign2AllWhereUniqueInput[]
    disconnect?: vwProcessAssign2AllWhereUniqueInput | vwProcessAssign2AllWhereUniqueInput[]
    delete?: vwProcessAssign2AllWhereUniqueInput | vwProcessAssign2AllWhereUniqueInput[]
    connect?: vwProcessAssign2AllWhereUniqueInput | vwProcessAssign2AllWhereUniqueInput[]
    update?: vwProcessAssign2AllUpdateWithWhereUniqueWithoutVwProcessInput | vwProcessAssign2AllUpdateWithWhereUniqueWithoutVwProcessInput[]
    updateMany?: vwProcessAssign2AllUpdateManyWithWhereWithoutVwProcessInput | vwProcessAssign2AllUpdateManyWithWhereWithoutVwProcessInput[]
    deleteMany?: vwProcessAssign2AllScalarWhereInput | vwProcessAssign2AllScalarWhereInput[]
  }

  export type vwProcessAssign2AllUncheckedUpdateManyWithoutVwProcessNestedInput = {
    create?: XOR<vwProcessAssign2AllCreateWithoutVwProcessInput, vwProcessAssign2AllUncheckedCreateWithoutVwProcessInput> | vwProcessAssign2AllCreateWithoutVwProcessInput[] | vwProcessAssign2AllUncheckedCreateWithoutVwProcessInput[]
    connectOrCreate?: vwProcessAssign2AllCreateOrConnectWithoutVwProcessInput | vwProcessAssign2AllCreateOrConnectWithoutVwProcessInput[]
    upsert?: vwProcessAssign2AllUpsertWithWhereUniqueWithoutVwProcessInput | vwProcessAssign2AllUpsertWithWhereUniqueWithoutVwProcessInput[]
    createMany?: vwProcessAssign2AllCreateManyVwProcessInputEnvelope
    set?: vwProcessAssign2AllWhereUniqueInput | vwProcessAssign2AllWhereUniqueInput[]
    disconnect?: vwProcessAssign2AllWhereUniqueInput | vwProcessAssign2AllWhereUniqueInput[]
    delete?: vwProcessAssign2AllWhereUniqueInput | vwProcessAssign2AllWhereUniqueInput[]
    connect?: vwProcessAssign2AllWhereUniqueInput | vwProcessAssign2AllWhereUniqueInput[]
    update?: vwProcessAssign2AllUpdateWithWhereUniqueWithoutVwProcessInput | vwProcessAssign2AllUpdateWithWhereUniqueWithoutVwProcessInput[]
    updateMany?: vwProcessAssign2AllUpdateManyWithWhereWithoutVwProcessInput | vwProcessAssign2AllUpdateManyWithWhereWithoutVwProcessInput[]
    deleteMany?: vwProcessAssign2AllScalarWhereInput | vwProcessAssign2AllScalarWhereInput[]
  }

  export type vwProcessAssign2AllCreateNestedOneWithoutVwProcessActivityInput = {
    create?: XOR<vwProcessAssign2AllCreateWithoutVwProcessActivityInput, vwProcessAssign2AllUncheckedCreateWithoutVwProcessActivityInput>
    connectOrCreate?: vwProcessAssign2AllCreateOrConnectWithoutVwProcessActivityInput
    connect?: vwProcessAssign2AllWhereUniqueInput
  }

  export type vwProcessAssign2AllUpdateOneRequiredWithoutVwProcessActivityNestedInput = {
    create?: XOR<vwProcessAssign2AllCreateWithoutVwProcessActivityInput, vwProcessAssign2AllUncheckedCreateWithoutVwProcessActivityInput>
    connectOrCreate?: vwProcessAssign2AllCreateOrConnectWithoutVwProcessActivityInput
    upsert?: vwProcessAssign2AllUpsertWithoutVwProcessActivityInput
    connect?: vwProcessAssign2AllWhereUniqueInput
    update?: XOR<XOR<vwProcessAssign2AllUpdateToOneWithWhereWithoutVwProcessActivityInput, vwProcessAssign2AllUpdateWithoutVwProcessActivityInput>, vwProcessAssign2AllUncheckedUpdateWithoutVwProcessActivityInput>
  }

  export type vwProcessCreateNestedOneWithoutVwProcessAssignInput = {
    create?: XOR<vwProcessCreateWithoutVwProcessAssignInput, vwProcessUncheckedCreateWithoutVwProcessAssignInput>
    connectOrCreate?: vwProcessCreateOrConnectWithoutVwProcessAssignInput
    connect?: vwProcessWhereUniqueInput
  }

  export type vwProcessActivityCreateNestedManyWithoutVwProcessAssignInput = {
    create?: XOR<vwProcessActivityCreateWithoutVwProcessAssignInput, vwProcessActivityUncheckedCreateWithoutVwProcessAssignInput> | vwProcessActivityCreateWithoutVwProcessAssignInput[] | vwProcessActivityUncheckedCreateWithoutVwProcessAssignInput[]
    connectOrCreate?: vwProcessActivityCreateOrConnectWithoutVwProcessAssignInput | vwProcessActivityCreateOrConnectWithoutVwProcessAssignInput[]
    createMany?: vwProcessActivityCreateManyVwProcessAssignInputEnvelope
    connect?: vwProcessActivityWhereUniqueInput | vwProcessActivityWhereUniqueInput[]
  }

  export type vwProcessActivityUncheckedCreateNestedManyWithoutVwProcessAssignInput = {
    create?: XOR<vwProcessActivityCreateWithoutVwProcessAssignInput, vwProcessActivityUncheckedCreateWithoutVwProcessAssignInput> | vwProcessActivityCreateWithoutVwProcessAssignInput[] | vwProcessActivityUncheckedCreateWithoutVwProcessAssignInput[]
    connectOrCreate?: vwProcessActivityCreateOrConnectWithoutVwProcessAssignInput | vwProcessActivityCreateOrConnectWithoutVwProcessAssignInput[]
    createMany?: vwProcessActivityCreateManyVwProcessAssignInputEnvelope
    connect?: vwProcessActivityWhereUniqueInput | vwProcessActivityWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type vwProcessUpdateOneRequiredWithoutVwProcessAssignNestedInput = {
    create?: XOR<vwProcessCreateWithoutVwProcessAssignInput, vwProcessUncheckedCreateWithoutVwProcessAssignInput>
    connectOrCreate?: vwProcessCreateOrConnectWithoutVwProcessAssignInput
    upsert?: vwProcessUpsertWithoutVwProcessAssignInput
    connect?: vwProcessWhereUniqueInput
    update?: XOR<XOR<vwProcessUpdateToOneWithWhereWithoutVwProcessAssignInput, vwProcessUpdateWithoutVwProcessAssignInput>, vwProcessUncheckedUpdateWithoutVwProcessAssignInput>
  }

  export type vwProcessActivityUpdateManyWithoutVwProcessAssignNestedInput = {
    create?: XOR<vwProcessActivityCreateWithoutVwProcessAssignInput, vwProcessActivityUncheckedCreateWithoutVwProcessAssignInput> | vwProcessActivityCreateWithoutVwProcessAssignInput[] | vwProcessActivityUncheckedCreateWithoutVwProcessAssignInput[]
    connectOrCreate?: vwProcessActivityCreateOrConnectWithoutVwProcessAssignInput | vwProcessActivityCreateOrConnectWithoutVwProcessAssignInput[]
    upsert?: vwProcessActivityUpsertWithWhereUniqueWithoutVwProcessAssignInput | vwProcessActivityUpsertWithWhereUniqueWithoutVwProcessAssignInput[]
    createMany?: vwProcessActivityCreateManyVwProcessAssignInputEnvelope
    set?: vwProcessActivityWhereUniqueInput | vwProcessActivityWhereUniqueInput[]
    disconnect?: vwProcessActivityWhereUniqueInput | vwProcessActivityWhereUniqueInput[]
    delete?: vwProcessActivityWhereUniqueInput | vwProcessActivityWhereUniqueInput[]
    connect?: vwProcessActivityWhereUniqueInput | vwProcessActivityWhereUniqueInput[]
    update?: vwProcessActivityUpdateWithWhereUniqueWithoutVwProcessAssignInput | vwProcessActivityUpdateWithWhereUniqueWithoutVwProcessAssignInput[]
    updateMany?: vwProcessActivityUpdateManyWithWhereWithoutVwProcessAssignInput | vwProcessActivityUpdateManyWithWhereWithoutVwProcessAssignInput[]
    deleteMany?: vwProcessActivityScalarWhereInput | vwProcessActivityScalarWhereInput[]
  }

  export type vwProcessActivityUncheckedUpdateManyWithoutVwProcessAssignNestedInput = {
    create?: XOR<vwProcessActivityCreateWithoutVwProcessAssignInput, vwProcessActivityUncheckedCreateWithoutVwProcessAssignInput> | vwProcessActivityCreateWithoutVwProcessAssignInput[] | vwProcessActivityUncheckedCreateWithoutVwProcessAssignInput[]
    connectOrCreate?: vwProcessActivityCreateOrConnectWithoutVwProcessAssignInput | vwProcessActivityCreateOrConnectWithoutVwProcessAssignInput[]
    upsert?: vwProcessActivityUpsertWithWhereUniqueWithoutVwProcessAssignInput | vwProcessActivityUpsertWithWhereUniqueWithoutVwProcessAssignInput[]
    createMany?: vwProcessActivityCreateManyVwProcessAssignInputEnvelope
    set?: vwProcessActivityWhereUniqueInput | vwProcessActivityWhereUniqueInput[]
    disconnect?: vwProcessActivityWhereUniqueInput | vwProcessActivityWhereUniqueInput[]
    delete?: vwProcessActivityWhereUniqueInput | vwProcessActivityWhereUniqueInput[]
    connect?: vwProcessActivityWhereUniqueInput | vwProcessActivityWhereUniqueInput[]
    update?: vwProcessActivityUpdateWithWhereUniqueWithoutVwProcessAssignInput | vwProcessActivityUpdateWithWhereUniqueWithoutVwProcessAssignInput[]
    updateMany?: vwProcessActivityUpdateManyWithWhereWithoutVwProcessAssignInput | vwProcessActivityUpdateManyWithWhereWithoutVwProcessAssignInput[]
    deleteMany?: vwProcessActivityScalarWhereInput | vwProcessActivityScalarWhereInput[]
  }

  export type vwProductGroupCreateNestedOneWithoutVwProductInput = {
    create?: XOR<vwProductGroupCreateWithoutVwProductInput, vwProductGroupUncheckedCreateWithoutVwProductInput>
    connectOrCreate?: vwProductGroupCreateOrConnectWithoutVwProductInput
    connect?: vwProductGroupWhereUniqueInput
  }

  export type vwUnitCreateNestedManyWithoutVwProductInput = {
    create?: XOR<vwUnitCreateWithoutVwProductInput, vwUnitUncheckedCreateWithoutVwProductInput> | vwUnitCreateWithoutVwProductInput[] | vwUnitUncheckedCreateWithoutVwProductInput[]
    connectOrCreate?: vwUnitCreateOrConnectWithoutVwProductInput | vwUnitCreateOrConnectWithoutVwProductInput[]
    createMany?: vwUnitCreateManyVwProductInputEnvelope
    connect?: vwUnitWhereUniqueInput | vwUnitWhereUniqueInput[]
  }

  export type vwUnitUncheckedCreateNestedManyWithoutVwProductInput = {
    create?: XOR<vwUnitCreateWithoutVwProductInput, vwUnitUncheckedCreateWithoutVwProductInput> | vwUnitCreateWithoutVwProductInput[] | vwUnitUncheckedCreateWithoutVwProductInput[]
    connectOrCreate?: vwUnitCreateOrConnectWithoutVwProductInput | vwUnitCreateOrConnectWithoutVwProductInput[]
    createMany?: vwUnitCreateManyVwProductInputEnvelope
    connect?: vwUnitWhereUniqueInput | vwUnitWhereUniqueInput[]
  }

  export type vwProductGroupUpdateOneRequiredWithoutVwProductNestedInput = {
    create?: XOR<vwProductGroupCreateWithoutVwProductInput, vwProductGroupUncheckedCreateWithoutVwProductInput>
    connectOrCreate?: vwProductGroupCreateOrConnectWithoutVwProductInput
    upsert?: vwProductGroupUpsertWithoutVwProductInput
    connect?: vwProductGroupWhereUniqueInput
    update?: XOR<XOR<vwProductGroupUpdateToOneWithWhereWithoutVwProductInput, vwProductGroupUpdateWithoutVwProductInput>, vwProductGroupUncheckedUpdateWithoutVwProductInput>
  }

  export type vwUnitUpdateManyWithoutVwProductNestedInput = {
    create?: XOR<vwUnitCreateWithoutVwProductInput, vwUnitUncheckedCreateWithoutVwProductInput> | vwUnitCreateWithoutVwProductInput[] | vwUnitUncheckedCreateWithoutVwProductInput[]
    connectOrCreate?: vwUnitCreateOrConnectWithoutVwProductInput | vwUnitCreateOrConnectWithoutVwProductInput[]
    upsert?: vwUnitUpsertWithWhereUniqueWithoutVwProductInput | vwUnitUpsertWithWhereUniqueWithoutVwProductInput[]
    createMany?: vwUnitCreateManyVwProductInputEnvelope
    set?: vwUnitWhereUniqueInput | vwUnitWhereUniqueInput[]
    disconnect?: vwUnitWhereUniqueInput | vwUnitWhereUniqueInput[]
    delete?: vwUnitWhereUniqueInput | vwUnitWhereUniqueInput[]
    connect?: vwUnitWhereUniqueInput | vwUnitWhereUniqueInput[]
    update?: vwUnitUpdateWithWhereUniqueWithoutVwProductInput | vwUnitUpdateWithWhereUniqueWithoutVwProductInput[]
    updateMany?: vwUnitUpdateManyWithWhereWithoutVwProductInput | vwUnitUpdateManyWithWhereWithoutVwProductInput[]
    deleteMany?: vwUnitScalarWhereInput | vwUnitScalarWhereInput[]
  }

  export type vwUnitUncheckedUpdateManyWithoutVwProductNestedInput = {
    create?: XOR<vwUnitCreateWithoutVwProductInput, vwUnitUncheckedCreateWithoutVwProductInput> | vwUnitCreateWithoutVwProductInput[] | vwUnitUncheckedCreateWithoutVwProductInput[]
    connectOrCreate?: vwUnitCreateOrConnectWithoutVwProductInput | vwUnitCreateOrConnectWithoutVwProductInput[]
    upsert?: vwUnitUpsertWithWhereUniqueWithoutVwProductInput | vwUnitUpsertWithWhereUniqueWithoutVwProductInput[]
    createMany?: vwUnitCreateManyVwProductInputEnvelope
    set?: vwUnitWhereUniqueInput | vwUnitWhereUniqueInput[]
    disconnect?: vwUnitWhereUniqueInput | vwUnitWhereUniqueInput[]
    delete?: vwUnitWhereUniqueInput | vwUnitWhereUniqueInput[]
    connect?: vwUnitWhereUniqueInput | vwUnitWhereUniqueInput[]
    update?: vwUnitUpdateWithWhereUniqueWithoutVwProductInput | vwUnitUpdateWithWhereUniqueWithoutVwProductInput[]
    updateMany?: vwUnitUpdateManyWithWhereWithoutVwProductInput | vwUnitUpdateManyWithWhereWithoutVwProductInput[]
    deleteMany?: vwUnitScalarWhereInput | vwUnitScalarWhereInput[]
  }

  export type vwPRO_2CreateNestedOneWithoutVwUnitInput = {
    create?: XOR<vwPRO_2CreateWithoutVwUnitInput, vwPRO_2UncheckedCreateWithoutVwUnitInput>
    connectOrCreate?: vwPRO_2CreateOrConnectWithoutVwUnitInput
    connect?: vwPRO_2WhereUniqueInput
  }

  export type vwProductCreateNestedOneWithoutVwUnitInput = {
    create?: XOR<vwProductCreateWithoutVwUnitInput, vwProductUncheckedCreateWithoutVwUnitInput>
    connectOrCreate?: vwProductCreateOrConnectWithoutVwUnitInput
    connect?: vwProductWhereUniqueInput
  }

  export type vwProcessCreateNestedManyWithoutVwUnitInput = {
    create?: XOR<vwProcessCreateWithoutVwUnitInput, vwProcessUncheckedCreateWithoutVwUnitInput> | vwProcessCreateWithoutVwUnitInput[] | vwProcessUncheckedCreateWithoutVwUnitInput[]
    connectOrCreate?: vwProcessCreateOrConnectWithoutVwUnitInput | vwProcessCreateOrConnectWithoutVwUnitInput[]
    createMany?: vwProcessCreateManyVwUnitInputEnvelope
    connect?: vwProcessWhereUniqueInput | vwProcessWhereUniqueInput[]
  }

  export type vwProcessUncheckedCreateNestedManyWithoutVwUnitInput = {
    create?: XOR<vwProcessCreateWithoutVwUnitInput, vwProcessUncheckedCreateWithoutVwUnitInput> | vwProcessCreateWithoutVwUnitInput[] | vwProcessUncheckedCreateWithoutVwUnitInput[]
    connectOrCreate?: vwProcessCreateOrConnectWithoutVwUnitInput | vwProcessCreateOrConnectWithoutVwUnitInput[]
    createMany?: vwProcessCreateManyVwUnitInputEnvelope
    connect?: vwProcessWhereUniqueInput | vwProcessWhereUniqueInput[]
  }

  export type vwPRO_2UpdateOneRequiredWithoutVwUnitNestedInput = {
    create?: XOR<vwPRO_2CreateWithoutVwUnitInput, vwPRO_2UncheckedCreateWithoutVwUnitInput>
    connectOrCreate?: vwPRO_2CreateOrConnectWithoutVwUnitInput
    upsert?: vwPRO_2UpsertWithoutVwUnitInput
    connect?: vwPRO_2WhereUniqueInput
    update?: XOR<XOR<vwPRO_2UpdateToOneWithWhereWithoutVwUnitInput, vwPRO_2UpdateWithoutVwUnitInput>, vwPRO_2UncheckedUpdateWithoutVwUnitInput>
  }

  export type vwProductUpdateOneRequiredWithoutVwUnitNestedInput = {
    create?: XOR<vwProductCreateWithoutVwUnitInput, vwProductUncheckedCreateWithoutVwUnitInput>
    connectOrCreate?: vwProductCreateOrConnectWithoutVwUnitInput
    upsert?: vwProductUpsertWithoutVwUnitInput
    connect?: vwProductWhereUniqueInput
    update?: XOR<XOR<vwProductUpdateToOneWithWhereWithoutVwUnitInput, vwProductUpdateWithoutVwUnitInput>, vwProductUncheckedUpdateWithoutVwUnitInput>
  }

  export type vwProcessUpdateManyWithoutVwUnitNestedInput = {
    create?: XOR<vwProcessCreateWithoutVwUnitInput, vwProcessUncheckedCreateWithoutVwUnitInput> | vwProcessCreateWithoutVwUnitInput[] | vwProcessUncheckedCreateWithoutVwUnitInput[]
    connectOrCreate?: vwProcessCreateOrConnectWithoutVwUnitInput | vwProcessCreateOrConnectWithoutVwUnitInput[]
    upsert?: vwProcessUpsertWithWhereUniqueWithoutVwUnitInput | vwProcessUpsertWithWhereUniqueWithoutVwUnitInput[]
    createMany?: vwProcessCreateManyVwUnitInputEnvelope
    set?: vwProcessWhereUniqueInput | vwProcessWhereUniqueInput[]
    disconnect?: vwProcessWhereUniqueInput | vwProcessWhereUniqueInput[]
    delete?: vwProcessWhereUniqueInput | vwProcessWhereUniqueInput[]
    connect?: vwProcessWhereUniqueInput | vwProcessWhereUniqueInput[]
    update?: vwProcessUpdateWithWhereUniqueWithoutVwUnitInput | vwProcessUpdateWithWhereUniqueWithoutVwUnitInput[]
    updateMany?: vwProcessUpdateManyWithWhereWithoutVwUnitInput | vwProcessUpdateManyWithWhereWithoutVwUnitInput[]
    deleteMany?: vwProcessScalarWhereInput | vwProcessScalarWhereInput[]
  }

  export type vwProcessUncheckedUpdateManyWithoutVwUnitNestedInput = {
    create?: XOR<vwProcessCreateWithoutVwUnitInput, vwProcessUncheckedCreateWithoutVwUnitInput> | vwProcessCreateWithoutVwUnitInput[] | vwProcessUncheckedCreateWithoutVwUnitInput[]
    connectOrCreate?: vwProcessCreateOrConnectWithoutVwUnitInput | vwProcessCreateOrConnectWithoutVwUnitInput[]
    upsert?: vwProcessUpsertWithWhereUniqueWithoutVwUnitInput | vwProcessUpsertWithWhereUniqueWithoutVwUnitInput[]
    createMany?: vwProcessCreateManyVwUnitInputEnvelope
    set?: vwProcessWhereUniqueInput | vwProcessWhereUniqueInput[]
    disconnect?: vwProcessWhereUniqueInput | vwProcessWhereUniqueInput[]
    delete?: vwProcessWhereUniqueInput | vwProcessWhereUniqueInput[]
    connect?: vwProcessWhereUniqueInput | vwProcessWhereUniqueInput[]
    update?: vwProcessUpdateWithWhereUniqueWithoutVwUnitInput | vwProcessUpdateWithWhereUniqueWithoutVwUnitInput[]
    updateMany?: vwProcessUpdateManyWithWhereWithoutVwUnitInput | vwProcessUpdateManyWithWhereWithoutVwUnitInput[]
    deleteMany?: vwProcessScalarWhereInput | vwProcessScalarWhereInput[]
  }

  export type vwProductCreateNestedManyWithoutVwProductGroupInput = {
    create?: XOR<vwProductCreateWithoutVwProductGroupInput, vwProductUncheckedCreateWithoutVwProductGroupInput> | vwProductCreateWithoutVwProductGroupInput[] | vwProductUncheckedCreateWithoutVwProductGroupInput[]
    connectOrCreate?: vwProductCreateOrConnectWithoutVwProductGroupInput | vwProductCreateOrConnectWithoutVwProductGroupInput[]
    createMany?: vwProductCreateManyVwProductGroupInputEnvelope
    connect?: vwProductWhereUniqueInput | vwProductWhereUniqueInput[]
  }

  export type vwProductUncheckedCreateNestedManyWithoutVwProductGroupInput = {
    create?: XOR<vwProductCreateWithoutVwProductGroupInput, vwProductUncheckedCreateWithoutVwProductGroupInput> | vwProductCreateWithoutVwProductGroupInput[] | vwProductUncheckedCreateWithoutVwProductGroupInput[]
    connectOrCreate?: vwProductCreateOrConnectWithoutVwProductGroupInput | vwProductCreateOrConnectWithoutVwProductGroupInput[]
    createMany?: vwProductCreateManyVwProductGroupInputEnvelope
    connect?: vwProductWhereUniqueInput | vwProductWhereUniqueInput[]
  }

  export type vwProductUpdateManyWithoutVwProductGroupNestedInput = {
    create?: XOR<vwProductCreateWithoutVwProductGroupInput, vwProductUncheckedCreateWithoutVwProductGroupInput> | vwProductCreateWithoutVwProductGroupInput[] | vwProductUncheckedCreateWithoutVwProductGroupInput[]
    connectOrCreate?: vwProductCreateOrConnectWithoutVwProductGroupInput | vwProductCreateOrConnectWithoutVwProductGroupInput[]
    upsert?: vwProductUpsertWithWhereUniqueWithoutVwProductGroupInput | vwProductUpsertWithWhereUniqueWithoutVwProductGroupInput[]
    createMany?: vwProductCreateManyVwProductGroupInputEnvelope
    set?: vwProductWhereUniqueInput | vwProductWhereUniqueInput[]
    disconnect?: vwProductWhereUniqueInput | vwProductWhereUniqueInput[]
    delete?: vwProductWhereUniqueInput | vwProductWhereUniqueInput[]
    connect?: vwProductWhereUniqueInput | vwProductWhereUniqueInput[]
    update?: vwProductUpdateWithWhereUniqueWithoutVwProductGroupInput | vwProductUpdateWithWhereUniqueWithoutVwProductGroupInput[]
    updateMany?: vwProductUpdateManyWithWhereWithoutVwProductGroupInput | vwProductUpdateManyWithWhereWithoutVwProductGroupInput[]
    deleteMany?: vwProductScalarWhereInput | vwProductScalarWhereInput[]
  }

  export type vwProductUncheckedUpdateManyWithoutVwProductGroupNestedInput = {
    create?: XOR<vwProductCreateWithoutVwProductGroupInput, vwProductUncheckedCreateWithoutVwProductGroupInput> | vwProductCreateWithoutVwProductGroupInput[] | vwProductUncheckedCreateWithoutVwProductGroupInput[]
    connectOrCreate?: vwProductCreateOrConnectWithoutVwProductGroupInput | vwProductCreateOrConnectWithoutVwProductGroupInput[]
    upsert?: vwProductUpsertWithWhereUniqueWithoutVwProductGroupInput | vwProductUpsertWithWhereUniqueWithoutVwProductGroupInput[]
    createMany?: vwProductCreateManyVwProductGroupInputEnvelope
    set?: vwProductWhereUniqueInput | vwProductWhereUniqueInput[]
    disconnect?: vwProductWhereUniqueInput | vwProductWhereUniqueInput[]
    delete?: vwProductWhereUniqueInput | vwProductWhereUniqueInput[]
    connect?: vwProductWhereUniqueInput | vwProductWhereUniqueInput[]
    update?: vwProductUpdateWithWhereUniqueWithoutVwProductGroupInput | vwProductUpdateWithWhereUniqueWithoutVwProductGroupInput[]
    updateMany?: vwProductUpdateManyWithWhereWithoutVwProductGroupInput | vwProductUpdateManyWithWhereWithoutVwProductGroupInput[]
    deleteMany?: vwProductScalarWhereInput | vwProductScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ProcessAssignCreateWithoutProcessInput = {
    ID: number
    UserID: string
    EmployeeNumber?: string | null
    Status: number
    Type?: number | null
    Created: Date | string
    CreatedBy: string
    LastModified: Date | string
    LastModifiedBy: string
    remark?: string | null
    ProcessActivity?: ProcessActivityCreateNestedManyWithoutProcessAssignInput
  }

  export type ProcessAssignUncheckedCreateWithoutProcessInput = {
    ID: number
    UserID: string
    EmployeeNumber?: string | null
    Status: number
    Type?: number | null
    Created: Date | string
    CreatedBy: string
    LastModified: Date | string
    LastModifiedBy: string
    remark?: string | null
    ProcessActivity?: ProcessActivityUncheckedCreateNestedManyWithoutProcessAssignInput
  }

  export type ProcessAssignCreateOrConnectWithoutProcessInput = {
    where: ProcessAssignWhereUniqueInput
    create: XOR<ProcessAssignCreateWithoutProcessInput, ProcessAssignUncheckedCreateWithoutProcessInput>
  }

  export type ProcessAssignCreateManyProcessInputEnvelope = {
    data: ProcessAssignCreateManyProcessInput | ProcessAssignCreateManyProcessInput[]
  }

  export type ProcessAssignUpsertWithWhereUniqueWithoutProcessInput = {
    where: ProcessAssignWhereUniqueInput
    update: XOR<ProcessAssignUpdateWithoutProcessInput, ProcessAssignUncheckedUpdateWithoutProcessInput>
    create: XOR<ProcessAssignCreateWithoutProcessInput, ProcessAssignUncheckedCreateWithoutProcessInput>
  }

  export type ProcessAssignUpdateWithWhereUniqueWithoutProcessInput = {
    where: ProcessAssignWhereUniqueInput
    data: XOR<ProcessAssignUpdateWithoutProcessInput, ProcessAssignUncheckedUpdateWithoutProcessInput>
  }

  export type ProcessAssignUpdateManyWithWhereWithoutProcessInput = {
    where: ProcessAssignScalarWhereInput
    data: XOR<ProcessAssignUpdateManyMutationInput, ProcessAssignUncheckedUpdateManyWithoutProcessInput>
  }

  export type ProcessAssignScalarWhereInput = {
    AND?: ProcessAssignScalarWhereInput | ProcessAssignScalarWhereInput[]
    OR?: ProcessAssignScalarWhereInput[]
    NOT?: ProcessAssignScalarWhereInput | ProcessAssignScalarWhereInput[]
    ID?: IntFilter<"ProcessAssign"> | number
    ProcessID?: IntFilter<"ProcessAssign"> | number
    UserID?: StringFilter<"ProcessAssign"> | string
    EmployeeNumber?: StringNullableFilter<"ProcessAssign"> | string | null
    Status?: IntFilter<"ProcessAssign"> | number
    Type?: IntNullableFilter<"ProcessAssign"> | number | null
    Created?: DateTimeFilter<"ProcessAssign"> | Date | string
    CreatedBy?: StringFilter<"ProcessAssign"> | string
    LastModified?: DateTimeFilter<"ProcessAssign"> | Date | string
    LastModifiedBy?: StringFilter<"ProcessAssign"> | string
    remark?: StringNullableFilter<"ProcessAssign"> | string | null
  }

  export type ProcessAssignCreateWithoutProcessActivityInput = {
    ID: number
    UserID: string
    EmployeeNumber?: string | null
    Status: number
    Type?: number | null
    Created: Date | string
    CreatedBy: string
    LastModified: Date | string
    LastModifiedBy: string
    remark?: string | null
    Process: ProcessCreateNestedOneWithoutProcessAssignInput
  }

  export type ProcessAssignUncheckedCreateWithoutProcessActivityInput = {
    ID: number
    ProcessID: number
    UserID: string
    EmployeeNumber?: string | null
    Status: number
    Type?: number | null
    Created: Date | string
    CreatedBy: string
    LastModified: Date | string
    LastModifiedBy: string
    remark?: string | null
  }

  export type ProcessAssignCreateOrConnectWithoutProcessActivityInput = {
    where: ProcessAssignWhereUniqueInput
    create: XOR<ProcessAssignCreateWithoutProcessActivityInput, ProcessAssignUncheckedCreateWithoutProcessActivityInput>
  }

  export type ProcessAssignUpsertWithoutProcessActivityInput = {
    update: XOR<ProcessAssignUpdateWithoutProcessActivityInput, ProcessAssignUncheckedUpdateWithoutProcessActivityInput>
    create: XOR<ProcessAssignCreateWithoutProcessActivityInput, ProcessAssignUncheckedCreateWithoutProcessActivityInput>
    where?: ProcessAssignWhereInput
  }

  export type ProcessAssignUpdateToOneWithWhereWithoutProcessActivityInput = {
    where?: ProcessAssignWhereInput
    data: XOR<ProcessAssignUpdateWithoutProcessActivityInput, ProcessAssignUncheckedUpdateWithoutProcessActivityInput>
  }

  export type ProcessAssignUpdateWithoutProcessActivityInput = {
    ID?: IntFieldUpdateOperationsInput | number
    UserID?: StringFieldUpdateOperationsInput | string
    EmployeeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: IntFieldUpdateOperationsInput | number
    Type?: NullableIntFieldUpdateOperationsInput | number | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    LastModifiedBy?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    Process?: ProcessUpdateOneRequiredWithoutProcessAssignNestedInput
  }

  export type ProcessAssignUncheckedUpdateWithoutProcessActivityInput = {
    ID?: IntFieldUpdateOperationsInput | number
    ProcessID?: IntFieldUpdateOperationsInput | number
    UserID?: StringFieldUpdateOperationsInput | string
    EmployeeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: IntFieldUpdateOperationsInput | number
    Type?: NullableIntFieldUpdateOperationsInput | number | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    LastModifiedBy?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessActivityCreateWithoutProcessAssignInput = {
    ID: number
    Status: number
    ReasonPauseID?: number | null
    ActivityDateTime: Date | string
    ActualHours?: Decimal | DecimalJsLike | number | string | null
    Created: Date | string
    CreatedBy: string
    LastModified: Date | string
    LastModifiedBy: string
  }

  export type ProcessActivityUncheckedCreateWithoutProcessAssignInput = {
    ID: number
    Status: number
    ReasonPauseID?: number | null
    ActivityDateTime: Date | string
    ActualHours?: Decimal | DecimalJsLike | number | string | null
    Created: Date | string
    CreatedBy: string
    LastModified: Date | string
    LastModifiedBy: string
  }

  export type ProcessActivityCreateOrConnectWithoutProcessAssignInput = {
    where: ProcessActivityWhereUniqueInput
    create: XOR<ProcessActivityCreateWithoutProcessAssignInput, ProcessActivityUncheckedCreateWithoutProcessAssignInput>
  }

  export type ProcessActivityCreateManyProcessAssignInputEnvelope = {
    data: ProcessActivityCreateManyProcessAssignInput | ProcessActivityCreateManyProcessAssignInput[]
  }

  export type ProcessCreateWithoutProcessAssignInput = {
    ID: number
    UnitID: number
    MasterProcessID: number
    Status: number
    PlanStartDate: Date | string
    PlanEndDate?: Date | string | null
    ActualStartDate?: Date | string | null
    ActualEndDate?: Date | string | null
    IsHold: boolean
    HoldDate?: Date | string | null
    Created: Date | string
    CreatedBy: string
    LastModified: Date | string
    LastModifiedBy: string
  }

  export type ProcessUncheckedCreateWithoutProcessAssignInput = {
    ID: number
    UnitID: number
    MasterProcessID: number
    Status: number
    PlanStartDate: Date | string
    PlanEndDate?: Date | string | null
    ActualStartDate?: Date | string | null
    ActualEndDate?: Date | string | null
    IsHold: boolean
    HoldDate?: Date | string | null
    Created: Date | string
    CreatedBy: string
    LastModified: Date | string
    LastModifiedBy: string
  }

  export type ProcessCreateOrConnectWithoutProcessAssignInput = {
    where: ProcessWhereUniqueInput
    create: XOR<ProcessCreateWithoutProcessAssignInput, ProcessUncheckedCreateWithoutProcessAssignInput>
  }

  export type ProcessActivityUpsertWithWhereUniqueWithoutProcessAssignInput = {
    where: ProcessActivityWhereUniqueInput
    update: XOR<ProcessActivityUpdateWithoutProcessAssignInput, ProcessActivityUncheckedUpdateWithoutProcessAssignInput>
    create: XOR<ProcessActivityCreateWithoutProcessAssignInput, ProcessActivityUncheckedCreateWithoutProcessAssignInput>
  }

  export type ProcessActivityUpdateWithWhereUniqueWithoutProcessAssignInput = {
    where: ProcessActivityWhereUniqueInput
    data: XOR<ProcessActivityUpdateWithoutProcessAssignInput, ProcessActivityUncheckedUpdateWithoutProcessAssignInput>
  }

  export type ProcessActivityUpdateManyWithWhereWithoutProcessAssignInput = {
    where: ProcessActivityScalarWhereInput
    data: XOR<ProcessActivityUpdateManyMutationInput, ProcessActivityUncheckedUpdateManyWithoutProcessAssignInput>
  }

  export type ProcessActivityScalarWhereInput = {
    AND?: ProcessActivityScalarWhereInput | ProcessActivityScalarWhereInput[]
    OR?: ProcessActivityScalarWhereInput[]
    NOT?: ProcessActivityScalarWhereInput | ProcessActivityScalarWhereInput[]
    ID?: IntFilter<"ProcessActivity"> | number
    ProcessAssignID?: IntFilter<"ProcessActivity"> | number
    Status?: IntFilter<"ProcessActivity"> | number
    ReasonPauseID?: IntNullableFilter<"ProcessActivity"> | number | null
    ActivityDateTime?: DateTimeFilter<"ProcessActivity"> | Date | string
    ActualHours?: DecimalNullableFilter<"ProcessActivity"> | Decimal | DecimalJsLike | number | string | null
    Created?: DateTimeFilter<"ProcessActivity"> | Date | string
    CreatedBy?: StringFilter<"ProcessActivity"> | string
    LastModified?: DateTimeFilter<"ProcessActivity"> | Date | string
    LastModifiedBy?: StringFilter<"ProcessActivity"> | string
  }

  export type ProcessUpsertWithoutProcessAssignInput = {
    update: XOR<ProcessUpdateWithoutProcessAssignInput, ProcessUncheckedUpdateWithoutProcessAssignInput>
    create: XOR<ProcessCreateWithoutProcessAssignInput, ProcessUncheckedCreateWithoutProcessAssignInput>
    where?: ProcessWhereInput
  }

  export type ProcessUpdateToOneWithWhereWithoutProcessAssignInput = {
    where?: ProcessWhereInput
    data: XOR<ProcessUpdateWithoutProcessAssignInput, ProcessUncheckedUpdateWithoutProcessAssignInput>
  }

  export type ProcessUpdateWithoutProcessAssignInput = {
    ID?: IntFieldUpdateOperationsInput | number
    UnitID?: IntFieldUpdateOperationsInput | number
    MasterProcessID?: IntFieldUpdateOperationsInput | number
    Status?: IntFieldUpdateOperationsInput | number
    PlanStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    PlanEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ActualEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsHold?: BoolFieldUpdateOperationsInput | boolean
    HoldDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    LastModifiedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProcessUncheckedUpdateWithoutProcessAssignInput = {
    ID?: IntFieldUpdateOperationsInput | number
    UnitID?: IntFieldUpdateOperationsInput | number
    MasterProcessID?: IntFieldUpdateOperationsInput | number
    Status?: IntFieldUpdateOperationsInput | number
    PlanStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    PlanEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ActualEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsHold?: BoolFieldUpdateOperationsInput | boolean
    HoldDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    LastModifiedBy?: StringFieldUpdateOperationsInput | string
  }

  export type vwUnitCreateWithoutVwPROInput = {
    UnitID: number
    UnitSerialNumber: string
    UnitChasisNumber?: string | null
    UnitDueDate: Date | string
    UnitPlanStartDate?: Date | string | null
    UnitPlanEndDate?: Date | string | null
    UnitPlanDuration?: number | null
    UnitActualStartDate?: Date | string | null
    UnitActualEndDate?: Date | string | null
    UnitActualDuration?: number | null
    Unit_Status: string
    UnitMPSDueDate?: Date | string | null
    UnitActualDeliveryDate?: Date | string | null
    UnitActualHoursCompleted?: Decimal | DecimalJsLike | number | string | null
    UnitDelayInDay?: number | null
    SOUnitprice?: Decimal | DecimalJsLike | number | string | null
    SalesOrderID?: number | null
    UnitProcessLastStatus: string
    UnitProcessLastActualStartDate?: Date | string | null
    UnitProcessLastPlanStartDate?: Date | string | null
    IsHold: boolean
    LastModified: Date | string
    vwProduct: vwProductCreateNestedOneWithoutVwUnitInput
    vwProcess?: vwProcessCreateNestedManyWithoutVwUnitInput
  }

  export type vwUnitUncheckedCreateWithoutVwPROInput = {
    UnitID: number
    ProductID: number
    UnitSerialNumber: string
    UnitChasisNumber?: string | null
    UnitDueDate: Date | string
    UnitPlanStartDate?: Date | string | null
    UnitPlanEndDate?: Date | string | null
    UnitPlanDuration?: number | null
    UnitActualStartDate?: Date | string | null
    UnitActualEndDate?: Date | string | null
    UnitActualDuration?: number | null
    Unit_Status: string
    UnitMPSDueDate?: Date | string | null
    UnitActualDeliveryDate?: Date | string | null
    UnitActualHoursCompleted?: Decimal | DecimalJsLike | number | string | null
    UnitDelayInDay?: number | null
    SOUnitprice?: Decimal | DecimalJsLike | number | string | null
    SalesOrderID?: number | null
    UnitProcessLastStatus: string
    UnitProcessLastActualStartDate?: Date | string | null
    UnitProcessLastPlanStartDate?: Date | string | null
    IsHold: boolean
    LastModified: Date | string
    vwProcess?: vwProcessUncheckedCreateNestedManyWithoutVwUnitInput
  }

  export type vwUnitCreateOrConnectWithoutVwPROInput = {
    where: vwUnitWhereUniqueInput
    create: XOR<vwUnitCreateWithoutVwPROInput, vwUnitUncheckedCreateWithoutVwPROInput>
  }

  export type vwUnitCreateManyVwPROInputEnvelope = {
    data: vwUnitCreateManyVwPROInput | vwUnitCreateManyVwPROInput[]
  }

  export type vwUnitUpsertWithWhereUniqueWithoutVwPROInput = {
    where: vwUnitWhereUniqueInput
    update: XOR<vwUnitUpdateWithoutVwPROInput, vwUnitUncheckedUpdateWithoutVwPROInput>
    create: XOR<vwUnitCreateWithoutVwPROInput, vwUnitUncheckedCreateWithoutVwPROInput>
  }

  export type vwUnitUpdateWithWhereUniqueWithoutVwPROInput = {
    where: vwUnitWhereUniqueInput
    data: XOR<vwUnitUpdateWithoutVwPROInput, vwUnitUncheckedUpdateWithoutVwPROInput>
  }

  export type vwUnitUpdateManyWithWhereWithoutVwPROInput = {
    where: vwUnitScalarWhereInput
    data: XOR<vwUnitUpdateManyMutationInput, vwUnitUncheckedUpdateManyWithoutVwPROInput>
  }

  export type vwUnitScalarWhereInput = {
    AND?: vwUnitScalarWhereInput | vwUnitScalarWhereInput[]
    OR?: vwUnitScalarWhereInput[]
    NOT?: vwUnitScalarWhereInput | vwUnitScalarWhereInput[]
    UnitID?: IntFilter<"vwUnit"> | number
    PROID?: IntFilter<"vwUnit"> | number
    ProductID?: IntFilter<"vwUnit"> | number
    UnitSerialNumber?: StringFilter<"vwUnit"> | string
    UnitChasisNumber?: StringNullableFilter<"vwUnit"> | string | null
    UnitDueDate?: DateTimeFilter<"vwUnit"> | Date | string
    UnitPlanStartDate?: DateTimeNullableFilter<"vwUnit"> | Date | string | null
    UnitPlanEndDate?: DateTimeNullableFilter<"vwUnit"> | Date | string | null
    UnitPlanDuration?: IntNullableFilter<"vwUnit"> | number | null
    UnitActualStartDate?: DateTimeNullableFilter<"vwUnit"> | Date | string | null
    UnitActualEndDate?: DateTimeNullableFilter<"vwUnit"> | Date | string | null
    UnitActualDuration?: IntNullableFilter<"vwUnit"> | number | null
    Unit_Status?: StringFilter<"vwUnit"> | string
    UnitMPSDueDate?: DateTimeNullableFilter<"vwUnit"> | Date | string | null
    UnitActualDeliveryDate?: DateTimeNullableFilter<"vwUnit"> | Date | string | null
    UnitActualHoursCompleted?: DecimalNullableFilter<"vwUnit"> | Decimal | DecimalJsLike | number | string | null
    UnitDelayInDay?: IntNullableFilter<"vwUnit"> | number | null
    SOUnitprice?: DecimalNullableFilter<"vwUnit"> | Decimal | DecimalJsLike | number | string | null
    SalesOrderID?: IntNullableFilter<"vwUnit"> | number | null
    UnitProcessLastStatus?: StringFilter<"vwUnit"> | string
    UnitProcessLastActualStartDate?: DateTimeNullableFilter<"vwUnit"> | Date | string | null
    UnitProcessLastPlanStartDate?: DateTimeNullableFilter<"vwUnit"> | Date | string | null
    IsHold?: BoolFilter<"vwUnit"> | boolean
    LastModified?: DateTimeFilter<"vwUnit"> | Date | string
  }

  export type vwUnitCreateWithoutVwProcessInput = {
    UnitID: number
    UnitSerialNumber: string
    UnitChasisNumber?: string | null
    UnitDueDate: Date | string
    UnitPlanStartDate?: Date | string | null
    UnitPlanEndDate?: Date | string | null
    UnitPlanDuration?: number | null
    UnitActualStartDate?: Date | string | null
    UnitActualEndDate?: Date | string | null
    UnitActualDuration?: number | null
    Unit_Status: string
    UnitMPSDueDate?: Date | string | null
    UnitActualDeliveryDate?: Date | string | null
    UnitActualHoursCompleted?: Decimal | DecimalJsLike | number | string | null
    UnitDelayInDay?: number | null
    SOUnitprice?: Decimal | DecimalJsLike | number | string | null
    SalesOrderID?: number | null
    UnitProcessLastStatus: string
    UnitProcessLastActualStartDate?: Date | string | null
    UnitProcessLastPlanStartDate?: Date | string | null
    IsHold: boolean
    LastModified: Date | string
    vwPRO: vwPRO_2CreateNestedOneWithoutVwUnitInput
    vwProduct: vwProductCreateNestedOneWithoutVwUnitInput
  }

  export type vwUnitUncheckedCreateWithoutVwProcessInput = {
    UnitID: number
    PROID: number
    ProductID: number
    UnitSerialNumber: string
    UnitChasisNumber?: string | null
    UnitDueDate: Date | string
    UnitPlanStartDate?: Date | string | null
    UnitPlanEndDate?: Date | string | null
    UnitPlanDuration?: number | null
    UnitActualStartDate?: Date | string | null
    UnitActualEndDate?: Date | string | null
    UnitActualDuration?: number | null
    Unit_Status: string
    UnitMPSDueDate?: Date | string | null
    UnitActualDeliveryDate?: Date | string | null
    UnitActualHoursCompleted?: Decimal | DecimalJsLike | number | string | null
    UnitDelayInDay?: number | null
    SOUnitprice?: Decimal | DecimalJsLike | number | string | null
    SalesOrderID?: number | null
    UnitProcessLastStatus: string
    UnitProcessLastActualStartDate?: Date | string | null
    UnitProcessLastPlanStartDate?: Date | string | null
    IsHold: boolean
    LastModified: Date | string
  }

  export type vwUnitCreateOrConnectWithoutVwProcessInput = {
    where: vwUnitWhereUniqueInput
    create: XOR<vwUnitCreateWithoutVwProcessInput, vwUnitUncheckedCreateWithoutVwProcessInput>
  }

  export type vwProcessAssign2AllCreateWithoutVwProcessInput = {
    ID: number
    UnitID?: number | null
    LeaderName: string
    OperatorName?: string | null
    NRP?: string | null
    TglAssign: Date | string
    ProcessassignStatus?: string | null
    Startassign?: string | null
    Stopassign?: string | null
    ProcessAssignType?: string | null
    LastModified: Date | string
    lastStart?: Date | string | null
    lastStop?: Date | string | null
    remark?: string | null
    IsActive?: boolean | null
    vwProcessActivity?: vwProcessActivityCreateNestedManyWithoutVwProcessAssignInput
  }

  export type vwProcessAssign2AllUncheckedCreateWithoutVwProcessInput = {
    ID: number
    UnitID?: number | null
    LeaderName: string
    OperatorName?: string | null
    NRP?: string | null
    TglAssign: Date | string
    ProcessassignStatus?: string | null
    Startassign?: string | null
    Stopassign?: string | null
    ProcessAssignType?: string | null
    LastModified: Date | string
    lastStart?: Date | string | null
    lastStop?: Date | string | null
    remark?: string | null
    IsActive?: boolean | null
    vwProcessActivity?: vwProcessActivityUncheckedCreateNestedManyWithoutVwProcessAssignInput
  }

  export type vwProcessAssign2AllCreateOrConnectWithoutVwProcessInput = {
    where: vwProcessAssign2AllWhereUniqueInput
    create: XOR<vwProcessAssign2AllCreateWithoutVwProcessInput, vwProcessAssign2AllUncheckedCreateWithoutVwProcessInput>
  }

  export type vwProcessAssign2AllCreateManyVwProcessInputEnvelope = {
    data: vwProcessAssign2AllCreateManyVwProcessInput | vwProcessAssign2AllCreateManyVwProcessInput[]
  }

  export type vwUnitUpsertWithoutVwProcessInput = {
    update: XOR<vwUnitUpdateWithoutVwProcessInput, vwUnitUncheckedUpdateWithoutVwProcessInput>
    create: XOR<vwUnitCreateWithoutVwProcessInput, vwUnitUncheckedCreateWithoutVwProcessInput>
    where?: vwUnitWhereInput
  }

  export type vwUnitUpdateToOneWithWhereWithoutVwProcessInput = {
    where?: vwUnitWhereInput
    data: XOR<vwUnitUpdateWithoutVwProcessInput, vwUnitUncheckedUpdateWithoutVwProcessInput>
  }

  export type vwUnitUpdateWithoutVwProcessInput = {
    UnitID?: IntFieldUpdateOperationsInput | number
    UnitSerialNumber?: StringFieldUpdateOperationsInput | string
    UnitChasisNumber?: NullableStringFieldUpdateOperationsInput | string | null
    UnitDueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UnitPlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitPlanEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitPlanDuration?: NullableIntFieldUpdateOperationsInput | number | null
    UnitActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    Unit_Status?: StringFieldUpdateOperationsInput | string
    UnitMPSDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualDeliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualHoursCompleted?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    UnitDelayInDay?: NullableIntFieldUpdateOperationsInput | number | null
    SOUnitprice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    SalesOrderID?: NullableIntFieldUpdateOperationsInput | number | null
    UnitProcessLastStatus?: StringFieldUpdateOperationsInput | string
    UnitProcessLastActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitProcessLastPlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsHold?: BoolFieldUpdateOperationsInput | boolean
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    vwPRO?: vwPRO_2UpdateOneRequiredWithoutVwUnitNestedInput
    vwProduct?: vwProductUpdateOneRequiredWithoutVwUnitNestedInput
  }

  export type vwUnitUncheckedUpdateWithoutVwProcessInput = {
    UnitID?: IntFieldUpdateOperationsInput | number
    PROID?: IntFieldUpdateOperationsInput | number
    ProductID?: IntFieldUpdateOperationsInput | number
    UnitSerialNumber?: StringFieldUpdateOperationsInput | string
    UnitChasisNumber?: NullableStringFieldUpdateOperationsInput | string | null
    UnitDueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UnitPlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitPlanEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitPlanDuration?: NullableIntFieldUpdateOperationsInput | number | null
    UnitActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    Unit_Status?: StringFieldUpdateOperationsInput | string
    UnitMPSDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualDeliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualHoursCompleted?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    UnitDelayInDay?: NullableIntFieldUpdateOperationsInput | number | null
    SOUnitprice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    SalesOrderID?: NullableIntFieldUpdateOperationsInput | number | null
    UnitProcessLastStatus?: StringFieldUpdateOperationsInput | string
    UnitProcessLastActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitProcessLastPlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsHold?: BoolFieldUpdateOperationsInput | boolean
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vwProcessAssign2AllUpsertWithWhereUniqueWithoutVwProcessInput = {
    where: vwProcessAssign2AllWhereUniqueInput
    update: XOR<vwProcessAssign2AllUpdateWithoutVwProcessInput, vwProcessAssign2AllUncheckedUpdateWithoutVwProcessInput>
    create: XOR<vwProcessAssign2AllCreateWithoutVwProcessInput, vwProcessAssign2AllUncheckedCreateWithoutVwProcessInput>
  }

  export type vwProcessAssign2AllUpdateWithWhereUniqueWithoutVwProcessInput = {
    where: vwProcessAssign2AllWhereUniqueInput
    data: XOR<vwProcessAssign2AllUpdateWithoutVwProcessInput, vwProcessAssign2AllUncheckedUpdateWithoutVwProcessInput>
  }

  export type vwProcessAssign2AllUpdateManyWithWhereWithoutVwProcessInput = {
    where: vwProcessAssign2AllScalarWhereInput
    data: XOR<vwProcessAssign2AllUpdateManyMutationInput, vwProcessAssign2AllUncheckedUpdateManyWithoutVwProcessInput>
  }

  export type vwProcessAssign2AllScalarWhereInput = {
    AND?: vwProcessAssign2AllScalarWhereInput | vwProcessAssign2AllScalarWhereInput[]
    OR?: vwProcessAssign2AllScalarWhereInput[]
    NOT?: vwProcessAssign2AllScalarWhereInput | vwProcessAssign2AllScalarWhereInput[]
    ID?: IntFilter<"vwProcessAssign2All"> | number
    ProcessID?: IntFilter<"vwProcessAssign2All"> | number
    UnitID?: IntNullableFilter<"vwProcessAssign2All"> | number | null
    LeaderName?: StringFilter<"vwProcessAssign2All"> | string
    OperatorName?: StringNullableFilter<"vwProcessAssign2All"> | string | null
    NRP?: StringNullableFilter<"vwProcessAssign2All"> | string | null
    TglAssign?: DateTimeFilter<"vwProcessAssign2All"> | Date | string
    ProcessassignStatus?: StringNullableFilter<"vwProcessAssign2All"> | string | null
    Startassign?: StringNullableFilter<"vwProcessAssign2All"> | string | null
    Stopassign?: StringNullableFilter<"vwProcessAssign2All"> | string | null
    ProcessAssignType?: StringNullableFilter<"vwProcessAssign2All"> | string | null
    LastModified?: DateTimeFilter<"vwProcessAssign2All"> | Date | string
    lastStart?: DateTimeNullableFilter<"vwProcessAssign2All"> | Date | string | null
    lastStop?: DateTimeNullableFilter<"vwProcessAssign2All"> | Date | string | null
    remark?: StringNullableFilter<"vwProcessAssign2All"> | string | null
    IsActive?: BoolNullableFilter<"vwProcessAssign2All"> | boolean | null
  }

  export type vwProcessAssign2AllCreateWithoutVwProcessActivityInput = {
    ID: number
    UnitID?: number | null
    LeaderName: string
    OperatorName?: string | null
    NRP?: string | null
    TglAssign: Date | string
    ProcessassignStatus?: string | null
    Startassign?: string | null
    Stopassign?: string | null
    ProcessAssignType?: string | null
    LastModified: Date | string
    lastStart?: Date | string | null
    lastStop?: Date | string | null
    remark?: string | null
    IsActive?: boolean | null
    vwProcess: vwProcessCreateNestedOneWithoutVwProcessAssignInput
  }

  export type vwProcessAssign2AllUncheckedCreateWithoutVwProcessActivityInput = {
    ID: number
    ProcessID: number
    UnitID?: number | null
    LeaderName: string
    OperatorName?: string | null
    NRP?: string | null
    TglAssign: Date | string
    ProcessassignStatus?: string | null
    Startassign?: string | null
    Stopassign?: string | null
    ProcessAssignType?: string | null
    LastModified: Date | string
    lastStart?: Date | string | null
    lastStop?: Date | string | null
    remark?: string | null
    IsActive?: boolean | null
  }

  export type vwProcessAssign2AllCreateOrConnectWithoutVwProcessActivityInput = {
    where: vwProcessAssign2AllWhereUniqueInput
    create: XOR<vwProcessAssign2AllCreateWithoutVwProcessActivityInput, vwProcessAssign2AllUncheckedCreateWithoutVwProcessActivityInput>
  }

  export type vwProcessAssign2AllUpsertWithoutVwProcessActivityInput = {
    update: XOR<vwProcessAssign2AllUpdateWithoutVwProcessActivityInput, vwProcessAssign2AllUncheckedUpdateWithoutVwProcessActivityInput>
    create: XOR<vwProcessAssign2AllCreateWithoutVwProcessActivityInput, vwProcessAssign2AllUncheckedCreateWithoutVwProcessActivityInput>
    where?: vwProcessAssign2AllWhereInput
  }

  export type vwProcessAssign2AllUpdateToOneWithWhereWithoutVwProcessActivityInput = {
    where?: vwProcessAssign2AllWhereInput
    data: XOR<vwProcessAssign2AllUpdateWithoutVwProcessActivityInput, vwProcessAssign2AllUncheckedUpdateWithoutVwProcessActivityInput>
  }

  export type vwProcessAssign2AllUpdateWithoutVwProcessActivityInput = {
    ID?: IntFieldUpdateOperationsInput | number
    UnitID?: NullableIntFieldUpdateOperationsInput | number | null
    LeaderName?: StringFieldUpdateOperationsInput | string
    OperatorName?: NullableStringFieldUpdateOperationsInput | string | null
    NRP?: NullableStringFieldUpdateOperationsInput | string | null
    TglAssign?: DateTimeFieldUpdateOperationsInput | Date | string
    ProcessassignStatus?: NullableStringFieldUpdateOperationsInput | string | null
    Startassign?: NullableStringFieldUpdateOperationsInput | string | null
    Stopassign?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessAssignType?: NullableStringFieldUpdateOperationsInput | string | null
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    lastStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastStop?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    IsActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vwProcess?: vwProcessUpdateOneRequiredWithoutVwProcessAssignNestedInput
  }

  export type vwProcessAssign2AllUncheckedUpdateWithoutVwProcessActivityInput = {
    ID?: IntFieldUpdateOperationsInput | number
    ProcessID?: IntFieldUpdateOperationsInput | number
    UnitID?: NullableIntFieldUpdateOperationsInput | number | null
    LeaderName?: StringFieldUpdateOperationsInput | string
    OperatorName?: NullableStringFieldUpdateOperationsInput | string | null
    NRP?: NullableStringFieldUpdateOperationsInput | string | null
    TglAssign?: DateTimeFieldUpdateOperationsInput | Date | string
    ProcessassignStatus?: NullableStringFieldUpdateOperationsInput | string | null
    Startassign?: NullableStringFieldUpdateOperationsInput | string | null
    Stopassign?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessAssignType?: NullableStringFieldUpdateOperationsInput | string | null
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    lastStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastStop?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    IsActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type vwProcessCreateWithoutVwProcessAssignInput = {
    ProcessID: number
    ProcessStatus?: string | null
    ProcessPlanStartDate?: Date | string | null
    ProcessPlanEndDate?: Date | string | null
    ProcessPlanDuration?: number | null
    ProcessActualStartDate?: Date | string | null
    ProcessActualEndDate?: Date | string | null
    ProcessActualDuration?: number | null
    MasterProcessName?: string | null
    StandardMH?: Decimal | DecimalJsLike | number | string | null
    ProcessGroupName?: string | null
    ProcessDelayInDay?: number | null
    ProcessOrder?: number | null
    LastModified: Date | string
    MasterProcessID: number
    vwUnit: vwUnitCreateNestedOneWithoutVwProcessInput
  }

  export type vwProcessUncheckedCreateWithoutVwProcessAssignInput = {
    ProcessID: number
    UnitID: number
    ProcessStatus?: string | null
    ProcessPlanStartDate?: Date | string | null
    ProcessPlanEndDate?: Date | string | null
    ProcessPlanDuration?: number | null
    ProcessActualStartDate?: Date | string | null
    ProcessActualEndDate?: Date | string | null
    ProcessActualDuration?: number | null
    MasterProcessName?: string | null
    StandardMH?: Decimal | DecimalJsLike | number | string | null
    ProcessGroupName?: string | null
    ProcessDelayInDay?: number | null
    ProcessOrder?: number | null
    LastModified: Date | string
    MasterProcessID: number
  }

  export type vwProcessCreateOrConnectWithoutVwProcessAssignInput = {
    where: vwProcessWhereUniqueInput
    create: XOR<vwProcessCreateWithoutVwProcessAssignInput, vwProcessUncheckedCreateWithoutVwProcessAssignInput>
  }

  export type vwProcessActivityCreateWithoutVwProcessAssignInput = {
    atasan: string
    EmployeeNumber?: string | null
    ActivityDateTime: Date | string
    ProcessActivityID: number
    ProcessActivityName: string
    ProcessActivityStatus?: string | null
    ProcessActivityReasonPause: string
    ActualHoursNonProductive?: number | null
    ProcessActivityActualHours?: Decimal | DecimalJsLike | number | string | null
    ProcessActivityDateTime: Date | string
    LastModifiedBy: string
    LastModified: Date | string
  }

  export type vwProcessActivityUncheckedCreateWithoutVwProcessAssignInput = {
    atasan: string
    EmployeeNumber?: string | null
    ActivityDateTime: Date | string
    ProcessActivityID: number
    ProcessActivityName: string
    ProcessActivityStatus?: string | null
    ProcessActivityReasonPause: string
    ActualHoursNonProductive?: number | null
    ProcessActivityActualHours?: Decimal | DecimalJsLike | number | string | null
    ProcessActivityDateTime: Date | string
    LastModifiedBy: string
    LastModified: Date | string
  }

  export type vwProcessActivityCreateOrConnectWithoutVwProcessAssignInput = {
    where: vwProcessActivityWhereUniqueInput
    create: XOR<vwProcessActivityCreateWithoutVwProcessAssignInput, vwProcessActivityUncheckedCreateWithoutVwProcessAssignInput>
  }

  export type vwProcessActivityCreateManyVwProcessAssignInputEnvelope = {
    data: vwProcessActivityCreateManyVwProcessAssignInput | vwProcessActivityCreateManyVwProcessAssignInput[]
  }

  export type vwProcessUpsertWithoutVwProcessAssignInput = {
    update: XOR<vwProcessUpdateWithoutVwProcessAssignInput, vwProcessUncheckedUpdateWithoutVwProcessAssignInput>
    create: XOR<vwProcessCreateWithoutVwProcessAssignInput, vwProcessUncheckedCreateWithoutVwProcessAssignInput>
    where?: vwProcessWhereInput
  }

  export type vwProcessUpdateToOneWithWhereWithoutVwProcessAssignInput = {
    where?: vwProcessWhereInput
    data: XOR<vwProcessUpdateWithoutVwProcessAssignInput, vwProcessUncheckedUpdateWithoutVwProcessAssignInput>
  }

  export type vwProcessUpdateWithoutVwProcessAssignInput = {
    ProcessID?: IntFieldUpdateOperationsInput | number
    ProcessStatus?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessPlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessPlanEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessPlanDuration?: NullableIntFieldUpdateOperationsInput | number | null
    ProcessActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessActualEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessActualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    MasterProcessName?: NullableStringFieldUpdateOperationsInput | string | null
    StandardMH?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ProcessGroupName?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessDelayInDay?: NullableIntFieldUpdateOperationsInput | number | null
    ProcessOrder?: NullableIntFieldUpdateOperationsInput | number | null
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    MasterProcessID?: IntFieldUpdateOperationsInput | number
    vwUnit?: vwUnitUpdateOneRequiredWithoutVwProcessNestedInput
  }

  export type vwProcessUncheckedUpdateWithoutVwProcessAssignInput = {
    ProcessID?: IntFieldUpdateOperationsInput | number
    UnitID?: IntFieldUpdateOperationsInput | number
    ProcessStatus?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessPlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessPlanEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessPlanDuration?: NullableIntFieldUpdateOperationsInput | number | null
    ProcessActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessActualEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessActualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    MasterProcessName?: NullableStringFieldUpdateOperationsInput | string | null
    StandardMH?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ProcessGroupName?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessDelayInDay?: NullableIntFieldUpdateOperationsInput | number | null
    ProcessOrder?: NullableIntFieldUpdateOperationsInput | number | null
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    MasterProcessID?: IntFieldUpdateOperationsInput | number
  }

  export type vwProcessActivityUpsertWithWhereUniqueWithoutVwProcessAssignInput = {
    where: vwProcessActivityWhereUniqueInput
    update: XOR<vwProcessActivityUpdateWithoutVwProcessAssignInput, vwProcessActivityUncheckedUpdateWithoutVwProcessAssignInput>
    create: XOR<vwProcessActivityCreateWithoutVwProcessAssignInput, vwProcessActivityUncheckedCreateWithoutVwProcessAssignInput>
  }

  export type vwProcessActivityUpdateWithWhereUniqueWithoutVwProcessAssignInput = {
    where: vwProcessActivityWhereUniqueInput
    data: XOR<vwProcessActivityUpdateWithoutVwProcessAssignInput, vwProcessActivityUncheckedUpdateWithoutVwProcessAssignInput>
  }

  export type vwProcessActivityUpdateManyWithWhereWithoutVwProcessAssignInput = {
    where: vwProcessActivityScalarWhereInput
    data: XOR<vwProcessActivityUpdateManyMutationInput, vwProcessActivityUncheckedUpdateManyWithoutVwProcessAssignInput>
  }

  export type vwProcessActivityScalarWhereInput = {
    AND?: vwProcessActivityScalarWhereInput | vwProcessActivityScalarWhereInput[]
    OR?: vwProcessActivityScalarWhereInput[]
    NOT?: vwProcessActivityScalarWhereInput | vwProcessActivityScalarWhereInput[]
    atasan?: StringFilter<"vwProcessActivity"> | string
    EmployeeNumber?: StringNullableFilter<"vwProcessActivity"> | string | null
    ActivityDateTime?: DateTimeFilter<"vwProcessActivity"> | Date | string
    ProcessActivityID?: IntFilter<"vwProcessActivity"> | number
    ProcessAssignID?: IntFilter<"vwProcessActivity"> | number
    ProcessActivityName?: StringFilter<"vwProcessActivity"> | string
    ProcessActivityStatus?: StringNullableFilter<"vwProcessActivity"> | string | null
    ProcessActivityReasonPause?: StringFilter<"vwProcessActivity"> | string
    ActualHoursNonProductive?: IntNullableFilter<"vwProcessActivity"> | number | null
    ProcessActivityActualHours?: DecimalNullableFilter<"vwProcessActivity"> | Decimal | DecimalJsLike | number | string | null
    ProcessActivityDateTime?: DateTimeFilter<"vwProcessActivity"> | Date | string
    LastModifiedBy?: StringFilter<"vwProcessActivity"> | string
    LastModified?: DateTimeFilter<"vwProcessActivity"> | Date | string
  }

  export type vwProductGroupCreateWithoutVwProductInput = {
    ProductGroupID: number
    ProductGroupName: string
    ProductGroupDescription: string
    ProductGroupCapacity?: number | null
    ProductGroupStartMonth?: Date | string | null
    LastModified: Date | string
  }

  export type vwProductGroupUncheckedCreateWithoutVwProductInput = {
    ProductGroupID: number
    ProductGroupName: string
    ProductGroupDescription: string
    ProductGroupCapacity?: number | null
    ProductGroupStartMonth?: Date | string | null
    LastModified: Date | string
  }

  export type vwProductGroupCreateOrConnectWithoutVwProductInput = {
    where: vwProductGroupWhereUniqueInput
    create: XOR<vwProductGroupCreateWithoutVwProductInput, vwProductGroupUncheckedCreateWithoutVwProductInput>
  }

  export type vwUnitCreateWithoutVwProductInput = {
    UnitID: number
    UnitSerialNumber: string
    UnitChasisNumber?: string | null
    UnitDueDate: Date | string
    UnitPlanStartDate?: Date | string | null
    UnitPlanEndDate?: Date | string | null
    UnitPlanDuration?: number | null
    UnitActualStartDate?: Date | string | null
    UnitActualEndDate?: Date | string | null
    UnitActualDuration?: number | null
    Unit_Status: string
    UnitMPSDueDate?: Date | string | null
    UnitActualDeliveryDate?: Date | string | null
    UnitActualHoursCompleted?: Decimal | DecimalJsLike | number | string | null
    UnitDelayInDay?: number | null
    SOUnitprice?: Decimal | DecimalJsLike | number | string | null
    SalesOrderID?: number | null
    UnitProcessLastStatus: string
    UnitProcessLastActualStartDate?: Date | string | null
    UnitProcessLastPlanStartDate?: Date | string | null
    IsHold: boolean
    LastModified: Date | string
    vwPRO: vwPRO_2CreateNestedOneWithoutVwUnitInput
    vwProcess?: vwProcessCreateNestedManyWithoutVwUnitInput
  }

  export type vwUnitUncheckedCreateWithoutVwProductInput = {
    UnitID: number
    PROID: number
    UnitSerialNumber: string
    UnitChasisNumber?: string | null
    UnitDueDate: Date | string
    UnitPlanStartDate?: Date | string | null
    UnitPlanEndDate?: Date | string | null
    UnitPlanDuration?: number | null
    UnitActualStartDate?: Date | string | null
    UnitActualEndDate?: Date | string | null
    UnitActualDuration?: number | null
    Unit_Status: string
    UnitMPSDueDate?: Date | string | null
    UnitActualDeliveryDate?: Date | string | null
    UnitActualHoursCompleted?: Decimal | DecimalJsLike | number | string | null
    UnitDelayInDay?: number | null
    SOUnitprice?: Decimal | DecimalJsLike | number | string | null
    SalesOrderID?: number | null
    UnitProcessLastStatus: string
    UnitProcessLastActualStartDate?: Date | string | null
    UnitProcessLastPlanStartDate?: Date | string | null
    IsHold: boolean
    LastModified: Date | string
    vwProcess?: vwProcessUncheckedCreateNestedManyWithoutVwUnitInput
  }

  export type vwUnitCreateOrConnectWithoutVwProductInput = {
    where: vwUnitWhereUniqueInput
    create: XOR<vwUnitCreateWithoutVwProductInput, vwUnitUncheckedCreateWithoutVwProductInput>
  }

  export type vwUnitCreateManyVwProductInputEnvelope = {
    data: vwUnitCreateManyVwProductInput | vwUnitCreateManyVwProductInput[]
  }

  export type vwProductGroupUpsertWithoutVwProductInput = {
    update: XOR<vwProductGroupUpdateWithoutVwProductInput, vwProductGroupUncheckedUpdateWithoutVwProductInput>
    create: XOR<vwProductGroupCreateWithoutVwProductInput, vwProductGroupUncheckedCreateWithoutVwProductInput>
    where?: vwProductGroupWhereInput
  }

  export type vwProductGroupUpdateToOneWithWhereWithoutVwProductInput = {
    where?: vwProductGroupWhereInput
    data: XOR<vwProductGroupUpdateWithoutVwProductInput, vwProductGroupUncheckedUpdateWithoutVwProductInput>
  }

  export type vwProductGroupUpdateWithoutVwProductInput = {
    ProductGroupID?: IntFieldUpdateOperationsInput | number
    ProductGroupName?: StringFieldUpdateOperationsInput | string
    ProductGroupDescription?: StringFieldUpdateOperationsInput | string
    ProductGroupCapacity?: NullableIntFieldUpdateOperationsInput | number | null
    ProductGroupStartMonth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vwProductGroupUncheckedUpdateWithoutVwProductInput = {
    ProductGroupID?: IntFieldUpdateOperationsInput | number
    ProductGroupName?: StringFieldUpdateOperationsInput | string
    ProductGroupDescription?: StringFieldUpdateOperationsInput | string
    ProductGroupCapacity?: NullableIntFieldUpdateOperationsInput | number | null
    ProductGroupStartMonth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vwUnitUpsertWithWhereUniqueWithoutVwProductInput = {
    where: vwUnitWhereUniqueInput
    update: XOR<vwUnitUpdateWithoutVwProductInput, vwUnitUncheckedUpdateWithoutVwProductInput>
    create: XOR<vwUnitCreateWithoutVwProductInput, vwUnitUncheckedCreateWithoutVwProductInput>
  }

  export type vwUnitUpdateWithWhereUniqueWithoutVwProductInput = {
    where: vwUnitWhereUniqueInput
    data: XOR<vwUnitUpdateWithoutVwProductInput, vwUnitUncheckedUpdateWithoutVwProductInput>
  }

  export type vwUnitUpdateManyWithWhereWithoutVwProductInput = {
    where: vwUnitScalarWhereInput
    data: XOR<vwUnitUpdateManyMutationInput, vwUnitUncheckedUpdateManyWithoutVwProductInput>
  }

  export type vwPRO_2CreateWithoutVwUnitInput = {
    ID: number
    Number: string
    ProductID: number
    Quantity: number
    DueDate: Date | string
    Created: Date | string
    CreatedBy: string
    LastModified: Date | string
    LastModifiedBy: string
  }

  export type vwPRO_2UncheckedCreateWithoutVwUnitInput = {
    ID: number
    Number: string
    ProductID: number
    Quantity: number
    DueDate: Date | string
    Created: Date | string
    CreatedBy: string
    LastModified: Date | string
    LastModifiedBy: string
  }

  export type vwPRO_2CreateOrConnectWithoutVwUnitInput = {
    where: vwPRO_2WhereUniqueInput
    create: XOR<vwPRO_2CreateWithoutVwUnitInput, vwPRO_2UncheckedCreateWithoutVwUnitInput>
  }

  export type vwProductCreateWithoutVwUnitInput = {
    ProductID: number
    ProductName: string
    ProductPN: string
    ProductTotalDay?: number | null
    ProductSubGroupName: string
    ProductSubGroupSAPCode: string
    ProductStandardHours?: Decimal | DecimalJsLike | number | string | null
    LastModified: Date | string
    vwProductGroup: vwProductGroupCreateNestedOneWithoutVwProductInput
  }

  export type vwProductUncheckedCreateWithoutVwUnitInput = {
    ProductID: number
    ProductGroupID: number
    ProductName: string
    ProductPN: string
    ProductTotalDay?: number | null
    ProductSubGroupName: string
    ProductSubGroupSAPCode: string
    ProductStandardHours?: Decimal | DecimalJsLike | number | string | null
    LastModified: Date | string
  }

  export type vwProductCreateOrConnectWithoutVwUnitInput = {
    where: vwProductWhereUniqueInput
    create: XOR<vwProductCreateWithoutVwUnitInput, vwProductUncheckedCreateWithoutVwUnitInput>
  }

  export type vwProcessCreateWithoutVwUnitInput = {
    ProcessID: number
    ProcessStatus?: string | null
    ProcessPlanStartDate?: Date | string | null
    ProcessPlanEndDate?: Date | string | null
    ProcessPlanDuration?: number | null
    ProcessActualStartDate?: Date | string | null
    ProcessActualEndDate?: Date | string | null
    ProcessActualDuration?: number | null
    MasterProcessName?: string | null
    StandardMH?: Decimal | DecimalJsLike | number | string | null
    ProcessGroupName?: string | null
    ProcessDelayInDay?: number | null
    ProcessOrder?: number | null
    LastModified: Date | string
    MasterProcessID: number
    vwProcessAssign?: vwProcessAssign2AllCreateNestedManyWithoutVwProcessInput
  }

  export type vwProcessUncheckedCreateWithoutVwUnitInput = {
    ProcessID: number
    ProcessStatus?: string | null
    ProcessPlanStartDate?: Date | string | null
    ProcessPlanEndDate?: Date | string | null
    ProcessPlanDuration?: number | null
    ProcessActualStartDate?: Date | string | null
    ProcessActualEndDate?: Date | string | null
    ProcessActualDuration?: number | null
    MasterProcessName?: string | null
    StandardMH?: Decimal | DecimalJsLike | number | string | null
    ProcessGroupName?: string | null
    ProcessDelayInDay?: number | null
    ProcessOrder?: number | null
    LastModified: Date | string
    MasterProcessID: number
    vwProcessAssign?: vwProcessAssign2AllUncheckedCreateNestedManyWithoutVwProcessInput
  }

  export type vwProcessCreateOrConnectWithoutVwUnitInput = {
    where: vwProcessWhereUniqueInput
    create: XOR<vwProcessCreateWithoutVwUnitInput, vwProcessUncheckedCreateWithoutVwUnitInput>
  }

  export type vwProcessCreateManyVwUnitInputEnvelope = {
    data: vwProcessCreateManyVwUnitInput | vwProcessCreateManyVwUnitInput[]
  }

  export type vwPRO_2UpsertWithoutVwUnitInput = {
    update: XOR<vwPRO_2UpdateWithoutVwUnitInput, vwPRO_2UncheckedUpdateWithoutVwUnitInput>
    create: XOR<vwPRO_2CreateWithoutVwUnitInput, vwPRO_2UncheckedCreateWithoutVwUnitInput>
    where?: vwPRO_2WhereInput
  }

  export type vwPRO_2UpdateToOneWithWhereWithoutVwUnitInput = {
    where?: vwPRO_2WhereInput
    data: XOR<vwPRO_2UpdateWithoutVwUnitInput, vwPRO_2UncheckedUpdateWithoutVwUnitInput>
  }

  export type vwPRO_2UpdateWithoutVwUnitInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Number?: StringFieldUpdateOperationsInput | string
    ProductID?: IntFieldUpdateOperationsInput | number
    Quantity?: IntFieldUpdateOperationsInput | number
    DueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    LastModifiedBy?: StringFieldUpdateOperationsInput | string
  }

  export type vwPRO_2UncheckedUpdateWithoutVwUnitInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Number?: StringFieldUpdateOperationsInput | string
    ProductID?: IntFieldUpdateOperationsInput | number
    Quantity?: IntFieldUpdateOperationsInput | number
    DueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    LastModifiedBy?: StringFieldUpdateOperationsInput | string
  }

  export type vwProductUpsertWithoutVwUnitInput = {
    update: XOR<vwProductUpdateWithoutVwUnitInput, vwProductUncheckedUpdateWithoutVwUnitInput>
    create: XOR<vwProductCreateWithoutVwUnitInput, vwProductUncheckedCreateWithoutVwUnitInput>
    where?: vwProductWhereInput
  }

  export type vwProductUpdateToOneWithWhereWithoutVwUnitInput = {
    where?: vwProductWhereInput
    data: XOR<vwProductUpdateWithoutVwUnitInput, vwProductUncheckedUpdateWithoutVwUnitInput>
  }

  export type vwProductUpdateWithoutVwUnitInput = {
    ProductID?: IntFieldUpdateOperationsInput | number
    ProductName?: StringFieldUpdateOperationsInput | string
    ProductPN?: StringFieldUpdateOperationsInput | string
    ProductTotalDay?: NullableIntFieldUpdateOperationsInput | number | null
    ProductSubGroupName?: StringFieldUpdateOperationsInput | string
    ProductSubGroupSAPCode?: StringFieldUpdateOperationsInput | string
    ProductStandardHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    vwProductGroup?: vwProductGroupUpdateOneRequiredWithoutVwProductNestedInput
  }

  export type vwProductUncheckedUpdateWithoutVwUnitInput = {
    ProductID?: IntFieldUpdateOperationsInput | number
    ProductGroupID?: IntFieldUpdateOperationsInput | number
    ProductName?: StringFieldUpdateOperationsInput | string
    ProductPN?: StringFieldUpdateOperationsInput | string
    ProductTotalDay?: NullableIntFieldUpdateOperationsInput | number | null
    ProductSubGroupName?: StringFieldUpdateOperationsInput | string
    ProductSubGroupSAPCode?: StringFieldUpdateOperationsInput | string
    ProductStandardHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vwProcessUpsertWithWhereUniqueWithoutVwUnitInput = {
    where: vwProcessWhereUniqueInput
    update: XOR<vwProcessUpdateWithoutVwUnitInput, vwProcessUncheckedUpdateWithoutVwUnitInput>
    create: XOR<vwProcessCreateWithoutVwUnitInput, vwProcessUncheckedCreateWithoutVwUnitInput>
  }

  export type vwProcessUpdateWithWhereUniqueWithoutVwUnitInput = {
    where: vwProcessWhereUniqueInput
    data: XOR<vwProcessUpdateWithoutVwUnitInput, vwProcessUncheckedUpdateWithoutVwUnitInput>
  }

  export type vwProcessUpdateManyWithWhereWithoutVwUnitInput = {
    where: vwProcessScalarWhereInput
    data: XOR<vwProcessUpdateManyMutationInput, vwProcessUncheckedUpdateManyWithoutVwUnitInput>
  }

  export type vwProcessScalarWhereInput = {
    AND?: vwProcessScalarWhereInput | vwProcessScalarWhereInput[]
    OR?: vwProcessScalarWhereInput[]
    NOT?: vwProcessScalarWhereInput | vwProcessScalarWhereInput[]
    ProcessID?: IntFilter<"vwProcess"> | number
    UnitID?: IntFilter<"vwProcess"> | number
    ProcessStatus?: StringNullableFilter<"vwProcess"> | string | null
    ProcessPlanStartDate?: DateTimeNullableFilter<"vwProcess"> | Date | string | null
    ProcessPlanEndDate?: DateTimeNullableFilter<"vwProcess"> | Date | string | null
    ProcessPlanDuration?: IntNullableFilter<"vwProcess"> | number | null
    ProcessActualStartDate?: DateTimeNullableFilter<"vwProcess"> | Date | string | null
    ProcessActualEndDate?: DateTimeNullableFilter<"vwProcess"> | Date | string | null
    ProcessActualDuration?: IntNullableFilter<"vwProcess"> | number | null
    MasterProcessName?: StringNullableFilter<"vwProcess"> | string | null
    StandardMH?: DecimalNullableFilter<"vwProcess"> | Decimal | DecimalJsLike | number | string | null
    ProcessGroupName?: StringNullableFilter<"vwProcess"> | string | null
    ProcessDelayInDay?: IntNullableFilter<"vwProcess"> | number | null
    ProcessOrder?: IntNullableFilter<"vwProcess"> | number | null
    LastModified?: DateTimeFilter<"vwProcess"> | Date | string
    MasterProcessID?: IntFilter<"vwProcess"> | number
  }

  export type vwProductCreateWithoutVwProductGroupInput = {
    ProductID: number
    ProductName: string
    ProductPN: string
    ProductTotalDay?: number | null
    ProductSubGroupName: string
    ProductSubGroupSAPCode: string
    ProductStandardHours?: Decimal | DecimalJsLike | number | string | null
    LastModified: Date | string
    vwUnit?: vwUnitCreateNestedManyWithoutVwProductInput
  }

  export type vwProductUncheckedCreateWithoutVwProductGroupInput = {
    ProductID: number
    ProductName: string
    ProductPN: string
    ProductTotalDay?: number | null
    ProductSubGroupName: string
    ProductSubGroupSAPCode: string
    ProductStandardHours?: Decimal | DecimalJsLike | number | string | null
    LastModified: Date | string
    vwUnit?: vwUnitUncheckedCreateNestedManyWithoutVwProductInput
  }

  export type vwProductCreateOrConnectWithoutVwProductGroupInput = {
    where: vwProductWhereUniqueInput
    create: XOR<vwProductCreateWithoutVwProductGroupInput, vwProductUncheckedCreateWithoutVwProductGroupInput>
  }

  export type vwProductCreateManyVwProductGroupInputEnvelope = {
    data: vwProductCreateManyVwProductGroupInput | vwProductCreateManyVwProductGroupInput[]
  }

  export type vwProductUpsertWithWhereUniqueWithoutVwProductGroupInput = {
    where: vwProductWhereUniqueInput
    update: XOR<vwProductUpdateWithoutVwProductGroupInput, vwProductUncheckedUpdateWithoutVwProductGroupInput>
    create: XOR<vwProductCreateWithoutVwProductGroupInput, vwProductUncheckedCreateWithoutVwProductGroupInput>
  }

  export type vwProductUpdateWithWhereUniqueWithoutVwProductGroupInput = {
    where: vwProductWhereUniqueInput
    data: XOR<vwProductUpdateWithoutVwProductGroupInput, vwProductUncheckedUpdateWithoutVwProductGroupInput>
  }

  export type vwProductUpdateManyWithWhereWithoutVwProductGroupInput = {
    where: vwProductScalarWhereInput
    data: XOR<vwProductUpdateManyMutationInput, vwProductUncheckedUpdateManyWithoutVwProductGroupInput>
  }

  export type vwProductScalarWhereInput = {
    AND?: vwProductScalarWhereInput | vwProductScalarWhereInput[]
    OR?: vwProductScalarWhereInput[]
    NOT?: vwProductScalarWhereInput | vwProductScalarWhereInput[]
    ProductID?: IntFilter<"vwProduct"> | number
    ProductGroupID?: IntFilter<"vwProduct"> | number
    ProductName?: StringFilter<"vwProduct"> | string
    ProductPN?: StringFilter<"vwProduct"> | string
    ProductTotalDay?: IntNullableFilter<"vwProduct"> | number | null
    ProductSubGroupName?: StringFilter<"vwProduct"> | string
    ProductSubGroupSAPCode?: StringFilter<"vwProduct"> | string
    ProductStandardHours?: DecimalNullableFilter<"vwProduct"> | Decimal | DecimalJsLike | number | string | null
    LastModified?: DateTimeFilter<"vwProduct"> | Date | string
  }

  export type ProcessAssignCreateManyProcessInput = {
    ID: number
    UserID: string
    EmployeeNumber?: string | null
    Status: number
    Type?: number | null
    Created: Date | string
    CreatedBy: string
    LastModified: Date | string
    LastModifiedBy: string
    remark?: string | null
  }

  export type ProcessAssignUpdateWithoutProcessInput = {
    ID?: IntFieldUpdateOperationsInput | number
    UserID?: StringFieldUpdateOperationsInput | string
    EmployeeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: IntFieldUpdateOperationsInput | number
    Type?: NullableIntFieldUpdateOperationsInput | number | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    LastModifiedBy?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessActivity?: ProcessActivityUpdateManyWithoutProcessAssignNestedInput
  }

  export type ProcessAssignUncheckedUpdateWithoutProcessInput = {
    ID?: IntFieldUpdateOperationsInput | number
    UserID?: StringFieldUpdateOperationsInput | string
    EmployeeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: IntFieldUpdateOperationsInput | number
    Type?: NullableIntFieldUpdateOperationsInput | number | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    LastModifiedBy?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessActivity?: ProcessActivityUncheckedUpdateManyWithoutProcessAssignNestedInput
  }

  export type ProcessAssignUncheckedUpdateManyWithoutProcessInput = {
    ID?: IntFieldUpdateOperationsInput | number
    UserID?: StringFieldUpdateOperationsInput | string
    EmployeeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: IntFieldUpdateOperationsInput | number
    Type?: NullableIntFieldUpdateOperationsInput | number | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    LastModifiedBy?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessActivityCreateManyProcessAssignInput = {
    ID: number
    Status: number
    ReasonPauseID?: number | null
    ActivityDateTime: Date | string
    ActualHours?: Decimal | DecimalJsLike | number | string | null
    Created: Date | string
    CreatedBy: string
    LastModified: Date | string
    LastModifiedBy: string
  }

  export type ProcessActivityUpdateWithoutProcessAssignInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Status?: IntFieldUpdateOperationsInput | number
    ReasonPauseID?: NullableIntFieldUpdateOperationsInput | number | null
    ActivityDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    ActualHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    LastModifiedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProcessActivityUncheckedUpdateWithoutProcessAssignInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Status?: IntFieldUpdateOperationsInput | number
    ReasonPauseID?: NullableIntFieldUpdateOperationsInput | number | null
    ActivityDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    ActualHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    LastModifiedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProcessActivityUncheckedUpdateManyWithoutProcessAssignInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Status?: IntFieldUpdateOperationsInput | number
    ReasonPauseID?: NullableIntFieldUpdateOperationsInput | number | null
    ActivityDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    ActualHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: StringFieldUpdateOperationsInput | string
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    LastModifiedBy?: StringFieldUpdateOperationsInput | string
  }

  export type vwUnitCreateManyVwPROInput = {
    UnitID: number
    ProductID: number
    UnitSerialNumber: string
    UnitChasisNumber?: string | null
    UnitDueDate: Date | string
    UnitPlanStartDate?: Date | string | null
    UnitPlanEndDate?: Date | string | null
    UnitPlanDuration?: number | null
    UnitActualStartDate?: Date | string | null
    UnitActualEndDate?: Date | string | null
    UnitActualDuration?: number | null
    Unit_Status: string
    UnitMPSDueDate?: Date | string | null
    UnitActualDeliveryDate?: Date | string | null
    UnitActualHoursCompleted?: Decimal | DecimalJsLike | number | string | null
    UnitDelayInDay?: number | null
    SOUnitprice?: Decimal | DecimalJsLike | number | string | null
    SalesOrderID?: number | null
    UnitProcessLastStatus: string
    UnitProcessLastActualStartDate?: Date | string | null
    UnitProcessLastPlanStartDate?: Date | string | null
    IsHold: boolean
    LastModified: Date | string
  }

  export type vwUnitUpdateWithoutVwPROInput = {
    UnitID?: IntFieldUpdateOperationsInput | number
    UnitSerialNumber?: StringFieldUpdateOperationsInput | string
    UnitChasisNumber?: NullableStringFieldUpdateOperationsInput | string | null
    UnitDueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UnitPlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitPlanEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitPlanDuration?: NullableIntFieldUpdateOperationsInput | number | null
    UnitActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    Unit_Status?: StringFieldUpdateOperationsInput | string
    UnitMPSDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualDeliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualHoursCompleted?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    UnitDelayInDay?: NullableIntFieldUpdateOperationsInput | number | null
    SOUnitprice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    SalesOrderID?: NullableIntFieldUpdateOperationsInput | number | null
    UnitProcessLastStatus?: StringFieldUpdateOperationsInput | string
    UnitProcessLastActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitProcessLastPlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsHold?: BoolFieldUpdateOperationsInput | boolean
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    vwProduct?: vwProductUpdateOneRequiredWithoutVwUnitNestedInput
    vwProcess?: vwProcessUpdateManyWithoutVwUnitNestedInput
  }

  export type vwUnitUncheckedUpdateWithoutVwPROInput = {
    UnitID?: IntFieldUpdateOperationsInput | number
    ProductID?: IntFieldUpdateOperationsInput | number
    UnitSerialNumber?: StringFieldUpdateOperationsInput | string
    UnitChasisNumber?: NullableStringFieldUpdateOperationsInput | string | null
    UnitDueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UnitPlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitPlanEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitPlanDuration?: NullableIntFieldUpdateOperationsInput | number | null
    UnitActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    Unit_Status?: StringFieldUpdateOperationsInput | string
    UnitMPSDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualDeliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualHoursCompleted?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    UnitDelayInDay?: NullableIntFieldUpdateOperationsInput | number | null
    SOUnitprice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    SalesOrderID?: NullableIntFieldUpdateOperationsInput | number | null
    UnitProcessLastStatus?: StringFieldUpdateOperationsInput | string
    UnitProcessLastActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitProcessLastPlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsHold?: BoolFieldUpdateOperationsInput | boolean
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    vwProcess?: vwProcessUncheckedUpdateManyWithoutVwUnitNestedInput
  }

  export type vwUnitUncheckedUpdateManyWithoutVwPROInput = {
    UnitID?: IntFieldUpdateOperationsInput | number
    ProductID?: IntFieldUpdateOperationsInput | number
    UnitSerialNumber?: StringFieldUpdateOperationsInput | string
    UnitChasisNumber?: NullableStringFieldUpdateOperationsInput | string | null
    UnitDueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UnitPlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitPlanEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitPlanDuration?: NullableIntFieldUpdateOperationsInput | number | null
    UnitActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    Unit_Status?: StringFieldUpdateOperationsInput | string
    UnitMPSDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualDeliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualHoursCompleted?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    UnitDelayInDay?: NullableIntFieldUpdateOperationsInput | number | null
    SOUnitprice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    SalesOrderID?: NullableIntFieldUpdateOperationsInput | number | null
    UnitProcessLastStatus?: StringFieldUpdateOperationsInput | string
    UnitProcessLastActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitProcessLastPlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsHold?: BoolFieldUpdateOperationsInput | boolean
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vwProcessAssign2AllCreateManyVwProcessInput = {
    ID: number
    UnitID?: number | null
    LeaderName: string
    OperatorName?: string | null
    NRP?: string | null
    TglAssign: Date | string
    ProcessassignStatus?: string | null
    Startassign?: string | null
    Stopassign?: string | null
    ProcessAssignType?: string | null
    LastModified: Date | string
    lastStart?: Date | string | null
    lastStop?: Date | string | null
    remark?: string | null
    IsActive?: boolean | null
  }

  export type vwProcessAssign2AllUpdateWithoutVwProcessInput = {
    ID?: IntFieldUpdateOperationsInput | number
    UnitID?: NullableIntFieldUpdateOperationsInput | number | null
    LeaderName?: StringFieldUpdateOperationsInput | string
    OperatorName?: NullableStringFieldUpdateOperationsInput | string | null
    NRP?: NullableStringFieldUpdateOperationsInput | string | null
    TglAssign?: DateTimeFieldUpdateOperationsInput | Date | string
    ProcessassignStatus?: NullableStringFieldUpdateOperationsInput | string | null
    Startassign?: NullableStringFieldUpdateOperationsInput | string | null
    Stopassign?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessAssignType?: NullableStringFieldUpdateOperationsInput | string | null
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    lastStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastStop?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    IsActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vwProcessActivity?: vwProcessActivityUpdateManyWithoutVwProcessAssignNestedInput
  }

  export type vwProcessAssign2AllUncheckedUpdateWithoutVwProcessInput = {
    ID?: IntFieldUpdateOperationsInput | number
    UnitID?: NullableIntFieldUpdateOperationsInput | number | null
    LeaderName?: StringFieldUpdateOperationsInput | string
    OperatorName?: NullableStringFieldUpdateOperationsInput | string | null
    NRP?: NullableStringFieldUpdateOperationsInput | string | null
    TglAssign?: DateTimeFieldUpdateOperationsInput | Date | string
    ProcessassignStatus?: NullableStringFieldUpdateOperationsInput | string | null
    Startassign?: NullableStringFieldUpdateOperationsInput | string | null
    Stopassign?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessAssignType?: NullableStringFieldUpdateOperationsInput | string | null
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    lastStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastStop?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    IsActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vwProcessActivity?: vwProcessActivityUncheckedUpdateManyWithoutVwProcessAssignNestedInput
  }

  export type vwProcessAssign2AllUncheckedUpdateManyWithoutVwProcessInput = {
    ID?: IntFieldUpdateOperationsInput | number
    UnitID?: NullableIntFieldUpdateOperationsInput | number | null
    LeaderName?: StringFieldUpdateOperationsInput | string
    OperatorName?: NullableStringFieldUpdateOperationsInput | string | null
    NRP?: NullableStringFieldUpdateOperationsInput | string | null
    TglAssign?: DateTimeFieldUpdateOperationsInput | Date | string
    ProcessassignStatus?: NullableStringFieldUpdateOperationsInput | string | null
    Startassign?: NullableStringFieldUpdateOperationsInput | string | null
    Stopassign?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessAssignType?: NullableStringFieldUpdateOperationsInput | string | null
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    lastStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastStop?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    IsActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type vwProcessActivityCreateManyVwProcessAssignInput = {
    atasan: string
    EmployeeNumber?: string | null
    ActivityDateTime: Date | string
    ProcessActivityID: number
    ProcessActivityName: string
    ProcessActivityStatus?: string | null
    ProcessActivityReasonPause: string
    ActualHoursNonProductive?: number | null
    ProcessActivityActualHours?: Decimal | DecimalJsLike | number | string | null
    ProcessActivityDateTime: Date | string
    LastModifiedBy: string
    LastModified: Date | string
  }

  export type vwProcessActivityUpdateWithoutVwProcessAssignInput = {
    atasan?: StringFieldUpdateOperationsInput | string
    EmployeeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ActivityDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    ProcessActivityID?: IntFieldUpdateOperationsInput | number
    ProcessActivityName?: StringFieldUpdateOperationsInput | string
    ProcessActivityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessActivityReasonPause?: StringFieldUpdateOperationsInput | string
    ActualHoursNonProductive?: NullableIntFieldUpdateOperationsInput | number | null
    ProcessActivityActualHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ProcessActivityDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    LastModifiedBy?: StringFieldUpdateOperationsInput | string
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vwProcessActivityUncheckedUpdateWithoutVwProcessAssignInput = {
    atasan?: StringFieldUpdateOperationsInput | string
    EmployeeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ActivityDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    ProcessActivityID?: IntFieldUpdateOperationsInput | number
    ProcessActivityName?: StringFieldUpdateOperationsInput | string
    ProcessActivityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessActivityReasonPause?: StringFieldUpdateOperationsInput | string
    ActualHoursNonProductive?: NullableIntFieldUpdateOperationsInput | number | null
    ProcessActivityActualHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ProcessActivityDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    LastModifiedBy?: StringFieldUpdateOperationsInput | string
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vwProcessActivityUncheckedUpdateManyWithoutVwProcessAssignInput = {
    atasan?: StringFieldUpdateOperationsInput | string
    EmployeeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ActivityDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    ProcessActivityID?: IntFieldUpdateOperationsInput | number
    ProcessActivityName?: StringFieldUpdateOperationsInput | string
    ProcessActivityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessActivityReasonPause?: StringFieldUpdateOperationsInput | string
    ActualHoursNonProductive?: NullableIntFieldUpdateOperationsInput | number | null
    ProcessActivityActualHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ProcessActivityDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    LastModifiedBy?: StringFieldUpdateOperationsInput | string
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vwUnitCreateManyVwProductInput = {
    UnitID: number
    PROID: number
    UnitSerialNumber: string
    UnitChasisNumber?: string | null
    UnitDueDate: Date | string
    UnitPlanStartDate?: Date | string | null
    UnitPlanEndDate?: Date | string | null
    UnitPlanDuration?: number | null
    UnitActualStartDate?: Date | string | null
    UnitActualEndDate?: Date | string | null
    UnitActualDuration?: number | null
    Unit_Status: string
    UnitMPSDueDate?: Date | string | null
    UnitActualDeliveryDate?: Date | string | null
    UnitActualHoursCompleted?: Decimal | DecimalJsLike | number | string | null
    UnitDelayInDay?: number | null
    SOUnitprice?: Decimal | DecimalJsLike | number | string | null
    SalesOrderID?: number | null
    UnitProcessLastStatus: string
    UnitProcessLastActualStartDate?: Date | string | null
    UnitProcessLastPlanStartDate?: Date | string | null
    IsHold: boolean
    LastModified: Date | string
  }

  export type vwUnitUpdateWithoutVwProductInput = {
    UnitID?: IntFieldUpdateOperationsInput | number
    UnitSerialNumber?: StringFieldUpdateOperationsInput | string
    UnitChasisNumber?: NullableStringFieldUpdateOperationsInput | string | null
    UnitDueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UnitPlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitPlanEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitPlanDuration?: NullableIntFieldUpdateOperationsInput | number | null
    UnitActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    Unit_Status?: StringFieldUpdateOperationsInput | string
    UnitMPSDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualDeliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualHoursCompleted?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    UnitDelayInDay?: NullableIntFieldUpdateOperationsInput | number | null
    SOUnitprice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    SalesOrderID?: NullableIntFieldUpdateOperationsInput | number | null
    UnitProcessLastStatus?: StringFieldUpdateOperationsInput | string
    UnitProcessLastActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitProcessLastPlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsHold?: BoolFieldUpdateOperationsInput | boolean
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    vwPRO?: vwPRO_2UpdateOneRequiredWithoutVwUnitNestedInput
    vwProcess?: vwProcessUpdateManyWithoutVwUnitNestedInput
  }

  export type vwUnitUncheckedUpdateWithoutVwProductInput = {
    UnitID?: IntFieldUpdateOperationsInput | number
    PROID?: IntFieldUpdateOperationsInput | number
    UnitSerialNumber?: StringFieldUpdateOperationsInput | string
    UnitChasisNumber?: NullableStringFieldUpdateOperationsInput | string | null
    UnitDueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UnitPlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitPlanEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitPlanDuration?: NullableIntFieldUpdateOperationsInput | number | null
    UnitActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    Unit_Status?: StringFieldUpdateOperationsInput | string
    UnitMPSDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualDeliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualHoursCompleted?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    UnitDelayInDay?: NullableIntFieldUpdateOperationsInput | number | null
    SOUnitprice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    SalesOrderID?: NullableIntFieldUpdateOperationsInput | number | null
    UnitProcessLastStatus?: StringFieldUpdateOperationsInput | string
    UnitProcessLastActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitProcessLastPlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsHold?: BoolFieldUpdateOperationsInput | boolean
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    vwProcess?: vwProcessUncheckedUpdateManyWithoutVwUnitNestedInput
  }

  export type vwUnitUncheckedUpdateManyWithoutVwProductInput = {
    UnitID?: IntFieldUpdateOperationsInput | number
    PROID?: IntFieldUpdateOperationsInput | number
    UnitSerialNumber?: StringFieldUpdateOperationsInput | string
    UnitChasisNumber?: NullableStringFieldUpdateOperationsInput | string | null
    UnitDueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UnitPlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitPlanEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitPlanDuration?: NullableIntFieldUpdateOperationsInput | number | null
    UnitActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    Unit_Status?: StringFieldUpdateOperationsInput | string
    UnitMPSDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualDeliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitActualHoursCompleted?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    UnitDelayInDay?: NullableIntFieldUpdateOperationsInput | number | null
    SOUnitprice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    SalesOrderID?: NullableIntFieldUpdateOperationsInput | number | null
    UnitProcessLastStatus?: StringFieldUpdateOperationsInput | string
    UnitProcessLastActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UnitProcessLastPlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsHold?: BoolFieldUpdateOperationsInput | boolean
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vwProcessCreateManyVwUnitInput = {
    ProcessID: number
    ProcessStatus?: string | null
    ProcessPlanStartDate?: Date | string | null
    ProcessPlanEndDate?: Date | string | null
    ProcessPlanDuration?: number | null
    ProcessActualStartDate?: Date | string | null
    ProcessActualEndDate?: Date | string | null
    ProcessActualDuration?: number | null
    MasterProcessName?: string | null
    StandardMH?: Decimal | DecimalJsLike | number | string | null
    ProcessGroupName?: string | null
    ProcessDelayInDay?: number | null
    ProcessOrder?: number | null
    LastModified: Date | string
    MasterProcessID: number
  }

  export type vwProcessUpdateWithoutVwUnitInput = {
    ProcessID?: IntFieldUpdateOperationsInput | number
    ProcessStatus?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessPlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessPlanEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessPlanDuration?: NullableIntFieldUpdateOperationsInput | number | null
    ProcessActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessActualEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessActualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    MasterProcessName?: NullableStringFieldUpdateOperationsInput | string | null
    StandardMH?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ProcessGroupName?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessDelayInDay?: NullableIntFieldUpdateOperationsInput | number | null
    ProcessOrder?: NullableIntFieldUpdateOperationsInput | number | null
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    MasterProcessID?: IntFieldUpdateOperationsInput | number
    vwProcessAssign?: vwProcessAssign2AllUpdateManyWithoutVwProcessNestedInput
  }

  export type vwProcessUncheckedUpdateWithoutVwUnitInput = {
    ProcessID?: IntFieldUpdateOperationsInput | number
    ProcessStatus?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessPlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessPlanEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessPlanDuration?: NullableIntFieldUpdateOperationsInput | number | null
    ProcessActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessActualEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessActualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    MasterProcessName?: NullableStringFieldUpdateOperationsInput | string | null
    StandardMH?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ProcessGroupName?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessDelayInDay?: NullableIntFieldUpdateOperationsInput | number | null
    ProcessOrder?: NullableIntFieldUpdateOperationsInput | number | null
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    MasterProcessID?: IntFieldUpdateOperationsInput | number
    vwProcessAssign?: vwProcessAssign2AllUncheckedUpdateManyWithoutVwProcessNestedInput
  }

  export type vwProcessUncheckedUpdateManyWithoutVwUnitInput = {
    ProcessID?: IntFieldUpdateOperationsInput | number
    ProcessStatus?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessPlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessPlanEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessPlanDuration?: NullableIntFieldUpdateOperationsInput | number | null
    ProcessActualStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessActualEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProcessActualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    MasterProcessName?: NullableStringFieldUpdateOperationsInput | string | null
    StandardMH?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ProcessGroupName?: NullableStringFieldUpdateOperationsInput | string | null
    ProcessDelayInDay?: NullableIntFieldUpdateOperationsInput | number | null
    ProcessOrder?: NullableIntFieldUpdateOperationsInput | number | null
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    MasterProcessID?: IntFieldUpdateOperationsInput | number
  }

  export type vwProductCreateManyVwProductGroupInput = {
    ProductID: number
    ProductName: string
    ProductPN: string
    ProductTotalDay?: number | null
    ProductSubGroupName: string
    ProductSubGroupSAPCode: string
    ProductStandardHours?: Decimal | DecimalJsLike | number | string | null
    LastModified: Date | string
  }

  export type vwProductUpdateWithoutVwProductGroupInput = {
    ProductID?: IntFieldUpdateOperationsInput | number
    ProductName?: StringFieldUpdateOperationsInput | string
    ProductPN?: StringFieldUpdateOperationsInput | string
    ProductTotalDay?: NullableIntFieldUpdateOperationsInput | number | null
    ProductSubGroupName?: StringFieldUpdateOperationsInput | string
    ProductSubGroupSAPCode?: StringFieldUpdateOperationsInput | string
    ProductStandardHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    vwUnit?: vwUnitUpdateManyWithoutVwProductNestedInput
  }

  export type vwProductUncheckedUpdateWithoutVwProductGroupInput = {
    ProductID?: IntFieldUpdateOperationsInput | number
    ProductName?: StringFieldUpdateOperationsInput | string
    ProductPN?: StringFieldUpdateOperationsInput | string
    ProductTotalDay?: NullableIntFieldUpdateOperationsInput | number | null
    ProductSubGroupName?: StringFieldUpdateOperationsInput | string
    ProductSubGroupSAPCode?: StringFieldUpdateOperationsInput | string
    ProductStandardHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    vwUnit?: vwUnitUncheckedUpdateManyWithoutVwProductNestedInput
  }

  export type vwProductUncheckedUpdateManyWithoutVwProductGroupInput = {
    ProductID?: IntFieldUpdateOperationsInput | number
    ProductName?: StringFieldUpdateOperationsInput | string
    ProductPN?: StringFieldUpdateOperationsInput | string
    ProductTotalDay?: NullableIntFieldUpdateOperationsInput | number | null
    ProductSubGroupName?: StringFieldUpdateOperationsInput | string
    ProductSubGroupSAPCode?: StringFieldUpdateOperationsInput | string
    ProductStandardHours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    LastModified?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}