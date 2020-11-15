/*
 * --------------------------------------------------
 * MNKR_MovePictureSwitchMZ Ver.0.0.1
 * Copyright (c) 2020 Munokura
 * This software is released under the MIT license.
 * http://opensource.org/licenses/mit-license.php
 * --------------------------------------------------
 */

/*:
 * @target MZ
 * @url https://raw.githubusercontent.com/munokura/MNKR-MZ-plugins/master/MNKR_MovePictureSwitchMZ.js
 * @plugindesc スイッチでピクチャの移動座標を絶対値と相対値とを切り替えられます。
 * @author munokura
 *
 * @help
 * 利用規約:
 *   MITライセンスです。
 *   https://ja.osdn.net/projects/opensource/wiki/licenses%2FMIT_license
 *   作者に無断で改変、再配布が可能で、
 *   利用形態（商用、18禁利用等）についても制限はありません。
 * 
 * 
 * @param switchPciture
 * @text スイッチ
 * @type switch
 * @default 0
 * @desc 指定スイッチON時はピクチャの移動座標が相対指定になります。スイッチが無指定の場合、常に相対指定になります。
 */

(() => {
  "use strict";

  const pluginName = document.currentScript.src.split("/").pop().replace(/\.js$/, "");
  const parameters = PluginManager.parameters(pluginName);
  const switchPciture = Number(parameters['switchPciture'] || 0);

  const _Game_Picture_move = Game_Picture.prototype.move;
  Game_Picture.prototype.move = function (
    origin, x, y, scaleX, scaleY, opacity, blendMode, duration, easingType
  ) {
    if ($gameSwitches.value(switchPciture) || switchPciture === 0) {
      x += this.x();
      y += this.y();
    }
    console.log(x);
    console.log(y);
    console.log(arguments);
    // _Game_Picture_move.apply(this, arguments);
    _Game_Picture_move.call(this, origin, x, y, scaleX, scaleY, opacity, blendMode, duration, easingType);
  }

})();