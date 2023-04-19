// // <!-- Spot_list -->
// // <div class="col-lg-9 col-md-8" id="list-master">
// //   <!-- ad listing list  -->
// //   <div
// //     class="ad-listing-list mt-20 my-element"
// //     id="ad-listing-data"
// //     popularity="3"
// //     duration="2"
// //     price="100"
// //     condition="2"
// //   >

// //     </div>
// //   </div>

// // 获取需要排序的ad-listing-list元素和其中的子元素
// var adListingList = document.getElementById("ad-listing-data");
// var ads = Array.from(adListingList.children);

// // 监听select元素的变化
// var sortSelect = document.getElementById("sort-select");
// sortSelect.addEventListener('change', () => {
//     // Print to console
//     console.log('Sort select changed');

//     // 根据选择的值获取需要排序的属性
//     const sortBy = sortSelect.value;

//     // 对子元素进行排序
//     ads.sort((a, b) => a.getAttribute(sortBy) - b.getAttribute(sortBy));

//     // 更新ad-listing-list元素的子元素顺序
//     ads.forEach(ad => adListingList.appendChild(ad));
// });

// var rangeWidget = document.getElementById("range-track");
// rangeWidget.addEventListener('change', () => {
//     // Print to console
//     console.log('Range changed');

//     // 获取需要过滤的属性
//     const filterBy = rangeWidget.value;

//     // 对子元素进行过滤
//     ads.forEach(ad => {
//         if (ad.getAttribute('price') > filterBy) {
//             ad.style.display = 'none';
//         } else {
//             ad.style.display = 'block';
//         }
//     });
// });

// // Print to console
// console.log('Filter.js loaded');