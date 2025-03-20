
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
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "173f8d54f8d52e692c7e27e72a88314ec7aeff60"
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
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
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

exports.Prisma.PolmanastraacidDocumentsDataBukuYangSudahDiinput_AhmadFarhanAriMukti_ExcelScalarFieldEnum = {
  GUID: 'GUID',
  NO: 'NO',
  JUDULBUKU: 'JUDULBUKU',
  PENGARANG: 'PENGARANG',
  PENERBIT: 'PENERBIT',
  DESKRIPSI: 'DESKRIPSI',
  KLASIFIKASI: 'KLASIFIKASI',
  EDISI: 'EDISI',
  INFODETAILSPESIFIK: 'INFODETAILSPESIFIK',
  ISBN_ISSN: 'ISBN_ISSN',
  BAHASA: 'BAHASA',
  TIPEKONTEN: 'TIPEKONTEN',
  JENISMEDIA: 'JENISMEDIA',
  JUMLAHAKTUALBUKU: 'JUMLAHAKTUALBUKU'
};

exports.Prisma.PolmanastraacidDocumentsDataBukuYangSudahDiinput_AnanditaGadisValentineAS_ExcelScalarFieldEnum = {
  GUID: 'GUID',
  title: 'title',
  gmd_name: 'gmd_name',
  edition: 'edition',
  isbn_issn: 'isbn_issn',
  publisher_name: 'publisher_name',
  publish_year: 'publish_year',
  collation: 'collation',
  series_title: 'series_title',
  call_number: 'call_number',
  language_name: 'language_name',
  place_name: 'place_name',
  classification: 'classification',
  notes: 'notes',
  image: 'image',
  sor: 'sor',
  authors: 'authors',
  topics: 'topics',
  item_code: 'item_code'
};

exports.Prisma.PolmanastraacidDocumentsDataBukuYangSudahDiinput_BukuTidakAda_ExcelScalarFieldEnum = {
  GUID: 'GUID',
  NO: 'NO',
  JUDULBUKU: 'JUDULBUKU',
  PENGARANG: 'PENGARANG',
  PENERBIT: 'PENERBIT',
  DESKRIPSI: 'DESKRIPSI',
  KLASIFIKASI: 'KLASIFIKASI',
  EDISI: 'EDISI',
  INFODETAILSPESIFIK: 'INFODETAILSPESIFIK',
  ISBN_ISSN: 'ISBN_ISSN',
  BAHASA: 'BAHASA',
  TIPEKONTEN: 'TIPEKONTEN',
  JENISMEDIA: 'JENISMEDIA',
  PERNYATAANDARI: 'PERNYATAANDARI'
};

exports.Prisma.PolmanastraacidDocumentsDataBukuYangSudahDiinput_DeniRiana_ExcelScalarFieldEnum = {
  GUID: 'GUID',
  NO: 'NO',
  JUDULBUKU: 'JUDULBUKU',
  PENGARANG: 'PENGARANG',
  PENERBIT: 'PENERBIT',
  DESKRIPSI: 'DESKRIPSI',
  KLASIFIKASI: 'KLASIFIKASI',
  EDISI: 'EDISI',
  INFODETAILSPESIFIK: 'INFODETAILSPESIFIK',
  ISBN_ISSN: 'ISBN_ISSN',
  BAHASA: 'BAHASA',
  TIPEKONTEN: 'TIPEKONTEN',
  JENISMEDIA: 'JENISMEDIA',
  PERNYATAANDARI: 'PERNYATAANDARI'
};

exports.Prisma.PolmanastraacidDocumentsDataBukuYangSudahDiinput_DiyahAyuSaraswati_ExcelScalarFieldEnum = {
  GUID: 'GUID',
  NO: 'NO',
  JUDULBUKU: 'JUDULBUKU',
  PENGARANG: 'PENGARANG',
  PENERBIT: 'PENERBIT',
  DESKRIPSI: 'DESKRIPSI',
  KLASIFIKASI: 'KLASIFIKASI',
  EDISI: 'EDISI',
  INFODETAILSPESIFIK: 'INFODETAILSPESIFIK',
  ISBN_ISSN: 'ISBN_ISSN',
  BAHASA: 'BAHASA',
  TIPEKONTEN: 'TIPEKONTEN',
  JENISMEDIA: 'JENISMEDIA',
  PERNYATAANDARI: 'PERNYATAANDARI'
};

exports.Prisma.PolmanastraacidDocumentsDataBukuYangSudahDiinput_FauzanFahrulRozy_ExcelScalarFieldEnum = {
  GUID: 'GUID',
  NO: 'NO',
  JUDULBUKU: 'JUDULBUKU',
  PENGARANG: 'PENGARANG',
  PENERBIT: 'PENERBIT',
  DESKRIPSI: 'DESKRIPSI',
  KLASIFIKASI: 'KLASIFIKASI',
  EDISI: 'EDISI',
  ISBN_ISSN: 'ISBN_ISSN',
  BAHASA: 'BAHASA',
  JUMLAHAKTUALBUKU: 'JUMLAHAKTUALBUKU'
};

exports.Prisma.PolmanastraacidDocumentsDataBukuYangSudahDiinput_FikriAngganaPratama_ExcelScalarFieldEnum = {
  GUID: 'GUID',
  NO: 'NO',
  JUDULBUKU: 'JUDULBUKU',
  PENGARANG: 'PENGARANG',
  PENERBIT: 'PENERBIT',
  DESKRIPSI: 'DESKRIPSI',
  KLASIFIKASI: 'KLASIFIKASI',
  EDISI: 'EDISI',
  INFODETAILSPESIFIK: 'INFODETAILSPESIFIK',
  ISBN_ISSN: 'ISBN_ISSN',
  BAHASA: 'BAHASA',
  TIPEKONTEN: 'TIPEKONTEN',
  JENISMEDIA: 'JENISMEDIA',
  PERNYATAANDARI: 'PERNYATAANDARI',
  JUMLAH: 'JUMLAH'
};

exports.Prisma.PolmanastraacidDocumentsDataBukuYangSudahDiinput_IlmuTeknikFisikaTerapan_ExcelScalarFieldEnum = {
  GUID: 'GUID',
  NO: 'NO',
  JUDULBUKU: 'JUDULBUKU',
  PENGARANG: 'PENGARANG',
  PENERBIT: 'PENERBIT',
  DESKRIPSI: 'DESKRIPSI',
  KLASIFIKASI: 'KLASIFIKASI',
  EDISI: 'EDISI',
  INFODETAILSPESIFIK: 'INFODETAILSPESIFIK',
  ISBN_ISSN: 'ISBN_ISSN',
  BAHASA: 'BAHASA',
  TIPEKONTEN: 'TIPEKONTEN',
  JENISMEDIA: 'JENISMEDIA',
  PERNYATAANDARI: 'PERNYATAANDARI'
};

exports.Prisma.PolmanastraacidDocumentsDataBukuYangSudahDiinput_JuanRivaelSwawidjaya_ExcelScalarFieldEnum = {
  GUID: 'GUID',
  NO: 'NO',
  JUDULBUKU: 'JUDULBUKU',
  PENGARANG: 'PENGARANG',
  PENERBIT: 'PENERBIT',
  DESKRIPSI: 'DESKRIPSI',
  KLASIFIKASI: 'KLASIFIKASI',
  EDISI: 'EDISI',
  INFODETAILSPESIFIK: 'INFODETAILSPESIFIK',
  ISBN_ISSN: 'ISBN_ISSN',
  BAHASA: 'BAHASA',
  TIPEKONTEN: 'TIPEKONTEN',
  JENISMEDIA: 'JENISMEDIA',
  PERNYATAANDARI: 'PERNYATAANDARI'
};

exports.Prisma.PolmanastraacidDocumentsDataBukuYangSudahDiinput_KaryaUmumProgramKomputer_ExcelScalarFieldEnum = {
  GUID: 'GUID',
  NO: 'NO',
  JUDULBUKU: 'JUDULBUKU',
  PENGARANG: 'PENGARANG',
  PENERBIT: 'PENERBIT',
  DESKRIPSI: 'DESKRIPSI',
  KLASIFIKASI: 'KLASIFIKASI',
  EDISI: 'EDISI',
  INFODETAILSPESIFIK: 'INFODETAILSPESIFIK',
  ISBN_ISSN: 'ISBN_ISSN',
  BAHASA: 'BAHASA',
  TIPEKONTEN: 'TIPEKONTEN',
  JENISMEDIA: 'JENISMEDIA'
};

exports.Prisma.PolmanastraacidDocumentsDataBukuYangSudahDiinput_ManajemenManajemenUmum_ExcelScalarFieldEnum = {
  GUID: 'GUID',
  NO: 'NO',
  JUDULBUKU: 'JUDULBUKU',
  PENGARANG: 'PENGARANG',
  PENERBIT: 'PENERBIT',
  DESKRIPSI: 'DESKRIPSI',
  KLASIFIKASI: 'KLASIFIKASI',
  EDISI: 'EDISI',
  INFODETAILSPESIFIK: 'INFODETAILSPESIFIK',
  ISBN_ISSN: 'ISBN_ISSN',
  BAHASA: 'BAHASA',
  TIPEKONTEN: 'TIPEKONTEN',
  JENISMEDIA: 'JENISMEDIA'
};

exports.Prisma.PolmanastraacidDocumentsDataBukuYangSudahDiinput_ManajemenPeriklananHubungan_ExcelScalarFieldEnum = {
  GUID: 'GUID',
  NO: 'NO',
  JUDULBUKU: 'JUDULBUKU',
  PENGARANG: 'PENGARANG',
  PENERBIT: 'PENERBIT',
  DESKRIPSI: 'DESKRIPSI',
  KLASIFIKASI: 'KLASIFIKASI',
  EDISI: 'EDISI',
  INFODETAILSPESIFIK: 'INFODETAILSPESIFIK',
  ISBN_ISSN: 'ISBN_ISSN',
  BAHASA: 'BAHASA',
  TIPEKONTEN: 'TIPEKONTEN',
  JENISMEDIA: 'JENISMEDIA'
};

exports.Prisma.PolmanastraacidDocumentsDataBukuYangSudahDiinput_MerryDyahOctavia_ExcelScalarFieldEnum = {
  GUID: 'GUID',
  NO: 'NO',
  JUDULBUKU: 'JUDULBUKU',
  PENGARANG: 'PENGARANG',
  PENERBIT: 'PENERBIT',
  DESKRIPSI: 'DESKRIPSI',
  KLASIFIKASI: 'KLASIFIKASI',
  EDISI: 'EDISI',
  INFODETAILSPESIFIK: 'INFODETAILSPESIFIK',
  ISBN_ISSN: 'ISBN_ISSN',
  BAHASA: 'BAHASA',
  TIPEKONTEN: 'TIPEKONTEN',
  JENISMEDIA: 'JENISMEDIA'
};

exports.Prisma.PolmanastraacidDocumentsDataBukuYangSudahDiinput_MuhammadDaffaAbiyyuSyaddad_ExcelScalarFieldEnum = {
  GUID: 'GUID',
  NO: 'NO',
  JUDULBUKU: 'JUDULBUKU',
  PENGARANG: 'PENGARANG',
  PENERBIT: 'PENERBIT',
  DESKRIPSI: 'DESKRIPSI',
  KLASIFIKASI: 'KLASIFIKASI',
  EDISI: 'EDISI',
  INFODETAILSPESIFIK: 'INFODETAILSPESIFIK',
  ISBN_ISSN: 'ISBN_ISSN',
  BAHASA: 'BAHASA',
  TIPEKONTEN: 'TIPEKONTEN',
  JENISMEDIA: 'JENISMEDIA',
  PERNYATAANDARI: 'PERNYATAANDARI',
  JUMLAH: 'JUMLAH'
};

exports.Prisma.PolmanastraacidDocumentsDataBukuYangSudahDiinput_NaufalFadhlurrohman_ExcelScalarFieldEnum = {
  GUID: 'GUID',
  NO: 'NO',
  JUDULBUKU: 'JUDULBUKU',
  PENGARANG: 'PENGARANG',
  PENERBIT: 'PENERBIT',
  DESKRIPSI: 'DESKRIPSI',
  KLASIFIKASI: 'KLASIFIKASI',
  EDISI: 'EDISI',
  INFODETAILSPESIFIK: 'INFODETAILSPESIFIK',
  ISBN_ISSN: 'ISBN_ISSN',
  BAHASA: 'BAHASA',
  TIPEKONTEN: 'TIPEKONTEN',
  JENISMEDIA: 'JENISMEDIA',
  PERNYATAANDARI: 'PERNYATAANDARI'
};

exports.Prisma.PolmanastraacidDocumentsDataBukuYangSudahDiinput_RavianaZahraFadhillah_ExcelScalarFieldEnum = {
  GUID: 'GUID',
  NO: 'NO',
  JUDULBUKU: 'JUDULBUKU',
  PENGARANG: 'PENGARANG',
  PENERBIT: 'PENERBIT',
  DESKRIPSI: 'DESKRIPSI',
  KLASIFIKASI: 'KLASIFIKASI',
  EDISI: 'EDISI',
  INFODETAILSPESIFIK: 'INFODETAILSPESIFIK',
  ISBN_ISSN: 'ISBN_ISSN',
  BAHASA: 'BAHASA',
  TIPEKONTEN: 'TIPEKONTEN',
  JENISMEDIA: 'JENISMEDIA'
};

exports.Prisma.PolmanastraacidDocumentsDataBukuYangSudahDiinput_RenanditaDyahAyuKintana_ExcelScalarFieldEnum = {
  GUID: 'GUID',
  NO: 'NO',
  JUDULBUKU: 'JUDULBUKU',
  PENGARANG: 'PENGARANG',
  PENERBIT: 'PENERBIT',
  DESKRIPSI: 'DESKRIPSI',
  KLASIFIKASI: 'KLASIFIKASI',
  EDISI: 'EDISI',
  INFODETAILSPESIFIK: 'INFODETAILSPESIFIK',
  ISBN_ISSN: 'ISBN_ISSN',
  BAHASA: 'BAHASA',
  TIPEKONTEN: 'TIPEKONTEN',
  JENISMEDIA: 'JENISMEDIA',
  PERNYATAANDARI: 'PERNYATAANDARI',
  JUMLAH: 'JUMLAH'
};

exports.Prisma.PolmanastraacidDocumentsDataBukuYangSudahDiinput_SatrioMahdiiMuhammad_ExcelScalarFieldEnum = {
  GUID: 'GUID',
  NO: 'NO',
  JUDULBUKU: 'JUDULBUKU',
  PENGARANG: 'PENGARANG',
  PENERBIT: 'PENERBIT',
  DESKRIPSI: 'DESKRIPSI',
  KLASIFIKASI: 'KLASIFIKASI',
  EDISI: 'EDISI',
  INFODETAILSPESIFIK: 'INFODETAILSPESIFIK',
  ISBN_ISSN: 'ISBN_ISSN',
  BAHASA: 'BAHASA',
  TIPEKONTEN: 'TIPEKONTEN',
  JENISMEDIA: 'JENISMEDIA',
  PERNYATAANDARI: 'PERNYATAANDARI'
};

exports.Prisma.PolmanastraacidDocumentsDataBukuYangSudahDiinput_SejarahUmumAsiaAsiaTenggar_ExcelScalarFieldEnum = {
  GUID: 'GUID',
  NO: 'NO',
  JUDULBUKU: 'JUDULBUKU',
  PENGARANG: 'PENGARANG',
  PENERBIT: 'PENERBIT',
  DESKRIPSI: 'DESKRIPSI',
  KLASIFIKASI: 'KLASIFIKASI',
  EDISI: 'EDISI',
  INFODETAILSPESIFIK: 'INFODETAILSPESIFIK',
  ISBN_ISSN: 'ISBN_ISSN',
  BAHASA: 'BAHASA',
  TIPEKONTEN: 'TIPEKONTEN',
  JENISMEDIA: 'JENISMEDIA',
  PERNYATAANDARI: 'PERNYATAANDARI'
};

exports.Prisma.PolmanastraacidDocumentsDataBukuYangSudahDiinput_SejarahUmumAsiaJepang_ExcelScalarFieldEnum = {
  GUID: 'GUID',
  NO: 'NO',
  JUDULBUKU: 'JUDULBUKU',
  PENGARANG: 'PENGARANG',
  PENERBIT: 'PENERBIT',
  DESKRIPSI: 'DESKRIPSI',
  KLASIFIKASI: 'KLASIFIKASI',
  EDISI: 'EDISI',
  INFODETAILSPESIFIK: 'INFODETAILSPESIFIK',
  ISBN_ISSN: 'ISBN_ISSN',
  BAHASA: 'BAHASA',
  TIPEKONTEN: 'TIPEKONTEN',
  JENISMEDIA: 'JENISMEDIA',
  PERNYATAANDARI: 'PERNYATAANDARI'
};

exports.Prisma.PolmanastraacidDocumentsDataBukuYangSudahDiinput_TeguhEldiPratama_ExcelScalarFieldEnum = {
  GUID: 'GUID',
  NO: 'NO',
  JUDULBUKU: 'JUDULBUKU',
  PENGARANG: 'PENGARANG',
  PENERBIT: 'PENERBIT',
  DESKRIPSI: 'DESKRIPSI',
  KLASIFIKASI: 'KLASIFIKASI',
  EDISI: 'EDISI',
  INFODETAILSPESIFIK: 'INFODETAILSPESIFIK',
  ISBN_ISSN: 'ISBN_ISSN',
  BAHASA: 'BAHASA',
  TIPEKONTEN: 'TIPEKONTEN',
  JENISMEDIA: 'JENISMEDIA',
  PERNYATAANDARI: 'PERNYATAANDARI',
  JUMLAH: 'JUMLAH'
};

exports.Prisma.PolmanastraacidDocumentsDataBukuYangSudahDiinput_TeknologiKimia_ExcelScalarFieldEnum = {
  GUID: 'GUID',
  NO: 'NO',
  JUDULBUKU: 'JUDULBUKU',
  PENGARANG: 'PENGARANG',
  PENERBIT: 'PENERBIT',
  DESKRIPSI: 'DESKRIPSI',
  KLASIFIKASI: 'KLASIFIKASI',
  EDISI: 'EDISI',
  INFODETAILSPESIFIK: 'INFODETAILSPESIFIK',
  ISBN_ISSN: 'ISBN_ISSN',
  BAHASA: 'BAHASA',
  TIPEKONTEN: 'TIPEKONTEN',
  JENISMEDIA: 'JENISMEDIA',
  PERNYATAANDARI: 'PERNYATAANDARI'
};

exports.Prisma.PolmanastraacidDocumentsDataBukuYangSudahDiinput_TeknologiKimiaMetalurgy_ExcelScalarFieldEnum = {
  GUID: 'GUID',
  NO: 'NO',
  JUDULBUKU: 'JUDULBUKU',
  PENGARANG: 'PENGARANG',
  PENERBIT: 'PENERBIT',
  DESKRIPSI: 'DESKRIPSI',
  KLASIFIKASI: 'KLASIFIKASI',
  EDISI: 'EDISI',
  INFODETAILSPESIFIK: 'INFODETAILSPESIFIK',
  ISBN_ISSN: 'ISBN_ISSN',
  BAHASA: 'BAHASA',
  TIPEKONTEN: 'TIPEKONTEN',
  JENISMEDIA: 'JENISMEDIA',
  PERNYATAANDARI: 'PERNYATAANDARI'
};

exports.Prisma.PolmanastraacidDocumentsDataBukuYangSudahDiinput_TeknologiKimiaTeknologiBaha_ExcelScalarFieldEnum = {
  GUID: 'GUID',
  NO: 'NO',
  JUDULBUKU: 'JUDULBUKU',
  PENGARANG: 'PENGARANG',
  PENERBIT: 'PENERBIT',
  DESKRIPSI: 'DESKRIPSI',
  KLASIFIKASI: 'KLASIFIKASI',
  EDISI: 'EDISI',
  INFODETAILSPESIFIK: 'INFODETAILSPESIFIK',
  ISBN_ISSN: 'ISBN_ISSN',
  BAHASA: 'BAHASA',
  TIPEKONTEN: 'TIPEKONTEN',
  JENISMEDIA: 'JENISMEDIA',
  PERNYATAANDARI: 'PERNYATAANDARI'
};

exports.Prisma.PolmanastraacidDocumentsDataBukuYangSudahDiinput_TeknologiTopikTopikKhusus_ExcelScalarFieldEnum = {
  GUID: 'GUID',
  NO: 'NO',
  JUDULBUKU: 'JUDULBUKU',
  PENGARANG: 'PENGARANG',
  PENERBIT: 'PENERBIT',
  DESKRIPSI: 'DESKRIPSI',
  KLASIFIKASI: 'KLASIFIKASI',
  EDISI: 'EDISI',
  INFODETAILSPESIFIK: 'INFODETAILSPESIFIK',
  ISBN_ISSN: 'ISBN_ISSN',
  BAHASA: 'BAHASA',
  TIPEKONTEN: 'TIPEKONTEN',
  JENISMEDIA: 'JENISMEDIA',
  PERNYATAANDARI: 'PERNYATAANDARI'
};

exports.Prisma.AriekusumawatipolytechnicastraacidDocumentsPerkuliahandanPKTAPKTAPKTA2425DosenPembimbingver11sharee_DAFTARDOSENPEMBIMB_ExcelScalarFieldEnum = {
  GUID: 'GUID',
  No_: 'No_',
  NIM: 'NIM',
  Nama: 'Nama',
  ProgramStudi: 'ProgramStudi',
  TempatMagang: 'TempatMagang',
  Kelompok: 'Kelompok',
  DosenPembimbing1: 'DosenPembimbing1',
  DosenPembimbing2: 'DosenPembimbing2'
};

exports.Prisma.AriekusumawatipolytechnicastraacidDocumentsPerkuliahandanPKTAPKTAPKTA2425DosenPembimbingver11sharee_FinalPenempatan_ExcelScalarFieldEnum = {
  GUID: 'GUID',
  No_: 'No_',
  NIM: 'NIM',
  Nama: 'Nama',
  ProgramStudi: 'ProgramStudi',
  TempatMagang: 'TempatMagang',
  Cabang: 'Cabang',
  Kota: 'Kota'
};

exports.Prisma.AriekusumawatipolytechnicastraacidDocumentsPerkuliahandanPKTAPKTAPKTA2425DosenPembimbingver11sharee_NEWDAFTARDOSEN_ExcelScalarFieldEnum = {
  GUID: 'GUID',
  No_: 'No_',
  NIM: 'NIM',
  Nama: 'Nama',
  ProgramStudi: 'ProgramStudi',
  TempatMagang: 'TempatMagang',
  Kelompok: 'Kelompok',
  DosenPembimbing1: 'DosenPembimbing1',
  DosenPembimbing2: 'DosenPembimbing2'
};

exports.Prisma.AriekusumawatipolytechnicastraacidDocumentsPerkuliahandanPKTAPKTAPKTA2425DosenPembimbingver11sharee_Sheet1_ExcelScalarFieldEnum = {
  GUID: 'GUID',
  No_: 'No_',
  NIM: 'NIM',
  Nama: 'Nama',
  Cabang: 'Cabang',
  ProgramStudi: 'ProgramStudi',
  PeriodeMagang: 'PeriodeMagang'
};

exports.Prisma.ContohSitus_CrossSiteList_ListScalarFieldEnum = {
  GUID: 'GUID',
  Harga: 'Harga',
  Barang: 'Barang'
};

exports.Prisma.ContohSitusDokumenBerbagiFindingAHMMOTRC0392_Finding_ExcelScalarFieldEnum = {
  GUID: 'GUID',
  No: 'No',
  Item: 'Item',
  DataTest: 'DataTest',
  Finding: 'Finding',
  Status: 'Status',
  Notes: 'Notes'
};

exports.Prisma.ContohSitusDokumenBerbagiJadwalSeminarPKTAClone_AbsenPengumpulan_ExcelScalarFieldEnum = {
  GUID: 'GUID',
  No: 'No',
  NIM: 'NIM',
  NAMA: 'NAMA',
  Kelompok: 'Kelompok',
  TTD: 'TTD',
  Note: 'Note'
};

exports.Prisma.ContohSitusDokumenBerbagiJadwalSeminarPKTAClone_FormResponses1_ExcelScalarFieldEnum = {
  GUID: 'GUID',
  Timestamp: 'Timestamp',
  PertanyaanTanpaJudul: 'PertanyaanTanpaJudul'
};

exports.Prisma.ContohSitusDokumenBerbagiJadwalSeminarPKTAClone_Jadwal_ExcelScalarFieldEnum = {
  GUID: 'GUID',
  No: 'No',
  NIM: 'NIM',
  NAMA: 'NAMA',
  Kelompok: 'Kelompok',
  PB1: 'PB1',
  PBB2: 'PBB2',
  JUDULPROJECT: 'JUDULPROJECT',
  Penguji1: 'Penguji1',
  Penguji2: 'Penguji2',
  Tanggal: 'Tanggal',
  Jam: 'Jam',
  Ruangan: 'Ruangan',
  Status: 'Status',
  Ket: 'Ket'
};

exports.Prisma.ContohSitusSiteAssetsFindingAHMMOTRC0392_Finding_ExcelScalarFieldEnum = {
  GUID: 'GUID',
  No: 'No',
  Item: 'Item',
  DataTest: 'DataTest',
  Finding: 'Finding',
  Status: 'Status',
  Notes: 'Notes'
};

exports.Prisma.ContohSitusSiteAssetsFindingAHMMOTRC0392_Lembar1_ExcelScalarFieldEnum = {
  GUID: 'GUID',
  No: 'No',
  Nama: 'Nama',
  Haarga: 'Haarga'
};

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

exports.Prisma.Pppppp2_CrossSiteList_ListScalarFieldEnum = {
  GUID: 'GUID',
  Judul: 'Judul'
};

exports.Prisma.Pppppp2DokumenBerbagiRundownacarafamgath_Sheet1_ExcelScalarFieldEnum = {
  GUID: 'GUID',
  No: 'No',
  Waktu: 'Waktu',
  Kegiatan: 'Kegiatan',
  PenanggungJawab: 'PenanggungJawab'
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

exports.Prisma.TesSitus_ContohList2_ListScalarFieldEnum = {
  GUID: 'GUID',
  Namabarang_: 'Namabarang_',
  Judul: 'Judul'
};

exports.Prisma.TesSitus_Jadwalacara_ListScalarFieldEnum = {
  GUID: 'GUID',
  Namasesi: 'Namasesi',
  Kodesesi: 'Kodesesi',
  Tipesesi: 'Tipesesi',
  Deskripsi: 'Deskripsi',
  Tanggaldanwaktumulai: 'Tanggaldanwaktumulai',
  Tanggaldanwaktuselesai: 'Tanggaldanwaktuselesai',
  Durasi: 'Durasi',
  Kapasitas: 'Kapasitas',
  Lokasi: 'Lokasi',
  Catatan: 'Catatan'
};

exports.Prisma.TesSitus_tesData_ListScalarFieldEnum = {
  GUID: 'GUID',
  Waktu: 'Waktu',
  Kegiatan: 'Kegiatan',
  PenanggungJawab: 'PenanggungJawab',
  Nomor: 'Nomor',
  MultiLine: 'MultiLine',
  Numeric: 'Numeric',
  Date: 'Date',
  Choice: 'Choice',
  Person: 'Person',
  Boolean: 'Boolean',
  Hyperlink: 'Hyperlink',
  Currency: 'Currency',
  Picture: 'Picture',
  Rating: 'Rating',
  Penilaianpengguna: 'Penilaianpengguna'
};

exports.Prisma.TesSitusDokumenBerbagiTemplateImportBuku_Template_ExcelScalarFieldEnum = {
  GUID: 'GUID',
  Judul: 'Judul',
  Pengarang: 'Pengarang',
  TahunTerbit: 'TahunTerbit',
  Stok: 'Stok',
  Gambar: 'Gambar'
};

exports.Prisma.TesSitusppppFindingAHMMOTRC0392_Finding_ExcelScalarFieldEnum = {
  GUID: 'GUID',
  No: 'No',
  Item: 'Item',
  DataTest: 'DataTest',
  Finding: 'Finding',
  Status: 'Status',
  Notes: 'Notes'
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  polmanastraacidDocumentsDataBukuYangSudahDiinput_AhmadFarhanAriMukti_Excel: 'polmanastraacidDocumentsDataBukuYangSudahDiinput_AhmadFarhanAriMukti_Excel',
  polmanastraacidDocumentsDataBukuYangSudahDiinput_AnanditaGadisValentineAS_Excel: 'polmanastraacidDocumentsDataBukuYangSudahDiinput_AnanditaGadisValentineAS_Excel',
  polmanastraacidDocumentsDataBukuYangSudahDiinput_BukuTidakAda_Excel: 'polmanastraacidDocumentsDataBukuYangSudahDiinput_BukuTidakAda_Excel',
  polmanastraacidDocumentsDataBukuYangSudahDiinput_DeniRiana_Excel: 'polmanastraacidDocumentsDataBukuYangSudahDiinput_DeniRiana_Excel',
  polmanastraacidDocumentsDataBukuYangSudahDiinput_DiyahAyuSaraswati_Excel: 'polmanastraacidDocumentsDataBukuYangSudahDiinput_DiyahAyuSaraswati_Excel',
  polmanastraacidDocumentsDataBukuYangSudahDiinput_FauzanFahrulRozy_Excel: 'polmanastraacidDocumentsDataBukuYangSudahDiinput_FauzanFahrulRozy_Excel',
  polmanastraacidDocumentsDataBukuYangSudahDiinput_FikriAngganaPratama_Excel: 'polmanastraacidDocumentsDataBukuYangSudahDiinput_FikriAngganaPratama_Excel',
  polmanastraacidDocumentsDataBukuYangSudahDiinput_IlmuTeknikFisikaTerapan_Excel: 'polmanastraacidDocumentsDataBukuYangSudahDiinput_IlmuTeknikFisikaTerapan_Excel',
  polmanastraacidDocumentsDataBukuYangSudahDiinput_JuanRivaelSwawidjaya_Excel: 'polmanastraacidDocumentsDataBukuYangSudahDiinput_JuanRivaelSwawidjaya_Excel',
  polmanastraacidDocumentsDataBukuYangSudahDiinput_KaryaUmumProgramKomputer_Excel: 'polmanastraacidDocumentsDataBukuYangSudahDiinput_KaryaUmumProgramKomputer_Excel',
  polmanastraacidDocumentsDataBukuYangSudahDiinput_ManajemenManajemenUmum_Excel: 'polmanastraacidDocumentsDataBukuYangSudahDiinput_ManajemenManajemenUmum_Excel',
  polmanastraacidDocumentsDataBukuYangSudahDiinput_ManajemenPeriklananHubungan_Excel: 'polmanastraacidDocumentsDataBukuYangSudahDiinput_ManajemenPeriklananHubungan_Excel',
  polmanastraacidDocumentsDataBukuYangSudahDiinput_MerryDyahOctavia_Excel: 'polmanastraacidDocumentsDataBukuYangSudahDiinput_MerryDyahOctavia_Excel',
  polmanastraacidDocumentsDataBukuYangSudahDiinput_MuhammadDaffaAbiyyuSyaddad_Excel: 'polmanastraacidDocumentsDataBukuYangSudahDiinput_MuhammadDaffaAbiyyuSyaddad_Excel',
  polmanastraacidDocumentsDataBukuYangSudahDiinput_NaufalFadhlurrohman_Excel: 'polmanastraacidDocumentsDataBukuYangSudahDiinput_NaufalFadhlurrohman_Excel',
  polmanastraacidDocumentsDataBukuYangSudahDiinput_RavianaZahraFadhillah_Excel: 'polmanastraacidDocumentsDataBukuYangSudahDiinput_RavianaZahraFadhillah_Excel',
  polmanastraacidDocumentsDataBukuYangSudahDiinput_RenanditaDyahAyuKintana_Excel: 'polmanastraacidDocumentsDataBukuYangSudahDiinput_RenanditaDyahAyuKintana_Excel',
  polmanastraacidDocumentsDataBukuYangSudahDiinput_SatrioMahdiiMuhammad_Excel: 'polmanastraacidDocumentsDataBukuYangSudahDiinput_SatrioMahdiiMuhammad_Excel',
  polmanastraacidDocumentsDataBukuYangSudahDiinput_SejarahUmumAsiaAsiaTenggar_Excel: 'polmanastraacidDocumentsDataBukuYangSudahDiinput_SejarahUmumAsiaAsiaTenggar_Excel',
  polmanastraacidDocumentsDataBukuYangSudahDiinput_SejarahUmumAsiaJepang_Excel: 'polmanastraacidDocumentsDataBukuYangSudahDiinput_SejarahUmumAsiaJepang_Excel',
  polmanastraacidDocumentsDataBukuYangSudahDiinput_TeguhEldiPratama_Excel: 'polmanastraacidDocumentsDataBukuYangSudahDiinput_TeguhEldiPratama_Excel',
  polmanastraacidDocumentsDataBukuYangSudahDiinput_TeknologiKimia_Excel: 'polmanastraacidDocumentsDataBukuYangSudahDiinput_TeknologiKimia_Excel',
  polmanastraacidDocumentsDataBukuYangSudahDiinput_TeknologiKimiaMetalurgy_Excel: 'polmanastraacidDocumentsDataBukuYangSudahDiinput_TeknologiKimiaMetalurgy_Excel',
  polmanastraacidDocumentsDataBukuYangSudahDiinput_TeknologiKimiaTeknologiBaha_Excel: 'polmanastraacidDocumentsDataBukuYangSudahDiinput_TeknologiKimiaTeknologiBaha_Excel',
  polmanastraacidDocumentsDataBukuYangSudahDiinput_TeknologiTopikTopikKhusus_Excel: 'polmanastraacidDocumentsDataBukuYangSudahDiinput_TeknologiTopikTopikKhusus_Excel',
  ariekusumawatipolytechnicastraacidDocumentsPerkuliahandanPKTAPKTAPKTA2425DosenPembimbingver11sharee_DAFTARDOSENPEMBIMB_Excel: 'ariekusumawatipolytechnicastraacidDocumentsPerkuliahandanPKTAPKTAPKTA2425DosenPembimbingver11sharee_DAFTARDOSENPEMBIMB_Excel',
  ariekusumawatipolytechnicastraacidDocumentsPerkuliahandanPKTAPKTAPKTA2425DosenPembimbingver11sharee_FinalPenempatan_Excel: 'ariekusumawatipolytechnicastraacidDocumentsPerkuliahandanPKTAPKTAPKTA2425DosenPembimbingver11sharee_FinalPenempatan_Excel',
  ariekusumawatipolytechnicastraacidDocumentsPerkuliahandanPKTAPKTAPKTA2425DosenPembimbingver11sharee_NEWDAFTARDOSEN_Excel: 'ariekusumawatipolytechnicastraacidDocumentsPerkuliahandanPKTAPKTAPKTA2425DosenPembimbingver11sharee_NEWDAFTARDOSEN_Excel',
  ariekusumawatipolytechnicastraacidDocumentsPerkuliahandanPKTAPKTAPKTA2425DosenPembimbingver11sharee_Sheet1_Excel: 'ariekusumawatipolytechnicastraacidDocumentsPerkuliahandanPKTAPKTAPKTA2425DosenPembimbingver11sharee_Sheet1_Excel',
  ContohSitus_CrossSiteList_List: 'ContohSitus_CrossSiteList_List',
  ContohSitusDokumenBerbagiFindingAHMMOTRC0392_Finding_Excel: 'ContohSitusDokumenBerbagiFindingAHMMOTRC0392_Finding_Excel',
  ContohSitusDokumenBerbagiJadwalSeminarPKTAClone_AbsenPengumpulan_Excel: 'ContohSitusDokumenBerbagiJadwalSeminarPKTAClone_AbsenPengumpulan_Excel',
  ContohSitusDokumenBerbagiJadwalSeminarPKTAClone_FormResponses1_Excel: 'ContohSitusDokumenBerbagiJadwalSeminarPKTAClone_FormResponses1_Excel',
  ContohSitusDokumenBerbagiJadwalSeminarPKTAClone_Jadwal_Excel: 'ContohSitusDokumenBerbagiJadwalSeminarPKTAClone_Jadwal_Excel',
  ContohSitusSiteAssetsFindingAHMMOTRC0392_Finding_Excel: 'ContohSitusSiteAssetsFindingAHMMOTRC0392_Finding_Excel',
  ContohSitusSiteAssetsFindingAHMMOTRC0392_Lembar1_Excel: 'ContohSitusSiteAssetsFindingAHMMOTRC0392_Lembar1_Excel',
  DataFBL5N: 'DataFBL5N',
  DataVF04: 'DataVF04',
  excelBaseUrl: 'excelBaseUrl',
  excelSheet: 'excelSheet',
  log: 'log',
  pppppp2_CrossSiteList_List: 'pppppp2_CrossSiteList_List',
  pppppp2DokumenBerbagiRundownacarafamgath_Sheet1_Excel: 'pppppp2DokumenBerbagiRundownacarafamgath_Sheet1_Excel',
  Schedule_Recommendation: 'Schedule_Recommendation',
  siteRoute: 'siteRoute',
  sysdiagrams: 'sysdiagrams',
  TesSitus_ContohList2_List: 'TesSitus_ContohList2_List',
  TesSitus_Jadwalacara_List: 'TesSitus_Jadwalacara_List',
  TesSitus_tesData_List: 'TesSitus_tesData_List',
  TesSitusDokumenBerbagiTemplateImportBuku_Template_Excel: 'TesSitusDokumenBerbagiTemplateImportBuku_Template_Excel',
  TesSitusppppFindingAHMMOTRC0392_Finding_Excel: 'TesSitusppppFindingAHMMOTRC0392_Finding_Excel',
  users: 'users'
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
