# Quickstart Guide
> [!info]
> If you change the Data Tables, or something else and the tool doens't seem to work anymore, you have to Rebuild or Recook the asset.

## 1. Houdini Session
- Start a Houdini Session by using the Houdini Engine Tab.

![](/images/HoudiniEngine-HDA-Tab-CreateSession.png)


## 2. Add HDA to Scene
- Drag the HDA from the Asset Browser into your Unreal Scene, where exactly doesn't matter.

## 3. Fill the HDA with Data

Make sure to add the floor and module Data Tables to the HDA.
![](/images/HDA-Details-DataTables.png)

- Select a Greybox in your scene for the Geometry Input

![](/images/GreyboxInputTypes.png)

> [!Tip]
> Using World Inputw is the preferred method. This also lets you change the size of the inputbox and see the result in realtime.

- Choose a Floortype from the list.
![](<images/HDA Select Pattern.png>)

## 4. Short interface overview

**Pattern:**
Select the pattern used for creating the building.
![](images/HDA-Details-Pattern.png)

**Data Tables:**
Add the Data Tables that hold the information about floors and modules.
![](images/HDA-Details-DataTables.png)

**Roof:**
Parameters for setting the roof size and material.
![](images/HDA-Details-Roof.png)

**Common Settings:**
Settings that didn't fit the other criteria.
![](images/HDA-Details-Common.png)

## 5. More information 

A list of all available parameters and what they do can be found [here](./hda-parameters).

## 6. Further helpful guides: 

- [Understanding how patterns work](./how-it-works.md).
- [Adding new content](./add-new-items.md).