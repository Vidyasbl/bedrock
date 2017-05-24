/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
    'use strict';

    var cop = new Mozilla.TrafficCop({
        id: 'experiment_firefox_new_batm_anim',
        variations: {
            'xv=batma': 33,         // animated machine
            'xv=batmb': 33,         // non-animated machine
            'xv=batmprivate': 33    // basic page, no machine
        }
    });

    cop.init();
})(window.Mozilla);
