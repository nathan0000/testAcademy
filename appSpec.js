describe('test academy directive rendering', function() {

	beforeEach(module('testAcademyApp'));

	var compile, mockBackend, rootScope;

	beforeEach(inject(function($compile, $httpBackend, $rootScope) {
		// body...
		compile = $compile;
		mockBackend = $httpBackend;
		rootScope = $rootScope;
	}));

	it('should render HTML based on scope correctly', function() {

		var scope = rootScope.$new();
		scope.question = {
			description: 'What is the area of the following shadow?',
			answer: 'A'
			explanation: 'test for explanation'
		};
		scope.title = 'Quiz App';

		mockBackend.expectGET('quiz.html').respond(
			'<div ng-bind="question.description"></div>' +
			'<div ng-bind="question.choiceA"></div>' +
			'<div ng-bind="question.choiceB"></div>' +
			'<div ng-bind="question.choiceC"></div>' +
			'<div ng-bind="question.choiceD"></div>' +
			'<div ng-bind="question.choiceE"></div>' +
			'<div ng-bind="question.answer"></div>');

		var element  = compile('<div question-widget' + 
			' question-data="question"' +
			' question-title="This is {{title}}"' +
			'</div>'
			)(scope);

		scope.$digest();
		mockBackend.flush();

		var compiledElementScope = element.isolateScope();

		expect(compiledElementScope.questionData).toEqual(scope.question);
		expect(compiledElementScope.getAnswer(compiledElementScope.questionData)).toEqual('A');


	});
});