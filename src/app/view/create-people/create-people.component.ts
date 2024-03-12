import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { People } from 'src/models/people';
import { PeopleService } from 'src/services/people.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-people',
  templateUrl: './create-people.component.html',
  styleUrls: ['./create-people.component.css']
})
export class CreatePeopleComponent implements OnInit {
  @Input() employee: People = new People();

  peopleForm: FormGroup | undefined;
  //myForm: FormGroup;

  newPeople = {
    guiid: '',
    dni: '',
    name: '',
    lastname: '',
  };
  
  constructor(private peopleService: PeopleService,private router: Router, @Inject(MAT_DIALOG_DATA) public data: { people: People, isModify:boolean }) {
    
    /*this.myForm = this.fb.group({
      dni: ['', [Validators.required, Validators.maxLength(10)]]
    });*/
    
    if(data.isModify){
      this.newPeople.dni = data.people.dni || '';
      this.newPeople.name = data.people.name || '';
      this.newPeople.lastname = data.people.lastname || '';
      this.newPeople.guiid = data.people.guiid || '';
    }

   }

  ngOnInit(): void {
  }

  SendDataPeople():void{
    if(!this.data.isModify){

      const data:People = {
        guiid: undefined,
        name: this.newPeople.name,
        dni: this.newPeople.dni,
        lastname: this.newPeople.lastname
      }
  
      this.peopleService.post(data).subscribe(response =>{
        console.log('Datos enviados correctamente: ', response);
  
        this.newPeople.dni = '';  
        this.newPeople.name = '';
        this.newPeople.lastname = '';
        alert('Persona creado correctamente.');
        this.router.navigate(['/personas']);
      }, error => {
        console.error('Error al crear una persona:', error);
        alert('Error: Hay un problema para crear la persona.');
        // Manejar el error adecuadamente
      })

    }else{

      const data:People = {
        guiid: this.newPeople.guiid,
        name: this.newPeople.name,
        dni: this.newPeople.dni,
        lastname: this.newPeople.lastname,
      }
      const idPeople:string |undefined = data.guiid;
      this.peopleService.update(data, idPeople )
      .subscribe(response => {
        console.log('Persona actualizado con éxito:', response);
        alert('Se actualizo la persona correctamente.');
        this.router.navigate(['/personas']);
        // Realizar acciones adicionales después de la actualización, como redireccionar a otra página
      }, error => {
        console.error('Error al actualizar Persona:', error);
        alert('Error: Hay un problema para actualizar la persona.');
        // Manejar el error adecuadamente
      });
    }

  }

}
