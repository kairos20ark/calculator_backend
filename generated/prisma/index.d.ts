
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
 * Model Operaria
 * 
 */
export type Operaria = $Result.DefaultSelection<Prisma.$OperariaPayload>
/**
 * Model RegistroTiempos
 * 
 */
export type RegistroTiempos = $Result.DefaultSelection<Prisma.$RegistroTiemposPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Operarias
 * const operarias = await prisma.operaria.findMany()
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
   * // Fetch zero or more Operarias
   * const operarias = await prisma.operaria.findMany()
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
   * `prisma.operaria`: Exposes CRUD operations for the **Operaria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Operarias
    * const operarias = await prisma.operaria.findMany()
    * ```
    */
  get operaria(): Prisma.OperariaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registroTiempos`: Exposes CRUD operations for the **RegistroTiempos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegistroTiempos
    * const registroTiempos = await prisma.registroTiempos.findMany()
    * ```
    */
  get registroTiempos(): Prisma.RegistroTiemposDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
    Operaria: 'Operaria',
    RegistroTiempos: 'RegistroTiempos'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "operaria" | "registroTiempos"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Operaria: {
        payload: Prisma.$OperariaPayload<ExtArgs>
        fields: Prisma.OperariaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OperariaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperariaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OperariaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperariaPayload>
          }
          findFirst: {
            args: Prisma.OperariaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperariaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OperariaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperariaPayload>
          }
          findMany: {
            args: Prisma.OperariaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperariaPayload>[]
          }
          create: {
            args: Prisma.OperariaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperariaPayload>
          }
          createMany: {
            args: Prisma.OperariaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OperariaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperariaPayload>[]
          }
          delete: {
            args: Prisma.OperariaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperariaPayload>
          }
          update: {
            args: Prisma.OperariaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperariaPayload>
          }
          deleteMany: {
            args: Prisma.OperariaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OperariaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OperariaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperariaPayload>[]
          }
          upsert: {
            args: Prisma.OperariaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperariaPayload>
          }
          aggregate: {
            args: Prisma.OperariaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOperaria>
          }
          groupBy: {
            args: Prisma.OperariaGroupByArgs<ExtArgs>
            result: $Utils.Optional<OperariaGroupByOutputType>[]
          }
          count: {
            args: Prisma.OperariaCountArgs<ExtArgs>
            result: $Utils.Optional<OperariaCountAggregateOutputType> | number
          }
        }
      }
      RegistroTiempos: {
        payload: Prisma.$RegistroTiemposPayload<ExtArgs>
        fields: Prisma.RegistroTiemposFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistroTiemposFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTiemposPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistroTiemposFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTiemposPayload>
          }
          findFirst: {
            args: Prisma.RegistroTiemposFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTiemposPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistroTiemposFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTiemposPayload>
          }
          findMany: {
            args: Prisma.RegistroTiemposFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTiemposPayload>[]
          }
          create: {
            args: Prisma.RegistroTiemposCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTiemposPayload>
          }
          createMany: {
            args: Prisma.RegistroTiemposCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegistroTiemposCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTiemposPayload>[]
          }
          delete: {
            args: Prisma.RegistroTiemposDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTiemposPayload>
          }
          update: {
            args: Prisma.RegistroTiemposUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTiemposPayload>
          }
          deleteMany: {
            args: Prisma.RegistroTiemposDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistroTiemposUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegistroTiemposUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTiemposPayload>[]
          }
          upsert: {
            args: Prisma.RegistroTiemposUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTiemposPayload>
          }
          aggregate: {
            args: Prisma.RegistroTiemposAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistroTiempos>
          }
          groupBy: {
            args: Prisma.RegistroTiemposGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistroTiemposGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistroTiemposCountArgs<ExtArgs>
            result: $Utils.Optional<RegistroTiemposCountAggregateOutputType> | number
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
    operaria?: OperariaOmit
    registroTiempos?: RegistroTiemposOmit
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
   * Count Type OperariaCountOutputType
   */

  export type OperariaCountOutputType = {
    registrosTiempos: number
  }

  export type OperariaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registrosTiempos?: boolean | OperariaCountOutputTypeCountRegistrosTiemposArgs
  }

  // Custom InputTypes
  /**
   * OperariaCountOutputType without action
   */
  export type OperariaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperariaCountOutputType
     */
    select?: OperariaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OperariaCountOutputType without action
   */
  export type OperariaCountOutputTypeCountRegistrosTiemposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroTiemposWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Operaria
   */

  export type AggregateOperaria = {
    _count: OperariaCountAggregateOutputType | null
    _avg: OperariaAvgAggregateOutputType | null
    _sum: OperariaSumAggregateOutputType | null
    _min: OperariaMinAggregateOutputType | null
    _max: OperariaMaxAggregateOutputType | null
  }

  export type OperariaAvgAggregateOutputType = {
    id: number | null
  }

  export type OperariaSumAggregateOutputType = {
    id: number | null
  }

  export type OperariaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    codigo: string | null
    activo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OperariaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    codigo: string | null
    activo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OperariaCountAggregateOutputType = {
    id: number
    nombre: number
    codigo: number
    activo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OperariaAvgAggregateInputType = {
    id?: true
  }

  export type OperariaSumAggregateInputType = {
    id?: true
  }

  export type OperariaMinAggregateInputType = {
    id?: true
    nombre?: true
    codigo?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OperariaMaxAggregateInputType = {
    id?: true
    nombre?: true
    codigo?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OperariaCountAggregateInputType = {
    id?: true
    nombre?: true
    codigo?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OperariaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Operaria to aggregate.
     */
    where?: OperariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operarias to fetch.
     */
    orderBy?: OperariaOrderByWithRelationInput | OperariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OperariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operarias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Operarias
    **/
    _count?: true | OperariaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OperariaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OperariaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OperariaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OperariaMaxAggregateInputType
  }

  export type GetOperariaAggregateType<T extends OperariaAggregateArgs> = {
        [P in keyof T & keyof AggregateOperaria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperaria[P]>
      : GetScalarType<T[P], AggregateOperaria[P]>
  }




  export type OperariaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperariaWhereInput
    orderBy?: OperariaOrderByWithAggregationInput | OperariaOrderByWithAggregationInput[]
    by: OperariaScalarFieldEnum[] | OperariaScalarFieldEnum
    having?: OperariaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OperariaCountAggregateInputType | true
    _avg?: OperariaAvgAggregateInputType
    _sum?: OperariaSumAggregateInputType
    _min?: OperariaMinAggregateInputType
    _max?: OperariaMaxAggregateInputType
  }

  export type OperariaGroupByOutputType = {
    id: number
    nombre: string
    codigo: string | null
    activo: boolean
    createdAt: Date
    updatedAt: Date
    _count: OperariaCountAggregateOutputType | null
    _avg: OperariaAvgAggregateOutputType | null
    _sum: OperariaSumAggregateOutputType | null
    _min: OperariaMinAggregateOutputType | null
    _max: OperariaMaxAggregateOutputType | null
  }

  type GetOperariaGroupByPayload<T extends OperariaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OperariaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OperariaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OperariaGroupByOutputType[P]>
            : GetScalarType<T[P], OperariaGroupByOutputType[P]>
        }
      >
    >


  export type OperariaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    codigo?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    registrosTiempos?: boolean | Operaria$registrosTiemposArgs<ExtArgs>
    _count?: boolean | OperariaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operaria"]>

  export type OperariaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    codigo?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["operaria"]>

  export type OperariaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    codigo?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["operaria"]>

  export type OperariaSelectScalar = {
    id?: boolean
    nombre?: boolean
    codigo?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OperariaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "codigo" | "activo" | "createdAt" | "updatedAt", ExtArgs["result"]["operaria"]>
  export type OperariaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registrosTiempos?: boolean | Operaria$registrosTiemposArgs<ExtArgs>
    _count?: boolean | OperariaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OperariaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OperariaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OperariaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Operaria"
    objects: {
      registrosTiempos: Prisma.$RegistroTiemposPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      codigo: string | null
      activo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["operaria"]>
    composites: {}
  }

  type OperariaGetPayload<S extends boolean | null | undefined | OperariaDefaultArgs> = $Result.GetResult<Prisma.$OperariaPayload, S>

  type OperariaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OperariaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OperariaCountAggregateInputType | true
    }

  export interface OperariaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Operaria'], meta: { name: 'Operaria' } }
    /**
     * Find zero or one Operaria that matches the filter.
     * @param {OperariaFindUniqueArgs} args - Arguments to find a Operaria
     * @example
     * // Get one Operaria
     * const operaria = await prisma.operaria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OperariaFindUniqueArgs>(args: SelectSubset<T, OperariaFindUniqueArgs<ExtArgs>>): Prisma__OperariaClient<$Result.GetResult<Prisma.$OperariaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Operaria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OperariaFindUniqueOrThrowArgs} args - Arguments to find a Operaria
     * @example
     * // Get one Operaria
     * const operaria = await prisma.operaria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OperariaFindUniqueOrThrowArgs>(args: SelectSubset<T, OperariaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OperariaClient<$Result.GetResult<Prisma.$OperariaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operaria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperariaFindFirstArgs} args - Arguments to find a Operaria
     * @example
     * // Get one Operaria
     * const operaria = await prisma.operaria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OperariaFindFirstArgs>(args?: SelectSubset<T, OperariaFindFirstArgs<ExtArgs>>): Prisma__OperariaClient<$Result.GetResult<Prisma.$OperariaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operaria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperariaFindFirstOrThrowArgs} args - Arguments to find a Operaria
     * @example
     * // Get one Operaria
     * const operaria = await prisma.operaria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OperariaFindFirstOrThrowArgs>(args?: SelectSubset<T, OperariaFindFirstOrThrowArgs<ExtArgs>>): Prisma__OperariaClient<$Result.GetResult<Prisma.$OperariaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Operarias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperariaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Operarias
     * const operarias = await prisma.operaria.findMany()
     * 
     * // Get first 10 Operarias
     * const operarias = await prisma.operaria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const operariaWithIdOnly = await prisma.operaria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OperariaFindManyArgs>(args?: SelectSubset<T, OperariaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperariaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Operaria.
     * @param {OperariaCreateArgs} args - Arguments to create a Operaria.
     * @example
     * // Create one Operaria
     * const Operaria = await prisma.operaria.create({
     *   data: {
     *     // ... data to create a Operaria
     *   }
     * })
     * 
     */
    create<T extends OperariaCreateArgs>(args: SelectSubset<T, OperariaCreateArgs<ExtArgs>>): Prisma__OperariaClient<$Result.GetResult<Prisma.$OperariaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Operarias.
     * @param {OperariaCreateManyArgs} args - Arguments to create many Operarias.
     * @example
     * // Create many Operarias
     * const operaria = await prisma.operaria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OperariaCreateManyArgs>(args?: SelectSubset<T, OperariaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Operarias and returns the data saved in the database.
     * @param {OperariaCreateManyAndReturnArgs} args - Arguments to create many Operarias.
     * @example
     * // Create many Operarias
     * const operaria = await prisma.operaria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Operarias and only return the `id`
     * const operariaWithIdOnly = await prisma.operaria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OperariaCreateManyAndReturnArgs>(args?: SelectSubset<T, OperariaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperariaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Operaria.
     * @param {OperariaDeleteArgs} args - Arguments to delete one Operaria.
     * @example
     * // Delete one Operaria
     * const Operaria = await prisma.operaria.delete({
     *   where: {
     *     // ... filter to delete one Operaria
     *   }
     * })
     * 
     */
    delete<T extends OperariaDeleteArgs>(args: SelectSubset<T, OperariaDeleteArgs<ExtArgs>>): Prisma__OperariaClient<$Result.GetResult<Prisma.$OperariaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Operaria.
     * @param {OperariaUpdateArgs} args - Arguments to update one Operaria.
     * @example
     * // Update one Operaria
     * const operaria = await prisma.operaria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OperariaUpdateArgs>(args: SelectSubset<T, OperariaUpdateArgs<ExtArgs>>): Prisma__OperariaClient<$Result.GetResult<Prisma.$OperariaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Operarias.
     * @param {OperariaDeleteManyArgs} args - Arguments to filter Operarias to delete.
     * @example
     * // Delete a few Operarias
     * const { count } = await prisma.operaria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OperariaDeleteManyArgs>(args?: SelectSubset<T, OperariaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operarias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperariaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Operarias
     * const operaria = await prisma.operaria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OperariaUpdateManyArgs>(args: SelectSubset<T, OperariaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operarias and returns the data updated in the database.
     * @param {OperariaUpdateManyAndReturnArgs} args - Arguments to update many Operarias.
     * @example
     * // Update many Operarias
     * const operaria = await prisma.operaria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Operarias and only return the `id`
     * const operariaWithIdOnly = await prisma.operaria.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OperariaUpdateManyAndReturnArgs>(args: SelectSubset<T, OperariaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperariaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Operaria.
     * @param {OperariaUpsertArgs} args - Arguments to update or create a Operaria.
     * @example
     * // Update or create a Operaria
     * const operaria = await prisma.operaria.upsert({
     *   create: {
     *     // ... data to create a Operaria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Operaria we want to update
     *   }
     * })
     */
    upsert<T extends OperariaUpsertArgs>(args: SelectSubset<T, OperariaUpsertArgs<ExtArgs>>): Prisma__OperariaClient<$Result.GetResult<Prisma.$OperariaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Operarias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperariaCountArgs} args - Arguments to filter Operarias to count.
     * @example
     * // Count the number of Operarias
     * const count = await prisma.operaria.count({
     *   where: {
     *     // ... the filter for the Operarias we want to count
     *   }
     * })
    **/
    count<T extends OperariaCountArgs>(
      args?: Subset<T, OperariaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OperariaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Operaria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperariaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OperariaAggregateArgs>(args: Subset<T, OperariaAggregateArgs>): Prisma.PrismaPromise<GetOperariaAggregateType<T>>

    /**
     * Group by Operaria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperariaGroupByArgs} args - Group by arguments.
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
      T extends OperariaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OperariaGroupByArgs['orderBy'] }
        : { orderBy?: OperariaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OperariaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperariaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Operaria model
   */
  readonly fields: OperariaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Operaria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OperariaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    registrosTiempos<T extends Operaria$registrosTiemposArgs<ExtArgs> = {}>(args?: Subset<T, Operaria$registrosTiemposArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroTiemposPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Operaria model
   */
  interface OperariaFieldRefs {
    readonly id: FieldRef<"Operaria", 'Int'>
    readonly nombre: FieldRef<"Operaria", 'String'>
    readonly codigo: FieldRef<"Operaria", 'String'>
    readonly activo: FieldRef<"Operaria", 'Boolean'>
    readonly createdAt: FieldRef<"Operaria", 'DateTime'>
    readonly updatedAt: FieldRef<"Operaria", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Operaria findUnique
   */
  export type OperariaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operaria
     */
    select?: OperariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operaria
     */
    omit?: OperariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperariaInclude<ExtArgs> | null
    /**
     * Filter, which Operaria to fetch.
     */
    where: OperariaWhereUniqueInput
  }

  /**
   * Operaria findUniqueOrThrow
   */
  export type OperariaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operaria
     */
    select?: OperariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operaria
     */
    omit?: OperariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperariaInclude<ExtArgs> | null
    /**
     * Filter, which Operaria to fetch.
     */
    where: OperariaWhereUniqueInput
  }

  /**
   * Operaria findFirst
   */
  export type OperariaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operaria
     */
    select?: OperariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operaria
     */
    omit?: OperariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperariaInclude<ExtArgs> | null
    /**
     * Filter, which Operaria to fetch.
     */
    where?: OperariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operarias to fetch.
     */
    orderBy?: OperariaOrderByWithRelationInput | OperariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Operarias.
     */
    cursor?: OperariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operarias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operarias.
     */
    distinct?: OperariaScalarFieldEnum | OperariaScalarFieldEnum[]
  }

  /**
   * Operaria findFirstOrThrow
   */
  export type OperariaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operaria
     */
    select?: OperariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operaria
     */
    omit?: OperariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperariaInclude<ExtArgs> | null
    /**
     * Filter, which Operaria to fetch.
     */
    where?: OperariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operarias to fetch.
     */
    orderBy?: OperariaOrderByWithRelationInput | OperariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Operarias.
     */
    cursor?: OperariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operarias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operarias.
     */
    distinct?: OperariaScalarFieldEnum | OperariaScalarFieldEnum[]
  }

  /**
   * Operaria findMany
   */
  export type OperariaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operaria
     */
    select?: OperariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operaria
     */
    omit?: OperariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperariaInclude<ExtArgs> | null
    /**
     * Filter, which Operarias to fetch.
     */
    where?: OperariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operarias to fetch.
     */
    orderBy?: OperariaOrderByWithRelationInput | OperariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Operarias.
     */
    cursor?: OperariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operarias.
     */
    skip?: number
    distinct?: OperariaScalarFieldEnum | OperariaScalarFieldEnum[]
  }

  /**
   * Operaria create
   */
  export type OperariaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operaria
     */
    select?: OperariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operaria
     */
    omit?: OperariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperariaInclude<ExtArgs> | null
    /**
     * The data needed to create a Operaria.
     */
    data: XOR<OperariaCreateInput, OperariaUncheckedCreateInput>
  }

  /**
   * Operaria createMany
   */
  export type OperariaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Operarias.
     */
    data: OperariaCreateManyInput | OperariaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Operaria createManyAndReturn
   */
  export type OperariaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operaria
     */
    select?: OperariaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Operaria
     */
    omit?: OperariaOmit<ExtArgs> | null
    /**
     * The data used to create many Operarias.
     */
    data: OperariaCreateManyInput | OperariaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Operaria update
   */
  export type OperariaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operaria
     */
    select?: OperariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operaria
     */
    omit?: OperariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperariaInclude<ExtArgs> | null
    /**
     * The data needed to update a Operaria.
     */
    data: XOR<OperariaUpdateInput, OperariaUncheckedUpdateInput>
    /**
     * Choose, which Operaria to update.
     */
    where: OperariaWhereUniqueInput
  }

  /**
   * Operaria updateMany
   */
  export type OperariaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Operarias.
     */
    data: XOR<OperariaUpdateManyMutationInput, OperariaUncheckedUpdateManyInput>
    /**
     * Filter which Operarias to update
     */
    where?: OperariaWhereInput
    /**
     * Limit how many Operarias to update.
     */
    limit?: number
  }

  /**
   * Operaria updateManyAndReturn
   */
  export type OperariaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operaria
     */
    select?: OperariaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Operaria
     */
    omit?: OperariaOmit<ExtArgs> | null
    /**
     * The data used to update Operarias.
     */
    data: XOR<OperariaUpdateManyMutationInput, OperariaUncheckedUpdateManyInput>
    /**
     * Filter which Operarias to update
     */
    where?: OperariaWhereInput
    /**
     * Limit how many Operarias to update.
     */
    limit?: number
  }

  /**
   * Operaria upsert
   */
  export type OperariaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operaria
     */
    select?: OperariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operaria
     */
    omit?: OperariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperariaInclude<ExtArgs> | null
    /**
     * The filter to search for the Operaria to update in case it exists.
     */
    where: OperariaWhereUniqueInput
    /**
     * In case the Operaria found by the `where` argument doesn't exist, create a new Operaria with this data.
     */
    create: XOR<OperariaCreateInput, OperariaUncheckedCreateInput>
    /**
     * In case the Operaria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OperariaUpdateInput, OperariaUncheckedUpdateInput>
  }

  /**
   * Operaria delete
   */
  export type OperariaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operaria
     */
    select?: OperariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operaria
     */
    omit?: OperariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperariaInclude<ExtArgs> | null
    /**
     * Filter which Operaria to delete.
     */
    where: OperariaWhereUniqueInput
  }

  /**
   * Operaria deleteMany
   */
  export type OperariaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Operarias to delete
     */
    where?: OperariaWhereInput
    /**
     * Limit how many Operarias to delete.
     */
    limit?: number
  }

  /**
   * Operaria.registrosTiempos
   */
  export type Operaria$registrosTiemposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTiempos
     */
    select?: RegistroTiemposSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroTiempos
     */
    omit?: RegistroTiemposOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroTiemposInclude<ExtArgs> | null
    where?: RegistroTiemposWhereInput
    orderBy?: RegistroTiemposOrderByWithRelationInput | RegistroTiemposOrderByWithRelationInput[]
    cursor?: RegistroTiemposWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistroTiemposScalarFieldEnum | RegistroTiemposScalarFieldEnum[]
  }

  /**
   * Operaria without action
   */
  export type OperariaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operaria
     */
    select?: OperariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operaria
     */
    omit?: OperariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperariaInclude<ExtArgs> | null
  }


  /**
   * Model RegistroTiempos
   */

  export type AggregateRegistroTiempos = {
    _count: RegistroTiemposCountAggregateOutputType | null
    _avg: RegistroTiemposAvgAggregateOutputType | null
    _sum: RegistroTiemposSumAggregateOutputType | null
    _min: RegistroTiemposMinAggregateOutputType | null
    _max: RegistroTiemposMaxAggregateOutputType | null
  }

  export type RegistroTiemposAvgAggregateOutputType = {
    id: number | null
    operariaId: number | null
    promedioSegundos: number | null
    promedioMinutos: number | null
    promedioSegAjustado: number | null
    promedioMinAjustado: number | null
    produccionPorHora: number | null
    produccionConMitad: number | null
    produccionConTotal: number | null
  }

  export type RegistroTiemposSumAggregateOutputType = {
    id: number | null
    operariaId: number | null
    promedioSegundos: number | null
    promedioMinutos: number | null
    promedioSegAjustado: number | null
    promedioMinAjustado: number | null
    produccionPorHora: number | null
    produccionConMitad: number | null
    produccionConTotal: number | null
  }

  export type RegistroTiemposMinAggregateOutputType = {
    id: number | null
    operariaId: number | null
    proceso: string | null
    condicion: string | null
    tiempo1: string | null
    tiempo2: string | null
    tiempo3: string | null
    tiempo4: string | null
    tiempo5: string | null
    tiempo6: string | null
    tiempo7: string | null
    tiempo8: string | null
    tiempo9: string | null
    tiempo10: string | null
    promedioSegundos: number | null
    promedioMinutos: number | null
    promedioSegAjustado: number | null
    promedioMinAjustado: number | null
    produccionPorHora: number | null
    produccionConMitad: number | null
    produccionConTotal: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RegistroTiemposMaxAggregateOutputType = {
    id: number | null
    operariaId: number | null
    proceso: string | null
    condicion: string | null
    tiempo1: string | null
    tiempo2: string | null
    tiempo3: string | null
    tiempo4: string | null
    tiempo5: string | null
    tiempo6: string | null
    tiempo7: string | null
    tiempo8: string | null
    tiempo9: string | null
    tiempo10: string | null
    promedioSegundos: number | null
    promedioMinutos: number | null
    promedioSegAjustado: number | null
    promedioMinAjustado: number | null
    produccionPorHora: number | null
    produccionConMitad: number | null
    produccionConTotal: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RegistroTiemposCountAggregateOutputType = {
    id: number
    operariaId: number
    proceso: number
    condicion: number
    tiempo1: number
    tiempo2: number
    tiempo3: number
    tiempo4: number
    tiempo5: number
    tiempo6: number
    tiempo7: number
    tiempo8: number
    tiempo9: number
    tiempo10: number
    promedioSegundos: number
    promedioMinutos: number
    promedioSegAjustado: number
    promedioMinAjustado: number
    produccionPorHora: number
    produccionConMitad: number
    produccionConTotal: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RegistroTiemposAvgAggregateInputType = {
    id?: true
    operariaId?: true
    promedioSegundos?: true
    promedioMinutos?: true
    promedioSegAjustado?: true
    promedioMinAjustado?: true
    produccionPorHora?: true
    produccionConMitad?: true
    produccionConTotal?: true
  }

  export type RegistroTiemposSumAggregateInputType = {
    id?: true
    operariaId?: true
    promedioSegundos?: true
    promedioMinutos?: true
    promedioSegAjustado?: true
    promedioMinAjustado?: true
    produccionPorHora?: true
    produccionConMitad?: true
    produccionConTotal?: true
  }

  export type RegistroTiemposMinAggregateInputType = {
    id?: true
    operariaId?: true
    proceso?: true
    condicion?: true
    tiempo1?: true
    tiempo2?: true
    tiempo3?: true
    tiempo4?: true
    tiempo5?: true
    tiempo6?: true
    tiempo7?: true
    tiempo8?: true
    tiempo9?: true
    tiempo10?: true
    promedioSegundos?: true
    promedioMinutos?: true
    promedioSegAjustado?: true
    promedioMinAjustado?: true
    produccionPorHora?: true
    produccionConMitad?: true
    produccionConTotal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RegistroTiemposMaxAggregateInputType = {
    id?: true
    operariaId?: true
    proceso?: true
    condicion?: true
    tiempo1?: true
    tiempo2?: true
    tiempo3?: true
    tiempo4?: true
    tiempo5?: true
    tiempo6?: true
    tiempo7?: true
    tiempo8?: true
    tiempo9?: true
    tiempo10?: true
    promedioSegundos?: true
    promedioMinutos?: true
    promedioSegAjustado?: true
    promedioMinAjustado?: true
    produccionPorHora?: true
    produccionConMitad?: true
    produccionConTotal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RegistroTiemposCountAggregateInputType = {
    id?: true
    operariaId?: true
    proceso?: true
    condicion?: true
    tiempo1?: true
    tiempo2?: true
    tiempo3?: true
    tiempo4?: true
    tiempo5?: true
    tiempo6?: true
    tiempo7?: true
    tiempo8?: true
    tiempo9?: true
    tiempo10?: true
    promedioSegundos?: true
    promedioMinutos?: true
    promedioSegAjustado?: true
    promedioMinAjustado?: true
    produccionPorHora?: true
    produccionConMitad?: true
    produccionConTotal?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RegistroTiemposAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistroTiempos to aggregate.
     */
    where?: RegistroTiemposWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroTiempos to fetch.
     */
    orderBy?: RegistroTiemposOrderByWithRelationInput | RegistroTiemposOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistroTiemposWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroTiempos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroTiempos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegistroTiempos
    **/
    _count?: true | RegistroTiemposCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegistroTiemposAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegistroTiemposSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistroTiemposMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistroTiemposMaxAggregateInputType
  }

  export type GetRegistroTiemposAggregateType<T extends RegistroTiemposAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistroTiempos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistroTiempos[P]>
      : GetScalarType<T[P], AggregateRegistroTiempos[P]>
  }




  export type RegistroTiemposGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroTiemposWhereInput
    orderBy?: RegistroTiemposOrderByWithAggregationInput | RegistroTiemposOrderByWithAggregationInput[]
    by: RegistroTiemposScalarFieldEnum[] | RegistroTiemposScalarFieldEnum
    having?: RegistroTiemposScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistroTiemposCountAggregateInputType | true
    _avg?: RegistroTiemposAvgAggregateInputType
    _sum?: RegistroTiemposSumAggregateInputType
    _min?: RegistroTiemposMinAggregateInputType
    _max?: RegistroTiemposMaxAggregateInputType
  }

  export type RegistroTiemposGroupByOutputType = {
    id: number
    operariaId: number
    proceso: string
    condicion: string
    tiempo1: string
    tiempo2: string
    tiempo3: string
    tiempo4: string
    tiempo5: string
    tiempo6: string | null
    tiempo7: string | null
    tiempo8: string | null
    tiempo9: string | null
    tiempo10: string | null
    promedioSegundos: number
    promedioMinutos: number
    promedioSegAjustado: number
    promedioMinAjustado: number
    produccionPorHora: number
    produccionConMitad: number
    produccionConTotal: number
    createdAt: Date
    updatedAt: Date
    _count: RegistroTiemposCountAggregateOutputType | null
    _avg: RegistroTiemposAvgAggregateOutputType | null
    _sum: RegistroTiemposSumAggregateOutputType | null
    _min: RegistroTiemposMinAggregateOutputType | null
    _max: RegistroTiemposMaxAggregateOutputType | null
  }

  type GetRegistroTiemposGroupByPayload<T extends RegistroTiemposGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistroTiemposGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistroTiemposGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistroTiemposGroupByOutputType[P]>
            : GetScalarType<T[P], RegistroTiemposGroupByOutputType[P]>
        }
      >
    >


  export type RegistroTiemposSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    operariaId?: boolean
    proceso?: boolean
    condicion?: boolean
    tiempo1?: boolean
    tiempo2?: boolean
    tiempo3?: boolean
    tiempo4?: boolean
    tiempo5?: boolean
    tiempo6?: boolean
    tiempo7?: boolean
    tiempo8?: boolean
    tiempo9?: boolean
    tiempo10?: boolean
    promedioSegundos?: boolean
    promedioMinutos?: boolean
    promedioSegAjustado?: boolean
    promedioMinAjustado?: boolean
    produccionPorHora?: boolean
    produccionConMitad?: boolean
    produccionConTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    operaria?: boolean | OperariaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registroTiempos"]>

  export type RegistroTiemposSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    operariaId?: boolean
    proceso?: boolean
    condicion?: boolean
    tiempo1?: boolean
    tiempo2?: boolean
    tiempo3?: boolean
    tiempo4?: boolean
    tiempo5?: boolean
    tiempo6?: boolean
    tiempo7?: boolean
    tiempo8?: boolean
    tiempo9?: boolean
    tiempo10?: boolean
    promedioSegundos?: boolean
    promedioMinutos?: boolean
    promedioSegAjustado?: boolean
    promedioMinAjustado?: boolean
    produccionPorHora?: boolean
    produccionConMitad?: boolean
    produccionConTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    operaria?: boolean | OperariaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registroTiempos"]>

  export type RegistroTiemposSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    operariaId?: boolean
    proceso?: boolean
    condicion?: boolean
    tiempo1?: boolean
    tiempo2?: boolean
    tiempo3?: boolean
    tiempo4?: boolean
    tiempo5?: boolean
    tiempo6?: boolean
    tiempo7?: boolean
    tiempo8?: boolean
    tiempo9?: boolean
    tiempo10?: boolean
    promedioSegundos?: boolean
    promedioMinutos?: boolean
    promedioSegAjustado?: boolean
    promedioMinAjustado?: boolean
    produccionPorHora?: boolean
    produccionConMitad?: boolean
    produccionConTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    operaria?: boolean | OperariaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registroTiempos"]>

  export type RegistroTiemposSelectScalar = {
    id?: boolean
    operariaId?: boolean
    proceso?: boolean
    condicion?: boolean
    tiempo1?: boolean
    tiempo2?: boolean
    tiempo3?: boolean
    tiempo4?: boolean
    tiempo5?: boolean
    tiempo6?: boolean
    tiempo7?: boolean
    tiempo8?: boolean
    tiempo9?: boolean
    tiempo10?: boolean
    promedioSegundos?: boolean
    promedioMinutos?: boolean
    promedioSegAjustado?: boolean
    promedioMinAjustado?: boolean
    produccionPorHora?: boolean
    produccionConMitad?: boolean
    produccionConTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RegistroTiemposOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "operariaId" | "proceso" | "condicion" | "tiempo1" | "tiempo2" | "tiempo3" | "tiempo4" | "tiempo5" | "tiempo6" | "tiempo7" | "tiempo8" | "tiempo9" | "tiempo10" | "promedioSegundos" | "promedioMinutos" | "promedioSegAjustado" | "promedioMinAjustado" | "produccionPorHora" | "produccionConMitad" | "produccionConTotal" | "createdAt" | "updatedAt", ExtArgs["result"]["registroTiempos"]>
  export type RegistroTiemposInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operaria?: boolean | OperariaDefaultArgs<ExtArgs>
  }
  export type RegistroTiemposIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operaria?: boolean | OperariaDefaultArgs<ExtArgs>
  }
  export type RegistroTiemposIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operaria?: boolean | OperariaDefaultArgs<ExtArgs>
  }

  export type $RegistroTiemposPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RegistroTiempos"
    objects: {
      operaria: Prisma.$OperariaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      operariaId: number
      proceso: string
      condicion: string
      tiempo1: string
      tiempo2: string
      tiempo3: string
      tiempo4: string
      tiempo5: string
      tiempo6: string | null
      tiempo7: string | null
      tiempo8: string | null
      tiempo9: string | null
      tiempo10: string | null
      promedioSegundos: number
      promedioMinutos: number
      promedioSegAjustado: number
      promedioMinAjustado: number
      produccionPorHora: number
      produccionConMitad: number
      produccionConTotal: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["registroTiempos"]>
    composites: {}
  }

  type RegistroTiemposGetPayload<S extends boolean | null | undefined | RegistroTiemposDefaultArgs> = $Result.GetResult<Prisma.$RegistroTiemposPayload, S>

  type RegistroTiemposCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegistroTiemposFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegistroTiemposCountAggregateInputType | true
    }

  export interface RegistroTiemposDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RegistroTiempos'], meta: { name: 'RegistroTiempos' } }
    /**
     * Find zero or one RegistroTiempos that matches the filter.
     * @param {RegistroTiemposFindUniqueArgs} args - Arguments to find a RegistroTiempos
     * @example
     * // Get one RegistroTiempos
     * const registroTiempos = await prisma.registroTiempos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistroTiemposFindUniqueArgs>(args: SelectSubset<T, RegistroTiemposFindUniqueArgs<ExtArgs>>): Prisma__RegistroTiemposClient<$Result.GetResult<Prisma.$RegistroTiemposPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RegistroTiempos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegistroTiemposFindUniqueOrThrowArgs} args - Arguments to find a RegistroTiempos
     * @example
     * // Get one RegistroTiempos
     * const registroTiempos = await prisma.registroTiempos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistroTiemposFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistroTiemposFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistroTiemposClient<$Result.GetResult<Prisma.$RegistroTiemposPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistroTiempos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroTiemposFindFirstArgs} args - Arguments to find a RegistroTiempos
     * @example
     * // Get one RegistroTiempos
     * const registroTiempos = await prisma.registroTiempos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistroTiemposFindFirstArgs>(args?: SelectSubset<T, RegistroTiemposFindFirstArgs<ExtArgs>>): Prisma__RegistroTiemposClient<$Result.GetResult<Prisma.$RegistroTiemposPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistroTiempos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroTiemposFindFirstOrThrowArgs} args - Arguments to find a RegistroTiempos
     * @example
     * // Get one RegistroTiempos
     * const registroTiempos = await prisma.registroTiempos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistroTiemposFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistroTiemposFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistroTiemposClient<$Result.GetResult<Prisma.$RegistroTiemposPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RegistroTiempos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroTiemposFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegistroTiempos
     * const registroTiempos = await prisma.registroTiempos.findMany()
     * 
     * // Get first 10 RegistroTiempos
     * const registroTiempos = await prisma.registroTiempos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registroTiemposWithIdOnly = await prisma.registroTiempos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegistroTiemposFindManyArgs>(args?: SelectSubset<T, RegistroTiemposFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroTiemposPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RegistroTiempos.
     * @param {RegistroTiemposCreateArgs} args - Arguments to create a RegistroTiempos.
     * @example
     * // Create one RegistroTiempos
     * const RegistroTiempos = await prisma.registroTiempos.create({
     *   data: {
     *     // ... data to create a RegistroTiempos
     *   }
     * })
     * 
     */
    create<T extends RegistroTiemposCreateArgs>(args: SelectSubset<T, RegistroTiemposCreateArgs<ExtArgs>>): Prisma__RegistroTiemposClient<$Result.GetResult<Prisma.$RegistroTiemposPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RegistroTiempos.
     * @param {RegistroTiemposCreateManyArgs} args - Arguments to create many RegistroTiempos.
     * @example
     * // Create many RegistroTiempos
     * const registroTiempos = await prisma.registroTiempos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistroTiemposCreateManyArgs>(args?: SelectSubset<T, RegistroTiemposCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RegistroTiempos and returns the data saved in the database.
     * @param {RegistroTiemposCreateManyAndReturnArgs} args - Arguments to create many RegistroTiempos.
     * @example
     * // Create many RegistroTiempos
     * const registroTiempos = await prisma.registroTiempos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RegistroTiempos and only return the `id`
     * const registroTiemposWithIdOnly = await prisma.registroTiempos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegistroTiemposCreateManyAndReturnArgs>(args?: SelectSubset<T, RegistroTiemposCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroTiemposPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RegistroTiempos.
     * @param {RegistroTiemposDeleteArgs} args - Arguments to delete one RegistroTiempos.
     * @example
     * // Delete one RegistroTiempos
     * const RegistroTiempos = await prisma.registroTiempos.delete({
     *   where: {
     *     // ... filter to delete one RegistroTiempos
     *   }
     * })
     * 
     */
    delete<T extends RegistroTiemposDeleteArgs>(args: SelectSubset<T, RegistroTiemposDeleteArgs<ExtArgs>>): Prisma__RegistroTiemposClient<$Result.GetResult<Prisma.$RegistroTiemposPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RegistroTiempos.
     * @param {RegistroTiemposUpdateArgs} args - Arguments to update one RegistroTiempos.
     * @example
     * // Update one RegistroTiempos
     * const registroTiempos = await prisma.registroTiempos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistroTiemposUpdateArgs>(args: SelectSubset<T, RegistroTiemposUpdateArgs<ExtArgs>>): Prisma__RegistroTiemposClient<$Result.GetResult<Prisma.$RegistroTiemposPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RegistroTiempos.
     * @param {RegistroTiemposDeleteManyArgs} args - Arguments to filter RegistroTiempos to delete.
     * @example
     * // Delete a few RegistroTiempos
     * const { count } = await prisma.registroTiempos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistroTiemposDeleteManyArgs>(args?: SelectSubset<T, RegistroTiemposDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistroTiempos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroTiemposUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegistroTiempos
     * const registroTiempos = await prisma.registroTiempos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistroTiemposUpdateManyArgs>(args: SelectSubset<T, RegistroTiemposUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistroTiempos and returns the data updated in the database.
     * @param {RegistroTiemposUpdateManyAndReturnArgs} args - Arguments to update many RegistroTiempos.
     * @example
     * // Update many RegistroTiempos
     * const registroTiempos = await prisma.registroTiempos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RegistroTiempos and only return the `id`
     * const registroTiemposWithIdOnly = await prisma.registroTiempos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RegistroTiemposUpdateManyAndReturnArgs>(args: SelectSubset<T, RegistroTiemposUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroTiemposPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RegistroTiempos.
     * @param {RegistroTiemposUpsertArgs} args - Arguments to update or create a RegistroTiempos.
     * @example
     * // Update or create a RegistroTiempos
     * const registroTiempos = await prisma.registroTiempos.upsert({
     *   create: {
     *     // ... data to create a RegistroTiempos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegistroTiempos we want to update
     *   }
     * })
     */
    upsert<T extends RegistroTiemposUpsertArgs>(args: SelectSubset<T, RegistroTiemposUpsertArgs<ExtArgs>>): Prisma__RegistroTiemposClient<$Result.GetResult<Prisma.$RegistroTiemposPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RegistroTiempos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroTiemposCountArgs} args - Arguments to filter RegistroTiempos to count.
     * @example
     * // Count the number of RegistroTiempos
     * const count = await prisma.registroTiempos.count({
     *   where: {
     *     // ... the filter for the RegistroTiempos we want to count
     *   }
     * })
    **/
    count<T extends RegistroTiemposCountArgs>(
      args?: Subset<T, RegistroTiemposCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistroTiemposCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegistroTiempos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroTiemposAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegistroTiemposAggregateArgs>(args: Subset<T, RegistroTiemposAggregateArgs>): Prisma.PrismaPromise<GetRegistroTiemposAggregateType<T>>

    /**
     * Group by RegistroTiempos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroTiemposGroupByArgs} args - Group by arguments.
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
      T extends RegistroTiemposGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistroTiemposGroupByArgs['orderBy'] }
        : { orderBy?: RegistroTiemposGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegistroTiemposGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistroTiemposGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RegistroTiempos model
   */
  readonly fields: RegistroTiemposFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegistroTiempos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistroTiemposClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    operaria<T extends OperariaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OperariaDefaultArgs<ExtArgs>>): Prisma__OperariaClient<$Result.GetResult<Prisma.$OperariaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RegistroTiempos model
   */
  interface RegistroTiemposFieldRefs {
    readonly id: FieldRef<"RegistroTiempos", 'Int'>
    readonly operariaId: FieldRef<"RegistroTiempos", 'Int'>
    readonly proceso: FieldRef<"RegistroTiempos", 'String'>
    readonly condicion: FieldRef<"RegistroTiempos", 'String'>
    readonly tiempo1: FieldRef<"RegistroTiempos", 'String'>
    readonly tiempo2: FieldRef<"RegistroTiempos", 'String'>
    readonly tiempo3: FieldRef<"RegistroTiempos", 'String'>
    readonly tiempo4: FieldRef<"RegistroTiempos", 'String'>
    readonly tiempo5: FieldRef<"RegistroTiempos", 'String'>
    readonly tiempo6: FieldRef<"RegistroTiempos", 'String'>
    readonly tiempo7: FieldRef<"RegistroTiempos", 'String'>
    readonly tiempo8: FieldRef<"RegistroTiempos", 'String'>
    readonly tiempo9: FieldRef<"RegistroTiempos", 'String'>
    readonly tiempo10: FieldRef<"RegistroTiempos", 'String'>
    readonly promedioSegundos: FieldRef<"RegistroTiempos", 'Float'>
    readonly promedioMinutos: FieldRef<"RegistroTiempos", 'Float'>
    readonly promedioSegAjustado: FieldRef<"RegistroTiempos", 'Float'>
    readonly promedioMinAjustado: FieldRef<"RegistroTiempos", 'Float'>
    readonly produccionPorHora: FieldRef<"RegistroTiempos", 'Float'>
    readonly produccionConMitad: FieldRef<"RegistroTiempos", 'Float'>
    readonly produccionConTotal: FieldRef<"RegistroTiempos", 'Float'>
    readonly createdAt: FieldRef<"RegistroTiempos", 'DateTime'>
    readonly updatedAt: FieldRef<"RegistroTiempos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RegistroTiempos findUnique
   */
  export type RegistroTiemposFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTiempos
     */
    select?: RegistroTiemposSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroTiempos
     */
    omit?: RegistroTiemposOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroTiemposInclude<ExtArgs> | null
    /**
     * Filter, which RegistroTiempos to fetch.
     */
    where: RegistroTiemposWhereUniqueInput
  }

  /**
   * RegistroTiempos findUniqueOrThrow
   */
  export type RegistroTiemposFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTiempos
     */
    select?: RegistroTiemposSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroTiempos
     */
    omit?: RegistroTiemposOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroTiemposInclude<ExtArgs> | null
    /**
     * Filter, which RegistroTiempos to fetch.
     */
    where: RegistroTiemposWhereUniqueInput
  }

  /**
   * RegistroTiempos findFirst
   */
  export type RegistroTiemposFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTiempos
     */
    select?: RegistroTiemposSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroTiempos
     */
    omit?: RegistroTiemposOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroTiemposInclude<ExtArgs> | null
    /**
     * Filter, which RegistroTiempos to fetch.
     */
    where?: RegistroTiemposWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroTiempos to fetch.
     */
    orderBy?: RegistroTiemposOrderByWithRelationInput | RegistroTiemposOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistroTiempos.
     */
    cursor?: RegistroTiemposWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroTiempos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroTiempos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroTiempos.
     */
    distinct?: RegistroTiemposScalarFieldEnum | RegistroTiemposScalarFieldEnum[]
  }

  /**
   * RegistroTiempos findFirstOrThrow
   */
  export type RegistroTiemposFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTiempos
     */
    select?: RegistroTiemposSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroTiempos
     */
    omit?: RegistroTiemposOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroTiemposInclude<ExtArgs> | null
    /**
     * Filter, which RegistroTiempos to fetch.
     */
    where?: RegistroTiemposWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroTiempos to fetch.
     */
    orderBy?: RegistroTiemposOrderByWithRelationInput | RegistroTiemposOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistroTiempos.
     */
    cursor?: RegistroTiemposWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroTiempos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroTiempos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroTiempos.
     */
    distinct?: RegistroTiemposScalarFieldEnum | RegistroTiemposScalarFieldEnum[]
  }

  /**
   * RegistroTiempos findMany
   */
  export type RegistroTiemposFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTiempos
     */
    select?: RegistroTiemposSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroTiempos
     */
    omit?: RegistroTiemposOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroTiemposInclude<ExtArgs> | null
    /**
     * Filter, which RegistroTiempos to fetch.
     */
    where?: RegistroTiemposWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroTiempos to fetch.
     */
    orderBy?: RegistroTiemposOrderByWithRelationInput | RegistroTiemposOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegistroTiempos.
     */
    cursor?: RegistroTiemposWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroTiempos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroTiempos.
     */
    skip?: number
    distinct?: RegistroTiemposScalarFieldEnum | RegistroTiemposScalarFieldEnum[]
  }

  /**
   * RegistroTiempos create
   */
  export type RegistroTiemposCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTiempos
     */
    select?: RegistroTiemposSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroTiempos
     */
    omit?: RegistroTiemposOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroTiemposInclude<ExtArgs> | null
    /**
     * The data needed to create a RegistroTiempos.
     */
    data: XOR<RegistroTiemposCreateInput, RegistroTiemposUncheckedCreateInput>
  }

  /**
   * RegistroTiempos createMany
   */
  export type RegistroTiemposCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegistroTiempos.
     */
    data: RegistroTiemposCreateManyInput | RegistroTiemposCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RegistroTiempos createManyAndReturn
   */
  export type RegistroTiemposCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTiempos
     */
    select?: RegistroTiemposSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroTiempos
     */
    omit?: RegistroTiemposOmit<ExtArgs> | null
    /**
     * The data used to create many RegistroTiempos.
     */
    data: RegistroTiemposCreateManyInput | RegistroTiemposCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroTiemposIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RegistroTiempos update
   */
  export type RegistroTiemposUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTiempos
     */
    select?: RegistroTiemposSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroTiempos
     */
    omit?: RegistroTiemposOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroTiemposInclude<ExtArgs> | null
    /**
     * The data needed to update a RegistroTiempos.
     */
    data: XOR<RegistroTiemposUpdateInput, RegistroTiemposUncheckedUpdateInput>
    /**
     * Choose, which RegistroTiempos to update.
     */
    where: RegistroTiemposWhereUniqueInput
  }

  /**
   * RegistroTiempos updateMany
   */
  export type RegistroTiemposUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RegistroTiempos.
     */
    data: XOR<RegistroTiemposUpdateManyMutationInput, RegistroTiemposUncheckedUpdateManyInput>
    /**
     * Filter which RegistroTiempos to update
     */
    where?: RegistroTiemposWhereInput
    /**
     * Limit how many RegistroTiempos to update.
     */
    limit?: number
  }

  /**
   * RegistroTiempos updateManyAndReturn
   */
  export type RegistroTiemposUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTiempos
     */
    select?: RegistroTiemposSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroTiempos
     */
    omit?: RegistroTiemposOmit<ExtArgs> | null
    /**
     * The data used to update RegistroTiempos.
     */
    data: XOR<RegistroTiemposUpdateManyMutationInput, RegistroTiemposUncheckedUpdateManyInput>
    /**
     * Filter which RegistroTiempos to update
     */
    where?: RegistroTiemposWhereInput
    /**
     * Limit how many RegistroTiempos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroTiemposIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RegistroTiempos upsert
   */
  export type RegistroTiemposUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTiempos
     */
    select?: RegistroTiemposSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroTiempos
     */
    omit?: RegistroTiemposOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroTiemposInclude<ExtArgs> | null
    /**
     * The filter to search for the RegistroTiempos to update in case it exists.
     */
    where: RegistroTiemposWhereUniqueInput
    /**
     * In case the RegistroTiempos found by the `where` argument doesn't exist, create a new RegistroTiempos with this data.
     */
    create: XOR<RegistroTiemposCreateInput, RegistroTiemposUncheckedCreateInput>
    /**
     * In case the RegistroTiempos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistroTiemposUpdateInput, RegistroTiemposUncheckedUpdateInput>
  }

  /**
   * RegistroTiempos delete
   */
  export type RegistroTiemposDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTiempos
     */
    select?: RegistroTiemposSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroTiempos
     */
    omit?: RegistroTiemposOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroTiemposInclude<ExtArgs> | null
    /**
     * Filter which RegistroTiempos to delete.
     */
    where: RegistroTiemposWhereUniqueInput
  }

  /**
   * RegistroTiempos deleteMany
   */
  export type RegistroTiemposDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistroTiempos to delete
     */
    where?: RegistroTiemposWhereInput
    /**
     * Limit how many RegistroTiempos to delete.
     */
    limit?: number
  }

  /**
   * RegistroTiempos without action
   */
  export type RegistroTiemposDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTiempos
     */
    select?: RegistroTiemposSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroTiempos
     */
    omit?: RegistroTiemposOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroTiemposInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OperariaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    codigo: 'codigo',
    activo: 'activo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OperariaScalarFieldEnum = (typeof OperariaScalarFieldEnum)[keyof typeof OperariaScalarFieldEnum]


  export const RegistroTiemposScalarFieldEnum: {
    id: 'id',
    operariaId: 'operariaId',
    proceso: 'proceso',
    condicion: 'condicion',
    tiempo1: 'tiempo1',
    tiempo2: 'tiempo2',
    tiempo3: 'tiempo3',
    tiempo4: 'tiempo4',
    tiempo5: 'tiempo5',
    tiempo6: 'tiempo6',
    tiempo7: 'tiempo7',
    tiempo8: 'tiempo8',
    tiempo9: 'tiempo9',
    tiempo10: 'tiempo10',
    promedioSegundos: 'promedioSegundos',
    promedioMinutos: 'promedioMinutos',
    promedioSegAjustado: 'promedioSegAjustado',
    promedioMinAjustado: 'promedioMinAjustado',
    produccionPorHora: 'produccionPorHora',
    produccionConMitad: 'produccionConMitad',
    produccionConTotal: 'produccionConTotal',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RegistroTiemposScalarFieldEnum = (typeof RegistroTiemposScalarFieldEnum)[keyof typeof RegistroTiemposScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type OperariaWhereInput = {
    AND?: OperariaWhereInput | OperariaWhereInput[]
    OR?: OperariaWhereInput[]
    NOT?: OperariaWhereInput | OperariaWhereInput[]
    id?: IntFilter<"Operaria"> | number
    nombre?: StringFilter<"Operaria"> | string
    codigo?: StringNullableFilter<"Operaria"> | string | null
    activo?: BoolFilter<"Operaria"> | boolean
    createdAt?: DateTimeFilter<"Operaria"> | Date | string
    updatedAt?: DateTimeFilter<"Operaria"> | Date | string
    registrosTiempos?: RegistroTiemposListRelationFilter
  }

  export type OperariaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrderInput | SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    registrosTiempos?: RegistroTiemposOrderByRelationAggregateInput
  }

  export type OperariaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    codigo?: string
    AND?: OperariaWhereInput | OperariaWhereInput[]
    OR?: OperariaWhereInput[]
    NOT?: OperariaWhereInput | OperariaWhereInput[]
    nombre?: StringFilter<"Operaria"> | string
    activo?: BoolFilter<"Operaria"> | boolean
    createdAt?: DateTimeFilter<"Operaria"> | Date | string
    updatedAt?: DateTimeFilter<"Operaria"> | Date | string
    registrosTiempos?: RegistroTiemposListRelationFilter
  }, "id" | "codigo">

  export type OperariaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrderInput | SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OperariaCountOrderByAggregateInput
    _avg?: OperariaAvgOrderByAggregateInput
    _max?: OperariaMaxOrderByAggregateInput
    _min?: OperariaMinOrderByAggregateInput
    _sum?: OperariaSumOrderByAggregateInput
  }

  export type OperariaScalarWhereWithAggregatesInput = {
    AND?: OperariaScalarWhereWithAggregatesInput | OperariaScalarWhereWithAggregatesInput[]
    OR?: OperariaScalarWhereWithAggregatesInput[]
    NOT?: OperariaScalarWhereWithAggregatesInput | OperariaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Operaria"> | number
    nombre?: StringWithAggregatesFilter<"Operaria"> | string
    codigo?: StringNullableWithAggregatesFilter<"Operaria"> | string | null
    activo?: BoolWithAggregatesFilter<"Operaria"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Operaria"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Operaria"> | Date | string
  }

  export type RegistroTiemposWhereInput = {
    AND?: RegistroTiemposWhereInput | RegistroTiemposWhereInput[]
    OR?: RegistroTiemposWhereInput[]
    NOT?: RegistroTiemposWhereInput | RegistroTiemposWhereInput[]
    id?: IntFilter<"RegistroTiempos"> | number
    operariaId?: IntFilter<"RegistroTiempos"> | number
    proceso?: StringFilter<"RegistroTiempos"> | string
    condicion?: StringFilter<"RegistroTiempos"> | string
    tiempo1?: StringFilter<"RegistroTiempos"> | string
    tiempo2?: StringFilter<"RegistroTiempos"> | string
    tiempo3?: StringFilter<"RegistroTiempos"> | string
    tiempo4?: StringFilter<"RegistroTiempos"> | string
    tiempo5?: StringFilter<"RegistroTiempos"> | string
    tiempo6?: StringNullableFilter<"RegistroTiempos"> | string | null
    tiempo7?: StringNullableFilter<"RegistroTiempos"> | string | null
    tiempo8?: StringNullableFilter<"RegistroTiempos"> | string | null
    tiempo9?: StringNullableFilter<"RegistroTiempos"> | string | null
    tiempo10?: StringNullableFilter<"RegistroTiempos"> | string | null
    promedioSegundos?: FloatFilter<"RegistroTiempos"> | number
    promedioMinutos?: FloatFilter<"RegistroTiempos"> | number
    promedioSegAjustado?: FloatFilter<"RegistroTiempos"> | number
    promedioMinAjustado?: FloatFilter<"RegistroTiempos"> | number
    produccionPorHora?: FloatFilter<"RegistroTiempos"> | number
    produccionConMitad?: FloatFilter<"RegistroTiempos"> | number
    produccionConTotal?: FloatFilter<"RegistroTiempos"> | number
    createdAt?: DateTimeFilter<"RegistroTiempos"> | Date | string
    updatedAt?: DateTimeFilter<"RegistroTiempos"> | Date | string
    operaria?: XOR<OperariaScalarRelationFilter, OperariaWhereInput>
  }

  export type RegistroTiemposOrderByWithRelationInput = {
    id?: SortOrder
    operariaId?: SortOrder
    proceso?: SortOrder
    condicion?: SortOrder
    tiempo1?: SortOrder
    tiempo2?: SortOrder
    tiempo3?: SortOrder
    tiempo4?: SortOrder
    tiempo5?: SortOrder
    tiempo6?: SortOrderInput | SortOrder
    tiempo7?: SortOrderInput | SortOrder
    tiempo8?: SortOrderInput | SortOrder
    tiempo9?: SortOrderInput | SortOrder
    tiempo10?: SortOrderInput | SortOrder
    promedioSegundos?: SortOrder
    promedioMinutos?: SortOrder
    promedioSegAjustado?: SortOrder
    promedioMinAjustado?: SortOrder
    produccionPorHora?: SortOrder
    produccionConMitad?: SortOrder
    produccionConTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    operaria?: OperariaOrderByWithRelationInput
  }

  export type RegistroTiemposWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RegistroTiemposWhereInput | RegistroTiemposWhereInput[]
    OR?: RegistroTiemposWhereInput[]
    NOT?: RegistroTiemposWhereInput | RegistroTiemposWhereInput[]
    operariaId?: IntFilter<"RegistroTiempos"> | number
    proceso?: StringFilter<"RegistroTiempos"> | string
    condicion?: StringFilter<"RegistroTiempos"> | string
    tiempo1?: StringFilter<"RegistroTiempos"> | string
    tiempo2?: StringFilter<"RegistroTiempos"> | string
    tiempo3?: StringFilter<"RegistroTiempos"> | string
    tiempo4?: StringFilter<"RegistroTiempos"> | string
    tiempo5?: StringFilter<"RegistroTiempos"> | string
    tiempo6?: StringNullableFilter<"RegistroTiempos"> | string | null
    tiempo7?: StringNullableFilter<"RegistroTiempos"> | string | null
    tiempo8?: StringNullableFilter<"RegistroTiempos"> | string | null
    tiempo9?: StringNullableFilter<"RegistroTiempos"> | string | null
    tiempo10?: StringNullableFilter<"RegistroTiempos"> | string | null
    promedioSegundos?: FloatFilter<"RegistroTiempos"> | number
    promedioMinutos?: FloatFilter<"RegistroTiempos"> | number
    promedioSegAjustado?: FloatFilter<"RegistroTiempos"> | number
    promedioMinAjustado?: FloatFilter<"RegistroTiempos"> | number
    produccionPorHora?: FloatFilter<"RegistroTiempos"> | number
    produccionConMitad?: FloatFilter<"RegistroTiempos"> | number
    produccionConTotal?: FloatFilter<"RegistroTiempos"> | number
    createdAt?: DateTimeFilter<"RegistroTiempos"> | Date | string
    updatedAt?: DateTimeFilter<"RegistroTiempos"> | Date | string
    operaria?: XOR<OperariaScalarRelationFilter, OperariaWhereInput>
  }, "id">

  export type RegistroTiemposOrderByWithAggregationInput = {
    id?: SortOrder
    operariaId?: SortOrder
    proceso?: SortOrder
    condicion?: SortOrder
    tiempo1?: SortOrder
    tiempo2?: SortOrder
    tiempo3?: SortOrder
    tiempo4?: SortOrder
    tiempo5?: SortOrder
    tiempo6?: SortOrderInput | SortOrder
    tiempo7?: SortOrderInput | SortOrder
    tiempo8?: SortOrderInput | SortOrder
    tiempo9?: SortOrderInput | SortOrder
    tiempo10?: SortOrderInput | SortOrder
    promedioSegundos?: SortOrder
    promedioMinutos?: SortOrder
    promedioSegAjustado?: SortOrder
    promedioMinAjustado?: SortOrder
    produccionPorHora?: SortOrder
    produccionConMitad?: SortOrder
    produccionConTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RegistroTiemposCountOrderByAggregateInput
    _avg?: RegistroTiemposAvgOrderByAggregateInput
    _max?: RegistroTiemposMaxOrderByAggregateInput
    _min?: RegistroTiemposMinOrderByAggregateInput
    _sum?: RegistroTiemposSumOrderByAggregateInput
  }

  export type RegistroTiemposScalarWhereWithAggregatesInput = {
    AND?: RegistroTiemposScalarWhereWithAggregatesInput | RegistroTiemposScalarWhereWithAggregatesInput[]
    OR?: RegistroTiemposScalarWhereWithAggregatesInput[]
    NOT?: RegistroTiemposScalarWhereWithAggregatesInput | RegistroTiemposScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RegistroTiempos"> | number
    operariaId?: IntWithAggregatesFilter<"RegistroTiempos"> | number
    proceso?: StringWithAggregatesFilter<"RegistroTiempos"> | string
    condicion?: StringWithAggregatesFilter<"RegistroTiempos"> | string
    tiempo1?: StringWithAggregatesFilter<"RegistroTiempos"> | string
    tiempo2?: StringWithAggregatesFilter<"RegistroTiempos"> | string
    tiempo3?: StringWithAggregatesFilter<"RegistroTiempos"> | string
    tiempo4?: StringWithAggregatesFilter<"RegistroTiempos"> | string
    tiempo5?: StringWithAggregatesFilter<"RegistroTiempos"> | string
    tiempo6?: StringNullableWithAggregatesFilter<"RegistroTiempos"> | string | null
    tiempo7?: StringNullableWithAggregatesFilter<"RegistroTiempos"> | string | null
    tiempo8?: StringNullableWithAggregatesFilter<"RegistroTiempos"> | string | null
    tiempo9?: StringNullableWithAggregatesFilter<"RegistroTiempos"> | string | null
    tiempo10?: StringNullableWithAggregatesFilter<"RegistroTiempos"> | string | null
    promedioSegundos?: FloatWithAggregatesFilter<"RegistroTiempos"> | number
    promedioMinutos?: FloatWithAggregatesFilter<"RegistroTiempos"> | number
    promedioSegAjustado?: FloatWithAggregatesFilter<"RegistroTiempos"> | number
    promedioMinAjustado?: FloatWithAggregatesFilter<"RegistroTiempos"> | number
    produccionPorHora?: FloatWithAggregatesFilter<"RegistroTiempos"> | number
    produccionConMitad?: FloatWithAggregatesFilter<"RegistroTiempos"> | number
    produccionConTotal?: FloatWithAggregatesFilter<"RegistroTiempos"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RegistroTiempos"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RegistroTiempos"> | Date | string
  }

  export type OperariaCreateInput = {
    nombre: string
    codigo?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    registrosTiempos?: RegistroTiemposCreateNestedManyWithoutOperariaInput
  }

  export type OperariaUncheckedCreateInput = {
    id?: number
    nombre: string
    codigo?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    registrosTiempos?: RegistroTiemposUncheckedCreateNestedManyWithoutOperariaInput
  }

  export type OperariaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrosTiempos?: RegistroTiemposUpdateManyWithoutOperariaNestedInput
  }

  export type OperariaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrosTiempos?: RegistroTiemposUncheckedUpdateManyWithoutOperariaNestedInput
  }

  export type OperariaCreateManyInput = {
    id?: number
    nombre: string
    codigo?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OperariaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperariaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroTiemposCreateInput = {
    proceso: string
    condicion: string
    tiempo1: string
    tiempo2: string
    tiempo3: string
    tiempo4: string
    tiempo5: string
    tiempo6?: string | null
    tiempo7?: string | null
    tiempo8?: string | null
    tiempo9?: string | null
    tiempo10?: string | null
    promedioSegundos: number
    promedioMinutos: number
    promedioSegAjustado: number
    promedioMinAjustado: number
    produccionPorHora: number
    produccionConMitad: number
    produccionConTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    operaria: OperariaCreateNestedOneWithoutRegistrosTiemposInput
  }

  export type RegistroTiemposUncheckedCreateInput = {
    id?: number
    operariaId: number
    proceso: string
    condicion: string
    tiempo1: string
    tiempo2: string
    tiempo3: string
    tiempo4: string
    tiempo5: string
    tiempo6?: string | null
    tiempo7?: string | null
    tiempo8?: string | null
    tiempo9?: string | null
    tiempo10?: string | null
    promedioSegundos: number
    promedioMinutos: number
    promedioSegAjustado: number
    promedioMinAjustado: number
    produccionPorHora: number
    produccionConMitad: number
    produccionConTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistroTiemposUpdateInput = {
    proceso?: StringFieldUpdateOperationsInput | string
    condicion?: StringFieldUpdateOperationsInput | string
    tiempo1?: StringFieldUpdateOperationsInput | string
    tiempo2?: StringFieldUpdateOperationsInput | string
    tiempo3?: StringFieldUpdateOperationsInput | string
    tiempo4?: StringFieldUpdateOperationsInput | string
    tiempo5?: StringFieldUpdateOperationsInput | string
    tiempo6?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo7?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo8?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo9?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo10?: NullableStringFieldUpdateOperationsInput | string | null
    promedioSegundos?: FloatFieldUpdateOperationsInput | number
    promedioMinutos?: FloatFieldUpdateOperationsInput | number
    promedioSegAjustado?: FloatFieldUpdateOperationsInput | number
    promedioMinAjustado?: FloatFieldUpdateOperationsInput | number
    produccionPorHora?: FloatFieldUpdateOperationsInput | number
    produccionConMitad?: FloatFieldUpdateOperationsInput | number
    produccionConTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operaria?: OperariaUpdateOneRequiredWithoutRegistrosTiemposNestedInput
  }

  export type RegistroTiemposUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    operariaId?: IntFieldUpdateOperationsInput | number
    proceso?: StringFieldUpdateOperationsInput | string
    condicion?: StringFieldUpdateOperationsInput | string
    tiempo1?: StringFieldUpdateOperationsInput | string
    tiempo2?: StringFieldUpdateOperationsInput | string
    tiempo3?: StringFieldUpdateOperationsInput | string
    tiempo4?: StringFieldUpdateOperationsInput | string
    tiempo5?: StringFieldUpdateOperationsInput | string
    tiempo6?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo7?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo8?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo9?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo10?: NullableStringFieldUpdateOperationsInput | string | null
    promedioSegundos?: FloatFieldUpdateOperationsInput | number
    promedioMinutos?: FloatFieldUpdateOperationsInput | number
    promedioSegAjustado?: FloatFieldUpdateOperationsInput | number
    promedioMinAjustado?: FloatFieldUpdateOperationsInput | number
    produccionPorHora?: FloatFieldUpdateOperationsInput | number
    produccionConMitad?: FloatFieldUpdateOperationsInput | number
    produccionConTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroTiemposCreateManyInput = {
    id?: number
    operariaId: number
    proceso: string
    condicion: string
    tiempo1: string
    tiempo2: string
    tiempo3: string
    tiempo4: string
    tiempo5: string
    tiempo6?: string | null
    tiempo7?: string | null
    tiempo8?: string | null
    tiempo9?: string | null
    tiempo10?: string | null
    promedioSegundos: number
    promedioMinutos: number
    promedioSegAjustado: number
    promedioMinAjustado: number
    produccionPorHora: number
    produccionConMitad: number
    produccionConTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistroTiemposUpdateManyMutationInput = {
    proceso?: StringFieldUpdateOperationsInput | string
    condicion?: StringFieldUpdateOperationsInput | string
    tiempo1?: StringFieldUpdateOperationsInput | string
    tiempo2?: StringFieldUpdateOperationsInput | string
    tiempo3?: StringFieldUpdateOperationsInput | string
    tiempo4?: StringFieldUpdateOperationsInput | string
    tiempo5?: StringFieldUpdateOperationsInput | string
    tiempo6?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo7?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo8?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo9?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo10?: NullableStringFieldUpdateOperationsInput | string | null
    promedioSegundos?: FloatFieldUpdateOperationsInput | number
    promedioMinutos?: FloatFieldUpdateOperationsInput | number
    promedioSegAjustado?: FloatFieldUpdateOperationsInput | number
    promedioMinAjustado?: FloatFieldUpdateOperationsInput | number
    produccionPorHora?: FloatFieldUpdateOperationsInput | number
    produccionConMitad?: FloatFieldUpdateOperationsInput | number
    produccionConTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroTiemposUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    operariaId?: IntFieldUpdateOperationsInput | number
    proceso?: StringFieldUpdateOperationsInput | string
    condicion?: StringFieldUpdateOperationsInput | string
    tiempo1?: StringFieldUpdateOperationsInput | string
    tiempo2?: StringFieldUpdateOperationsInput | string
    tiempo3?: StringFieldUpdateOperationsInput | string
    tiempo4?: StringFieldUpdateOperationsInput | string
    tiempo5?: StringFieldUpdateOperationsInput | string
    tiempo6?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo7?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo8?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo9?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo10?: NullableStringFieldUpdateOperationsInput | string | null
    promedioSegundos?: FloatFieldUpdateOperationsInput | number
    promedioMinutos?: FloatFieldUpdateOperationsInput | number
    promedioSegAjustado?: FloatFieldUpdateOperationsInput | number
    promedioMinAjustado?: FloatFieldUpdateOperationsInput | number
    produccionPorHora?: FloatFieldUpdateOperationsInput | number
    produccionConMitad?: FloatFieldUpdateOperationsInput | number
    produccionConTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RegistroTiemposListRelationFilter = {
    every?: RegistroTiemposWhereInput
    some?: RegistroTiemposWhereInput
    none?: RegistroTiemposWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RegistroTiemposOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OperariaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OperariaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OperariaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OperariaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OperariaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type OperariaScalarRelationFilter = {
    is?: OperariaWhereInput
    isNot?: OperariaWhereInput
  }

  export type RegistroTiemposCountOrderByAggregateInput = {
    id?: SortOrder
    operariaId?: SortOrder
    proceso?: SortOrder
    condicion?: SortOrder
    tiempo1?: SortOrder
    tiempo2?: SortOrder
    tiempo3?: SortOrder
    tiempo4?: SortOrder
    tiempo5?: SortOrder
    tiempo6?: SortOrder
    tiempo7?: SortOrder
    tiempo8?: SortOrder
    tiempo9?: SortOrder
    tiempo10?: SortOrder
    promedioSegundos?: SortOrder
    promedioMinutos?: SortOrder
    promedioSegAjustado?: SortOrder
    promedioMinAjustado?: SortOrder
    produccionPorHora?: SortOrder
    produccionConMitad?: SortOrder
    produccionConTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegistroTiemposAvgOrderByAggregateInput = {
    id?: SortOrder
    operariaId?: SortOrder
    promedioSegundos?: SortOrder
    promedioMinutos?: SortOrder
    promedioSegAjustado?: SortOrder
    promedioMinAjustado?: SortOrder
    produccionPorHora?: SortOrder
    produccionConMitad?: SortOrder
    produccionConTotal?: SortOrder
  }

  export type RegistroTiemposMaxOrderByAggregateInput = {
    id?: SortOrder
    operariaId?: SortOrder
    proceso?: SortOrder
    condicion?: SortOrder
    tiempo1?: SortOrder
    tiempo2?: SortOrder
    tiempo3?: SortOrder
    tiempo4?: SortOrder
    tiempo5?: SortOrder
    tiempo6?: SortOrder
    tiempo7?: SortOrder
    tiempo8?: SortOrder
    tiempo9?: SortOrder
    tiempo10?: SortOrder
    promedioSegundos?: SortOrder
    promedioMinutos?: SortOrder
    promedioSegAjustado?: SortOrder
    promedioMinAjustado?: SortOrder
    produccionPorHora?: SortOrder
    produccionConMitad?: SortOrder
    produccionConTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegistroTiemposMinOrderByAggregateInput = {
    id?: SortOrder
    operariaId?: SortOrder
    proceso?: SortOrder
    condicion?: SortOrder
    tiempo1?: SortOrder
    tiempo2?: SortOrder
    tiempo3?: SortOrder
    tiempo4?: SortOrder
    tiempo5?: SortOrder
    tiempo6?: SortOrder
    tiempo7?: SortOrder
    tiempo8?: SortOrder
    tiempo9?: SortOrder
    tiempo10?: SortOrder
    promedioSegundos?: SortOrder
    promedioMinutos?: SortOrder
    promedioSegAjustado?: SortOrder
    promedioMinAjustado?: SortOrder
    produccionPorHora?: SortOrder
    produccionConMitad?: SortOrder
    produccionConTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegistroTiemposSumOrderByAggregateInput = {
    id?: SortOrder
    operariaId?: SortOrder
    promedioSegundos?: SortOrder
    promedioMinutos?: SortOrder
    promedioSegAjustado?: SortOrder
    promedioMinAjustado?: SortOrder
    produccionPorHora?: SortOrder
    produccionConMitad?: SortOrder
    produccionConTotal?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type RegistroTiemposCreateNestedManyWithoutOperariaInput = {
    create?: XOR<RegistroTiemposCreateWithoutOperariaInput, RegistroTiemposUncheckedCreateWithoutOperariaInput> | RegistroTiemposCreateWithoutOperariaInput[] | RegistroTiemposUncheckedCreateWithoutOperariaInput[]
    connectOrCreate?: RegistroTiemposCreateOrConnectWithoutOperariaInput | RegistroTiemposCreateOrConnectWithoutOperariaInput[]
    createMany?: RegistroTiemposCreateManyOperariaInputEnvelope
    connect?: RegistroTiemposWhereUniqueInput | RegistroTiemposWhereUniqueInput[]
  }

  export type RegistroTiemposUncheckedCreateNestedManyWithoutOperariaInput = {
    create?: XOR<RegistroTiemposCreateWithoutOperariaInput, RegistroTiemposUncheckedCreateWithoutOperariaInput> | RegistroTiemposCreateWithoutOperariaInput[] | RegistroTiemposUncheckedCreateWithoutOperariaInput[]
    connectOrCreate?: RegistroTiemposCreateOrConnectWithoutOperariaInput | RegistroTiemposCreateOrConnectWithoutOperariaInput[]
    createMany?: RegistroTiemposCreateManyOperariaInputEnvelope
    connect?: RegistroTiemposWhereUniqueInput | RegistroTiemposWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RegistroTiemposUpdateManyWithoutOperariaNestedInput = {
    create?: XOR<RegistroTiemposCreateWithoutOperariaInput, RegistroTiemposUncheckedCreateWithoutOperariaInput> | RegistroTiemposCreateWithoutOperariaInput[] | RegistroTiemposUncheckedCreateWithoutOperariaInput[]
    connectOrCreate?: RegistroTiemposCreateOrConnectWithoutOperariaInput | RegistroTiemposCreateOrConnectWithoutOperariaInput[]
    upsert?: RegistroTiemposUpsertWithWhereUniqueWithoutOperariaInput | RegistroTiemposUpsertWithWhereUniqueWithoutOperariaInput[]
    createMany?: RegistroTiemposCreateManyOperariaInputEnvelope
    set?: RegistroTiemposWhereUniqueInput | RegistroTiemposWhereUniqueInput[]
    disconnect?: RegistroTiemposWhereUniqueInput | RegistroTiemposWhereUniqueInput[]
    delete?: RegistroTiemposWhereUniqueInput | RegistroTiemposWhereUniqueInput[]
    connect?: RegistroTiemposWhereUniqueInput | RegistroTiemposWhereUniqueInput[]
    update?: RegistroTiemposUpdateWithWhereUniqueWithoutOperariaInput | RegistroTiemposUpdateWithWhereUniqueWithoutOperariaInput[]
    updateMany?: RegistroTiemposUpdateManyWithWhereWithoutOperariaInput | RegistroTiemposUpdateManyWithWhereWithoutOperariaInput[]
    deleteMany?: RegistroTiemposScalarWhereInput | RegistroTiemposScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RegistroTiemposUncheckedUpdateManyWithoutOperariaNestedInput = {
    create?: XOR<RegistroTiemposCreateWithoutOperariaInput, RegistroTiemposUncheckedCreateWithoutOperariaInput> | RegistroTiemposCreateWithoutOperariaInput[] | RegistroTiemposUncheckedCreateWithoutOperariaInput[]
    connectOrCreate?: RegistroTiemposCreateOrConnectWithoutOperariaInput | RegistroTiemposCreateOrConnectWithoutOperariaInput[]
    upsert?: RegistroTiemposUpsertWithWhereUniqueWithoutOperariaInput | RegistroTiemposUpsertWithWhereUniqueWithoutOperariaInput[]
    createMany?: RegistroTiemposCreateManyOperariaInputEnvelope
    set?: RegistroTiemposWhereUniqueInput | RegistroTiemposWhereUniqueInput[]
    disconnect?: RegistroTiemposWhereUniqueInput | RegistroTiemposWhereUniqueInput[]
    delete?: RegistroTiemposWhereUniqueInput | RegistroTiemposWhereUniqueInput[]
    connect?: RegistroTiemposWhereUniqueInput | RegistroTiemposWhereUniqueInput[]
    update?: RegistroTiemposUpdateWithWhereUniqueWithoutOperariaInput | RegistroTiemposUpdateWithWhereUniqueWithoutOperariaInput[]
    updateMany?: RegistroTiemposUpdateManyWithWhereWithoutOperariaInput | RegistroTiemposUpdateManyWithWhereWithoutOperariaInput[]
    deleteMany?: RegistroTiemposScalarWhereInput | RegistroTiemposScalarWhereInput[]
  }

  export type OperariaCreateNestedOneWithoutRegistrosTiemposInput = {
    create?: XOR<OperariaCreateWithoutRegistrosTiemposInput, OperariaUncheckedCreateWithoutRegistrosTiemposInput>
    connectOrCreate?: OperariaCreateOrConnectWithoutRegistrosTiemposInput
    connect?: OperariaWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OperariaUpdateOneRequiredWithoutRegistrosTiemposNestedInput = {
    create?: XOR<OperariaCreateWithoutRegistrosTiemposInput, OperariaUncheckedCreateWithoutRegistrosTiemposInput>
    connectOrCreate?: OperariaCreateOrConnectWithoutRegistrosTiemposInput
    upsert?: OperariaUpsertWithoutRegistrosTiemposInput
    connect?: OperariaWhereUniqueInput
    update?: XOR<XOR<OperariaUpdateToOneWithWhereWithoutRegistrosTiemposInput, OperariaUpdateWithoutRegistrosTiemposInput>, OperariaUncheckedUpdateWithoutRegistrosTiemposInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type RegistroTiemposCreateWithoutOperariaInput = {
    proceso: string
    condicion: string
    tiempo1: string
    tiempo2: string
    tiempo3: string
    tiempo4: string
    tiempo5: string
    tiempo6?: string | null
    tiempo7?: string | null
    tiempo8?: string | null
    tiempo9?: string | null
    tiempo10?: string | null
    promedioSegundos: number
    promedioMinutos: number
    promedioSegAjustado: number
    promedioMinAjustado: number
    produccionPorHora: number
    produccionConMitad: number
    produccionConTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistroTiemposUncheckedCreateWithoutOperariaInput = {
    id?: number
    proceso: string
    condicion: string
    tiempo1: string
    tiempo2: string
    tiempo3: string
    tiempo4: string
    tiempo5: string
    tiempo6?: string | null
    tiempo7?: string | null
    tiempo8?: string | null
    tiempo9?: string | null
    tiempo10?: string | null
    promedioSegundos: number
    promedioMinutos: number
    promedioSegAjustado: number
    promedioMinAjustado: number
    produccionPorHora: number
    produccionConMitad: number
    produccionConTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistroTiemposCreateOrConnectWithoutOperariaInput = {
    where: RegistroTiemposWhereUniqueInput
    create: XOR<RegistroTiemposCreateWithoutOperariaInput, RegistroTiemposUncheckedCreateWithoutOperariaInput>
  }

  export type RegistroTiemposCreateManyOperariaInputEnvelope = {
    data: RegistroTiemposCreateManyOperariaInput | RegistroTiemposCreateManyOperariaInput[]
    skipDuplicates?: boolean
  }

  export type RegistroTiemposUpsertWithWhereUniqueWithoutOperariaInput = {
    where: RegistroTiemposWhereUniqueInput
    update: XOR<RegistroTiemposUpdateWithoutOperariaInput, RegistroTiemposUncheckedUpdateWithoutOperariaInput>
    create: XOR<RegistroTiemposCreateWithoutOperariaInput, RegistroTiemposUncheckedCreateWithoutOperariaInput>
  }

  export type RegistroTiemposUpdateWithWhereUniqueWithoutOperariaInput = {
    where: RegistroTiemposWhereUniqueInput
    data: XOR<RegistroTiemposUpdateWithoutOperariaInput, RegistroTiemposUncheckedUpdateWithoutOperariaInput>
  }

  export type RegistroTiemposUpdateManyWithWhereWithoutOperariaInput = {
    where: RegistroTiemposScalarWhereInput
    data: XOR<RegistroTiemposUpdateManyMutationInput, RegistroTiemposUncheckedUpdateManyWithoutOperariaInput>
  }

  export type RegistroTiemposScalarWhereInput = {
    AND?: RegistroTiemposScalarWhereInput | RegistroTiemposScalarWhereInput[]
    OR?: RegistroTiemposScalarWhereInput[]
    NOT?: RegistroTiemposScalarWhereInput | RegistroTiemposScalarWhereInput[]
    id?: IntFilter<"RegistroTiempos"> | number
    operariaId?: IntFilter<"RegistroTiempos"> | number
    proceso?: StringFilter<"RegistroTiempos"> | string
    condicion?: StringFilter<"RegistroTiempos"> | string
    tiempo1?: StringFilter<"RegistroTiempos"> | string
    tiempo2?: StringFilter<"RegistroTiempos"> | string
    tiempo3?: StringFilter<"RegistroTiempos"> | string
    tiempo4?: StringFilter<"RegistroTiempos"> | string
    tiempo5?: StringFilter<"RegistroTiempos"> | string
    tiempo6?: StringNullableFilter<"RegistroTiempos"> | string | null
    tiempo7?: StringNullableFilter<"RegistroTiempos"> | string | null
    tiempo8?: StringNullableFilter<"RegistroTiempos"> | string | null
    tiempo9?: StringNullableFilter<"RegistroTiempos"> | string | null
    tiempo10?: StringNullableFilter<"RegistroTiempos"> | string | null
    promedioSegundos?: FloatFilter<"RegistroTiempos"> | number
    promedioMinutos?: FloatFilter<"RegistroTiempos"> | number
    promedioSegAjustado?: FloatFilter<"RegistroTiempos"> | number
    promedioMinAjustado?: FloatFilter<"RegistroTiempos"> | number
    produccionPorHora?: FloatFilter<"RegistroTiempos"> | number
    produccionConMitad?: FloatFilter<"RegistroTiempos"> | number
    produccionConTotal?: FloatFilter<"RegistroTiempos"> | number
    createdAt?: DateTimeFilter<"RegistroTiempos"> | Date | string
    updatedAt?: DateTimeFilter<"RegistroTiempos"> | Date | string
  }

  export type OperariaCreateWithoutRegistrosTiemposInput = {
    nombre: string
    codigo?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OperariaUncheckedCreateWithoutRegistrosTiemposInput = {
    id?: number
    nombre: string
    codigo?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OperariaCreateOrConnectWithoutRegistrosTiemposInput = {
    where: OperariaWhereUniqueInput
    create: XOR<OperariaCreateWithoutRegistrosTiemposInput, OperariaUncheckedCreateWithoutRegistrosTiemposInput>
  }

  export type OperariaUpsertWithoutRegistrosTiemposInput = {
    update: XOR<OperariaUpdateWithoutRegistrosTiemposInput, OperariaUncheckedUpdateWithoutRegistrosTiemposInput>
    create: XOR<OperariaCreateWithoutRegistrosTiemposInput, OperariaUncheckedCreateWithoutRegistrosTiemposInput>
    where?: OperariaWhereInput
  }

  export type OperariaUpdateToOneWithWhereWithoutRegistrosTiemposInput = {
    where?: OperariaWhereInput
    data: XOR<OperariaUpdateWithoutRegistrosTiemposInput, OperariaUncheckedUpdateWithoutRegistrosTiemposInput>
  }

  export type OperariaUpdateWithoutRegistrosTiemposInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperariaUncheckedUpdateWithoutRegistrosTiemposInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroTiemposCreateManyOperariaInput = {
    id?: number
    proceso: string
    condicion: string
    tiempo1: string
    tiempo2: string
    tiempo3: string
    tiempo4: string
    tiempo5: string
    tiempo6?: string | null
    tiempo7?: string | null
    tiempo8?: string | null
    tiempo9?: string | null
    tiempo10?: string | null
    promedioSegundos: number
    promedioMinutos: number
    promedioSegAjustado: number
    promedioMinAjustado: number
    produccionPorHora: number
    produccionConMitad: number
    produccionConTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistroTiemposUpdateWithoutOperariaInput = {
    proceso?: StringFieldUpdateOperationsInput | string
    condicion?: StringFieldUpdateOperationsInput | string
    tiempo1?: StringFieldUpdateOperationsInput | string
    tiempo2?: StringFieldUpdateOperationsInput | string
    tiempo3?: StringFieldUpdateOperationsInput | string
    tiempo4?: StringFieldUpdateOperationsInput | string
    tiempo5?: StringFieldUpdateOperationsInput | string
    tiempo6?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo7?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo8?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo9?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo10?: NullableStringFieldUpdateOperationsInput | string | null
    promedioSegundos?: FloatFieldUpdateOperationsInput | number
    promedioMinutos?: FloatFieldUpdateOperationsInput | number
    promedioSegAjustado?: FloatFieldUpdateOperationsInput | number
    promedioMinAjustado?: FloatFieldUpdateOperationsInput | number
    produccionPorHora?: FloatFieldUpdateOperationsInput | number
    produccionConMitad?: FloatFieldUpdateOperationsInput | number
    produccionConTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroTiemposUncheckedUpdateWithoutOperariaInput = {
    id?: IntFieldUpdateOperationsInput | number
    proceso?: StringFieldUpdateOperationsInput | string
    condicion?: StringFieldUpdateOperationsInput | string
    tiempo1?: StringFieldUpdateOperationsInput | string
    tiempo2?: StringFieldUpdateOperationsInput | string
    tiempo3?: StringFieldUpdateOperationsInput | string
    tiempo4?: StringFieldUpdateOperationsInput | string
    tiempo5?: StringFieldUpdateOperationsInput | string
    tiempo6?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo7?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo8?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo9?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo10?: NullableStringFieldUpdateOperationsInput | string | null
    promedioSegundos?: FloatFieldUpdateOperationsInput | number
    promedioMinutos?: FloatFieldUpdateOperationsInput | number
    promedioSegAjustado?: FloatFieldUpdateOperationsInput | number
    promedioMinAjustado?: FloatFieldUpdateOperationsInput | number
    produccionPorHora?: FloatFieldUpdateOperationsInput | number
    produccionConMitad?: FloatFieldUpdateOperationsInput | number
    produccionConTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroTiemposUncheckedUpdateManyWithoutOperariaInput = {
    id?: IntFieldUpdateOperationsInput | number
    proceso?: StringFieldUpdateOperationsInput | string
    condicion?: StringFieldUpdateOperationsInput | string
    tiempo1?: StringFieldUpdateOperationsInput | string
    tiempo2?: StringFieldUpdateOperationsInput | string
    tiempo3?: StringFieldUpdateOperationsInput | string
    tiempo4?: StringFieldUpdateOperationsInput | string
    tiempo5?: StringFieldUpdateOperationsInput | string
    tiempo6?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo7?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo8?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo9?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo10?: NullableStringFieldUpdateOperationsInput | string | null
    promedioSegundos?: FloatFieldUpdateOperationsInput | number
    promedioMinutos?: FloatFieldUpdateOperationsInput | number
    promedioSegAjustado?: FloatFieldUpdateOperationsInput | number
    promedioMinAjustado?: FloatFieldUpdateOperationsInput | number
    produccionPorHora?: FloatFieldUpdateOperationsInput | number
    produccionConMitad?: FloatFieldUpdateOperationsInput | number
    produccionConTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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