<?php
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
require_once($_SERVER["DOCUMENT_ROOT"]."/local/lib/utils/jwt/autoload.php");
$APPLICATION->SetTitle("Заявки");
$userId = (int)$GLOBALS['USER']->GetID();
$arUser = \Pharm\User::getInfoById($userId);
$token = [
  "iss" => "Requests",
  "iat" => time(),
  "exp" => time() + 7*24*24*24,
  "aud" => "portal.binnopharm.ru",
  "sub" => $arUser['email'],
  "GivenName" => $arUser['titleShort'],
  "Surname"=> $arUser['lastName'],
  "Email" => $arUser['email'],
  "Id" => $userId,
  "Position" => $arUser['position'],
  "Login" => $arUser['login']
];
$key = "tjqMsP0jo2I7B139vdTMZi324g33tab1";
$jwt = Firebase\JWT\JWT::encode($token, $key, 'HS256');
?>
    <link href="/local/assets/iconfont/material-icons.css" rel="stylesheet">
    <link href="/requests/frontend/src/components/RichEditor/RichEditor.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">
    <link rel="stylesheet" id="us-font-mdfi-css" href="/requests/frontend/src/static/assets/css/font-mdfi.css?" type="text/css" media="all">
    <input type="hidden" id="user_id" value="<?=$userId?>" />
    <input type="hidden" id="user_token" value="<?=$jwt?>" />
    <div id="app"></div>
    <script src="http://10.1.1.219:3000/vendor.js"></script>
    <script src="http://10.1.1.219:3000/app.js"></script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>