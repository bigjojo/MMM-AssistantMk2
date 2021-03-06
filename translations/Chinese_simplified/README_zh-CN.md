# MMM-AssistantMk2
![](https://raw.githubusercontent.com/eouia/MMM-AssistantMk2/master/resources/AMk2_Big.png)
`MMM-AssistantMk2` 是MagicMirror上的一个嵌入式谷歌助手插件

## NEW UPDATES
**3.1.2 (17/03/2020)**
 * **修复**: custom action启用时，无声音回应
 * **修复**: 修正YouTube搜多链接
 * **新增**: 添加 A2D 停止命令 (beta)

**3.1.1-2 (06/03/2020)**
 * **新增/调整**: `ui: "Fullscreen"`
   * `位置： "fullscreen_above"` 现在的ui类似 `Google Home`
 * **调整**: 用户界面优先级顺序 Assistant2Display -> AMk2
 * **新增**: 将本体的声音移到一类

**3.1.1-1 (05/03/2020)**
 * **修复**: 修正音频剪切响应 for mpg321 (test)
 * **新增**: 增加对 cvlc 的音频输出支持 (vlc using)

**3.1.1-0 (02/03/2020)**
 * **新增**: 为插件内容添加新函数 (socketExec, onSocketExec)
 * **修复**: 连续讲话bug - 在用户无回应时无限循环
 * **修复**: 在 TRANSCRIPTION_FAILS 时二次响应、重试
 * **修复**: 激活助手时无提示音
 * **修复**: 检测到关键词 "try to say" 时激活建议搜索的助手 (Fullscreen and Classic2 ui)
 * **新增**: 为了激活关键词的 ASSISTANT_WEB 服务器
 * **调整** : 搜索 KEYWORD/ TRYTOSAY 的翻译脚本以提升体验
 * **修复**: 修正屏幕分析日志

 ## [**预览视频**](https://youtu.be/e7Xg95mL8JE)

 ## 截图
 - Classic UI

 ![](https://raw.githubusercontent.com/eouia/MMM-AssistantMk2/master/resources/previewUI.jpg)

 - FullScreen UI

 ![](https://raw.githubusercontent.com/eouia/MMM-AssistantMk2/master/resources/previewFS.jpg)

 ## V3版本上升级了什么
 - 使用scratch重构全部内容
 - 更稳定
 - 提供安装器 (对于 Raspbian 或者其它的 Debian-based Linux)
 - 音频输出依赖项已弃用，使用标准的HTML5音频输出
 - 添加`plugin` 和 `responseHook`
 - 屏幕输出可控性更高
 - 支持个人定制化 UI
 - 提供pre-built 脚本
 - 更简单的 `custom action` 管理

 ## 安装 & 指引
[英文wiki](https://github.com/eouia/MMM-AssistantMk2/wiki)
[中文wiki](./wiki/Home.md)

对于中文wiki，目前翻译了基础的部分，你可以通过参考它们来搭建基础的语音服务，以后会翻译更多内容。

## 从2.x升级
不太简单。移除所有文件然后重新安装。
- 建议备份你的 `credentials.json` 以及其他配置文件。

## 从3.x升级

```sh
cd ~/MagicMirror/modules/MMM-AssistantMk2
npm run update
```

## 升级历史
懒得翻译了，嘿嘿嘿！

## 最后一次的测试环境
- MagicMirror : 2.10.0
- RPI 3B+ / raspbian 10 /nodeJS v10.17.0 / npm 6.13.2
- MacOS Catalina 10.15.2 / MacBookPro 2017 15" / nodeJS v11.12.0 / npm v6.9.0
- debian 10 / nodeJS v10.18.0 / npm v6.13.4




## 信息
- 作者 :
  - @eouia
  - @bugsounet
  - @Anonym-tsk
- 译者 ：
  - [@Vince 迷航者](https://www.vincehut.top)
- 证书 : MIT
  - **按Google助手SDK条款,您不得将本模块用于商业用途。**
