/*
Blockly.Blocks['kidrobot_motor'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.IKB_1.SET_MOTOR)
			.appendField(new Blockly.FieldDropdown([["LEFT","1"], ["RIGHT","0"]]), "ch")
			.appendField(Blockly.Msg.IKB_1.DIRECTION)
			.appendField(new Blockly.FieldDropdown([[Blockly.Msg.IKB_1.FORWARD,"1"], [Blockly.Msg.IKB_1.BACKWARD,"2"]]), "dir");
		this.appendValueInput("speed")
			.setCheck("Number")
			.appendField(Blockly.Msg.IKB_1.SPEED);
		this.appendDummyInput()
			.appendField("%");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://store.kidbright.info/plugin/7/iKB-1");
	}
};
*/

Blockly.Blocks['kidrobot_motor_forward'] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.IKB_1_MOTOR_FORWARD_MESSAGE,
			"args0": [{
				"type": "field_image",
				"src": "https://a.lnwpic.com/4p6j61.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "input_value",
				"name": "speed",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": Blockly.Msg.IKB_1_MOTOR_FORWARD_TOOLTIP,
			"helpUrl": "https://store.kidbright.info/plugin/7/iKB-1"
		});
	}
};

Blockly.Blocks['kidrobot_motor_backward'] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.IKB_1_MOTOR_BACKWARD_MESSAGE,
			"args0": [{
				"type": "field_image",
				"src": "https://a.lnwpic.com/4p6j61.png",
				"width": 20,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "input_value",
				"name": "speed",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": Blockly.Msg.IKB_1_MOTOR_BACKWARD_TOOLTIP,
			"helpUrl": "https://store.kidbright.info/plugin/7/iKB-1"
		});
	}
};

Blockly.Blocks['kidrobot_motor_forward2'] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.IKB_1_MOTOR_FORWARD_2_MESSAGE,
			"args0": [{
				"type": "field_image",
				"src": "https://a.lnwpic.com/4p6j61.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "input_value",
				"name": "speed1",
				"check": "Number"
			}, {
				"type": "input_value",
				"name": "speed2",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": Blockly.Msg.IKB_1_MOTOR_FORWARD_2_TOOLTIP,
			"helpUrl": "https://store.kidbright.info/plugin/7/iKB-1"
		});
	}
};

Blockly.Blocks['kidrobot_motor_backward2'] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.IKB_1_MOTOR_BACKWARD_2_MESSAGE,
			"args0": [{
				"type": "field_image",
				"src": "https://a.lnwpic.com/4p6j61.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "input_value",
				"name": "speed1",
				"check": "Number"
			}, {
				"type": "input_value",
				"name": "speed2",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": Blockly.Msg.IKB_1_MOTOR_BACKWARD_2_TOOLTIP,
			"helpUrl": "https://store.kidbright.info/plugin/7/iKB-1"
		});
	}
};

Blockly.Blocks['kidrobot_motor_turn_left'] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.IKB_1_MOTOR_TRUE_LEFT_MESSAGE,
			"args0": [{
				"type": "field_image",
				"src": "https://a.lnwpic.com/4p6j61.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "input_value",
				"name": "speed",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": Blockly.Msg.IKB_1_MOTOR_TRUE_LEFT_TOOLTIP,
			"helpUrl": "https://store.kidbright.info/plugin/7/iKB-1"
		});
	}
};

Blockly.Blocks['kidrobot_motor_turn_right'] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.IKB_1_MOTOR_TRUE_RIGHT_MESSAGE,
			"args0": [{
				"type": "field_image",
				"src": "https://a.lnwpic.com/4p6j61.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "input_value",
				"name": "speed",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": Blockly.Msg.IKB_1_MOTOR_TRUE_RIGHT_TOOLTIP,
			"helpUrl": "https://store.kidbright.info/plugin/7/iKB-1"
		});
	}
};

Blockly.Blocks['kidrobot_motor_spin_left'] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.IKB_1_MOTOR_SPIN_LEFT_MESSAGE,
			"args0": [{
				"type": "field_image",
				"src": "https://a.lnwpic.com/4p6j61.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "input_value",
				"name": "speed",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": Blockly.Msg.IKB_1_MOTOR_SPIN_LEFT_TOOLTIP,
			"helpUrl": "https://store.kidbright.info/plugin/7/iKB-1"
		});
	}
};

Blockly.Blocks['kidrobot_motor_spin_right'] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.IKB_1_MOTOR_SPEN_RIGHT_MESSAGE,
			"args0": [{
				"type": "field_image",
				"src": "https://a.lnwpic.com/4p6j61.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "input_value",
				"name": "speed",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": Blockly.Msg.IKB_1_MOTOR_SPEN_RIGHT_TOOLTIP,
			"helpUrl": "https://store.kidbright.info/plugin/7/iKB-1"
		});
	}
};

Blockly.Blocks['kidrobot_motor_stop'] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.IKB_1_MOTOR_STOP_MESSAGE,
			"args0": [{
				"type": "field_image",
				"src": "https://a.lnwpic.com/4p6j61.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": Blockly.Msg.IKB_1_MOTOR_STOP_TOOLTIP,
			"helpUrl": "https://store.kidbright.info/plugin/7/iKB-1"
		});
	}
};
