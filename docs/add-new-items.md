# Adding new content

## Data Tables

Data Tables are used to add assets to the BuildingGen tool, and configure the floor patters that are then used to construct the buildings.

![](/images/DT-Struct-Overview.png)

The Structure of the Data Tables is defined by the ST_Modules and ST_Floor Structure.

|ST_Modules|ST_Floor|
|---|:---|
|![](/images/ST-Meshes.png)|![](/images/ST-Floors.png)|



## Modules

 Modules hold information about the Modules/Assets used by the tool. You can use the DT_Modules Data Table to add as many Modules as you like.
![](/images/DT-Modules.png)

To add a new Module, simply add an entry to the Modules Data Table.

![](/images/DT-AddModule.png)


|Parameter|Description|
|---|---|
|Model| Add an Asset from the Content Drawer|
|Name| The name of the Module that will be used in the pattern Data Table. <br>I recommend using an abbrevation like *D* for a door asset.|
|Size| The **width** of the asset.<br>*Very important to try and set this as exactly as possible, as this will be used for placing the walls side by side. The **height** will be set in the Floor Data Table.*|

## Floors


Floors, as the name implies, are used to describe the appearance of a building's walls. They function by utilizing a simple 'grammar' system to determine the placement of modules specified in the Modules Data Table. 

> [!Info]
>More details on how the grammar works [here](./how-it-works.md).

![](/images/DT-FloorPatterns.png)

Adding a new floor is basically the same as adding a new Module. Just create a new row and fill out the fields.

![](/images/DT-AddPattern.png)

|Parameter|Description|
|---|---|
|FloorName| Choose a name for the floor (e.g. GroundFloor, FirstFloor, onlyWindows, noDoors etc.).|
|Pattern| The pattern/'grammar' that is used to create the floor.|
|CornerPiece| Use this if you want a specific Asset to **always** appear in the corners. *Can be left empty.*|
|Height| Meant is the height of the Modules used. (Normally the Y or Z value of the Asset). ***Also very important to get this as right as possible.***|

> [!Info]
> Tips on how to prepare your assets for the best possible outcome can be found [here](./asset-prepare.md).

> [!Info]
> It is not tested on how to system behaves when trying to use different sized Modules, so it is recommended for now to always have the same size of Modules. More testing will follow.