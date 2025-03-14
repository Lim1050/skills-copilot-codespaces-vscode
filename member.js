function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'app/members/skills-member.html',
    controller: 'SkillsMemberCtrl',
    controllerAs: 'skillsMemberCtrl',
    bindToController: true,
    scope: {
      member: '='
    }
  }
}