angular.module('testAcademyApp', [])
  .controller('MainCtrl', [function() {
  	var self = this;
  	self.questions = [
  	  {subject: 'Math', category: 'Geometry', difficulty: '73', description: 'What is the area of the following shadow?',questionImg: 'img-href', choiceA: '15', choiceAImg: 'imgA-href', choiceB: '16', choiceBImg: 'imgB-href', choiceC: '17', choiceCimg: 'imgC-href', choiceD: '18', choiceDImg: 'imgD-href', choiceE: '19', choiceEImg: 'imgE-href', answer: 'A', answerImg: 'imgAnswer-href', explanation: 'test for explanation', explanationImg: 'imgExpalin-href'},
  	  {subject: 'Math', category: 'Geometry', difficulty: '53', description: 'What is the area of the following shadow?',questionImg: 'img-href', choiceA: '15', choiceAImg: 'imgA-href', choiceB: '16', choiceBImg: 'imgB-href', choiceC: '17', choiceCimg: 'imgC-href', choiceD: '18', choiceDImg: 'imgD-href', choiceE: '19', choiceEImg: 'imgE-href', answer: 'A', answerImg: 'imgAnswer-href', explanation: 'test for explanation', explanationImg: 'imgExpalin-href'},
  	  {subject: 'Math', category: 'Geometry', difficulty: '33', description: 'What is the area of the following shadow?',questionImg: 'img-href', choiceA: '15', choiceAImg: 'imgA-href', choiceB: '16', choiceBImg: 'imgB-href', choiceC: '17', choiceCimg: 'imgC-href', choiceD: '18', choiceDImg: 'imgD-href', choiceE: '19', choiceEImg: 'imgE-href', answer: 'A', answerImg: 'imgAnswer-href', explanation: 'test for explanation', explanationImg: 'imgExpalin-href'},
  	  {subject: 'Math', category: 'Numeracy', difficulty: '83', description: 'What is the area of the following shadow?',questionImg: 'img-href', choiceA: '15', choiceAImg: 'imgA-href', choiceB: '16', choiceBImg: 'imgB-href', choiceC: '17', choiceCimg: 'imgC-href', choiceD: '18', choiceDImg: 'imgD-href', choiceE: '19', choiceEImg: 'imgE-href', answer: 'A', answerImg: 'imgAnswer-href', explanation: 'test for explanation', explanationImg: 'imgExpalin-href'},
  	  {subject: 'Math', category: 'Algeblar', difficulty: '43', description: 'What is the area of the following shadow?',questionImg: 'img-href', choiceA: '15', choiceAImg: 'imgA-href', choiceB: '16', choiceBImg: 'imgB-href', choiceC: '17', choiceCimg: 'imgC-href', choiceD: '18', choiceDImg: 'imgD-href', choiceE: '19', choiceEImg: 'imgE-href', answer: 'A', answerImg: 'imgAnswer-href', explanation: 'test for explanation', explanationImg: 'imgExpalin-href'}
  	  ];

  	  self.quizTemplate = 'quiz.html';

  	  self.getAnswer = function(question) {
  	  	return question.explanation;
  	  };
  }]);