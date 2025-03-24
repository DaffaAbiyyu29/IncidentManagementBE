
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "173f8d54f8d52e692c7e27e72a88314ec7aeff60"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable',
  Snapshot: 'Snapshot'
});

exports.Prisma.ProcessScalarFieldEnum = {
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

exports.Prisma.ProcessActivityScalarFieldEnum = {
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

exports.Prisma.ProcessAssignScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Process: 'Process',
  ProcessActivity: 'ProcessActivity',
  ProcessAssign: 'ProcessAssign'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "satriaClient",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\IncidentManagementBE\\prisma\\generated\\satria-client-patriapowerapps",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\IncidentManagementBE\\prisma\\patriapowerapps.schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.22.0",
  "engineVersion": "173f8d54f8d52e692c7e27e72a88314ec7aeff60",
  "datasourceNames": [
    "satria"
  ],
  "activeProvider": "sqlserver",
  "postinstall": false,
  "inlineDatasources": {
    "satria": {
      "url": {
        "fromEnvVar": "DATABASE_URL_PATRIAPOWERAPPS",
        "value": null
      }
    }
  },
  "inlineSchema": "generator satriaClient {\n  provider = \"prisma-client-js\"\n  output   = \"../prisma/generated/satria-client-patriapowerapps\"\n}\n\ndatasource satria {\n  provider = \"sqlserver\"\n  url      = env(\"DATABASE_URL_PATRIAPOWERAPPS\")\n}\n\nmodel Process {\n  ID              Int             @id(map: \"PK_Process\")\n  UnitID          Int\n  MasterProcessID Int\n  Status          Int\n  PlanStartDate   DateTime        @satria.DateTime\n  PlanEndDate     DateTime?       @satria.DateTime\n  ActualStartDate DateTime?       @satria.DateTime\n  ActualEndDate   DateTime?       @satria.DateTime\n  IsHold          Boolean\n  HoldDate        DateTime?       @satria.DateTime\n  Created         DateTime        @satria.DateTime\n  CreatedBy       String          @satria.VarChar(100)\n  LastModified    DateTime        @satria.DateTime\n  LastModifiedBy  String          @satria.VarChar(100)\n  ProcessAssign   ProcessAssign[]\n}\n\nmodel ProcessActivity {\n  ID               Int           @id(map: \"PK_ProcessActivity\")\n  ProcessAssignID  Int\n  Status           Int\n  ReasonPauseID    Int?\n  ActivityDateTime DateTime      @satria.DateTime\n  ActualHours      Decimal?      @satria.Decimal(18, 2)\n  Created          DateTime      @satria.DateTime\n  CreatedBy        String        @satria.VarChar(100)\n  LastModified     DateTime      @satria.DateTime\n  LastModifiedBy   String        @satria.VarChar(100)\n  ProcessAssign    ProcessAssign @relation(fields: [ProcessAssignID], references: [ID], onUpdate: NoAction, map: \"FK_ProcessActivity_ProcessAssign\")\n}\n\nmodel ProcessAssign {\n  ID              Int               @id(map: \"PK_ProcessAssign\")\n  ProcessID       Int\n  UserID          String            @satria.UniqueIdentifier\n  EmployeeNumber  String?           @satria.VarChar(50)\n  Status          Int\n  Type            Int?\n  Created         DateTime          @satria.DateTime\n  CreatedBy       String            @satria.VarChar(100)\n  LastModified    DateTime          @satria.DateTime\n  LastModifiedBy  String            @satria.VarChar(100)\n  remark          String?           @satria.VarChar(255)\n  ProcessActivity ProcessActivity[]\n  Process         Process           @relation(fields: [ProcessID], references: [ID], onUpdate: NoAction, map: \"FK_ProcessAssign_Process\")\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel vwPRO_2 {\n  ID             Int\n  Number         String   @satria.VarChar(100)\n  ProductID      Int\n  Quantity       Int\n  DueDate        DateTime @satria.DateTime\n  Created        DateTime @satria.DateTime\n  CreatedBy      String   @satria.VarChar(100)\n  LastModified   DateTime @satria.DateTime\n  LastModifiedBy String   @satria.VarChar(100)\n\n  @@ignore\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel vwProcess {\n  ProcessID              Int\n  UnitID                 Int\n  ProcessStatus          String?   @satria.VarChar(8)\n  ProcessPlanStartDate   DateTime? @satria.Date\n  ProcessPlanEndDate     DateTime? @satria.Date\n  ProcessPlanDuration    Int?\n  ProcessActualStartDate DateTime? @satria.Date\n  ProcessActualEndDate   DateTime? @satria.Date\n  ProcessActualDuration  Int?\n  MasterProcessName      String?   @satria.VarChar(100)\n  StandardMH             Decimal?  @satria.Decimal(18, 4)\n  ProcessGroupName       String?   @satria.VarChar(100)\n  ProcessDelayInDay      Int?\n  ProcessOrder           Int?\n  LastModified           DateTime  @satria.DateTime\n  MasterProcessID        Int\n\n  @@ignore\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel vwProcessActivity {\n  atasan                     String   @satria.VarChar(100)\n  EmployeeNumber             String?  @satria.VarChar(50)\n  ActivityDateTime           DateTime @satria.DateTime\n  ProcessActivityID          Int\n  ProcessAssignID            Int\n  ProcessActivityName        String   @satria.VarChar(100)\n  ProcessActivityStatus      String?  @satria.VarChar(17)\n  ProcessActivityReasonPause String   @satria.VarChar(100)\n  ActualHoursNonProductive   Int?\n  ProcessActivityActualHours Decimal? @satria.Decimal(18, 2)\n  ProcessActivityDateTime    DateTime @satria.DateTime\n  LastModifiedBy             String   @satria.VarChar(100)\n  LastModified               DateTime @satria.DateTime\n\n  @@ignore\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel vwProcessAssign2All {\n  ID                  Int\n  ProcessID           Int\n  UnitID              Int?\n  LeaderName          String    @satria.VarChar(100)\n  OperatorName        String?   @satria.VarChar(100)\n  NRP                 String?   @satria.VarChar(100)\n  TglAssign           DateTime  @satria.DateTime\n  ProcessassignStatus String?   @satria.VarChar(17)\n  Startassign         String?   @satria.VarChar(10)\n  Stopassign          String?   @satria.VarChar(4)\n  ProcessAssignType   String?   @satria.VarChar(12)\n  LastModified        DateTime  @satria.DateTime\n  lastStart           DateTime? @satria.DateTime\n  lastStop            DateTime? @satria.DateTime\n  remark              String?   @satria.VarChar(255)\n  IsActive            Boolean?\n\n  @@ignore\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel vwProcessGroup {\n  UnitID                      Int\n  ProcessGroupNameSort        Int?\n  ProcessGroupName            String?   @satria.VarChar(100)\n  ProcessGroupPlanStartDate   DateTime? @satria.Date\n  ProcessGroupPlanEndDate     DateTime? @satria.Date\n  ProcessGroupPlanDuration    Int?\n  ProcessGroupActualStartDate DateTime? @satria.Date\n  ProcessGroupActualEndDate   DateTime? @satria.Date\n  ProcessGroupActualDuration  Int?\n  ProcessGroupDelayInDay      Int?\n  LastModified                DateTime? @satria.DateTime\n\n  @@ignore\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel vwProduct {\n  ProductID              Int\n  ProductGroupID         Int\n  ProductName            String   @satria.VarChar(100)\n  ProductPN              String   @satria.VarChar(100)\n  ProductTotalDay        Int?\n  ProductSubGroupName    String   @satria.VarChar(100)\n  ProductSubGroupSAPCode String   @satria.VarChar(10)\n  ProductStandardHours   Decimal? @satria.Decimal(38, 4)\n  LastModified           DateTime @satria.DateTime\n\n  @@ignore\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel vwUnit {\n  UnitID                         Int\n  PROID                          Int\n  ProductID                      Int\n  UnitSerialNumber               String    @satria.VarChar(100)\n  UnitChasisNumber               String?   @satria.VarChar(100)\n  UnitDueDate                    DateTime  @satria.DateTime\n  UnitPlanStartDate              DateTime? @satria.Date\n  UnitPlanEndDate                DateTime? @satria.Date\n  UnitPlanDuration               Int?\n  UnitActualStartDate            DateTime? @satria.Date\n  UnitActualEndDate              DateTime? @satria.Date\n  UnitActualDuration             Int?\n  Unit_Status                    String    @satria.VarChar(16)\n  UnitMPSDueDate                 DateTime? @satria.DateTime\n  UnitActualDeliveryDate         DateTime? @satria.Date\n  UnitActualHoursCompleted       Decimal?  @satria.Decimal(38, 6)\n  UnitDelayInDay                 Int?\n  SOUnitprice                    Decimal?  @satria.Decimal(18, 0)\n  SalesOrderID                   Int?\n  UnitProcessLastStatus          String    @satria.VarChar(10)\n  UnitProcessLastActualStartDate DateTime? @satria.DateTime\n  UnitProcessLastPlanStartDate   DateTime? @satria.DateTime\n  IsHold                         Boolean\n  LastModified                   DateTime  @satria.DateTime\n\n  @@ignore\n}\n",
  "inlineSchemaHash": "9f441024811853d27a0a2ee7d0b3af8e96ff5a5160f4228edc178550d2f3eae9",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Process\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UnitID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MasterProcessID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PlanStartDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PlanEndDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ActualStartDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ActualEndDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IsHold\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HoldDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LastModified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LastModifiedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessAssign\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProcessAssign\",\"nativeType\":null,\"relationName\":\"ProcessToProcessAssign\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProcessActivity\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessAssignID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ReasonPauseID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ActivityDateTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ActualHours\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"18\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LastModified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LastModifiedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessAssign\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProcessAssign\",\"nativeType\":null,\"relationName\":\"ProcessActivityToProcessAssign\",\"relationFromFields\":[\"ProcessAssignID\"],\"relationToFields\":[\"ID\"],\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProcessAssign\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"UniqueIdentifier\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EmployeeNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LastModified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LastModifiedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessActivity\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProcessActivity\",\"nativeType\":null,\"relationName\":\"ProcessActivityToProcessAssign\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Process\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Process\",\"nativeType\":null,\"relationName\":\"ProcessToProcessAssign\",\"relationFromFields\":[\"ProcessID\"],\"relationToFields\":[\"ID\"],\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL_PATRIAPOWERAPPS: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL_PATRIAPOWERAPPS'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL_PATRIAPOWERAPPS || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

