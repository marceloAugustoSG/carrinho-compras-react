export default function Cart() {
    return (
        <div className="w-full max-w-7xl mx-auto">

            <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>

            <section className="flex items-center justify-between border-b-2 border-gray-300">
                <img
                    className="w-28"
                    src="https://images.tcdn.com.br/img/img_prod/993134/fone_de_ouvido_sem_fio_branco_bluetooth_v5_4_a_gold_fn_ba10_1584_1_e24411cb33aab866507085080e04ff11.jpg"
                    alt="logo do produto"
                />

                <strong>Preço: R$1.000</strong>
                <div className="flex items-center justify-center gap-3">
                    <button className="bg-slate-600 px-2 rounded text-white font medium flex items-center justify-content">
                        -
                    </button>
                    2
                    <button className="bg-slate-600 px-2 rounded text-white font medium flex items-center justify-content">
                        -
                    </button>

                </div>
                <strong className="float-right">SubTotal: R$1.000</strong>
            </section>
            <p className="font-bold mt-4">Total:R$:1.000</p>

        </div>
    )
}