'use strict';

/*global chrome:false*/

browser.browserAction.onClicked.addListener(() => {
  browser.tabs.executeScript({
    file: '/content.js'
  });
});

browser.contextMenus.create({
  id: 'sass-translate',
  title: 'Check for sarcasm',
  contexts: ['selection']  
}, () => {});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'sass-translate') {
    const str = info.selectionText;

    browser.tabs.create({
            active: false,
            url: 'http:localhost:4567/sarc_query/${str}'
          });
  }
});
