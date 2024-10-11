const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Touch,
		C3.Plugins.Audio,
		C3.Plugins.AJAX,
		C3.Plugins.Text,
		C3.Behaviors.Tween,
		C3.Plugins.Particles,
		C3.Plugins.Dictionary,
		C3.Behaviors.Sin,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Behaviors.Tween.Acts.TweenTwoProperties,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.ScriptsInEvents.EventSheet1_Event4_Act1,
		C3.ScriptsInEvents.EventSheet1_Event5_Act1,
		C3.ScriptsInEvents.EventSheet1_Event6_Act1,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Acts.WaitForPreviousActions,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Cnds.PickByComparison,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.Sprite.Exps.AnimationFrame,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.Sprite.Exps.Height,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Behaviors.Tween.Cnds.OnTweensFinished,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.AJAX.Acts.SetHeader,
		C3.Plugins.AJAX.Acts.Post,
		C3.ScriptsInEvents.Gbokseventsheet_Event6_Act1,
		C3.Plugins.System.Acts.Wait,
		C3.ScriptsInEvents.Gbokseventsheet_Event9_Act1,
		C3.ScriptsInEvents.Gbokseventsheet_Event10_Act1,
		C3.Plugins.AJAX.Exps.LastData,
		C3.ScriptsInEvents.Gbokseventsheet_Event11_Act2,
		C3.ScriptsInEvents.Tapsell_Event1_Act1,
		C3.ScriptsInEvents.Tapsell_Event1_Act2,
		C3.Plugins.Audio.Acts.SetSilent,
		C3.ScriptsInEvents.Tapsell_Event2_Act2,
		C3.ScriptsInEvents.Tapsell_Event3_Act2,
		C3.Plugins.System.Acts.GoToLayout,
		C3.ScriptsInEvents.Tapsell_Event4_Act3
	];
};
self.C3_JsPropNameTable = [
	{bg: 0},
	{Touch: 0},
	{Audio: 0},
	{AJAX: 0},
	{Text: 0},
	{Tween: 0},
	{PageWinners: 0},
	{FireworkParticles2: 0},
	{FireworkParticles: 0},
	{Text2: 0},
	{close: 0},
	{Dictionary: 0},
	{wrongAnswer: 0},
	{trueAnswer: 0},
	{Sine: 0},
	{CTAbutton: 0},
	{up: 0},
	{down: 0},
	{index: 0},
	{base: 0},
	{hand: 0},
	{step_y: 0},
	{cnt: 0},
	{reqSent: 0},
	{canPlay: 0},
	{state: 0},
	{waitForPopup: 0},
	{timer: 0},
	{answerIndex: 0},
	{inp: 0},
	{DevMode: 0},
	{fakesStart: 0},
	{realStart: 0},
	{ajaxHeader: 0},
	{ajaxRes: 0},
	{giftIndex: 0},
	{giftFetchedOnce: 0},
	{aj: 0}
];

self.InstanceType = {
	bg: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	Audio: class extends self.IInstance {},
	AJAX: class extends self.IInstance {},
	Text: class extends self.ITextInstance {},
	PageWinners: class extends self.ISpriteInstance {},
	FireworkParticles2: class extends self.IParticlesInstance {},
	FireworkParticles: class extends self.IParticlesInstance {},
	Text2: class extends self.ITextInstance {},
	close: class extends self.ISpriteInstance {},
	Dictionary: class extends self.IDictionaryInstance {},
	wrongAnswer: class extends self.ISpriteInstance {},
	trueAnswer: class extends self.ISpriteInstance {},
	CTAbutton: class extends self.ISpriteInstance {},
	up: class extends self.ISpriteInstance {},
	down: class extends self.ISpriteInstance {},
	base: class extends self.ISpriteInstance {},
	hand: class extends self.ISpriteInstance {}
}