import { Historique } from "./historique";

export class Dossier {
    
    id!: number;
    cin!: string;
    passport!: string ;
    importateur!: string ;
    statut!: string ;
    marque!: string;
    modele!: string;
    dateDecision!: Date;
    numAvis!: string;
    refbf!: string;
    historiques!: Historique[];

}