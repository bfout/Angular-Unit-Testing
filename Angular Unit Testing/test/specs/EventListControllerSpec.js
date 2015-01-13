/// <reference path="../lib/jasmine.js" />
/// <reference path="../lib/jasmine-html.js" />
/// <reference path="../../app/lib/jquery/jquery.js" />
/// <reference path="../../app/lib/angular/angular.js" />
/// <reference path="../../app/lib/angular/angular-resource.min.js" />
/// <reference path="../../app/lib/angular/angular-route.min.js" />
/// <reference path="../lib/angular-mocks.js" />
/// <reference path="../lib/sinon-1.7.3.js" />
/// <reference path="../../app/js/app.js" />
/// <reference path="../../app/js/controllers/EventListController.js" />

'use strict';

describe('EventListController', function() {
    var $controllerConstructor;
    var mockEventData;
    var scope;

    beforeEach(module("eventsApp"));

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();

        mockEventData = sinon.stub({ getAllEvents: function() {} });

        $controllerConstructor = $controller;
    }));

    it('should set the scope events to the result of eventData.getAllEvents', function() {
        var mockEvents = {};
        
        mockEventData.getAllEvents.returns(mockEvents);

        var ctrl = $controllerConstructor("EventListController", { $scope: scope, $location: {}, eventData: mockEventData });

        expect(scope.events).toBe(mockEvents);
    });

    it('should navigate to the correct url when navigateToDetails is called', function () {
        var event = { id: 23 };
        var mockLocation = sinon.stub({ url: function () { } });

        var ctrl = $controllerConstructor("EventListController", { $scope: scope, $location: mockLocation, eventData: mockEventData });

        scope.navigateToDetails(event);

        expect(mockLocation.url.calledWith('/event/23')).toBe(true);
    });
});
