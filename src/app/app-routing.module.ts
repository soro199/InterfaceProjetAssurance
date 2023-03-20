import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './Views/Acceuil/body/body.component';
import { BodydashbordComponent } from './Views/Dashbord/bodydashbord/bodydashbord.component';
import { LoginComponent } from './Views/login/login.component';
import { CreationPaiementComponent } from './Views/Paiement/creation-paiement/creation-paiement.component';
import { ListePaiementComponent } from './Views/Paiement/liste-paiement/liste-paiement.component';
import { AjoutPoliceComponent } from './Views/Police/Ajoute/ajout-police/ajout-police.component';
import { ListPoliceComponent } from './Views/Police/Liste/list-police/list-police.component';
import { AjoutRoleComponent } from './Views/Role/Ajout/ajout-role/ajout-role.component';
import { ListRoleComponent } from './Views/Role/Liste/list-role/list-role.component';
import { CreationSouscriptionComponent } from './Views/Souscription/creation-souscription/creation-souscription.component';
import { ListeSouscriptionComponent } from './Views/Souscription/liste-souscription/liste-souscription.component';
import { CreationUtilisationComponent } from './Views/Utilisateur/creation-utilisation/creation-utilisation.component';
import { DetailUtilisateurComponent } from './Views/Utilisateur/detail-utilisateur/detail-utilisateur.component';
import { ModifierUtilisateurComponent } from './Views/Utilisateur/modifier-utilisateur/modifier-utilisateur.component';
import { UtilisateurListeComponent } from './Views/Utilisateur/utilisateur-liste/utilisateur-liste.component';

const routes: Routes = [

  {path:'',
   component:BodyComponent,
   pathMatch: 'full',},
   {
  path:'login',
     component:LoginComponent,
    data:{

      title:'login page'
    }


   },

   {
    path:'dashboard',
    component:BodydashbordComponent,
    data:{
  
      title:'dasbhoard'
    }
  
  
     },
     {
      path:'listeUtilisateur',
      component:UtilisateurListeComponent, 
      data:{
    
        title:'liste utilisateur'
      }
    
    
       },

       {
        path:'creationutilisateur',
        component:CreationUtilisationComponent, 
        data:{
      
          title:'creation utilisateur'
        }
      },
          {
                path:'modifierUtilisateur/:id',
                component:ModifierUtilisateurComponent, 
                data:{
              
                  title:'modifier utilisateur'
                }
      
      
         }

         ,
          {
          path:'detailUtilisateur/:id',
          component:DetailUtilisateurComponent, 
          data:{
        
            title:'detail utilisateur'
          }
         },
         {
         path:'ajoutRole',
         component:AjoutRoleComponent, 
         data:{
       
           title:'ajout role'
         }
        },
        {
        path:'listeRole',
        component:ListRoleComponent, 
        data:{
      
          title:'liste role'
        }
       },
       
          {
          path:'ajoutPolice',
          component:AjoutPoliceComponent, 
          data:{
        
            title:'ajout police'
          }
         },
         {
         path:'listePolice',
         component:ListPoliceComponent, 
         data:{
       
           title:'liste police'
         }
        },
       
          {
          path:'ajoutPaiement',
          component:CreationPaiementComponent, 
          data:{
        
            title:'ajout paiement'
          }
         },
        
         {
         path:'listePaiement',
         component:ListePaiementComponent, 
         data:{
       
           title:'liste paiement'
         }
        },
        
        {
        path:'listeSouscription',
        component:ListeSouscriptionComponent, 
        data:{
      
          title:'liste souscription'
        }
       }
       ,       
        {
        path:'modifierSouscription/:id',
        component:ListeSouscriptionComponent, 
        data:{
      
          title:'modification souscription'
        }
       }
       ,
        
       {
       path:'creationSouscription',
       component: CreationSouscriptionComponent, 
       data:{
     
         title:'modification souscription'
       }
      }
       
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
