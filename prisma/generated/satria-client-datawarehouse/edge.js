
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

exports.Prisma.ALL_POScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  ALL_PO: 'ALL_PO'
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
      "value": "C:\\IncidentManagementBE\\prisma\\generated\\satria-client-datawarehouse",
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
    "sourceFilePath": "C:\\IncidentManagementBE\\prisma\\datawarehouse.schema.prisma",
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
        "fromEnvVar": "DATABASE_URL_DATAWAREHOUSE",
        "value": null
      }
    }
  },
  "inlineSchema": "generator satriaClient {\n  provider = \"prisma-client-js\"\n  output   = \"../prisma/generated/satria-client-datawarehouse\"\n}\n\ndatasource satria {\n  provider = \"sqlserver\"\n  url      = env(\"DATABASE_URL_DATAWAREHOUSE\")\n}\n\nmodel ALL_PO {\n  prNumber         String    @id(map: \"PK_AllPro\") @map(\"PR Number\") @satria.VarChar(4000)\n  prType           String?   @map(\"PR Type\") @satria.VarChar(4000)\n  prDate           DateTime? @map(\"PR Date\") @satria.Date\n  prItem           String?   @map(\"PR Item\") @satria.VarChar(4000)\n  qtyPr            Float?    @map(\"Qty PR\") @satria.Float\n  uomQtyPr         String?   @map(\"UoM Qty PR\") @satria.VarChar(4000)\n  prPlant          String?   @map(\"PR Plant\") @satria.VarChar(4000)\n  prSloc           String?   @map(\"PR Sloc\") @satria.VarChar(4000)\n  deliveryDate     DateTime? @map(\"Delivery Date\") @satria.Date\n  trackingNumber   String?   @map(\"Tracking Number\") @satria.VarChar(4000)\n  prRequisitioner  String?   @map(\"PR Requisitioner\") @satria.VarChar(4000)\n  shortText        String?   @map(\"Short Text\") @satria.VarChar(4000)\n  materialNumber   String?   @map(\"Material Number\") @satria.VarChar(4000)\n  materialType     String?   @map(\"Material Type\") @satria.VarChar(4000)\n  brand            String?   @map(\"Brand\") @satria.VarChar(4000)\n  brandDescription String?   @map(\"Brand Description\") @satria.VarChar(4000)\n  poNo             String?   @map(\"PO No\") @satria.VarChar(4000)\n  poType           String?   @map(\"PO Type\") @satria.VarChar(4000)\n  vendorCode       String?   @map(\"Vendor Code\") @satria.VarChar(4000)\n  vendorName       String?   @map(\"Vendor Name\") @satria.VarChar(4000)\n  poDate           DateTime? @map(\"PO Date\") @satria.Date\n  paymentTerm      String?   @map(\"Payment Term\") @satria.VarChar(4000)\n  poReleaseStatus  String?   @map(\"PO Release Status\") @satria.VarChar(4000)\n  poItem           String?   @map(\"PO Item\") @satria.VarChar(4000)\n  plantPo          String?   @map(\"Plant PO\") @satria.VarChar(4000)\n  slocPo           String?   @map(\"Sloc PO\") @satria.VarChar(4000)\n  qtyPo            Float?    @map(\"Qty PO\") @satria.Float\n  uomQtyPo         String?   @map(\"UoM Qty PO\") @satria.VarChar(4000)\n  openQtyPo        Float?    @map(\"Open Qty PO\") @satria.Float\n  deliveryDatePo   DateTime? @map(\"Delivery Date PO\") @satria.Date\n  delvCompleted    String?   @map(\"Delv Completed\") @satria.VarChar(4000)\n  netPrice         Float?    @map(\"Net Price\") @satria.Float\n  totalValue       Float?    @map(\"Total Value\") @satria.Float\n  poTrackNo        String?   @map(\"PO Track No\") @satria.VarChar(4000)\n  lastGr101Date    DateTime? @map(\"Last GR 101 Date\") @satria.Date\n  gr101Qty         Int?      @map(\"GR 101 Qty\") @satria.Int // Diperbaiki: Integer -> Int\n  lastGr103Date    DateTime? @map(\"Last GR 103 Date\") @satria.Date\n  gr103Qty         Float?    @map(\"GR 103 Qty\") @satria.Float\n  lastGr105Date    DateTime? @map(\"Last GR 105 Date\") @satria.Date\n  gr105Qty         Float?    @map(\"GR 105 Qty\") @satria.Real\n  lastGr107Date    DateTime? @map(\"Last GR 107 Date\") @satria.Date\n  gr107Qty         Int?      @map(\"GR 107 Qty\") @satria.Int // Diperbaiki: Integer -> Int\n  lastGr109Date    DateTime? @map(\"Last GR 109 Date\") @satria.Date\n  gr109Qty         Float?    @map(\"GR 109 Qty\") @satria.Real\n  lastIrDate       DateTime? @map(\"Last IR Date\") @satria.Date\n  qtyIr            Float?    @map(\"Qty IR\") @satria.Float\n  ammountLcIr      Float?    @map(\"Ammount_LC_IR\") @satria.Float\n\n  @@map(\"ALL_PO\")\n}\n",
  "inlineSchemaHash": "9258691a9a744d2134728b5d26a8b69473a5dc0b81023015db14186020412d33",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"ALL_PO\":{\"dbName\":\"ALL_PO\",\"schema\":null,\"fields\":[{\"name\":\"prNumber\",\"dbName\":\"PR Number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"4000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prType\",\"dbName\":\"PR Type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"4000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prDate\",\"dbName\":\"PR Date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prItem\",\"dbName\":\"PR Item\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"4000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"qtyPr\",\"dbName\":\"Qty PR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":[\"Float\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uomQtyPr\",\"dbName\":\"UoM Qty PR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"4000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prPlant\",\"dbName\":\"PR Plant\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"4000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prSloc\",\"dbName\":\"PR Sloc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"4000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deliveryDate\",\"dbName\":\"Delivery Date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trackingNumber\",\"dbName\":\"Tracking Number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"4000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prRequisitioner\",\"dbName\":\"PR Requisitioner\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"4000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shortText\",\"dbName\":\"Short Text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"4000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"materialNumber\",\"dbName\":\"Material Number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"4000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"materialType\",\"dbName\":\"Material Type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"4000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brand\",\"dbName\":\"Brand\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"4000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brandDescription\",\"dbName\":\"Brand Description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"4000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"poNo\",\"dbName\":\"PO No\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"4000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"poType\",\"dbName\":\"PO Type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"4000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vendorCode\",\"dbName\":\"Vendor Code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"4000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vendorName\",\"dbName\":\"Vendor Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"4000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"poDate\",\"dbName\":\"PO Date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentTerm\",\"dbName\":\"Payment Term\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"4000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"poReleaseStatus\",\"dbName\":\"PO Release Status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"4000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"poItem\",\"dbName\":\"PO Item\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"4000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plantPo\",\"dbName\":\"Plant PO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"4000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slocPo\",\"dbName\":\"Sloc PO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"4000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"qtyPo\",\"dbName\":\"Qty PO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":[\"Float\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uomQtyPo\",\"dbName\":\"UoM Qty PO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"4000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"openQtyPo\",\"dbName\":\"Open Qty PO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":[\"Float\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deliveryDatePo\",\"dbName\":\"Delivery Date PO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delvCompleted\",\"dbName\":\"Delv Completed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"4000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"netPrice\",\"dbName\":\"Net Price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":[\"Float\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalValue\",\"dbName\":\"Total Value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":[\"Float\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"poTrackNo\",\"dbName\":\"PO Track No\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"4000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastGr101Date\",\"dbName\":\"Last GR 101 Date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gr101Qty\",\"dbName\":\"GR 101 Qty\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"Int\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastGr103Date\",\"dbName\":\"Last GR 103 Date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gr103Qty\",\"dbName\":\"GR 103 Qty\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":[\"Float\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastGr105Date\",\"dbName\":\"Last GR 105 Date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gr105Qty\",\"dbName\":\"GR 105 Qty\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":[\"Real\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastGr107Date\",\"dbName\":\"Last GR 107 Date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gr107Qty\",\"dbName\":\"GR 107 Qty\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"Int\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastGr109Date\",\"dbName\":\"Last GR 109 Date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gr109Qty\",\"dbName\":\"GR 109 Qty\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":[\"Real\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastIrDate\",\"dbName\":\"Last IR Date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"qtyIr\",\"dbName\":\"Qty IR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":[\"Float\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ammountLcIr\",\"dbName\":\"Ammount_LC_IR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":[\"Float\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL_DATAWAREHOUSE: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL_DATAWAREHOUSE'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL_DATAWAREHOUSE || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

