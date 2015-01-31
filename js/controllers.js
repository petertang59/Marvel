angular.module('HelpfulFilters', [])

  // Extracts the key from a list of objects.
  //
  // suage:
  //
  //     <p>Heroes</p>
  //     <ul>
  //       <li ng-repeat="hero in heroes | extractKey:'name'">{{hero}}</li>
  //     </ul>
  .filter('extractKey', function () {
    return function (input, key) {
      console.log(input, key);
      return input.map(function (el) {
        return el[key];
      });
    }
  })

  // Outputs unique elements from the list.
  //
  // usage:
  //
  //     <select ng-repeat="team in heroes | extractKey:'team' | unique">
  //       <option>{{team}}</option>
  //     </select>
  .filter('unique', function () {
    return function (input) {
      console.log(input);
      var uniques = {};
      input.forEach(function (el) {
        uniques[el] = true;
      });
      return Object.keys(uniques);
    }
  })

  // Filters objects in list by key.
  //
  // usage:
  //
  //     <p>Heroes</p>
  //     <ul>
  //       <li ng-repeat="hero in heroes | conditionalStrictFilterKey:searchTeam:team">
  //         {{hero.name}} {{hero.team}} {{hero.species}}
  //       </li>
  //     </ul>
  .filter('conditionalStrictFilterKey', function () {
    return function (input, query, key) {
      console.log(input, query, key);
      if (!query) { return input; }
      return input.filter(function (el) {
        return el[key] === query;
      });
    }
  });


var HeroApp = angular.module('HeroApp', ['HelpfulFilters']);


HeroApp.controller('HeroListCtrl', function ($scope) {
  $scope.herosList = [
    {'name': 'Iron Man',
      'team': 'Avengers',
      'age':1951, 
      'species':'Human',
      'imageUrl':'img/ironman.png', 
      'bgcolor':'#9e3d3b',
      'id':'ironman',
      'bio':'An American billionaire playboy, industrialist, and ingenious engineer, Tony Stark suffers a severe chest injury during a kidnapping in which his captors attempt to force him to build a weapon of mass destruction. He instead creates a powered suit of armor to save his life and escape captivity. An American billionaire playboy, industrialist, and ingenious engineer, Tony Stark suffers a severe chest injury during a kidnapping in which his captors attempt to force him to build a weapon of mass destruction. He instead creates a powered suit of armor to save his life and escape captivity. An American billionaire playboy, industrialist, and ingenious engineer, Tony Stark suffers a severe chest injury during a kidnapping in which his captors attempt to force him to build a weapon of mass destruction. He instead creates a powered suit of armor to save his life and escape captivity.' },
    
    {'name': 'Captain America',
      'team': 'Avengers',
      'age':1939, 
      'species': 'Altered Human', 
      'imageUrl':'img/captainamerica.png',
      'bgcolor':'#3c688a',
    'bio':'This dude is Chris Evans. He is super buff.'
  },
    
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

      {'name': 'Star Lord',
     'team': 'Guardians',
     'age':1976,
     'species': 'Half-Alien',
     'imageUrl':'img/starlord.png',
     'bgcolor':'#940000'},

      {'name': 'Professor X',
     'team': 'X-Men',
     'age':1963,
     'species': 'Mutant',
     'imageUrl':'img/professorx.png',
     'bgcolor':'#A1A1A1'},

      {'name': 'Jean Grey',
     'team': 'X-Men',
     'age':1963,
     'species': 'Mutant',
     'imageUrl':'img/jeangrey.png',
     'bgcolor':'#160070'},

       {'name': 'Spiderman',
     'team': 'None',
     'age':1962,
     'species': 'Altered Human',
     'imageUrl':'img/spiderman.png',
     'bgcolor':'#346191'},

     {'name': 'Falcon',
     'team': 'Avengers',
     'age':1969,
     'species': 'Human',
     'imageUrl':'img/falcon.png',
     'bgcolor':'#D60000'},

       {'name': 'Human Torch',
     'team': 'Fantastic Four',
     'age':1961,
     'species': 'Altered Human',
     'imageUrl':'img/humantorch.png',
     'bgcolor':'#D64700'},

      {'name': 'Mr Fantastic',
     'team': 'Fantastic Four',
     'age':1961,
     'species': 'Altered Human',
     'imageUrl':'img/mrfantastic.png',
     'bgcolor':'#005FC4'},

     {'name': 'Invisible Woman',
     'team': 'Fantastic Four',
     'age':1961,
     'species': 'Altered Human',
     'imageUrl':'img/invisiblewoman.png',
     'bgcolor':'#4787CC'},

      {'name': 'The Thing',
     'team': 'Fantastic Four',
     'age':1961,
     'species': 'Altered Human',
     'imageUrl':'img/thething.png',
     'bgcolor':'#BA6A30'},

      {'name': 'Groot',
     'team': 'Guardians',
     'age':1960,
     'species': 'Alien',
     'imageUrl':'img/groot.png',
     'bgcolor':'#5C4A3D'},

      {'name': 'Rocket Raccoon',
     'team': 'Guardians',
     'age':1976,
     'species': 'Alien',
     'imageUrl':'img/rocketraccoon.png',
     'bgcolor':'#545454'},

       {'name': 'Storm',
     'team': 'X-Men',
     'age':1975,
     'species': 'Mutant',
     'imageUrl':'img/storm.png',
     'bgcolor':'#00204D'},
  ];

  $scope.orderProp = 'age';
});

$scope.toggles = [{ state: true }, { state: false }, { state: true }];

