-- phpMyAdmin SQL Dump
-- version 5.1.1deb3+bionic1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 27, 2021 at 04:55 PM
-- Server version: 5.7.35-0ubuntu0.18.04.2
-- PHP Version: 7.2.24-0ubuntu0.18.04.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Bookmyshow_copy`
--

-- --------------------------------------------------------

--
-- Table structure for table `cast_table`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact_us`
--

CREATE TABLE `contact_us` (
  `id` int(11) NOT NULL,
  `contactname` varchar(30) NOT NULL,
  `emailid` varchar(100) NOT NULL,
  `reason` text NOT NULL,
  `Date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contact_us`
--

INSERT INTO `contact_us` (`id`, `contactname`, `emailid`, `reason`, `Date`) VALUES
(1, 'Aakash joshi', 'akashjoshi@gmail.com', 'skcnkdsnfn', '2021-09-08');

-- --------------------------------------------------------

--
-- Table structure for table `Events`
--

CREATE TABLE `Events` (
  `eventId` int(11) NOT NULL,
  `eventTitle` varchar(250) NOT NULL,
  `about` varchar(1000) NOT NULL,
  `language` varchar(250) NOT NULL,
  `rating` int(11) NOT NULL,
  `eventCategory` varchar(250) NOT NULL,
  `date` date NOT NULL,
  `EventImage` varchar(250) NOT NULL,
  `image` varchar(250) NOT NULL,
  `Artist` varchar(250) NOT NULL,
  `ArtistImage` varchar(250) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Events`
--

INSERT INTO `Events` (`eventId`, `eventTitle`, `about`, `language`, `rating`, `eventCategory`, `date`, `EventImage`, `image`, `Artist`, `ArtistImage`, `price`) VALUES
(1, 'Dongri To Nowhere - Munawar Faruqui (Gujarati)', 'Munawar Faruqui needs no introduction. If you`ve been on the internet in the last one year, you must have seen him. He took the year 2020 by storm by becoming an internet sensation. He has been one of the fastest-growing Stand-up Comedians of India.', 'Hindi', 5, 'Comedy Show', '2021-09-22', 'media-desktop-dongri-to-nowhere-munawar-faruqui-gujarat-0-2021-9-11-t-2-39-55.jpg', 'et00314769-eqejluzmcl-portrait.jpg', 'Munawar Faruqui', 'ard3.webp', 551),
(2, 'Gaurav Gupta Live - Stand Up comedy Show', '5+ Years into comedy, Over 45 Million Youtube views and the recently released, much appreciated special Market Down Hai on Amazon prime. This is just a small intro. What Gaurav does in his shows is unleash an array of jokes, which will take you back to the most relatable incidents of your lives. A show which can be watched with the entire family.', 'Hindi', 4, 'Comedy show', '2021-10-09', 'media-desktop-gaurav-gupta-live-stand-up-comedy-show-0-2021-8-3-t-16-59-14.jpg', 'et00313300-ksqlvmpzlf-portrait.jpg', 'Gaurav Gupta', '2009998.jpg', 200),
(3, 'Ek Haseena Thi - Standup comedy solo by Anshu Mor', 'Ek Haseena Thi is Anshu Mor\'s brand new standup comedy special and perhaps his most endearing work till date. In his inimitable storytelling style of comedy, he talks about love, heartbreak, friendships and growing up across decades. Come fall in love again. ', 'Hindi', 4, 'Comedy show', '2021-09-26', 'media-desktop-ek-haseena-thi-a-solo-special-by-anshu-mor-0-2021-7-15-t-11-36-1.jpg', 'et00312863-tkgggptded-portrait.jpg', 'Anshu Mor', '1075744.jpg', 450),
(4, 'Full Enjoy - Standup comedy by Devesh Dixit', 'A brand new one hour standup comedy solo by Devesh Dixit.', 'Hindi', 4, 'Comedy show', '2021-10-02', 'media-desktop-full-enjoy-standup-comedy-by-devesh-dixit-0-2021-8-21-t-15-53-32.jpg', 'et00314104-udzjevyezy-portrait.jpg', 'Devesh Dixit', '1073160.jpg', 340),
(5, 'Relax Regar Relax - Standup Comedy by Sunil Regar', 'Relax Regar Relax is a standup comedy trial show by Sunil Regar. Sunil is Ahmedabad based comedian who has been doing comedy since 3 years now. This show will be full of anecdotes and funny observations. It’ll be mixture of sure shot jokes on which Sunil has worked over the last 3 years and some fresh thoughts. ', 'Hindi', 3, 'Comedy show', '2021-09-25', 'media-desktop-relax-regar-relax-standup-comedy-by-sunil-regar-0-2021-9-15-t-10-51-17.jpg', 'et00314915-caqqlkackk-portrait.jpg', 'Sunil Regar', '2005179.jpg', 250);

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `movie_id` int(11) NOT NULL,
  `title` varchar(250) NOT NULL,
  `about` varchar(1000) NOT NULL,
  `lang` varchar(250) NOT NULL,
  `rating` int(11) NOT NULL,
  `movie_type` varchar(250) NOT NULL,
  `category` varchar(250) NOT NULL,
  `release_date` date NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(250) NOT NULL,
  `backimage` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`movie_id`, `title`, `about`, `lang`, `rating`, `movie_type`, `category`, `release_date`, `price`, `image`, `backimage`) VALUES
(10, 'Shang-Chi and the Legend of the Ten Rings', 'Shang-Chi and The Legend of The Ten Rings features Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film is directed by Destin Daniel Cretton and produced by Kevin Feige and Jonathan Schwartz.', 'english', 4, '3D', 'Action', '2021-09-22', 350, 'et00122566-hcssjtledt-portrait.jpg', 'shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg'),
(11, 'Dhuandhaar', 'Everything changes for Aarav when he gets involved in a road accident. One wrong decision takes him on a journey darker than his wildest dreams. Loved by a caring father, pampered by a loyal friend, and chased by a vigilant cop, will Aarav be able to find redemption?', 'Gujarati', 4, '3D', 'Drama', '2021-09-23', 300, 'et00314682-fqchkuvwwk-portrait.jpg', 'dhuandhaar-et00314682-08-09-2021-06-27-28.jpg'),
(12, 'Don`t Breathe 2', 'The sequel is set in the years following the initial deadly home invasion, where Norman Nordstrom lives in quiet solace until his past sins catch up to him.', 'English', 3, '3D', 'Horror', '2021-09-21', 250, 'et00312665-gbabdpvflx-portrait.jpg', 'don-t-breathe-2-et00312665-13-09-2021-12-43-41.jpg'),
(13, 'Bell Bottom', 'Amongst multiple heinous airplane hijacks, India was made to face another such challenge in 1984. BellBottom, a RAW agent played by Akshay Kumar sees through the plan and thus, begins India`s first covert operation.', 'Hindi', 4, '3D', 'Drama', '2021-09-24', 349, 'et00117102-nsnbgrkpdk-portrait.jpg', 'bell-bottom-et00117102-14-08-2021-04-33-35.jpg'),
(14, 'Free Guy', 'When Guy, a bank teller, realises he is a background character in an open-world video game called Free City, he sets about trying to become the hero but soon gets involved in trying to save the game before the developers shut it down.', 'English', 4, '3D', 'Comedy', '2021-09-25', 200, 'et00122134-kkxxyaqcqy-portrait.jpg', 'free-guy-et00122134-26-11-2020-07-41-07.jpg'),
(15, 'Fast and Furious 9', 'Dom`s peaceful life with his wife Letty and son Brian is shattered when Dom`s past catches up to him. The gang is up against the most skilled assassin and high-performance driver - his little brother Jakob.', 'English', 5, '3D', 'Action', '2021-09-25', 450, 'et00056556-lwhmtnmxar-portrait.jpg', 'fast-and-furious-9-et00056556-14-07-2021-07-41-33.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `movies_reviews`
--

CREATE TABLE `movies_reviews` (
  `id` int(11) NOT NULL,
  `movieName` varchar(200) NOT NULL,
  `movieReview` text NOT NULL,
  `moviewRating` int(11) NOT NULL,
  `Date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `offer_details`
--

CREATE TABLE `offer_details` (
  `id` int(11) NOT NULL,
  `offername` varchar(250) NOT NULL,
  `offercode` varchar(250) NOT NULL,
  `image` varchar(250) NOT NULL,
  `Date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `offer_details`
--

INSERT INTO `offer_details` (`id`, `offername`, `offercode`, `image`, `Date`) VALUES
(4, 'Bookmyshow', 'Fun Deals', 'card1.webp', '2021-09-16'),
(5, 'indusland bank', 'indusland bank Debit card\r\n', 'card2.webp', '2021-09-16'),
(6, 'icici', 'icici200', 'card3.webp', '2021-09-16'),
(7, 'Hdfc', 'Hdfc', 'card4.webp', '2021-09-16'),
(8, 'IDFC', 'IDFC', 'card5.webp', '2021-09-16'),
(9, 'Sbi', 'buy 1 get 1 free', 'card6.webp', '2021-09-16'),
(10, 'Axis', 'Axis buy 4 get 1 free', 'card1.webp', '2021-09-16');

-- --------------------------------------------------------

--
-- Table structure for table `Play`
--

CREATE TABLE `Play` (
  `playId` int(11) NOT NULL,
  `playTitle` varchar(255) NOT NULL,
  `about` varchar(1000) NOT NULL,
  `language` varchar(250) NOT NULL,
  `rating` int(11) NOT NULL,
  `playCategory` varchar(250) NOT NULL,
  `date` date NOT NULL,
  `image` varchar(250) NOT NULL,
  `playImage` varchar(250) NOT NULL,
  `Artist` varchar(250) NOT NULL,
  `ArtistImage` varchar(250) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Play`
--

INSERT INTO `Play` (`playId`, `playTitle`, `about`, `language`, `rating`, `playCategory`, `date`, `image`, `playImage`, `Artist`, `ArtistImage`, `price`) VALUES
(3, 'Many Faces of Korean Storytelling', 'Experience exotic and enchanting moments with two Korean stories which originated from shamanistic ritual songs. They have been performed by shamans and pansori singers and handed down from mouth to mouth until today. Seung Ah is going to show how she has combined Korean storytelling style with western storytelling techniques for her global audience.', 'English', 4, 'Drama', '2021-09-26', 'et00314929-rernujftzc-portrait.jpg', 'media-desktop-many-faces-of-korean-storytelling-0-2021-9-15-t-12-15-11.jpg', 'Seung Ah Kim', '1073160.jpg', 450),
(4, 'A story within a story in the Mahabharata', 'An often repeated verse about the Mahabharata claims that what is not found in the Mahabharata cannot be found elsewhere.', 'Hindi', 4, 'Drama', '2021-10-09', 'et00315003-vxylxmymfu-portrait.jpg', 'media-desktop-a-story-within-a-story-in-the-mahabharata-0-2021-9-16-t-18-23-31.jpg', 'Aparna Jaishankar', 'user-default.png', 350),
(5, 'Ramayana Connecting the Dots - Online Storytelling', 'We bring you an unexplored journey of the epic which must have been heard many times but not understood fully, The Ramayana.', 'Hindi', 4, 'Drama', '2021-10-09', 'et00315004-thdcspmbtd-portrait.jpg', 'media-desktop-ramayana-connecting-the-dots-online-storytelling-0-2021-9-16-t-18-24-42.jpg', 'Lavanya Prasad', 'user-default.png', 250);

-- --------------------------------------------------------

--
-- Table structure for table `screen`
--

CREATE TABLE `screen` (
  `screen_id` int(11) NOT NULL,
  `screen_name` varchar(250) NOT NULL,
  `screen_time` datetime(6) NOT NULL,
  `theater_id` int(11) NOT NULL,
  `movie_id` int(11) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Sports`
--

CREATE TABLE `Sports` (
  `sportId` int(11) NOT NULL,
  `sportTitle` varchar(250) NOT NULL,
  `about` varchar(3000) NOT NULL,
  `language` varchar(250) NOT NULL,
  `rating` int(11) NOT NULL,
  `sportCategory` varchar(250) NOT NULL,
  `date` date NOT NULL,
  `image` varchar(250) NOT NULL,
  `sportImage` varchar(250) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Sports`
--

INSERT INTO `Sports` (`sportId`, `sportTitle`, `about`, `language`, `rating`, `sportCategory`, `date`, `image`, `sportImage`, `price`) VALUES
(1, 'Matrix Fight Night 60', 'Matrix fight night is India’s biggest homegrown MMA promotion founded by none other than Tiger Shroff and Krishna Shroff.', 'English', 5, 'Mixed Martial Arts', '2021-09-25', 'media-desktop-matrix-fight-night-6-0-2021-9-16-t-21-9-53.jpg', 'et00314348-ebmnjnqrdl-portrait.jpg', 99),
(2, 'RWC 2023 France', 'BookMyShow has been appointed as the Official Travel Agent for the most prestigious Rugby World Cup 2023 France.', 'English', 4, 'Football', '2021-09-24', 'media-desktop-rwc-2023-france-0-2021-8-12-t-17-5-40.jpg', 'et00308012-lgyadtfzvy-portrait.jpg', 33000),
(3, 'Travelling Clues - Online Games', 'A 60-min ride through some of the most mind-boggling and entertaining puzzles and escape room style environments. You get to role play through a large number of situations where your problem solving and crime-solving abilities will help the larger good or the mission in hand. Go from one level to the other as you get comfortable unlocking the codes at various stages. Use hints and solutions wherever you get stuck. Play with your friends and family, but all within 60 mins! Keep a notepad, a pen/pencil and a mobile or tablet handy to search for clues or solutions wherever needed from external websites or platforms. So go ahead and enjoy ', 'English', 4, 'Online Game', '2021-09-23', 'media-desktop-travelling-clues-online-games-0-2021-5-31-t-22-6-54.jpg', 'et00311675-rxlvyvdvth-portrait.jpg', 450),
(4, 'Online Game - Lost Treasure of Sundarbans', 'You are a group of explorers who love traveling to Jungles across the world. This time you choose Sundarbans famous for deadly wild beasts and tough terrain.', 'English', 3, 'Online Game', '2021-09-29', 'media-desktop-online-game-lost-treasure-of-sundarbans-1-2021-5-27-t-18-8-57.jpg', 'et00311494-useehhzlgc-portrait.jpg', 350),
(5, 'Call of Duty Mobile Tournament', 'India’s first COD mobile tournament on India\'s most loved online ticketing platform.', 'English', 4, 'Online Game', '2021-09-24', 'media-desktop-call-of-duty-mobile-tournament-0-2020-12-8-t-13-46-38.jpg', 'et00122514-synaftebgw-portrait.jpg', 700);

-- --------------------------------------------------------

--
-- Table structure for table `theater`
--

CREATE TABLE `theater` (
  `t_id` int(11) NOT NULL,
  `t_name` varchar(255) NOT NULL,
  `city_name` varchar(255) NOT NULL,
  `area` varchar(255) NOT NULL,
  `rating` varchar(255) NOT NULL,
  `t_type` varchar(255) NOT NULL,
  `image` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `theater`
--

INSERT INTO `theater` (`t_id`, `t_name`, `city_name`, `area`, `rating`, `t_type`, `image`) VALUES
(4, 'city gold', 'abd', 'aashram road', '5', '0', 'cinema2.jpg'),
(5, 'Cinepolis: Ahmedabad One', 'Ahmedabad', 'Opp Vastrapur', '5', 'movie', 'CNPL.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact_us`
--
ALTER TABLE `contact_us`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Events`
--
ALTER TABLE `Events`
  ADD PRIMARY KEY (`eventId`);

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`movie_id`);

--
-- Indexes for table `movies_reviews`
--
ALTER TABLE `movies_reviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `offer_details`
--
ALTER TABLE `offer_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Play`
--
ALTER TABLE `Play`
  ADD PRIMARY KEY (`playId`);

--
-- Indexes for table `screen`
--
ALTER TABLE `screen`
  ADD PRIMARY KEY (`screen_id`);

--
-- Indexes for table `Sports`
--
ALTER TABLE `Sports`
  ADD PRIMARY KEY (`sportId`);

--
-- Indexes for table `theater`
--
ALTER TABLE `theater`
  ADD PRIMARY KEY (`t_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Play`
--
ALTER TABLE `Play`
  MODIFY `playId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `theater`
--
ALTER TABLE `theater`
  MODIFY `t_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;