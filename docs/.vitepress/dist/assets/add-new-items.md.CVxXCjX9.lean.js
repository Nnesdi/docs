import{_ as a,c as s,a0 as o,o as r}from"./chunks/framework.D84hx5uF.js";const d="/assets/DT-Struct-Overview.6Hiwslp7.png",e="/assets/ST-Meshes.4nR-aGDe.png",l="/assets/DT-Modules.CsICD6UY.png",n="/assets/DT-AddModule.2eL0B_8z.png",i="/assets/DT-FloorPatterns.C0PWfVV5.png",h="/assets/DT-AddPattern.OYk-8U_R.png",y=JSON.parse('{"title":"Adding new content","description":"","frontmatter":{},"headers":[],"relativePath":"add-new-items.md","filePath":"add-new-items.md"}'),c={name:"add-new-items.md"};function m(p,t,u,b,f,g){return r(),s("div",null,t[0]||(t[0]=[o('<h1 id="adding-new-content" tabindex="-1">Adding new content <a class="header-anchor" href="#adding-new-content" aria-label="Permalink to &quot;Adding new content&quot;">​</a></h1><h2 id="data-tables" tabindex="-1">Data Tables <a class="header-anchor" href="#data-tables" aria-label="Permalink to &quot;Data Tables&quot;">​</a></h2><p>Data Tables are used to add assets to the BuildingGen tool, and configure the floor patters that are then used to construct the buildings.</p><p><img src="'+d+'" alt=""></p><p>The Structure of the Data Tables is defined by the ST_Modules and ST_Floor Structure.</p><table tabindex="0"><thead><tr><th>ST_Modules</th><th style="text-align:left;">ST_Floor</th></tr></thead><tbody><tr><td><img src="'+e+'" alt=""></td><td style="text-align:left;"><img src="'+e+'" alt=""></td></tr></tbody></table><h2 id="modules" tabindex="-1">Modules <a class="header-anchor" href="#modules" aria-label="Permalink to &quot;Modules&quot;">​</a></h2><p>Modules hold information about the Modules/Assets used by the tool. You can use the DT_Modules Data Table to add as many Modules as you like. <img src="'+l+'" alt=""></p><p>To add a new Module, simply add an entry to the Modules Data Table.</p><p><img src="'+n+'" alt=""></p><table tabindex="0"><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td>Model</td><td>Add an Asset from the Content Drawer</td></tr><tr><td>Name</td><td>The name of the Module that will be used in the pattern Data Table. <br>I recommend using an abbrevation like <em>D</em> for a door asset.</td></tr><tr><td>Size</td><td>The <strong>width</strong> of the asset.<br><em>Very important to try and set this as exactly as possible, as this will be used for placing the walls side by side. The <strong>height</strong> will be set in the Floor Data Table.</em></td></tr></tbody></table><h2 id="floors" tabindex="-1">Floors <a class="header-anchor" href="#floors" aria-label="Permalink to &quot;Floors&quot;">​</a></h2><p>Floors, as the name implies, are used to describe the appearance of a building&#39;s walls. They function by utilizing a simple &#39;grammar&#39; system to determine the placement of modules specified in the Modules Data Table.</p><div class="info custom-block github-alert"><p class="custom-block-title">INFO</p><p>More details on how the grammar works <a href="./how-it-works.html">here</a>.</p></div><p><img src="'+i+'" alt=""></p><p>Adding a new floor is basically the same as adding a new Module. Just create a new row and fill out the fields.</p><p><img src="'+h+'" alt=""></p><table tabindex="0"><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td>FloorName</td><td>Choose a name for the floor (e.g. GroundFloor, FirstFloor, onlyWindows, noDoors etc.).</td></tr><tr><td>Pattern</td><td>The pattern/&#39;grammar&#39; that is used to create the floor.</td></tr><tr><td>CornerPiece</td><td>Use this if you want a specific Asset to <strong>always</strong> appear in the corners. <em>Can be left empty.</em></td></tr><tr><td>Height</td><td>Meant is the height of the Modules used. (Normally the Y or Z value of the Asset). <em><strong>Also very important to get this as right as possible.</strong></em></td></tr></tbody></table><div class="info custom-block github-alert"><p class="custom-block-title">INFO</p><p>Tips on how to prepare your assets for the best possible outcome can be found <a href="./asset-prepare.html">here</a>.</p></div><div class="info custom-block github-alert"><p class="custom-block-title">INFO</p><p>It is not tested on how to system behaves when trying to use different sized Modules, so it is recommended for now to always have the same size of Modules. More testing will follow.</p></div>',20)]))}const T=a(c,[["render",m]]);export{y as __pageData,T as default};