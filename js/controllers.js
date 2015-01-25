var HeroApp = angular.module('HeroApp', []);

HeroApp.controller('HeroListCtrl', function ($scope) {
  $scope.Heros = [
    {'name': 'Iron Man',
      'snippet': 'Avengers',
      'age': 1951, 
      'species': 'Human',
       'imageUrl':'img/ironman.png', 
      'bgcolor':'#9e3d3b'},
    
    {'name': 'Captain America',
      'snippet': 'Avengers',
      'age': 1939, 
      'species': 'Genetically Modified Human', 
      'imageUrl':'img/captainamerica.png',
      'bgcolor':'#3c688a'},
    
    {'name': 'Thor',
      'snippet': 'Avengers', 
      'age': 1962,
      'species': 'Asgardian',
      'imageUrl':'img/thor.png',
      'bgcolor':'#ddc076'
     },

     {'name': 'Hulk',
     'snippet': 'Avengers',
     'age': 1962,
     'species': 'Genetically Modified Human',
     'imageUrl':'img/hulk.png',
     'bgcolor':'#48824a'},

      {'name': 'Quicksilver',
      'snippet': 'Avengers',
      'age': 1964, 
      'species': 'Mutant',
       'imageUrl':'img/quicksilver.png', 
      'bgcolor':'#9dbace'},
    
    {'name': 'Scarlet Witch',
      'snippet': 'Avengers',
      'age': 1964, 
      'species': 'Mutant', 
      'imageUrl':'img/scarletwitch.png',
      'bgcolor':'#ff523b'},
    
    {'name': 'Black Widow',
      'snippet': 'S.H.I.E.L.D.', 
      'age': 1964,
      'species': 'Human',
      'imageUrl':'img/blackwidow.png',
      'bgcolor':'#515151'
     },

     {'name': 'Hawkeye',
     'snippet': 'S.H.I.E.L.D.',
     'age': 1964,
     'species': 'Human',
     'imageUrl':'img/hawkeye.png',
     'bgcolor':'#5b2424'},
  ];

  $scope.orderProp = 'age';
});

describe('Hero App', function() {

  describe('Hero list view', function() {

    beforeEach(function() {
      browser.get('app/index.html');
    });


    it('should filter the Hero list as a user types into the search box', function() {

      var HeroList = element.all(by.repeater('Hero in Heros'));
      var query = element(by.model('query'));

      expect(HeroList.count()).toBe(8);

      query.sendKeys('Avengers');
      expect(HeroList.count()).toBe(1);

      query.clear();
      query.sendKeys('S.H.I.E.L.D.');
      expect(HeroList.count()).toBe(2);
    });
  });
});