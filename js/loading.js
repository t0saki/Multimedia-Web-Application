
  // 隐藏加载页面和显示网页内容的函数
  function hideLoading() {
    var loading = document.querySelector('.loading');
    loading.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
  
  // 延迟5秒钟隐藏加载页面
  setTimeout(hideLoading, 2200);

// window.addEventListener('load', function() {
//     var loading = document.querySelector('.loading');
//     loading.style.display = 'none';
//     document.body.style.overflow = 'auto';
    
//   });
$(document).ready(function() {
  // 隐藏加载页面并显示主页面
  
  $(".loading").fadeOut(1000, function() {
    $(".main").fadeIn(1000);
  });
});
