import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js'
import * as Main from 'resource:///org/gnome/shell/ui/main.js'

export default class FusionExtension extends Extension {
	enable() {
		this._showing = Main.overview.connect('showing', () => Main.panel.show());
		this._hiding = Main.overview.connect('hiding', () => Main.panel.hide());
		if (!Main.overview.visible) Main.panel.hide();

		//this._overview = Main.layoutManager.connect('startup-complete', () => Main.overview.hide());
		if (Main.overview.visible) Main.overview.hide();
	}

	
	disable() {
		if (this._showing) {
			Main.overview.disconnect(this._showing);
			this._showing = 0;
		}
		if (this._hiding) {
			Main.overview.disconnect(this._hiding);
			this._hiding = 0;
		}
		Main.panel.show();

		//if (this._overview){
			//Main.layoutManager.disconnect(this._overview);
			//this._overview = 0;
		//}
	}
}
