class Triangulo
		{
			constructor(lado_a)
		{
				this.lado_a=lado_a;
				}
			
			calcular_area()
			{
				let area=(1.71*this.lado_a**2)/4;
				return area;
			}
		}
			

		let mi_Triangulo=new Triangulo(4);
				alert("el Area del triangulo es   " + mi_Triangulo.calcular_area());
			