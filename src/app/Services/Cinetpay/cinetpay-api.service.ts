import { Injectable } from '@angular/core';

declare var CinetPay:any ;


@Injectable({
  providedIn: 'root'
})
export class CinetpayApiService {

  constructor() { }




 public checkout(montant:number) {
    CinetPay.setConfig({
        apikey: '1108530282628b98359a9679.65128624',//   YOUR APIKEY
        site_id: '993000',//YOUR_SITE_ID
        notify_url: 'http://mondomaine.com/notify/',
        mode: 'PRODUCTION'
    });
    CinetPay.getCheckout({
        transaction_id: Math.floor(Math.random() * 100000000).toString(),
        amount: montant,
        currency: 'XOF',
        channels: 'ALL',
        description: 'Test de paiement',   
         //Fournir ces variables pour le paiements par carte bancaire
        customer_name:"Joe",//Le nom du client
        customer_surname:"Down",//Le prenom du client
        customer_email: "down@test.com",//l'email du client
        customer_phone_number: "088767611",//l'email du client
        customer_address : "BP 0024",//addresse du client
        customer_city: "Antananarivo",// La ville du client
        customer_country : "CM",// le code ISO du pays
        customer_state : "CM",// le code ISO l'état
        customer_zip_code : "06510", // code postal

    });
/*
   CinetPay.waitResponse().subscribe((data: { status: string; })=>{
        if (data.status == "REFUSED") {
            alert("Votre paiement a échoué")
                window.location.reload();
                
            
        } else if (data.status == "ACCEPTED") {
            alert("Votre paiement a été effectué avec succès")
                window.location.reload();
            
        }

    });*/

    // CinetPay.onError(function(data) {
    //     console.log(data);
    // });

}
}
