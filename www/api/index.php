<?php
require_once('twitter-api-php/TwitterAPIExchange.php');

$settings = array(
    'oauth_access_token' => "15201649-YKQmHs8YIsIzF2KrvqhOAOmbj2dBlZtkN9ACI1E1p",
    'oauth_access_token_secret' => "QiMlS3pH0pNVF9rWrRH9sCGj4HxD2aCwTpHxEm23mQlgB",
    'consumer_key' => "iF4M1Mm6fA7MRNP1XrXRoPcKr",
    'consumer_secret' => "skyKQsMmeluqK1HGhToyhnjgp1co041UitklQkb5XXzS6ebEXI"
);

if(isset($_GET['search'])){
    $url = 'https://api.twitter.com/1.1/search/tweets.json';
    $requestMethod = 'GET';
    $getFields = array("q" => "#".$_GET['search']);
    $twitter = new TwitterAPIExchange($settings);
    echo $twitter->setGetfield('?'.http_build_query($getFields))
                 ->buildOauth($url, $requestMethod)
                 ->performRequest();
}else if(isset($_GET['search_place'])){
    $url = 'https://api.twitter.com/1.1/search/tweets.json';
    $requestMethod = 'GET';
    $getFields = array("q" => "#bopp @".$_GET['search_place']);
    $twitter = new TwitterAPIExchange($settings);
    echo $twitter->setGetfield('?'.http_build_query($getFields))
                 ->buildOauth($url, $requestMethod)
                 ->performRequest();
}
