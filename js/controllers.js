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
      'bio':'An American billionaire playboy, industrialist, and ingenious engineer, Tony Stark suffers a severe chest injury during a kidnapping in which his captors attempt to force him to build a weapon of mass destruction. He instead creates a powered suit of armor to save his life and escape captivity.' },
    
    {'name': 'Captain America',
      'team': 'Avengers',
      'age':1939, 
      'species': 'Altered Human', 
      'imageUrl':'img/captainamerica.png',
      'bgcolor':'#3c688a',
    'bio':'Steve Rogers is deemed unfit to fight in the Second World War because of his lack of physical capabilities. He agrees to participate in a top secret experiment and emerges transformed into super soldier. He fought alongside the army until the last day of the war, when he is found frozen by accident.'
  },
    
    {'name': 'Thor',
      'team': 'Avengers', 
      'age':1962,
      'species': 'Asgardian',
      'imageUrl':'img/thor.png',
      'bgcolor':'#192a5b',
      'bio':'Thor is the Norse god of Thunder. When his father Odin decided that Thor became too proud, he was exiled to Earth as the identity of Dr. Donald Blake. But Blake has found a stick and he has clothed his divine status, the stick becomes his hammer, Mjolnir.'
     },

     {'name': 'Hulk',
     'team': 'Avengers',
     'age':1962,
     'species': 'Altered Human',
     'imageUrl':'img/hulk.png',
     'bgcolor':'#48824a',
     'bio':'When Bruce Banner saved the life of Rick Jones during the explosion of a bomb-test Gamma he was bombed by the rays of the weapon. Radiation have turned into a monster with green skin that soldiers called Hulk. The angrier Hulk becomes the stronger he gets. Hulk Smash!'},

      {'name': 'Quicksilver',
      'team': 'Avengers',
      'age':1964, 
      'species': 'Mutant',
       'imageUrl':'img/quicksilver.png', 
      'bgcolor':'#9dbace',
      'bio':'Quicksilver is a mutant with the ability to think and move at supersonic speed, grating him super agility, reflexes and to accomplish feats such as creating cyclones out of pure speed, running up walls and throughout bodies of water. His cardiovascular and respiratory systems are many times more efficient than those of a normal human being.'},
    
    {'name': 'Scarlet Witch',
      'team': 'Avengers',
      'age':1964, 
      'species': 'Mutant', 
      'imageUrl':'img/scarletwitch.png',
      'bgcolor':'#ff523b',
      'bio':'Scarlet Witch is a mutant, born with the ability to alter reality in unspecific ways. She is the twin sister of Quicksilver and the daughter of Magneto as well as the paternal half-sister of Polaris. She is also married to The Vision, a regular member of the Avengers.'},
    
    {'name': 'Black Widow',
      'team': 'S.H.I.E.L.D.', 
      'age':1964,
      'species': 'Human',
      'imageUrl':'img/blackwidow.png',
      'bgcolor':'#515151',
      'bio':'Natalia Romanova was exercised to become one of the most famous spies of the Soviet Union.Called the Black Widow, she was sent to the United States to spy on Stark Industries, but she met Hawkeye who convinced her to abandon Soviet leaders. Since she works for SHIELD and the Avengers, and has been a member of Champions in Los Angeles.'
     },

     {'name': 'Hawkeye',
     'team': 'S.H.I.E.L.D.',
     'age':1964,
     'species': 'Human',
     'imageUrl':'img/hawkeye.png',
     'bgcolor':'#351840',
    'bio':'At the age of fourteen, Clint Barton joined a circus. While a member of the circus, Hawkeye was trained by a Swordsman. Clints life, however, would forever be changed after he stumbled onto the Swordsman counting the money he had just robbed from the carnival.'},

      {'name': 'Ant-Man',
     'team': 'Avengers',
     'age':1962,
     'species': 'Human',
     'imageUrl':'img/antman.png',
     'bgcolor':'#C90032',
     'bio':'Biophysicist and Security Operations Center expert Dr. Henry (Hank) Pym decided to become a superhero after discovering a chemical substance (Pym Particles) that would allow the user to alter his size. Armed with a helmet that could control ants, Pym would shrink down to the size of an insect to become the mystery-solving Ant-Man.'},

      {'name': 'Nick Fury',
     'team': 'S.H.I.E.L.D.',
     'age':1963,
     'species': 'Human',
     'imageUrl':'img/nickfury.png',
     'bgcolor':'#000000',
      'bio':'Veteran of World War II, Nick Fury SHIELD integrates after the armistice and later became the director of the group. Its role leads several times to work closely with Captain America and the Avengers to face the organization Hydra.'},

      {'name': 'Cyclops',
     'team': 'X-Men',
     'age':1963,
     'species': 'Mutant',
     'imageUrl':'img/cyclops.png',
     'bgcolor':'#0062D1',
      'bio':'Cyclops is a mutant capable of generating concussive force red-colored beams from his eyes. He has fought for peace and equality between humans and mutants since joining the X-Men.'},

     {'name': 'Wolverine',
     'team': 'X-Men',
     'age':1974,
     'species': 'Mutant',
     'imageUrl':'img/wolverine.png',
     'bgcolor':'#E0B700',
     'bio':'Wolverine is a member of the X-Men, a team of superheroes who fight for mutant rights and to preserve the peace between mutants and normal humans. He can fully and rapidly recover from any physical injury or ailment. He possesses long retractable claws which protrude from the backs of his hands. His skeleton was surgically laced with a fictional metal, known as adamantium, which makes it virtually indestructible.'},

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
     'bgcolor':'#346191',
      'bio':'The bite of an irradiated spider granted high-school student Peter Parker incredible powers. First he used his powers to became famous. But when its acts lead to the Death of his Uncle Ben, Peter vowed to use those abilities to protect his fellow man. Driven by the words of his uncle: With great power comes great responsibility!'},

     {'name': 'Falcon',
     'team': 'Avengers',
     'age':1969,
     'species': 'Human',
     'imageUrl':'img/falcon.png',
     'bgcolor':'#D60000',
      'bio':'Sam Wilson, aka Falcon was a mundane criminal until he met the machiavellian Red Skull that confered him the ability to communicate telepathically with his own falcon, Red Wing. Red Skull ordered him to ally with Captain America but the plan failed. Indeed, heroic nature of Sam surfaced and he became a righter'},

       {'name': 'Human Torch',
     'team': 'Fantastic Four',
     'age':1961,
     'species': 'Altered Human',
     'imageUrl':'img/humantorch.png',
     'bgcolor':'#D64700',
     'bio':'When Johnny got hit by the cosmic radiation that gave the Fantastic Four their powers, Johnny gained the power of fire generation and flight. Johnny Storm is impervious to heat and can absorb flames and heat into his body. He can use this heat energy to shoot many forms of flames like fireballs, streams of fire, waves and walls.'},

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
     'bgcolor':'#52392C',
      'bio':'Groot is an extraterrestrial plant monster who initially came to Earth seeking humans to capture and study but was thwarted by Leslie Evans. Xemnu later cloned Groot to fight the Hulk but it was destroyed in the battle. He was revealed to have survived, but was captive to the Collector in Canada until Groot and the other captives were freed by the Mole Man.'},

      {'name': 'Rocket Raccoon',
     'team': 'Guardians',
     'age':1976,
     'species': 'Alien',
     'imageUrl':'img/rocketraccoon.png',
     'bgcolor':'#545454',
      'bio':'Brought to the Halfworld planet in the Keystone Quadrant star system, he was genetically and cybernetically enhanced so that he was given sentient intelligence. Rocket Raccoon is a genetically engineered raccoon turned freelance criminal. He became a member of the Guardians of the Galaxy, alongside his friend and partner Groot.'},

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

