
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
 * Model ALL_PO
 * 
 */
export type ALL_PO = $Result.DefaultSelection<Prisma.$ALL_POPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ALL_POS
 * const aLL_POS = await prisma.aLL_PO.findMany()
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
   * // Fetch zero or more ALL_POS
   * const aLL_POS = await prisma.aLL_PO.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.aLL_PO`: Exposes CRUD operations for the **ALL_PO** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ALL_POS
    * const aLL_POS = await prisma.aLL_PO.findMany()
    * ```
    */
  get aLL_PO(): Prisma.ALL_PODelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    ALL_PO: 'ALL_PO'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    satria?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "aLL_PO"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ALL_PO: {
        payload: Prisma.$ALL_POPayload<ExtArgs>
        fields: Prisma.ALL_POFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ALL_POFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ALL_POPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ALL_POFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ALL_POPayload>
          }
          findFirst: {
            args: Prisma.ALL_POFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ALL_POPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ALL_POFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ALL_POPayload>
          }
          findMany: {
            args: Prisma.ALL_POFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ALL_POPayload>[]
          }
          create: {
            args: Prisma.ALL_POCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ALL_POPayload>
          }
          createMany: {
            args: Prisma.ALL_POCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ALL_PODeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ALL_POPayload>
          }
          update: {
            args: Prisma.ALL_POUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ALL_POPayload>
          }
          deleteMany: {
            args: Prisma.ALL_PODeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ALL_POUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ALL_POUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ALL_POPayload>
          }
          aggregate: {
            args: Prisma.ALL_POAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateALL_PO>
          }
          groupBy: {
            args: Prisma.ALL_POGroupByArgs<ExtArgs>
            result: $Utils.Optional<ALL_POGroupByOutputType>[]
          }
          count: {
            args: Prisma.ALL_POCountArgs<ExtArgs>
            result: $Utils.Optional<ALL_POCountAggregateOutputType> | number
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
   * Models
   */

  /**
   * Model ALL_PO
   */

  export type AggregateALL_PO = {
    _count: ALL_POCountAggregateOutputType | null
    _avg: ALL_POAvgAggregateOutputType | null
    _sum: ALL_POSumAggregateOutputType | null
    _min: ALL_POMinAggregateOutputType | null
    _max: ALL_POMaxAggregateOutputType | null
  }

  export type ALL_POAvgAggregateOutputType = {
    qtyPr: number | null
    qtyPo: number | null
    openQtyPo: number | null
    netPrice: number | null
    totalValue: number | null
    gr101Qty: number | null
    gr103Qty: number | null
    gr105Qty: number | null
    gr107Qty: number | null
    gr109Qty: number | null
    qtyIr: number | null
    ammountLcIr: number | null
  }

  export type ALL_POSumAggregateOutputType = {
    qtyPr: number | null
    qtyPo: number | null
    openQtyPo: number | null
    netPrice: number | null
    totalValue: number | null
    gr101Qty: number | null
    gr103Qty: number | null
    gr105Qty: number | null
    gr107Qty: number | null
    gr109Qty: number | null
    qtyIr: number | null
    ammountLcIr: number | null
  }

  export type ALL_POMinAggregateOutputType = {
    prNumber: string | null
    prType: string | null
    prDate: Date | null
    prItem: string | null
    qtyPr: number | null
    uomQtyPr: string | null
    prPlant: string | null
    prSloc: string | null
    deliveryDate: Date | null
    trackingNumber: string | null
    prRequisitioner: string | null
    shortText: string | null
    materialNumber: string | null
    materialType: string | null
    brand: string | null
    brandDescription: string | null
    poNo: string | null
    poType: string | null
    vendorCode: string | null
    vendorName: string | null
    poDate: Date | null
    paymentTerm: string | null
    poReleaseStatus: string | null
    poItem: string | null
    plantPo: string | null
    slocPo: string | null
    qtyPo: number | null
    uomQtyPo: string | null
    openQtyPo: number | null
    deliveryDatePo: Date | null
    delvCompleted: string | null
    netPrice: number | null
    totalValue: number | null
    poTrackNo: string | null
    lastGr101Date: Date | null
    gr101Qty: number | null
    lastGr103Date: Date | null
    gr103Qty: number | null
    lastGr105Date: Date | null
    gr105Qty: number | null
    lastGr107Date: Date | null
    gr107Qty: number | null
    lastGr109Date: Date | null
    gr109Qty: number | null
    lastIrDate: Date | null
    qtyIr: number | null
    ammountLcIr: number | null
  }

  export type ALL_POMaxAggregateOutputType = {
    prNumber: string | null
    prType: string | null
    prDate: Date | null
    prItem: string | null
    qtyPr: number | null
    uomQtyPr: string | null
    prPlant: string | null
    prSloc: string | null
    deliveryDate: Date | null
    trackingNumber: string | null
    prRequisitioner: string | null
    shortText: string | null
    materialNumber: string | null
    materialType: string | null
    brand: string | null
    brandDescription: string | null
    poNo: string | null
    poType: string | null
    vendorCode: string | null
    vendorName: string | null
    poDate: Date | null
    paymentTerm: string | null
    poReleaseStatus: string | null
    poItem: string | null
    plantPo: string | null
    slocPo: string | null
    qtyPo: number | null
    uomQtyPo: string | null
    openQtyPo: number | null
    deliveryDatePo: Date | null
    delvCompleted: string | null
    netPrice: number | null
    totalValue: number | null
    poTrackNo: string | null
    lastGr101Date: Date | null
    gr101Qty: number | null
    lastGr103Date: Date | null
    gr103Qty: number | null
    lastGr105Date: Date | null
    gr105Qty: number | null
    lastGr107Date: Date | null
    gr107Qty: number | null
    lastGr109Date: Date | null
    gr109Qty: number | null
    lastIrDate: Date | null
    qtyIr: number | null
    ammountLcIr: number | null
  }

  export type ALL_POCountAggregateOutputType = {
    prNumber: number
    prType: number
    prDate: number
    prItem: number
    qtyPr: number
    uomQtyPr: number
    prPlant: number
    prSloc: number
    deliveryDate: number
    trackingNumber: number
    prRequisitioner: number
    shortText: number
    materialNumber: number
    materialType: number
    brand: number
    brandDescription: number
    poNo: number
    poType: number
    vendorCode: number
    vendorName: number
    poDate: number
    paymentTerm: number
    poReleaseStatus: number
    poItem: number
    plantPo: number
    slocPo: number
    qtyPo: number
    uomQtyPo: number
    openQtyPo: number
    deliveryDatePo: number
    delvCompleted: number
    netPrice: number
    totalValue: number
    poTrackNo: number
    lastGr101Date: number
    gr101Qty: number
    lastGr103Date: number
    gr103Qty: number
    lastGr105Date: number
    gr105Qty: number
    lastGr107Date: number
    gr107Qty: number
    lastGr109Date: number
    gr109Qty: number
    lastIrDate: number
    qtyIr: number
    ammountLcIr: number
    _all: number
  }


  export type ALL_POAvgAggregateInputType = {
    qtyPr?: true
    qtyPo?: true
    openQtyPo?: true
    netPrice?: true
    totalValue?: true
    gr101Qty?: true
    gr103Qty?: true
    gr105Qty?: true
    gr107Qty?: true
    gr109Qty?: true
    qtyIr?: true
    ammountLcIr?: true
  }

  export type ALL_POSumAggregateInputType = {
    qtyPr?: true
    qtyPo?: true
    openQtyPo?: true
    netPrice?: true
    totalValue?: true
    gr101Qty?: true
    gr103Qty?: true
    gr105Qty?: true
    gr107Qty?: true
    gr109Qty?: true
    qtyIr?: true
    ammountLcIr?: true
  }

  export type ALL_POMinAggregateInputType = {
    prNumber?: true
    prType?: true
    prDate?: true
    prItem?: true
    qtyPr?: true
    uomQtyPr?: true
    prPlant?: true
    prSloc?: true
    deliveryDate?: true
    trackingNumber?: true
    prRequisitioner?: true
    shortText?: true
    materialNumber?: true
    materialType?: true
    brand?: true
    brandDescription?: true
    poNo?: true
    poType?: true
    vendorCode?: true
    vendorName?: true
    poDate?: true
    paymentTerm?: true
    poReleaseStatus?: true
    poItem?: true
    plantPo?: true
    slocPo?: true
    qtyPo?: true
    uomQtyPo?: true
    openQtyPo?: true
    deliveryDatePo?: true
    delvCompleted?: true
    netPrice?: true
    totalValue?: true
    poTrackNo?: true
    lastGr101Date?: true
    gr101Qty?: true
    lastGr103Date?: true
    gr103Qty?: true
    lastGr105Date?: true
    gr105Qty?: true
    lastGr107Date?: true
    gr107Qty?: true
    lastGr109Date?: true
    gr109Qty?: true
    lastIrDate?: true
    qtyIr?: true
    ammountLcIr?: true
  }

  export type ALL_POMaxAggregateInputType = {
    prNumber?: true
    prType?: true
    prDate?: true
    prItem?: true
    qtyPr?: true
    uomQtyPr?: true
    prPlant?: true
    prSloc?: true
    deliveryDate?: true
    trackingNumber?: true
    prRequisitioner?: true
    shortText?: true
    materialNumber?: true
    materialType?: true
    brand?: true
    brandDescription?: true
    poNo?: true
    poType?: true
    vendorCode?: true
    vendorName?: true
    poDate?: true
    paymentTerm?: true
    poReleaseStatus?: true
    poItem?: true
    plantPo?: true
    slocPo?: true
    qtyPo?: true
    uomQtyPo?: true
    openQtyPo?: true
    deliveryDatePo?: true
    delvCompleted?: true
    netPrice?: true
    totalValue?: true
    poTrackNo?: true
    lastGr101Date?: true
    gr101Qty?: true
    lastGr103Date?: true
    gr103Qty?: true
    lastGr105Date?: true
    gr105Qty?: true
    lastGr107Date?: true
    gr107Qty?: true
    lastGr109Date?: true
    gr109Qty?: true
    lastIrDate?: true
    qtyIr?: true
    ammountLcIr?: true
  }

  export type ALL_POCountAggregateInputType = {
    prNumber?: true
    prType?: true
    prDate?: true
    prItem?: true
    qtyPr?: true
    uomQtyPr?: true
    prPlant?: true
    prSloc?: true
    deliveryDate?: true
    trackingNumber?: true
    prRequisitioner?: true
    shortText?: true
    materialNumber?: true
    materialType?: true
    brand?: true
    brandDescription?: true
    poNo?: true
    poType?: true
    vendorCode?: true
    vendorName?: true
    poDate?: true
    paymentTerm?: true
    poReleaseStatus?: true
    poItem?: true
    plantPo?: true
    slocPo?: true
    qtyPo?: true
    uomQtyPo?: true
    openQtyPo?: true
    deliveryDatePo?: true
    delvCompleted?: true
    netPrice?: true
    totalValue?: true
    poTrackNo?: true
    lastGr101Date?: true
    gr101Qty?: true
    lastGr103Date?: true
    gr103Qty?: true
    lastGr105Date?: true
    gr105Qty?: true
    lastGr107Date?: true
    gr107Qty?: true
    lastGr109Date?: true
    gr109Qty?: true
    lastIrDate?: true
    qtyIr?: true
    ammountLcIr?: true
    _all?: true
  }

  export type ALL_POAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ALL_PO to aggregate.
     */
    where?: ALL_POWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ALL_POS to fetch.
     */
    orderBy?: ALL_POOrderByWithRelationInput | ALL_POOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ALL_POWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ALL_POS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ALL_POS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ALL_POS
    **/
    _count?: true | ALL_POCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ALL_POAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ALL_POSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ALL_POMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ALL_POMaxAggregateInputType
  }

  export type GetALL_POAggregateType<T extends ALL_POAggregateArgs> = {
        [P in keyof T & keyof AggregateALL_PO]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateALL_PO[P]>
      : GetScalarType<T[P], AggregateALL_PO[P]>
  }




  export type ALL_POGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ALL_POWhereInput
    orderBy?: ALL_POOrderByWithAggregationInput | ALL_POOrderByWithAggregationInput[]
    by: ALL_POScalarFieldEnum[] | ALL_POScalarFieldEnum
    having?: ALL_POScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ALL_POCountAggregateInputType | true
    _avg?: ALL_POAvgAggregateInputType
    _sum?: ALL_POSumAggregateInputType
    _min?: ALL_POMinAggregateInputType
    _max?: ALL_POMaxAggregateInputType
  }

  export type ALL_POGroupByOutputType = {
    prNumber: string
    prType: string | null
    prDate: Date | null
    prItem: string | null
    qtyPr: number | null
    uomQtyPr: string | null
    prPlant: string | null
    prSloc: string | null
    deliveryDate: Date | null
    trackingNumber: string | null
    prRequisitioner: string | null
    shortText: string | null
    materialNumber: string | null
    materialType: string | null
    brand: string | null
    brandDescription: string | null
    poNo: string | null
    poType: string | null
    vendorCode: string | null
    vendorName: string | null
    poDate: Date | null
    paymentTerm: string | null
    poReleaseStatus: string | null
    poItem: string | null
    plantPo: string | null
    slocPo: string | null
    qtyPo: number | null
    uomQtyPo: string | null
    openQtyPo: number | null
    deliveryDatePo: Date | null
    delvCompleted: string | null
    netPrice: number | null
    totalValue: number | null
    poTrackNo: string | null
    lastGr101Date: Date | null
    gr101Qty: number | null
    lastGr103Date: Date | null
    gr103Qty: number | null
    lastGr105Date: Date | null
    gr105Qty: number | null
    lastGr107Date: Date | null
    gr107Qty: number | null
    lastGr109Date: Date | null
    gr109Qty: number | null
    lastIrDate: Date | null
    qtyIr: number | null
    ammountLcIr: number | null
    _count: ALL_POCountAggregateOutputType | null
    _avg: ALL_POAvgAggregateOutputType | null
    _sum: ALL_POSumAggregateOutputType | null
    _min: ALL_POMinAggregateOutputType | null
    _max: ALL_POMaxAggregateOutputType | null
  }

  type GetALL_POGroupByPayload<T extends ALL_POGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ALL_POGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ALL_POGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ALL_POGroupByOutputType[P]>
            : GetScalarType<T[P], ALL_POGroupByOutputType[P]>
        }
      >
    >


  export type ALL_POSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prNumber?: boolean
    prType?: boolean
    prDate?: boolean
    prItem?: boolean
    qtyPr?: boolean
    uomQtyPr?: boolean
    prPlant?: boolean
    prSloc?: boolean
    deliveryDate?: boolean
    trackingNumber?: boolean
    prRequisitioner?: boolean
    shortText?: boolean
    materialNumber?: boolean
    materialType?: boolean
    brand?: boolean
    brandDescription?: boolean
    poNo?: boolean
    poType?: boolean
    vendorCode?: boolean
    vendorName?: boolean
    poDate?: boolean
    paymentTerm?: boolean
    poReleaseStatus?: boolean
    poItem?: boolean
    plantPo?: boolean
    slocPo?: boolean
    qtyPo?: boolean
    uomQtyPo?: boolean
    openQtyPo?: boolean
    deliveryDatePo?: boolean
    delvCompleted?: boolean
    netPrice?: boolean
    totalValue?: boolean
    poTrackNo?: boolean
    lastGr101Date?: boolean
    gr101Qty?: boolean
    lastGr103Date?: boolean
    gr103Qty?: boolean
    lastGr105Date?: boolean
    gr105Qty?: boolean
    lastGr107Date?: boolean
    gr107Qty?: boolean
    lastGr109Date?: boolean
    gr109Qty?: boolean
    lastIrDate?: boolean
    qtyIr?: boolean
    ammountLcIr?: boolean
  }, ExtArgs["result"]["aLL_PO"]>


  export type ALL_POSelectScalar = {
    prNumber?: boolean
    prType?: boolean
    prDate?: boolean
    prItem?: boolean
    qtyPr?: boolean
    uomQtyPr?: boolean
    prPlant?: boolean
    prSloc?: boolean
    deliveryDate?: boolean
    trackingNumber?: boolean
    prRequisitioner?: boolean
    shortText?: boolean
    materialNumber?: boolean
    materialType?: boolean
    brand?: boolean
    brandDescription?: boolean
    poNo?: boolean
    poType?: boolean
    vendorCode?: boolean
    vendorName?: boolean
    poDate?: boolean
    paymentTerm?: boolean
    poReleaseStatus?: boolean
    poItem?: boolean
    plantPo?: boolean
    slocPo?: boolean
    qtyPo?: boolean
    uomQtyPo?: boolean
    openQtyPo?: boolean
    deliveryDatePo?: boolean
    delvCompleted?: boolean
    netPrice?: boolean
    totalValue?: boolean
    poTrackNo?: boolean
    lastGr101Date?: boolean
    gr101Qty?: boolean
    lastGr103Date?: boolean
    gr103Qty?: boolean
    lastGr105Date?: boolean
    gr105Qty?: boolean
    lastGr107Date?: boolean
    gr107Qty?: boolean
    lastGr109Date?: boolean
    gr109Qty?: boolean
    lastIrDate?: boolean
    qtyIr?: boolean
    ammountLcIr?: boolean
  }


  export type $ALL_POPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ALL_PO"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      prNumber: string
      prType: string | null
      prDate: Date | null
      prItem: string | null
      qtyPr: number | null
      uomQtyPr: string | null
      prPlant: string | null
      prSloc: string | null
      deliveryDate: Date | null
      trackingNumber: string | null
      prRequisitioner: string | null
      shortText: string | null
      materialNumber: string | null
      materialType: string | null
      brand: string | null
      brandDescription: string | null
      poNo: string | null
      poType: string | null
      vendorCode: string | null
      vendorName: string | null
      poDate: Date | null
      paymentTerm: string | null
      poReleaseStatus: string | null
      poItem: string | null
      plantPo: string | null
      slocPo: string | null
      qtyPo: number | null
      uomQtyPo: string | null
      openQtyPo: number | null
      deliveryDatePo: Date | null
      delvCompleted: string | null
      netPrice: number | null
      totalValue: number | null
      poTrackNo: string | null
      lastGr101Date: Date | null
      gr101Qty: number | null
      lastGr103Date: Date | null
      gr103Qty: number | null
      lastGr105Date: Date | null
      gr105Qty: number | null
      lastGr107Date: Date | null
      gr107Qty: number | null
      lastGr109Date: Date | null
      gr109Qty: number | null
      lastIrDate: Date | null
      qtyIr: number | null
      ammountLcIr: number | null
    }, ExtArgs["result"]["aLL_PO"]>
    composites: {}
  }

  type ALL_POGetPayload<S extends boolean | null | undefined | ALL_PODefaultArgs> = $Result.GetResult<Prisma.$ALL_POPayload, S>

  type ALL_POCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ALL_POFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ALL_POCountAggregateInputType | true
    }

  export interface ALL_PODelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ALL_PO'], meta: { name: 'ALL_PO' } }
    /**
     * Find zero or one ALL_PO that matches the filter.
     * @param {ALL_POFindUniqueArgs} args - Arguments to find a ALL_PO
     * @example
     * // Get one ALL_PO
     * const aLL_PO = await prisma.aLL_PO.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ALL_POFindUniqueArgs>(args: SelectSubset<T, ALL_POFindUniqueArgs<ExtArgs>>): Prisma__ALL_POClient<$Result.GetResult<Prisma.$ALL_POPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ALL_PO that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ALL_POFindUniqueOrThrowArgs} args - Arguments to find a ALL_PO
     * @example
     * // Get one ALL_PO
     * const aLL_PO = await prisma.aLL_PO.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ALL_POFindUniqueOrThrowArgs>(args: SelectSubset<T, ALL_POFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ALL_POClient<$Result.GetResult<Prisma.$ALL_POPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ALL_PO that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ALL_POFindFirstArgs} args - Arguments to find a ALL_PO
     * @example
     * // Get one ALL_PO
     * const aLL_PO = await prisma.aLL_PO.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ALL_POFindFirstArgs>(args?: SelectSubset<T, ALL_POFindFirstArgs<ExtArgs>>): Prisma__ALL_POClient<$Result.GetResult<Prisma.$ALL_POPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ALL_PO that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ALL_POFindFirstOrThrowArgs} args - Arguments to find a ALL_PO
     * @example
     * // Get one ALL_PO
     * const aLL_PO = await prisma.aLL_PO.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ALL_POFindFirstOrThrowArgs>(args?: SelectSubset<T, ALL_POFindFirstOrThrowArgs<ExtArgs>>): Prisma__ALL_POClient<$Result.GetResult<Prisma.$ALL_POPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ALL_POS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ALL_POFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ALL_POS
     * const aLL_POS = await prisma.aLL_PO.findMany()
     * 
     * // Get first 10 ALL_POS
     * const aLL_POS = await prisma.aLL_PO.findMany({ take: 10 })
     * 
     * // Only select the `prNumber`
     * const aLL_POWithPrNumberOnly = await prisma.aLL_PO.findMany({ select: { prNumber: true } })
     * 
     */
    findMany<T extends ALL_POFindManyArgs>(args?: SelectSubset<T, ALL_POFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ALL_POPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ALL_PO.
     * @param {ALL_POCreateArgs} args - Arguments to create a ALL_PO.
     * @example
     * // Create one ALL_PO
     * const ALL_PO = await prisma.aLL_PO.create({
     *   data: {
     *     // ... data to create a ALL_PO
     *   }
     * })
     * 
     */
    create<T extends ALL_POCreateArgs>(args: SelectSubset<T, ALL_POCreateArgs<ExtArgs>>): Prisma__ALL_POClient<$Result.GetResult<Prisma.$ALL_POPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ALL_POS.
     * @param {ALL_POCreateManyArgs} args - Arguments to create many ALL_POS.
     * @example
     * // Create many ALL_POS
     * const aLL_PO = await prisma.aLL_PO.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ALL_POCreateManyArgs>(args?: SelectSubset<T, ALL_POCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ALL_PO.
     * @param {ALL_PODeleteArgs} args - Arguments to delete one ALL_PO.
     * @example
     * // Delete one ALL_PO
     * const ALL_PO = await prisma.aLL_PO.delete({
     *   where: {
     *     // ... filter to delete one ALL_PO
     *   }
     * })
     * 
     */
    delete<T extends ALL_PODeleteArgs>(args: SelectSubset<T, ALL_PODeleteArgs<ExtArgs>>): Prisma__ALL_POClient<$Result.GetResult<Prisma.$ALL_POPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ALL_PO.
     * @param {ALL_POUpdateArgs} args - Arguments to update one ALL_PO.
     * @example
     * // Update one ALL_PO
     * const aLL_PO = await prisma.aLL_PO.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ALL_POUpdateArgs>(args: SelectSubset<T, ALL_POUpdateArgs<ExtArgs>>): Prisma__ALL_POClient<$Result.GetResult<Prisma.$ALL_POPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ALL_POS.
     * @param {ALL_PODeleteManyArgs} args - Arguments to filter ALL_POS to delete.
     * @example
     * // Delete a few ALL_POS
     * const { count } = await prisma.aLL_PO.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ALL_PODeleteManyArgs>(args?: SelectSubset<T, ALL_PODeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ALL_POS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ALL_POUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ALL_POS
     * const aLL_PO = await prisma.aLL_PO.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ALL_POUpdateManyArgs>(args: SelectSubset<T, ALL_POUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ALL_PO.
     * @param {ALL_POUpsertArgs} args - Arguments to update or create a ALL_PO.
     * @example
     * // Update or create a ALL_PO
     * const aLL_PO = await prisma.aLL_PO.upsert({
     *   create: {
     *     // ... data to create a ALL_PO
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ALL_PO we want to update
     *   }
     * })
     */
    upsert<T extends ALL_POUpsertArgs>(args: SelectSubset<T, ALL_POUpsertArgs<ExtArgs>>): Prisma__ALL_POClient<$Result.GetResult<Prisma.$ALL_POPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ALL_POS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ALL_POCountArgs} args - Arguments to filter ALL_POS to count.
     * @example
     * // Count the number of ALL_POS
     * const count = await prisma.aLL_PO.count({
     *   where: {
     *     // ... the filter for the ALL_POS we want to count
     *   }
     * })
    **/
    count<T extends ALL_POCountArgs>(
      args?: Subset<T, ALL_POCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ALL_POCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ALL_PO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ALL_POAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ALL_POAggregateArgs>(args: Subset<T, ALL_POAggregateArgs>): Prisma.PrismaPromise<GetALL_POAggregateType<T>>

    /**
     * Group by ALL_PO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ALL_POGroupByArgs} args - Group by arguments.
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
      T extends ALL_POGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ALL_POGroupByArgs['orderBy'] }
        : { orderBy?: ALL_POGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ALL_POGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetALL_POGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ALL_PO model
   */
  readonly fields: ALL_POFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ALL_PO.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ALL_POClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ALL_PO model
   */ 
  interface ALL_POFieldRefs {
    readonly prNumber: FieldRef<"ALL_PO", 'String'>
    readonly prType: FieldRef<"ALL_PO", 'String'>
    readonly prDate: FieldRef<"ALL_PO", 'DateTime'>
    readonly prItem: FieldRef<"ALL_PO", 'String'>
    readonly qtyPr: FieldRef<"ALL_PO", 'Float'>
    readonly uomQtyPr: FieldRef<"ALL_PO", 'String'>
    readonly prPlant: FieldRef<"ALL_PO", 'String'>
    readonly prSloc: FieldRef<"ALL_PO", 'String'>
    readonly deliveryDate: FieldRef<"ALL_PO", 'DateTime'>
    readonly trackingNumber: FieldRef<"ALL_PO", 'String'>
    readonly prRequisitioner: FieldRef<"ALL_PO", 'String'>
    readonly shortText: FieldRef<"ALL_PO", 'String'>
    readonly materialNumber: FieldRef<"ALL_PO", 'String'>
    readonly materialType: FieldRef<"ALL_PO", 'String'>
    readonly brand: FieldRef<"ALL_PO", 'String'>
    readonly brandDescription: FieldRef<"ALL_PO", 'String'>
    readonly poNo: FieldRef<"ALL_PO", 'String'>
    readonly poType: FieldRef<"ALL_PO", 'String'>
    readonly vendorCode: FieldRef<"ALL_PO", 'String'>
    readonly vendorName: FieldRef<"ALL_PO", 'String'>
    readonly poDate: FieldRef<"ALL_PO", 'DateTime'>
    readonly paymentTerm: FieldRef<"ALL_PO", 'String'>
    readonly poReleaseStatus: FieldRef<"ALL_PO", 'String'>
    readonly poItem: FieldRef<"ALL_PO", 'String'>
    readonly plantPo: FieldRef<"ALL_PO", 'String'>
    readonly slocPo: FieldRef<"ALL_PO", 'String'>
    readonly qtyPo: FieldRef<"ALL_PO", 'Float'>
    readonly uomQtyPo: FieldRef<"ALL_PO", 'String'>
    readonly openQtyPo: FieldRef<"ALL_PO", 'Float'>
    readonly deliveryDatePo: FieldRef<"ALL_PO", 'DateTime'>
    readonly delvCompleted: FieldRef<"ALL_PO", 'String'>
    readonly netPrice: FieldRef<"ALL_PO", 'Float'>
    readonly totalValue: FieldRef<"ALL_PO", 'Float'>
    readonly poTrackNo: FieldRef<"ALL_PO", 'String'>
    readonly lastGr101Date: FieldRef<"ALL_PO", 'DateTime'>
    readonly gr101Qty: FieldRef<"ALL_PO", 'Int'>
    readonly lastGr103Date: FieldRef<"ALL_PO", 'DateTime'>
    readonly gr103Qty: FieldRef<"ALL_PO", 'Float'>
    readonly lastGr105Date: FieldRef<"ALL_PO", 'DateTime'>
    readonly gr105Qty: FieldRef<"ALL_PO", 'Float'>
    readonly lastGr107Date: FieldRef<"ALL_PO", 'DateTime'>
    readonly gr107Qty: FieldRef<"ALL_PO", 'Int'>
    readonly lastGr109Date: FieldRef<"ALL_PO", 'DateTime'>
    readonly gr109Qty: FieldRef<"ALL_PO", 'Float'>
    readonly lastIrDate: FieldRef<"ALL_PO", 'DateTime'>
    readonly qtyIr: FieldRef<"ALL_PO", 'Float'>
    readonly ammountLcIr: FieldRef<"ALL_PO", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ALL_PO findUnique
   */
  export type ALL_POFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ALL_PO
     */
    select?: ALL_POSelect<ExtArgs> | null
    /**
     * Filter, which ALL_PO to fetch.
     */
    where: ALL_POWhereUniqueInput
  }

  /**
   * ALL_PO findUniqueOrThrow
   */
  export type ALL_POFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ALL_PO
     */
    select?: ALL_POSelect<ExtArgs> | null
    /**
     * Filter, which ALL_PO to fetch.
     */
    where: ALL_POWhereUniqueInput
  }

  /**
   * ALL_PO findFirst
   */
  export type ALL_POFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ALL_PO
     */
    select?: ALL_POSelect<ExtArgs> | null
    /**
     * Filter, which ALL_PO to fetch.
     */
    where?: ALL_POWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ALL_POS to fetch.
     */
    orderBy?: ALL_POOrderByWithRelationInput | ALL_POOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ALL_POS.
     */
    cursor?: ALL_POWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ALL_POS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ALL_POS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ALL_POS.
     */
    distinct?: ALL_POScalarFieldEnum | ALL_POScalarFieldEnum[]
  }

  /**
   * ALL_PO findFirstOrThrow
   */
  export type ALL_POFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ALL_PO
     */
    select?: ALL_POSelect<ExtArgs> | null
    /**
     * Filter, which ALL_PO to fetch.
     */
    where?: ALL_POWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ALL_POS to fetch.
     */
    orderBy?: ALL_POOrderByWithRelationInput | ALL_POOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ALL_POS.
     */
    cursor?: ALL_POWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ALL_POS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ALL_POS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ALL_POS.
     */
    distinct?: ALL_POScalarFieldEnum | ALL_POScalarFieldEnum[]
  }

  /**
   * ALL_PO findMany
   */
  export type ALL_POFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ALL_PO
     */
    select?: ALL_POSelect<ExtArgs> | null
    /**
     * Filter, which ALL_POS to fetch.
     */
    where?: ALL_POWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ALL_POS to fetch.
     */
    orderBy?: ALL_POOrderByWithRelationInput | ALL_POOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ALL_POS.
     */
    cursor?: ALL_POWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ALL_POS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ALL_POS.
     */
    skip?: number
    distinct?: ALL_POScalarFieldEnum | ALL_POScalarFieldEnum[]
  }

  /**
   * ALL_PO create
   */
  export type ALL_POCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ALL_PO
     */
    select?: ALL_POSelect<ExtArgs> | null
    /**
     * The data needed to create a ALL_PO.
     */
    data: XOR<ALL_POCreateInput, ALL_POUncheckedCreateInput>
  }

  /**
   * ALL_PO createMany
   */
  export type ALL_POCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ALL_POS.
     */
    data: ALL_POCreateManyInput | ALL_POCreateManyInput[]
  }

  /**
   * ALL_PO update
   */
  export type ALL_POUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ALL_PO
     */
    select?: ALL_POSelect<ExtArgs> | null
    /**
     * The data needed to update a ALL_PO.
     */
    data: XOR<ALL_POUpdateInput, ALL_POUncheckedUpdateInput>
    /**
     * Choose, which ALL_PO to update.
     */
    where: ALL_POWhereUniqueInput
  }

  /**
   * ALL_PO updateMany
   */
  export type ALL_POUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ALL_POS.
     */
    data: XOR<ALL_POUpdateManyMutationInput, ALL_POUncheckedUpdateManyInput>
    /**
     * Filter which ALL_POS to update
     */
    where?: ALL_POWhereInput
    limit?: number
  }

  /**
   * ALL_PO upsert
   */
  export type ALL_POUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ALL_PO
     */
    select?: ALL_POSelect<ExtArgs> | null
    /**
     * The filter to search for the ALL_PO to update in case it exists.
     */
    where: ALL_POWhereUniqueInput
    /**
     * In case the ALL_PO found by the `where` argument doesn't exist, create a new ALL_PO with this data.
     */
    create: XOR<ALL_POCreateInput, ALL_POUncheckedCreateInput>
    /**
     * In case the ALL_PO was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ALL_POUpdateInput, ALL_POUncheckedUpdateInput>
  }

  /**
   * ALL_PO delete
   */
  export type ALL_PODeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ALL_PO
     */
    select?: ALL_POSelect<ExtArgs> | null
    /**
     * Filter which ALL_PO to delete.
     */
    where: ALL_POWhereUniqueInput
  }

  /**
   * ALL_PO deleteMany
   */
  export type ALL_PODeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ALL_POS to delete
     */
    where?: ALL_POWhereInput
    limit?: number
  }

  /**
   * ALL_PO without action
   */
  export type ALL_PODefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ALL_PO
     */
    select?: ALL_POSelect<ExtArgs> | null
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


  export const ALL_POScalarFieldEnum: {
    prNumber: 'prNumber',
    prType: 'prType',
    prDate: 'prDate',
    prItem: 'prItem',
    qtyPr: 'qtyPr',
    uomQtyPr: 'uomQtyPr',
    prPlant: 'prPlant',
    prSloc: 'prSloc',
    deliveryDate: 'deliveryDate',
    trackingNumber: 'trackingNumber',
    prRequisitioner: 'prRequisitioner',
    shortText: 'shortText',
    materialNumber: 'materialNumber',
    materialType: 'materialType',
    brand: 'brand',
    brandDescription: 'brandDescription',
    poNo: 'poNo',
    poType: 'poType',
    vendorCode: 'vendorCode',
    vendorName: 'vendorName',
    poDate: 'poDate',
    paymentTerm: 'paymentTerm',
    poReleaseStatus: 'poReleaseStatus',
    poItem: 'poItem',
    plantPo: 'plantPo',
    slocPo: 'slocPo',
    qtyPo: 'qtyPo',
    uomQtyPo: 'uomQtyPo',
    openQtyPo: 'openQtyPo',
    deliveryDatePo: 'deliveryDatePo',
    delvCompleted: 'delvCompleted',
    netPrice: 'netPrice',
    totalValue: 'totalValue',
    poTrackNo: 'poTrackNo',
    lastGr101Date: 'lastGr101Date',
    gr101Qty: 'gr101Qty',
    lastGr103Date: 'lastGr103Date',
    gr103Qty: 'gr103Qty',
    lastGr105Date: 'lastGr105Date',
    gr105Qty: 'gr105Qty',
    lastGr107Date: 'lastGr107Date',
    gr107Qty: 'gr107Qty',
    lastGr109Date: 'lastGr109Date',
    gr109Qty: 'gr109Qty',
    lastIrDate: 'lastIrDate',
    qtyIr: 'qtyIr',
    ammountLcIr: 'ammountLcIr'
  };

  export type ALL_POScalarFieldEnum = (typeof ALL_POScalarFieldEnum)[keyof typeof ALL_POScalarFieldEnum]


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
   * Deep Input Types
   */


  export type ALL_POWhereInput = {
    AND?: ALL_POWhereInput | ALL_POWhereInput[]
    OR?: ALL_POWhereInput[]
    NOT?: ALL_POWhereInput | ALL_POWhereInput[]
    prNumber?: StringFilter<"ALL_PO"> | string
    prType?: StringNullableFilter<"ALL_PO"> | string | null
    prDate?: DateTimeNullableFilter<"ALL_PO"> | Date | string | null
    prItem?: StringNullableFilter<"ALL_PO"> | string | null
    qtyPr?: FloatNullableFilter<"ALL_PO"> | number | null
    uomQtyPr?: StringNullableFilter<"ALL_PO"> | string | null
    prPlant?: StringNullableFilter<"ALL_PO"> | string | null
    prSloc?: StringNullableFilter<"ALL_PO"> | string | null
    deliveryDate?: DateTimeNullableFilter<"ALL_PO"> | Date | string | null
    trackingNumber?: StringNullableFilter<"ALL_PO"> | string | null
    prRequisitioner?: StringNullableFilter<"ALL_PO"> | string | null
    shortText?: StringNullableFilter<"ALL_PO"> | string | null
    materialNumber?: StringNullableFilter<"ALL_PO"> | string | null
    materialType?: StringNullableFilter<"ALL_PO"> | string | null
    brand?: StringNullableFilter<"ALL_PO"> | string | null
    brandDescription?: StringNullableFilter<"ALL_PO"> | string | null
    poNo?: StringNullableFilter<"ALL_PO"> | string | null
    poType?: StringNullableFilter<"ALL_PO"> | string | null
    vendorCode?: StringNullableFilter<"ALL_PO"> | string | null
    vendorName?: StringNullableFilter<"ALL_PO"> | string | null
    poDate?: DateTimeNullableFilter<"ALL_PO"> | Date | string | null
    paymentTerm?: StringNullableFilter<"ALL_PO"> | string | null
    poReleaseStatus?: StringNullableFilter<"ALL_PO"> | string | null
    poItem?: StringNullableFilter<"ALL_PO"> | string | null
    plantPo?: StringNullableFilter<"ALL_PO"> | string | null
    slocPo?: StringNullableFilter<"ALL_PO"> | string | null
    qtyPo?: FloatNullableFilter<"ALL_PO"> | number | null
    uomQtyPo?: StringNullableFilter<"ALL_PO"> | string | null
    openQtyPo?: FloatNullableFilter<"ALL_PO"> | number | null
    deliveryDatePo?: DateTimeNullableFilter<"ALL_PO"> | Date | string | null
    delvCompleted?: StringNullableFilter<"ALL_PO"> | string | null
    netPrice?: FloatNullableFilter<"ALL_PO"> | number | null
    totalValue?: FloatNullableFilter<"ALL_PO"> | number | null
    poTrackNo?: StringNullableFilter<"ALL_PO"> | string | null
    lastGr101Date?: DateTimeNullableFilter<"ALL_PO"> | Date | string | null
    gr101Qty?: IntNullableFilter<"ALL_PO"> | number | null
    lastGr103Date?: DateTimeNullableFilter<"ALL_PO"> | Date | string | null
    gr103Qty?: FloatNullableFilter<"ALL_PO"> | number | null
    lastGr105Date?: DateTimeNullableFilter<"ALL_PO"> | Date | string | null
    gr105Qty?: FloatNullableFilter<"ALL_PO"> | number | null
    lastGr107Date?: DateTimeNullableFilter<"ALL_PO"> | Date | string | null
    gr107Qty?: IntNullableFilter<"ALL_PO"> | number | null
    lastGr109Date?: DateTimeNullableFilter<"ALL_PO"> | Date | string | null
    gr109Qty?: FloatNullableFilter<"ALL_PO"> | number | null
    lastIrDate?: DateTimeNullableFilter<"ALL_PO"> | Date | string | null
    qtyIr?: FloatNullableFilter<"ALL_PO"> | number | null
    ammountLcIr?: FloatNullableFilter<"ALL_PO"> | number | null
  }

  export type ALL_POOrderByWithRelationInput = {
    prNumber?: SortOrder
    prType?: SortOrderInput | SortOrder
    prDate?: SortOrderInput | SortOrder
    prItem?: SortOrderInput | SortOrder
    qtyPr?: SortOrderInput | SortOrder
    uomQtyPr?: SortOrderInput | SortOrder
    prPlant?: SortOrderInput | SortOrder
    prSloc?: SortOrderInput | SortOrder
    deliveryDate?: SortOrderInput | SortOrder
    trackingNumber?: SortOrderInput | SortOrder
    prRequisitioner?: SortOrderInput | SortOrder
    shortText?: SortOrderInput | SortOrder
    materialNumber?: SortOrderInput | SortOrder
    materialType?: SortOrderInput | SortOrder
    brand?: SortOrderInput | SortOrder
    brandDescription?: SortOrderInput | SortOrder
    poNo?: SortOrderInput | SortOrder
    poType?: SortOrderInput | SortOrder
    vendorCode?: SortOrderInput | SortOrder
    vendorName?: SortOrderInput | SortOrder
    poDate?: SortOrderInput | SortOrder
    paymentTerm?: SortOrderInput | SortOrder
    poReleaseStatus?: SortOrderInput | SortOrder
    poItem?: SortOrderInput | SortOrder
    plantPo?: SortOrderInput | SortOrder
    slocPo?: SortOrderInput | SortOrder
    qtyPo?: SortOrderInput | SortOrder
    uomQtyPo?: SortOrderInput | SortOrder
    openQtyPo?: SortOrderInput | SortOrder
    deliveryDatePo?: SortOrderInput | SortOrder
    delvCompleted?: SortOrderInput | SortOrder
    netPrice?: SortOrderInput | SortOrder
    totalValue?: SortOrderInput | SortOrder
    poTrackNo?: SortOrderInput | SortOrder
    lastGr101Date?: SortOrderInput | SortOrder
    gr101Qty?: SortOrderInput | SortOrder
    lastGr103Date?: SortOrderInput | SortOrder
    gr103Qty?: SortOrderInput | SortOrder
    lastGr105Date?: SortOrderInput | SortOrder
    gr105Qty?: SortOrderInput | SortOrder
    lastGr107Date?: SortOrderInput | SortOrder
    gr107Qty?: SortOrderInput | SortOrder
    lastGr109Date?: SortOrderInput | SortOrder
    gr109Qty?: SortOrderInput | SortOrder
    lastIrDate?: SortOrderInput | SortOrder
    qtyIr?: SortOrderInput | SortOrder
    ammountLcIr?: SortOrderInput | SortOrder
  }

  export type ALL_POWhereUniqueInput = Prisma.AtLeast<{
    prNumber?: string
    AND?: ALL_POWhereInput | ALL_POWhereInput[]
    OR?: ALL_POWhereInput[]
    NOT?: ALL_POWhereInput | ALL_POWhereInput[]
    prType?: StringNullableFilter<"ALL_PO"> | string | null
    prDate?: DateTimeNullableFilter<"ALL_PO"> | Date | string | null
    prItem?: StringNullableFilter<"ALL_PO"> | string | null
    qtyPr?: FloatNullableFilter<"ALL_PO"> | number | null
    uomQtyPr?: StringNullableFilter<"ALL_PO"> | string | null
    prPlant?: StringNullableFilter<"ALL_PO"> | string | null
    prSloc?: StringNullableFilter<"ALL_PO"> | string | null
    deliveryDate?: DateTimeNullableFilter<"ALL_PO"> | Date | string | null
    trackingNumber?: StringNullableFilter<"ALL_PO"> | string | null
    prRequisitioner?: StringNullableFilter<"ALL_PO"> | string | null
    shortText?: StringNullableFilter<"ALL_PO"> | string | null
    materialNumber?: StringNullableFilter<"ALL_PO"> | string | null
    materialType?: StringNullableFilter<"ALL_PO"> | string | null
    brand?: StringNullableFilter<"ALL_PO"> | string | null
    brandDescription?: StringNullableFilter<"ALL_PO"> | string | null
    poNo?: StringNullableFilter<"ALL_PO"> | string | null
    poType?: StringNullableFilter<"ALL_PO"> | string | null
    vendorCode?: StringNullableFilter<"ALL_PO"> | string | null
    vendorName?: StringNullableFilter<"ALL_PO"> | string | null
    poDate?: DateTimeNullableFilter<"ALL_PO"> | Date | string | null
    paymentTerm?: StringNullableFilter<"ALL_PO"> | string | null
    poReleaseStatus?: StringNullableFilter<"ALL_PO"> | string | null
    poItem?: StringNullableFilter<"ALL_PO"> | string | null
    plantPo?: StringNullableFilter<"ALL_PO"> | string | null
    slocPo?: StringNullableFilter<"ALL_PO"> | string | null
    qtyPo?: FloatNullableFilter<"ALL_PO"> | number | null
    uomQtyPo?: StringNullableFilter<"ALL_PO"> | string | null
    openQtyPo?: FloatNullableFilter<"ALL_PO"> | number | null
    deliveryDatePo?: DateTimeNullableFilter<"ALL_PO"> | Date | string | null
    delvCompleted?: StringNullableFilter<"ALL_PO"> | string | null
    netPrice?: FloatNullableFilter<"ALL_PO"> | number | null
    totalValue?: FloatNullableFilter<"ALL_PO"> | number | null
    poTrackNo?: StringNullableFilter<"ALL_PO"> | string | null
    lastGr101Date?: DateTimeNullableFilter<"ALL_PO"> | Date | string | null
    gr101Qty?: IntNullableFilter<"ALL_PO"> | number | null
    lastGr103Date?: DateTimeNullableFilter<"ALL_PO"> | Date | string | null
    gr103Qty?: FloatNullableFilter<"ALL_PO"> | number | null
    lastGr105Date?: DateTimeNullableFilter<"ALL_PO"> | Date | string | null
    gr105Qty?: FloatNullableFilter<"ALL_PO"> | number | null
    lastGr107Date?: DateTimeNullableFilter<"ALL_PO"> | Date | string | null
    gr107Qty?: IntNullableFilter<"ALL_PO"> | number | null
    lastGr109Date?: DateTimeNullableFilter<"ALL_PO"> | Date | string | null
    gr109Qty?: FloatNullableFilter<"ALL_PO"> | number | null
    lastIrDate?: DateTimeNullableFilter<"ALL_PO"> | Date | string | null
    qtyIr?: FloatNullableFilter<"ALL_PO"> | number | null
    ammountLcIr?: FloatNullableFilter<"ALL_PO"> | number | null
  }, "prNumber">

  export type ALL_POOrderByWithAggregationInput = {
    prNumber?: SortOrder
    prType?: SortOrderInput | SortOrder
    prDate?: SortOrderInput | SortOrder
    prItem?: SortOrderInput | SortOrder
    qtyPr?: SortOrderInput | SortOrder
    uomQtyPr?: SortOrderInput | SortOrder
    prPlant?: SortOrderInput | SortOrder
    prSloc?: SortOrderInput | SortOrder
    deliveryDate?: SortOrderInput | SortOrder
    trackingNumber?: SortOrderInput | SortOrder
    prRequisitioner?: SortOrderInput | SortOrder
    shortText?: SortOrderInput | SortOrder
    materialNumber?: SortOrderInput | SortOrder
    materialType?: SortOrderInput | SortOrder
    brand?: SortOrderInput | SortOrder
    brandDescription?: SortOrderInput | SortOrder
    poNo?: SortOrderInput | SortOrder
    poType?: SortOrderInput | SortOrder
    vendorCode?: SortOrderInput | SortOrder
    vendorName?: SortOrderInput | SortOrder
    poDate?: SortOrderInput | SortOrder
    paymentTerm?: SortOrderInput | SortOrder
    poReleaseStatus?: SortOrderInput | SortOrder
    poItem?: SortOrderInput | SortOrder
    plantPo?: SortOrderInput | SortOrder
    slocPo?: SortOrderInput | SortOrder
    qtyPo?: SortOrderInput | SortOrder
    uomQtyPo?: SortOrderInput | SortOrder
    openQtyPo?: SortOrderInput | SortOrder
    deliveryDatePo?: SortOrderInput | SortOrder
    delvCompleted?: SortOrderInput | SortOrder
    netPrice?: SortOrderInput | SortOrder
    totalValue?: SortOrderInput | SortOrder
    poTrackNo?: SortOrderInput | SortOrder
    lastGr101Date?: SortOrderInput | SortOrder
    gr101Qty?: SortOrderInput | SortOrder
    lastGr103Date?: SortOrderInput | SortOrder
    gr103Qty?: SortOrderInput | SortOrder
    lastGr105Date?: SortOrderInput | SortOrder
    gr105Qty?: SortOrderInput | SortOrder
    lastGr107Date?: SortOrderInput | SortOrder
    gr107Qty?: SortOrderInput | SortOrder
    lastGr109Date?: SortOrderInput | SortOrder
    gr109Qty?: SortOrderInput | SortOrder
    lastIrDate?: SortOrderInput | SortOrder
    qtyIr?: SortOrderInput | SortOrder
    ammountLcIr?: SortOrderInput | SortOrder
    _count?: ALL_POCountOrderByAggregateInput
    _avg?: ALL_POAvgOrderByAggregateInput
    _max?: ALL_POMaxOrderByAggregateInput
    _min?: ALL_POMinOrderByAggregateInput
    _sum?: ALL_POSumOrderByAggregateInput
  }

  export type ALL_POScalarWhereWithAggregatesInput = {
    AND?: ALL_POScalarWhereWithAggregatesInput | ALL_POScalarWhereWithAggregatesInput[]
    OR?: ALL_POScalarWhereWithAggregatesInput[]
    NOT?: ALL_POScalarWhereWithAggregatesInput | ALL_POScalarWhereWithAggregatesInput[]
    prNumber?: StringWithAggregatesFilter<"ALL_PO"> | string
    prType?: StringNullableWithAggregatesFilter<"ALL_PO"> | string | null
    prDate?: DateTimeNullableWithAggregatesFilter<"ALL_PO"> | Date | string | null
    prItem?: StringNullableWithAggregatesFilter<"ALL_PO"> | string | null
    qtyPr?: FloatNullableWithAggregatesFilter<"ALL_PO"> | number | null
    uomQtyPr?: StringNullableWithAggregatesFilter<"ALL_PO"> | string | null
    prPlant?: StringNullableWithAggregatesFilter<"ALL_PO"> | string | null
    prSloc?: StringNullableWithAggregatesFilter<"ALL_PO"> | string | null
    deliveryDate?: DateTimeNullableWithAggregatesFilter<"ALL_PO"> | Date | string | null
    trackingNumber?: StringNullableWithAggregatesFilter<"ALL_PO"> | string | null
    prRequisitioner?: StringNullableWithAggregatesFilter<"ALL_PO"> | string | null
    shortText?: StringNullableWithAggregatesFilter<"ALL_PO"> | string | null
    materialNumber?: StringNullableWithAggregatesFilter<"ALL_PO"> | string | null
    materialType?: StringNullableWithAggregatesFilter<"ALL_PO"> | string | null
    brand?: StringNullableWithAggregatesFilter<"ALL_PO"> | string | null
    brandDescription?: StringNullableWithAggregatesFilter<"ALL_PO"> | string | null
    poNo?: StringNullableWithAggregatesFilter<"ALL_PO"> | string | null
    poType?: StringNullableWithAggregatesFilter<"ALL_PO"> | string | null
    vendorCode?: StringNullableWithAggregatesFilter<"ALL_PO"> | string | null
    vendorName?: StringNullableWithAggregatesFilter<"ALL_PO"> | string | null
    poDate?: DateTimeNullableWithAggregatesFilter<"ALL_PO"> | Date | string | null
    paymentTerm?: StringNullableWithAggregatesFilter<"ALL_PO"> | string | null
    poReleaseStatus?: StringNullableWithAggregatesFilter<"ALL_PO"> | string | null
    poItem?: StringNullableWithAggregatesFilter<"ALL_PO"> | string | null
    plantPo?: StringNullableWithAggregatesFilter<"ALL_PO"> | string | null
    slocPo?: StringNullableWithAggregatesFilter<"ALL_PO"> | string | null
    qtyPo?: FloatNullableWithAggregatesFilter<"ALL_PO"> | number | null
    uomQtyPo?: StringNullableWithAggregatesFilter<"ALL_PO"> | string | null
    openQtyPo?: FloatNullableWithAggregatesFilter<"ALL_PO"> | number | null
    deliveryDatePo?: DateTimeNullableWithAggregatesFilter<"ALL_PO"> | Date | string | null
    delvCompleted?: StringNullableWithAggregatesFilter<"ALL_PO"> | string | null
    netPrice?: FloatNullableWithAggregatesFilter<"ALL_PO"> | number | null
    totalValue?: FloatNullableWithAggregatesFilter<"ALL_PO"> | number | null
    poTrackNo?: StringNullableWithAggregatesFilter<"ALL_PO"> | string | null
    lastGr101Date?: DateTimeNullableWithAggregatesFilter<"ALL_PO"> | Date | string | null
    gr101Qty?: IntNullableWithAggregatesFilter<"ALL_PO"> | number | null
    lastGr103Date?: DateTimeNullableWithAggregatesFilter<"ALL_PO"> | Date | string | null
    gr103Qty?: FloatNullableWithAggregatesFilter<"ALL_PO"> | number | null
    lastGr105Date?: DateTimeNullableWithAggregatesFilter<"ALL_PO"> | Date | string | null
    gr105Qty?: FloatNullableWithAggregatesFilter<"ALL_PO"> | number | null
    lastGr107Date?: DateTimeNullableWithAggregatesFilter<"ALL_PO"> | Date | string | null
    gr107Qty?: IntNullableWithAggregatesFilter<"ALL_PO"> | number | null
    lastGr109Date?: DateTimeNullableWithAggregatesFilter<"ALL_PO"> | Date | string | null
    gr109Qty?: FloatNullableWithAggregatesFilter<"ALL_PO"> | number | null
    lastIrDate?: DateTimeNullableWithAggregatesFilter<"ALL_PO"> | Date | string | null
    qtyIr?: FloatNullableWithAggregatesFilter<"ALL_PO"> | number | null
    ammountLcIr?: FloatNullableWithAggregatesFilter<"ALL_PO"> | number | null
  }

  export type ALL_POCreateInput = {
    prNumber: string
    prType?: string | null
    prDate?: Date | string | null
    prItem?: string | null
    qtyPr?: number | null
    uomQtyPr?: string | null
    prPlant?: string | null
    prSloc?: string | null
    deliveryDate?: Date | string | null
    trackingNumber?: string | null
    prRequisitioner?: string | null
    shortText?: string | null
    materialNumber?: string | null
    materialType?: string | null
    brand?: string | null
    brandDescription?: string | null
    poNo?: string | null
    poType?: string | null
    vendorCode?: string | null
    vendorName?: string | null
    poDate?: Date | string | null
    paymentTerm?: string | null
    poReleaseStatus?: string | null
    poItem?: string | null
    plantPo?: string | null
    slocPo?: string | null
    qtyPo?: number | null
    uomQtyPo?: string | null
    openQtyPo?: number | null
    deliveryDatePo?: Date | string | null
    delvCompleted?: string | null
    netPrice?: number | null
    totalValue?: number | null
    poTrackNo?: string | null
    lastGr101Date?: Date | string | null
    gr101Qty?: number | null
    lastGr103Date?: Date | string | null
    gr103Qty?: number | null
    lastGr105Date?: Date | string | null
    gr105Qty?: number | null
    lastGr107Date?: Date | string | null
    gr107Qty?: number | null
    lastGr109Date?: Date | string | null
    gr109Qty?: number | null
    lastIrDate?: Date | string | null
    qtyIr?: number | null
    ammountLcIr?: number | null
  }

  export type ALL_POUncheckedCreateInput = {
    prNumber: string
    prType?: string | null
    prDate?: Date | string | null
    prItem?: string | null
    qtyPr?: number | null
    uomQtyPr?: string | null
    prPlant?: string | null
    prSloc?: string | null
    deliveryDate?: Date | string | null
    trackingNumber?: string | null
    prRequisitioner?: string | null
    shortText?: string | null
    materialNumber?: string | null
    materialType?: string | null
    brand?: string | null
    brandDescription?: string | null
    poNo?: string | null
    poType?: string | null
    vendorCode?: string | null
    vendorName?: string | null
    poDate?: Date | string | null
    paymentTerm?: string | null
    poReleaseStatus?: string | null
    poItem?: string | null
    plantPo?: string | null
    slocPo?: string | null
    qtyPo?: number | null
    uomQtyPo?: string | null
    openQtyPo?: number | null
    deliveryDatePo?: Date | string | null
    delvCompleted?: string | null
    netPrice?: number | null
    totalValue?: number | null
    poTrackNo?: string | null
    lastGr101Date?: Date | string | null
    gr101Qty?: number | null
    lastGr103Date?: Date | string | null
    gr103Qty?: number | null
    lastGr105Date?: Date | string | null
    gr105Qty?: number | null
    lastGr107Date?: Date | string | null
    gr107Qty?: number | null
    lastGr109Date?: Date | string | null
    gr109Qty?: number | null
    lastIrDate?: Date | string | null
    qtyIr?: number | null
    ammountLcIr?: number | null
  }

  export type ALL_POUpdateInput = {
    prNumber?: StringFieldUpdateOperationsInput | string
    prType?: NullableStringFieldUpdateOperationsInput | string | null
    prDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prItem?: NullableStringFieldUpdateOperationsInput | string | null
    qtyPr?: NullableFloatFieldUpdateOperationsInput | number | null
    uomQtyPr?: NullableStringFieldUpdateOperationsInput | string | null
    prPlant?: NullableStringFieldUpdateOperationsInput | string | null
    prSloc?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trackingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    prRequisitioner?: NullableStringFieldUpdateOperationsInput | string | null
    shortText?: NullableStringFieldUpdateOperationsInput | string | null
    materialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    materialType?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    brandDescription?: NullableStringFieldUpdateOperationsInput | string | null
    poNo?: NullableStringFieldUpdateOperationsInput | string | null
    poType?: NullableStringFieldUpdateOperationsInput | string | null
    vendorCode?: NullableStringFieldUpdateOperationsInput | string | null
    vendorName?: NullableStringFieldUpdateOperationsInput | string | null
    poDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerm?: NullableStringFieldUpdateOperationsInput | string | null
    poReleaseStatus?: NullableStringFieldUpdateOperationsInput | string | null
    poItem?: NullableStringFieldUpdateOperationsInput | string | null
    plantPo?: NullableStringFieldUpdateOperationsInput | string | null
    slocPo?: NullableStringFieldUpdateOperationsInput | string | null
    qtyPo?: NullableFloatFieldUpdateOperationsInput | number | null
    uomQtyPo?: NullableStringFieldUpdateOperationsInput | string | null
    openQtyPo?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryDatePo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delvCompleted?: NullableStringFieldUpdateOperationsInput | string | null
    netPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    totalValue?: NullableFloatFieldUpdateOperationsInput | number | null
    poTrackNo?: NullableStringFieldUpdateOperationsInput | string | null
    lastGr101Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gr101Qty?: NullableIntFieldUpdateOperationsInput | number | null
    lastGr103Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gr103Qty?: NullableFloatFieldUpdateOperationsInput | number | null
    lastGr105Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gr105Qty?: NullableFloatFieldUpdateOperationsInput | number | null
    lastGr107Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gr107Qty?: NullableIntFieldUpdateOperationsInput | number | null
    lastGr109Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gr109Qty?: NullableFloatFieldUpdateOperationsInput | number | null
    lastIrDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qtyIr?: NullableFloatFieldUpdateOperationsInput | number | null
    ammountLcIr?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ALL_POUncheckedUpdateInput = {
    prNumber?: StringFieldUpdateOperationsInput | string
    prType?: NullableStringFieldUpdateOperationsInput | string | null
    prDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prItem?: NullableStringFieldUpdateOperationsInput | string | null
    qtyPr?: NullableFloatFieldUpdateOperationsInput | number | null
    uomQtyPr?: NullableStringFieldUpdateOperationsInput | string | null
    prPlant?: NullableStringFieldUpdateOperationsInput | string | null
    prSloc?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trackingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    prRequisitioner?: NullableStringFieldUpdateOperationsInput | string | null
    shortText?: NullableStringFieldUpdateOperationsInput | string | null
    materialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    materialType?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    brandDescription?: NullableStringFieldUpdateOperationsInput | string | null
    poNo?: NullableStringFieldUpdateOperationsInput | string | null
    poType?: NullableStringFieldUpdateOperationsInput | string | null
    vendorCode?: NullableStringFieldUpdateOperationsInput | string | null
    vendorName?: NullableStringFieldUpdateOperationsInput | string | null
    poDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerm?: NullableStringFieldUpdateOperationsInput | string | null
    poReleaseStatus?: NullableStringFieldUpdateOperationsInput | string | null
    poItem?: NullableStringFieldUpdateOperationsInput | string | null
    plantPo?: NullableStringFieldUpdateOperationsInput | string | null
    slocPo?: NullableStringFieldUpdateOperationsInput | string | null
    qtyPo?: NullableFloatFieldUpdateOperationsInput | number | null
    uomQtyPo?: NullableStringFieldUpdateOperationsInput | string | null
    openQtyPo?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryDatePo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delvCompleted?: NullableStringFieldUpdateOperationsInput | string | null
    netPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    totalValue?: NullableFloatFieldUpdateOperationsInput | number | null
    poTrackNo?: NullableStringFieldUpdateOperationsInput | string | null
    lastGr101Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gr101Qty?: NullableIntFieldUpdateOperationsInput | number | null
    lastGr103Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gr103Qty?: NullableFloatFieldUpdateOperationsInput | number | null
    lastGr105Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gr105Qty?: NullableFloatFieldUpdateOperationsInput | number | null
    lastGr107Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gr107Qty?: NullableIntFieldUpdateOperationsInput | number | null
    lastGr109Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gr109Qty?: NullableFloatFieldUpdateOperationsInput | number | null
    lastIrDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qtyIr?: NullableFloatFieldUpdateOperationsInput | number | null
    ammountLcIr?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ALL_POCreateManyInput = {
    prNumber: string
    prType?: string | null
    prDate?: Date | string | null
    prItem?: string | null
    qtyPr?: number | null
    uomQtyPr?: string | null
    prPlant?: string | null
    prSloc?: string | null
    deliveryDate?: Date | string | null
    trackingNumber?: string | null
    prRequisitioner?: string | null
    shortText?: string | null
    materialNumber?: string | null
    materialType?: string | null
    brand?: string | null
    brandDescription?: string | null
    poNo?: string | null
    poType?: string | null
    vendorCode?: string | null
    vendorName?: string | null
    poDate?: Date | string | null
    paymentTerm?: string | null
    poReleaseStatus?: string | null
    poItem?: string | null
    plantPo?: string | null
    slocPo?: string | null
    qtyPo?: number | null
    uomQtyPo?: string | null
    openQtyPo?: number | null
    deliveryDatePo?: Date | string | null
    delvCompleted?: string | null
    netPrice?: number | null
    totalValue?: number | null
    poTrackNo?: string | null
    lastGr101Date?: Date | string | null
    gr101Qty?: number | null
    lastGr103Date?: Date | string | null
    gr103Qty?: number | null
    lastGr105Date?: Date | string | null
    gr105Qty?: number | null
    lastGr107Date?: Date | string | null
    gr107Qty?: number | null
    lastGr109Date?: Date | string | null
    gr109Qty?: number | null
    lastIrDate?: Date | string | null
    qtyIr?: number | null
    ammountLcIr?: number | null
  }

  export type ALL_POUpdateManyMutationInput = {
    prNumber?: StringFieldUpdateOperationsInput | string
    prType?: NullableStringFieldUpdateOperationsInput | string | null
    prDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prItem?: NullableStringFieldUpdateOperationsInput | string | null
    qtyPr?: NullableFloatFieldUpdateOperationsInput | number | null
    uomQtyPr?: NullableStringFieldUpdateOperationsInput | string | null
    prPlant?: NullableStringFieldUpdateOperationsInput | string | null
    prSloc?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trackingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    prRequisitioner?: NullableStringFieldUpdateOperationsInput | string | null
    shortText?: NullableStringFieldUpdateOperationsInput | string | null
    materialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    materialType?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    brandDescription?: NullableStringFieldUpdateOperationsInput | string | null
    poNo?: NullableStringFieldUpdateOperationsInput | string | null
    poType?: NullableStringFieldUpdateOperationsInput | string | null
    vendorCode?: NullableStringFieldUpdateOperationsInput | string | null
    vendorName?: NullableStringFieldUpdateOperationsInput | string | null
    poDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerm?: NullableStringFieldUpdateOperationsInput | string | null
    poReleaseStatus?: NullableStringFieldUpdateOperationsInput | string | null
    poItem?: NullableStringFieldUpdateOperationsInput | string | null
    plantPo?: NullableStringFieldUpdateOperationsInput | string | null
    slocPo?: NullableStringFieldUpdateOperationsInput | string | null
    qtyPo?: NullableFloatFieldUpdateOperationsInput | number | null
    uomQtyPo?: NullableStringFieldUpdateOperationsInput | string | null
    openQtyPo?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryDatePo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delvCompleted?: NullableStringFieldUpdateOperationsInput | string | null
    netPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    totalValue?: NullableFloatFieldUpdateOperationsInput | number | null
    poTrackNo?: NullableStringFieldUpdateOperationsInput | string | null
    lastGr101Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gr101Qty?: NullableIntFieldUpdateOperationsInput | number | null
    lastGr103Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gr103Qty?: NullableFloatFieldUpdateOperationsInput | number | null
    lastGr105Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gr105Qty?: NullableFloatFieldUpdateOperationsInput | number | null
    lastGr107Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gr107Qty?: NullableIntFieldUpdateOperationsInput | number | null
    lastGr109Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gr109Qty?: NullableFloatFieldUpdateOperationsInput | number | null
    lastIrDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qtyIr?: NullableFloatFieldUpdateOperationsInput | number | null
    ammountLcIr?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ALL_POUncheckedUpdateManyInput = {
    prNumber?: StringFieldUpdateOperationsInput | string
    prType?: NullableStringFieldUpdateOperationsInput | string | null
    prDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prItem?: NullableStringFieldUpdateOperationsInput | string | null
    qtyPr?: NullableFloatFieldUpdateOperationsInput | number | null
    uomQtyPr?: NullableStringFieldUpdateOperationsInput | string | null
    prPlant?: NullableStringFieldUpdateOperationsInput | string | null
    prSloc?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trackingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    prRequisitioner?: NullableStringFieldUpdateOperationsInput | string | null
    shortText?: NullableStringFieldUpdateOperationsInput | string | null
    materialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    materialType?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    brandDescription?: NullableStringFieldUpdateOperationsInput | string | null
    poNo?: NullableStringFieldUpdateOperationsInput | string | null
    poType?: NullableStringFieldUpdateOperationsInput | string | null
    vendorCode?: NullableStringFieldUpdateOperationsInput | string | null
    vendorName?: NullableStringFieldUpdateOperationsInput | string | null
    poDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentTerm?: NullableStringFieldUpdateOperationsInput | string | null
    poReleaseStatus?: NullableStringFieldUpdateOperationsInput | string | null
    poItem?: NullableStringFieldUpdateOperationsInput | string | null
    plantPo?: NullableStringFieldUpdateOperationsInput | string | null
    slocPo?: NullableStringFieldUpdateOperationsInput | string | null
    qtyPo?: NullableFloatFieldUpdateOperationsInput | number | null
    uomQtyPo?: NullableStringFieldUpdateOperationsInput | string | null
    openQtyPo?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryDatePo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delvCompleted?: NullableStringFieldUpdateOperationsInput | string | null
    netPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    totalValue?: NullableFloatFieldUpdateOperationsInput | number | null
    poTrackNo?: NullableStringFieldUpdateOperationsInput | string | null
    lastGr101Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gr101Qty?: NullableIntFieldUpdateOperationsInput | number | null
    lastGr103Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gr103Qty?: NullableFloatFieldUpdateOperationsInput | number | null
    lastGr105Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gr105Qty?: NullableFloatFieldUpdateOperationsInput | number | null
    lastGr107Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gr107Qty?: NullableIntFieldUpdateOperationsInput | number | null
    lastGr109Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gr109Qty?: NullableFloatFieldUpdateOperationsInput | number | null
    lastIrDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qtyIr?: NullableFloatFieldUpdateOperationsInput | number | null
    ammountLcIr?: NullableFloatFieldUpdateOperationsInput | number | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ALL_POCountOrderByAggregateInput = {
    prNumber?: SortOrder
    prType?: SortOrder
    prDate?: SortOrder
    prItem?: SortOrder
    qtyPr?: SortOrder
    uomQtyPr?: SortOrder
    prPlant?: SortOrder
    prSloc?: SortOrder
    deliveryDate?: SortOrder
    trackingNumber?: SortOrder
    prRequisitioner?: SortOrder
    shortText?: SortOrder
    materialNumber?: SortOrder
    materialType?: SortOrder
    brand?: SortOrder
    brandDescription?: SortOrder
    poNo?: SortOrder
    poType?: SortOrder
    vendorCode?: SortOrder
    vendorName?: SortOrder
    poDate?: SortOrder
    paymentTerm?: SortOrder
    poReleaseStatus?: SortOrder
    poItem?: SortOrder
    plantPo?: SortOrder
    slocPo?: SortOrder
    qtyPo?: SortOrder
    uomQtyPo?: SortOrder
    openQtyPo?: SortOrder
    deliveryDatePo?: SortOrder
    delvCompleted?: SortOrder
    netPrice?: SortOrder
    totalValue?: SortOrder
    poTrackNo?: SortOrder
    lastGr101Date?: SortOrder
    gr101Qty?: SortOrder
    lastGr103Date?: SortOrder
    gr103Qty?: SortOrder
    lastGr105Date?: SortOrder
    gr105Qty?: SortOrder
    lastGr107Date?: SortOrder
    gr107Qty?: SortOrder
    lastGr109Date?: SortOrder
    gr109Qty?: SortOrder
    lastIrDate?: SortOrder
    qtyIr?: SortOrder
    ammountLcIr?: SortOrder
  }

  export type ALL_POAvgOrderByAggregateInput = {
    qtyPr?: SortOrder
    qtyPo?: SortOrder
    openQtyPo?: SortOrder
    netPrice?: SortOrder
    totalValue?: SortOrder
    gr101Qty?: SortOrder
    gr103Qty?: SortOrder
    gr105Qty?: SortOrder
    gr107Qty?: SortOrder
    gr109Qty?: SortOrder
    qtyIr?: SortOrder
    ammountLcIr?: SortOrder
  }

  export type ALL_POMaxOrderByAggregateInput = {
    prNumber?: SortOrder
    prType?: SortOrder
    prDate?: SortOrder
    prItem?: SortOrder
    qtyPr?: SortOrder
    uomQtyPr?: SortOrder
    prPlant?: SortOrder
    prSloc?: SortOrder
    deliveryDate?: SortOrder
    trackingNumber?: SortOrder
    prRequisitioner?: SortOrder
    shortText?: SortOrder
    materialNumber?: SortOrder
    materialType?: SortOrder
    brand?: SortOrder
    brandDescription?: SortOrder
    poNo?: SortOrder
    poType?: SortOrder
    vendorCode?: SortOrder
    vendorName?: SortOrder
    poDate?: SortOrder
    paymentTerm?: SortOrder
    poReleaseStatus?: SortOrder
    poItem?: SortOrder
    plantPo?: SortOrder
    slocPo?: SortOrder
    qtyPo?: SortOrder
    uomQtyPo?: SortOrder
    openQtyPo?: SortOrder
    deliveryDatePo?: SortOrder
    delvCompleted?: SortOrder
    netPrice?: SortOrder
    totalValue?: SortOrder
    poTrackNo?: SortOrder
    lastGr101Date?: SortOrder
    gr101Qty?: SortOrder
    lastGr103Date?: SortOrder
    gr103Qty?: SortOrder
    lastGr105Date?: SortOrder
    gr105Qty?: SortOrder
    lastGr107Date?: SortOrder
    gr107Qty?: SortOrder
    lastGr109Date?: SortOrder
    gr109Qty?: SortOrder
    lastIrDate?: SortOrder
    qtyIr?: SortOrder
    ammountLcIr?: SortOrder
  }

  export type ALL_POMinOrderByAggregateInput = {
    prNumber?: SortOrder
    prType?: SortOrder
    prDate?: SortOrder
    prItem?: SortOrder
    qtyPr?: SortOrder
    uomQtyPr?: SortOrder
    prPlant?: SortOrder
    prSloc?: SortOrder
    deliveryDate?: SortOrder
    trackingNumber?: SortOrder
    prRequisitioner?: SortOrder
    shortText?: SortOrder
    materialNumber?: SortOrder
    materialType?: SortOrder
    brand?: SortOrder
    brandDescription?: SortOrder
    poNo?: SortOrder
    poType?: SortOrder
    vendorCode?: SortOrder
    vendorName?: SortOrder
    poDate?: SortOrder
    paymentTerm?: SortOrder
    poReleaseStatus?: SortOrder
    poItem?: SortOrder
    plantPo?: SortOrder
    slocPo?: SortOrder
    qtyPo?: SortOrder
    uomQtyPo?: SortOrder
    openQtyPo?: SortOrder
    deliveryDatePo?: SortOrder
    delvCompleted?: SortOrder
    netPrice?: SortOrder
    totalValue?: SortOrder
    poTrackNo?: SortOrder
    lastGr101Date?: SortOrder
    gr101Qty?: SortOrder
    lastGr103Date?: SortOrder
    gr103Qty?: SortOrder
    lastGr105Date?: SortOrder
    gr105Qty?: SortOrder
    lastGr107Date?: SortOrder
    gr107Qty?: SortOrder
    lastGr109Date?: SortOrder
    gr109Qty?: SortOrder
    lastIrDate?: SortOrder
    qtyIr?: SortOrder
    ammountLcIr?: SortOrder
  }

  export type ALL_POSumOrderByAggregateInput = {
    qtyPr?: SortOrder
    qtyPo?: SortOrder
    openQtyPo?: SortOrder
    netPrice?: SortOrder
    totalValue?: SortOrder
    gr101Qty?: SortOrder
    gr103Qty?: SortOrder
    gr105Qty?: SortOrder
    gr107Qty?: SortOrder
    gr109Qty?: SortOrder
    qtyIr?: SortOrder
    ammountLcIr?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
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

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ALL_PODefaultArgs instead
     */
    export type ALL_POArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ALL_PODefaultArgs<ExtArgs>

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