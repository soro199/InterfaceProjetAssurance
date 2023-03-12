import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Police } from 'src/app/modele/police';
import { PoliceService } from 'src/app/Services/Police/police.service';

@Component({
  selector: 'app-ajout-police',
  templateUrl: './ajout-police.component.html',
  styleUrls: ['./ajout-police.component.css']
})
export class AjoutPoliceComponent {


  
  title = 'InterfaceAssurance';

  police : Police = new Police();
  constructor(private PoliceService:PoliceService, private route:Router){}

  ngOnInit(): void {


    
  }

save(){
this.PoliceService.createPolice(this.police).subscribe(data=>{

  console.log(data);
  this.route.navigate(['/listePolice']);
},error=>console.log(error));


  }


  navigation(){

    this.route.navigate(['/listePolice']);
  }
  
onSubmit(){
  this.save();

}


}
