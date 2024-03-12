import { Component, OnInit } from '@angular/core';
import { PeopleService} from 'src/services/people.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalService } from 'src/services/modal.service';
import { People } from 'src/models/people';
import { AuthService } from 'src/services/auth.service';
import { CreatePeopleComponent } from 'src/app/view/create-people/create-people.component';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit {
  peoples: People[] | undefined;
  isModify:boolean = false;
  token: string | null | undefined;
  constructor(private authService: AuthService,  private peopleService: PeopleService, private router: Router, private dialog: MatDialog, private modalService: ModalService ){}

  ngOnInit(): void {
      this.authService.post().subscribe(newToken => {
        console.log('Token obtenido:', newToken.token);
        this.token = newToken.token;
        this.authService.saveToken(this.token);
        this.getPeoples();
      });
  }

  getPeoples(): void {
    this.peopleService.get()
    .subscribe(peoples => this.peoples = peoples);
  }

  linkListPeople(): void {
    this.router.navigate(['/personas']);
  }

  abrirModal(peopleData?: People): void {
    if(peopleData){
      this.isModify = true;

      this.modalService.blockModal();
      const dialogRef = this.dialog.open(CreatePeopleComponent, {
        disableClose:true,
        position: {top: '-10%', left: '10%'},
        data:{
          people: peopleData,
          isModify: this.isModify
        }
      });
  
      // Ejemplo de cómo manejar el resultado después d0e cerrar la ventana modal
      dialogRef.afterClosed().subscribe(result => {
        console.log('El modal se cerró y devolvió:', result);
        this.modalService.unBlockModal();
      });
    }else{
      this.isModify = false;

      this.modalService.blockModal();
      const dialogRef = this.dialog.open(CreatePeopleComponent, {
        disableClose:true,
        position: {top: '-10%', left: '10%'},
        data:{
          people: peopleData,
          isModify: this.isModify
        }
      });

      // Ejemplo de cómo manejar el resultado después d0e cerrar la ventana modal
      dialogRef.afterClosed().subscribe(result => {
        console.log('El modal se cerró y devolvió:', result);
        this.modalService.unBlockModal();
      });
    }

  }

  DeletePeople(guiid:string | undefined): void{

      // Método para eliminar un empleado
    this.peopleService.delete(guiid || '')
      .subscribe(response => {
        console.log('Persona eliminado con éxito:', response);
        alert('Se elimino la persona correctamente.');
        this.linkListPeople();
      }, error => {
        console.error('Error al eliminar persona:', error);
        alert('Error: Hubo un problema para eliminar una persona');
      });
  }

}
