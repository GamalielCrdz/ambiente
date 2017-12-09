import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalContentComponent } from "./components/modal-content/modal-content.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  trash: any[] = [{
    name: "contenedor 1",
    building: "Edificio 2",
    capacityAvailable: "si",
    actualCapacity: 3
  },
  {
    name: "contenedor 2",
    building: "Edificio 2",
    capacityAvailable: "no",
    actualCapacity: 3
  },
  {
    name: "contenedor 3",
    building: "Edificio 3",
    capacityAvailable: "si",
    actualCapacity: 3
  },
  {
    name: "contenedor 4",
    building: "Edificio 3",
    capacityAvailable: "no",
    actualCapacity: 3
  },
  {
    name: "contenedor 5",
    building: "Edificio 4",
    capacityAvailable: "si",
    actualCapacity: 3
  },
  {
    name: "contenedor 6",
    building: "Edificio 4",
    capacityAvailable: "no",
    actualCapacity: 3
  },
  {
    name: "contenedor 7",
    building: "Edificio 5",
    capacityAvailable: "no",
    actualCapacity: 3
  },
  {
    name: "contenedor 8",
    building: "Edificio 5",
    capacityAvailable: "si",
    actualCapacity: 3
  },
  {
    name: "contenedor 9",
    building: "Edificio 6",
    capacityAvailable: "no",
    actualCapacity: 3
  },
  {
    name: "contenedor 10",
    building: "Edificio 6",
    capacityAvailable: "si",
    actualCapacity: 3
  },
  {
    name: "contenedor 11",
    building: "Edificio 7",
    capacityAvailable: "si",
    actualCapacity: 3
  },
  {
    name: "contenedor 12",
    building: "Edificio 7",
    capacityAvailable: "si",
    actualCapacity: 3
  },
  {
    name: "contenedor 13",
    building: "Edificio 8",
    capacityAvailable: "no",
    actualCapacity: 3
  },
  {
    name: "contenedor 14",
    building: "Edificio 8",
    capacityAvailable: "no",
    actualCapacity: 3
  },
  {
    name: "contenedor 15",
    building: "Edificio 1",
    capacityAvailable: "no",
    actualCapacity: 3
  },
  {
    name: "contenedor 16",
    building: "Edificio 2",
    capacityAvailable: "no",
    actualCapacity: 3
  },
  ];

  constructor(public dialog: MatDialog) {


    alert(this.determineTrashCan());
  }

  openModal(id: number) {
    console.log(this.trash[id]);
    let dialogRef = this.dialog.open(ModalContentComponent, {
      height: '60%',
      width: '60%',
      data: {
        name: this.trash[id].name, building: this.trash[id].building,
        capacityAvailable: this.trash[id].capacityAvailable,
        actualCapacity: this.trash[id].actualCapacity
      }
    });

    /*     dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.animal = result;
        }); */
  }

  public determineTrashCan():string {
    let fullTrash: string = "Los contenedores: \n";
    for (let key of this.trash) {
      if (key.capacityAvailable != "no") {
        fullTrash += key.name + "\n";
      }
    }
    return fullTrash += "Estan llenos";
  }

}
