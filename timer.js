//вариант 6(я надеюсь) - внедрить блок для отображения
//времени до начала 2020 учебного года

//краткая теория
//setTimeout позволяет вызвать функцию один раз через определённый интервал времени.
//setInterval позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени.
//Однако setTimeout можно зарекурсировать
//Рекурсивный setTimeout – более гибкий метод, чем setInterval. 
//С его помощью последующий вызов может быть задан по-разному в зависимости от результатов предыдущего.
//Метод setTimeout планирует следующий вызов прямо после окончания текущего (*).
//Метод setInterval начинает отсчет сразу после начала выполнения(**), если не успевает, то выполняет немедленно
//в задаче буду использовать метод setInterval, т.к. при setTimeout будет уходить время на выполнение функции и время будет неточным

//устанавливаем время для обратнoго отсчета (1 сентября 2020)
//StudyDate - мс до нужного времени от 1970 года
//месяцы номеруются с 0
let StudyDate = new Date(2020, 9-1, 1).getTime();

//обновляем таймер каждую секунду
let StudyDateFunction = setInterval(function(){

	//вызываем каждую секунду функцию рассчета времени
	//now - время в мс по сегодняшний день
	let now = new Date().getTime();

	//высчитываем разницу во времени(мс)
	let interval = StudyDate - now;

	//Вычисляем от разницы во времени дни, часы, минуты, секунды
	//Math.floor - округление до целого в меньшую сторону
	let days = Math.floor(interval/(1000*60*60*24));
	let hours = Math.floor((interval % (1000*60*60*24))/(1000*60*60));
	let minutes = Math.floor((interval % (1000*60*60))/(1000*60));
	let seconds = Math.floor((interval % (1000*60))/(1000));

	//выводим результат в <p id=timer>
	document.getElementById("timer").innerHTML = 
		days + "d " + hours + "h " + minutes + "m " + seconds + "s";
	//если мой сайт все же увидят те, кто прошел 1 сент 2020 года
	//останавливаем таймер
	if(interval<0){
		clearInterval(StudyDateFunction);
		document.getElementById("timer").innerHTML = 
			"время истекло";
	}
}, 1000)

