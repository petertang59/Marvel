var HeroApp = angular.module('HeroApp', ['ui.unique']);

HeroApp.controller('HeroListCtrl', function ($scope) {
  $scope.herosList = [
    {'name': 'Iron Man',
      'team': 'Avengers',
      'age':1951, 
      'species':'Human',
      'imageUrl':'img/ironman.png', 
      'bgcolor':'#9e3d3b',
      'id':'ironman',
      'bio':'This dude is Robert Downey Jr. He is s a total badass and makes sick tech.' },
    
    {'name': 'Captain America',
      'team': 'Avengers',
      'age':1939, 
      'species': 'Altered Human', 
      'imageUrl':'img/captainamerica.png',
      'bgcolor':'#3c688a'},
    
    {'name': 'Thor',
      'team': 'Avengers', 
      'age':1962,
      'species': 'Asgardian',
      'imageUrl':'img/thor.png',
      'bgcolor':'#192a5b'
     },

     {'name': 'Hulk',
     'team': 'Avengers',
     'age':1962,
     'species': 'Altered Human',
     'imageUrl':'img/hulk.png',
     'bgcolor':'#48824a'},

      {'name': 'Quicksilver',
      'team': 'Avengers',
      'age':1964, 
      'species': 'Mutant',
       'imageUrl':'img/quicksilver.png', 
      'bgcolor':'#9dbace'},
    
    {'name': 'Scarlet Witch',
      'team': 'Avengers',
      'age':1964, 
      'species': 'Mutant', 
      'imageUrl':'img/scarletwitch.png',
      'bgcolor':'#ff523b'},
    
    {'name': 'Black Widow',
      'team': 'S.H.I.E.L.D.', 
      'age':1964,
      'species': 'Human',
      'imageUrl':'img/blackwidow.png',
      'bgcolor':'#515151'
     },

     {'name': 'Hawkeye',
     'team': 'S.H.I.E.L.D.',
     'age':1964,
     'species': 'Human',
     'imageUrl':'img/hawkeye.png',
     'bgcolor':'#351840'},

      {'name': 'Ant-Man',
     'team': 'Avengers',
     'age':1962,
     'species': 'Human',
     'imageUrl':'img/antman.png',
     'bgcolor':'#C90032'},

      {'name': 'Nick Fury',
     'team': 'S.H.I.E.L.D.',
     'age':1963,
     'species': 'Human',
     'imageUrl':'img/nickfury.png',
     'bgcolor':'#000000'},

      {'name': 'Cyclops',
     'team': 'X-Men',
     'age':1963,
     'species': 'Mutant',
     'imageUrl':'img/cyclops.png',
     'bgcolor':'#0062D1'},

     {'name': 'Wolverine',
     'team': 'X-Men',
     'age':1974,
     'species': 'Mutant',
     'imageUrl':'img/wolverine.png',
     'bgcolor':'#E0B700'},

      {'name': 'Wolverine',
     'team': 'X-Men',
     'age':1974,
     'species': 'Mutant',
     'imageUrl':'img/starlord.png',
     'bgcolor':'#940000'},

  ];

  $scope.orderProp = 'age';
});

describe('Hero App', function() {

  describe('Hero list view', function() {

    beforeEach(function() {
      browser.get('app/index.html');
    });


    it('should filter the Hero list as a user types into the search box', function() {

      var HeroList = element.all(by.repeater('Hero in HerosList'));
      var query = element(by.model('query'));

      expect(HeroList.count()).toBe(8);

      query.sendKeys('Avengers');
      expect(HeroList.count()).toBe(8);

      query.clear();
      query.sendKeys('S.H.I.E.L.D.');
      expect(HeroList.count()).toBe(8);
    });
  });
});

