import { Utilisateur } from "./utilisateur";

export class Paiement{

    id?:number;
    datePaiement?:Date;
    montant?:number;
    modePaiement?:string;
    utilisateur?:Utilisateur;
	
    

}