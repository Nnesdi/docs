import{_ as e,c as a,a0 as r,o}from"./chunks/framework.D84hx5uF.js";const l="/assets/HDA-CreatePreset-Window.RQ33tam5.png",s="/assets/HDA-CreatePreset-Params.Cp1apfSk.png",d="/assets/HDA-CreatePreset-NamingExample.CqNUlcJe.png",p=JSON.parse('{"title":"Overview Parameters","description":"","frontmatter":{},"headers":[],"relativePath":"hda-parameters.md","filePath":"hda-parameters.md"}'),i={name:"hda-parameters.md"};function n(h,t,f,c,u,b){return o(),a("div",null,t[0]||(t[0]=[r('<h1 id="overview-parameters" tabindex="-1">Overview Parameters <a class="header-anchor" href="#overview-parameters" aria-label="Permalink to &quot;Overview Parameters&quot;">​</a></h1><blockquote><p>On this page you can find all the available inputs for BuildingGen and what they do.</p></blockquote><h2 id="houdini-engine" tabindex="-1">Houdini Engine <a class="header-anchor" href="#houdini-engine" aria-label="Permalink to &quot;Houdini Engine&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Parameter</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td>Recook</td><td style="text-align:left;">When you recook an asset, the HDA processes and updates whether you made changes or not in the parameters. The term cooking is the same concept as in Houdini. The outputs of the HDA are recalculated when the cook is triggered. To see changes to your inputs and parameters within Unreal, you have to recook the asset.</td></tr><tr><td>Rebuild</td><td style="text-align:left;">When you rebuild, the asset gets recooked and also reimports the HDA. This is useful when you have made changes in Houdini to your HDA and you want the new inputs or parameters to appear.</td></tr><tr><td>Bake assets</td><td style="text-align:left;">When you bake an asset, this creates an Unreal asset or actor from your HDA. The original HDA remains unchanged but the new Unreal asset or actor is no longer connected to the HDA and all of its parameters.<br>This new Unreal asset or actor no longer requires the Houdini Engine for Unreal to function.</td></tr></tbody></table><h2 id="presets" tabindex="-1">Presets <a class="header-anchor" href="#presets" aria-label="Permalink to &quot;Presets&quot;">​</a></h2><p>You can use the gear icon in the HDA Details Panel to create some presents. A preset saves the current state of the HDA, and allowes you to use that exact state on other boxes. <img src="'+l+'" alt=""><img src="'+s+'" alt=""> Naming example <img src="'+d+'" alt=""></p><h2 id="greybox-input" tabindex="-1">Greybox Input <a class="header-anchor" href="#greybox-input" aria-label="Permalink to &quot;Greybox Input&quot;">​</a></h2><p>Geometry that will be used as the base for the building.</p><p>Possible Inputs are:</p><table tabindex="0"><thead><tr><th>Parameter</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td>Geometry</td><td style="text-align:left;">Select a Static Mesh from the Asset Browser as Input.</td></tr><tr><td>World Select</td><td style="text-align:left;">Select a Static Mesh in your Scene as Input.</td></tr><tr><td>Curve Input</td><td style="text-align:left;">Input a Curve from the Asset Browser - not relevatent for this Tool, so <strong>doesn&#39;t work</strong>.</td></tr></tbody></table><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>Using World Select is the preferred method. This also lets you change the size of the inputbox and see the result in realtime.</p></div><h2 id="pattern" tabindex="-1">Pattern <a class="header-anchor" href="#pattern" aria-label="Permalink to &quot;Pattern&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Parameter</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td>Random Fill Patterns (Button)</td><td style="text-align:left;">Populates the Pattern field with random available floor patterns.</td></tr><tr><td>Show Floors (Button)</td><td style="text-align:left;">Shows a list with all available floor patterns, defined in the floor pattern Data Table.</td></tr><tr><td>Available Floor Pattern</td><td style="text-align:left;">Shows all available floor patterns (press Show Floors to show).</td></tr><tr><td>Pattern</td><td style="text-align:left;">The floor pattern that will be used to create the building.</td></tr><tr><td>Variations</td><td style="text-align:left;">Adds variation to the floors of the building, inputs are just available floor pattern (Use &#39;+&#39; to add variations).</td></tr><tr><td>Weight</td><td style="text-align:left;">How likely the variation will spawn, higher number = more likely.</td></tr><tr><td>Floor Seed</td><td style="text-align:left;">randomize the placement of the floor variations.</td></tr><tr><td>Module Seed</td><td style="text-align:left;">randomizes the placement of the modules within the bounds of a floor pattern (doens&#39;t seem to work right now so can be ignored).</td></tr><tr><td>Offset Floor Seed on Different Sides</td><td style="text-align:left;">If checked all sides of the building can be assigned a different floor type. <br> If unchecked all sides will be the same.</td></tr><tr><td>Offset Modules Seed on Different Sides</td><td style="text-align:left;">Not exactly sure what this does, but I guess if you have module variations it will randomly select those.</td></tr></tbody></table><h2 id="data-tables" tabindex="-1">Data Tables <a class="header-anchor" href="#data-tables" aria-label="Permalink to &quot;Data Tables&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Parameter</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td>DT Floors</td><td style="text-align:left;">Input the Data Table which holds the Floor information</td></tr><tr><td>DT Modules</td><td style="text-align:left;">Input the Data Table which holds the Module information</td></tr></tbody></table><div class="important custom-block github-alert"><p class="custom-block-title">IMPORTANT</p><p>The Data Tables <strong>must</strong> be setup in a very specific way for the tool to work. This is defined by the structure asset in Unreal. More information about Data Tables can be found <a href="./add-new-items.html">here</a>.</p></div><h2 id="structure" tabindex="-1">Structure <a class="header-anchor" href="#structure" aria-label="Permalink to &quot;Structure&quot;">​</a></h2><div class="info custom-block github-alert"><p class="custom-block-title">INFO</p><p>Not directly an available Parameter to change, but for sake of capturing every detail, Structs will be explained below.</p></div><p>Structs are needed to tell the Data Table what kind of information it holds. (Datatypes etc.)</p><table tabindex="0"><thead><tr><th>Parameter</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td>ST_Floors</td><td style="text-align:left;">Structure used for the creation of the floor patterns. <br> Contains: FloorName (String), Pattern(String), CornerPiece(String), Height (Float)</td></tr><tr><td>ST_Meshes</td><td style="text-align:left;">Structure used for the Data Table that holds information about the Modules. <br> Contains: Model (Static Mesh), Name (String), Size (Float)</td></tr></tbody></table><div class="important custom-block github-alert"><p class="custom-block-title">IMPORTANT</p><p>If you want to create the Structs and Data Tables yourself, make sure to keep the order and naming exactly the same as in the screenshots provided.</p></div><h2 id="roof" tabindex="-1">Roof <a class="header-anchor" href="#roof" aria-label="Permalink to &quot;Roof&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Parameter</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td>Roof Height</td><td style="text-align:left;">Sets the height of the roof (in meter)</td></tr><tr><td>Shingle Width</td><td style="text-align:left;">Adjust the width of the border on the roof</td></tr><tr><td>Roof Border Width</td><td style="text-align:left;">Adjusts the width of the border around the roof</td></tr></tbody></table><table tabindex="0"><thead><tr><th>Parameter</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td>Base Offset</td><td style="text-align:left;">Translates the roof in x y or z direction if needed</td></tr><tr><td>Disable Roof</td><td style="text-align:left;">If checked disables, the roof</td></tr><tr><td>Disable Border</td><td style="text-align:left;">If checked disables, the border around the roof</td></tr><tr><td>Disable Roof wire</td><td style="text-align:left;">If checked, disables the &#39;wire&#39; on the roof itself</td></tr></tbody></table><h3 id="roof-materials" tabindex="-1">Roof Materials <a class="header-anchor" href="#roof-materials" aria-label="Permalink to &quot;Roof Materials&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Parameter</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td>Roof Mat</td><td style="text-align:left;">Set the material of the Roof</td></tr><tr><td>Roof Base Uv Scale</td><td style="text-align:left;">Scales the UVs of the roof in x &amp; y</td></tr><tr><td>Roof Decoration Mat</td><td style="text-align:left;">Set the material of the roof wire</td></tr><tr><td>Roof Decoration Uv Scale</td><td style="text-align:left;">Scales the UVs of the roof wire in x &amp; y</td></tr><tr><td>Roof Border Mat</td><td style="text-align:left;">Set the material of the border around the roof</td></tr><tr><td>Roof Base Uv Scale</td><td style="text-align:left;">Scales the UVs of the roof in x &amp; y</td></tr></tbody></table><h2 id="common-settings" tabindex="-1">Common Settings <a class="header-anchor" href="#common-settings" aria-label="Permalink to &quot;Common Settings&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td>Pack and Instance Geometry</td><td>Packs and Instances the Geometry, can be beneficial for performance</td></tr><tr><td>Disable Walls</td><td>If checked, disables the walls</td></tr></tbody></table>',28)]))}const g=e(i,[["render",n]]);export{p as __pageData,g as default};
