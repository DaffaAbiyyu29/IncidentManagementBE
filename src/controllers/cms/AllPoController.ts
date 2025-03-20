// src/controllers/cms/ProController.ts
import { Request, Response } from "express";
import { AllPo } from "../../models/Table/Satria/AllPo";
import { formattedDate } from "../../helpers/formattedDate";

// View all vendor
export const getAllVendor = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      page = "1",
      limit = "10",
      search = "",
      sort = "prNumber",
      order = "asc",
    } = req.query;

    const pageNumber = parseInt(page as string, 10);
    const pageSize = parseInt(limit as string, 10);
    const skip = (pageNumber - 1) * pageSize;
    const validSortFields = [
      "prNumber",
      "prType",
      "prDate",
      "prItem",
      "qtyPr",
      "uomQtyPr",
      "prPlant",
      "prSloc",
      "deliveryDate",
      "trackingNumber",
      "prRequisitioner",
      "shortText",
      "materialNumber",
      "materialType",
      "brand",
      "brandDescription",
      "poNo",
      "poType",
      "vendorCode",
      "vendorName",
      "poDate",
      "paymentTerm",
      "poReleaseStatus",
      "poItem",
      "plantPo",
      "slocPo",
      "qtyPo",
      "uomQtyPo",
      "openQtyPo",
      "deliveryDatePo",
      "delvCompleted",
      "netPrice",
      "totalValue",
      "poTrackNo",
      "lastGr101Date",
      "gr101Qty",
      "lastGr103Date",
      "gr103Qty",
      "lastGr105Date",
      "gr105Qty",
      "lastGr107Date",
      "gr107Qty",
      "lastGr109Date",
      "gr109Qty",
      "lastIrDate",
      "qtyIr",
      "ammountLcIr",
    ];

    const sortField = validSortFields.includes(sort as string)
      ? (sort as string)
      : "prNumber";
    const sortOrder = order === "desc" ? "desc" : "asc";

    const dataProData = await AllPo.findMany({
      where: {
        OR: [
          { prNumber: { contains: search as string } },
          { prType: { contains: search as string } },
          { poNo: { contains: search as string } },
          { vendorName: { contains: search as string } },
        ],
      },
      orderBy: { [sortField]: sortOrder },
      skip,
      take: pageSize,
    });

    const totalItems = await AllPo.count({
      where: {
        OR: [
          { prNumber: { contains: search as string } },
          { prType: { contains: search as string } },
          { poNo: { contains: search as string } },
          { vendorName: { contains: search as string } },
        ],
      },
    });

    const totalPages = Math.ceil(totalItems / pageSize);

    // Format data sesuai model
    const serializedData = dataProData.map((item: any) => {
      return {
        prNumber: item.prNumber,
        prType: item.prType,
        prDate: formattedDate(item.prDate),
        prItem: item.prItem,
        qtyPr: item.qtyPr,
        uomQtyPr: item.uomQtyPr,
        prPlant: item.prPlant,
        prSloc: item.prSloc,
        deliveryDate: formattedDate(item.deliveryDate),
        trackingNumber: item.trackingNumber,
        prRequisitioner: item.prRequisitioner,
        shortText: item.shortText,
        materialNumber: item.materialNumber,
        materialType: item.materialType,
        brand: item.brand,
        brandDescription: item.brandDescription,
        poNo: item.poNo,
        poType: item.poType,
        vendorCode: item.vendorCode,
        vendorName: item.vendorName,
        poDate: formattedDate(item.poDate),
        paymentTerm: item.paymentTerm,
        poReleaseStatus: item.poReleaseStatus,
        poItem: item.poItem,
        plantPo: item.plantPo,
        slocPo: item.slocPo,
        qtyPo: item.qtyPo,
        uomQtyPo: item.uomQtyPo,
        openQtyPo: item.openQtyPo,
        deliveryDatePo: formattedDate(item.deliveryDatePo),
        delvCompleted: item.delvCompleted,
        netPrice: item.netPrice,
        totalValue: item.totalValue,
        poTrackNo: item.poTrackNo,
        lastGr101Date: formattedDate(item.lastGr101Date),
        gr101Qty: item.gr101Qty,
        lastGr103Date: formattedDate(item.lastGr103Date),
        gr103Qty: item.gr103Qty,
        lastGr105Date: formattedDate(item.lastGr105Date),
        gr105Qty: item.gr105Qty,
        lastGr107Date: formattedDate(item.lastGr107Date),
        gr107Qty: item.gr107Qty,
        lastGr109Date: formattedDate(item.lastGr109Date),
        gr109Qty: item.gr109Qty,
        lastIrDate: formattedDate(item.lastIrDate),
        qtyIr: item.qtyIr,
        ammountLcIr: item.ammountLcIr,
      };
    });

    res.status(200).json({
      success: true,
      message: "Berhasil mengambil data AllPo",
      data: {
        data: serializedData,
        totalPages,
        currentPage: pageNumber,
        totalItems,
      },
    });
  } catch (err) {
    console.error("Error fetching AllPo data:", err);
    res
      .status(500)
      .json({ success: false, message: "Error mengambil data AllPo" });
  }
};

export const getAllSubcont = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      page = "1",
      limit = "10",
      search = "",
      sort = "prNumber",
      order = "asc",
    } = req.query;

    const pageNumber = parseInt(page as string, 10);
    const pageSize = parseInt(limit as string, 10);
    const skip = (pageNumber - 1) * pageSize;
    const validSortFields = [
      "prNumber",
      "prType",
      "prDate",
      "prItem",
      "qtyPr",
      "uomQtyPr",
      "prPlant",
      "prSloc",
      "deliveryDate",
      "trackingNumber",
      "prRequisitioner",
      "shortText",
      "materialNumber",
      "materialType",
      "brand",
      "brandDescription",
      "poNo",
      "poType",
      "vendorCode",
      "vendorName",
      "poDate",
      "paymentTerm",
      "poReleaseStatus",
      "poItem",
      "plantPo",
      "slocPo",
      "qtyPo",
      "uomQtyPo",
      "openQtyPo",
      "deliveryDatePo",
      "delvCompleted",
      "netPrice",
      "totalValue",
      "poTrackNo",
      "lastGr101Date",
      "gr101Qty",
      "lastGr103Date",
      "gr103Qty",
      "lastGr105Date",
      "gr105Qty",
      "lastGr107Date",
      "gr107Qty",
      "lastGr109Date",
      "gr109Qty",
      "lastIrDate",
      "qtyIr",
      "ammountLcIr",
    ];

    const sortField = validSortFields.includes(sort as string)
      ? (sort as string)
      : "prNumber";
    const sortOrder = order === "desc" ? "desc" : "asc";

    const dataProData = await AllPo.findMany({
      where: {
        OR: [
          { prNumber: { contains: search as string } },
          { prType: { contains: search as string } },
          { poNo: { contains: search as string } },
          { vendorName: { contains: search as string } },
        ],
      },
      orderBy: { [sortField]: sortOrder },
      skip,
      take: pageSize,
    });

    const totalItems = await AllPo.count({
      where: {
        OR: [
          { prNumber: { contains: search as string } },
          { prType: { contains: search as string } },
          { poNo: { contains: search as string } },
          { vendorName: { contains: search as string } },
        ],
      },
    });

    const totalPages = Math.ceil(totalItems / pageSize);

    // Format data sesuai model
    const serializedData = dataProData.map((item: any) => {
      return {
        prNumber: item.prNumber,
        prType: item.prType,
        prDate: formattedDate(item.prDate),
        prItem: item.prItem,
        qtyPr: item.qtyPr,
        uomQtyPr: item.uomQtyPr,
        prPlant: item.prPlant,
        prSloc: item.prSloc,
        deliveryDate: formattedDate(item.deliveryDate),
        trackingNumber: item.trackingNumber,
        prRequisitioner: item.prRequisitioner,
        shortText: item.shortText,
        materialNumber: item.materialNumber,
        materialType: item.materialType,
        brand: item.brand,
        brandDescription: item.brandDescription,
        poNo: item.poNo,
        poType: item.poType,
        vendorCode: item.vendorCode,
        vendorName: item.vendorName,
        poDate: formattedDate(item.poDate),
        paymentTerm: item.paymentTerm,
        poReleaseStatus: item.poReleaseStatus,
        poItem: item.poItem,
        plantPo: item.plantPo,
        slocPo: item.slocPo,
        qtyPo: item.qtyPo,
        uomQtyPo: item.uomQtyPo,
        openQtyPo: item.openQtyPo,
        deliveryDatePo: formattedDate(item.deliveryDatePo),
        delvCompleted: item.delvCompleted,
        netPrice: item.netPrice,
        totalValue: item.totalValue,
        poTrackNo: item.poTrackNo,
        lastGr101Date: formattedDate(item.lastGr101Date),
        gr101Qty: item.gr101Qty,
        lastGr103Date: formattedDate(item.lastGr103Date),
        gr103Qty: item.gr103Qty,
        lastGr105Date: formattedDate(item.lastGr105Date),
        gr105Qty: item.gr105Qty,
        lastGr107Date: formattedDate(item.lastGr107Date),
        gr107Qty: item.gr107Qty,
        lastGr109Date: formattedDate(item.lastGr109Date),
        gr109Qty: item.gr109Qty,
        lastIrDate: formattedDate(item.lastIrDate),
        qtyIr: item.qtyIr,
        ammountLcIr: item.ammountLcIr,
      };
    });

    res.status(200).json({
      success: true,
      message: "Berhasil mengambil data AllPo",
      data: {
        data: serializedData,
        totalPages,
        currentPage: pageNumber,
        totalItems,
      },
    });
  } catch (err) {
    console.error("Error fetching AllPo data:", err);
    res
      .status(500)
      .json({ success: false, message: "Error mengambil data AllPo" });
  }
};
