class circulo //define la clase
		{
			constructor(radio1) //es el constructor como si fuera el molde o instrucciones para asignar atributos
			{
				this.radio1=radio1; //el this hace alusión al nombre del objeto
			}
			calcular_area()
			{
				let area=3.14*(this.radio1**2); //declara area y su funcion de pi por el radio al cuadrado
				return area;
			}
			calcular_perimetro()
			{
				let perimetro=3.14*(2*this.radio1); //perimetro circulo
				return perimetro;
			}
		}
		
		let mi_circulo=new circulo(3); //este es nuestro area del circulo
			alert("el area del circulo es " + mi_circulo.calcular_area());
			alert("El perimetro del circulo es " + mi_circulo.calcular_perimetro());		
