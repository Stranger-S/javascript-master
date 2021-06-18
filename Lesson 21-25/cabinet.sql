-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 18 2021 г., 18:53
-- Версия сервера: 8.0.19
-- Версия PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `cabinet`
--

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `secondname` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `birthday` varchar(100) NOT NULL,
  `sex` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `secondname`, `email`, `password`, `birthday`, `sex`) VALUES
(2, 'Sergey', '0', 'sergey@ukr.net', '123456', '28.08.1990', 'male'),
(3, 'Stranger_X', '0', 'stranger.ts@yandex.ua', '123456', '28.08.1990', 'male'),
(4, 'alexander', 'petrov', 'alex@mail.ru', '889944', '11.11.1991', 'male'),
(5, 'enn', 'smith', 'enn@mail.ru', '889944', '20.02.1991', 'female'),
(6, 'something', '0', 'something@mail.ru', '889944', '13.06.2000', 'other'),
(7, 'daisy', '0', 'farcry@three.ri', '889944', '19.07.1980', 'female'),
(10, 'dmitry', 'morozov', 'morozov@mail.ru', '112233', '12.01.2000', 'male'),
(11, 'pavel', 'smirnov', 'smirnov@mail.ru', '112233', '11.11.1991', 'male'),
(12, 'ivan', 'petrov', 'petrovivan@mail.ru', '112233', '13.11.1997', 'male'),
(18, '11', '11', '11', '11', '28.06.2021', 'other');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
