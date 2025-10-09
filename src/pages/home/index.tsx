import { BsCartPlus } from "react-icons/bs"
export default function Home() {
    return (
        <div>
            <main className="w-full max-w-7xl px-4 mx-auto">
                <h1 className="font-bold text-2xl mb-4 mt-10 text-center">Produtos em alta</h1>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5"  >

                    <section className="w-full">
                        <img
                            className="w-full rounded-lg mb-h-70 mb-2"
                            src="https://images.tcdn.com.br/img/img_prod/993134/fone_de_ouvido_sem_fio_branco_bluetooth_v5_4_a_gold_fn_ba10_1584_1_e24411cb33aab866507085080e04ff11.jpg" alt="logo do produto" />
                        <p className="font-medium mt-2 mb-2">Fone de ouvido sem fio</p>
                        <div className="flex gap-3 items-center">
                            <strong className="text-zinc-700/90">R$ 100,00</strong>
                            <button className="bg-zinc-900 p-1 rounde">
                                <BsCartPlus size={22} color="#fff" />
                            </button>
                        </div>

                    </section>

                   
                </div>
            </main>
        </div>
    )
}