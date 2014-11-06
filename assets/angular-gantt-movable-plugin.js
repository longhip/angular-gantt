/*
Project: angular-gantt for AngularJS
Author: Marco Schweighauser
Contributors: Rémi Alvergnat
License: MIT.
Github: https://github.com/angular-gantt/angular-gantt
*/
'use strict';

angular.module('gantt.movable').factory('ganttMovableOptions', [function() {
    return {
        initialize: function(options) {

            options.allowMoving = options.allowMoving !== undefined ? !!options.allowMoving : true;
            options.allowResizing = options.allowResizing !== undefined ? !!options.allowResizing : true;
            options.allowRowSwitching = options.allowRowSwitching !== undefined ? !!options.allowRowSwitching : true;

            return options;
        }
    };
}]);

//# sourceMappingURL=angular-gantt-movable-plugin.js.map