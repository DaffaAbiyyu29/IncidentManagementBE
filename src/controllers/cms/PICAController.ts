import { Request, Response } from "express";
import { DetailPICA } from '../../models/Table/Satria/trx_DetailPICA';
import { PICA } from "../../models/Table/Satria/trx_PICA";

export const createPICA = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { IncidentID, created_by, details } = req.body;

    // Validasi input utama
    if (!IncidentID) {
      res
        .status(400)
        .json({ success: false, message: "IncidentID wajib diisi" });
      return;
    }

    // Validasi detail jika ada
    if (!details || !Array.isArray(details) || details.length === 0) {
      res.status(400).json({
        success: false,
        message: "Array 'details' wajib diisi",
      });
      return;
    }

    // Cari PICA berdasarkan IncidentID (menggunakan findFirst, karena IncidentID bukan unique key)
    const existingPICA = await PICA.findFirst({
      where: { IncidentID },
    });

    let newPICA;
    if (existingPICA) {
      // Jika PICA sudah ada, update
      newPICA = await PICA.update({
        where: { PICAID: existingPICA.PICAID }, // Gunakan PICAID untuk update
        data: {
          update_at: new Date(), // Ganti 'updated_at' menjadi 'update_at'
          update_by: created_by,
        },
      });
    } else {
      // Jika PICA belum ada, buat baru
      newPICA = await PICA.create({
        data: {
          IncidentID,
          created_at: new Date(),
          created_by,
          update_at: null,
          update_by: null,
        },
      });
    }

    // Mapped detail yang akan disimpan atau diperbarui
    const mappedDetails = details.map((item: any) => ({
      DetailPICAID: item.DetailPICAID, // asumsikan ID unik sudah diberikan
      PICAID: newPICA.PICAID, // gunakan ID dari hasil insert/ update PICA
      Status: item.Status,
      Problem: item.Problem,
      RootCaused: item.RootCaused,
      CorrectiveAction: item.CorrectiveAction,
      PreventiveAction: item.PreventiveAction,
    }));

    const updatedDetails = [];
    const detailIDsFromRequest = mappedDetails.map(
      (detail) => detail.DetailPICAID
    );

    // Mengupdate atau membuat detail
    for (const detail of mappedDetails) {
      const existingDetail = await DetailPICA.findUnique({
        where: { DetailPICAID: detail.DetailPICAID },
      });

      if (existingDetail) {
        // Update detail jika sudah ada
        const updatedDetail = await DetailPICA.update({
          where: { DetailPICAID: detail.DetailPICAID },
          data: { ...detail },
        });
        updatedDetails.push(updatedDetail);
      } else {
        // Buat detail baru jika belum ada
        const createdDetail = await DetailPICA.create({
          data: { ...detail },
        });
        updatedDetails.push(createdDetail);
      }
    }

    // Hapus detail yang tidak ada di request
    const detailsToDelete = await DetailPICA.findMany({
      where: {
        PICAID: newPICA.PICAID,
        NOT: {
          DetailPICAID: {
            in: detailIDsFromRequest,
          },
        },
      },
    });

    for (const detail of detailsToDelete) {
      await DetailPICA.delete({
        where: { DetailPICAID: detail.DetailPICAID },
      });
    }

    res.status(201).json({
      success: true,
      message: "PICA dan detail berhasil dibuat/ diperbarui",
      data: {
        PICA: newPICA,
        details: updatedDetails,
      },
    });
  } catch (error) {
    console.error("Error createOrUpdatePICAWithDetails:", error);
    res.status(500).json({
      success: false,
      message: "Gagal membuat atau memperbarui PICA dan detail",
      error,
    });
  }
};

export const getPICA = async (req: Request, res: Response): Promise<void> => {
  try {
    const { IncidentID } = req.params;

    // Validasi apakah IncidentID ada
    if (!IncidentID) {
      res
        .status(400)
        .json({ success: false, message: "IncidentID wajib diisi" });
      return;
    }

    // Cari PICA berdasarkan IncidentID
    const pica = await PICA.findFirst({
      where: { IncidentID: Number(IncidentID) }, // Pastikan IncidentID di-cast ke Number
      include: {
        trx_DetailPICA: true, // Sertakan detail yang terkait dengan PICA
      },
    });

    // Jika PICA tidak ditemukan
    if (!pica) {
      res.status(404).json({
        success: false,
        message: `PICA untuk IncidentID ${IncidentID} tidak ditemukan`,
      });
      return;
    }

    // Mapping detail untuk format output yang diinginkan
    const mappedDetails = pica.trx_DetailPICA.map((detail: any) => ({
      DetailPICAID: detail.DetailPICAID,
      Status: detail.Status,
      Problem: detail.Problem,
      RootCaused: detail.RootCaused,
      CorrectiveAction: detail.CorrectiveAction,
      PreventiveAction: detail.PreventiveAction,
    }));

    // Response dengan data PICA dan detailnya
    res.status(200).json({
      success: true,
      data: {
        IncidentID: pica.IncidentID,
        created_by: pica.created_by,
        details: mappedDetails,
      },
    });
  } catch (error) {
    console.error("Error getPICA:", error);
    res.status(500).json({
      success: false,
      message: "Gagal mendapatkan data PICA",
      error,
    });
  }
};
