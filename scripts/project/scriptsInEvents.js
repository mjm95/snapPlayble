


const scriptsInEvents = {

	async EventSheet1_Event4_Act1(runtime, localVars)
	{
		window.PLAYABLE.click();
	},

	async EventSheet1_Event5_Act1(runtime, localVars)
	{
		window.PLAYABLE.click();
	},

	async EventSheet1_Event6_Act1(runtime, localVars)
	{
		window.PLAYABLE.close();
	},

	async Gbokseventsheet_Event6_Act1(runtime, localVars)
	{
		runtime.globalVars.ajaxHeader=window.parent.csrfToken;
		window.parent.gboks.emit('ready');
		
		window.parent.gboks.emitter.addListener('fake-start', (e) => {
			runtime.globalVars.fakesStart=true;
		});
		window.parent.gboks.emitter.addListener('real-start', (e) => {
			runtime.globalVars.realStart=true;
		});
	},

	async Gbokseventsheet_Event9_Act1(runtime, localVars)
	{
		// fake rotate done event bullshit
		
		window.parent.gboks.emit('fake-spin-done');
		
	},

	async Gbokseventsheet_Event10_Act1(runtime, localVars)
	{
		window.parent.gboks.emit('real-spin-done',runtime.globalVars.giftIndex);
		
		
		
	},

	async Gbokseventsheet_Event11_Act2(runtime, localVars)
	{
		runtime.globalVars.giftIndex=JSON.parse(runtime.globalVars.ajaxRes).gift;
	},

	async Tapsell_Event1_Act1(runtime, localVars)
	{
		console.log("before isReady called");
		window.PLAYABLE.isReady();
		console.log("after isReady called");
		
		
		
	},

	async Tapsell_Event1_Act2(runtime, localVars)
	{
		
		(function() {
		    window.TAPSELL = {
		      start: () => {
		        runtime.callFunction("Tapsell_start");
		      },
		      pause: () => {
		        runtime.callFunction("Tapsell_Pause");
		
		      },
		      resume: () => {
		        runtime.callFunction("Tapsell_resume");
		
		      }
		    };
		  })();
		  
		
	},

	async Tapsell_Event2_Act2(runtime, localVars)
	{
		console.log("tapsell pause");
	},

	async Tapsell_Event3_Act2(runtime, localVars)
	{
		console.log("tapsell resume");
	},

	async Tapsell_Event4_Act3(runtime, localVars)
	{
		console.log("tapsell start");
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

