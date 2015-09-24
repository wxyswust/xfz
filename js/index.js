window.onload = function () {

	// 因为没有实际的传入数据，所以我直接在代码中假设了一些传入的数据，不知道我理解的题意对不对……

	var titlePageOne1 = 'a very very very very very very very very very very very very very very long title';
	var authorPageOne1 = 'Wang Yi';
	var secondTitlePageOne1 = 'SecondTitle';
	var datePageOne1 = new Date(2012, 10, 1);
	var imgPageOne1 = 'images/img1.png';
	var contentTextPageOne1 = 'Love in your eyes  Sitting silent by my side  Going on Holding hand  Walking through the nights  Hold me up Hold me tight  Lift me up to touch the sky  Teaching me to love with heart  Helping me open my mind  I can fly  I am proud that I can fly  To give the best of mine  Till the end of the time  Believe me I can fly  I am proud that I can fly  To give the best of mine  The heaven in the sky  Stars in the sky  Wishing once upon a time  Give me love Make me smile  Till the end of life  Hold me up Hold me tight  Lift me up to touch the sky  Teaching me to love with heart  Helping me open my mind';
	var numPageOne1 = 0;
	var titlePageOne2 = 'a short title';
	var authorPageOne2 = 'pikachu';
	var secondTitlePageOne2 = 'pikapika';
	var datePageOne2 = new Date(2015, 9, 24);
	var imgPageOne2 = 'images/img2.png';
	var contentTextPageOne2 = 'pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika!';
	var numPageOne2 = 1;
	var titlePageTwo1 = 'wo bian bu xia qu le';
	var authorPageTwo1 = 'author';
	var secondTitlePageTwo1 = 'United Nations';
	var datePageTwo1 = new Date(2015, 9, 20);
	var imgPageTwo1 = 'images/img2.png';
	var contentTextPageTwo1 = 'doge doge doge doge doge doge';
	var numPageTwo1 = 2;
	var titlePageTwo2 = 'title';
	var authorPageTwo2 = 'miku';
	var secondTitlePageTwo2 = 'song';
	var datePageTwo2 = new Date(2015, 6, 20);
	var imgPageTwo2 = 'images/img1.png';
	var contentTextPageTwo2 = 'Just sing a song.';
	var numPageTwo2 = 3;


	var pageNum = 1;
	var page = document.getElementById('page');
	var links = page.getElementsByTagName('li');
	preparePage();
	changePage(pageNum);

	function preparePage () {
		links[0].onclick = function () {
			if (pageNum - 1 > 0) {
				links[pageNum].style.backgroundColor = 'white';
				links[pageNum].lastChild.style.color = '#428bca';
				pageNum --;
				changePage(pageNum);
			}
		};
		links[links.length - 1].onclick = function () {
			if (pageNum + 1 < links.length - 1) {
				links[pageNum].style.backgroundColor = 'white';
				links[pageNum].lastChild.style.color = '#428bca';
				pageNum ++;
				changePage(pageNum);
			}
		};
		for (var i = 1; i < links.length - 1; i ++) {
			links[i].onclick = function () {
				if (pageNum != this.lastChild.lastChild.nodeValue) {
					links[pageNum].style.backgroundColor = 'white';
					links[pageNum].lastChild.style.color = '#428bca';
					pageNum = parseInt(this.lastChild.lastChild.nodeValue);
					changePage(pageNum);
				}
			};
		}
	}

	function changePage (aimpage) {
		if (aimpage == 1) {
			changeTitle(titlePageOne1, 1);
			changeTitle(titlePageOne2, 2);
			changeSecondTitle(secondTitlePageOne1, 1);
			changeSecondTitle(secondTitlePageOne2, 2);
			changeAuthor(authorPageOne1, 1);
			changeAuthor(authorPageOne2, 2);
			changeTextContent(contentTextPageOne1, 1);
			changeTextContent(contentTextPageOne2, 2);
			changeNum(numPageOne1, 1);
			changeNum(numPageOne2, 2);
			changeImage(imgPageOne1, 1);
			changeImage(imgPageOne2, 2);
			changeDate(datePageOne1, 1);
			changeDate(datePageOne2, 2);
			links[1].style.backgroundColor = '#428bca';
			links[1].lastChild.style.color = 'white';
		} else {
			changeTitle(titlePageTwo1, 1);
			changeTitle(titlePageTwo2, 2);
			changeSecondTitle(secondTitlePageTwo1, 1);
			changeSecondTitle(secondTitlePageTwo2, 2);
			changeAuthor(authorPageTwo1, 1);
			changeAuthor(authorPageTwo2, 2);
			changeTextContent(contentTextPageTwo1, 1);
			changeTextContent(contentTextPageTwo2, 2);
			changeNum(numPageTwo1, 1);
			changeNum(numPageTwo2, 2);
			changeImage(imgPageTwo1, 1);
			changeImage(imgPageTwo2, 2);
			changeDate(datePageTwo1, 1);
			changeDate(datePageTwo2, 2);
			links[2].style.backgroundColor = '#428bca';
			links[2].lastChild.style.color = 'white';
		}
	}

	// 处理并更新日期
	function datedeal (datechange) {
		var nowDate = new Date();
		var year = nowDate.getFullYear() - datechange.getFullYear();
		var month = nowDate.getMonth() - datechange.getMonth() + 1;
		var day = nowDate.getDate() - datechange.getDate();
		if (year == 1) {
			if (month > 0) {
				return 'a year ago';
			} else {
				month = parseInt(nowDate.getMonth()) + 12 - datechange.getMonth();
				if (month == 1) return 'a month ago';
				else return month + ' months ago';
			}
		} else if(year > 1) {
			return year + ' years age';
		} else {
			if (month == 1) {
				if (day > 0) {
					return 'a month ago';
				} else {
					day = parseInt(nowDate.getDate()) + calday(nowDate.getFullYear(), nowDate.getMonth() - 1) - datechange.getDate();
					if (day == 1) return 'a day ago';
					else return day + ' days ago';
				}
			} else if (month > 1) {
				return month + ' months ago';
			} else {
				return day + ' days ago';
			}
		}
	}

	function calday(year, month) {
		year = parseInt(year);
		switch (month) {
			case 1 : 
			case 3 : 
			case 5 :
			case 7 : 
			case 8 : 
			case 10 :
			case 12 : return 31;
			case 4 : 
			case 6 : 
			case 9 : 
			case 11 : return 30;
			case 2 : return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? 29 : 28;
		}
	}

	function changeDate (datechange, which) {
		var postdate;
		if (which == 1) {
			postdate = document.getElementById('postdate1');
		} else {
			postdate = document.getElementById('postdate2');
		}
		postdate.innerHTML = datedeal(datechange) + ' ' + '-' + ' ';
	}

	// 更新图片
	function changeImage (imagechange, which) {
		var image;
		if (which == 1) {
			image = document.getElementById('img1');
		} else {
			image = document.getElementById('img2');
		}
		image.setAttribute("src", imagechange);
	}

	// 更新标题
	function changeTitle (titlechange, which) {
		var title;
		if (titlechange.length > 25) {
				titlechange = titlechange.substr(0, 25);
				titlechange += '...';
		}

		if (which == 1) {
			title = document.getElementById('title1');
		} else {
			title = document.getElementById('title2');
		}

		title.innerHTML = titlechange;
	}

	// 更新二级标题
	function changeSecondTitle (secondtitlechange, which) {
		var secondtitle;
		if (secondtitlechange.length > 25) {
				secondtitlechange = secondtitlechange.substr(0, 25);
				secondtitlechange += '...';
		}
		if (which == 1) {
			secondtitle = document.getElementById('secondtitle1');
		} else {
			secondtitle = document.getElementById('secondtitle2');
		}

		secondtitle.innerHTML = secondtitlechange;
	}

	// 更新作者名
	function changeAuthor (authorchange, which) {
		var author;
		authorchange = 'by ' + authorchange;
		if (which == 1) {
			author = document.getElementById('author1');
		} else {
			author = document.getElementById('author2');
		}
		author.innerHTML = authorchange;
	}

	// 更新简介内容
	function changeTextContent (textcontentchange, which) {
		var textcontent;
		if (textcontentchange.length > 250) {
			textcontentchange = textcontentchange.substr(0, 250);
			textcontentchange += '...';
		}
		if (which == 1) {
			textcontent = document.getElementById('textcontent1');
		} else {
			textcontent = document.getElementById('textcontent2');
		}
		textcontent.innerHTML = textcontentchange;
	}

	// 更新留言数目
	function changeNum (numchange, which) {
		var num;
		if (which == 1) {
			num = document.getElementById('num1');
		} else {
			num = document.getElementById('num2');
		}
		num.innerHTML = numchange;
	}
};