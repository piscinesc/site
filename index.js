function verif_champ(champ)
{
	if (champ == "")
	{ 
		alert("Les champs non rempli doivent l'être.");
		document.body.style.backgroundColor = "red";
		return false;
	}
	return true;
}