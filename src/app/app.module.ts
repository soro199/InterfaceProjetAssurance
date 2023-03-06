import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreationUtilisationComponent } from './Views/Utilisateur/creation-utilisation/creation-utilisation.component';
import { DetailUtilisateurComponent } from './Views/Utilisateur/detail-utilisateur/detail-utilisateur.component';
import { CreationPoliceComponent } from './Views/PolicaAssurance/creation-police/creation-police.component';
import { DetailPoliceComponent } from './Views/PolicaAssurance/detail-police/detail-police.component';
import { DetailSinistreComponent } from './Views/Sinistre/detail-sinistre/detail-sinistre.component';
import { CreationSinistreComponent } from './Views/Sinistre/creation-sinistre/creation-sinistre.component';
import { CreationNotificationComponent } from './Views/Notification/creation-notification/creation-notification.component';
import { DetailNotificationComponent } from './Views/Notification/detail-notification/detail-notification.component';

import { HistorieCreationComponent } from './Views/Historique/historie-creation/historie-creation.component';
import { DetailHistoriqueComponent } from './Views/Historique/detail-historique/detail-historique.component';
import { DetailDocumentComponent } from './Views/Document/detail-document/detail-document.component';
import { CreationDocumentComponent } from './Views/Document/creation-document/creation-document.component';
import { CreationPaiementComponent } from './Views/Paiement/creation-paiement/creation-paiement.component';
import { DetailPaiementComponent } from './Views/Paiement/detail-paiement/detail-paiement.component';
import { UtilisateurServiceService } from './Services/Utisateurs/utilisateur-service.service';
import{HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './Views/login/login.component';
import { FooterComponent } from './Views/Acceuil/footer/footer.component';
import { NavbarComponent } from './Views/Acceuil/navbar/navbar.component';
import { BodyComponent } from './Views/Acceuil/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    CreationUtilisationComponent,
    DetailUtilisateurComponent,
    CreationPoliceComponent,
    DetailPoliceComponent,
    DetailSinistreComponent,
    CreationSinistreComponent,
    CreationNotificationComponent,
    DetailNotificationComponent,
   
    HistorieCreationComponent,
    DetailHistoriqueComponent,
    DetailDocumentComponent,
    CreationDocumentComponent,
    CreationPaiementComponent,
    DetailPaiementComponent,
    LoginComponent,
    FooterComponent,
    NavbarComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [UtilisateurServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
