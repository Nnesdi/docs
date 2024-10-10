import{_ as t}from"./chunks/Problem-City-CornerClipping.G1vO0Yho.js";import{_ as s,c as a,a0 as i,o}from"./chunks/framework.D84hx5uF.js";const r="/assets/Thin%20Walls.CzVIwdy0.png",n="/assets/Weird%20Walls%2002.BXaG7SwD.png",l="/assets/Weird%20Walls%2001.DDxogjDS.png",p="/assets/Pivot%20Example01.DEz6eoun.png",h="/assets/Doku%20Pivot%20Example.BJ-hwim8.png",k=JSON.parse('{"title":"Preparing your assets","description":"","frontmatter":{},"headers":[],"relativePath":"asset-prepare.md","filePath":"asset-prepare.md"}'),c={name:"asset-prepare.md"};function m(d,e,u,g,w,f){return o(),a("div",null,e[0]||(e[0]=[i('<h1 id="preparing-your-assets" tabindex="-1">Preparing your assets <a class="header-anchor" href="#preparing-your-assets" aria-label="Permalink to &quot;Preparing your assets&quot;">​</a></h1><h2 id="what-works-best" tabindex="-1">What works best? <a class="header-anchor" href="#what-works-best" aria-label="Permalink to &quot;What works best?&quot;">​</a></h2><p>The way the wall placing logic works makes it alsmost necessary to use thin, plane-like, geometry for the walls. This makes sure that you don&#39;t get clipping problems in the corners of your buildings.</p><p><img src="'+t+'" alt=""></p><p><img src="'+r+'" alt=""> These are just basic examples. You can still incorporate some thickness in the windows; however, the key point is to ensure that the edges remain narrow, where the walls will eventually meet.</p><p>Shapes like this would technically work, but I wouldn’t recommend using them, as they introduce other issues, such as ensuring precise cuts to avoid clipping and many other complications.</p><p><img src="'+n+'" alt=""><img src="'+l+'" alt=""></p><h2 id="orientation-and-pivot-point" tabindex="-1">Orientation and Pivot Point <a class="header-anchor" href="#orientation-and-pivot-point" aria-label="Permalink to &quot;Orientation and Pivot Point&quot;">​</a></h2><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p><strong>This is the most crucial step. If you ignore it, your wall placement will be chaotic and misaligned.</strong></p></div><p><img src="'+p+'" alt=""><img src="'+h+'" alt=""> The pivot should be positioned precisely at the front left corner, as shown in the images. This pivot, combined with the asset length, will determine the placement of the walls.</p><p>If you notice any gaps or overlapping walls, be sure to check the pivot point.</p><h2 id="size-of-the-modules" tabindex="-1">Size of the modules <a class="header-anchor" href="#size-of-the-modules" aria-label="Permalink to &quot;Size of the modules&quot;">​</a></h2><p>Please maintain consistent module sizes across all assets, such as doors, walls, and windows. This uniformity is crucial for module placement. While height and width can vary—for example, a wall measuring 2 meters wide and 3 meters tall is acceptable—avoid mixing assets that have different dimensions.</p>',13)]))}const _=s(c,[["render",m]]);export{k as __pageData,_ as default};