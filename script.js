let d=".div1";
let mouseup=true;


videoWidth=3840
videoHeight=2160
aspect_ratio=videoWidth/videoHeight
//Scale the video header according to the window width & height
//document.querySelector(".header").style.setProperty('height', document.documentElement.clientHeight +"px");

window.onbeforeunload = function () {
	window.scrollTo(0, 0);
}

//window.addEventListener("resize", function(){
	//document.querySelector(".header").style.setProperty('height', document.documentElement.clientHeight +"px");
//});

//For counting down timer
(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "11/05/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

          document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        //if (distance < 0) {
        //  document.getElementById("headline").innerText = "It's my birthday!";
        //  document.getElementById("countdown").style.display = "none";
        //  document.getElementById("content").style.display = "block";
        // clearInterval(x);
        //}
        //seconds
      }, 0)
  }());

//For image gallery
var elements = document.getElementsByClassName("column");

var i;

for (i = 0; i < elements.length; i++) {
	elements[i].style.msFlex = "15%";  // IE10
	elements[i].style.flex = "15%";
}

//Toggle language button
function setDisplay(className, displayValue) {
  var items = document.getElementsByClassName(className);
  for (var i=0; i < items.length; i++) {
    items[i].innerHTML = displayValue;
  }
}
function setPlaceholder(className, displayValue) {
  var items = document.getElementsByClassName(className);
  for (var i=0; i < items.length; i++) {
    items[i].placeholder = displayValue;
  }
}

var switchStatus = false;
var h1 = document.querySelector(".headline").innerHTML;
var h2 = document.querySelector(".days").innerHTML;
var h3 = document.querySelector(".hours").innerHTML;
var h4 = document.querySelector(".minutes").innerHTML;
var h5 = document.querySelector(".seconds").innerHTML;
var h6 = document.querySelector(".secondSegmentTitle").innerHTML;
var h7 = document.querySelector(".groomDesc").innerHTML;
var h8 = document.querySelector(".brideDesc").innerHTML;
var h9 = document.querySelector(".thirdSegmentTitle").innerHTML;
var h12 = document.querySelector(".fourthSegmentTitle").innerHTML;
var h13 = document.querySelector(".when").innerHTML;
var h14 = document.querySelector(".where").innerHTML;
var h15 = document.querySelector(".formHeader").innerHTML;
var h16 = document.querySelector(".Coming").innerHTML;
var h17 = document.querySelector(".NotComing").innerHTML;
var h18 = document.querySelector(".atnheader").innerHTML;
var h19 = document.querySelector(".RelationshipWithGroom").innerHTML;
var h20 = document.querySelector(".familyOrCousinWithGroom").innerHTML;
var h21 = document.querySelector(".PCFWithGroom").innerHTML;
var h22 = document.querySelector(".SCFWithGroom").innerHTML;
var h23 = document.querySelector(".UniFWithGroom").innerHTML;
var h24 = document.querySelector(".ColleagueWithGroom").innerHTML;
var h25 = document.querySelector(".OthersWithGroom").innerHTML;
var h26 = document.querySelector(".RelationshipWithBride").innerHTML;
var h27 = document.querySelector(".familyOrCousinWithBride").innerHTML;
var h28 = document.querySelector(".PCFWithBride").innerHTML;
var h29 = document.querySelector(".SCFWithBride").innerHTML;
var h30 = document.querySelector(".UniFWithBride").innerHTML;
var h31 = document.querySelector(".ColleagueWithBride").innerHTML;
var h32 = document.querySelector(".OthersWithBride").innerHTML;
var h33 = document.querySelector(".firstName").placeholder;
var h35 = document.querySelector(".comments").placeholder;
var h36 = document.querySelector(".submit").innerHTML;
var h37 = document.querySelector(".attendanceCount").placeholder;
var h38 = document.querySelector(".ExColleagueWithGroom").innerHTML;
var h39 = document.querySelector(".ExColleagueWithBride").innerHTML;
var h40 = document.querySelector(".button__text").innerHTML;
var h41 = document.querySelector(".vegeWording").innerHTML;

$("#toggle_checkbox").on('change', function() {
    if ($(this).is(':checked')) {
        document.querySelector(".headline").innerHTML = "~婚礼邀请函~"
        document.querySelector(".days").innerHTML = "天"
        document.querySelector(".hours").innerHTML = "小时"
		document.querySelector(".minutes").innerHTML = "分钟"
		document.querySelector(".seconds").innerHTML = "秒"
		document.querySelector(".secondSegmentTitle").innerHTML = "~新郎跟新娘~"
		document.querySelector(".groomDesc").style.setProperty('font-size', (document.body.clientWidth)*0.025 +"px");
		document.querySelector(".groomDesc").innerHTML = "<u>新郎简介：</u><br> 李明发 <br><br> 世上较幸福的事莫过于她在闹，<br> 你在笑，<br> 如此温暖一生，<br> 平凡而不平庸。"
		document.querySelector(".brideDesc").style.setProperty('font-size', (document.body.clientWidth)*0.025 +"px");
		document.querySelector(".brideDesc").innerHTML = "<u>新娘简介 :</u><br> 张嘉恩 <br><br> 感谢时光， <br> 带走了那么多东西，<br> 却为我留下了你。"
		document.querySelector(".thirdSegmentTitle").innerHTML = "我们的婚纱照"
		document.querySelector(".fourthSegmentTitle").innerHTML = "~时间，地点~"
		document.querySelector(".when").innerHTML = "<h2> 时间 <br> </h2> November 5, 2022 <br> at 07:00 pm"
		document.querySelector(".where").innerHTML = "<h2> 地点 <br></h2> LS Seafood Restaurant <br> @ Sunway BigBox Mall, JB"
		document.querySelector(".formHeader").innerHTML = "出席统计表"
		document.querySelector(".Coming").innerHTML = "当然，我们一定到"
		document.querySelector(".NotComing").innerHTML = "不好意思，没法出席"
		setDisplay("atnheader","嘉宾")
		setDisplay("RelationshipWithGroom","新郎关系 <br> (婚礼座位安排)<br>")
		setDisplay("familyOrCousinWithGroom","新郎家人/亲戚")
		setDisplay("PCFWithGroom","新郎小学朋友")
		setDisplay("SCFWithGroom","新郎中学朋友")
		setDisplay("UniFWithGroom","新郎大学朋友")
		setDisplay("ColleagueWithGroom","新郎同事")
		setDisplay("ExColleagueWithGroom","新郎前同事")
		setDisplay("OthersWithGroom","其他")
		setDisplay("RelationshipWithBride","新娘关系 <br> (婚礼座位安排)<br>")
		setDisplay("familyOrCousinWithBride","新娘家人/亲戚")
		setDisplay("PCFWithBride","新娘小学朋友")
		setDisplay("SCFWithBride","新娘中学朋友")
		setDisplay("UniFWithBride","新娘大学朋友")
		setDisplay("ColleagueWithBride","新娘同事")
		setDisplay("ExColleagueWithBride","新娘前同事")
		setDisplay("OthersWithBride","其他")
		setPlaceholder("firstName","姓名")
		setDisplay("vegeWording","我是素食者")
		setPlaceholder("comments","特别备注")
		setDisplay("submit","提交")
		setPlaceholder("attendanceCount","姓名")
		setDisplay("button__text","多一位嘉宾")
    }
    else {
       	document.querySelector(".headline").innerHTML = h1
        document.querySelector(".days").innerHTML = h2
        document.querySelector(".hours").innerHTML = h3
		document.querySelector(".minutes").innerHTML = h4
		document.querySelector(".seconds").innerHTML = h5
		document.querySelector(".secondSegmentTitle").innerHTML = h6
		document.querySelector(".groomDesc").style.setProperty('font-size', (document.body.clientWidth/ratio)*0.065 +"px");
		document.querySelector(".groomDesc").innerHTML = h7
		document.querySelector(".brideDesc").style.setProperty('font-size', (document.body.clientWidth/ratio)*0.065 +"px");
		document.querySelector(".brideDesc").innerHTML = h8
		document.querySelector(".thirdSegmentTitle").innerHTML = h9
		document.querySelector(".fourthSegmentTitle").innerHTML = h12
		document.querySelector(".when").innerHTML = h13
		document.querySelector(".where").innerHTML = h14
		document.querySelector(".formHeader").innerHTML = h15
		document.querySelector(".Coming").innerHTML = h16
		document.querySelector(".NotComing").innerHTML = h17
		setDisplay("atnheader",h18)
		setDisplay("RelationshipWithGroom",h19)
		setDisplay("familyOrCousinWithGroom",h20)
		setDisplay("PCFWithGroom",h21)
		setDisplay("SCFWithGroom",h22)
		setDisplay("UniFWithGroom",h23)
		setDisplay("ColleagueWithGroom",h24)
		setDisplay("ExColleagueWithGroom",h38)
		setDisplay("OthersWithGroom",h25)
		setDisplay("RelationshipWithBride",h26)
		setDisplay("familyOrCousinWithBride",h27)
		setDisplay("PCFWithBride",h28)
		setDisplay("SCFWithBride",h29)
		setDisplay("UniFWithBride",h30)
		setDisplay("ColleagueWithBride",h31)
		setDisplay("ExColleagueWithBride",h39)
		setDisplay("OthersWithBride",h32)
		setPlaceholder("firstName",h33)
		setDisplay("vegeWording",h41)
		setPlaceholder("comments",h35)
		setDisplay("submit",h36)
		setPlaceholder("attendanceCount",h37)
		setDisplay("button__text",h40)
    }
});

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Window Resize event xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

header_pic_height = 1324;
header_pic_width = 2201;
bride_height = 1280;
bride_width = 853;

ratio = header_pic_width/header_pic_height;
ratio_groom_bride = bride_width/bride_height;

document.querySelector(".header").style.setProperty('height', (document.body.clientWidth/ratio)*0.8 +"px");
document.querySelector(".headline").style.setProperty('font-size', (document.body.clientWidth/ratio)*0.15 +"px");
document.querySelector(".headlineDate").style.setProperty('font-size', (document.body.clientWidth/ratio)*0.1 +"px");
document.querySelector(".countdown").style.setProperty('font-size', (document.body.clientWidth/ratio)*0.02 +"px");
document.querySelector(".headerdatetime1").style.setProperty('font-size', (document.body.clientWidth/ratio)*0.05 +"px");
document.querySelector(".headerdatetime2").style.setProperty('font-size', (document.body.clientWidth/ratio)*0.05 +"px");
document.querySelector(".headerdatetime3").style.setProperty('font-size', (document.body.clientWidth/ratio)*0.05 +"px");
document.querySelector(".headerdatetime4").style.setProperty('font-size', (document.body.clientWidth/ratio)*0.05 +"px");

document.querySelector(".Ocean").style.setProperty('height', (document.body.clientWidth/ratio)*0.3 +"px");

document.querySelector(".secondSegmentTitle").style.setProperty('font-size', (document.body.clientWidth/ratio)*0.1 +"px");
document.querySelector(".groomDesc").style.setProperty('font-size', (document.body.clientWidth/ratio)*0.065 +"px");
document.querySelector(".brideDesc").style.setProperty('font-size', (document.body.clientWidth/ratio)*0.065 +"px");
width = document.body.clientWidth/4
document.querySelector(".bride_pic").style.setProperty('width', (width) +"px");
document.querySelector(".bride_pic").style.setProperty('height', (width/ratio_groom_bride) +"px");
document.querySelector(".groom_pic").style.setProperty('width', (width) +"px");
document.querySelector(".groom_pic").style.setProperty('height', (width/ratio_groom_bride) +"px");

document.querySelector(".thirdSegmentTitle").style.setProperty('font-size', (document.body.clientWidth/ratio)*0.1 +"px");
document.querySelector(".fourthSegmentTitle").style.setProperty('font-size', (document.body.clientWidth/ratio)*0.1 +"px");
document.querySelector(".whenAndWhere").style.setProperty('font-size', (document.body.clientWidth/ratio)*0.03 +"px");

document.querySelector(".form").style.setProperty('width', (document.body.clientWidth)*0.8 +"px");
document.querySelector(".formHeader").style.setProperty('font-size', (document.body.clientWidth)*0.08 +"px");
document.querySelector(".attendance").style.setProperty('font-size', (document.body.clientWidth)*0.025 +"px");
document.querySelector(".firstName").style.setProperty('font-size', (document.body.clientWidth)*0.02 +"px");
document.querySelector(".formMain1").style.setProperty('font-size', (document.body.clientWidth)*0.02 +"px");
document.querySelector(".button__text").style.setProperty('font-size', (document.body.clientWidth)*0.02 +"px");

document.querySelector(".startModal").style.setProperty('--gap', (document.body.clientHeight)*0.01 +"px");
document.querySelector(".playAudioButton").style.setProperty('left', (document.body.clientWidth)*0.6 +"px");
document.querySelector(".playAudioButton").style.setProperty('font-size', (document.body.clientWidth)*0.03 +"px");
document.querySelector(".groomDesc").style.setProperty('top', (document.body.clientWidth)*0.05 +"px");
document.querySelector(".brideDesc").style.setProperty('top', (document.body.clientWidth)*0.05 +"px");
document.querySelector(".rui-animation-play-paused").style.setProperty('width', (document.body.clientWidth)*0.07 +"px");
document.querySelector(".rui-animation-play-paused").style.setProperty('height', (document.body.clientWidth)*0.07 +"px");
document.querySelector(".imageGallery").style.setProperty('height', (document.body.clientWidth)*1 +"px");
/*document.querySelector(".headerdatetime4").style.setProperty('font-size', (document.body.clientWidth/ratio)*0.05 +"px");
document.querySelector(".headerdatetime4").style.setProperty('font-size', (document.body.clientWidth/ratio)*0.05 +"px");

*/
/*
document.querySelector(".headerWord2").style.setProperty('font-size', document.documentElement.clientWidth/80 +"px");
document.querySelector(".BackgroundText").style.setProperty('font-size', document.documentElement.clientWidth/30 +"px");
document.querySelector(".Title").style.setProperty('font-size', document.documentElement.clientWidth/50 +"px");
document.querySelector(".firstSegment").style.setProperty('top', document.documentElement.clientWidth/10 +"px");
document.querySelector(".Service_title").style.setProperty('font-size', document.documentElement.clientWidth/30 +"px");
document.querySelector(".Service_desc").style.setProperty('font-size', document.documentElement.clientWidth/50 +"px");
document.querySelector(".Service_contents").style.setProperty('font-size', document.documentElement.clientWidth/70 +"px");
document.querySelector(".Service_content_button").style.setProperty('font-size', document.documentElement.clientWidth/70 +"px");
document.querySelector(".Service_content_button2").style.setProperty('font-size', document.documentElement.clientWidth/70 +"px");
document.querySelector(".Service_content_button3").style.setProperty('font-size', document.documentElement.clientWidth/70 +"px");
document.querySelector(".AboutUs").style.setProperty('font-size', document.documentElement.clientWidth/30 +"px");
document.querySelector(".AboutUsDesc").style.setProperty('font-size', document.documentElement.clientWidth/50 +"px");
document.querySelector(".fourthSegmentTitle").style.setProperty('font-size', document.documentElement.clientWidth/30 +"px");
document.querySelector(".fourthSegmentSubTitle").style.setProperty('font-size', document.documentElement.clientWidth/40 +"px");
document.querySelector(".fourthSegmentDesc").style.setProperty('font-size', document.documentElement.clientWidth/50 +"px");
document.querySelector(".shapesAndDesc").style.setProperty('font-size', document.documentElement.clientWidth/70 +"px");
document.querySelector(".address").style.setProperty('font-size', document.documentElement.clientWidth/80 +"px");
document.querySelector(".email").style.setProperty('font-size', document.documentElement.clientWidth/80 +"px");
document.querySelector(".fifthSegmentCompanyName").style.setProperty('font-size', document.documentElement.clientWidth/100 +"px");
document.querySelector(".fifthSegmentButton").style.setProperty('font-size', document.documentElement.clientWidth/80 +"px");

document.querySelector(".close").style.setProperty('font-size', document.documentElement.clientWidth/80 +"px");
document.querySelector(".form1").style.setProperty('font-size', document.documentElement.clientWidth/90 +"px");
document.querySelector(".countrySel").style.setProperty('font-size', document.documentElement.clientWidth/80 +"px");
document.querySelector(".form_title").style.setProperty('font-size', document.documentElement.clientWidth/40 +"px");
document.querySelector(".modal-content").style.setProperty('height', document.documentElement.clientHeight/1.5 +"px");
*/
window.addEventListener("resize", function(){
	document.querySelector(".header").style.setProperty('height', (document.body.clientWidth/ratio)*0.8 +"px");
	document.querySelector(".headline").style.setProperty('font-size', (document.body.clientWidth/ratio)*0.15 +"px");
	document.querySelector(".headlineDate").style.setProperty('font-size', (document.body.clientWidth/ratio)*0.1 +"px");
	document.querySelector(".countdown").style.setProperty('font-size', (document.body.clientWidth/ratio)*0.02 +"px");
	document.querySelector(".headerdatetime1").style.setProperty('font-size', (document.body.clientWidth/ratio)*0.05 +"px");
	document.querySelector(".headerdatetime2").style.setProperty('font-size', (document.body.clientWidth/ratio)*0.05 +"px");
	document.querySelector(".headerdatetime3").style.setProperty('font-size', (document.body.clientWidth/ratio)*0.05 +"px");
	document.querySelector(".headerdatetime4").style.setProperty('font-size', (document.body.clientWidth/ratio)*0.05 +"px");

	document.querySelector(".Ocean").style.setProperty('height', (document.body.clientWidth/ratio)*0.3 +"px");

	document.querySelector(".secondSegmentTitle").style.setProperty('font-size', (document.body.clientWidth/ratio)*0.1 +"px");
	document.querySelector(".groomDesc").style.setProperty('font-size', (document.body.clientWidth/ratio)*0.065 +"px");
	document.querySelector(".brideDesc").style.setProperty('font-size', (document.body.clientWidth/ratio)*0.065 +"px");
	width = document.body.clientWidth/4
	document.querySelector(".bride_pic").style.setProperty('width', (width) +"px");
	document.querySelector(".bride_pic").style.setProperty('height', (width/ratio_groom_bride) +"px");
	document.querySelector(".groom_pic").style.setProperty('width', (width) +"px");
	document.querySelector(".groom_pic").style.setProperty('height', (width/ratio_groom_bride) +"px");

	document.querySelector(".thirdSegmentTitle").style.setProperty('font-size', (document.body.clientWidth/ratio)*0.1 +"px");
	document.querySelector(".fourthSegmentTitle").style.setProperty('font-size', (document.body.clientWidth/ratio)*0.1 +"px");
	document.querySelector(".whenAndWhere").style.setProperty('font-size', (document.body.clientWidth/ratio)*0.03 +"px");

	document.querySelector(".form").style.setProperty('width', (document.body.clientWidth)*0.8 +"px");
	document.querySelector(".formHeader").style.setProperty('font-size', (document.body.clientWidth)*0.08 +"px");
	document.querySelector(".attendance").style.setProperty('font-size', (document.body.clientWidth)*0.025 +"px");
	document.querySelector(".firstName").style.setProperty('font-size', (document.body.clientWidth)*0.02 +"px");
	document.querySelector(".formMain1").style.setProperty('font-size', (document.body.clientWidth)*0.02 +"px");
	document.querySelector(".button__text").style.setProperty('font-size', (document.body.clientWidth)*0.02 +"px");

	document.querySelector(".startModal").style.setProperty('--gap', (document.body.clientHeight)*0.01 +"px");
	document.querySelector(".playAudioButton").style.setProperty('left', (document.body.clientWidth)*0.6 +"px");
	document.querySelector(".playAudioButton").style.setProperty('font-size', (document.body.clientWidth)*0.03 +"px");
	document.querySelector(".groomDesc").style.setProperty('top', (document.body.clientWidth)*0.05 +"px");
	document.querySelector(".brideDesc").style.setProperty('top', (document.body.clientWidth)*0.05 +"px");
	document.querySelector(".rui-animation-play-paused").style.setProperty('width', (document.body.clientWidth)*0.07 +"px");
	document.querySelector(".rui-animation-play-paused").style.setProperty('height', (document.body.clientWidth)*0.07 +"px");
	document.querySelector(".imageGallery").style.setProperty('height', (document.body.clientWidth)*1 +"px");
	//document.getElementById("headerWord1").innerHTML = (document.documentElement.clientHeight);
});


//jQuery to duplicate input when more than 1 user
//https://script.google.com/macros/s/AKfycbx3KXlizP7F_MOUu_pDciB0KkAIumeGGkl9-G-utDX1r30RtQuHZzPGpdXwdRYC-OLD/exec
var j=0
var thingTemplate = $('.attendee'+1).clone()
setPlaceholder("firstName","姓名")
setDisplay("RelationshipWithGroom","新郎关系 <br> (婚礼座位安排)<br>")
setDisplay("familyOrCousinWithGroom","新郎家人/亲戚")
setDisplay("PCFWithGroom","新郎小学朋友")
setDisplay("SCFWithGroom","新郎中学朋友")
setDisplay("UniFWithGroom","新郎大学朋友")
setDisplay("ColleagueWithGroom","新郎同事")
setDisplay("ExColleagueWithGroom","新郎前同事")
setDisplay("OthersWithGroom","其他")
setDisplay("RelationshipWithBride","新娘关系 <br> (婚礼座位安排)<br>")
setDisplay("familyOrCousinWithBride","新娘家人/亲戚")
setDisplay("PCFWithBride","新娘小学朋友")
setDisplay("SCFWithBride","新娘中学朋友")
setDisplay("UniFWithBride","新娘大学朋友")
setDisplay("ColleagueWithBride","新娘同事")
setDisplay("ExColleagueWithBride","新娘前同事")
setDisplay("OthersWithBride","其他")
setDisplay("vegeWording","我是素食者")
var thingTemplateChinese = $('.attendee'+1).clone()
setPlaceholder("firstName",h33)
setDisplay("RelationshipWithGroom",h19)
setDisplay("familyOrCousinWithGroom",h20)
setDisplay("PCFWithGroom",h21)
setDisplay("SCFWithGroom",h22)
setDisplay("UniFWithGroom",h23)
setDisplay("ColleagueWithGroom",h24)
setDisplay("ExColleagueWithGroom",h38)
setDisplay("OthersWithGroom",h25)
setDisplay("RelationshipWithBride",h26)
setDisplay("familyOrCousinWithBride",h27)
setDisplay("PCFWithBride",h28)
setDisplay("SCFWithBride",h29)
setDisplay("UniFWithBride",h30)
setDisplay("ColleagueWithBride",h31)
setDisplay("ExColleagueWithBride",h39)
setDisplay("OthersWithBride",h32)
setDisplay("vegeWording",h41)
$(document).ready(function(){
	
    $('#button').click(function(){
    	j=j+1;
    	/*document.querySelector(".attendeeTitle"+(j-1)).innerHTML = "<u> Attendee "+(j+1)+": </u>";
    	var temp = document.getElementById("attendeeTitle");
    	if (document.getElementById("attendeeTitle").classList.contains("attendeeTitle"+(j-1))){
    		document.getElementById("attendeeTitle").classList.add("attendeeTitle"+j);
    		document.getElementById("attendeeTitle").classList.remove("attendeeTitle"+(j-1));
    	}*/
        
        if ($("#toggle_checkbox").is(':checked')){
        	var thing = thingTemplateChinese.clone()
			thing.find('.attendeeTitle0').html("<u class=atnheader> 嘉宾 </u><u> "+(j+1)+": </u>")
		}
		else{
			var thing = thingTemplate.clone()
			thing.find('.attendeeTitle0').html("<u class=atnheader> Attendee </u><u> "+(j+1)+": </u>")
		}

		//thing
		//	.removeClass('hidingSubmitsss0')
		//	.addClass('hidingSubmitsss'+(j));
		thing.find('#asdasd').each(function() {
    		//alert(this.innerHTML)
    		$(this).removeClass("hidingSubmitsss0")
    		$(this).addClass("hidingSubmitsss"+j)
		});
		thing.find('#Relationship').each(function() {
    		//alert(this.innerHTML)
    		$(this).removeClass("Relationship0")
    		$(this).addClass("Relationship"+j)
		});
		thing.find('#FirstName').each(function() {
    		//alert(this.innerHTML)
    		$(this).removeClass("FirstName0")
    		$(this).addClass("FirstName"+j)
		});
		thing.find('#Vege').each(function() {
    		//alert(this.innerHTML)
    		$(this).removeClass("Vege0")
    		$(this).addClass("Vege"+j)
		});
		thing.find('#form').each(function() {
    		//alert(this.innerHTML)
    		$(this).removeClass("form0")
    		$(this).addClass("form"+j)
		});
		thing
			.removeClass('attendee'+1)
			.addClass('attendee'+(j+1));
		thing.find('input').each(function() {
    		this.name= this.name.replace(''+0+'', ''+j+'');
		});
		/*	
		if (document.getElementById("attendeeTitle").classList.contains("attendeeTitle"+j)){
    		document.getElementById("attendeeTitle").classList.remove("attendeeTitle"+j);
    		document.getElementById("attendeeTitle").classList.add("attendeeTitle"+(j-1));
    	}
    	document.querySelector(".attendeeTitle"+(j-1)).innerHTML = "<u> Attendee "+(j)+": </u>";
    	*/
		//thing.find('input').eq(0).attr({
        //    id: 'rate' + productID,
        //    name: 'rate' + productID
        //});

        // update name of the second input
        //thing.find('input').eq(1).attr('name', 'notes' + productID);

        $('#attendees').append(thing);
    });

});

//Modal Image gallery
//var myTimer = window.setInterval("plusSlides(1)", 2000);

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  //window.clearInterval(myTimer);
  //myTimer=window.setInterval("plusSlides(1)",2000);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  //document.getElementById("mySlides"+slideIndex).classList.remove("fadein");
  //document.getElementById("mySlides"+slideIndex).classList.add("fadeout");
  //document.getElementById("mySlides"+(slideIndex+1)).classList.remove("fadeout");
  //document.getElementById("mySlides"+(slideIndex+1)).classList.add("fadein");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  //slides[slideIndex-1].style.height = (window.innerHeight*0.8)+"px";
  dots[slideIndex-1].className += " active";
}

//Background music

function music(){
	var audio = document.getElementById("backgroundMusic");
	if (document.getElementById("music").className == "rui-animation-play-paused"){
		document.getElementById("music").className="rui-audio-rotate-360"
		audio.play();
		document.querySelector(".startModal").style.display = "none";
	}else{
		document.getElementById("music").className="rui-animation-play-paused"
		audio.pause();
	}
}

//From Display radio button
function checkRadio(){
	if(document.getElementById("coming").checked){
		document.querySelector(".formComing").style.display="inline";
		document.querySelector(".formNotComing").style.display="none";
		document.querySelector(".submit").style.display="flex";
	}
	else if (document.getElementById("notComing").checked){
		document.querySelector(".formComing").style.display="none";
		document.querySelector(".formNotComing").style.display="inline";
		document.querySelector(".submit").style.display="flex";
	}
	else{
		document.querySelector(".submit").style.display="none";
	}
}

//Info submission
function formSubmission(count){
	var final_string_relationship=""
	var final_string_firstname=""
	var final_string_vege=""
	for (jj = 0; jj < j+1; jj++){
	    var ele = document.getElementsByName(jj+'[Rela]');
	    for(i = 0; i < ele.length; i++) {
	          
	        if(ele[i].checked) {
	            //final_string+=ele[i].value
	            document.querySelector('.Relationship'+jj).value=ele[i].value
	            if(jj!==0){
	            	final_string_relationship+=","+document.querySelector('.Relationship'+jj).value
	            }
	            else{
	            	final_string_relationship+=document.querySelector('.Relationship'+jj).value
	            }
	            
	        }
	    }

	    var ele = document.getElementsByName(jj+'[firstn]');
	    for(i = 0; i < ele.length; i++) {
	    	if (typeof(ele[i].value) !== undefined ){
	    		//final_string+=" "+ele[i].value
	    		document.querySelector('.FirstName'+jj).value=ele[i].value
	    		if(jj!==0){
	            	final_string_firstname+=","+document.querySelector('.FirstName'+jj).value
	            }
	            else{
	            	final_string_firstname+=document.querySelector('.FirstName'+jj).value
	            }
	    	}
	    }
	      
	    var ele = document.getElementsByName(jj+'[vege]');
	    for(i = 0; i < ele.length; i++) {
	          
	        if(ele[i].checked) {
	          	document.querySelector('.Vege'+jj).value=ele[i].value
	          	if(jj!==0){
	            	final_string_vege+=","+document.querySelector('.Vege'+jj).value
	            }
	            else{
	            	final_string_vege+=document.querySelector('.Vege'+jj).value
	            }
	        }
	        else{
	        	document.querySelector('.Vege'+jj).value="NoVege"
	        	if(jj!==0){
	            	final_string_vege+=","+document.querySelector('.Vege'+jj).value
	            }
	            else{
	            	final_string_vege+=document.querySelector('.Vege'+jj).value
	            }
	        }
	    }

	    //$(".hidingSubmitsss"+jj).click()
	}	
    //alert(final_string_relationship)
    //alert(final_string_firstname)
    //alert(final_string_vege)
    if(document.getElementById("coming").checked){
    	document.querySelector('.ComingNotComing0').value="Coming"
    	document.querySelector('.Commentsfinal0').value=document.querySelector('.comments').value
    	document.querySelector('.Relationship0').value=final_string_relationship
    	document.querySelector('.FirstName0').value=final_string_firstname
    	document.querySelector('.Vege0').value=final_string_vege
    	$(".hidingSubmitsss0").click()
    }else{
    	document.querySelector('.ComingNotComing0').value="NotComing"
    	document.querySelector('.FirstName0').value=document.querySelector('.attendanceCount').value
    	$(".hidingSubmitsss0").click()
    }
}

//Show Success when completed form submit
window.addEventListener("load", function() {
  const form = document.querySelector('.form0');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
    	alert("Response Successfully Submitted!")
    	document.location.reload(true)
    })
  });
});


/*
var divl = document.querySelector(".div2");



document.querySelector(".div2").onmouseenter = function(){
	divl.style.setProperty('padding-top','16px');
};
document.querySelector(".div2").onmouseout = function(){
	divl.style.setProperty('padding-top','5px');
};
*/
/*
document.addEventListener('mouseover', function() {
	let classname = document.elementFromPoint(event.clientX, event.clientY).className;
	classname = "."+classname;
	if (classname==d){

	}
	else{
		document.querySelector(d).style.setProperty('padding-top','0px');
		console.log(d);
		console.log(classname);

	}
	console.log( classname );
	document.querySelector(classname).style.setProperty('padding-top','16px');
	d = classname;
	console.log(d);
});

document.addEventListener('mousedown', function() {
	if (mouseup==true){
		let cname = document.elementFromPoint(event.clientX, event.clientY).className;
		cname = "."+cname;
		document.querySelector(cname).style.position='absolute'
	}
	

});
*/