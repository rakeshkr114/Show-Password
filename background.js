//Written By: @Rakqesh
//Created on: June 29th, 2018

chrome.browserAction.onClicked.addListener(function(tab) {

	// execute code in current page
	chrome.tabs.executeScript({
		 file: "changeType.js"
	});	
});