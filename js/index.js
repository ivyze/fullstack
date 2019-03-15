$(document).ready(function(){

  var signUpBtn = $('#signUpBtn');
  //회원가입 홈
  signup = $('#signup');
  //로그인 폼
  loginForm = $('#loginForm');
  //내가 만드는 첫 웹사이트에 어서오세요.
  introSite = $('#introSite');
//가입 이벤트
  signUpBtn.click(function(){
    //로그인 폼 숨기기
  loginForm.slideUp();
  //회원가입 폼 보이기
  signup.slideDown();
  //내가 만드는 첫 웹서비스에 어서오세요 -문구 숨기기
  introSite.slideUp();
  });
  var goToLoginBtn = $('#goToLoginBtn');

  goToLoginBtn.click(function(){

    loginForm.slideDown();

    signup.slideUp();

    introSite.slideDown();
  });
  var genderWoman = $('#gMW');
  var genderMan = $('#gMM');
  genderWoman.click(function(){
    genderBgInit();
    $(this).css('background','#64cbf9');
    $(this).css('color','#fff');

  });
  genderMan.click(function(){
    genderBgInit();
    $(this).css('background','#64cbf9');
    $(this).css('color','#fff');

  });
  function genderBgInit(){
    genderMan.css('background','#fff');
    genderWoman.css('background','#fff');
    genderMan.css('color','#000');
    genderWoman.css('color','#000');
  }
});
toGoToShort = false;
$(window).resize(function(){
  if(window.innerWidth >= 1200){
    loginForm.slideDown();
    signup.slideDown();
    introSite.slideDown();
    toGoToShort=true;
  }else {
    if(toGoToShort == true){
      signup.slideUp();
    }
  }
});
