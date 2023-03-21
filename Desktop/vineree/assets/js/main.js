"use strict";

var contactBtn = document.querySelector('.contacts');
var contactPopup = document.querySelector('.contacts-popup');
contactBtn.addEventListener('click', function () {
  contactPopup.classList.toggle('contacts-popup-active');
});
$(function () {
  $('.slides').slick({
    prevArrow: '.btn-prev',
    nextArrow: '.btn-next'
  });
  $('.photos__slider').slick({
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    variableWidth: true
  });
});
/*
    video-click
*/

var videoList = document.querySelector('.video__list');
var videoImg = document.querySelector('.video-item');
var videoItem = document.querySelectorAll('.video__item-link');
var videoIframe = document.querySelectorAll('.video__item-iframe');
videoList.addEventListener('click', videoClick);

for (var i = 0; i < videoItem.length; i++) {
  videoItem[i].addEventListener('click', function () {
    videoImg.scrollIntoView({
      block: "center",
      behavior: "smooth"
    });
  });
}

function videoClick(Event) {
  for (var _i = 0; _i < videoItem.length; _i++) {
    videoIframe[_i].style.display = 'none';

    videoItem[_i].classList.remove('questions-el-active');

    videoIframe[_i].classList.remove('video-active');
  }

  if (Event.target == videoList) {} else {
    var videoId = Event.target.id;
    videoItem[videoId].classList.add('questions-el-active');
    videoIframe[videoId].style.display = 'block';
  }
}

;