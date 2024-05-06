function skillsMember() {
  // Create a new member object
  const member = new Member();

  // Add skills to the member
  member.addSkill('JavaScript');
  member.addSkill('React');
  member.addSkill('Node.js');
  member.addSkill('Express.js');

  // Get the skills of the member
  const skills = member.getSkills();
  console.log(skills);
}