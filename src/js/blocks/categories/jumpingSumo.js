import Blockly from "scratch-blocks";

Blockly.Blocks['JumpingSumoMoveForwardBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": "%{BKY_SUMO_MOVEFORWARD}",
      "args0": [
        {
          "type": "field_number",
          "name": "STEPS"
        },
        {
          "type": "field_number",
          "name": "POWER"
        }
      ],
      "category": "jumpingSumo",
      "extensions": ["colours_drone", "shape_statement"]
    });
  }
};
  
Blockly.Blocks['JumpingSumoMoveBackwardBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": "%{BKY_SUMO_MOVEBACKWARD}",
      "args0": [
        {
          "type": "field_number",
          "name": "STEPS"
        },
        {
          "type": "field_number",
          "name": "POWER"
        }
      ],
      "category": "jumpingSumo",
      "extensions": ["colours_drone", "shape_statement"]
    });
  }
};
  
Blockly.Blocks['JumpingSumoAnimationsBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": "%{BKY_SUMO_ANIMATION}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "DROPDOWN",
          "options": [
            ["Spin", "Tab"]
          ]
        }
      ],
      "category": "jumpingSumo",
      "extensions": ["colours_drone", "shape_statement"]
    });
  }
};
  
  
Blockly.Blocks['JumpingSumoSoundBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": "%{BKY_SUMO_SOUND}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "DROPDOWN",
          "options": [
            ["Normal", "Robot"]
          ]
        },
        {
          "type": "field_number",
          "name": "VARIABLE",
          "text": "50"
        }
      ],
      "category": "jumpingSumo",
      "extensions": ["colours_drone", "shape_statement"]
    });
  }
};
  
Blockly.Blocks['JumpingSumoNoSoundBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": "%{BKY_SUMO_NOSOUND}",
      "category": "jumpingSumo",
      "extensions": ["colours_drone", "shape_statement"]
    });
  }
};
  
Blockly.Blocks['JumpingSumoJumpLongBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": "%{BKY_SUMO_JUMPLONG}",
      "category": "jumpingSumo",
      "extensions": ["colours_drone", "shape_statement"]
    });
  }
};
  
  
Blockly.Blocks['JumpingSumoJumpHighBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": "%{BKY_SUMO_JUMPHIGH}",
      "category": "jumpingSumo",
      "extensions": ["colours_drone", "shape_statement"]
    });
  }
};
  
Blockly.Blocks['JumpingSumoRotateLeftBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": "%{BKY_SUMO_ROTATELEFT}",
      "args0": [
        {
          "type": "field_number",
          "name": "ANGLE",
          "value": 90
        }
      ],
      "category": "jumpingSumo",
      "extensions": ["colours_drone", "shape_statement"]
    });
  }
};
  
Blockly.Blocks['JumpingSumoRotateRightBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": "%{BKY_SUMO_ROTATERIGHT}",
      "args0": [
        {
          "type": "field_number",
          "name": "ANGLE",
          "value": 90
        }
      ],
      "category": "jumpingSumo",
      "extensions": ["colours_drone", "shape_statement"]
    });
  }
};
  
Blockly.Blocks['JumpingSumoTurnBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": "%{BKY_SUMO_TURN}",
      "category": "jumpingSumo",
      "extensions": ["colours_drone", "shape_statement"]
    });
  }
};
  
Blockly.Blocks['JumpingSumoTakingPictureBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": "%{BKY_SUMO_TAKINGPICTURE}",
      "category": "jumpingSumo",
      "extensions": ["colours_drone", "shape_statement"]
    });
  }
};