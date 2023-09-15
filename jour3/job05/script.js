
const Humain = {
    prenom : undefined,
    nom: undefined,
    age: undefined,
    ville: undefined
};

resume = (eleve) =>{
    console.log(`Cet élève s'appelle ${eleve.prenom} ${eleve.nom}, j'ai ${eleve.age}. Je vis aujourd'hui à ${eleve.ville}.`);
}


const etudiant = Object.create(Humain);
etudiant.prenom = "Fabien";
etudiant.nom = "Ricca";
etudiant.age = "28";
etudiant.ville = "Marseille";

resume(etudiant);