import UseCuadratica from "../hooks/UseCuadratica"

const Cuadratica = () => {
    const {
        a,
        setA,
        b,
        setB,
        c,
        setC,
        resultado1,
        resultado2,
        Calcular,
        Limpiar
    } = UseCuadratica()

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-6 mb-3">
                    <label className="form-label">Ingrese coeficiente a:</label>
                    <input type="number" className="form-control" value={a} onChange={(e) => setA(e.target.value)} />
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-6 mb-3">
                    <label className="form-label">Ingrese coeficiente b:</label>
                    <input type="number" className="form-control" value={b} onChange={(e) => setB(e.target.value)} />
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-6 mb-3">
                    <label className="form-label">Ingrese coeficiente c:</label>
                    <input type="number" className="form-control" value={c} onChange={(e) => setC(e.target.value)} />
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-6 mb-3">
                    <label className="form-label">Resultado 1:</label>
                    <input type="number" className="form-control" value={resultado1} readOnly />
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-6 mb-3">
                    <label className="form-label">Resultado 2:</label>
                    <input type="number" className="form-control" value={resultado2} readOnly />
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-3 mb-3">
                    <button className="btn btn-success" onClick={Calcular} >Calcular</button>
                </div>
                <div className="col-3 mb-3">
                    <button className="btn btn-danger" onClick={Limpiar} >Limpiar</button>
                </div>
            </div>
        </div>
    )
}

export default Cuadratica