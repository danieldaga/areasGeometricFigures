class Circulo
		{
			constructor(Radio)
			{
				this.Radio=Radio;
			}
			calcular_Area()
			{
				let Area=math.pi*this.Radio**2;
				return Area;
			}
			calcular_Perimetro()
			{
				let Area=math.pi*2*this.Radio;
				return Area;
			}
		}
		let decision=prompt ("0 para area circulo y 1 para perimetro circulo");
			if (decision==0)
			{
				let Radio=prompt("introduzca la longitud del Radio");
				 let mi_circulo=new circulo(Radio); //este es nuestro triangulo
				alert("el area del circulo es " + mi_circulo.calcular_Area());
			}	