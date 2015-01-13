/// <reference path="../lib/jasmine.js" />
/// <reference path="../lib/jasmine-html.js" />
/// <reference path="../../app/lib/jquery/jquery.js" />
/// <reference path="../../app/lib/angular/angular.js" />
/// <reference path="../../app/lib/angular/angular-resource.min.js" />
/// <reference path="../../app/lib/angular/angular-route.min.js" />
/// <reference path="../lib/angular-mocks.js" />
/// <reference path="../lib/sinon-1.7.3.js" />
/// <reference path="../../app/js/app.js" />
/// <reference path="../../app/js/services/calendarHelper.js" />

'use strict';

describe('calendarHelper', function () {

    beforeEach(module("eventsApp"));

    it('should return January when given a zero', inject(function (calendarHelper) {
        expect(calendarHelper.getMonthName(0)).toBe('January');
    }));
});
