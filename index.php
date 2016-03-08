<!DOCTYPE html>
<html lang="fr">

<head>

    <meta charset="utf-8">
    <meta name="author" content="Flavien GILLE & Loïc Payol & Léo Garcia Cannelo">
    <title>Echiquier de Euler</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" type="text/css" href="dist/Bootstrap/css/bootstrap.min.css">

</head>
<body>
<div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
			<h1 class="text-primary text-center">
				Échiquier d'Euler
			</h1>
		</div>
	</div>
	<div class="row">
		<div class="col-md-2">
			<form role="form">
				<div class="form-group">
					<label for="exampleInputEmail1">
						Saisir taille de la grille (de base 8*8)
					</label>
					<input type="txt" class="form-control" id="exampleInputEmail1" />
				</div>

				<div class="checkbox">
					<label>
						<input type="checkbox" /> Choisir soit même la position de départ.
					</label>
				</div> 

				<button type="submit" class="btn btn-default">
					Valider
				</button>
			</form> 
		</div>
		<div class="col-md-10">
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
		</div>
	</div>
</div>
</body>
