/* jshint -W117, -W030 */
describe('list-view routes', function () {
    describe('state', function () {
        var controller;
        var view = 'app/sample-pages/list-view/list-view.html';

        beforeEach(function() {
            module('app.list-view', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
        });

        //        it('should map state admin to url /admin ', function() {
        //            expect($state.href('admin', {})).to.equal('/admin');
        //        });

        //it('should map /admin route to admin View template', function () {
        //    expect($state.get('app.admin').templateUrl).to.equal(view);
        //});

        //it('of admin should work with $state.go', function () {
        //    $state.go('app.admin');
        //    $rootScope.$apply();
        //    expect($state.is('app.admin'));
        //});
    });
});
