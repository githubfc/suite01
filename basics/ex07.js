/*
    Ecrire une fonction "boostedAddition",
    qui prend un paramètre un tableau de nombre,
    et qui retourne un nombre étant l'addition de tous les nombre du tableau

*/

//  écrire votre code sous ce commentaire

const boostedAddition = (tab)=>{
	let sum = 0
	for (let i=0; i<tab.length; i++){
		sum +=tab[i] 
	}
	return sum

	}
/*
  Test 1
  Résultat attendu : 15
*/

boostedAddition([4, 5, 6]);

/*
  Test 2
  Résultat attendu : 44
*/
boostedAddition([4, 4, 6, 8, 10, 12]);
