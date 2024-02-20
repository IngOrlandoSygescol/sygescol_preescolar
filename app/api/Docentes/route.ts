import { NextResponse } from "next/server";
import { conecctions } from "../../../utils/Conexions";

export async function GET(req: any) {
    const { searchParams } = req?.nextUrl;

    try {
        let colegio: any = searchParams.get("colegio");

        const conexion = conecctions[colegio];

        const [docentes]: any = await conexion.query(`
        SELECT i AS value, CONCAT(dcne_nom1,' ',dcne_nom2,' ',dcne_ape1,' ',dcne_ape2) AS label 
        FROM dcne 
        WHERE cargoProfesion="PREESCOLAR"
        `);

        return NextResponse.json(docentes, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ body: "Internal Server Error" }, { status: 500 });
    }
}
