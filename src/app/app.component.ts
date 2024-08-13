import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title:string = 'METODOS CRUD: Create-Read-Update-Delete (Crear,Leer,Actualizar,Eliminar)';
  title2:string = 'Alfredo Galván';
  mensaje: string = '';
  
  closeAlert(): void {
    this.mensaje = ''; // O puedes usar null si lo prefieres
  }
  //Arreglo de objetos
  employees=[ 
    {name: 'Alf', position:'Modeler',email:'alf@gmail.com'},
    {name: 'Ani', position:'Teacher',email:'ani@gmail.com'},
    {name: 'Emmita', position:'Designer',email:'emma@gmail.com'},
    {name: 'Tobias', position:'Ecomomis',email:'tobias@gmail.com'},
    {name: 'Ivo', position:'Programmer',email:'ivo@gmail.com'}
  ];

  //Ejecutar doble enlace de datos
  //---------------------------------
  /*"doble enlace de datos" (two-way data binding), se refiere a la sincronización automática 
  de los datos entre el modelo y la vista. Esto significa que cualquier cambio en el modelo 
  se refleja automáticamente en la vista, y viceversa. */
  //Vamos a necesitar un modelo que se encargue de actualizar nuestros datos:
  model:any={}; //model de tipo any va a serigual a un objeto {},este objeto tendra los datos temporales y luego agregarlo al arreglo de empleados
  model2:any={};
  hideupdate:boolean=true; //para que se oculte el formulario2
  //METODOS CRUD:
  //C: Create (Crear)     - add
  //R: Read   (Leer)      - 
  //U: Update (Actualizar)- edit / update
  //D: Delete (Eliminar)  - delete
  addEmployee():void{
    this.employees.push(this.model);
    this.mensaje='campo agregado';
  }
  deleteEmployee(i:any):void{
    //alert('careful, you are going to delete');
    var answer=confirm('Esta seguro de querer confirmar'); //si es si da true
    if(answer)
      this.employees.splice(i,1);
    this.mensaje='campo eliminado';
  }
  myvalue:any; //variable

  aditEmployee(i:number):void{
    this.hideupdate=false;
    this.model2.name=this.employees[i].name;
    this.model2.position=this.employees[i].position;
    this.model2.email=this.employees[i].email;
    this.myvalue=i;
      }
  updateEmployee():void{
    console.log(this.model2)
    let i=this.myvalue;
    let j:any;
    for(j=0;j<this.employees.length;j++){
      if(i==j){
        this.employees[i]=this.model2;
        this.model2={};
        this.mensaje="Record is successfuly Update";
      }
    }
  }

}
