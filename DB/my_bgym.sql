-- phpMyAdmin SQL Dump
-- version 4.1.7
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Giu 11, 2015 alle 21:31
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

-- --------------------------------------------------------

--
-- Struttura della tabella `course_cat`
--

CREATE TABLE IF NOT EXISTS `course_cat` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(30) NOT NULL,
  `image` varchar(50) DEFAULT NULL,
  `cat_image` varchar(50) NOT NULL,
  `img_history` varchar(50) DEFAULT NULL,
  `description` text,
  `history` text,
  `active` char(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dump dei dati per la tabella `course_cat`
--

INSERT INTO `course_cat` (`id`, `full_name`, `image`, `cat_image`, `img_history`, `description`, `history`, `active`) VALUES
(1, 'Kick Boxing', 'img/course_categories/kick_boxing/1_red.png', 'img/course_categories/kick_boxing/1_course.png', 'img/course_categories/kick_boxing/history.jpg', 'The kickboxing is a combat sport that combines the kick techniques of oriental martial arts with the punches of British boxing.\r\nAnyone can practice kick boxing, unless there are diseases ligaments or joints; it is considered a rather violent discipline, an element to keep in mind if you intend to enroll in  kickboxing course.\r\nThis discipline leads to an intense cardiovascular training and a consequent improvement in strength and muscle tone.', 'The word “kickboxing” was coined in Japan in the 80s: the Japanese promoters, seeing the success of Thai boxing match, decided to eliminate knee strikes, sockets and elbows. This led to the born of a combat sport in which athletes carry punches and kicks to the legs, trunk and face.\nAthletes use the shorts as in traditional boxing and Thai boxing. ?It was initially called "Japanese Kick Boxing", then it was reduced in Kick Boxing or Kickboxing unique word.', '1'),
(2, 'Spinning', 'img/course_categories/spinning/1_red.png', 'img/course_categories/spinning/1_course.png', 'img/course_categories/spinning/history.jpg', 'Spinning is an aerobic workout imported into Europe in 1995 from the United States.\r\nIt is based on the pedaling technique at various speeds, typically with the help of an appropriate background music that accompanies every moment the pedaling rhythm: in fact the lesson takes place in groups and the instructor gives the rhythm of pedaling starting from the speed of the used music.\r\nHe tries to lead the riders through a virtual journey in which the concentration and involvement lead the mind to overcome physical fatigue and increase their organic skills.\r\nEach session has a maximum duration of 50 minutes and produces a great workout with a high caloric expenditure, improving also the work of the circulatory and breathing apparatuses.', 'The Spinning program was conceived and created by Jonathan Goldberg, aka Johnny G, that could be called "a man who lived for the sport."\r\nDriven by the desire to get a good result in the toughest sporting event ever, the Race Across America (RAAM), following his first failure, Johnny made a stationary bike prototype: with it, in its own garage, with a soft light and a musical accompaniment, he began his training retracing the streets and mentally reliving the moments of the Race Across America, inventing the exercises, gaits and changes of intensity that now we find in the Spinning program.\r\nThanks to this training, he reappeared at the RAAM and set a record on the distance traveled in the first three days, as yet unbeaten, also performing much of the race as leader.\r\nHe decided to share this new type of training also with friends and family, those who were normal people and wanted, through sport, an opportunity to get better, to maintain own physical active, to get rid of the tension of the work, to improve the quality of their lives. Given the beneficial effects on them, Johnny realized that this training could have widespread and created the Spinning Program.\r\n ', '1'),
(3, 'Zumba', 'img/course_categories/zumba/1_red.png', 'img/course_categories/zumba/1_course.png', 'img/course_categories/zumba/history.jpg', 'Zumba is a dance that mixes Caribbean and Cuban rhythms, salsa and merengue steps and movements of aerobic fitness for a lesson that involves all the muscles of the body. It is, therefore, a low-impact work that stimulates the cardiovascular system and also allows you to tone up and lose weight. Workout sessions are held in groups, under the guidance of an instructor who runs, step by step, a complete choreography.', 'Zumba was born in the mind of Alberto Perez, aka Beto, a fitness guru and a Shakira’s choreographer. The Colombian instructor, one day, was forced to improvise the lesson because he had forgotten his CDs: that was the moment in which he created the Zumba, an explosive mix of Caribbean dances, performed as an aerobic lesson.\r\nIn the United States it had immediately a great diffusion, thanks to the slogan: "it''s not a workout, it''s a party". In fact it is precisely this: you sweat, you burn calories, but it makes you smile and have fun.', '1'),
(4, 'Swimming', 'img/course_categories/swimming/1_red.png', '', NULL, NULL, NULL, '0'),
(5, 'Water Gym', 'img/course_categories/water_gym/1_red.png', '', NULL, NULL, NULL, '0'),
(6, 'Water Spinning', 'img/course_categories/water_spinning/1_red.png', '', NULL, NULL, NULL, '0');

-- --------------------------------------------------------

--
-- Struttura della tabella `general_info`
--

CREATE TABLE IF NOT EXISTS `general_info` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `address` varchar(60) NOT NULL,
  `how_to_get` text NOT NULL,
  `contact_info` text NOT NULL,
  `phone_number` varchar(15) NOT NULL,
  `fax` varchar(15) NOT NULL,
  `email` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dump dei dati per la tabella `general_info`
--

INSERT INTO `general_info` (`id`, `address`, `how_to_get`, `contact_info`, `phone_number`, `fax`, `email`) VALUES
(1, 'Via Natale Battaglia, 6 - 20127 Milano.', 'The gym is located just 50 meters far from the stop of Loreto underground M1 (red line): the easiest way to reach it is to use the subway and then, once it reaches the stop, follow the signs that will take you in a moment to the gym.', 'It is possible to contact the gym by telephone during the opening hours of the structure (Monday to Friday from 8:00 am to 10:00 pm, Saturday from 9:00 am to 7: 00 pm, Sunday from 10:00 am to 1:30 om), or alternatively by sending a fax or an email.\r\nOur team will give you an answer as soon as possible.', '02.9443750', '02.94437510', 'info@bgym.altervista.org');

-- --------------------------------------------------------

--
-- Struttura della tabella `instructor`
--

CREATE TABLE IF NOT EXISTS `instructor` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(30) NOT NULL,
  `birthdate` date NOT NULL,
  `sex` char(1) NOT NULL,
  `height` int(3) unsigned DEFAULT NULL,
  `image` varchar(40) DEFAULT NULL,
  `biography` text,
  `prizes_awards` text,
  `instructor_of_month` tinyint(1) NOT NULL,
  `active` char(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=19 ;

--
-- Dump dei dati per la tabella `instructor`
--

INSERT INTO `instructor` (`id`, `full_name`, `birthdate`, `sex`, `height`, `image`, `biography`, `prizes_awards`, `instructor_of_month`, `active`) VALUES
(3, 'Sheree James', '1984-03-20', 'F', 170, 'img/instructor/sheree_james/1_red.jpg', 'Sheree began her dance-fitness journey late in 2009 as a participant. She immediately knew this was something she wanted to do. She began with her Zumba license and in 2011 after growing small classes to large classes at local gyms she took it out on her own and Shake It Off was born. A former 2x All-American Softball Player, High School Spanish Teacher and a Wife and Mom, Sheree is up for any challenge. She enjoys meeting new people, keeping the workouts fresh, fun and challenging!  Sheree and her team won Best Fitness Instructor in the Best of Western Washington in 2012, 3rd in 2013 and Sheree won 1st place again in 2014.  Sheree is a wife (12.5 years, and a mother of two, Malakai (11), Maliyah (8).', '2014 Best Fitness Instructor', 1, '1'),
(4, 'Scott Chaney', '1980-01-01', 'M', 175, 'img/instructor/scott_chaney/2_red.jpg', 'Scott Chaney grew up in Hagerstown, Maryland and went to high school at Mercersburg Academy where he was an All American Swimmer as well as a cross country swimmer.  He continued swimming at Dartmouth College and found his way to Los Angeles where he attended USC Law School.  After a couple of years of marathon running, his athletic passion morphed into triathlon.  Scott now owns Volt Multisport with Jeff Ku and is a certified USA Triathlon coach.  He races mostly half ironman and half ironman distances and will return to the Ironman World Championships in Kona, Hawaii for the third time this fall. In 2010 he moved to Milan and joined Big Gym to teach spinning.', 'RAAM (Race Across America): ranked 5th.', 0, '1'),
(5, 'Luca Mantella', '1983-05-05', 'M', 182, 'img/instructor/luca_mantella/7_red.jpg', 'Luca was born on March 27th 1983 in Magenta, he''s a kickboxing instructor in Milan with passion for sports and martial arts.\r\nHe is graduated in Sport Science at the University of Milan.\r\nAfter the degree he decided to follow K1 style courses of level 1,2 and 3, he graduated and became an ACSI-CONI trainer. \r\nNow he''s legally entilted to teach in Italy and UE.', 'Provincial championship kickboxing 2009: ranked 2nd.\r\nNational championship kickboxing 2009: ranked 5th.', 1, '1'),
(6, 'Mohamed Auadi', '1983-04-16', 'M', NULL, NULL, NULL, NULL, 0, '0'),
(7, 'Egidio Monte', '1979-12-03', 'M', NULL, NULL, NULL, NULL, 0, '0'),
(8, 'Marta Scifo', '1985-08-12', 'F', NULL, NULL, NULL, NULL, 0, '0'),
(9, 'Giacomo Cantoni', '1986-07-13', 'M', NULL, NULL, NULL, NULL, 0, '0'),
(10, 'Giulia Mancuso', '1988-06-15', 'F', NULL, NULL, NULL, NULL, 0, '0'),
(11, 'Gianluca Perotti', '1976-11-18', 'M', NULL, NULL, NULL, NULL, 0, '0'),
(12, 'Maria Stella', '1975-10-10', 'F', NULL, NULL, NULL, NULL, 0, '0'),
(13, 'Giusy Piparo', '1980-09-23', 'F', NULL, NULL, NULL, NULL, 0, '0'),
(14, 'Maddalena Trevisi', '1985-08-05', 'F', NULL, NULL, NULL, NULL, 0, '0'),
(15, 'Lucia Fermi', '1990-06-10', 'F', NULL, NULL, NULL, NULL, 0, '0'),
(16, 'Luca Mera', '1972-10-11', 'M', NULL, NULL, NULL, NULL, 0, '0'),
(17, 'Marco Rosa', '1980-11-11', 'M', NULL, NULL, NULL, NULL, 0, '0'),
(18, 'Eugenio Torrisi', '1970-06-17', 'M', NULL, NULL, NULL, NULL, 0, '0');

-- --------------------------------------------------------

--
-- Struttura della tabella `photo_cc`
--

CREATE TABLE IF NOT EXISTS `photo_cc` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(30) NOT NULL,
  `img_full` varchar(50) NOT NULL,
  `img_red` varchar(50) NOT NULL,
  `course_cat` int(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `course_cat` (`course_cat`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=23 ;

--
-- Dump dei dati per la tabella `photo_cc`
--

INSERT INTO `photo_cc` (`id`, `full_name`, `img_full`, `img_red`, `course_cat`) VALUES
(9, 'Spinning', 'img/course_categories/spinning/2_full.jpg', 'img/course_categories/spinning/2_red.jpg', 2),
(2, 'Kick Boxing', 'img/course_categories/kick_boxing/2_full.jpg', 'img/course_categories/kick_boxing/2_red.jpg', 1),
(3, 'Kick Boxing', 'img/course_categories/kick_boxing/3_full.jpg', 'img/course_categories/kick_boxing/3_red.jpg', 1),
(4, 'Kick Boxing', 'img/course_categories/kick_boxing/4_full.jpg', 'img/course_categories/kick_boxing/4_red.jpg', 1),
(5, 'Kick Boxing', 'img/course_categories/kick_boxing/5_full.jpg', 'img/course_categories/kick_boxing/5_red.jpg', 1),
(6, 'Kick Boxing', 'img/course_categories/kick_boxing/6_full.jpg', 'img/course_categories/kick_boxing/6_red.jpg', 1),
(7, 'Kick Boxing', 'img/course_categories/kick_boxing/7_full.jpg', 'img/course_categories/kick_boxing/7_red.jpg', 1),
(8, 'Kick Boxing', 'img/course_categories/kick_boxing/8_full.jpg', 'img/course_categories/kick_boxing/8_red.jpg', 1),
(10, 'Spinning', 'img/course_categories/spinning/6_full.jpg', 'img/course_categories/spinning/6_red.jpg', 2),
(11, 'Spinning', 'img/course_categories/spinning/5_full.jpg', 'img/course_categories/spinning/5_red.jpg', 2),
(12, 'Spinning', 'img/course_categories/spinning/4_full.jpg', 'img/course_categories/spinning/4_red.jpg', 2),
(13, 'Spinning', 'img/course_categories/spinning/3_full.jpg', 'img/course_categories/spinning/3_red.jpg', 2),
(14, 'Spinning', 'img/course_categories/spinning/7_full.jpg', 'img/course_categories/spinning/7_red.jpg', 2),
(15, 'Zumba', 'img/course_categories/zumba/3_full.jpg', 'img/course_categories/zumba/3_red.jpg', 3),
(16, 'Zumba', 'img/course_categories/zumba/4_full.jpg', 'img/course_categories/zumba/4_red.jpg', 3),
(17, 'Zumba', 'img/course_categories/zumba/5_full.jpg', 'img/course_categories/zumba/5_red.jpg', 3),
(18, 'Zumba', 'img/course_categories/zumba/6_full.jpg', 'img/course_categories/zumba/6_red.jpg', 3),
(19, 'Zumba', 'img/course_categories/zumba/7_full.jpg', 'img/course_categories/zumba/7_red.jpg', 3),
(20, 'Zumba', 'img/course_categories/zumba/8_full.jpg', 'img/course_categories/zumba/8_red.jpg', 3),
(21, 'Zumba', 'img/course_categories/zumba/9_full.jpg', 'img/course_categories/zumba/9_red.jpg', 3),
(22, 'Zumba', 'img/course_categories/zumba/2_full.jpg', 'img/course_categories/zumba/2_red.jpg', 3);

-- --------------------------------------------------------

--
-- Struttura della tabella `photo_ins`
--

CREATE TABLE IF NOT EXISTS `photo_ins` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(30) NOT NULL,
  `img_full` varchar(50) NOT NULL,
  `img_red` varchar(50) NOT NULL,
  `instr_id` int(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `instr_id` (`instr_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=24 ;

--
-- Dump dei dati per la tabella `photo_ins`
--

INSERT INTO `photo_ins` (`id`, `full_name`, `img_full`, `img_red`, `instr_id`) VALUES
(3, 'Sheree James', 'img/instructor/sheree_james/1_full.jpg', 'img/instructor/sheree_james/1_red.jpg', 3),
(4, 'Sheree James', 'img/instructor/sheree_james/2_full.jpg', 'img/instructor/sheree_james/2_red.jpg', 3),
(5, 'Sheree James', 'img/instructor/sheree_james/3_full.jpg', 'img/instructor/sheree_james/3_red.jpg', 3),
(6, 'Sheree James', 'img/instructor/sheree_james/4_full.jpg', 'img/instructor/sheree_james/4_red.jpg', 3),
(7, 'Sheree James', 'img/instructor/sheree_james/5_full.jpg', 'img/instructor/sheree_james/5_red.jpg', 3),
(8, 'Sheree James', 'img/instructor/sheree_james/6_full.jpg', 'img/instructor/sheree_james/6_red.jpg', 3),
(9, 'Sheree James', 'img/instructor/sheree_james/7_full.jpg', 'img/instructor/sheree_james/7_red.jpg', 3),
(10, 'Sheree James', 'img/instructor/sheree_james/8_full.jpg', 'img/instructor/sheree_james/8_red.jpg', 3),
(11, 'Luca Mantella', 'img/instructor/luca_mantella/1_full.jpg', 'img/instructor/luca_mantella/1_red.jpg', 5),
(12, 'Luca Mantella', 'img/instructor/luca_mantella/2_full.jpg', 'img/instructor/luca_mantella/2_red.jpg', 5),
(13, 'Luca Mantella', 'img/instructor/luca_mantella/3_full.jpg', 'img/instructor/luca_mantella/3_red.jpg', 5),
(14, 'Luca Mantella', 'img/instructor/luca_mantella/4_full.jpg', 'img/instructor/luca_mantella/4_red.jpg', 5),
(15, 'Luca Mantella', 'img/instructor/luca_mantella/5_full.jpg', 'img/instructor/luca_mantella/5_red.jpg', 5),
(16, 'Luca Mantella', 'img/instructor/luca_mantella/6_full.jpg', 'img/instructor/luca_mantella/6_red.jpg', 5),
(17, 'Luca Mantella', 'img/instructor/luca_mantella/7_full.jpg', 'img/instructor/luca_mantella/7_red.jpg', 5),
(18, 'Luca Mantella', 'img/instructor/luca_mantella/8_full.jpg', 'img/instructor/luca_mantella/8_red.jpg', 5),
(19, 'Scott Chaney', 'img/instructor/scott_chaney/1_full.jpg', 'img/instructor/scott_chaney/1_red.jpg', 4),
(20, 'Scott Chaney', 'img/instructor/scott_chaney/2_full.jpg', 'img/instructor/scott_chaney/2_red.jpg', 4),
(21, 'Scott Chaney', 'img/instructor/scott_chaney/3_full.jpg', 'img/instructor/scott_chaney/3_red.jpg', 4),
(22, 'Scott Chaney', 'img/instructor/scott_chaney/4_full.jpg', 'img/instructor/scott_chaney/4_red.jpg', 4),
(23, 'Scott Chaney', 'img/instructor/scott_chaney/5_full.jpg', 'img/instructor/scott_chaney/5_red.jpg', 4);

-- --------------------------------------------------------

--
-- Struttura della tabella `teach`
--

CREATE TABLE IF NOT EXISTS `teach` (
  `instr_id` int(3) NOT NULL,
  `course_id` int(3) NOT NULL,
  PRIMARY KEY (`instr_id`,`course_id`),
  KEY `course_id` (`course_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `teach`
--

INSERT INTO `teach` (`instr_id`, `course_id`) VALUES
(3, 7),
(3, 8),
(3, 9),
(4, 4),
(4, 5),
(4, 6),
(5, 1),
(5, 2),
(5, 3),
(6, 7),
(6, 8),
(7, 6),
(8, 1),
(8, 2),
(10, 9),
(16, 3),
(17, 4),
(17, 5);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
