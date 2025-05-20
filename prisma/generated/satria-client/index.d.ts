
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
 * Model DataFBL5N
 * 
 */
export type DataFBL5N = $Result.DefaultSelection<Prisma.$DataFBL5NPayload>
/**
 * Model DataVF04
 * 
 */
export type DataVF04 = $Result.DefaultSelection<Prisma.$DataVF04Payload>
/**
 * Model excelBaseUrl
 * 
 */
export type excelBaseUrl = $Result.DefaultSelection<Prisma.$excelBaseUrlPayload>
/**
 * Model excelSheet
 * 
 */
export type excelSheet = $Result.DefaultSelection<Prisma.$excelSheetPayload>
/**
 * Model log
 * 
 */
export type log = $Result.DefaultSelection<Prisma.$logPayload>
/**
 * Model ms_users
 * 
 */
export type ms_users = $Result.DefaultSelection<Prisma.$ms_usersPayload>
/**
 * Model Schedule_Recommendation
 * 
 */
export type Schedule_Recommendation = $Result.DefaultSelection<Prisma.$Schedule_RecommendationPayload>
/**
 * Model siteRoute
 * 
 */
export type siteRoute = $Result.DefaultSelection<Prisma.$siteRoutePayload>
/**
 * Model sysdiagrams
 * 
 */
export type sysdiagrams = $Result.DefaultSelection<Prisma.$sysdiagramsPayload>
/**
 * Model trx_PICA
 * 
 */
export type trx_PICA = $Result.DefaultSelection<Prisma.$trx_PICAPayload>
/**
 * Model trx_DetailPICA
 * 
 */
export type trx_DetailPICA = $Result.DefaultSelection<Prisma.$trx_DetailPICAPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model trx_LogHistory
 * 
 */
export type trx_LogHistory = $Result.DefaultSelection<Prisma.$trx_LogHistoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more DataFBL5NS
 * const dataFBL5NS = await prisma.dataFBL5N.findMany()
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
   * // Fetch zero or more DataFBL5NS
   * const dataFBL5NS = await prisma.dataFBL5N.findMany()
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
   * `prisma.dataFBL5N`: Exposes CRUD operations for the **DataFBL5N** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataFBL5NS
    * const dataFBL5NS = await prisma.dataFBL5N.findMany()
    * ```
    */
  get dataFBL5N(): Prisma.DataFBL5NDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dataVF04`: Exposes CRUD operations for the **DataVF04** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataVF04s
    * const dataVF04s = await prisma.dataVF04.findMany()
    * ```
    */
  get dataVF04(): Prisma.DataVF04Delegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.excelBaseUrl`: Exposes CRUD operations for the **excelBaseUrl** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExcelBaseUrls
    * const excelBaseUrls = await prisma.excelBaseUrl.findMany()
    * ```
    */
  get excelBaseUrl(): Prisma.excelBaseUrlDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.excelSheet`: Exposes CRUD operations for the **excelSheet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExcelSheets
    * const excelSheets = await prisma.excelSheet.findMany()
    * ```
    */
  get excelSheet(): Prisma.excelSheetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.log`: Exposes CRUD operations for the **log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.log.findMany()
    * ```
    */
  get log(): Prisma.logDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ms_users`: Exposes CRUD operations for the **ms_users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ms_users
    * const ms_users = await prisma.ms_users.findMany()
    * ```
    */
  get ms_users(): Prisma.ms_usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedule_Recommendation`: Exposes CRUD operations for the **Schedule_Recommendation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedule_Recommendations
    * const schedule_Recommendations = await prisma.schedule_Recommendation.findMany()
    * ```
    */
  get schedule_Recommendation(): Prisma.Schedule_RecommendationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.siteRoute`: Exposes CRUD operations for the **siteRoute** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SiteRoutes
    * const siteRoutes = await prisma.siteRoute.findMany()
    * ```
    */
  get siteRoute(): Prisma.siteRouteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sysdiagrams`: Exposes CRUD operations for the **sysdiagrams** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sysdiagrams
    * const sysdiagrams = await prisma.sysdiagrams.findMany()
    * ```
    */
  get sysdiagrams(): Prisma.sysdiagramsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trx_PICA`: Exposes CRUD operations for the **trx_PICA** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trx_PICAS
    * const trx_PICAS = await prisma.trx_PICA.findMany()
    * ```
    */
  get trx_PICA(): Prisma.trx_PICADelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trx_DetailPICA`: Exposes CRUD operations for the **trx_DetailPICA** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trx_DetailPICAS
    * const trx_DetailPICAS = await prisma.trx_DetailPICA.findMany()
    * ```
    */
  get trx_DetailPICA(): Prisma.trx_DetailPICADelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trx_LogHistory`: Exposes CRUD operations for the **trx_LogHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trx_LogHistories
    * const trx_LogHistories = await prisma.trx_LogHistory.findMany()
    * ```
    */
  get trx_LogHistory(): Prisma.trx_LogHistoryDelegate<ExtArgs, ClientOptions>;
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
    DataFBL5N: 'DataFBL5N',
    DataVF04: 'DataVF04',
    excelBaseUrl: 'excelBaseUrl',
    excelSheet: 'excelSheet',
    log: 'log',
    ms_users: 'ms_users',
    Schedule_Recommendation: 'Schedule_Recommendation',
    siteRoute: 'siteRoute',
    sysdiagrams: 'sysdiagrams',
    trx_PICA: 'trx_PICA',
    trx_DetailPICA: 'trx_DetailPICA',
    users: 'users',
    trx_LogHistory: 'trx_LogHistory'
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
      modelProps: "dataFBL5N" | "dataVF04" | "excelBaseUrl" | "excelSheet" | "log" | "ms_users" | "schedule_Recommendation" | "siteRoute" | "sysdiagrams" | "trx_PICA" | "trx_DetailPICA" | "users" | "trx_LogHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      DataFBL5N: {
        payload: Prisma.$DataFBL5NPayload<ExtArgs>
        fields: Prisma.DataFBL5NFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DataFBL5NFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataFBL5NPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DataFBL5NFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataFBL5NPayload>
          }
          findFirst: {
            args: Prisma.DataFBL5NFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataFBL5NPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DataFBL5NFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataFBL5NPayload>
          }
          findMany: {
            args: Prisma.DataFBL5NFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataFBL5NPayload>[]
          }
          create: {
            args: Prisma.DataFBL5NCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataFBL5NPayload>
          }
          createMany: {
            args: Prisma.DataFBL5NCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DataFBL5NDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataFBL5NPayload>
          }
          update: {
            args: Prisma.DataFBL5NUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataFBL5NPayload>
          }
          deleteMany: {
            args: Prisma.DataFBL5NDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DataFBL5NUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DataFBL5NUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataFBL5NPayload>
          }
          aggregate: {
            args: Prisma.DataFBL5NAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataFBL5N>
          }
          groupBy: {
            args: Prisma.DataFBL5NGroupByArgs<ExtArgs>
            result: $Utils.Optional<DataFBL5NGroupByOutputType>[]
          }
          count: {
            args: Prisma.DataFBL5NCountArgs<ExtArgs>
            result: $Utils.Optional<DataFBL5NCountAggregateOutputType> | number
          }
        }
      }
      DataVF04: {
        payload: Prisma.$DataVF04Payload<ExtArgs>
        fields: Prisma.DataVF04FieldRefs
        operations: {
          findUnique: {
            args: Prisma.DataVF04FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataVF04Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DataVF04FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataVF04Payload>
          }
          findFirst: {
            args: Prisma.DataVF04FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataVF04Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DataVF04FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataVF04Payload>
          }
          findMany: {
            args: Prisma.DataVF04FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataVF04Payload>[]
          }
          create: {
            args: Prisma.DataVF04CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataVF04Payload>
          }
          createMany: {
            args: Prisma.DataVF04CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DataVF04DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataVF04Payload>
          }
          update: {
            args: Prisma.DataVF04UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataVF04Payload>
          }
          deleteMany: {
            args: Prisma.DataVF04DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DataVF04UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DataVF04UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataVF04Payload>
          }
          aggregate: {
            args: Prisma.DataVF04AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataVF04>
          }
          groupBy: {
            args: Prisma.DataVF04GroupByArgs<ExtArgs>
            result: $Utils.Optional<DataVF04GroupByOutputType>[]
          }
          count: {
            args: Prisma.DataVF04CountArgs<ExtArgs>
            result: $Utils.Optional<DataVF04CountAggregateOutputType> | number
          }
        }
      }
      excelBaseUrl: {
        payload: Prisma.$excelBaseUrlPayload<ExtArgs>
        fields: Prisma.excelBaseUrlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.excelBaseUrlFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$excelBaseUrlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.excelBaseUrlFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$excelBaseUrlPayload>
          }
          findFirst: {
            args: Prisma.excelBaseUrlFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$excelBaseUrlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.excelBaseUrlFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$excelBaseUrlPayload>
          }
          findMany: {
            args: Prisma.excelBaseUrlFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$excelBaseUrlPayload>[]
          }
          create: {
            args: Prisma.excelBaseUrlCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$excelBaseUrlPayload>
          }
          createMany: {
            args: Prisma.excelBaseUrlCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.excelBaseUrlDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$excelBaseUrlPayload>
          }
          update: {
            args: Prisma.excelBaseUrlUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$excelBaseUrlPayload>
          }
          deleteMany: {
            args: Prisma.excelBaseUrlDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.excelBaseUrlUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.excelBaseUrlUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$excelBaseUrlPayload>
          }
          aggregate: {
            args: Prisma.ExcelBaseUrlAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExcelBaseUrl>
          }
          groupBy: {
            args: Prisma.excelBaseUrlGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExcelBaseUrlGroupByOutputType>[]
          }
          count: {
            args: Prisma.excelBaseUrlCountArgs<ExtArgs>
            result: $Utils.Optional<ExcelBaseUrlCountAggregateOutputType> | number
          }
        }
      }
      excelSheet: {
        payload: Prisma.$excelSheetPayload<ExtArgs>
        fields: Prisma.excelSheetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.excelSheetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$excelSheetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.excelSheetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$excelSheetPayload>
          }
          findFirst: {
            args: Prisma.excelSheetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$excelSheetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.excelSheetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$excelSheetPayload>
          }
          findMany: {
            args: Prisma.excelSheetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$excelSheetPayload>[]
          }
          create: {
            args: Prisma.excelSheetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$excelSheetPayload>
          }
          createMany: {
            args: Prisma.excelSheetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.excelSheetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$excelSheetPayload>
          }
          update: {
            args: Prisma.excelSheetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$excelSheetPayload>
          }
          deleteMany: {
            args: Prisma.excelSheetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.excelSheetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.excelSheetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$excelSheetPayload>
          }
          aggregate: {
            args: Prisma.ExcelSheetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExcelSheet>
          }
          groupBy: {
            args: Prisma.excelSheetGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExcelSheetGroupByOutputType>[]
          }
          count: {
            args: Prisma.excelSheetCountArgs<ExtArgs>
            result: $Utils.Optional<ExcelSheetCountAggregateOutputType> | number
          }
        }
      }
      log: {
        payload: Prisma.$logPayload<ExtArgs>
        fields: Prisma.logFieldRefs
        operations: {
          findUnique: {
            args: Prisma.logFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.logFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logPayload>
          }
          findFirst: {
            args: Prisma.logFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.logFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logPayload>
          }
          findMany: {
            args: Prisma.logFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logPayload>[]
          }
          create: {
            args: Prisma.logCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logPayload>
          }
          createMany: {
            args: Prisma.logCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.logDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logPayload>
          }
          update: {
            args: Prisma.logUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logPayload>
          }
          deleteMany: {
            args: Prisma.logDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.logUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.logUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logPayload>
          }
          aggregate: {
            args: Prisma.LogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLog>
          }
          groupBy: {
            args: Prisma.logGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogGroupByOutputType>[]
          }
          count: {
            args: Prisma.logCountArgs<ExtArgs>
            result: $Utils.Optional<LogCountAggregateOutputType> | number
          }
        }
      }
      ms_users: {
        payload: Prisma.$ms_usersPayload<ExtArgs>
        fields: Prisma.ms_usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ms_usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ms_usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ms_usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ms_usersPayload>
          }
          findFirst: {
            args: Prisma.ms_usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ms_usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ms_usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ms_usersPayload>
          }
          findMany: {
            args: Prisma.ms_usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ms_usersPayload>[]
          }
          create: {
            args: Prisma.ms_usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ms_usersPayload>
          }
          createMany: {
            args: Prisma.ms_usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ms_usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ms_usersPayload>
          }
          update: {
            args: Prisma.ms_usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ms_usersPayload>
          }
          deleteMany: {
            args: Prisma.ms_usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ms_usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ms_usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ms_usersPayload>
          }
          aggregate: {
            args: Prisma.Ms_usersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMs_users>
          }
          groupBy: {
            args: Prisma.ms_usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ms_usersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ms_usersCountArgs<ExtArgs>
            result: $Utils.Optional<Ms_usersCountAggregateOutputType> | number
          }
        }
      }
      Schedule_Recommendation: {
        payload: Prisma.$Schedule_RecommendationPayload<ExtArgs>
        fields: Prisma.Schedule_RecommendationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Schedule_RecommendationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_RecommendationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Schedule_RecommendationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_RecommendationPayload>
          }
          findFirst: {
            args: Prisma.Schedule_RecommendationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_RecommendationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Schedule_RecommendationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_RecommendationPayload>
          }
          findMany: {
            args: Prisma.Schedule_RecommendationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_RecommendationPayload>[]
          }
          create: {
            args: Prisma.Schedule_RecommendationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_RecommendationPayload>
          }
          createMany: {
            args: Prisma.Schedule_RecommendationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Schedule_RecommendationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_RecommendationPayload>
          }
          update: {
            args: Prisma.Schedule_RecommendationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_RecommendationPayload>
          }
          deleteMany: {
            args: Prisma.Schedule_RecommendationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Schedule_RecommendationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Schedule_RecommendationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_RecommendationPayload>
          }
          aggregate: {
            args: Prisma.Schedule_RecommendationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedule_Recommendation>
          }
          groupBy: {
            args: Prisma.Schedule_RecommendationGroupByArgs<ExtArgs>
            result: $Utils.Optional<Schedule_RecommendationGroupByOutputType>[]
          }
          count: {
            args: Prisma.Schedule_RecommendationCountArgs<ExtArgs>
            result: $Utils.Optional<Schedule_RecommendationCountAggregateOutputType> | number
          }
        }
      }
      siteRoute: {
        payload: Prisma.$siteRoutePayload<ExtArgs>
        fields: Prisma.siteRouteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.siteRouteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$siteRoutePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.siteRouteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$siteRoutePayload>
          }
          findFirst: {
            args: Prisma.siteRouteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$siteRoutePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.siteRouteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$siteRoutePayload>
          }
          findMany: {
            args: Prisma.siteRouteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$siteRoutePayload>[]
          }
          create: {
            args: Prisma.siteRouteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$siteRoutePayload>
          }
          createMany: {
            args: Prisma.siteRouteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.siteRouteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$siteRoutePayload>
          }
          update: {
            args: Prisma.siteRouteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$siteRoutePayload>
          }
          deleteMany: {
            args: Prisma.siteRouteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.siteRouteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.siteRouteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$siteRoutePayload>
          }
          aggregate: {
            args: Prisma.SiteRouteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSiteRoute>
          }
          groupBy: {
            args: Prisma.siteRouteGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteRouteGroupByOutputType>[]
          }
          count: {
            args: Prisma.siteRouteCountArgs<ExtArgs>
            result: $Utils.Optional<SiteRouteCountAggregateOutputType> | number
          }
        }
      }
      sysdiagrams: {
        payload: Prisma.$sysdiagramsPayload<ExtArgs>
        fields: Prisma.sysdiagramsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sysdiagramsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sysdiagramsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload>
          }
          findFirst: {
            args: Prisma.sysdiagramsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sysdiagramsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload>
          }
          findMany: {
            args: Prisma.sysdiagramsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload>[]
          }
          create: {
            args: Prisma.sysdiagramsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload>
          }
          createMany: {
            args: Prisma.sysdiagramsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sysdiagramsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload>
          }
          update: {
            args: Prisma.sysdiagramsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload>
          }
          deleteMany: {
            args: Prisma.sysdiagramsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sysdiagramsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sysdiagramsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload>
          }
          aggregate: {
            args: Prisma.SysdiagramsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSysdiagrams>
          }
          groupBy: {
            args: Prisma.sysdiagramsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SysdiagramsGroupByOutputType>[]
          }
          count: {
            args: Prisma.sysdiagramsCountArgs<ExtArgs>
            result: $Utils.Optional<SysdiagramsCountAggregateOutputType> | number
          }
        }
      }
      trx_PICA: {
        payload: Prisma.$trx_PICAPayload<ExtArgs>
        fields: Prisma.trx_PICAFieldRefs
        operations: {
          findUnique: {
            args: Prisma.trx_PICAFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trx_PICAPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.trx_PICAFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trx_PICAPayload>
          }
          findFirst: {
            args: Prisma.trx_PICAFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trx_PICAPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.trx_PICAFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trx_PICAPayload>
          }
          findMany: {
            args: Prisma.trx_PICAFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trx_PICAPayload>[]
          }
          create: {
            args: Prisma.trx_PICACreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trx_PICAPayload>
          }
          createMany: {
            args: Prisma.trx_PICACreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.trx_PICADeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trx_PICAPayload>
          }
          update: {
            args: Prisma.trx_PICAUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trx_PICAPayload>
          }
          deleteMany: {
            args: Prisma.trx_PICADeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.trx_PICAUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.trx_PICAUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trx_PICAPayload>
          }
          aggregate: {
            args: Prisma.Trx_PICAAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrx_PICA>
          }
          groupBy: {
            args: Prisma.trx_PICAGroupByArgs<ExtArgs>
            result: $Utils.Optional<Trx_PICAGroupByOutputType>[]
          }
          count: {
            args: Prisma.trx_PICACountArgs<ExtArgs>
            result: $Utils.Optional<Trx_PICACountAggregateOutputType> | number
          }
        }
      }
      trx_DetailPICA: {
        payload: Prisma.$trx_DetailPICAPayload<ExtArgs>
        fields: Prisma.trx_DetailPICAFieldRefs
        operations: {
          findUnique: {
            args: Prisma.trx_DetailPICAFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trx_DetailPICAPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.trx_DetailPICAFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trx_DetailPICAPayload>
          }
          findFirst: {
            args: Prisma.trx_DetailPICAFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trx_DetailPICAPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.trx_DetailPICAFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trx_DetailPICAPayload>
          }
          findMany: {
            args: Prisma.trx_DetailPICAFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trx_DetailPICAPayload>[]
          }
          create: {
            args: Prisma.trx_DetailPICACreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trx_DetailPICAPayload>
          }
          createMany: {
            args: Prisma.trx_DetailPICACreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.trx_DetailPICADeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trx_DetailPICAPayload>
          }
          update: {
            args: Prisma.trx_DetailPICAUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trx_DetailPICAPayload>
          }
          deleteMany: {
            args: Prisma.trx_DetailPICADeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.trx_DetailPICAUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.trx_DetailPICAUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trx_DetailPICAPayload>
          }
          aggregate: {
            args: Prisma.Trx_DetailPICAAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrx_DetailPICA>
          }
          groupBy: {
            args: Prisma.trx_DetailPICAGroupByArgs<ExtArgs>
            result: $Utils.Optional<Trx_DetailPICAGroupByOutputType>[]
          }
          count: {
            args: Prisma.trx_DetailPICACountArgs<ExtArgs>
            result: $Utils.Optional<Trx_DetailPICACountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      trx_LogHistory: {
        payload: Prisma.$trx_LogHistoryPayload<ExtArgs>
        fields: Prisma.trx_LogHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.trx_LogHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trx_LogHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.trx_LogHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trx_LogHistoryPayload>
          }
          findFirst: {
            args: Prisma.trx_LogHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trx_LogHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.trx_LogHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trx_LogHistoryPayload>
          }
          findMany: {
            args: Prisma.trx_LogHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trx_LogHistoryPayload>[]
          }
          create: {
            args: Prisma.trx_LogHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trx_LogHistoryPayload>
          }
          createMany: {
            args: Prisma.trx_LogHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.trx_LogHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trx_LogHistoryPayload>
          }
          update: {
            args: Prisma.trx_LogHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trx_LogHistoryPayload>
          }
          deleteMany: {
            args: Prisma.trx_LogHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.trx_LogHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.trx_LogHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trx_LogHistoryPayload>
          }
          aggregate: {
            args: Prisma.Trx_LogHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrx_LogHistory>
          }
          groupBy: {
            args: Prisma.trx_LogHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<Trx_LogHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.trx_LogHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<Trx_LogHistoryCountAggregateOutputType> | number
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
    dataFBL5N?: DataFBL5NOmit
    dataVF04?: DataVF04Omit
    excelBaseUrl?: excelBaseUrlOmit
    excelSheet?: excelSheetOmit
    log?: logOmit
    ms_users?: ms_usersOmit
    schedule_Recommendation?: Schedule_RecommendationOmit
    siteRoute?: siteRouteOmit
    sysdiagrams?: sysdiagramsOmit
    trx_PICA?: trx_PICAOmit
    trx_DetailPICA?: trx_DetailPICAOmit
    users?: usersOmit
    trx_LogHistory?: trx_LogHistoryOmit
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
   * Count Type ExcelBaseUrlCountOutputType
   */

  export type ExcelBaseUrlCountOutputType = {
    excelSheet: number
  }

  export type ExcelBaseUrlCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    excelSheet?: boolean | ExcelBaseUrlCountOutputTypeCountExcelSheetArgs
  }

  // Custom InputTypes
  /**
   * ExcelBaseUrlCountOutputType without action
   */
  export type ExcelBaseUrlCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExcelBaseUrlCountOutputType
     */
    select?: ExcelBaseUrlCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExcelBaseUrlCountOutputType without action
   */
  export type ExcelBaseUrlCountOutputTypeCountExcelSheetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: excelSheetWhereInput
  }


  /**
   * Count Type Ms_usersCountOutputType
   */

  export type Ms_usersCountOutputType = {
    trx_LogHistory_trx_LogHistory_PICBAToms_users: number
    trx_LogHistory_trx_LogHistory_PICUserToms_users: number
  }

  export type Ms_usersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trx_LogHistory_trx_LogHistory_PICBAToms_users?: boolean | Ms_usersCountOutputTypeCountTrx_LogHistory_trx_LogHistory_PICBAToms_usersArgs
    trx_LogHistory_trx_LogHistory_PICUserToms_users?: boolean | Ms_usersCountOutputTypeCountTrx_LogHistory_trx_LogHistory_PICUserToms_usersArgs
  }

  // Custom InputTypes
  /**
   * Ms_usersCountOutputType without action
   */
  export type Ms_usersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ms_usersCountOutputType
     */
    select?: Ms_usersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Ms_usersCountOutputType without action
   */
  export type Ms_usersCountOutputTypeCountTrx_LogHistory_trx_LogHistory_PICBAToms_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: trx_LogHistoryWhereInput
  }

  /**
   * Ms_usersCountOutputType without action
   */
  export type Ms_usersCountOutputTypeCountTrx_LogHistory_trx_LogHistory_PICUserToms_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: trx_LogHistoryWhereInput
  }


  /**
   * Count Type Trx_PICACountOutputType
   */

  export type Trx_PICACountOutputType = {
    trx_DetailPICA: number
  }

  export type Trx_PICACountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trx_DetailPICA?: boolean | Trx_PICACountOutputTypeCountTrx_DetailPICAArgs
  }

  // Custom InputTypes
  /**
   * Trx_PICACountOutputType without action
   */
  export type Trx_PICACountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trx_PICACountOutputType
     */
    select?: Trx_PICACountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Trx_PICACountOutputType without action
   */
  export type Trx_PICACountOutputTypeCountTrx_DetailPICAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: trx_DetailPICAWhereInput
  }


  /**
   * Count Type Trx_LogHistoryCountOutputType
   */

  export type Trx_LogHistoryCountOutputType = {
    trx_PICA: number
  }

  export type Trx_LogHistoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trx_PICA?: boolean | Trx_LogHistoryCountOutputTypeCountTrx_PICAArgs
  }

  // Custom InputTypes
  /**
   * Trx_LogHistoryCountOutputType without action
   */
  export type Trx_LogHistoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trx_LogHistoryCountOutputType
     */
    select?: Trx_LogHistoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Trx_LogHistoryCountOutputType without action
   */
  export type Trx_LogHistoryCountOutputTypeCountTrx_PICAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: trx_PICAWhereInput
  }


  /**
   * Models
   */

  /**
   * Model DataFBL5N
   */

  export type AggregateDataFBL5N = {
    _count: DataFBL5NCountAggregateOutputType | null
    _avg: DataFBL5NAvgAggregateOutputType | null
    _sum: DataFBL5NSumAggregateOutputType | null
    _min: DataFBL5NMinAggregateOutputType | null
    _max: DataFBL5NMaxAggregateOutputType | null
  }

  export type DataFBL5NAvgAggregateOutputType = {
    ID: number | null
    AmountDocCurr: number | null
    AmountLocalCurrency: number | null
  }

  export type DataFBL5NSumAggregateOutputType = {
    ID: bigint | null
    AmountDocCurr: number | null
    AmountLocalCurrency: number | null
  }

  export type DataFBL5NMinAggregateOutputType = {
    ID: bigint | null
    GLAccount: string | null
    Reference: string | null
    Assignment: string | null
    DocumentNumber: string | null
    DocumentType: string | null
    PostingDate: Date | null
    ClearingDate: Date | null
    DocumentDate: Date | null
    NetDueDate: Date | null
    SpecialGLInd: string | null
    BusinessArea: string | null
    Plant: string | null
    ProfitCenter: string | null
    Account: string | null
    CustomerName: string | null
    AmountDocCurr: number | null
    DocumentCurrency: string | null
    AmountLocalCurrency: number | null
    LocalCurrency: string | null
    ReverseClearing: string | null
    PostingKey: string | null
    DebitCreditInd: string | null
    ClearingDocument: string | null
    Username: string | null
    Text: string | null
    CompanyCode: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DataFBL5NMaxAggregateOutputType = {
    ID: bigint | null
    GLAccount: string | null
    Reference: string | null
    Assignment: string | null
    DocumentNumber: string | null
    DocumentType: string | null
    PostingDate: Date | null
    ClearingDate: Date | null
    DocumentDate: Date | null
    NetDueDate: Date | null
    SpecialGLInd: string | null
    BusinessArea: string | null
    Plant: string | null
    ProfitCenter: string | null
    Account: string | null
    CustomerName: string | null
    AmountDocCurr: number | null
    DocumentCurrency: string | null
    AmountLocalCurrency: number | null
    LocalCurrency: string | null
    ReverseClearing: string | null
    PostingKey: string | null
    DebitCreditInd: string | null
    ClearingDocument: string | null
    Username: string | null
    Text: string | null
    CompanyCode: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DataFBL5NCountAggregateOutputType = {
    ID: number
    GLAccount: number
    Reference: number
    Assignment: number
    DocumentNumber: number
    DocumentType: number
    PostingDate: number
    ClearingDate: number
    DocumentDate: number
    NetDueDate: number
    SpecialGLInd: number
    BusinessArea: number
    Plant: number
    ProfitCenter: number
    Account: number
    CustomerName: number
    AmountDocCurr: number
    DocumentCurrency: number
    AmountLocalCurrency: number
    LocalCurrency: number
    ReverseClearing: number
    PostingKey: number
    DebitCreditInd: number
    ClearingDocument: number
    Username: number
    Text: number
    CompanyCode: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type DataFBL5NAvgAggregateInputType = {
    ID?: true
    AmountDocCurr?: true
    AmountLocalCurrency?: true
  }

  export type DataFBL5NSumAggregateInputType = {
    ID?: true
    AmountDocCurr?: true
    AmountLocalCurrency?: true
  }

  export type DataFBL5NMinAggregateInputType = {
    ID?: true
    GLAccount?: true
    Reference?: true
    Assignment?: true
    DocumentNumber?: true
    DocumentType?: true
    PostingDate?: true
    ClearingDate?: true
    DocumentDate?: true
    NetDueDate?: true
    SpecialGLInd?: true
    BusinessArea?: true
    Plant?: true
    ProfitCenter?: true
    Account?: true
    CustomerName?: true
    AmountDocCurr?: true
    DocumentCurrency?: true
    AmountLocalCurrency?: true
    LocalCurrency?: true
    ReverseClearing?: true
    PostingKey?: true
    DebitCreditInd?: true
    ClearingDocument?: true
    Username?: true
    Text?: true
    CompanyCode?: true
    created_at?: true
    updated_at?: true
  }

  export type DataFBL5NMaxAggregateInputType = {
    ID?: true
    GLAccount?: true
    Reference?: true
    Assignment?: true
    DocumentNumber?: true
    DocumentType?: true
    PostingDate?: true
    ClearingDate?: true
    DocumentDate?: true
    NetDueDate?: true
    SpecialGLInd?: true
    BusinessArea?: true
    Plant?: true
    ProfitCenter?: true
    Account?: true
    CustomerName?: true
    AmountDocCurr?: true
    DocumentCurrency?: true
    AmountLocalCurrency?: true
    LocalCurrency?: true
    ReverseClearing?: true
    PostingKey?: true
    DebitCreditInd?: true
    ClearingDocument?: true
    Username?: true
    Text?: true
    CompanyCode?: true
    created_at?: true
    updated_at?: true
  }

  export type DataFBL5NCountAggregateInputType = {
    ID?: true
    GLAccount?: true
    Reference?: true
    Assignment?: true
    DocumentNumber?: true
    DocumentType?: true
    PostingDate?: true
    ClearingDate?: true
    DocumentDate?: true
    NetDueDate?: true
    SpecialGLInd?: true
    BusinessArea?: true
    Plant?: true
    ProfitCenter?: true
    Account?: true
    CustomerName?: true
    AmountDocCurr?: true
    DocumentCurrency?: true
    AmountLocalCurrency?: true
    LocalCurrency?: true
    ReverseClearing?: true
    PostingKey?: true
    DebitCreditInd?: true
    ClearingDocument?: true
    Username?: true
    Text?: true
    CompanyCode?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type DataFBL5NAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataFBL5N to aggregate.
     */
    where?: DataFBL5NWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataFBL5NS to fetch.
     */
    orderBy?: DataFBL5NOrderByWithRelationInput | DataFBL5NOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DataFBL5NWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataFBL5NS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataFBL5NS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DataFBL5NS
    **/
    _count?: true | DataFBL5NCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DataFBL5NAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DataFBL5NSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataFBL5NMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataFBL5NMaxAggregateInputType
  }

  export type GetDataFBL5NAggregateType<T extends DataFBL5NAggregateArgs> = {
        [P in keyof T & keyof AggregateDataFBL5N]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataFBL5N[P]>
      : GetScalarType<T[P], AggregateDataFBL5N[P]>
  }




  export type DataFBL5NGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataFBL5NWhereInput
    orderBy?: DataFBL5NOrderByWithAggregationInput | DataFBL5NOrderByWithAggregationInput[]
    by: DataFBL5NScalarFieldEnum[] | DataFBL5NScalarFieldEnum
    having?: DataFBL5NScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataFBL5NCountAggregateInputType | true
    _avg?: DataFBL5NAvgAggregateInputType
    _sum?: DataFBL5NSumAggregateInputType
    _min?: DataFBL5NMinAggregateInputType
    _max?: DataFBL5NMaxAggregateInputType
  }

  export type DataFBL5NGroupByOutputType = {
    ID: bigint
    GLAccount: string | null
    Reference: string | null
    Assignment: string | null
    DocumentNumber: string | null
    DocumentType: string | null
    PostingDate: Date | null
    ClearingDate: Date | null
    DocumentDate: Date | null
    NetDueDate: Date | null
    SpecialGLInd: string | null
    BusinessArea: string | null
    Plant: string | null
    ProfitCenter: string | null
    Account: string | null
    CustomerName: string | null
    AmountDocCurr: number | null
    DocumentCurrency: string | null
    AmountLocalCurrency: number | null
    LocalCurrency: string | null
    ReverseClearing: string | null
    PostingKey: string | null
    DebitCreditInd: string | null
    ClearingDocument: string | null
    Username: string | null
    Text: string | null
    CompanyCode: string | null
    created_at: Date | null
    updated_at: Date
    _count: DataFBL5NCountAggregateOutputType | null
    _avg: DataFBL5NAvgAggregateOutputType | null
    _sum: DataFBL5NSumAggregateOutputType | null
    _min: DataFBL5NMinAggregateOutputType | null
    _max: DataFBL5NMaxAggregateOutputType | null
  }

  type GetDataFBL5NGroupByPayload<T extends DataFBL5NGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataFBL5NGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataFBL5NGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataFBL5NGroupByOutputType[P]>
            : GetScalarType<T[P], DataFBL5NGroupByOutputType[P]>
        }
      >
    >


  export type DataFBL5NSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    GLAccount?: boolean
    Reference?: boolean
    Assignment?: boolean
    DocumentNumber?: boolean
    DocumentType?: boolean
    PostingDate?: boolean
    ClearingDate?: boolean
    DocumentDate?: boolean
    NetDueDate?: boolean
    SpecialGLInd?: boolean
    BusinessArea?: boolean
    Plant?: boolean
    ProfitCenter?: boolean
    Account?: boolean
    CustomerName?: boolean
    AmountDocCurr?: boolean
    DocumentCurrency?: boolean
    AmountLocalCurrency?: boolean
    LocalCurrency?: boolean
    ReverseClearing?: boolean
    PostingKey?: boolean
    DebitCreditInd?: boolean
    ClearingDocument?: boolean
    Username?: boolean
    Text?: boolean
    CompanyCode?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["dataFBL5N"]>



  export type DataFBL5NSelectScalar = {
    ID?: boolean
    GLAccount?: boolean
    Reference?: boolean
    Assignment?: boolean
    DocumentNumber?: boolean
    DocumentType?: boolean
    PostingDate?: boolean
    ClearingDate?: boolean
    DocumentDate?: boolean
    NetDueDate?: boolean
    SpecialGLInd?: boolean
    BusinessArea?: boolean
    Plant?: boolean
    ProfitCenter?: boolean
    Account?: boolean
    CustomerName?: boolean
    AmountDocCurr?: boolean
    DocumentCurrency?: boolean
    AmountLocalCurrency?: boolean
    LocalCurrency?: boolean
    ReverseClearing?: boolean
    PostingKey?: boolean
    DebitCreditInd?: boolean
    ClearingDocument?: boolean
    Username?: boolean
    Text?: boolean
    CompanyCode?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type DataFBL5NOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "GLAccount" | "Reference" | "Assignment" | "DocumentNumber" | "DocumentType" | "PostingDate" | "ClearingDate" | "DocumentDate" | "NetDueDate" | "SpecialGLInd" | "BusinessArea" | "Plant" | "ProfitCenter" | "Account" | "CustomerName" | "AmountDocCurr" | "DocumentCurrency" | "AmountLocalCurrency" | "LocalCurrency" | "ReverseClearing" | "PostingKey" | "DebitCreditInd" | "ClearingDocument" | "Username" | "Text" | "CompanyCode" | "created_at" | "updated_at", ExtArgs["result"]["dataFBL5N"]>

  export type $DataFBL5NPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DataFBL5N"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: bigint
      GLAccount: string | null
      Reference: string | null
      Assignment: string | null
      DocumentNumber: string | null
      DocumentType: string | null
      PostingDate: Date | null
      ClearingDate: Date | null
      DocumentDate: Date | null
      NetDueDate: Date | null
      SpecialGLInd: string | null
      BusinessArea: string | null
      Plant: string | null
      ProfitCenter: string | null
      Account: string | null
      CustomerName: string | null
      AmountDocCurr: number | null
      DocumentCurrency: string | null
      AmountLocalCurrency: number | null
      LocalCurrency: string | null
      ReverseClearing: string | null
      PostingKey: string | null
      DebitCreditInd: string | null
      ClearingDocument: string | null
      Username: string | null
      Text: string | null
      CompanyCode: string | null
      created_at: Date | null
      updated_at: Date
    }, ExtArgs["result"]["dataFBL5N"]>
    composites: {}
  }

  type DataFBL5NGetPayload<S extends boolean | null | undefined | DataFBL5NDefaultArgs> = $Result.GetResult<Prisma.$DataFBL5NPayload, S>

  type DataFBL5NCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DataFBL5NFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DataFBL5NCountAggregateInputType | true
    }

  export interface DataFBL5NDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DataFBL5N'], meta: { name: 'DataFBL5N' } }
    /**
     * Find zero or one DataFBL5N that matches the filter.
     * @param {DataFBL5NFindUniqueArgs} args - Arguments to find a DataFBL5N
     * @example
     * // Get one DataFBL5N
     * const dataFBL5N = await prisma.dataFBL5N.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DataFBL5NFindUniqueArgs>(args: SelectSubset<T, DataFBL5NFindUniqueArgs<ExtArgs>>): Prisma__DataFBL5NClient<$Result.GetResult<Prisma.$DataFBL5NPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DataFBL5N that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DataFBL5NFindUniqueOrThrowArgs} args - Arguments to find a DataFBL5N
     * @example
     * // Get one DataFBL5N
     * const dataFBL5N = await prisma.dataFBL5N.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DataFBL5NFindUniqueOrThrowArgs>(args: SelectSubset<T, DataFBL5NFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DataFBL5NClient<$Result.GetResult<Prisma.$DataFBL5NPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataFBL5N that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataFBL5NFindFirstArgs} args - Arguments to find a DataFBL5N
     * @example
     * // Get one DataFBL5N
     * const dataFBL5N = await prisma.dataFBL5N.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DataFBL5NFindFirstArgs>(args?: SelectSubset<T, DataFBL5NFindFirstArgs<ExtArgs>>): Prisma__DataFBL5NClient<$Result.GetResult<Prisma.$DataFBL5NPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataFBL5N that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataFBL5NFindFirstOrThrowArgs} args - Arguments to find a DataFBL5N
     * @example
     * // Get one DataFBL5N
     * const dataFBL5N = await prisma.dataFBL5N.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DataFBL5NFindFirstOrThrowArgs>(args?: SelectSubset<T, DataFBL5NFindFirstOrThrowArgs<ExtArgs>>): Prisma__DataFBL5NClient<$Result.GetResult<Prisma.$DataFBL5NPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DataFBL5NS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataFBL5NFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataFBL5NS
     * const dataFBL5NS = await prisma.dataFBL5N.findMany()
     * 
     * // Get first 10 DataFBL5NS
     * const dataFBL5NS = await prisma.dataFBL5N.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const dataFBL5NWithIDOnly = await prisma.dataFBL5N.findMany({ select: { ID: true } })
     * 
     */
    findMany<T extends DataFBL5NFindManyArgs>(args?: SelectSubset<T, DataFBL5NFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataFBL5NPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DataFBL5N.
     * @param {DataFBL5NCreateArgs} args - Arguments to create a DataFBL5N.
     * @example
     * // Create one DataFBL5N
     * const DataFBL5N = await prisma.dataFBL5N.create({
     *   data: {
     *     // ... data to create a DataFBL5N
     *   }
     * })
     * 
     */
    create<T extends DataFBL5NCreateArgs>(args: SelectSubset<T, DataFBL5NCreateArgs<ExtArgs>>): Prisma__DataFBL5NClient<$Result.GetResult<Prisma.$DataFBL5NPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DataFBL5NS.
     * @param {DataFBL5NCreateManyArgs} args - Arguments to create many DataFBL5NS.
     * @example
     * // Create many DataFBL5NS
     * const dataFBL5N = await prisma.dataFBL5N.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DataFBL5NCreateManyArgs>(args?: SelectSubset<T, DataFBL5NCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DataFBL5N.
     * @param {DataFBL5NDeleteArgs} args - Arguments to delete one DataFBL5N.
     * @example
     * // Delete one DataFBL5N
     * const DataFBL5N = await prisma.dataFBL5N.delete({
     *   where: {
     *     // ... filter to delete one DataFBL5N
     *   }
     * })
     * 
     */
    delete<T extends DataFBL5NDeleteArgs>(args: SelectSubset<T, DataFBL5NDeleteArgs<ExtArgs>>): Prisma__DataFBL5NClient<$Result.GetResult<Prisma.$DataFBL5NPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DataFBL5N.
     * @param {DataFBL5NUpdateArgs} args - Arguments to update one DataFBL5N.
     * @example
     * // Update one DataFBL5N
     * const dataFBL5N = await prisma.dataFBL5N.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DataFBL5NUpdateArgs>(args: SelectSubset<T, DataFBL5NUpdateArgs<ExtArgs>>): Prisma__DataFBL5NClient<$Result.GetResult<Prisma.$DataFBL5NPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DataFBL5NS.
     * @param {DataFBL5NDeleteManyArgs} args - Arguments to filter DataFBL5NS to delete.
     * @example
     * // Delete a few DataFBL5NS
     * const { count } = await prisma.dataFBL5N.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DataFBL5NDeleteManyArgs>(args?: SelectSubset<T, DataFBL5NDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataFBL5NS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataFBL5NUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataFBL5NS
     * const dataFBL5N = await prisma.dataFBL5N.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DataFBL5NUpdateManyArgs>(args: SelectSubset<T, DataFBL5NUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DataFBL5N.
     * @param {DataFBL5NUpsertArgs} args - Arguments to update or create a DataFBL5N.
     * @example
     * // Update or create a DataFBL5N
     * const dataFBL5N = await prisma.dataFBL5N.upsert({
     *   create: {
     *     // ... data to create a DataFBL5N
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataFBL5N we want to update
     *   }
     * })
     */
    upsert<T extends DataFBL5NUpsertArgs>(args: SelectSubset<T, DataFBL5NUpsertArgs<ExtArgs>>): Prisma__DataFBL5NClient<$Result.GetResult<Prisma.$DataFBL5NPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DataFBL5NS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataFBL5NCountArgs} args - Arguments to filter DataFBL5NS to count.
     * @example
     * // Count the number of DataFBL5NS
     * const count = await prisma.dataFBL5N.count({
     *   where: {
     *     // ... the filter for the DataFBL5NS we want to count
     *   }
     * })
    **/
    count<T extends DataFBL5NCountArgs>(
      args?: Subset<T, DataFBL5NCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataFBL5NCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataFBL5N.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataFBL5NAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DataFBL5NAggregateArgs>(args: Subset<T, DataFBL5NAggregateArgs>): Prisma.PrismaPromise<GetDataFBL5NAggregateType<T>>

    /**
     * Group by DataFBL5N.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataFBL5NGroupByArgs} args - Group by arguments.
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
      T extends DataFBL5NGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataFBL5NGroupByArgs['orderBy'] }
        : { orderBy?: DataFBL5NGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DataFBL5NGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataFBL5NGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DataFBL5N model
   */
  readonly fields: DataFBL5NFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DataFBL5N.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DataFBL5NClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DataFBL5N model
   */
  interface DataFBL5NFieldRefs {
    readonly ID: FieldRef<"DataFBL5N", 'BigInt'>
    readonly GLAccount: FieldRef<"DataFBL5N", 'String'>
    readonly Reference: FieldRef<"DataFBL5N", 'String'>
    readonly Assignment: FieldRef<"DataFBL5N", 'String'>
    readonly DocumentNumber: FieldRef<"DataFBL5N", 'String'>
    readonly DocumentType: FieldRef<"DataFBL5N", 'String'>
    readonly PostingDate: FieldRef<"DataFBL5N", 'DateTime'>
    readonly ClearingDate: FieldRef<"DataFBL5N", 'DateTime'>
    readonly DocumentDate: FieldRef<"DataFBL5N", 'DateTime'>
    readonly NetDueDate: FieldRef<"DataFBL5N", 'DateTime'>
    readonly SpecialGLInd: FieldRef<"DataFBL5N", 'String'>
    readonly BusinessArea: FieldRef<"DataFBL5N", 'String'>
    readonly Plant: FieldRef<"DataFBL5N", 'String'>
    readonly ProfitCenter: FieldRef<"DataFBL5N", 'String'>
    readonly Account: FieldRef<"DataFBL5N", 'String'>
    readonly CustomerName: FieldRef<"DataFBL5N", 'String'>
    readonly AmountDocCurr: FieldRef<"DataFBL5N", 'Float'>
    readonly DocumentCurrency: FieldRef<"DataFBL5N", 'String'>
    readonly AmountLocalCurrency: FieldRef<"DataFBL5N", 'Float'>
    readonly LocalCurrency: FieldRef<"DataFBL5N", 'String'>
    readonly ReverseClearing: FieldRef<"DataFBL5N", 'String'>
    readonly PostingKey: FieldRef<"DataFBL5N", 'String'>
    readonly DebitCreditInd: FieldRef<"DataFBL5N", 'String'>
    readonly ClearingDocument: FieldRef<"DataFBL5N", 'String'>
    readonly Username: FieldRef<"DataFBL5N", 'String'>
    readonly Text: FieldRef<"DataFBL5N", 'String'>
    readonly CompanyCode: FieldRef<"DataFBL5N", 'String'>
    readonly created_at: FieldRef<"DataFBL5N", 'DateTime'>
    readonly updated_at: FieldRef<"DataFBL5N", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DataFBL5N findUnique
   */
  export type DataFBL5NFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataFBL5N
     */
    select?: DataFBL5NSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataFBL5N
     */
    omit?: DataFBL5NOmit<ExtArgs> | null
    /**
     * Filter, which DataFBL5N to fetch.
     */
    where: DataFBL5NWhereUniqueInput
  }

  /**
   * DataFBL5N findUniqueOrThrow
   */
  export type DataFBL5NFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataFBL5N
     */
    select?: DataFBL5NSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataFBL5N
     */
    omit?: DataFBL5NOmit<ExtArgs> | null
    /**
     * Filter, which DataFBL5N to fetch.
     */
    where: DataFBL5NWhereUniqueInput
  }

  /**
   * DataFBL5N findFirst
   */
  export type DataFBL5NFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataFBL5N
     */
    select?: DataFBL5NSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataFBL5N
     */
    omit?: DataFBL5NOmit<ExtArgs> | null
    /**
     * Filter, which DataFBL5N to fetch.
     */
    where?: DataFBL5NWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataFBL5NS to fetch.
     */
    orderBy?: DataFBL5NOrderByWithRelationInput | DataFBL5NOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataFBL5NS.
     */
    cursor?: DataFBL5NWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataFBL5NS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataFBL5NS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataFBL5NS.
     */
    distinct?: DataFBL5NScalarFieldEnum | DataFBL5NScalarFieldEnum[]
  }

  /**
   * DataFBL5N findFirstOrThrow
   */
  export type DataFBL5NFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataFBL5N
     */
    select?: DataFBL5NSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataFBL5N
     */
    omit?: DataFBL5NOmit<ExtArgs> | null
    /**
     * Filter, which DataFBL5N to fetch.
     */
    where?: DataFBL5NWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataFBL5NS to fetch.
     */
    orderBy?: DataFBL5NOrderByWithRelationInput | DataFBL5NOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataFBL5NS.
     */
    cursor?: DataFBL5NWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataFBL5NS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataFBL5NS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataFBL5NS.
     */
    distinct?: DataFBL5NScalarFieldEnum | DataFBL5NScalarFieldEnum[]
  }

  /**
   * DataFBL5N findMany
   */
  export type DataFBL5NFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataFBL5N
     */
    select?: DataFBL5NSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataFBL5N
     */
    omit?: DataFBL5NOmit<ExtArgs> | null
    /**
     * Filter, which DataFBL5NS to fetch.
     */
    where?: DataFBL5NWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataFBL5NS to fetch.
     */
    orderBy?: DataFBL5NOrderByWithRelationInput | DataFBL5NOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DataFBL5NS.
     */
    cursor?: DataFBL5NWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataFBL5NS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataFBL5NS.
     */
    skip?: number
    distinct?: DataFBL5NScalarFieldEnum | DataFBL5NScalarFieldEnum[]
  }

  /**
   * DataFBL5N create
   */
  export type DataFBL5NCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataFBL5N
     */
    select?: DataFBL5NSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataFBL5N
     */
    omit?: DataFBL5NOmit<ExtArgs> | null
    /**
     * The data needed to create a DataFBL5N.
     */
    data: XOR<DataFBL5NCreateInput, DataFBL5NUncheckedCreateInput>
  }

  /**
   * DataFBL5N createMany
   */
  export type DataFBL5NCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DataFBL5NS.
     */
    data: DataFBL5NCreateManyInput | DataFBL5NCreateManyInput[]
  }

  /**
   * DataFBL5N update
   */
  export type DataFBL5NUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataFBL5N
     */
    select?: DataFBL5NSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataFBL5N
     */
    omit?: DataFBL5NOmit<ExtArgs> | null
    /**
     * The data needed to update a DataFBL5N.
     */
    data: XOR<DataFBL5NUpdateInput, DataFBL5NUncheckedUpdateInput>
    /**
     * Choose, which DataFBL5N to update.
     */
    where: DataFBL5NWhereUniqueInput
  }

  /**
   * DataFBL5N updateMany
   */
  export type DataFBL5NUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DataFBL5NS.
     */
    data: XOR<DataFBL5NUpdateManyMutationInput, DataFBL5NUncheckedUpdateManyInput>
    /**
     * Filter which DataFBL5NS to update
     */
    where?: DataFBL5NWhereInput
    /**
     * Limit how many DataFBL5NS to update.
     */
    limit?: number
  }

  /**
   * DataFBL5N upsert
   */
  export type DataFBL5NUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataFBL5N
     */
    select?: DataFBL5NSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataFBL5N
     */
    omit?: DataFBL5NOmit<ExtArgs> | null
    /**
     * The filter to search for the DataFBL5N to update in case it exists.
     */
    where: DataFBL5NWhereUniqueInput
    /**
     * In case the DataFBL5N found by the `where` argument doesn't exist, create a new DataFBL5N with this data.
     */
    create: XOR<DataFBL5NCreateInput, DataFBL5NUncheckedCreateInput>
    /**
     * In case the DataFBL5N was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DataFBL5NUpdateInput, DataFBL5NUncheckedUpdateInput>
  }

  /**
   * DataFBL5N delete
   */
  export type DataFBL5NDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataFBL5N
     */
    select?: DataFBL5NSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataFBL5N
     */
    omit?: DataFBL5NOmit<ExtArgs> | null
    /**
     * Filter which DataFBL5N to delete.
     */
    where: DataFBL5NWhereUniqueInput
  }

  /**
   * DataFBL5N deleteMany
   */
  export type DataFBL5NDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataFBL5NS to delete
     */
    where?: DataFBL5NWhereInput
    /**
     * Limit how many DataFBL5NS to delete.
     */
    limit?: number
  }

  /**
   * DataFBL5N without action
   */
  export type DataFBL5NDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataFBL5N
     */
    select?: DataFBL5NSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataFBL5N
     */
    omit?: DataFBL5NOmit<ExtArgs> | null
  }


  /**
   * Model DataVF04
   */

  export type AggregateDataVF04 = {
    _count: DataVF04CountAggregateOutputType | null
    _avg: DataVF04AvgAggregateOutputType | null
    _sum: DataVF04SumAggregateOutputType | null
    _min: DataVF04MinAggregateOutputType | null
    _max: DataVF04MaxAggregateOutputType | null
  }

  export type DataVF04AvgAggregateOutputType = {
    ID: number | null
    SalesOrg: number | null
    SalesDocument: number | null
    DistributionChannel: number | null
    Division: number | null
    Address: number | null
    SOPOAmount: number | null
    Exrate: number | null
  }

  export type DataVF04SumAggregateOutputType = {
    ID: bigint | null
    SalesOrg: bigint | null
    SalesDocument: bigint | null
    DistributionChannel: bigint | null
    Division: bigint | null
    Address: bigint | null
    SOPOAmount: number | null
    Exrate: number | null
  }

  export type DataVF04MinAggregateOutputType = {
    ID: bigint | null
    BillCategory: string | null
    SalesOrg: bigint | null
    BillDate: Date | null
    SoldToParty: string | null
    BillType: string | null
    Country: string | null
    SalesDocument: bigint | null
    DistributionChannel: bigint | null
    Division: bigint | null
    DocCategory: string | null
    Address: bigint | null
    NameSoldToParty: string | null
    LocSoldToParty: string | null
    SortTerm: string | null
    ItemsRead: string | null
    Counter: string | null
    ShippingPoint: string | null
    PODStatus: string | null
    NetValue: string | null
    DocCurrency: string | null
    SDDocumentType: string | null
    NameSDType: string | null
    BDRSrcDoc: string | null
    RefSys: string | null
    DraftMode: string | null
    DBDRef: string | null
    SolutionOrder: string | null
    BillDate2: Date | null
    BillType2: string | null
    Groups: string | null
    PONumber: string | null
    ShippingPointDesc: string | null
    SOPOAmount: number | null
    Exrate: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DataVF04MaxAggregateOutputType = {
    ID: bigint | null
    BillCategory: string | null
    SalesOrg: bigint | null
    BillDate: Date | null
    SoldToParty: string | null
    BillType: string | null
    Country: string | null
    SalesDocument: bigint | null
    DistributionChannel: bigint | null
    Division: bigint | null
    DocCategory: string | null
    Address: bigint | null
    NameSoldToParty: string | null
    LocSoldToParty: string | null
    SortTerm: string | null
    ItemsRead: string | null
    Counter: string | null
    ShippingPoint: string | null
    PODStatus: string | null
    NetValue: string | null
    DocCurrency: string | null
    SDDocumentType: string | null
    NameSDType: string | null
    BDRSrcDoc: string | null
    RefSys: string | null
    DraftMode: string | null
    DBDRef: string | null
    SolutionOrder: string | null
    BillDate2: Date | null
    BillType2: string | null
    Groups: string | null
    PONumber: string | null
    ShippingPointDesc: string | null
    SOPOAmount: number | null
    Exrate: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DataVF04CountAggregateOutputType = {
    ID: number
    BillCategory: number
    SalesOrg: number
    BillDate: number
    SoldToParty: number
    BillType: number
    Country: number
    SalesDocument: number
    DistributionChannel: number
    Division: number
    DocCategory: number
    Address: number
    NameSoldToParty: number
    LocSoldToParty: number
    SortTerm: number
    ItemsRead: number
    Counter: number
    ShippingPoint: number
    PODStatus: number
    NetValue: number
    DocCurrency: number
    SDDocumentType: number
    NameSDType: number
    BDRSrcDoc: number
    RefSys: number
    DraftMode: number
    DBDRef: number
    SolutionOrder: number
    BillDate2: number
    BillType2: number
    Groups: number
    PONumber: number
    ShippingPointDesc: number
    SOPOAmount: number
    Exrate: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type DataVF04AvgAggregateInputType = {
    ID?: true
    SalesOrg?: true
    SalesDocument?: true
    DistributionChannel?: true
    Division?: true
    Address?: true
    SOPOAmount?: true
    Exrate?: true
  }

  export type DataVF04SumAggregateInputType = {
    ID?: true
    SalesOrg?: true
    SalesDocument?: true
    DistributionChannel?: true
    Division?: true
    Address?: true
    SOPOAmount?: true
    Exrate?: true
  }

  export type DataVF04MinAggregateInputType = {
    ID?: true
    BillCategory?: true
    SalesOrg?: true
    BillDate?: true
    SoldToParty?: true
    BillType?: true
    Country?: true
    SalesDocument?: true
    DistributionChannel?: true
    Division?: true
    DocCategory?: true
    Address?: true
    NameSoldToParty?: true
    LocSoldToParty?: true
    SortTerm?: true
    ItemsRead?: true
    Counter?: true
    ShippingPoint?: true
    PODStatus?: true
    NetValue?: true
    DocCurrency?: true
    SDDocumentType?: true
    NameSDType?: true
    BDRSrcDoc?: true
    RefSys?: true
    DraftMode?: true
    DBDRef?: true
    SolutionOrder?: true
    BillDate2?: true
    BillType2?: true
    Groups?: true
    PONumber?: true
    ShippingPointDesc?: true
    SOPOAmount?: true
    Exrate?: true
    created_at?: true
    updated_at?: true
  }

  export type DataVF04MaxAggregateInputType = {
    ID?: true
    BillCategory?: true
    SalesOrg?: true
    BillDate?: true
    SoldToParty?: true
    BillType?: true
    Country?: true
    SalesDocument?: true
    DistributionChannel?: true
    Division?: true
    DocCategory?: true
    Address?: true
    NameSoldToParty?: true
    LocSoldToParty?: true
    SortTerm?: true
    ItemsRead?: true
    Counter?: true
    ShippingPoint?: true
    PODStatus?: true
    NetValue?: true
    DocCurrency?: true
    SDDocumentType?: true
    NameSDType?: true
    BDRSrcDoc?: true
    RefSys?: true
    DraftMode?: true
    DBDRef?: true
    SolutionOrder?: true
    BillDate2?: true
    BillType2?: true
    Groups?: true
    PONumber?: true
    ShippingPointDesc?: true
    SOPOAmount?: true
    Exrate?: true
    created_at?: true
    updated_at?: true
  }

  export type DataVF04CountAggregateInputType = {
    ID?: true
    BillCategory?: true
    SalesOrg?: true
    BillDate?: true
    SoldToParty?: true
    BillType?: true
    Country?: true
    SalesDocument?: true
    DistributionChannel?: true
    Division?: true
    DocCategory?: true
    Address?: true
    NameSoldToParty?: true
    LocSoldToParty?: true
    SortTerm?: true
    ItemsRead?: true
    Counter?: true
    ShippingPoint?: true
    PODStatus?: true
    NetValue?: true
    DocCurrency?: true
    SDDocumentType?: true
    NameSDType?: true
    BDRSrcDoc?: true
    RefSys?: true
    DraftMode?: true
    DBDRef?: true
    SolutionOrder?: true
    BillDate2?: true
    BillType2?: true
    Groups?: true
    PONumber?: true
    ShippingPointDesc?: true
    SOPOAmount?: true
    Exrate?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type DataVF04AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataVF04 to aggregate.
     */
    where?: DataVF04WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataVF04s to fetch.
     */
    orderBy?: DataVF04OrderByWithRelationInput | DataVF04OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DataVF04WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataVF04s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataVF04s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DataVF04s
    **/
    _count?: true | DataVF04CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DataVF04AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DataVF04SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataVF04MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataVF04MaxAggregateInputType
  }

  export type GetDataVF04AggregateType<T extends DataVF04AggregateArgs> = {
        [P in keyof T & keyof AggregateDataVF04]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataVF04[P]>
      : GetScalarType<T[P], AggregateDataVF04[P]>
  }




  export type DataVF04GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataVF04WhereInput
    orderBy?: DataVF04OrderByWithAggregationInput | DataVF04OrderByWithAggregationInput[]
    by: DataVF04ScalarFieldEnum[] | DataVF04ScalarFieldEnum
    having?: DataVF04ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataVF04CountAggregateInputType | true
    _avg?: DataVF04AvgAggregateInputType
    _sum?: DataVF04SumAggregateInputType
    _min?: DataVF04MinAggregateInputType
    _max?: DataVF04MaxAggregateInputType
  }

  export type DataVF04GroupByOutputType = {
    ID: bigint
    BillCategory: string | null
    SalesOrg: bigint | null
    BillDate: Date | null
    SoldToParty: string | null
    BillType: string | null
    Country: string | null
    SalesDocument: bigint | null
    DistributionChannel: bigint | null
    Division: bigint | null
    DocCategory: string | null
    Address: bigint | null
    NameSoldToParty: string | null
    LocSoldToParty: string | null
    SortTerm: string | null
    ItemsRead: string | null
    Counter: string | null
    ShippingPoint: string | null
    PODStatus: string | null
    NetValue: string | null
    DocCurrency: string | null
    SDDocumentType: string | null
    NameSDType: string | null
    BDRSrcDoc: string | null
    RefSys: string | null
    DraftMode: string | null
    DBDRef: string | null
    SolutionOrder: string | null
    BillDate2: Date | null
    BillType2: string | null
    Groups: string | null
    PONumber: string | null
    ShippingPointDesc: string | null
    SOPOAmount: number | null
    Exrate: number | null
    created_at: Date | null
    updated_at: Date | null
    _count: DataVF04CountAggregateOutputType | null
    _avg: DataVF04AvgAggregateOutputType | null
    _sum: DataVF04SumAggregateOutputType | null
    _min: DataVF04MinAggregateOutputType | null
    _max: DataVF04MaxAggregateOutputType | null
  }

  type GetDataVF04GroupByPayload<T extends DataVF04GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataVF04GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataVF04GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataVF04GroupByOutputType[P]>
            : GetScalarType<T[P], DataVF04GroupByOutputType[P]>
        }
      >
    >


  export type DataVF04Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    BillCategory?: boolean
    SalesOrg?: boolean
    BillDate?: boolean
    SoldToParty?: boolean
    BillType?: boolean
    Country?: boolean
    SalesDocument?: boolean
    DistributionChannel?: boolean
    Division?: boolean
    DocCategory?: boolean
    Address?: boolean
    NameSoldToParty?: boolean
    LocSoldToParty?: boolean
    SortTerm?: boolean
    ItemsRead?: boolean
    Counter?: boolean
    ShippingPoint?: boolean
    PODStatus?: boolean
    NetValue?: boolean
    DocCurrency?: boolean
    SDDocumentType?: boolean
    NameSDType?: boolean
    BDRSrcDoc?: boolean
    RefSys?: boolean
    DraftMode?: boolean
    DBDRef?: boolean
    SolutionOrder?: boolean
    BillDate2?: boolean
    BillType2?: boolean
    Groups?: boolean
    PONumber?: boolean
    ShippingPointDesc?: boolean
    SOPOAmount?: boolean
    Exrate?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["dataVF04"]>



  export type DataVF04SelectScalar = {
    ID?: boolean
    BillCategory?: boolean
    SalesOrg?: boolean
    BillDate?: boolean
    SoldToParty?: boolean
    BillType?: boolean
    Country?: boolean
    SalesDocument?: boolean
    DistributionChannel?: boolean
    Division?: boolean
    DocCategory?: boolean
    Address?: boolean
    NameSoldToParty?: boolean
    LocSoldToParty?: boolean
    SortTerm?: boolean
    ItemsRead?: boolean
    Counter?: boolean
    ShippingPoint?: boolean
    PODStatus?: boolean
    NetValue?: boolean
    DocCurrency?: boolean
    SDDocumentType?: boolean
    NameSDType?: boolean
    BDRSrcDoc?: boolean
    RefSys?: boolean
    DraftMode?: boolean
    DBDRef?: boolean
    SolutionOrder?: boolean
    BillDate2?: boolean
    BillType2?: boolean
    Groups?: boolean
    PONumber?: boolean
    ShippingPointDesc?: boolean
    SOPOAmount?: boolean
    Exrate?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type DataVF04Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "BillCategory" | "SalesOrg" | "BillDate" | "SoldToParty" | "BillType" | "Country" | "SalesDocument" | "DistributionChannel" | "Division" | "DocCategory" | "Address" | "NameSoldToParty" | "LocSoldToParty" | "SortTerm" | "ItemsRead" | "Counter" | "ShippingPoint" | "PODStatus" | "NetValue" | "DocCurrency" | "SDDocumentType" | "NameSDType" | "BDRSrcDoc" | "RefSys" | "DraftMode" | "DBDRef" | "SolutionOrder" | "BillDate2" | "BillType2" | "Groups" | "PONumber" | "ShippingPointDesc" | "SOPOAmount" | "Exrate" | "created_at" | "updated_at", ExtArgs["result"]["dataVF04"]>

  export type $DataVF04Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DataVF04"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: bigint
      BillCategory: string | null
      SalesOrg: bigint | null
      BillDate: Date | null
      SoldToParty: string | null
      BillType: string | null
      Country: string | null
      SalesDocument: bigint | null
      DistributionChannel: bigint | null
      Division: bigint | null
      DocCategory: string | null
      Address: bigint | null
      NameSoldToParty: string | null
      LocSoldToParty: string | null
      SortTerm: string | null
      ItemsRead: string | null
      Counter: string | null
      ShippingPoint: string | null
      PODStatus: string | null
      NetValue: string | null
      DocCurrency: string | null
      SDDocumentType: string | null
      NameSDType: string | null
      BDRSrcDoc: string | null
      RefSys: string | null
      DraftMode: string | null
      DBDRef: string | null
      SolutionOrder: string | null
      BillDate2: Date | null
      BillType2: string | null
      Groups: string | null
      PONumber: string | null
      ShippingPointDesc: string | null
      SOPOAmount: number | null
      Exrate: number | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["dataVF04"]>
    composites: {}
  }

  type DataVF04GetPayload<S extends boolean | null | undefined | DataVF04DefaultArgs> = $Result.GetResult<Prisma.$DataVF04Payload, S>

  type DataVF04CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DataVF04FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DataVF04CountAggregateInputType | true
    }

  export interface DataVF04Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DataVF04'], meta: { name: 'DataVF04' } }
    /**
     * Find zero or one DataVF04 that matches the filter.
     * @param {DataVF04FindUniqueArgs} args - Arguments to find a DataVF04
     * @example
     * // Get one DataVF04
     * const dataVF04 = await prisma.dataVF04.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DataVF04FindUniqueArgs>(args: SelectSubset<T, DataVF04FindUniqueArgs<ExtArgs>>): Prisma__DataVF04Client<$Result.GetResult<Prisma.$DataVF04Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DataVF04 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DataVF04FindUniqueOrThrowArgs} args - Arguments to find a DataVF04
     * @example
     * // Get one DataVF04
     * const dataVF04 = await prisma.dataVF04.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DataVF04FindUniqueOrThrowArgs>(args: SelectSubset<T, DataVF04FindUniqueOrThrowArgs<ExtArgs>>): Prisma__DataVF04Client<$Result.GetResult<Prisma.$DataVF04Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataVF04 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataVF04FindFirstArgs} args - Arguments to find a DataVF04
     * @example
     * // Get one DataVF04
     * const dataVF04 = await prisma.dataVF04.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DataVF04FindFirstArgs>(args?: SelectSubset<T, DataVF04FindFirstArgs<ExtArgs>>): Prisma__DataVF04Client<$Result.GetResult<Prisma.$DataVF04Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataVF04 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataVF04FindFirstOrThrowArgs} args - Arguments to find a DataVF04
     * @example
     * // Get one DataVF04
     * const dataVF04 = await prisma.dataVF04.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DataVF04FindFirstOrThrowArgs>(args?: SelectSubset<T, DataVF04FindFirstOrThrowArgs<ExtArgs>>): Prisma__DataVF04Client<$Result.GetResult<Prisma.$DataVF04Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DataVF04s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataVF04FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataVF04s
     * const dataVF04s = await prisma.dataVF04.findMany()
     * 
     * // Get first 10 DataVF04s
     * const dataVF04s = await prisma.dataVF04.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const dataVF04WithIDOnly = await prisma.dataVF04.findMany({ select: { ID: true } })
     * 
     */
    findMany<T extends DataVF04FindManyArgs>(args?: SelectSubset<T, DataVF04FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataVF04Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DataVF04.
     * @param {DataVF04CreateArgs} args - Arguments to create a DataVF04.
     * @example
     * // Create one DataVF04
     * const DataVF04 = await prisma.dataVF04.create({
     *   data: {
     *     // ... data to create a DataVF04
     *   }
     * })
     * 
     */
    create<T extends DataVF04CreateArgs>(args: SelectSubset<T, DataVF04CreateArgs<ExtArgs>>): Prisma__DataVF04Client<$Result.GetResult<Prisma.$DataVF04Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DataVF04s.
     * @param {DataVF04CreateManyArgs} args - Arguments to create many DataVF04s.
     * @example
     * // Create many DataVF04s
     * const dataVF04 = await prisma.dataVF04.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DataVF04CreateManyArgs>(args?: SelectSubset<T, DataVF04CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DataVF04.
     * @param {DataVF04DeleteArgs} args - Arguments to delete one DataVF04.
     * @example
     * // Delete one DataVF04
     * const DataVF04 = await prisma.dataVF04.delete({
     *   where: {
     *     // ... filter to delete one DataVF04
     *   }
     * })
     * 
     */
    delete<T extends DataVF04DeleteArgs>(args: SelectSubset<T, DataVF04DeleteArgs<ExtArgs>>): Prisma__DataVF04Client<$Result.GetResult<Prisma.$DataVF04Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DataVF04.
     * @param {DataVF04UpdateArgs} args - Arguments to update one DataVF04.
     * @example
     * // Update one DataVF04
     * const dataVF04 = await prisma.dataVF04.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DataVF04UpdateArgs>(args: SelectSubset<T, DataVF04UpdateArgs<ExtArgs>>): Prisma__DataVF04Client<$Result.GetResult<Prisma.$DataVF04Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DataVF04s.
     * @param {DataVF04DeleteManyArgs} args - Arguments to filter DataVF04s to delete.
     * @example
     * // Delete a few DataVF04s
     * const { count } = await prisma.dataVF04.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DataVF04DeleteManyArgs>(args?: SelectSubset<T, DataVF04DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataVF04s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataVF04UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataVF04s
     * const dataVF04 = await prisma.dataVF04.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DataVF04UpdateManyArgs>(args: SelectSubset<T, DataVF04UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DataVF04.
     * @param {DataVF04UpsertArgs} args - Arguments to update or create a DataVF04.
     * @example
     * // Update or create a DataVF04
     * const dataVF04 = await prisma.dataVF04.upsert({
     *   create: {
     *     // ... data to create a DataVF04
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataVF04 we want to update
     *   }
     * })
     */
    upsert<T extends DataVF04UpsertArgs>(args: SelectSubset<T, DataVF04UpsertArgs<ExtArgs>>): Prisma__DataVF04Client<$Result.GetResult<Prisma.$DataVF04Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DataVF04s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataVF04CountArgs} args - Arguments to filter DataVF04s to count.
     * @example
     * // Count the number of DataVF04s
     * const count = await prisma.dataVF04.count({
     *   where: {
     *     // ... the filter for the DataVF04s we want to count
     *   }
     * })
    **/
    count<T extends DataVF04CountArgs>(
      args?: Subset<T, DataVF04CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataVF04CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataVF04.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataVF04AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DataVF04AggregateArgs>(args: Subset<T, DataVF04AggregateArgs>): Prisma.PrismaPromise<GetDataVF04AggregateType<T>>

    /**
     * Group by DataVF04.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataVF04GroupByArgs} args - Group by arguments.
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
      T extends DataVF04GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataVF04GroupByArgs['orderBy'] }
        : { orderBy?: DataVF04GroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DataVF04GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataVF04GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DataVF04 model
   */
  readonly fields: DataVF04FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DataVF04.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DataVF04Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DataVF04 model
   */
  interface DataVF04FieldRefs {
    readonly ID: FieldRef<"DataVF04", 'BigInt'>
    readonly BillCategory: FieldRef<"DataVF04", 'String'>
    readonly SalesOrg: FieldRef<"DataVF04", 'BigInt'>
    readonly BillDate: FieldRef<"DataVF04", 'DateTime'>
    readonly SoldToParty: FieldRef<"DataVF04", 'String'>
    readonly BillType: FieldRef<"DataVF04", 'String'>
    readonly Country: FieldRef<"DataVF04", 'String'>
    readonly SalesDocument: FieldRef<"DataVF04", 'BigInt'>
    readonly DistributionChannel: FieldRef<"DataVF04", 'BigInt'>
    readonly Division: FieldRef<"DataVF04", 'BigInt'>
    readonly DocCategory: FieldRef<"DataVF04", 'String'>
    readonly Address: FieldRef<"DataVF04", 'BigInt'>
    readonly NameSoldToParty: FieldRef<"DataVF04", 'String'>
    readonly LocSoldToParty: FieldRef<"DataVF04", 'String'>
    readonly SortTerm: FieldRef<"DataVF04", 'String'>
    readonly ItemsRead: FieldRef<"DataVF04", 'String'>
    readonly Counter: FieldRef<"DataVF04", 'String'>
    readonly ShippingPoint: FieldRef<"DataVF04", 'String'>
    readonly PODStatus: FieldRef<"DataVF04", 'String'>
    readonly NetValue: FieldRef<"DataVF04", 'String'>
    readonly DocCurrency: FieldRef<"DataVF04", 'String'>
    readonly SDDocumentType: FieldRef<"DataVF04", 'String'>
    readonly NameSDType: FieldRef<"DataVF04", 'String'>
    readonly BDRSrcDoc: FieldRef<"DataVF04", 'String'>
    readonly RefSys: FieldRef<"DataVF04", 'String'>
    readonly DraftMode: FieldRef<"DataVF04", 'String'>
    readonly DBDRef: FieldRef<"DataVF04", 'String'>
    readonly SolutionOrder: FieldRef<"DataVF04", 'String'>
    readonly BillDate2: FieldRef<"DataVF04", 'DateTime'>
    readonly BillType2: FieldRef<"DataVF04", 'String'>
    readonly Groups: FieldRef<"DataVF04", 'String'>
    readonly PONumber: FieldRef<"DataVF04", 'String'>
    readonly ShippingPointDesc: FieldRef<"DataVF04", 'String'>
    readonly SOPOAmount: FieldRef<"DataVF04", 'Float'>
    readonly Exrate: FieldRef<"DataVF04", 'Float'>
    readonly created_at: FieldRef<"DataVF04", 'DateTime'>
    readonly updated_at: FieldRef<"DataVF04", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DataVF04 findUnique
   */
  export type DataVF04FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataVF04
     */
    select?: DataVF04Select<ExtArgs> | null
    /**
     * Omit specific fields from the DataVF04
     */
    omit?: DataVF04Omit<ExtArgs> | null
    /**
     * Filter, which DataVF04 to fetch.
     */
    where: DataVF04WhereUniqueInput
  }

  /**
   * DataVF04 findUniqueOrThrow
   */
  export type DataVF04FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataVF04
     */
    select?: DataVF04Select<ExtArgs> | null
    /**
     * Omit specific fields from the DataVF04
     */
    omit?: DataVF04Omit<ExtArgs> | null
    /**
     * Filter, which DataVF04 to fetch.
     */
    where: DataVF04WhereUniqueInput
  }

  /**
   * DataVF04 findFirst
   */
  export type DataVF04FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataVF04
     */
    select?: DataVF04Select<ExtArgs> | null
    /**
     * Omit specific fields from the DataVF04
     */
    omit?: DataVF04Omit<ExtArgs> | null
    /**
     * Filter, which DataVF04 to fetch.
     */
    where?: DataVF04WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataVF04s to fetch.
     */
    orderBy?: DataVF04OrderByWithRelationInput | DataVF04OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataVF04s.
     */
    cursor?: DataVF04WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataVF04s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataVF04s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataVF04s.
     */
    distinct?: DataVF04ScalarFieldEnum | DataVF04ScalarFieldEnum[]
  }

  /**
   * DataVF04 findFirstOrThrow
   */
  export type DataVF04FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataVF04
     */
    select?: DataVF04Select<ExtArgs> | null
    /**
     * Omit specific fields from the DataVF04
     */
    omit?: DataVF04Omit<ExtArgs> | null
    /**
     * Filter, which DataVF04 to fetch.
     */
    where?: DataVF04WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataVF04s to fetch.
     */
    orderBy?: DataVF04OrderByWithRelationInput | DataVF04OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataVF04s.
     */
    cursor?: DataVF04WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataVF04s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataVF04s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataVF04s.
     */
    distinct?: DataVF04ScalarFieldEnum | DataVF04ScalarFieldEnum[]
  }

  /**
   * DataVF04 findMany
   */
  export type DataVF04FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataVF04
     */
    select?: DataVF04Select<ExtArgs> | null
    /**
     * Omit specific fields from the DataVF04
     */
    omit?: DataVF04Omit<ExtArgs> | null
    /**
     * Filter, which DataVF04s to fetch.
     */
    where?: DataVF04WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataVF04s to fetch.
     */
    orderBy?: DataVF04OrderByWithRelationInput | DataVF04OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DataVF04s.
     */
    cursor?: DataVF04WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataVF04s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataVF04s.
     */
    skip?: number
    distinct?: DataVF04ScalarFieldEnum | DataVF04ScalarFieldEnum[]
  }

  /**
   * DataVF04 create
   */
  export type DataVF04CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataVF04
     */
    select?: DataVF04Select<ExtArgs> | null
    /**
     * Omit specific fields from the DataVF04
     */
    omit?: DataVF04Omit<ExtArgs> | null
    /**
     * The data needed to create a DataVF04.
     */
    data?: XOR<DataVF04CreateInput, DataVF04UncheckedCreateInput>
  }

  /**
   * DataVF04 createMany
   */
  export type DataVF04CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DataVF04s.
     */
    data: DataVF04CreateManyInput | DataVF04CreateManyInput[]
  }

  /**
   * DataVF04 update
   */
  export type DataVF04UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataVF04
     */
    select?: DataVF04Select<ExtArgs> | null
    /**
     * Omit specific fields from the DataVF04
     */
    omit?: DataVF04Omit<ExtArgs> | null
    /**
     * The data needed to update a DataVF04.
     */
    data: XOR<DataVF04UpdateInput, DataVF04UncheckedUpdateInput>
    /**
     * Choose, which DataVF04 to update.
     */
    where: DataVF04WhereUniqueInput
  }

  /**
   * DataVF04 updateMany
   */
  export type DataVF04UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DataVF04s.
     */
    data: XOR<DataVF04UpdateManyMutationInput, DataVF04UncheckedUpdateManyInput>
    /**
     * Filter which DataVF04s to update
     */
    where?: DataVF04WhereInput
    /**
     * Limit how many DataVF04s to update.
     */
    limit?: number
  }

  /**
   * DataVF04 upsert
   */
  export type DataVF04UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataVF04
     */
    select?: DataVF04Select<ExtArgs> | null
    /**
     * Omit specific fields from the DataVF04
     */
    omit?: DataVF04Omit<ExtArgs> | null
    /**
     * The filter to search for the DataVF04 to update in case it exists.
     */
    where: DataVF04WhereUniqueInput
    /**
     * In case the DataVF04 found by the `where` argument doesn't exist, create a new DataVF04 with this data.
     */
    create: XOR<DataVF04CreateInput, DataVF04UncheckedCreateInput>
    /**
     * In case the DataVF04 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DataVF04UpdateInput, DataVF04UncheckedUpdateInput>
  }

  /**
   * DataVF04 delete
   */
  export type DataVF04DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataVF04
     */
    select?: DataVF04Select<ExtArgs> | null
    /**
     * Omit specific fields from the DataVF04
     */
    omit?: DataVF04Omit<ExtArgs> | null
    /**
     * Filter which DataVF04 to delete.
     */
    where: DataVF04WhereUniqueInput
  }

  /**
   * DataVF04 deleteMany
   */
  export type DataVF04DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataVF04s to delete
     */
    where?: DataVF04WhereInput
    /**
     * Limit how many DataVF04s to delete.
     */
    limit?: number
  }

  /**
   * DataVF04 without action
   */
  export type DataVF04DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataVF04
     */
    select?: DataVF04Select<ExtArgs> | null
    /**
     * Omit specific fields from the DataVF04
     */
    omit?: DataVF04Omit<ExtArgs> | null
  }


  /**
   * Model excelBaseUrl
   */

  export type AggregateExcelBaseUrl = {
    _count: ExcelBaseUrlCountAggregateOutputType | null
    _avg: ExcelBaseUrlAvgAggregateOutputType | null
    _sum: ExcelBaseUrlSumAggregateOutputType | null
    _min: ExcelBaseUrlMinAggregateOutputType | null
    _max: ExcelBaseUrlMaxAggregateOutputType | null
  }

  export type ExcelBaseUrlAvgAggregateOutputType = {
    id: number | null
  }

  export type ExcelBaseUrlSumAggregateOutputType = {
    id: number | null
  }

  export type ExcelBaseUrlMinAggregateOutputType = {
    id: number | null
    guid: string | null
    excelName: string | null
    url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ExcelBaseUrlMaxAggregateOutputType = {
    id: number | null
    guid: string | null
    excelName: string | null
    url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ExcelBaseUrlCountAggregateOutputType = {
    id: number
    guid: number
    excelName: number
    url: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ExcelBaseUrlAvgAggregateInputType = {
    id?: true
  }

  export type ExcelBaseUrlSumAggregateInputType = {
    id?: true
  }

  export type ExcelBaseUrlMinAggregateInputType = {
    id?: true
    guid?: true
    excelName?: true
    url?: true
    created_at?: true
    updated_at?: true
  }

  export type ExcelBaseUrlMaxAggregateInputType = {
    id?: true
    guid?: true
    excelName?: true
    url?: true
    created_at?: true
    updated_at?: true
  }

  export type ExcelBaseUrlCountAggregateInputType = {
    id?: true
    guid?: true
    excelName?: true
    url?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ExcelBaseUrlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which excelBaseUrl to aggregate.
     */
    where?: excelBaseUrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of excelBaseUrls to fetch.
     */
    orderBy?: excelBaseUrlOrderByWithRelationInput | excelBaseUrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: excelBaseUrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` excelBaseUrls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` excelBaseUrls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned excelBaseUrls
    **/
    _count?: true | ExcelBaseUrlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExcelBaseUrlAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExcelBaseUrlSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExcelBaseUrlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExcelBaseUrlMaxAggregateInputType
  }

  export type GetExcelBaseUrlAggregateType<T extends ExcelBaseUrlAggregateArgs> = {
        [P in keyof T & keyof AggregateExcelBaseUrl]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExcelBaseUrl[P]>
      : GetScalarType<T[P], AggregateExcelBaseUrl[P]>
  }




  export type excelBaseUrlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: excelBaseUrlWhereInput
    orderBy?: excelBaseUrlOrderByWithAggregationInput | excelBaseUrlOrderByWithAggregationInput[]
    by: ExcelBaseUrlScalarFieldEnum[] | ExcelBaseUrlScalarFieldEnum
    having?: excelBaseUrlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExcelBaseUrlCountAggregateInputType | true
    _avg?: ExcelBaseUrlAvgAggregateInputType
    _sum?: ExcelBaseUrlSumAggregateInputType
    _min?: ExcelBaseUrlMinAggregateInputType
    _max?: ExcelBaseUrlMaxAggregateInputType
  }

  export type ExcelBaseUrlGroupByOutputType = {
    id: number
    guid: string
    excelName: string | null
    url: string | null
    created_at: Date
    updated_at: Date
    _count: ExcelBaseUrlCountAggregateOutputType | null
    _avg: ExcelBaseUrlAvgAggregateOutputType | null
    _sum: ExcelBaseUrlSumAggregateOutputType | null
    _min: ExcelBaseUrlMinAggregateOutputType | null
    _max: ExcelBaseUrlMaxAggregateOutputType | null
  }

  type GetExcelBaseUrlGroupByPayload<T extends excelBaseUrlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExcelBaseUrlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExcelBaseUrlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExcelBaseUrlGroupByOutputType[P]>
            : GetScalarType<T[P], ExcelBaseUrlGroupByOutputType[P]>
        }
      >
    >


  export type excelBaseUrlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    excelName?: boolean
    url?: boolean
    created_at?: boolean
    updated_at?: boolean
    excelSheet?: boolean | excelBaseUrl$excelSheetArgs<ExtArgs>
    _count?: boolean | ExcelBaseUrlCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["excelBaseUrl"]>



  export type excelBaseUrlSelectScalar = {
    id?: boolean
    guid?: boolean
    excelName?: boolean
    url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type excelBaseUrlOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guid" | "excelName" | "url" | "created_at" | "updated_at", ExtArgs["result"]["excelBaseUrl"]>
  export type excelBaseUrlInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    excelSheet?: boolean | excelBaseUrl$excelSheetArgs<ExtArgs>
    _count?: boolean | ExcelBaseUrlCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $excelBaseUrlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "excelBaseUrl"
    objects: {
      excelSheet: Prisma.$excelSheetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      guid: string
      excelName: string | null
      url: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["excelBaseUrl"]>
    composites: {}
  }

  type excelBaseUrlGetPayload<S extends boolean | null | undefined | excelBaseUrlDefaultArgs> = $Result.GetResult<Prisma.$excelBaseUrlPayload, S>

  type excelBaseUrlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<excelBaseUrlFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExcelBaseUrlCountAggregateInputType | true
    }

  export interface excelBaseUrlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['excelBaseUrl'], meta: { name: 'excelBaseUrl' } }
    /**
     * Find zero or one ExcelBaseUrl that matches the filter.
     * @param {excelBaseUrlFindUniqueArgs} args - Arguments to find a ExcelBaseUrl
     * @example
     * // Get one ExcelBaseUrl
     * const excelBaseUrl = await prisma.excelBaseUrl.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends excelBaseUrlFindUniqueArgs>(args: SelectSubset<T, excelBaseUrlFindUniqueArgs<ExtArgs>>): Prisma__excelBaseUrlClient<$Result.GetResult<Prisma.$excelBaseUrlPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExcelBaseUrl that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {excelBaseUrlFindUniqueOrThrowArgs} args - Arguments to find a ExcelBaseUrl
     * @example
     * // Get one ExcelBaseUrl
     * const excelBaseUrl = await prisma.excelBaseUrl.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends excelBaseUrlFindUniqueOrThrowArgs>(args: SelectSubset<T, excelBaseUrlFindUniqueOrThrowArgs<ExtArgs>>): Prisma__excelBaseUrlClient<$Result.GetResult<Prisma.$excelBaseUrlPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExcelBaseUrl that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {excelBaseUrlFindFirstArgs} args - Arguments to find a ExcelBaseUrl
     * @example
     * // Get one ExcelBaseUrl
     * const excelBaseUrl = await prisma.excelBaseUrl.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends excelBaseUrlFindFirstArgs>(args?: SelectSubset<T, excelBaseUrlFindFirstArgs<ExtArgs>>): Prisma__excelBaseUrlClient<$Result.GetResult<Prisma.$excelBaseUrlPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExcelBaseUrl that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {excelBaseUrlFindFirstOrThrowArgs} args - Arguments to find a ExcelBaseUrl
     * @example
     * // Get one ExcelBaseUrl
     * const excelBaseUrl = await prisma.excelBaseUrl.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends excelBaseUrlFindFirstOrThrowArgs>(args?: SelectSubset<T, excelBaseUrlFindFirstOrThrowArgs<ExtArgs>>): Prisma__excelBaseUrlClient<$Result.GetResult<Prisma.$excelBaseUrlPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExcelBaseUrls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {excelBaseUrlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExcelBaseUrls
     * const excelBaseUrls = await prisma.excelBaseUrl.findMany()
     * 
     * // Get first 10 ExcelBaseUrls
     * const excelBaseUrls = await prisma.excelBaseUrl.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const excelBaseUrlWithIdOnly = await prisma.excelBaseUrl.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends excelBaseUrlFindManyArgs>(args?: SelectSubset<T, excelBaseUrlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$excelBaseUrlPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExcelBaseUrl.
     * @param {excelBaseUrlCreateArgs} args - Arguments to create a ExcelBaseUrl.
     * @example
     * // Create one ExcelBaseUrl
     * const ExcelBaseUrl = await prisma.excelBaseUrl.create({
     *   data: {
     *     // ... data to create a ExcelBaseUrl
     *   }
     * })
     * 
     */
    create<T extends excelBaseUrlCreateArgs>(args: SelectSubset<T, excelBaseUrlCreateArgs<ExtArgs>>): Prisma__excelBaseUrlClient<$Result.GetResult<Prisma.$excelBaseUrlPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExcelBaseUrls.
     * @param {excelBaseUrlCreateManyArgs} args - Arguments to create many ExcelBaseUrls.
     * @example
     * // Create many ExcelBaseUrls
     * const excelBaseUrl = await prisma.excelBaseUrl.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends excelBaseUrlCreateManyArgs>(args?: SelectSubset<T, excelBaseUrlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ExcelBaseUrl.
     * @param {excelBaseUrlDeleteArgs} args - Arguments to delete one ExcelBaseUrl.
     * @example
     * // Delete one ExcelBaseUrl
     * const ExcelBaseUrl = await prisma.excelBaseUrl.delete({
     *   where: {
     *     // ... filter to delete one ExcelBaseUrl
     *   }
     * })
     * 
     */
    delete<T extends excelBaseUrlDeleteArgs>(args: SelectSubset<T, excelBaseUrlDeleteArgs<ExtArgs>>): Prisma__excelBaseUrlClient<$Result.GetResult<Prisma.$excelBaseUrlPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExcelBaseUrl.
     * @param {excelBaseUrlUpdateArgs} args - Arguments to update one ExcelBaseUrl.
     * @example
     * // Update one ExcelBaseUrl
     * const excelBaseUrl = await prisma.excelBaseUrl.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends excelBaseUrlUpdateArgs>(args: SelectSubset<T, excelBaseUrlUpdateArgs<ExtArgs>>): Prisma__excelBaseUrlClient<$Result.GetResult<Prisma.$excelBaseUrlPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExcelBaseUrls.
     * @param {excelBaseUrlDeleteManyArgs} args - Arguments to filter ExcelBaseUrls to delete.
     * @example
     * // Delete a few ExcelBaseUrls
     * const { count } = await prisma.excelBaseUrl.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends excelBaseUrlDeleteManyArgs>(args?: SelectSubset<T, excelBaseUrlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExcelBaseUrls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {excelBaseUrlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExcelBaseUrls
     * const excelBaseUrl = await prisma.excelBaseUrl.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends excelBaseUrlUpdateManyArgs>(args: SelectSubset<T, excelBaseUrlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExcelBaseUrl.
     * @param {excelBaseUrlUpsertArgs} args - Arguments to update or create a ExcelBaseUrl.
     * @example
     * // Update or create a ExcelBaseUrl
     * const excelBaseUrl = await prisma.excelBaseUrl.upsert({
     *   create: {
     *     // ... data to create a ExcelBaseUrl
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExcelBaseUrl we want to update
     *   }
     * })
     */
    upsert<T extends excelBaseUrlUpsertArgs>(args: SelectSubset<T, excelBaseUrlUpsertArgs<ExtArgs>>): Prisma__excelBaseUrlClient<$Result.GetResult<Prisma.$excelBaseUrlPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExcelBaseUrls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {excelBaseUrlCountArgs} args - Arguments to filter ExcelBaseUrls to count.
     * @example
     * // Count the number of ExcelBaseUrls
     * const count = await prisma.excelBaseUrl.count({
     *   where: {
     *     // ... the filter for the ExcelBaseUrls we want to count
     *   }
     * })
    **/
    count<T extends excelBaseUrlCountArgs>(
      args?: Subset<T, excelBaseUrlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExcelBaseUrlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExcelBaseUrl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExcelBaseUrlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExcelBaseUrlAggregateArgs>(args: Subset<T, ExcelBaseUrlAggregateArgs>): Prisma.PrismaPromise<GetExcelBaseUrlAggregateType<T>>

    /**
     * Group by ExcelBaseUrl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {excelBaseUrlGroupByArgs} args - Group by arguments.
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
      T extends excelBaseUrlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: excelBaseUrlGroupByArgs['orderBy'] }
        : { orderBy?: excelBaseUrlGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, excelBaseUrlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExcelBaseUrlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the excelBaseUrl model
   */
  readonly fields: excelBaseUrlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for excelBaseUrl.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__excelBaseUrlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    excelSheet<T extends excelBaseUrl$excelSheetArgs<ExtArgs> = {}>(args?: Subset<T, excelBaseUrl$excelSheetArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$excelSheetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the excelBaseUrl model
   */
  interface excelBaseUrlFieldRefs {
    readonly id: FieldRef<"excelBaseUrl", 'Int'>
    readonly guid: FieldRef<"excelBaseUrl", 'String'>
    readonly excelName: FieldRef<"excelBaseUrl", 'String'>
    readonly url: FieldRef<"excelBaseUrl", 'String'>
    readonly created_at: FieldRef<"excelBaseUrl", 'DateTime'>
    readonly updated_at: FieldRef<"excelBaseUrl", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * excelBaseUrl findUnique
   */
  export type excelBaseUrlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the excelBaseUrl
     */
    select?: excelBaseUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the excelBaseUrl
     */
    omit?: excelBaseUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: excelBaseUrlInclude<ExtArgs> | null
    /**
     * Filter, which excelBaseUrl to fetch.
     */
    where: excelBaseUrlWhereUniqueInput
  }

  /**
   * excelBaseUrl findUniqueOrThrow
   */
  export type excelBaseUrlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the excelBaseUrl
     */
    select?: excelBaseUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the excelBaseUrl
     */
    omit?: excelBaseUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: excelBaseUrlInclude<ExtArgs> | null
    /**
     * Filter, which excelBaseUrl to fetch.
     */
    where: excelBaseUrlWhereUniqueInput
  }

  /**
   * excelBaseUrl findFirst
   */
  export type excelBaseUrlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the excelBaseUrl
     */
    select?: excelBaseUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the excelBaseUrl
     */
    omit?: excelBaseUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: excelBaseUrlInclude<ExtArgs> | null
    /**
     * Filter, which excelBaseUrl to fetch.
     */
    where?: excelBaseUrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of excelBaseUrls to fetch.
     */
    orderBy?: excelBaseUrlOrderByWithRelationInput | excelBaseUrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for excelBaseUrls.
     */
    cursor?: excelBaseUrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` excelBaseUrls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` excelBaseUrls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of excelBaseUrls.
     */
    distinct?: ExcelBaseUrlScalarFieldEnum | ExcelBaseUrlScalarFieldEnum[]
  }

  /**
   * excelBaseUrl findFirstOrThrow
   */
  export type excelBaseUrlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the excelBaseUrl
     */
    select?: excelBaseUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the excelBaseUrl
     */
    omit?: excelBaseUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: excelBaseUrlInclude<ExtArgs> | null
    /**
     * Filter, which excelBaseUrl to fetch.
     */
    where?: excelBaseUrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of excelBaseUrls to fetch.
     */
    orderBy?: excelBaseUrlOrderByWithRelationInput | excelBaseUrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for excelBaseUrls.
     */
    cursor?: excelBaseUrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` excelBaseUrls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` excelBaseUrls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of excelBaseUrls.
     */
    distinct?: ExcelBaseUrlScalarFieldEnum | ExcelBaseUrlScalarFieldEnum[]
  }

  /**
   * excelBaseUrl findMany
   */
  export type excelBaseUrlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the excelBaseUrl
     */
    select?: excelBaseUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the excelBaseUrl
     */
    omit?: excelBaseUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: excelBaseUrlInclude<ExtArgs> | null
    /**
     * Filter, which excelBaseUrls to fetch.
     */
    where?: excelBaseUrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of excelBaseUrls to fetch.
     */
    orderBy?: excelBaseUrlOrderByWithRelationInput | excelBaseUrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing excelBaseUrls.
     */
    cursor?: excelBaseUrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` excelBaseUrls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` excelBaseUrls.
     */
    skip?: number
    distinct?: ExcelBaseUrlScalarFieldEnum | ExcelBaseUrlScalarFieldEnum[]
  }

  /**
   * excelBaseUrl create
   */
  export type excelBaseUrlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the excelBaseUrl
     */
    select?: excelBaseUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the excelBaseUrl
     */
    omit?: excelBaseUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: excelBaseUrlInclude<ExtArgs> | null
    /**
     * The data needed to create a excelBaseUrl.
     */
    data: XOR<excelBaseUrlCreateInput, excelBaseUrlUncheckedCreateInput>
  }

  /**
   * excelBaseUrl createMany
   */
  export type excelBaseUrlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many excelBaseUrls.
     */
    data: excelBaseUrlCreateManyInput | excelBaseUrlCreateManyInput[]
  }

  /**
   * excelBaseUrl update
   */
  export type excelBaseUrlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the excelBaseUrl
     */
    select?: excelBaseUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the excelBaseUrl
     */
    omit?: excelBaseUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: excelBaseUrlInclude<ExtArgs> | null
    /**
     * The data needed to update a excelBaseUrl.
     */
    data: XOR<excelBaseUrlUpdateInput, excelBaseUrlUncheckedUpdateInput>
    /**
     * Choose, which excelBaseUrl to update.
     */
    where: excelBaseUrlWhereUniqueInput
  }

  /**
   * excelBaseUrl updateMany
   */
  export type excelBaseUrlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update excelBaseUrls.
     */
    data: XOR<excelBaseUrlUpdateManyMutationInput, excelBaseUrlUncheckedUpdateManyInput>
    /**
     * Filter which excelBaseUrls to update
     */
    where?: excelBaseUrlWhereInput
    /**
     * Limit how many excelBaseUrls to update.
     */
    limit?: number
  }

  /**
   * excelBaseUrl upsert
   */
  export type excelBaseUrlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the excelBaseUrl
     */
    select?: excelBaseUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the excelBaseUrl
     */
    omit?: excelBaseUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: excelBaseUrlInclude<ExtArgs> | null
    /**
     * The filter to search for the excelBaseUrl to update in case it exists.
     */
    where: excelBaseUrlWhereUniqueInput
    /**
     * In case the excelBaseUrl found by the `where` argument doesn't exist, create a new excelBaseUrl with this data.
     */
    create: XOR<excelBaseUrlCreateInput, excelBaseUrlUncheckedCreateInput>
    /**
     * In case the excelBaseUrl was found with the provided `where` argument, update it with this data.
     */
    update: XOR<excelBaseUrlUpdateInput, excelBaseUrlUncheckedUpdateInput>
  }

  /**
   * excelBaseUrl delete
   */
  export type excelBaseUrlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the excelBaseUrl
     */
    select?: excelBaseUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the excelBaseUrl
     */
    omit?: excelBaseUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: excelBaseUrlInclude<ExtArgs> | null
    /**
     * Filter which excelBaseUrl to delete.
     */
    where: excelBaseUrlWhereUniqueInput
  }

  /**
   * excelBaseUrl deleteMany
   */
  export type excelBaseUrlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which excelBaseUrls to delete
     */
    where?: excelBaseUrlWhereInput
    /**
     * Limit how many excelBaseUrls to delete.
     */
    limit?: number
  }

  /**
   * excelBaseUrl.excelSheet
   */
  export type excelBaseUrl$excelSheetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the excelSheet
     */
    select?: excelSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the excelSheet
     */
    omit?: excelSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: excelSheetInclude<ExtArgs> | null
    where?: excelSheetWhereInput
    orderBy?: excelSheetOrderByWithRelationInput | excelSheetOrderByWithRelationInput[]
    cursor?: excelSheetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExcelSheetScalarFieldEnum | ExcelSheetScalarFieldEnum[]
  }

  /**
   * excelBaseUrl without action
   */
  export type excelBaseUrlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the excelBaseUrl
     */
    select?: excelBaseUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the excelBaseUrl
     */
    omit?: excelBaseUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: excelBaseUrlInclude<ExtArgs> | null
  }


  /**
   * Model excelSheet
   */

  export type AggregateExcelSheet = {
    _count: ExcelSheetCountAggregateOutputType | null
    _avg: ExcelSheetAvgAggregateOutputType | null
    _sum: ExcelSheetSumAggregateOutputType | null
    _min: ExcelSheetMinAggregateOutputType | null
    _max: ExcelSheetMaxAggregateOutputType | null
  }

  export type ExcelSheetAvgAggregateOutputType = {
    id: number | null
  }

  export type ExcelSheetSumAggregateOutputType = {
    id: number | null
  }

  export type ExcelSheetMinAggregateOutputType = {
    id: number | null
    guid: string | null
    sheetName: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ExcelSheetMaxAggregateOutputType = {
    id: number | null
    guid: string | null
    sheetName: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ExcelSheetCountAggregateOutputType = {
    id: number
    guid: number
    sheetName: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ExcelSheetAvgAggregateInputType = {
    id?: true
  }

  export type ExcelSheetSumAggregateInputType = {
    id?: true
  }

  export type ExcelSheetMinAggregateInputType = {
    id?: true
    guid?: true
    sheetName?: true
    created_at?: true
    updated_at?: true
  }

  export type ExcelSheetMaxAggregateInputType = {
    id?: true
    guid?: true
    sheetName?: true
    created_at?: true
    updated_at?: true
  }

  export type ExcelSheetCountAggregateInputType = {
    id?: true
    guid?: true
    sheetName?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ExcelSheetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which excelSheet to aggregate.
     */
    where?: excelSheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of excelSheets to fetch.
     */
    orderBy?: excelSheetOrderByWithRelationInput | excelSheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: excelSheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` excelSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` excelSheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned excelSheets
    **/
    _count?: true | ExcelSheetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExcelSheetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExcelSheetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExcelSheetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExcelSheetMaxAggregateInputType
  }

  export type GetExcelSheetAggregateType<T extends ExcelSheetAggregateArgs> = {
        [P in keyof T & keyof AggregateExcelSheet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExcelSheet[P]>
      : GetScalarType<T[P], AggregateExcelSheet[P]>
  }




  export type excelSheetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: excelSheetWhereInput
    orderBy?: excelSheetOrderByWithAggregationInput | excelSheetOrderByWithAggregationInput[]
    by: ExcelSheetScalarFieldEnum[] | ExcelSheetScalarFieldEnum
    having?: excelSheetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExcelSheetCountAggregateInputType | true
    _avg?: ExcelSheetAvgAggregateInputType
    _sum?: ExcelSheetSumAggregateInputType
    _min?: ExcelSheetMinAggregateInputType
    _max?: ExcelSheetMaxAggregateInputType
  }

  export type ExcelSheetGroupByOutputType = {
    id: number
    guid: string
    sheetName: string | null
    created_at: Date
    updated_at: Date
    _count: ExcelSheetCountAggregateOutputType | null
    _avg: ExcelSheetAvgAggregateOutputType | null
    _sum: ExcelSheetSumAggregateOutputType | null
    _min: ExcelSheetMinAggregateOutputType | null
    _max: ExcelSheetMaxAggregateOutputType | null
  }

  type GetExcelSheetGroupByPayload<T extends excelSheetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExcelSheetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExcelSheetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExcelSheetGroupByOutputType[P]>
            : GetScalarType<T[P], ExcelSheetGroupByOutputType[P]>
        }
      >
    >


  export type excelSheetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    sheetName?: boolean
    created_at?: boolean
    updated_at?: boolean
    excelBaseUrl?: boolean | excelBaseUrlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["excelSheet"]>



  export type excelSheetSelectScalar = {
    id?: boolean
    guid?: boolean
    sheetName?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type excelSheetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guid" | "sheetName" | "created_at" | "updated_at", ExtArgs["result"]["excelSheet"]>
  export type excelSheetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    excelBaseUrl?: boolean | excelBaseUrlDefaultArgs<ExtArgs>
  }

  export type $excelSheetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "excelSheet"
    objects: {
      excelBaseUrl: Prisma.$excelBaseUrlPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      guid: string
      sheetName: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["excelSheet"]>
    composites: {}
  }

  type excelSheetGetPayload<S extends boolean | null | undefined | excelSheetDefaultArgs> = $Result.GetResult<Prisma.$excelSheetPayload, S>

  type excelSheetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<excelSheetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExcelSheetCountAggregateInputType | true
    }

  export interface excelSheetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['excelSheet'], meta: { name: 'excelSheet' } }
    /**
     * Find zero or one ExcelSheet that matches the filter.
     * @param {excelSheetFindUniqueArgs} args - Arguments to find a ExcelSheet
     * @example
     * // Get one ExcelSheet
     * const excelSheet = await prisma.excelSheet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends excelSheetFindUniqueArgs>(args: SelectSubset<T, excelSheetFindUniqueArgs<ExtArgs>>): Prisma__excelSheetClient<$Result.GetResult<Prisma.$excelSheetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExcelSheet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {excelSheetFindUniqueOrThrowArgs} args - Arguments to find a ExcelSheet
     * @example
     * // Get one ExcelSheet
     * const excelSheet = await prisma.excelSheet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends excelSheetFindUniqueOrThrowArgs>(args: SelectSubset<T, excelSheetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__excelSheetClient<$Result.GetResult<Prisma.$excelSheetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExcelSheet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {excelSheetFindFirstArgs} args - Arguments to find a ExcelSheet
     * @example
     * // Get one ExcelSheet
     * const excelSheet = await prisma.excelSheet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends excelSheetFindFirstArgs>(args?: SelectSubset<T, excelSheetFindFirstArgs<ExtArgs>>): Prisma__excelSheetClient<$Result.GetResult<Prisma.$excelSheetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExcelSheet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {excelSheetFindFirstOrThrowArgs} args - Arguments to find a ExcelSheet
     * @example
     * // Get one ExcelSheet
     * const excelSheet = await prisma.excelSheet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends excelSheetFindFirstOrThrowArgs>(args?: SelectSubset<T, excelSheetFindFirstOrThrowArgs<ExtArgs>>): Prisma__excelSheetClient<$Result.GetResult<Prisma.$excelSheetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExcelSheets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {excelSheetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExcelSheets
     * const excelSheets = await prisma.excelSheet.findMany()
     * 
     * // Get first 10 ExcelSheets
     * const excelSheets = await prisma.excelSheet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const excelSheetWithIdOnly = await prisma.excelSheet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends excelSheetFindManyArgs>(args?: SelectSubset<T, excelSheetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$excelSheetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExcelSheet.
     * @param {excelSheetCreateArgs} args - Arguments to create a ExcelSheet.
     * @example
     * // Create one ExcelSheet
     * const ExcelSheet = await prisma.excelSheet.create({
     *   data: {
     *     // ... data to create a ExcelSheet
     *   }
     * })
     * 
     */
    create<T extends excelSheetCreateArgs>(args: SelectSubset<T, excelSheetCreateArgs<ExtArgs>>): Prisma__excelSheetClient<$Result.GetResult<Prisma.$excelSheetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExcelSheets.
     * @param {excelSheetCreateManyArgs} args - Arguments to create many ExcelSheets.
     * @example
     * // Create many ExcelSheets
     * const excelSheet = await prisma.excelSheet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends excelSheetCreateManyArgs>(args?: SelectSubset<T, excelSheetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ExcelSheet.
     * @param {excelSheetDeleteArgs} args - Arguments to delete one ExcelSheet.
     * @example
     * // Delete one ExcelSheet
     * const ExcelSheet = await prisma.excelSheet.delete({
     *   where: {
     *     // ... filter to delete one ExcelSheet
     *   }
     * })
     * 
     */
    delete<T extends excelSheetDeleteArgs>(args: SelectSubset<T, excelSheetDeleteArgs<ExtArgs>>): Prisma__excelSheetClient<$Result.GetResult<Prisma.$excelSheetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExcelSheet.
     * @param {excelSheetUpdateArgs} args - Arguments to update one ExcelSheet.
     * @example
     * // Update one ExcelSheet
     * const excelSheet = await prisma.excelSheet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends excelSheetUpdateArgs>(args: SelectSubset<T, excelSheetUpdateArgs<ExtArgs>>): Prisma__excelSheetClient<$Result.GetResult<Prisma.$excelSheetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExcelSheets.
     * @param {excelSheetDeleteManyArgs} args - Arguments to filter ExcelSheets to delete.
     * @example
     * // Delete a few ExcelSheets
     * const { count } = await prisma.excelSheet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends excelSheetDeleteManyArgs>(args?: SelectSubset<T, excelSheetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExcelSheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {excelSheetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExcelSheets
     * const excelSheet = await prisma.excelSheet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends excelSheetUpdateManyArgs>(args: SelectSubset<T, excelSheetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExcelSheet.
     * @param {excelSheetUpsertArgs} args - Arguments to update or create a ExcelSheet.
     * @example
     * // Update or create a ExcelSheet
     * const excelSheet = await prisma.excelSheet.upsert({
     *   create: {
     *     // ... data to create a ExcelSheet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExcelSheet we want to update
     *   }
     * })
     */
    upsert<T extends excelSheetUpsertArgs>(args: SelectSubset<T, excelSheetUpsertArgs<ExtArgs>>): Prisma__excelSheetClient<$Result.GetResult<Prisma.$excelSheetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExcelSheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {excelSheetCountArgs} args - Arguments to filter ExcelSheets to count.
     * @example
     * // Count the number of ExcelSheets
     * const count = await prisma.excelSheet.count({
     *   where: {
     *     // ... the filter for the ExcelSheets we want to count
     *   }
     * })
    **/
    count<T extends excelSheetCountArgs>(
      args?: Subset<T, excelSheetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExcelSheetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExcelSheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExcelSheetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExcelSheetAggregateArgs>(args: Subset<T, ExcelSheetAggregateArgs>): Prisma.PrismaPromise<GetExcelSheetAggregateType<T>>

    /**
     * Group by ExcelSheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {excelSheetGroupByArgs} args - Group by arguments.
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
      T extends excelSheetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: excelSheetGroupByArgs['orderBy'] }
        : { orderBy?: excelSheetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, excelSheetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExcelSheetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the excelSheet model
   */
  readonly fields: excelSheetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for excelSheet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__excelSheetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    excelBaseUrl<T extends excelBaseUrlDefaultArgs<ExtArgs> = {}>(args?: Subset<T, excelBaseUrlDefaultArgs<ExtArgs>>): Prisma__excelBaseUrlClient<$Result.GetResult<Prisma.$excelBaseUrlPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the excelSheet model
   */
  interface excelSheetFieldRefs {
    readonly id: FieldRef<"excelSheet", 'Int'>
    readonly guid: FieldRef<"excelSheet", 'String'>
    readonly sheetName: FieldRef<"excelSheet", 'String'>
    readonly created_at: FieldRef<"excelSheet", 'DateTime'>
    readonly updated_at: FieldRef<"excelSheet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * excelSheet findUnique
   */
  export type excelSheetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the excelSheet
     */
    select?: excelSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the excelSheet
     */
    omit?: excelSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: excelSheetInclude<ExtArgs> | null
    /**
     * Filter, which excelSheet to fetch.
     */
    where: excelSheetWhereUniqueInput
  }

  /**
   * excelSheet findUniqueOrThrow
   */
  export type excelSheetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the excelSheet
     */
    select?: excelSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the excelSheet
     */
    omit?: excelSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: excelSheetInclude<ExtArgs> | null
    /**
     * Filter, which excelSheet to fetch.
     */
    where: excelSheetWhereUniqueInput
  }

  /**
   * excelSheet findFirst
   */
  export type excelSheetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the excelSheet
     */
    select?: excelSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the excelSheet
     */
    omit?: excelSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: excelSheetInclude<ExtArgs> | null
    /**
     * Filter, which excelSheet to fetch.
     */
    where?: excelSheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of excelSheets to fetch.
     */
    orderBy?: excelSheetOrderByWithRelationInput | excelSheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for excelSheets.
     */
    cursor?: excelSheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` excelSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` excelSheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of excelSheets.
     */
    distinct?: ExcelSheetScalarFieldEnum | ExcelSheetScalarFieldEnum[]
  }

  /**
   * excelSheet findFirstOrThrow
   */
  export type excelSheetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the excelSheet
     */
    select?: excelSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the excelSheet
     */
    omit?: excelSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: excelSheetInclude<ExtArgs> | null
    /**
     * Filter, which excelSheet to fetch.
     */
    where?: excelSheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of excelSheets to fetch.
     */
    orderBy?: excelSheetOrderByWithRelationInput | excelSheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for excelSheets.
     */
    cursor?: excelSheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` excelSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` excelSheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of excelSheets.
     */
    distinct?: ExcelSheetScalarFieldEnum | ExcelSheetScalarFieldEnum[]
  }

  /**
   * excelSheet findMany
   */
  export type excelSheetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the excelSheet
     */
    select?: excelSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the excelSheet
     */
    omit?: excelSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: excelSheetInclude<ExtArgs> | null
    /**
     * Filter, which excelSheets to fetch.
     */
    where?: excelSheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of excelSheets to fetch.
     */
    orderBy?: excelSheetOrderByWithRelationInput | excelSheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing excelSheets.
     */
    cursor?: excelSheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` excelSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` excelSheets.
     */
    skip?: number
    distinct?: ExcelSheetScalarFieldEnum | ExcelSheetScalarFieldEnum[]
  }

  /**
   * excelSheet create
   */
  export type excelSheetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the excelSheet
     */
    select?: excelSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the excelSheet
     */
    omit?: excelSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: excelSheetInclude<ExtArgs> | null
    /**
     * The data needed to create a excelSheet.
     */
    data: XOR<excelSheetCreateInput, excelSheetUncheckedCreateInput>
  }

  /**
   * excelSheet createMany
   */
  export type excelSheetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many excelSheets.
     */
    data: excelSheetCreateManyInput | excelSheetCreateManyInput[]
  }

  /**
   * excelSheet update
   */
  export type excelSheetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the excelSheet
     */
    select?: excelSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the excelSheet
     */
    omit?: excelSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: excelSheetInclude<ExtArgs> | null
    /**
     * The data needed to update a excelSheet.
     */
    data: XOR<excelSheetUpdateInput, excelSheetUncheckedUpdateInput>
    /**
     * Choose, which excelSheet to update.
     */
    where: excelSheetWhereUniqueInput
  }

  /**
   * excelSheet updateMany
   */
  export type excelSheetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update excelSheets.
     */
    data: XOR<excelSheetUpdateManyMutationInput, excelSheetUncheckedUpdateManyInput>
    /**
     * Filter which excelSheets to update
     */
    where?: excelSheetWhereInput
    /**
     * Limit how many excelSheets to update.
     */
    limit?: number
  }

  /**
   * excelSheet upsert
   */
  export type excelSheetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the excelSheet
     */
    select?: excelSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the excelSheet
     */
    omit?: excelSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: excelSheetInclude<ExtArgs> | null
    /**
     * The filter to search for the excelSheet to update in case it exists.
     */
    where: excelSheetWhereUniqueInput
    /**
     * In case the excelSheet found by the `where` argument doesn't exist, create a new excelSheet with this data.
     */
    create: XOR<excelSheetCreateInput, excelSheetUncheckedCreateInput>
    /**
     * In case the excelSheet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<excelSheetUpdateInput, excelSheetUncheckedUpdateInput>
  }

  /**
   * excelSheet delete
   */
  export type excelSheetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the excelSheet
     */
    select?: excelSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the excelSheet
     */
    omit?: excelSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: excelSheetInclude<ExtArgs> | null
    /**
     * Filter which excelSheet to delete.
     */
    where: excelSheetWhereUniqueInput
  }

  /**
   * excelSheet deleteMany
   */
  export type excelSheetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which excelSheets to delete
     */
    where?: excelSheetWhereInput
    /**
     * Limit how many excelSheets to delete.
     */
    limit?: number
  }

  /**
   * excelSheet without action
   */
  export type excelSheetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the excelSheet
     */
    select?: excelSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the excelSheet
     */
    omit?: excelSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: excelSheetInclude<ExtArgs> | null
  }


  /**
   * Model log
   */

  export type AggregateLog = {
    _count: LogCountAggregateOutputType | null
    _avg: LogAvgAggregateOutputType | null
    _sum: LogSumAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  export type LogAvgAggregateOutputType = {
    id: number | null
    row: number | null
  }

  export type LogSumAggregateOutputType = {
    id: number | null
    row: number | null
  }

  export type LogMinAggregateOutputType = {
    id: number | null
    guid: string | null
    name: string | null
    type: string | null
    row: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LogMaxAggregateOutputType = {
    id: number | null
    guid: string | null
    name: string | null
    type: string | null
    row: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LogCountAggregateOutputType = {
    id: number
    guid: number
    name: number
    type: number
    row: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type LogAvgAggregateInputType = {
    id?: true
    row?: true
  }

  export type LogSumAggregateInputType = {
    id?: true
    row?: true
  }

  export type LogMinAggregateInputType = {
    id?: true
    guid?: true
    name?: true
    type?: true
    row?: true
    created_at?: true
    updated_at?: true
  }

  export type LogMaxAggregateInputType = {
    id?: true
    guid?: true
    name?: true
    type?: true
    row?: true
    created_at?: true
    updated_at?: true
  }

  export type LogCountAggregateInputType = {
    id?: true
    guid?: true
    name?: true
    type?: true
    row?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type LogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which log to aggregate.
     */
    where?: logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logOrderByWithRelationInput | logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned logs
    **/
    _count?: true | LogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogMaxAggregateInputType
  }

  export type GetLogAggregateType<T extends LogAggregateArgs> = {
        [P in keyof T & keyof AggregateLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog[P]>
      : GetScalarType<T[P], AggregateLog[P]>
  }




  export type logGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: logWhereInput
    orderBy?: logOrderByWithAggregationInput | logOrderByWithAggregationInput[]
    by: LogScalarFieldEnum[] | LogScalarFieldEnum
    having?: logScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogCountAggregateInputType | true
    _avg?: LogAvgAggregateInputType
    _sum?: LogSumAggregateInputType
    _min?: LogMinAggregateInputType
    _max?: LogMaxAggregateInputType
  }

  export type LogGroupByOutputType = {
    id: number
    guid: string | null
    name: string | null
    type: string | null
    row: number | null
    created_at: Date
    updated_at: Date
    _count: LogCountAggregateOutputType | null
    _avg: LogAvgAggregateOutputType | null
    _sum: LogSumAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  type GetLogGroupByPayload<T extends logGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogGroupByOutputType[P]>
            : GetScalarType<T[P], LogGroupByOutputType[P]>
        }
      >
    >


  export type logSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    name?: boolean
    type?: boolean
    row?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["log"]>



  export type logSelectScalar = {
    id?: boolean
    guid?: boolean
    name?: boolean
    type?: boolean
    row?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type logOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guid" | "name" | "type" | "row" | "created_at" | "updated_at", ExtArgs["result"]["log"]>

  export type $logPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "log"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      guid: string | null
      name: string | null
      type: string | null
      row: number | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["log"]>
    composites: {}
  }

  type logGetPayload<S extends boolean | null | undefined | logDefaultArgs> = $Result.GetResult<Prisma.$logPayload, S>

  type logCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<logFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogCountAggregateInputType | true
    }

  export interface logDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['log'], meta: { name: 'log' } }
    /**
     * Find zero or one Log that matches the filter.
     * @param {logFindUniqueArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends logFindUniqueArgs>(args: SelectSubset<T, logFindUniqueArgs<ExtArgs>>): Prisma__logClient<$Result.GetResult<Prisma.$logPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {logFindUniqueOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends logFindUniqueOrThrowArgs>(args: SelectSubset<T, logFindUniqueOrThrowArgs<ExtArgs>>): Prisma__logClient<$Result.GetResult<Prisma.$logPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logFindFirstArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends logFindFirstArgs>(args?: SelectSubset<T, logFindFirstArgs<ExtArgs>>): Prisma__logClient<$Result.GetResult<Prisma.$logPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logFindFirstOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends logFindFirstOrThrowArgs>(args?: SelectSubset<T, logFindFirstOrThrowArgs<ExtArgs>>): Prisma__logClient<$Result.GetResult<Prisma.$logPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.log.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logWithIdOnly = await prisma.log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends logFindManyArgs>(args?: SelectSubset<T, logFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Log.
     * @param {logCreateArgs} args - Arguments to create a Log.
     * @example
     * // Create one Log
     * const Log = await prisma.log.create({
     *   data: {
     *     // ... data to create a Log
     *   }
     * })
     * 
     */
    create<T extends logCreateArgs>(args: SelectSubset<T, logCreateArgs<ExtArgs>>): Prisma__logClient<$Result.GetResult<Prisma.$logPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logs.
     * @param {logCreateManyArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends logCreateManyArgs>(args?: SelectSubset<T, logCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Log.
     * @param {logDeleteArgs} args - Arguments to delete one Log.
     * @example
     * // Delete one Log
     * const Log = await prisma.log.delete({
     *   where: {
     *     // ... filter to delete one Log
     *   }
     * })
     * 
     */
    delete<T extends logDeleteArgs>(args: SelectSubset<T, logDeleteArgs<ExtArgs>>): Prisma__logClient<$Result.GetResult<Prisma.$logPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Log.
     * @param {logUpdateArgs} args - Arguments to update one Log.
     * @example
     * // Update one Log
     * const log = await prisma.log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends logUpdateArgs>(args: SelectSubset<T, logUpdateArgs<ExtArgs>>): Prisma__logClient<$Result.GetResult<Prisma.$logPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logs.
     * @param {logDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends logDeleteManyArgs>(args?: SelectSubset<T, logDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends logUpdateManyArgs>(args: SelectSubset<T, logUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Log.
     * @param {logUpsertArgs} args - Arguments to update or create a Log.
     * @example
     * // Update or create a Log
     * const log = await prisma.log.upsert({
     *   create: {
     *     // ... data to create a Log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log we want to update
     *   }
     * })
     */
    upsert<T extends logUpsertArgs>(args: SelectSubset<T, logUpsertArgs<ExtArgs>>): Prisma__logClient<$Result.GetResult<Prisma.$logPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.log.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends logCountArgs>(
      args?: Subset<T, logCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogAggregateArgs>(args: Subset<T, LogAggregateArgs>): Prisma.PrismaPromise<GetLogAggregateType<T>>

    /**
     * Group by Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logGroupByArgs} args - Group by arguments.
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
      T extends logGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: logGroupByArgs['orderBy'] }
        : { orderBy?: logGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, logGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the log model
   */
  readonly fields: logFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__logClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the log model
   */
  interface logFieldRefs {
    readonly id: FieldRef<"log", 'Int'>
    readonly guid: FieldRef<"log", 'String'>
    readonly name: FieldRef<"log", 'String'>
    readonly type: FieldRef<"log", 'String'>
    readonly row: FieldRef<"log", 'Int'>
    readonly created_at: FieldRef<"log", 'DateTime'>
    readonly updated_at: FieldRef<"log", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * log findUnique
   */
  export type logFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log
     */
    select?: logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log
     */
    omit?: logOmit<ExtArgs> | null
    /**
     * Filter, which log to fetch.
     */
    where: logWhereUniqueInput
  }

  /**
   * log findUniqueOrThrow
   */
  export type logFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log
     */
    select?: logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log
     */
    omit?: logOmit<ExtArgs> | null
    /**
     * Filter, which log to fetch.
     */
    where: logWhereUniqueInput
  }

  /**
   * log findFirst
   */
  export type logFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log
     */
    select?: logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log
     */
    omit?: logOmit<ExtArgs> | null
    /**
     * Filter, which log to fetch.
     */
    where?: logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logOrderByWithRelationInput | logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logs.
     */
    cursor?: logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * log findFirstOrThrow
   */
  export type logFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log
     */
    select?: logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log
     */
    omit?: logOmit<ExtArgs> | null
    /**
     * Filter, which log to fetch.
     */
    where?: logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logOrderByWithRelationInput | logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logs.
     */
    cursor?: logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * log findMany
   */
  export type logFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log
     */
    select?: logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log
     */
    omit?: logOmit<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where?: logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logOrderByWithRelationInput | logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing logs.
     */
    cursor?: logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * log create
   */
  export type logCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log
     */
    select?: logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log
     */
    omit?: logOmit<ExtArgs> | null
    /**
     * The data needed to create a log.
     */
    data: XOR<logCreateInput, logUncheckedCreateInput>
  }

  /**
   * log createMany
   */
  export type logCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many logs.
     */
    data: logCreateManyInput | logCreateManyInput[]
  }

  /**
   * log update
   */
  export type logUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log
     */
    select?: logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log
     */
    omit?: logOmit<ExtArgs> | null
    /**
     * The data needed to update a log.
     */
    data: XOR<logUpdateInput, logUncheckedUpdateInput>
    /**
     * Choose, which log to update.
     */
    where: logWhereUniqueInput
  }

  /**
   * log updateMany
   */
  export type logUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update logs.
     */
    data: XOR<logUpdateManyMutationInput, logUncheckedUpdateManyInput>
    /**
     * Filter which logs to update
     */
    where?: logWhereInput
    /**
     * Limit how many logs to update.
     */
    limit?: number
  }

  /**
   * log upsert
   */
  export type logUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log
     */
    select?: logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log
     */
    omit?: logOmit<ExtArgs> | null
    /**
     * The filter to search for the log to update in case it exists.
     */
    where: logWhereUniqueInput
    /**
     * In case the log found by the `where` argument doesn't exist, create a new log with this data.
     */
    create: XOR<logCreateInput, logUncheckedCreateInput>
    /**
     * In case the log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<logUpdateInput, logUncheckedUpdateInput>
  }

  /**
   * log delete
   */
  export type logDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log
     */
    select?: logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log
     */
    omit?: logOmit<ExtArgs> | null
    /**
     * Filter which log to delete.
     */
    where: logWhereUniqueInput
  }

  /**
   * log deleteMany
   */
  export type logDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logs to delete
     */
    where?: logWhereInput
    /**
     * Limit how many logs to delete.
     */
    limit?: number
  }

  /**
   * log without action
   */
  export type logDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log
     */
    select?: logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log
     */
    omit?: logOmit<ExtArgs> | null
  }


  /**
   * Model ms_users
   */

  export type AggregateMs_users = {
    _count: Ms_usersCountAggregateOutputType | null
    _avg: Ms_usersAvgAggregateOutputType | null
    _sum: Ms_usersSumAggregateOutputType | null
    _min: Ms_usersMinAggregateOutputType | null
    _max: Ms_usersMaxAggregateOutputType | null
  }

  export type Ms_usersAvgAggregateOutputType = {
    id: number | null
    role: number | null
  }

  export type Ms_usersSumAggregateOutputType = {
    id: number | null
    role: number | null
  }

  export type Ms_usersMinAggregateOutputType = {
    id: number | null
    name: string | null
    username: string | null
    password: string | null
    divisi: string | null
    departemen: string | null
    email: string | null
    role: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Ms_usersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    username: string | null
    password: string | null
    divisi: string | null
    departemen: string | null
    email: string | null
    role: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Ms_usersCountAggregateOutputType = {
    id: number
    name: number
    username: number
    password: number
    divisi: number
    departemen: number
    email: number
    role: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Ms_usersAvgAggregateInputType = {
    id?: true
    role?: true
  }

  export type Ms_usersSumAggregateInputType = {
    id?: true
    role?: true
  }

  export type Ms_usersMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    divisi?: true
    departemen?: true
    email?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type Ms_usersMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    divisi?: true
    departemen?: true
    email?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type Ms_usersCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    divisi?: true
    departemen?: true
    email?: true
    role?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Ms_usersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ms_users to aggregate.
     */
    where?: ms_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ms_users to fetch.
     */
    orderBy?: ms_usersOrderByWithRelationInput | ms_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ms_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ms_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ms_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ms_users
    **/
    _count?: true | Ms_usersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ms_usersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ms_usersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ms_usersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ms_usersMaxAggregateInputType
  }

  export type GetMs_usersAggregateType<T extends Ms_usersAggregateArgs> = {
        [P in keyof T & keyof AggregateMs_users]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMs_users[P]>
      : GetScalarType<T[P], AggregateMs_users[P]>
  }




  export type ms_usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ms_usersWhereInput
    orderBy?: ms_usersOrderByWithAggregationInput | ms_usersOrderByWithAggregationInput[]
    by: Ms_usersScalarFieldEnum[] | Ms_usersScalarFieldEnum
    having?: ms_usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ms_usersCountAggregateInputType | true
    _avg?: Ms_usersAvgAggregateInputType
    _sum?: Ms_usersSumAggregateInputType
    _min?: Ms_usersMinAggregateInputType
    _max?: Ms_usersMaxAggregateInputType
  }

  export type Ms_usersGroupByOutputType = {
    id: number
    name: string | null
    username: string | null
    password: string | null
    divisi: string | null
    departemen: string | null
    email: string | null
    role: number | null
    created_at: Date | null
    updated_at: Date | null
    _count: Ms_usersCountAggregateOutputType | null
    _avg: Ms_usersAvgAggregateOutputType | null
    _sum: Ms_usersSumAggregateOutputType | null
    _min: Ms_usersMinAggregateOutputType | null
    _max: Ms_usersMaxAggregateOutputType | null
  }

  type GetMs_usersGroupByPayload<T extends ms_usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ms_usersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ms_usersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ms_usersGroupByOutputType[P]>
            : GetScalarType<T[P], Ms_usersGroupByOutputType[P]>
        }
      >
    >


  export type ms_usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    divisi?: boolean
    departemen?: boolean
    email?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
    trx_LogHistory_trx_LogHistory_PICBAToms_users?: boolean | ms_users$trx_LogHistory_trx_LogHistory_PICBAToms_usersArgs<ExtArgs>
    trx_LogHistory_trx_LogHistory_PICUserToms_users?: boolean | ms_users$trx_LogHistory_trx_LogHistory_PICUserToms_usersArgs<ExtArgs>
    _count?: boolean | Ms_usersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ms_users"]>



  export type ms_usersSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    divisi?: boolean
    departemen?: boolean
    email?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ms_usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "password" | "divisi" | "departemen" | "email" | "role" | "created_at" | "updated_at", ExtArgs["result"]["ms_users"]>
  export type ms_usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trx_LogHistory_trx_LogHistory_PICBAToms_users?: boolean | ms_users$trx_LogHistory_trx_LogHistory_PICBAToms_usersArgs<ExtArgs>
    trx_LogHistory_trx_LogHistory_PICUserToms_users?: boolean | ms_users$trx_LogHistory_trx_LogHistory_PICUserToms_usersArgs<ExtArgs>
    _count?: boolean | Ms_usersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ms_usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ms_users"
    objects: {
      trx_LogHistory_trx_LogHistory_PICBAToms_users: Prisma.$trx_LogHistoryPayload<ExtArgs>[]
      trx_LogHistory_trx_LogHistory_PICUserToms_users: Prisma.$trx_LogHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      username: string | null
      password: string | null
      divisi: string | null
      departemen: string | null
      email: string | null
      role: number | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["ms_users"]>
    composites: {}
  }

  type ms_usersGetPayload<S extends boolean | null | undefined | ms_usersDefaultArgs> = $Result.GetResult<Prisma.$ms_usersPayload, S>

  type ms_usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ms_usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Ms_usersCountAggregateInputType | true
    }

  export interface ms_usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ms_users'], meta: { name: 'ms_users' } }
    /**
     * Find zero or one Ms_users that matches the filter.
     * @param {ms_usersFindUniqueArgs} args - Arguments to find a Ms_users
     * @example
     * // Get one Ms_users
     * const ms_users = await prisma.ms_users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ms_usersFindUniqueArgs>(args: SelectSubset<T, ms_usersFindUniqueArgs<ExtArgs>>): Prisma__ms_usersClient<$Result.GetResult<Prisma.$ms_usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ms_users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ms_usersFindUniqueOrThrowArgs} args - Arguments to find a Ms_users
     * @example
     * // Get one Ms_users
     * const ms_users = await prisma.ms_users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ms_usersFindUniqueOrThrowArgs>(args: SelectSubset<T, ms_usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ms_usersClient<$Result.GetResult<Prisma.$ms_usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ms_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ms_usersFindFirstArgs} args - Arguments to find a Ms_users
     * @example
     * // Get one Ms_users
     * const ms_users = await prisma.ms_users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ms_usersFindFirstArgs>(args?: SelectSubset<T, ms_usersFindFirstArgs<ExtArgs>>): Prisma__ms_usersClient<$Result.GetResult<Prisma.$ms_usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ms_users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ms_usersFindFirstOrThrowArgs} args - Arguments to find a Ms_users
     * @example
     * // Get one Ms_users
     * const ms_users = await prisma.ms_users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ms_usersFindFirstOrThrowArgs>(args?: SelectSubset<T, ms_usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ms_usersClient<$Result.GetResult<Prisma.$ms_usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ms_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ms_usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ms_users
     * const ms_users = await prisma.ms_users.findMany()
     * 
     * // Get first 10 Ms_users
     * const ms_users = await prisma.ms_users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ms_usersWithIdOnly = await prisma.ms_users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ms_usersFindManyArgs>(args?: SelectSubset<T, ms_usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ms_usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ms_users.
     * @param {ms_usersCreateArgs} args - Arguments to create a Ms_users.
     * @example
     * // Create one Ms_users
     * const Ms_users = await prisma.ms_users.create({
     *   data: {
     *     // ... data to create a Ms_users
     *   }
     * })
     * 
     */
    create<T extends ms_usersCreateArgs>(args: SelectSubset<T, ms_usersCreateArgs<ExtArgs>>): Prisma__ms_usersClient<$Result.GetResult<Prisma.$ms_usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ms_users.
     * @param {ms_usersCreateManyArgs} args - Arguments to create many Ms_users.
     * @example
     * // Create many Ms_users
     * const ms_users = await prisma.ms_users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ms_usersCreateManyArgs>(args?: SelectSubset<T, ms_usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ms_users.
     * @param {ms_usersDeleteArgs} args - Arguments to delete one Ms_users.
     * @example
     * // Delete one Ms_users
     * const Ms_users = await prisma.ms_users.delete({
     *   where: {
     *     // ... filter to delete one Ms_users
     *   }
     * })
     * 
     */
    delete<T extends ms_usersDeleteArgs>(args: SelectSubset<T, ms_usersDeleteArgs<ExtArgs>>): Prisma__ms_usersClient<$Result.GetResult<Prisma.$ms_usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ms_users.
     * @param {ms_usersUpdateArgs} args - Arguments to update one Ms_users.
     * @example
     * // Update one Ms_users
     * const ms_users = await prisma.ms_users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ms_usersUpdateArgs>(args: SelectSubset<T, ms_usersUpdateArgs<ExtArgs>>): Prisma__ms_usersClient<$Result.GetResult<Prisma.$ms_usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ms_users.
     * @param {ms_usersDeleteManyArgs} args - Arguments to filter Ms_users to delete.
     * @example
     * // Delete a few Ms_users
     * const { count } = await prisma.ms_users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ms_usersDeleteManyArgs>(args?: SelectSubset<T, ms_usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ms_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ms_usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ms_users
     * const ms_users = await prisma.ms_users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ms_usersUpdateManyArgs>(args: SelectSubset<T, ms_usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ms_users.
     * @param {ms_usersUpsertArgs} args - Arguments to update or create a Ms_users.
     * @example
     * // Update or create a Ms_users
     * const ms_users = await prisma.ms_users.upsert({
     *   create: {
     *     // ... data to create a Ms_users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ms_users we want to update
     *   }
     * })
     */
    upsert<T extends ms_usersUpsertArgs>(args: SelectSubset<T, ms_usersUpsertArgs<ExtArgs>>): Prisma__ms_usersClient<$Result.GetResult<Prisma.$ms_usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ms_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ms_usersCountArgs} args - Arguments to filter Ms_users to count.
     * @example
     * // Count the number of Ms_users
     * const count = await prisma.ms_users.count({
     *   where: {
     *     // ... the filter for the Ms_users we want to count
     *   }
     * })
    **/
    count<T extends ms_usersCountArgs>(
      args?: Subset<T, ms_usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ms_usersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ms_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ms_usersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ms_usersAggregateArgs>(args: Subset<T, Ms_usersAggregateArgs>): Prisma.PrismaPromise<GetMs_usersAggregateType<T>>

    /**
     * Group by Ms_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ms_usersGroupByArgs} args - Group by arguments.
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
      T extends ms_usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ms_usersGroupByArgs['orderBy'] }
        : { orderBy?: ms_usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ms_usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMs_usersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ms_users model
   */
  readonly fields: ms_usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ms_users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ms_usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trx_LogHistory_trx_LogHistory_PICBAToms_users<T extends ms_users$trx_LogHistory_trx_LogHistory_PICBAToms_usersArgs<ExtArgs> = {}>(args?: Subset<T, ms_users$trx_LogHistory_trx_LogHistory_PICBAToms_usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trx_LogHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trx_LogHistory_trx_LogHistory_PICUserToms_users<T extends ms_users$trx_LogHistory_trx_LogHistory_PICUserToms_usersArgs<ExtArgs> = {}>(args?: Subset<T, ms_users$trx_LogHistory_trx_LogHistory_PICUserToms_usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trx_LogHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ms_users model
   */
  interface ms_usersFieldRefs {
    readonly id: FieldRef<"ms_users", 'Int'>
    readonly name: FieldRef<"ms_users", 'String'>
    readonly username: FieldRef<"ms_users", 'String'>
    readonly password: FieldRef<"ms_users", 'String'>
    readonly divisi: FieldRef<"ms_users", 'String'>
    readonly departemen: FieldRef<"ms_users", 'String'>
    readonly email: FieldRef<"ms_users", 'String'>
    readonly role: FieldRef<"ms_users", 'Int'>
    readonly created_at: FieldRef<"ms_users", 'DateTime'>
    readonly updated_at: FieldRef<"ms_users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ms_users findUnique
   */
  export type ms_usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ms_users
     */
    select?: ms_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ms_users
     */
    omit?: ms_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ms_usersInclude<ExtArgs> | null
    /**
     * Filter, which ms_users to fetch.
     */
    where: ms_usersWhereUniqueInput
  }

  /**
   * ms_users findUniqueOrThrow
   */
  export type ms_usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ms_users
     */
    select?: ms_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ms_users
     */
    omit?: ms_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ms_usersInclude<ExtArgs> | null
    /**
     * Filter, which ms_users to fetch.
     */
    where: ms_usersWhereUniqueInput
  }

  /**
   * ms_users findFirst
   */
  export type ms_usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ms_users
     */
    select?: ms_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ms_users
     */
    omit?: ms_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ms_usersInclude<ExtArgs> | null
    /**
     * Filter, which ms_users to fetch.
     */
    where?: ms_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ms_users to fetch.
     */
    orderBy?: ms_usersOrderByWithRelationInput | ms_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ms_users.
     */
    cursor?: ms_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ms_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ms_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ms_users.
     */
    distinct?: Ms_usersScalarFieldEnum | Ms_usersScalarFieldEnum[]
  }

  /**
   * ms_users findFirstOrThrow
   */
  export type ms_usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ms_users
     */
    select?: ms_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ms_users
     */
    omit?: ms_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ms_usersInclude<ExtArgs> | null
    /**
     * Filter, which ms_users to fetch.
     */
    where?: ms_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ms_users to fetch.
     */
    orderBy?: ms_usersOrderByWithRelationInput | ms_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ms_users.
     */
    cursor?: ms_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ms_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ms_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ms_users.
     */
    distinct?: Ms_usersScalarFieldEnum | Ms_usersScalarFieldEnum[]
  }

  /**
   * ms_users findMany
   */
  export type ms_usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ms_users
     */
    select?: ms_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ms_users
     */
    omit?: ms_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ms_usersInclude<ExtArgs> | null
    /**
     * Filter, which ms_users to fetch.
     */
    where?: ms_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ms_users to fetch.
     */
    orderBy?: ms_usersOrderByWithRelationInput | ms_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ms_users.
     */
    cursor?: ms_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ms_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ms_users.
     */
    skip?: number
    distinct?: Ms_usersScalarFieldEnum | Ms_usersScalarFieldEnum[]
  }

  /**
   * ms_users create
   */
  export type ms_usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ms_users
     */
    select?: ms_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ms_users
     */
    omit?: ms_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ms_usersInclude<ExtArgs> | null
    /**
     * The data needed to create a ms_users.
     */
    data?: XOR<ms_usersCreateInput, ms_usersUncheckedCreateInput>
  }

  /**
   * ms_users createMany
   */
  export type ms_usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ms_users.
     */
    data: ms_usersCreateManyInput | ms_usersCreateManyInput[]
  }

  /**
   * ms_users update
   */
  export type ms_usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ms_users
     */
    select?: ms_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ms_users
     */
    omit?: ms_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ms_usersInclude<ExtArgs> | null
    /**
     * The data needed to update a ms_users.
     */
    data: XOR<ms_usersUpdateInput, ms_usersUncheckedUpdateInput>
    /**
     * Choose, which ms_users to update.
     */
    where: ms_usersWhereUniqueInput
  }

  /**
   * ms_users updateMany
   */
  export type ms_usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ms_users.
     */
    data: XOR<ms_usersUpdateManyMutationInput, ms_usersUncheckedUpdateManyInput>
    /**
     * Filter which ms_users to update
     */
    where?: ms_usersWhereInput
    /**
     * Limit how many ms_users to update.
     */
    limit?: number
  }

  /**
   * ms_users upsert
   */
  export type ms_usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ms_users
     */
    select?: ms_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ms_users
     */
    omit?: ms_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ms_usersInclude<ExtArgs> | null
    /**
     * The filter to search for the ms_users to update in case it exists.
     */
    where: ms_usersWhereUniqueInput
    /**
     * In case the ms_users found by the `where` argument doesn't exist, create a new ms_users with this data.
     */
    create: XOR<ms_usersCreateInput, ms_usersUncheckedCreateInput>
    /**
     * In case the ms_users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ms_usersUpdateInput, ms_usersUncheckedUpdateInput>
  }

  /**
   * ms_users delete
   */
  export type ms_usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ms_users
     */
    select?: ms_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ms_users
     */
    omit?: ms_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ms_usersInclude<ExtArgs> | null
    /**
     * Filter which ms_users to delete.
     */
    where: ms_usersWhereUniqueInput
  }

  /**
   * ms_users deleteMany
   */
  export type ms_usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ms_users to delete
     */
    where?: ms_usersWhereInput
    /**
     * Limit how many ms_users to delete.
     */
    limit?: number
  }

  /**
   * ms_users.trx_LogHistory_trx_LogHistory_PICBAToms_users
   */
  export type ms_users$trx_LogHistory_trx_LogHistory_PICBAToms_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_LogHistory
     */
    select?: trx_LogHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the trx_LogHistory
     */
    omit?: trx_LogHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trx_LogHistoryInclude<ExtArgs> | null
    where?: trx_LogHistoryWhereInput
    orderBy?: trx_LogHistoryOrderByWithRelationInput | trx_LogHistoryOrderByWithRelationInput[]
    cursor?: trx_LogHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Trx_LogHistoryScalarFieldEnum | Trx_LogHistoryScalarFieldEnum[]
  }

  /**
   * ms_users.trx_LogHistory_trx_LogHistory_PICUserToms_users
   */
  export type ms_users$trx_LogHistory_trx_LogHistory_PICUserToms_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_LogHistory
     */
    select?: trx_LogHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the trx_LogHistory
     */
    omit?: trx_LogHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trx_LogHistoryInclude<ExtArgs> | null
    where?: trx_LogHistoryWhereInput
    orderBy?: trx_LogHistoryOrderByWithRelationInput | trx_LogHistoryOrderByWithRelationInput[]
    cursor?: trx_LogHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Trx_LogHistoryScalarFieldEnum | Trx_LogHistoryScalarFieldEnum[]
  }

  /**
   * ms_users without action
   */
  export type ms_usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ms_users
     */
    select?: ms_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ms_users
     */
    omit?: ms_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ms_usersInclude<ExtArgs> | null
  }


  /**
   * Model Schedule_Recommendation
   */

  export type AggregateSchedule_Recommendation = {
    _count: Schedule_RecommendationCountAggregateOutputType | null
    _avg: Schedule_RecommendationAvgAggregateOutputType | null
    _sum: Schedule_RecommendationSumAggregateOutputType | null
    _min: Schedule_RecommendationMinAggregateOutputType | null
    _max: Schedule_RecommendationMaxAggregateOutputType | null
  }

  export type Schedule_RecommendationAvgAggregateOutputType = {
    PRO: number | null
    Maksimal_Produksi_per_Base: number | null
    Lead_Time_Process_Standar: number | null
    Lead_Time_Estimation_Process: number | null
    Capacity_Utilization: number | null
  }

  export type Schedule_RecommendationSumAggregateOutputType = {
    PRO: bigint | null
    Maksimal_Produksi_per_Base: number | null
    Lead_Time_Process_Standar: number | null
    Lead_Time_Estimation_Process: number | null
    Capacity_Utilization: number | null
  }

  export type Schedule_RecommendationMinAggregateOutputType = {
    PN: string | null
    PRO: bigint | null
    Product: string | null
    ProductGroup: string | null
    Process: string | null
    Dependency: string | null
    Maksimal_Produksi_per_Base: number | null
    ProcessOrder: string | null
    PlanStartDate: Date | null
    PlanEndDate: Date | null
    Start_Date: Date | null
    End_Date: Date | null
    Estimated_Material_Arrived: Date | null
    Lead_Time_Process_Standar: number | null
    Lead_Time_Estimation_Process: number | null
    Process_Status: string | null
    MPSDueDate: Date | null
    Finished_Prediction: Date | null
    Status_Unit_Delivery: string | null
    Capacity_Utilization: number | null
    Status_Capacity: string | null
    Status_Material: string | null
  }

  export type Schedule_RecommendationMaxAggregateOutputType = {
    PN: string | null
    PRO: bigint | null
    Product: string | null
    ProductGroup: string | null
    Process: string | null
    Dependency: string | null
    Maksimal_Produksi_per_Base: number | null
    ProcessOrder: string | null
    PlanStartDate: Date | null
    PlanEndDate: Date | null
    Start_Date: Date | null
    End_Date: Date | null
    Estimated_Material_Arrived: Date | null
    Lead_Time_Process_Standar: number | null
    Lead_Time_Estimation_Process: number | null
    Process_Status: string | null
    MPSDueDate: Date | null
    Finished_Prediction: Date | null
    Status_Unit_Delivery: string | null
    Capacity_Utilization: number | null
    Status_Capacity: string | null
    Status_Material: string | null
  }

  export type Schedule_RecommendationCountAggregateOutputType = {
    PN: number
    PRO: number
    Product: number
    ProductGroup: number
    Process: number
    Dependency: number
    Maksimal_Produksi_per_Base: number
    ProcessOrder: number
    PlanStartDate: number
    PlanEndDate: number
    Start_Date: number
    End_Date: number
    Estimated_Material_Arrived: number
    Lead_Time_Process_Standar: number
    Lead_Time_Estimation_Process: number
    Process_Status: number
    MPSDueDate: number
    Finished_Prediction: number
    Status_Unit_Delivery: number
    Capacity_Utilization: number
    Status_Capacity: number
    Status_Material: number
    _all: number
  }


  export type Schedule_RecommendationAvgAggregateInputType = {
    PRO?: true
    Maksimal_Produksi_per_Base?: true
    Lead_Time_Process_Standar?: true
    Lead_Time_Estimation_Process?: true
    Capacity_Utilization?: true
  }

  export type Schedule_RecommendationSumAggregateInputType = {
    PRO?: true
    Maksimal_Produksi_per_Base?: true
    Lead_Time_Process_Standar?: true
    Lead_Time_Estimation_Process?: true
    Capacity_Utilization?: true
  }

  export type Schedule_RecommendationMinAggregateInputType = {
    PN?: true
    PRO?: true
    Product?: true
    ProductGroup?: true
    Process?: true
    Dependency?: true
    Maksimal_Produksi_per_Base?: true
    ProcessOrder?: true
    PlanStartDate?: true
    PlanEndDate?: true
    Start_Date?: true
    End_Date?: true
    Estimated_Material_Arrived?: true
    Lead_Time_Process_Standar?: true
    Lead_Time_Estimation_Process?: true
    Process_Status?: true
    MPSDueDate?: true
    Finished_Prediction?: true
    Status_Unit_Delivery?: true
    Capacity_Utilization?: true
    Status_Capacity?: true
    Status_Material?: true
  }

  export type Schedule_RecommendationMaxAggregateInputType = {
    PN?: true
    PRO?: true
    Product?: true
    ProductGroup?: true
    Process?: true
    Dependency?: true
    Maksimal_Produksi_per_Base?: true
    ProcessOrder?: true
    PlanStartDate?: true
    PlanEndDate?: true
    Start_Date?: true
    End_Date?: true
    Estimated_Material_Arrived?: true
    Lead_Time_Process_Standar?: true
    Lead_Time_Estimation_Process?: true
    Process_Status?: true
    MPSDueDate?: true
    Finished_Prediction?: true
    Status_Unit_Delivery?: true
    Capacity_Utilization?: true
    Status_Capacity?: true
    Status_Material?: true
  }

  export type Schedule_RecommendationCountAggregateInputType = {
    PN?: true
    PRO?: true
    Product?: true
    ProductGroup?: true
    Process?: true
    Dependency?: true
    Maksimal_Produksi_per_Base?: true
    ProcessOrder?: true
    PlanStartDate?: true
    PlanEndDate?: true
    Start_Date?: true
    End_Date?: true
    Estimated_Material_Arrived?: true
    Lead_Time_Process_Standar?: true
    Lead_Time_Estimation_Process?: true
    Process_Status?: true
    MPSDueDate?: true
    Finished_Prediction?: true
    Status_Unit_Delivery?: true
    Capacity_Utilization?: true
    Status_Capacity?: true
    Status_Material?: true
    _all?: true
  }

  export type Schedule_RecommendationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedule_Recommendation to aggregate.
     */
    where?: Schedule_RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedule_Recommendations to fetch.
     */
    orderBy?: Schedule_RecommendationOrderByWithRelationInput | Schedule_RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Schedule_RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedule_Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedule_Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedule_Recommendations
    **/
    _count?: true | Schedule_RecommendationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Schedule_RecommendationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Schedule_RecommendationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Schedule_RecommendationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Schedule_RecommendationMaxAggregateInputType
  }

  export type GetSchedule_RecommendationAggregateType<T extends Schedule_RecommendationAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule_Recommendation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule_Recommendation[P]>
      : GetScalarType<T[P], AggregateSchedule_Recommendation[P]>
  }




  export type Schedule_RecommendationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Schedule_RecommendationWhereInput
    orderBy?: Schedule_RecommendationOrderByWithAggregationInput | Schedule_RecommendationOrderByWithAggregationInput[]
    by: Schedule_RecommendationScalarFieldEnum[] | Schedule_RecommendationScalarFieldEnum
    having?: Schedule_RecommendationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Schedule_RecommendationCountAggregateInputType | true
    _avg?: Schedule_RecommendationAvgAggregateInputType
    _sum?: Schedule_RecommendationSumAggregateInputType
    _min?: Schedule_RecommendationMinAggregateInputType
    _max?: Schedule_RecommendationMaxAggregateInputType
  }

  export type Schedule_RecommendationGroupByOutputType = {
    PN: string
    PRO: bigint | null
    Product: string | null
    ProductGroup: string | null
    Process: string | null
    Dependency: string | null
    Maksimal_Produksi_per_Base: number | null
    ProcessOrder: string | null
    PlanStartDate: Date | null
    PlanEndDate: Date | null
    Start_Date: Date | null
    End_Date: Date | null
    Estimated_Material_Arrived: Date | null
    Lead_Time_Process_Standar: number | null
    Lead_Time_Estimation_Process: number | null
    Process_Status: string | null
    MPSDueDate: Date | null
    Finished_Prediction: Date | null
    Status_Unit_Delivery: string | null
    Capacity_Utilization: number | null
    Status_Capacity: string | null
    Status_Material: string | null
    _count: Schedule_RecommendationCountAggregateOutputType | null
    _avg: Schedule_RecommendationAvgAggregateOutputType | null
    _sum: Schedule_RecommendationSumAggregateOutputType | null
    _min: Schedule_RecommendationMinAggregateOutputType | null
    _max: Schedule_RecommendationMaxAggregateOutputType | null
  }

  type GetSchedule_RecommendationGroupByPayload<T extends Schedule_RecommendationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Schedule_RecommendationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Schedule_RecommendationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Schedule_RecommendationGroupByOutputType[P]>
            : GetScalarType<T[P], Schedule_RecommendationGroupByOutputType[P]>
        }
      >
    >


  export type Schedule_RecommendationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PN?: boolean
    PRO?: boolean
    Product?: boolean
    ProductGroup?: boolean
    Process?: boolean
    Dependency?: boolean
    Maksimal_Produksi_per_Base?: boolean
    ProcessOrder?: boolean
    PlanStartDate?: boolean
    PlanEndDate?: boolean
    Start_Date?: boolean
    End_Date?: boolean
    Estimated_Material_Arrived?: boolean
    Lead_Time_Process_Standar?: boolean
    Lead_Time_Estimation_Process?: boolean
    Process_Status?: boolean
    MPSDueDate?: boolean
    Finished_Prediction?: boolean
    Status_Unit_Delivery?: boolean
    Capacity_Utilization?: boolean
    Status_Capacity?: boolean
    Status_Material?: boolean
  }, ExtArgs["result"]["schedule_Recommendation"]>



  export type Schedule_RecommendationSelectScalar = {
    PN?: boolean
    PRO?: boolean
    Product?: boolean
    ProductGroup?: boolean
    Process?: boolean
    Dependency?: boolean
    Maksimal_Produksi_per_Base?: boolean
    ProcessOrder?: boolean
    PlanStartDate?: boolean
    PlanEndDate?: boolean
    Start_Date?: boolean
    End_Date?: boolean
    Estimated_Material_Arrived?: boolean
    Lead_Time_Process_Standar?: boolean
    Lead_Time_Estimation_Process?: boolean
    Process_Status?: boolean
    MPSDueDate?: boolean
    Finished_Prediction?: boolean
    Status_Unit_Delivery?: boolean
    Capacity_Utilization?: boolean
    Status_Capacity?: boolean
    Status_Material?: boolean
  }

  export type Schedule_RecommendationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"PN" | "PRO" | "Product" | "ProductGroup" | "Process" | "Dependency" | "Maksimal_Produksi_per_Base" | "ProcessOrder" | "PlanStartDate" | "PlanEndDate" | "Start_Date" | "End_Date" | "Estimated_Material_Arrived" | "Lead_Time_Process_Standar" | "Lead_Time_Estimation_Process" | "Process_Status" | "MPSDueDate" | "Finished_Prediction" | "Status_Unit_Delivery" | "Capacity_Utilization" | "Status_Capacity" | "Status_Material", ExtArgs["result"]["schedule_Recommendation"]>

  export type $Schedule_RecommendationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Schedule_Recommendation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      PN: string
      PRO: bigint | null
      Product: string | null
      ProductGroup: string | null
      Process: string | null
      Dependency: string | null
      Maksimal_Produksi_per_Base: number | null
      ProcessOrder: string | null
      PlanStartDate: Date | null
      PlanEndDate: Date | null
      Start_Date: Date | null
      End_Date: Date | null
      Estimated_Material_Arrived: Date | null
      Lead_Time_Process_Standar: number | null
      Lead_Time_Estimation_Process: number | null
      Process_Status: string | null
      MPSDueDate: Date | null
      Finished_Prediction: Date | null
      Status_Unit_Delivery: string | null
      Capacity_Utilization: number | null
      Status_Capacity: string | null
      Status_Material: string | null
    }, ExtArgs["result"]["schedule_Recommendation"]>
    composites: {}
  }

  type Schedule_RecommendationGetPayload<S extends boolean | null | undefined | Schedule_RecommendationDefaultArgs> = $Result.GetResult<Prisma.$Schedule_RecommendationPayload, S>

  type Schedule_RecommendationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Schedule_RecommendationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Schedule_RecommendationCountAggregateInputType | true
    }

  export interface Schedule_RecommendationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Schedule_Recommendation'], meta: { name: 'Schedule_Recommendation' } }
    /**
     * Find zero or one Schedule_Recommendation that matches the filter.
     * @param {Schedule_RecommendationFindUniqueArgs} args - Arguments to find a Schedule_Recommendation
     * @example
     * // Get one Schedule_Recommendation
     * const schedule_Recommendation = await prisma.schedule_Recommendation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Schedule_RecommendationFindUniqueArgs>(args: SelectSubset<T, Schedule_RecommendationFindUniqueArgs<ExtArgs>>): Prisma__Schedule_RecommendationClient<$Result.GetResult<Prisma.$Schedule_RecommendationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schedule_Recommendation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Schedule_RecommendationFindUniqueOrThrowArgs} args - Arguments to find a Schedule_Recommendation
     * @example
     * // Get one Schedule_Recommendation
     * const schedule_Recommendation = await prisma.schedule_Recommendation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Schedule_RecommendationFindUniqueOrThrowArgs>(args: SelectSubset<T, Schedule_RecommendationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Schedule_RecommendationClient<$Result.GetResult<Prisma.$Schedule_RecommendationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule_Recommendation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schedule_RecommendationFindFirstArgs} args - Arguments to find a Schedule_Recommendation
     * @example
     * // Get one Schedule_Recommendation
     * const schedule_Recommendation = await prisma.schedule_Recommendation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Schedule_RecommendationFindFirstArgs>(args?: SelectSubset<T, Schedule_RecommendationFindFirstArgs<ExtArgs>>): Prisma__Schedule_RecommendationClient<$Result.GetResult<Prisma.$Schedule_RecommendationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule_Recommendation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schedule_RecommendationFindFirstOrThrowArgs} args - Arguments to find a Schedule_Recommendation
     * @example
     * // Get one Schedule_Recommendation
     * const schedule_Recommendation = await prisma.schedule_Recommendation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Schedule_RecommendationFindFirstOrThrowArgs>(args?: SelectSubset<T, Schedule_RecommendationFindFirstOrThrowArgs<ExtArgs>>): Prisma__Schedule_RecommendationClient<$Result.GetResult<Prisma.$Schedule_RecommendationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedule_Recommendations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schedule_RecommendationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedule_Recommendations
     * const schedule_Recommendations = await prisma.schedule_Recommendation.findMany()
     * 
     * // Get first 10 Schedule_Recommendations
     * const schedule_Recommendations = await prisma.schedule_Recommendation.findMany({ take: 10 })
     * 
     * // Only select the `PN`
     * const schedule_RecommendationWithPNOnly = await prisma.schedule_Recommendation.findMany({ select: { PN: true } })
     * 
     */
    findMany<T extends Schedule_RecommendationFindManyArgs>(args?: SelectSubset<T, Schedule_RecommendationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Schedule_RecommendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schedule_Recommendation.
     * @param {Schedule_RecommendationCreateArgs} args - Arguments to create a Schedule_Recommendation.
     * @example
     * // Create one Schedule_Recommendation
     * const Schedule_Recommendation = await prisma.schedule_Recommendation.create({
     *   data: {
     *     // ... data to create a Schedule_Recommendation
     *   }
     * })
     * 
     */
    create<T extends Schedule_RecommendationCreateArgs>(args: SelectSubset<T, Schedule_RecommendationCreateArgs<ExtArgs>>): Prisma__Schedule_RecommendationClient<$Result.GetResult<Prisma.$Schedule_RecommendationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedule_Recommendations.
     * @param {Schedule_RecommendationCreateManyArgs} args - Arguments to create many Schedule_Recommendations.
     * @example
     * // Create many Schedule_Recommendations
     * const schedule_Recommendation = await prisma.schedule_Recommendation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Schedule_RecommendationCreateManyArgs>(args?: SelectSubset<T, Schedule_RecommendationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Schedule_Recommendation.
     * @param {Schedule_RecommendationDeleteArgs} args - Arguments to delete one Schedule_Recommendation.
     * @example
     * // Delete one Schedule_Recommendation
     * const Schedule_Recommendation = await prisma.schedule_Recommendation.delete({
     *   where: {
     *     // ... filter to delete one Schedule_Recommendation
     *   }
     * })
     * 
     */
    delete<T extends Schedule_RecommendationDeleteArgs>(args: SelectSubset<T, Schedule_RecommendationDeleteArgs<ExtArgs>>): Prisma__Schedule_RecommendationClient<$Result.GetResult<Prisma.$Schedule_RecommendationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schedule_Recommendation.
     * @param {Schedule_RecommendationUpdateArgs} args - Arguments to update one Schedule_Recommendation.
     * @example
     * // Update one Schedule_Recommendation
     * const schedule_Recommendation = await prisma.schedule_Recommendation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Schedule_RecommendationUpdateArgs>(args: SelectSubset<T, Schedule_RecommendationUpdateArgs<ExtArgs>>): Prisma__Schedule_RecommendationClient<$Result.GetResult<Prisma.$Schedule_RecommendationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedule_Recommendations.
     * @param {Schedule_RecommendationDeleteManyArgs} args - Arguments to filter Schedule_Recommendations to delete.
     * @example
     * // Delete a few Schedule_Recommendations
     * const { count } = await prisma.schedule_Recommendation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Schedule_RecommendationDeleteManyArgs>(args?: SelectSubset<T, Schedule_RecommendationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedule_Recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schedule_RecommendationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedule_Recommendations
     * const schedule_Recommendation = await prisma.schedule_Recommendation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Schedule_RecommendationUpdateManyArgs>(args: SelectSubset<T, Schedule_RecommendationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Schedule_Recommendation.
     * @param {Schedule_RecommendationUpsertArgs} args - Arguments to update or create a Schedule_Recommendation.
     * @example
     * // Update or create a Schedule_Recommendation
     * const schedule_Recommendation = await prisma.schedule_Recommendation.upsert({
     *   create: {
     *     // ... data to create a Schedule_Recommendation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule_Recommendation we want to update
     *   }
     * })
     */
    upsert<T extends Schedule_RecommendationUpsertArgs>(args: SelectSubset<T, Schedule_RecommendationUpsertArgs<ExtArgs>>): Prisma__Schedule_RecommendationClient<$Result.GetResult<Prisma.$Schedule_RecommendationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedule_Recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schedule_RecommendationCountArgs} args - Arguments to filter Schedule_Recommendations to count.
     * @example
     * // Count the number of Schedule_Recommendations
     * const count = await prisma.schedule_Recommendation.count({
     *   where: {
     *     // ... the filter for the Schedule_Recommendations we want to count
     *   }
     * })
    **/
    count<T extends Schedule_RecommendationCountArgs>(
      args?: Subset<T, Schedule_RecommendationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Schedule_RecommendationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule_Recommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schedule_RecommendationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Schedule_RecommendationAggregateArgs>(args: Subset<T, Schedule_RecommendationAggregateArgs>): Prisma.PrismaPromise<GetSchedule_RecommendationAggregateType<T>>

    /**
     * Group by Schedule_Recommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schedule_RecommendationGroupByArgs} args - Group by arguments.
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
      T extends Schedule_RecommendationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Schedule_RecommendationGroupByArgs['orderBy'] }
        : { orderBy?: Schedule_RecommendationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Schedule_RecommendationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchedule_RecommendationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Schedule_Recommendation model
   */
  readonly fields: Schedule_RecommendationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedule_Recommendation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Schedule_RecommendationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Schedule_Recommendation model
   */
  interface Schedule_RecommendationFieldRefs {
    readonly PN: FieldRef<"Schedule_Recommendation", 'String'>
    readonly PRO: FieldRef<"Schedule_Recommendation", 'BigInt'>
    readonly Product: FieldRef<"Schedule_Recommendation", 'String'>
    readonly ProductGroup: FieldRef<"Schedule_Recommendation", 'String'>
    readonly Process: FieldRef<"Schedule_Recommendation", 'String'>
    readonly Dependency: FieldRef<"Schedule_Recommendation", 'String'>
    readonly Maksimal_Produksi_per_Base: FieldRef<"Schedule_Recommendation", 'Float'>
    readonly ProcessOrder: FieldRef<"Schedule_Recommendation", 'String'>
    readonly PlanStartDate: FieldRef<"Schedule_Recommendation", 'DateTime'>
    readonly PlanEndDate: FieldRef<"Schedule_Recommendation", 'DateTime'>
    readonly Start_Date: FieldRef<"Schedule_Recommendation", 'DateTime'>
    readonly End_Date: FieldRef<"Schedule_Recommendation", 'DateTime'>
    readonly Estimated_Material_Arrived: FieldRef<"Schedule_Recommendation", 'DateTime'>
    readonly Lead_Time_Process_Standar: FieldRef<"Schedule_Recommendation", 'Float'>
    readonly Lead_Time_Estimation_Process: FieldRef<"Schedule_Recommendation", 'Float'>
    readonly Process_Status: FieldRef<"Schedule_Recommendation", 'String'>
    readonly MPSDueDate: FieldRef<"Schedule_Recommendation", 'DateTime'>
    readonly Finished_Prediction: FieldRef<"Schedule_Recommendation", 'DateTime'>
    readonly Status_Unit_Delivery: FieldRef<"Schedule_Recommendation", 'String'>
    readonly Capacity_Utilization: FieldRef<"Schedule_Recommendation", 'Float'>
    readonly Status_Capacity: FieldRef<"Schedule_Recommendation", 'String'>
    readonly Status_Material: FieldRef<"Schedule_Recommendation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Schedule_Recommendation findUnique
   */
  export type Schedule_RecommendationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_Recommendation
     */
    select?: Schedule_RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_Recommendation
     */
    omit?: Schedule_RecommendationOmit<ExtArgs> | null
    /**
     * Filter, which Schedule_Recommendation to fetch.
     */
    where: Schedule_RecommendationWhereUniqueInput
  }

  /**
   * Schedule_Recommendation findUniqueOrThrow
   */
  export type Schedule_RecommendationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_Recommendation
     */
    select?: Schedule_RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_Recommendation
     */
    omit?: Schedule_RecommendationOmit<ExtArgs> | null
    /**
     * Filter, which Schedule_Recommendation to fetch.
     */
    where: Schedule_RecommendationWhereUniqueInput
  }

  /**
   * Schedule_Recommendation findFirst
   */
  export type Schedule_RecommendationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_Recommendation
     */
    select?: Schedule_RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_Recommendation
     */
    omit?: Schedule_RecommendationOmit<ExtArgs> | null
    /**
     * Filter, which Schedule_Recommendation to fetch.
     */
    where?: Schedule_RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedule_Recommendations to fetch.
     */
    orderBy?: Schedule_RecommendationOrderByWithRelationInput | Schedule_RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedule_Recommendations.
     */
    cursor?: Schedule_RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedule_Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedule_Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedule_Recommendations.
     */
    distinct?: Schedule_RecommendationScalarFieldEnum | Schedule_RecommendationScalarFieldEnum[]
  }

  /**
   * Schedule_Recommendation findFirstOrThrow
   */
  export type Schedule_RecommendationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_Recommendation
     */
    select?: Schedule_RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_Recommendation
     */
    omit?: Schedule_RecommendationOmit<ExtArgs> | null
    /**
     * Filter, which Schedule_Recommendation to fetch.
     */
    where?: Schedule_RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedule_Recommendations to fetch.
     */
    orderBy?: Schedule_RecommendationOrderByWithRelationInput | Schedule_RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedule_Recommendations.
     */
    cursor?: Schedule_RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedule_Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedule_Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedule_Recommendations.
     */
    distinct?: Schedule_RecommendationScalarFieldEnum | Schedule_RecommendationScalarFieldEnum[]
  }

  /**
   * Schedule_Recommendation findMany
   */
  export type Schedule_RecommendationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_Recommendation
     */
    select?: Schedule_RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_Recommendation
     */
    omit?: Schedule_RecommendationOmit<ExtArgs> | null
    /**
     * Filter, which Schedule_Recommendations to fetch.
     */
    where?: Schedule_RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedule_Recommendations to fetch.
     */
    orderBy?: Schedule_RecommendationOrderByWithRelationInput | Schedule_RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedule_Recommendations.
     */
    cursor?: Schedule_RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedule_Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedule_Recommendations.
     */
    skip?: number
    distinct?: Schedule_RecommendationScalarFieldEnum | Schedule_RecommendationScalarFieldEnum[]
  }

  /**
   * Schedule_Recommendation create
   */
  export type Schedule_RecommendationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_Recommendation
     */
    select?: Schedule_RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_Recommendation
     */
    omit?: Schedule_RecommendationOmit<ExtArgs> | null
    /**
     * The data needed to create a Schedule_Recommendation.
     */
    data: XOR<Schedule_RecommendationCreateInput, Schedule_RecommendationUncheckedCreateInput>
  }

  /**
   * Schedule_Recommendation createMany
   */
  export type Schedule_RecommendationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedule_Recommendations.
     */
    data: Schedule_RecommendationCreateManyInput | Schedule_RecommendationCreateManyInput[]
  }

  /**
   * Schedule_Recommendation update
   */
  export type Schedule_RecommendationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_Recommendation
     */
    select?: Schedule_RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_Recommendation
     */
    omit?: Schedule_RecommendationOmit<ExtArgs> | null
    /**
     * The data needed to update a Schedule_Recommendation.
     */
    data: XOR<Schedule_RecommendationUpdateInput, Schedule_RecommendationUncheckedUpdateInput>
    /**
     * Choose, which Schedule_Recommendation to update.
     */
    where: Schedule_RecommendationWhereUniqueInput
  }

  /**
   * Schedule_Recommendation updateMany
   */
  export type Schedule_RecommendationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedule_Recommendations.
     */
    data: XOR<Schedule_RecommendationUpdateManyMutationInput, Schedule_RecommendationUncheckedUpdateManyInput>
    /**
     * Filter which Schedule_Recommendations to update
     */
    where?: Schedule_RecommendationWhereInput
    /**
     * Limit how many Schedule_Recommendations to update.
     */
    limit?: number
  }

  /**
   * Schedule_Recommendation upsert
   */
  export type Schedule_RecommendationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_Recommendation
     */
    select?: Schedule_RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_Recommendation
     */
    omit?: Schedule_RecommendationOmit<ExtArgs> | null
    /**
     * The filter to search for the Schedule_Recommendation to update in case it exists.
     */
    where: Schedule_RecommendationWhereUniqueInput
    /**
     * In case the Schedule_Recommendation found by the `where` argument doesn't exist, create a new Schedule_Recommendation with this data.
     */
    create: XOR<Schedule_RecommendationCreateInput, Schedule_RecommendationUncheckedCreateInput>
    /**
     * In case the Schedule_Recommendation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Schedule_RecommendationUpdateInput, Schedule_RecommendationUncheckedUpdateInput>
  }

  /**
   * Schedule_Recommendation delete
   */
  export type Schedule_RecommendationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_Recommendation
     */
    select?: Schedule_RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_Recommendation
     */
    omit?: Schedule_RecommendationOmit<ExtArgs> | null
    /**
     * Filter which Schedule_Recommendation to delete.
     */
    where: Schedule_RecommendationWhereUniqueInput
  }

  /**
   * Schedule_Recommendation deleteMany
   */
  export type Schedule_RecommendationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedule_Recommendations to delete
     */
    where?: Schedule_RecommendationWhereInput
    /**
     * Limit how many Schedule_Recommendations to delete.
     */
    limit?: number
  }

  /**
   * Schedule_Recommendation without action
   */
  export type Schedule_RecommendationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_Recommendation
     */
    select?: Schedule_RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_Recommendation
     */
    omit?: Schedule_RecommendationOmit<ExtArgs> | null
  }


  /**
   * Model siteRoute
   */

  export type AggregateSiteRoute = {
    _count: SiteRouteCountAggregateOutputType | null
    _avg: SiteRouteAvgAggregateOutputType | null
    _sum: SiteRouteSumAggregateOutputType | null
    _min: SiteRouteMinAggregateOutputType | null
    _max: SiteRouteMaxAggregateOutputType | null
  }

  export type SiteRouteAvgAggregateOutputType = {
    id: number | null
  }

  export type SiteRouteSumAggregateOutputType = {
    id: number | null
  }

  export type SiteRouteMinAggregateOutputType = {
    id: number | null
    guid: string | null
    baseUrl: string | null
    siteName: string | null
    url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SiteRouteMaxAggregateOutputType = {
    id: number | null
    guid: string | null
    baseUrl: string | null
    siteName: string | null
    url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SiteRouteCountAggregateOutputType = {
    id: number
    guid: number
    baseUrl: number
    siteName: number
    url: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SiteRouteAvgAggregateInputType = {
    id?: true
  }

  export type SiteRouteSumAggregateInputType = {
    id?: true
  }

  export type SiteRouteMinAggregateInputType = {
    id?: true
    guid?: true
    baseUrl?: true
    siteName?: true
    url?: true
    created_at?: true
    updated_at?: true
  }

  export type SiteRouteMaxAggregateInputType = {
    id?: true
    guid?: true
    baseUrl?: true
    siteName?: true
    url?: true
    created_at?: true
    updated_at?: true
  }

  export type SiteRouteCountAggregateInputType = {
    id?: true
    guid?: true
    baseUrl?: true
    siteName?: true
    url?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SiteRouteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which siteRoute to aggregate.
     */
    where?: siteRouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of siteRoutes to fetch.
     */
    orderBy?: siteRouteOrderByWithRelationInput | siteRouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: siteRouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` siteRoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` siteRoutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned siteRoutes
    **/
    _count?: true | SiteRouteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SiteRouteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SiteRouteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteRouteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteRouteMaxAggregateInputType
  }

  export type GetSiteRouteAggregateType<T extends SiteRouteAggregateArgs> = {
        [P in keyof T & keyof AggregateSiteRoute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSiteRoute[P]>
      : GetScalarType<T[P], AggregateSiteRoute[P]>
  }




  export type siteRouteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: siteRouteWhereInput
    orderBy?: siteRouteOrderByWithAggregationInput | siteRouteOrderByWithAggregationInput[]
    by: SiteRouteScalarFieldEnum[] | SiteRouteScalarFieldEnum
    having?: siteRouteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteRouteCountAggregateInputType | true
    _avg?: SiteRouteAvgAggregateInputType
    _sum?: SiteRouteSumAggregateInputType
    _min?: SiteRouteMinAggregateInputType
    _max?: SiteRouteMaxAggregateInputType
  }

  export type SiteRouteGroupByOutputType = {
    id: number
    guid: string
    baseUrl: string | null
    siteName: string | null
    url: string | null
    created_at: Date
    updated_at: Date
    _count: SiteRouteCountAggregateOutputType | null
    _avg: SiteRouteAvgAggregateOutputType | null
    _sum: SiteRouteSumAggregateOutputType | null
    _min: SiteRouteMinAggregateOutputType | null
    _max: SiteRouteMaxAggregateOutputType | null
  }

  type GetSiteRouteGroupByPayload<T extends siteRouteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteRouteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteRouteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteRouteGroupByOutputType[P]>
            : GetScalarType<T[P], SiteRouteGroupByOutputType[P]>
        }
      >
    >


  export type siteRouteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    baseUrl?: boolean
    siteName?: boolean
    url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["siteRoute"]>



  export type siteRouteSelectScalar = {
    id?: boolean
    guid?: boolean
    baseUrl?: boolean
    siteName?: boolean
    url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type siteRouteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guid" | "baseUrl" | "siteName" | "url" | "created_at" | "updated_at", ExtArgs["result"]["siteRoute"]>

  export type $siteRoutePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "siteRoute"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      guid: string
      baseUrl: string | null
      siteName: string | null
      url: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["siteRoute"]>
    composites: {}
  }

  type siteRouteGetPayload<S extends boolean | null | undefined | siteRouteDefaultArgs> = $Result.GetResult<Prisma.$siteRoutePayload, S>

  type siteRouteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<siteRouteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiteRouteCountAggregateInputType | true
    }

  export interface siteRouteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['siteRoute'], meta: { name: 'siteRoute' } }
    /**
     * Find zero or one SiteRoute that matches the filter.
     * @param {siteRouteFindUniqueArgs} args - Arguments to find a SiteRoute
     * @example
     * // Get one SiteRoute
     * const siteRoute = await prisma.siteRoute.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends siteRouteFindUniqueArgs>(args: SelectSubset<T, siteRouteFindUniqueArgs<ExtArgs>>): Prisma__siteRouteClient<$Result.GetResult<Prisma.$siteRoutePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SiteRoute that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {siteRouteFindUniqueOrThrowArgs} args - Arguments to find a SiteRoute
     * @example
     * // Get one SiteRoute
     * const siteRoute = await prisma.siteRoute.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends siteRouteFindUniqueOrThrowArgs>(args: SelectSubset<T, siteRouteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__siteRouteClient<$Result.GetResult<Prisma.$siteRoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteRoute that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {siteRouteFindFirstArgs} args - Arguments to find a SiteRoute
     * @example
     * // Get one SiteRoute
     * const siteRoute = await prisma.siteRoute.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends siteRouteFindFirstArgs>(args?: SelectSubset<T, siteRouteFindFirstArgs<ExtArgs>>): Prisma__siteRouteClient<$Result.GetResult<Prisma.$siteRoutePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteRoute that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {siteRouteFindFirstOrThrowArgs} args - Arguments to find a SiteRoute
     * @example
     * // Get one SiteRoute
     * const siteRoute = await prisma.siteRoute.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends siteRouteFindFirstOrThrowArgs>(args?: SelectSubset<T, siteRouteFindFirstOrThrowArgs<ExtArgs>>): Prisma__siteRouteClient<$Result.GetResult<Prisma.$siteRoutePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SiteRoutes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {siteRouteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SiteRoutes
     * const siteRoutes = await prisma.siteRoute.findMany()
     * 
     * // Get first 10 SiteRoutes
     * const siteRoutes = await prisma.siteRoute.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siteRouteWithIdOnly = await prisma.siteRoute.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends siteRouteFindManyArgs>(args?: SelectSubset<T, siteRouteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$siteRoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SiteRoute.
     * @param {siteRouteCreateArgs} args - Arguments to create a SiteRoute.
     * @example
     * // Create one SiteRoute
     * const SiteRoute = await prisma.siteRoute.create({
     *   data: {
     *     // ... data to create a SiteRoute
     *   }
     * })
     * 
     */
    create<T extends siteRouteCreateArgs>(args: SelectSubset<T, siteRouteCreateArgs<ExtArgs>>): Prisma__siteRouteClient<$Result.GetResult<Prisma.$siteRoutePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SiteRoutes.
     * @param {siteRouteCreateManyArgs} args - Arguments to create many SiteRoutes.
     * @example
     * // Create many SiteRoutes
     * const siteRoute = await prisma.siteRoute.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends siteRouteCreateManyArgs>(args?: SelectSubset<T, siteRouteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SiteRoute.
     * @param {siteRouteDeleteArgs} args - Arguments to delete one SiteRoute.
     * @example
     * // Delete one SiteRoute
     * const SiteRoute = await prisma.siteRoute.delete({
     *   where: {
     *     // ... filter to delete one SiteRoute
     *   }
     * })
     * 
     */
    delete<T extends siteRouteDeleteArgs>(args: SelectSubset<T, siteRouteDeleteArgs<ExtArgs>>): Prisma__siteRouteClient<$Result.GetResult<Prisma.$siteRoutePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SiteRoute.
     * @param {siteRouteUpdateArgs} args - Arguments to update one SiteRoute.
     * @example
     * // Update one SiteRoute
     * const siteRoute = await prisma.siteRoute.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends siteRouteUpdateArgs>(args: SelectSubset<T, siteRouteUpdateArgs<ExtArgs>>): Prisma__siteRouteClient<$Result.GetResult<Prisma.$siteRoutePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SiteRoutes.
     * @param {siteRouteDeleteManyArgs} args - Arguments to filter SiteRoutes to delete.
     * @example
     * // Delete a few SiteRoutes
     * const { count } = await prisma.siteRoute.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends siteRouteDeleteManyArgs>(args?: SelectSubset<T, siteRouteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteRoutes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {siteRouteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SiteRoutes
     * const siteRoute = await prisma.siteRoute.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends siteRouteUpdateManyArgs>(args: SelectSubset<T, siteRouteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SiteRoute.
     * @param {siteRouteUpsertArgs} args - Arguments to update or create a SiteRoute.
     * @example
     * // Update or create a SiteRoute
     * const siteRoute = await prisma.siteRoute.upsert({
     *   create: {
     *     // ... data to create a SiteRoute
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SiteRoute we want to update
     *   }
     * })
     */
    upsert<T extends siteRouteUpsertArgs>(args: SelectSubset<T, siteRouteUpsertArgs<ExtArgs>>): Prisma__siteRouteClient<$Result.GetResult<Prisma.$siteRoutePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SiteRoutes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {siteRouteCountArgs} args - Arguments to filter SiteRoutes to count.
     * @example
     * // Count the number of SiteRoutes
     * const count = await prisma.siteRoute.count({
     *   where: {
     *     // ... the filter for the SiteRoutes we want to count
     *   }
     * })
    **/
    count<T extends siteRouteCountArgs>(
      args?: Subset<T, siteRouteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteRouteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SiteRoute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteRouteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SiteRouteAggregateArgs>(args: Subset<T, SiteRouteAggregateArgs>): Prisma.PrismaPromise<GetSiteRouteAggregateType<T>>

    /**
     * Group by SiteRoute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {siteRouteGroupByArgs} args - Group by arguments.
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
      T extends siteRouteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: siteRouteGroupByArgs['orderBy'] }
        : { orderBy?: siteRouteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, siteRouteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteRouteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the siteRoute model
   */
  readonly fields: siteRouteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for siteRoute.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__siteRouteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the siteRoute model
   */
  interface siteRouteFieldRefs {
    readonly id: FieldRef<"siteRoute", 'Int'>
    readonly guid: FieldRef<"siteRoute", 'String'>
    readonly baseUrl: FieldRef<"siteRoute", 'String'>
    readonly siteName: FieldRef<"siteRoute", 'String'>
    readonly url: FieldRef<"siteRoute", 'String'>
    readonly created_at: FieldRef<"siteRoute", 'DateTime'>
    readonly updated_at: FieldRef<"siteRoute", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * siteRoute findUnique
   */
  export type siteRouteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the siteRoute
     */
    select?: siteRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the siteRoute
     */
    omit?: siteRouteOmit<ExtArgs> | null
    /**
     * Filter, which siteRoute to fetch.
     */
    where: siteRouteWhereUniqueInput
  }

  /**
   * siteRoute findUniqueOrThrow
   */
  export type siteRouteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the siteRoute
     */
    select?: siteRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the siteRoute
     */
    omit?: siteRouteOmit<ExtArgs> | null
    /**
     * Filter, which siteRoute to fetch.
     */
    where: siteRouteWhereUniqueInput
  }

  /**
   * siteRoute findFirst
   */
  export type siteRouteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the siteRoute
     */
    select?: siteRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the siteRoute
     */
    omit?: siteRouteOmit<ExtArgs> | null
    /**
     * Filter, which siteRoute to fetch.
     */
    where?: siteRouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of siteRoutes to fetch.
     */
    orderBy?: siteRouteOrderByWithRelationInput | siteRouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for siteRoutes.
     */
    cursor?: siteRouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` siteRoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` siteRoutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of siteRoutes.
     */
    distinct?: SiteRouteScalarFieldEnum | SiteRouteScalarFieldEnum[]
  }

  /**
   * siteRoute findFirstOrThrow
   */
  export type siteRouteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the siteRoute
     */
    select?: siteRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the siteRoute
     */
    omit?: siteRouteOmit<ExtArgs> | null
    /**
     * Filter, which siteRoute to fetch.
     */
    where?: siteRouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of siteRoutes to fetch.
     */
    orderBy?: siteRouteOrderByWithRelationInput | siteRouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for siteRoutes.
     */
    cursor?: siteRouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` siteRoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` siteRoutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of siteRoutes.
     */
    distinct?: SiteRouteScalarFieldEnum | SiteRouteScalarFieldEnum[]
  }

  /**
   * siteRoute findMany
   */
  export type siteRouteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the siteRoute
     */
    select?: siteRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the siteRoute
     */
    omit?: siteRouteOmit<ExtArgs> | null
    /**
     * Filter, which siteRoutes to fetch.
     */
    where?: siteRouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of siteRoutes to fetch.
     */
    orderBy?: siteRouteOrderByWithRelationInput | siteRouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing siteRoutes.
     */
    cursor?: siteRouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` siteRoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` siteRoutes.
     */
    skip?: number
    distinct?: SiteRouteScalarFieldEnum | SiteRouteScalarFieldEnum[]
  }

  /**
   * siteRoute create
   */
  export type siteRouteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the siteRoute
     */
    select?: siteRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the siteRoute
     */
    omit?: siteRouteOmit<ExtArgs> | null
    /**
     * The data needed to create a siteRoute.
     */
    data: XOR<siteRouteCreateInput, siteRouteUncheckedCreateInput>
  }

  /**
   * siteRoute createMany
   */
  export type siteRouteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many siteRoutes.
     */
    data: siteRouteCreateManyInput | siteRouteCreateManyInput[]
  }

  /**
   * siteRoute update
   */
  export type siteRouteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the siteRoute
     */
    select?: siteRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the siteRoute
     */
    omit?: siteRouteOmit<ExtArgs> | null
    /**
     * The data needed to update a siteRoute.
     */
    data: XOR<siteRouteUpdateInput, siteRouteUncheckedUpdateInput>
    /**
     * Choose, which siteRoute to update.
     */
    where: siteRouteWhereUniqueInput
  }

  /**
   * siteRoute updateMany
   */
  export type siteRouteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update siteRoutes.
     */
    data: XOR<siteRouteUpdateManyMutationInput, siteRouteUncheckedUpdateManyInput>
    /**
     * Filter which siteRoutes to update
     */
    where?: siteRouteWhereInput
    /**
     * Limit how many siteRoutes to update.
     */
    limit?: number
  }

  /**
   * siteRoute upsert
   */
  export type siteRouteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the siteRoute
     */
    select?: siteRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the siteRoute
     */
    omit?: siteRouteOmit<ExtArgs> | null
    /**
     * The filter to search for the siteRoute to update in case it exists.
     */
    where: siteRouteWhereUniqueInput
    /**
     * In case the siteRoute found by the `where` argument doesn't exist, create a new siteRoute with this data.
     */
    create: XOR<siteRouteCreateInput, siteRouteUncheckedCreateInput>
    /**
     * In case the siteRoute was found with the provided `where` argument, update it with this data.
     */
    update: XOR<siteRouteUpdateInput, siteRouteUncheckedUpdateInput>
  }

  /**
   * siteRoute delete
   */
  export type siteRouteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the siteRoute
     */
    select?: siteRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the siteRoute
     */
    omit?: siteRouteOmit<ExtArgs> | null
    /**
     * Filter which siteRoute to delete.
     */
    where: siteRouteWhereUniqueInput
  }

  /**
   * siteRoute deleteMany
   */
  export type siteRouteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which siteRoutes to delete
     */
    where?: siteRouteWhereInput
    /**
     * Limit how many siteRoutes to delete.
     */
    limit?: number
  }

  /**
   * siteRoute without action
   */
  export type siteRouteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the siteRoute
     */
    select?: siteRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the siteRoute
     */
    omit?: siteRouteOmit<ExtArgs> | null
  }


  /**
   * Model sysdiagrams
   */

  export type AggregateSysdiagrams = {
    _count: SysdiagramsCountAggregateOutputType | null
    _avg: SysdiagramsAvgAggregateOutputType | null
    _sum: SysdiagramsSumAggregateOutputType | null
    _min: SysdiagramsMinAggregateOutputType | null
    _max: SysdiagramsMaxAggregateOutputType | null
  }

  export type SysdiagramsAvgAggregateOutputType = {
    principal_id: number | null
    diagram_id: number | null
    version: number | null
  }

  export type SysdiagramsSumAggregateOutputType = {
    principal_id: number | null
    diagram_id: number | null
    version: number | null
  }

  export type SysdiagramsMinAggregateOutputType = {
    name: string | null
    principal_id: number | null
    diagram_id: number | null
    version: number | null
    definition: Uint8Array | null
  }

  export type SysdiagramsMaxAggregateOutputType = {
    name: string | null
    principal_id: number | null
    diagram_id: number | null
    version: number | null
    definition: Uint8Array | null
  }

  export type SysdiagramsCountAggregateOutputType = {
    name: number
    principal_id: number
    diagram_id: number
    version: number
    definition: number
    _all: number
  }


  export type SysdiagramsAvgAggregateInputType = {
    principal_id?: true
    diagram_id?: true
    version?: true
  }

  export type SysdiagramsSumAggregateInputType = {
    principal_id?: true
    diagram_id?: true
    version?: true
  }

  export type SysdiagramsMinAggregateInputType = {
    name?: true
    principal_id?: true
    diagram_id?: true
    version?: true
    definition?: true
  }

  export type SysdiagramsMaxAggregateInputType = {
    name?: true
    principal_id?: true
    diagram_id?: true
    version?: true
    definition?: true
  }

  export type SysdiagramsCountAggregateInputType = {
    name?: true
    principal_id?: true
    diagram_id?: true
    version?: true
    definition?: true
    _all?: true
  }

  export type SysdiagramsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sysdiagrams to aggregate.
     */
    where?: sysdiagramsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sysdiagrams to fetch.
     */
    orderBy?: sysdiagramsOrderByWithRelationInput | sysdiagramsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sysdiagramsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sysdiagrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sysdiagrams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sysdiagrams
    **/
    _count?: true | SysdiagramsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SysdiagramsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SysdiagramsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SysdiagramsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SysdiagramsMaxAggregateInputType
  }

  export type GetSysdiagramsAggregateType<T extends SysdiagramsAggregateArgs> = {
        [P in keyof T & keyof AggregateSysdiagrams]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSysdiagrams[P]>
      : GetScalarType<T[P], AggregateSysdiagrams[P]>
  }




  export type sysdiagramsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sysdiagramsWhereInput
    orderBy?: sysdiagramsOrderByWithAggregationInput | sysdiagramsOrderByWithAggregationInput[]
    by: SysdiagramsScalarFieldEnum[] | SysdiagramsScalarFieldEnum
    having?: sysdiagramsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SysdiagramsCountAggregateInputType | true
    _avg?: SysdiagramsAvgAggregateInputType
    _sum?: SysdiagramsSumAggregateInputType
    _min?: SysdiagramsMinAggregateInputType
    _max?: SysdiagramsMaxAggregateInputType
  }

  export type SysdiagramsGroupByOutputType = {
    name: string
    principal_id: number
    diagram_id: number
    version: number | null
    definition: Uint8Array | null
    _count: SysdiagramsCountAggregateOutputType | null
    _avg: SysdiagramsAvgAggregateOutputType | null
    _sum: SysdiagramsSumAggregateOutputType | null
    _min: SysdiagramsMinAggregateOutputType | null
    _max: SysdiagramsMaxAggregateOutputType | null
  }

  type GetSysdiagramsGroupByPayload<T extends sysdiagramsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SysdiagramsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SysdiagramsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SysdiagramsGroupByOutputType[P]>
            : GetScalarType<T[P], SysdiagramsGroupByOutputType[P]>
        }
      >
    >


  export type sysdiagramsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    principal_id?: boolean
    diagram_id?: boolean
    version?: boolean
    definition?: boolean
  }, ExtArgs["result"]["sysdiagrams"]>



  export type sysdiagramsSelectScalar = {
    name?: boolean
    principal_id?: boolean
    diagram_id?: boolean
    version?: boolean
    definition?: boolean
  }

  export type sysdiagramsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name" | "principal_id" | "diagram_id" | "version" | "definition", ExtArgs["result"]["sysdiagrams"]>

  export type $sysdiagramsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sysdiagrams"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      name: string
      principal_id: number
      diagram_id: number
      version: number | null
      definition: Uint8Array | null
    }, ExtArgs["result"]["sysdiagrams"]>
    composites: {}
  }

  type sysdiagramsGetPayload<S extends boolean | null | undefined | sysdiagramsDefaultArgs> = $Result.GetResult<Prisma.$sysdiagramsPayload, S>

  type sysdiagramsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sysdiagramsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SysdiagramsCountAggregateInputType | true
    }

  export interface sysdiagramsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sysdiagrams'], meta: { name: 'sysdiagrams' } }
    /**
     * Find zero or one Sysdiagrams that matches the filter.
     * @param {sysdiagramsFindUniqueArgs} args - Arguments to find a Sysdiagrams
     * @example
     * // Get one Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sysdiagramsFindUniqueArgs>(args: SelectSubset<T, sysdiagramsFindUniqueArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sysdiagrams that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sysdiagramsFindUniqueOrThrowArgs} args - Arguments to find a Sysdiagrams
     * @example
     * // Get one Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sysdiagramsFindUniqueOrThrowArgs>(args: SelectSubset<T, sysdiagramsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sysdiagrams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sysdiagramsFindFirstArgs} args - Arguments to find a Sysdiagrams
     * @example
     * // Get one Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sysdiagramsFindFirstArgs>(args?: SelectSubset<T, sysdiagramsFindFirstArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sysdiagrams that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sysdiagramsFindFirstOrThrowArgs} args - Arguments to find a Sysdiagrams
     * @example
     * // Get one Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sysdiagramsFindFirstOrThrowArgs>(args?: SelectSubset<T, sysdiagramsFindFirstOrThrowArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sysdiagrams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sysdiagramsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.findMany()
     * 
     * // Get first 10 Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const sysdiagramsWithNameOnly = await prisma.sysdiagrams.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends sysdiagramsFindManyArgs>(args?: SelectSubset<T, sysdiagramsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sysdiagrams.
     * @param {sysdiagramsCreateArgs} args - Arguments to create a Sysdiagrams.
     * @example
     * // Create one Sysdiagrams
     * const Sysdiagrams = await prisma.sysdiagrams.create({
     *   data: {
     *     // ... data to create a Sysdiagrams
     *   }
     * })
     * 
     */
    create<T extends sysdiagramsCreateArgs>(args: SelectSubset<T, sysdiagramsCreateArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sysdiagrams.
     * @param {sysdiagramsCreateManyArgs} args - Arguments to create many Sysdiagrams.
     * @example
     * // Create many Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sysdiagramsCreateManyArgs>(args?: SelectSubset<T, sysdiagramsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sysdiagrams.
     * @param {sysdiagramsDeleteArgs} args - Arguments to delete one Sysdiagrams.
     * @example
     * // Delete one Sysdiagrams
     * const Sysdiagrams = await prisma.sysdiagrams.delete({
     *   where: {
     *     // ... filter to delete one Sysdiagrams
     *   }
     * })
     * 
     */
    delete<T extends sysdiagramsDeleteArgs>(args: SelectSubset<T, sysdiagramsDeleteArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sysdiagrams.
     * @param {sysdiagramsUpdateArgs} args - Arguments to update one Sysdiagrams.
     * @example
     * // Update one Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sysdiagramsUpdateArgs>(args: SelectSubset<T, sysdiagramsUpdateArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sysdiagrams.
     * @param {sysdiagramsDeleteManyArgs} args - Arguments to filter Sysdiagrams to delete.
     * @example
     * // Delete a few Sysdiagrams
     * const { count } = await prisma.sysdiagrams.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sysdiagramsDeleteManyArgs>(args?: SelectSubset<T, sysdiagramsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sysdiagrams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sysdiagramsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sysdiagramsUpdateManyArgs>(args: SelectSubset<T, sysdiagramsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sysdiagrams.
     * @param {sysdiagramsUpsertArgs} args - Arguments to update or create a Sysdiagrams.
     * @example
     * // Update or create a Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.upsert({
     *   create: {
     *     // ... data to create a Sysdiagrams
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sysdiagrams we want to update
     *   }
     * })
     */
    upsert<T extends sysdiagramsUpsertArgs>(args: SelectSubset<T, sysdiagramsUpsertArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sysdiagrams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sysdiagramsCountArgs} args - Arguments to filter Sysdiagrams to count.
     * @example
     * // Count the number of Sysdiagrams
     * const count = await prisma.sysdiagrams.count({
     *   where: {
     *     // ... the filter for the Sysdiagrams we want to count
     *   }
     * })
    **/
    count<T extends sysdiagramsCountArgs>(
      args?: Subset<T, sysdiagramsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SysdiagramsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sysdiagrams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysdiagramsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SysdiagramsAggregateArgs>(args: Subset<T, SysdiagramsAggregateArgs>): Prisma.PrismaPromise<GetSysdiagramsAggregateType<T>>

    /**
     * Group by Sysdiagrams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sysdiagramsGroupByArgs} args - Group by arguments.
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
      T extends sysdiagramsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sysdiagramsGroupByArgs['orderBy'] }
        : { orderBy?: sysdiagramsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, sysdiagramsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSysdiagramsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sysdiagrams model
   */
  readonly fields: sysdiagramsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sysdiagrams.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sysdiagramsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the sysdiagrams model
   */
  interface sysdiagramsFieldRefs {
    readonly name: FieldRef<"sysdiagrams", 'String'>
    readonly principal_id: FieldRef<"sysdiagrams", 'Int'>
    readonly diagram_id: FieldRef<"sysdiagrams", 'Int'>
    readonly version: FieldRef<"sysdiagrams", 'Int'>
    readonly definition: FieldRef<"sysdiagrams", 'Bytes'>
  }
    

  // Custom InputTypes
  /**
   * sysdiagrams findUnique
   */
  export type sysdiagramsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * Filter, which sysdiagrams to fetch.
     */
    where: sysdiagramsWhereUniqueInput
  }

  /**
   * sysdiagrams findUniqueOrThrow
   */
  export type sysdiagramsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * Filter, which sysdiagrams to fetch.
     */
    where: sysdiagramsWhereUniqueInput
  }

  /**
   * sysdiagrams findFirst
   */
  export type sysdiagramsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * Filter, which sysdiagrams to fetch.
     */
    where?: sysdiagramsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sysdiagrams to fetch.
     */
    orderBy?: sysdiagramsOrderByWithRelationInput | sysdiagramsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sysdiagrams.
     */
    cursor?: sysdiagramsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sysdiagrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sysdiagrams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sysdiagrams.
     */
    distinct?: SysdiagramsScalarFieldEnum | SysdiagramsScalarFieldEnum[]
  }

  /**
   * sysdiagrams findFirstOrThrow
   */
  export type sysdiagramsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * Filter, which sysdiagrams to fetch.
     */
    where?: sysdiagramsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sysdiagrams to fetch.
     */
    orderBy?: sysdiagramsOrderByWithRelationInput | sysdiagramsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sysdiagrams.
     */
    cursor?: sysdiagramsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sysdiagrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sysdiagrams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sysdiagrams.
     */
    distinct?: SysdiagramsScalarFieldEnum | SysdiagramsScalarFieldEnum[]
  }

  /**
   * sysdiagrams findMany
   */
  export type sysdiagramsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * Filter, which sysdiagrams to fetch.
     */
    where?: sysdiagramsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sysdiagrams to fetch.
     */
    orderBy?: sysdiagramsOrderByWithRelationInput | sysdiagramsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sysdiagrams.
     */
    cursor?: sysdiagramsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sysdiagrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sysdiagrams.
     */
    skip?: number
    distinct?: SysdiagramsScalarFieldEnum | SysdiagramsScalarFieldEnum[]
  }

  /**
   * sysdiagrams create
   */
  export type sysdiagramsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * The data needed to create a sysdiagrams.
     */
    data: XOR<sysdiagramsCreateInput, sysdiagramsUncheckedCreateInput>
  }

  /**
   * sysdiagrams createMany
   */
  export type sysdiagramsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sysdiagrams.
     */
    data: sysdiagramsCreateManyInput | sysdiagramsCreateManyInput[]
  }

  /**
   * sysdiagrams update
   */
  export type sysdiagramsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * The data needed to update a sysdiagrams.
     */
    data: XOR<sysdiagramsUpdateInput, sysdiagramsUncheckedUpdateInput>
    /**
     * Choose, which sysdiagrams to update.
     */
    where: sysdiagramsWhereUniqueInput
  }

  /**
   * sysdiagrams updateMany
   */
  export type sysdiagramsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sysdiagrams.
     */
    data: XOR<sysdiagramsUpdateManyMutationInput, sysdiagramsUncheckedUpdateManyInput>
    /**
     * Filter which sysdiagrams to update
     */
    where?: sysdiagramsWhereInput
    /**
     * Limit how many sysdiagrams to update.
     */
    limit?: number
  }

  /**
   * sysdiagrams upsert
   */
  export type sysdiagramsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * The filter to search for the sysdiagrams to update in case it exists.
     */
    where: sysdiagramsWhereUniqueInput
    /**
     * In case the sysdiagrams found by the `where` argument doesn't exist, create a new sysdiagrams with this data.
     */
    create: XOR<sysdiagramsCreateInput, sysdiagramsUncheckedCreateInput>
    /**
     * In case the sysdiagrams was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sysdiagramsUpdateInput, sysdiagramsUncheckedUpdateInput>
  }

  /**
   * sysdiagrams delete
   */
  export type sysdiagramsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * Filter which sysdiagrams to delete.
     */
    where: sysdiagramsWhereUniqueInput
  }

  /**
   * sysdiagrams deleteMany
   */
  export type sysdiagramsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sysdiagrams to delete
     */
    where?: sysdiagramsWhereInput
    /**
     * Limit how many sysdiagrams to delete.
     */
    limit?: number
  }

  /**
   * sysdiagrams without action
   */
  export type sysdiagramsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
  }


  /**
   * Model trx_PICA
   */

  export type AggregateTrx_PICA = {
    _count: Trx_PICACountAggregateOutputType | null
    _avg: Trx_PICAAvgAggregateOutputType | null
    _sum: Trx_PICASumAggregateOutputType | null
    _min: Trx_PICAMinAggregateOutputType | null
    _max: Trx_PICAMaxAggregateOutputType | null
  }

  export type Trx_PICAAvgAggregateOutputType = {
    PICAID: number | null
    IncidentID: number | null
    created_by: number | null
    update_by: number | null
  }

  export type Trx_PICASumAggregateOutputType = {
    PICAID: number | null
    IncidentID: number | null
    created_by: number | null
    update_by: number | null
  }

  export type Trx_PICAMinAggregateOutputType = {
    PICAID: number | null
    IncidentID: number | null
    created_at: Date | null
    created_by: number | null
    update_at: Date | null
    update_by: number | null
  }

  export type Trx_PICAMaxAggregateOutputType = {
    PICAID: number | null
    IncidentID: number | null
    created_at: Date | null
    created_by: number | null
    update_at: Date | null
    update_by: number | null
  }

  export type Trx_PICACountAggregateOutputType = {
    PICAID: number
    IncidentID: number
    created_at: number
    created_by: number
    update_at: number
    update_by: number
    _all: number
  }


  export type Trx_PICAAvgAggregateInputType = {
    PICAID?: true
    IncidentID?: true
    created_by?: true
    update_by?: true
  }

  export type Trx_PICASumAggregateInputType = {
    PICAID?: true
    IncidentID?: true
    created_by?: true
    update_by?: true
  }

  export type Trx_PICAMinAggregateInputType = {
    PICAID?: true
    IncidentID?: true
    created_at?: true
    created_by?: true
    update_at?: true
    update_by?: true
  }

  export type Trx_PICAMaxAggregateInputType = {
    PICAID?: true
    IncidentID?: true
    created_at?: true
    created_by?: true
    update_at?: true
    update_by?: true
  }

  export type Trx_PICACountAggregateInputType = {
    PICAID?: true
    IncidentID?: true
    created_at?: true
    created_by?: true
    update_at?: true
    update_by?: true
    _all?: true
  }

  export type Trx_PICAAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trx_PICA to aggregate.
     */
    where?: trx_PICAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trx_PICAS to fetch.
     */
    orderBy?: trx_PICAOrderByWithRelationInput | trx_PICAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: trx_PICAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trx_PICAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trx_PICAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned trx_PICAS
    **/
    _count?: true | Trx_PICACountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Trx_PICAAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Trx_PICASumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Trx_PICAMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Trx_PICAMaxAggregateInputType
  }

  export type GetTrx_PICAAggregateType<T extends Trx_PICAAggregateArgs> = {
        [P in keyof T & keyof AggregateTrx_PICA]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrx_PICA[P]>
      : GetScalarType<T[P], AggregateTrx_PICA[P]>
  }




  export type trx_PICAGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: trx_PICAWhereInput
    orderBy?: trx_PICAOrderByWithAggregationInput | trx_PICAOrderByWithAggregationInput[]
    by: Trx_PICAScalarFieldEnum[] | Trx_PICAScalarFieldEnum
    having?: trx_PICAScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Trx_PICACountAggregateInputType | true
    _avg?: Trx_PICAAvgAggregateInputType
    _sum?: Trx_PICASumAggregateInputType
    _min?: Trx_PICAMinAggregateInputType
    _max?: Trx_PICAMaxAggregateInputType
  }

  export type Trx_PICAGroupByOutputType = {
    PICAID: number
    IncidentID: number
    created_at: Date | null
    created_by: number | null
    update_at: Date | null
    update_by: number | null
    _count: Trx_PICACountAggregateOutputType | null
    _avg: Trx_PICAAvgAggregateOutputType | null
    _sum: Trx_PICASumAggregateOutputType | null
    _min: Trx_PICAMinAggregateOutputType | null
    _max: Trx_PICAMaxAggregateOutputType | null
  }

  type GetTrx_PICAGroupByPayload<T extends trx_PICAGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Trx_PICAGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Trx_PICAGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Trx_PICAGroupByOutputType[P]>
            : GetScalarType<T[P], Trx_PICAGroupByOutputType[P]>
        }
      >
    >


  export type trx_PICASelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PICAID?: boolean
    IncidentID?: boolean
    created_at?: boolean
    created_by?: boolean
    update_at?: boolean
    update_by?: boolean
    trx_LogHistory?: boolean | trx_PICA$trx_LogHistoryArgs<ExtArgs>
    trx_DetailPICA?: boolean | trx_PICA$trx_DetailPICAArgs<ExtArgs>
    _count?: boolean | Trx_PICACountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trx_PICA"]>



  export type trx_PICASelectScalar = {
    PICAID?: boolean
    IncidentID?: boolean
    created_at?: boolean
    created_by?: boolean
    update_at?: boolean
    update_by?: boolean
  }

  export type trx_PICAOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"PICAID" | "IncidentID" | "created_at" | "created_by" | "update_at" | "update_by", ExtArgs["result"]["trx_PICA"]>
  export type trx_PICAInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trx_LogHistory?: boolean | trx_PICA$trx_LogHistoryArgs<ExtArgs>
    trx_DetailPICA?: boolean | trx_PICA$trx_DetailPICAArgs<ExtArgs>
    _count?: boolean | Trx_PICACountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $trx_PICAPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "trx_PICA"
    objects: {
      trx_LogHistory: Prisma.$trx_LogHistoryPayload<ExtArgs> | null
      trx_DetailPICA: Prisma.$trx_DetailPICAPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      PICAID: number
      IncidentID: number
      created_at: Date | null
      created_by: number | null
      update_at: Date | null
      update_by: number | null
    }, ExtArgs["result"]["trx_PICA"]>
    composites: {}
  }

  type trx_PICAGetPayload<S extends boolean | null | undefined | trx_PICADefaultArgs> = $Result.GetResult<Prisma.$trx_PICAPayload, S>

  type trx_PICACountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<trx_PICAFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Trx_PICACountAggregateInputType | true
    }

  export interface trx_PICADelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['trx_PICA'], meta: { name: 'trx_PICA' } }
    /**
     * Find zero or one Trx_PICA that matches the filter.
     * @param {trx_PICAFindUniqueArgs} args - Arguments to find a Trx_PICA
     * @example
     * // Get one Trx_PICA
     * const trx_PICA = await prisma.trx_PICA.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends trx_PICAFindUniqueArgs>(args: SelectSubset<T, trx_PICAFindUniqueArgs<ExtArgs>>): Prisma__trx_PICAClient<$Result.GetResult<Prisma.$trx_PICAPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trx_PICA that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {trx_PICAFindUniqueOrThrowArgs} args - Arguments to find a Trx_PICA
     * @example
     * // Get one Trx_PICA
     * const trx_PICA = await prisma.trx_PICA.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends trx_PICAFindUniqueOrThrowArgs>(args: SelectSubset<T, trx_PICAFindUniqueOrThrowArgs<ExtArgs>>): Prisma__trx_PICAClient<$Result.GetResult<Prisma.$trx_PICAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trx_PICA that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trx_PICAFindFirstArgs} args - Arguments to find a Trx_PICA
     * @example
     * // Get one Trx_PICA
     * const trx_PICA = await prisma.trx_PICA.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends trx_PICAFindFirstArgs>(args?: SelectSubset<T, trx_PICAFindFirstArgs<ExtArgs>>): Prisma__trx_PICAClient<$Result.GetResult<Prisma.$trx_PICAPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trx_PICA that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trx_PICAFindFirstOrThrowArgs} args - Arguments to find a Trx_PICA
     * @example
     * // Get one Trx_PICA
     * const trx_PICA = await prisma.trx_PICA.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends trx_PICAFindFirstOrThrowArgs>(args?: SelectSubset<T, trx_PICAFindFirstOrThrowArgs<ExtArgs>>): Prisma__trx_PICAClient<$Result.GetResult<Prisma.$trx_PICAPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trx_PICAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trx_PICAFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trx_PICAS
     * const trx_PICAS = await prisma.trx_PICA.findMany()
     * 
     * // Get first 10 Trx_PICAS
     * const trx_PICAS = await prisma.trx_PICA.findMany({ take: 10 })
     * 
     * // Only select the `PICAID`
     * const trx_PICAWithPICAIDOnly = await prisma.trx_PICA.findMany({ select: { PICAID: true } })
     * 
     */
    findMany<T extends trx_PICAFindManyArgs>(args?: SelectSubset<T, trx_PICAFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trx_PICAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trx_PICA.
     * @param {trx_PICACreateArgs} args - Arguments to create a Trx_PICA.
     * @example
     * // Create one Trx_PICA
     * const Trx_PICA = await prisma.trx_PICA.create({
     *   data: {
     *     // ... data to create a Trx_PICA
     *   }
     * })
     * 
     */
    create<T extends trx_PICACreateArgs>(args: SelectSubset<T, trx_PICACreateArgs<ExtArgs>>): Prisma__trx_PICAClient<$Result.GetResult<Prisma.$trx_PICAPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trx_PICAS.
     * @param {trx_PICACreateManyArgs} args - Arguments to create many Trx_PICAS.
     * @example
     * // Create many Trx_PICAS
     * const trx_PICA = await prisma.trx_PICA.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends trx_PICACreateManyArgs>(args?: SelectSubset<T, trx_PICACreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Trx_PICA.
     * @param {trx_PICADeleteArgs} args - Arguments to delete one Trx_PICA.
     * @example
     * // Delete one Trx_PICA
     * const Trx_PICA = await prisma.trx_PICA.delete({
     *   where: {
     *     // ... filter to delete one Trx_PICA
     *   }
     * })
     * 
     */
    delete<T extends trx_PICADeleteArgs>(args: SelectSubset<T, trx_PICADeleteArgs<ExtArgs>>): Prisma__trx_PICAClient<$Result.GetResult<Prisma.$trx_PICAPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trx_PICA.
     * @param {trx_PICAUpdateArgs} args - Arguments to update one Trx_PICA.
     * @example
     * // Update one Trx_PICA
     * const trx_PICA = await prisma.trx_PICA.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends trx_PICAUpdateArgs>(args: SelectSubset<T, trx_PICAUpdateArgs<ExtArgs>>): Prisma__trx_PICAClient<$Result.GetResult<Prisma.$trx_PICAPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trx_PICAS.
     * @param {trx_PICADeleteManyArgs} args - Arguments to filter Trx_PICAS to delete.
     * @example
     * // Delete a few Trx_PICAS
     * const { count } = await prisma.trx_PICA.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends trx_PICADeleteManyArgs>(args?: SelectSubset<T, trx_PICADeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trx_PICAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trx_PICAUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trx_PICAS
     * const trx_PICA = await prisma.trx_PICA.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends trx_PICAUpdateManyArgs>(args: SelectSubset<T, trx_PICAUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Trx_PICA.
     * @param {trx_PICAUpsertArgs} args - Arguments to update or create a Trx_PICA.
     * @example
     * // Update or create a Trx_PICA
     * const trx_PICA = await prisma.trx_PICA.upsert({
     *   create: {
     *     // ... data to create a Trx_PICA
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trx_PICA we want to update
     *   }
     * })
     */
    upsert<T extends trx_PICAUpsertArgs>(args: SelectSubset<T, trx_PICAUpsertArgs<ExtArgs>>): Prisma__trx_PICAClient<$Result.GetResult<Prisma.$trx_PICAPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trx_PICAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trx_PICACountArgs} args - Arguments to filter Trx_PICAS to count.
     * @example
     * // Count the number of Trx_PICAS
     * const count = await prisma.trx_PICA.count({
     *   where: {
     *     // ... the filter for the Trx_PICAS we want to count
     *   }
     * })
    **/
    count<T extends trx_PICACountArgs>(
      args?: Subset<T, trx_PICACountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Trx_PICACountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trx_PICA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Trx_PICAAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Trx_PICAAggregateArgs>(args: Subset<T, Trx_PICAAggregateArgs>): Prisma.PrismaPromise<GetTrx_PICAAggregateType<T>>

    /**
     * Group by Trx_PICA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trx_PICAGroupByArgs} args - Group by arguments.
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
      T extends trx_PICAGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: trx_PICAGroupByArgs['orderBy'] }
        : { orderBy?: trx_PICAGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, trx_PICAGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrx_PICAGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the trx_PICA model
   */
  readonly fields: trx_PICAFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for trx_PICA.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__trx_PICAClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trx_LogHistory<T extends trx_PICA$trx_LogHistoryArgs<ExtArgs> = {}>(args?: Subset<T, trx_PICA$trx_LogHistoryArgs<ExtArgs>>): Prisma__trx_LogHistoryClient<$Result.GetResult<Prisma.$trx_LogHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    trx_DetailPICA<T extends trx_PICA$trx_DetailPICAArgs<ExtArgs> = {}>(args?: Subset<T, trx_PICA$trx_DetailPICAArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trx_DetailPICAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the trx_PICA model
   */
  interface trx_PICAFieldRefs {
    readonly PICAID: FieldRef<"trx_PICA", 'Int'>
    readonly IncidentID: FieldRef<"trx_PICA", 'Int'>
    readonly created_at: FieldRef<"trx_PICA", 'DateTime'>
    readonly created_by: FieldRef<"trx_PICA", 'Int'>
    readonly update_at: FieldRef<"trx_PICA", 'DateTime'>
    readonly update_by: FieldRef<"trx_PICA", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * trx_PICA findUnique
   */
  export type trx_PICAFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_PICA
     */
    select?: trx_PICASelect<ExtArgs> | null
    /**
     * Omit specific fields from the trx_PICA
     */
    omit?: trx_PICAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trx_PICAInclude<ExtArgs> | null
    /**
     * Filter, which trx_PICA to fetch.
     */
    where: trx_PICAWhereUniqueInput
  }

  /**
   * trx_PICA findUniqueOrThrow
   */
  export type trx_PICAFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_PICA
     */
    select?: trx_PICASelect<ExtArgs> | null
    /**
     * Omit specific fields from the trx_PICA
     */
    omit?: trx_PICAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trx_PICAInclude<ExtArgs> | null
    /**
     * Filter, which trx_PICA to fetch.
     */
    where: trx_PICAWhereUniqueInput
  }

  /**
   * trx_PICA findFirst
   */
  export type trx_PICAFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_PICA
     */
    select?: trx_PICASelect<ExtArgs> | null
    /**
     * Omit specific fields from the trx_PICA
     */
    omit?: trx_PICAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trx_PICAInclude<ExtArgs> | null
    /**
     * Filter, which trx_PICA to fetch.
     */
    where?: trx_PICAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trx_PICAS to fetch.
     */
    orderBy?: trx_PICAOrderByWithRelationInput | trx_PICAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trx_PICAS.
     */
    cursor?: trx_PICAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trx_PICAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trx_PICAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trx_PICAS.
     */
    distinct?: Trx_PICAScalarFieldEnum | Trx_PICAScalarFieldEnum[]
  }

  /**
   * trx_PICA findFirstOrThrow
   */
  export type trx_PICAFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_PICA
     */
    select?: trx_PICASelect<ExtArgs> | null
    /**
     * Omit specific fields from the trx_PICA
     */
    omit?: trx_PICAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trx_PICAInclude<ExtArgs> | null
    /**
     * Filter, which trx_PICA to fetch.
     */
    where?: trx_PICAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trx_PICAS to fetch.
     */
    orderBy?: trx_PICAOrderByWithRelationInput | trx_PICAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trx_PICAS.
     */
    cursor?: trx_PICAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trx_PICAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trx_PICAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trx_PICAS.
     */
    distinct?: Trx_PICAScalarFieldEnum | Trx_PICAScalarFieldEnum[]
  }

  /**
   * trx_PICA findMany
   */
  export type trx_PICAFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_PICA
     */
    select?: trx_PICASelect<ExtArgs> | null
    /**
     * Omit specific fields from the trx_PICA
     */
    omit?: trx_PICAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trx_PICAInclude<ExtArgs> | null
    /**
     * Filter, which trx_PICAS to fetch.
     */
    where?: trx_PICAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trx_PICAS to fetch.
     */
    orderBy?: trx_PICAOrderByWithRelationInput | trx_PICAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing trx_PICAS.
     */
    cursor?: trx_PICAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trx_PICAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trx_PICAS.
     */
    skip?: number
    distinct?: Trx_PICAScalarFieldEnum | Trx_PICAScalarFieldEnum[]
  }

  /**
   * trx_PICA create
   */
  export type trx_PICACreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_PICA
     */
    select?: trx_PICASelect<ExtArgs> | null
    /**
     * Omit specific fields from the trx_PICA
     */
    omit?: trx_PICAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trx_PICAInclude<ExtArgs> | null
    /**
     * The data needed to create a trx_PICA.
     */
    data: XOR<trx_PICACreateInput, trx_PICAUncheckedCreateInput>
  }

  /**
   * trx_PICA createMany
   */
  export type trx_PICACreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many trx_PICAS.
     */
    data: trx_PICACreateManyInput | trx_PICACreateManyInput[]
  }

  /**
   * trx_PICA update
   */
  export type trx_PICAUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_PICA
     */
    select?: trx_PICASelect<ExtArgs> | null
    /**
     * Omit specific fields from the trx_PICA
     */
    omit?: trx_PICAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trx_PICAInclude<ExtArgs> | null
    /**
     * The data needed to update a trx_PICA.
     */
    data: XOR<trx_PICAUpdateInput, trx_PICAUncheckedUpdateInput>
    /**
     * Choose, which trx_PICA to update.
     */
    where: trx_PICAWhereUniqueInput
  }

  /**
   * trx_PICA updateMany
   */
  export type trx_PICAUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update trx_PICAS.
     */
    data: XOR<trx_PICAUpdateManyMutationInput, trx_PICAUncheckedUpdateManyInput>
    /**
     * Filter which trx_PICAS to update
     */
    where?: trx_PICAWhereInput
    /**
     * Limit how many trx_PICAS to update.
     */
    limit?: number
  }

  /**
   * trx_PICA upsert
   */
  export type trx_PICAUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_PICA
     */
    select?: trx_PICASelect<ExtArgs> | null
    /**
     * Omit specific fields from the trx_PICA
     */
    omit?: trx_PICAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trx_PICAInclude<ExtArgs> | null
    /**
     * The filter to search for the trx_PICA to update in case it exists.
     */
    where: trx_PICAWhereUniqueInput
    /**
     * In case the trx_PICA found by the `where` argument doesn't exist, create a new trx_PICA with this data.
     */
    create: XOR<trx_PICACreateInput, trx_PICAUncheckedCreateInput>
    /**
     * In case the trx_PICA was found with the provided `where` argument, update it with this data.
     */
    update: XOR<trx_PICAUpdateInput, trx_PICAUncheckedUpdateInput>
  }

  /**
   * trx_PICA delete
   */
  export type trx_PICADeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_PICA
     */
    select?: trx_PICASelect<ExtArgs> | null
    /**
     * Omit specific fields from the trx_PICA
     */
    omit?: trx_PICAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trx_PICAInclude<ExtArgs> | null
    /**
     * Filter which trx_PICA to delete.
     */
    where: trx_PICAWhereUniqueInput
  }

  /**
   * trx_PICA deleteMany
   */
  export type trx_PICADeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trx_PICAS to delete
     */
    where?: trx_PICAWhereInput
    /**
     * Limit how many trx_PICAS to delete.
     */
    limit?: number
  }

  /**
   * trx_PICA.trx_LogHistory
   */
  export type trx_PICA$trx_LogHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_LogHistory
     */
    select?: trx_LogHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the trx_LogHistory
     */
    omit?: trx_LogHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trx_LogHistoryInclude<ExtArgs> | null
    where?: trx_LogHistoryWhereInput
  }

  /**
   * trx_PICA.trx_DetailPICA
   */
  export type trx_PICA$trx_DetailPICAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_DetailPICA
     */
    select?: trx_DetailPICASelect<ExtArgs> | null
    /**
     * Omit specific fields from the trx_DetailPICA
     */
    omit?: trx_DetailPICAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trx_DetailPICAInclude<ExtArgs> | null
    where?: trx_DetailPICAWhereInput
    orderBy?: trx_DetailPICAOrderByWithRelationInput | trx_DetailPICAOrderByWithRelationInput[]
    cursor?: trx_DetailPICAWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Trx_DetailPICAScalarFieldEnum | Trx_DetailPICAScalarFieldEnum[]
  }

  /**
   * trx_PICA without action
   */
  export type trx_PICADefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_PICA
     */
    select?: trx_PICASelect<ExtArgs> | null
    /**
     * Omit specific fields from the trx_PICA
     */
    omit?: trx_PICAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trx_PICAInclude<ExtArgs> | null
  }


  /**
   * Model trx_DetailPICA
   */

  export type AggregateTrx_DetailPICA = {
    _count: Trx_DetailPICACountAggregateOutputType | null
    _avg: Trx_DetailPICAAvgAggregateOutputType | null
    _sum: Trx_DetailPICASumAggregateOutputType | null
    _min: Trx_DetailPICAMinAggregateOutputType | null
    _max: Trx_DetailPICAMaxAggregateOutputType | null
  }

  export type Trx_DetailPICAAvgAggregateOutputType = {
    DetailPICAID: number | null
    PICAID: number | null
  }

  export type Trx_DetailPICASumAggregateOutputType = {
    DetailPICAID: number | null
    PICAID: number | null
  }

  export type Trx_DetailPICAMinAggregateOutputType = {
    DetailPICAID: number | null
    PICAID: number | null
    Status: string | null
    Problem: string | null
    RootCaused: string | null
    CorrectiveAction: string | null
    PreventiveAction: string | null
  }

  export type Trx_DetailPICAMaxAggregateOutputType = {
    DetailPICAID: number | null
    PICAID: number | null
    Status: string | null
    Problem: string | null
    RootCaused: string | null
    CorrectiveAction: string | null
    PreventiveAction: string | null
  }

  export type Trx_DetailPICACountAggregateOutputType = {
    DetailPICAID: number
    PICAID: number
    Status: number
    Problem: number
    RootCaused: number
    CorrectiveAction: number
    PreventiveAction: number
    _all: number
  }


  export type Trx_DetailPICAAvgAggregateInputType = {
    DetailPICAID?: true
    PICAID?: true
  }

  export type Trx_DetailPICASumAggregateInputType = {
    DetailPICAID?: true
    PICAID?: true
  }

  export type Trx_DetailPICAMinAggregateInputType = {
    DetailPICAID?: true
    PICAID?: true
    Status?: true
    Problem?: true
    RootCaused?: true
    CorrectiveAction?: true
    PreventiveAction?: true
  }

  export type Trx_DetailPICAMaxAggregateInputType = {
    DetailPICAID?: true
    PICAID?: true
    Status?: true
    Problem?: true
    RootCaused?: true
    CorrectiveAction?: true
    PreventiveAction?: true
  }

  export type Trx_DetailPICACountAggregateInputType = {
    DetailPICAID?: true
    PICAID?: true
    Status?: true
    Problem?: true
    RootCaused?: true
    CorrectiveAction?: true
    PreventiveAction?: true
    _all?: true
  }

  export type Trx_DetailPICAAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trx_DetailPICA to aggregate.
     */
    where?: trx_DetailPICAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trx_DetailPICAS to fetch.
     */
    orderBy?: trx_DetailPICAOrderByWithRelationInput | trx_DetailPICAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: trx_DetailPICAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trx_DetailPICAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trx_DetailPICAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned trx_DetailPICAS
    **/
    _count?: true | Trx_DetailPICACountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Trx_DetailPICAAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Trx_DetailPICASumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Trx_DetailPICAMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Trx_DetailPICAMaxAggregateInputType
  }

  export type GetTrx_DetailPICAAggregateType<T extends Trx_DetailPICAAggregateArgs> = {
        [P in keyof T & keyof AggregateTrx_DetailPICA]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrx_DetailPICA[P]>
      : GetScalarType<T[P], AggregateTrx_DetailPICA[P]>
  }




  export type trx_DetailPICAGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: trx_DetailPICAWhereInput
    orderBy?: trx_DetailPICAOrderByWithAggregationInput | trx_DetailPICAOrderByWithAggregationInput[]
    by: Trx_DetailPICAScalarFieldEnum[] | Trx_DetailPICAScalarFieldEnum
    having?: trx_DetailPICAScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Trx_DetailPICACountAggregateInputType | true
    _avg?: Trx_DetailPICAAvgAggregateInputType
    _sum?: Trx_DetailPICASumAggregateInputType
    _min?: Trx_DetailPICAMinAggregateInputType
    _max?: Trx_DetailPICAMaxAggregateInputType
  }

  export type Trx_DetailPICAGroupByOutputType = {
    DetailPICAID: number
    PICAID: number | null
    Status: string | null
    Problem: string | null
    RootCaused: string | null
    CorrectiveAction: string | null
    PreventiveAction: string | null
    _count: Trx_DetailPICACountAggregateOutputType | null
    _avg: Trx_DetailPICAAvgAggregateOutputType | null
    _sum: Trx_DetailPICASumAggregateOutputType | null
    _min: Trx_DetailPICAMinAggregateOutputType | null
    _max: Trx_DetailPICAMaxAggregateOutputType | null
  }

  type GetTrx_DetailPICAGroupByPayload<T extends trx_DetailPICAGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Trx_DetailPICAGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Trx_DetailPICAGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Trx_DetailPICAGroupByOutputType[P]>
            : GetScalarType<T[P], Trx_DetailPICAGroupByOutputType[P]>
        }
      >
    >


  export type trx_DetailPICASelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    DetailPICAID?: boolean
    PICAID?: boolean
    Status?: boolean
    Problem?: boolean
    RootCaused?: boolean
    CorrectiveAction?: boolean
    PreventiveAction?: boolean
    trx_PICA?: boolean | trx_DetailPICA$trx_PICAArgs<ExtArgs>
  }, ExtArgs["result"]["trx_DetailPICA"]>



  export type trx_DetailPICASelectScalar = {
    DetailPICAID?: boolean
    PICAID?: boolean
    Status?: boolean
    Problem?: boolean
    RootCaused?: boolean
    CorrectiveAction?: boolean
    PreventiveAction?: boolean
  }

  export type trx_DetailPICAOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"DetailPICAID" | "PICAID" | "Status" | "Problem" | "RootCaused" | "CorrectiveAction" | "PreventiveAction", ExtArgs["result"]["trx_DetailPICA"]>
  export type trx_DetailPICAInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trx_PICA?: boolean | trx_DetailPICA$trx_PICAArgs<ExtArgs>
  }

  export type $trx_DetailPICAPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "trx_DetailPICA"
    objects: {
      trx_PICA: Prisma.$trx_PICAPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      DetailPICAID: number
      PICAID: number | null
      Status: string | null
      Problem: string | null
      RootCaused: string | null
      CorrectiveAction: string | null
      PreventiveAction: string | null
    }, ExtArgs["result"]["trx_DetailPICA"]>
    composites: {}
  }

  type trx_DetailPICAGetPayload<S extends boolean | null | undefined | trx_DetailPICADefaultArgs> = $Result.GetResult<Prisma.$trx_DetailPICAPayload, S>

  type trx_DetailPICACountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<trx_DetailPICAFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Trx_DetailPICACountAggregateInputType | true
    }

  export interface trx_DetailPICADelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['trx_DetailPICA'], meta: { name: 'trx_DetailPICA' } }
    /**
     * Find zero or one Trx_DetailPICA that matches the filter.
     * @param {trx_DetailPICAFindUniqueArgs} args - Arguments to find a Trx_DetailPICA
     * @example
     * // Get one Trx_DetailPICA
     * const trx_DetailPICA = await prisma.trx_DetailPICA.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends trx_DetailPICAFindUniqueArgs>(args: SelectSubset<T, trx_DetailPICAFindUniqueArgs<ExtArgs>>): Prisma__trx_DetailPICAClient<$Result.GetResult<Prisma.$trx_DetailPICAPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trx_DetailPICA that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {trx_DetailPICAFindUniqueOrThrowArgs} args - Arguments to find a Trx_DetailPICA
     * @example
     * // Get one Trx_DetailPICA
     * const trx_DetailPICA = await prisma.trx_DetailPICA.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends trx_DetailPICAFindUniqueOrThrowArgs>(args: SelectSubset<T, trx_DetailPICAFindUniqueOrThrowArgs<ExtArgs>>): Prisma__trx_DetailPICAClient<$Result.GetResult<Prisma.$trx_DetailPICAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trx_DetailPICA that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trx_DetailPICAFindFirstArgs} args - Arguments to find a Trx_DetailPICA
     * @example
     * // Get one Trx_DetailPICA
     * const trx_DetailPICA = await prisma.trx_DetailPICA.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends trx_DetailPICAFindFirstArgs>(args?: SelectSubset<T, trx_DetailPICAFindFirstArgs<ExtArgs>>): Prisma__trx_DetailPICAClient<$Result.GetResult<Prisma.$trx_DetailPICAPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trx_DetailPICA that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trx_DetailPICAFindFirstOrThrowArgs} args - Arguments to find a Trx_DetailPICA
     * @example
     * // Get one Trx_DetailPICA
     * const trx_DetailPICA = await prisma.trx_DetailPICA.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends trx_DetailPICAFindFirstOrThrowArgs>(args?: SelectSubset<T, trx_DetailPICAFindFirstOrThrowArgs<ExtArgs>>): Prisma__trx_DetailPICAClient<$Result.GetResult<Prisma.$trx_DetailPICAPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trx_DetailPICAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trx_DetailPICAFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trx_DetailPICAS
     * const trx_DetailPICAS = await prisma.trx_DetailPICA.findMany()
     * 
     * // Get first 10 Trx_DetailPICAS
     * const trx_DetailPICAS = await prisma.trx_DetailPICA.findMany({ take: 10 })
     * 
     * // Only select the `DetailPICAID`
     * const trx_DetailPICAWithDetailPICAIDOnly = await prisma.trx_DetailPICA.findMany({ select: { DetailPICAID: true } })
     * 
     */
    findMany<T extends trx_DetailPICAFindManyArgs>(args?: SelectSubset<T, trx_DetailPICAFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trx_DetailPICAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trx_DetailPICA.
     * @param {trx_DetailPICACreateArgs} args - Arguments to create a Trx_DetailPICA.
     * @example
     * // Create one Trx_DetailPICA
     * const Trx_DetailPICA = await prisma.trx_DetailPICA.create({
     *   data: {
     *     // ... data to create a Trx_DetailPICA
     *   }
     * })
     * 
     */
    create<T extends trx_DetailPICACreateArgs>(args: SelectSubset<T, trx_DetailPICACreateArgs<ExtArgs>>): Prisma__trx_DetailPICAClient<$Result.GetResult<Prisma.$trx_DetailPICAPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trx_DetailPICAS.
     * @param {trx_DetailPICACreateManyArgs} args - Arguments to create many Trx_DetailPICAS.
     * @example
     * // Create many Trx_DetailPICAS
     * const trx_DetailPICA = await prisma.trx_DetailPICA.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends trx_DetailPICACreateManyArgs>(args?: SelectSubset<T, trx_DetailPICACreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Trx_DetailPICA.
     * @param {trx_DetailPICADeleteArgs} args - Arguments to delete one Trx_DetailPICA.
     * @example
     * // Delete one Trx_DetailPICA
     * const Trx_DetailPICA = await prisma.trx_DetailPICA.delete({
     *   where: {
     *     // ... filter to delete one Trx_DetailPICA
     *   }
     * })
     * 
     */
    delete<T extends trx_DetailPICADeleteArgs>(args: SelectSubset<T, trx_DetailPICADeleteArgs<ExtArgs>>): Prisma__trx_DetailPICAClient<$Result.GetResult<Prisma.$trx_DetailPICAPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trx_DetailPICA.
     * @param {trx_DetailPICAUpdateArgs} args - Arguments to update one Trx_DetailPICA.
     * @example
     * // Update one Trx_DetailPICA
     * const trx_DetailPICA = await prisma.trx_DetailPICA.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends trx_DetailPICAUpdateArgs>(args: SelectSubset<T, trx_DetailPICAUpdateArgs<ExtArgs>>): Prisma__trx_DetailPICAClient<$Result.GetResult<Prisma.$trx_DetailPICAPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trx_DetailPICAS.
     * @param {trx_DetailPICADeleteManyArgs} args - Arguments to filter Trx_DetailPICAS to delete.
     * @example
     * // Delete a few Trx_DetailPICAS
     * const { count } = await prisma.trx_DetailPICA.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends trx_DetailPICADeleteManyArgs>(args?: SelectSubset<T, trx_DetailPICADeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trx_DetailPICAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trx_DetailPICAUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trx_DetailPICAS
     * const trx_DetailPICA = await prisma.trx_DetailPICA.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends trx_DetailPICAUpdateManyArgs>(args: SelectSubset<T, trx_DetailPICAUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Trx_DetailPICA.
     * @param {trx_DetailPICAUpsertArgs} args - Arguments to update or create a Trx_DetailPICA.
     * @example
     * // Update or create a Trx_DetailPICA
     * const trx_DetailPICA = await prisma.trx_DetailPICA.upsert({
     *   create: {
     *     // ... data to create a Trx_DetailPICA
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trx_DetailPICA we want to update
     *   }
     * })
     */
    upsert<T extends trx_DetailPICAUpsertArgs>(args: SelectSubset<T, trx_DetailPICAUpsertArgs<ExtArgs>>): Prisma__trx_DetailPICAClient<$Result.GetResult<Prisma.$trx_DetailPICAPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trx_DetailPICAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trx_DetailPICACountArgs} args - Arguments to filter Trx_DetailPICAS to count.
     * @example
     * // Count the number of Trx_DetailPICAS
     * const count = await prisma.trx_DetailPICA.count({
     *   where: {
     *     // ... the filter for the Trx_DetailPICAS we want to count
     *   }
     * })
    **/
    count<T extends trx_DetailPICACountArgs>(
      args?: Subset<T, trx_DetailPICACountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Trx_DetailPICACountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trx_DetailPICA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Trx_DetailPICAAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Trx_DetailPICAAggregateArgs>(args: Subset<T, Trx_DetailPICAAggregateArgs>): Prisma.PrismaPromise<GetTrx_DetailPICAAggregateType<T>>

    /**
     * Group by Trx_DetailPICA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trx_DetailPICAGroupByArgs} args - Group by arguments.
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
      T extends trx_DetailPICAGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: trx_DetailPICAGroupByArgs['orderBy'] }
        : { orderBy?: trx_DetailPICAGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, trx_DetailPICAGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrx_DetailPICAGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the trx_DetailPICA model
   */
  readonly fields: trx_DetailPICAFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for trx_DetailPICA.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__trx_DetailPICAClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trx_PICA<T extends trx_DetailPICA$trx_PICAArgs<ExtArgs> = {}>(args?: Subset<T, trx_DetailPICA$trx_PICAArgs<ExtArgs>>): Prisma__trx_PICAClient<$Result.GetResult<Prisma.$trx_PICAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the trx_DetailPICA model
   */
  interface trx_DetailPICAFieldRefs {
    readonly DetailPICAID: FieldRef<"trx_DetailPICA", 'Int'>
    readonly PICAID: FieldRef<"trx_DetailPICA", 'Int'>
    readonly Status: FieldRef<"trx_DetailPICA", 'String'>
    readonly Problem: FieldRef<"trx_DetailPICA", 'String'>
    readonly RootCaused: FieldRef<"trx_DetailPICA", 'String'>
    readonly CorrectiveAction: FieldRef<"trx_DetailPICA", 'String'>
    readonly PreventiveAction: FieldRef<"trx_DetailPICA", 'String'>
  }
    

  // Custom InputTypes
  /**
   * trx_DetailPICA findUnique
   */
  export type trx_DetailPICAFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_DetailPICA
     */
    select?: trx_DetailPICASelect<ExtArgs> | null
    /**
     * Omit specific fields from the trx_DetailPICA
     */
    omit?: trx_DetailPICAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trx_DetailPICAInclude<ExtArgs> | null
    /**
     * Filter, which trx_DetailPICA to fetch.
     */
    where: trx_DetailPICAWhereUniqueInput
  }

  /**
   * trx_DetailPICA findUniqueOrThrow
   */
  export type trx_DetailPICAFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_DetailPICA
     */
    select?: trx_DetailPICASelect<ExtArgs> | null
    /**
     * Omit specific fields from the trx_DetailPICA
     */
    omit?: trx_DetailPICAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trx_DetailPICAInclude<ExtArgs> | null
    /**
     * Filter, which trx_DetailPICA to fetch.
     */
    where: trx_DetailPICAWhereUniqueInput
  }

  /**
   * trx_DetailPICA findFirst
   */
  export type trx_DetailPICAFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_DetailPICA
     */
    select?: trx_DetailPICASelect<ExtArgs> | null
    /**
     * Omit specific fields from the trx_DetailPICA
     */
    omit?: trx_DetailPICAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trx_DetailPICAInclude<ExtArgs> | null
    /**
     * Filter, which trx_DetailPICA to fetch.
     */
    where?: trx_DetailPICAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trx_DetailPICAS to fetch.
     */
    orderBy?: trx_DetailPICAOrderByWithRelationInput | trx_DetailPICAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trx_DetailPICAS.
     */
    cursor?: trx_DetailPICAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trx_DetailPICAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trx_DetailPICAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trx_DetailPICAS.
     */
    distinct?: Trx_DetailPICAScalarFieldEnum | Trx_DetailPICAScalarFieldEnum[]
  }

  /**
   * trx_DetailPICA findFirstOrThrow
   */
  export type trx_DetailPICAFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_DetailPICA
     */
    select?: trx_DetailPICASelect<ExtArgs> | null
    /**
     * Omit specific fields from the trx_DetailPICA
     */
    omit?: trx_DetailPICAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trx_DetailPICAInclude<ExtArgs> | null
    /**
     * Filter, which trx_DetailPICA to fetch.
     */
    where?: trx_DetailPICAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trx_DetailPICAS to fetch.
     */
    orderBy?: trx_DetailPICAOrderByWithRelationInput | trx_DetailPICAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trx_DetailPICAS.
     */
    cursor?: trx_DetailPICAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trx_DetailPICAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trx_DetailPICAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trx_DetailPICAS.
     */
    distinct?: Trx_DetailPICAScalarFieldEnum | Trx_DetailPICAScalarFieldEnum[]
  }

  /**
   * trx_DetailPICA findMany
   */
  export type trx_DetailPICAFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_DetailPICA
     */
    select?: trx_DetailPICASelect<ExtArgs> | null
    /**
     * Omit specific fields from the trx_DetailPICA
     */
    omit?: trx_DetailPICAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trx_DetailPICAInclude<ExtArgs> | null
    /**
     * Filter, which trx_DetailPICAS to fetch.
     */
    where?: trx_DetailPICAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trx_DetailPICAS to fetch.
     */
    orderBy?: trx_DetailPICAOrderByWithRelationInput | trx_DetailPICAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing trx_DetailPICAS.
     */
    cursor?: trx_DetailPICAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trx_DetailPICAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trx_DetailPICAS.
     */
    skip?: number
    distinct?: Trx_DetailPICAScalarFieldEnum | Trx_DetailPICAScalarFieldEnum[]
  }

  /**
   * trx_DetailPICA create
   */
  export type trx_DetailPICACreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_DetailPICA
     */
    select?: trx_DetailPICASelect<ExtArgs> | null
    /**
     * Omit specific fields from the trx_DetailPICA
     */
    omit?: trx_DetailPICAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trx_DetailPICAInclude<ExtArgs> | null
    /**
     * The data needed to create a trx_DetailPICA.
     */
    data: XOR<trx_DetailPICACreateInput, trx_DetailPICAUncheckedCreateInput>
  }

  /**
   * trx_DetailPICA createMany
   */
  export type trx_DetailPICACreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many trx_DetailPICAS.
     */
    data: trx_DetailPICACreateManyInput | trx_DetailPICACreateManyInput[]
  }

  /**
   * trx_DetailPICA update
   */
  export type trx_DetailPICAUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_DetailPICA
     */
    select?: trx_DetailPICASelect<ExtArgs> | null
    /**
     * Omit specific fields from the trx_DetailPICA
     */
    omit?: trx_DetailPICAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trx_DetailPICAInclude<ExtArgs> | null
    /**
     * The data needed to update a trx_DetailPICA.
     */
    data: XOR<trx_DetailPICAUpdateInput, trx_DetailPICAUncheckedUpdateInput>
    /**
     * Choose, which trx_DetailPICA to update.
     */
    where: trx_DetailPICAWhereUniqueInput
  }

  /**
   * trx_DetailPICA updateMany
   */
  export type trx_DetailPICAUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update trx_DetailPICAS.
     */
    data: XOR<trx_DetailPICAUpdateManyMutationInput, trx_DetailPICAUncheckedUpdateManyInput>
    /**
     * Filter which trx_DetailPICAS to update
     */
    where?: trx_DetailPICAWhereInput
    /**
     * Limit how many trx_DetailPICAS to update.
     */
    limit?: number
  }

  /**
   * trx_DetailPICA upsert
   */
  export type trx_DetailPICAUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_DetailPICA
     */
    select?: trx_DetailPICASelect<ExtArgs> | null
    /**
     * Omit specific fields from the trx_DetailPICA
     */
    omit?: trx_DetailPICAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trx_DetailPICAInclude<ExtArgs> | null
    /**
     * The filter to search for the trx_DetailPICA to update in case it exists.
     */
    where: trx_DetailPICAWhereUniqueInput
    /**
     * In case the trx_DetailPICA found by the `where` argument doesn't exist, create a new trx_DetailPICA with this data.
     */
    create: XOR<trx_DetailPICACreateInput, trx_DetailPICAUncheckedCreateInput>
    /**
     * In case the trx_DetailPICA was found with the provided `where` argument, update it with this data.
     */
    update: XOR<trx_DetailPICAUpdateInput, trx_DetailPICAUncheckedUpdateInput>
  }

  /**
   * trx_DetailPICA delete
   */
  export type trx_DetailPICADeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_DetailPICA
     */
    select?: trx_DetailPICASelect<ExtArgs> | null
    /**
     * Omit specific fields from the trx_DetailPICA
     */
    omit?: trx_DetailPICAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trx_DetailPICAInclude<ExtArgs> | null
    /**
     * Filter which trx_DetailPICA to delete.
     */
    where: trx_DetailPICAWhereUniqueInput
  }

  /**
   * trx_DetailPICA deleteMany
   */
  export type trx_DetailPICADeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trx_DetailPICAS to delete
     */
    where?: trx_DetailPICAWhereInput
    /**
     * Limit how many trx_DetailPICAS to delete.
     */
    limit?: number
  }

  /**
   * trx_DetailPICA.trx_PICA
   */
  export type trx_DetailPICA$trx_PICAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_PICA
     */
    select?: trx_PICASelect<ExtArgs> | null
    /**
     * Omit specific fields from the trx_PICA
     */
    omit?: trx_PICAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trx_PICAInclude<ExtArgs> | null
    where?: trx_PICAWhereInput
  }

  /**
   * trx_DetailPICA without action
   */
  export type trx_DetailPICADefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_DetailPICA
     */
    select?: trx_DetailPICASelect<ExtArgs> | null
    /**
     * Omit specific fields from the trx_DetailPICA
     */
    omit?: trx_DetailPICAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trx_DetailPICAInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    guid: string | null
    name: string | null
    username: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    guid: string | null
    name: string | null
    username: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    guid: number
    name: number
    username: number
    password: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    guid?: true
    name?: true
    username?: true
    password?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    guid?: true
    name?: true
    username?: true
    password?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    guid?: true
    name?: true
    username?: true
    password?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    guid: string
    name: string
    username: string
    password: string
    created_at: Date
    updated_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    guid?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guid" | "name" | "username" | "password" | "created_at" | "updated_at", ExtArgs["result"]["users"]>

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      guid: string
      name: string
      username: string
      password: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly guid: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly username: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
  }


  /**
   * Model trx_LogHistory
   */

  export type AggregateTrx_LogHistory = {
    _count: Trx_LogHistoryCountAggregateOutputType | null
    _avg: Trx_LogHistoryAvgAggregateOutputType | null
    _sum: Trx_LogHistorySumAggregateOutputType | null
    _min: Trx_LogHistoryMinAggregateOutputType | null
    _max: Trx_LogHistoryMaxAggregateOutputType | null
  }

  export type Trx_LogHistoryAvgAggregateOutputType = {
    ID: number | null
    SalesDocument: number | null
    DocumentNumber: number | null
    POID: number | null
    PROID: number | null
    PICBA: number | null
    PICUser: number | null
    FlagStatus: number | null
  }

  export type Trx_LogHistorySumAggregateOutputType = {
    ID: number | null
    SalesDocument: number | null
    DocumentNumber: number | null
    POID: number | null
    PROID: number | null
    PICBA: number | null
    PICUser: number | null
    FlagStatus: number | null
  }

  export type Trx_LogHistoryMinAggregateOutputType = {
    ID: number | null
    UnitSerialNumber: string | null
    SalesDocument: number | null
    DocumentNumber: number | null
    POID: number | null
    PROID: number | null
    Description: string | null
    IncidentType: string | null
    PICBA: number | null
    BAEmailDate: Date | null
    BAEmailStatus: string | null
    PICUser: number | null
    UserEmailDate: Date | null
    UserEmailStatus: string | null
    OpenDate: Date | null
    CloseDate: Date | null
    FeedbackBA: string | null
    FeedbackBADate: Date | null
    FeedbackUser: string | null
    FeedbackUserDate: Date | null
    FlagStatus: number | null
    Status: string | null
  }

  export type Trx_LogHistoryMaxAggregateOutputType = {
    ID: number | null
    UnitSerialNumber: string | null
    SalesDocument: number | null
    DocumentNumber: number | null
    POID: number | null
    PROID: number | null
    Description: string | null
    IncidentType: string | null
    PICBA: number | null
    BAEmailDate: Date | null
    BAEmailStatus: string | null
    PICUser: number | null
    UserEmailDate: Date | null
    UserEmailStatus: string | null
    OpenDate: Date | null
    CloseDate: Date | null
    FeedbackBA: string | null
    FeedbackBADate: Date | null
    FeedbackUser: string | null
    FeedbackUserDate: Date | null
    FlagStatus: number | null
    Status: string | null
  }

  export type Trx_LogHistoryCountAggregateOutputType = {
    ID: number
    UnitSerialNumber: number
    SalesDocument: number
    DocumentNumber: number
    POID: number
    PROID: number
    Description: number
    IncidentType: number
    PICBA: number
    BAEmailDate: number
    BAEmailStatus: number
    PICUser: number
    UserEmailDate: number
    UserEmailStatus: number
    OpenDate: number
    CloseDate: number
    FeedbackBA: number
    FeedbackBADate: number
    FeedbackUser: number
    FeedbackUserDate: number
    FlagStatus: number
    Status: number
    _all: number
  }


  export type Trx_LogHistoryAvgAggregateInputType = {
    ID?: true
    SalesDocument?: true
    DocumentNumber?: true
    POID?: true
    PROID?: true
    PICBA?: true
    PICUser?: true
    FlagStatus?: true
  }

  export type Trx_LogHistorySumAggregateInputType = {
    ID?: true
    SalesDocument?: true
    DocumentNumber?: true
    POID?: true
    PROID?: true
    PICBA?: true
    PICUser?: true
    FlagStatus?: true
  }

  export type Trx_LogHistoryMinAggregateInputType = {
    ID?: true
    UnitSerialNumber?: true
    SalesDocument?: true
    DocumentNumber?: true
    POID?: true
    PROID?: true
    Description?: true
    IncidentType?: true
    PICBA?: true
    BAEmailDate?: true
    BAEmailStatus?: true
    PICUser?: true
    UserEmailDate?: true
    UserEmailStatus?: true
    OpenDate?: true
    CloseDate?: true
    FeedbackBA?: true
    FeedbackBADate?: true
    FeedbackUser?: true
    FeedbackUserDate?: true
    FlagStatus?: true
    Status?: true
  }

  export type Trx_LogHistoryMaxAggregateInputType = {
    ID?: true
    UnitSerialNumber?: true
    SalesDocument?: true
    DocumentNumber?: true
    POID?: true
    PROID?: true
    Description?: true
    IncidentType?: true
    PICBA?: true
    BAEmailDate?: true
    BAEmailStatus?: true
    PICUser?: true
    UserEmailDate?: true
    UserEmailStatus?: true
    OpenDate?: true
    CloseDate?: true
    FeedbackBA?: true
    FeedbackBADate?: true
    FeedbackUser?: true
    FeedbackUserDate?: true
    FlagStatus?: true
    Status?: true
  }

  export type Trx_LogHistoryCountAggregateInputType = {
    ID?: true
    UnitSerialNumber?: true
    SalesDocument?: true
    DocumentNumber?: true
    POID?: true
    PROID?: true
    Description?: true
    IncidentType?: true
    PICBA?: true
    BAEmailDate?: true
    BAEmailStatus?: true
    PICUser?: true
    UserEmailDate?: true
    UserEmailStatus?: true
    OpenDate?: true
    CloseDate?: true
    FeedbackBA?: true
    FeedbackBADate?: true
    FeedbackUser?: true
    FeedbackUserDate?: true
    FlagStatus?: true
    Status?: true
    _all?: true
  }

  export type Trx_LogHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trx_LogHistory to aggregate.
     */
    where?: trx_LogHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trx_LogHistories to fetch.
     */
    orderBy?: trx_LogHistoryOrderByWithRelationInput | trx_LogHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: trx_LogHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trx_LogHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trx_LogHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned trx_LogHistories
    **/
    _count?: true | Trx_LogHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Trx_LogHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Trx_LogHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Trx_LogHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Trx_LogHistoryMaxAggregateInputType
  }

  export type GetTrx_LogHistoryAggregateType<T extends Trx_LogHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTrx_LogHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrx_LogHistory[P]>
      : GetScalarType<T[P], AggregateTrx_LogHistory[P]>
  }




  export type trx_LogHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: trx_LogHistoryWhereInput
    orderBy?: trx_LogHistoryOrderByWithAggregationInput | trx_LogHistoryOrderByWithAggregationInput[]
    by: Trx_LogHistoryScalarFieldEnum[] | Trx_LogHistoryScalarFieldEnum
    having?: trx_LogHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Trx_LogHistoryCountAggregateInputType | true
    _avg?: Trx_LogHistoryAvgAggregateInputType
    _sum?: Trx_LogHistorySumAggregateInputType
    _min?: Trx_LogHistoryMinAggregateInputType
    _max?: Trx_LogHistoryMaxAggregateInputType
  }

  export type Trx_LogHistoryGroupByOutputType = {
    ID: number
    UnitSerialNumber: string | null
    SalesDocument: number | null
    DocumentNumber: number | null
    POID: number | null
    PROID: number | null
    Description: string | null
    IncidentType: string | null
    PICBA: number | null
    BAEmailDate: Date | null
    BAEmailStatus: string | null
    PICUser: number | null
    UserEmailDate: Date | null
    UserEmailStatus: string | null
    OpenDate: Date | null
    CloseDate: Date | null
    FeedbackBA: string | null
    FeedbackBADate: Date | null
    FeedbackUser: string | null
    FeedbackUserDate: Date | null
    FlagStatus: number | null
    Status: string | null
    _count: Trx_LogHistoryCountAggregateOutputType | null
    _avg: Trx_LogHistoryAvgAggregateOutputType | null
    _sum: Trx_LogHistorySumAggregateOutputType | null
    _min: Trx_LogHistoryMinAggregateOutputType | null
    _max: Trx_LogHistoryMaxAggregateOutputType | null
  }

  type GetTrx_LogHistoryGroupByPayload<T extends trx_LogHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Trx_LogHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Trx_LogHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Trx_LogHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], Trx_LogHistoryGroupByOutputType[P]>
        }
      >
    >


  export type trx_LogHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    UnitSerialNumber?: boolean
    SalesDocument?: boolean
    DocumentNumber?: boolean
    POID?: boolean
    PROID?: boolean
    Description?: boolean
    IncidentType?: boolean
    PICBA?: boolean
    BAEmailDate?: boolean
    BAEmailStatus?: boolean
    PICUser?: boolean
    UserEmailDate?: boolean
    UserEmailStatus?: boolean
    OpenDate?: boolean
    CloseDate?: boolean
    FeedbackBA?: boolean
    FeedbackBADate?: boolean
    FeedbackUser?: boolean
    FeedbackUserDate?: boolean
    FlagStatus?: boolean
    Status?: boolean
    pic_ba?: boolean | trx_LogHistory$pic_baArgs<ExtArgs>
    pic_user?: boolean | trx_LogHistory$pic_userArgs<ExtArgs>
    trx_PICA?: boolean | trx_LogHistory$trx_PICAArgs<ExtArgs>
    _count?: boolean | Trx_LogHistoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trx_LogHistory"]>



  export type trx_LogHistorySelectScalar = {
    ID?: boolean
    UnitSerialNumber?: boolean
    SalesDocument?: boolean
    DocumentNumber?: boolean
    POID?: boolean
    PROID?: boolean
    Description?: boolean
    IncidentType?: boolean
    PICBA?: boolean
    BAEmailDate?: boolean
    BAEmailStatus?: boolean
    PICUser?: boolean
    UserEmailDate?: boolean
    UserEmailStatus?: boolean
    OpenDate?: boolean
    CloseDate?: boolean
    FeedbackBA?: boolean
    FeedbackBADate?: boolean
    FeedbackUser?: boolean
    FeedbackUserDate?: boolean
    FlagStatus?: boolean
    Status?: boolean
  }

  export type trx_LogHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "UnitSerialNumber" | "SalesDocument" | "DocumentNumber" | "POID" | "PROID" | "Description" | "IncidentType" | "PICBA" | "BAEmailDate" | "BAEmailStatus" | "PICUser" | "UserEmailDate" | "UserEmailStatus" | "OpenDate" | "CloseDate" | "FeedbackBA" | "FeedbackBADate" | "FeedbackUser" | "FeedbackUserDate" | "FlagStatus" | "Status", ExtArgs["result"]["trx_LogHistory"]>
  export type trx_LogHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pic_ba?: boolean | trx_LogHistory$pic_baArgs<ExtArgs>
    pic_user?: boolean | trx_LogHistory$pic_userArgs<ExtArgs>
    trx_PICA?: boolean | trx_LogHistory$trx_PICAArgs<ExtArgs>
    _count?: boolean | Trx_LogHistoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $trx_LogHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "trx_LogHistory"
    objects: {
      pic_ba: Prisma.$ms_usersPayload<ExtArgs> | null
      pic_user: Prisma.$ms_usersPayload<ExtArgs> | null
      trx_PICA: Prisma.$trx_PICAPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      UnitSerialNumber: string | null
      SalesDocument: number | null
      DocumentNumber: number | null
      POID: number | null
      PROID: number | null
      Description: string | null
      IncidentType: string | null
      PICBA: number | null
      BAEmailDate: Date | null
      BAEmailStatus: string | null
      PICUser: number | null
      UserEmailDate: Date | null
      UserEmailStatus: string | null
      OpenDate: Date | null
      CloseDate: Date | null
      FeedbackBA: string | null
      FeedbackBADate: Date | null
      FeedbackUser: string | null
      FeedbackUserDate: Date | null
      FlagStatus: number | null
      Status: string | null
    }, ExtArgs["result"]["trx_LogHistory"]>
    composites: {}
  }

  type trx_LogHistoryGetPayload<S extends boolean | null | undefined | trx_LogHistoryDefaultArgs> = $Result.GetResult<Prisma.$trx_LogHistoryPayload, S>

  type trx_LogHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<trx_LogHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Trx_LogHistoryCountAggregateInputType | true
    }

  export interface trx_LogHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['trx_LogHistory'], meta: { name: 'trx_LogHistory' } }
    /**
     * Find zero or one Trx_LogHistory that matches the filter.
     * @param {trx_LogHistoryFindUniqueArgs} args - Arguments to find a Trx_LogHistory
     * @example
     * // Get one Trx_LogHistory
     * const trx_LogHistory = await prisma.trx_LogHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends trx_LogHistoryFindUniqueArgs>(args: SelectSubset<T, trx_LogHistoryFindUniqueArgs<ExtArgs>>): Prisma__trx_LogHistoryClient<$Result.GetResult<Prisma.$trx_LogHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trx_LogHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {trx_LogHistoryFindUniqueOrThrowArgs} args - Arguments to find a Trx_LogHistory
     * @example
     * // Get one Trx_LogHistory
     * const trx_LogHistory = await prisma.trx_LogHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends trx_LogHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, trx_LogHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__trx_LogHistoryClient<$Result.GetResult<Prisma.$trx_LogHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trx_LogHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trx_LogHistoryFindFirstArgs} args - Arguments to find a Trx_LogHistory
     * @example
     * // Get one Trx_LogHistory
     * const trx_LogHistory = await prisma.trx_LogHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends trx_LogHistoryFindFirstArgs>(args?: SelectSubset<T, trx_LogHistoryFindFirstArgs<ExtArgs>>): Prisma__trx_LogHistoryClient<$Result.GetResult<Prisma.$trx_LogHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trx_LogHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trx_LogHistoryFindFirstOrThrowArgs} args - Arguments to find a Trx_LogHistory
     * @example
     * // Get one Trx_LogHistory
     * const trx_LogHistory = await prisma.trx_LogHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends trx_LogHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, trx_LogHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__trx_LogHistoryClient<$Result.GetResult<Prisma.$trx_LogHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trx_LogHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trx_LogHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trx_LogHistories
     * const trx_LogHistories = await prisma.trx_LogHistory.findMany()
     * 
     * // Get first 10 Trx_LogHistories
     * const trx_LogHistories = await prisma.trx_LogHistory.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const trx_LogHistoryWithIDOnly = await prisma.trx_LogHistory.findMany({ select: { ID: true } })
     * 
     */
    findMany<T extends trx_LogHistoryFindManyArgs>(args?: SelectSubset<T, trx_LogHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trx_LogHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trx_LogHistory.
     * @param {trx_LogHistoryCreateArgs} args - Arguments to create a Trx_LogHistory.
     * @example
     * // Create one Trx_LogHistory
     * const Trx_LogHistory = await prisma.trx_LogHistory.create({
     *   data: {
     *     // ... data to create a Trx_LogHistory
     *   }
     * })
     * 
     */
    create<T extends trx_LogHistoryCreateArgs>(args: SelectSubset<T, trx_LogHistoryCreateArgs<ExtArgs>>): Prisma__trx_LogHistoryClient<$Result.GetResult<Prisma.$trx_LogHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trx_LogHistories.
     * @param {trx_LogHistoryCreateManyArgs} args - Arguments to create many Trx_LogHistories.
     * @example
     * // Create many Trx_LogHistories
     * const trx_LogHistory = await prisma.trx_LogHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends trx_LogHistoryCreateManyArgs>(args?: SelectSubset<T, trx_LogHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Trx_LogHistory.
     * @param {trx_LogHistoryDeleteArgs} args - Arguments to delete one Trx_LogHistory.
     * @example
     * // Delete one Trx_LogHistory
     * const Trx_LogHistory = await prisma.trx_LogHistory.delete({
     *   where: {
     *     // ... filter to delete one Trx_LogHistory
     *   }
     * })
     * 
     */
    delete<T extends trx_LogHistoryDeleteArgs>(args: SelectSubset<T, trx_LogHistoryDeleteArgs<ExtArgs>>): Prisma__trx_LogHistoryClient<$Result.GetResult<Prisma.$trx_LogHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trx_LogHistory.
     * @param {trx_LogHistoryUpdateArgs} args - Arguments to update one Trx_LogHistory.
     * @example
     * // Update one Trx_LogHistory
     * const trx_LogHistory = await prisma.trx_LogHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends trx_LogHistoryUpdateArgs>(args: SelectSubset<T, trx_LogHistoryUpdateArgs<ExtArgs>>): Prisma__trx_LogHistoryClient<$Result.GetResult<Prisma.$trx_LogHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trx_LogHistories.
     * @param {trx_LogHistoryDeleteManyArgs} args - Arguments to filter Trx_LogHistories to delete.
     * @example
     * // Delete a few Trx_LogHistories
     * const { count } = await prisma.trx_LogHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends trx_LogHistoryDeleteManyArgs>(args?: SelectSubset<T, trx_LogHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trx_LogHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trx_LogHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trx_LogHistories
     * const trx_LogHistory = await prisma.trx_LogHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends trx_LogHistoryUpdateManyArgs>(args: SelectSubset<T, trx_LogHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Trx_LogHistory.
     * @param {trx_LogHistoryUpsertArgs} args - Arguments to update or create a Trx_LogHistory.
     * @example
     * // Update or create a Trx_LogHistory
     * const trx_LogHistory = await prisma.trx_LogHistory.upsert({
     *   create: {
     *     // ... data to create a Trx_LogHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trx_LogHistory we want to update
     *   }
     * })
     */
    upsert<T extends trx_LogHistoryUpsertArgs>(args: SelectSubset<T, trx_LogHistoryUpsertArgs<ExtArgs>>): Prisma__trx_LogHistoryClient<$Result.GetResult<Prisma.$trx_LogHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trx_LogHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trx_LogHistoryCountArgs} args - Arguments to filter Trx_LogHistories to count.
     * @example
     * // Count the number of Trx_LogHistories
     * const count = await prisma.trx_LogHistory.count({
     *   where: {
     *     // ... the filter for the Trx_LogHistories we want to count
     *   }
     * })
    **/
    count<T extends trx_LogHistoryCountArgs>(
      args?: Subset<T, trx_LogHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Trx_LogHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trx_LogHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Trx_LogHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Trx_LogHistoryAggregateArgs>(args: Subset<T, Trx_LogHistoryAggregateArgs>): Prisma.PrismaPromise<GetTrx_LogHistoryAggregateType<T>>

    /**
     * Group by Trx_LogHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trx_LogHistoryGroupByArgs} args - Group by arguments.
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
      T extends trx_LogHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: trx_LogHistoryGroupByArgs['orderBy'] }
        : { orderBy?: trx_LogHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, trx_LogHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrx_LogHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the trx_LogHistory model
   */
  readonly fields: trx_LogHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for trx_LogHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__trx_LogHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pic_ba<T extends trx_LogHistory$pic_baArgs<ExtArgs> = {}>(args?: Subset<T, trx_LogHistory$pic_baArgs<ExtArgs>>): Prisma__ms_usersClient<$Result.GetResult<Prisma.$ms_usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pic_user<T extends trx_LogHistory$pic_userArgs<ExtArgs> = {}>(args?: Subset<T, trx_LogHistory$pic_userArgs<ExtArgs>>): Prisma__ms_usersClient<$Result.GetResult<Prisma.$ms_usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    trx_PICA<T extends trx_LogHistory$trx_PICAArgs<ExtArgs> = {}>(args?: Subset<T, trx_LogHistory$trx_PICAArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trx_PICAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the trx_LogHistory model
   */
  interface trx_LogHistoryFieldRefs {
    readonly ID: FieldRef<"trx_LogHistory", 'Int'>
    readonly UnitSerialNumber: FieldRef<"trx_LogHistory", 'String'>
    readonly SalesDocument: FieldRef<"trx_LogHistory", 'Int'>
    readonly DocumentNumber: FieldRef<"trx_LogHistory", 'Int'>
    readonly POID: FieldRef<"trx_LogHistory", 'Int'>
    readonly PROID: FieldRef<"trx_LogHistory", 'Int'>
    readonly Description: FieldRef<"trx_LogHistory", 'String'>
    readonly IncidentType: FieldRef<"trx_LogHistory", 'String'>
    readonly PICBA: FieldRef<"trx_LogHistory", 'Int'>
    readonly BAEmailDate: FieldRef<"trx_LogHistory", 'DateTime'>
    readonly BAEmailStatus: FieldRef<"trx_LogHistory", 'String'>
    readonly PICUser: FieldRef<"trx_LogHistory", 'Int'>
    readonly UserEmailDate: FieldRef<"trx_LogHistory", 'DateTime'>
    readonly UserEmailStatus: FieldRef<"trx_LogHistory", 'String'>
    readonly OpenDate: FieldRef<"trx_LogHistory", 'DateTime'>
    readonly CloseDate: FieldRef<"trx_LogHistory", 'DateTime'>
    readonly FeedbackBA: FieldRef<"trx_LogHistory", 'String'>
    readonly FeedbackBADate: FieldRef<"trx_LogHistory", 'DateTime'>
    readonly FeedbackUser: FieldRef<"trx_LogHistory", 'String'>
    readonly FeedbackUserDate: FieldRef<"trx_LogHistory", 'DateTime'>
    readonly FlagStatus: FieldRef<"trx_LogHistory", 'Int'>
    readonly Status: FieldRef<"trx_LogHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * trx_LogHistory findUnique
   */
  export type trx_LogHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_LogHistory
     */
    select?: trx_LogHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the trx_LogHistory
     */
    omit?: trx_LogHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trx_LogHistoryInclude<ExtArgs> | null
    /**
     * Filter, which trx_LogHistory to fetch.
     */
    where: trx_LogHistoryWhereUniqueInput
  }

  /**
   * trx_LogHistory findUniqueOrThrow
   */
  export type trx_LogHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_LogHistory
     */
    select?: trx_LogHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the trx_LogHistory
     */
    omit?: trx_LogHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trx_LogHistoryInclude<ExtArgs> | null
    /**
     * Filter, which trx_LogHistory to fetch.
     */
    where: trx_LogHistoryWhereUniqueInput
  }

  /**
   * trx_LogHistory findFirst
   */
  export type trx_LogHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_LogHistory
     */
    select?: trx_LogHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the trx_LogHistory
     */
    omit?: trx_LogHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trx_LogHistoryInclude<ExtArgs> | null
    /**
     * Filter, which trx_LogHistory to fetch.
     */
    where?: trx_LogHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trx_LogHistories to fetch.
     */
    orderBy?: trx_LogHistoryOrderByWithRelationInput | trx_LogHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trx_LogHistories.
     */
    cursor?: trx_LogHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trx_LogHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trx_LogHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trx_LogHistories.
     */
    distinct?: Trx_LogHistoryScalarFieldEnum | Trx_LogHistoryScalarFieldEnum[]
  }

  /**
   * trx_LogHistory findFirstOrThrow
   */
  export type trx_LogHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_LogHistory
     */
    select?: trx_LogHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the trx_LogHistory
     */
    omit?: trx_LogHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trx_LogHistoryInclude<ExtArgs> | null
    /**
     * Filter, which trx_LogHistory to fetch.
     */
    where?: trx_LogHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trx_LogHistories to fetch.
     */
    orderBy?: trx_LogHistoryOrderByWithRelationInput | trx_LogHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trx_LogHistories.
     */
    cursor?: trx_LogHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trx_LogHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trx_LogHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trx_LogHistories.
     */
    distinct?: Trx_LogHistoryScalarFieldEnum | Trx_LogHistoryScalarFieldEnum[]
  }

  /**
   * trx_LogHistory findMany
   */
  export type trx_LogHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_LogHistory
     */
    select?: trx_LogHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the trx_LogHistory
     */
    omit?: trx_LogHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trx_LogHistoryInclude<ExtArgs> | null
    /**
     * Filter, which trx_LogHistories to fetch.
     */
    where?: trx_LogHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trx_LogHistories to fetch.
     */
    orderBy?: trx_LogHistoryOrderByWithRelationInput | trx_LogHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing trx_LogHistories.
     */
    cursor?: trx_LogHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trx_LogHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trx_LogHistories.
     */
    skip?: number
    distinct?: Trx_LogHistoryScalarFieldEnum | Trx_LogHistoryScalarFieldEnum[]
  }

  /**
   * trx_LogHistory create
   */
  export type trx_LogHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_LogHistory
     */
    select?: trx_LogHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the trx_LogHistory
     */
    omit?: trx_LogHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trx_LogHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a trx_LogHistory.
     */
    data?: XOR<trx_LogHistoryCreateInput, trx_LogHistoryUncheckedCreateInput>
  }

  /**
   * trx_LogHistory createMany
   */
  export type trx_LogHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many trx_LogHistories.
     */
    data: trx_LogHistoryCreateManyInput | trx_LogHistoryCreateManyInput[]
  }

  /**
   * trx_LogHistory update
   */
  export type trx_LogHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_LogHistory
     */
    select?: trx_LogHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the trx_LogHistory
     */
    omit?: trx_LogHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trx_LogHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a trx_LogHistory.
     */
    data: XOR<trx_LogHistoryUpdateInput, trx_LogHistoryUncheckedUpdateInput>
    /**
     * Choose, which trx_LogHistory to update.
     */
    where: trx_LogHistoryWhereUniqueInput
  }

  /**
   * trx_LogHistory updateMany
   */
  export type trx_LogHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update trx_LogHistories.
     */
    data: XOR<trx_LogHistoryUpdateManyMutationInput, trx_LogHistoryUncheckedUpdateManyInput>
    /**
     * Filter which trx_LogHistories to update
     */
    where?: trx_LogHistoryWhereInput
    /**
     * Limit how many trx_LogHistories to update.
     */
    limit?: number
  }

  /**
   * trx_LogHistory upsert
   */
  export type trx_LogHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_LogHistory
     */
    select?: trx_LogHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the trx_LogHistory
     */
    omit?: trx_LogHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trx_LogHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the trx_LogHistory to update in case it exists.
     */
    where: trx_LogHistoryWhereUniqueInput
    /**
     * In case the trx_LogHistory found by the `where` argument doesn't exist, create a new trx_LogHistory with this data.
     */
    create: XOR<trx_LogHistoryCreateInput, trx_LogHistoryUncheckedCreateInput>
    /**
     * In case the trx_LogHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<trx_LogHistoryUpdateInput, trx_LogHistoryUncheckedUpdateInput>
  }

  /**
   * trx_LogHistory delete
   */
  export type trx_LogHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_LogHistory
     */
    select?: trx_LogHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the trx_LogHistory
     */
    omit?: trx_LogHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trx_LogHistoryInclude<ExtArgs> | null
    /**
     * Filter which trx_LogHistory to delete.
     */
    where: trx_LogHistoryWhereUniqueInput
  }

  /**
   * trx_LogHistory deleteMany
   */
  export type trx_LogHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trx_LogHistories to delete
     */
    where?: trx_LogHistoryWhereInput
    /**
     * Limit how many trx_LogHistories to delete.
     */
    limit?: number
  }

  /**
   * trx_LogHistory.pic_ba
   */
  export type trx_LogHistory$pic_baArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ms_users
     */
    select?: ms_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ms_users
     */
    omit?: ms_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ms_usersInclude<ExtArgs> | null
    where?: ms_usersWhereInput
  }

  /**
   * trx_LogHistory.pic_user
   */
  export type trx_LogHistory$pic_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ms_users
     */
    select?: ms_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ms_users
     */
    omit?: ms_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ms_usersInclude<ExtArgs> | null
    where?: ms_usersWhereInput
  }

  /**
   * trx_LogHistory.trx_PICA
   */
  export type trx_LogHistory$trx_PICAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_PICA
     */
    select?: trx_PICASelect<ExtArgs> | null
    /**
     * Omit specific fields from the trx_PICA
     */
    omit?: trx_PICAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trx_PICAInclude<ExtArgs> | null
    where?: trx_PICAWhereInput
    orderBy?: trx_PICAOrderByWithRelationInput | trx_PICAOrderByWithRelationInput[]
    cursor?: trx_PICAWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Trx_PICAScalarFieldEnum | Trx_PICAScalarFieldEnum[]
  }

  /**
   * trx_LogHistory without action
   */
  export type trx_LogHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trx_LogHistory
     */
    select?: trx_LogHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the trx_LogHistory
     */
    omit?: trx_LogHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trx_LogHistoryInclude<ExtArgs> | null
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


  export const DataFBL5NScalarFieldEnum: {
    ID: 'ID',
    GLAccount: 'GLAccount',
    Reference: 'Reference',
    Assignment: 'Assignment',
    DocumentNumber: 'DocumentNumber',
    DocumentType: 'DocumentType',
    PostingDate: 'PostingDate',
    ClearingDate: 'ClearingDate',
    DocumentDate: 'DocumentDate',
    NetDueDate: 'NetDueDate',
    SpecialGLInd: 'SpecialGLInd',
    BusinessArea: 'BusinessArea',
    Plant: 'Plant',
    ProfitCenter: 'ProfitCenter',
    Account: 'Account',
    CustomerName: 'CustomerName',
    AmountDocCurr: 'AmountDocCurr',
    DocumentCurrency: 'DocumentCurrency',
    AmountLocalCurrency: 'AmountLocalCurrency',
    LocalCurrency: 'LocalCurrency',
    ReverseClearing: 'ReverseClearing',
    PostingKey: 'PostingKey',
    DebitCreditInd: 'DebitCreditInd',
    ClearingDocument: 'ClearingDocument',
    Username: 'Username',
    Text: 'Text',
    CompanyCode: 'CompanyCode',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type DataFBL5NScalarFieldEnum = (typeof DataFBL5NScalarFieldEnum)[keyof typeof DataFBL5NScalarFieldEnum]


  export const DataVF04ScalarFieldEnum: {
    ID: 'ID',
    BillCategory: 'BillCategory',
    SalesOrg: 'SalesOrg',
    BillDate: 'BillDate',
    SoldToParty: 'SoldToParty',
    BillType: 'BillType',
    Country: 'Country',
    SalesDocument: 'SalesDocument',
    DistributionChannel: 'DistributionChannel',
    Division: 'Division',
    DocCategory: 'DocCategory',
    Address: 'Address',
    NameSoldToParty: 'NameSoldToParty',
    LocSoldToParty: 'LocSoldToParty',
    SortTerm: 'SortTerm',
    ItemsRead: 'ItemsRead',
    Counter: 'Counter',
    ShippingPoint: 'ShippingPoint',
    PODStatus: 'PODStatus',
    NetValue: 'NetValue',
    DocCurrency: 'DocCurrency',
    SDDocumentType: 'SDDocumentType',
    NameSDType: 'NameSDType',
    BDRSrcDoc: 'BDRSrcDoc',
    RefSys: 'RefSys',
    DraftMode: 'DraftMode',
    DBDRef: 'DBDRef',
    SolutionOrder: 'SolutionOrder',
    BillDate2: 'BillDate2',
    BillType2: 'BillType2',
    Groups: 'Groups',
    PONumber: 'PONumber',
    ShippingPointDesc: 'ShippingPointDesc',
    SOPOAmount: 'SOPOAmount',
    Exrate: 'Exrate',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type DataVF04ScalarFieldEnum = (typeof DataVF04ScalarFieldEnum)[keyof typeof DataVF04ScalarFieldEnum]


  export const ExcelBaseUrlScalarFieldEnum: {
    id: 'id',
    guid: 'guid',
    excelName: 'excelName',
    url: 'url',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ExcelBaseUrlScalarFieldEnum = (typeof ExcelBaseUrlScalarFieldEnum)[keyof typeof ExcelBaseUrlScalarFieldEnum]


  export const ExcelSheetScalarFieldEnum: {
    id: 'id',
    guid: 'guid',
    sheetName: 'sheetName',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ExcelSheetScalarFieldEnum = (typeof ExcelSheetScalarFieldEnum)[keyof typeof ExcelSheetScalarFieldEnum]


  export const LogScalarFieldEnum: {
    id: 'id',
    guid: 'guid',
    name: 'name',
    type: 'type',
    row: 'row',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type LogScalarFieldEnum = (typeof LogScalarFieldEnum)[keyof typeof LogScalarFieldEnum]


  export const Ms_usersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    password: 'password',
    divisi: 'divisi',
    departemen: 'departemen',
    email: 'email',
    role: 'role',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Ms_usersScalarFieldEnum = (typeof Ms_usersScalarFieldEnum)[keyof typeof Ms_usersScalarFieldEnum]


  export const Schedule_RecommendationScalarFieldEnum: {
    PN: 'PN',
    PRO: 'PRO',
    Product: 'Product',
    ProductGroup: 'ProductGroup',
    Process: 'Process',
    Dependency: 'Dependency',
    Maksimal_Produksi_per_Base: 'Maksimal_Produksi_per_Base',
    ProcessOrder: 'ProcessOrder',
    PlanStartDate: 'PlanStartDate',
    PlanEndDate: 'PlanEndDate',
    Start_Date: 'Start_Date',
    End_Date: 'End_Date',
    Estimated_Material_Arrived: 'Estimated_Material_Arrived',
    Lead_Time_Process_Standar: 'Lead_Time_Process_Standar',
    Lead_Time_Estimation_Process: 'Lead_Time_Estimation_Process',
    Process_Status: 'Process_Status',
    MPSDueDate: 'MPSDueDate',
    Finished_Prediction: 'Finished_Prediction',
    Status_Unit_Delivery: 'Status_Unit_Delivery',
    Capacity_Utilization: 'Capacity_Utilization',
    Status_Capacity: 'Status_Capacity',
    Status_Material: 'Status_Material'
  };

  export type Schedule_RecommendationScalarFieldEnum = (typeof Schedule_RecommendationScalarFieldEnum)[keyof typeof Schedule_RecommendationScalarFieldEnum]


  export const SiteRouteScalarFieldEnum: {
    id: 'id',
    guid: 'guid',
    baseUrl: 'baseUrl',
    siteName: 'siteName',
    url: 'url',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SiteRouteScalarFieldEnum = (typeof SiteRouteScalarFieldEnum)[keyof typeof SiteRouteScalarFieldEnum]


  export const SysdiagramsScalarFieldEnum: {
    name: 'name',
    principal_id: 'principal_id',
    diagram_id: 'diagram_id',
    version: 'version',
    definition: 'definition'
  };

  export type SysdiagramsScalarFieldEnum = (typeof SysdiagramsScalarFieldEnum)[keyof typeof SysdiagramsScalarFieldEnum]


  export const Trx_PICAScalarFieldEnum: {
    PICAID: 'PICAID',
    IncidentID: 'IncidentID',
    created_at: 'created_at',
    created_by: 'created_by',
    update_at: 'update_at',
    update_by: 'update_by'
  };

  export type Trx_PICAScalarFieldEnum = (typeof Trx_PICAScalarFieldEnum)[keyof typeof Trx_PICAScalarFieldEnum]


  export const Trx_DetailPICAScalarFieldEnum: {
    DetailPICAID: 'DetailPICAID',
    PICAID: 'PICAID',
    Status: 'Status',
    Problem: 'Problem',
    RootCaused: 'RootCaused',
    CorrectiveAction: 'CorrectiveAction',
    PreventiveAction: 'PreventiveAction'
  };

  export type Trx_DetailPICAScalarFieldEnum = (typeof Trx_DetailPICAScalarFieldEnum)[keyof typeof Trx_DetailPICAScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    guid: 'guid',
    name: 'name',
    username: 'username',
    password: 'password',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Trx_LogHistoryScalarFieldEnum: {
    ID: 'ID',
    UnitSerialNumber: 'UnitSerialNumber',
    SalesDocument: 'SalesDocument',
    DocumentNumber: 'DocumentNumber',
    POID: 'POID',
    PROID: 'PROID',
    Description: 'Description',
    IncidentType: 'IncidentType',
    PICBA: 'PICBA',
    BAEmailDate: 'BAEmailDate',
    BAEmailStatus: 'BAEmailStatus',
    PICUser: 'PICUser',
    UserEmailDate: 'UserEmailDate',
    UserEmailStatus: 'UserEmailStatus',
    OpenDate: 'OpenDate',
    CloseDate: 'CloseDate',
    FeedbackBA: 'FeedbackBA',
    FeedbackBADate: 'FeedbackBADate',
    FeedbackUser: 'FeedbackUser',
    FeedbackUserDate: 'FeedbackUserDate',
    FlagStatus: 'FlagStatus',
    Status: 'Status'
  };

  export type Trx_LogHistoryScalarFieldEnum = (typeof Trx_LogHistoryScalarFieldEnum)[keyof typeof Trx_LogHistoryScalarFieldEnum]


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
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    
  /**
   * Deep Input Types
   */


  export type DataFBL5NWhereInput = {
    AND?: DataFBL5NWhereInput | DataFBL5NWhereInput[]
    OR?: DataFBL5NWhereInput[]
    NOT?: DataFBL5NWhereInput | DataFBL5NWhereInput[]
    ID?: BigIntFilter<"DataFBL5N"> | bigint | number
    GLAccount?: StringNullableFilter<"DataFBL5N"> | string | null
    Reference?: StringNullableFilter<"DataFBL5N"> | string | null
    Assignment?: StringNullableFilter<"DataFBL5N"> | string | null
    DocumentNumber?: StringNullableFilter<"DataFBL5N"> | string | null
    DocumentType?: StringNullableFilter<"DataFBL5N"> | string | null
    PostingDate?: DateTimeNullableFilter<"DataFBL5N"> | Date | string | null
    ClearingDate?: DateTimeNullableFilter<"DataFBL5N"> | Date | string | null
    DocumentDate?: DateTimeNullableFilter<"DataFBL5N"> | Date | string | null
    NetDueDate?: DateTimeNullableFilter<"DataFBL5N"> | Date | string | null
    SpecialGLInd?: StringNullableFilter<"DataFBL5N"> | string | null
    BusinessArea?: StringNullableFilter<"DataFBL5N"> | string | null
    Plant?: StringNullableFilter<"DataFBL5N"> | string | null
    ProfitCenter?: StringNullableFilter<"DataFBL5N"> | string | null
    Account?: StringNullableFilter<"DataFBL5N"> | string | null
    CustomerName?: StringNullableFilter<"DataFBL5N"> | string | null
    AmountDocCurr?: FloatNullableFilter<"DataFBL5N"> | number | null
    DocumentCurrency?: StringNullableFilter<"DataFBL5N"> | string | null
    AmountLocalCurrency?: FloatNullableFilter<"DataFBL5N"> | number | null
    LocalCurrency?: StringNullableFilter<"DataFBL5N"> | string | null
    ReverseClearing?: StringNullableFilter<"DataFBL5N"> | string | null
    PostingKey?: StringNullableFilter<"DataFBL5N"> | string | null
    DebitCreditInd?: StringNullableFilter<"DataFBL5N"> | string | null
    ClearingDocument?: StringNullableFilter<"DataFBL5N"> | string | null
    Username?: StringNullableFilter<"DataFBL5N"> | string | null
    Text?: StringNullableFilter<"DataFBL5N"> | string | null
    CompanyCode?: StringNullableFilter<"DataFBL5N"> | string | null
    created_at?: DateTimeNullableFilter<"DataFBL5N"> | Date | string | null
    updated_at?: DateTimeFilter<"DataFBL5N"> | Date | string
  }

  export type DataFBL5NOrderByWithRelationInput = {
    ID?: SortOrder
    GLAccount?: SortOrderInput | SortOrder
    Reference?: SortOrderInput | SortOrder
    Assignment?: SortOrderInput | SortOrder
    DocumentNumber?: SortOrderInput | SortOrder
    DocumentType?: SortOrderInput | SortOrder
    PostingDate?: SortOrderInput | SortOrder
    ClearingDate?: SortOrderInput | SortOrder
    DocumentDate?: SortOrderInput | SortOrder
    NetDueDate?: SortOrderInput | SortOrder
    SpecialGLInd?: SortOrderInput | SortOrder
    BusinessArea?: SortOrderInput | SortOrder
    Plant?: SortOrderInput | SortOrder
    ProfitCenter?: SortOrderInput | SortOrder
    Account?: SortOrderInput | SortOrder
    CustomerName?: SortOrderInput | SortOrder
    AmountDocCurr?: SortOrderInput | SortOrder
    DocumentCurrency?: SortOrderInput | SortOrder
    AmountLocalCurrency?: SortOrderInput | SortOrder
    LocalCurrency?: SortOrderInput | SortOrder
    ReverseClearing?: SortOrderInput | SortOrder
    PostingKey?: SortOrderInput | SortOrder
    DebitCreditInd?: SortOrderInput | SortOrder
    ClearingDocument?: SortOrderInput | SortOrder
    Username?: SortOrderInput | SortOrder
    Text?: SortOrderInput | SortOrder
    CompanyCode?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrder
  }

  export type DataFBL5NWhereUniqueInput = Prisma.AtLeast<{
    ID?: bigint | number
    AND?: DataFBL5NWhereInput | DataFBL5NWhereInput[]
    OR?: DataFBL5NWhereInput[]
    NOT?: DataFBL5NWhereInput | DataFBL5NWhereInput[]
    GLAccount?: StringNullableFilter<"DataFBL5N"> | string | null
    Reference?: StringNullableFilter<"DataFBL5N"> | string | null
    Assignment?: StringNullableFilter<"DataFBL5N"> | string | null
    DocumentNumber?: StringNullableFilter<"DataFBL5N"> | string | null
    DocumentType?: StringNullableFilter<"DataFBL5N"> | string | null
    PostingDate?: DateTimeNullableFilter<"DataFBL5N"> | Date | string | null
    ClearingDate?: DateTimeNullableFilter<"DataFBL5N"> | Date | string | null
    DocumentDate?: DateTimeNullableFilter<"DataFBL5N"> | Date | string | null
    NetDueDate?: DateTimeNullableFilter<"DataFBL5N"> | Date | string | null
    SpecialGLInd?: StringNullableFilter<"DataFBL5N"> | string | null
    BusinessArea?: StringNullableFilter<"DataFBL5N"> | string | null
    Plant?: StringNullableFilter<"DataFBL5N"> | string | null
    ProfitCenter?: StringNullableFilter<"DataFBL5N"> | string | null
    Account?: StringNullableFilter<"DataFBL5N"> | string | null
    CustomerName?: StringNullableFilter<"DataFBL5N"> | string | null
    AmountDocCurr?: FloatNullableFilter<"DataFBL5N"> | number | null
    DocumentCurrency?: StringNullableFilter<"DataFBL5N"> | string | null
    AmountLocalCurrency?: FloatNullableFilter<"DataFBL5N"> | number | null
    LocalCurrency?: StringNullableFilter<"DataFBL5N"> | string | null
    ReverseClearing?: StringNullableFilter<"DataFBL5N"> | string | null
    PostingKey?: StringNullableFilter<"DataFBL5N"> | string | null
    DebitCreditInd?: StringNullableFilter<"DataFBL5N"> | string | null
    ClearingDocument?: StringNullableFilter<"DataFBL5N"> | string | null
    Username?: StringNullableFilter<"DataFBL5N"> | string | null
    Text?: StringNullableFilter<"DataFBL5N"> | string | null
    CompanyCode?: StringNullableFilter<"DataFBL5N"> | string | null
    created_at?: DateTimeNullableFilter<"DataFBL5N"> | Date | string | null
    updated_at?: DateTimeFilter<"DataFBL5N"> | Date | string
  }, "ID">

  export type DataFBL5NOrderByWithAggregationInput = {
    ID?: SortOrder
    GLAccount?: SortOrderInput | SortOrder
    Reference?: SortOrderInput | SortOrder
    Assignment?: SortOrderInput | SortOrder
    DocumentNumber?: SortOrderInput | SortOrder
    DocumentType?: SortOrderInput | SortOrder
    PostingDate?: SortOrderInput | SortOrder
    ClearingDate?: SortOrderInput | SortOrder
    DocumentDate?: SortOrderInput | SortOrder
    NetDueDate?: SortOrderInput | SortOrder
    SpecialGLInd?: SortOrderInput | SortOrder
    BusinessArea?: SortOrderInput | SortOrder
    Plant?: SortOrderInput | SortOrder
    ProfitCenter?: SortOrderInput | SortOrder
    Account?: SortOrderInput | SortOrder
    CustomerName?: SortOrderInput | SortOrder
    AmountDocCurr?: SortOrderInput | SortOrder
    DocumentCurrency?: SortOrderInput | SortOrder
    AmountLocalCurrency?: SortOrderInput | SortOrder
    LocalCurrency?: SortOrderInput | SortOrder
    ReverseClearing?: SortOrderInput | SortOrder
    PostingKey?: SortOrderInput | SortOrder
    DebitCreditInd?: SortOrderInput | SortOrder
    ClearingDocument?: SortOrderInput | SortOrder
    Username?: SortOrderInput | SortOrder
    Text?: SortOrderInput | SortOrder
    CompanyCode?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    _count?: DataFBL5NCountOrderByAggregateInput
    _avg?: DataFBL5NAvgOrderByAggregateInput
    _max?: DataFBL5NMaxOrderByAggregateInput
    _min?: DataFBL5NMinOrderByAggregateInput
    _sum?: DataFBL5NSumOrderByAggregateInput
  }

  export type DataFBL5NScalarWhereWithAggregatesInput = {
    AND?: DataFBL5NScalarWhereWithAggregatesInput | DataFBL5NScalarWhereWithAggregatesInput[]
    OR?: DataFBL5NScalarWhereWithAggregatesInput[]
    NOT?: DataFBL5NScalarWhereWithAggregatesInput | DataFBL5NScalarWhereWithAggregatesInput[]
    ID?: BigIntWithAggregatesFilter<"DataFBL5N"> | bigint | number
    GLAccount?: StringNullableWithAggregatesFilter<"DataFBL5N"> | string | null
    Reference?: StringNullableWithAggregatesFilter<"DataFBL5N"> | string | null
    Assignment?: StringNullableWithAggregatesFilter<"DataFBL5N"> | string | null
    DocumentNumber?: StringNullableWithAggregatesFilter<"DataFBL5N"> | string | null
    DocumentType?: StringNullableWithAggregatesFilter<"DataFBL5N"> | string | null
    PostingDate?: DateTimeNullableWithAggregatesFilter<"DataFBL5N"> | Date | string | null
    ClearingDate?: DateTimeNullableWithAggregatesFilter<"DataFBL5N"> | Date | string | null
    DocumentDate?: DateTimeNullableWithAggregatesFilter<"DataFBL5N"> | Date | string | null
    NetDueDate?: DateTimeNullableWithAggregatesFilter<"DataFBL5N"> | Date | string | null
    SpecialGLInd?: StringNullableWithAggregatesFilter<"DataFBL5N"> | string | null
    BusinessArea?: StringNullableWithAggregatesFilter<"DataFBL5N"> | string | null
    Plant?: StringNullableWithAggregatesFilter<"DataFBL5N"> | string | null
    ProfitCenter?: StringNullableWithAggregatesFilter<"DataFBL5N"> | string | null
    Account?: StringNullableWithAggregatesFilter<"DataFBL5N"> | string | null
    CustomerName?: StringNullableWithAggregatesFilter<"DataFBL5N"> | string | null
    AmountDocCurr?: FloatNullableWithAggregatesFilter<"DataFBL5N"> | number | null
    DocumentCurrency?: StringNullableWithAggregatesFilter<"DataFBL5N"> | string | null
    AmountLocalCurrency?: FloatNullableWithAggregatesFilter<"DataFBL5N"> | number | null
    LocalCurrency?: StringNullableWithAggregatesFilter<"DataFBL5N"> | string | null
    ReverseClearing?: StringNullableWithAggregatesFilter<"DataFBL5N"> | string | null
    PostingKey?: StringNullableWithAggregatesFilter<"DataFBL5N"> | string | null
    DebitCreditInd?: StringNullableWithAggregatesFilter<"DataFBL5N"> | string | null
    ClearingDocument?: StringNullableWithAggregatesFilter<"DataFBL5N"> | string | null
    Username?: StringNullableWithAggregatesFilter<"DataFBL5N"> | string | null
    Text?: StringNullableWithAggregatesFilter<"DataFBL5N"> | string | null
    CompanyCode?: StringNullableWithAggregatesFilter<"DataFBL5N"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"DataFBL5N"> | Date | string | null
    updated_at?: DateTimeWithAggregatesFilter<"DataFBL5N"> | Date | string
  }

  export type DataVF04WhereInput = {
    AND?: DataVF04WhereInput | DataVF04WhereInput[]
    OR?: DataVF04WhereInput[]
    NOT?: DataVF04WhereInput | DataVF04WhereInput[]
    ID?: BigIntFilter<"DataVF04"> | bigint | number
    BillCategory?: StringNullableFilter<"DataVF04"> | string | null
    SalesOrg?: BigIntNullableFilter<"DataVF04"> | bigint | number | null
    BillDate?: DateTimeNullableFilter<"DataVF04"> | Date | string | null
    SoldToParty?: StringNullableFilter<"DataVF04"> | string | null
    BillType?: StringNullableFilter<"DataVF04"> | string | null
    Country?: StringNullableFilter<"DataVF04"> | string | null
    SalesDocument?: BigIntNullableFilter<"DataVF04"> | bigint | number | null
    DistributionChannel?: BigIntNullableFilter<"DataVF04"> | bigint | number | null
    Division?: BigIntNullableFilter<"DataVF04"> | bigint | number | null
    DocCategory?: StringNullableFilter<"DataVF04"> | string | null
    Address?: BigIntNullableFilter<"DataVF04"> | bigint | number | null
    NameSoldToParty?: StringNullableFilter<"DataVF04"> | string | null
    LocSoldToParty?: StringNullableFilter<"DataVF04"> | string | null
    SortTerm?: StringNullableFilter<"DataVF04"> | string | null
    ItemsRead?: StringNullableFilter<"DataVF04"> | string | null
    Counter?: StringNullableFilter<"DataVF04"> | string | null
    ShippingPoint?: StringNullableFilter<"DataVF04"> | string | null
    PODStatus?: StringNullableFilter<"DataVF04"> | string | null
    NetValue?: StringNullableFilter<"DataVF04"> | string | null
    DocCurrency?: StringNullableFilter<"DataVF04"> | string | null
    SDDocumentType?: StringNullableFilter<"DataVF04"> | string | null
    NameSDType?: StringNullableFilter<"DataVF04"> | string | null
    BDRSrcDoc?: StringNullableFilter<"DataVF04"> | string | null
    RefSys?: StringNullableFilter<"DataVF04"> | string | null
    DraftMode?: StringNullableFilter<"DataVF04"> | string | null
    DBDRef?: StringNullableFilter<"DataVF04"> | string | null
    SolutionOrder?: StringNullableFilter<"DataVF04"> | string | null
    BillDate2?: DateTimeNullableFilter<"DataVF04"> | Date | string | null
    BillType2?: StringNullableFilter<"DataVF04"> | string | null
    Groups?: StringNullableFilter<"DataVF04"> | string | null
    PONumber?: StringNullableFilter<"DataVF04"> | string | null
    ShippingPointDesc?: StringNullableFilter<"DataVF04"> | string | null
    SOPOAmount?: FloatNullableFilter<"DataVF04"> | number | null
    Exrate?: FloatNullableFilter<"DataVF04"> | number | null
    created_at?: DateTimeNullableFilter<"DataVF04"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"DataVF04"> | Date | string | null
  }

  export type DataVF04OrderByWithRelationInput = {
    ID?: SortOrder
    BillCategory?: SortOrderInput | SortOrder
    SalesOrg?: SortOrderInput | SortOrder
    BillDate?: SortOrderInput | SortOrder
    SoldToParty?: SortOrderInput | SortOrder
    BillType?: SortOrderInput | SortOrder
    Country?: SortOrderInput | SortOrder
    SalesDocument?: SortOrderInput | SortOrder
    DistributionChannel?: SortOrderInput | SortOrder
    Division?: SortOrderInput | SortOrder
    DocCategory?: SortOrderInput | SortOrder
    Address?: SortOrderInput | SortOrder
    NameSoldToParty?: SortOrderInput | SortOrder
    LocSoldToParty?: SortOrderInput | SortOrder
    SortTerm?: SortOrderInput | SortOrder
    ItemsRead?: SortOrderInput | SortOrder
    Counter?: SortOrderInput | SortOrder
    ShippingPoint?: SortOrderInput | SortOrder
    PODStatus?: SortOrderInput | SortOrder
    NetValue?: SortOrderInput | SortOrder
    DocCurrency?: SortOrderInput | SortOrder
    SDDocumentType?: SortOrderInput | SortOrder
    NameSDType?: SortOrderInput | SortOrder
    BDRSrcDoc?: SortOrderInput | SortOrder
    RefSys?: SortOrderInput | SortOrder
    DraftMode?: SortOrderInput | SortOrder
    DBDRef?: SortOrderInput | SortOrder
    SolutionOrder?: SortOrderInput | SortOrder
    BillDate2?: SortOrderInput | SortOrder
    BillType2?: SortOrderInput | SortOrder
    Groups?: SortOrderInput | SortOrder
    PONumber?: SortOrderInput | SortOrder
    ShippingPointDesc?: SortOrderInput | SortOrder
    SOPOAmount?: SortOrderInput | SortOrder
    Exrate?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type DataVF04WhereUniqueInput = Prisma.AtLeast<{
    ID?: bigint | number
    AND?: DataVF04WhereInput | DataVF04WhereInput[]
    OR?: DataVF04WhereInput[]
    NOT?: DataVF04WhereInput | DataVF04WhereInput[]
    BillCategory?: StringNullableFilter<"DataVF04"> | string | null
    SalesOrg?: BigIntNullableFilter<"DataVF04"> | bigint | number | null
    BillDate?: DateTimeNullableFilter<"DataVF04"> | Date | string | null
    SoldToParty?: StringNullableFilter<"DataVF04"> | string | null
    BillType?: StringNullableFilter<"DataVF04"> | string | null
    Country?: StringNullableFilter<"DataVF04"> | string | null
    SalesDocument?: BigIntNullableFilter<"DataVF04"> | bigint | number | null
    DistributionChannel?: BigIntNullableFilter<"DataVF04"> | bigint | number | null
    Division?: BigIntNullableFilter<"DataVF04"> | bigint | number | null
    DocCategory?: StringNullableFilter<"DataVF04"> | string | null
    Address?: BigIntNullableFilter<"DataVF04"> | bigint | number | null
    NameSoldToParty?: StringNullableFilter<"DataVF04"> | string | null
    LocSoldToParty?: StringNullableFilter<"DataVF04"> | string | null
    SortTerm?: StringNullableFilter<"DataVF04"> | string | null
    ItemsRead?: StringNullableFilter<"DataVF04"> | string | null
    Counter?: StringNullableFilter<"DataVF04"> | string | null
    ShippingPoint?: StringNullableFilter<"DataVF04"> | string | null
    PODStatus?: StringNullableFilter<"DataVF04"> | string | null
    NetValue?: StringNullableFilter<"DataVF04"> | string | null
    DocCurrency?: StringNullableFilter<"DataVF04"> | string | null
    SDDocumentType?: StringNullableFilter<"DataVF04"> | string | null
    NameSDType?: StringNullableFilter<"DataVF04"> | string | null
    BDRSrcDoc?: StringNullableFilter<"DataVF04"> | string | null
    RefSys?: StringNullableFilter<"DataVF04"> | string | null
    DraftMode?: StringNullableFilter<"DataVF04"> | string | null
    DBDRef?: StringNullableFilter<"DataVF04"> | string | null
    SolutionOrder?: StringNullableFilter<"DataVF04"> | string | null
    BillDate2?: DateTimeNullableFilter<"DataVF04"> | Date | string | null
    BillType2?: StringNullableFilter<"DataVF04"> | string | null
    Groups?: StringNullableFilter<"DataVF04"> | string | null
    PONumber?: StringNullableFilter<"DataVF04"> | string | null
    ShippingPointDesc?: StringNullableFilter<"DataVF04"> | string | null
    SOPOAmount?: FloatNullableFilter<"DataVF04"> | number | null
    Exrate?: FloatNullableFilter<"DataVF04"> | number | null
    created_at?: DateTimeNullableFilter<"DataVF04"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"DataVF04"> | Date | string | null
  }, "ID">

  export type DataVF04OrderByWithAggregationInput = {
    ID?: SortOrder
    BillCategory?: SortOrderInput | SortOrder
    SalesOrg?: SortOrderInput | SortOrder
    BillDate?: SortOrderInput | SortOrder
    SoldToParty?: SortOrderInput | SortOrder
    BillType?: SortOrderInput | SortOrder
    Country?: SortOrderInput | SortOrder
    SalesDocument?: SortOrderInput | SortOrder
    DistributionChannel?: SortOrderInput | SortOrder
    Division?: SortOrderInput | SortOrder
    DocCategory?: SortOrderInput | SortOrder
    Address?: SortOrderInput | SortOrder
    NameSoldToParty?: SortOrderInput | SortOrder
    LocSoldToParty?: SortOrderInput | SortOrder
    SortTerm?: SortOrderInput | SortOrder
    ItemsRead?: SortOrderInput | SortOrder
    Counter?: SortOrderInput | SortOrder
    ShippingPoint?: SortOrderInput | SortOrder
    PODStatus?: SortOrderInput | SortOrder
    NetValue?: SortOrderInput | SortOrder
    DocCurrency?: SortOrderInput | SortOrder
    SDDocumentType?: SortOrderInput | SortOrder
    NameSDType?: SortOrderInput | SortOrder
    BDRSrcDoc?: SortOrderInput | SortOrder
    RefSys?: SortOrderInput | SortOrder
    DraftMode?: SortOrderInput | SortOrder
    DBDRef?: SortOrderInput | SortOrder
    SolutionOrder?: SortOrderInput | SortOrder
    BillDate2?: SortOrderInput | SortOrder
    BillType2?: SortOrderInput | SortOrder
    Groups?: SortOrderInput | SortOrder
    PONumber?: SortOrderInput | SortOrder
    ShippingPointDesc?: SortOrderInput | SortOrder
    SOPOAmount?: SortOrderInput | SortOrder
    Exrate?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: DataVF04CountOrderByAggregateInput
    _avg?: DataVF04AvgOrderByAggregateInput
    _max?: DataVF04MaxOrderByAggregateInput
    _min?: DataVF04MinOrderByAggregateInput
    _sum?: DataVF04SumOrderByAggregateInput
  }

  export type DataVF04ScalarWhereWithAggregatesInput = {
    AND?: DataVF04ScalarWhereWithAggregatesInput | DataVF04ScalarWhereWithAggregatesInput[]
    OR?: DataVF04ScalarWhereWithAggregatesInput[]
    NOT?: DataVF04ScalarWhereWithAggregatesInput | DataVF04ScalarWhereWithAggregatesInput[]
    ID?: BigIntWithAggregatesFilter<"DataVF04"> | bigint | number
    BillCategory?: StringNullableWithAggregatesFilter<"DataVF04"> | string | null
    SalesOrg?: BigIntNullableWithAggregatesFilter<"DataVF04"> | bigint | number | null
    BillDate?: DateTimeNullableWithAggregatesFilter<"DataVF04"> | Date | string | null
    SoldToParty?: StringNullableWithAggregatesFilter<"DataVF04"> | string | null
    BillType?: StringNullableWithAggregatesFilter<"DataVF04"> | string | null
    Country?: StringNullableWithAggregatesFilter<"DataVF04"> | string | null
    SalesDocument?: BigIntNullableWithAggregatesFilter<"DataVF04"> | bigint | number | null
    DistributionChannel?: BigIntNullableWithAggregatesFilter<"DataVF04"> | bigint | number | null
    Division?: BigIntNullableWithAggregatesFilter<"DataVF04"> | bigint | number | null
    DocCategory?: StringNullableWithAggregatesFilter<"DataVF04"> | string | null
    Address?: BigIntNullableWithAggregatesFilter<"DataVF04"> | bigint | number | null
    NameSoldToParty?: StringNullableWithAggregatesFilter<"DataVF04"> | string | null
    LocSoldToParty?: StringNullableWithAggregatesFilter<"DataVF04"> | string | null
    SortTerm?: StringNullableWithAggregatesFilter<"DataVF04"> | string | null
    ItemsRead?: StringNullableWithAggregatesFilter<"DataVF04"> | string | null
    Counter?: StringNullableWithAggregatesFilter<"DataVF04"> | string | null
    ShippingPoint?: StringNullableWithAggregatesFilter<"DataVF04"> | string | null
    PODStatus?: StringNullableWithAggregatesFilter<"DataVF04"> | string | null
    NetValue?: StringNullableWithAggregatesFilter<"DataVF04"> | string | null
    DocCurrency?: StringNullableWithAggregatesFilter<"DataVF04"> | string | null
    SDDocumentType?: StringNullableWithAggregatesFilter<"DataVF04"> | string | null
    NameSDType?: StringNullableWithAggregatesFilter<"DataVF04"> | string | null
    BDRSrcDoc?: StringNullableWithAggregatesFilter<"DataVF04"> | string | null
    RefSys?: StringNullableWithAggregatesFilter<"DataVF04"> | string | null
    DraftMode?: StringNullableWithAggregatesFilter<"DataVF04"> | string | null
    DBDRef?: StringNullableWithAggregatesFilter<"DataVF04"> | string | null
    SolutionOrder?: StringNullableWithAggregatesFilter<"DataVF04"> | string | null
    BillDate2?: DateTimeNullableWithAggregatesFilter<"DataVF04"> | Date | string | null
    BillType2?: StringNullableWithAggregatesFilter<"DataVF04"> | string | null
    Groups?: StringNullableWithAggregatesFilter<"DataVF04"> | string | null
    PONumber?: StringNullableWithAggregatesFilter<"DataVF04"> | string | null
    ShippingPointDesc?: StringNullableWithAggregatesFilter<"DataVF04"> | string | null
    SOPOAmount?: FloatNullableWithAggregatesFilter<"DataVF04"> | number | null
    Exrate?: FloatNullableWithAggregatesFilter<"DataVF04"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"DataVF04"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"DataVF04"> | Date | string | null
  }

  export type excelBaseUrlWhereInput = {
    AND?: excelBaseUrlWhereInput | excelBaseUrlWhereInput[]
    OR?: excelBaseUrlWhereInput[]
    NOT?: excelBaseUrlWhereInput | excelBaseUrlWhereInput[]
    id?: IntFilter<"excelBaseUrl"> | number
    guid?: StringFilter<"excelBaseUrl"> | string
    excelName?: StringNullableFilter<"excelBaseUrl"> | string | null
    url?: StringNullableFilter<"excelBaseUrl"> | string | null
    created_at?: DateTimeFilter<"excelBaseUrl"> | Date | string
    updated_at?: DateTimeFilter<"excelBaseUrl"> | Date | string
    excelSheet?: ExcelSheetListRelationFilter
  }

  export type excelBaseUrlOrderByWithRelationInput = {
    id?: SortOrder
    guid?: SortOrder
    excelName?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    excelSheet?: excelSheetOrderByRelationAggregateInput
  }

  export type excelBaseUrlWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    guid?: string
    url?: string
    AND?: excelBaseUrlWhereInput | excelBaseUrlWhereInput[]
    OR?: excelBaseUrlWhereInput[]
    NOT?: excelBaseUrlWhereInput | excelBaseUrlWhereInput[]
    excelName?: StringNullableFilter<"excelBaseUrl"> | string | null
    created_at?: DateTimeFilter<"excelBaseUrl"> | Date | string
    updated_at?: DateTimeFilter<"excelBaseUrl"> | Date | string
    excelSheet?: ExcelSheetListRelationFilter
  }, "id" | "guid" | "url">

  export type excelBaseUrlOrderByWithAggregationInput = {
    id?: SortOrder
    guid?: SortOrder
    excelName?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: excelBaseUrlCountOrderByAggregateInput
    _avg?: excelBaseUrlAvgOrderByAggregateInput
    _max?: excelBaseUrlMaxOrderByAggregateInput
    _min?: excelBaseUrlMinOrderByAggregateInput
    _sum?: excelBaseUrlSumOrderByAggregateInput
  }

  export type excelBaseUrlScalarWhereWithAggregatesInput = {
    AND?: excelBaseUrlScalarWhereWithAggregatesInput | excelBaseUrlScalarWhereWithAggregatesInput[]
    OR?: excelBaseUrlScalarWhereWithAggregatesInput[]
    NOT?: excelBaseUrlScalarWhereWithAggregatesInput | excelBaseUrlScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"excelBaseUrl"> | number
    guid?: StringWithAggregatesFilter<"excelBaseUrl"> | string
    excelName?: StringNullableWithAggregatesFilter<"excelBaseUrl"> | string | null
    url?: StringNullableWithAggregatesFilter<"excelBaseUrl"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"excelBaseUrl"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"excelBaseUrl"> | Date | string
  }

  export type excelSheetWhereInput = {
    AND?: excelSheetWhereInput | excelSheetWhereInput[]
    OR?: excelSheetWhereInput[]
    NOT?: excelSheetWhereInput | excelSheetWhereInput[]
    id?: IntFilter<"excelSheet"> | number
    guid?: StringFilter<"excelSheet"> | string
    sheetName?: StringNullableFilter<"excelSheet"> | string | null
    created_at?: DateTimeFilter<"excelSheet"> | Date | string
    updated_at?: DateTimeFilter<"excelSheet"> | Date | string
    excelBaseUrl?: XOR<ExcelBaseUrlScalarRelationFilter, excelBaseUrlWhereInput>
  }

  export type excelSheetOrderByWithRelationInput = {
    id?: SortOrder
    guid?: SortOrder
    sheetName?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    excelBaseUrl?: excelBaseUrlOrderByWithRelationInput
  }

  export type excelSheetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: excelSheetWhereInput | excelSheetWhereInput[]
    OR?: excelSheetWhereInput[]
    NOT?: excelSheetWhereInput | excelSheetWhereInput[]
    guid?: StringFilter<"excelSheet"> | string
    sheetName?: StringNullableFilter<"excelSheet"> | string | null
    created_at?: DateTimeFilter<"excelSheet"> | Date | string
    updated_at?: DateTimeFilter<"excelSheet"> | Date | string
    excelBaseUrl?: XOR<ExcelBaseUrlScalarRelationFilter, excelBaseUrlWhereInput>
  }, "id">

  export type excelSheetOrderByWithAggregationInput = {
    id?: SortOrder
    guid?: SortOrder
    sheetName?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: excelSheetCountOrderByAggregateInput
    _avg?: excelSheetAvgOrderByAggregateInput
    _max?: excelSheetMaxOrderByAggregateInput
    _min?: excelSheetMinOrderByAggregateInput
    _sum?: excelSheetSumOrderByAggregateInput
  }

  export type excelSheetScalarWhereWithAggregatesInput = {
    AND?: excelSheetScalarWhereWithAggregatesInput | excelSheetScalarWhereWithAggregatesInput[]
    OR?: excelSheetScalarWhereWithAggregatesInput[]
    NOT?: excelSheetScalarWhereWithAggregatesInput | excelSheetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"excelSheet"> | number
    guid?: StringWithAggregatesFilter<"excelSheet"> | string
    sheetName?: StringNullableWithAggregatesFilter<"excelSheet"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"excelSheet"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"excelSheet"> | Date | string
  }

  export type logWhereInput = {
    AND?: logWhereInput | logWhereInput[]
    OR?: logWhereInput[]
    NOT?: logWhereInput | logWhereInput[]
    id?: IntFilter<"log"> | number
    guid?: StringNullableFilter<"log"> | string | null
    name?: StringNullableFilter<"log"> | string | null
    type?: StringNullableFilter<"log"> | string | null
    row?: IntNullableFilter<"log"> | number | null
    created_at?: DateTimeFilter<"log"> | Date | string
    updated_at?: DateTimeFilter<"log"> | Date | string
  }

  export type logOrderByWithRelationInput = {
    id?: SortOrder
    guid?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    row?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type logWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    guid?: string
    AND?: logWhereInput | logWhereInput[]
    OR?: logWhereInput[]
    NOT?: logWhereInput | logWhereInput[]
    name?: StringNullableFilter<"log"> | string | null
    type?: StringNullableFilter<"log"> | string | null
    row?: IntNullableFilter<"log"> | number | null
    created_at?: DateTimeFilter<"log"> | Date | string
    updated_at?: DateTimeFilter<"log"> | Date | string
  }, "id" | "guid">

  export type logOrderByWithAggregationInput = {
    id?: SortOrder
    guid?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    row?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: logCountOrderByAggregateInput
    _avg?: logAvgOrderByAggregateInput
    _max?: logMaxOrderByAggregateInput
    _min?: logMinOrderByAggregateInput
    _sum?: logSumOrderByAggregateInput
  }

  export type logScalarWhereWithAggregatesInput = {
    AND?: logScalarWhereWithAggregatesInput | logScalarWhereWithAggregatesInput[]
    OR?: logScalarWhereWithAggregatesInput[]
    NOT?: logScalarWhereWithAggregatesInput | logScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"log"> | number
    guid?: StringNullableWithAggregatesFilter<"log"> | string | null
    name?: StringNullableWithAggregatesFilter<"log"> | string | null
    type?: StringNullableWithAggregatesFilter<"log"> | string | null
    row?: IntNullableWithAggregatesFilter<"log"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"log"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"log"> | Date | string
  }

  export type ms_usersWhereInput = {
    AND?: ms_usersWhereInput | ms_usersWhereInput[]
    OR?: ms_usersWhereInput[]
    NOT?: ms_usersWhereInput | ms_usersWhereInput[]
    id?: IntFilter<"ms_users"> | number
    name?: StringNullableFilter<"ms_users"> | string | null
    username?: StringNullableFilter<"ms_users"> | string | null
    password?: StringNullableFilter<"ms_users"> | string | null
    divisi?: StringNullableFilter<"ms_users"> | string | null
    departemen?: StringNullableFilter<"ms_users"> | string | null
    email?: StringNullableFilter<"ms_users"> | string | null
    role?: IntNullableFilter<"ms_users"> | number | null
    created_at?: DateTimeNullableFilter<"ms_users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ms_users"> | Date | string | null
    trx_LogHistory_trx_LogHistory_PICBAToms_users?: Trx_LogHistoryListRelationFilter
    trx_LogHistory_trx_LogHistory_PICUserToms_users?: Trx_LogHistoryListRelationFilter
  }

  export type ms_usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    divisi?: SortOrderInput | SortOrder
    departemen?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    trx_LogHistory_trx_LogHistory_PICBAToms_users?: trx_LogHistoryOrderByRelationAggregateInput
    trx_LogHistory_trx_LogHistory_PICUserToms_users?: trx_LogHistoryOrderByRelationAggregateInput
  }

  export type ms_usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    username?: string
    AND?: ms_usersWhereInput | ms_usersWhereInput[]
    OR?: ms_usersWhereInput[]
    NOT?: ms_usersWhereInput | ms_usersWhereInput[]
    password?: StringNullableFilter<"ms_users"> | string | null
    divisi?: StringNullableFilter<"ms_users"> | string | null
    departemen?: StringNullableFilter<"ms_users"> | string | null
    email?: StringNullableFilter<"ms_users"> | string | null
    role?: IntNullableFilter<"ms_users"> | number | null
    created_at?: DateTimeNullableFilter<"ms_users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ms_users"> | Date | string | null
    trx_LogHistory_trx_LogHistory_PICBAToms_users?: Trx_LogHistoryListRelationFilter
    trx_LogHistory_trx_LogHistory_PICUserToms_users?: Trx_LogHistoryListRelationFilter
  }, "id" | "name" | "username">

  export type ms_usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    divisi?: SortOrderInput | SortOrder
    departemen?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: ms_usersCountOrderByAggregateInput
    _avg?: ms_usersAvgOrderByAggregateInput
    _max?: ms_usersMaxOrderByAggregateInput
    _min?: ms_usersMinOrderByAggregateInput
    _sum?: ms_usersSumOrderByAggregateInput
  }

  export type ms_usersScalarWhereWithAggregatesInput = {
    AND?: ms_usersScalarWhereWithAggregatesInput | ms_usersScalarWhereWithAggregatesInput[]
    OR?: ms_usersScalarWhereWithAggregatesInput[]
    NOT?: ms_usersScalarWhereWithAggregatesInput | ms_usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ms_users"> | number
    name?: StringNullableWithAggregatesFilter<"ms_users"> | string | null
    username?: StringNullableWithAggregatesFilter<"ms_users"> | string | null
    password?: StringNullableWithAggregatesFilter<"ms_users"> | string | null
    divisi?: StringNullableWithAggregatesFilter<"ms_users"> | string | null
    departemen?: StringNullableWithAggregatesFilter<"ms_users"> | string | null
    email?: StringNullableWithAggregatesFilter<"ms_users"> | string | null
    role?: IntNullableWithAggregatesFilter<"ms_users"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"ms_users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"ms_users"> | Date | string | null
  }

  export type Schedule_RecommendationWhereInput = {
    AND?: Schedule_RecommendationWhereInput | Schedule_RecommendationWhereInput[]
    OR?: Schedule_RecommendationWhereInput[]
    NOT?: Schedule_RecommendationWhereInput | Schedule_RecommendationWhereInput[]
    PN?: StringFilter<"Schedule_Recommendation"> | string
    PRO?: BigIntNullableFilter<"Schedule_Recommendation"> | bigint | number | null
    Product?: StringNullableFilter<"Schedule_Recommendation"> | string | null
    ProductGroup?: StringNullableFilter<"Schedule_Recommendation"> | string | null
    Process?: StringNullableFilter<"Schedule_Recommendation"> | string | null
    Dependency?: StringNullableFilter<"Schedule_Recommendation"> | string | null
    Maksimal_Produksi_per_Base?: FloatNullableFilter<"Schedule_Recommendation"> | number | null
    ProcessOrder?: StringNullableFilter<"Schedule_Recommendation"> | string | null
    PlanStartDate?: DateTimeNullableFilter<"Schedule_Recommendation"> | Date | string | null
    PlanEndDate?: DateTimeNullableFilter<"Schedule_Recommendation"> | Date | string | null
    Start_Date?: DateTimeNullableFilter<"Schedule_Recommendation"> | Date | string | null
    End_Date?: DateTimeNullableFilter<"Schedule_Recommendation"> | Date | string | null
    Estimated_Material_Arrived?: DateTimeNullableFilter<"Schedule_Recommendation"> | Date | string | null
    Lead_Time_Process_Standar?: FloatNullableFilter<"Schedule_Recommendation"> | number | null
    Lead_Time_Estimation_Process?: FloatNullableFilter<"Schedule_Recommendation"> | number | null
    Process_Status?: StringNullableFilter<"Schedule_Recommendation"> | string | null
    MPSDueDate?: DateTimeNullableFilter<"Schedule_Recommendation"> | Date | string | null
    Finished_Prediction?: DateTimeNullableFilter<"Schedule_Recommendation"> | Date | string | null
    Status_Unit_Delivery?: StringNullableFilter<"Schedule_Recommendation"> | string | null
    Capacity_Utilization?: FloatNullableFilter<"Schedule_Recommendation"> | number | null
    Status_Capacity?: StringNullableFilter<"Schedule_Recommendation"> | string | null
    Status_Material?: StringNullableFilter<"Schedule_Recommendation"> | string | null
  }

  export type Schedule_RecommendationOrderByWithRelationInput = {
    PN?: SortOrder
    PRO?: SortOrderInput | SortOrder
    Product?: SortOrderInput | SortOrder
    ProductGroup?: SortOrderInput | SortOrder
    Process?: SortOrderInput | SortOrder
    Dependency?: SortOrderInput | SortOrder
    Maksimal_Produksi_per_Base?: SortOrderInput | SortOrder
    ProcessOrder?: SortOrderInput | SortOrder
    PlanStartDate?: SortOrderInput | SortOrder
    PlanEndDate?: SortOrderInput | SortOrder
    Start_Date?: SortOrderInput | SortOrder
    End_Date?: SortOrderInput | SortOrder
    Estimated_Material_Arrived?: SortOrderInput | SortOrder
    Lead_Time_Process_Standar?: SortOrderInput | SortOrder
    Lead_Time_Estimation_Process?: SortOrderInput | SortOrder
    Process_Status?: SortOrderInput | SortOrder
    MPSDueDate?: SortOrderInput | SortOrder
    Finished_Prediction?: SortOrderInput | SortOrder
    Status_Unit_Delivery?: SortOrderInput | SortOrder
    Capacity_Utilization?: SortOrderInput | SortOrder
    Status_Capacity?: SortOrderInput | SortOrder
    Status_Material?: SortOrderInput | SortOrder
  }

  export type Schedule_RecommendationWhereUniqueInput = Prisma.AtLeast<{
    PN?: string
    AND?: Schedule_RecommendationWhereInput | Schedule_RecommendationWhereInput[]
    OR?: Schedule_RecommendationWhereInput[]
    NOT?: Schedule_RecommendationWhereInput | Schedule_RecommendationWhereInput[]
    PRO?: BigIntNullableFilter<"Schedule_Recommendation"> | bigint | number | null
    Product?: StringNullableFilter<"Schedule_Recommendation"> | string | null
    ProductGroup?: StringNullableFilter<"Schedule_Recommendation"> | string | null
    Process?: StringNullableFilter<"Schedule_Recommendation"> | string | null
    Dependency?: StringNullableFilter<"Schedule_Recommendation"> | string | null
    Maksimal_Produksi_per_Base?: FloatNullableFilter<"Schedule_Recommendation"> | number | null
    ProcessOrder?: StringNullableFilter<"Schedule_Recommendation"> | string | null
    PlanStartDate?: DateTimeNullableFilter<"Schedule_Recommendation"> | Date | string | null
    PlanEndDate?: DateTimeNullableFilter<"Schedule_Recommendation"> | Date | string | null
    Start_Date?: DateTimeNullableFilter<"Schedule_Recommendation"> | Date | string | null
    End_Date?: DateTimeNullableFilter<"Schedule_Recommendation"> | Date | string | null
    Estimated_Material_Arrived?: DateTimeNullableFilter<"Schedule_Recommendation"> | Date | string | null
    Lead_Time_Process_Standar?: FloatNullableFilter<"Schedule_Recommendation"> | number | null
    Lead_Time_Estimation_Process?: FloatNullableFilter<"Schedule_Recommendation"> | number | null
    Process_Status?: StringNullableFilter<"Schedule_Recommendation"> | string | null
    MPSDueDate?: DateTimeNullableFilter<"Schedule_Recommendation"> | Date | string | null
    Finished_Prediction?: DateTimeNullableFilter<"Schedule_Recommendation"> | Date | string | null
    Status_Unit_Delivery?: StringNullableFilter<"Schedule_Recommendation"> | string | null
    Capacity_Utilization?: FloatNullableFilter<"Schedule_Recommendation"> | number | null
    Status_Capacity?: StringNullableFilter<"Schedule_Recommendation"> | string | null
    Status_Material?: StringNullableFilter<"Schedule_Recommendation"> | string | null
  }, "PN">

  export type Schedule_RecommendationOrderByWithAggregationInput = {
    PN?: SortOrder
    PRO?: SortOrderInput | SortOrder
    Product?: SortOrderInput | SortOrder
    ProductGroup?: SortOrderInput | SortOrder
    Process?: SortOrderInput | SortOrder
    Dependency?: SortOrderInput | SortOrder
    Maksimal_Produksi_per_Base?: SortOrderInput | SortOrder
    ProcessOrder?: SortOrderInput | SortOrder
    PlanStartDate?: SortOrderInput | SortOrder
    PlanEndDate?: SortOrderInput | SortOrder
    Start_Date?: SortOrderInput | SortOrder
    End_Date?: SortOrderInput | SortOrder
    Estimated_Material_Arrived?: SortOrderInput | SortOrder
    Lead_Time_Process_Standar?: SortOrderInput | SortOrder
    Lead_Time_Estimation_Process?: SortOrderInput | SortOrder
    Process_Status?: SortOrderInput | SortOrder
    MPSDueDate?: SortOrderInput | SortOrder
    Finished_Prediction?: SortOrderInput | SortOrder
    Status_Unit_Delivery?: SortOrderInput | SortOrder
    Capacity_Utilization?: SortOrderInput | SortOrder
    Status_Capacity?: SortOrderInput | SortOrder
    Status_Material?: SortOrderInput | SortOrder
    _count?: Schedule_RecommendationCountOrderByAggregateInput
    _avg?: Schedule_RecommendationAvgOrderByAggregateInput
    _max?: Schedule_RecommendationMaxOrderByAggregateInput
    _min?: Schedule_RecommendationMinOrderByAggregateInput
    _sum?: Schedule_RecommendationSumOrderByAggregateInput
  }

  export type Schedule_RecommendationScalarWhereWithAggregatesInput = {
    AND?: Schedule_RecommendationScalarWhereWithAggregatesInput | Schedule_RecommendationScalarWhereWithAggregatesInput[]
    OR?: Schedule_RecommendationScalarWhereWithAggregatesInput[]
    NOT?: Schedule_RecommendationScalarWhereWithAggregatesInput | Schedule_RecommendationScalarWhereWithAggregatesInput[]
    PN?: StringWithAggregatesFilter<"Schedule_Recommendation"> | string
    PRO?: BigIntNullableWithAggregatesFilter<"Schedule_Recommendation"> | bigint | number | null
    Product?: StringNullableWithAggregatesFilter<"Schedule_Recommendation"> | string | null
    ProductGroup?: StringNullableWithAggregatesFilter<"Schedule_Recommendation"> | string | null
    Process?: StringNullableWithAggregatesFilter<"Schedule_Recommendation"> | string | null
    Dependency?: StringNullableWithAggregatesFilter<"Schedule_Recommendation"> | string | null
    Maksimal_Produksi_per_Base?: FloatNullableWithAggregatesFilter<"Schedule_Recommendation"> | number | null
    ProcessOrder?: StringNullableWithAggregatesFilter<"Schedule_Recommendation"> | string | null
    PlanStartDate?: DateTimeNullableWithAggregatesFilter<"Schedule_Recommendation"> | Date | string | null
    PlanEndDate?: DateTimeNullableWithAggregatesFilter<"Schedule_Recommendation"> | Date | string | null
    Start_Date?: DateTimeNullableWithAggregatesFilter<"Schedule_Recommendation"> | Date | string | null
    End_Date?: DateTimeNullableWithAggregatesFilter<"Schedule_Recommendation"> | Date | string | null
    Estimated_Material_Arrived?: DateTimeNullableWithAggregatesFilter<"Schedule_Recommendation"> | Date | string | null
    Lead_Time_Process_Standar?: FloatNullableWithAggregatesFilter<"Schedule_Recommendation"> | number | null
    Lead_Time_Estimation_Process?: FloatNullableWithAggregatesFilter<"Schedule_Recommendation"> | number | null
    Process_Status?: StringNullableWithAggregatesFilter<"Schedule_Recommendation"> | string | null
    MPSDueDate?: DateTimeNullableWithAggregatesFilter<"Schedule_Recommendation"> | Date | string | null
    Finished_Prediction?: DateTimeNullableWithAggregatesFilter<"Schedule_Recommendation"> | Date | string | null
    Status_Unit_Delivery?: StringNullableWithAggregatesFilter<"Schedule_Recommendation"> | string | null
    Capacity_Utilization?: FloatNullableWithAggregatesFilter<"Schedule_Recommendation"> | number | null
    Status_Capacity?: StringNullableWithAggregatesFilter<"Schedule_Recommendation"> | string | null
    Status_Material?: StringNullableWithAggregatesFilter<"Schedule_Recommendation"> | string | null
  }

  export type siteRouteWhereInput = {
    AND?: siteRouteWhereInput | siteRouteWhereInput[]
    OR?: siteRouteWhereInput[]
    NOT?: siteRouteWhereInput | siteRouteWhereInput[]
    id?: IntFilter<"siteRoute"> | number
    guid?: StringFilter<"siteRoute"> | string
    baseUrl?: StringNullableFilter<"siteRoute"> | string | null
    siteName?: StringNullableFilter<"siteRoute"> | string | null
    url?: StringNullableFilter<"siteRoute"> | string | null
    created_at?: DateTimeFilter<"siteRoute"> | Date | string
    updated_at?: DateTimeFilter<"siteRoute"> | Date | string
  }

  export type siteRouteOrderByWithRelationInput = {
    id?: SortOrder
    guid?: SortOrder
    baseUrl?: SortOrderInput | SortOrder
    siteName?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type siteRouteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    guid?: string
    siteName?: string
    url?: string
    AND?: siteRouteWhereInput | siteRouteWhereInput[]
    OR?: siteRouteWhereInput[]
    NOT?: siteRouteWhereInput | siteRouteWhereInput[]
    baseUrl?: StringNullableFilter<"siteRoute"> | string | null
    created_at?: DateTimeFilter<"siteRoute"> | Date | string
    updated_at?: DateTimeFilter<"siteRoute"> | Date | string
  }, "id" | "guid" | "siteName" | "url">

  export type siteRouteOrderByWithAggregationInput = {
    id?: SortOrder
    guid?: SortOrder
    baseUrl?: SortOrderInput | SortOrder
    siteName?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: siteRouteCountOrderByAggregateInput
    _avg?: siteRouteAvgOrderByAggregateInput
    _max?: siteRouteMaxOrderByAggregateInput
    _min?: siteRouteMinOrderByAggregateInput
    _sum?: siteRouteSumOrderByAggregateInput
  }

  export type siteRouteScalarWhereWithAggregatesInput = {
    AND?: siteRouteScalarWhereWithAggregatesInput | siteRouteScalarWhereWithAggregatesInput[]
    OR?: siteRouteScalarWhereWithAggregatesInput[]
    NOT?: siteRouteScalarWhereWithAggregatesInput | siteRouteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"siteRoute"> | number
    guid?: StringWithAggregatesFilter<"siteRoute"> | string
    baseUrl?: StringNullableWithAggregatesFilter<"siteRoute"> | string | null
    siteName?: StringNullableWithAggregatesFilter<"siteRoute"> | string | null
    url?: StringNullableWithAggregatesFilter<"siteRoute"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"siteRoute"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"siteRoute"> | Date | string
  }

  export type sysdiagramsWhereInput = {
    AND?: sysdiagramsWhereInput | sysdiagramsWhereInput[]
    OR?: sysdiagramsWhereInput[]
    NOT?: sysdiagramsWhereInput | sysdiagramsWhereInput[]
    name?: StringFilter<"sysdiagrams"> | string
    principal_id?: IntFilter<"sysdiagrams"> | number
    diagram_id?: IntFilter<"sysdiagrams"> | number
    version?: IntNullableFilter<"sysdiagrams"> | number | null
    definition?: BytesNullableFilter<"sysdiagrams"> | Uint8Array | null
  }

  export type sysdiagramsOrderByWithRelationInput = {
    name?: SortOrder
    principal_id?: SortOrder
    diagram_id?: SortOrder
    version?: SortOrderInput | SortOrder
    definition?: SortOrderInput | SortOrder
  }

  export type sysdiagramsWhereUniqueInput = Prisma.AtLeast<{
    diagram_id?: number
    principal_id_name?: sysdiagramsPrincipal_idNameCompoundUniqueInput
    AND?: sysdiagramsWhereInput | sysdiagramsWhereInput[]
    OR?: sysdiagramsWhereInput[]
    NOT?: sysdiagramsWhereInput | sysdiagramsWhereInput[]
    name?: StringFilter<"sysdiagrams"> | string
    principal_id?: IntFilter<"sysdiagrams"> | number
    version?: IntNullableFilter<"sysdiagrams"> | number | null
    definition?: BytesNullableFilter<"sysdiagrams"> | Uint8Array | null
  }, "diagram_id" | "principal_id_name">

  export type sysdiagramsOrderByWithAggregationInput = {
    name?: SortOrder
    principal_id?: SortOrder
    diagram_id?: SortOrder
    version?: SortOrderInput | SortOrder
    definition?: SortOrderInput | SortOrder
    _count?: sysdiagramsCountOrderByAggregateInput
    _avg?: sysdiagramsAvgOrderByAggregateInput
    _max?: sysdiagramsMaxOrderByAggregateInput
    _min?: sysdiagramsMinOrderByAggregateInput
    _sum?: sysdiagramsSumOrderByAggregateInput
  }

  export type sysdiagramsScalarWhereWithAggregatesInput = {
    AND?: sysdiagramsScalarWhereWithAggregatesInput | sysdiagramsScalarWhereWithAggregatesInput[]
    OR?: sysdiagramsScalarWhereWithAggregatesInput[]
    NOT?: sysdiagramsScalarWhereWithAggregatesInput | sysdiagramsScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"sysdiagrams"> | string
    principal_id?: IntWithAggregatesFilter<"sysdiagrams"> | number
    diagram_id?: IntWithAggregatesFilter<"sysdiagrams"> | number
    version?: IntNullableWithAggregatesFilter<"sysdiagrams"> | number | null
    definition?: BytesNullableWithAggregatesFilter<"sysdiagrams"> | Uint8Array | null
  }

  export type trx_PICAWhereInput = {
    AND?: trx_PICAWhereInput | trx_PICAWhereInput[]
    OR?: trx_PICAWhereInput[]
    NOT?: trx_PICAWhereInput | trx_PICAWhereInput[]
    PICAID?: IntFilter<"trx_PICA"> | number
    IncidentID?: IntFilter<"trx_PICA"> | number
    created_at?: DateTimeNullableFilter<"trx_PICA"> | Date | string | null
    created_by?: IntNullableFilter<"trx_PICA"> | number | null
    update_at?: DateTimeNullableFilter<"trx_PICA"> | Date | string | null
    update_by?: IntNullableFilter<"trx_PICA"> | number | null
    trx_LogHistory?: XOR<Trx_LogHistoryNullableScalarRelationFilter, trx_LogHistoryWhereInput> | null
    trx_DetailPICA?: Trx_DetailPICAListRelationFilter
  }

  export type trx_PICAOrderByWithRelationInput = {
    PICAID?: SortOrder
    IncidentID?: SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    update_at?: SortOrderInput | SortOrder
    update_by?: SortOrderInput | SortOrder
    trx_LogHistory?: trx_LogHistoryOrderByWithRelationInput
    trx_DetailPICA?: trx_DetailPICAOrderByRelationAggregateInput
  }

  export type trx_PICAWhereUniqueInput = Prisma.AtLeast<{
    PICAID?: number
    AND?: trx_PICAWhereInput | trx_PICAWhereInput[]
    OR?: trx_PICAWhereInput[]
    NOT?: trx_PICAWhereInput | trx_PICAWhereInput[]
    IncidentID?: IntFilter<"trx_PICA"> | number
    created_at?: DateTimeNullableFilter<"trx_PICA"> | Date | string | null
    created_by?: IntNullableFilter<"trx_PICA"> | number | null
    update_at?: DateTimeNullableFilter<"trx_PICA"> | Date | string | null
    update_by?: IntNullableFilter<"trx_PICA"> | number | null
    trx_LogHistory?: XOR<Trx_LogHistoryNullableScalarRelationFilter, trx_LogHistoryWhereInput> | null
    trx_DetailPICA?: Trx_DetailPICAListRelationFilter
  }, "PICAID">

  export type trx_PICAOrderByWithAggregationInput = {
    PICAID?: SortOrder
    IncidentID?: SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    update_at?: SortOrderInput | SortOrder
    update_by?: SortOrderInput | SortOrder
    _count?: trx_PICACountOrderByAggregateInput
    _avg?: trx_PICAAvgOrderByAggregateInput
    _max?: trx_PICAMaxOrderByAggregateInput
    _min?: trx_PICAMinOrderByAggregateInput
    _sum?: trx_PICASumOrderByAggregateInput
  }

  export type trx_PICAScalarWhereWithAggregatesInput = {
    AND?: trx_PICAScalarWhereWithAggregatesInput | trx_PICAScalarWhereWithAggregatesInput[]
    OR?: trx_PICAScalarWhereWithAggregatesInput[]
    NOT?: trx_PICAScalarWhereWithAggregatesInput | trx_PICAScalarWhereWithAggregatesInput[]
    PICAID?: IntWithAggregatesFilter<"trx_PICA"> | number
    IncidentID?: IntWithAggregatesFilter<"trx_PICA"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"trx_PICA"> | Date | string | null
    created_by?: IntNullableWithAggregatesFilter<"trx_PICA"> | number | null
    update_at?: DateTimeNullableWithAggregatesFilter<"trx_PICA"> | Date | string | null
    update_by?: IntNullableWithAggregatesFilter<"trx_PICA"> | number | null
  }

  export type trx_DetailPICAWhereInput = {
    AND?: trx_DetailPICAWhereInput | trx_DetailPICAWhereInput[]
    OR?: trx_DetailPICAWhereInput[]
    NOT?: trx_DetailPICAWhereInput | trx_DetailPICAWhereInput[]
    DetailPICAID?: IntFilter<"trx_DetailPICA"> | number
    PICAID?: IntNullableFilter<"trx_DetailPICA"> | number | null
    Status?: StringNullableFilter<"trx_DetailPICA"> | string | null
    Problem?: StringNullableFilter<"trx_DetailPICA"> | string | null
    RootCaused?: StringNullableFilter<"trx_DetailPICA"> | string | null
    CorrectiveAction?: StringNullableFilter<"trx_DetailPICA"> | string | null
    PreventiveAction?: StringNullableFilter<"trx_DetailPICA"> | string | null
    trx_PICA?: XOR<Trx_PICANullableScalarRelationFilter, trx_PICAWhereInput> | null
  }

  export type trx_DetailPICAOrderByWithRelationInput = {
    DetailPICAID?: SortOrder
    PICAID?: SortOrderInput | SortOrder
    Status?: SortOrderInput | SortOrder
    Problem?: SortOrderInput | SortOrder
    RootCaused?: SortOrderInput | SortOrder
    CorrectiveAction?: SortOrderInput | SortOrder
    PreventiveAction?: SortOrderInput | SortOrder
    trx_PICA?: trx_PICAOrderByWithRelationInput
  }

  export type trx_DetailPICAWhereUniqueInput = Prisma.AtLeast<{
    DetailPICAID?: number
    AND?: trx_DetailPICAWhereInput | trx_DetailPICAWhereInput[]
    OR?: trx_DetailPICAWhereInput[]
    NOT?: trx_DetailPICAWhereInput | trx_DetailPICAWhereInput[]
    PICAID?: IntNullableFilter<"trx_DetailPICA"> | number | null
    Status?: StringNullableFilter<"trx_DetailPICA"> | string | null
    Problem?: StringNullableFilter<"trx_DetailPICA"> | string | null
    RootCaused?: StringNullableFilter<"trx_DetailPICA"> | string | null
    CorrectiveAction?: StringNullableFilter<"trx_DetailPICA"> | string | null
    PreventiveAction?: StringNullableFilter<"trx_DetailPICA"> | string | null
    trx_PICA?: XOR<Trx_PICANullableScalarRelationFilter, trx_PICAWhereInput> | null
  }, "DetailPICAID">

  export type trx_DetailPICAOrderByWithAggregationInput = {
    DetailPICAID?: SortOrder
    PICAID?: SortOrderInput | SortOrder
    Status?: SortOrderInput | SortOrder
    Problem?: SortOrderInput | SortOrder
    RootCaused?: SortOrderInput | SortOrder
    CorrectiveAction?: SortOrderInput | SortOrder
    PreventiveAction?: SortOrderInput | SortOrder
    _count?: trx_DetailPICACountOrderByAggregateInput
    _avg?: trx_DetailPICAAvgOrderByAggregateInput
    _max?: trx_DetailPICAMaxOrderByAggregateInput
    _min?: trx_DetailPICAMinOrderByAggregateInput
    _sum?: trx_DetailPICASumOrderByAggregateInput
  }

  export type trx_DetailPICAScalarWhereWithAggregatesInput = {
    AND?: trx_DetailPICAScalarWhereWithAggregatesInput | trx_DetailPICAScalarWhereWithAggregatesInput[]
    OR?: trx_DetailPICAScalarWhereWithAggregatesInput[]
    NOT?: trx_DetailPICAScalarWhereWithAggregatesInput | trx_DetailPICAScalarWhereWithAggregatesInput[]
    DetailPICAID?: IntWithAggregatesFilter<"trx_DetailPICA"> | number
    PICAID?: IntNullableWithAggregatesFilter<"trx_DetailPICA"> | number | null
    Status?: StringNullableWithAggregatesFilter<"trx_DetailPICA"> | string | null
    Problem?: StringNullableWithAggregatesFilter<"trx_DetailPICA"> | string | null
    RootCaused?: StringNullableWithAggregatesFilter<"trx_DetailPICA"> | string | null
    CorrectiveAction?: StringNullableWithAggregatesFilter<"trx_DetailPICA"> | string | null
    PreventiveAction?: StringNullableWithAggregatesFilter<"trx_DetailPICA"> | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    guid?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    guid?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    guid?: string
    name?: string
    username?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
  }, "id" | "guid" | "name" | "username">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    guid?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    guid?: StringWithAggregatesFilter<"users"> | string
    name?: StringWithAggregatesFilter<"users"> | string
    username?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type trx_LogHistoryWhereInput = {
    AND?: trx_LogHistoryWhereInput | trx_LogHistoryWhereInput[]
    OR?: trx_LogHistoryWhereInput[]
    NOT?: trx_LogHistoryWhereInput | trx_LogHistoryWhereInput[]
    ID?: IntFilter<"trx_LogHistory"> | number
    UnitSerialNumber?: StringNullableFilter<"trx_LogHistory"> | string | null
    SalesDocument?: IntNullableFilter<"trx_LogHistory"> | number | null
    DocumentNumber?: IntNullableFilter<"trx_LogHistory"> | number | null
    POID?: IntNullableFilter<"trx_LogHistory"> | number | null
    PROID?: IntNullableFilter<"trx_LogHistory"> | number | null
    Description?: StringNullableFilter<"trx_LogHistory"> | string | null
    IncidentType?: StringNullableFilter<"trx_LogHistory"> | string | null
    PICBA?: IntNullableFilter<"trx_LogHistory"> | number | null
    BAEmailDate?: DateTimeNullableFilter<"trx_LogHistory"> | Date | string | null
    BAEmailStatus?: StringNullableFilter<"trx_LogHistory"> | string | null
    PICUser?: IntNullableFilter<"trx_LogHistory"> | number | null
    UserEmailDate?: DateTimeNullableFilter<"trx_LogHistory"> | Date | string | null
    UserEmailStatus?: StringNullableFilter<"trx_LogHistory"> | string | null
    OpenDate?: DateTimeNullableFilter<"trx_LogHistory"> | Date | string | null
    CloseDate?: DateTimeNullableFilter<"trx_LogHistory"> | Date | string | null
    FeedbackBA?: StringNullableFilter<"trx_LogHistory"> | string | null
    FeedbackBADate?: DateTimeNullableFilter<"trx_LogHistory"> | Date | string | null
    FeedbackUser?: StringNullableFilter<"trx_LogHistory"> | string | null
    FeedbackUserDate?: DateTimeNullableFilter<"trx_LogHistory"> | Date | string | null
    FlagStatus?: IntNullableFilter<"trx_LogHistory"> | number | null
    Status?: StringNullableFilter<"trx_LogHistory"> | string | null
    pic_ba?: XOR<Ms_usersNullableScalarRelationFilter, ms_usersWhereInput> | null
    pic_user?: XOR<Ms_usersNullableScalarRelationFilter, ms_usersWhereInput> | null
    trx_PICA?: Trx_PICAListRelationFilter
  }

  export type trx_LogHistoryOrderByWithRelationInput = {
    ID?: SortOrder
    UnitSerialNumber?: SortOrderInput | SortOrder
    SalesDocument?: SortOrderInput | SortOrder
    DocumentNumber?: SortOrderInput | SortOrder
    POID?: SortOrderInput | SortOrder
    PROID?: SortOrderInput | SortOrder
    Description?: SortOrderInput | SortOrder
    IncidentType?: SortOrderInput | SortOrder
    PICBA?: SortOrderInput | SortOrder
    BAEmailDate?: SortOrderInput | SortOrder
    BAEmailStatus?: SortOrderInput | SortOrder
    PICUser?: SortOrderInput | SortOrder
    UserEmailDate?: SortOrderInput | SortOrder
    UserEmailStatus?: SortOrderInput | SortOrder
    OpenDate?: SortOrderInput | SortOrder
    CloseDate?: SortOrderInput | SortOrder
    FeedbackBA?: SortOrderInput | SortOrder
    FeedbackBADate?: SortOrderInput | SortOrder
    FeedbackUser?: SortOrderInput | SortOrder
    FeedbackUserDate?: SortOrderInput | SortOrder
    FlagStatus?: SortOrderInput | SortOrder
    Status?: SortOrderInput | SortOrder
    pic_ba?: ms_usersOrderByWithRelationInput
    pic_user?: ms_usersOrderByWithRelationInput
    trx_PICA?: trx_PICAOrderByRelationAggregateInput
  }

  export type trx_LogHistoryWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: trx_LogHistoryWhereInput | trx_LogHistoryWhereInput[]
    OR?: trx_LogHistoryWhereInput[]
    NOT?: trx_LogHistoryWhereInput | trx_LogHistoryWhereInput[]
    UnitSerialNumber?: StringNullableFilter<"trx_LogHistory"> | string | null
    SalesDocument?: IntNullableFilter<"trx_LogHistory"> | number | null
    DocumentNumber?: IntNullableFilter<"trx_LogHistory"> | number | null
    POID?: IntNullableFilter<"trx_LogHistory"> | number | null
    PROID?: IntNullableFilter<"trx_LogHistory"> | number | null
    Description?: StringNullableFilter<"trx_LogHistory"> | string | null
    IncidentType?: StringNullableFilter<"trx_LogHistory"> | string | null
    PICBA?: IntNullableFilter<"trx_LogHistory"> | number | null
    BAEmailDate?: DateTimeNullableFilter<"trx_LogHistory"> | Date | string | null
    BAEmailStatus?: StringNullableFilter<"trx_LogHistory"> | string | null
    PICUser?: IntNullableFilter<"trx_LogHistory"> | number | null
    UserEmailDate?: DateTimeNullableFilter<"trx_LogHistory"> | Date | string | null
    UserEmailStatus?: StringNullableFilter<"trx_LogHistory"> | string | null
    OpenDate?: DateTimeNullableFilter<"trx_LogHistory"> | Date | string | null
    CloseDate?: DateTimeNullableFilter<"trx_LogHistory"> | Date | string | null
    FeedbackBA?: StringNullableFilter<"trx_LogHistory"> | string | null
    FeedbackBADate?: DateTimeNullableFilter<"trx_LogHistory"> | Date | string | null
    FeedbackUser?: StringNullableFilter<"trx_LogHistory"> | string | null
    FeedbackUserDate?: DateTimeNullableFilter<"trx_LogHistory"> | Date | string | null
    FlagStatus?: IntNullableFilter<"trx_LogHistory"> | number | null
    Status?: StringNullableFilter<"trx_LogHistory"> | string | null
    pic_ba?: XOR<Ms_usersNullableScalarRelationFilter, ms_usersWhereInput> | null
    pic_user?: XOR<Ms_usersNullableScalarRelationFilter, ms_usersWhereInput> | null
    trx_PICA?: Trx_PICAListRelationFilter
  }, "ID">

  export type trx_LogHistoryOrderByWithAggregationInput = {
    ID?: SortOrder
    UnitSerialNumber?: SortOrderInput | SortOrder
    SalesDocument?: SortOrderInput | SortOrder
    DocumentNumber?: SortOrderInput | SortOrder
    POID?: SortOrderInput | SortOrder
    PROID?: SortOrderInput | SortOrder
    Description?: SortOrderInput | SortOrder
    IncidentType?: SortOrderInput | SortOrder
    PICBA?: SortOrderInput | SortOrder
    BAEmailDate?: SortOrderInput | SortOrder
    BAEmailStatus?: SortOrderInput | SortOrder
    PICUser?: SortOrderInput | SortOrder
    UserEmailDate?: SortOrderInput | SortOrder
    UserEmailStatus?: SortOrderInput | SortOrder
    OpenDate?: SortOrderInput | SortOrder
    CloseDate?: SortOrderInput | SortOrder
    FeedbackBA?: SortOrderInput | SortOrder
    FeedbackBADate?: SortOrderInput | SortOrder
    FeedbackUser?: SortOrderInput | SortOrder
    FeedbackUserDate?: SortOrderInput | SortOrder
    FlagStatus?: SortOrderInput | SortOrder
    Status?: SortOrderInput | SortOrder
    _count?: trx_LogHistoryCountOrderByAggregateInput
    _avg?: trx_LogHistoryAvgOrderByAggregateInput
    _max?: trx_LogHistoryMaxOrderByAggregateInput
    _min?: trx_LogHistoryMinOrderByAggregateInput
    _sum?: trx_LogHistorySumOrderByAggregateInput
  }

  export type trx_LogHistoryScalarWhereWithAggregatesInput = {
    AND?: trx_LogHistoryScalarWhereWithAggregatesInput | trx_LogHistoryScalarWhereWithAggregatesInput[]
    OR?: trx_LogHistoryScalarWhereWithAggregatesInput[]
    NOT?: trx_LogHistoryScalarWhereWithAggregatesInput | trx_LogHistoryScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"trx_LogHistory"> | number
    UnitSerialNumber?: StringNullableWithAggregatesFilter<"trx_LogHistory"> | string | null
    SalesDocument?: IntNullableWithAggregatesFilter<"trx_LogHistory"> | number | null
    DocumentNumber?: IntNullableWithAggregatesFilter<"trx_LogHistory"> | number | null
    POID?: IntNullableWithAggregatesFilter<"trx_LogHistory"> | number | null
    PROID?: IntNullableWithAggregatesFilter<"trx_LogHistory"> | number | null
    Description?: StringNullableWithAggregatesFilter<"trx_LogHistory"> | string | null
    IncidentType?: StringNullableWithAggregatesFilter<"trx_LogHistory"> | string | null
    PICBA?: IntNullableWithAggregatesFilter<"trx_LogHistory"> | number | null
    BAEmailDate?: DateTimeNullableWithAggregatesFilter<"trx_LogHistory"> | Date | string | null
    BAEmailStatus?: StringNullableWithAggregatesFilter<"trx_LogHistory"> | string | null
    PICUser?: IntNullableWithAggregatesFilter<"trx_LogHistory"> | number | null
    UserEmailDate?: DateTimeNullableWithAggregatesFilter<"trx_LogHistory"> | Date | string | null
    UserEmailStatus?: StringNullableWithAggregatesFilter<"trx_LogHistory"> | string | null
    OpenDate?: DateTimeNullableWithAggregatesFilter<"trx_LogHistory"> | Date | string | null
    CloseDate?: DateTimeNullableWithAggregatesFilter<"trx_LogHistory"> | Date | string | null
    FeedbackBA?: StringNullableWithAggregatesFilter<"trx_LogHistory"> | string | null
    FeedbackBADate?: DateTimeNullableWithAggregatesFilter<"trx_LogHistory"> | Date | string | null
    FeedbackUser?: StringNullableWithAggregatesFilter<"trx_LogHistory"> | string | null
    FeedbackUserDate?: DateTimeNullableWithAggregatesFilter<"trx_LogHistory"> | Date | string | null
    FlagStatus?: IntNullableWithAggregatesFilter<"trx_LogHistory"> | number | null
    Status?: StringNullableWithAggregatesFilter<"trx_LogHistory"> | string | null
  }

  export type DataFBL5NCreateInput = {
    ID?: bigint | number
    GLAccount?: string | null
    Reference?: string | null
    Assignment?: string | null
    DocumentNumber?: string | null
    DocumentType?: string | null
    PostingDate?: Date | string | null
    ClearingDate?: Date | string | null
    DocumentDate?: Date | string | null
    NetDueDate?: Date | string | null
    SpecialGLInd?: string | null
    BusinessArea?: string | null
    Plant?: string | null
    ProfitCenter?: string | null
    Account?: string | null
    CustomerName?: string | null
    AmountDocCurr?: number | null
    DocumentCurrency?: string | null
    AmountLocalCurrency?: number | null
    LocalCurrency?: string | null
    ReverseClearing?: string | null
    PostingKey?: string | null
    DebitCreditInd?: string | null
    ClearingDocument?: string | null
    Username?: string | null
    Text?: string | null
    CompanyCode?: string | null
    created_at?: Date | string | null
    updated_at: Date | string
  }

  export type DataFBL5NUncheckedCreateInput = {
    ID?: bigint | number
    GLAccount?: string | null
    Reference?: string | null
    Assignment?: string | null
    DocumentNumber?: string | null
    DocumentType?: string | null
    PostingDate?: Date | string | null
    ClearingDate?: Date | string | null
    DocumentDate?: Date | string | null
    NetDueDate?: Date | string | null
    SpecialGLInd?: string | null
    BusinessArea?: string | null
    Plant?: string | null
    ProfitCenter?: string | null
    Account?: string | null
    CustomerName?: string | null
    AmountDocCurr?: number | null
    DocumentCurrency?: string | null
    AmountLocalCurrency?: number | null
    LocalCurrency?: string | null
    ReverseClearing?: string | null
    PostingKey?: string | null
    DebitCreditInd?: string | null
    ClearingDocument?: string | null
    Username?: string | null
    Text?: string | null
    CompanyCode?: string | null
    created_at?: Date | string | null
    updated_at: Date | string
  }

  export type DataFBL5NUpdateInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    GLAccount?: NullableStringFieldUpdateOperationsInput | string | null
    Reference?: NullableStringFieldUpdateOperationsInput | string | null
    Assignment?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    PostingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClearingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DocumentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NetDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SpecialGLInd?: NullableStringFieldUpdateOperationsInput | string | null
    BusinessArea?: NullableStringFieldUpdateOperationsInput | string | null
    Plant?: NullableStringFieldUpdateOperationsInput | string | null
    ProfitCenter?: NullableStringFieldUpdateOperationsInput | string | null
    Account?: NullableStringFieldUpdateOperationsInput | string | null
    CustomerName?: NullableStringFieldUpdateOperationsInput | string | null
    AmountDocCurr?: NullableFloatFieldUpdateOperationsInput | number | null
    DocumentCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    AmountLocalCurrency?: NullableFloatFieldUpdateOperationsInput | number | null
    LocalCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    ReverseClearing?: NullableStringFieldUpdateOperationsInput | string | null
    PostingKey?: NullableStringFieldUpdateOperationsInput | string | null
    DebitCreditInd?: NullableStringFieldUpdateOperationsInput | string | null
    ClearingDocument?: NullableStringFieldUpdateOperationsInput | string | null
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    Text?: NullableStringFieldUpdateOperationsInput | string | null
    CompanyCode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataFBL5NUncheckedUpdateInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    GLAccount?: NullableStringFieldUpdateOperationsInput | string | null
    Reference?: NullableStringFieldUpdateOperationsInput | string | null
    Assignment?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    PostingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClearingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DocumentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NetDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SpecialGLInd?: NullableStringFieldUpdateOperationsInput | string | null
    BusinessArea?: NullableStringFieldUpdateOperationsInput | string | null
    Plant?: NullableStringFieldUpdateOperationsInput | string | null
    ProfitCenter?: NullableStringFieldUpdateOperationsInput | string | null
    Account?: NullableStringFieldUpdateOperationsInput | string | null
    CustomerName?: NullableStringFieldUpdateOperationsInput | string | null
    AmountDocCurr?: NullableFloatFieldUpdateOperationsInput | number | null
    DocumentCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    AmountLocalCurrency?: NullableFloatFieldUpdateOperationsInput | number | null
    LocalCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    ReverseClearing?: NullableStringFieldUpdateOperationsInput | string | null
    PostingKey?: NullableStringFieldUpdateOperationsInput | string | null
    DebitCreditInd?: NullableStringFieldUpdateOperationsInput | string | null
    ClearingDocument?: NullableStringFieldUpdateOperationsInput | string | null
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    Text?: NullableStringFieldUpdateOperationsInput | string | null
    CompanyCode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataFBL5NCreateManyInput = {
    GLAccount?: string | null
    Reference?: string | null
    Assignment?: string | null
    DocumentNumber?: string | null
    DocumentType?: string | null
    PostingDate?: Date | string | null
    ClearingDate?: Date | string | null
    DocumentDate?: Date | string | null
    NetDueDate?: Date | string | null
    SpecialGLInd?: string | null
    BusinessArea?: string | null
    Plant?: string | null
    ProfitCenter?: string | null
    Account?: string | null
    CustomerName?: string | null
    AmountDocCurr?: number | null
    DocumentCurrency?: string | null
    AmountLocalCurrency?: number | null
    LocalCurrency?: string | null
    ReverseClearing?: string | null
    PostingKey?: string | null
    DebitCreditInd?: string | null
    ClearingDocument?: string | null
    Username?: string | null
    Text?: string | null
    CompanyCode?: string | null
    created_at?: Date | string | null
    updated_at: Date | string
  }

  export type DataFBL5NUpdateManyMutationInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    GLAccount?: NullableStringFieldUpdateOperationsInput | string | null
    Reference?: NullableStringFieldUpdateOperationsInput | string | null
    Assignment?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    PostingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClearingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DocumentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NetDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SpecialGLInd?: NullableStringFieldUpdateOperationsInput | string | null
    BusinessArea?: NullableStringFieldUpdateOperationsInput | string | null
    Plant?: NullableStringFieldUpdateOperationsInput | string | null
    ProfitCenter?: NullableStringFieldUpdateOperationsInput | string | null
    Account?: NullableStringFieldUpdateOperationsInput | string | null
    CustomerName?: NullableStringFieldUpdateOperationsInput | string | null
    AmountDocCurr?: NullableFloatFieldUpdateOperationsInput | number | null
    DocumentCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    AmountLocalCurrency?: NullableFloatFieldUpdateOperationsInput | number | null
    LocalCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    ReverseClearing?: NullableStringFieldUpdateOperationsInput | string | null
    PostingKey?: NullableStringFieldUpdateOperationsInput | string | null
    DebitCreditInd?: NullableStringFieldUpdateOperationsInput | string | null
    ClearingDocument?: NullableStringFieldUpdateOperationsInput | string | null
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    Text?: NullableStringFieldUpdateOperationsInput | string | null
    CompanyCode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataFBL5NUncheckedUpdateManyInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    GLAccount?: NullableStringFieldUpdateOperationsInput | string | null
    Reference?: NullableStringFieldUpdateOperationsInput | string | null
    Assignment?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    PostingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClearingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DocumentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NetDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SpecialGLInd?: NullableStringFieldUpdateOperationsInput | string | null
    BusinessArea?: NullableStringFieldUpdateOperationsInput | string | null
    Plant?: NullableStringFieldUpdateOperationsInput | string | null
    ProfitCenter?: NullableStringFieldUpdateOperationsInput | string | null
    Account?: NullableStringFieldUpdateOperationsInput | string | null
    CustomerName?: NullableStringFieldUpdateOperationsInput | string | null
    AmountDocCurr?: NullableFloatFieldUpdateOperationsInput | number | null
    DocumentCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    AmountLocalCurrency?: NullableFloatFieldUpdateOperationsInput | number | null
    LocalCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    ReverseClearing?: NullableStringFieldUpdateOperationsInput | string | null
    PostingKey?: NullableStringFieldUpdateOperationsInput | string | null
    DebitCreditInd?: NullableStringFieldUpdateOperationsInput | string | null
    ClearingDocument?: NullableStringFieldUpdateOperationsInput | string | null
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    Text?: NullableStringFieldUpdateOperationsInput | string | null
    CompanyCode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataVF04CreateInput = {
    ID?: bigint | number
    BillCategory?: string | null
    SalesOrg?: bigint | number | null
    BillDate?: Date | string | null
    SoldToParty?: string | null
    BillType?: string | null
    Country?: string | null
    SalesDocument?: bigint | number | null
    DistributionChannel?: bigint | number | null
    Division?: bigint | number | null
    DocCategory?: string | null
    Address?: bigint | number | null
    NameSoldToParty?: string | null
    LocSoldToParty?: string | null
    SortTerm?: string | null
    ItemsRead?: string | null
    Counter?: string | null
    ShippingPoint?: string | null
    PODStatus?: string | null
    NetValue?: string | null
    DocCurrency?: string | null
    SDDocumentType?: string | null
    NameSDType?: string | null
    BDRSrcDoc?: string | null
    RefSys?: string | null
    DraftMode?: string | null
    DBDRef?: string | null
    SolutionOrder?: string | null
    BillDate2?: Date | string | null
    BillType2?: string | null
    Groups?: string | null
    PONumber?: string | null
    ShippingPointDesc?: string | null
    SOPOAmount?: number | null
    Exrate?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type DataVF04UncheckedCreateInput = {
    ID?: bigint | number
    BillCategory?: string | null
    SalesOrg?: bigint | number | null
    BillDate?: Date | string | null
    SoldToParty?: string | null
    BillType?: string | null
    Country?: string | null
    SalesDocument?: bigint | number | null
    DistributionChannel?: bigint | number | null
    Division?: bigint | number | null
    DocCategory?: string | null
    Address?: bigint | number | null
    NameSoldToParty?: string | null
    LocSoldToParty?: string | null
    SortTerm?: string | null
    ItemsRead?: string | null
    Counter?: string | null
    ShippingPoint?: string | null
    PODStatus?: string | null
    NetValue?: string | null
    DocCurrency?: string | null
    SDDocumentType?: string | null
    NameSDType?: string | null
    BDRSrcDoc?: string | null
    RefSys?: string | null
    DraftMode?: string | null
    DBDRef?: string | null
    SolutionOrder?: string | null
    BillDate2?: Date | string | null
    BillType2?: string | null
    Groups?: string | null
    PONumber?: string | null
    ShippingPointDesc?: string | null
    SOPOAmount?: number | null
    Exrate?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type DataVF04UpdateInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    BillCategory?: NullableStringFieldUpdateOperationsInput | string | null
    SalesOrg?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    BillDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SoldToParty?: NullableStringFieldUpdateOperationsInput | string | null
    BillType?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    SalesDocument?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    DistributionChannel?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Division?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    DocCategory?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    NameSoldToParty?: NullableStringFieldUpdateOperationsInput | string | null
    LocSoldToParty?: NullableStringFieldUpdateOperationsInput | string | null
    SortTerm?: NullableStringFieldUpdateOperationsInput | string | null
    ItemsRead?: NullableStringFieldUpdateOperationsInput | string | null
    Counter?: NullableStringFieldUpdateOperationsInput | string | null
    ShippingPoint?: NullableStringFieldUpdateOperationsInput | string | null
    PODStatus?: NullableStringFieldUpdateOperationsInput | string | null
    NetValue?: NullableStringFieldUpdateOperationsInput | string | null
    DocCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    SDDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    NameSDType?: NullableStringFieldUpdateOperationsInput | string | null
    BDRSrcDoc?: NullableStringFieldUpdateOperationsInput | string | null
    RefSys?: NullableStringFieldUpdateOperationsInput | string | null
    DraftMode?: NullableStringFieldUpdateOperationsInput | string | null
    DBDRef?: NullableStringFieldUpdateOperationsInput | string | null
    SolutionOrder?: NullableStringFieldUpdateOperationsInput | string | null
    BillDate2?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BillType2?: NullableStringFieldUpdateOperationsInput | string | null
    Groups?: NullableStringFieldUpdateOperationsInput | string | null
    PONumber?: NullableStringFieldUpdateOperationsInput | string | null
    ShippingPointDesc?: NullableStringFieldUpdateOperationsInput | string | null
    SOPOAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    Exrate?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DataVF04UncheckedUpdateInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    BillCategory?: NullableStringFieldUpdateOperationsInput | string | null
    SalesOrg?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    BillDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SoldToParty?: NullableStringFieldUpdateOperationsInput | string | null
    BillType?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    SalesDocument?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    DistributionChannel?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Division?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    DocCategory?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    NameSoldToParty?: NullableStringFieldUpdateOperationsInput | string | null
    LocSoldToParty?: NullableStringFieldUpdateOperationsInput | string | null
    SortTerm?: NullableStringFieldUpdateOperationsInput | string | null
    ItemsRead?: NullableStringFieldUpdateOperationsInput | string | null
    Counter?: NullableStringFieldUpdateOperationsInput | string | null
    ShippingPoint?: NullableStringFieldUpdateOperationsInput | string | null
    PODStatus?: NullableStringFieldUpdateOperationsInput | string | null
    NetValue?: NullableStringFieldUpdateOperationsInput | string | null
    DocCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    SDDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    NameSDType?: NullableStringFieldUpdateOperationsInput | string | null
    BDRSrcDoc?: NullableStringFieldUpdateOperationsInput | string | null
    RefSys?: NullableStringFieldUpdateOperationsInput | string | null
    DraftMode?: NullableStringFieldUpdateOperationsInput | string | null
    DBDRef?: NullableStringFieldUpdateOperationsInput | string | null
    SolutionOrder?: NullableStringFieldUpdateOperationsInput | string | null
    BillDate2?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BillType2?: NullableStringFieldUpdateOperationsInput | string | null
    Groups?: NullableStringFieldUpdateOperationsInput | string | null
    PONumber?: NullableStringFieldUpdateOperationsInput | string | null
    ShippingPointDesc?: NullableStringFieldUpdateOperationsInput | string | null
    SOPOAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    Exrate?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DataVF04CreateManyInput = {
    BillCategory?: string | null
    SalesOrg?: bigint | number | null
    BillDate?: Date | string | null
    SoldToParty?: string | null
    BillType?: string | null
    Country?: string | null
    SalesDocument?: bigint | number | null
    DistributionChannel?: bigint | number | null
    Division?: bigint | number | null
    DocCategory?: string | null
    Address?: bigint | number | null
    NameSoldToParty?: string | null
    LocSoldToParty?: string | null
    SortTerm?: string | null
    ItemsRead?: string | null
    Counter?: string | null
    ShippingPoint?: string | null
    PODStatus?: string | null
    NetValue?: string | null
    DocCurrency?: string | null
    SDDocumentType?: string | null
    NameSDType?: string | null
    BDRSrcDoc?: string | null
    RefSys?: string | null
    DraftMode?: string | null
    DBDRef?: string | null
    SolutionOrder?: string | null
    BillDate2?: Date | string | null
    BillType2?: string | null
    Groups?: string | null
    PONumber?: string | null
    ShippingPointDesc?: string | null
    SOPOAmount?: number | null
    Exrate?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type DataVF04UpdateManyMutationInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    BillCategory?: NullableStringFieldUpdateOperationsInput | string | null
    SalesOrg?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    BillDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SoldToParty?: NullableStringFieldUpdateOperationsInput | string | null
    BillType?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    SalesDocument?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    DistributionChannel?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Division?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    DocCategory?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    NameSoldToParty?: NullableStringFieldUpdateOperationsInput | string | null
    LocSoldToParty?: NullableStringFieldUpdateOperationsInput | string | null
    SortTerm?: NullableStringFieldUpdateOperationsInput | string | null
    ItemsRead?: NullableStringFieldUpdateOperationsInput | string | null
    Counter?: NullableStringFieldUpdateOperationsInput | string | null
    ShippingPoint?: NullableStringFieldUpdateOperationsInput | string | null
    PODStatus?: NullableStringFieldUpdateOperationsInput | string | null
    NetValue?: NullableStringFieldUpdateOperationsInput | string | null
    DocCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    SDDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    NameSDType?: NullableStringFieldUpdateOperationsInput | string | null
    BDRSrcDoc?: NullableStringFieldUpdateOperationsInput | string | null
    RefSys?: NullableStringFieldUpdateOperationsInput | string | null
    DraftMode?: NullableStringFieldUpdateOperationsInput | string | null
    DBDRef?: NullableStringFieldUpdateOperationsInput | string | null
    SolutionOrder?: NullableStringFieldUpdateOperationsInput | string | null
    BillDate2?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BillType2?: NullableStringFieldUpdateOperationsInput | string | null
    Groups?: NullableStringFieldUpdateOperationsInput | string | null
    PONumber?: NullableStringFieldUpdateOperationsInput | string | null
    ShippingPointDesc?: NullableStringFieldUpdateOperationsInput | string | null
    SOPOAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    Exrate?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DataVF04UncheckedUpdateManyInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    BillCategory?: NullableStringFieldUpdateOperationsInput | string | null
    SalesOrg?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    BillDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SoldToParty?: NullableStringFieldUpdateOperationsInput | string | null
    BillType?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    SalesDocument?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    DistributionChannel?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Division?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    DocCategory?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    NameSoldToParty?: NullableStringFieldUpdateOperationsInput | string | null
    LocSoldToParty?: NullableStringFieldUpdateOperationsInput | string | null
    SortTerm?: NullableStringFieldUpdateOperationsInput | string | null
    ItemsRead?: NullableStringFieldUpdateOperationsInput | string | null
    Counter?: NullableStringFieldUpdateOperationsInput | string | null
    ShippingPoint?: NullableStringFieldUpdateOperationsInput | string | null
    PODStatus?: NullableStringFieldUpdateOperationsInput | string | null
    NetValue?: NullableStringFieldUpdateOperationsInput | string | null
    DocCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    SDDocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    NameSDType?: NullableStringFieldUpdateOperationsInput | string | null
    BDRSrcDoc?: NullableStringFieldUpdateOperationsInput | string | null
    RefSys?: NullableStringFieldUpdateOperationsInput | string | null
    DraftMode?: NullableStringFieldUpdateOperationsInput | string | null
    DBDRef?: NullableStringFieldUpdateOperationsInput | string | null
    SolutionOrder?: NullableStringFieldUpdateOperationsInput | string | null
    BillDate2?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BillType2?: NullableStringFieldUpdateOperationsInput | string | null
    Groups?: NullableStringFieldUpdateOperationsInput | string | null
    PONumber?: NullableStringFieldUpdateOperationsInput | string | null
    ShippingPointDesc?: NullableStringFieldUpdateOperationsInput | string | null
    SOPOAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    Exrate?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type excelBaseUrlCreateInput = {
    guid: string
    excelName?: string | null
    url?: string | null
    created_at: Date | string
    updated_at: Date | string
    excelSheet?: excelSheetCreateNestedManyWithoutExcelBaseUrlInput
  }

  export type excelBaseUrlUncheckedCreateInput = {
    id?: number
    guid: string
    excelName?: string | null
    url?: string | null
    created_at: Date | string
    updated_at: Date | string
    excelSheet?: excelSheetUncheckedCreateNestedManyWithoutExcelBaseUrlInput
  }

  export type excelBaseUrlUpdateInput = {
    guid?: StringFieldUpdateOperationsInput | string
    excelName?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    excelSheet?: excelSheetUpdateManyWithoutExcelBaseUrlNestedInput
  }

  export type excelBaseUrlUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: StringFieldUpdateOperationsInput | string
    excelName?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    excelSheet?: excelSheetUncheckedUpdateManyWithoutExcelBaseUrlNestedInput
  }

  export type excelBaseUrlCreateManyInput = {
    guid: string
    excelName?: string | null
    url?: string | null
    created_at: Date | string
    updated_at: Date | string
  }

  export type excelBaseUrlUpdateManyMutationInput = {
    guid?: StringFieldUpdateOperationsInput | string
    excelName?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type excelBaseUrlUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: StringFieldUpdateOperationsInput | string
    excelName?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type excelSheetCreateInput = {
    sheetName?: string | null
    created_at: Date | string
    updated_at: Date | string
    excelBaseUrl: excelBaseUrlCreateNestedOneWithoutExcelSheetInput
  }

  export type excelSheetUncheckedCreateInput = {
    id?: number
    guid: string
    sheetName?: string | null
    created_at: Date | string
    updated_at: Date | string
  }

  export type excelSheetUpdateInput = {
    sheetName?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    excelBaseUrl?: excelBaseUrlUpdateOneRequiredWithoutExcelSheetNestedInput
  }

  export type excelSheetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: StringFieldUpdateOperationsInput | string
    sheetName?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type excelSheetCreateManyInput = {
    guid: string
    sheetName?: string | null
    created_at: Date | string
    updated_at: Date | string
  }

  export type excelSheetUpdateManyMutationInput = {
    sheetName?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type excelSheetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: StringFieldUpdateOperationsInput | string
    sheetName?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type logCreateInput = {
    guid?: string | null
    name?: string | null
    type?: string | null
    row?: number | null
    created_at: Date | string
    updated_at: Date | string
  }

  export type logUncheckedCreateInput = {
    id?: number
    guid?: string | null
    name?: string | null
    type?: string | null
    row?: number | null
    created_at: Date | string
    updated_at: Date | string
  }

  export type logUpdateInput = {
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    row?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type logUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    row?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type logCreateManyInput = {
    guid?: string | null
    name?: string | null
    type?: string | null
    row?: number | null
    created_at: Date | string
    updated_at: Date | string
  }

  export type logUpdateManyMutationInput = {
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    row?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type logUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    row?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ms_usersCreateInput = {
    name?: string | null
    username?: string | null
    password?: string | null
    divisi?: string | null
    departemen?: string | null
    email?: string | null
    role?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    trx_LogHistory_trx_LogHistory_PICBAToms_users?: trx_LogHistoryCreateNestedManyWithoutPic_baInput
    trx_LogHistory_trx_LogHistory_PICUserToms_users?: trx_LogHistoryCreateNestedManyWithoutPic_userInput
  }

  export type ms_usersUncheckedCreateInput = {
    id?: number
    name?: string | null
    username?: string | null
    password?: string | null
    divisi?: string | null
    departemen?: string | null
    email?: string | null
    role?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    trx_LogHistory_trx_LogHistory_PICBAToms_users?: trx_LogHistoryUncheckedCreateNestedManyWithoutPic_baInput
    trx_LogHistory_trx_LogHistory_PICUserToms_users?: trx_LogHistoryUncheckedCreateNestedManyWithoutPic_userInput
  }

  export type ms_usersUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    divisi?: NullableStringFieldUpdateOperationsInput | string | null
    departemen?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trx_LogHistory_trx_LogHistory_PICBAToms_users?: trx_LogHistoryUpdateManyWithoutPic_baNestedInput
    trx_LogHistory_trx_LogHistory_PICUserToms_users?: trx_LogHistoryUpdateManyWithoutPic_userNestedInput
  }

  export type ms_usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    divisi?: NullableStringFieldUpdateOperationsInput | string | null
    departemen?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trx_LogHistory_trx_LogHistory_PICBAToms_users?: trx_LogHistoryUncheckedUpdateManyWithoutPic_baNestedInput
    trx_LogHistory_trx_LogHistory_PICUserToms_users?: trx_LogHistoryUncheckedUpdateManyWithoutPic_userNestedInput
  }

  export type ms_usersCreateManyInput = {
    name?: string | null
    username?: string | null
    password?: string | null
    divisi?: string | null
    departemen?: string | null
    email?: string | null
    role?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ms_usersUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    divisi?: NullableStringFieldUpdateOperationsInput | string | null
    departemen?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ms_usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    divisi?: NullableStringFieldUpdateOperationsInput | string | null
    departemen?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Schedule_RecommendationCreateInput = {
    PN: string
    PRO?: bigint | number | null
    Product?: string | null
    ProductGroup?: string | null
    Process?: string | null
    Dependency?: string | null
    Maksimal_Produksi_per_Base?: number | null
    ProcessOrder?: string | null
    PlanStartDate?: Date | string | null
    PlanEndDate?: Date | string | null
    Start_Date?: Date | string | null
    End_Date?: Date | string | null
    Estimated_Material_Arrived?: Date | string | null
    Lead_Time_Process_Standar?: number | null
    Lead_Time_Estimation_Process?: number | null
    Process_Status?: string | null
    MPSDueDate?: Date | string | null
    Finished_Prediction?: Date | string | null
    Status_Unit_Delivery?: string | null
    Capacity_Utilization?: number | null
    Status_Capacity?: string | null
    Status_Material?: string | null
  }

  export type Schedule_RecommendationUncheckedCreateInput = {
    PN: string
    PRO?: bigint | number | null
    Product?: string | null
    ProductGroup?: string | null
    Process?: string | null
    Dependency?: string | null
    Maksimal_Produksi_per_Base?: number | null
    ProcessOrder?: string | null
    PlanStartDate?: Date | string | null
    PlanEndDate?: Date | string | null
    Start_Date?: Date | string | null
    End_Date?: Date | string | null
    Estimated_Material_Arrived?: Date | string | null
    Lead_Time_Process_Standar?: number | null
    Lead_Time_Estimation_Process?: number | null
    Process_Status?: string | null
    MPSDueDate?: Date | string | null
    Finished_Prediction?: Date | string | null
    Status_Unit_Delivery?: string | null
    Capacity_Utilization?: number | null
    Status_Capacity?: string | null
    Status_Material?: string | null
  }

  export type Schedule_RecommendationUpdateInput = {
    PN?: StringFieldUpdateOperationsInput | string
    PRO?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Product?: NullableStringFieldUpdateOperationsInput | string | null
    ProductGroup?: NullableStringFieldUpdateOperationsInput | string | null
    Process?: NullableStringFieldUpdateOperationsInput | string | null
    Dependency?: NullableStringFieldUpdateOperationsInput | string | null
    Maksimal_Produksi_per_Base?: NullableFloatFieldUpdateOperationsInput | number | null
    ProcessOrder?: NullableStringFieldUpdateOperationsInput | string | null
    PlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PlanEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Start_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    End_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Estimated_Material_Arrived?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Lead_Time_Process_Standar?: NullableFloatFieldUpdateOperationsInput | number | null
    Lead_Time_Estimation_Process?: NullableFloatFieldUpdateOperationsInput | number | null
    Process_Status?: NullableStringFieldUpdateOperationsInput | string | null
    MPSDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Finished_Prediction?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status_Unit_Delivery?: NullableStringFieldUpdateOperationsInput | string | null
    Capacity_Utilization?: NullableFloatFieldUpdateOperationsInput | number | null
    Status_Capacity?: NullableStringFieldUpdateOperationsInput | string | null
    Status_Material?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Schedule_RecommendationUncheckedUpdateInput = {
    PN?: StringFieldUpdateOperationsInput | string
    PRO?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Product?: NullableStringFieldUpdateOperationsInput | string | null
    ProductGroup?: NullableStringFieldUpdateOperationsInput | string | null
    Process?: NullableStringFieldUpdateOperationsInput | string | null
    Dependency?: NullableStringFieldUpdateOperationsInput | string | null
    Maksimal_Produksi_per_Base?: NullableFloatFieldUpdateOperationsInput | number | null
    ProcessOrder?: NullableStringFieldUpdateOperationsInput | string | null
    PlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PlanEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Start_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    End_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Estimated_Material_Arrived?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Lead_Time_Process_Standar?: NullableFloatFieldUpdateOperationsInput | number | null
    Lead_Time_Estimation_Process?: NullableFloatFieldUpdateOperationsInput | number | null
    Process_Status?: NullableStringFieldUpdateOperationsInput | string | null
    MPSDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Finished_Prediction?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status_Unit_Delivery?: NullableStringFieldUpdateOperationsInput | string | null
    Capacity_Utilization?: NullableFloatFieldUpdateOperationsInput | number | null
    Status_Capacity?: NullableStringFieldUpdateOperationsInput | string | null
    Status_Material?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Schedule_RecommendationCreateManyInput = {
    PN: string
    PRO?: bigint | number | null
    Product?: string | null
    ProductGroup?: string | null
    Process?: string | null
    Dependency?: string | null
    Maksimal_Produksi_per_Base?: number | null
    ProcessOrder?: string | null
    PlanStartDate?: Date | string | null
    PlanEndDate?: Date | string | null
    Start_Date?: Date | string | null
    End_Date?: Date | string | null
    Estimated_Material_Arrived?: Date | string | null
    Lead_Time_Process_Standar?: number | null
    Lead_Time_Estimation_Process?: number | null
    Process_Status?: string | null
    MPSDueDate?: Date | string | null
    Finished_Prediction?: Date | string | null
    Status_Unit_Delivery?: string | null
    Capacity_Utilization?: number | null
    Status_Capacity?: string | null
    Status_Material?: string | null
  }

  export type Schedule_RecommendationUpdateManyMutationInput = {
    PN?: StringFieldUpdateOperationsInput | string
    PRO?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Product?: NullableStringFieldUpdateOperationsInput | string | null
    ProductGroup?: NullableStringFieldUpdateOperationsInput | string | null
    Process?: NullableStringFieldUpdateOperationsInput | string | null
    Dependency?: NullableStringFieldUpdateOperationsInput | string | null
    Maksimal_Produksi_per_Base?: NullableFloatFieldUpdateOperationsInput | number | null
    ProcessOrder?: NullableStringFieldUpdateOperationsInput | string | null
    PlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PlanEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Start_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    End_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Estimated_Material_Arrived?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Lead_Time_Process_Standar?: NullableFloatFieldUpdateOperationsInput | number | null
    Lead_Time_Estimation_Process?: NullableFloatFieldUpdateOperationsInput | number | null
    Process_Status?: NullableStringFieldUpdateOperationsInput | string | null
    MPSDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Finished_Prediction?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status_Unit_Delivery?: NullableStringFieldUpdateOperationsInput | string | null
    Capacity_Utilization?: NullableFloatFieldUpdateOperationsInput | number | null
    Status_Capacity?: NullableStringFieldUpdateOperationsInput | string | null
    Status_Material?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Schedule_RecommendationUncheckedUpdateManyInput = {
    PN?: StringFieldUpdateOperationsInput | string
    PRO?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Product?: NullableStringFieldUpdateOperationsInput | string | null
    ProductGroup?: NullableStringFieldUpdateOperationsInput | string | null
    Process?: NullableStringFieldUpdateOperationsInput | string | null
    Dependency?: NullableStringFieldUpdateOperationsInput | string | null
    Maksimal_Produksi_per_Base?: NullableFloatFieldUpdateOperationsInput | number | null
    ProcessOrder?: NullableStringFieldUpdateOperationsInput | string | null
    PlanStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PlanEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Start_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    End_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Estimated_Material_Arrived?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Lead_Time_Process_Standar?: NullableFloatFieldUpdateOperationsInput | number | null
    Lead_Time_Estimation_Process?: NullableFloatFieldUpdateOperationsInput | number | null
    Process_Status?: NullableStringFieldUpdateOperationsInput | string | null
    MPSDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Finished_Prediction?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status_Unit_Delivery?: NullableStringFieldUpdateOperationsInput | string | null
    Capacity_Utilization?: NullableFloatFieldUpdateOperationsInput | number | null
    Status_Capacity?: NullableStringFieldUpdateOperationsInput | string | null
    Status_Material?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type siteRouteCreateInput = {
    guid: string
    baseUrl?: string | null
    siteName?: string | null
    url?: string | null
    created_at: Date | string
    updated_at: Date | string
  }

  export type siteRouteUncheckedCreateInput = {
    id?: number
    guid: string
    baseUrl?: string | null
    siteName?: string | null
    url?: string | null
    created_at: Date | string
    updated_at: Date | string
  }

  export type siteRouteUpdateInput = {
    guid?: StringFieldUpdateOperationsInput | string
    baseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    siteName?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type siteRouteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: StringFieldUpdateOperationsInput | string
    baseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    siteName?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type siteRouteCreateManyInput = {
    guid: string
    baseUrl?: string | null
    siteName?: string | null
    url?: string | null
    created_at: Date | string
    updated_at: Date | string
  }

  export type siteRouteUpdateManyMutationInput = {
    guid?: StringFieldUpdateOperationsInput | string
    baseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    siteName?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type siteRouteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: StringFieldUpdateOperationsInput | string
    baseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    siteName?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sysdiagramsCreateInput = {
    name: string
    principal_id: number
    version?: number | null
    definition?: Uint8Array | null
  }

  export type sysdiagramsUncheckedCreateInput = {
    name: string
    principal_id: number
    diagram_id?: number
    version?: number | null
    definition?: Uint8Array | null
  }

  export type sysdiagramsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    principal_id?: IntFieldUpdateOperationsInput | number
    version?: NullableIntFieldUpdateOperationsInput | number | null
    definition?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type sysdiagramsUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    principal_id?: IntFieldUpdateOperationsInput | number
    diagram_id?: IntFieldUpdateOperationsInput | number
    version?: NullableIntFieldUpdateOperationsInput | number | null
    definition?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type sysdiagramsCreateManyInput = {
    name: string
    principal_id: number
    version?: number | null
    definition?: Uint8Array | null
  }

  export type sysdiagramsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    principal_id?: IntFieldUpdateOperationsInput | number
    version?: NullableIntFieldUpdateOperationsInput | number | null
    definition?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type sysdiagramsUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    principal_id?: IntFieldUpdateOperationsInput | number
    diagram_id?: IntFieldUpdateOperationsInput | number
    version?: NullableIntFieldUpdateOperationsInput | number | null
    definition?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type trx_PICACreateInput = {
    created_at?: Date | string | null
    created_by?: number | null
    update_at?: Date | string | null
    update_by?: number | null
    trx_LogHistory?: trx_LogHistoryCreateNestedOneWithoutTrx_PICAInput
    trx_DetailPICA?: trx_DetailPICACreateNestedManyWithoutTrx_PICAInput
  }

  export type trx_PICAUncheckedCreateInput = {
    PICAID?: number
    IncidentID: number
    created_at?: Date | string | null
    created_by?: number | null
    update_at?: Date | string | null
    update_by?: number | null
    trx_DetailPICA?: trx_DetailPICAUncheckedCreateNestedManyWithoutTrx_PICAInput
  }

  export type trx_PICAUpdateInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_by?: NullableIntFieldUpdateOperationsInput | number | null
    trx_LogHistory?: trx_LogHistoryUpdateOneWithoutTrx_PICANestedInput
    trx_DetailPICA?: trx_DetailPICAUpdateManyWithoutTrx_PICANestedInput
  }

  export type trx_PICAUncheckedUpdateInput = {
    PICAID?: IntFieldUpdateOperationsInput | number
    IncidentID?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_by?: NullableIntFieldUpdateOperationsInput | number | null
    trx_DetailPICA?: trx_DetailPICAUncheckedUpdateManyWithoutTrx_PICANestedInput
  }

  export type trx_PICACreateManyInput = {
    IncidentID: number
    created_at?: Date | string | null
    created_by?: number | null
    update_at?: Date | string | null
    update_by?: number | null
  }

  export type trx_PICAUpdateManyMutationInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type trx_PICAUncheckedUpdateManyInput = {
    PICAID?: IntFieldUpdateOperationsInput | number
    IncidentID?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type trx_DetailPICACreateInput = {
    DetailPICAID: number
    Status?: string | null
    Problem?: string | null
    RootCaused?: string | null
    CorrectiveAction?: string | null
    PreventiveAction?: string | null
    trx_PICA?: trx_PICACreateNestedOneWithoutTrx_DetailPICAInput
  }

  export type trx_DetailPICAUncheckedCreateInput = {
    DetailPICAID: number
    PICAID?: number | null
    Status?: string | null
    Problem?: string | null
    RootCaused?: string | null
    CorrectiveAction?: string | null
    PreventiveAction?: string | null
  }

  export type trx_DetailPICAUpdateInput = {
    DetailPICAID?: IntFieldUpdateOperationsInput | number
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Problem?: NullableStringFieldUpdateOperationsInput | string | null
    RootCaused?: NullableStringFieldUpdateOperationsInput | string | null
    CorrectiveAction?: NullableStringFieldUpdateOperationsInput | string | null
    PreventiveAction?: NullableStringFieldUpdateOperationsInput | string | null
    trx_PICA?: trx_PICAUpdateOneWithoutTrx_DetailPICANestedInput
  }

  export type trx_DetailPICAUncheckedUpdateInput = {
    DetailPICAID?: IntFieldUpdateOperationsInput | number
    PICAID?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Problem?: NullableStringFieldUpdateOperationsInput | string | null
    RootCaused?: NullableStringFieldUpdateOperationsInput | string | null
    CorrectiveAction?: NullableStringFieldUpdateOperationsInput | string | null
    PreventiveAction?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type trx_DetailPICACreateManyInput = {
    DetailPICAID: number
    PICAID?: number | null
    Status?: string | null
    Problem?: string | null
    RootCaused?: string | null
    CorrectiveAction?: string | null
    PreventiveAction?: string | null
  }

  export type trx_DetailPICAUpdateManyMutationInput = {
    DetailPICAID?: IntFieldUpdateOperationsInput | number
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Problem?: NullableStringFieldUpdateOperationsInput | string | null
    RootCaused?: NullableStringFieldUpdateOperationsInput | string | null
    CorrectiveAction?: NullableStringFieldUpdateOperationsInput | string | null
    PreventiveAction?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type trx_DetailPICAUncheckedUpdateManyInput = {
    DetailPICAID?: IntFieldUpdateOperationsInput | number
    PICAID?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Problem?: NullableStringFieldUpdateOperationsInput | string | null
    RootCaused?: NullableStringFieldUpdateOperationsInput | string | null
    CorrectiveAction?: NullableStringFieldUpdateOperationsInput | string | null
    PreventiveAction?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersCreateInput = {
    guid: string
    name: string
    username: string
    password: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type usersUncheckedCreateInput = {
    id?: number
    guid: string
    name: string
    username: string
    password: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type usersUpdateInput = {
    guid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateManyInput = {
    guid: string
    name: string
    username: string
    password: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type usersUpdateManyMutationInput = {
    guid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type trx_LogHistoryCreateInput = {
    UnitSerialNumber?: string | null
    SalesDocument?: number | null
    DocumentNumber?: number | null
    POID?: number | null
    PROID?: number | null
    Description?: string | null
    IncidentType?: string | null
    BAEmailDate?: Date | string | null
    BAEmailStatus?: string | null
    UserEmailDate?: Date | string | null
    UserEmailStatus?: string | null
    OpenDate?: Date | string | null
    CloseDate?: Date | string | null
    FeedbackBA?: string | null
    FeedbackBADate?: Date | string | null
    FeedbackUser?: string | null
    FeedbackUserDate?: Date | string | null
    FlagStatus?: number | null
    Status?: string | null
    pic_ba?: ms_usersCreateNestedOneWithoutTrx_LogHistory_trx_LogHistory_PICBAToms_usersInput
    pic_user?: ms_usersCreateNestedOneWithoutTrx_LogHistory_trx_LogHistory_PICUserToms_usersInput
    trx_PICA?: trx_PICACreateNestedManyWithoutTrx_LogHistoryInput
  }

  export type trx_LogHistoryUncheckedCreateInput = {
    ID?: number
    UnitSerialNumber?: string | null
    SalesDocument?: number | null
    DocumentNumber?: number | null
    POID?: number | null
    PROID?: number | null
    Description?: string | null
    IncidentType?: string | null
    PICBA?: number | null
    BAEmailDate?: Date | string | null
    BAEmailStatus?: string | null
    PICUser?: number | null
    UserEmailDate?: Date | string | null
    UserEmailStatus?: string | null
    OpenDate?: Date | string | null
    CloseDate?: Date | string | null
    FeedbackBA?: string | null
    FeedbackBADate?: Date | string | null
    FeedbackUser?: string | null
    FeedbackUserDate?: Date | string | null
    FlagStatus?: number | null
    Status?: string | null
    trx_PICA?: trx_PICAUncheckedCreateNestedManyWithoutTrx_LogHistoryInput
  }

  export type trx_LogHistoryUpdateInput = {
    UnitSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    SalesDocument?: NullableIntFieldUpdateOperationsInput | number | null
    DocumentNumber?: NullableIntFieldUpdateOperationsInput | number | null
    POID?: NullableIntFieldUpdateOperationsInput | number | null
    PROID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    IncidentType?: NullableStringFieldUpdateOperationsInput | string | null
    BAEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BAEmailStatus?: NullableStringFieldUpdateOperationsInput | string | null
    UserEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserEmailStatus?: NullableStringFieldUpdateOperationsInput | string | null
    OpenDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CloseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FeedbackBA?: NullableStringFieldUpdateOperationsInput | string | null
    FeedbackBADate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FeedbackUser?: NullableStringFieldUpdateOperationsInput | string | null
    FeedbackUserDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FlagStatus?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    pic_ba?: ms_usersUpdateOneWithoutTrx_LogHistory_trx_LogHistory_PICBAToms_usersNestedInput
    pic_user?: ms_usersUpdateOneWithoutTrx_LogHistory_trx_LogHistory_PICUserToms_usersNestedInput
    trx_PICA?: trx_PICAUpdateManyWithoutTrx_LogHistoryNestedInput
  }

  export type trx_LogHistoryUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    UnitSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    SalesDocument?: NullableIntFieldUpdateOperationsInput | number | null
    DocumentNumber?: NullableIntFieldUpdateOperationsInput | number | null
    POID?: NullableIntFieldUpdateOperationsInput | number | null
    PROID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    IncidentType?: NullableStringFieldUpdateOperationsInput | string | null
    PICBA?: NullableIntFieldUpdateOperationsInput | number | null
    BAEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BAEmailStatus?: NullableStringFieldUpdateOperationsInput | string | null
    PICUser?: NullableIntFieldUpdateOperationsInput | number | null
    UserEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserEmailStatus?: NullableStringFieldUpdateOperationsInput | string | null
    OpenDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CloseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FeedbackBA?: NullableStringFieldUpdateOperationsInput | string | null
    FeedbackBADate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FeedbackUser?: NullableStringFieldUpdateOperationsInput | string | null
    FeedbackUserDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FlagStatus?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    trx_PICA?: trx_PICAUncheckedUpdateManyWithoutTrx_LogHistoryNestedInput
  }

  export type trx_LogHistoryCreateManyInput = {
    UnitSerialNumber?: string | null
    SalesDocument?: number | null
    DocumentNumber?: number | null
    POID?: number | null
    PROID?: number | null
    Description?: string | null
    IncidentType?: string | null
    PICBA?: number | null
    BAEmailDate?: Date | string | null
    BAEmailStatus?: string | null
    PICUser?: number | null
    UserEmailDate?: Date | string | null
    UserEmailStatus?: string | null
    OpenDate?: Date | string | null
    CloseDate?: Date | string | null
    FeedbackBA?: string | null
    FeedbackBADate?: Date | string | null
    FeedbackUser?: string | null
    FeedbackUserDate?: Date | string | null
    FlagStatus?: number | null
    Status?: string | null
  }

  export type trx_LogHistoryUpdateManyMutationInput = {
    UnitSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    SalesDocument?: NullableIntFieldUpdateOperationsInput | number | null
    DocumentNumber?: NullableIntFieldUpdateOperationsInput | number | null
    POID?: NullableIntFieldUpdateOperationsInput | number | null
    PROID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    IncidentType?: NullableStringFieldUpdateOperationsInput | string | null
    BAEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BAEmailStatus?: NullableStringFieldUpdateOperationsInput | string | null
    UserEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserEmailStatus?: NullableStringFieldUpdateOperationsInput | string | null
    OpenDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CloseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FeedbackBA?: NullableStringFieldUpdateOperationsInput | string | null
    FeedbackBADate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FeedbackUser?: NullableStringFieldUpdateOperationsInput | string | null
    FeedbackUserDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FlagStatus?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type trx_LogHistoryUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    UnitSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    SalesDocument?: NullableIntFieldUpdateOperationsInput | number | null
    DocumentNumber?: NullableIntFieldUpdateOperationsInput | number | null
    POID?: NullableIntFieldUpdateOperationsInput | number | null
    PROID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    IncidentType?: NullableStringFieldUpdateOperationsInput | string | null
    PICBA?: NullableIntFieldUpdateOperationsInput | number | null
    BAEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BAEmailStatus?: NullableStringFieldUpdateOperationsInput | string | null
    PICUser?: NullableIntFieldUpdateOperationsInput | number | null
    UserEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserEmailStatus?: NullableStringFieldUpdateOperationsInput | string | null
    OpenDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CloseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FeedbackBA?: NullableStringFieldUpdateOperationsInput | string | null
    FeedbackBADate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FeedbackUser?: NullableStringFieldUpdateOperationsInput | string | null
    FeedbackUserDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FlagStatus?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DataFBL5NCountOrderByAggregateInput = {
    ID?: SortOrder
    GLAccount?: SortOrder
    Reference?: SortOrder
    Assignment?: SortOrder
    DocumentNumber?: SortOrder
    DocumentType?: SortOrder
    PostingDate?: SortOrder
    ClearingDate?: SortOrder
    DocumentDate?: SortOrder
    NetDueDate?: SortOrder
    SpecialGLInd?: SortOrder
    BusinessArea?: SortOrder
    Plant?: SortOrder
    ProfitCenter?: SortOrder
    Account?: SortOrder
    CustomerName?: SortOrder
    AmountDocCurr?: SortOrder
    DocumentCurrency?: SortOrder
    AmountLocalCurrency?: SortOrder
    LocalCurrency?: SortOrder
    ReverseClearing?: SortOrder
    PostingKey?: SortOrder
    DebitCreditInd?: SortOrder
    ClearingDocument?: SortOrder
    Username?: SortOrder
    Text?: SortOrder
    CompanyCode?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DataFBL5NAvgOrderByAggregateInput = {
    ID?: SortOrder
    AmountDocCurr?: SortOrder
    AmountLocalCurrency?: SortOrder
  }

  export type DataFBL5NMaxOrderByAggregateInput = {
    ID?: SortOrder
    GLAccount?: SortOrder
    Reference?: SortOrder
    Assignment?: SortOrder
    DocumentNumber?: SortOrder
    DocumentType?: SortOrder
    PostingDate?: SortOrder
    ClearingDate?: SortOrder
    DocumentDate?: SortOrder
    NetDueDate?: SortOrder
    SpecialGLInd?: SortOrder
    BusinessArea?: SortOrder
    Plant?: SortOrder
    ProfitCenter?: SortOrder
    Account?: SortOrder
    CustomerName?: SortOrder
    AmountDocCurr?: SortOrder
    DocumentCurrency?: SortOrder
    AmountLocalCurrency?: SortOrder
    LocalCurrency?: SortOrder
    ReverseClearing?: SortOrder
    PostingKey?: SortOrder
    DebitCreditInd?: SortOrder
    ClearingDocument?: SortOrder
    Username?: SortOrder
    Text?: SortOrder
    CompanyCode?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DataFBL5NMinOrderByAggregateInput = {
    ID?: SortOrder
    GLAccount?: SortOrder
    Reference?: SortOrder
    Assignment?: SortOrder
    DocumentNumber?: SortOrder
    DocumentType?: SortOrder
    PostingDate?: SortOrder
    ClearingDate?: SortOrder
    DocumentDate?: SortOrder
    NetDueDate?: SortOrder
    SpecialGLInd?: SortOrder
    BusinessArea?: SortOrder
    Plant?: SortOrder
    ProfitCenter?: SortOrder
    Account?: SortOrder
    CustomerName?: SortOrder
    AmountDocCurr?: SortOrder
    DocumentCurrency?: SortOrder
    AmountLocalCurrency?: SortOrder
    LocalCurrency?: SortOrder
    ReverseClearing?: SortOrder
    PostingKey?: SortOrder
    DebitCreditInd?: SortOrder
    ClearingDocument?: SortOrder
    Username?: SortOrder
    Text?: SortOrder
    CompanyCode?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DataFBL5NSumOrderByAggregateInput = {
    ID?: SortOrder
    AmountDocCurr?: SortOrder
    AmountLocalCurrency?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type DataVF04CountOrderByAggregateInput = {
    ID?: SortOrder
    BillCategory?: SortOrder
    SalesOrg?: SortOrder
    BillDate?: SortOrder
    SoldToParty?: SortOrder
    BillType?: SortOrder
    Country?: SortOrder
    SalesDocument?: SortOrder
    DistributionChannel?: SortOrder
    Division?: SortOrder
    DocCategory?: SortOrder
    Address?: SortOrder
    NameSoldToParty?: SortOrder
    LocSoldToParty?: SortOrder
    SortTerm?: SortOrder
    ItemsRead?: SortOrder
    Counter?: SortOrder
    ShippingPoint?: SortOrder
    PODStatus?: SortOrder
    NetValue?: SortOrder
    DocCurrency?: SortOrder
    SDDocumentType?: SortOrder
    NameSDType?: SortOrder
    BDRSrcDoc?: SortOrder
    RefSys?: SortOrder
    DraftMode?: SortOrder
    DBDRef?: SortOrder
    SolutionOrder?: SortOrder
    BillDate2?: SortOrder
    BillType2?: SortOrder
    Groups?: SortOrder
    PONumber?: SortOrder
    ShippingPointDesc?: SortOrder
    SOPOAmount?: SortOrder
    Exrate?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DataVF04AvgOrderByAggregateInput = {
    ID?: SortOrder
    SalesOrg?: SortOrder
    SalesDocument?: SortOrder
    DistributionChannel?: SortOrder
    Division?: SortOrder
    Address?: SortOrder
    SOPOAmount?: SortOrder
    Exrate?: SortOrder
  }

  export type DataVF04MaxOrderByAggregateInput = {
    ID?: SortOrder
    BillCategory?: SortOrder
    SalesOrg?: SortOrder
    BillDate?: SortOrder
    SoldToParty?: SortOrder
    BillType?: SortOrder
    Country?: SortOrder
    SalesDocument?: SortOrder
    DistributionChannel?: SortOrder
    Division?: SortOrder
    DocCategory?: SortOrder
    Address?: SortOrder
    NameSoldToParty?: SortOrder
    LocSoldToParty?: SortOrder
    SortTerm?: SortOrder
    ItemsRead?: SortOrder
    Counter?: SortOrder
    ShippingPoint?: SortOrder
    PODStatus?: SortOrder
    NetValue?: SortOrder
    DocCurrency?: SortOrder
    SDDocumentType?: SortOrder
    NameSDType?: SortOrder
    BDRSrcDoc?: SortOrder
    RefSys?: SortOrder
    DraftMode?: SortOrder
    DBDRef?: SortOrder
    SolutionOrder?: SortOrder
    BillDate2?: SortOrder
    BillType2?: SortOrder
    Groups?: SortOrder
    PONumber?: SortOrder
    ShippingPointDesc?: SortOrder
    SOPOAmount?: SortOrder
    Exrate?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DataVF04MinOrderByAggregateInput = {
    ID?: SortOrder
    BillCategory?: SortOrder
    SalesOrg?: SortOrder
    BillDate?: SortOrder
    SoldToParty?: SortOrder
    BillType?: SortOrder
    Country?: SortOrder
    SalesDocument?: SortOrder
    DistributionChannel?: SortOrder
    Division?: SortOrder
    DocCategory?: SortOrder
    Address?: SortOrder
    NameSoldToParty?: SortOrder
    LocSoldToParty?: SortOrder
    SortTerm?: SortOrder
    ItemsRead?: SortOrder
    Counter?: SortOrder
    ShippingPoint?: SortOrder
    PODStatus?: SortOrder
    NetValue?: SortOrder
    DocCurrency?: SortOrder
    SDDocumentType?: SortOrder
    NameSDType?: SortOrder
    BDRSrcDoc?: SortOrder
    RefSys?: SortOrder
    DraftMode?: SortOrder
    DBDRef?: SortOrder
    SolutionOrder?: SortOrder
    BillDate2?: SortOrder
    BillType2?: SortOrder
    Groups?: SortOrder
    PONumber?: SortOrder
    ShippingPointDesc?: SortOrder
    SOPOAmount?: SortOrder
    Exrate?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DataVF04SumOrderByAggregateInput = {
    ID?: SortOrder
    SalesOrg?: SortOrder
    SalesDocument?: SortOrder
    DistributionChannel?: SortOrder
    Division?: SortOrder
    Address?: SortOrder
    SOPOAmount?: SortOrder
    Exrate?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
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

  export type ExcelSheetListRelationFilter = {
    every?: excelSheetWhereInput
    some?: excelSheetWhereInput
    none?: excelSheetWhereInput
  }

  export type excelSheetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type excelBaseUrlCountOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    excelName?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type excelBaseUrlAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type excelBaseUrlMaxOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    excelName?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type excelBaseUrlMinOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    excelName?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type excelBaseUrlSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type ExcelBaseUrlScalarRelationFilter = {
    is?: excelBaseUrlWhereInput
    isNot?: excelBaseUrlWhereInput
  }

  export type excelSheetCountOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    sheetName?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type excelSheetAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type excelSheetMaxOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    sheetName?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type excelSheetMinOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    sheetName?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type excelSheetSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type logCountOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    name?: SortOrder
    type?: SortOrder
    row?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type logAvgOrderByAggregateInput = {
    id?: SortOrder
    row?: SortOrder
  }

  export type logMaxOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    name?: SortOrder
    type?: SortOrder
    row?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type logMinOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    name?: SortOrder
    type?: SortOrder
    row?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type logSumOrderByAggregateInput = {
    id?: SortOrder
    row?: SortOrder
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

  export type Trx_LogHistoryListRelationFilter = {
    every?: trx_LogHistoryWhereInput
    some?: trx_LogHistoryWhereInput
    none?: trx_LogHistoryWhereInput
  }

  export type trx_LogHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ms_usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    divisi?: SortOrder
    departemen?: SortOrder
    email?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ms_usersAvgOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type ms_usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    divisi?: SortOrder
    departemen?: SortOrder
    email?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ms_usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    divisi?: SortOrder
    departemen?: SortOrder
    email?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ms_usersSumOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type Schedule_RecommendationCountOrderByAggregateInput = {
    PN?: SortOrder
    PRO?: SortOrder
    Product?: SortOrder
    ProductGroup?: SortOrder
    Process?: SortOrder
    Dependency?: SortOrder
    Maksimal_Produksi_per_Base?: SortOrder
    ProcessOrder?: SortOrder
    PlanStartDate?: SortOrder
    PlanEndDate?: SortOrder
    Start_Date?: SortOrder
    End_Date?: SortOrder
    Estimated_Material_Arrived?: SortOrder
    Lead_Time_Process_Standar?: SortOrder
    Lead_Time_Estimation_Process?: SortOrder
    Process_Status?: SortOrder
    MPSDueDate?: SortOrder
    Finished_Prediction?: SortOrder
    Status_Unit_Delivery?: SortOrder
    Capacity_Utilization?: SortOrder
    Status_Capacity?: SortOrder
    Status_Material?: SortOrder
  }

  export type Schedule_RecommendationAvgOrderByAggregateInput = {
    PRO?: SortOrder
    Maksimal_Produksi_per_Base?: SortOrder
    Lead_Time_Process_Standar?: SortOrder
    Lead_Time_Estimation_Process?: SortOrder
    Capacity_Utilization?: SortOrder
  }

  export type Schedule_RecommendationMaxOrderByAggregateInput = {
    PN?: SortOrder
    PRO?: SortOrder
    Product?: SortOrder
    ProductGroup?: SortOrder
    Process?: SortOrder
    Dependency?: SortOrder
    Maksimal_Produksi_per_Base?: SortOrder
    ProcessOrder?: SortOrder
    PlanStartDate?: SortOrder
    PlanEndDate?: SortOrder
    Start_Date?: SortOrder
    End_Date?: SortOrder
    Estimated_Material_Arrived?: SortOrder
    Lead_Time_Process_Standar?: SortOrder
    Lead_Time_Estimation_Process?: SortOrder
    Process_Status?: SortOrder
    MPSDueDate?: SortOrder
    Finished_Prediction?: SortOrder
    Status_Unit_Delivery?: SortOrder
    Capacity_Utilization?: SortOrder
    Status_Capacity?: SortOrder
    Status_Material?: SortOrder
  }

  export type Schedule_RecommendationMinOrderByAggregateInput = {
    PN?: SortOrder
    PRO?: SortOrder
    Product?: SortOrder
    ProductGroup?: SortOrder
    Process?: SortOrder
    Dependency?: SortOrder
    Maksimal_Produksi_per_Base?: SortOrder
    ProcessOrder?: SortOrder
    PlanStartDate?: SortOrder
    PlanEndDate?: SortOrder
    Start_Date?: SortOrder
    End_Date?: SortOrder
    Estimated_Material_Arrived?: SortOrder
    Lead_Time_Process_Standar?: SortOrder
    Lead_Time_Estimation_Process?: SortOrder
    Process_Status?: SortOrder
    MPSDueDate?: SortOrder
    Finished_Prediction?: SortOrder
    Status_Unit_Delivery?: SortOrder
    Capacity_Utilization?: SortOrder
    Status_Capacity?: SortOrder
    Status_Material?: SortOrder
  }

  export type Schedule_RecommendationSumOrderByAggregateInput = {
    PRO?: SortOrder
    Maksimal_Produksi_per_Base?: SortOrder
    Lead_Time_Process_Standar?: SortOrder
    Lead_Time_Estimation_Process?: SortOrder
    Capacity_Utilization?: SortOrder
  }

  export type siteRouteCountOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    baseUrl?: SortOrder
    siteName?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type siteRouteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type siteRouteMaxOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    baseUrl?: SortOrder
    siteName?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type siteRouteMinOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    baseUrl?: SortOrder
    siteName?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type siteRouteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type sysdiagramsPrincipal_idNameCompoundUniqueInput = {
    principal_id: number
    name: string
  }

  export type sysdiagramsCountOrderByAggregateInput = {
    name?: SortOrder
    principal_id?: SortOrder
    diagram_id?: SortOrder
    version?: SortOrder
    definition?: SortOrder
  }

  export type sysdiagramsAvgOrderByAggregateInput = {
    principal_id?: SortOrder
    diagram_id?: SortOrder
    version?: SortOrder
  }

  export type sysdiagramsMaxOrderByAggregateInput = {
    name?: SortOrder
    principal_id?: SortOrder
    diagram_id?: SortOrder
    version?: SortOrder
    definition?: SortOrder
  }

  export type sysdiagramsMinOrderByAggregateInput = {
    name?: SortOrder
    principal_id?: SortOrder
    diagram_id?: SortOrder
    version?: SortOrder
    definition?: SortOrder
  }

  export type sysdiagramsSumOrderByAggregateInput = {
    principal_id?: SortOrder
    diagram_id?: SortOrder
    version?: SortOrder
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type Trx_LogHistoryNullableScalarRelationFilter = {
    is?: trx_LogHistoryWhereInput | null
    isNot?: trx_LogHistoryWhereInput | null
  }

  export type Trx_DetailPICAListRelationFilter = {
    every?: trx_DetailPICAWhereInput
    some?: trx_DetailPICAWhereInput
    none?: trx_DetailPICAWhereInput
  }

  export type trx_DetailPICAOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type trx_PICACountOrderByAggregateInput = {
    PICAID?: SortOrder
    IncidentID?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    update_at?: SortOrder
    update_by?: SortOrder
  }

  export type trx_PICAAvgOrderByAggregateInput = {
    PICAID?: SortOrder
    IncidentID?: SortOrder
    created_by?: SortOrder
    update_by?: SortOrder
  }

  export type trx_PICAMaxOrderByAggregateInput = {
    PICAID?: SortOrder
    IncidentID?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    update_at?: SortOrder
    update_by?: SortOrder
  }

  export type trx_PICAMinOrderByAggregateInput = {
    PICAID?: SortOrder
    IncidentID?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    update_at?: SortOrder
    update_by?: SortOrder
  }

  export type trx_PICASumOrderByAggregateInput = {
    PICAID?: SortOrder
    IncidentID?: SortOrder
    created_by?: SortOrder
    update_by?: SortOrder
  }

  export type Trx_PICANullableScalarRelationFilter = {
    is?: trx_PICAWhereInput | null
    isNot?: trx_PICAWhereInput | null
  }

  export type trx_DetailPICACountOrderByAggregateInput = {
    DetailPICAID?: SortOrder
    PICAID?: SortOrder
    Status?: SortOrder
    Problem?: SortOrder
    RootCaused?: SortOrder
    CorrectiveAction?: SortOrder
    PreventiveAction?: SortOrder
  }

  export type trx_DetailPICAAvgOrderByAggregateInput = {
    DetailPICAID?: SortOrder
    PICAID?: SortOrder
  }

  export type trx_DetailPICAMaxOrderByAggregateInput = {
    DetailPICAID?: SortOrder
    PICAID?: SortOrder
    Status?: SortOrder
    Problem?: SortOrder
    RootCaused?: SortOrder
    CorrectiveAction?: SortOrder
    PreventiveAction?: SortOrder
  }

  export type trx_DetailPICAMinOrderByAggregateInput = {
    DetailPICAID?: SortOrder
    PICAID?: SortOrder
    Status?: SortOrder
    Problem?: SortOrder
    RootCaused?: SortOrder
    CorrectiveAction?: SortOrder
    PreventiveAction?: SortOrder
  }

  export type trx_DetailPICASumOrderByAggregateInput = {
    DetailPICAID?: SortOrder
    PICAID?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Ms_usersNullableScalarRelationFilter = {
    is?: ms_usersWhereInput | null
    isNot?: ms_usersWhereInput | null
  }

  export type Trx_PICAListRelationFilter = {
    every?: trx_PICAWhereInput
    some?: trx_PICAWhereInput
    none?: trx_PICAWhereInput
  }

  export type trx_PICAOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type trx_LogHistoryCountOrderByAggregateInput = {
    ID?: SortOrder
    UnitSerialNumber?: SortOrder
    SalesDocument?: SortOrder
    DocumentNumber?: SortOrder
    POID?: SortOrder
    PROID?: SortOrder
    Description?: SortOrder
    IncidentType?: SortOrder
    PICBA?: SortOrder
    BAEmailDate?: SortOrder
    BAEmailStatus?: SortOrder
    PICUser?: SortOrder
    UserEmailDate?: SortOrder
    UserEmailStatus?: SortOrder
    OpenDate?: SortOrder
    CloseDate?: SortOrder
    FeedbackBA?: SortOrder
    FeedbackBADate?: SortOrder
    FeedbackUser?: SortOrder
    FeedbackUserDate?: SortOrder
    FlagStatus?: SortOrder
    Status?: SortOrder
  }

  export type trx_LogHistoryAvgOrderByAggregateInput = {
    ID?: SortOrder
    SalesDocument?: SortOrder
    DocumentNumber?: SortOrder
    POID?: SortOrder
    PROID?: SortOrder
    PICBA?: SortOrder
    PICUser?: SortOrder
    FlagStatus?: SortOrder
  }

  export type trx_LogHistoryMaxOrderByAggregateInput = {
    ID?: SortOrder
    UnitSerialNumber?: SortOrder
    SalesDocument?: SortOrder
    DocumentNumber?: SortOrder
    POID?: SortOrder
    PROID?: SortOrder
    Description?: SortOrder
    IncidentType?: SortOrder
    PICBA?: SortOrder
    BAEmailDate?: SortOrder
    BAEmailStatus?: SortOrder
    PICUser?: SortOrder
    UserEmailDate?: SortOrder
    UserEmailStatus?: SortOrder
    OpenDate?: SortOrder
    CloseDate?: SortOrder
    FeedbackBA?: SortOrder
    FeedbackBADate?: SortOrder
    FeedbackUser?: SortOrder
    FeedbackUserDate?: SortOrder
    FlagStatus?: SortOrder
    Status?: SortOrder
  }

  export type trx_LogHistoryMinOrderByAggregateInput = {
    ID?: SortOrder
    UnitSerialNumber?: SortOrder
    SalesDocument?: SortOrder
    DocumentNumber?: SortOrder
    POID?: SortOrder
    PROID?: SortOrder
    Description?: SortOrder
    IncidentType?: SortOrder
    PICBA?: SortOrder
    BAEmailDate?: SortOrder
    BAEmailStatus?: SortOrder
    PICUser?: SortOrder
    UserEmailDate?: SortOrder
    UserEmailStatus?: SortOrder
    OpenDate?: SortOrder
    CloseDate?: SortOrder
    FeedbackBA?: SortOrder
    FeedbackBADate?: SortOrder
    FeedbackUser?: SortOrder
    FeedbackUserDate?: SortOrder
    FlagStatus?: SortOrder
    Status?: SortOrder
  }

  export type trx_LogHistorySumOrderByAggregateInput = {
    ID?: SortOrder
    SalesDocument?: SortOrder
    DocumentNumber?: SortOrder
    POID?: SortOrder
    PROID?: SortOrder
    PICBA?: SortOrder
    PICUser?: SortOrder
    FlagStatus?: SortOrder
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type excelSheetCreateNestedManyWithoutExcelBaseUrlInput = {
    create?: XOR<excelSheetCreateWithoutExcelBaseUrlInput, excelSheetUncheckedCreateWithoutExcelBaseUrlInput> | excelSheetCreateWithoutExcelBaseUrlInput[] | excelSheetUncheckedCreateWithoutExcelBaseUrlInput[]
    connectOrCreate?: excelSheetCreateOrConnectWithoutExcelBaseUrlInput | excelSheetCreateOrConnectWithoutExcelBaseUrlInput[]
    createMany?: excelSheetCreateManyExcelBaseUrlInputEnvelope
    connect?: excelSheetWhereUniqueInput | excelSheetWhereUniqueInput[]
  }

  export type excelSheetUncheckedCreateNestedManyWithoutExcelBaseUrlInput = {
    create?: XOR<excelSheetCreateWithoutExcelBaseUrlInput, excelSheetUncheckedCreateWithoutExcelBaseUrlInput> | excelSheetCreateWithoutExcelBaseUrlInput[] | excelSheetUncheckedCreateWithoutExcelBaseUrlInput[]
    connectOrCreate?: excelSheetCreateOrConnectWithoutExcelBaseUrlInput | excelSheetCreateOrConnectWithoutExcelBaseUrlInput[]
    createMany?: excelSheetCreateManyExcelBaseUrlInputEnvelope
    connect?: excelSheetWhereUniqueInput | excelSheetWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type excelSheetUpdateManyWithoutExcelBaseUrlNestedInput = {
    create?: XOR<excelSheetCreateWithoutExcelBaseUrlInput, excelSheetUncheckedCreateWithoutExcelBaseUrlInput> | excelSheetCreateWithoutExcelBaseUrlInput[] | excelSheetUncheckedCreateWithoutExcelBaseUrlInput[]
    connectOrCreate?: excelSheetCreateOrConnectWithoutExcelBaseUrlInput | excelSheetCreateOrConnectWithoutExcelBaseUrlInput[]
    upsert?: excelSheetUpsertWithWhereUniqueWithoutExcelBaseUrlInput | excelSheetUpsertWithWhereUniqueWithoutExcelBaseUrlInput[]
    createMany?: excelSheetCreateManyExcelBaseUrlInputEnvelope
    set?: excelSheetWhereUniqueInput | excelSheetWhereUniqueInput[]
    disconnect?: excelSheetWhereUniqueInput | excelSheetWhereUniqueInput[]
    delete?: excelSheetWhereUniqueInput | excelSheetWhereUniqueInput[]
    connect?: excelSheetWhereUniqueInput | excelSheetWhereUniqueInput[]
    update?: excelSheetUpdateWithWhereUniqueWithoutExcelBaseUrlInput | excelSheetUpdateWithWhereUniqueWithoutExcelBaseUrlInput[]
    updateMany?: excelSheetUpdateManyWithWhereWithoutExcelBaseUrlInput | excelSheetUpdateManyWithWhereWithoutExcelBaseUrlInput[]
    deleteMany?: excelSheetScalarWhereInput | excelSheetScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type excelSheetUncheckedUpdateManyWithoutExcelBaseUrlNestedInput = {
    create?: XOR<excelSheetCreateWithoutExcelBaseUrlInput, excelSheetUncheckedCreateWithoutExcelBaseUrlInput> | excelSheetCreateWithoutExcelBaseUrlInput[] | excelSheetUncheckedCreateWithoutExcelBaseUrlInput[]
    connectOrCreate?: excelSheetCreateOrConnectWithoutExcelBaseUrlInput | excelSheetCreateOrConnectWithoutExcelBaseUrlInput[]
    upsert?: excelSheetUpsertWithWhereUniqueWithoutExcelBaseUrlInput | excelSheetUpsertWithWhereUniqueWithoutExcelBaseUrlInput[]
    createMany?: excelSheetCreateManyExcelBaseUrlInputEnvelope
    set?: excelSheetWhereUniqueInput | excelSheetWhereUniqueInput[]
    disconnect?: excelSheetWhereUniqueInput | excelSheetWhereUniqueInput[]
    delete?: excelSheetWhereUniqueInput | excelSheetWhereUniqueInput[]
    connect?: excelSheetWhereUniqueInput | excelSheetWhereUniqueInput[]
    update?: excelSheetUpdateWithWhereUniqueWithoutExcelBaseUrlInput | excelSheetUpdateWithWhereUniqueWithoutExcelBaseUrlInput[]
    updateMany?: excelSheetUpdateManyWithWhereWithoutExcelBaseUrlInput | excelSheetUpdateManyWithWhereWithoutExcelBaseUrlInput[]
    deleteMany?: excelSheetScalarWhereInput | excelSheetScalarWhereInput[]
  }

  export type excelBaseUrlCreateNestedOneWithoutExcelSheetInput = {
    create?: XOR<excelBaseUrlCreateWithoutExcelSheetInput, excelBaseUrlUncheckedCreateWithoutExcelSheetInput>
    connectOrCreate?: excelBaseUrlCreateOrConnectWithoutExcelSheetInput
    connect?: excelBaseUrlWhereUniqueInput
  }

  export type excelBaseUrlUpdateOneRequiredWithoutExcelSheetNestedInput = {
    create?: XOR<excelBaseUrlCreateWithoutExcelSheetInput, excelBaseUrlUncheckedCreateWithoutExcelSheetInput>
    connectOrCreate?: excelBaseUrlCreateOrConnectWithoutExcelSheetInput
    upsert?: excelBaseUrlUpsertWithoutExcelSheetInput
    connect?: excelBaseUrlWhereUniqueInput
    update?: XOR<XOR<excelBaseUrlUpdateToOneWithWhereWithoutExcelSheetInput, excelBaseUrlUpdateWithoutExcelSheetInput>, excelBaseUrlUncheckedUpdateWithoutExcelSheetInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type trx_LogHistoryCreateNestedManyWithoutPic_baInput = {
    create?: XOR<trx_LogHistoryCreateWithoutPic_baInput, trx_LogHistoryUncheckedCreateWithoutPic_baInput> | trx_LogHistoryCreateWithoutPic_baInput[] | trx_LogHistoryUncheckedCreateWithoutPic_baInput[]
    connectOrCreate?: trx_LogHistoryCreateOrConnectWithoutPic_baInput | trx_LogHistoryCreateOrConnectWithoutPic_baInput[]
    createMany?: trx_LogHistoryCreateManyPic_baInputEnvelope
    connect?: trx_LogHistoryWhereUniqueInput | trx_LogHistoryWhereUniqueInput[]
  }

  export type trx_LogHistoryCreateNestedManyWithoutPic_userInput = {
    create?: XOR<trx_LogHistoryCreateWithoutPic_userInput, trx_LogHistoryUncheckedCreateWithoutPic_userInput> | trx_LogHistoryCreateWithoutPic_userInput[] | trx_LogHistoryUncheckedCreateWithoutPic_userInput[]
    connectOrCreate?: trx_LogHistoryCreateOrConnectWithoutPic_userInput | trx_LogHistoryCreateOrConnectWithoutPic_userInput[]
    createMany?: trx_LogHistoryCreateManyPic_userInputEnvelope
    connect?: trx_LogHistoryWhereUniqueInput | trx_LogHistoryWhereUniqueInput[]
  }

  export type trx_LogHistoryUncheckedCreateNestedManyWithoutPic_baInput = {
    create?: XOR<trx_LogHistoryCreateWithoutPic_baInput, trx_LogHistoryUncheckedCreateWithoutPic_baInput> | trx_LogHistoryCreateWithoutPic_baInput[] | trx_LogHistoryUncheckedCreateWithoutPic_baInput[]
    connectOrCreate?: trx_LogHistoryCreateOrConnectWithoutPic_baInput | trx_LogHistoryCreateOrConnectWithoutPic_baInput[]
    createMany?: trx_LogHistoryCreateManyPic_baInputEnvelope
    connect?: trx_LogHistoryWhereUniqueInput | trx_LogHistoryWhereUniqueInput[]
  }

  export type trx_LogHistoryUncheckedCreateNestedManyWithoutPic_userInput = {
    create?: XOR<trx_LogHistoryCreateWithoutPic_userInput, trx_LogHistoryUncheckedCreateWithoutPic_userInput> | trx_LogHistoryCreateWithoutPic_userInput[] | trx_LogHistoryUncheckedCreateWithoutPic_userInput[]
    connectOrCreate?: trx_LogHistoryCreateOrConnectWithoutPic_userInput | trx_LogHistoryCreateOrConnectWithoutPic_userInput[]
    createMany?: trx_LogHistoryCreateManyPic_userInputEnvelope
    connect?: trx_LogHistoryWhereUniqueInput | trx_LogHistoryWhereUniqueInput[]
  }

  export type trx_LogHistoryUpdateManyWithoutPic_baNestedInput = {
    create?: XOR<trx_LogHistoryCreateWithoutPic_baInput, trx_LogHistoryUncheckedCreateWithoutPic_baInput> | trx_LogHistoryCreateWithoutPic_baInput[] | trx_LogHistoryUncheckedCreateWithoutPic_baInput[]
    connectOrCreate?: trx_LogHistoryCreateOrConnectWithoutPic_baInput | trx_LogHistoryCreateOrConnectWithoutPic_baInput[]
    upsert?: trx_LogHistoryUpsertWithWhereUniqueWithoutPic_baInput | trx_LogHistoryUpsertWithWhereUniqueWithoutPic_baInput[]
    createMany?: trx_LogHistoryCreateManyPic_baInputEnvelope
    set?: trx_LogHistoryWhereUniqueInput | trx_LogHistoryWhereUniqueInput[]
    disconnect?: trx_LogHistoryWhereUniqueInput | trx_LogHistoryWhereUniqueInput[]
    delete?: trx_LogHistoryWhereUniqueInput | trx_LogHistoryWhereUniqueInput[]
    connect?: trx_LogHistoryWhereUniqueInput | trx_LogHistoryWhereUniqueInput[]
    update?: trx_LogHistoryUpdateWithWhereUniqueWithoutPic_baInput | trx_LogHistoryUpdateWithWhereUniqueWithoutPic_baInput[]
    updateMany?: trx_LogHistoryUpdateManyWithWhereWithoutPic_baInput | trx_LogHistoryUpdateManyWithWhereWithoutPic_baInput[]
    deleteMany?: trx_LogHistoryScalarWhereInput | trx_LogHistoryScalarWhereInput[]
  }

  export type trx_LogHistoryUpdateManyWithoutPic_userNestedInput = {
    create?: XOR<trx_LogHistoryCreateWithoutPic_userInput, trx_LogHistoryUncheckedCreateWithoutPic_userInput> | trx_LogHistoryCreateWithoutPic_userInput[] | trx_LogHistoryUncheckedCreateWithoutPic_userInput[]
    connectOrCreate?: trx_LogHistoryCreateOrConnectWithoutPic_userInput | trx_LogHistoryCreateOrConnectWithoutPic_userInput[]
    upsert?: trx_LogHistoryUpsertWithWhereUniqueWithoutPic_userInput | trx_LogHistoryUpsertWithWhereUniqueWithoutPic_userInput[]
    createMany?: trx_LogHistoryCreateManyPic_userInputEnvelope
    set?: trx_LogHistoryWhereUniqueInput | trx_LogHistoryWhereUniqueInput[]
    disconnect?: trx_LogHistoryWhereUniqueInput | trx_LogHistoryWhereUniqueInput[]
    delete?: trx_LogHistoryWhereUniqueInput | trx_LogHistoryWhereUniqueInput[]
    connect?: trx_LogHistoryWhereUniqueInput | trx_LogHistoryWhereUniqueInput[]
    update?: trx_LogHistoryUpdateWithWhereUniqueWithoutPic_userInput | trx_LogHistoryUpdateWithWhereUniqueWithoutPic_userInput[]
    updateMany?: trx_LogHistoryUpdateManyWithWhereWithoutPic_userInput | trx_LogHistoryUpdateManyWithWhereWithoutPic_userInput[]
    deleteMany?: trx_LogHistoryScalarWhereInput | trx_LogHistoryScalarWhereInput[]
  }

  export type trx_LogHistoryUncheckedUpdateManyWithoutPic_baNestedInput = {
    create?: XOR<trx_LogHistoryCreateWithoutPic_baInput, trx_LogHistoryUncheckedCreateWithoutPic_baInput> | trx_LogHistoryCreateWithoutPic_baInput[] | trx_LogHistoryUncheckedCreateWithoutPic_baInput[]
    connectOrCreate?: trx_LogHistoryCreateOrConnectWithoutPic_baInput | trx_LogHistoryCreateOrConnectWithoutPic_baInput[]
    upsert?: trx_LogHistoryUpsertWithWhereUniqueWithoutPic_baInput | trx_LogHistoryUpsertWithWhereUniqueWithoutPic_baInput[]
    createMany?: trx_LogHistoryCreateManyPic_baInputEnvelope
    set?: trx_LogHistoryWhereUniqueInput | trx_LogHistoryWhereUniqueInput[]
    disconnect?: trx_LogHistoryWhereUniqueInput | trx_LogHistoryWhereUniqueInput[]
    delete?: trx_LogHistoryWhereUniqueInput | trx_LogHistoryWhereUniqueInput[]
    connect?: trx_LogHistoryWhereUniqueInput | trx_LogHistoryWhereUniqueInput[]
    update?: trx_LogHistoryUpdateWithWhereUniqueWithoutPic_baInput | trx_LogHistoryUpdateWithWhereUniqueWithoutPic_baInput[]
    updateMany?: trx_LogHistoryUpdateManyWithWhereWithoutPic_baInput | trx_LogHistoryUpdateManyWithWhereWithoutPic_baInput[]
    deleteMany?: trx_LogHistoryScalarWhereInput | trx_LogHistoryScalarWhereInput[]
  }

  export type trx_LogHistoryUncheckedUpdateManyWithoutPic_userNestedInput = {
    create?: XOR<trx_LogHistoryCreateWithoutPic_userInput, trx_LogHistoryUncheckedCreateWithoutPic_userInput> | trx_LogHistoryCreateWithoutPic_userInput[] | trx_LogHistoryUncheckedCreateWithoutPic_userInput[]
    connectOrCreate?: trx_LogHistoryCreateOrConnectWithoutPic_userInput | trx_LogHistoryCreateOrConnectWithoutPic_userInput[]
    upsert?: trx_LogHistoryUpsertWithWhereUniqueWithoutPic_userInput | trx_LogHistoryUpsertWithWhereUniqueWithoutPic_userInput[]
    createMany?: trx_LogHistoryCreateManyPic_userInputEnvelope
    set?: trx_LogHistoryWhereUniqueInput | trx_LogHistoryWhereUniqueInput[]
    disconnect?: trx_LogHistoryWhereUniqueInput | trx_LogHistoryWhereUniqueInput[]
    delete?: trx_LogHistoryWhereUniqueInput | trx_LogHistoryWhereUniqueInput[]
    connect?: trx_LogHistoryWhereUniqueInput | trx_LogHistoryWhereUniqueInput[]
    update?: trx_LogHistoryUpdateWithWhereUniqueWithoutPic_userInput | trx_LogHistoryUpdateWithWhereUniqueWithoutPic_userInput[]
    updateMany?: trx_LogHistoryUpdateManyWithWhereWithoutPic_userInput | trx_LogHistoryUpdateManyWithWhereWithoutPic_userInput[]
    deleteMany?: trx_LogHistoryScalarWhereInput | trx_LogHistoryScalarWhereInput[]
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Uint8Array | null
  }

  export type trx_LogHistoryCreateNestedOneWithoutTrx_PICAInput = {
    create?: XOR<trx_LogHistoryCreateWithoutTrx_PICAInput, trx_LogHistoryUncheckedCreateWithoutTrx_PICAInput>
    connectOrCreate?: trx_LogHistoryCreateOrConnectWithoutTrx_PICAInput
    connect?: trx_LogHistoryWhereUniqueInput
  }

  export type trx_DetailPICACreateNestedManyWithoutTrx_PICAInput = {
    create?: XOR<trx_DetailPICACreateWithoutTrx_PICAInput, trx_DetailPICAUncheckedCreateWithoutTrx_PICAInput> | trx_DetailPICACreateWithoutTrx_PICAInput[] | trx_DetailPICAUncheckedCreateWithoutTrx_PICAInput[]
    connectOrCreate?: trx_DetailPICACreateOrConnectWithoutTrx_PICAInput | trx_DetailPICACreateOrConnectWithoutTrx_PICAInput[]
    createMany?: trx_DetailPICACreateManyTrx_PICAInputEnvelope
    connect?: trx_DetailPICAWhereUniqueInput | trx_DetailPICAWhereUniqueInput[]
  }

  export type trx_DetailPICAUncheckedCreateNestedManyWithoutTrx_PICAInput = {
    create?: XOR<trx_DetailPICACreateWithoutTrx_PICAInput, trx_DetailPICAUncheckedCreateWithoutTrx_PICAInput> | trx_DetailPICACreateWithoutTrx_PICAInput[] | trx_DetailPICAUncheckedCreateWithoutTrx_PICAInput[]
    connectOrCreate?: trx_DetailPICACreateOrConnectWithoutTrx_PICAInput | trx_DetailPICACreateOrConnectWithoutTrx_PICAInput[]
    createMany?: trx_DetailPICACreateManyTrx_PICAInputEnvelope
    connect?: trx_DetailPICAWhereUniqueInput | trx_DetailPICAWhereUniqueInput[]
  }

  export type trx_LogHistoryUpdateOneWithoutTrx_PICANestedInput = {
    create?: XOR<trx_LogHistoryCreateWithoutTrx_PICAInput, trx_LogHistoryUncheckedCreateWithoutTrx_PICAInput>
    connectOrCreate?: trx_LogHistoryCreateOrConnectWithoutTrx_PICAInput
    upsert?: trx_LogHistoryUpsertWithoutTrx_PICAInput
    disconnect?: trx_LogHistoryWhereInput | boolean
    delete?: trx_LogHistoryWhereInput | boolean
    connect?: trx_LogHistoryWhereUniqueInput
    update?: XOR<XOR<trx_LogHistoryUpdateToOneWithWhereWithoutTrx_PICAInput, trx_LogHistoryUpdateWithoutTrx_PICAInput>, trx_LogHistoryUncheckedUpdateWithoutTrx_PICAInput>
  }

  export type trx_DetailPICAUpdateManyWithoutTrx_PICANestedInput = {
    create?: XOR<trx_DetailPICACreateWithoutTrx_PICAInput, trx_DetailPICAUncheckedCreateWithoutTrx_PICAInput> | trx_DetailPICACreateWithoutTrx_PICAInput[] | trx_DetailPICAUncheckedCreateWithoutTrx_PICAInput[]
    connectOrCreate?: trx_DetailPICACreateOrConnectWithoutTrx_PICAInput | trx_DetailPICACreateOrConnectWithoutTrx_PICAInput[]
    upsert?: trx_DetailPICAUpsertWithWhereUniqueWithoutTrx_PICAInput | trx_DetailPICAUpsertWithWhereUniqueWithoutTrx_PICAInput[]
    createMany?: trx_DetailPICACreateManyTrx_PICAInputEnvelope
    set?: trx_DetailPICAWhereUniqueInput | trx_DetailPICAWhereUniqueInput[]
    disconnect?: trx_DetailPICAWhereUniqueInput | trx_DetailPICAWhereUniqueInput[]
    delete?: trx_DetailPICAWhereUniqueInput | trx_DetailPICAWhereUniqueInput[]
    connect?: trx_DetailPICAWhereUniqueInput | trx_DetailPICAWhereUniqueInput[]
    update?: trx_DetailPICAUpdateWithWhereUniqueWithoutTrx_PICAInput | trx_DetailPICAUpdateWithWhereUniqueWithoutTrx_PICAInput[]
    updateMany?: trx_DetailPICAUpdateManyWithWhereWithoutTrx_PICAInput | trx_DetailPICAUpdateManyWithWhereWithoutTrx_PICAInput[]
    deleteMany?: trx_DetailPICAScalarWhereInput | trx_DetailPICAScalarWhereInput[]
  }

  export type trx_DetailPICAUncheckedUpdateManyWithoutTrx_PICANestedInput = {
    create?: XOR<trx_DetailPICACreateWithoutTrx_PICAInput, trx_DetailPICAUncheckedCreateWithoutTrx_PICAInput> | trx_DetailPICACreateWithoutTrx_PICAInput[] | trx_DetailPICAUncheckedCreateWithoutTrx_PICAInput[]
    connectOrCreate?: trx_DetailPICACreateOrConnectWithoutTrx_PICAInput | trx_DetailPICACreateOrConnectWithoutTrx_PICAInput[]
    upsert?: trx_DetailPICAUpsertWithWhereUniqueWithoutTrx_PICAInput | trx_DetailPICAUpsertWithWhereUniqueWithoutTrx_PICAInput[]
    createMany?: trx_DetailPICACreateManyTrx_PICAInputEnvelope
    set?: trx_DetailPICAWhereUniqueInput | trx_DetailPICAWhereUniqueInput[]
    disconnect?: trx_DetailPICAWhereUniqueInput | trx_DetailPICAWhereUniqueInput[]
    delete?: trx_DetailPICAWhereUniqueInput | trx_DetailPICAWhereUniqueInput[]
    connect?: trx_DetailPICAWhereUniqueInput | trx_DetailPICAWhereUniqueInput[]
    update?: trx_DetailPICAUpdateWithWhereUniqueWithoutTrx_PICAInput | trx_DetailPICAUpdateWithWhereUniqueWithoutTrx_PICAInput[]
    updateMany?: trx_DetailPICAUpdateManyWithWhereWithoutTrx_PICAInput | trx_DetailPICAUpdateManyWithWhereWithoutTrx_PICAInput[]
    deleteMany?: trx_DetailPICAScalarWhereInput | trx_DetailPICAScalarWhereInput[]
  }

  export type trx_PICACreateNestedOneWithoutTrx_DetailPICAInput = {
    create?: XOR<trx_PICACreateWithoutTrx_DetailPICAInput, trx_PICAUncheckedCreateWithoutTrx_DetailPICAInput>
    connectOrCreate?: trx_PICACreateOrConnectWithoutTrx_DetailPICAInput
    connect?: trx_PICAWhereUniqueInput
  }

  export type trx_PICAUpdateOneWithoutTrx_DetailPICANestedInput = {
    create?: XOR<trx_PICACreateWithoutTrx_DetailPICAInput, trx_PICAUncheckedCreateWithoutTrx_DetailPICAInput>
    connectOrCreate?: trx_PICACreateOrConnectWithoutTrx_DetailPICAInput
    upsert?: trx_PICAUpsertWithoutTrx_DetailPICAInput
    disconnect?: trx_PICAWhereInput | boolean
    delete?: trx_PICAWhereInput | boolean
    connect?: trx_PICAWhereUniqueInput
    update?: XOR<XOR<trx_PICAUpdateToOneWithWhereWithoutTrx_DetailPICAInput, trx_PICAUpdateWithoutTrx_DetailPICAInput>, trx_PICAUncheckedUpdateWithoutTrx_DetailPICAInput>
  }

  export type ms_usersCreateNestedOneWithoutTrx_LogHistory_trx_LogHistory_PICBAToms_usersInput = {
    create?: XOR<ms_usersCreateWithoutTrx_LogHistory_trx_LogHistory_PICBAToms_usersInput, ms_usersUncheckedCreateWithoutTrx_LogHistory_trx_LogHistory_PICBAToms_usersInput>
    connectOrCreate?: ms_usersCreateOrConnectWithoutTrx_LogHistory_trx_LogHistory_PICBAToms_usersInput
    connect?: ms_usersWhereUniqueInput
  }

  export type ms_usersCreateNestedOneWithoutTrx_LogHistory_trx_LogHistory_PICUserToms_usersInput = {
    create?: XOR<ms_usersCreateWithoutTrx_LogHistory_trx_LogHistory_PICUserToms_usersInput, ms_usersUncheckedCreateWithoutTrx_LogHistory_trx_LogHistory_PICUserToms_usersInput>
    connectOrCreate?: ms_usersCreateOrConnectWithoutTrx_LogHistory_trx_LogHistory_PICUserToms_usersInput
    connect?: ms_usersWhereUniqueInput
  }

  export type trx_PICACreateNestedManyWithoutTrx_LogHistoryInput = {
    create?: XOR<trx_PICACreateWithoutTrx_LogHistoryInput, trx_PICAUncheckedCreateWithoutTrx_LogHistoryInput> | trx_PICACreateWithoutTrx_LogHistoryInput[] | trx_PICAUncheckedCreateWithoutTrx_LogHistoryInput[]
    connectOrCreate?: trx_PICACreateOrConnectWithoutTrx_LogHistoryInput | trx_PICACreateOrConnectWithoutTrx_LogHistoryInput[]
    createMany?: trx_PICACreateManyTrx_LogHistoryInputEnvelope
    connect?: trx_PICAWhereUniqueInput | trx_PICAWhereUniqueInput[]
  }

  export type trx_PICAUncheckedCreateNestedManyWithoutTrx_LogHistoryInput = {
    create?: XOR<trx_PICACreateWithoutTrx_LogHistoryInput, trx_PICAUncheckedCreateWithoutTrx_LogHistoryInput> | trx_PICACreateWithoutTrx_LogHistoryInput[] | trx_PICAUncheckedCreateWithoutTrx_LogHistoryInput[]
    connectOrCreate?: trx_PICACreateOrConnectWithoutTrx_LogHistoryInput | trx_PICACreateOrConnectWithoutTrx_LogHistoryInput[]
    createMany?: trx_PICACreateManyTrx_LogHistoryInputEnvelope
    connect?: trx_PICAWhereUniqueInput | trx_PICAWhereUniqueInput[]
  }

  export type ms_usersUpdateOneWithoutTrx_LogHistory_trx_LogHistory_PICBAToms_usersNestedInput = {
    create?: XOR<ms_usersCreateWithoutTrx_LogHistory_trx_LogHistory_PICBAToms_usersInput, ms_usersUncheckedCreateWithoutTrx_LogHistory_trx_LogHistory_PICBAToms_usersInput>
    connectOrCreate?: ms_usersCreateOrConnectWithoutTrx_LogHistory_trx_LogHistory_PICBAToms_usersInput
    upsert?: ms_usersUpsertWithoutTrx_LogHistory_trx_LogHistory_PICBAToms_usersInput
    disconnect?: ms_usersWhereInput | boolean
    delete?: ms_usersWhereInput | boolean
    connect?: ms_usersWhereUniqueInput
    update?: XOR<XOR<ms_usersUpdateToOneWithWhereWithoutTrx_LogHistory_trx_LogHistory_PICBAToms_usersInput, ms_usersUpdateWithoutTrx_LogHistory_trx_LogHistory_PICBAToms_usersInput>, ms_usersUncheckedUpdateWithoutTrx_LogHistory_trx_LogHistory_PICBAToms_usersInput>
  }

  export type ms_usersUpdateOneWithoutTrx_LogHistory_trx_LogHistory_PICUserToms_usersNestedInput = {
    create?: XOR<ms_usersCreateWithoutTrx_LogHistory_trx_LogHistory_PICUserToms_usersInput, ms_usersUncheckedCreateWithoutTrx_LogHistory_trx_LogHistory_PICUserToms_usersInput>
    connectOrCreate?: ms_usersCreateOrConnectWithoutTrx_LogHistory_trx_LogHistory_PICUserToms_usersInput
    upsert?: ms_usersUpsertWithoutTrx_LogHistory_trx_LogHistory_PICUserToms_usersInput
    disconnect?: ms_usersWhereInput | boolean
    delete?: ms_usersWhereInput | boolean
    connect?: ms_usersWhereUniqueInput
    update?: XOR<XOR<ms_usersUpdateToOneWithWhereWithoutTrx_LogHistory_trx_LogHistory_PICUserToms_usersInput, ms_usersUpdateWithoutTrx_LogHistory_trx_LogHistory_PICUserToms_usersInput>, ms_usersUncheckedUpdateWithoutTrx_LogHistory_trx_LogHistory_PICUserToms_usersInput>
  }

  export type trx_PICAUpdateManyWithoutTrx_LogHistoryNestedInput = {
    create?: XOR<trx_PICACreateWithoutTrx_LogHistoryInput, trx_PICAUncheckedCreateWithoutTrx_LogHistoryInput> | trx_PICACreateWithoutTrx_LogHistoryInput[] | trx_PICAUncheckedCreateWithoutTrx_LogHistoryInput[]
    connectOrCreate?: trx_PICACreateOrConnectWithoutTrx_LogHistoryInput | trx_PICACreateOrConnectWithoutTrx_LogHistoryInput[]
    upsert?: trx_PICAUpsertWithWhereUniqueWithoutTrx_LogHistoryInput | trx_PICAUpsertWithWhereUniqueWithoutTrx_LogHistoryInput[]
    createMany?: trx_PICACreateManyTrx_LogHistoryInputEnvelope
    set?: trx_PICAWhereUniqueInput | trx_PICAWhereUniqueInput[]
    disconnect?: trx_PICAWhereUniqueInput | trx_PICAWhereUniqueInput[]
    delete?: trx_PICAWhereUniqueInput | trx_PICAWhereUniqueInput[]
    connect?: trx_PICAWhereUniqueInput | trx_PICAWhereUniqueInput[]
    update?: trx_PICAUpdateWithWhereUniqueWithoutTrx_LogHistoryInput | trx_PICAUpdateWithWhereUniqueWithoutTrx_LogHistoryInput[]
    updateMany?: trx_PICAUpdateManyWithWhereWithoutTrx_LogHistoryInput | trx_PICAUpdateManyWithWhereWithoutTrx_LogHistoryInput[]
    deleteMany?: trx_PICAScalarWhereInput | trx_PICAScalarWhereInput[]
  }

  export type trx_PICAUncheckedUpdateManyWithoutTrx_LogHistoryNestedInput = {
    create?: XOR<trx_PICACreateWithoutTrx_LogHistoryInput, trx_PICAUncheckedCreateWithoutTrx_LogHistoryInput> | trx_PICACreateWithoutTrx_LogHistoryInput[] | trx_PICAUncheckedCreateWithoutTrx_LogHistoryInput[]
    connectOrCreate?: trx_PICACreateOrConnectWithoutTrx_LogHistoryInput | trx_PICACreateOrConnectWithoutTrx_LogHistoryInput[]
    upsert?: trx_PICAUpsertWithWhereUniqueWithoutTrx_LogHistoryInput | trx_PICAUpsertWithWhereUniqueWithoutTrx_LogHistoryInput[]
    createMany?: trx_PICACreateManyTrx_LogHistoryInputEnvelope
    set?: trx_PICAWhereUniqueInput | trx_PICAWhereUniqueInput[]
    disconnect?: trx_PICAWhereUniqueInput | trx_PICAWhereUniqueInput[]
    delete?: trx_PICAWhereUniqueInput | trx_PICAWhereUniqueInput[]
    connect?: trx_PICAWhereUniqueInput | trx_PICAWhereUniqueInput[]
    update?: trx_PICAUpdateWithWhereUniqueWithoutTrx_LogHistoryInput | trx_PICAUpdateWithWhereUniqueWithoutTrx_LogHistoryInput[]
    updateMany?: trx_PICAUpdateManyWithWhereWithoutTrx_LogHistoryInput | trx_PICAUpdateManyWithWhereWithoutTrx_LogHistoryInput[]
    deleteMany?: trx_PICAScalarWhereInput | trx_PICAScalarWhereInput[]
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
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

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type excelSheetCreateWithoutExcelBaseUrlInput = {
    sheetName?: string | null
    created_at: Date | string
    updated_at: Date | string
  }

  export type excelSheetUncheckedCreateWithoutExcelBaseUrlInput = {
    id?: number
    sheetName?: string | null
    created_at: Date | string
    updated_at: Date | string
  }

  export type excelSheetCreateOrConnectWithoutExcelBaseUrlInput = {
    where: excelSheetWhereUniqueInput
    create: XOR<excelSheetCreateWithoutExcelBaseUrlInput, excelSheetUncheckedCreateWithoutExcelBaseUrlInput>
  }

  export type excelSheetCreateManyExcelBaseUrlInputEnvelope = {
    data: excelSheetCreateManyExcelBaseUrlInput | excelSheetCreateManyExcelBaseUrlInput[]
  }

  export type excelSheetUpsertWithWhereUniqueWithoutExcelBaseUrlInput = {
    where: excelSheetWhereUniqueInput
    update: XOR<excelSheetUpdateWithoutExcelBaseUrlInput, excelSheetUncheckedUpdateWithoutExcelBaseUrlInput>
    create: XOR<excelSheetCreateWithoutExcelBaseUrlInput, excelSheetUncheckedCreateWithoutExcelBaseUrlInput>
  }

  export type excelSheetUpdateWithWhereUniqueWithoutExcelBaseUrlInput = {
    where: excelSheetWhereUniqueInput
    data: XOR<excelSheetUpdateWithoutExcelBaseUrlInput, excelSheetUncheckedUpdateWithoutExcelBaseUrlInput>
  }

  export type excelSheetUpdateManyWithWhereWithoutExcelBaseUrlInput = {
    where: excelSheetScalarWhereInput
    data: XOR<excelSheetUpdateManyMutationInput, excelSheetUncheckedUpdateManyWithoutExcelBaseUrlInput>
  }

  export type excelSheetScalarWhereInput = {
    AND?: excelSheetScalarWhereInput | excelSheetScalarWhereInput[]
    OR?: excelSheetScalarWhereInput[]
    NOT?: excelSheetScalarWhereInput | excelSheetScalarWhereInput[]
    id?: IntFilter<"excelSheet"> | number
    guid?: StringFilter<"excelSheet"> | string
    sheetName?: StringNullableFilter<"excelSheet"> | string | null
    created_at?: DateTimeFilter<"excelSheet"> | Date | string
    updated_at?: DateTimeFilter<"excelSheet"> | Date | string
  }

  export type excelBaseUrlCreateWithoutExcelSheetInput = {
    guid: string
    excelName?: string | null
    url?: string | null
    created_at: Date | string
    updated_at: Date | string
  }

  export type excelBaseUrlUncheckedCreateWithoutExcelSheetInput = {
    id?: number
    guid: string
    excelName?: string | null
    url?: string | null
    created_at: Date | string
    updated_at: Date | string
  }

  export type excelBaseUrlCreateOrConnectWithoutExcelSheetInput = {
    where: excelBaseUrlWhereUniqueInput
    create: XOR<excelBaseUrlCreateWithoutExcelSheetInput, excelBaseUrlUncheckedCreateWithoutExcelSheetInput>
  }

  export type excelBaseUrlUpsertWithoutExcelSheetInput = {
    update: XOR<excelBaseUrlUpdateWithoutExcelSheetInput, excelBaseUrlUncheckedUpdateWithoutExcelSheetInput>
    create: XOR<excelBaseUrlCreateWithoutExcelSheetInput, excelBaseUrlUncheckedCreateWithoutExcelSheetInput>
    where?: excelBaseUrlWhereInput
  }

  export type excelBaseUrlUpdateToOneWithWhereWithoutExcelSheetInput = {
    where?: excelBaseUrlWhereInput
    data: XOR<excelBaseUrlUpdateWithoutExcelSheetInput, excelBaseUrlUncheckedUpdateWithoutExcelSheetInput>
  }

  export type excelBaseUrlUpdateWithoutExcelSheetInput = {
    guid?: StringFieldUpdateOperationsInput | string
    excelName?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type excelBaseUrlUncheckedUpdateWithoutExcelSheetInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: StringFieldUpdateOperationsInput | string
    excelName?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type trx_LogHistoryCreateWithoutPic_baInput = {
    UnitSerialNumber?: string | null
    SalesDocument?: number | null
    DocumentNumber?: number | null
    POID?: number | null
    PROID?: number | null
    Description?: string | null
    IncidentType?: string | null
    BAEmailDate?: Date | string | null
    BAEmailStatus?: string | null
    UserEmailDate?: Date | string | null
    UserEmailStatus?: string | null
    OpenDate?: Date | string | null
    CloseDate?: Date | string | null
    FeedbackBA?: string | null
    FeedbackBADate?: Date | string | null
    FeedbackUser?: string | null
    FeedbackUserDate?: Date | string | null
    FlagStatus?: number | null
    Status?: string | null
    pic_user?: ms_usersCreateNestedOneWithoutTrx_LogHistory_trx_LogHistory_PICUserToms_usersInput
    trx_PICA?: trx_PICACreateNestedManyWithoutTrx_LogHistoryInput
  }

  export type trx_LogHistoryUncheckedCreateWithoutPic_baInput = {
    ID?: number
    UnitSerialNumber?: string | null
    SalesDocument?: number | null
    DocumentNumber?: number | null
    POID?: number | null
    PROID?: number | null
    Description?: string | null
    IncidentType?: string | null
    BAEmailDate?: Date | string | null
    BAEmailStatus?: string | null
    PICUser?: number | null
    UserEmailDate?: Date | string | null
    UserEmailStatus?: string | null
    OpenDate?: Date | string | null
    CloseDate?: Date | string | null
    FeedbackBA?: string | null
    FeedbackBADate?: Date | string | null
    FeedbackUser?: string | null
    FeedbackUserDate?: Date | string | null
    FlagStatus?: number | null
    Status?: string | null
    trx_PICA?: trx_PICAUncheckedCreateNestedManyWithoutTrx_LogHistoryInput
  }

  export type trx_LogHistoryCreateOrConnectWithoutPic_baInput = {
    where: trx_LogHistoryWhereUniqueInput
    create: XOR<trx_LogHistoryCreateWithoutPic_baInput, trx_LogHistoryUncheckedCreateWithoutPic_baInput>
  }

  export type trx_LogHistoryCreateManyPic_baInputEnvelope = {
    data: trx_LogHistoryCreateManyPic_baInput | trx_LogHistoryCreateManyPic_baInput[]
  }

  export type trx_LogHistoryCreateWithoutPic_userInput = {
    UnitSerialNumber?: string | null
    SalesDocument?: number | null
    DocumentNumber?: number | null
    POID?: number | null
    PROID?: number | null
    Description?: string | null
    IncidentType?: string | null
    BAEmailDate?: Date | string | null
    BAEmailStatus?: string | null
    UserEmailDate?: Date | string | null
    UserEmailStatus?: string | null
    OpenDate?: Date | string | null
    CloseDate?: Date | string | null
    FeedbackBA?: string | null
    FeedbackBADate?: Date | string | null
    FeedbackUser?: string | null
    FeedbackUserDate?: Date | string | null
    FlagStatus?: number | null
    Status?: string | null
    pic_ba?: ms_usersCreateNestedOneWithoutTrx_LogHistory_trx_LogHistory_PICBAToms_usersInput
    trx_PICA?: trx_PICACreateNestedManyWithoutTrx_LogHistoryInput
  }

  export type trx_LogHistoryUncheckedCreateWithoutPic_userInput = {
    ID?: number
    UnitSerialNumber?: string | null
    SalesDocument?: number | null
    DocumentNumber?: number | null
    POID?: number | null
    PROID?: number | null
    Description?: string | null
    IncidentType?: string | null
    PICBA?: number | null
    BAEmailDate?: Date | string | null
    BAEmailStatus?: string | null
    UserEmailDate?: Date | string | null
    UserEmailStatus?: string | null
    OpenDate?: Date | string | null
    CloseDate?: Date | string | null
    FeedbackBA?: string | null
    FeedbackBADate?: Date | string | null
    FeedbackUser?: string | null
    FeedbackUserDate?: Date | string | null
    FlagStatus?: number | null
    Status?: string | null
    trx_PICA?: trx_PICAUncheckedCreateNestedManyWithoutTrx_LogHistoryInput
  }

  export type trx_LogHistoryCreateOrConnectWithoutPic_userInput = {
    where: trx_LogHistoryWhereUniqueInput
    create: XOR<trx_LogHistoryCreateWithoutPic_userInput, trx_LogHistoryUncheckedCreateWithoutPic_userInput>
  }

  export type trx_LogHistoryCreateManyPic_userInputEnvelope = {
    data: trx_LogHistoryCreateManyPic_userInput | trx_LogHistoryCreateManyPic_userInput[]
  }

  export type trx_LogHistoryUpsertWithWhereUniqueWithoutPic_baInput = {
    where: trx_LogHistoryWhereUniqueInput
    update: XOR<trx_LogHistoryUpdateWithoutPic_baInput, trx_LogHistoryUncheckedUpdateWithoutPic_baInput>
    create: XOR<trx_LogHistoryCreateWithoutPic_baInput, trx_LogHistoryUncheckedCreateWithoutPic_baInput>
  }

  export type trx_LogHistoryUpdateWithWhereUniqueWithoutPic_baInput = {
    where: trx_LogHistoryWhereUniqueInput
    data: XOR<trx_LogHistoryUpdateWithoutPic_baInput, trx_LogHistoryUncheckedUpdateWithoutPic_baInput>
  }

  export type trx_LogHistoryUpdateManyWithWhereWithoutPic_baInput = {
    where: trx_LogHistoryScalarWhereInput
    data: XOR<trx_LogHistoryUpdateManyMutationInput, trx_LogHistoryUncheckedUpdateManyWithoutPic_baInput>
  }

  export type trx_LogHistoryScalarWhereInput = {
    AND?: trx_LogHistoryScalarWhereInput | trx_LogHistoryScalarWhereInput[]
    OR?: trx_LogHistoryScalarWhereInput[]
    NOT?: trx_LogHistoryScalarWhereInput | trx_LogHistoryScalarWhereInput[]
    ID?: IntFilter<"trx_LogHistory"> | number
    UnitSerialNumber?: StringNullableFilter<"trx_LogHistory"> | string | null
    SalesDocument?: IntNullableFilter<"trx_LogHistory"> | number | null
    DocumentNumber?: IntNullableFilter<"trx_LogHistory"> | number | null
    POID?: IntNullableFilter<"trx_LogHistory"> | number | null
    PROID?: IntNullableFilter<"trx_LogHistory"> | number | null
    Description?: StringNullableFilter<"trx_LogHistory"> | string | null
    IncidentType?: StringNullableFilter<"trx_LogHistory"> | string | null
    PICBA?: IntNullableFilter<"trx_LogHistory"> | number | null
    BAEmailDate?: DateTimeNullableFilter<"trx_LogHistory"> | Date | string | null
    BAEmailStatus?: StringNullableFilter<"trx_LogHistory"> | string | null
    PICUser?: IntNullableFilter<"trx_LogHistory"> | number | null
    UserEmailDate?: DateTimeNullableFilter<"trx_LogHistory"> | Date | string | null
    UserEmailStatus?: StringNullableFilter<"trx_LogHistory"> | string | null
    OpenDate?: DateTimeNullableFilter<"trx_LogHistory"> | Date | string | null
    CloseDate?: DateTimeNullableFilter<"trx_LogHistory"> | Date | string | null
    FeedbackBA?: StringNullableFilter<"trx_LogHistory"> | string | null
    FeedbackBADate?: DateTimeNullableFilter<"trx_LogHistory"> | Date | string | null
    FeedbackUser?: StringNullableFilter<"trx_LogHistory"> | string | null
    FeedbackUserDate?: DateTimeNullableFilter<"trx_LogHistory"> | Date | string | null
    FlagStatus?: IntNullableFilter<"trx_LogHistory"> | number | null
    Status?: StringNullableFilter<"trx_LogHistory"> | string | null
  }

  export type trx_LogHistoryUpsertWithWhereUniqueWithoutPic_userInput = {
    where: trx_LogHistoryWhereUniqueInput
    update: XOR<trx_LogHistoryUpdateWithoutPic_userInput, trx_LogHistoryUncheckedUpdateWithoutPic_userInput>
    create: XOR<trx_LogHistoryCreateWithoutPic_userInput, trx_LogHistoryUncheckedCreateWithoutPic_userInput>
  }

  export type trx_LogHistoryUpdateWithWhereUniqueWithoutPic_userInput = {
    where: trx_LogHistoryWhereUniqueInput
    data: XOR<trx_LogHistoryUpdateWithoutPic_userInput, trx_LogHistoryUncheckedUpdateWithoutPic_userInput>
  }

  export type trx_LogHistoryUpdateManyWithWhereWithoutPic_userInput = {
    where: trx_LogHistoryScalarWhereInput
    data: XOR<trx_LogHistoryUpdateManyMutationInput, trx_LogHistoryUncheckedUpdateManyWithoutPic_userInput>
  }

  export type trx_LogHistoryCreateWithoutTrx_PICAInput = {
    UnitSerialNumber?: string | null
    SalesDocument?: number | null
    DocumentNumber?: number | null
    POID?: number | null
    PROID?: number | null
    Description?: string | null
    IncidentType?: string | null
    BAEmailDate?: Date | string | null
    BAEmailStatus?: string | null
    UserEmailDate?: Date | string | null
    UserEmailStatus?: string | null
    OpenDate?: Date | string | null
    CloseDate?: Date | string | null
    FeedbackBA?: string | null
    FeedbackBADate?: Date | string | null
    FeedbackUser?: string | null
    FeedbackUserDate?: Date | string | null
    FlagStatus?: number | null
    Status?: string | null
    pic_ba?: ms_usersCreateNestedOneWithoutTrx_LogHistory_trx_LogHistory_PICBAToms_usersInput
    pic_user?: ms_usersCreateNestedOneWithoutTrx_LogHistory_trx_LogHistory_PICUserToms_usersInput
  }

  export type trx_LogHistoryUncheckedCreateWithoutTrx_PICAInput = {
    ID?: number
    UnitSerialNumber?: string | null
    SalesDocument?: number | null
    DocumentNumber?: number | null
    POID?: number | null
    PROID?: number | null
    Description?: string | null
    IncidentType?: string | null
    PICBA?: number | null
    BAEmailDate?: Date | string | null
    BAEmailStatus?: string | null
    PICUser?: number | null
    UserEmailDate?: Date | string | null
    UserEmailStatus?: string | null
    OpenDate?: Date | string | null
    CloseDate?: Date | string | null
    FeedbackBA?: string | null
    FeedbackBADate?: Date | string | null
    FeedbackUser?: string | null
    FeedbackUserDate?: Date | string | null
    FlagStatus?: number | null
    Status?: string | null
  }

  export type trx_LogHistoryCreateOrConnectWithoutTrx_PICAInput = {
    where: trx_LogHistoryWhereUniqueInput
    create: XOR<trx_LogHistoryCreateWithoutTrx_PICAInput, trx_LogHistoryUncheckedCreateWithoutTrx_PICAInput>
  }

  export type trx_DetailPICACreateWithoutTrx_PICAInput = {
    DetailPICAID: number
    Status?: string | null
    Problem?: string | null
    RootCaused?: string | null
    CorrectiveAction?: string | null
    PreventiveAction?: string | null
  }

  export type trx_DetailPICAUncheckedCreateWithoutTrx_PICAInput = {
    DetailPICAID: number
    Status?: string | null
    Problem?: string | null
    RootCaused?: string | null
    CorrectiveAction?: string | null
    PreventiveAction?: string | null
  }

  export type trx_DetailPICACreateOrConnectWithoutTrx_PICAInput = {
    where: trx_DetailPICAWhereUniqueInput
    create: XOR<trx_DetailPICACreateWithoutTrx_PICAInput, trx_DetailPICAUncheckedCreateWithoutTrx_PICAInput>
  }

  export type trx_DetailPICACreateManyTrx_PICAInputEnvelope = {
    data: trx_DetailPICACreateManyTrx_PICAInput | trx_DetailPICACreateManyTrx_PICAInput[]
  }

  export type trx_LogHistoryUpsertWithoutTrx_PICAInput = {
    update: XOR<trx_LogHistoryUpdateWithoutTrx_PICAInput, trx_LogHistoryUncheckedUpdateWithoutTrx_PICAInput>
    create: XOR<trx_LogHistoryCreateWithoutTrx_PICAInput, trx_LogHistoryUncheckedCreateWithoutTrx_PICAInput>
    where?: trx_LogHistoryWhereInput
  }

  export type trx_LogHistoryUpdateToOneWithWhereWithoutTrx_PICAInput = {
    where?: trx_LogHistoryWhereInput
    data: XOR<trx_LogHistoryUpdateWithoutTrx_PICAInput, trx_LogHistoryUncheckedUpdateWithoutTrx_PICAInput>
  }

  export type trx_LogHistoryUpdateWithoutTrx_PICAInput = {
    UnitSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    SalesDocument?: NullableIntFieldUpdateOperationsInput | number | null
    DocumentNumber?: NullableIntFieldUpdateOperationsInput | number | null
    POID?: NullableIntFieldUpdateOperationsInput | number | null
    PROID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    IncidentType?: NullableStringFieldUpdateOperationsInput | string | null
    BAEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BAEmailStatus?: NullableStringFieldUpdateOperationsInput | string | null
    UserEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserEmailStatus?: NullableStringFieldUpdateOperationsInput | string | null
    OpenDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CloseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FeedbackBA?: NullableStringFieldUpdateOperationsInput | string | null
    FeedbackBADate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FeedbackUser?: NullableStringFieldUpdateOperationsInput | string | null
    FeedbackUserDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FlagStatus?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    pic_ba?: ms_usersUpdateOneWithoutTrx_LogHistory_trx_LogHistory_PICBAToms_usersNestedInput
    pic_user?: ms_usersUpdateOneWithoutTrx_LogHistory_trx_LogHistory_PICUserToms_usersNestedInput
  }

  export type trx_LogHistoryUncheckedUpdateWithoutTrx_PICAInput = {
    ID?: IntFieldUpdateOperationsInput | number
    UnitSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    SalesDocument?: NullableIntFieldUpdateOperationsInput | number | null
    DocumentNumber?: NullableIntFieldUpdateOperationsInput | number | null
    POID?: NullableIntFieldUpdateOperationsInput | number | null
    PROID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    IncidentType?: NullableStringFieldUpdateOperationsInput | string | null
    PICBA?: NullableIntFieldUpdateOperationsInput | number | null
    BAEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BAEmailStatus?: NullableStringFieldUpdateOperationsInput | string | null
    PICUser?: NullableIntFieldUpdateOperationsInput | number | null
    UserEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserEmailStatus?: NullableStringFieldUpdateOperationsInput | string | null
    OpenDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CloseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FeedbackBA?: NullableStringFieldUpdateOperationsInput | string | null
    FeedbackBADate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FeedbackUser?: NullableStringFieldUpdateOperationsInput | string | null
    FeedbackUserDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FlagStatus?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type trx_DetailPICAUpsertWithWhereUniqueWithoutTrx_PICAInput = {
    where: trx_DetailPICAWhereUniqueInput
    update: XOR<trx_DetailPICAUpdateWithoutTrx_PICAInput, trx_DetailPICAUncheckedUpdateWithoutTrx_PICAInput>
    create: XOR<trx_DetailPICACreateWithoutTrx_PICAInput, trx_DetailPICAUncheckedCreateWithoutTrx_PICAInput>
  }

  export type trx_DetailPICAUpdateWithWhereUniqueWithoutTrx_PICAInput = {
    where: trx_DetailPICAWhereUniqueInput
    data: XOR<trx_DetailPICAUpdateWithoutTrx_PICAInput, trx_DetailPICAUncheckedUpdateWithoutTrx_PICAInput>
  }

  export type trx_DetailPICAUpdateManyWithWhereWithoutTrx_PICAInput = {
    where: trx_DetailPICAScalarWhereInput
    data: XOR<trx_DetailPICAUpdateManyMutationInput, trx_DetailPICAUncheckedUpdateManyWithoutTrx_PICAInput>
  }

  export type trx_DetailPICAScalarWhereInput = {
    AND?: trx_DetailPICAScalarWhereInput | trx_DetailPICAScalarWhereInput[]
    OR?: trx_DetailPICAScalarWhereInput[]
    NOT?: trx_DetailPICAScalarWhereInput | trx_DetailPICAScalarWhereInput[]
    DetailPICAID?: IntFilter<"trx_DetailPICA"> | number
    PICAID?: IntNullableFilter<"trx_DetailPICA"> | number | null
    Status?: StringNullableFilter<"trx_DetailPICA"> | string | null
    Problem?: StringNullableFilter<"trx_DetailPICA"> | string | null
    RootCaused?: StringNullableFilter<"trx_DetailPICA"> | string | null
    CorrectiveAction?: StringNullableFilter<"trx_DetailPICA"> | string | null
    PreventiveAction?: StringNullableFilter<"trx_DetailPICA"> | string | null
  }

  export type trx_PICACreateWithoutTrx_DetailPICAInput = {
    created_at?: Date | string | null
    created_by?: number | null
    update_at?: Date | string | null
    update_by?: number | null
    trx_LogHistory?: trx_LogHistoryCreateNestedOneWithoutTrx_PICAInput
  }

  export type trx_PICAUncheckedCreateWithoutTrx_DetailPICAInput = {
    PICAID?: number
    IncidentID: number
    created_at?: Date | string | null
    created_by?: number | null
    update_at?: Date | string | null
    update_by?: number | null
  }

  export type trx_PICACreateOrConnectWithoutTrx_DetailPICAInput = {
    where: trx_PICAWhereUniqueInput
    create: XOR<trx_PICACreateWithoutTrx_DetailPICAInput, trx_PICAUncheckedCreateWithoutTrx_DetailPICAInput>
  }

  export type trx_PICAUpsertWithoutTrx_DetailPICAInput = {
    update: XOR<trx_PICAUpdateWithoutTrx_DetailPICAInput, trx_PICAUncheckedUpdateWithoutTrx_DetailPICAInput>
    create: XOR<trx_PICACreateWithoutTrx_DetailPICAInput, trx_PICAUncheckedCreateWithoutTrx_DetailPICAInput>
    where?: trx_PICAWhereInput
  }

  export type trx_PICAUpdateToOneWithWhereWithoutTrx_DetailPICAInput = {
    where?: trx_PICAWhereInput
    data: XOR<trx_PICAUpdateWithoutTrx_DetailPICAInput, trx_PICAUncheckedUpdateWithoutTrx_DetailPICAInput>
  }

  export type trx_PICAUpdateWithoutTrx_DetailPICAInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_by?: NullableIntFieldUpdateOperationsInput | number | null
    trx_LogHistory?: trx_LogHistoryUpdateOneWithoutTrx_PICANestedInput
  }

  export type trx_PICAUncheckedUpdateWithoutTrx_DetailPICAInput = {
    PICAID?: IntFieldUpdateOperationsInput | number
    IncidentID?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ms_usersCreateWithoutTrx_LogHistory_trx_LogHistory_PICBAToms_usersInput = {
    name?: string | null
    username?: string | null
    password?: string | null
    divisi?: string | null
    departemen?: string | null
    email?: string | null
    role?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    trx_LogHistory_trx_LogHistory_PICUserToms_users?: trx_LogHistoryCreateNestedManyWithoutPic_userInput
  }

  export type ms_usersUncheckedCreateWithoutTrx_LogHistory_trx_LogHistory_PICBAToms_usersInput = {
    id?: number
    name?: string | null
    username?: string | null
    password?: string | null
    divisi?: string | null
    departemen?: string | null
    email?: string | null
    role?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    trx_LogHistory_trx_LogHistory_PICUserToms_users?: trx_LogHistoryUncheckedCreateNestedManyWithoutPic_userInput
  }

  export type ms_usersCreateOrConnectWithoutTrx_LogHistory_trx_LogHistory_PICBAToms_usersInput = {
    where: ms_usersWhereUniqueInput
    create: XOR<ms_usersCreateWithoutTrx_LogHistory_trx_LogHistory_PICBAToms_usersInput, ms_usersUncheckedCreateWithoutTrx_LogHistory_trx_LogHistory_PICBAToms_usersInput>
  }

  export type ms_usersCreateWithoutTrx_LogHistory_trx_LogHistory_PICUserToms_usersInput = {
    name?: string | null
    username?: string | null
    password?: string | null
    divisi?: string | null
    departemen?: string | null
    email?: string | null
    role?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    trx_LogHistory_trx_LogHistory_PICBAToms_users?: trx_LogHistoryCreateNestedManyWithoutPic_baInput
  }

  export type ms_usersUncheckedCreateWithoutTrx_LogHistory_trx_LogHistory_PICUserToms_usersInput = {
    id?: number
    name?: string | null
    username?: string | null
    password?: string | null
    divisi?: string | null
    departemen?: string | null
    email?: string | null
    role?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    trx_LogHistory_trx_LogHistory_PICBAToms_users?: trx_LogHistoryUncheckedCreateNestedManyWithoutPic_baInput
  }

  export type ms_usersCreateOrConnectWithoutTrx_LogHistory_trx_LogHistory_PICUserToms_usersInput = {
    where: ms_usersWhereUniqueInput
    create: XOR<ms_usersCreateWithoutTrx_LogHistory_trx_LogHistory_PICUserToms_usersInput, ms_usersUncheckedCreateWithoutTrx_LogHistory_trx_LogHistory_PICUserToms_usersInput>
  }

  export type trx_PICACreateWithoutTrx_LogHistoryInput = {
    created_at?: Date | string | null
    created_by?: number | null
    update_at?: Date | string | null
    update_by?: number | null
    trx_DetailPICA?: trx_DetailPICACreateNestedManyWithoutTrx_PICAInput
  }

  export type trx_PICAUncheckedCreateWithoutTrx_LogHistoryInput = {
    PICAID?: number
    created_at?: Date | string | null
    created_by?: number | null
    update_at?: Date | string | null
    update_by?: number | null
    trx_DetailPICA?: trx_DetailPICAUncheckedCreateNestedManyWithoutTrx_PICAInput
  }

  export type trx_PICACreateOrConnectWithoutTrx_LogHistoryInput = {
    where: trx_PICAWhereUniqueInput
    create: XOR<trx_PICACreateWithoutTrx_LogHistoryInput, trx_PICAUncheckedCreateWithoutTrx_LogHistoryInput>
  }

  export type trx_PICACreateManyTrx_LogHistoryInputEnvelope = {
    data: trx_PICACreateManyTrx_LogHistoryInput | trx_PICACreateManyTrx_LogHistoryInput[]
  }

  export type ms_usersUpsertWithoutTrx_LogHistory_trx_LogHistory_PICBAToms_usersInput = {
    update: XOR<ms_usersUpdateWithoutTrx_LogHistory_trx_LogHistory_PICBAToms_usersInput, ms_usersUncheckedUpdateWithoutTrx_LogHistory_trx_LogHistory_PICBAToms_usersInput>
    create: XOR<ms_usersCreateWithoutTrx_LogHistory_trx_LogHistory_PICBAToms_usersInput, ms_usersUncheckedCreateWithoutTrx_LogHistory_trx_LogHistory_PICBAToms_usersInput>
    where?: ms_usersWhereInput
  }

  export type ms_usersUpdateToOneWithWhereWithoutTrx_LogHistory_trx_LogHistory_PICBAToms_usersInput = {
    where?: ms_usersWhereInput
    data: XOR<ms_usersUpdateWithoutTrx_LogHistory_trx_LogHistory_PICBAToms_usersInput, ms_usersUncheckedUpdateWithoutTrx_LogHistory_trx_LogHistory_PICBAToms_usersInput>
  }

  export type ms_usersUpdateWithoutTrx_LogHistory_trx_LogHistory_PICBAToms_usersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    divisi?: NullableStringFieldUpdateOperationsInput | string | null
    departemen?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trx_LogHistory_trx_LogHistory_PICUserToms_users?: trx_LogHistoryUpdateManyWithoutPic_userNestedInput
  }

  export type ms_usersUncheckedUpdateWithoutTrx_LogHistory_trx_LogHistory_PICBAToms_usersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    divisi?: NullableStringFieldUpdateOperationsInput | string | null
    departemen?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trx_LogHistory_trx_LogHistory_PICUserToms_users?: trx_LogHistoryUncheckedUpdateManyWithoutPic_userNestedInput
  }

  export type ms_usersUpsertWithoutTrx_LogHistory_trx_LogHistory_PICUserToms_usersInput = {
    update: XOR<ms_usersUpdateWithoutTrx_LogHistory_trx_LogHistory_PICUserToms_usersInput, ms_usersUncheckedUpdateWithoutTrx_LogHistory_trx_LogHistory_PICUserToms_usersInput>
    create: XOR<ms_usersCreateWithoutTrx_LogHistory_trx_LogHistory_PICUserToms_usersInput, ms_usersUncheckedCreateWithoutTrx_LogHistory_trx_LogHistory_PICUserToms_usersInput>
    where?: ms_usersWhereInput
  }

  export type ms_usersUpdateToOneWithWhereWithoutTrx_LogHistory_trx_LogHistory_PICUserToms_usersInput = {
    where?: ms_usersWhereInput
    data: XOR<ms_usersUpdateWithoutTrx_LogHistory_trx_LogHistory_PICUserToms_usersInput, ms_usersUncheckedUpdateWithoutTrx_LogHistory_trx_LogHistory_PICUserToms_usersInput>
  }

  export type ms_usersUpdateWithoutTrx_LogHistory_trx_LogHistory_PICUserToms_usersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    divisi?: NullableStringFieldUpdateOperationsInput | string | null
    departemen?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trx_LogHistory_trx_LogHistory_PICBAToms_users?: trx_LogHistoryUpdateManyWithoutPic_baNestedInput
  }

  export type ms_usersUncheckedUpdateWithoutTrx_LogHistory_trx_LogHistory_PICUserToms_usersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    divisi?: NullableStringFieldUpdateOperationsInput | string | null
    departemen?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trx_LogHistory_trx_LogHistory_PICBAToms_users?: trx_LogHistoryUncheckedUpdateManyWithoutPic_baNestedInput
  }

  export type trx_PICAUpsertWithWhereUniqueWithoutTrx_LogHistoryInput = {
    where: trx_PICAWhereUniqueInput
    update: XOR<trx_PICAUpdateWithoutTrx_LogHistoryInput, trx_PICAUncheckedUpdateWithoutTrx_LogHistoryInput>
    create: XOR<trx_PICACreateWithoutTrx_LogHistoryInput, trx_PICAUncheckedCreateWithoutTrx_LogHistoryInput>
  }

  export type trx_PICAUpdateWithWhereUniqueWithoutTrx_LogHistoryInput = {
    where: trx_PICAWhereUniqueInput
    data: XOR<trx_PICAUpdateWithoutTrx_LogHistoryInput, trx_PICAUncheckedUpdateWithoutTrx_LogHistoryInput>
  }

  export type trx_PICAUpdateManyWithWhereWithoutTrx_LogHistoryInput = {
    where: trx_PICAScalarWhereInput
    data: XOR<trx_PICAUpdateManyMutationInput, trx_PICAUncheckedUpdateManyWithoutTrx_LogHistoryInput>
  }

  export type trx_PICAScalarWhereInput = {
    AND?: trx_PICAScalarWhereInput | trx_PICAScalarWhereInput[]
    OR?: trx_PICAScalarWhereInput[]
    NOT?: trx_PICAScalarWhereInput | trx_PICAScalarWhereInput[]
    PICAID?: IntFilter<"trx_PICA"> | number
    IncidentID?: IntFilter<"trx_PICA"> | number
    created_at?: DateTimeNullableFilter<"trx_PICA"> | Date | string | null
    created_by?: IntNullableFilter<"trx_PICA"> | number | null
    update_at?: DateTimeNullableFilter<"trx_PICA"> | Date | string | null
    update_by?: IntNullableFilter<"trx_PICA"> | number | null
  }

  export type excelSheetCreateManyExcelBaseUrlInput = {
    sheetName?: string | null
    created_at: Date | string
    updated_at: Date | string
  }

  export type excelSheetUpdateWithoutExcelBaseUrlInput = {
    sheetName?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type excelSheetUncheckedUpdateWithoutExcelBaseUrlInput = {
    id?: IntFieldUpdateOperationsInput | number
    sheetName?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type excelSheetUncheckedUpdateManyWithoutExcelBaseUrlInput = {
    id?: IntFieldUpdateOperationsInput | number
    sheetName?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type trx_LogHistoryCreateManyPic_baInput = {
    UnitSerialNumber?: string | null
    SalesDocument?: number | null
    DocumentNumber?: number | null
    POID?: number | null
    PROID?: number | null
    Description?: string | null
    IncidentType?: string | null
    BAEmailDate?: Date | string | null
    BAEmailStatus?: string | null
    PICUser?: number | null
    UserEmailDate?: Date | string | null
    UserEmailStatus?: string | null
    OpenDate?: Date | string | null
    CloseDate?: Date | string | null
    FeedbackBA?: string | null
    FeedbackBADate?: Date | string | null
    FeedbackUser?: string | null
    FeedbackUserDate?: Date | string | null
    FlagStatus?: number | null
    Status?: string | null
  }

  export type trx_LogHistoryCreateManyPic_userInput = {
    UnitSerialNumber?: string | null
    SalesDocument?: number | null
    DocumentNumber?: number | null
    POID?: number | null
    PROID?: number | null
    Description?: string | null
    IncidentType?: string | null
    PICBA?: number | null
    BAEmailDate?: Date | string | null
    BAEmailStatus?: string | null
    UserEmailDate?: Date | string | null
    UserEmailStatus?: string | null
    OpenDate?: Date | string | null
    CloseDate?: Date | string | null
    FeedbackBA?: string | null
    FeedbackBADate?: Date | string | null
    FeedbackUser?: string | null
    FeedbackUserDate?: Date | string | null
    FlagStatus?: number | null
    Status?: string | null
  }

  export type trx_LogHistoryUpdateWithoutPic_baInput = {
    UnitSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    SalesDocument?: NullableIntFieldUpdateOperationsInput | number | null
    DocumentNumber?: NullableIntFieldUpdateOperationsInput | number | null
    POID?: NullableIntFieldUpdateOperationsInput | number | null
    PROID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    IncidentType?: NullableStringFieldUpdateOperationsInput | string | null
    BAEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BAEmailStatus?: NullableStringFieldUpdateOperationsInput | string | null
    UserEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserEmailStatus?: NullableStringFieldUpdateOperationsInput | string | null
    OpenDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CloseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FeedbackBA?: NullableStringFieldUpdateOperationsInput | string | null
    FeedbackBADate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FeedbackUser?: NullableStringFieldUpdateOperationsInput | string | null
    FeedbackUserDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FlagStatus?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    pic_user?: ms_usersUpdateOneWithoutTrx_LogHistory_trx_LogHistory_PICUserToms_usersNestedInput
    trx_PICA?: trx_PICAUpdateManyWithoutTrx_LogHistoryNestedInput
  }

  export type trx_LogHistoryUncheckedUpdateWithoutPic_baInput = {
    ID?: IntFieldUpdateOperationsInput | number
    UnitSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    SalesDocument?: NullableIntFieldUpdateOperationsInput | number | null
    DocumentNumber?: NullableIntFieldUpdateOperationsInput | number | null
    POID?: NullableIntFieldUpdateOperationsInput | number | null
    PROID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    IncidentType?: NullableStringFieldUpdateOperationsInput | string | null
    BAEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BAEmailStatus?: NullableStringFieldUpdateOperationsInput | string | null
    PICUser?: NullableIntFieldUpdateOperationsInput | number | null
    UserEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserEmailStatus?: NullableStringFieldUpdateOperationsInput | string | null
    OpenDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CloseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FeedbackBA?: NullableStringFieldUpdateOperationsInput | string | null
    FeedbackBADate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FeedbackUser?: NullableStringFieldUpdateOperationsInput | string | null
    FeedbackUserDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FlagStatus?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    trx_PICA?: trx_PICAUncheckedUpdateManyWithoutTrx_LogHistoryNestedInput
  }

  export type trx_LogHistoryUncheckedUpdateManyWithoutPic_baInput = {
    ID?: IntFieldUpdateOperationsInput | number
    UnitSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    SalesDocument?: NullableIntFieldUpdateOperationsInput | number | null
    DocumentNumber?: NullableIntFieldUpdateOperationsInput | number | null
    POID?: NullableIntFieldUpdateOperationsInput | number | null
    PROID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    IncidentType?: NullableStringFieldUpdateOperationsInput | string | null
    BAEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BAEmailStatus?: NullableStringFieldUpdateOperationsInput | string | null
    PICUser?: NullableIntFieldUpdateOperationsInput | number | null
    UserEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserEmailStatus?: NullableStringFieldUpdateOperationsInput | string | null
    OpenDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CloseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FeedbackBA?: NullableStringFieldUpdateOperationsInput | string | null
    FeedbackBADate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FeedbackUser?: NullableStringFieldUpdateOperationsInput | string | null
    FeedbackUserDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FlagStatus?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type trx_LogHistoryUpdateWithoutPic_userInput = {
    UnitSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    SalesDocument?: NullableIntFieldUpdateOperationsInput | number | null
    DocumentNumber?: NullableIntFieldUpdateOperationsInput | number | null
    POID?: NullableIntFieldUpdateOperationsInput | number | null
    PROID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    IncidentType?: NullableStringFieldUpdateOperationsInput | string | null
    BAEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BAEmailStatus?: NullableStringFieldUpdateOperationsInput | string | null
    UserEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserEmailStatus?: NullableStringFieldUpdateOperationsInput | string | null
    OpenDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CloseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FeedbackBA?: NullableStringFieldUpdateOperationsInput | string | null
    FeedbackBADate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FeedbackUser?: NullableStringFieldUpdateOperationsInput | string | null
    FeedbackUserDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FlagStatus?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    pic_ba?: ms_usersUpdateOneWithoutTrx_LogHistory_trx_LogHistory_PICBAToms_usersNestedInput
    trx_PICA?: trx_PICAUpdateManyWithoutTrx_LogHistoryNestedInput
  }

  export type trx_LogHistoryUncheckedUpdateWithoutPic_userInput = {
    ID?: IntFieldUpdateOperationsInput | number
    UnitSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    SalesDocument?: NullableIntFieldUpdateOperationsInput | number | null
    DocumentNumber?: NullableIntFieldUpdateOperationsInput | number | null
    POID?: NullableIntFieldUpdateOperationsInput | number | null
    PROID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    IncidentType?: NullableStringFieldUpdateOperationsInput | string | null
    PICBA?: NullableIntFieldUpdateOperationsInput | number | null
    BAEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BAEmailStatus?: NullableStringFieldUpdateOperationsInput | string | null
    UserEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserEmailStatus?: NullableStringFieldUpdateOperationsInput | string | null
    OpenDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CloseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FeedbackBA?: NullableStringFieldUpdateOperationsInput | string | null
    FeedbackBADate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FeedbackUser?: NullableStringFieldUpdateOperationsInput | string | null
    FeedbackUserDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FlagStatus?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    trx_PICA?: trx_PICAUncheckedUpdateManyWithoutTrx_LogHistoryNestedInput
  }

  export type trx_LogHistoryUncheckedUpdateManyWithoutPic_userInput = {
    ID?: IntFieldUpdateOperationsInput | number
    UnitSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    SalesDocument?: NullableIntFieldUpdateOperationsInput | number | null
    DocumentNumber?: NullableIntFieldUpdateOperationsInput | number | null
    POID?: NullableIntFieldUpdateOperationsInput | number | null
    PROID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    IncidentType?: NullableStringFieldUpdateOperationsInput | string | null
    PICBA?: NullableIntFieldUpdateOperationsInput | number | null
    BAEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BAEmailStatus?: NullableStringFieldUpdateOperationsInput | string | null
    UserEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserEmailStatus?: NullableStringFieldUpdateOperationsInput | string | null
    OpenDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CloseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FeedbackBA?: NullableStringFieldUpdateOperationsInput | string | null
    FeedbackBADate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FeedbackUser?: NullableStringFieldUpdateOperationsInput | string | null
    FeedbackUserDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FlagStatus?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type trx_DetailPICACreateManyTrx_PICAInput = {
    DetailPICAID: number
    Status?: string | null
    Problem?: string | null
    RootCaused?: string | null
    CorrectiveAction?: string | null
    PreventiveAction?: string | null
  }

  export type trx_DetailPICAUpdateWithoutTrx_PICAInput = {
    DetailPICAID?: IntFieldUpdateOperationsInput | number
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Problem?: NullableStringFieldUpdateOperationsInput | string | null
    RootCaused?: NullableStringFieldUpdateOperationsInput | string | null
    CorrectiveAction?: NullableStringFieldUpdateOperationsInput | string | null
    PreventiveAction?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type trx_DetailPICAUncheckedUpdateWithoutTrx_PICAInput = {
    DetailPICAID?: IntFieldUpdateOperationsInput | number
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Problem?: NullableStringFieldUpdateOperationsInput | string | null
    RootCaused?: NullableStringFieldUpdateOperationsInput | string | null
    CorrectiveAction?: NullableStringFieldUpdateOperationsInput | string | null
    PreventiveAction?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type trx_DetailPICAUncheckedUpdateManyWithoutTrx_PICAInput = {
    DetailPICAID?: IntFieldUpdateOperationsInput | number
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Problem?: NullableStringFieldUpdateOperationsInput | string | null
    RootCaused?: NullableStringFieldUpdateOperationsInput | string | null
    CorrectiveAction?: NullableStringFieldUpdateOperationsInput | string | null
    PreventiveAction?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type trx_PICACreateManyTrx_LogHistoryInput = {
    created_at?: Date | string | null
    created_by?: number | null
    update_at?: Date | string | null
    update_by?: number | null
  }

  export type trx_PICAUpdateWithoutTrx_LogHistoryInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_by?: NullableIntFieldUpdateOperationsInput | number | null
    trx_DetailPICA?: trx_DetailPICAUpdateManyWithoutTrx_PICANestedInput
  }

  export type trx_PICAUncheckedUpdateWithoutTrx_LogHistoryInput = {
    PICAID?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_by?: NullableIntFieldUpdateOperationsInput | number | null
    trx_DetailPICA?: trx_DetailPICAUncheckedUpdateManyWithoutTrx_PICANestedInput
  }

  export type trx_PICAUncheckedUpdateManyWithoutTrx_LogHistoryInput = {
    PICAID?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_by?: NullableIntFieldUpdateOperationsInput | number | null
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