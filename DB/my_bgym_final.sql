-- phpMyAdmin SQL Dump
-- version 4.1.7
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Giu 08, 2015 alle 15:42
-- Versione del server: 5.1.71-community-log
-- PHP Version: 5.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `my_bgym`
--
CREATE DATABASE IF NOT EXISTS `my_bgym` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `my_bgym`;

-- --------------------------------------------------------

--
-- Struttura della tabella `course`
--

CREATE TABLE IF NOT EXISTS `course` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(50) NOT NULL,
  `image` varchar(40) DEFAULT NULL,
  `description` text,
  `first_day` varchar(10) DEFAULT NULL,
  `second_day` varchar(10) DEFAULT NULL,
  `third_day` varchar(10) DEFAULT NULL,
  `first_time` varchar(15) DEFAULT NULL,
  `second_time` varchar(15) DEFAULT NULL,
  `third_time` varchar(15) DEFAULT NULL,
  `level` char(1) NOT NULL,
  `link_to_photogallery` varchar(40) DEFAULT NULL,
  `course_cat` int(3) NOT NULL,
  `active` char(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `course_cat` (`course_cat`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=31 ;

--
-- Dump dei dati per la tabella `course`
--

INSERT INTO `course` (`id`, `full_name`, `image`, `description`, `first_day`, `second_day`, `third_day`, `first_time`, `second_time`, `third_time`, `level`, `link_to_photogallery`, `course_cat`, `active`) VALUES
(1, 'Kick Boxing - Beginner', 'img/courses/kick_boxing/beg.png', 'This course is designed for those who want to start practicing kick boxing. You don''t need to have knowledge of any particular technique, since the course starts with the basics of the discipline. The participants are allowed to reach, by the end of the course, the yellow belt level.\r\nThe course is divided in two parts:\r\n- Initially, we will rely on the discipline of "light contact", indicating an exchange of shots with limited impact with the goal of touching the opponent as much times as possible. This will allow all participants to become familiar with this new discipline, without incurring in any type of injury;\r\n- Later, we will start to introduce more "fighting", moving to "semi contact", indicating the rapid exchange of shots where the player who hits first wins.', 'Wednesday', 'Friday', NULL, '20:00 - 21:00', '20:00 - 21:00', NULL, '0', 'photogallery_kick_boxing.html', 1, '1'),
(2, 'Kick Boxing - Medium (Evening)', 'img/courses/kick_boxing/med.png', 'This course can be attended only by those who have completed the "beginner" level of the course, or by those who have already acquired the yellow belt level.\nThe participants are allowed to reach, by the end of the course, the orange or the green belt.\nIn this course, we will focus on improving the technique and increasing the combat phase, focusing exclusively on the discipline of "semi -contact". ', 'Wednesday', 'Friday', NULL, '21:00 - 22:30', '21:00 - 22:30', NULL, '1', 'photogallery_kick_boxing.html', 1, '1'),
(3, 'Kick Boxing - Advanced (Evening)', 'img/courses/kick_boxing/pro.png', 'This course can be attended only by those who have completed the "medium" level of the course, or by those who have already acquired the level of green belt.\nIn this phase, we will pass to the practice of complete combat. We will follow these two existing techniques:\n- " Full contact ", where hits are brought without any limitation in power, with the main purpose of the KO; in this case, protections for the head and legs are mandatory.\n- Low Kick, full contact fighting in which low kicks below the basin are allowed.\nThe goal, for all participants, is to improve their level, reaching the black belt. ', 'Monday', 'Thursday', NULL, '20:00 - 22:00', '20:00 - 22:00', NULL, '2', 'photogallery_kick_boxing.html', 1, '1'),
(4, 'Spinning - Beginner', 'img/courses/spinning/beg.png', 'The course is designed for those who want to start practicing spinning .\r\nThe lessons, in this level, last 30 minutes, during which there will be gradual changes of pedaling rhythm.', 'Tuesday', 'Thursday', NULL, '20:30 - 21:00', '20:30 - 21:00', NULL, '0', 'photogallery_spinning.html', 2, '1'),
(5, 'Spinning - Medium (Evening)', 'img/courses/spinning/med.png', 'The course is designed for those who has finished the first level or those who already has an experience with this practice.\r\nThe lessons, in this level, last 45 minutes, during which there will be many changes of pedaling rhythm.', 'Tuesday', 'Thursday', NULL, '21:15 - 22:00', '21:15 - 22:00', NULL, '1', 'photogallery_spinning.html', 2, '1'),
(6, 'Spinning - Advanced (Evening)', 'img/courses/spinning/pro.png', 'The course is designed for those who has finished the second level or those who already has much experience with this practice.\r\nThe lessons, in this level, last 45 minutes, during which there will be many big changes of pedaling rhythm. ', 'Monday', 'Friday', NULL, '21:15 - 22:00', '21:15 - 22:00', NULL, '2', 'photogallery_spinning.html', 2, '1'),
(7, 'Zumba - Beginner', 'img/courses/zumba/beg.jpg', 'This course is for everybody who wants to train own body and have fun at the same time.\r\nWe take the "work" out of workout, by mixing low-intensity and high-intensity moves for an interval-style, calorie-burning dance fitness party.\r\nSuper effective? Check. Super fun? Check and check.', 'Monday', 'Thursday', NULL, '20:00 - 21:00', '20:00 - 21:00', NULL, '0', 'photogallery_zumba.html', 3, '1'),
(8, 'Zumba - Medium (Evening)', 'img/courses/zumba/med.jpg', 'This course is for those who are looking to strengthen and tone own legs and glutes.\r\nWe combine the awesome toning and strengthening power of Step aerobics, with the fun fitness-party that only Zumba brings to the dance-floor.', 'Tuesday', 'Friday', NULL, '20:00 - 21:00', '20:00 - 21:00', NULL, '1', 'photogallery_zumba.html', 3, '1'),
(9, 'Zumba - Advanced (Evening)', 'img/courses/zumba/pro.jpg', 'The course is designed for those who want to party, but put extra emphasis on toning and sculpting to define own muscles!\r\nThe challenge of adding resistance by using Zumba Toning Sticks (or light weights), helps you focus on specific muscle groups, so you (and your muscles) stay engaged!', 'Wednesday', 'Friday', NULL, '21:00 - 22:00', '21:00 - 22:00', NULL, '2', 'photogallery_zumba.html', 3, '1'),
(10, 'Kick Boxing - Medium (Afternoon)', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', NULL, 1, '0'),
(11, 'Kick Boxing - Advanced (Afternoon)', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2', NULL, 1, '0'),
(12, 'Spinning - Medium (Afternoon)', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', NULL, 2, '0'),
(13, 'Spinning - Advanced (Afternoon)', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2', NULL, 2, '0'),
(14, 'Zumba - Medium (Afternoon)', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', NULL, 3, '0'),
(15, 'Zumba - Advanced (Afternoon)', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2', NULL, 3, '0'),
(16, 'Swimming - Beginner', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0', NULL, 4, '0'),
(17, 'Swimming - Medium (Afternoon)', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', NULL, 4, '0'),
(18, 'Swimming - Medium (Morning)', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', NULL, 4, '0'),
(19, 'Swimming - Advanced (Afternoon)', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2', NULL, 4, '0'),
(20, 'Swimming - Advanced (Morning)', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2', NULL, 4, '0'),
(21, 'Water Gym - Beginner', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0', NULL, 5, '0'),
(22, 'Water Gym - Medium (Afternoon)', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', NULL, 5, '0'),
(23, 'Water Gym - Medium (Morning)', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', NULL, 5, '0'),
(24, 'Water Gym - Advanced (Afternoon)', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2', NULL, 5, '0'),
(25, 'Water Gym - Advanced (Morning)', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2', NULL, 5, '0'),
(26, 'Water Spinning - Beginner', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0', NULL, 6, '0'),
(27, 'Water Spinning - Medium (Afternoon)', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', NULL, 6, '0'),
(28, 'Water Spinning - Medium (Evening)', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', NULL, 6, '0'),
(29, 'Water Spinning - Advanced (Afternoon)', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2', NULL, 6, '0'),
(30, 'Water Spinning - Advanced (Evening)', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2', NULL, 6, '0');

<!-- PMA-SQL-ERROR -->
    <div class="error"><h1>Errore</h1>
<p><strong>Query SQL:</strong>
<a href="tbl_sql.php?sql_query=SHOW+TABLE+STATUS+FROM+%60my_bgym%60+LIKE+%27course_cat%27&amp;show_query=1&amp;db=my_bgym&amp;table=course_cat&amp;token=af2716e8a80b91315b4b1a77b274ac4a"><span class="nowrap"><img src="themes/dot.gif" title="Modifica" alt="Modifica" class="icon ic_b_edit" /> Modifica</span></a>    </p>
<p>
<code class="sql"><pre>
SHOW TABLE STATUS FROM `my_bgym` LIKE 'course_cat'
</pre></code>
</p>
<p>
    <strong>Messaggio di MySQL: </strong><a href="./url.php?url=http%3A%2F%2Fdev.mysql.com%2Fdoc%2Frefman%2F5.1%2Fen%2Ferror-messages-server.html&amp;token=af2716e8a80b91315b4b1a77b274ac4a" target="mysql_doc"><img src="themes/dot.gif" title="Documentazione" alt="Documentazione" class="icon ic_b_help" /></a>
</p>
<code>
#2006 - MySQL server has gone away
</code><br />
</div>