console.log('cat-clicker works really!!');

var catData = [
  { name:'One', pic:'cat.jpg', count:0},
  { name:'Two', pic:'cat2.jpg', count:0},
  { name:'Three', pic:'cat3.jpg', count:0},
  { name:'Four', pic:'cat4.jpg', count:0},
  { name:'Five', pic:'cat5.jpg', count:0},
];

let catListWrapper = document.createElement('div');
catListWrapper.classList.add('cat-list-wrapper');

let catList = document.createElement('ul');

catListWrapper.appendChild(catList);

let starSpan = document.createElement('span');
starSpan.innerText = '*';

for (let index = 0; index < catData.length; index++) {
  let cat = catData[index];

  // construct catpic - right side
  let catPicWrapper = document.createElement('div');
  catPicWrapper.classList.add('cat-pic-wrapper');

  let catPic = document.createElement('img');
  catPic.setAttribute('class', 'cat-pic');
  catPic.setAttribute('src', cat.pic);
  catPic.setAttribute('alt', 'cat-pic');
  catPic.setAttribute('id', cat.name);

  let catName = document.createElement('div');
  catName.setAttribute('class','cat-name')
  catName.textContent = cat.name;

  catPic.addEventListener('click', function () {
    cat.count++;
    console.log(cat.count);
    catPicClicks.textContent = cat.count;
  });

  let catPicClicks = document.createElement('div');
  catPicClicks.setAttribute('class','cat-pic-clicks')
  catPicClicks.textContent = cat.count;

  catPicWrapper.appendChild(catPic);
  catPicWrapper.appendChild(catName);
  catPicWrapper.appendChild(catPicClicks);

  // construct cat list - left side 

  let catListItem = document.createElement('li');
  let catLink = document.createElement('a');
  catLink.setAttribute('class', 'cat-link');
  catLink.setAttribute('data-name', cat.name);
  catLink.setAttribute('href', 'javascript:void(0)');
  catLink.textContent = cat.name;

  catListItem.appendChild(catLink);
  catList.appendChild(catListItem);

  catLink.addEventListener('click', function () {
    let clickedCatName = cat.name;
    // remove current-item from all the cats
    let allCatPics = document.querySelectorAll('.cat-pic');
    allCatPics.forEach(function (catPic) {
      catPic.closest('.cat-pic-wrapper').classList.remove('current-item');
    })
    // add current-item to just the current cat
    let selectedCat = document.querySelector(`#${cat.name}`);
    selectedCat.closest('.cat-pic-wrapper').classList.add('current-item');
  });

  // add both to the dom
  document.body.querySelector('.main-content .cat-slide-show .cat-slide-show__left').appendChild(catListWrapper);
  document.body.querySelector('.main-content .cat-slide-show .cat-slide-show__right').appendChild(catPicWrapper);
}