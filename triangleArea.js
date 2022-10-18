class Triangulo
		{
			constructor(Base_A,Altura_H)
		{
				this.Base_A=Base_A;
				this.Altura_H=Altura_H;
			}
			
			calcular_Area()
			{
				let Area=this.Base_A*this.Altura_H/2;
				return Area;
			}
			}
			

		let decision=prompt ("0 para triangulo");
			if (decision==0)
			{
				let Base_A=prompt("introduzca la longitud de la Base");
				let Altura_H=prompt("introduzca la longitud de la altura");
				 let mi_Triangulo=new Triangulo(Base_A,Altura_H); //este es nuestro triangulo
				alert("el area del triangulo es   " + mi_Triangulo.calcular_Area());
			}	