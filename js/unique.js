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
      if (!query) { return input; }
      return input.filter(function (el) {
        return el[key] === query;
      });
    }
  });