<?php
/**
 * DokuWiki Plugin cookiebanner (Action Component)
 *
 * @license GPL 2 http://www.gnu.org/licenses/gpl-2.0.html
 * @author  Andreas Gohr <andi@splitbrain.org>
 */

class action_plugin_cookiebanner extends DokuWiki_Action_Plugin
{

    /** @inheritDoc */
    public function register(Doku_Event_Handler $controller)
    {
        $controller->register_hook('DOKUWIKI_STARTED', 'AFTER', $this, 'handleStart');

    }

    /**
     * Handle the start event and fill in some config to JSINFO
     */
    public function handleStart(Doku_Event $event, $param)
    {
        global $JSINFO;
        $JSINFO['plugins']['cookiebanner']['script'] = $this->getConf('script');
        $JSINFO['plugins']['cookiebanner']['text'] = $this->locale_xhtml('intro');
    }

}

