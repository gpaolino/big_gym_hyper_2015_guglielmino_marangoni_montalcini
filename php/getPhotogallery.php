<?php
//get all the course from db and reply using json structure

//echo "I'm the php";

//connection to db
$mysqli = new mysqli("localhost", "root", "", "my_bgym");

if (mysqli_connect_errno()) { //verify connection

    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else 
}
else {
    $par = $_REQUEST['par'];
    $par2 = $_REQUEST['par2'];
    $value = 'courseCategory';

    //echo "Successful connection"; // connection ok
    # extract results mysqli_result::fetch_array
    if($par2 == $value) {
        $query = " SELECT photo_cc.full_name, photo_cc.img_red, photo_cc.img_full FROM photo_cc, course_cat WHERE photo_cc.course_cat = course_cat.id AND course_cat.full_name = '".$par."' ";
    } else {
        $query = " SELECT photo_ins.full_name, photo_ins.img_red, photo_ins.img_full FROM photo_ins, instructor WHERE photo_ins.instr_id = instructor.id AND instructor.full_name = '".$par."' ";
    }

    //query execution
    $result = $mysqli->query($query);
    //if there are data available
    if($result->num_rows >0)
    {
        $myArray = array();//create an array
        while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $myArray[] = array_map('utf8_encode', $row);	//<----- CORRECT HERE		
        }
        echo json_encode($myArray);
    }

    //free result
    $result->close();

    //close connection
    $mysqli->close();



}






?>