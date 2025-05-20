
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
