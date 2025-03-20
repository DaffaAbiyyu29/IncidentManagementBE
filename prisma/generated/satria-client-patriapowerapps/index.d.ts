
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
   * `prisma.process`: Exposes CRUD operations for the **Process** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Processes
    * const processes = await prisma.process.findMany()
    * ```
    */
  get process(): Prisma.ProcessDelegate<ExtArgs>;

  /**
   * `prisma.processActivity`: Exposes CRUD operations for the **ProcessActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProcessActivities
    * const processActivities = await prisma.processActivity.findMany()
    * ```
    */
  get processActivity(): Prisma.ProcessActivityDelegate<ExtArgs>;

  /**
   * `prisma.processAssign`: Exposes CRUD operations for the **ProcessAssign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProcessAssigns
    * const processAssigns = await prisma.processAssign.findMany()
    * ```
    */
  get processAssign(): Prisma.ProcessAssignDelegate<ExtArgs>;
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
    Process: 'Process',
    ProcessActivity: 'ProcessActivity',
    ProcessAssign: 'ProcessAssign'
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
      modelProps: "process" | "processActivity" | "processAssign"
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
    Omit<ProcessFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProcessCountAggregateInputType | true
    }

  export interface ProcessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends ProcessFindUniqueArgs>(args: SelectSubset<T, ProcessFindUniqueArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends ProcessFindUniqueOrThrowArgs>(args: SelectSubset<T, ProcessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends ProcessFindFirstArgs>(args?: SelectSubset<T, ProcessFindFirstArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends ProcessFindFirstOrThrowArgs>(args?: SelectSubset<T, ProcessFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends ProcessFindManyArgs>(args?: SelectSubset<T, ProcessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "findMany">>

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
    create<T extends ProcessCreateArgs>(args: SelectSubset<T, ProcessCreateArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    delete<T extends ProcessDeleteArgs>(args: SelectSubset<T, ProcessDeleteArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends ProcessUpdateArgs>(args: SelectSubset<T, ProcessUpdateArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends ProcessUpsertArgs>(args: SelectSubset<T, ProcessUpsertArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__ProcessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ProcessAssign<T extends Process$ProcessAssignArgs<ExtArgs> = {}>(args?: Subset<T, Process$ProcessAssignArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessAssignPayload<ExtArgs>, T, "findMany"> | Null>
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
    Omit<ProcessActivityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProcessActivityCountAggregateInputType | true
    }

  export interface ProcessActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends ProcessActivityFindUniqueArgs>(args: SelectSubset<T, ProcessActivityFindUniqueArgs<ExtArgs>>): Prisma__ProcessActivityClient<$Result.GetResult<Prisma.$ProcessActivityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends ProcessActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, ProcessActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProcessActivityClient<$Result.GetResult<Prisma.$ProcessActivityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends ProcessActivityFindFirstArgs>(args?: SelectSubset<T, ProcessActivityFindFirstArgs<ExtArgs>>): Prisma__ProcessActivityClient<$Result.GetResult<Prisma.$ProcessActivityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends ProcessActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, ProcessActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProcessActivityClient<$Result.GetResult<Prisma.$ProcessActivityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends ProcessActivityFindManyArgs>(args?: SelectSubset<T, ProcessActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessActivityPayload<ExtArgs>, T, "findMany">>

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
    create<T extends ProcessActivityCreateArgs>(args: SelectSubset<T, ProcessActivityCreateArgs<ExtArgs>>): Prisma__ProcessActivityClient<$Result.GetResult<Prisma.$ProcessActivityPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    delete<T extends ProcessActivityDeleteArgs>(args: SelectSubset<T, ProcessActivityDeleteArgs<ExtArgs>>): Prisma__ProcessActivityClient<$Result.GetResult<Prisma.$ProcessActivityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends ProcessActivityUpdateArgs>(args: SelectSubset<T, ProcessActivityUpdateArgs<ExtArgs>>): Prisma__ProcessActivityClient<$Result.GetResult<Prisma.$ProcessActivityPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends ProcessActivityUpsertArgs>(args: SelectSubset<T, ProcessActivityUpsertArgs<ExtArgs>>): Prisma__ProcessActivityClient<$Result.GetResult<Prisma.$ProcessActivityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__ProcessActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ProcessAssign<T extends ProcessAssignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProcessAssignDefaultArgs<ExtArgs>>): Prisma__ProcessAssignClient<$Result.GetResult<Prisma.$ProcessAssignPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
    Omit<ProcessAssignFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProcessAssignCountAggregateInputType | true
    }

  export interface ProcessAssignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends ProcessAssignFindUniqueArgs>(args: SelectSubset<T, ProcessAssignFindUniqueArgs<ExtArgs>>): Prisma__ProcessAssignClient<$Result.GetResult<Prisma.$ProcessAssignPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends ProcessAssignFindUniqueOrThrowArgs>(args: SelectSubset<T, ProcessAssignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProcessAssignClient<$Result.GetResult<Prisma.$ProcessAssignPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends ProcessAssignFindFirstArgs>(args?: SelectSubset<T, ProcessAssignFindFirstArgs<ExtArgs>>): Prisma__ProcessAssignClient<$Result.GetResult<Prisma.$ProcessAssignPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends ProcessAssignFindFirstOrThrowArgs>(args?: SelectSubset<T, ProcessAssignFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProcessAssignClient<$Result.GetResult<Prisma.$ProcessAssignPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends ProcessAssignFindManyArgs>(args?: SelectSubset<T, ProcessAssignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessAssignPayload<ExtArgs>, T, "findMany">>

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
    create<T extends ProcessAssignCreateArgs>(args: SelectSubset<T, ProcessAssignCreateArgs<ExtArgs>>): Prisma__ProcessAssignClient<$Result.GetResult<Prisma.$ProcessAssignPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    delete<T extends ProcessAssignDeleteArgs>(args: SelectSubset<T, ProcessAssignDeleteArgs<ExtArgs>>): Prisma__ProcessAssignClient<$Result.GetResult<Prisma.$ProcessAssignPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends ProcessAssignUpdateArgs>(args: SelectSubset<T, ProcessAssignUpdateArgs<ExtArgs>>): Prisma__ProcessAssignClient<$Result.GetResult<Prisma.$ProcessAssignPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends ProcessAssignUpsertArgs>(args: SelectSubset<T, ProcessAssignUpsertArgs<ExtArgs>>): Prisma__ProcessAssignClient<$Result.GetResult<Prisma.$ProcessAssignPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__ProcessAssignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ProcessActivity<T extends ProcessAssign$ProcessActivityArgs<ExtArgs> = {}>(args?: Subset<T, ProcessAssign$ProcessActivityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessActivityPayload<ExtArgs>, T, "findMany"> | Null>
    Process<T extends ProcessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProcessDefaultArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessAssignInclude<ExtArgs> | null
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ProcessCountOutputTypeDefaultArgs instead
     */
    export type ProcessCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProcessCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProcessAssignCountOutputTypeDefaultArgs instead
     */
    export type ProcessAssignCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProcessAssignCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProcessDefaultArgs instead
     */
    export type ProcessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProcessDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProcessActivityDefaultArgs instead
     */
    export type ProcessActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProcessActivityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProcessAssignDefaultArgs instead
     */
    export type ProcessAssignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProcessAssignDefaultArgs<ExtArgs>

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