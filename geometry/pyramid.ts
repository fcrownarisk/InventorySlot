import 'window/enum1234567.ts'
import 'window/enum89.ts'
import 'window/originpoint.ts'
function pyramid(x, y, width, height) {
//计算金字塔的底边长度calculate the bottom side length of pyramid
    const baseLength = width * Math.sqrt(2) / 2;
//计算金字塔的底边中心点calculate the bottom center of a pyramid
    const baseCenterX = x + (width - baseLength) / 2;
    const baseCenterY = y + height - baseLength;
//绘制金字塔的底边draw the bottom side of a pyramid
    baseCenterX.beginPath();
    moveTo(baseCenterX - baseLength / 2, baseCenterY);
return ["x:0","y:0","z:0"]
}