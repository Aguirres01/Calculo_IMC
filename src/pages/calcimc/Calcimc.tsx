import { useState } from "react";
import CampForm from "@/components/CampForm";
import Tabelaimc from "@/components/Tabelaimc";
import Link from "next/link";

//página PAI
export default function Calcimc() {
    const [peso, setPeso] = useState<number>(0);
    const [altura, setAltura] = useState<number>(0);
    const [imc, setImc] = useState<number>(0);

    function Calcular() {
        let res = peso / (altura * altura);
        setImc(res)
    }



    return (
        <div className="flex flex-col border border-black w[300px] gap-5">
            <p className="w-full text-center bg-zinc-400 font-bold text-lg">Cálculo do IMC</p>
            <CampForm label="peso" state={peso} funcState={setPeso} />
            <CampForm label="altura" state={altura} funcState={setAltura} />
            <button className="bg-indigo-900 text-white mx-2 p-1 rounded-lg cursor-pointer" onClick={Calcular}>Calcular</button>
            <Link className="bg-indigo-900 text-white mx-2 p-1 rounded-lg cursor-pointer text-center" href={{
                pathname: "/dadosimc/Dadosimc",
                query:{
                    p_peso:peso,
                    p_altura:altura,
                    p_imc:imc
                }
            }}>Dados IMC</Link>
            <p className="bg-zinc-100 p-1">Resultado: {imc.toFixed(1)}</p>


            <Tabelaimc imc={imc}/>
        </div>
    )
}