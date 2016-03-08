<!DOCTYPE html>
<html lang="fr">

<head>

    <meta charset="utf-8">
    <meta name="author" content="Flavien GILLE & Loïc Payol & un connard">
    <title>Echiquier de Euler</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" type="text/css" href="dist/Bootstrap/css/bootstrap.min.css">

</head>
<body>
<?php

	$echiquier;

	for ($i=0; $i < 8; $i++) { 
		
		for ($y=0; $y < 8; $y++) 
		{
			if (($y+$i)%2==0) 
			 {
				$echiquier[$i][$y] = 0;
			 } 
			else
			 {
			 	$echiquier[$i][$y] = 1;
			 }

		}
	}
	foreach ($echiquier as $key => $value) 
	{
		foreach ($echiquier[$key] as $k => $v) 
		{
			if ($echiquier[$key][$k]==0) 
			{
				echo '<img src="img/case_claire.png">';
			}
			else
			{
				echo '<img src="img/case_fonce.png">';
			}
		}
		echo "<br />";
	}
?>
</body>