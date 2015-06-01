<?php

require_once('twitter_proxy.php');

// Twitter OAuth Config options
$oauth_access_token = '355765572-uN2lzsdkEkMYVLJQ0TKNbsSUX0Xlux09oKPDope4';
$oauth_access_token_secret = 'PWScABF3dztjM3LVU5dupkZEZnhvpiIBxCGpadh0u9l97';
$consumer_key = 'rNSfQ9NJDZ49IkNm0fCdSJDgj';
$consumer_secret = 'Krhkft0sl5WxNnf6IHHYIeVc4pbnKmCLEM7z8uM4IwtI3xRbsJ';
$user_id = '355765572';
$screen_name = 'g_paolino';
$count = 5;

$twitter_url = 'statuses/user_timeline.json';
$twitter_url .= '?user_id=' . $user_id;
$twitter_url .= '&screen_name=' . $screen_name;
$twitter_url .= '&count=' . $count;

// Create a Twitter Proxy object from our twitter_proxy.php class
$twitter_proxy = new TwitterProxy(
	$oauth_access_token,			// 'Access token' on https://apps.twitter.com
	$oauth_access_token_secret,		// 'Access token secret' on https://apps.twitter.com
	$consumer_key,					// 'API key' on https://apps.twitter.com
	$consumer_secret,				// 'API secret' on https://apps.twitter.com
	$user_id,						// User id (http://gettwitterid.com/)
	$screen_name,					// Twitter handle
	$count							// The number of tweets to pull out
);

// Invoke the get method to retrieve results via a cURL request
$tweets = $twitter_proxy->get($twitter_url);

echo $tweets;

?>