<?php 
session_start();
require 'rb/rb.php';

// R::setup( 'mysql:host=localhost; dbname=muhammun_db', 'muhammun_db', 'mTi0&wVA' );
R::setup( 'mysql:host=localhost; dbname=aqua_db', 'root', '' );

if (!R::testConnection()) {
    exit('Нет подключения к БД');
}

function formatstr($str){
    $str = trim($str);
    $str = stripslashes($str);
    $str = htmlspecialchars($str);
    return $str;
}

?>
