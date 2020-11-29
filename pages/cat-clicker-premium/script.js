console.log('cat-clicker works really!!');
/* ======= Model ======= */

var model = {
  currentCat: null,
  cats: [
    {
      clickCount: 0,
      name: 'Tabby',
      imgSrc: 'cat.jpg',
      imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
    },
    {
      clickCount: 0,
      name: 'Tiger',
      imgSrc: 'cat2.jpg',
      imgAttribution: 'https://www.flickr.com/photos/xshamx/4154543904',
    },
    {
      clickCount: 0,
      name: 'Scaredy',
      imgSrc: 'cat3.jpg',
      imgAttribution: 'https://www.flickr.com/photos/kpjas/22252709',
    },
    {
      clickCount: 0,
      name: 'Shadow',
      imgSrc: 'cat4.jpg',
      imgAttribution: 'https://www.flickr.com/photos/malfet/1413379559',
    },
    {
      clickCount: 0,
      name: 'Sleepy',
      imgSrc: 'cat5.jpg',
      imgAttribution: 'https://www.flickr.com/photos/onesharp/9648464288',
    },
  ],
};

/* ===== Controller ===== */

var controller = {
  init: function() {
    // set current cat to the first cat in the list
    model.currentCat = model.cats[0];

    // tell our views to initialise
    catListView.init();
    catView.init();
  },

  getCurrentCat: function() {
    return model.currentCat;
  },

  getCats: function() {
    return model.cats;
  },

  setCurrentCat: function(cat) {
    model.currentCat = cat;
  },

  // increments the counter for the currently selected cat
  incrementCounter: function() {
    model.currentCat.clickCount++;
    catView.render();
  },
};

/* ===== View ===== */

var catView = {
  // init gets called once.
  init: function() {
    // store pointers to our DOM elements for easy access later
    this.catElem = document.getElementById('cat');
    this.catNameElem = document.getElementById('cat-name');
    this.catImageElem = document.getElementById('cat-img');
    this.countElem = document.getElementById('cat-count');

    // on click increment the current cat's counter
    this.catImageElem.addEventListener('click', function () {
      controller.incrementCounter();
    })

    // render this view (update the DOM elements with the right values)
    this.render();
  },

  // render gets called again and again.
  render: function () {
    // update DOM elements with values from the current cat
    var currentCat = controller.getCurrentCat();
    this.countElem.textContent = currentCat.clickCount;
    this.catNameElem.textContent = currentCat.name;
    this.catImageElem.src = currentCat.imgSrc;
  }
};

var catListView = {
  init: function () {
    // store the DOM element for easy access later
    this.catListElem = document.getElementById('cat-list');

    // render this view (update the DOM elements with the right values)
    this.render();
  },

  render: function () {
    // get the cats we'll be rendering from the controller
    let cats = controller.getCats();

    // empty the cat list
    this.catListElem.innerHTML = '';
    
    // loop over the cats
    for (i = 0; i < cats.length; i++) {
      // this is the cat we're currently looping over
      let cat = cats[i];

      // make a new cat list item and set its text
      let elem = document.createElement('li');
      elem.textContent = cat.name;

      // on click, setCurrentCat and render the catView
      elem.addEventListener('click', function () {
        controller.setCurrentCat(cat);
        catView.render();
      })

      // finally, add the element to the list
      this.catListElem.appendChild(elem);
    }
  }
}

// make it go!
controller.init();