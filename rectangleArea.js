class Rectangulo //Creamos la clase mas general
		{
			constructor(longitud_A,longitud_B) //A y B son los lados del rectangulo con constructor se asignan los atributos
		{
				this.longitud_A=longitud_A; //this en este caso es rectangulo
		//La variable de la derecha se mete en el atributo de la clase
				this.longitud_B=longitud_B;
		}
			calcular_area() //el unico metodo que tiene la clase
		{
				let area=this.longitud_A*this.longitud_B;
				return area; //devuelve el metodo o funcion
		}
		}
		
		class Cuadrado extends Rectangulo //mediante herencia particula
		{//el constructor es el de rectangulo extends
			calcular_area() //el metodo se particulariza para un cuadrado
		{
				let area=this.longitud_A**2;
				return area;
		}
		}
		//instanciamos objetos de la clase
		let decision=prompt ("0 para rectangulo. 1 para cuadrado");
			if (decision==0)
			{
				let lado_A=prompt("introduzca la longitud del lado mas largo");
				let lado_B=prompt("introduzca la longitud del lado mas corto");
			
				let mi_rectangulo=new Rectangulo(lado_A,lado_B); //este es nuestro rectangulo
				alert("el area del rectangulo es " + mi_rectangulo.calcular_area());
			//llama al metodo de rectangulo
			}
				else if (decision==1)
			{
					let lado_A=prompt("introduzca un lado")
					let mi_Cuadrado=new Cuadrado(lado_A);
					alert("el area del cuadrado es " + mi_Cuadrado.calcular_area());
			}