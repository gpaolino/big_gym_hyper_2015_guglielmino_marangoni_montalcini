<?php include("twitter_auth.php");
echo "<ul style='color:#6E6E6E'>";
foreach ($twitter_data as $tweet)
{
    if (!empty($tweet)) {
        $text = $tweet->text;
        $text_in_tooltip = str_replace('"', '', $text); // replace " to avoid conflicts with title="" opening tags
        $id = $tweet->id;
        $time = strftime('%d %B', strtotime($tweet->created_at));
        $username = $tweet->user->name;
    }
    echo '<li><span title="'; echo $text_in_tooltip; echo '">'; echo $text . "</span><br>
		<a href=\"http://twitter.com/"; echo $username ; echo '/status/'; echo $id ; echo '"><small>'; echo $time; echo ' </small></a> - 
		<a href="http://twitter.com/intent/tweet?in_reply_to='; echo $id; echo '"><small>rispondi</small></a> - 
		<a href="http://twitter.com/intent/retweet?tweet_id='; echo $id; echo '"><small>retweet</small></a> - 
		<a href="http://twitter.com/intent/favorite?tweet_id='; echo $id; echo '"><small>preferito</small></a></li>';
}

echo '</ul>';
?>