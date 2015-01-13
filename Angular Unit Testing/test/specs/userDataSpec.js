/// <reference path="../lib/jasmine.js" />
/// <reference path="../lib/jasmine-html.js" />
/// <reference path="../../app/lib/jquery/jquery.js" />
/// <reference path="../../app/lib/angular/angular.js" />
/// <reference path="../../app/lib/angular/angular-resource.min.js" />
/// <reference path="../../app/lib/angular/angular-route.min.js" />
/// <reference path="../lib/angular-mocks.js" />
/// <reference path="../lib/sinon-1.7.3.js" />
/// <reference path="../../app/js/app.js" />
/// <reference path="../../app/js/services/userData.js" />

'use strict';

describe('userData', function () {
    var mockUserResource;

    beforeEach(module("eventsApp"));

    beforeEach(function () {
        mockUserResource = sinon.stub({ get: function () { } });

        module(function ($provide) {
            $provide.value('userResource', mockUserResource);
        });
    });

    describe('getUser', function() {
        it('should call getresource.get with the username', inject(function (userData) {
            userData.getUser('bob');

            expect(mockUserResource.get.args[0][0]).toEqual({ userName: 'bob' });
        }));
    });
});
