
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
} = require('./runtime/library.js')


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




  const path = require('path')

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

exports.Prisma.DataFBL5NScalarFieldEnum = {
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

exports.Prisma.DataVF04ScalarFieldEnum = {
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

exports.Prisma.ExcelBaseUrlScalarFieldEnum = {
  id: 'id',
  guid: 'guid',
  excelName: 'excelName',
  url: 'url',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ExcelSheetScalarFieldEnum = {
  id: 'id',
  guid: 'guid',
  sheetName: 'sheetName',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.LogScalarFieldEnum = {
  id: 'id',
  guid: 'guid',
  name: 'name',
  type: 'type',
  row: 'row',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Ms_usersScalarFieldEnum = {
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

exports.Prisma.Schedule_RecommendationScalarFieldEnum = {
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

exports.Prisma.SiteRouteScalarFieldEnum = {
  id: 'id',
  guid: 'guid',
  baseUrl: 'baseUrl',
  siteName: 'siteName',
  url: 'url',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SysdiagramsScalarFieldEnum = {
  name: 'name',
  principal_id: 'principal_id',
  diagram_id: 'diagram_id',
  version: 'version',
  definition: 'definition'
};

exports.Prisma.Trx_PICAScalarFieldEnum = {
  PICAID: 'PICAID',
  IncidentID: 'IncidentID',
  created_at: 'created_at',
  created_by: 'created_by',
  update_at: 'update_at',
  update_by: 'update_by'
};

exports.Prisma.Trx_DetailPICAScalarFieldEnum = {
  DetailPICAID: 'DetailPICAID',
  PICAID: 'PICAID',
  Status: 'Status',
  Problem: 'Problem',
  RootCaused: 'RootCaused',
  CorrectiveAction: 'CorrectiveAction',
  PreventiveAction: 'PreventiveAction'
};

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  guid: 'guid',
  name: 'name',
  username: 'username',
  password: 'password',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Trx_LogHistoryScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
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
      "value": "C:\\IncidentManagementBE\\prisma\\generated\\satria-client",
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
    "sourceFilePath": "C:\\IncidentManagementBE\\prisma\\satria.schema.prisma",
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
        "fromEnvVar": "DATABASE_URL_SATRIA",
        "value": null
      }
    }
  },
  "inlineSchema": "generator satriaClient {\n  provider = \"prisma-client-js\"\n  output   = \"../prisma/generated/satria-client\"\n}\n\ndatasource satria {\n  provider = \"sqlserver\"\n  url      = env(\"DATABASE_URL_SATRIA\")\n}\n\nmodel DataFBL5N {\n  ID                  BigInt    @id(map: \"PK_DataFBL5N\") @default(autoincrement())\n  GLAccount           String?   @satria.VarChar(50)\n  Reference           String?   @satria.VarChar(50)\n  Assignment          String?   @satria.VarChar(50)\n  DocumentNumber      String?   @satria.VarChar(50)\n  DocumentType        String?   @satria.VarChar(50)\n  PostingDate         DateTime? @satria.Date\n  ClearingDate        DateTime? @satria.Date\n  DocumentDate        DateTime? @satria.Date\n  NetDueDate          DateTime? @satria.Date\n  SpecialGLInd        String?   @satria.VarChar(50)\n  BusinessArea        String?   @satria.VarChar(50)\n  Plant               String?   @satria.VarChar(50)\n  ProfitCenter        String?   @satria.VarChar(50)\n  Account             String?   @satria.VarChar(50)\n  CustomerName        String?   @satria.VarChar(50)\n  AmountDocCurr       Float?\n  DocumentCurrency    String?   @satria.VarChar(50)\n  AmountLocalCurrency Float?\n  LocalCurrency       String?   @satria.VarChar(50)\n  ReverseClearing     String?   @satria.VarChar(50)\n  PostingKey          String?   @satria.VarChar(50)\n  DebitCreditInd      String?   @satria.VarChar(50)\n  ClearingDocument    String?   @satria.VarChar(50)\n  Username            String?   @satria.VarChar(50)\n  Text                String?   @satria.VarChar(50)\n  CompanyCode         String?   @satria.VarChar(50)\n  created_at          DateTime? @satria.DateTime\n  updated_at          DateTime  @satria.DateTime\n}\n\nmodel DataVF04 {\n  ID                  BigInt    @id(map: \"PK_DataVF04\") @default(autoincrement())\n  BillCategory        String?   @satria.VarChar(50)\n  SalesOrg            BigInt?\n  BillDate            DateTime? @satria.Date\n  SoldToParty         String?   @satria.VarChar(50)\n  BillType            String?   @satria.VarChar(50)\n  Country             String?   @satria.VarChar(50)\n  SalesDocument       BigInt?\n  DistributionChannel BigInt?\n  Division            BigInt?\n  DocCategory         String?   @satria.VarChar(50)\n  Address             BigInt?\n  NameSoldToParty     String?   @satria.VarChar(150)\n  LocSoldToParty      String?   @satria.VarChar(150)\n  SortTerm            String?   @satria.VarChar(50)\n  ItemsRead           String?   @satria.VarChar(50)\n  Counter             String?   @satria.VarChar(50)\n  ShippingPoint       String?   @satria.VarChar(50)\n  PODStatus           String?   @satria.VarChar(50)\n  NetValue            String?   @satria.VarChar(50)\n  DocCurrency         String?   @satria.VarChar(50)\n  SDDocumentType      String?   @satria.VarChar(50)\n  NameSDType          String?   @satria.VarChar(50)\n  BDRSrcDoc           String?   @satria.VarChar(50)\n  RefSys              String?   @satria.VarChar(50)\n  DraftMode           String?   @satria.VarChar(50)\n  DBDRef              String?   @satria.VarChar(50)\n  SolutionOrder       String?   @satria.VarChar(50)\n  BillDate2           DateTime? @satria.Date\n  BillType2           String?   @satria.VarChar(50)\n  Groups              String?   @satria.VarChar(50)\n  PONumber            String?   @satria.VarChar(50)\n  ShippingPointDesc   String?   @satria.VarChar(50)\n  SOPOAmount          Float?\n  Exrate              Float?\n  created_at          DateTime? @satria.DateTime\n  updated_at          DateTime? @satria.DateTime\n}\n\nmodel excelBaseUrl {\n  id         Int          @id @default(autoincrement())\n  guid       String       @unique\n  excelName  String?\n  url        String?      @unique\n  created_at DateTime\n  updated_at DateTime\n  excelSheet excelSheet[]\n}\n\nmodel excelSheet {\n  id           Int          @id @default(autoincrement())\n  guid         String\n  sheetName    String?\n  created_at   DateTime\n  updated_at   DateTime\n  excelBaseUrl excelBaseUrl @relation(fields: [guid], references: [guid], onDelete: Cascade)\n}\n\nmodel log {\n  id         Int      @id @default(autoincrement())\n  guid       String?  @unique\n  name       String?\n  type       String?\n  row        Int?\n  created_at DateTime\n  updated_at DateTime\n}\n\nmodel ms_users {\n  id                                              Int              @id(map: \"PK_ms_users\") @default(autoincrement())\n  name                                            String?          @unique(map: \"IX_ms_users_name\") @satria.VarChar(100)\n  username                                        String?          @unique(map: \"IX_ms_users_username\") @satria.VarChar(255)\n  password                                        String?          @satria.VarChar(255)\n  divisi                                          String?          @satria.VarChar(100)\n  departemen                                      String?          @satria.VarChar(100)\n  email                                           String?          @satria.VarChar(100)\n  role                                            Int?\n  created_at                                      DateTime?        @satria.Date\n  updated_at                                      DateTime?        @satria.Date\n  trx_LogHistory_trx_LogHistory_PICBAToms_users   trx_LogHistory[] @relation(\"trx_LogHistory_PICBAToms_users\")\n  trx_LogHistory_trx_LogHistory_PICUserToms_users trx_LogHistory[] @relation(\"trx_LogHistory_PICUserToms_users\")\n}\n\nmodel Schedule_Recommendation {\n  PN                           String    @id(map: \"PK_Schedule_Recommendation\") @satria.NVarChar(400)\n  PRO                          BigInt?\n  Product                      String?   @satria.NVarChar(4000)\n  ProductGroup                 String?   @satria.NVarChar(4000)\n  Process                      String?   @satria.NVarChar(4000)\n  Dependency                   String?   @satria.NVarChar(4000)\n  Maksimal_Produksi_per_Base   Float?    @map(\"Maksimal Produksi per-Base\")\n  ProcessOrder                 String?   @satria.NVarChar(4000)\n  PlanStartDate                DateTime?\n  PlanEndDate                  DateTime?\n  Start_Date                   DateTime? @map(\"Start Date\")\n  End_Date                     DateTime? @map(\"End Date\")\n  Estimated_Material_Arrived   DateTime? @map(\"Estimated Material Arrived\")\n  Lead_Time_Process_Standar    Float?    @map(\"Lead Time Process Standar\")\n  Lead_Time_Estimation_Process Float?    @map(\"Lead Time Estimation Process\")\n  Process_Status               String?   @map(\"Process Status\") @satria.NVarChar(4000)\n  MPSDueDate                   DateTime?\n  Finished_Prediction          DateTime? @map(\"Finished Prediction\")\n  Status_Unit_Delivery         String?   @map(\"Status Unit Delivery\") @satria.NVarChar(4000)\n  Capacity_Utilization         Float?    @map(\"Capacity Utilization\")\n  Status_Capacity              String?   @map(\"Status Capacity\") @satria.NVarChar(4000)\n  Status_Material              String?   @map(\"Status Material\") @satria.NVarChar(4000)\n}\n\nmodel siteRoute {\n  id         Int      @id @default(autoincrement())\n  guid       String   @unique\n  baseUrl    String?\n  siteName   String?  @unique\n  url        String?  @unique\n  created_at DateTime\n  updated_at DateTime\n}\n\nmodel sysdiagrams {\n  name         String @satria.NVarChar(128)\n  principal_id Int\n  diagram_id   Int    @id(map: \"PK__sysdiagr__C2B05B61632F454B\") @default(autoincrement())\n  version      Int?\n  definition   Bytes?\n\n  @@unique([principal_id, name], map: \"UK_principal_name\")\n}\n\nmodel trx_PICA {\n  PICAID         Int              @id(map: \"PK__trx_PICA__3214EC277441A7ED\") @default(autoincrement())\n  IncidentID     Int\n  created_at     DateTime?        @satria.Date\n  created_by     Int?\n  update_at      DateTime?        @satria.Date\n  update_by      Int?\n  trx_LogHistory trx_LogHistory?  @relation(fields: [IncidentID], references: [ID], onDelete: NoAction, onUpdate: NoAction, map: \"FK_trx_PICA_trx_LogHistory\")\n  trx_DetailPICA trx_DetailPICA[]\n}\n\nmodel trx_DetailPICA {\n  DetailPICAID     Int       @id(map: \"PK__trx_DetailPICA__3214EC27AAA12345\")\n  PICAID           Int?\n  Status           String?   @satria.VarChar(100)\n  Problem          String?   @satria.VarChar(255)\n  RootCaused       String?   @satria.VarChar(255)\n  CorrectiveAction String?   @satria.VarChar(255)\n  PreventiveAction String?   @satria.VarChar(255)\n  trx_PICA         trx_PICA? @relation(fields: [PICAID], references: [PICAID], onDelete: NoAction, onUpdate: NoAction, map: \"FK_trx_DetailPICA_trx_PICA\")\n}\n\nmodel users {\n  id         Int      @id @default(autoincrement())\n  guid       String   @unique\n  name       String   @unique\n  username   String   @unique\n  password   String\n  created_at DateTime\n  updated_at DateTime\n}\n\nmodel trx_LogHistory {\n  ID               Int        @id(map: \"PK__ms_LogHi__3214EC27EF177441\") @default(autoincrement())\n  UnitSerialNumber String?\n  SalesDocument    Int?\n  DocumentNumber   Int?\n  POID             Int?\n  PROID            Int?\n  Description      String?    @satria.VarChar(255)\n  IncidentType     String?    @satria.VarChar(100)\n  PICBA            Int?\n  BAEmailDate      DateTime?  @satria.Date\n  BAEmailStatus    String?    @satria.VarChar(100)\n  PICUser          Int?\n  UserEmailDate    DateTime?  @satria.Date\n  UserEmailStatus  String?    @satria.VarChar(100)\n  OpenDate         DateTime?  @satria.Date\n  CloseDate        DateTime?  @satria.Date\n  FeedbackBA       String?    @satria.VarChar(255)\n  FeedbackBADate   DateTime?  @satria.Date\n  FeedbackUser     String?    @satria.VarChar(255)\n  FeedbackUserDate DateTime?  @satria.Date\n  FlagStatus       Int?\n  Status           String?    @satria.VarChar(100)\n  pic_ba           ms_users?  @relation(\"trx_LogHistory_PICBAToms_users\", fields: [PICBA], references: [id], onDelete: NoAction, onUpdate: NoAction, map: \"FK_trx_LogHistory_ms_users\")\n  pic_user         ms_users?  @relation(\"trx_LogHistory_PICUserToms_users\", fields: [PICUser], references: [id], onDelete: NoAction, onUpdate: NoAction, map: \"FK_trx_LogHistory_ms_users1\")\n  trx_PICA         trx_PICA[]\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel DataZMMR017 {\n  ID                                BigInt\n  PRNo                              String?   @satria.VarChar(50)\n  PRType                            String?   @satria.VarChar(50)\n  PRItemNo                          String?   @satria.VarChar(50)\n  PRQty                             Float?\n  PRCreatedDate                     DateTime? @satria.Date\n  PRCreatedBy                       String?   @satria.VarChar(50)\n  POType2                           String?   @satria.VarChar(50)\n  PONo2                             String?   @satria.VarChar(50)\n  PODocDate                         DateTime? @satria.Date\n  POReleaseDate                     DateTime? @satria.Date\n  POItemNo2                         String?   @satria.VarChar(50)\n  MaterialCode                      String?   @satria.VarChar(150)\n  MaterialDescription               String?   @satria.VarChar(150)\n  POQty2                            Float?\n  POPrice                           Float?\n  TotalPOPriceItem                  Float?\n  CustomerPlant                     String?   @satria.VarChar(50)\n  Vendor                            String?   @satria.VarChar(50)\n  VendorPlant                       String?   @satria.VarChar(50)\n  QuotationPOUTPE                   String?   @satria.VarChar(50)\n  QuotationDate                     DateTime? @satria.Date\n  QuotationItemPOUTPE               String?   @satria.VarChar(50)\n  StatusPOApprovalUTPE              String?   @satria.VarChar(50)\n  ApprovalUnapprovalDateUTPE        DateTime? @satria.Date\n  PODCatasRC                        String?   @satria.VarChar(50)\n  DOReturnTSP                       String?   @satria.VarChar(50)\n  DODateReturnTSP                   DateTime? @satria.Date\n  GIReturnTSP                       String?   @satria.VarChar(50)\n  GIDateReturnTSP                   DateTime? @satria.Date\n  GIStatusReturnTSP                 String?   @satria.VarChar(50)\n  SOReturnUTPE                      String?   @satria.VarChar(50)\n  SOReturnDate                      DateTime? @satria.Date\n  DOReturnUTPE                      String?   @satria.VarChar(50)\n  DOReturnDateUTPE                  DateTime? @satria.Date\n  GRReturnUTPE                      String?   @satria.VarChar(50)\n  GRReturnDateUTPE                  DateTime? @satria.Date\n  POReplacementTSP                  String?   @satria.VarChar(50)\n  POReplacementDate                 DateTime? @satria.Date\n  SOReplacementUTPE                 String?   @satria.VarChar(50)\n  SOReplacementDateUTPE             DateTime? @satria.Date\n  DOReplacementUTPE                 String?   @satria.VarChar(50)\n  DOReplacementDateUTPE             DateTime? @satria.Date\n  GIReplacementUTPE                 String?   @satria.VarChar(50)\n  GIReplacementDateUTPE             DateTime? @satria.Date\n  GIROReplacementStatusUTPE         String?   @satria.VarChar(50)\n  GRPOReplacementTSP                String?   @satria.VarChar(50)\n  GRPOReplacementDate               DateTime? @satria.Date\n  StatusReturnReplacementTSPtOUTPE  String?   @satria.VarChar(50)\n  POSToPartUTPE                     String?   @satria.VarChar(50)\n  POSToDate                         DateTime? @satria.Date\n  DOSTOUTPE                         String?   @satria.VarChar(50)\n  DODateSTOUTPE                     DateTime? @satria.Date\n  GIDocDOSTOUTPE                    String?   @satria.VarChar(50)\n  GIDocDateSTO                      DateTime? @satria.Date\n  STATUSGISTOUTPE                   String?   @satria.VarChar(50)\n  GRDocDOSTOUTPE                    String?   @satria.VarChar(50)\n  GRDocDateSTOUTPE                  DateTime? @satria.Date\n  StatusGRSTO                       String?   @satria.VarChar(50)\n  PROUTPE                           String?   @satria.VarChar(50)\n  PRODateUTPE                       DateTime? @satria.Date\n  SistemStatusPROUTPE               String?   @satria.VarChar(50)\n  TECODatePROUTPE                   DateTime? @satria.Date\n  SROUTPE                           String?   @satria.VarChar(50)\n  SRODate                           DateTime? @satria.Date\n  SubOrder                          String?   @satria.VarChar(50)\n  QuotationSROROUTPE                Float?\n  QuotationAmountAktualCostSRO      Float?\n  QuotationFinal                    Float?\n  BillingRequestSONo                String?   @satria.VarChar(50)\n  SistemStatusSROUTPE               String?   @satria.VarChar(50)\n  TECODateSRO                       DateTime? @satria.Date\n  SerialNumberInventorySROsurcharge String?   @satria.VarChar(50)\n  GRPRONo                           String?   @satria.VarChar(50)\n  GRPRODate                         DateTime? @satria.Date\n  SOSurchargeUTPE                   String?   @satria.VarChar(50)\n  SODocDate                         DateTime? @satria.Date\n  DOIntercompany                    String?   @satria.VarChar(50)\n  DOIntercompanyDate                DateTime? @satria.Date\n  GIInterco                         String?   @satria.VarChar(50)\n  GIIntercoDate                     DateTime? @satria.Date\n  StatusGIInterco                   String?   @satria.VarChar(50)\n  GRInterco                         String?   @satria.VarChar(50)\n  GRIntercoDate                     DateTime? @satria.Date\n  StatusGRInterco                   String?   @satria.VarChar(50)\n  BillingIntercompany               String?   @satria.VarChar(50)\n  BillingDate                       DateTime? @satria.Date\n  InvoiceReceipt                    String?   @satria.VarChar(50)\n  InvoiceDate                       DateTime? @satria.Date\n  AccountingDoc                     String?   @satria.VarChar(50)\n  PaymentDoc                        String?   @satria.VarChar(50)\n  PaymentDate                       DateTime? @satria.Date\n  DeliveryDate                      DateTime? @satria.Date\n  created_at                        DateTime? @satria.DateTime\n  updated_at                        DateTime? @satria.DateTime\n\n  @@ignore\n}\n",
  "inlineSchemaHash": "e451c0187dc8d646c38a9782f513f6aea9c8a00359f1154bc4bf0a42c708560c",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/generated/satria-client",
    "generated/satria-client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"DataFBL5N\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GLAccount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Reference\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Assignment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DocumentNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DocumentType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PostingDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ClearingDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DocumentDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NetDueDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SpecialGLInd\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BusinessArea\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Plant\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProfitCenter\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Account\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CustomerName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AmountDocCurr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DocumentCurrency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AmountLocalCurrency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LocalCurrency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ReverseClearing\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PostingKey\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DebitCreditInd\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ClearingDocument\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CompanyCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DataVF04\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BillCategory\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SalesOrg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BillDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SoldToParty\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BillType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Country\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SalesDocument\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DistributionChannel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Division\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DocCategory\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NameSoldToParty\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"150\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LocSoldToParty\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"150\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SortTerm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ItemsRead\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Counter\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ShippingPoint\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PODStatus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NetValue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DocCurrency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SDDocumentType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NameSDType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BDRSrcDoc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RefSys\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DraftMode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DBDRef\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SolutionOrder\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BillDate2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BillType2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Groups\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PONumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ShippingPointDesc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SOPOAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Exrate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"excelBaseUrl\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"guid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"excelName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"excelSheet\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"excelSheet\",\"nativeType\":null,\"relationName\":\"excelBaseUrlToexcelSheet\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"excelSheet\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"guid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sheetName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"excelBaseUrl\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"excelBaseUrl\",\"nativeType\":null,\"relationName\":\"excelBaseUrlToexcelSheet\",\"relationFromFields\":[\"guid\"],\"relationToFields\":[\"guid\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"log\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"guid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"row\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ms_users\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"divisi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"departemen\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trx_LogHistory_trx_LogHistory_PICBAToms_users\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"trx_LogHistory\",\"nativeType\":null,\"relationName\":\"trx_LogHistory_PICBAToms_users\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trx_LogHistory_trx_LogHistory_PICUserToms_users\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"trx_LogHistory\",\"nativeType\":null,\"relationName\":\"trx_LogHistory_PICUserToms_users\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Schedule_Recommendation\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"PN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"400\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Product\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"4000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProductGroup\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"4000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Process\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"4000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Dependency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"4000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Maksimal_Produksi_per_Base\",\"dbName\":\"Maksimal Produksi per-Base\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProcessOrder\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"4000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PlanStartDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PlanEndDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Start_Date\",\"dbName\":\"Start Date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"End_Date\",\"dbName\":\"End Date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Estimated_Material_Arrived\",\"dbName\":\"Estimated Material Arrived\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Lead_Time_Process_Standar\",\"dbName\":\"Lead Time Process Standar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Lead_Time_Estimation_Process\",\"dbName\":\"Lead Time Estimation Process\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Process_Status\",\"dbName\":\"Process Status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"4000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MPSDueDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Finished_Prediction\",\"dbName\":\"Finished Prediction\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Status_Unit_Delivery\",\"dbName\":\"Status Unit Delivery\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"4000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Capacity_Utilization\",\"dbName\":\"Capacity Utilization\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Status_Capacity\",\"dbName\":\"Status Capacity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"4000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Status_Material\",\"dbName\":\"Status Material\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"4000\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"siteRoute\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"guid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"baseUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"siteName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"sysdiagrams\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"principal_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"diagram_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"version\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"definition\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"principal_id\",\"name\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"principal_id\",\"name\"]}],\"isGenerated\":false},\"trx_PICA\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"PICAID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IncidentID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"update_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trx_LogHistory\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"trx_LogHistory\",\"nativeType\":null,\"relationName\":\"trx_LogHistoryTotrx_PICA\",\"relationFromFields\":[\"IncidentID\"],\"relationToFields\":[\"ID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trx_DetailPICA\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"trx_DetailPICA\",\"nativeType\":null,\"relationName\":\"trx_DetailPICATotrx_PICA\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"trx_DetailPICA\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"DetailPICAID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PICAID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Problem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RootCaused\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CorrectiveAction\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PreventiveAction\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trx_PICA\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"trx_PICA\",\"nativeType\":null,\"relationName\":\"trx_DetailPICATotrx_PICA\",\"relationFromFields\":[\"PICAID\"],\"relationToFields\":[\"PICAID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"users\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"guid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"trx_LogHistory\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UnitSerialNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SalesDocument\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DocumentNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"POID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PROID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IncidentType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PICBA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BAEmailDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BAEmailStatus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PICUser\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserEmailDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserEmailStatus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OpenDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CloseDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FeedbackBA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FeedbackBADate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FeedbackUser\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FeedbackUserDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FlagStatus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pic_ba\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ms_users\",\"nativeType\":null,\"relationName\":\"trx_LogHistory_PICBAToms_users\",\"relationFromFields\":[\"PICBA\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pic_user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ms_users\",\"nativeType\":null,\"relationName\":\"trx_LogHistory_PICUserToms_users\",\"relationFromFields\":[\"PICUser\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trx_PICA\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"trx_PICA\",\"nativeType\":null,\"relationName\":\"trx_LogHistoryTotrx_PICA\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma/generated/satria-client/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/satria-client/schema.prisma")
