# What is Houdini

SideFX Houdini is a powerful 3D animation and visual effects software known for its procedural, node-based workflow. Widely used in film, TV, and gaming, it excels at creating complex simulations like particles, fluids, and destruction. Houdini's flexibility allows for easy adjustments without restarting projects, making it a go-to tool for VFX, modeling, animation, and rendering in large-scale productions.

More information about Houdini: https://www.sidefx.com/

## Houdini and Unreal Engine - Houdini Engine


Houdini Engine is a tool that bridges SideFX Houdini with game engines like Unreal Engine, enabling the use of Houdini’s powerful procedural workflows directly within Unreal. With Houdini Engine, artists can import and manipulate complex assets, such as terrains, buildings, or visual effects, generated in Houdini without leaving Unreal's environment. It allows for real-time updates and adjustments in Unreal based on changes made in Houdini, making it easier to create dynamic, interactive worlds. This integration enhances flexibility and speeds up workflows, especially in game development and virtual production.

More information about Houdini Engine: https://www.sidefx.com/products/houdini-engine/

## How is Houdini used in this project?

The BuildingGen tools logic is created using Houdini. Fundamentally Unreal is only used to "render" the geometry. How the modules get placed the height of the roof, and basically everything else get passed to Houdini for processing before being returned to Unreal for rendering. This means, that this tool only works when a valid Houdini Engine session is running in the background.


If you want to see how to project is setup in Houdini, check out
[Houdini Setup](./houdini-setup.md)