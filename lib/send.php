<?php

require "../modules/PHPMailer/Exception.php";
require "../modules/PHPMailer/OAuth.php";
require "../modules/PHPMailer/PHPMailer.php";
require "../modules/PHPMailer/POP3.php";
require "../modules/PHPMailer/SMTP.php";

	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	function sendEmail () {
			$mail = new PHPMailer(true);
			try {
	    $mail->SMTPDebug = false;        					
	    $mail->isSMTP();                 					
	    $mail->Host = 'smtp.gmail.com';  					
	    $mail->SMTPAuth = true;          					
	    $mail->Username = 'ex@gmail.com';  
	    $mail->Password = 'ex2021';        
	    $mail->SMTPSecure = 'tls';                
	    $mail->Port = 587;                     

	    //Recipients
	    $mail->setFrom('ex@gmail.com', 'Platina Live'); 
	    $mail->addAddress('ex@gmail.com', 'Platina Live ');    
			$mail->addReplyTo($_POST['email'], 'Platina Live');

			// Formatação 

	    $mail->isHTML(true);                                  
	    $mail->Subject = "Project | ". $_POST['servico'];
	    $mail->Body = '<div style="text-align: center;"><h1 >Novo Serviço 
			</h1>
			<p><strong>Categoria</strong>  : '.$_POST['servico'].' </p>
			<p><strong>Nome do cliente : </strong>  : '.$_POST['name'].' </p>
			<p><strong>Email do cliente : </strong>  : '.$_POST['email'].' </p>
			<p><strong>Numero do cliente : </strong>  : '.$_POST['numero'].' </p>
			<h3>Descrição</h3>
			<p>'.$_POST['description'].'</p> 
			</div>';
	    $mail->AltBody = 'É necessário utilizar um client que suporte HTML para ter acesso total ao conteúdo dessa mensagem';
	    
			$mail->send();
			header('Location: ../index.php?status=sucess/#contact');
	} catch (Exception $e) {
		header('Location: ../index.php?status=erro/#contact');
	}
	}

	if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['number']) || empty($_POST['service']) || empty($_POST['description'])){
		header('Location: ../index.php/#contact');
	} else {
		sendEmail();
	}

?>



