(function () {
    'use strict';

    angular
        .module('app.profile')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.profile',
                config: {
                    url: 'profile',
                    views: {
                        'content@app': {
                            templateUrl: 'app/sample-pages/profile/profile.html'
                        }
                    },
                    menuGroup: 'sample-pages',
                    title: 'Profile'
                }
            },
            {
                state: 'app.profile.about',
                config: {
                    url: '/about',
                    views: {
                        'profile-tab-content@app.profile': {
                            templateUrl: 'app/sample-pages/profile/profile-about.html'
                        }
                    },
                    menuGroup: 'sample-pages',
                    title: 'Profile'
                }
            },
            {
                state: 'app.profile.connections',
                config: {
                    url: '/connections',
                    views: {
                        'profile-tab-content@app.profile': {
                            templateUrl: 'app/sample-pages/profile/profile-connections.html'
                        }
                    },
                    menuGroup: 'sample-pages',
                    title: 'Profile'
                }
            },
            {
                state: 'app.profile.photos',
                config: {
                    url: '/photos',
                    views: {
                        'profile-tab-content@app.profile': {
                            templateUrl: 'app/sample-pages/profile/profile-photos.html'
                        }
                    },
                    menuGroup: 'sample-pages',
                    title: 'Profile'
                }
            },
            {
                state: 'app.profile.timeline',
                config: {
                    url: '/timeline',
                    views: {
                        'profile-tab-content@app.profile': {
                            templateUrl: 'app/sample-pages/profile/profile-timeline.html'
                        }
                    },
                    menuGroup: 'sample-pages',
                    title: 'Profile'
                }
            }
        ];
    }
})();
