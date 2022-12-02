<?php 

require('./FPDF/fpdf.php');

$user = $_POST['user'];
$email = $_POST['email'];

$text = "Hello $user, that is your email: $email. Is correct?";

$fpd = new FPDF();
$fpd->AddPage();
$fpd->SetFont('Arial','B',16);
$fpd->Cell(40,10,$text);
$fpd->Output();

?>