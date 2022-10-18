class triangulo
		{
			constructor(lado_a)
		{
				this.lado_a=lado_a;
			}
			
			calcular_perimetro()
			{
				let perimetro=this.lado_a*3;
				return perimetro;
			}
			}
			let mi_triangulo=new triangulo(4);
				alert("el Perimetro del triangulo es   " + mi_triangulo.calcular_perimetro());
				