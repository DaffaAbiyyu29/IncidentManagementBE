
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
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
  getRuntime,
  createParam,
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
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

exports.Prisma.VwPRO_2ScalarFieldEnum = {
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

exports.Prisma.VwProcessScalarFieldEnum = {
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

exports.Prisma.VwProcessActivityScalarFieldEnum = {
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

exports.Prisma.VwProcessAssign2AllScalarFieldEnum = {
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

exports.Prisma.VwProcessGroupScalarFieldEnum = {
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

exports.Prisma.VwProductScalarFieldEnum = {
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

exports.Prisma.VwUnitScalarFieldEnum = {
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

exports.Prisma.VwProductGroupScalarFieldEnum = {
  ProductGroupID: 'ProductGroupID',
  ProductGroupName: 'ProductGroupName',
  ProductGroupDescription: 'ProductGroupDescription',
  ProductGroupCapacity: 'ProductGroupCapacity',
  ProductGroupStartMonth: 'ProductGroupStartMonth',
  LastModified: 'LastModified'
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
    "previewFeatures": [
      "views"
    ],
    "sourceFilePath": "C:\\IncidentManagementBE\\prisma\\patriapowerapps.schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
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
  "inlineSchema": "generator satriaClient {\n  provider        = \"prisma-client-js\"\n  output          = \"../prisma/generated/satria-client-patriapowerapps\"\n  previewFeatures = [\"views\"]\n}\n\ndatasource satria {\n  provider = \"sqlserver\"\n  url      = env(\"DATABASE_URL_PATRIAPOWERAPPS\")\n}\n\nmodel Process {\n  ID              Int             @id(map: \"PK_Process\")\n  UnitID          Int\n  MasterProcessID Int\n  Status          Int\n  PlanStartDate   DateTime        @satria.DateTime\n  PlanEndDate     DateTime?       @satria.DateTime\n  ActualStartDate DateTime?       @satria.DateTime\n  ActualEndDate   DateTime?       @satria.DateTime\n  IsHold          Boolean\n  HoldDate        DateTime?       @satria.DateTime\n  Created         DateTime        @satria.DateTime\n  CreatedBy       String          @satria.VarChar(100)\n  LastModified    DateTime        @satria.DateTime\n  LastModifiedBy  String          @satria.VarChar(100)\n  ProcessAssign   ProcessAssign[]\n}\n\nmodel ProcessActivity {\n  ID               Int           @id(map: \"PK_ProcessActivity\")\n  ProcessAssignID  Int\n  Status           Int\n  ReasonPauseID    Int?\n  ActivityDateTime DateTime      @satria.DateTime\n  ActualHours      Decimal?      @satria.Decimal(18, 2)\n  Created          DateTime      @satria.DateTime\n  CreatedBy        String        @satria.VarChar(100)\n  LastModified     DateTime      @satria.DateTime\n  LastModifiedBy   String        @satria.VarChar(100)\n  ProcessAssign    ProcessAssign @relation(fields: [ProcessAssignID], references: [ID], onUpdate: NoAction, map: \"FK_ProcessActivity_ProcessAssign\")\n}\n\nmodel ProcessAssign {\n  ID              Int               @id(map: \"PK_ProcessAssign\")\n  ProcessID       Int\n  UserID          String            @satria.UniqueIdentifier\n  EmployeeNumber  String?           @satria.VarChar(50)\n  Status          Int\n  Type            Int?\n  Created         DateTime          @satria.DateTime\n  CreatedBy       String            @satria.VarChar(100)\n  LastModified    DateTime          @satria.DateTime\n  LastModifiedBy  String            @satria.VarChar(100)\n  remark          String?           @satria.VarChar(255)\n  ProcessActivity ProcessActivity[]\n  Process         Process           @relation(fields: [ProcessID], references: [ID], onUpdate: NoAction, map: \"FK_ProcessAssign_Process\")\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel vwPRO_2 {\n  ID             Int      @unique\n  Number         String   @satria.VarChar(100)\n  ProductID      Int\n  Quantity       Int\n  DueDate        DateTime @satria.DateTime\n  Created        DateTime @satria.DateTime\n  CreatedBy      String   @satria.VarChar(100)\n  LastModified   DateTime @satria.DateTime\n  LastModifiedBy String   @satria.VarChar(100)\n\n  vwUnit vwUnit[]\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel vwProcess {\n  ProcessID              Int       @unique\n  UnitID                 Int\n  ProcessStatus          String?   @satria.VarChar(8)\n  ProcessPlanStartDate   DateTime? @satria.Date\n  ProcessPlanEndDate     DateTime? @satria.Date\n  ProcessPlanDuration    Int?\n  ProcessActualStartDate DateTime? @satria.Date\n  ProcessActualEndDate   DateTime? @satria.Date\n  ProcessActualDuration  Int?\n  MasterProcessName      String?   @satria.VarChar(100)\n  StandardMH             Decimal?  @satria.Decimal(18, 4)\n  ProcessGroupName       String?   @satria.VarChar(100)\n  ProcessDelayInDay      Int?\n  ProcessOrder           Int?\n  LastModified           DateTime  @satria.DateTime\n  MasterProcessID        Int\n\n  vwUnit vwUnit @relation(fields: [UnitID], references: [UnitID], onUpdate: NoAction, map: \"fk_unit\")\n\n  vwProcessAssign vwProcessAssign2All[]\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel vwProcessActivity {\n  atasan                     String   @satria.VarChar(100)\n  EmployeeNumber             String?  @satria.VarChar(50)\n  ActivityDateTime           DateTime @satria.DateTime\n  ProcessActivityID          Int      @unique\n  ProcessAssignID            Int\n  ProcessActivityName        String   @satria.VarChar(100)\n  ProcessActivityStatus      String?  @satria.VarChar(17)\n  ProcessActivityReasonPause String   @satria.VarChar(100)\n  ActualHoursNonProductive   Int?\n  ProcessActivityActualHours Decimal? @satria.Decimal(18, 2)\n  ProcessActivityDateTime    DateTime @satria.DateTime\n  LastModifiedBy             String   @satria.VarChar(100)\n  LastModified               DateTime @satria.DateTime\n\n  vwProcessAssign vwProcessAssign2All @relation(fields: [ProcessAssignID], references: [ID], onUpdate: NoAction, map: \"fk_vwProcessAssign_activity\")\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel vwProcessAssign2All {\n  ID                  Int       @unique\n  ProcessID           Int\n  UnitID              Int?\n  LeaderName          String    @satria.VarChar(100)\n  OperatorName        String?   @satria.VarChar(100)\n  NRP                 String?   @satria.VarChar(100)\n  TglAssign           DateTime  @satria.DateTime\n  ProcessassignStatus String?   @satria.VarChar(17)\n  Startassign         String?   @satria.VarChar(10)\n  Stopassign          String?   @satria.VarChar(4)\n  ProcessAssignType   String?   @satria.VarChar(12)\n  LastModified        DateTime  @satria.DateTime\n  lastStart           DateTime? @satria.DateTime\n  lastStop            DateTime? @satria.DateTime\n  remark              String?   @satria.VarChar(255)\n  IsActive            Boolean?\n\n  vwProcess         vwProcess           @relation(fields: [ProcessID], references: [ProcessID], onUpdate: NoAction, map: \"fk_vwProcess_assign\")\n  vwProcessActivity vwProcessActivity[]\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel vwProcessGroup {\n  UnitID                      Int       @unique\n  ProcessGroupNameSort        Int?\n  ProcessGroupName            String?   @satria.VarChar(100)\n  ProcessGroupPlanStartDate   DateTime? @satria.Date\n  ProcessGroupPlanEndDate     DateTime? @satria.Date\n  ProcessGroupPlanDuration    Int?\n  ProcessGroupActualStartDate DateTime? @satria.Date\n  ProcessGroupActualEndDate   DateTime? @satria.Date\n  ProcessGroupActualDuration  Int?\n  ProcessGroupDelayInDay      Int?\n  LastModified                DateTime? @satria.DateTime\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel vwProduct {\n  ProductID              Int      @unique\n  ProductGroupID         Int\n  ProductName            String   @satria.VarChar(100)\n  ProductPN              String   @satria.VarChar(100)\n  ProductTotalDay        Int?\n  ProductSubGroupName    String   @satria.VarChar(100)\n  ProductSubGroupSAPCode String   @satria.VarChar(10)\n  ProductStandardHours   Decimal? @satria.Decimal(38, 4)\n  LastModified           DateTime @satria.DateTime\n\n  vwProductGroup vwProductGroup @relation(fields: [ProductGroupID], references: [ProductGroupID], onUpdate: NoAction, map: \"fk_vwProductGroup\")\n\n  vwUnit vwUnit[]\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel vwUnit {\n  UnitID                         Int       @unique\n  PROID                          Int\n  ProductID                      Int\n  UnitSerialNumber               String    @satria.VarChar(100)\n  UnitChasisNumber               String?   @satria.VarChar(100)\n  UnitDueDate                    DateTime  @satria.DateTime\n  UnitPlanStartDate              DateTime? @satria.Date\n  UnitPlanEndDate                DateTime? @satria.Date\n  UnitPlanDuration               Int?\n  UnitActualStartDate            DateTime? @satria.Date\n  UnitActualEndDate              DateTime? @satria.Date\n  UnitActualDuration             Int?\n  Unit_Status                    String    @satria.VarChar(16)\n  UnitMPSDueDate                 DateTime? @satria.DateTime\n  UnitActualDeliveryDate         DateTime? @satria.Date\n  UnitActualHoursCompleted       Decimal?  @satria.Decimal(38, 6)\n  UnitDelayInDay                 Int?\n  SOUnitprice                    Decimal?  @satria.Decimal(18, 0)\n  SalesOrderID                   Int?\n  UnitProcessLastStatus          String    @satria.VarChar(10)\n  UnitProcessLastActualStartDate DateTime? @satria.DateTime\n  UnitProcessLastPlanStartDate   DateTime? @satria.DateTime\n  IsHold                         Boolean\n  LastModified                   DateTime  @satria.DateTime\n\n  vwPRO     vwPRO_2   @relation(fields: [PROID], references: [ID], onUpdate: NoAction, map: \"fk_pro\")\n  vwProduct vwProduct @relation(fields: [ProductID], references: [ProductID], onUpdate: NoAction, map: \"fk_product\")\n\n  vwProcess vwProcess[]\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel vwProductGroup {\n  ProductGroupID          Int       @unique\n  ProductGroupName        String    @satria.VarChar(100)\n  ProductGroupDescription String    @satria.VarChar(Max)\n  ProductGroupCapacity    Int?\n  ProductGroupStartMonth  DateTime? @satria.DateTime\n  LastModified            DateTime  @satria.DateTime\n\n  vwProduct vwProduct[]\n}\n\n/// The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nview View_1 {\n  ProcessID         Int\n  ProcessAssignID   Int\n  ProcessActivityID Int\n  ActualHours       Decimal? @satria.Decimal(18, 2)\n\n  @@ignore\n}\n",
  "inlineSchemaHash": "58d2b20deec4591c4954ed6aa1d061a162f84831c89caf75ce059e52618e80b6",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Process\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UnitID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MasterProcessID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PlanStartDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PlanEndDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ActualStartDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ActualEndDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IsHold\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HoldDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LastModified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LastModifiedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessAssign\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProcessAssign\",\"nativeType\":null,\"relationName\":\"ProcessToProcessAssign\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProcessActivity\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessAssignID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ReasonPauseID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ActivityDateTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ActualHours\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"18\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LastModified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LastModifiedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessAssign\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProcessAssign\",\"nativeType\":null,\"relationName\":\"ProcessActivityToProcessAssign\",\"relationFromFields\":[\"ProcessAssignID\"],\"relationToFields\":[\"ID\"],\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProcessAssign\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"UniqueIdentifier\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EmployeeNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LastModified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LastModifiedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessActivity\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProcessActivity\",\"nativeType\":null,\"relationName\":\"ProcessActivityToProcessAssign\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Process\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Process\",\"nativeType\":null,\"relationName\":\"ProcessToProcessAssign\",\"relationFromFields\":[\"ProcessID\"],\"relationToFields\":[\"ID\"],\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"vwPRO_2\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProductID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DueDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LastModified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LastModifiedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vwUnit\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"vwUnit\",\"nativeType\":null,\"relationName\":\"vwPRO_2TovwUnit\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"vwProcess\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ProcessID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UnitID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessStatus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"8\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessPlanStartDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessPlanEndDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessPlanDuration\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessActualStartDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessActualEndDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessActualDuration\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MasterProcessName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"StandardMH\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"18\",\"4\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessGroupName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessDelayInDay\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessOrder\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LastModified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MasterProcessID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vwUnit\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"vwUnit\",\"nativeType\":null,\"relationName\":\"vwProcessTovwUnit\",\"relationFromFields\":[\"UnitID\"],\"relationToFields\":[\"UnitID\"],\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vwProcessAssign\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"vwProcessAssign2All\",\"nativeType\":null,\"relationName\":\"vwProcessTovwProcessAssign2All\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"vwProcessActivity\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"atasan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EmployeeNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ActivityDateTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessActivityID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessAssignID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessActivityName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessActivityStatus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"17\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessActivityReasonPause\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ActualHoursNonProductive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessActivityActualHours\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"18\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessActivityDateTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LastModifiedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LastModified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vwProcessAssign\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"vwProcessAssign2All\",\"nativeType\":null,\"relationName\":\"vwProcessActivityTovwProcessAssign2All\",\"relationFromFields\":[\"ProcessAssignID\"],\"relationToFields\":[\"ID\"],\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"vwProcessAssign2All\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UnitID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LeaderName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OperatorName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TglAssign\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessassignStatus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"17\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Startassign\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Stopassign\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"4\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessAssignType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"12\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LastModified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastStart\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastStop\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IsActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vwProcess\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"vwProcess\",\"nativeType\":null,\"relationName\":\"vwProcessTovwProcessAssign2All\",\"relationFromFields\":[\"ProcessID\"],\"relationToFields\":[\"ProcessID\"],\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vwProcessActivity\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"vwProcessActivity\",\"nativeType\":null,\"relationName\":\"vwProcessActivityTovwProcessAssign2All\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"vwProcessGroup\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"UnitID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessGroupNameSort\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessGroupName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessGroupPlanStartDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessGroupPlanEndDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessGroupPlanDuration\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessGroupActualStartDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessGroupActualEndDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessGroupActualDuration\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessGroupDelayInDay\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LastModified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"vwProduct\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ProductID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProductGroupID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProductName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProductPN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProductTotalDay\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProductSubGroupName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProductSubGroupSAPCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProductStandardHours\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"38\",\"4\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LastModified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vwProductGroup\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"vwProductGroup\",\"nativeType\":null,\"relationName\":\"vwProductTovwProductGroup\",\"relationFromFields\":[\"ProductGroupID\"],\"relationToFields\":[\"ProductGroupID\"],\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vwUnit\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"vwUnit\",\"nativeType\":null,\"relationName\":\"vwProductTovwUnit\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"vwUnit\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"UnitID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PROID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProductID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UnitSerialNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UnitChasisNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UnitDueDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UnitPlanStartDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UnitPlanEndDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UnitPlanDuration\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UnitActualStartDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UnitActualEndDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UnitActualDuration\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Unit_Status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"16\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UnitMPSDueDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UnitActualDeliveryDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UnitActualHoursCompleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"38\",\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UnitDelayInDay\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SOUnitprice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"18\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SalesOrderID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UnitProcessLastStatus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UnitProcessLastActualStartDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UnitProcessLastPlanStartDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IsHold\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LastModified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vwPRO\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"vwPRO_2\",\"nativeType\":null,\"relationName\":\"vwPRO_2TovwUnit\",\"relationFromFields\":[\"PROID\"],\"relationToFields\":[\"ID\"],\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vwProduct\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"vwProduct\",\"nativeType\":null,\"relationName\":\"vwProductTovwUnit\",\"relationFromFields\":[\"ProductID\"],\"relationToFields\":[\"ProductID\"],\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vwProcess\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"vwProcess\",\"nativeType\":null,\"relationName\":\"vwProcessTovwUnit\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"vwProductGroup\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ProductGroupID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProductGroupName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProductGroupDescription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"Max\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProductGroupCapacity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProductGroupStartMonth\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LastModified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vwProduct\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"vwProduct\",\"nativeType\":null,\"relationName\":\"vwProductTovwProductGroup\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

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

