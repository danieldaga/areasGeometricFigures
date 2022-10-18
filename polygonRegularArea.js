
class Poligono_regular
{
    constructor(lado_a,apotema,numlados) {
        this.lado_a=lado_a; 

        this.apotema=apotema;

        this.numlados=numlados;
}
    calcular_perimetro() {
        let perimetro=this.lado_a*this.numlados;
        return perimetro;
    }
    
    calcular_area() {
        let area=(this.numlados*this.lado_a*this.apotema)/2;
        return area;
    }
    }
    let decision=prompt ("0 para perimetro. 1 para area");
        if (decision==0){
            let lado_a=prompt("introduzca la longitud del lado");
            let numlados=prompt("introduzca el numero de lados");
            let apotema=prompt("introduzca longitud de la apotema");
    
            let mi_Poligono_regular=new Poligono_regular(lado_a,apotema,numlados);
            alert("el perimetro del poligono es " + mi_Poligono_regular.calcular_perimetro());
        }
            else if (decision==1){
                let lado_a=prompt("introduzca un lado");
                let numlados=prompt("introduzca el numero de lados");
                let apotema=prompt("introduzca longitud de la apotema");
                let mi_Poligono_regular=new Poligono_regular(lado_a,apotema,numlados);
                alert("el area del poligono es " + mi_Poligono_regular.calcular_area());
}