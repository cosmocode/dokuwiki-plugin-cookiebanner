jQuery(function () {

    /**
     * Execute the tracking script
     */
    const addTracking = function () {
        const script = jQuery('<script>');
        script.text(JSINFO.plugins.cookiebanner.script);
        script.appendTo('head');
    };

    /**
     * Handle nay clicks
     */
    const nay = function () {
        DokuCookie.setValue('pcb', 'nay');
        jQuery('.plugin-cookiebanner').remove();
    };

    /**
     * Handle yes clicks
     */
    const yay = function () {
        DokuCookie.setValue('pcb', 'yay');
        jQuery('.plugin-cookiebanner').remove();
        addTracking();
    };

    /**
     * Show the banner
     */
    const showBanner = function () {
        const $div = jQuery('<div>');
        $div.addClass('plugin-cookiebanner');
        $div.html(JSINFO.plugins.cookiebanner.text);

        const $yay = jQuery('<button>');
        $yay.addClass('yay');
        $yay.text(LANG.plugins.cookiebanner.yay);
        $yay.on('click', yay);

        const $nay = jQuery('<button>');
        $nay.addClass('nay');
        $nay.text(LANG.plugins.cookiebanner.nay);
        $nay.on('click', nay);

        $div.append('<hr>');
        $div.append($yay);
        $div.append($nay);

        $div.appendTo('.dokuwiki');
    }

    // main: check cookie state and decide what to do
    const state = DokuCookie.getValue('pcb', 'nope');
    if (state === 'nope') {
        showBanner();
    } else if (state === 'yay') {
        addTracking();
    }
});
