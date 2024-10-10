# BuildingGen examples

## Single Building example
![](/images/Example-Cube.png)


## Small City example
![](/images/Example-City.png)
![](/images/Example-City-HDA.png)


## Corner case example
Roman-style block of buildings with very unusual or narrow walls, to test the limits of the tool.



![](/images/RomeSmallExample.png)
![](/images/Example-Rome-HDA.png)

As you can see, the system breaks with very small or unusual box shapes. Try to avoid them.

![](/images/Problem-Rome-RoofShading.png)

---
Scaling and open wall issues.

![](/images/Problem-City-Scaling-OpenWalls.png)

---
Another problem is corner-clipping. Corner clippings appears when the modules used for creating the walls are too thick. This issue can easily be fixed by using very small, almost plane like, geometry for the walls.

![](/images/Problem-City-CornerClipping.png)