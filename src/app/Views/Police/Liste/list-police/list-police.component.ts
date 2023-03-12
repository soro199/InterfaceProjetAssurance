import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Police } from 'src/app/modele/police';
import { PoliceService } from 'src/app/Services/Police/police.service';

@Component({
  selector: 'app-list-police',
  templateUrl: './list-police.component.html',
  styleUrls: ['./list-police.component.css']
})
export class ListPoliceComponent {


  title = 'InterfaceAssurance';


  police:any= [];

  constructor (private PoliceApi:PoliceService, private router:Router){}

  getPolice(){


    this.PoliceApi.getPolice().subscribe(

      (donnees:Police[])=>{
              console.log(donnees); 
        this.police= donnees; 
      },
      (error:HttpErrorResponse)=>{
        console.log(error.message);
      }
    );
  }
  ngOnInit(): void{

    this.getPolice();


  }

  deleteOnePolice(id:number){

    this.PoliceApi.deletfirstPolice(id).subscribe(data=>{

      console.log(data);
      this.getPolice();
    });

  }


  modifierPolice(id:number){
   
    this.router.navigate(['/',id]);
  }


  getfirstPolice(id:number){
    this.router.navigate(['/',id]);



  }

}
