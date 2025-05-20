
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
