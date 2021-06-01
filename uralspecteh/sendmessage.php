<?php
$sendto   = "info.razumka@yandex.ru";
$username = $_POST['name2'];
$usermail = $_POST['email2'];
$usertel = $_POST['tel2'];
$check = $_POST['check'];
$content  = nl2br($_POST['msg']);
// Формирование заголовка письма
$subject  = "Новое сообщение";
$headers  = "From: " . strip_tags('ohtori@mail.ru') . "\r\n";
$headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Получить доступ к оптовым ценам</h2>\r\n";
$msg .= "<p><strong>Имя</strong> ".$username."</p>\r\n";
$msg .= "<p><strong>Телефон:</strong> ".$usertel."</p>\r\n";
$msg .= "<p><strong>E-mail:</strong> ".$usermail."</p>\r\n";
$msg .= "<p><strong>Получать рассылку:</strong> ".$check."</p>\r\n";
$msg .= "</body></html>";

// отправка сообщения
if(@mail($sendto, $subject, $msg, $headers)) {
	echo "true";
} else {
	echo "false";
}
?>