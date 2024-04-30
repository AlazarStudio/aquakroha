<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['check']) && $_POST['check'] == 'yes') {
        $name = $_POST['fio'];
        $tel = $_POST['phone'];
        $email = $_POST['email'];
        $comment = $_POST['comment'];

        $subject = "Сообщение от $name";
        $message = "Имя: $name\n";
        $message .= "Телефон: $tel\n";
        $message .= "Email: $email\n";
        $message .= "Комментарий: $comment\n";

        $to = "test@test.ru"; 
        $headers = "From: $email";

        if (mail($to, $subject, $message, $headers)) {
            echo json_encode(array("success" => true));
        } else {
            echo json_encode(array("success" => false, "error" => "Ошибка при отправке сообщения"));
        }
    } else {
        echo json_encode(array("success" => false, "error" => "Пожалуйста, отметьте согласие с условиями"));
    }
}
?>
