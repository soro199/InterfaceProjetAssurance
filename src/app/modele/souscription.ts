import { Police } from "./police";
import { Utilisateur } from "./utilisateur";

export class Souscription{
id!:number;
date_souscription!:Date;
description!:string;
dateDebut!:Date;
dateFin!:Date
utilisateur!:Utilisateur;
police!:Police;



}