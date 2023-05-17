import { DetailInvestment } from './../models/Detail-Investment';
import { AppDataSource } from "../data-source";
import {Request, Response} from 'express';


const detailInvestmentRepository = AppDataSource.getRepository(DetailInvestment)

class DetailInvestmentController{
    static createDetailInvestment = async(req: Request, res: Response) => {
        const { startDate, endDate} = req.body

        try {
            
            const detailInvestment =  new DetailInvestment()
            detailInvestment.startDate = startDate,
            detailInvestment.endDate = endDate,
            detailInvestment.total = 0

            await detailInvestmentRepository.save(detailInvestment)
            return res.json({
                ok: true,
                msg: 'created'
            })
        } catch (e) {
            return res.json({
                ok: false,
                msg: `Error => ${e}`
            })
        }
    };

    static listDetailInvestment = async(req: Request, res: Response) => {
        const id = parseInt(req.params.id)

    try {
        const detailInvestment = await detailInvestmentRepository.find({
            where: { state: true},
        })
        return detailInvestment.length > 0
        ? res.json({ ok: true, detailInvestment})
        : res.json({ ok: false, msg: `Data not found`})
    } catch (e) {
        return res.json({
            ok: false,
            msg: `Error => ${e}`
        })
    }
    }
}

export default DetailInvestmentController