<?php
header("Access-Control-Allow-Origin: *");
$url = "https://api.p2pquake.net/v2/jma/quake?limit=1&order=-1";
$json = file_get_contents($url);
$json = mb_convert_encoding($json, 'UTF8', 'ASCII,JIS,UTF-8,EUC-JP,SJIS-WIN');
$arr = json_decode($json,true);
echo json_encode($arr);
$arr = json_encode($arr,JSON_UNESCAPED_SLASHES);
file_put_contents("quake.json" ,$arr);
?>