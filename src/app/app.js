/**
 * Defines and configures all modules.
 */
angular
    .module('uiux',
    [
        'ngResource',
        'ngSanitize',
        'ui.bootstrap',
        'ui.router',
        'com.jgefroh.WidgetModule',
        'uiux.NavigationModule',
        'uiux.RoutesModule',
        'uiux.DemoModule',
        'uiux.SplashModule'
    ]);
angular
    .module('uiux')
    .constant('applicationName', 'UI/UX')
    .constant('versionNumber', 'v0.0.1');