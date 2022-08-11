# 半透明边框

主要是通过`hsla(0, 0%, 100%, 0.5)`来实现的，这个值不要去修改，半透明边框的颜色由此元素的父元素的背景颜色来决定，`background-clip: padding-box`这个值会让该元素的背景色仅处于`padding-box`内，注释后边框会消失。

![image-20220811154530689](https://raw.githubusercontent.com/Yuan1368/imgs-repo/main/image-20220811154530689.png)
