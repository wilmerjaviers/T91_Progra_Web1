import { useState } from "react"
import Swal from "sweetalert2"

const UseCuadratica = () => {
    const [a, setA] = useState('')
    const [b, setB] = useState('')
    const [c, setC] = useState('')
    const [resultado1, setResultado1] = useState('')
    const [resultado2, setResultado2] = useState('')

    const Calcular = () => {
        if (a === '') {
            Alerta('Ingrese coeficiente a')
        } else if (b === '') {
            Alerta('Ingrese coeficiente b')
        } else if (c === '') {
            Alerta('Ingrese coeficiente c')
        } else {
            let discriminante = Math.pow(Number(b), 2) - 4 * Number(a) * Number(c)
            if (discriminante < 0) {
                Alerta('La ecuación no tiene soluciones reales')
            } else if (discriminante === 0) {
                let resultado = -Number(b) / (2 * Number(a))
                setResultado1(resultado)
                setResultado2('')
            } else {
                let resultado1 = (-Number(b) + Math.sqrt(discriminante)) / (2 * Number(a))
                let resultado2 = (-Number(b) - Math.sqrt(discriminante)) / (2 * Number(a))
                setResultado1(resultado1)
                setResultado2(resultado2)
            }
        }
    }

    const Limpiar = () => {
        setA('')
        setB('')
        setC('')
        setResultado1('')
        setResultado2('')
        alertaDos('Todos los datos han sido restablecidos!')
    }

    const Alerta = (mensaje) => {
        Swal.fire({
            title: "Advertencia",
            text: mensaje,
            icon: "warning"
        })
    }

    function alertaDos(mensaje) {
        Swal.fire({
            icon: "success",
            title: mensaje,
          });
        }

    return {
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
    }
}

export default UseCuadratica