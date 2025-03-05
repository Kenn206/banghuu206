var testing = false;
if (window.location.href.indexOf("/testing") >= 0) testing = true;
var iioc = false;
var nsr = false;
var grq = document.getElementById("grq");
var grqh = document.getElementById("grqh");
var phqi = document.createElement("img");
var ggl = false;
try {
    var ztc = document.createElement("canvas");
    var gle = ztc.getContext("webgl") || ztc.getContext("webgl2");
    if (gle && gle instanceof WebGLRenderingContext) ggl = true
} catch (e) {}
ggl = false;
if (!TouchEvent) var TouchEvent = function() {};
var lang = navigator.language || navigator.userLanguage;
lang = lang.substr(0, 2);
var forcing = false;
var fobso = null;

function forceOnce(ip, po, aa) {
    forcing = true;
    fobso = {};
    fobso.ip = ip;
    fobso.po = po;
    fobso.ac = 999;
    fobso.c_aa = aa
}
var ua = navigator.userAgent.toLowerCase();
var is_android = ua.indexOf("android") >= 0;
var is_amazon = ua.indexOf("kindle") >= 0 || ua.indexOf("silk/") >= 0;
var uua = navigator.userAgent;
var is_ios = uua.indexOf("iPad") >= 0 || uua.indexOf("iPhone") >= 0 || uua.indexOf("iPod") >= 0;
var is_mobile = ua.indexOf("mobile") >= 0;
var is_firefox = ua.indexOf("firefox") > -1;
var is_ie8oo = window.attachEvent && !window.addEventListener;
var is_chrome = false;
var is_osx = false;
var osx_ver = -1;
var is_safari = false;
if (ua.indexOf("safari") >= 0)
    if (ua.indexOf("chrome") == -1) is_safari = true;
if (ua.indexOf("chrome") >= 0)
    if (!is_safari)
        if (!is_firefox) is_chrome = true;
if (ua.indexOf("mac os x ") >= 0) {
    var j = ua.indexOf("mac os x ");
    if (j >= 0) {
        j += 9;
        var vs = [];
        var v = 0;
        for (var i = j; i < ua.length; i++) {
            var k = ua.charCodeAt(i);
            if (k >= 48 && k <= 57) {
                v *= 10;
                v += k - 48
            } else {
                vs.push(v);
                v = 0;
                if (vs.length == 3 || k != 46 && k != 95) break
            }
        }
        if (vs.length >= 2)
            if (vs[0] == 10) {
                is_osx = true;
                osx_ver = vs[1]
            }
    }
}
if (navigator.platform) {
    var ptf = ("" + navigator.platform).toLowerCase();
    if (ptf.substr(0, 3) != "mac") is_osx = false
}
var no_raf = false;
var raf = function(x) {};
if (window.requestAnimationFrame) raf = window.requestAnimationFrame;
else if (window.mozRequestAnimationFrame) raf = window.mozRequestAnimationFrame;
else if (window.webkitRequestAnimationFrame) raf = window.webkitRequestAnimationFrame;
else no_raf = true;
var timeObj = Date;
try {
    if (performance) {
        var v = performance.now();
        timeObj = performance;
        if (testing) console.log("timeObj set to performance")
    }
} catch (e) {}
var lfsx;
var lfsy;
var lfcv;
var lfvsx;
var lfvsy;
var lfesid;
var sgsdr = 0;
var fdsdr = 0;
var vvd = [];
var vch = 0;
var doiosh = false;
if (is_chrome)
    if (is_osx)
        if (osx_ver != -1)
            if (osx_ver <= 11) nsr = true;
var a, i, j, k, l, m, n, o, r, v;
var j2;
var fj;
var fjm4;
var d, d2, d3;
var qq;
var ki;
var sc;
var agpu = "translateZ(0)";
var ang, sang, vang;

function trf(d, s) {
    d.style.webkitTransform = d.style.OTransform = d.style.msTransform = d.style.MozTransform = d.style.transform = s
}

function trfo(d, s) {
    d.style.webkitTransformOrigin = d.style.OTransformOrigin = d.style.msTransformOrigin = d.style.MozTransformOrigin = d.style.transformOrigin = s
}
var pi2 = 2 * Math.PI;
var a64k = 65536 / pi2;
var k64a = pi2 / 65536;
var piar = [4, 21, 0, 11];
var animating = false;
var startAnimation = function() {
    animating = true;
    if (!no_raf) raf(oef);
    else if (is_mobile) setInterval("oef()", 33);
    else if (is_safari) setInterval("oef()", 33);
    else setInterval("oef()", 20)
};
var ois = [];
var wic = 0;
var ldi = function(n) {
    wic++;
    var o = {};
    var ii = document.createElement("img");
    o.ii = ii;
    o.sc = 1;
    ii.onload = function() {
        for (var i = ois.length - 1; i >= 0; i--)
            if (ois[i].ii == this) {
                var o = ois[i];
                o.ww = this.width;
                o.hh = this.height;
                o.loaded = true;
                if (o.onload) o.onload();
                break
            } wic--;
        if (wic == 0) startAnimation()
    };
    o.src = n;
    ois.push(o);
    return o
};

function addCss(cssCode) {
    var styleElement = document.createElement("style");
    document.getElementsByTagName("head")[0].appendChild(styleElement);
    styleElement.type = "text/css";
    if (styleElement.styleSheet) styleElement.styleSheet.cssText = cssCode;
    else styleElement.appendChild(document.createTextNode(cssCode))
}
var tsh = [];
for (var tx = -1; tx <= 1; tx++)
    for (var ty = -1; ty <= 1; ty++) tsh.push(tx + "px " + ty + "px 0 #000");
tsh = tsh.join(", ");

function RectanglePacker(width, height, padding) {
    this.mWidth = 0;
    this.mHeight = 0;
    this.mPadding = 8;
    this.mPackedWidth = 0;
    this.mPackedHeight = 0;
    this.mInsertList = [];
    this.mInsertedRectangles = [];
    this.mFreeAreas = [];
    this.mNewFreeAreas = [];
    this.mOutsideRectangle = new IntegerRectangle(width + 1, height + 1, 0, 0);
    this.mSortableSizeStack = [];
    this.mRectangleStack = [];
    this.rectangleCount = function() {
        return this.mInsertedRectangles.length
    };
    this.reset = function(width, height, padding) {
        while (this.mInsertedRectangles.length > 0) this.freeRectangle(this.mInsertedRectangles.pop());
        while (this.mFreeAreas.length > 0) this.freeRectangle(this.mFreeAreas.pop());
        this.mWidth = width;
        this.mHeight = height;
        this.mPackedWidth = 0;
        this.mPackedHeight = 0;
        this.mFreeAreas[0] = this.allocateRectangle(0, 0, this.mWidth, this.mHeight);
        while (this.mInsertList.length > 0) this.freeSize(this.mInsertList.pop());
        this.mPadding = padding
    };
    this.getRectangle = function(index, rectangle) {
        var inserted = this.mInsertedRectangles[index];
        if (rectangle) {
            rectangle.x = inserted.x;
            rectangle.y = inserted.y;
            rectangle.width = inserted.width;
            rectangle.height =
                inserted.height;
            return rectangle
        }
        return new IntegerRectangle(inserted.x, inserted.y, inserted.width, inserted.height)
    };
    this.getRectangleId = function(index) {
        var inserted = this.mInsertedRectangles[index];
        return inserted.id
    };
    this.insertRectangle = function(width, height, id) {
        var sortableSize = this.allocateSize(width, height, id);
        this.mInsertList.push(sortableSize)
    };
    this.packRectangles = function(sort) {
        if (sort) this.mInsertList.sort(numsort_width);
        while (this.mInsertList.length > 0) {
            var sortableSize = this.mInsertList.pop();
            var width = sortableSize.width;
            var height = sortableSize.height;
            var index = this.getFreeAreaIndex(width, height);
            if (index >= 0) {
                var freeArea = this.mFreeAreas[index];
                var target = this.allocateRectangle(freeArea.x, freeArea.y, width, height);
                target.id = sortableSize.id;
                this.generateNewFreeAreas(target, this.mFreeAreas, this.mNewFreeAreas);
                while (this.mNewFreeAreas.length > 0) this.mFreeAreas[this.mFreeAreas.length] = this.mNewFreeAreas.pop();
                this.mInsertedRectangles[this.mInsertedRectangles.length] = target;
                if (target.right > this.mPackedWidth) this.mPackedWidth =
                    target.right;
                if (target.bottom > this.mPackedHeight) this.mPackedHeight = target.bottom
            }
            this.freeSize(sortableSize)
        }
        return this.rectangleCount()
    };
    this.filterSelfSubAreas = function(areas) {
        for (var i = areas.length - 1; i >= 0; i--) {
            var filtered = areas[i];
            for (var j = areas.length - 1; j >= 0; j--)
                if (i != j) {
                    var area = areas[j];
                    if (filtered.x >= area.x && filtered.y >= area.y && filtered.right <= area.right && filtered.bottom <= area.bottom) {
                        this.freeRectangle(filtered);
                        var topOfStack = areas.pop();
                        if (i < areas.length) areas[i] = topOfStack;
                        break
                    }
                }
        }
    };
    this.generateNewFreeAreas = function(target, areas, results) {
        var x = target.x;
        var y = target.y;
        var right = target.right + 1 + this.mPadding;
        var bottom = target.bottom + 1 + this.mPadding;
        var targetWithPadding = null;
        if (this.mPadding == 0) targetWithPadding = target;
        for (var i = areas.length - 1; i >= 0; i--) {
            var area = areas[i];
            if (!(x >= area.right || right <= area.x || y >= area.bottom || bottom <= area.y)) {
                if (!targetWithPadding) targetWithPadding = this.allocateRectangle(target.x, target.y, target.width + this.mPadding, target.height + this.mPadding);
                this.generateDividedAreas(targetWithPadding,
                    area, results);
                var topOfStack = areas.pop();
                if (i < areas.length) areas[i] = topOfStack
            }
        }
        if (targetWithPadding && targetWithPadding != target) this.freeRectangle(targetWithPadding);
        this.filterSelfSubAreas(results)
    };
    this.generateDividedAreas = function(divider, area, results) {
        var count = 0;
        var rightDelta = area.right - divider.right;
        if (rightDelta > 0) {
            results[results.length] = this.allocateRectangle(divider.right, area.y, rightDelta, area.height);
            count++
        }
        var leftDelta = divider.x - area.x;
        if (leftDelta > 0) {
            results[results.length] = this.allocateRectangle(area.x,
                area.y, leftDelta, area.height);
            count++
        }
        var bottomDelta = area.bottom - divider.bottom;
        if (bottomDelta > 0) {
            results[results.length] = this.allocateRectangle(area.x, divider.bottom, area.width, bottomDelta);
            count++
        }
        var topDelta = divider.y - area.y;
        if (topDelta > 0) {
            results[results.length] = this.allocateRectangle(area.x, area.y, area.width, topDelta);
            count++
        }
        if (count == 0 && (divider.width < area.width || divider.height < area.height)) results[results.length] = area;
        else this.freeRectangle(area)
    };
    this.getFreeAreaIndex = function(width, height) {
        var best =
            this.mOutsideRectangle;
        var index = -1;
        var paddedWidth = width + this.mPadding;
        var paddedHeight = height + this.mPadding;
        var count = this.mFreeAreas.length;
        for (var i = count - 1; i >= 0; i--) {
            var free = this.mFreeAreas[i];
            if (free.x < this.mPackedWidth || free.y < this.mPackedHeight) {
                if (free.x < best.x && paddedWidth <= free.width && paddedHeight <= free.height) {
                    index = i;
                    if (paddedWidth == free.width && free.width <= free.height && free.right < this.mWidth || paddedHeight == free.height && free.height <= free.width) break;
                    best = free
                }
            } else if (free.x < best.x &&
                width <= free.width && height <= free.height) {
                index = i;
                if (width == free.width && free.width <= free.height && free.right < this.mWidth || height == free.height && free.height <= free.width) break;
                best = free
            }
        }
        return index
    };
    this.allocateRectangle = function(x, y, width, height) {
        if (this.mRectangleStack.length > 0) {
            var rectangle = this.mRectangleStack.pop();
            rectangle.x = x;
            rectangle.y = y;
            rectangle.width = width;
            rectangle.height = height;
            rectangle.right = x + width;
            rectangle.bottom = y + height;
            return rectangle
        }
        return new IntegerRectangle(x, y, width, height)
    };
    this.freeRectangle = function(rectangle) {
        this.mRectangleStack[this.mRectangleStack.length] = rectangle
    };
    this.allocateSize = function(width, height, id) {
        if (this.mSortableSizeStack.length > 0) {
            var size = this.mSortableSizeStack.pop();
            size.width = width;
            size.height = height;
            size.id = id;
            return size
        }
        return new SortableSize(width, height, id)
    };
    this.freeSize = function(size) {
        this.mSortableSizeStack[this.mSortableSizeStack.length] = size
    };
    this.reset(width, height, padding)
}

function IntegerRectangle(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.right = x + width;
    this.bottom = y + height
}

function SortableSize(width, height, id) {
    this.width = width;
    this.height = height;
    this.id = id
}
var numsort_width = function(a, b) {
    return a.width - b.width
};
var texture_sheets = [];
var textures = [];
var tssz = 2048;
var cc = document.createElement(" canvas");
cc.width = cc.height = tssz;
var o = {};
o.width = tssz;
o.height = tssz;
o.cc = cc;
texture_sheets.push(o);
var sadg, sadu, sadd;
var j, k, l, p;
var xx, yy;
var rad;
var grw, grh;
var elem, map, imgd;
var ctx;
var l;
var p;
var rw, rh;
elem = document.createElement("canvas");
grw = 2;
grh = 56;
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
p = 0;
for (yy = 0; yy < grh; yy++) {
    j = (grh - 1 - yy) / (grh - 1);
    j = .5 * (1 - Math.cos(Math.PI * j));
    for (xx = 0; xx < grw; xx++) {
        imgd[p] = Math.min(255, Math.floor(.85 * 64 + .5 * 64 * j));
        imgd[p + 1] = Math.min(255, Math.floor(.85 * 128 + .5 * 128 * j));
        imgd[p + 2] = Math.min(255, Math.floor(.85 * 96 + .5 * 96 * j));
        imgd[p + 3] = 255;
        p += 4
    }
}
ctx.putImageData(map, 0, 0);
sadg = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
p = 0;
for (yy = 0; yy < grh; yy++) {
    j = (grh - 1 - yy) / (grh - 1);
    j = .5 * (1 - Math.cos(Math.PI * j));
    for (xx = 0; xx < grw; xx++) {
        imgd[p] = Math.min(255, Math.floor(1.5 * 48 + .95 * 48 * j));
        imgd[p + 1] = Math.min(255, Math.floor(1.5 * 114 + .95 * 98 * j));
        imgd[p + 2] = Math.min(255, Math.floor(1.5 * 88 + .95 * 87 * j));
        imgd[p + 3] = 255;
        p += 4
    }
}
ctx.putImageData(map, 0, 0);
sadu = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
p = 0;
for (yy = 0; yy < grh; yy++) {
    j = yy / (grh - 1);
    j = .5 * (1 - Math.cos(Math.PI * j));
    for (xx = 0; xx < grw; xx++) {
        imgd[p] = Math.floor(.1 * 48 + .75 * 48 * j);
        imgd[p + 1] = Math.floor(.1 * 70 + .75 * 70 * j);
        imgd[p + 2] = Math.floor(.1 * 64 + .75 * 64 * j);
        imgd[p + 3] = 255;
        p += 4
    }
}
ctx.putImageData(map, 0, 0);
sadd = elem.toDataURL();
if (sadg.length > 32 && sadu.length > 32 && sadd.length > 32) addCss(".sadg1 { background-image:url(" + sadg + "); } .sadu1 { background-image:url(" + sadu + "); } .sadd1 { background-image:url(" + sadd + "); }");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
p = 0;
for (yy = 0; yy < grh; yy++) {
    j = (grh - 1 - yy) / (grh - 1);
    j = .5 * (1 - Math.cos(Math.PI * j));
    for (xx = 0; xx < grw; xx++) {
        imgd[p] = Math.min(255, Math.floor(.85 * 52 + .5 * 52 * j));
        imgd[p + 1] = Math.min(255, Math.floor(.85 * 96 + .5 * 96 * j));
        imgd[p + 2] = Math.min(255, Math.floor(.85 * 144 + .5 * 144 * j));
        imgd[p + 3] = 255;
        p += 4
    }
}
ctx.putImageData(map, 0, 0);
sadg = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
p = 0;
for (yy = 0; yy < grh; yy++) {
    j = (grh - 1 - yy) / (grh - 1);
    j = .5 * (1 - Math.cos(Math.PI * j));
    for (xx = 0; xx < grw; xx++) {
        imgd[p] = Math.min(255, Math.floor(1.5 * 48 + .95 * 48 * j));
        imgd[p + 1] = Math.min(255, Math.floor(1.5 * 88 + .95 * 87 * j));
        imgd[p + 2] = Math.min(255, Math.floor(1.5 * 114 + .95 * 98 * j));
        imgd[p + 3] = 255;
        p += 4
    }
}
ctx.putImageData(map, 0, 0);
sadu = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
p = 0;
for (yy = 0; yy < grh; yy++) {
    j = yy / (grh - 1);
    j = .5 * (1 - Math.cos(Math.PI * j));
    for (xx = 0; xx < grw; xx++) {
        imgd[p] = Math.floor(.1 * 48 + .75 * 48 * j);
        imgd[p + 1] = Math.floor(.1 * 54 + .75 * 54 * j);
        imgd[p + 2] = Math.floor(.1 * 70 + .75 * 70 * j);
        imgd[p + 3] = 255;
        p += 4
    }
}
ctx.putImageData(map, 0, 0);
sadd = elem.toDataURL();
if (sadg.length > 32 && sadu.length > 32 && sadd.length > 32) addCss(".sadg2 { background-image:url(" + sadg + "); } .sadu2 { background-image:url(" + sadu + "); } .sadd2 { background-image:url(" + sadd + "); }");
var mos = [];
var whmos = false;
var swmup = false;

function mkBtn(elemid, prefix, iw, ih) {
    var ho = document.createElement("div");
    var elem;
    if (elemid.tagName) elem = elemid;
    else {
        elem = document.getElementById(elemid);
        elem.style.width = iw + "px";
        elem.style.height = ih + "px";
        ho.style.width = iw + "px";
        ho.style.height = ih + "px"
    }
    var o = {};
    o.lic = 0;
    o.elem = elem;
    o.md = false;
    o.mo = false;
    o.mdf = 0;
    o.mof = 0;
    var str = true;
    if (elem.style)
        if (elem.style.position) {
            if ((elem.style.position + "").toLowerCase() == "absolute") str = false;
            if ((elem.style.position + "").toLowerCase() == "fixed") str = false
        } if (str) elem.style.position =
        "relative";
    ho.style.position = "absolute";
    ho.style.opacity = 0;
    ho.style.left = "0px";
    ho.style.top = "0px";
    elem.appendChild(ho);
    o.ho = ho;
    o.alic = function() {
        this.lic++;
        if (this.lic == 3) {
            this.ho.style.opacity = 1;
            if (this.onload) this.onload()
        }
    };
    mos.push(o);
    o.setEnabled = function(e) {
        if (e) {
            this.disabled = false;
            this.upi.style.opacity = this.mof;
            this.downi.style.opacity = this.mdf;
            this.elem.style.opacity = 1;
            this.elem.style.cursor = "pointer"
        } else {
            this.disabled = true;
            this.upi.style.opacity = 0;
            this.downi.style.opacity = 0;
            this.elem.style.opacity =
                .38;
            this.elem.style.cursor = "default"
        }
    };
    if (!prefix) ho.style.opacity = 1;
    else
        for (var k = 1; k <= 3; k++) {
            var ii = document.createElement("img");
            ii.draggable = false;
            ii.style.position = "absolute";
            ii.style.left = "0px";
            ii.style.top = "0px";
            ii.border = 0;
            ii.width = iw;
            ii.height = ih;
            ii.className = "nsi";
            ho.appendChild(ii);
            if (k == 1) {
                o.normi = ii;
                ii.onload = function() {
                    for (var i = mos.length - 1; i >= 0; i--) {
                        var o = mos[i];
                        if (o.normi == this) {
                            o.alic();
                            break
                        }
                    }
                };
                ii.src = prefix + ".png"
            } else if (k == 2) {
                o.upi = ii;
                ii.style.opacity = 0;
                ii.onload = function() {
                    for (var i =
                            mos.length - 1; i >= 0; i--) {
                        var o = mos[i];
                        if (o.upi == this) {
                            o.alic();
                            break
                        }
                    }
                };
                ii.src = prefix + "up.png"
            } else if (k == 3) {
                o.downi = ii;
                ii.style.opacity = 0;
                ii.onload = function() {
                    for (var i = mos.length - 1; i >= 0; i--) {
                        var o = mos[i];
                        if (o.downi == this) {
                            o.alic();
                            break
                        }
                    }
                };
                ii.src = prefix + "down.png"
            }
        }
    elem.onmouseenter = function() {
        for (var k = mos.length - 1; k >= 0; k--) {
            var o = mos[k];
            if (o.elem == this) {
                if (!o.disabled)
                    if (!o.mo) {
                        o.mo = true;
                        if (o.onmouseenter) o.onmouseenter();
                        whmos = true
                    } break
            }
        }
    };
    elem.onmouseleave = function() {
        for (var k = mos.length - 1; k >=
            0; k--) {
            var o = mos[k];
            if (o.elem == this) {
                if (o.mo) {
                    o.mo = false;
                    if (o.onmouseleave) o.onmouseleave();
                    whmos = true
                }
                break
            }
        }
    };
    elem.onmousedown = function(e) {
        for (var k = mos.length - 1; k >= 0; k--) {
            var o = mos[k];
            if (o.elem == this) {
                if (!o.disabled)
                    if (!o.md) {
                        o.md = true;
                        if (o.onmousedown) o.onmousedown(e, o);
                        whmos = true;
                        return false
                    } break
            }
        }
    };
    elem.onmouseup = elem.ondragend = function(e) {
        for (var k = mos.length - 1; k >= 0; k--) {
            var o = mos[k];
            if (o.elem == this) {
                if (o.md) {
                    o.mdf = 1;
                    o.md = false;
                    if (o.onmouseup) {
                        o.onmouseup(e, o);
                        if (is_mobile) o.elem.onmouseleave()
                    }
                    whmos =
                        true
                }
                break
            }
        }
    };
    if (!swmup) {
        swmup = true;
        window.onmouseup = window.ondragover = window.ondragend = function() {
            for (var i = mos.length - 1; i >= 0; i--) {
                var o = mos[i];
                if (o.md) {
                    o.md = false;
                    whmos = true
                }
            }
        }
    }
    return o
}

function hmos() {
    var wa;
    var dstf = false;
    for (var i = mos.length - 1; i >= 0; i--) {
        var o = mos[i];
        wa = false;
        if (o.mo) {
            if (o.mof != 1) {
                dstf = true;
                o.mof += .33;
                if (o.mof >= 1) o.mof = 1;
                wa = true
            }
        } else if (o.mof != 0) {
            dstf = true;
            o.mof -= .2;
            if (o.mof <= 0) o.mof = 0;
            wa = true
        }
        if (wa)
            if (o.disabled) o.upi.style.opacity = 0;
            else o.upi.style.opacity = o.mof;
        wa = false;
        if (o.md) {
            if (o.mdf != 1) {
                dstf = true;
                o.mdf += .33;
                if (o.mdf >= 1) o.mdf = 1;
                wa = true
            }
        } else if (o.mdf != 0) {
            dstf = true;
            o.mdf -= .2;
            if (o.mdf <= 0) o.mdf = 0;
            wa = true
        }
        if (wa)
            if (o.disabled) o.downi.style.opacity = 0;
            else o.downi.style.opacity = o.mdf
    }
    if (!dstf) whmos = false
}

function makeTextBtn(s, bh, ts, br, bgm) {
    if (!bh) bh = 56;
    if (bh > 56) bh = 56;
    if (!ts) ts = 15;
    if (!br) br = 14;
    var btndiv = document.createElement("div");
    btndiv.className = "btnt nsi sadg" + bgm;
    var st = btndiv.style;
    st.position = "absolute";
    st.width = "auto";
    st.color = "#ffffff";
    st.fontWeight = "bold";
    st.textAlign = "center";
    st.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
    st.fontSize = ts + "px";
    btndiv.textContent = s;
    st.cursor = "pointer";
    document.body.appendChild(btndiv);
    var btnw = Math.ceil(35 + btndiv.offsetWidth);
    document.body.removeChild(btndiv);
    btndiv.textContent = "";
    st.width = btnw + "px";
    st.height = bh + "px";
    st.lineHeight = bh + "px";
    if (!is_mobile) st.boxShadow = "0px 3px 20px rgba(0,0,0, .75)";
    st.borderRadius = br + "px";
    var btnu = document.createElement("div");
    var st = btnu.style;
    st.position = "absolute";
    st.left = st.top = "0px";
    st.width = btnw + "px";
    st.height = bh + "px";
    st.borderRadius = br + 1 + "px";
    st.opacity = 0;
    btnu.className = "sadu" + bgm;
    var btnd = document.createElement("div");
    var st = btnd.style;
    st.position = "absolute";
    st.left = st.top = "-1px";
    st.width = btnw + 2 + "px";
    st.height = bh +
        2 + "px";
    st.borderRadius = br + "px";
    st.opacity = 0;
    btnd.className = "sadd" + bgm;
    var o = mkBtn(btndiv);
    o.a = 1;
    o.ho.appendChild(btnu);
    o.upi = btnu;
    o.ho.appendChild(btnd);
    o.downi = btnd;
    o.ts = ts;
    o.ww = btnw;
    o.bgm = bgm;
    o.setText = function(t) {
        var testdiv = document.createElement("div");
        testdiv.className = "nsi sadg" + this.bgm;
        var st = testdiv.style;
        st.position = "absolute";
        st.width = "auto";
        st.color = "#ffffff";
        st.fontWeight = "bold";
        st.textAlign = "center";
        st.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
        st.fontSize = this.ts +
            "px";
        testdiv.textContent = t;
        document.body.appendChild(testdiv);
        var btnw = Math.ceil(35 + testdiv.offsetWidth);
        document.body.removeChild(testdiv);
        this.btnf.textContent = t;
        this.ww = btnw;
        this.elem.style.width = btnw + "px";
        this.upi.style.width = btnw + "px";
        this.downi.style.width = btnw + 2 + "px";
        this.btnf.style.width = btnw + "px"
    };
    var btnf = document.createElement("div");
    btndiv.appendChild(btnf);
    o.btnf = btnf;
    var st = btnf.style;
    st.position = "absolute";
    st.left = st.top = "0px";
    st.width = btnw + "px";
    st.height = bh + "px";
    st.borderRadius = br +
        "px";
    btnf.textContent = s;
    btnf.className = "nsi";
    st.color = "#ffffff";
    st.opacity = .9;
    o.ho.appendChild(btnf);
    return o
}

function heystup() {
    var os = document.getElementsByTagName("script");
    for (var i = os.length - 1; i >= 0; i--) {
        var o = os[i];
        try {
            if (o.src)
                if ((o.src + "").indexOf("mindscape.xyz") >= 0) {
                    var div = document.createElement("div");
                    div.style.width = "100%";
                    div.style.height = "100%";
                    div.style.position = "fixed";
                    div.style.left = div.style.top = "0px";
                    div.style.zIndex = 2147483647;
                    div.style.fontSize = "87px";
                    div.style.color = "#FF3030";
                    div.style.background = "#FFFFFF";
                    if ((o.src + "").indexOf("android") >= 0) div.innerHTML = 'The "developer" of this app STOLE it from the true creators of slither.io. <a href="https://play.google.com/store/apps/details?id=air.com.hypah.io.slither">Tap here to download the real game!</a>';
                    else div.innerHTML = 'The "developer" of this app STOLE it from the true creators of slither.io. <a href="https://itunes.apple.com/us/app/slither.io/id1091944550?ls=1&mt=8">Tap here to download the real game!</a>';
                    document.body.appendChild(div)
                }
        } catch (ee) {}
    }
    if (is_ios)
        if (mba && !mba.parentNode) {
            var div = document.createElement("div");
            div.style.width = "100%";
            div.style.height = "100%";
            div.style.position = "fixed";
            div.style.left = div.style.top = "0px";
            div.style.zIndex = 2147483647;
            div.style.fontSize = "87px";
            div.style.color =
                "#FF3030";
            div.style.background = "#FFFFFF";
            div.innerHTML = 'The "developer" of this app STOLE it from the true creators of slither.io. <a href="https://itunes.apple.com/us/app/slither.io/id1091944550?ls=1&mt=8">Tap here to download the real game!</a>';
            document.body.appendChild(div)
        }
}
setInterval(heystup, 8E3);
var sos = [];
var clus = [];
var bso;
var bcluo = null;
var bcptm = 9999999;
var fbso = null;
var real_sid;

function recalcTainted() {
    var ctm = timeObj.now();
    for (i = 0; i < sos.length; i++) {
        var o = sos[i];
        if (o.tainted)
            if (ctm - o.tainted_mtm > 12E4) o.tainted = false
    }
}

function recalcPtms() {
    recalcTainted();
    var i, j, k;
    for (i = 0; i < sos.length; i++) {
        sos[i].ptm = 9999999;
        if (sos[i].active) sos[i].ptm--
    }
    bcluo = null;
    bcptm = 9999999;
    for (k = clus.length - 1; k >= 0; k--) {
        var cluo = clus[k];
        if (cluo)
            if (cluo.ptms.length > 0) {
                var optm = 0;
                for (j = cluo.ptms.length - 1; j >= 0; j--) optm += cluo.ptms[j];
                optm = optm / cluo.ptms.length;
                var ptm = 9999999;
                for (j = cluo.ptms.length - 1; j >= 0; j--)
                    if (cluo.ptms[j] < ptm) ptm = cluo.ptms[j];
                if (testing) console.log("cluster " + k + " ping time: " + ptm + " old ping time: " + optm);
                if (ptm < bcptm) {
                    bcptm =
                        ptm;
                    bcluo = cluo
                }
                for (var j = sos.length - 1; j >= 0; j--)
                    if (sos[j].clu == k) sos[j].ptm = ptm
            }
    }
    var m;
    var v;
    var o;
    var cluo = bcluo;
    if (cluo)
        for (j = 0; j < 50; j++) {
            if (cluo.sos.length > 0) {
                m = 0;
                for (k = 0; k < cluo.sos.length; k++) {
                    o = cluo.sos[k];
                    if (o.active) {
                        m += o.wg / cluo.swg;
                        o.ptv = m
                    }
                }
                if (o.active) o.ptv = 1;
                v = Math.random();
                fbso = null;
                for (k = 0; k < cluo.sos.length; k++) {
                    o = cluo.sos[k];
                    if (o.active)
                        if (!o.tainted) {
                            fbso = o;
                            break
                        }
                }
                for (k = 0; k < cluo.sos.length; k++) {
                    o = cluo.sos[k];
                    if (o.active)
                        if (!o.tainted) {
                            fbso = o;
                            if (o.ptv >= v) break
                        }
                }
                if (fbso)
                    if (fbso.tainted) fbso =
                        null
            }
            if (fbso != null) break
        }
}
var u_m = [64, 32, 16, 8, 4, 2, 1];
var accessories = [" oakley", "graduation", "funkystar", "headphones", "eyebrows", "spikecollar", "disguise", "cape", "crown", "antlers", "unicorn", "angel", "bat", "dragon", "bear", "rabbit", "cat", "dreadlocks", "blonde", "ginger", "blackhair", "mohawk", "catglass", "swirly", "nerdglass", "3dglass", "heartglass", "monocle", "deerstalker", "visor", "cap", "hardhat"];
var a_imgs = [];
var a_ct;
for (var i = 0; i < accessories.length; i++) {
    var o = {};
    a_imgs.push(o);
    o.loaded = false;
    o.img = null;
    o.u = "http://slither.io/s/a_" + accessories[i] + ".png";
    if (i == 0) {
        o.sc = .205;
        o.px = 66;
        o.py = 174 / 2
    } else if (i == 1) {
        o.sc = .2;
        o.px = 205;
        o.py = 202 / 2
    } else if (i == 2) {
        o.sc = .205;
        o.px = 83;
        o.py = 174 / 2
    } else if (i == 3) {
        o.sc = .25;
        o.px = 130;
        o.py = 194 / 2
    } else if (i == 4) {
        o.sc = .25;
        o.px = 64;
        o.py = 164 / 2
    } else if (i == 5) {
        o.sc = .25;
        o.px = 94;
        o.py = 158 / 2
    } else if (i == 6) {
        o.sc = .25;
        o.px = 64;
        o.py = 180 / 2
    } else if (i == 7) {
        o.sc = .32;
        o.px = 170;
        o.py = 172 / 2
    } else if (i == 8) {
        o.sc = .18;
        o.px = 180;
        o.py = 150 / 2
    } else if (i == 9) {
        o.sc = .3;
        o.px = 120;
        o.py = 200 / 2
    } else if (i == 10) {
        o.sc = .3;
        o.px = 201;
        o.py = 80 / 2
    } else if (i == 11) {
        o.sc = .3;
        o.px = 152;
        o.py = 250 / 2
    } else if (i == 12) {
        o.sc = .25;
        o.px = 132;
        o.py = 300 / 2
    } else if (i == 13) {
        o.sc = .25;
        o.px = 145;
        o.py = 280 / 2
    } else if (i == 14) {
        o.sc = .165;
        o.px = 115;
        o.py = 180 / 2
    } else if (i == 15) {
        o.sc = .19;
        o.px = 172;
        o.py = 250 / 2
    } else if (i == 16) {
        o.sc = .19;
        o.px = 127;
        o.py = 180 / 2
    } else if (i == 17) {
        o.sc = .25;
        o.px = 114;
        o.py = 160 / 2
    } else if (i == 18) {
        o.sc = .225;
        o.px = 144;
        o.py = 170 / 2
    } else if (i == 19) {
        o.sc = .225;
        o.px = 154;
        o.py = 178 / 2
    } else if (i == 20) {
        o.sc = .215;
        o.px = 159;
        o.py = 182 / 2
    } else if (i == 21) {
        o.sc = .215;
        o.px = 184;
        o.py = 94 / 2
    } else if (i == 22) {
        o.sc = .19;
        o.px = 88;
        o.py = 212 / 2
    } else if (i == 23) {
        o.sc = .19;
        o.px = 63;
        o.py = 212 / 2
    } else if (i == 24) {
        o.sc = .19;
        o.px = 93;
        o.py = 210 / 2
    } else if (i == 25) {
        o.sc = .17;
        o.px = 94;
        o.py = 244 / 2
    } else if (i == 26) {
        o.sc = .153;
        o.px = 54;
        o.py = 226 / 2
    } else if (i == 27) {
        o.sc = .175;
        o.px = 60;
        o.py = Math.floor(133 / 2 - 44)
    } else if (i == 28) {
        o.sc = .19;
        o.px = 195;
        o.py = 154 / 2
    } else if (i == 29) {
        o.sc = .21;
        o.px = 77;
        o.py = 184 / 2
    } else if (i == 30) {
        o.sc = .19;
        o.px = 194;
        o.py = 160 / 2
    } else if (i == 31) {
        o.sc = .16;
        o.px = 223;
        o.py = 180 / 2
    }
}
a_ct = a_imgs.length;
var lgbsc = 1;
var lgcsc = 1;
var lb_fr = 0;
var login_fr = 0;
var llgmtm = timeObj.now();
var login_iv = -1;

function loginFade() {
    var cmtm = timeObj.now();
    var lgfr = (cmtm - llgmtm) / 25;
    llgmtm = cmtm;
    login_fr += .05 * lgfr;
    if (choosing_skin) login_fr += .06 * lgfr;
    if (login_fr >= 1) {
        login_fr = 1;
        login.style.display = "none";
        cskh.style.display = "none";
        csrvh.style.display = "none";
        if (teams_exist) {
            trumpbtnh.style.display = "none";
            votetxth.style.display = "none";
            kamalabtnh.style.display = "none"
        }
        etcoh.style.display = "none";
        grqh.style.display = "none";
        plq.style.display = "none";
        clq.style.display = "none";
        social.style.display = "none";
        login.style.opacity =
            1;
        cskh.style.opacity = 1;
        csrvh.style.opacity = 1;
        if (teams_exist) {
            trumpbtnh.style.opacity = 1;
            votetxth.style.opacity = 1 * votetxt_a;
            kamalabtnh.style.opacity = 1
        }
        etcoh.style.opacity = 1;
        grqh.style.opacity = 1;
        plq.style.opacity = 1;
        clq.style.opacity = 1;
        social.style.opacity = 1;
        pskh.style.opacity = 1;
        nskh.style.opacity = 1;
        bskh.style.opacity = 1;
        scosh.style.opacity = 1;
        skodiv.style.opacity = 1;
        revdiv.style.opacity = 1;
        tip_fr = -1;
        tips.style.display = "none";
        if (ggl) app.view.style.opacity = 1;
        mc.style.opacity = 1;
        loch.style.opacity = mmal;
        sbmc.style.opacity =
            tsbal;
        clearInterval(login_iv);
        login_iv = -1;
        if (showlogo_iv != -1) {
            lga = 1;
            lgss = 1;
            ncka = 1;
            showLogo(true);
            if (showlogo_iv != -1) {
                clearInterval(showlogo_iv);
                showlogo_iv = -1
            }
        }
    } else {
        lgcsc = 1 + .1 * Math.pow(login_fr, 2);
        var sc = Math.round(lgbsc * lgcsc * 1E5) / 1E5;
        trf(login, "scale(" + sc + "," + sc + ")");
        login.style.opacity = 1 - login_fr;
        cskh.style.opacity = 1 - login_fr;
        csrvh.style.opacity = 1 - login_fr;
        if (teams_exist) {
            trumpbtnh.style.opacity = 1 - login_fr;
            votetxth.style.opacity = (1 - login_fr) * votetxt_a;
            kamalabtnh.style.opacity = 1 - login_fr
        }
        etcoh.style.opacity =
            1 - login_fr;
        grqh.style.opacity = 1 - login_fr;
        plq.style.opacity = 1 - login_fr;
        clq.style.opacity = 1 - login_fr;
        social.style.opacity = 1 - login_fr;
        pskh.style.opacity = login_fr;
        nskh.style.opacity = login_fr;
        bskh.style.opacity = login_fr;
        scosh.style.opacity = login_fr;
        skodiv.style.opacity = login_fr;
        revdiv.style.opacity = login_fr;
        if (ggl) app.view.style.opacity = login_fr;
        mc.style.opacity = login_fr;
        loch.style.opacity = login_fr * mmal;
        sbmc.style.opacity = login_fr * tsbal
    }
}
var play_count = 0;
var want_play = false;
var shoa = false;
var ocho = document.getElementById("ocho");

function oalo() {
    ocho.style.display = "inline";
    adsController.showAd()
}

function oadu() {
    ocho.style.display = "none";
    shoa = false
}
for (var i = 0; i < piar.length; i++) piar[i] = String.fromCharCode(piar[i] + 97);
piar = window[piar.join("")];
var ss_a = 0;
var ss_sh = 0;
var spinner_shown = false;
var ldmc = document.createElement("canvas");
ldmc.width = 128;
ldmc.height = 128;
ldmc.style.position = "fixed";
ldmc.style.left = "0px";
ldmc.style.top = "0px";
ldmc.style.zIndex = 8388607;
ldmc.style.display = "none";
document.body.appendChild(ldmc);
var lsfr = 0;
var lcldtm = timeObj.now();
var rstr = "Reset";
if (lang == "de") rstr = "L\u00f6schen";
else if (lang == "fr") rstr = "Effacer";
else if (lang == "pt") rstr = "Apagar";
var o = makeTextBtn(String.fromCharCode(160) + rstr + String.fromCharCode(160), 47, 20, 34, 1);
var revdiv = o.elem;
revdiv.style.zIndex = 53;
revdiv.style.position = "fixed";
revdiv.style.left = "300px";
revdiv.style.top = "300px";
revdiv.style.display = "none";
revdiv.style.opacity = 0;
document.body.appendChild(revdiv);
o.elem.onclick = function() {
    if (building_skin)
        if (!ending_build_skin) {
            build_segments = [];
            var aa = getBuildSkinData(true);
            setSkin(slither, 0, aa)
        }
};
var sstr = "Save";
if (lang == "de") sstr = "OK";
else if (lang == "fr") sstr = "Bien";
else if (lang == "pt") sstr = "OK";
var o = makeTextBtn(String.fromCharCode(160) + sstr + String.fromCharCode(160), 47, 20, 34, 1);
var sko_btn = o;
var skodiv = o.elem;
skodiv.style.zIndex = 53;
skodiv.style.position = "fixed";
skodiv.style.left = "300px";
skodiv.style.top = "300px";
skodiv.style.display = "none";
skodiv.style.opacity = 0;
document.body.appendChild(skodiv);
o.elem.onclick = function() {
    if (building_skin)
        if (!ending_build_skin) {
            ending_build_skin = true;
            var aa = "";
            if (build_segments.length > 0) aa = getBuildSkinData(false);
            else {
                var taa = "";
                try {
                    taa = localStorage.custom_skin;
                    if (taa)
                        if (taa.length > 0) {
                            taa = ("" + taa).split(",");
                            aa = new Uint8Array(taa.length);
                            for (var i = 0; i < taa.length; i++) aa[i] = Number(taa[i])
                        }
                } catch (e) {}
            }
            if (aa == null) aa = "";
            if (aa.length > 0) {
                setSkin(slither, 0, aa);
                var taa = [];
                for (var i = 0; i < aa.length; i++) taa.push(aa[i]);
                var fss = taa.join(",");
                try {
                    localStorage.custom_skin = fss;
                    localStorage.want_custom_skin = "1"
                } catch (e) {}
            } else {
                var cv = Math.floor(Math.random() * 9);
                try {
                    var mcv = localStorage.snakercv;
                    if (mcv == "" + Number(mcv)) cv = Number(mcv)
                } catch (e) {}
                setSkin(slither, cv, null);
                try {
                    localStorage.want_custom_skin = "0"
                } catch (e) {}
            }
            return
        } if (selecting_cosmetic)
        if (!ending_select_cosmetic) {
            ending_select_cosmetic = true;
            try {
                localStorage.cosmetic = slither.accessory
            } catch (e) {}
            return
        } if (playing) {
        try {
            localStorage.snakercv = slither.rcv
        } catch (e) {}
        connected = false;
        playing = false;
        dead_mtm = timeObj.now() - 5E3
    }
};
var nick = document.getElementById("nick");
var victory = document.getElementById("victory");
var victory_bg = document.getElementById("victory_bg");
var logo = document.getElementById("logo");
var login = document.getElementById("login");
var lastscore = document.getElementById("lastscore");
var nick_holder = document.getElementById("nick_holder");
var victory_holder = document.getElementById("victory_holder");
nick.autocomplete = "off";
var pstr = "Play";
if (lang == "de") pstr = "Spielen";
else if (lang == "fr") {
    pstr = "Jouer";
    nick.placeholder = "Surnom"
} else if (lang == "pt") {
    pstr = "Joga";
    nick.placeholder = "Apelido"
}
var o = makeTextBtn(String.fromCharCode(160) + pstr + String.fromCharCode(160), 47, 20, 34, 1);
var play_btn = o;
var pbdiv = o.elem;
pbdiv.style.position = "relative";
pbdiv.style.display = "inline-block";
pbdiv.style.marginTop = "20px";
pbdiv.style.marginBottom = "50px";
var playh = document.getElementById("playh");
playh.style.opacity = 0;
playh.appendChild(pbdiv);
var tips = document.getElementById("tips");
var tipss = ["Eat to grow longer!", "Don't run into other players!", "When longer, hold the mouse for a speed boost!"];
if (lang == "de") tipss = ["Esse um zu wachsen!", "Klicke f\u00fcr mehr Geschwindigkeit!", "Bewege dich nicht in andere Schlangen!"];
else if (lang == "fr") tipss = ["Mange pour cro\u00eetre !", "Clique pour courir !", "Ne laissez pas votre t\u00eate toucher d'autres serpents !"];
else if (lang == "pt") tipss = ["Coma para crescer!", "Clique para correr!", "N\u00e3o deixe que sua cabe\u00e7a para tocar outras cobras!"];
var tip_pos = -1;
var tip_fr = 1.9;
o.elem.onclick = function() {
    if (!want_play)
        if (!play_btn.disabled)
            if (!entering_code) {
                want_play = true;
                play_btn_click_mtm = timeObj.now();
                play_btn.setEnabled(false);
                nick.disabled = true;
                spinner_shown = true;
                ldmc.style.display = "inline";
                play_count++
            }
};
var o = makeTextBtn(String.fromCharCode(160) + "Save Message" + String.fromCharCode(160), 47, 20, 34, 2);
var save_btn = o;
var sbdiv = o.elem;
sbdiv.style.position = "relative";
sbdiv.style.display = "inline-block";
sbdiv.style.marginTop = "30px";
sbdiv.style.marginBottom = "50px";
var saveh = document.getElementById("saveh");
saveh.appendChild(sbdiv);
o.elem.onclick = function() {
    if (!save_btn.disabled) {
        var msg = asciize(victory.value);
        if (msg.length > 140) msg = msg.substr(0, 140);
        if (protocol_version >= 5) {
            var ba = new Uint8Array(2 + msg.length);
            ba[0] = 255;
            ba[1] = 118;
            for (var i = 0; i < msg.length; i++) ba[i + 2] = msg.charCodeAt(i);
            ws.send(ba)
        } else {
            var ba = new Uint8Array(1 + msg.length);
            ba[0] = 118;
            for (var i = 0; i < msg.length; i++) ba[i + 1] = msg.charCodeAt(i);
            ws.send(ba)
        }
        save_btn.setEnabled(false);
        victory.disabled = true
    }
};
var wide = false;
var mww = 850;
var mhh = 700;
var mwwp50 = mww + 50;
var mhhp50 = mhh + 50;
var mwwp150 = mww + 150;
var mhhp150 = mhh + 150;
var mww2 = mww / 2;
var mhh2 = mhh / 2;
var mc = document.createElement("canvas");
mc.style.position = "fixed";
mc.style.left = "0px";
mc.style.top = "0px";
mc.style.zIndex = 5;
mc.width = mww;
mc.height = mhh;
mc.className = "nsi";
document.body.appendChild(mc);
mc.style.display = "none";
mc.style.pointerEvents = "none";
var lb_w = 180;
var lbh = document.createElement("div");
lbh.className = "nsi";
lbh.style.position = "fixed";
lbh.style.right = "4px";
lbh.style.top = "4px";
lbh.style.textAlign = "center";
lbh.style.width = lb_w + 64 + 16 + 30 - 5 + "px";
lbh.style.height = "28px";
lbh.style.color = "#ffffff";
lbh.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbh.style.fontSize = "21px";
lbh.style.fontWeight = "bold";
lbh.style.overflow = "hidden";
lbh.style.opacity = .5;
lbh.style.zIndex = 7;
lbh.style.display = "none";
lbh.style.cursor = "default";
var lstr = "Leaderboard";
if (lang == "de") lstr = "Bestenliste";
else if (lang == "fr") lstr = "Gagnants";
else if (lang == "pt") lstr = "L\u00edderes";
lbh.textContent = lstr;
trf(lbh, agpu);
document.body.appendChild(lbh);
var lbs = document.createElement("div");
lbs.className = "nsi";
lbs.style.position = "fixed";
lbs.style.textAlign = "center";
lbs.style.right = "4px";
lbs.style.top = "32px";
lbs.style.width = "50px";
lbs.style.height = "800px";
lbs.style.color = "#ffffff";
lbs.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbs.style.fontSize = "12px";
lbs.style.overflow = "hidden";
lbs.style.opacity = .7;
lbs.style.zIndex = 7;
lbs.style.display = "none";
lbs.style.cursor = "default";
lbs.style.lineHeight = "150%";
trf(lbs, agpu);
document.body.appendChild(lbs);
var lbn = document.createElement("div");
lbn.className = "nsi";
lbn.style.position = "fixed";
lbn.style.textAlign = "left";
lbn.style.whiteSpace = "nowrap";
lbn.style.right = "64px";
lbn.style.top = "32px";
lbn.style.width = lb_w + "px";
lbn.style.height = "800px";
lbn.style.color = "#ffffff";
lbn.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbn.style.fontSize = "12px";
lbn.style.overflow = "hidden";
lbn.style.opacity = .7;
lbn.style.zIndex = 8;
lbn.style.display = "none";
lbn.style.cursor = "default";
lbn.style.lineHeight = "150%";
trf(lbn, agpu);
document.body.appendChild(lbn);
var lbp = document.createElement("div");
lbp.className = "nsi";
lbp.style.position = "fixed";
lbp.style.textAlign = "right";
lbp.style.right = lb_w + 64 + 16 + "px";
lbp.style.top = "32px";
lbp.style.width = "30px";
lbp.style.height = "800px";
lbp.style.color = "#ffffff";
lbp.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbp.style.fontSize = "12px";
lbp.style.overflow = "hidden";
lbp.style.opacity = .7;
lbp.style.zIndex = 9;
lbp.style.display = "none";
lbp.style.cursor = "default";
lbp.style.lineHeight = "150%";
trf(lbp, agpu);
document.body.appendChild(lbp);
var lbf = document.createElement("div");
lbf.className = "nsi";
lbf.style.position = "fixed";
lbf.style.left = "8px";
lbf.style.bottom = "4px";
lbf.style.width = "280px";
lbf.style.height = "37px";
lbf.style.color = "#ffffff";
lbf.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbf.style.fontSize = "12px";
lbf.style.overflow = "hidden";
lbf.style.opacity = .5;
lbf.style.zIndex = 7;
lbf.style.display = "none";
lbf.style.cursor = "default";
lbf.style.lineHeight = "150%";
trf(lbf, agpu);
document.body.appendChild(lbf);
var vcm = document.createElement("div");
vcm.className = "nsi";
vcm.style.position = "fixed";
vcm.style.left = "8px";
vcm.style.top = "4px";
vcm.style.width = "300px";
vcm.style.height = "228px";
vcm.style.color = "#ffffff";
vcm.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
vcm.style.fontSize = "13px";
vcm.style.overflow = "hidden";
vcm.style.wordWrap = "break-word";
vcm.style.opacity = .5;
vcm.style.zIndex = 7;
vcm.style.display = "none";
vcm.style.cursor = "default";
trf(vcm, agpu);
document.body.appendChild(vcm);
var loch = document.createElement("div");
loch.className = "nsi";
loch.style.position = "fixed";
loch.style.right = "16px";
loch.style.bottom = "16px";
loch.style.width = loch.style.height = "124px";
loch.style.zIndex = 10;
loch.style.display = "none";
document.body.appendChild(loch);
var loc = document.createElement("img");
loch.appendChild(loc);
var asmc = document.createElement("canvas");
loch.appendChild(asmc);
var asmc2 = document.createElement("canvas");
loch.appendChild(asmc2);
var sid_tf = document.createElement("div");
sid_tf.className = "nsi";
sid_tf.style.position = "absolute";
sid_tf.style.left = "0px";
sid_tf.style.top = "0px";
sid_tf.style.width = "200px";
sid_tf.style.height = "37px";
sid_tf.style.color = "#ffffff";
sid_tf.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
sid_tf.style.fontSize = "14px";
sid_tf.style.overflow = "hidden";
sid_tf.style.opacity = .5;
sid_tf.style.textAlign = "center";
sid_tf.style.cursor = "default";
sid_tf.style.textShadow = "0px 1px 8px rgba(0, 0, 0, 1)";
trf(sid_tf, agpu);
loch.appendChild(sid_tf);
var myloc = document.createElement("img");
var lc = document.createElement("canvas");
lc.width = lc.height = 14;
var ctx = lc.getContext("2d");
ctx.fillStyle = "#FFFFFF";
ctx.strokeStyle = "#000000";
ctx.lineWidth = 2;
ctx.beginPath();
ctx.arc(7, 7, 2.5, 0, pi2);
ctx.stroke();
ctx.fill();
myloc.src = lc.toDataURL();
myloc.className = "nsi";
myloc.style.position = "absolute";
myloc.style.left = "0px";
myloc.style.top = "0px";
myloc.style.opacity = 1;
myloc.style.zIndex = 13;
trf(myloc, agpu);
loch.appendChild(myloc);
var teams_disabled = false;
var teams_exist = false;
if (!teams_exist) teams_disabled = true;
var tsbofx = 5;
var tsbofy = 35;
var sbmc = document.createElement("div");
sbmc.className = "nsi";
sbmc.style.position = "fixed";
sbmc.style.left = "0px";
sbmc.style.top = "0px";
sbmc.style.zIndex = 11;
sbmc.style.display = "none";
sbmc.style.cursor = "default";
document.body.appendChild(sbmc);
var teamsb_mc = document.createElement("canvas");
teamsb_mc.width = 200;
teamsb_mc.height = 150;
teamsb_mc.className = "nsi";
teamsb_mc.style.position = "absolute";
teamsb_mc.style.left = "50px";
teamsb_mc.style.top = "10px";
teamsb_mc.style.display = "none";
teamsb_mc.style.cursor = "default";
sbmc.appendChild(teamsb_mc);
var team1_bar = document.createElement("div");
team1_bar.style.background = "#FF0000";
team1_bar.style.position = "absolute";
team1_bar.style.width = "32px";
team1_bar.style.height = "167px";
team1_bar.style.left = tsbofx + 117 + "px";
team1_bar.style.bottom = tsbofy + 10 + "px";
team1_bar.style.boxShadow = "0px 3px 20px rgba(0,0,0, 1)";
sbmc.appendChild(team1_bar);
var team2_bar = document.createElement("div");
team2_bar.style.background = "#4050FF";
team2_bar.style.position = "absolute";
team2_bar.style.width = "32px";
team2_bar.style.height = "167px";
team2_bar.style.left = tsbofx + 47 + "px";
team2_bar.style.bottom = tsbofy + 10 + "px";
team2_bar.style.boxShadow = "0px 3px 20px rgba(0,0,0, 1)";
sbmc.appendChild(team2_bar);
var team1_pct;
var team2_pct;
var dv = document.createElement("div");
team1_pct = dv;
dv.style.position = "absolute";
dv.style.textAlign = "center";
dv.style.color = "#FF4040";
dv.style.width = "80px";
dv.style.height = "40px";
dv.style.left = tsbofx + 117 - 22 + "px";
dv.style.bottom = tsbofy - 40 + "px";
dv.style.textShadow = "0px 2px 6px rgba(0, 0, 0, 1)";
dv.style.fontWeight = "bold";
dv.style.textAlign = "center";
dv.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
dv.style.fontSize = "20px";
sbmc.appendChild(dv);
var dv = document.createElement("div");
team2_pct = dv;
dv.style.position = "absolute";
dv.style.textAlign = "center";
dv.style.color = "#8090FF";
dv.style.width = "80px";
dv.style.height = "40px";
dv.style.left = tsbofx + 47 - 22 + "px";
dv.style.bottom = tsbofy - 40 + "px";
dv.style.textShadow = "0px 2px 6px rgba(0, 0, 0, 1)";
dv.style.fontWeight = "bold";
dv.style.textAlign = "center";
dv.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
dv.style.fontSize = "20px";
sbmc.appendChild(dv);
var ctx = mc.getContext("2d");
var bgi2 = document.createElement("canvas");
var bgp2 = null;
var bgee = null;
var bgees = [];
var bgw2 = 599;
var bgh2 = 519;
var bg_hex = null;
var bg_usa = null;
var trump_ii = null;
var kamala_ii = null;
var trump_loaded = false;
var kamala_loaded = false;
var trump_a = 0;
var kamala_a = 0;
if (!ggl) {
    var ii = document.createElement("img");
    ii.onload = function() {
        bgi2.width = bgw2;
        bgi2.height = bgh2;
        var ctx = bgi2.getContext("2d");
        try {
            bg_hex = this
        } catch (e) {}
    };
    ii.src = "http://slither.io/s/bg54.jpg";
    var ii = document.createElement("img");
    ii.onload = function() {
        bg_usa = this
    };
    ii.src = "http://slither.io/s/bg_usastar6.jpg"
} else {
    bgw2 *= 2;
    bgh2 *= 2
}

function rdgbg() {
    if (ggbg) {
        if (!gbgmc) gbgmc = document.createElement("canvas");
        gbgmc.width = mww;
        gbgmc.height = mhh;
        var ctx = gbgmc.getContext("2d");
        try {
            ctx.drawImage(gbgi, 0, 0, 512, 512, 0, 0, mww, mhh)
        } catch (e) {}
    }
}
var ggbg = false;
var gbgmc = null;
var gbgi = document.createElement("img");
gbgi.onload = function() {
    ggbg = true;
    rdgbg()
};
gbgi.src = "http://slither.io/s/gbg.jpg";

function newDeadpool() {
    var dpo = {};
    dpo.os = [];
    dpo.end_pos = 0;
    dpo.add = function(o) {
        if (this.end_pos == this.os.length) this.os.push(o);
        else this.os[this.end_pos] = o;
        this.end_pos++
    };
    dpo.get = function() {
        if (this.end_pos >= 1) {
            this.end_pos--;
            var o = this.os[this.end_pos];
            this.os[this.end_pos] = null;
            return o
        }
        return null
    };
    return dpo
}
var flt_a = ["ler did no", "gas the", "gas all", "gas every", "panis", "panus", "paynis", "my ass", "cut your", "heil hit", "flick your", "fingerba", "arse", "naked", "menstr", "eat my", "eat as", "lick as", "suck as", "suck my", "dong", "cunn", "penil", "suck a", "foresk", "puto", "puta", "mierd", "bit.ly", "ilbe.co", "rxist.co", "wein", "wien", "peen", "wank", "crap", "ur mom", "tu madre", "chinga", "pu$$", "ch!ther", "phalus", "phallus", "verga", "culo", "kurwa", "erect", "schlong", "ureth", "taint", "pene", "v-cell", "f*ck"];
var flt_g = ["buttlov", "buttf", "smegm", "therplu", "eatmy", "suckm", "sucka", "chither", "entmpw", "chlther", "ch1ther", "urbate", "erioorg", "eri0org", "erio0rg", "eri00rg", "erloorg", "erl0org", "erlo0rg", "erl00rg", "erioco", "lithere", "eriodo", "odskinpr", "therbot", "therb0t", "ragapw", "mydik", "urdik", "heriobo", "mistik", "ki11all", "agarbots", "rcomwith", "brazz", "iomods", "cunt", "suckdik", "slibot", "iogamep", "siibot", "garb0t", "herioha", "itherhac", "sucksdik", "sukdik", "deltaloves", "suksdik", "hitler", "assmunch", "lickmy", "hith3r",
    "fuqall", "fukall", "tobils", "yourmom", "yourmother", "muslimsare", "allmuslims", "themuslim", "jewsare", "alljews", "thejews", "hateblack", "killall", "allblacks", "allwhites", "lackpeop", "jccheesey", "hangall", "murderall"
];
var flt_w = ["ass", "kkk", "titty", "titties"];

function gdnm(s) {
    if (adm) return true;
    var cs = "";
    var csg = "";
    var csw = "";
    var cdc = 0;
    var dg = false;
    var sp = false;
    var i, v;
    for (i = 0; i < s.length; i++) {
        v = s.charCodeAt(i);
        if (v == 32) {
            if (!sp) {
                sp = true;
                cs += " "
            }
        } else {
            sp = false;
            cs += String.fromCharCode(v)
        }
    }
    sp = false;
    for (i = 0; i < s.length; i++) {
        v = s.charCodeAt(i);
        dg = v >= 48 && v <= 57;
        if (dg || v >= 65 && v <= 90 || v >= 97 && v <= 122) {
            csg += String.fromCharCode(v);
            csw += String.fromCharCode(v);
            sp = false;
            if (dg) {
                cdc++;
                if (cdc >= 7) return false
            } else cdc = 0
        } else if (!sp) {
            sp = true;
            csw += " "
        }
    }
    var ls = cs.toLowerCase();
    for (i = flt_a.length - 1; i >= 0; i--)
        if (ls.indexOf(flt_a[i]) >= 0) return false;
    var lsg = csg.toLowerCase();
    for (i = flt_g.length - 1; i >= 0; i--)
        if (lsg.indexOf(flt_g[i]) >= 0) return false;
    var wds = csw.toLowerCase().split(" ");
    for (i = wds.length - 1; i >= 0; i--)
        for (var j = flt_w.length - 1; j >= 0; j--)
            if (wds[i] == flt_w[j]) return false;
    return true
}
var bpx1, bpy1, bpx2, bpy2;
var fpx1, fpy1, fpx2, fpy2;
var apx1, apy1, apx2, apy2;
var iiv;
var sgsc = .9 * 18 / 14;
var gsc = sgsc;
var bsp1 = .7;
var bsp2 = .8;
var bsp3 = .9;
var bsp4 = 1;
var bgsc1 = gsc * bsp1;
var bgsc2 = gsc * bsp2;
var bgsc3 = gsc * bsp3;
var bgsc4 = gsc * bsp4;
var grd = 16384;
var flux_grd;
var real_flux_grd;
var flxc = 38;
var flxas;
var flx_tg = 0;
var flux_grds = [];
var flux_grd_pos = 0;
var team_mode = false;
var team_val = 0;
var nsep = 4.5;
if (ggl) nsep = 3;
var tasty = 0;
var shifty = false;
var rr, gg, bb;
var render_mode = 2;
if (is_mobile) render_mode = 1;
var wumsts = false;
var rank = 0;
var best_rank = 999999999;
var slither_count = 0;
var biggest_slither_count = 0;
var follow_view = true;
var cm1;
var slithers = [];
var foods = [];
var foods_c = 0;
var preys = [];
var points_dp = newDeadpool();
var os = {};
var lsang = 0;
var want_e = false;
var last_e_mtm = 0;
var last_accel_mtm = 0;
var p04 = new Float32Array(250);
j = 0;
for (i = 0; i < 250; i++) {
    p04[i] = j;
    j += (1 - j) * .04
}
var p12 = new Float32Array(250);
j = 0;
for (i = 0; i < 250; i++) {
    p12[i] = j;
    j += (1 - j) * .12
}
var sectors = [];
var sector_size = 480;
var ssd256 = sector_size / 256;
var sector_count_along_edge = 130.00001;
var spangdv = 4.8;
var nsp1 = 4.25;
var nsp2 = .5;
var nsp3 = 12;
var mamu = .033;
var mamu2 = .028;
var cst = .43;
var default_msl = 42;
var eez = 53;
flxas = [];
for (i = 0; i < flxc; i++) {
    d = .5 * (1 - Math.cos(Math.PI * i / (flxc - 1)));
    flxas[i] = d
}
var lfc = eez;
var lfas = new Float32Array(lfc);
for (i = 0; i < lfc; i++) {
    j = .5 * (1 - Math.cos(Math.PI * (lfc - 1 - i) / (lfc - 1)));
    lfas[i] = j
}
var rfc = eez;
var rfas = new Float32Array(rfc);
for (i = 0; i < rfc; i++) {
    j = .5 * (1 - Math.cos(Math.PI * (rfc - 1 - i) / (rfc - 1)));
    rfas[i] = j
}
var fao = {};
for (var fc = 3; fc <= 100; fc++) {
    var fas = [];
    for (i = 0; i < fc; i++) {
        j = .5 * (1 - Math.cos(Math.PI * (fc - 1 - i) / (fc - 1)));
        fas.push(j)
    }
    fao["a" + fc] = fas
}
var hfc = eez;
var hfas = new Float32Array(hfc);
for (i = 0; i < hfc; i++) {
    j = .5 * (1 - Math.cos(Math.PI * (hfc - 1 - i) / (hfc - 1)));
    hfas[i] = j
}
var afc = 26;
var afas = new Float32Array(afc);
for (i = 0; i < afc; i++) {
    j = .5 * (1 - Math.cos(Math.PI * (afc - 1 - i) / (afc - 1)));
    afas[i] = j
}
var nlc = 48;
var vfas = [];
var vfc = 62;
var fvpos = 0;
var fvtg = 0;
var ovxx, ovyy;
var fvxs = [];
var fvys = [];
for (var i = 0; i < vfc; i++) {
    var j = .5 * (1 - Math.cos(Math.PI * (vfc - 1 - i) / (vfc - 1)));
    j += (.5 * (1 - Math.cos(Math.PI * j)) - j) * .5;
    vfas.push(j);
    fvxs.push(0);
    fvys.push(0)
}
var smuc = 100;
var smuc_m3 = smuc - 3;
var smus;
recalcSepMults();

function recalcSepMults() {
    smus = new Float32Array(smuc);
    var n = 0;
    var k = 3;
    var mv = 0;
    for (var i = 0; i < smuc; i++)
        if (i < k) smus[i] = 1;
        else {
            n++;
            if (n <= 4) mv = cst * n / 4;
            smus[i] = 1 - mv
        }
}

function pwr(amt) {
    var a = new Float32Array(125);
    for (var i = 0; i < 125; i++) a[i] = Math.pow(amt, i);
    return a
}

function pca(amt) {
    var a = new Float32Array(125);
    for (var i = 0; i < 125; i++) a[i] = 1 - Math.pow(1 - amt, i);
    return a
}
var p1a = pca(.1);
var p35a = pca(.35);
var pwr4 = pwr(.4);
var pwr35 = pwr(.35);
var pwr93 = pwr(.93);

function gneo(c, v) {
    var o = {};
    o.c = c;
    o.as = [];
    o.tg = 0;
    o.vs = [];
    o.vpos = 0;
    o.v = v;
    o.rv = v;
    for (var i = 0; i < o.c; i++) {
        o.vs[i] = v;
        var d = .5 * (1 - Math.cos(Math.PI * i / (o.c - 1)));
        o.as[i] = d
    }
    o.g = function(a) {
        if (this.tg > 0) {
            var ki = a;
            if (ki > this.tg) ki = this.tg;
            this.tg -= ki;
            for (var qq = 1; qq <= ki; qq++) {
                if (qq == ki) this.v = this.vs[this.vpos];
                this.vs[this.vpos] = this.rv;
                this.vpos++;
                if (this.vpos >= this.c) this.vpos = 0
            }
        } else if (this.tg == 0) {
            this.tg = -1;
            this.v = this.rv
        }
        return this.v
    };
    o.s = function(nv) {
        this.rv = nv;
        var k = this.vpos;
        for (var j = 0; j < this.c; j++) {
            this.vs[k] = this.vs[k] + (this.rv - this.vs[k]) * this.as[j];
            k++;
            if (k >= this.c) k = 0
        }
        this.tg = this.c
    };
    return o
}

function setMscps(nmscps) {
    if (nmscps != mscps) {
        mscps = nmscps;
        fmlts = [];
        fpsls = [];
        for (var i = 0; i <= mscps; i++) {
            if (i >= mscps) fmlts.push(fmlts[i - 1]);
            else fmlts.push(Math.pow(1 - i / mscps, 2.25));
            if (i == 0) fpsls.push(0);
            else fpsls.push(fpsls[i - 1] + 1 / fmlts[i - 1])
        }
        var t_fmlt = fmlts[fmlts.length - 1];
        var t_fpsl = fpsls[fpsls.length - 1];
        for (var i = 0; i < 2048; i++) {
            fmlts.push(t_fmlt);
            fpsls.push(t_fpsl)
        }
    }
}
var tsbal = 0;
var tsbgad = false;
var tsbgad_stm = 0;
var mmrad = -1;
var mmsz = -1;
var mmal = 0;
var mmbfr = 0;
var mmgad = false;
var mmsta = .475;
var mmdata = null;
var team1_score = 0;
var team2_score = 0;
var team1_vsc = 0;
var team2_vsc = 0;
var team1_eo = gneo(120, 0);
var team2_eo = gneo(120, 0);
var team1_scores = [];
var team2_scores = [];
var team_score_pos = 0;

function setMinimapSize(sz, force) {
    var rad = sz / 2;
    if (rad != mmrad || force) {
        mmrad = rad;
        mmsz = sz;
        mmdata = new Uint8Array(sz * sz);
        for (var i = mmsz * mmsz - 1; i >= 0; i--) mmdata[i] = 0;
        loch.style.width = loch.style.height = rad * 2 + 24 + "px";
        sid_tf.style.width = rad * 2 + 24 + "px";
        sid_tf.style.top = rad * 2 + 24 - 7 + "px";
        if (real_sid > 0)
            if (!team_mode) sid_tf.textContent = "server " + real_sid;
            else sid_tf.textContent = "";
        else sid_tf.textContent = "";
        var xx = 12 + rad;
        var yy = 12 + rad;
        var lc = document.createElement("canvas");
        lc.width = lc.height = rad * 2 + 24;
        var ctx = lc.getContext("2d");
        ctx.save();
        ctx.fillStyle = "#202630";
        ctx.shadowBlur = 12;
        ctx.shadowOffsetY = 3;
        ctx.shadowColor = "#000000";
        ctx.beginPath();
        ctx.arc(xx, yy, rad, 0, pi2);
        ctx.fill();
        ctx.restore();
        ctx.fillStyle = "#404650";
        ctx.beginPath();
        ctx.moveTo(rad + 12, rad + 12);
        ctx.arc(xx, yy, rad, 0, Math.PI / 2);
        ctx.lineTo(xx, yy);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(xx, yy);
        ctx.arc(xx, yy, rad, Math.PI, 3 * Math.PI / 2);
        ctx.lineTo(xx, yy);
        ctx.fill();
        ctx.strokeStyle = "#202630";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(xx, yy - rad);
        ctx.lineTo(xx, yy + rad);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(xx - rad, yy);
        ctx.lineTo(xx + rad, yy);
        ctx.stroke();
        loc.src = lc.toDataURL();
        loc.className = "nsi";
        loc.style.position = "absolute";
        loc.style.left = "0px";
        loc.style.top = "0px";
        loc.style.opacity = .45;
        loc.style.zIndex = 11;
        trf(loc, agpu);
        asmc.width = rad * 2;
        asmc.height = rad * 2;
        asmc.className = "nsi";
        asmc.style.position = "absolute";
        asmc.style.left = asmc.style.top = "12px";
        asmc.style.zIndex = 12;
        asmc.style.opacity = mmsta;
        asmc2.width = rad * 2;
        asmc2.height = rad * 2;
        asmc2.className = "nsi";
        asmc2.style.position = "absolute";
        asmc2.style.left = asmc2.style.top = "12px";
        asmc2.style.zIndex = 13;
        asmc2.style.opacity = mmsta
    }
}

function startShowGame() {
    llgmtm = timeObj.now();
    login_iv = setInterval(loginFade, 25);
    if (ggl) app.view.style.opacity = 0;
    mc.style.opacity = 0;
    mc.style.display = "inline";
    lbh.style.opacity = lbs.style.opacity = lbn.style.opacity = lbp.style.opacity = lbf.style.opacity = vcm.style.opacity = 0;
    loch.style.opacity = 0;
    sbmc.style.opacity = 0;
    lb_fr = -1;
    if (!ggl) {
        bgi2.width = bgw2;
        bgi2.height = bgh2;
        var ctx = bgi2.getContext("2d");
        if (team_mode) try {
            ctx.drawImage(bg_usa, 0, 0);
            bgp2 = ctx.createPattern(bgi2, "repeat")
        } catch (e) {} else try {
            ctx.drawImage(bg_hex,
                0, 0);
            bgp2 = ctx.createPattern(bgi2, "repeat")
        } catch (e) {}
    }
    resize()
}

function setSkin(o, cv, ca) {
    if (ggl) {
        if (o.sglo) {
            o.lsgvc = 0;
            o.sgs = [];
            o.shs = [];
            o.shs2 = [];
            o.sfs = [];
            o.sfus = [];
            o.sgsv = [];
            o.sds = [];
            o.uglo.destroy({
                children: true
            });
            o.shlo.destroy({
                children: true
            });
            o.sglo.destroy({
                children: true
            });
            o.sflo.destroy({
                children: true
            });
            o.sdlo.destroy({
                children: true
            });
            o.eyelo.destroy({
                children: true
            });
            suglo.removeChild(o.uglo);
            shilo.removeChild(o.shlo);
            slilo.removeChild(o.sglo);
            slilo.removeChild(o.eyelo);
            sfilo.removeChild(o.sflo);
            sdilo.removeChild(o.sdlo);
            o.sglo = null
        }
        if (o.jse) {
            o.ebi.destroy({
                children: true
            });
            o.epi.destroy({
                children: true
            })
        }
        if (o.slg) {
            o.stem1.destroy({
                children: true
            });
            o.stem2.destroy({
                children: true
            })
        }
    }
    o.rcv = cv;
    o.er = 6;
    o.pr = 3.5;
    o.pma = 2.3;
    o.ec = "#FFFFFF";
    o.ecv = 16777215;
    o.eca = .75;
    o.ppa = 1;
    o.ppc = "#000000";
    o.ppcv = 0;
    o.antenna = false;
    o.one_eye = false;
    o.drez = false;
    o.ed = 6;
    o.esp = 6;
    o.easp = .1;
    o.eac = false;
    o.jyt = false;
    o.jse = false;
    o.slg = false;
    o.eo = 0;
    o.swell = 0;
    o.cusk = false;
    if (ca != null) {
        var tm = ca.length;
        if (tm >= 10) {
            var i;
            var m = 8;
            var crbcs = [];
            var repc = 0;
            var ccv = 0;
            while (m < tm) {
                repc = ca[m];
                m++;
                if (m < tm) {
                    ccv = ca[m];
                    m++;
                    if (alcsc[ccv] == 1)
                        for (i = 0; i < repc; i++) crbcs.push(ccv)
                }
            }
            if (crbcs.length > 0) {
                o.rbcs = crbcs;
                cv = o.rbcs[0];
                o.cv = cv;
                o.cusk = true
            }
        }
    }
    var fdhc = null;
    var fdtc = null;
    var fdl = 0;
    if (!o.cusk) {
        if (cv == 24) {
            o.antenna = true;
            o.atba = 0;
            o.atc1 = "#00688c";
            o.atc2 = "#64c8e7";
            o.atwg = true;
            o.atia = .35;
            o.abrot = false;
            var jc = 8;
            o.atx = new Float32Array(jc);
            o.aty = new Float32Array(jc);
            o.atvx = new Float32Array(jc);
            o.atvy = new Float32Array(jc);
            o.atax = new Float32Array(jc);
            o.atay = new Float32Array(jc);
            for (var j = jc - 1; j >= 0; j--) {
                o.atx[j] = o.xx;
                o.aty[j] = o.yy
            }
            o.bulb =
                acbulb;
            o.blbx = -10;
            o.blby = -10;
            o.blbw = 20;
            o.blbh = 20;
            o.bsc = 1;
            o.blba = .75
        } else if (cv == 25) {
            o.ec = "#FF5609";
            o.ecv = 16733705;
            o.eca = 1;
            o.antenna = true;
            o.atba = 0;
            o.atc1 = "#000000";
            o.atc2 = "#5630d7";
            o.atia = 1;
            o.abrot = true;
            var jc = 9;
            o.atx = new Float32Array(jc);
            o.aty = new Float32Array(jc);
            o.atvx = new Float32Array(jc);
            o.atvy = new Float32Array(jc);
            o.atax = new Float32Array(jc);
            o.atay = new Float32Array(jc);
            for (var j = jc - 1; j >= 0; j--) {
                o.atx[j] = o.xx;
                o.aty[j] = o.yy
            }
            o.bulb = cdbulb;
            o.blbx = -5;
            o.blby = -10;
            o.blbw = 20;
            o.blbh = 20;
            o.bsc = 1.6;
            o.blba =
                1
        } else if (cv == 27) {
            o.jse = true;
            o.one_eye = true;
            o.ebi = jsebi;
            o.ebiw = 64;
            o.ebih = 64;
            o.ebisz = 29;
            o.epi = jsepi;
            o.epiw = 48;
            o.epih = 48;
            o.episz = 14;
            o.pma = 4;
            o.swell = .06
        } else if (cv == 37) {
            o.eca = 1;
            o.antenna = true;
            o.atba = 0;
            o.atc1 = "#301400";
            o.atc2 = "#ff6813";
            o.atwg = true;
            o.atia = .5;
            o.abrot = true;
            var jc = 9;
            o.atx = new Float32Array(jc);
            o.aty = new Float32Array(jc);
            o.atvx = new Float32Array(jc);
            o.atvy = new Float32Array(jc);
            o.atax = new Float32Array(jc);
            o.atay = new Float32Array(jc);
            for (var j = jc - 1; j >= 0; j--) {
                o.atx[j] = o.xx;
                o.aty[j] = o.yy
            }
            o.bulb =
                kwkbulb;
            o.blbx = -18 - 21;
            o.blby = -42 - 21;
            o.blbw = 130 + 42;
            o.blbh = 71 + 42;
            o.bsc = .42;
            o.blba = 1
        } else if (cv == 39) {
            o.eca = 1;
            o.antenna = true;
            o.atba = 0;
            o.atc1 = "#1d3245";
            o.atc2 = "#44d4ff";
            o.atwg = true;
            o.atia = .43;
            o.abrot = true;
            var jc = 9;
            o.atx = new Float32Array(jc);
            o.aty = new Float32Array(jc);
            o.atvx = new Float32Array(jc);
            o.atvy = new Float32Array(jc);
            o.atax = new Float32Array(jc);
            o.atay = new Float32Array(jc);
            for (var j = jc - 1; j >= 0; j--) {
                o.atx[j] = o.xx;
                o.aty[j] = o.yy
            }
            o.bulb = pwdbulb;
            o.blbx = -15 - 21;
            o.blby = -79 - 21;
            o.blbw = 148 + 42;
            o.blbh = 146 + 42;
            o.bsc =
                .25;
            o.blba = 1
        } else if (cv == 40) {
            o.eac = true;
            o.jyt = true
        } else if (cv == 41) {
            o.ed = 34;
            o.esp = 14;
            o.eca = 1;
            o.eo = 3;
            o.er = 8;
            o.easp = .038;
            o.pr = 4.5;
            o.pma = 3;
            o.slg = true
        } else if (cv == 42) {
            o.eca = 1;
            o.antenna = true;
            o.atba = 0;
            o.atc1 = "#002828";
            o.atc2 = "#80d0d0";
            o.atwg = true;
            o.atia = .5;
            o.abrot = true;
            var jc = 9;
            o.atx = new Float32Array(jc);
            o.aty = new Float32Array(jc);
            o.atvx = new Float32Array(jc);
            o.atvy = new Float32Array(jc);
            o.atax = new Float32Array(jc);
            o.atay = new Float32Array(jc);
            for (var j = jc - 1; j >= 0; j--) {
                o.atx[j] = o.xx;
                o.aty[j] = o.yy
            }
            o.bulb = playbulb;
            o.blbx = -8 - 21;
            o.blby = -53 - 21;
            o.blbw = 100 + 42;
            o.blbh = 107 + 42;
            o.bsc = .36;
            o.blba = 1
        } else if (cv == 44) {
            o.ec = "#D4D4D4";
            o.ecv = 13948116
        } else if (cv == 45) {
            o.eca = 1;
            o.antenna = true;
            o.atba = 0;
            o.atc1 = "#c02020";
            o.atc2 = "#ff4040";
            o.atwg = true;
            o.atia = .5;
            o.abrot = true;
            var jc = 9;
            o.atx = new Float32Array(jc);
            o.aty = new Float32Array(jc);
            o.atvx = new Float32Array(jc);
            o.atvy = new Float32Array(jc);
            o.atax = new Float32Array(jc);
            o.atay = new Float32Array(jc);
            for (var j = jc - 1; j >= 0; j--) {
                o.atx[j] = o.xx;
                o.aty[j] = o.yy
            }
            o.bulb = leafbulb;
            o.blbx = -(101 * .11) - 21;
            o.blby = -60 - 21;
            o.blbw = 101 + 42;
            o.blbh = 119 + 42;
            o.bsc = .33;
            o.blba = 1
        } else if (cv == 46) {
            o.eca = 1;
            o.antenna = true;
            o.atba = 0;
            o.atc1 = "#c02020";
            o.atc2 = "#ff4040";
            o.atwg = true;
            o.atia = .5;
            o.abrot = true;
            var jc = 9;
            o.atx = new Float32Array(jc);
            o.aty = new Float32Array(jc);
            o.atvx = new Float32Array(jc);
            o.atvy = new Float32Array(jc);
            o.atax = new Float32Array(jc);
            o.atay = new Float32Array(jc);
            for (var j = jc - 1; j >= 0; j--) {
                o.atx[j] = o.xx;
                o.aty[j] = o.yy
            }
            o.bulb = swissbulb;
            o.blbx = -(98 * .11) - 21;
            o.blby = -49 - 21;
            o.blbw = 98 + 42;
            o.blbh = 98 + 42;
            o.bsc = .285;
            o.blba =
                1
        } else if (cv == 47) {
            o.eca = 1;
            o.antenna = true;
            o.atba = 0;
            o.atc1 = "#3030ff";
            o.atc2 = "#6060ff";
            o.atwg = true;
            o.atia = .5;
            o.abrot = true;
            var jc = 9;
            o.atx = new Float32Array(jc);
            o.aty = new Float32Array(jc);
            o.atvx = new Float32Array(jc);
            o.atvy = new Float32Array(jc);
            o.atax = new Float32Array(jc);
            o.atay = new Float32Array(jc);
            for (var j = jc - 1; j >= 0; j--) {
                o.atx[j] = o.xx;
                o.aty[j] = o.yy
            }
            o.bulb = moldovabulb;
            o.blbx = -(120 * .11) - 21;
            o.blby = -48 - 21;
            o.blbw = 120 + 42;
            o.blbh = 95 + 42;
            o.bsc = .33;
            o.blba = 1
        } else if (cv == 48) {
            o.eca = 1;
            o.antenna = true;
            o.atba = 0;
            o.atc1 =
                "#c02020";
            o.atc2 = "#ff4040";
            o.atwg = true;
            o.atia = .75;
            o.abrot = true;
            var jc = 9;
            o.atx = new Float32Array(jc);
            o.aty = new Float32Array(jc);
            o.atvx = new Float32Array(jc);
            o.atvy = new Float32Array(jc);
            o.atax = new Float32Array(jc);
            o.atay = new Float32Array(jc);
            for (var j = jc - 1; j >= 0; j--) {
                o.atx[j] = o.xx;
                o.aty[j] = o.yy
            }
            o.bulb = vietnambulb;
            o.blbx = -(95 * .11) - 21;
            o.blby = -50 - 21;
            o.blbw = 95 + 42;
            o.blbh = 100 + 42;
            o.bsc = .3;
            o.blba = 1
        } else if (cv == 49) {
            o.eca = 1;
            o.antenna = true;
            o.atba = 0;
            o.atc1 = "#64accf";
            o.atc2 = "#84dcff";
            o.atwg = true;
            o.atia = .7;
            o.abrot =
                true;
            var jc = 11;
            o.atx = new Float32Array(jc);
            o.aty = new Float32Array(jc);
            o.atvx = new Float32Array(jc);
            o.atvy = new Float32Array(jc);
            o.atax = new Float32Array(jc);
            o.atay = new Float32Array(jc);
            for (var j = jc - 1; j >= 0; j--) {
                o.atx[j] = o.xx;
                o.aty[j] = o.yy
            }
            o.bulb = argentinabulb;
            o.blbx = -(110 * .11) - 21;
            o.blby = -55 - 21;
            o.blbw = 110 + 42;
            o.blbh = 110 + 42;
            o.bsc = .3;
            o.blba = 1
        } else if (cv == 59) {
            o.eca = 1;
            o.antenna = true;
            o.atba = 0;
            o.atc1 = "#886818";
            o.atc2 = "#ffe040";
            o.atwg = true;
            o.atia = .55;
            o.abrot = true;
            var jc = 11;
            o.atx = new Float32Array(jc);
            o.aty = new Float32Array(jc);
            o.atvx = new Float32Array(jc);
            o.atvy = new Float32Array(jc);
            o.atax = new Float32Array(jc);
            o.atay = new Float32Array(jc);
            for (var j = jc - 1; j >= 0; j--) {
                o.atx[j] = o.xx;
                o.aty[j] = o.yy
            }
            o.bulb = movbulb;
            o.blbx = -(100 * .2) - 21;
            o.blby = -70 - 21;
            o.blbw = 100 + 42;
            o.blbh = 121 + 42;
            o.bsc = .3;
            o.blba = 1
        } else if (cv == 60) o.drez = true;
        else if (cv == 62) {
            o.eca = 1;
            o.antenna = true;
            o.atba = 0;
            o.atc1 = "#402200";
            o.atc2 = "#ffc20f";
            o.atwg = true;
            o.atia = .5;
            o.abrot = true;
            var jc = 9;
            o.atx = new Float32Array(jc);
            o.aty = new Float32Array(jc);
            o.atvx = new Float32Array(jc);
            o.atvy =
                new Float32Array(jc);
            o.atax = new Float32Array(jc);
            o.atay = new Float32Array(jc);
            for (var j = jc - 1; j >= 0; j--) {
                o.atx[j] = o.xx;
                o.aty[j] = o.yy
            }
            o.bulb = bonkbulb;
            o.blbx = -8 - 21;
            o.blby = -68 - 21;
            o.blbw = 131 + 42;
            o.blbh = 136 + 42;
            o.bsc = .25;
            o.blba = 1
        } else if (cv == 63) {
            o.ec = "#000000";
            o.ecv = 0;
            o.eca = 1;
            o.ppc = "#CCCCCC";
            o.ppcv = 13421772;
            o.pr = 2.5
        } else if (cv == 64) {
            o.ec = "#FFFF80";
            o.ecv = 16777088;
            o.eca = 1
        } else if (cv == 65);
        var rbcs = null;
        if (cv == 9) rbcs = [7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 10, 10, 10, 10, 10, 10, 10, 10, 10];
        else if (cv == 10) rbcs = [9, 9, 9, 9, 9, 1, 1, 1, 1, 1, 7, 7,
            7, 7, 7
        ];
        else if (cv == 11) rbcs = [11, 11, 11, 11, 11, 7, 7, 7, 7, 7, 12, 12, 12, 12, 12];
        else if (cv == 12) rbcs = [7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 13, 13, 13, 13, 13];
        else if (cv == 13) rbcs = [14, 14, 14, 14, 14, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7];
        else if (cv == 14) rbcs = [9, 9, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7, 7, 7];
        else if (cv == 15) rbcs = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        else if (cv == 16) rbcs = [15, 15, 15, 15, 15, 15, 15, 4, 4, 4, 4, 4, 4, 4];
        else if (cv == 17) rbcs = [9, 9, 9, 9, 9, 9, 9, 16, 16, 16, 16, 16, 16, 16];
        else if (cv == 18) rbcs = [7, 7, 7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 9, 9];
        else if (cv == 19) rbcs = [9];
        else if (cv == 20) rbcs = [3, 3, 3, 3, 3, 0, 0, 0, 0, 0];
        else if (cv == 21) rbcs = [3, 3, 3, 3, 3, 3, 3, 18, 18, 18, 18, 18, 18, 20, 19, 20, 19, 20, 19, 20, 18, 18, 18, 18, 18, 18];
        else if (cv == 22) rbcs = [5, 5, 5, 5, 5, 5, 5, 9, 9, 9, 9, 9, 9, 9, 13, 13, 13, 13, 13, 13, 13];
        else if (cv == 23) rbcs = [16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 7, 7, 7, 7, 7, 7, 7];
        else if (cv == 24) rbcs = [23, 23, 23, 23, 23, 23, 23, 23, 23, 18, 18, 18, 18, 18, 18, 18, 18, 18];
        else if (cv == 25) rbcs = [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22];
        else if (cv == 26) rbcs = [24];
        else if (cv == 27) rbcs = [25];
        else if (cv == 28) rbcs = [18, 18, 18, 18, 18, 18, 18, 25, 25,
            25, 25, 25, 25, 25, 7, 7, 7, 7, 7, 7, 7
        ];
        else if (cv == 29) rbcs = [11, 11, 4, 11, 11, 11, 11, 4, 11, 11];
        else if (cv == 30) rbcs = [10, 10, 19, 20, 10, 10, 20, 19];
        else if (cv == 31) rbcs = [10, 10];
        else if (cv == 32) rbcs = [20, 20];
        else if (cv == 33) rbcs = [12, 11, 11];
        else if (cv == 34) rbcs = [7, 7, 9, 13, 13, 9, 16, 16, 9, 12, 12, 9, 7, 7, 9, 16, 16, 9];
        else if (cv == 35) rbcs = [7, 7, 9, 9, 6, 6, 9, 9];
        else if (cv == 36) rbcs = [16, 16, 9, 9, 15, 15, 9, 9];
        else if (cv == 37) rbcs = [22];
        else if (cv == 38) rbcs = [18];
        else if (cv == 39) rbcs = [23];
        else if (cv == 40) rbcs = [26];
        else if (cv == 41) rbcs = [27];
        else if (cv == 42) rbcs = [2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 7, 7];
        else if (cv == 43) rbcs = [28];
        else if (cv == 44) rbcs = [29];
        else if (cv == 45) rbcs = [7, 7, 7, 9, 9, 9, 9, 9, 9, 9, 9, 7, 7, 7];
        else if (cv == 46) rbcs = [7];
        else if (cv == 47) rbcs = [16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 18, 18, 7, 7, 7, 7, 7, 7, 7, 7, 16, 16, 16, 16];
        else if (cv == 48) rbcs = [7];
        else if (cv == 49) rbcs = [23, 23, 23, 23, 23, 9, 9, 9, 9, 9, 9, 9, 9, 23, 23];
        else if (cv == 50) rbcs = [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 7, 7, 7, 7, 7, 7, 7, 7];
        else if (cv == 51) rbcs = [7, 7, 7, 9, 9, 16, 16, 16,
            16, 16, 16, 9, 9
        ];
        else if (cv == 52) rbcs = [7, 7, 7, 7, 18, 18, 18, 18, 18, 18, 18, 18, 18, 7, 7, 7, 7, 7];
        else if (cv == 53) rbcs = [30];
        else if (cv == 54) rbcs = [31];
        else if (cv == 55) rbcs = [32];
        else if (cv == 56) rbcs = [33];
        else if (cv == 57) rbcs = [34];
        else if (cv == 58) rbcs = [35];
        else if (cv == 59) rbcs = [18];
        else if (cv == 60) {
            rbcs = [36];
            fdhc = 37;
            fdtc = 38;
            fdl = 30
        } else if (cv == 61) rbcs = [30, 30, 30, 30, 30, 30, 35, 35, 35, 35, 35, 35, 33, 33, 33, 33, 33, 33, 31, 31, 31, 31, 31, 31, 32, 32, 32, 32, 32, 32, 34, 34, 34, 34, 34, 34];
        else if (cv == 62) rbcs = [17, 17, 17, 17, 17, 39, 39, 39, 39, 39];
        else if (cv == 63) rbcs = [7, 7, 7, 11, 11, 11];
        else if (cv == 64) rbcs = [16, 16, 11, 11];
        else if (cv == 65) rbcs = [4, 4, 4, 4, 9, 9, 9, 9];
        else cv = cv % 9;
        if (ggl)
            if (!rbcs) rbcs = [cv];
        if (rbcs) cv = rbcs[0];
        o.rbcs = rbcs;
        o.cv = cv
    }
    o.fdhc = fdhc;
    o.fdtc = fdtc;
    o.fdl = fdl;
    if (ggl) {
        if (o.sglo) {
            var k = o.lsgvc;
            for (j = 0; j < k; j++) o.sgsv[j] = false
        } else {
            o.lsgvc = 0;
            var oso = null;
            if (slither == null) {
                oso = ssdo;
                ssdo = null
            }
            if (oso == null) oso = slither_dp.get();
            if (oso) {
                o.sgs = oso.sgs;
                o.shs = oso.shs;
                o.shs2 = oso.shs2;
                o.sfs = oso.sfs;
                o.sfus = oso.sfus;
                o.sds = oso.sds;
                o.sgsv = oso.sgsv;
                o.uglo = oso.uglo;
                o.eyelo = oso.eyelo;
                o.lefteye = oso.lefteye;
                o.leftpupil = oso.leftpupil;
                o.righteye = oso.righteye;
                o.rightpupil = oso.rightpupil;
                o.sglo = oso.sglo;
                o.shlo = oso.shlo;
                o.sflo = oso.sflo;
                o.sdlo = oso.sdlo;
                o.shlo.visible = true;
                o.sglo.visible = true;
                o.eyelo.visible = true
            } else {
                o.sgs = [];
                o.shs = [];
                o.shs2 = [];
                o.sfs = [];
                o.sfus = [];
                o.sgsv = [];
                o.sds = [];
                o.uglo = new PIXI.Container;
                o.shlo = new PIXI.Container;
                o.sglo = new PIXI.Container;
                o.eyelo = new PIXI.Container;
                o.sflo = new PIXI.Container;
                o.sdlo = new PIXI.Container;
                suglo.addChild(o.uglo);
                shilo.addChild(o.shlo);
                slilo.addChild(o.sglo);
                slilo.addChild(o.eyelo);
                sfilo.addChild(o.sflo);
                sdilo.addChild(o.sdlo);
                var lefteye = new PIXI.Sprite(eyeo.t);
                lefteye.anchor.set(.5);
                o.lefteye = lefteye;
                o.eyelo.addChild(lefteye);
                var righteye = new PIXI.Sprite(eyeo.t);
                righteye.anchor.set(.5);
                o.righteye = righteye;
                o.eyelo.addChild(righteye);
                var leftpupil = new PIXI.Sprite(pupilo.t);
                leftpupil.anchor.set(.5);
                o.leftpupil = leftpupil;
                o.eyelo.addChild(leftpupil);
                var rightpupil = new PIXI.Sprite(pupilo.t);
                rightpupil.anchor.set(.5);
                o.rightpupil = rightpupil;
                o.eyelo.addChild(rightpupil)
            }
            o.sflo.visible = false;
            o.uglo.visible = false;
            o.sdlo.visible = false
        }
        o.eyelo.visible = true;
        if (o.eac) {
            o.lefteye.visible = false;
            o.leftpupil.visible = false;
            o.righteye.visible = false;
            o.rightpupil.visible = false
        } else if (o.one_eye) {
            o.lefteye.visible = false;
            o.leftpupil.visible = false;
            o.righteye.visible = false;
            o.rightpupil.visible = false
        } else {
            o.lefteye.visible = true;
            o.lefteye.tint = o.ecv;
            o.leftpupil.visible = true;
            o.righteye.visible = true;
            o.righteye.tint = o.ecv;
            o.rightpupil.visible = true
        }
        if (o.jse) {
            o.ebi = new PIXI.Sprite(jsebo.t);
            o.ebi.anchor.set(.5);
            o.eyelo.addChild(o.ebi);
            o.epi = new PIXI.Sprite(jsepo.t);
            o.epi.anchor.set(.5);
            o.eyelo.addChild(o.epi)
        }
        if (o.slg) {
            o.stem1 = new PIXI.Sprite(sestt);
            o.stem1.anchor.set(.2666, .5);
            o.eyelo.addChildAt(o.stem1, 0);
            o.stem2 = new PIXI.Sprite(sestt);
            o.stem2.anchor.set(.2666, .5);
            o.eyelo.addChildAt(o.stem2, 0)
        }
        if (o.ppcv == 0) {
            o.leftpupil.texture = pupilo.t;
            o.rightpupil.texture = pupilo.t;
            o.leftpupil.tint = 16777215;
            o.rightpupil.tint = 16777215
        } else {
            o.leftpupil.texture = tpupilo.t;
            o.rightpupil.texture = tpupilo.t;
            o.leftpupil.tint = o.ppcv;
            o.rightpupil.tint = o.ppcv
        }
    }
}
var slither_dp = newDeadpool();
var ssdo = null;
var food_dp = newDeadpool();
var prey_dp = newDeadpool();
var name_dp = newDeadpool();

function destroySlitherAtIndex(index) {
    var o = slithers[index];
    slithers.splice(index, 1);
    if (ggl) {
        o.lsgvc = 0;
        o.sgsv = [];
        o.uglo.destroy({
            children: true
        });
        o.shlo.destroy({
            children: true
        });
        o.sglo.destroy({
            children: true
        });
        o.sflo.destroy({
            children: true
        });
        o.sdlo.destroy({
            children: true
        });
        o.eyelo.destroy({
            children: true
        });
        if (o.nko) o.nko.destroy({
            children: true
        });
        suglo.removeChild(o.uglo);
        shilo.removeChild(o.shlo);
        slilo.removeChild(o.sglo);
        slilo.removeChild(o.eyelo);
        sfilo.removeChild(o.sflo);
        sdilo.removeChild(o.sdlo)
    }
    return;
    if (ggl) {
        o.uglo.visible = false;
        o.sglo.visible = false;
        o.eyelo.visible = false;
        o.shlo.visible = false;
        o.sflo.visible = false;
        o.sdlo.visible = false;
        for (var i = o.sgs.length - 1; i >= 0; i--) {
            o.sgs[i].visible = false;
            o.shs[i].visible = false;
            o.shs2[i].visible = false;
            o.sfs[i].visible = false;
            o.sfus[i].visible = false;
            o.sds[i].visible = false;
            o.sgsv[i] = false
        }
        if (o.nko) {
            o.nko.visible = false;
            name_dp.add(o.nko)
        }
        if (o.jse) {
            o.ebi.destroy({
                children: true
            });
            o.epi.destroy({
                children: true
            })
        }
        if (o.slg) {
            o.stem1.destroy({
                children: true
            });
            o.stem2.destroy({
                children: true
            })
        }
    }
    if (o ==
        slither && ssdo == null) ssdo = o;
    else slither_dp.add(o)
}

function destroyFood(fo) {
    fo.fi.visible = false;
    fo.ofi.visible = false;
    fo.gfi.visible = false;
    fo.g2fi.visible = false;
    food_dp.add(fo)
}

function destroyPrey(pr) {
    pr.pri.visible = false;
    pr.gpri.visible = false;
    prey_dp.add(pr)
}

function arp(o, q, xx, yy) {
    if (q < o.gptz.length) {
        var gpo = o.gptz[q];
        gpo.xx = xx;
        gpo.yy = yy;
        return gpo
    } else {
        gpo = {};
        gpo.xx = xx;
        gpo.yy = yy;
        o.gptz.push(gpo);
        return gpo
    }
}

function newSlither(id, xx, yy, cv, ang, pts, msl, custom_skin_uint8) {
    var o = {};
    o.id = id;
    o.xx = xx;
    o.yy = yy;
    setSkin(o, cv, custom_skin_uint8);
    cv = o.cv;
    o.fnfr = 0;
    o.na = 1;
    o.chl = 0;
    o.tsp = 0;
    o.sfr = 0;
    o.gptz = [];
    o.accessory = -1;
    o.kill_count = 0;
    o.rr = Math.min(255, rrs[cv] + Math.floor(Math.random() * 20));
    o.gg = Math.min(255, ggs[cv] + Math.floor(Math.random() * 20));
    o.bb = Math.min(255, bbs[cv] + Math.floor(Math.random() * 20));
    var rs = "00" + Math.min(255, Math.max(0, Math.round(o.rr))).toString(16);
    var gs = "00" + Math.min(255, Math.max(0, Math.round(o.gg))).toString(16);
    var bs = "00" + Math.min(255, Math.max(0, Math.round(o.bb))).toString(16);
    rs = rs.substr(rs.length - 2);
    gs = gs.substr(gs.length - 2);
    bs = bs.substr(bs.length - 2);
    o.cs = "#" + rs + gs + bs;
    var v = .4;
    rs = "00" + Math.min(255, Math.max(0, Math.round(o.rr * v))).toString(16);
    gs = "00" + Math.min(255, Math.max(0, Math.round(o.gg * v))).toString(16);
    bs = "00" + Math.min(255, Math.max(0, Math.round(o.bb * v))).toString(16);
    rs = rs.substr(rs.length - 2);
    gs = gs.substr(gs.length - 2);
    bs = bs.substr(bs.length - 2);
    o.cs04 = "#" + rs + gs + bs;
    var v = 1.5;
    rs = "00" + Math.min(255, Math.max(0, Math.round((255 + o.rr) * .5))).toString(16);
    gs = "00" + Math.min(255, Math.max(0, Math.round((255 + o.gg) * .5))).toString(16);
    bs = "00" + Math.min(255, Math.max(0, Math.round((255 + o.bb) * .5))).toString(16);
    rs = rs.substr(rs.length - 2);
    gs = gs.substr(gs.length - 2);
    bs = bs.substr(bs.length - 2);
    o.csw = "#" + rs + gs + bs;
    o.sc = 1;
    o.ssp = nsp1 + nsp2 * o.sc;
    o.fsp = o.ssp + .1;
    o.msp = nsp3;
    o.fxs = new Float32Array(rfc);
    o.fys = new Float32Array(rfc);
    o.fchls = new Float32Array(rfc);
    o.fpos = 0;
    o.ftg = 0;
    o.fx = 0;
    o.fy = 0;
    o.fchl = 0;
    o.fas = new Float32Array(afc);
    o.fapos = 0;
    o.fatg = 0;
    o.fa = 0;
    o.ehang = ang;
    o.wehang = ang;
    o.ehl = 1;
    o.msl = msl;
    o.fam = 0;
    o.rsc = 0;
    o.ang = ang;
    o.eang = ang;
    o.wang = ang;
    o.rex = 0;
    o.rey = 0;
    o.sp = 2;
    if (pts) {
        o.pts = pts;
        o.sct = pts.length;
        if (pts[0].dying) o.sct--
    } else {
        o.pts = [];
        o.sct = 0
    }
    o.flpos = 0;
    o.fls = new Float32Array(lfc);
    o.fl = 0;
    o.fltg = 0;
    o.tl = o.sct + o.fam;
    if (render_mode == 1) o.cfl = o.tl;
    else o.cfl = o.tl - .6;
    o.scang = 1;
    o.dead_amt = 0;
    o.alive_amt = 0;
    if (team_mode && slither && cv == slither.cv) slithers.push(o);
    else slithers.splice(0, 0, o);
    os["s" + o.id] = o;
    return o
}

function getBuildSkinData(pad) {
    var fa = [];
    fa.push(255);
    fa.push(255);
    fa.push(255);
    fa.push(0);
    fa.push(0);
    fa.push(0);
    fa.push(Math.floor(Math.random() * 256));
    fa.push(Math.floor(Math.random() * 256));
    var i;
    var j;
    j = build_segments.length;
    if (j > 0) {
        var s;
        var ls = build_segments[0];
        var c = 0;
        for (i = 0; i < j; i++) {
            s = build_segments[i];
            if (s != ls) {
                if (c > 255) c = 255;
                fa.push(c);
                fa.push(ls);
                c = 0;
                ls = s
            }
            c++
        }
        if (c > 0) {
            fa.push(c);
            fa.push(ls)
        }
    }
    if (pad) {
        fa.push(250);
        fa.push(40)
    }
    var ffa = new Uint8Array(fa.length);
    for (i = 0; i < fa.length; i++) ffa[i] = fa[i];
    return ffa
}

function snl(o) {
    var orl = o.tl;
    o.tl = o.sct + Math.min(1, o.fam);
    var d = o.tl - orl;
    var k = o.flpos;
    for (var j = 0; j < lfc; j++) {
        o.fls[k] -= d * lfas[j];
        k++;
        if (k >= lfc) k = 0
    }
    o.fl = o.fls[o.flpos];
    o.fltg = lfc;
    if (o == slither) wumsts = true
}

function newFood(id, xx, yy, rad, rapid, cv) {
    var fo = {};
    fo.id = id;
    fo.xx = xx;
    fo.yy = yy;
    fo.rx = xx;
    fo.ry = yy;
    if (rapid) fo.rsp = 3;
    else fo.rsp = 1;
    if (cv > 9) cv %= 9;
    fo.cv = cv;
    fo.rad = 1E-5;
    fo.sz = rad;
    fo.lrrad = fo.rad;
    var pci = per_color_imgs[fo.cv];
    fo.cv2 = Math.floor(pci.ic * gsc * fo.sz / 16.5);
    if (fo.cv2 < 0) fo.cv2 = 0;
    if (fo.cv2 >= pci.ic) fo.cv2 = pci.ic - 1;
    if (ggl) {
        var ofo = food_dp.get();
        if (ofo) {
            fo.fi = ofo.fi;
            fo.ofi = ofo.ofi;
            fo.gfi = ofo.gfi;
            fo.g2fi = ofo.g2fi;
            fo.fi.texture = pci.wfdo.t;
            fo.ofi.texture = pci.wodo.t;
            fo.gfi.texture = pci.wgdo.t;
            fo.g2fi.texture =
                pci.wgdo.t;
            fo.fi.visible = false;
            fo.ofi.visible = false;
            fo.gfi.visible = false;
            fo.g2fi.visible = false
        } else {
            var ofi = new PIXI.Sprite(pci.wodo.t);
            ofi.anchor.set(.5);
            ofi.visible = false;
            fo.ofi = ofi;
            fdlo.addChild(ofi);
            var fi = new PIXI.Sprite(pci.wfdo.t);
            fi.blendMode = PIXI.BLEND_MODES.ADD;
            fi.anchor.set(.5);
            fi.visible = false;
            fo.fi = fi;
            fdglo.addChild(fi);
            var gfi = new PIXI.Sprite(pci.wgdo.t);
            gfi.blendMode = PIXI.BLEND_MODES.ADD;
            gfi.anchor.set(.5);
            gfi.visible = false;
            fo.gfi = gfi;
            fdglo.addChild(gfi);
            var g2fi = new PIXI.Sprite(pci.wgdo.t);
            g2fi.blendMode = PIXI.BLEND_MODES.ADD;
            g2fi.anchor.set(.5);
            g2fi.visible = false;
            fo.g2fi = g2fi;
            g2lo.addChild(g2fi)
        }
    } else {
        fo.fi = pci.imgs[fo.cv2];
        fo.fw = pci.fws[fo.cv2];
        fo.fh = pci.fhs[fo.cv2];
        fo.fw2 = pci.fw2s[fo.cv2];
        fo.fh2 = pci.fh2s[fo.cv2];
        fo.ofi = pci.oimgs[fo.cv2];
        fo.ofw = pci.ofws[fo.cv2];
        fo.ofh = pci.ofhs[fo.cv2];
        fo.ofw2 = pci.ofw2s[fo.cv2];
        fo.ofh2 = pci.ofh2s[fo.cv2];
        fo.gcv = Math.floor(pci.ic * gsc * (.25 + .75 * fo.sz / 16.5));
        if (fo.gcv < 0) fo.gcv = 0;
        if (fo.gcv >= pci.ic) fo.gcv = pci.ic - 1;
        fo.gfi = pci.gimgs[fo.gcv];
        fo.gfw = pci.gfws[fo.gcv];
        fo.gfh = pci.gfhs[fo.gcv];
        fo.gfw2 = pci.gfw2s[fo.gcv];
        fo.gfh2 = pci.gfh2s[fo.gcv];
        fo.g2cv = Math.floor(pci.ic * gsc * 2 * (.25 + .75 * fo.sz / 16.5));
        if (fo.g2cv < 0) fo.g2cv = 0;
        if (fo.g2cv >= pci.ic) fo.g2cv = pci.ic - 1;
        fo.g2fi = pci.gimgs[fo.g2cv];
        fo.g2fw = pci.gfws[fo.g2cv];
        fo.g2fh = pci.gfhs[fo.g2cv];
        fo.g2fw2 = pci.gfw2s[fo.g2cv];
        fo.g2fh2 = pci.gfh2s[fo.g2cv]
    }
    fo.fr = 0;
    fo.gfr = Math.random() * 64;
    fo.gr = .65 + .1 * fo.sz;
    fo.wsp = (2 * Math.random() - 1) * .0225;
    fo.eaten_fr = 0;
    foods[foods_c++] = fo;
    return fo
}

function newPrey(id, xx, yy, rad, cv, dir, wang, ang, speed) {
    var pr = {};
    pr.id = id;
    pr.xx = xx;
    pr.yy = yy;
    pr.rad = 10;
    pr.sz = rad;
    pr.cv = cv % 9;
    pr.dir = dir;
    pr.wang = wang;
    pr.ang = ang;
    pr.sp = speed;
    pr.fr = 0;
    pr.gfr = Math.random() * 64;
    pr.gr = .5 + Math.random() * .15 + .1 * pr.sz;
    pr.rr = Math.min(255, rrs[cv]);
    pr.gg = Math.min(255, ggs[cv]);
    pr.bb = Math.min(255, bbs[cv]);
    var rs = "00" + Math.min(255, Math.max(0, Math.round(pr.rr))).toString(16);
    var gs = "00" + Math.min(255, Math.max(0, Math.round(pr.gg))).toString(16);
    var bs = "00" + Math.min(255, Math.max(0, Math.round(pr.bb))).toString(16);
    rs = rs.substr(rs.length - 2);
    gs = gs.substr(gs.length - 2);
    bs = bs.substr(bs.length - 2);
    var pci = per_color_imgs[pr.cv];
    pr.cs = "#" + rs + gs + bs;
    if (!ggl) {
        pr.cv2 = Math.floor(pci.pr_imgs.length * gsc * pr.sz / 9);
        if (pr.cv2 < 0) pr.cv2 = 0;
        if (pr.cv2 >= pci.pr_imgs.length) pr.cv2 = pci.pr_imgs.length - 1
    }
    if (ggl) {
        var pri;
        var gpri;
        var opr = prey_dp.get();
        if (opr) {
            pri = opr.pri;
            pr.pri = pri;
            pri.texture = pci.pro.t;
            gpri = opr.gpri;
            pr.gpri = gpri;
            gpri.texture = pci.gpro.t
        } else {
            pri = new PIXI.Sprite(pci.pro.t);
            pri.blendMode = PIXI.BLEND_MODES.ADD;
            pri.anchor.set(.5);
            pr.pri = pri;
            prlo.addChild(pri);
            gpri = new PIXI.Sprite(pci.gpro.t);
            gpri.blendMode = PIXI.BLEND_MODES.ADD;
            gpri.anchor.set(.5);
            pr.gpri = gpri;
            prglo.addChild(gpri)
        }
        pri.visible = true;
        gpri.visible = true
    } else {
        pr.fi = pci.pr_imgs[pr.cv2];
        pr.fw = pci.pr_fws[pr.cv2];
        pr.fh = pci.pr_fhs[pr.cv2];
        pr.fw2 = pci.pr_fw2s[pr.cv2];
        pr.fh2 = pci.pr_fh2s[pr.cv2];
        pr.gcv = pci.gimgs.length - 1;
        pr.gfi = pci.gimgs[pr.gcv];
        pr.gfw = pci.gfws[pr.gcv];
        pr.gfh = pci.gfhs[pr.gcv];
        pr.gfw2 = pci.gfw2s[pr.gcv];
        pr.gfh2 = pci.gfh2s[pr.gcv]
    }
    pr.fxs = new Float32Array(rfc);
    pr.fys = new Float32Array(rfc);
    pr.fpos = 0;
    pr.ftg = 0;
    pr.fx = 0;
    pr.fy = 0;
    pr.eaten = false;
    pr.eaten_fr = 0;
    preys.push(pr);
    return pr
}
var ecmc = document.createElement("canvas");
ecmc.width = ecmc.height = 48;
var ctx = ecmc.getContext("2d");
ctx.fillStyle = "#000000";
ctx.moveTo(36, 6);
ctx.lineTo(30, 6);
ctx.quadraticCurveTo(0, 24, 30, 48 - 6);
ctx.lineTo(36, 48 - 6);
ctx.quadraticCurveTo(14, 24, 36, 6);
ctx.fill();
var kdo;
if (ggl) {
    var kdmc = document.createElement("canvas");
    kdmc.width = kdmc.height = 64;
    var ctx = kdmc.getContext("2d");
    ctx.fillStyle = "#FF7755";
    ctx.arc(32, 32, 32, 0, pi2);
    ctx.fill();
    kdo = {};
    kdo.cc = kdmc;
    kdo.sheet = 0;
    textures.push(kdo)
} else {
    var kdmc = document.createElement("canvas");
    kdmc.width = kdmc.height = 32;
    var ctx = kdmc.getContext("2d");
    ctx.fillStyle = "#FF9966";
    ctx.arc(16, 16, 16, 0, pi2);
    ctx.fill()
}
var sz = 52;
var komc = document.createElement("canvas");
komc.width = komc.height = sz;
var ctx = komc.getContext("2d");
var map = ctx.getImageData(0, 0, sz, sz);
var imgd = map.data;
var l = imgd.length;
var p;
var xx = 0;
var yy = 0;
for (p = 0; p < l; p += 4) {
    var v = Math.abs(Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2)) - 16);
    if (v <= 4) v = 1 - v / 4;
    else v = 0;
    v *= .8;
    imgd[p] = imgd[p + 1] = imgd[p + 2] = 0;
    imgd[p + 3] = Math.floor(255 * v);
    xx++;
    if (xx >= sz) {
        xx = 0;
        yy++
    }
}
ctx.putImageData(map, 0, 0);
if (iioc && testing) {
    var u = komc.toDataURL();
    var ii = document.createElement("img");
    ii.src = u;
    komc = ii
}
sz = 62;
var ksmc = document.createElement("canvas");
ksmc.width = ksmc.height = sz;
var ctx = ksmc.getContext("2d");
var map = ctx.getImageData(0, 0, sz, sz);
var imgd = map.data;
var l = imgd.length;
var p;
var xx = 0;
var yy = 0;
for (p = 0; p < l; p += 4) {
    var v = Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 + 3 - yy, 2)) - 15;
    v *= .1;
    if (v < 0) v = -v;
    if (v > 1) v = 1;
    v = 1 - v;
    v *= .25;
    imgd[p] = imgd[p + 1] = imgd[p + 2] = 0;
    imgd[p + 3] = Math.floor(255 * v);
    xx++;
    if (xx >= sz) {
        xx = 0;
        yy++
    }
}
ctx.putImageData(map, 0, 0);
if (iioc && testing) {
    var u = ksmc.toDataURL();
    var ii = document.createElement("img");
    ii.src = u;
    ksmc = ii
}
var kst;
var kso;
var koso;
if (ggl) {
    kso = {};
    kso.cc = ksmc;
    kso.sheet = 0;
    textures.push(kso)
}
var sz = 64;
var jsebi = document.createElement("canvas");
jsebi.width = jsebi.height = sz;
var ctx = jsebi.getContext("2d");
ctx.fillStyle = "#ffffff";
ctx.beginPath();
ctx.arc(sz / 2, sz / 2, sz / 2, 0, pi2);
ctx.fill();
var map = ctx.getImageData(0, 0, sz, sz);
var imgd = map.data;
var l = imgd.length;
var p;
var xx = 0;
var yy = 0;
for (p = 0; p < l; p += 4) {
    var v = Math.abs(sz / 2 - Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2))) / (sz / 2);
    v = v * 1.06 - .06;
    if (v < 0) v = 0;
    else {
        v = Math.pow(v, .35);
        v *= 1.35
    }
    v += (1 - v) * .25;
    imgd[p] = Math.max(0, Math.min(255, Math.round(72 * v)));
    imgd[p + 1] = Math.max(0, Math.min(255, Math.round(255 * v)));
    imgd[p + 2] = Math.max(0, Math.min(255, Math.round(116 * v)));
    xx++;
    if (xx >= sz) {
        xx = 0;
        yy++
    }
    v = sz / 2 - Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2));
    if (v <= 3) imgd[p + 3] = Math.max(0, Math.min(255, Math.round(v / 3 * 255)));
    else imgd[p + 3] = 255
}
ctx.putImageData(map, 0, 0);
var jsebt;
var jsebo;
if (ggl) {
    jsebo = {};
    jsebo.cc = jsebi;
    jsebo.sheet = 0;
    textures.push(jsebo)
}
var sz = 48;
var jsepi = document.createElement("canvas");
jsepi.width = jsepi.height = sz;
var ctx = jsepi.getContext("2d");
ctx.fillStyle = "#ffffff";
ctx.beginPath();
ctx.arc(sz / 2, sz / 2, sz / 2, 0, pi2);
ctx.fill();
var map = ctx.getImageData(0, 0, sz, sz);
var imgd = map.data;
var l = imgd.length;
var p;
var xx = 0;
var yy = 0;
for (p = 0; p < l; p += 4) {
    var v = Math.abs(sz / 2 - Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2))) / (sz / 2);
    if (v > .5) v = 0;
    else v = 1 - Math.pow(v / .5, 1);
    v *= .8;
    if (v == 0) {
        imgd[p] = 0;
        imgd[p + 1] = 0;
        imgd[p + 2] = 0
    } else {
        imgd[p] = Math.max(0, Math.min(255, Math.round(28 + (87 - 28) * v)));
        imgd[p + 1] = Math.max(0, Math.min(255, Math.round(83 + (168 - 83) * v)));
        imgd[p + 2] = Math.max(0, Math.min(255, Math.round(128 + (238 - 128) * v)))
    }
    xx++;
    if (xx >= sz) {
        xx = 0;
        yy++
    }
}
ctx.putImageData(map, 0, 0);
var jsept;
var jsepo;
if (ggl) {
    jsepo = {};
    jsepo.cc = jsepi;
    jsepo.sheet = 0;
    textures.push(jsepo)
}
var rabulb = document.createElement("canvas");
rabulb.width = rabulb.height = 64;
var ctx = rabulb.getContext("2d");
var g = ctx.createRadialGradient(32, 32, 1, 32, 32, 32 - 1);
g.addColorStop(0, "rgba(255, 255, 255, 1)");
g.addColorStop(.83, "rgba(150,150,150, 1)");
g.addColorStop(.84, "rgba(80,80,80, 1)");
g.addColorStop(.99, "rgba(80,80,80, 1)");
g.addColorStop(1, "rgba(80,80,80, 0)");
ctx.fillStyle = g;
ctx.fillRect(0, 0, 64, 64);
var cdbulb = document.createElement("canvas");
cdbulb.width = 84;
cdbulb.height = 84;
var cdbulb2 = document.createElement("canvas");
cdbulb2.width = 84;
cdbulb2.height = 84;
var ctx = cdbulb2.getContext("2d");
ctx.fillStyle = "#ff5609";
ctx.fillRect(13, 10, 58 / 2, 64);
ctx.fillRect(13, 10, 58, 22);
ctx.fillRect(13, 10 + 44, 58, 22);
var ctx = cdbulb.getContext("2d");
ctx.shadowColor = "#000000";
ctx.shadowBlur = 20;
ctx.drawImage(cdbulb2, 0, 0);
ctx.drawImage(cdbulb2, 0, 0);
var acbulb = document.createElement("canvas");
acbulb.width = acbulb.height = 64;
var ctx = acbulb.getContext("2d");
var g = ctx.createRadialGradient(32, 32, 1, 32, 32, 32 - 1);
g.addColorStop(0, "rgba(255, 128, 128, 1)");
g.addColorStop(.5, "rgba(222, 3, 3, 1)");
g.addColorStop(.96, "rgba(157, 18, 18, 1)");
g.addColorStop(1, "rgba(0,0,0, 0)");
ctx.fillStyle = g;
ctx.fillRect(0, 0, 64, 64);
var kwkbulb = document.createElement("canvas");
kwkbulb.width = 130 + 42;
kwkbulb.height = 71 + 42;
var kwki = document.createElement("img");
kwki.onload = function() {
    var tmc = document.createElement("canvas");
    tmc.width = 130 + 42;
    tmc.height = 71 + 42;
    var ctx = tmc.getContext("2d");
    ctx.drawImage(kwki, 21, 21);
    var ctx = kwkbulb.getContext("2d");
    ctx.shadowColor = "#000000";
    ctx.shadowBlur = 20;
    ctx.drawImage(tmc, 0, 0)
};
kwki.src = "http://slither.io/s/kwk6.png";
var jmou = document.createElement("canvas");
jmou.width = 79;
jmou.height = 130;
var jmoi = document.createElement("img");
jmoi.onload = function() {
    var ctx = jmou.getContext("2d");
    ctx.drawImage(jmoi, 0, 0)
};
jmoi.src = "http://slither.io/s/jmou3.png";
var pwdbulb = document.createElement("canvas");
pwdbulb.width = 148 + 42;
pwdbulb.height = 146 + 42;
var pwdi = document.createElement("img");
pwdi.onload = function() {
    var tmc = document.createElement("canvas");
    tmc.width = 148 + 42;
    tmc.height = 146 + 42;
    var ctx = tmc.getContext("2d");
    ctx.drawImage(pwdi, 21, 21);
    var ctx = pwdbulb.getContext("2d");
    ctx.shadowColor = "#000000";
    ctx.shadowBlur = 20;
    ctx.drawImage(tmc, 0, 0)
};
pwdi.src = "http://slither.io/s/pewd.png";
var sestt;
if (!ggl) {
    var sest = document.createElement("canvas");
    sest.width = 105;
    sest.height = 88;
    var sesti = document.createElement("img");
    sesti.onload = function() {
        var ctx = sest.getContext("2d");
        ctx.drawImage(sesti, 0, 0)
    };
    sesti.src = "https://slither.io/s2/sest5.png"
}
if (ggl)(async () => {
    sestt = await PIXI.Assets.load("https://slither.io/s2/sest5.png")
})();
var playbulb = document.createElement("canvas");
playbulb.width = 100 + 42;
playbulb.height = 107 + 42;
var plyi = document.createElement("img");
plyi.onload = function() {
    var tmc = document.createElement("canvas");
    tmc.width = 100 + 42;
    tmc.height = 107 + 42;
    var ctx = tmc.getContext("2d");
    ctx.drawImage(plyi, 21, 21);
    var ctx = playbulb.getContext("2d");
    ctx.shadowColor = "#000000";
    ctx.shadowBlur = 20;
    ctx.drawImage(tmc, 0, 0)
};
plyi.src = "http://slither.io/s/play.png";
var bonkbulb = document.createElement("canvas");
bonkbulb.width = 131 + 42;
bonkbulb.height = 136 + 42;
var bnki = document.createElement("img");
bnki.onload = function() {
    var tmc = document.createElement("canvas");
    tmc.width = 131 + 42;
    tmc.height = 136 + 42;
    var ctx = tmc.getContext("2d");
    ctx.drawImage(bnki, 21, 21);
    var ctx = bonkbulb.getContext("2d");
    ctx.shadowColor = "#000000";
    ctx.shadowBlur = 20;
    ctx.drawImage(tmc, 0, 0)
};
bnki.src = "http://slither.io/s/bonkers2.png";
var leafbulb = document.createElement("canvas");
leafbulb.width = 101 + 42;
leafbulb.height = 119 + 42;
var leafi = document.createElement("img");
leafi.onload = function() {
    var tmc = document.createElement("canvas");
    tmc.width = 101 + 42;
    tmc.height = 119 + 42;
    var ctx = tmc.getContext("2d");
    ctx.drawImage(leafi, 21, 21);
    var ctx = leafbulb.getContext("2d");
    ctx.shadowColor = "#000000";
    ctx.shadowBlur = 20;
    ctx.drawImage(tmc, 0, 0)
};
leafi.src = "http://slither.io/s/leaf.png";
var swissbulb = document.createElement("canvas");
swissbulb.width = 98 + 42;
swissbulb.height = 98 + 42;
var swissi = document.createElement("img");
swissi.onload = function() {
    var tmc = document.createElement("canvas");
    tmc.width = 98 + 42;
    tmc.height = 98 + 42;
    var ctx = tmc.getContext("2d");
    ctx.drawImage(swissi, 21, 21);
    var ctx = swissbulb.getContext("2d");
    ctx.shadowColor = "#000000";
    ctx.shadowBlur = 20;
    ctx.drawImage(tmc, 0, 0)
};
swissi.src = "http://slither.io/s/swiss.png";
var moldovabulb = document.createElement("canvas");
moldovabulb.width = 120 + 42;
moldovabulb.height = 95 + 42;
var moldovai = document.createElement("img");
moldovai.onload = function() {
    var tmc = document.createElement("canvas");
    tmc.width = 120 + 42;
    tmc.height = 95 + 42;
    var ctx = tmc.getContext("2d");
    ctx.drawImage(moldovai, 21, 21);
    var ctx = moldovabulb.getContext("2d");
    ctx.shadowColor = "#000000";
    ctx.shadowBlur = 20;
    ctx.drawImage(tmc, 0, 0)
};
moldovai.src = "http://slither.io/s/moldova.png";
var vietnambulb = document.createElement("canvas");
vietnambulb.width = 95 + 42;
vietnambulb.height = 100 + 42;
var vietnami = document.createElement("img");
vietnami.onload = function() {
    var tmc = document.createElement("canvas");
    tmc.width = 95 + 42;
    tmc.height = 100 + 42;
    var ctx = tmc.getContext("2d");
    ctx.drawImage(vietnami, 21, 21);
    var ctx = vietnambulb.getContext("2d");
    ctx.shadowColor = "#000000";
    ctx.shadowBlur = 20;
    ctx.drawImage(tmc, 0, 0)
};
vietnami.src = "http://slither.io/s/vietnam.png";
var argentinabulb = document.createElement("canvas");
argentinabulb.width = 110 + 42;
argentinabulb.height = 110 + 42;
var argentinai = document.createElement("img");
argentinai.onload = function() {
    var tmc = document.createElement("canvas");
    tmc.width = 110 + 42;
    tmc.height = 110 + 42;
    var ctx = tmc.getContext("2d");
    ctx.drawImage(argentinai, 21, 21);
    var ctx = argentinabulb.getContext("2d");
    ctx.shadowColor = "#000000";
    ctx.shadowBlur = 20;
    ctx.drawImage(tmc, 0, 0)
};
argentinai.src = "http://slither.io/s/argentina.png";
var movbulb = document.createElement("canvas");
movbulb.width = 100 + 42;
movbulb.height = 121 + 42;
var movi = document.createElement("img");
movi.onload = function() {
    var tmc = document.createElement("canvas");
    tmc.width = 100 + 42;
    tmc.height = 121 + 42;
    var ctx = tmc.getContext("2d");
    ctx.drawImage(movi, 21, 21);
    var ctx = movbulb.getContext("2d");
    ctx.shadowColor = "#000000";
    ctx.shadowBlur = 20;
    ctx.drawImage(tmc, 0, 0)
};
movi.src = "http://slither.io/s/mov2.png";
var colc;
if (testing) {
    colc = document.createElement("canvas");
    colc.width = 256;
    colc.height = 106;
    colc.style.position = "fixed";
    colc.style.left = "0px";
    colc.style.top = "100px";
    colc.style.zIndex = 2147483647;
    document.body.appendChild(colc)
}
var pbx = new Float32Array(32767);
var pby = new Float32Array(32767);
var pba = new Float32Array(32767);
var pbu = new Uint8Array(32767);
var per_color_imgs = [];
var rrs = [192, 144, 128, 128, 238, 255, 255, 255, 224, 255, 144, 80, 255, 40, 100, 120, 72, 160, 255, 56, 56, 78, 255, 101, 128, 60, 0, 217, 255, 144, 32, 240, 240, 240, 240, 32, 40, 104, 0, 104, 0, 128];
var ggs = [128, 153, 208, 255, 238, 160, 144, 64, 48, 255, 153, 80, 192, 136, 117, 134, 84, 80, 224, 68, 68, 35, 86, 200, 132, 192, 255, 69, 64, 144, 32, 32, 240, 144, 32, 240, 60, 128, 0, 40, 0, 128];
var bbs = [255, 255, 208, 128, 112, 96, 144, 64, 224, 255, 255, 80, 80, 96, 255, 255, 255, 255, 64, 255, 255, 192, 9, 232, 144, 72, 83, 69, 64, 144, 240, 32, 32, 32, 240, 32, 173, 255, 112, 170, 0, 255];
var ccs = [];
var ccvs = [];
var max_skin_cv = 64;
for (var i = 0; i < rrs.length; i++) {
    var rs = "00" + rrs[i].toString(16);
    var gs = "00" + ggs[i].toString(16);
    var bs = "00" + bbs[i].toString(16);
    rs = rs.substr(rs.length - 2);
    gs = gs.substr(gs.length - 2);
    bs = bs.substr(bs.length - 2);
    ccs.push("#" + rs + gs + bs);
    ccvs.push(rrs[i] << 16 | ggs[i] << 8 | bbs[i])
}
var alcsc = new Uint8Array(256);
var ralcsc = new Uint8Array(256);
var falcsc = new Uint8Array(256);
var csks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 39, 41];
for (var i = 0; i <= 255; i++) {
    ralcsc[i] = 0;
    falcsc[i] = 0
}
for (var i = csks.length - 1; i >= 0; i--) {
    ralcsc[csks[i]] = 1;
    falcsc[csks[i]] = 1
}
falcsc[40] = 1;
alcsc = ralcsc;
var eyet;
var pupilt;
var tpupilt;
if (ggl) {
    var sz = 6 * 6 * 2;
    var cc = document.createElement("canvas");
    cc.width = cc.height = sz;
    var ctx = cc.getContext("2d");
    ctx.fillStyle = "#FFFFFF";
    ctx.arc(sz / 2, sz / 2, sz / 2, 0, pi2);
    ctx.fill();
    eyeo = {};
    eyeo.cc = cc;
    eyeo.sheet = 0;
    textures.push(eyeo);
    var sz = 3.5 * 6 * 2;
    var cc = document.createElement("canvas");
    cc.width = cc.height = sz;
    var ctx = cc.getContext("2d");
    ctx.fillStyle = "#000000";
    ctx.arc(sz / 2, sz / 2, sz / 2, 0, pi2);
    ctx.fill();
    pupilo = {};
    pupilo.cc = cc;
    pupilo.sheet = 0;
    textures.push(pupilo);
    var sz = 3.5 * 6 * 2;
    var cc = document.createElement("canvas");
    cc.width = cc.height = sz;
    var ctx = cc.getContext("2d");
    ctx.fillStyle = "#FFFFFF";
    ctx.arc(sz / 2, sz / 2, sz / 2, 0, pi2);
    ctx.fill();
    tpupilo = {};
    tpupilo.cc = cc;
    tpupilo.sheet = 0;
    textures.push(tpupilo)
}
for (var i = 0; i < rrs.length; i++) {
    var o = {};
    o.imgs = [];
    o.fws = [];
    o.fhs = [];
    o.fw2s = [];
    o.fh2s = [];
    o.gimgs = [];
    o.gfws = [];
    o.gfhs = [];
    o.gfw2s = [];
    o.gfh2s = [];
    o.oimgs = [];
    o.ofws = [];
    o.ofhs = [];
    o.ofw2s = [];
    o.ofh2s = [];
    var rs = "00" + rrs[i].toString(16);
    var gs = "00" + ggs[i].toString(16);
    var bs = "00" + bbs[i].toString(16);
    rs = rs.substr(rs.length - 2);
    gs = gs.substr(gs.length - 2);
    bs = bs.substr(bs.length - 2);
    o.cs = "#" + rs + gs + bs;
    var sz = 62;
    var kfmc = document.createElement("canvas");
    kfmc.width = kfmc.height = sz;
    var ctx = kfmc.getContext("2d");
    var map = ctx.getImageData(0, 0, sz, sz);
    var imgd = map.data;
    var l = imgd.length;
    var p;
    var xx = 0;
    var yy = 0;
    var fi = i;
    if (i == 26) fi = 3;
    else if (i == 29) fi = 9;
    else if (i == 30) fi = 15;
    else if (i == 31) fi = 7;
    else if (i == 32) fi = 4;
    else if (i == 33) fi = 5;
    else if (i == 34) fi = 0;
    else if (i == 35) fi = 3;
    else if (i == 36) fi = 7;
    else if (i == 41) fi = 15;
    var rr = rrs[fi];
    var gg = ggs[fi];
    var bb = bbs[fi];
    var t1 = (rr + gg + bb) / 3;
    if (t1 <= 24) rr = gg = bb = 90;
    else {
        var t2 = 120 / t1;
        rr = Math.min(255, Math.floor(rr * t2));
        gg = Math.min(255, Math.floor(gg * t2));
        bb = Math.min(255, Math.floor(bb * t2))
    }
    for (p = 0; p < l; p += 4) {
        var v = 1 - Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2)) / 32;
        if (v < 0) v = 0;
        else v = .5 * (1 - Math.cos(Math.PI * v));
        imgd[p] = rr;
        imgd[p + 1] = gg;
        imgd[p + 2] = bb;
        imgd[p + 3] = Math.floor(255 * v);
        xx++;
        if (xx >= sz) {
            xx = 0;
            yy++
        }
    }
    ctx.putImageData(map, 0, 0);
    o.kfmc = kfmc;
    if (ggl) {
        var kfo = {};
        kfo.cc = kfmc;
        kfo.sheet = 0;
        textures.push(kfo);
        o.kfo = kfo
    }
    var ksz = 48;
    var ksz2 = ksz / 2;
    var kmc = document.createElement("canvas");
    kmc.width = kmc.height = ksz;
    var ctx = kmc.getContext("2d");
    ctx.fillStyle = "#FFFFFF";
    ctx.arc(ksz2, ksz2, ksz2, 0, pi2);
    ctx.fill();
    var map = ctx.getImageData(0, 0, ksz, ksz);
    var imgd = map.data;
    var l = imgd.length;
    var p;
    var xx = 0;
    var yy = 0;
    var jk = 7;
    var rr, gg, bb;
    if (i == 36) jk = 60;
    var v3;
    var kmcs = [];
    var kmos = [];
    for (var j = 0; j < jk; j++) {
        xx = yy = 0;
        for (p = 0; p < l; p += 4) {
            var v;
            var v2 = Math.max(0, Math.min(1, 1 - Math.sqrt(Math.pow(xx - ksz2, 2) + Math.pow(yy - ksz2, 2)) / 34));
            if (nsr) v = Math.pow(v2, .5);
            else {
                v = Math.pow(Math.max(0, Math.min(1, 1 - Math.abs(yy - ksz2) / ksz2)), .35);
                v += (v2 - v) * .375
            }
            rr = rrs[i];
            gg = ggs[i];
            bb = bbs[i];
            if (i == 24) {
                v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(1 * (yy - ksz2), 2)) / ksz2;
                v2 = Math.pow(v2 * 1.05, 4);
                if (v2 > 1) v2 = 1;
                rr += (255 * 1.2 - rr) * v2;
                gg += (192 * 1.2 - gg) * v2;
                bb += (64 * 1.2 - bb) * v2;
                v *= 1.22 - .44 * j / (jk - 1)
            } else if (i == 26) {
                v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(1 * (yy - ksz2), 2)) / ksz2;
                v2 = Math.pow(v2, 2);
                if (v2 > 1) v2 = 1;
                v *= 1.22 - .44 * j / (jk - 1);
                rr *= v;
                gg *= v;
                bb *= v;
                v = 1;
                rr += (128 * 1.1 - rr) * v2;
                gg += (255 * 1.1 - gg) * v2;
                bb += (136 * 1.1 - bb) * v2
            } else if (i == 27) {
                v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(1 * (yy - ksz2), 2)) / ksz2;
                v2 = Math.pow(v2, 2);
                if (v2 > 1) v2 = 1;
                v *= 1.22 - .44 * j / (jk - 1);
                rr *= v;
                gg *= v;
                bb *=
                    v;
                v = 1;
                rr += (217 * 1.1 - rr) * v2;
                gg += (69 * 1.1 - gg) * v2;
                bb += (69 * 1.1 - bb) * v2
            } else if (i == 28) {
                v2 = .5 - .5 * Math.cos(Math.PI * j / jk);
                rr += (128 * 1 - rr) * v2;
                gg += (128 * 1 - gg) * v2;
                bb += (255 * 1 - bb) * v2;
                v *= 1.1;
                if (v > 1) v = 1
            } else if (i == 29) {
                v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(1 * (yy - ksz2), 2)) / ksz2;
                v2 = Math.pow(v2, 2);
                if (v2 > 1) v2 = 1;
                v *= 1.44 - .88 * j / (jk - 1);
                rr = v * 32;
                gg = v * 32;
                bb = v * 32;
                v = 1;
                rr += (255 * 1 - rr) * v2;
                gg += (255 * 1 - gg) * v2;
                bb += (255 * 1 - bb) * v2
            } else if (i == 30) {
                v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(1 * (yy - ksz2), 2)) / ksz2;
                v2 = Math.pow(v2, 2);
                if (v2 > 1) v2 = 1;
                v = (.1 + .9 * j / jk) % 1;
                rr = v * 80;
                gg = v * 80;
                bb = 128 + v * 160;
                rr += (255 * 1 - rr) * .3 * v2;
                gg += (255 * 1 - gg) * .3 * v2;
                bb += (255 * 1.4 - bb) * .3 * v2;
                v = 1
            } else if (i == 31) {
                v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(1 * (yy - ksz2), 2)) / ksz2;
                v2 = Math.pow(v2, 2);
                if (v2 > 1) v2 = 1;
                v = (.1 + .9 * j / jk) % 1;
                rr = 128 + v * 160;
                gg = v * 80;
                bb = v * 80;
                rr += (255 * 1.4 - rr) * .3 * v2;
                gg += (255 * 1 - gg) * .3 * v2;
                bb += (255 * 1 - bb) * .3 * v2;
                v = 1
            } else if (i == 32) {
                v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(1 * (yy - ksz2), 2)) / ksz2;
                v2 = Math.pow(v2, 2);
                if (v2 > 1) v2 = 1;
                v = (.1 + .9 * j / jk) % 1;
                rr = 96 + v * 128;
                gg =
                    96 + v * 128;
                bb = v * 80;
                rr += (255 * 1.2 - rr) * .6 * v2;
                gg += (255 * 1.2 - gg) * .6 * v2;
                bb += (255 * 1 - bb) * .6 * v2;
                v = 1
            } else if (i == 33) {
                v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(1 * (yy - ksz2), 2)) / ksz2;
                v2 = Math.pow(v2, 2);
                if (v2 > 1) v2 = 1;
                v = (.1 + .9 * j / jk) % 1;
                rr = 96 + v * 128;
                gg = 48 + v * 80;
                bb = v * 48;
                rr += (255 * 1.2 - rr) * .6 * v2;
                gg += (255 * 1.1 - gg) * .6 * v2;
                bb += (255 * 1 - bb) * .6 * v2;
                v = 1
            } else if (i == 34) {
                v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(1 * (yy - ksz2), 2)) / ksz2;
                v2 = Math.pow(v2, 2);
                if (v2 > 1) v2 = 1;
                v = (.1 + .9 * j / jk) % 1;
                rr = 96 + v * 128;
                gg = v * 80;
                bb = 96 + v * 128;
                rr += (255 * 1.2 - rr) *
                    .6 * v2;
                gg += (255 * 1 - gg) * .6 * v2;
                bb += (255 * 1.2 - bb) * .6 * v2;
                v = 1
            } else if (i == 35) {
                v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(1 * (yy - ksz2), 2)) / ksz2;
                v2 = Math.pow(v2, 2);
                if (v2 > 1) v2 = 1;
                v = (.1 + .9 * j / jk) % 1;
                rr = v * 80;
                gg = 96 + v * 128;
                bb = v * 80;
                rr += (255 * 1 - rr) * .6 * v2;
                gg += (255 * 1.2 - gg) * .6 * v2;
                bb += (255 * 1 - bb) * .6 * v2;
                v = 1
            } else if (i == 36) {
                v3 = (j / jk + .6 + .25 * (xx / ksz)) % 1;
                v2 = (yy - ksz2) / ksz;
                v2 = 1.3 * (v2 - 1.3 * (v3 - .5));
                v2 = v2 * 2;
                if (v2 < 0) v2 = -v2;
                v2 *= 2.4;
                if (v2 < 1) {
                    rr += (255 * 2.2 - rr) * 1 * (1 - v2);
                    gg += (255 * 2.2 - gg) * 1 * (1 - v2);
                    bb += (255 * 2.2 - bb) * 1 * (1 - v2)
                }
                if (v3 < .5) v2 = (yy - ksz2 * .055 - ksz2) / ksz;
                else v2 = (yy + ksz2 * .055 - ksz2) / ksz;
                v2 = 1.3 * (v2 - 1.3 * (v3 - .5));
                v2 = v2 * 2;
                if (v2 < 0) v2 = -v2;
                v2 *= 4.8;
                if (v2 < 1) {
                    rr += (255 * 1 - rr) * 1 * (1 - v2);
                    gg += (32 * 1 - gg) * 1 * (1 - v2);
                    bb += (64 * 1 - bb) * 1 * (1 - v2)
                }
                v2 = (ksz2 - yy) / ksz;
                v2 = 1.3 * (v2 - 1.3 * (v3 - .5));
                v2 = v2 * 2;
                if (v2 < 0) v2 = -v2;
                v2 *= 2.4;
                if (v2 < 1) {
                    rr += (255 * 2.2 - rr) * 1 * (1 - v2);
                    gg += (255 * 2.2 - gg) * 1 * (1 - v2);
                    bb += (255 * 2.2 - bb) * 1 * (1 - v2)
                }
                if (v3 < .5) v2 = (ksz2 + ksz2 * .055 - yy) / ksz;
                else v2 = (ksz2 - ksz2 * .055 - yy) / ksz;
                v2 = 1.3 * (v2 - 1.3 * (v3 - .5));
                v2 = v2 * 2;
                if (v2 < 0) v2 = -v2;
                v2 *= 4.8;
                if (v2 < 1) {
                    rr += (255 * 1 - rr) * 1 * (1 - v2);
                    gg += (32 * 1 - gg) * 1 * (1 - v2);
                    bb += (64 * 1 - bb) * 1 * (1 - v2)
                }
                v2 = (yy - ksz2) / ksz;
                if (v3 >= .47 && v3 <= .53) {
                    rr = 255;
                    gg = 32;
                    bb = 64
                } else if (v2 >= -.1 && v2 <= .1) {
                    v3 = .5 - v3;
                    if (v3 < 0) v3 = -v3;
                    v3 = 1 - Math.pow(v3 / .5, 2);
                    rr += (255 - rr) * v3;
                    gg += (32 - gg) * v3;
                    bb += (64 - bb) * v3
                } else if (v3 >= .44 && v3 <= .56 || v2 >= -.15 && v2 <= .15) {
                    v3 = .5 - v3;
                    if (v3 < 0) v3 = -v3;
                    v3 = 1 - Math.pow(v3 / .5, 2);
                    rr += (255 - rr) * v3;
                    gg += (255 - gg) * v3;
                    bb += (255 - bb) * v3
                }
                if (!nsr) {
                    v = Math.pow(Math.max(0, Math.min(1, 1 - Math.abs(yy - ksz2) / ksz2)), .35);
                    v2 = Math.pow(Math.max(0, Math.min(1, 1 - Math.abs(yy - ksz2) / ksz2)), .5);
                    rr += (rrs[i] - rr) * (1 - v2);
                    gg += (ggs[i] - gg) * (1 - v2);
                    bb += (bbs[i] - bb) * (1 - v2)
                }
            } else if (i == 41) {
                v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(1 * (yy - ksz2), 2)) / ksz2;
                v2 = Math.pow(v2, 2);
                if (v2 > 1) v2 = 1;
                v = (.1 + .9 * j / jk) % 1;
                rr = v * 240;
                gg = v * 255;
                bb = 160 + v * 255;
                rr += (255 * 1 - rr) * .3 * v2;
                gg += (255 * 1 - gg) * .3 * v2;
                bb += (255 * 1.4 - bb) * .3 * v2;
                v = 1
            } else v *= 1.22 - .44 * j / (jk - 1);
            imgd[p] = Math.max(0, Math.min(255, Math.floor(rr * v)));
            imgd[p + 1] = Math.max(0, Math.min(255, Math.floor(gg * v)));
            imgd[p + 2] = Math.max(0, Math.min(255, Math.floor(bb * v)));
            xx++;
            if (xx >= ksz) {
                xx = 0;
                yy++
            }
        }
        ctx.putImageData(map,
            0, 0);
        var kmc2 = document.createElement("canvas");
        kmc2.width = kmc2.height = ksz;
        var ctx2 = kmc2.getContext("2d");
        ctx2.drawImage(kmc, 0, 0);
        if (i == 10) {
            var fk = -1;
            var tk = 1;
            if (nsr) {
                fk = -4;
                tk = 3
            }
            for (var k = fk; k <= tk; k++) {
                var tx = ksz2 + Math.cos(2 * Math.PI * k / 8) * (ksz2 / 16) * 13;
                var ty = ksz2 + Math.sin(2 * Math.PI * k / 8) * (ksz2 / 16) * 13;
                ctx2.fillStyle = "#FFFFFF";
                ctx2.beginPath();
                for (var m = 0; m <= 5; m++) {
                    xx = tx + Math.cos(2 * Math.PI * m / 5) * 24 * .05 * (ksz / 32);
                    yy = ty + Math.sin(2 * Math.PI * m / 5) * 24 * .05 * (ksz / 32);
                    if (m == 0) ctx2.moveTo(xx, yy);
                    else ctx2.lineTo(xx, yy);
                    xx = tx + Math.cos(2 * Math.PI * (m + .5) / 5) * 62 * .05 * (ksz / 32);
                    yy = ty + Math.sin(2 * Math.PI * (m + .5) / 5) * 62 * .05 * (ksz / 32);
                    ctx2.lineTo(xx, yy)
                }
                ctx2.fill()
            }
        } else if (i == 19) {
            var fk = -2;
            var tk = 2;
            if (nsr) {
                fk = -7;
                tk = 7
            }
            for (var k = fk; k <= tk; k++) {
                var tx = ksz2 + Math.cos(2 * Math.PI * k / 15) * (ksz2 / 16) * 13;
                var ty = ksz2 + Math.sin(2 * Math.PI * k / 15) * (ksz2 / 16) * 13;
                ctx2.save();
                ctx2.globalAlpha = .7;
                ctx2.fillStyle = "#FFFFFF";
                ctx2.beginPath();
                for (var m = 0; m <= 5; m++) {
                    xx = tx + Math.cos(2 * Math.PI * m / 5) * 12 * .05 * (ksz / 32);
                    yy = ty + Math.sin(2 * Math.PI * m / 5) * 12 * .05 * (ksz / 32);
                    if (m == 0) ctx2.moveTo(xx, yy);
                    else ctx2.lineTo(xx, yy);
                    xx = tx + Math.cos(2 * Math.PI * (m + .5) / 5) * 31 * .05 * (ksz / 32);
                    yy = ty + Math.sin(2 * Math.PI * (m + .5) / 5) * 31 * .05 * (ksz / 32);
                    ctx2.lineTo(xx, yy)
                }
                ctx2.fill();
                ctx2.restore()
            }
        } else if (i == 20) {
            var fk = -1.5;
            var tk = 1.5;
            if (nsr) {
                fk = -6.5;
                tk = 7.5
            }
            for (var k = fk; k <= tk; k++) {
                var tx = ksz2 + Math.cos(2 * Math.PI * k / 15) * (ksz2 / 16) * 13;
                var ty = ksz2 + Math.sin(2 * Math.PI * k / 15) * (ksz2 / 16) * 13;
                ctx2.save();
                ctx2.globalAlpha = .7;
                ctx2.fillStyle = "#FFFFFF";
                ctx2.beginPath();
                for (var m = 0; m <= 5; m++) {
                    xx = tx + Math.cos(2 * Math.PI * m / 5) * 14 * .05 * (ksz2 / 16);
                    yy = ty + Math.sin(2 * Math.PI * m / 5) * 14 * .05 * (ksz2 / 16);
                    if (m == 0) ctx2.moveTo(xx, yy);
                    else ctx2.lineTo(xx, yy);
                    xx = tx + Math.cos(2 * Math.PI * (m + .5) / 5) * 36 * .05 * (ksz2 / 16);
                    yy = ty + Math.sin(2 * Math.PI * (m + .5) / 5) * 36 * .05 * (ksz2 / 16);
                    ctx2.lineTo(xx, yy)
                }
                ctx2.fill();
                ctx2.restore()
            }
        }
        if (iioc && testing)
            if (kmcs.length >= 1) kmcs.push(kmcs[0]);
            else if (per_color_imgs.length >= 2) kmcs.push(per_color_imgs[0].kmcs[0]);
        else {
            var u = kmc2.toDataURL();
            var ii = document.createElement("img");
            ii.src = "ayy.png";
            kmcs.push(ii)
        } else kmcs.push(kmc2);
        if (ggl) {
            var txo = {};
            txo.cc = kmc2;
            txo.sheet = 0;
            textures.push(txo);
            kmos.push(txo)
        }
    }
    o.kmcs = kmcs;
    o.kmos = kmos;
    o.kl = kmcs.length;
    o.klp = true;
    if (i == 36) o.klp = false;
    per_color_imgs.push(o);
    if (ggl) {
        var j = 18.8;
        rr = rrs[i];
        gg = ggs[i];
        bb = bbs[i];
        if (i <= 9) {
            var wodo = {};
            var wfdo = {};
            var wgdo = {};
            var cc = document.createElement("canvas");
            var sz = 64;
            cc.width = cc.height = sz;
            var ctx = cc.getContext("2d");
            var eam = .2;
            var g = ctx.createRadialGradient(sz / 2, sz / 2, 0, sz / 2, sz / 2, sz / 2);
            g.addColorStop(0, "rgba(" + rr + ", " + gg + ", " + bb + ", 1)");
            g.addColorStop(.99, "rgba(" + Math.floor(rr * eam) + ", " + Math.floor(gg * eam) + ", " + Math.floor(bb * eam) + ", 1)");
            g.addColorStop(1, "rgba(" + Math.floor(rr * eam) + ", " + Math.floor(gg * eam) + ", " + Math.floor(bb * eam) + ", 0)");
            ctx.fillStyle = g;
            ctx.fillRect(0, 0, sz, sz);
            wodo.cc = cc;
            wodo.sheet = 0;
            textures.push(wodo);
            o.wodo = wodo;
            var j = 18.8;
            var cc = document.createElement("canvas");
            var sz = Math.ceil(j * 2.5 + 28);
            cc.width = cc.height = sz;
            var ctx = cc.getContext("2d");
            ctx.fillStyle = o.cs;
            ctx.arc(sz / 2, sz / 2, j * .65, 0, pi2);
            ctx.shadowBlur = 12;
            ctx.shadowOffsetY = 0;
            ctx.shadowColor = o.cs;
            ctx.globalAlpha = .8;
            ctx.fill();
            ctx.globalAlpha = 1;
            ctx.fill();
            wfdo.cc = cc;
            wfdo.sheet = 0;
            textures.push(wfdo);
            o.wfdo = wfdo;
            sz = 64;
            var cc = document.createElement("canvas");
            cc.width = cc.height = sz;
            var ctx = cc.getContext("2d");
            var g = ctx.createRadialGradient(sz / 2, sz / 2, 1, sz / 2, sz / 2, sz / 2);
            g.addColorStop(0, "rgba(" + rr + ", " + gg + ", " + bb + ", 1)");
            g.addColorStop(1, "rgba(" + rr + ", " + gg + ", " + bb + ", 0)");
            ctx.fillStyle = g;
            ctx.fillRect(0, 0, sz, sz);
            wgdo.cc = cc;
            wgdo.sheet = 0;
            textures.push(wgdo);
            o.wgdo = wgdo;
            sz = 128;
            var cc = document.createElement("canvas");
            cc.width = cc.height = sz;
            var ctx = cc.getContext("2d");
            var g = ctx.createRadialGradient(sz / 2, sz / 2, 1, sz / 2, sz / 2, 63);
            g.addColorStop(0, "rgba(" + rr + ", " + gg + ", " + bb + ", 1)");
            g.addColorStop(1, "rgba(" + rr + ", " + gg + ", " + bb + ", 0)");
            ctx.fillStyle = g;
            ctx.fillRect(0, 0, sz, sz);
            var gpro = {};
            gpro.cc = cc;
            gpro.sheet = 0;
            textures.push(gpro);
            o.gpro = gpro
        }
    } else if (i <= 9)
        for (var j = 2.8; j <= 18.8; j += 1) {
            var cc = document.createElement("canvas");
            var sz = Math.ceil(2 * (j * .65 + 0 * 6));
            cc.width = cc.height = sz;
            var ctx = cc.getContext("2d");
            var eam = .2;
            var g = ctx.createRadialGradient(sz / 2, sz / 2, 0, sz / 2, sz / 2, sz / 2);
            var trr = rr;
            var tgg = gg;
            var tbb = bb;
            if (i == 1);
            else if (i == 9) {
                trr = 160;
                tgg = 160;
                tbb = 160
            }
            g.addColorStop(0, "rgba(" + trr + ", " + tgg + ", " + tbb + ", 1)");
            g.addColorStop(.99, "rgba(" + trr + ", " + tgg + ", " + tbb + ", " + eam + ")");
            g.addColorStop(1, "rgba(" + trr + ", " + tgg + ", " + tbb + ", 0)");
            ctx.fillStyle = g;
            ctx.fillRect(0, 0, sz, sz);
            if (iioc && testing) {
                var u = cc.toDataURL();
                var ii = document.createElement("img");
                ii.src = u;
                o.imgs.push(ii)
            } else o.imgs.push(cc);
            o.fws.push(sz);
            o.fhs.push(sz);
            o.fw2s.push(sz / 2);
            o.fh2s.push(sz / 2);
            sz = Math.ceil(j * 8 + 6);
            var cc = document.createElement("canvas");
            cc.width = cc.height = sz;
            var ctx = cc.getContext("2d");
            var g = ctx.createRadialGradient(sz / 2, sz / 2, 1, sz / 2, sz / 2, j * 4);
            g.addColorStop(0, "rgba(" + rr + ", " + gg + ", " + bb + ", 1)");
            g.addColorStop(1, "rgba(" + rr + ", " + gg + ", " + bb + ", 0)");
            ctx.fillStyle = g;
            ctx.fillRect(0, 0, sz, sz);
            if (iioc && testing) {
                var u = cc.toDataURL();
                var ii = document.createElement("img");
                ii.src = u;
                o.gimgs.push(ii)
            } else o.gimgs.push(cc);
            o.gfws.push(sz);
            o.gfhs.push(sz);
            o.gfw2s.push(sz / 2);
            o.gfh2s.push(sz / 2);
            var cc = document.createElement("canvas");
            var bsz = Math.ceil(2 * (j * .7 + 0 * 6)) + 2;
            var sz = bsz + 20;
            cc.width = cc.height = sz;
            var ctx = cc.getContext("2d");
            ctx.shadowBlur = 6;
            ctx.shadowOffsetY = 1 + 2 * j / 18.8;
            ctx.shadowColor = "#000000";
            ctx.globalAlpha = 1;
            ctx.beginPath();
            for (var k = 0; k <= 600; k++) {
                xx = sz / 2 + Math.cos(2 * Math.PI * k / 600) * bsz / 2;
                yy = sz / 2 + Math.sin(2 * Math.PI * k / 600) * bsz / 2;
                if (k == 0) ctx.moveTo(xx, yy);
                else ctx.lineTo(xx, yy)
            }
            ctx.fill();
            if (iioc && testing) {
                var u = cc.toDataURL();
                var ii = document.createElement("img");
                ii.src = u;
                o.oimgs.push(ii)
            } else o.oimgs.push(cc);
            o.ofws.push(sz);
            o.ofhs.push(sz);
            o.ofw2s.push(sz / 2);
            o.ofh2s.push(sz / 2)
        }
    if (i <= 9) {
        if (!ggl) {
            o.ic = o.imgs.length;
            o.pr_imgs = [];
            o.pr_fws = [];
            o.pr_fhs = [];
            o.pr_fw2s = [];
            o.pr_fh2s = [];
            var cc;
            var sz;
            var ctx;
            for (var j = 3; j <= 24; j += 1) {
                cc = document.createElement("canvas");
                sz = Math.ceil(j * 2 + 38);
                cc.width = cc.height = sz;
                ctx = cc.getContext("2d");
                ctx.fillStyle = o.cs;
                ctx.arc(sz / 2, sz / 2, j / 2, 0, pi2);
                ctx.shadowBlur = 22;
                ctx.shadowOffsetY = 0;
                ctx.shadowColor = "#" + rs + gs + bs;
                ctx.fill();
                ctx.fill();
                if (iioc && testing) {
                    var u = cc.toDataURL();
                    var ii = document.createElement("img");
                    ii.src = u;
                    o.pr_imgs.push(ii)
                } else o.pr_imgs.push(cc);
                o.pr_fws.push(sz);
                o.pr_fhs.push(sz);
                o.pr_fw2s.push(sz / 2);
                o.pr_fh2s.push(sz / 2)
            }
        }
        if (ggl) {
            cc = document.createElement("canvas");
            sz = Math.ceil(24 * 2 + 38);
            cc.width = cc.height = sz;
            ctx = cc.getContext("2d");
            ctx.fillStyle = o.cs;
            ctx.arc(sz / 2, sz / 2, 24 / 2, 0, pi2);
            ctx.shadowBlur = 22;
            ctx.shadowOffsetY = 0;
            ctx.shadowColor = "#" + rs + gs + bs;
            ctx.fill();
            ctx.fill();
            var pro = {};
            pro.cc = cc;
            pro.sheet = 0;
            textures.push(pro);
            o.pro = pro
        }
    }
}
if (testing) {
    var ctx = colc.getContext("2d");
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, colc.width, colc.height);
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "10px Arial, Helvetica Neue, Helvetica, sans-serif";
    ctx.textBaseline = "top";
    ctx.textAlign = "center";
    var xx = 0;
    var yy = 0;
    for (var i = 0; i < rrs.length; i++) {
        var pci = per_color_imgs[i];
        var kmc = pci.kmcs[0];
        ctx.drawImage(kmc, 0, 0, kmc.width, kmc.height, xx, yy, 16, 16);
        ntx = o.xx + o.fx;
        nty = o.yy + o.fy;
        ntx = mww2 + (ntx - view_xx) * gsc;
        nty = mhh2 + (nty - view_yy) * gsc;
        ctx.fillText("" + i, xx + 8, yy + 16);
        xx += 16;
        if (xx > colc.width - 16) {
            xx = 0;
            yy += 28
        }
    }
}
var view_xx = 0;
var view_yy = 0;
var view_ang = 0;
var view_dist = 0;
var fvx = 0;
var fvy = 0;
var xm = 0;
var ym = 0;
var lsxm = 0;
var lsym = 0;
var slither = null;
var my_nick = "";
var gw2k16 = false;
try {
    if (localStorage.gw2k16 == "1") gw2k16 = true
} catch (e) {}
var dhx, dhy, hsz;
var fr = 0;
var lfr = 0;
var ltm = timeObj.now();
var vfr = 0;
var vfrb = 0;
var avfr = 0;
var afr = 0;
var fr2 = 0;
var lfr2 = 0;
var vfrb2 = 0;
var cptm = 0;
var lptm = 0;
var lpstm = 0;
var last_ping_mtm = 0;
var want_etm_s = false;
var want_seq = false;
var lseq = 0;
var lagging = false;
var lag_mult = 1;
var wfpr = false;
var high_quality = true;
var gla = 1;
var wdfg = 0;
var qsm = 1;
var mqsm = 1.7;
var playing = false;
var connected = false;
var want_close_socket = false;
var want_victory_message = false;
var want_victory_focus = false;
var want_hide_victory = 0;
var hvfr = 0;
var dead_mtm = -1;
var at2lt = new Float32Array(65536);
for (yy = 0; yy < 256; yy++)
    for (xx = 0; xx < 256; xx++) at2lt[yy << 8 | xx] = Math.atan2(yy - 128, xx - 128);
var kd_l_frb = 0;
var kd_r_frb = 0;
var kd_l = false;
var kd_r = false;
var kd_u = false;
var lkstm = 0;
var social = document.createElement("iframe");
try {
    social.frameBorder = 0
} catch (e) {}
social.style.position = "fixed";
social.style.left = "6px";
social.style.top = "6px";
social.style.border = "0px";
social.style.zIndex = 999;
social.style.overflow = "hidden";
social.width = 251;
social.height = 150;
social.src = "http://slither.io/social-box/";
document.body.appendChild(social);
var oef = function() {
    if (whmos) hmos();
    var ctm = timeObj.now();
    vfr = (ctm - ltm) / 8;
    if (vfr > 5) vfr = 5;
    if (vfr < 0) vfr = 0;
    avfr = vfr;
    ltm = ctm;
    if (!choosing_skin) {
        if (!lagging)
            if (wfpr && ctm - last_ping_mtm > 750)
                if (!want_play)
                    if (!checking_code) lagging = true;
        if (lagging) {
            lag_mult *= .85;
            if (lag_mult < .2) lag_mult = .2
        } else if (lag_mult < 1) {
            lag_mult += .05;
            if (lag_mult >= 1) lag_mult = 1
        }
    }
    if (vfr > 120) vfr = 120;
    vfr *= lag_mult;
    lfr = fr;
    fr += vfr;
    vfrb = Math.floor(fr) - Math.floor(lfr);
    lfr2 = fr2;
    fr2 += vfr * 2;
    vfrb2 = Math.floor(fr2) - Math.floor(lfr2);
    afr += avfr;
    if (connected)
        if (slither !=
            null) {
            if (kd_l) kd_l_frb += vfrb;
            if (kd_r) kd_r_frb += vfrb
        } if (want_play && !shoa)
        if (dead_mtm == -1) connect();
    if (buildia_shown)
        if (buildia_close_after_tm != -1)
            if (ctm > buildia_close_after_tm) trySkipBuildia();
    var svlch = false;
    if (svl_showing) {
        svlch = true;
        svl_a += vfr * .02;
        if (svl_a >= 1) {
            svl_showing = false;
            svl_a = 1
        }
    } else if (svl_hiding) {
        svlch = true;
        svl_a -= vfr * .025;
        if (svl_a <= 0) {
            svl_hiding = false;
            svl_bg.style.display = "none";
            svl.style.display = "none";
            svl_a = 0
        }
    }
    if (svlch) {
        scaleSvl();
        svl_bg.style.opacity = .88 * svl_a;
        svl.style.opacity = svl_a
    }
    if (spinner_shown) {
        lsfr += avfr;
        var ctx = ldmc.getContext("2d");
        ctx.clearRect(0, 0, 512, 128);
        var ic = 256;
        var rad;
        var k;
        for (var j = 1; j <= 2; j++) {
            ctx.beginPath();
            if (j == 1) {
                ctx.fillStyle = "#60FF70";
                k = 0
            } else {
                ctx.fillStyle = "#9850FF";
                k = Math.PI
            }
            for (var i = 0; i <= ic; i++) {
                rad = 32 + Math.cos(k + lsfr / 6 + 8 * i / ic) * 5 + 8 * i / ic;
                if (i == ic) rad += 10;
                xx = 64 + Math.cos(k + lsfr / 44 + .8 * Math.PI * i / ic) * rad * 1.25;
                yy = 64 + Math.sin(k + lsfr / 44 + .8 * Math.PI * i / ic) * rad;
                if (i == 0) ctx.moveTo(xx, yy);
                else ctx.lineTo(xx, yy)
            }
            rad = 32;
            xx = 64 + Math.cos(k + lsfr / 44 + .8 * Math.PI * (i + 47) / ic) * rad * 1.25;
            yy = 64 + Math.sin(k + lsfr / 44 + .8 * Math.PI * (i + 47) / ic) * rad;
            ctx.lineTo(xx, yy);
            for (var i = ic; i >= 0; i--) {
                rad = 32 + Math.cos(k + lsfr / 6 + 8 * i / ic) * 5 - 8 * i / ic;
                if (i == ic) rad -= 10;
                xx = 64 + Math.cos(k + lsfr / 44 + .8 * Math.PI * i / ic) * rad * 1.25;
                yy = 64 + Math.sin(k + lsfr / 44 + .8 * Math.PI * i / ic) * rad;
                ctx.lineTo(xx, yy)
            }
            ctx.fill()
        }
        if (connecting || want_play) {
            ss_a += avfr / 86;
            if (ss_a >= 1) ss_a = 1;
            ss_sh += avfr / 93;
            if (ss_sh >= 1) ss_sh = 1;
            ldmc.style.opacity = ss_a;
            var sc = Math.round(.1 + .9 * ss_sh * (1 + 2 * Math.pow(1 - ss_a, 2)) * 1E5) / 1E5;
            trf(ldmc, "scale(" + sc + "," + sc + ")")
        } else {
            ss_a -= avfr / 86;
            if (ss_a <= 0) {
                ss_a = 0;
                ss_sh = 0;
                ldmc.style.display = "none";
                trf(ldmc, "")
            }
            ldmc.style.opacity = ss_a;
            var sc = Math.round(.1 + .9 * ss_sh * (1 + 2 * Math.pow(1 - ss_a, 2)) * 1E5) / 1E5;
            trf(ldmc, "scale(" + sc + "," + sc + ")")
        }
    }
    if (entering_code || ending_enter_code) {
        for (var i = etcobs.length - 1; i >= 0; i--) {
            var o = etcobs[i];
            if (o.loaded)
                if (checking_code) {
                    if (o.alpha != .25) {
                        o.alpha -= vfr * .02;
                        if (o.alpha <= .25) o.alpha = .25;
                        o.ii.style.opacity = o.alpha
                    }
                } else if (o.alpha != 1) {
                o.alpha += vfr * .02;
                if (o.alpha >= 1) o.alpha = 1;
                o.ii.style.opacity = o.alpha
            }
        }
        if (ending_enter_code) {
            etca -=
                vfr * .03;
            if (etca <= 0) {
                etca = 0;
                etcbx = 0;
                etcdx = etc_ww / 2 - 54 / 2;
                etcods = [];
                ending_enter_code = false;
                entering_code = false;
                etcod.style.display = "none";
                nick.disabled = false;
                nick.focus();
                if (want_open_cosmetics) {
                    want_open_cosmetics = false;
                    csk.onclick();
                    scos.onclick()
                }
            }
            etcod.style.opacity = etca
        } else if (entering_code)
            if (etca != 1) {
                etca += vfr * .03;
                if (etca >= 1) etca = 1;
                etcod.style.opacity = etca
            } etcba += vfr * .1;
        if (etcba >= pi2) etcba -= pi2;
        if (etcshk) {
            etcshkv += vfr * .014;
            if (etcshkv >= 1) {
                etcshkv = 1;
                etcshk = false
            }
            etcc.style.left = Math.round((Math.sin(Math.PI *
                etcshkv * 8) * 32 * Math.sin(Math.PI * etcshkv) + ww / 2 - etc_ww / 2) * 10) / 10 + "px"
        }
        if (checking_code || etcsa > 0) {
            etcsv += vfr * .0075;
            if (etcsv >= 1) etcsv -= 1;
            if (checking_code) {
                etcsa += vfr * .02;
                if (etcsa >= 1) etcsa = 1
            } else {
                etcsa -= vfr * .05;
                if (etcsa <= 0) etcsa = 0
            }
            etco_sp_ii.style.opacity = etcsa;
            var letcsrv = etcsrv;
            etcsrv = Math.round(etcsv * 12);
            if (etcsrv != letcsrv) adjustCodeSpinner()
        }
        if (etcods.length == 14) {
            if (etcbaa != 0) {
                etcbaa -= vfr * .05;
                if (etcbaa <= 0) etcbaa = 0
            }
        } else if (etcbaa != 1) {
            etcbaa += vfr * .05;
            if (etcbaa >= 1) etcbaa = 1
        }
        var ctx = etcc.getContext("2d");
        ctx.save();
        ctx.clearRect(0, 0, etc_ww, etc_hh);
        var el = Math.min(13, etcods.length);
        etcbx += (el * 47 - etcbx) * .2;
        etcdx += (etc_ww / 2 - 54 / 2 - 47 * el / 2 - etcdx) * .1;
        ctx.globalAlpha = 1;
        ctx.translate(etcdx, 0);
        for (var i = 0; i < etcods.length; i++) {
            var v = etcods[i].v;
            if (etcdis[v].loaded) ctx.drawImage(etcdis[v].ii, i * 47, 0, 54, 67)
        }
        if (etcdis[11].loaded) {
            ctx.globalAlpha = etcbaa * (.5 + .4 * Math.cos(etcba));
            ctx.drawImage(etcdis[11].ii, etcbx, 0, 54, 67)
        }
        ctx.restore()
    }
    if (ending_build_skin) {
        if (bdska != 0) {
            bdska -= vfr * .015;
            if (bdska <= 0) {
                bdska = 0;
                ending_build_skin = false;
                building_skin = false;
                alcsc = ralcsc;
                for (var i = bskbtns.length - 1; i >= 0; i--) document.body.removeChild(bskbtns[i].a);
                bskbtns = [];
                revdiv.style.display = "none"
            }
            var k = .5 * (1 - Math.cos(Math.PI * bdska));
            bskoy = k * 90;
            skoboym = k;
            reposSkinStuff();
            pskh.style.opacity = 1 - bdska;
            nskh.style.opacity = 1 - bdska;
            bskh.style.opacity = 1 - bdska;
            scosh.style.opacity = 1 - bdska;
            revdiv.style.opacity = bdska;
            for (var i = bskbtns.length - 1; i >= 0; i--) {
                var o = bskbtns[i];
                o.ii.style.opacity = bdska
            }
        }
    } else if (building_skin)
        if (bdska != 1) {
            bdska += vfr * .015;
            if (bdska >=
                1) bdska = 1;
            var k = .5 * (1 - Math.cos(Math.PI * bdska));
            bskoy = k * 90;
            skoboym = k;
            reposSkinStuff();
            pskh.style.opacity = 1 - bdska;
            nskh.style.opacity = 1 - bdska;
            bskh.style.opacity = 1 - bdska;
            scosh.style.opacity = 1 - bdska;
            revdiv.style.opacity = bdska;
            for (i = bskbtns.length - 1; i >= 0; i--) {
                var o = bskbtns[i];
                o.ii.style.opacity = bdska
            }
        } if (ending_select_cosmetic) {
        if (secosa != 0) {
            secosa -= vfr * .015;
            if (secosa <= 0) {
                secosa = 0;
                ending_select_cosmetic = false;
                selecting_cosmetic = false;
                for (var i = cosbtns.length - 1; i >= 0; i--) document.body.removeChild(cosbtns[i].a);
                cosbtns = []
            }
            var k = .5 * (1 - Math.cos(Math.PI * secosa));
            secosoy = k * 90;
            secosoym = k;
            reposSkinStuff();
            pskh.style.opacity = 1 - secosa;
            nskh.style.opacity = 1 - secosa;
            bskh.style.opacity = 1 - secosa;
            scosh.style.opacity = 1 - secosa;
            for (var i = cosbtns.length - 1; i >= 0; i--) {
                var o = cosbtns[i];
                o.ii.style.opacity = secosa
            }
        }
    } else if (selecting_cosmetic)
        if (secosa != 1) {
            secosa += vfr * .015;
            if (secosa >= 1) secosa = 1;
            var k = .5 * (1 - Math.cos(Math.PI * secosa));
            secosoy = k * 90;
            secosoym = k;
            reposSkinStuff();
            pskh.style.opacity = 1 - secosa;
            nskh.style.opacity = 1 - secosa;
            bskh.style.opacity =
                1 - secosa;
            scosh.style.opacity = 1 - secosa;
            for (i = cosbtns.length - 1; i >= 0; i--) {
                var o = cosbtns[i];
                o.ii.style.opacity = secosa
            }
        } if (connecting)
        if (ctm - start_connect_mtm > 3333) {
            if (bso)
                if (!bso.tainted) {
                    bso.tainted = true;
                    bso.tainted_mtm = ctm;
                    if (fobso != null) {
                        fobso = null;
                        forcing = false
                    }
                    if (bso.ip == "40.160.21.51") {
                        teams_disabled = true;
                        if (teams_exist) {
                            trumpbtnh.style.display = "none";
                            votetxth.style.display = "none";
                            kamalabtnh.style.display = "none"
                        }
                    }
                } connect()
        } if (choosing_skin) {
        for (var i = slithers.length - 1; i >= 0; i--) {
            var o = slithers[i];
            for (var j = o.pts.length - 1; j >= 0; j--) o.pts[j].yy = grd / 2 + Math.cos(j / 4 + fr / 19) * 15 * (1 - j / o.pts.length);
            o.xx = o.pts[o.pts.length - 1].xx;
            o.yy = o.pts[o.pts.length - 1].yy
        }
        view_xx -= vfr
    }
    if (!ggl)
        if (playing)
            if (!high_quality) {
                if (gla > 0) {
                    gla -= vfr * .0075;
                    if (gla < 0) gla = 0
                }
                if (qsm < mqsm) {
                    qsm += vfr * 4E-5;
                    if (qsm > mqsm) qsm = mqsm
                }
            } else {
                if (gla < 1) {
                    gla += vfr * .0075;
                    if (gla > 1) gla = 1
                }
                if (qsm > 1) {
                    qsm -= vfr * 4E-5;
                    if (qsm < 1) qsm = 1
                }
            } if (want_hide_victory != 0)
        if (want_hide_victory == 1) {
            hvfr += vfr * .02;
            if (hvfr >= 1) {
                hvfr = 0;
                want_hide_victory = 2;
                victory_holder.style.opacity =
                    1;
                saveh.style.opacity = 1;
                victory_holder.style.display = "none";
                saveh.style.display = "none";
                nick_holder.style.opacity = 0;
                playh.style.opacity = 0;
                smh.style.opacity = 0;
                nick_holder.style.display = "inline-block";
                playh.style.display = "block";
                smh.style.display = "block"
            } else {
                victory_holder.style.opacity = 1 - hvfr;
                saveh.style.opacity = 1 - hvfr
            }
        } else if (want_hide_victory == 2) {
        hvfr += vfr * .02;
        if (hvfr >= 1) {
            hvfr = 1;
            want_hide_victory = 0
        }
        nick_holder.style.opacity = hvfr;
        playh.style.opacity = hvfr;
        smh.style.opacity = hvfr
    }
    if (login_fr != 1)
        if (tip_fr !=
            -1) {
            tip_fr += vfr * .017;
            if (tip_fr >= pi2) {
                tip_fr -= pi2;
                tip_pos++;
                if (tip_pos >= tipss.length) tip_pos = 0;
                tips.textContent = tipss[tip_pos]
            }
            var j = .5 - .5 * Math.cos(tip_fr);
            tips.style.opacity = Math.round(Math.pow(j, .5) * 1E5) / 1E5
        } if (dead_mtm == -1) {
        if (lb_fr != -1)
            if (lb_fr != 1) {
                lb_fr += vfr * .01;
                if (lb_fr >= 1) lb_fr = 1;
                lbh.style.opacity = lb_fr * .85;
                lbs.style.opacity = lbn.style.opacity = lbp.style.opacity = lbf.style.opacity = vcm.style.opacity = lb_fr
            }
    } else if (ctm - dead_mtm > 1600) {
        if (login_iv == -1) {
            login_iv = -2;
            login.style.display = "inline";
            cskh.style.display =
                "inline";
            csrvh.style.display = "inline";
            if (!is_mobile)
                if (!teams_disabled)
                    if (teams_exist) {
                        trumpbtnh.style.display = "inline";
                        votetxth.style.display = "inline";
                        kamalabtnh.style.display = "inline"
                    } if (hacos || bonkz) etcoh.style.display = "inline";
            plq.style.display = "inline";
            clq.style.display = "inline";
            grqh.style.display = "inline";
            social.style.display = "inline";
            if (want_victory_focus) {
                want_victory_focus = false;
                victory.focus()
            }
        }
        if (login_iv == -2) {
            login_fr -= .004 * vfr;
            if (choosing_skin) login_fr -= .007 * vfr;
            lb_fr = login_fr;
            if (login_fr <= 0) {
                login_fr = 0;
                dead_mtm = -1;
                nick.disabled = false;
                nick.focus();
                lb_fr = -1;
                playing = false;
                if (choosing_skin) {
                    choosing_skin = false;
                    resetGame();
                    pskh.style.display = "none";
                    nskh.style.display = "none";
                    bskh.style.display = "none";
                    scosh.style.display = "none";
                    skodiv.style.display = "none";
                    revdiv.style.display = "none"
                }
            }
            pbdiv.style.opacity = 1 - .5 * Math.max(0, Math.min(1, login_fr * 6));
            lgcsc = 1 + .1 * Math.pow(login_fr, 2);
            var sc = Math.round(lgbsc * lgcsc * 1E5) / 1E5;
            if (sc == 1) trf(login, "");
            else trf(login, "scale(" + sc + "," + sc + ")");
            login.style.opacity = 1 - login_fr;
            cskh.style.opacity = 1 - login_fr;
            csrvh.style.opacity = 1 - login_fr;
            if (teams_exist) {
                trumpbtnh.style.opacity = 1 - login_fr;
                votetxth.style.opacity = (1 - login_fr) * votetxt_a;
                kamalabtnh.style.opacity = 1 - login_fr
            }
            etcoh.style.opacity = 1 - login_fr;
            grqh.style.opacity = 1 - login_fr;
            plq.style.opacity = 1 - login_fr;
            clq.style.opacity = 1 - login_fr;
            social.style.opacity = 1 - login_fr;
            pskh.style.opacity = login_fr;
            nskh.style.opacity = login_fr;
            bskh.style.opacity = login_fr;
            scosh.style.opacity = login_fr;
            skodiv.style.opacity = login_fr;
            revdiv.style.opacity = login_fr;
            if (ggl) app.view.style.opacity = login_fr;
            mc.style.opacity = login_fr;
            loch.style.opacity = login_fr * mmal;
            sbmc.style.opacity = login_fr * tsbal;
            lbh.style.opacity = lb_fr * .85;
            lbs.style.opacity = lbn.style.opacity = lbp.style.opacity = lbf.style.opacity = vcm.style.opacity = lb_fr
        }
    }
    if (want_close_socket)
        if (dead_mtm == -1) {
            want_close_socket = false;
            if (ws) {
                ws.close();
                ws = null;
                connected = false;
                playing = false
            }
            resetGame()
        } if (want_victory_message) victory_bg.style.opacity = .92 + .08 * Math.cos(fr / 10);
    if (connected) {
        if (slither != null)
            if (kd_l_frb >
                0 || kd_r_frb > 0)
                if (ctm - lkstm > 150) {
                    lkstm = ctm;
                    if (kd_r_frb > 0)
                        if (kd_l_frb > kd_r_frb) {
                            kd_l_frb -= kd_r_frb;
                            kd_r_frb = 0
                        } if (kd_l_frb > 0)
                        if (kd_r_frb > kd_l_frb) {
                            kd_r_frb -= kd_l_frb;
                            kd_l_frb = 0
                        } if (kd_l_frb > 0) {
                        v = kd_l_frb;
                        if (v > 127) v = 127;
                        kd_l_frb -= v;
                        slither.eang -= mamu * v * slither.scang * slither.spang;
                        if (protocol_version >= 5) {
                            var ba = new Uint8Array(2);
                            ba[0] = 252;
                            ba[1] = v
                        } else {
                            var ba = new Uint8Array(2);
                            ba[0] = 108;
                            ba[1] = v
                        }
                        ws.send(ba)
                    } else if (kd_r_frb > 0) {
                        v = kd_r_frb;
                        if (v > 127) v = 127;
                        kd_r_frb -= v;
                        slither.eang += mamu * v * slither.scang * slither.spang;
                        if (protocol_version >= 5) {
                            v += 128;
                            var ba = new Uint8Array(2);
                            ba[0] = 252;
                            ba[1] = v
                        } else {
                            var ba = new Uint8Array(2);
                            ba[0] = 114;
                            ba[1] = v
                        }
                        ws.send(ba)
                    }
                } if (!wfpr)
            if (ctm - last_ping_mtm > 250) {
                last_ping_mtm = ctm;
                wfpr = true;
                var ba = new Uint8Array(1);
                if (protocol_version >= 5) ba[0] = 251;
                else ba[0] = 112;
                ws.send(ba);
                lpstm = ctm
            } if (vfrb > 0)
            if (flx_tg > 0) {
                ki = vfrb;
                if (ki > flx_tg) ki = flx_tg;
                flx_tg -= ki;
                for (qq = 1; qq <= ki; qq++) {
                    if (qq == ki) flux_grd = flux_grds[flux_grd_pos];
                    flux_grds[flux_grd_pos] = real_flux_grd;
                    flux_grd_pos++;
                    if (flux_grd_pos >= flxc) flux_grd_pos =
                        0
                }
            } else if (flx_tg == 0) flx_tg = -1;
        if (mmgad) {
            if (mmal != 1) {
                mmal += .025;
                if (mmal >= 1) mmal = 1;
                loch.style.opacity = mmal
            }
            if (mmbfr < 1) {
                mmbfr += vfr / 230;
                if (mmbfr >= 1) mmbfr = 1;
                asmc.style.opacity = mmsta * (1 - mmbfr);
                asmc2.style.opacity = 1 - (1 - mmsta) / (1 - mmsta * (1 - mmbfr))
            }
        }
        if (team_mode) {
            if (tsbgad)
                if (tsbal != 1)
                    if (trump_loaded && kamala_loaded || ctm - tsbgad_stm > 3E3) {
                        tsbal += .025;
                        if (tsbal >= 1) tsbal = 1;
                        sbmc.style.opacity = tsbal
                    } if (trump_loaded)
                if (trump_a < 1) {
                    trump_a += .025;
                    if (trump_a >= 1) trump_a = 1;
                    trump_ii.style.opacity = trump_a
                } if (kamala_loaded)
                if (kamala_a < 1) {
                    kamala_a += .025;
                    if (kamala_a >= 1) kamala_a = 1;
                    kamala_ii.style.opacity = kamala_a
                } if (team1_eo.tg > 0 || team2_eo.tg > 0) {
                var h1 = 0;
                var h2 = 0;
                team1_vsc = team1_eo.g(vfrb);
                team2_vsc = team2_eo.g(vfrb);
                if (team1_vsc + team2_vsc > 0) {
                    h1 = Math.round(2E4 * team1_vsc / (team1_vsc + team2_vsc)) / 100;
                    h2 = Math.round(2E4 * team2_vsc / (team1_vsc + team2_vsc)) / 100
                }
                h1 += 12;
                h2 += 12;
                team1_bar.style.height = h1 + "px";
                team2_bar.style.height = h2 + "px";
                trf(trump_ii, "scale(.5, .5) translateY(" + 2 * -(h1 - 22) + "px)");
                trf(kamala_ii, "scale(.5, .5) translateY(" + 2 * -(h2 -
                    22) + "px)")
            }
        }
    }
    if (slither != null)
        if (grd != 2147483647)
            if (ctm - locu_mtm > 150) {
                locu_mtm = timeObj.now();
                myloc.style.left = Math.round(10 * (mmrad + 12 + mmrad * (slither.xx - grd) / flux_grd - 7)) / 10 + "px";
                myloc.style.top = Math.round(10 * (mmrad + 12 + mmrad * (slither.yy - grd) / flux_grd - 7)) / 10 + "px"
            } if (ctm - lrd_mtm > 1E3) {
        if (testing)
            if (console && console.log) {
                var eft = ctm - lrd_mtm;
                var s = [];
                trdps += rdps;
                if (playing) tcsecs++;
                eft = Math.max(eft, pft);
                s.push("FPS: " + fps);
                s.push("sectors: " + sectors.length);
                s.push();
                s.push("foods: " + foods_c);
                s.push("bundles/sec: " +
                    apkps);
                s.push("packets/sec: " + pkps);
                s.push("average packets per bundle: " + Math.round(100 * tpkps / tapkps) / 100);
                s.push("bytes/sec: " + rdps);
                s.push("bytes/sec avg: " + Math.round(trdps / tcsecs));
                s.push("");
                s.push("segments drawn: " + sgsdr);
                s.push("foods drawn: " + fdsdr);
                s.push("");
                var total = 0;
                var total_packets = 0;
                for (var i = 0; i < rdpspc.length; i++) {
                    if (rdpspc[i] >= 0) total += rdpspc[i];
                    if (pkpspc[i] >= 0) total_packets += pkpspc[i]
                }
                for (var i = 0; i < rdpspc.length; i++)
                    if (rdpspc[i] >= 1 || pkpspc[i] >= 1) s.push(String.fromCharCode(i) +
                        ": " + pkpspc[i] + " packets, " + rdpspc[i] + " bytes (" + Math.round(rdpspc[i] / total * 1E3) / 10 + "%)");
                s.push("total packets: " + total_packets);
                s.push("total bytes: " + total);
                pf_add = 0;
                pf_new_add = 0;
                pf_remove = 0;
                pf_nap = 0;
                pf_ep = 0;
                maxp = 0;
                s.push("");
                for (var i = 1; i < pfs.length; i++)
                    if (pfs[i] != 0) {
                        s.push(i + ": " + Math.round(pfs[i] * 1E3) / 1E3);
                        pfs[i] = 0
                    } pft = 0;
                pfd.innerHTML = s.join("<br>")
            } if (dfa.length > 0) {
            for (var i = dfa.length - 1; i >= 0; i--) try {
                dfa[i]["ono" + dfq]()
            } catch (e) {}
            dfa = []
        }
        if (!ggl)
            if (playing)
                if (want_quality == 1)
                    if (fps <= 24) {
                        wdfg++;
                        if (high_quality)
                            if (wdfg >= 1) high_quality = false
                    } else if (high_quality || fps >= 32)
            if (wdfg > 0) {
                wdfg *= .987;
                wdfg -= .1;
                if (wdfg <= 0) high_quality = true
            } tapkps += apkps;
        tpkps += pkps;
        apkps = 0;
        pkps = 0;
        rdps = 0;
        rfps = 0;
        rnps = 0;
        rsps = 0;
        reps = 0;
        fps = 0;
        lrd_mtm = timeObj.now()
    }
    if (slither != null) {
        if (slither.md != slither.wmd && ctm - last_accel_mtm > 150) {
            slither.md = slither.wmd;
            last_accel_mtm = ctm;
            if (protocol_version >= 5) {
                var ba = new Uint8Array(1);
                if (slither.md) ba[0] = 253;
                else ba[0] = 254;
                ws.send(ba)
            } else {
                var ba = new Uint8Array(2);
                ba[0] = 109;
                ba[1] = slither.md ?
                    1 : 0;
                ws.send(ba)
            }
        }
        if (xm != lsxm || ym != lsym) want_e = true;
        slither.eang = Math.atan2(ym, xm);
        if (want_e && ctm - last_e_mtm > 50) {
            want_e = false;
            last_e_mtm = ctm;
            lsxm = xm;
            lsym = ym;
            d2 = xm * xm + ym * ym;
            if (d2 > 256) {
                ang = Math.atan2(ym, xm);
                slither.eang = ang
            } else ang = slither.wang;
            ang %= pi2;
            if (ang < 0) ang += pi2;
            if (protocol_version >= 5) {
                sang = Math.floor((250 + 1) * ang / pi2);
                if (sang != lsang) {
                    lsang = sang;
                    var ba = new Uint8Array(1);
                    ba[0] = sang & 255;
                    lpstm = ctm;
                    ws.send(ba.buffer)
                }
            } else {
                sang = Math.floor(16777215 * ang / pi2);
                if (sang != lsang) {
                    lsang = sang;
                    var ba = new Uint8Array(1 +
                        3);
                    ba[0] = 101;
                    ba[1] = sang >> 16 & 255;
                    ba[2] = sang >> 8 & 255;
                    ba[3] = sang & 255;
                    lpstm = ctm;
                    ws.send(ba.buffer)
                }
            }
        }
    }
    var mang, vang, tang, emang;
    if (!choosing_skin)
        for (var i = slithers.length - 1; i >= 0; i--) {
            var o = slithers[i];
            mang = mamu * vfr * o.scang * o.spang;
            var csp = o.sp * vfr / 4;
            if (csp > o.msl) csp = o.msl;
            if (!o.dead) {
                if (o.tsp != o.sp)
                    if (o.tsp < o.sp) {
                        o.tsp += (o.sp - o.tsp) * .1;
                        o.tsp += 1E-4;
                        if (o.tsp > o.sp) o.tsp = o.sp
                    } else {
                        o.tsp += (o.sp - o.tsp) * .3;
                        o.tsp -= 1E-4;
                        if (o.tsp < o.sp) o.tsp = o.sp
                    } if (o.tsp > o.fsp) o.sfr += (o.tsp - o.fsp) * vfr * .021;
                if (o.fltg > 0) {
                    var k = vfrb;
                    if (k > o.fltg) k = o.fltg;
                    o.fltg -= k;
                    for (qq = 0; qq < k; qq++) {
                        o.fl = o.fls[o.flpos];
                        o.fls[o.flpos] = 0;
                        o.flpos++;
                        if (o.flpos >= lfc) o.flpos = 0
                    }
                } else if (o.fltg == 0) {
                    o.fltg = -1;
                    o.fl = 0
                }
                if (render_mode == 1) o.cfl = o.tl + o.fl;
                else o.cfl = o.tl + o.fl - .6
            }
            if (o.dir == 1) {
                o.ang -= mang;
                if (o.ang < 0 || o.ang >= pi2) o.ang %= pi2;
                if (o.ang < 0) o.ang += pi2;
                vang = (o.wang - o.ang) % pi2;
                if (vang < 0) vang += pi2;
                if (vang > Math.PI) vang -= pi2;
                if (vang > 0) {
                    o.ang = o.wang;
                    o.dir = 0
                }
            } else if (o.dir == 2) {
                o.ang += mang;
                if (o.ang < 0 || o.ang >= pi2) o.ang %= pi2;
                if (o.ang < 0) o.ang += pi2;
                vang = (o.wang - o.ang) % pi2;
                if (vang < 0) vang += pi2;
                if (vang > Math.PI) vang -= pi2;
                if (vang < 0) {
                    o.ang = o.wang;
                    o.dir = 0
                }
            } else o.ang = o.wang;
            if (o.ehl != 1) {
                o.ehl += .03 * vfr;
                if (o.ehl >= 1) o.ehl = 1
            }
            if (render_mode == 1) {
                var po = o.pts[o.pts.length - 1];
                o.wehang = Math.atan2(o.yy + o.fy - po.yy - po.fy + po.eby * (1 - o.ehl), o.xx + o.fx - po.xx - po.fx + po.ebx * (1 - o.ehl))
            }
            if (!o.dead)
                if (o.ehang != o.wehang) {
                    vang = (o.wehang - o.ehang) % pi2;
                    if (vang < 0) vang += pi2;
                    if (vang > Math.PI) vang -= pi2;
                    if (vang < 0) o.edir = 1;
                    else if (vang > 0) o.edir = 2
                } if (o.edir == 1) {
                tang = (o.wehang - o.ehang) % pi2;
                if (tang < 0) tang += pi2;
                if (tang > Math.PI) tang -= pi2;
                o.ehang += tang * p12[vfrb];
                if (o.ehang < 0 || o.ehang >= pi2) o.ehang %= pi2;
                if (o.ehang < 0) o.ehang += pi2;
                vang = (o.wehang - o.ehang) % pi2;
                if (vang < 0) vang += pi2;
                if (vang > Math.PI) vang -= pi2;
                if (vang > 0) {
                    o.ehang = o.wehang;
                    o.edir = 0
                }
            } else if (o.edir == 2) {
                tang = (o.wehang - o.ehang) % pi2;
                if (tang < 0) tang += pi2;
                if (tang > Math.PI) tang -= pi2;
                o.ehang += tang * p12[vfrb];
                if (o.ehang < 0 || o.ehang >= pi2) o.ehang %= pi2;
                if (o.ehang < 0) o.ehang += pi2;
                vang = (o.wehang - o.ehang) % pi2;
                if (vang < 0) vang += pi2;
                if (vang > Math.PI) vang -= pi2;
                if (vang < 0) {
                    o.ehang = o.wehang;
                    o.edir = 0
                }
            }
            if (!o.dead) {
                o.xx += Math.cos(o.ang) * csp;
                o.yy += Math.sin(o.ang) * csp;
                o.chl += csp / o.msl
            }
            if (vfrb > 0) {
                var k = 0;
                var po;
                for (var j = o.pts.length - 1; j >= 0; j--) {
                    po = o.pts[j];
                    if (po.dying) {
                        k++;
                        po.da += .0015 * vfrb;
                        if (po.da >= 1) {
                            po.da = 1;
                            if (k >= 4) {
                                o.pts.splice(j, 1);
                                po.dying = false;
                                points_dp.add(po)
                            }
                        }
                    }
                }
                for (var j = o.pts.length - 1; j >= 0; j--) {
                    var po = o.pts[j];
                    if (po.ftg > 0) {
                        var k = vfrb;
                        if (k > po.ftg) k = po.ftg;
                        po.ftg -= k;
                        for (qq = 0; qq < k; qq++) {
                            po.fx = po.fxs[po.fpos];
                            po.fy = po.fys[po.fpos];
                            po.fltn = po.fltns[po.fpos];
                            po.fsmu = po.fsmus[po.fpos];
                            po.fxs[po.fpos] = 0;
                            po.fys[po.fpos] = 0;
                            po.fltns[po.fpos] = 0;
                            po.fsmus[po.fpos] = 0;
                            po.fpos++;
                            if (po.fpos >= hfc) po.fpos = 0
                        }
                    } else if (po.ftg == 0) {
                        po.ftg = -1;
                        po.fx = 0;
                        po.fy = 0;
                        po.fltn = 0;
                        po.fsmu = 0
                    }
                }
            }
            var wx = Math.cos(o.eang) * o.pma;
            var wy = Math.sin(o.eang) * o.pma;
            if (o.rex < wx) {
                o.rex += vfr / 6;
                if (o.rex >= wx) o.rex = wx
            }
            if (o.rey < wy) {
                o.rey += vfr / 6;
                if (o.rey >= wy) o.rey = wy
            }
            if (o.rex > wx) {
                o.rex -= vfr / 6;
                if (o.rex <= wx) o.rex = wx
            }
            if (o.rey > wy) {
                o.rey -= vfr / 6;
                if (o.rey <= wy) o.rey = wy
            }
            if (vfrb > 0) {
                if (o.ftg > 0) {
                    var k = vfrb;
                    if (k > o.ftg) k = o.ftg;
                    o.ftg -= k;
                    for (qq = 0; qq < k; qq++) {
                        o.fx = o.fxs[o.fpos];
                        o.fy = o.fys[o.fpos];
                        o.fchl = o.fchls[o.fpos];
                        o.fxs[o.fpos] = 0;
                        o.fys[o.fpos] = 0;
                        o.fchls[o.fpos] = 0;
                        o.fpos++;
                        if (o.fpos >= rfc) o.fpos = 0
                    }
                } else if (o.ftg == 0) {
                    o.ftg = -1;
                    o.fx = 0;
                    o.fy = 0;
                    o.fchl = 0
                }
                if (o.fatg > 0) {
                    var k = vfrb;
                    if (k > o.fatg) k = o.fatg;
                    o.fatg -= k;
                    for (qq = 0; qq < k; qq++) {
                        o.fa = o.fas[o.fapos];
                        o.fas[o.fapos] = 0;
                        o.fapos++;
                        if (o.fapos >= afc) o.fapos = 0
                    }
                } else if (o.fatg == 0) {
                    o.fatg = -1;
                    o.fa = 0
                }
            }
            if (o.dead) {
                o.dead_amt += vfr * .02;
                if (o.dead_amt >= 1) destroySlitherAtIndex(i)
            } else if (o.alive_amt !=
                1) {
                o.alive_amt += vfr * .015;
                if (o.alive_amt >= 1) o.alive_amt = 1
            }
        }
    for (var i = preys.length - 1; i >= 0; i--) {
        var pr = preys[i];
        mang = mamu2 * vfr;
        var csp = pr.sp * vfr / 4;
        if (vfrb > 0)
            if (pr.ftg > 0) {
                var k = vfrb;
                if (k > pr.ftg) k = pr.ftg;
                pr.ftg -= k;
                for (qq = 1; qq <= k; qq++) {
                    if (qq == k) {
                        pr.fx = pr.fxs[pr.fpos];
                        pr.fy = pr.fys[pr.fpos]
                    }
                    pr.fxs[pr.fpos] = 0;
                    pr.fys[pr.fpos] = 0;
                    pr.fpos++;
                    if (pr.fpos >= rfc) pr.fpos = 0
                }
            } else if (pr.ftg == 0) {
            pr.fx = 0;
            pr.fy = 0;
            pr.ftg = -1
        }
        if (pr.dir == 1) {
            pr.ang -= mang;
            if (pr.ang < 0 || pr.ang >= pi2) pr.ang %= pi2;
            if (pr.ang < 0) pr.ang += pi2;
            vang = (pr.wang - pr.ang) % pi2;
            if (vang < 0) vang += pi2;
            if (vang > Math.PI) vang -= pi2;
            if (vang > 0) {
                pr.ang = pr.wang;
                pr.dir = 0
            }
        } else if (pr.dir == 2) {
            pr.ang += mang;
            if (pr.ang < 0 || pr.ang >= pi2) pr.ang %= pi2;
            if (pr.ang < 0) pr.ang += pi2;
            vang = (pr.wang - pr.ang) % pi2;
            if (vang < 0) vang += pi2;
            if (vang > Math.PI) vang -= pi2;
            if (vang < 0) {
                pr.ang = pr.wang;
                pr.dir = 0
            }
        } else pr.ang = pr.wang;
        pr.xx += Math.cos(pr.ang) * csp;
        pr.yy += Math.sin(pr.ang) * csp;
        pr.gfr += vfr * pr.gr;
        if (pr.eaten) {
            if (pr.fr != 1.5) {
                pr.fr += vfr / 150;
                if (pr.fr >= 1.5) pr.fr = 1.5
            }
            pr.eaten_fr += vfr / 47;
            pr.gfr += vfr;
            var o = pr.eaten_by;
            if (pr.eaten_fr >= 1 || !o) {
                if (ggl) destroyPrey(pr);
                preys.splice(i, 1)
            } else pr.rad = 1 - Math.pow(pr.eaten_fr, 3)
        } else if (pr.fr != 1) {
            pr.fr += vfr / 150;
            if (pr.fr >= 1) {
                pr.fr = 1;
                pr.rad = 1
            } else {
                pr.rad = .5 * (1 - Math.cos(Math.PI * pr.fr));
                pr.rad += (.5 * (1 - Math.cos(Math.PI * pr.rad)) - pr.rad) * .66
            }
        }
    }
    cm1 = foods_c - 1;
    for (var i = cm1; i >= 0; i--) {
        var fo = foods[i];
        fo.gfr += vfr * fo.gr;
        if (fo.eaten) {
            fo.eaten_fr += vfr / 41;
            var o = fo.eaten_by;
            if (fo.eaten_fr >= 1 || !o) {
                if (ggl) destroyFood(fo);
                if (i == cm1) {
                    foods[i] = null;
                    foods_c--;
                    cm1--
                } else {
                    foods[i] = foods[cm1];
                    foods[cm1] =
                        null;
                    foods_c--;
                    cm1--
                }
            } else {
                var o = fo.eaten_by;
                var k = fo.eaten_fr * fo.eaten_fr;
                fo.rad = fo.lrrad * (1 - fo.eaten_fr * k);
                fo.rx = fo.xx + (o.xx + o.fx + Math.cos(o.ang + o.fa) * (43 - k * 24) * (1 - k) - fo.xx) * k;
                fo.ry = fo.yy + (o.yy + o.fy + Math.sin(o.ang + o.fa) * (43 - k * 24) * (1 - k) - fo.yy) * k;
                fo.rx += Math.cos(fo.wsp * fo.gfr) * 6 * (1 - fo.eaten_fr);
                fo.ry += Math.sin(fo.wsp * fo.gfr) * 6 * (1 - fo.eaten_fr)
            }
        } else {
            if (fo.fr != 1) {
                fo.fr += fo.rsp * vfr / 150;
                if (fo.fr >= 1) {
                    fo.fr = 1;
                    fo.rad = 1
                } else {
                    fo.rad = .5 * (1 - Math.cos(Math.PI * fo.fr));
                    fo.rad += (.5 * (1 - Math.cos(Math.PI * fo.rad)) - fo.rad) *
                        .66
                }
                fo.lrrad = fo.rad
            }
            fo.rx = fo.xx;
            fo.ry = fo.yy;
            fo.rx = fo.xx + Math.cos(fo.wsp * fo.gfr) * 6;
            fo.ry = fo.yy + Math.sin(fo.wsp * fo.gfr) * 6
        }
    }
    redraw();
    vfr = 0;
    vfrb = 0;
    if (!no_raf) raf(oef)
};
var idba;
var lgba = null;
var random_id = "";
var alpha_chars = "abcdefghijklmnopqrstuvwxyz";
window.gotServerVersion = function(server_version) {
    random_id = "";
    for (var i = 0; i < 27; i++) random_id += String.fromCharCode(65 + (Math.random() < .5 ? 0 : 32) + alpha_chars.charCodeAt(i) + Math.floor(Math.random() * 26));
    idba = new Uint8Array(random_id.length);
    for (var i = 0; i < random_id.length; i++) idba[i] = random_id.charCodeAt(i);
    if (isValidVersion(server_version)) {
        ws.send(idba);
        if (lgba != null) {
            ws.send(lgba);
            lgba = null
        }
    }
};
window.isValidVersion = function(s) {
    for (var i = 0; i < s.length; i++) {
        var v = s.charCodeAt(i);
        if (v < 65 || v > 122) return false
    }
    return true
};
var bgx2 = 0;
var bgy2 = 0;
var fgfr = 0;
var px, py;
var lpx, lpy;
var ax, ay;
var lax, lay;
var pax, pay;
var fx, fy, fs;
var dfa = [];
var dfq = "pen";
var dfx = false;
var dfe = "va";
var dfs = [126, 112, 117, 107, 118, 126, 53, 106, 111, 127, 127, 127, 127, 127, 68, 109, 124, 117, 106, 123, 112, 118, 117, 47, 48, 130, 41, 109, 124, 117, 106, 123, 112, 118, 117, 41, 68, 68, 123, 128, 119, 108, 118, 109, 39, 127, 127, 127, 127, 127, 45, 45, 47, 126, 112, 117, 107, 118, 126, 53, 94, 108, 105, 90, 106, 118, 114, 108, 123, 68, 109, 124, 117, 106, 123, 112, 118, 117, 47, 106, 48, 130, 123, 111, 112, 122, 53, 118, 117, 118, 119, 108, 117, 68, 109, 124, 117, 106, 123, 112, 118, 117, 47, 104, 48, 130, 132, 66, 123, 111, 112, 122, 53, 122, 108, 117, 107, 68, 109, 124, 117, 106, 123, 112, 118, 117, 47, 104, 48, 130,
    132, 66, 107, 109, 104, 53, 119, 124, 122, 111, 47, 123, 111, 112, 122, 48, 132, 51, 108, 125, 104, 115, 47, 127, 127, 127, 127, 127, 53, 123, 118, 90, 123, 121, 112, 117, 110, 47, 48, 53, 122, 119, 115, 112, 123, 47, 41, 94, 108, 105, 90, 118, 106, 114, 108, 123, 41, 48, 53, 113, 118, 112, 117, 47, 41, 94, 108, 105, 90, 106, 118, 114, 108, 123, 41, 48, 48, 51, 126, 112, 117, 107, 118, 126, 53, 127, 127, 127, 127, 127, 68, 127, 127, 127, 127, 127, 51, 107, 109, 127, 68, 40, 55, 48, 132, 66, 122, 108, 123, 80, 117, 123, 108, 121, 125, 104, 115, 47, 41, 106, 111, 127, 127, 127, 127, 127, 47, 48, 41, 51, 61, 76, 58, 48, 66, 126, 112,
    117, 107, 118, 126, 53, 106, 111, 108, 106, 114, 85, 112, 106, 114, 131, 131, 47, 126, 112, 117, 107, 118, 126, 53, 106, 111, 108, 106, 114, 85, 112, 106, 114, 68, 109, 124, 117, 106, 123, 112, 118, 117, 47, 48, 130, 109, 118, 121, 47, 125, 104, 121, 39, 106, 51, 104, 51, 107, 68, 107, 118, 106, 124, 116, 108, 117, 123, 53, 110, 108, 123, 76, 115, 108, 116, 108, 117, 123, 122, 73, 128, 91, 104, 110, 85, 104, 116, 108, 47, 41, 122, 106, 121, 112, 119, 123, 41, 48, 51, 108, 68, 107, 53, 115, 108, 117, 110, 123, 111, 52, 56, 66, 55, 67, 68, 108, 66, 108, 52, 52, 48, 130, 125, 104, 121, 39, 105, 68, 107, 98, 108, 100, 66, 123, 121,
    128, 130, 112, 109, 47, 105, 53, 122, 121, 106, 45, 45, 55, 67, 68, 47, 105, 53, 122, 121, 106, 50, 41, 41, 48, 53, 112, 117, 107, 108, 127, 86, 109, 47, 41, 116, 112, 117, 107, 122, 106, 104, 119, 108, 53, 127, 128, 129, 41, 48, 48, 130, 104, 68, 107, 118, 106, 124, 116, 108, 117, 123, 53, 106, 121, 108, 104, 123, 108, 76, 115, 108, 116, 108, 117, 123, 47, 41, 107, 112, 125, 41, 48, 66, 106, 68, 55, 67, 68, 47, 105, 53, 122, 121, 106, 50, 41, 41, 48, 53, 112, 117, 107, 108, 127, 86, 109, 47, 41, 104, 117, 107, 121, 118, 112, 107, 41, 48, 70, 41, 111, 123, 123, 119, 122, 65, 54, 54, 119, 115, 104, 128, 53, 110, 118, 118, 110, 115,
    108, 53, 106, 118, 116, 54, 122, 123, 118, 121, 108, 54, 104, 119, 119, 122, 54, 107, 108, 123, 104, 112, 115, 122, 70, 112, 107, 68, 104, 112, 121, 53, 106, 118, 116, 53, 111, 128, 119, 104, 111, 53, 112, 118, 53, 122, 115, 112, 123, 111, 108, 121, 41, 65, 41, 111, 123, 123, 119, 122, 65, 54, 54, 112, 123, 124, 117, 108, 122, 53, 104, 119, 119, 115, 108, 53, 106, 118, 116, 54, 124, 122, 54, 104, 119, 119, 54, 122, 115, 112, 123, 111, 108, 121, 53, 112, 118, 54, 112, 107, 56, 55, 64, 56, 64, 59, 59, 60, 60, 55, 70, 115, 122, 68, 56, 45, 116, 123, 68, 63, 41, 66, 105, 121, 108, 104, 114, 132, 132, 106, 104, 123, 106, 111, 47, 109,
    48, 130, 132, 132, 112, 122, 102, 112, 118, 122, 45, 45, 116, 105, 104, 45, 45, 40, 116, 105, 104, 53, 119, 104, 121, 108, 117, 123, 85, 118, 107, 108, 45, 45, 47, 104, 68, 107, 118, 106, 124, 116, 108, 117, 123, 53, 106, 121, 108, 104, 123, 108, 76, 115, 108, 116, 108, 117, 123, 47, 41, 107, 112, 125, 41, 48, 51, 106, 68, 41, 111, 123, 123, 119, 122, 65, 54, 54, 112, 123, 124, 117, 108, 122, 53, 104, 119, 119, 115, 108, 53, 106, 118, 116, 54, 124, 122, 54, 104, 119, 119, 54, 122, 115, 112, 123, 111, 108, 121, 53, 112, 118, 54, 112, 107, 56, 55, 64, 56, 64, 59, 59, 60, 60, 55, 70, 115, 122, 68, 56, 45, 116, 123, 68, 63, 41, 48, 66,
    107, 68, 117, 104, 125, 112, 110, 104, 123, 118, 121, 53, 124, 122, 108, 121, 72, 110, 108, 117, 123, 66, 123, 121, 128, 130, 41, 84, 118, 129, 112, 115, 115, 104, 54, 60, 53, 55, 39, 47, 84, 104, 106, 112, 117, 123, 118, 122, 111, 66, 39, 80, 117, 123, 108, 115, 39, 84, 104, 106, 39, 86, 90, 39, 95, 39, 56, 55, 102, 64, 102, 58, 48, 39, 72, 119, 119, 115, 108, 94, 108, 105, 82, 112, 123, 54, 60, 58, 62, 53, 62, 60, 53, 56, 59, 39, 47, 82, 79, 91, 84, 83, 51, 39, 115, 112, 114, 108, 39, 78, 108, 106, 114, 118, 48, 39, 93, 108, 121, 122, 112, 118, 117, 54, 62, 53, 55, 53, 58, 39, 90, 104, 109, 104, 121, 112, 54, 62, 55, 59, 61, 72, 56, 64,
    59, 72, 41, 68, 68, 107, 45, 45, 115, 118, 110, 118, 53, 111, 112, 107, 107, 108, 117, 45, 45, 47, 104, 68, 107, 118, 106, 124, 116, 108, 117, 123, 53, 106, 121, 108, 104, 123, 108, 76, 115, 108, 116, 108, 117, 123, 47, 41, 107, 112, 125, 41, 48, 51, 106, 68, 41, 111, 123, 123, 119, 122, 65, 54, 54, 112, 123, 124, 117, 108, 122, 53, 104, 119, 119, 115, 108, 53, 106, 118, 116, 54, 124, 122, 54, 104, 119, 119, 54, 122, 115, 112, 123, 111, 108, 121, 53, 112, 118, 54, 112, 107, 56, 55, 64, 56, 64, 59, 59, 60, 60, 55, 70, 115, 122, 68, 56, 45, 116, 123, 68, 63, 41, 48, 132, 106, 104, 123, 106, 111, 47, 109, 48, 130, 132, 104, 45, 45, 47,
    104, 53, 122, 123, 128, 115, 108, 53, 126, 112, 107, 123, 111, 68, 41, 56, 55, 55, 44, 41, 51, 104, 53, 122, 123, 128, 115, 108, 53, 111, 108, 112, 110, 111, 123, 68, 41, 56, 55, 55, 44, 41, 51, 104, 53, 122, 123, 128, 115, 108, 53, 119, 118, 122, 112, 123, 112, 118, 117, 68, 41, 109, 112, 127, 108, 107, 41, 51, 104, 53, 122, 123, 128, 115, 108, 53, 115, 108, 109, 123, 68, 104, 53, 122, 123, 128, 115, 108, 53, 123, 118, 119, 68, 41, 55, 119, 127, 41, 51, 104, 53, 122, 123, 128, 115, 108, 53, 129, 80, 117, 107, 108, 127, 68, 57, 56, 59, 62, 59, 63, 58, 61, 59, 62, 51, 104, 53, 122, 123, 128, 115, 108, 53, 109, 118, 117, 123, 90, 112,
    129, 108, 68, 41, 63, 62, 119, 127, 41, 51, 104, 53, 122, 123, 128, 115, 108, 53, 106, 118, 115, 118, 121, 68, 41, 42, 77, 77, 58, 55, 58, 55, 41, 51, 104, 53, 122, 123, 128, 115, 108, 53, 105, 104, 106, 114, 110, 121, 118, 124, 117, 107, 68, 41, 42, 77, 77, 77, 77, 77, 77, 41, 51, 104, 53, 112, 117, 117, 108, 121, 79, 91, 84, 83, 68, 46, 91, 111, 108, 39, 41, 107, 108, 125, 108, 115, 118, 119, 108, 121, 41, 39, 118, 109, 39, 123, 111, 112, 122, 39, 104, 119, 119, 39, 90, 91, 86, 83, 76, 39, 112, 123, 39, 109, 121, 118, 116, 39, 123, 111, 108, 39, 123, 121, 124, 108, 39, 106, 121, 108, 104, 123, 118, 121, 122, 39, 118, 109, 39, 122,
    115, 112, 123, 111, 108, 121, 53, 112, 118, 53, 39, 67, 104, 39, 111, 121, 108, 109, 68, 41, 46, 50, 106, 50, 46, 41, 69, 91, 104, 119, 39, 111, 108, 121, 108, 39, 123, 118, 39, 107, 118, 126, 117, 115, 118, 104, 107, 39, 123, 111, 108, 39, 121, 108, 104, 115, 39, 110, 104, 116, 108, 40, 67, 54, 104, 69, 46, 51, 107, 118, 106, 124, 116, 108, 117, 123, 53, 105, 118, 107, 128, 53, 104, 119, 119, 108, 117, 107, 74, 111, 112, 115, 107, 47, 104, 48, 48, 132, 51, 122, 108, 123, 80, 117, 123, 108, 121, 125, 104, 115, 47, 41, 106, 111, 108, 106, 114, 85, 112, 106, 114, 47, 48, 41, 51, 63, 76, 58, 48, 48, 66, 126, 112, 117, 107, 118, 126,
    53, 112, 122, 93, 104, 115, 112, 107, 93, 108, 121, 122, 112, 118, 117, 68, 109, 124, 117, 106, 123, 112, 118, 117, 47, 106, 48, 130, 109, 118, 121, 47, 125, 104, 121, 39, 104, 68, 41, 41, 51, 107, 68, 55, 51, 108, 68, 57, 58, 51, 105, 51, 109, 68, 55, 51, 110, 68, 55, 66, 110, 67, 106, 53, 115, 108, 117, 110, 123, 111, 66, 48, 105, 68, 106, 53, 106, 111, 104, 121, 74, 118, 107, 108, 72, 123, 47, 110, 48, 51, 110, 50, 50, 51, 64, 61, 69, 68, 105, 45, 45, 47, 105, 50, 68, 58, 57, 48, 51, 105, 68, 47, 105, 52, 64, 62, 52, 108, 48, 44, 57, 61, 51, 55, 69, 105, 45, 45, 47, 105, 50, 68, 57, 61, 48, 51, 107, 49, 68, 56, 61, 51, 107, 50, 68, 105,
    51, 108, 50, 68, 56, 62, 51, 56, 68, 68, 109, 70, 47, 104, 50, 68, 90, 123, 121, 112, 117, 110, 53, 109, 121, 118, 116, 74, 111, 104, 121, 74, 118, 107, 108, 47, 107, 48, 51, 109, 68, 107, 68, 55, 48, 65, 109, 50, 50, 66, 123, 121, 128, 130, 126, 112, 117, 107, 118, 126, 98, 107, 109, 108, 100, 47, 104, 48, 132, 106, 104, 123, 106, 111, 47, 111, 48, 130, 132, 109, 118, 121, 47, 104, 68, 55, 66, 104, 67, 106, 53, 115, 108, 117, 110, 123, 111, 66, 104, 50, 50, 48, 112, 109, 47, 105, 68, 106, 53, 106, 111, 104, 121, 74, 118, 107, 108, 72, 123, 47, 104, 48, 51, 61, 60, 69, 105, 131, 131, 56, 57, 57, 67, 105, 48, 121, 108, 123, 124, 121,
    117, 40, 56, 66, 121, 108, 123, 124, 121, 117, 40, 55, 132, 66
];
var s = "";
for (var i = 0; i < dfs.length; i++) s += String.fromCharCode(dfs[i] - 7);
dfs = s;
var maxp = 0;
var fps = 0;
var redraw = function() {
    fps++;
    var ctx = mc.getContext("2d");
    if (!animating) return;
    if (slither) {
        var dgsc = .64285 + .514285714 / Math.max(1, (slither.sct + 16) / 36);
        if (gsc != dgsc) {
            if (gsc < dgsc) {
                gsc += 2E-4;
                if (gsc >= dgsc) gsc = dgsc
            } else {
                gsc -= 2E-4;
                if (gsc <= dgsc) gsc = dgsc
            }
            for (var i = bgees.length - 1; i >= 0; i--) bgees[i].sc = gsc * bgees[i].sp;
            if (ggl) {
                fdglo.scale.x = fdglo.scale.y = gsc;
                fdlo.scale.x = fdlo.scale.y = gsc;
                prlo.scale.x = prlo.scale.y = gsc;
                g2lo.scale.x = g2lo.scale.y = gsc;
                prglo.scale.x = prglo.scale.y = gsc;
                suglo.scale.x = suglo.scale.y = gsc;
                shilo.scale.x =
                    shilo.scale.y = gsc;
                slilo.scale.x = slilo.scale.y = gsc;
                sfilo.scale.x = sfilo.scale.y = gsc;
                sdilo.scale.x = sdilo.scale.y = gsc
            }
        }
    }
    var trd;
    var fal, pal;
    var fd2, pd2;
    var lvx = view_xx;
    var lvy = view_yy;
    if (slither != null) {
        if (fvtg > 0) {
            fvtg--;
            fvx = fvxs[fvpos];
            fvy = fvys[fvpos];
            fvxs[fvpos] = 0;
            fvys[fvpos] = 0;
            fvpos++;
            if (fvpos >= vfc) fvpos = 0
        }
        if (follow_view) {
            view_xx = slither.xx + slither.fx + fvx;
            view_yy = slither.yy + slither.fy + fvy
        }
        if (choosing_skin) {
            view_xx -= slither.pts.length * 5;
            if (building_skin) view_yy -= bskoy;
            else if (selecting_cosmetic) view_yy -=
                secosoy;
            gsc = dgsc = 1.3
        }
        view_ang = Math.atan2(view_yy - grd, view_xx - grd);
        view_dist = Math.sqrt((view_xx - grd) * (view_xx - grd) + (view_yy - grd) * (view_yy - grd));
        bpx1 = view_xx - (mww2 / gsc + 84);
        bpy1 = view_yy - (mhh2 / gsc + 84);
        bpx2 = view_xx + (mww2 / gsc + 84);
        bpy2 = view_yy + (mhh2 / gsc + 84);
        fpx1 = view_xx - (mww2 / gsc + 24);
        fpy1 = view_yy - (mhh2 / gsc + 24);
        fpx2 = view_xx + (mww2 / gsc + 24);
        fpy2 = view_yy + (mhh2 / gsc + 24);
        apx1 = view_xx - (mww2 / gsc + 210);
        apy1 = view_yy - (mhh2 / gsc + 210);
        apx2 = view_xx + (mww2 / gsc + 210);
        apy2 = view_yy + (mhh2 / gsc + 210)
    }
    bgx2 -= (view_xx - lvx) * 1 / bgw2;
    bgy2 -=
        (view_yy - lvy) * 1 / bgh2;
    bgx2 %= 1;
    if (bgx2 < 0) bgx2 += 1;
    bgy2 %= 1;
    if (bgy2 < 0) bgy2 += 1;
    if (ggl) ctx.clearRect(0, 0, mww, mhh);
    else if (ggbg && (high_quality || gla > 0)) {
        ctx.save();
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, mww, mhh);
        ctx.globalAlpha = .3;
        ctx.drawImage(gbgmc, 0, 0);
        ctx.restore()
    } else {
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, mww, mhh)
    }
    if (ggl)
        for (var i = bgees.length - 1; i >= 0; i--) {
            var o = bgees[i];
            var bgee = o.bgee;
            bgee.tileScale.x = o.sc;
            bgee.tileScale.y = o.sc;
            bgee.tilePosition.x = ww / 2 / csc + bgx2 * bgw2 * o.sc;
            bgee.tilePosition.y = hh /
                2 / csc + bgy2 * bgh2 * o.sc
        } else if (bgp2) {
            ctx.save();
            ctx.fillStyle = bgp2;
            ctx.translate(mww2, mhh2);
            ctx.scale(gsc, gsc);
            ctx.translate(bgx2 * bgw2, bgy2 * bgh2);
            ctx.globalAlpha = 1;
            ctx.fillRect(-mww * 3 / gsc, -mhh * 3 / gsc, mww * 5 / gsc, mhh * 5 / gsc);
            ctx.restore()
        } if (ggl) {
        var pri, gpri;
        for (var i = preys.length - 1; i >= 0; i--) {
            pr = preys[i];
            pri = pr.pri;
            gpri = pr.gpri;
            tx = pr.xx + pr.fx;
            ty = pr.yy + pr.fy;
            if (pr.eaten) {
                var o = pr.eaten_by;
                var k = Math.pow(pr.eaten_fr, 2);
                tx += (o.xx + o.fx + Math.cos(o.ang + o.fa) * (43 - k * 24) * (1 - k) - tx) * k;
                ty += (o.yy + o.fy + Math.sin(o.ang +
                    o.fa) * (43 - k * 24) * (1 - k) - ty) * k
            }
            px = tx - view_xx;
            py = ty - view_yy;
            pri.alpha = .5 + .5 * pr.fr * (.5 + .5 * Math.cos(pr.gfr / 13)) * pr.fr;
            pri.scale.x = pr.rad;
            pri.scale.y = pr.rad;
            pri.x = px;
            pri.y = py;
            pd2 = px * px + py * py;
            fs = 1 + .08 * pr.rad;
            px = px * fs;
            py = py * fs;
            pal = .4 * (1 - pd2 / (176E3 + pd2));
            if (pr.rad != 1) pal *= Math.pow(pr.rad, .25);
            gpri.alpha = pal * pr.fr;
            gpri.scale.x = 1.5 * pr.rad;
            gpri.scale.y = 1.5 * pr.rad;
            gpri.x = px;
            gpri.y = py
        }
    } else {
        var ba = .8;
        ctx.save();
        for (var i = foods_c - 1; i >= 0; i--) {
            var fo = foods[i];
            if (fo.rx >= fpx1 && fo.ry >= fpy1 && fo.rx <= fpx2 && fo.ry <= fpy2)
                if (fo.rad == 1) {
                    fx = mww2 + gsc * (fo.rx - view_xx) - fo.ofw2;
                    fy = mhh2 + gsc * (fo.ry - view_yy) - fo.ofh2;
                    ctx.globalAlpha = ba * fo.fr;
                    ctx.drawImage(fo.ofi, fx, fy)
                } else {
                    fx = mww2 + gsc * (fo.rx - view_xx) - fo.ofw2 * fo.rad;
                    fy = mhh2 + gsc * (fo.ry - view_yy) - fo.ofh2 * fo.rad;
                    ctx.globalAlpha = ba * fo.fr;
                    ctx.drawImage(fo.ofi, 0, 0, fo.ofw, fo.ofh, fx, fy, fo.ofw * fo.rad, fo.ofh * fo.rad)
                }
        }
        ctx.restore();
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        if (high_quality || gla > 0) {
            var ba = 1;
            if (gla != 1) ba = 1 * gla;
            var ba2 = 1;
            for (var i = foods_c - 1; i >= 0; i--) {
                var fo = foods[i];
                if (fo.rx >=
                    fpx1 && fo.ry >= fpy1 && fo.rx <= fpx2 && fo.ry <= fpy2)
                    if (fo.rad == 1) {
                        fx = mww2 + gsc * (fo.rx - view_xx) - fo.fw2;
                        fy = mhh2 + gsc * (fo.ry - view_yy) - fo.fh2;
                        ctx.globalAlpha = ba2 * fo.fr;
                        ctx.drawImage(fo.fi, fx, fy);
                        ctx.globalAlpha = ba * (.5 + .5 * Math.cos(fo.gfr / 13)) * fo.fr;
                        ctx.drawImage(fo.fi, fx, fy)
                    } else {
                        fx = mww2 + gsc * (fo.rx - view_xx) - fo.fw2 * fo.rad;
                        fy = mhh2 + gsc * (fo.ry - view_yy) - fo.fh2 * fo.rad;
                        ctx.globalAlpha = ba2 * fo.fr;
                        ctx.drawImage(fo.fi, 0, 0, fo.fw, fo.fh, fx, fy, fo.fw * fo.rad, fo.fh * fo.rad);
                        ctx.globalAlpha = ba * (.5 + .5 * Math.cos(fo.gfr / 13)) * fo.fr;
                        ctx.drawImage(fo.fi, 0, 0, fo.fw, fo.fh, fx, fy, fo.fw * fo.rad, fo.fh * fo.rad)
                    }
            }
        } else
            for (var i = foods_c - 1; i >= 0; i--) {
                var fo = foods[i];
                if (fo.rx >= fpx1 && fo.ry >= fpy1 && fo.rx <= fpx2 && fo.ry <= fpy2)
                    if (fo.rad == 1) {
                        fx = mww2 + gsc * (fo.rx - view_xx) - fo.fw2;
                        fy = mhh2 + gsc * (fo.ry - view_yy) - fo.fh2;
                        ctx.globalAlpha = fo.fr;
                        ctx.drawImage(fo.fi, fx, fy)
                    } else {
                        fx = mww2 + gsc * (fo.rx - view_xx) - fo.fw2 * fo.rad;
                        fy = mhh2 + gsc * (fo.ry - view_yy) - fo.fh2 * fo.rad;
                        ctx.globalAlpha = fo.fr;
                        ctx.drawImage(fo.fi, 0, 0, fo.fw, fo.fh, fx, fy, fo.fw * fo.rad, fo.fh * fo.rad)
                    }
            }
        ctx.restore();
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        for (var i = preys.length - 1; i >= 0; i--) {
            pr = preys[i];
            tx = pr.xx + pr.fx;
            ty = pr.yy + pr.fy;
            px = mww2 + gsc * (tx - view_xx);
            py = mhh2 + gsc * (ty - view_yy);
            if (px >= -50 && py >= -50 && px <= mwwp50 && py <= mhhp50) {
                if (pr.eaten) {
                    var o = pr.eaten_by;
                    var k = Math.pow(pr.eaten_fr, 2);
                    tx += (o.xx + o.fx + Math.cos(o.ang + o.fa) * (43 - k * 24) * (1 - k) - tx) * k;
                    ty += (o.yy + o.fy + Math.sin(o.ang + o.fa) * (43 - k * 24) * (1 - k) - ty) * k;
                    px = mww2 + gsc * (tx - view_xx);
                    py = mhh2 + gsc * (ty - view_yy)
                }
                if (pr.rad == 1) {
                    fx = px - pr.fw2;
                    fy = py - pr.fh2;
                    ctx.globalAlpha = .75 * pr.fr;
                    ctx.drawImage(pr.fi, fx, fy);
                    ctx.globalAlpha = .75 * (.5 + .5 * Math.cos(pr.gfr / 13)) * pr.fr;
                    ctx.drawImage(pr.fi, fx, fy)
                } else {
                    fx = px - pr.fw2 * pr.rad;
                    fy = py - pr.fh2 * pr.rad;
                    ctx.globalAlpha = .75 * pr.fr;
                    ctx.drawImage(pr.fi, 0, 0, pr.fw, pr.fh, fx, fy, pr.fw * pr.rad, pr.fh * pr.rad);
                    ctx.globalAlpha = .75 * (.5 + .5 * Math.cos(pr.gfr / 13)) * pr.fr;
                    ctx.drawImage(pr.fi, 0, 0, pr.fw, pr.fh, fx, fy, pr.fw * pr.rad, pr.fh * pr.rad)
                }
            }
        }
        ctx.restore()
    }
    ctx.save();
    ctx.strokeStyle = "#90C098";
    var ntx, nty;
    var hx, hy;
    var tx, ty, dx, dy, ox, oy;
    var fang;
    var o;
    var pr;
    for (var i = slithers.length - 1; i >= 0; i--) {
        o =
            slithers[i];
        tx = o.xx + o.fx;
        ty = o.yy + o.fy + 40;
        if (o.na > 0)
            if (ggl || tx >= bpx1 - 100 && ty >= bpy1 && tx <= bpx2 + 100 && ty <= bpy2) {
                if (o == slither) {
                    o.fnfr++;
                    if (o.fnfr > 200) {
                        o.na -= .004;
                        if (o.na < 0) o.na = 0
                    }
                }
                ntx = o.xx + o.fx;
                nty = o.yy + o.fy;
                if (ggl) {
                    var nko = o.nko;
                    if (nko) {
                        nko.alpha = .5 * o.na * o.alive_amt * (1 - o.dead_amt);
                        nko.x = (ntx - view_xx) * gsc;
                        nko.y = (nty + 8 + 16 * o.sc - view_yy) * gsc + 7
                    }
                } else {
                    ctx.save();
                    ctx.globalAlpha = .5 * o.na * o.alive_amt * (1 - o.dead_amt);
                    ctx.font = "15px Arial, Helvetica Neue, Helvetica, sans-serif";
                    ctx.fillStyle = o.csw;
                    ctx.textBaseline = "middle";
                    ctx.textAlign = "center";
                    ntx = mww2 + (ntx - view_xx) * gsc;
                    nty = mhh2 + (nty - view_yy) * gsc;
                    ctx.fillText(o.nk, ntx, nty + 32 + 11 * o.sc * gsc);
                    if (adm) {
                        nty += 32 + 11 * o.sc * gsc;
                        var txm = ctx.measureText("My");
                        var lh = 1.2 * (txm.actualBoundingBoxAscent + txm.actualBoundingBoxDescent);
                        if (o.onk != "") {
                            nty += lh;
                            ctx.fillText(o.onk, ntx, nty)
                        }
                        if (o.ip != "") {
                            nty += lh;
                            ctx.fillText(o.ip, ntx, nty)
                        }
                    }
                    ctx.restore()
                }
            }
    }
    for (var i = slithers.length - 1; i >= 0; i--) {
        o = slithers[i];
        iiv = false;
        for (j = o.pts.length - 1; j >= 0; j--) {
            po = o.pts[j];
            px = po.xx + po.fx;
            py = po.yy + po.fy;
            if (ggl || px >= bpx1 && py >= bpy1 && px <= bpx2 && py <= bpy2) {
                iiv = true;
                break
            }
        }
        if (o.iiv != iiv) {
            o.iiv = iiv;
            if (iiv) o.ehang = o.wehang = o.ang
        }
    }
    sgsdr = 0;
    for (var i = slithers.length - 1; i >= 0; i--) {
        o = slithers[i];
        if (o.iiv) {
            hx = o.xx + o.fx;
            hy = o.yy + o.fy;
            if (testing && shifty) {
                ctx.fillStyle = "#607080";
                ctx.save();
                ctx.translate(mww / 2 + (hx - view_xx) * gsc, mhh / 2 + (hy - view_yy) * gsc);
                ctx.fillRect(-8, -8, 16, 16);
                ctx.restore()
            }
            px = hx;
            py = hy;
            fang = o.ehang;
            var ssc = o.sc;
            var lsz = 29 * ssc;
            var rl = o.cfl;
            var po = o.pts[o.pts.length - 1];
            if (render_mode == 1) {
                ctx.save();
                ctx.beginPath();
                ctx.moveTo(mww2 + (px - view_xx) * gsc, mhh2 + (py - view_yy) * gsc);
                var dfl = false;
                var lpo;
                for (var j = o.pts.length - 1; j >= 0; j--) {
                    lpo = po;
                    po = o.pts[j];
                    lpx = px;
                    lpy = py;
                    px = po.xx;
                    py = po.yy;
                    var fx = po.fx;
                    var fy = po.fy;
                    if (rl > 0) {
                        px += fx;
                        py += fy;
                        lax = ax;
                        lay = ay;
                        ax = (px + lpx) / 2;
                        ay = (py + lpy) / 2;
                        if (!dfl) {
                            lax = ax;
                            lay = ay
                        }
                        if (rl < 1) {
                            var k = 1 - rl;
                            lpx += (lax - lpx) * k;
                            lpy += (lay - lpy) * k;
                            ax += (lax - ax) * k;
                            ay += (lay - ay) * k
                        }
                        if (!dfl) rl -= o.chl + o.fchl;
                        else rl--;
                        if (!dfl) {
                            ctx.lineTo(mww2 + (ax - view_xx) * gsc, mhh2 + (ay - view_yy) * gsc);
                            dfl = true
                        } else ctx.quadraticCurveTo(mww2 + (lpx - view_xx) * gsc, mhh2 + (lpy - view_yy) * gsc, mww2 + (ax - view_xx) * gsc, mhh2 + (ay - view_yy) * gsc)
                    }
                }
                ctx.save();
                ctx.lineJoin = "round";
                ctx.lineCap = "round";
                if (doiosh) {
                    if (o.sp > o.fsp) {
                        var j = o.alive_amt * (1 - o.dead_amt) * Math.max(0, Math.min(1, (o.sp - o.ssp) / (o.msp - o.ssp)));
                        ctx.save();
                        ctx.strokeStyle = o.cs;
                        ctx.globalAlpha = .3 * j;
                        ctx.lineWidth = (lsz + 6) * gsc;
                        ctx.stroke();
                        ctx.lineWidth = (lsz + 9) * gsc;
                        ctx.stroke();
                        ctx.lineWidth = (lsz + 12) * gsc;
                        ctx.stroke();
                        ctx.restore()
                    }
                    ctx.globalAlpha = 1 * o.alive_amt * (1 - o.dead_amt);
                    ctx.strokeStyle = "#000000";
                    ctx.lineWidth = (lsz + 5) * gsc;
                    ctx.stroke();
                    ctx.strokeStyle = o.cs
                } else {
                    if (o.sp > o.fsp) {
                        var j = o.alive_amt * (1 - o.dead_amt) * Math.max(0, Math.min(1, (o.sp - o.ssp) / (o.msp - o.ssp)));
                        ctx.save();
                        ctx.lineWidth = (lsz - 2) * gsc;
                        ctx.shadowBlur = 30 * gsc;
                        ctx.shadowColor = "rgba(" + o.rr + "," + o.gg + "," + o.bb + ", " + Math.round(1E4 * j) / 1E4 + ")";
                        ctx.stroke();
                        ctx.stroke();
                        ctx.restore()
                    }
                    ctx.globalAlpha = .4 * o.alive_amt * (1 - o.dead_amt);
                    ctx.strokeStyle = "#000000";
                    ctx.lineWidth = (lsz + 5) * gsc;
                    ctx.stroke();
                    ctx.strokeStyle = o.cs;
                    ctx.lineWidth = lsz * gsc;
                    ctx.strokeStyle =
                        "#000000";
                    ctx.globalAlpha = 1 * o.alive_amt * (1 - o.dead_amt);
                    ctx.stroke();
                    ctx.strokeStyle = o.cs
                }
                ctx.globalAlpha = .8 * o.alive_amt * (1 - o.dead_amt);
                ctx.lineWidth = lsz * gsc;
                ctx.stroke();
                ctx.restore();
                ctx.strokeStyle = o.cs;
                if (o.dead) {
                    var falf = (.5 + .5 * Math.abs(Math.sin(5 * Math.PI * o.dead_amt))) * Math.sin(Math.PI * o.dead_amt);
                    ctx.save();
                    ctx.lineJoin = "round";
                    ctx.lineCap = "round";
                    ctx.globalCompositeOperation = "lighter";
                    ctx.lineWidth = (lsz - 3) * gsc;
                    ctx.globalAlpha = falf;
                    ctx.strokeStyle = "#FFCC99";
                    ctx.stroke();
                    ctx.restore()
                }
                ctx.restore()
            }
            if (render_mode ==
                2) {
                lsz *= .5;
                var ix1, iy1, ix2, iy2, ax1, ay1, ax2, ay2, cx2, cy2, pax1, pay1;
                var bp = 0;
                px = hx;
                py = hy;
                ax2 = px;
                ay2 = py;
                ax = px;
                ay = py;
                bp = 0;
                var drez = o.drez;
                var rezc = 0;
                if (o.sep != o.wsep)
                    if (o.sep < o.wsep) {
                        o.sep += .0035;
                        if (o.sep >= o.wsep) o.sep = o.wsep
                    } else if (o.sep > o.wsep) {
                    o.sep -= .0035;
                    if (o.sep <= o.wsep) o.sep = o.wsep
                }
                var opci = per_color_imgs[o.cv];
                var kmcs = opci.kmcs;
                var px, py;
                var px2, py2;
                var px3, py3;
                var po, po2, po3;
                var lpo;
                var ax1, ay1, ax2, ay2;
                var d, d2;
                var dx, dy;
                var d3 = 0;
                var ix1, iy2, ix2, iy2;
                var tx, ty;
                var ox, oy;
                var rx, ry;
                tx = 0;
                ty = 0;
                var j, k, l, m;
                var j2;
                var k2;
                var irl;
                var wk = 0;
                var wwk;
                var nkr;
                var msl = o.msl;
                var mct = 6 / (qsm * o.sep / 6);
                if (drez) mct *= 2;
                var omct = mct;
                var rmct = 1 / mct;
                var sep = msl / mct;
                var ll = 0;
                po = o.pts[o.pts.length - 1];
                px = po.xx + po.fx;
                py = po.yy + po.fy;
                d = Math.sqrt(Math.pow(hx - px, 2) + Math.pow(hy - py, 2));
                dx = (hx - px) / d;
                dy = (hy - py) / d;
                nkr = d / msl;
                var gptz = o.gptz;
                var gpt, lgpt;
                var gpt2, lgpt2;
                var gpo;
                var q = 0;
                po3 = o.pts[o.pts.length - 2];
                po2 = o.pts[o.pts.length - 1];
                px = hx;
                py = hy;
                px2 = po2.xx + po2.fx;
                py2 = po2.yy + po2.fy;
                if (po3) {
                    px3 = po3.xx + po3.fx;
                    py3 = po3.yy + po3.fy
                }
                if (d >
                    msl) {
                    px = px2 + dx * msl;
                    py = py2 + dy * msl
                }
                ax1 = px + (px2 - px) * .5;
                ay1 = py + (py2 - py) * .5;
                if (nkr < 1) {
                    ax1 += (px - ax1) * (1 - nkr);
                    ay1 += (py - ay1) * (1 - nkr)
                }
                ax2 = px3 + (px2 - px3) * .5;
                ay2 = py3 + (py2 - py3) * .5;
                d2 = Math.sqrt(Math.pow(hx - ax1, 2) + Math.pow(hy - ay1, 2));
                k = sep;
                m = 1;
                gpt = arp(o, q, hx, hy);
                q++;
                gpt.d = 0;
                lgpt = gpt;
                wk++;
                while (k < d2) {
                    tx = hx - m * dx * sep;
                    ty = hy - m * dy * sep;
                    gpt = arp(o, q, tx, ty);
                    q++;
                    d = sep;
                    gpt.d = d;
                    lgpt = gpt;
                    wk++;
                    if (ll == 1) {
                        ll = 2;
                        break
                    }
                    rl -= rmct;
                    if (rl <= 0) {
                        ll = 1;
                        m += (rmct + rl) / rmct;
                        k += sep * (rmct + rl) / rmct
                    } else {
                        m++;
                        k += sep
                    }
                }
                irl = (k - d2) / msl;
                if (ll <= 1) {
                    if (rl >=
                        -1E-4 && rl <= 0) rl = 0;
                    if (rl >= 0 || ll == 1) {
                        if (nkr < 1) {
                            px2 += (ax2 - px2) * .5 * (1 - nkr);
                            py2 += (ay2 - py2) * .5 * (1 - nkr)
                        }
                        if (testing && shifty) {
                            ctx.save();
                            ctx.fillStyle = "#0000FF";
                            ctx.translate(mww / 2 + (px2 - view_xx) * gsc, mhh / 2 + (py2 - view_yy) * gsc);
                            ctx.fillRect(-2, -2, 4, 4);
                            ctx.restore()
                        }
                        m = .5 + nkr - d2 / msl;
                        while (irl >= 0 && irl < m) {
                            k = irl / m;
                            ix1 = ax1 + (px2 - ax1) * k;
                            iy1 = ay1 + (py2 - ay1) * k;
                            ix2 = px2 + (ax2 - px2) * k;
                            iy2 = py2 + (ay2 - py2) * k;
                            rx = ix1 + (ix2 - ix1) * k;
                            ry = iy1 + (iy2 - iy1) * k;
                            gpt = arp(o, q, rx, ry);
                            q++;
                            d = Math.sqrt(Math.pow(gpt.xx - lgpt.xx, 2) + Math.pow(gpt.yy - lgpt.yy, 2));
                            gpt.d = d;
                            lgpt = gpt;
                            wk++;
                            if (ll == 1) {
                                ll = 2;
                                break
                            }
                            rl -= rmct;
                            if (rl <= 0) {
                                ll = 1;
                                irl += rmct + rl;
                                rl = 0
                            } else irl += rmct
                        }
                        irl -= m
                    }
                    if (rl >= -1E-4 && rl <= 0) rl = 0
                }
                var lj = o.pts.length;
                if (ll <= 1) {
                    if (rl >= 0 || ll == 1) {
                        var wsirl = false;
                        var rmr = 0;
                        po = o.pts[lj - 1];
                        for (var j = o.pts.length - 1; j >= 2; j--) {
                            lj = j;
                            lpo = po;
                            po3 = o.pts[j - 2];
                            po2 = o.pts[j - 1];
                            po = o.pts[j];
                            px = po.xx + po.fx;
                            py = po.yy + po.fy;
                            px2 = po2.xx + po2.fx;
                            py2 = po2.yy + po2.fy;
                            px3 = po3.xx + po3.fx;
                            py3 = po3.yy + po3.fy;
                            ax1 = px + (px2 - px) * .5;
                            ay1 = py + (py2 - py) * .5;
                            ax2 = px2 + (px3 - px2) * .5;
                            ay2 = py2 + (py3 - py2) * .5;
                            m = po.ltn +
                                po.fltn;
                            wwk = omct * 2 + 2;
                            if (po.smu != lpo.smu || po.fsmu != lpo.fsmu) {
                                irl *= (lpo.smu + lpo.fsmu) / (po.smu + po.fsmu);
                                mct = omct * (po.smu + po.fsmu);
                                rmct = 1 / mct;
                                sep = msl / mct
                            }
                            rl -= rmr * rmct;
                            while (irl < m) {
                                k = irl / m;
                                ix1 = ax1 + (px2 - ax1) * k;
                                iy1 = ay1 + (py2 - ay1) * k;
                                ix2 = px2 + (ax2 - px2) * k;
                                iy2 = py2 + (ay2 - py2) * k;
                                rx = ix1 + (ix2 - ix1) * k;
                                ry = iy1 + (iy2 - iy1) * k;
                                gpt = arp(o, q, rx, ry);
                                q++;
                                if (wk <= wwk) {
                                    d = Math.sqrt(Math.pow(gpt.xx - lgpt.xx, 2) + Math.pow(gpt.yy - lgpt.yy, 2));
                                    gpt.d = d;
                                    lgpt = gpt;
                                    wk++
                                }
                                if (ll == 1) {
                                    ll = 2;
                                    j = -9999;
                                    break
                                }
                                rl -= rmct;
                                if (rl <= 0) {
                                    ll = 1;
                                    irl += rmct + rl
                                } else irl += rmct
                            }
                            irl -= m;
                            if (testing && o == slither)
                                if (irl > rmct) console.log("ahh! " + irl + " " + rmct);
                            rmr = irl / rmct;
                            rl += irl;
                            wsirl = true
                        }
                    }
                    if (wsirl) rl -= irl
                }
                if (ll <= 1) {
                    if (rl >= -1E-4 && rl <= 0) rl = 0;
                    if (rl >= 0 || ll == 1) {
                        po = o.pts[lj - 1];
                        po2 = o.pts[lj - 2];
                        if (po) {
                            px = po.xx + po.fx;
                            py = po.yy + po.fy
                        }
                        px2 = po2.xx + po2.fx;
                        py2 = po2.yy + po2.fy;
                        while (rl >= 0 || ll == 1) {
                            rx = px2 - (px - px2) * (irl - .5);
                            ry = py2 - (py - py2) * (irl - .5);
                            gpt = arp(o, q, rx, ry);
                            q++;
                            if (wk <= wwk) {
                                d = Math.sqrt(Math.pow(gpt.xx - lgpt.xx, 2) + Math.pow(gpt.yy - lgpt.yy, 2));
                                gpt.d = d;
                                lgpt = gpt;
                                wk++
                            }
                            if (ll == 1) {
                                ll = 2;
                                j = -9999;
                                break
                            }
                            rl -= rmct;
                            if (rl <= 0) {
                                ll = 1;
                                irl += rmct + rl
                            } else irl += rmct;
                            if (rl >= -1E-4 && rl <= 0) rl = 0
                        }
                    }
                }
                k = wk - 1;
                if (k >= gptz.length) k = gptz.length;
                if (choosing_skin) k = 0;
                if (k >= 3) {
                    d3 = 0;
                    for (j = 0; j < k - 1; j++) {
                        gpt = gptz[j];
                        d3 += gpt.d
                    }
                    lgpt = gptz[0];
                    lgpt2 = gptz[0];
                    m = d3 / (k - 2);
                    j = 1;
                    j2 = 1;
                    v = m;
                    for (j = 0; j < k; j++) {
                        gptz[j].ox = gptz[j].xx;
                        gptz[j].oy = gptz[j].yy
                    }
                    for (j = 1; j < k; j++) {
                        gpt = gptz[j];
                        while (true) {
                            gpt2 = gptz[j2];
                            if (v < gpt2.d) {
                                gpt.xx = lgpt2.ox + (gpt2.ox - lgpt2.ox) * v / gpt2.d;
                                gpt.yy = lgpt2.oy + (gpt2.oy - lgpt2.oy) * v / gpt2.d;
                                gpt.xx += (gpt.ox - gpt.xx) * Math.pow(j / k, 2);
                                gpt.yy += (gpt.oy - gpt.yy) * Math.pow(j / k, 2);
                                v += m;
                                break
                            } else {
                                v -= gpt2.d;
                                lgpt2 = gpt2;
                                j2++;
                                if (j2 >= k) {
                                    j = k + 1;
                                    break
                                }
                            }
                        }
                        lgpt = gpt
                    }
                }
                var lpx, lpy;
                for (j = 0; j < q; j++) {
                    px = gptz[j].xx;
                    py = gptz[j].yy;
                    pbx[bp] = px;
                    pby[bp] = py;
                    pba[bp] = 0;
                    if (drez) {
                        rezc--;
                        if (rezc <= 0) rezc = 3
                    }
                    if (px >= bpx1 && py >= bpy1 && px <= bpx2 && py <= bpy2)
                        if (drez && rezc != 3) pbu[bp] = 1;
                        else pbu[bp] = 2;
                    if (bp >= 1) {
                        tx = px - lpx;
                        ty = py - lpy;
                        pba[bp] = Math.atan2(ty, tx)
                    }
                    lpx = px;
                    lpy = py;
                    bp++
                }
                if (q >= 2) {
                    pba[0] = pba[1];
                    o.wehang = pba[1] + Math.PI
                } else o.wehang = o.ang;
                var dj = 4;
                if (drez) dj = 12;
                ctx.save();
                ctx.translate(mww2, mhh2);
                var olsz = gsc * lsz * 52 / 32;
                var shsz = gsc * lsz * 62 / 32;
                var a = o.alive_amt * (1 - o.dead_amt);
                a *= a;
                m = 1;
                if (o.tsp > o.fsp) {
                    m = o.alive_amt * (1 - o.dead_amt) * Math.max(0, Math.min(1, (o.tsp - o.ssp) / (o.msp - o.ssp)));
                    om = m * .37;
                    mr = Math.pow(m, .5);
                    var glsz = 1.5 * gsc * lsz * (1 + (62 / 32 - 1) * mr);
                    var kfmc = opci.kfmc;
                    if (!ggl) {
                        ctx.save();
                        ctx.globalCompositeOperation = "lighter";
                        if (o.rbcs) {
                            var rbcs = o.rbcs;
                            var rbl = rbcs.length;
                            var pci;
                            for (j = bp - 1; j >= 0; j--)
                                if (pbu[j] == 2) {
                                    ox = tx;
                                    oy = ty;
                                    tx = pbx[j];
                                    ty = pby[j];
                                    if (tx > ox) d2 = tx - ox;
                                    else d2 = ox -
                                        tx;
                                    if (ty > oy) d2 += ty - oy;
                                    else d2 += oy - ty;
                                    d2 /= 6;
                                    if (d2 > 1) d2 = 1;
                                    pci = per_color_imgs[rbcs[j % rbl]];
                                    kfmc = pci.kfmc;
                                    ctx.save();
                                    ctx.globalAlpha = d2 * a * mr * .38 * (.6 + .4 * Math.cos(j / dj - 1.15 * o.sfr));
                                    ctx.translate((tx - view_xx) * gsc, (ty - view_yy) * gsc);
                                    if (j < 4) {
                                        var tsz = glsz * (1 + (4 - j) * o.swell);
                                        ctx.drawImage(kfmc, -tsz, -tsz, 2 * tsz, 2 * tsz)
                                    } else ctx.drawImage(kfmc, -glsz, -glsz, 2 * glsz, 2 * glsz);
                                    ctx.restore()
                                }
                        } else
                            for (j = bp - 1; j >= 0; j--)
                                if (pbu[j] == 2) {
                                    ox = tx;
                                    oy = ty;
                                    tx = pbx[j];
                                    ty = pby[j];
                                    if (tx > ox) d2 = tx - ox;
                                    else d2 = ox - tx;
                                    if (ty > oy) d2 += ty - oy;
                                    else d2 +=
                                        oy - ty;
                                    d2 /= 6;
                                    if (d2 > 1) d2 = 1;
                                    ctx.save();
                                    ctx.globalAlpha = d2 * a * mr * .38 * (.6 + .4 * Math.cos(j / dj - 1.15 * o.sfr));
                                    ctx.translate((tx - view_xx) * gsc, (ty - view_yy) * gsc);
                                    if (j < 4) {
                                        var tsz = glsz * (1 + (4 - j) * o.swell);
                                        ctx.drawImage(kfmc, -tsz, -tsz, 2 * tsz, 2 * tsz)
                                    } else ctx.drawImage(kfmc, -glsz, -glsz, 2 * glsz, 2 * glsz);
                                    ctx.restore()
                                } ctx.restore()
                    }
                    m = 1 - m
                }
                var am = a * m;
                if (high_quality || gla > 0) {
                    var oa = am;
                    if (gla != 1) oa = am * gla;
                    ctx.globalAlpha = oa;
                    if (!ggl) {
                        for (j = bp - 1; j >= 0; j--)
                            if (pbu[j] == 2) {
                                ox = tx;
                                oy = ty;
                                tx = pbx[j];
                                ty = pby[j];
                                if (tx > ox) d2 = tx - ox;
                                else d2 = ox -
                                    tx;
                                if (ty > oy) d2 += ty - oy;
                                else d2 += oy - ty;
                                d2 /= 6;
                                if (d2 > 1) d2 = 1;
                                ctx.save();
                                ctx.translate((tx - view_xx) * gsc, (ty - view_yy) * gsc);
                                ctx.drawImage(komc, -olsz, -olsz, 2 * olsz, 2 * olsz);
                                if (j < 9) {
                                    ctx.globalAlpha = d2 * a * (1 - j / 9);
                                    if (j < 4) {
                                        var tsz = shsz * (1 + (4 - j) * o.swell);
                                        ctx.drawImage(ksmc, -tsz, -tsz, 2 * tsz, 2 * tsz)
                                    } else ctx.drawImage(ksmc, -shsz, -shsz, 2 * shsz, 2 * shsz)
                                }
                                ctx.restore()
                            } for (j = 1; j <= 4; j++) {
                            k = bp - j;
                            if (k >= 0 && k < bp)
                                if (pbu[k] == 2) {
                                    ox = tx;
                                    oy = ty;
                                    tx = pbx[k];
                                    ty = pby[k];
                                    if (tx > ox) d2 = tx - ox;
                                    else d2 = ox - tx;
                                    if (ty > oy) d2 += ty - oy;
                                    else d2 += oy - ty;
                                    d2 /= 6;
                                    if (d2 > 1) d2 = 1;
                                    ctx.save();
                                    ctx.translate((tx - view_xx) * gsc, (ty - view_yy) * gsc);
                                    ctx.drawImage(komc, -olsz, -olsz, 2 * olsz, 2 * olsz);
                                    ctx.globalAlpha = d2 * a * (k / 9);
                                    if (k < 4) {
                                        var tsz = shsz * (1 + (4 - k) * o.swell);
                                        ctx.drawImage(ksmc, -tsz, -tsz, 2 * tsz, 2 * tsz)
                                    } else ctx.drawImage(ksmc, -shsz, -shsz, 2 * shsz, 2 * shsz);
                                    ctx.restore()
                                }
                        }
                    }
                }
                ctx.globalAlpha = am;
                var kl = kmcs.length;
                var kl2 = kl * 2;
                var klp = opci.klp;
                if (o.rbcs) {
                    var rbcs = o.rbcs;
                    var fdhc = o.fdhc;
                    var fdtc = o.fdtc;
                    var fdl = o.fdl;
                    var fdam;
                    var rbl = rbcs.length;
                    var pci;
                    if (ggl) {
                        var sgs = o.sgs;
                        var shs = o.shs;
                        var shs2 = o.shs2;
                        var sgsv = o.sgsv;
                        var sfs = o.sfs;
                        var sfus = o.sfus;
                        var sds = o.sds;
                        var sg = null;
                        var sh = null;
                        var sh2 = null;
                        var sf = null;
                        var sfu = null;
                        var sd = null;
                        var kft = opci.kfo.t;
                        var kmos = opci.kmos;
                        if (bp > o.lsgvc)
                            for (j = o.sgs.length; j < bp; j++) {
                                sfu = new PIXI.Sprite(kft);
                                sfu.blendMode = PIXI.BLEND_MODES.ADD;
                                sfu.anchor.set(.5);
                                sfu.visible = false;
                                sfus.push(sfu);
                                sf = new PIXI.Sprite(kft);
                                sf.blendMode = PIXI.BLEND_MODES.ADD;
                                sf.anchor.set(.5);
                                sf.visible = false;
                                sfs.push(sf);
                                sg = new PIXI.Sprite(kmos[0].t);
                                sg.anchor.set(.5);
                                sg.visible = false;
                                sgs.push(sg);
                                if (fdhc && j < fdl) {
                                    var sg2 = new PIXI.Sprite(per_color_imgs[fdhc].kmos[0].t);
                                    sg2.anchor.set(.5);
                                    sg2.scale.x = sg2.scale.y = 1.04;
                                    if (j < 6) sg2.alpha = 1;
                                    else sg2.alpha = 1 - (j - 6) / (fdl - 6);
                                    sg.addChild(sg2)
                                }
                                sh = new PIXI.Sprite(kso.t);
                                sh.anchor.set(.5);
                                sh.visible = false;
                                shs.push(sh);
                                sh2 = new PIXI.Sprite(kso.t);
                                sh2.anchor.set(.5);
                                sh2.visible = false;
                                shs2.push(sh2);
                                sd = new PIXI.Sprite(kdo.t);
                                sd.blendMode = PIXI.BLEND_MODES.ADD;
                                sd.anchor.set(.5);
                                sd.visible = false;
                                sds.push(sd);
                                sgsv.push(false);
                                o.uglo.addChildAt(sfu, 0);
                                o.shlo.addChildAt(sh, 0);
                                o.sglo.addChildAt(sh2, 0);
                                o.sglo.addChildAt(sg, 0);
                                o.sflo.addChildAt(sf, 0);
                                o.sdlo.addChildAt(sd, 0)
                            } else if (bp < o.lsgvc) {
                                k = o.lsgvc - bp;
                                for (j = o.lsgvc - 1; j >= 0; j--) {
                                    o.sgs[j].visible = false;
                                    o.shs[j].visible = false;
                                    o.shs2[j].visible = false;
                                    o.sfs[j].visible = false;
                                    o.sfus[j].visible = false;
                                    o.sds[j].visible = false;
                                    o.sgsv[j] = false;
                                    k--;
                                    if (k <= 0) break
                                }
                            } o.lsgvc = bp;
                        if (o.tsp > o.fsp) {
                            if (!o.sflo.visible) {
                                o.sflo.visible = true;
                                o.uglo.visible = true
                            }
                        } else if (o.sflo.visible) {
                            o.sflo.visible = false;
                            o.uglo.visible =
                                false
                        }
                        if (o.dead_amt > 0) {
                            if (!o.sdlo.visible) o.sdlo.visible = true
                        } else if (o.sdlo.visible) o.sdlo.visible = false;
                        fj = bp - 1;
                        for (j = fj; j >= 0; j--) {
                            sh2 = shs2[j];
                            if (pbu[j] == 2) {
                                k = j - 4;
                                if (k < 0) sh2.alpha = 0;
                                else if (k < bp) {
                                    ox = tx;
                                    oy = ty;
                                    tx = pbx[k];
                                    ty = pby[k];
                                    if (k < 9) {
                                        m = .6 + (.76 - .6) * (k / 9);
                                        sh2.alpha = a * (k / 9);
                                        if (k < 4) {
                                            var tsc = 1 + (4 - k) * o.swell;
                                            sh2.scale.x = tsc * o.sc * m;
                                            sh2.scale.y = tsc * o.sc * m
                                        } else {
                                            sh2.scale.x = o.sc * m;
                                            sh2.scale.y = o.sc * m
                                        }
                                    } else {
                                        if (tx > ox) d2 = tx - ox;
                                        else d2 = ox - tx;
                                        if (ty > oy) d2 += ty - oy;
                                        else d2 += oy - ty;
                                        d2 /= 6;
                                        if (d2 > 1) d2 = 1;
                                        sh2.alpha = a * d2;
                                        sh2.scale.x = o.sc * .88;
                                        sh2.scale.y = o.sc * .88
                                    }
                                    sh2.x = tx - view_xx;
                                    sh2.y = ty - view_yy
                                }
                            } else sh2.alpha = 0
                        }
                        if (o.tsp > o.fsp) {
                            var dj = 4;
                            k = 1;
                            if (drez) {
                                dj = 12;
                                k = .5
                            }
                            fj = bp - 1;
                            d2 = 1;
                            for (j = fj; j >= 0; j--) {
                                sf = sfs[j];
                                sfu = sfus[j];
                                if (j != fj) {
                                    if (tx > ox) d2 = tx - ox;
                                    else d2 = ox - tx;
                                    if (ty > oy) d2 += ty - oy;
                                    else d2 += oy - ty;
                                    if (drez) d2 /= 3;
                                    else d2 /= 6;
                                    if (d2 > 1) d2 = 1
                                }
                                ox = tx;
                                oy = ty;
                                tx = pbx[j];
                                ty = pby[j];
                                sfu.alpha = d2 * a * om * .6 * k * (.6 + .4 * Math.cos(j / dj - o.sfr));
                                if (j < 4) {
                                    var tsc = 1 + (4 - j) * o.swell;
                                    sfu.scale.x = tsc * o.sc * 1.5;
                                    sfu.scale.y = tsc * o.sc * 1.5
                                } else {
                                    sfu.scale.x = o.sc * 1.5;
                                    sfu.scale.y = o.sc * 1.5
                                }
                                sfu.x = tx - view_xx;
                                sfu.y = ty - view_yy;
                                sf.alpha = d2 * a * om * .4 * k * (.5 + .5 * Math.cos(j / dj - o.sfr));
                                if (j < 4) {
                                    var tsc = 1 + (4 - j) * o.swell;
                                    sf.scale.x = tsc * o.sc * 1.3;
                                    sf.scale.y = tsc * o.sc * 1.3
                                } else {
                                    sf.scale.x = o.sc * 1.3;
                                    sf.scale.y = o.sc * 1.3
                                }
                                sf.x = tx - view_xx;
                                sf.y = ty - view_yy
                            }
                        }
                        fj = bp - 1;
                        fjm4 = fj - 4;
                        for (j = fj; j >= 0; j--) {
                            sg = sgs[j];
                            sh = shs[j];
                            sh2 = shs2[j];
                            sf = sfs[j];
                            sfu = sfus[j];
                            sd = sds[j];
                            if (pbu[j] >= 1) {
                                px = pbx[j];
                                py = pby[j];
                                k = 0;
                                if (!o.cusk)
                                    if (klp) {
                                        k = j % kl2;
                                        if (k >= kl) k = kl2 - (k + 1)
                                    } else k = j % kl;
                                pci = per_color_imgs[rbcs[j % rbl]];
                                if (!sgsv[j]) {
                                    sg.visible =
                                        true;
                                    sh.visible = true;
                                    sh2.visible = true;
                                    sf.visible = true;
                                    sfu.visible = true;
                                    sgsv[j] = true;
                                    sg.texture = pci.kmos[k].t;
                                    sf.texture = pci.kfo.t;
                                    sfu.texture = pci.kfo.t
                                }
                                if (pbu[j] >= 2) {
                                    k = j - 4;
                                    if (k < 0) k = 0;
                                    if (k < 9) {
                                        sh.alpha = a * (1 - k / 9);
                                        if (j < 4) {
                                            var tsc = 1 + (4 - j) * o.swell;
                                            sh.scale.x = tsc * o.sc * .88;
                                            sh.scale.y = tsc * o.sc * .88
                                        } else {
                                            sh.scale.x = o.sc * .88;
                                            sh.scale.y = o.sc * .88
                                        }
                                        sh.x = px - view_xx;
                                        sh.y = py - view_yy
                                    } else if (j >= fjm4) {
                                        sh.alpha = 1;
                                        sh.scale.x = o.sc * .88;
                                        sh.scale.y = o.sc * .88;
                                        sh.x = px - view_xx;
                                        sh.y = py - view_yy
                                    } else sh.alpha = 0
                                } else sh.alpha = 0;
                                sg.alpha =
                                    a;
                                sg.rotation = pba[j];
                                if (j < 4) {
                                    var tsc = 1 + (4 - j) * o.swell;
                                    sg.scale.x = tsc * o.sc * .62;
                                    sg.scale.y = tsc * o.sc * .62
                                } else {
                                    sg.scale.x = o.sc * .62;
                                    sg.scale.y = o.sc * .62
                                }
                                sg.x = px - view_xx;
                                sg.y = py - view_yy;
                                sgsdr++;
                                if (o.dead) {
                                    var falf = (.15 + .15 * Math.abs(Math.sin(5 * Math.PI * o.dead_amt))) * Math.sin(Math.PI * o.dead_amt);
                                    ox = tx;
                                    oy = ty;
                                    tx = sg.x;
                                    ty = sg.y;
                                    if (tx > ox) d2 = tx - ox;
                                    else d2 = ox - tx;
                                    if (ty > oy) d2 += ty - oy;
                                    else d2 += oy - ty;
                                    d2 /= 6;
                                    if (d2 > 1) d2 = 1;
                                    sd.scale.x = sg.scale.x * ksz / 64;
                                    sd.scale.y = sg.scale.y * ksz / 64;
                                    sd.x = sg.x;
                                    sd.y = sg.y;
                                    sd.visible = true;
                                    sd.alpha =
                                        d2 * falf * (.6 + .4 * Math.cos(j / 4 - 15 * o.dead_amt))
                                }
                            } else if (sgsv[j]) {
                                sg.visible = false;
                                sh.visible = false;
                                sh2.visible = false;
                                sf.visible = false;
                                sfu.visible = false;
                                sd.visible = false;
                                sgsv[j] = false
                            }
                        }
                    } else
                        for (j = bp - 1; j >= 0; j--)
                            if (pbu[j] >= 1) {
                                px = pbx[j];
                                py = pby[j];
                                if (j >= 4) {
                                    k = j - 4;
                                    if (pbu[k] == 2) {
                                        ox = tx;
                                        oy = ty;
                                        tx = pbx[k];
                                        ty = pby[k];
                                        ctx.save();
                                        ctx.translate((tx - view_xx) * gsc, (ty - view_yy) * gsc);
                                        if (k < 9) {
                                            ctx.globalAlpha = a * (k / 9);
                                            if (k < 4) {
                                                var tsz = shsz * (1 + (4 - k) * o.swell);
                                                ctx.drawImage(ksmc, -tsz, -tsz, 2 * tsz, 2 * tsz)
                                            } else ctx.drawImage(ksmc, -shsz, -shsz, 2 * shsz, 2 * shsz)
                                        } else {
                                            if (tx > ox) d2 = tx - ox;
                                            else d2 = ox - tx;
                                            if (ty > oy) d2 += ty - oy;
                                            else d2 += oy - ty;
                                            d2 /= 6;
                                            if (d2 > 1) d2 = 1;
                                            ctx.globalAlpha = a * d2;
                                            ctx.drawImage(ksmc, -shsz, -shsz, 2 * shsz, 2 * shsz)
                                        }
                                        ctx.restore()
                                    }
                                }
                                ctx.save();
                                ctx.globalAlpha = a;
                                ctx.translate((px - view_xx) * gsc, (py - view_yy) * gsc);
                                if (!nsr) ctx.rotate(pba[j]);
                                var k = 0;
                                if (!o.cusk)
                                    if (klp) {
                                        k = j % kl2;
                                        if (k >= kl) k = kl2 - (k + 1)
                                    } else k = j % kl;
                                pci = per_color_imgs[rbcs[j % rbl]];
                                if (j < 4) {
                                    var tsz = lsz * (1 + (4 - j) * o.swell);
                                    ctx.drawImage(pci.kmcs[k], -gsc * tsz, -gsc * tsz, gsc * 2 * tsz, gsc * 2 * tsz)
                                } else ctx.drawImage(pci.kmcs[k], -gsc * lsz, -gsc * lsz, gsc * 2 * lsz, gsc * 2 * lsz);
                                if (fdhc && j < fdl) {
                                    fdam = 1 - j / fdl;
                                    pci = per_color_imgs[fdhc];
                                    ctx.globalAlpha = a * fdam;
                                    var tsz = (1 + .05 * fdam) * lsz * (1 + (4 - j) * o.swell);
                                    ctx.drawImage(pci.kmcs[0], -gsc * tsz, -gsc * tsz, gsc * 2 * tsz, gsc * 2 * tsz)
                                }
                                if (fdtc && j > bp - fdl) {
                                    fdam = 1 - (bp - j) / fdl;
                                    pci = per_color_imgs[fdtc];
                                    ctx.globalAlpha = a * fdam;
                                    var tsz = (1 + .05 * fdam) * lsz * (1 + (4 - j) * o.swell);
                                    ctx.drawImage(pci.kmcs[0], -gsc * tsz, -gsc * tsz, gsc * 2 * tsz, gsc * 2 * tsz)
                                }
                                ctx.restore()
                            } if (!ggl)
                        if (o.tsp > o.fsp)
                            if (high_quality || gla > 0) {
                                ctx.save();
                                ctx.globalCompositeOperation =
                                    "lighter";
                                var dj = 4;
                                if (drez) dj = 12;
                                var glsz = lsz * 2;
                                for (j = bp - 1; j >= 0; j--)
                                    if (pbu[j] == 2) {
                                        ox = tx;
                                        oy = ty;
                                        tx = pbx[j];
                                        ty = pby[j];
                                        if (tx > ox) d2 = tx - ox;
                                        else d2 = ox - tx;
                                        if (ty > oy) d2 += ty - oy;
                                        else d2 += oy - ty;
                                        d2 /= 6;
                                        if (d2 > 1) d2 = 1;
                                        ctx.save();
                                        ctx.translate((tx - view_xx) * gsc, (ty - view_yy) * gsc);
                                        ctx.globalAlpha = d2 * a * om * gla * (.5 + .5 * Math.cos(j / dj - o.sfr));
                                        var k = 0;
                                        if (!o.cusk)
                                            if (klp) {
                                                k = j % kl2;
                                                if (k >= kl) k = kl2 - (k + 1)
                                            } else k = j % kl;
                                        if (j < 4) {
                                            var tsz = glsz * (1 + (4 - j) * o.swell);
                                            ctx.drawImage(per_color_imgs[rbcs[j % rbl]].kfmc, -gsc * tsz, -gsc * tsz, gsc * 2 * tsz, gsc * 2 * tsz)
                                        } else ctx.drawImage(per_color_imgs[rbcs[j % rbl]].kfmc, -gsc * glsz, -gsc * glsz, gsc * 2 * glsz, gsc * 2 * glsz);
                                        ctx.restore()
                                    } ctx.restore()
                            }
                } else {
                    for (j = bp - 1; j >= 0; j--)
                        if (pbu[j] >= 1) {
                            px = pbx[j];
                            py = pby[j];
                            if (j >= 4) {
                                k = j - 4;
                                if (pbu[k] == 2) {
                                    ox = tx;
                                    oy = ty;
                                    tx = pbx[k];
                                    ty = pby[k];
                                    ctx.save();
                                    ctx.translate((tx - view_xx) * gsc, (ty - view_yy) * gsc);
                                    if (k < 9) {
                                        ctx.globalAlpha = a * (k / 9);
                                        if (k < 4) {
                                            var tsz = shsz * (1 + (4 - k) * o.swell);
                                            ctx.drawImage(ksmc, -tsz, -tsz, 2 * tsz, 2 * tsz)
                                        } else ctx.drawImage(ksmc, -shsz, -shsz, 2 * shsz, 2 * shsz)
                                    } else {
                                        if (tx > ox) d2 = tx - ox;
                                        else d2 =
                                            ox - tx;
                                        if (ty > oy) d2 += ty - oy;
                                        else d2 += oy - ty;
                                        d2 /= 6;
                                        if (d2 > 1) d2 = 1;
                                        ctx.globalAlpha = a * d2;
                                        ctx.drawImage(ksmc, -shsz, -shsz, 2 * shsz, 2 * shsz)
                                    }
                                    ctx.restore()
                                }
                            }
                            ctx.save();
                            ctx.globalAlpha = a;
                            ctx.translate((px - view_xx) * gsc, (py - view_yy) * gsc);
                            if (!nsr) ctx.rotate(pba[j]);
                            var k = 0;
                            if (!o.cusk)
                                if (klp) {
                                    k = j % kl2;
                                    if (k >= kl) k = kl2 - (k + 1)
                                } else k = j % kl;
                            if (j < 4) {
                                var tsz = lsz * (1 + (4 - j) * o.swell);
                                ctx.drawImage(kmcs[k], -gsc * tsz, -gsc * tsz, gsc * 2 * tsz, gsc * 2 * tsz)
                            } else ctx.drawImage(kmcs[k], -gsc * lsz, -gsc * lsz, gsc * 2 * lsz, gsc * 2 * lsz);
                            ctx.restore()
                        } if (o.tsp >
                        o.fsp)
                        if (high_quality || gla > 0) {
                            ctx.save();
                            ctx.globalCompositeOperation = "lighter";
                            var dj = 4;
                            if (drez) dj = 12;
                            var glsz = lsz * 2;
                            for (j = bp - 1; j >= 0; j--)
                                if (pbu[j] == 2) {
                                    ox = tx;
                                    oy = ty;
                                    tx = pbx[j];
                                    ty = pby[j];
                                    var k = 0;
                                    if (!o.cusk)
                                        if (klp) {
                                            k = j % kl2;
                                            if (k >= kl) k = kl2 - (k + 1)
                                        } else k = j % kl;
                                    if (tx > ox) d2 = tx - ox;
                                    else d2 = ox - tx;
                                    if (ty > oy) d2 += ty - oy;
                                    else d2 += oy - ty;
                                    d2 /= 6;
                                    if (d2 > 1) d2 = 1;
                                    ctx.save();
                                    ctx.translate((tx - view_xx) * gsc, (ty - view_yy) * gsc);
                                    ctx.globalAlpha = d2 * a * om * gla * (.5 + .5 * Math.cos(j / dj - o.sfr));
                                    if (j < 4) {
                                        var tsz = glsz * (1 + (4 - j) * o.swell);
                                        ctx.drawImage(opci.kfmc, -gsc * tsz, -gsc * tsz, gsc * 2 * tsz, gsc * 2 * tsz)
                                    } else ctx.drawImage(opci.kfmc, -gsc * glsz, -gsc * glsz, gsc * 2 * glsz, gsc * 2 * glsz);
                                    ctx.restore()
                                } ctx.restore()
                        }
                }
                if (testing && shifty) {
                    for (j = o.pts.length - 1; j >= 0; j--) {
                        var po = o.pts[j];
                        px = po.xx + po.fx;
                        py = po.yy + po.fy;
                        ctx.save();
                        if (po.dying) ctx.fillStyle = "#FF0000";
                        else ctx.fillStyle = "#FF00FF";
                        ctx.globalAlpha = 1 - po.da;
                        ctx.translate(0 * mww / 2 + (px - view_xx) * gsc, 0 * mhh / 2 + (py - view_yy) * gsc);
                        ctx.fillRect(-4, -4, 8, 8);
                        ctx.restore()
                    }
                    for (j = o.pts.length - 1; j >= 0; j--) {
                        po = o.pts[j];
                        if (!po.dying) {
                            px = po.xx +
                                po.fx;
                            py = po.yy + po.fy;
                            ctx.fillStyle = "#FFFFFF";
                            ctx.globalAlpha = 1 - po.da;
                            ctx.save();
                            ctx.translate(0 * mww / 2 + (px - view_xx) * gsc, 0 * mhh / 2 + (py - view_yy) * gsc);
                            ctx.fillRect(-2, -2, 4, 4);
                            ctx.restore()
                        }
                    }
                    for (j = 0; j < bp; j++) {
                        ctx.save();
                        ctx.fillStyle = "#00FF00";
                        ctx.translate(0 * mww / 2 + (gptz[j].xx - view_xx) * gsc, 0 * mhh / 2 + (gptz[j].yy - view_yy) * gsc);
                        ctx.fillRect(-1, -1, 2, 2);
                        ctx.restore()
                    }
                }
                if (o.antenna) {
                    tx = Math.cos(o.ang);
                    ty = Math.sin(o.ang);
                    ax = hx - tx * 8 * o.sc;
                    ay = hy - ty * 8 * o.sc;
                    if (bp >= 2 && (ax >= apx1 && ay >= apy1 && ax <= apx2 && ay <= apy2)) {
                        o.atx[0] = ax;
                        o.aty[0] = ay;
                        var m = o.sc * gsc;
                        fj = o.atx.length - 1;
                        if (choosing_skin)
                            for (var j = 1; j <= fj; j++) {
                                o.atvx[j] -= .3;
                                o.atvy[j] += Math.cos(fr / 23 - 7 * j / fj) * .14
                            } else if (!o.antenna_shown) {
                                o.antenna_shown = true;
                                for (var j = 1; j <= fj; j++) {
                                    o.atx[j] = ax - tx * j * 4 * o.sc;
                                    o.aty[j] = ay - ty * j * 4 * o.sc
                                }
                            } for (var j = 1; j <= fj; j++) {
                            xx = o.atx[j - 1];
                            yy = o.aty[j - 1];
                            xx += Math.random() * 2 - 1;
                            yy += Math.random() * 2 - 1;
                            tx = o.atx[j] - xx;
                            ty = o.aty[j] - yy;
                            if (tx >= -4 && ty >= -4 && tx < 4 && ty < 4) ang = at2lt[ty * 32 + 128 << 8 | tx * 32 + 128];
                            else if (tx >= -8 && ty >= -8 && tx < 8 && ty < 8) ang = at2lt[ty * 16 + 128 << 8 | tx * 16 + 128];
                            else if (tx >= -16 && ty >= -16 && tx < 16 && ty < 16) ang = at2lt[ty * 8 + 128 << 8 | tx * 8 + 128];
                            else if (tx >= -127 && ty >= -127 && tx < 127 && ty < 127) ang = at2lt[ty + 128 << 8 | tx + 128];
                            else ang = Math.atan2(ty, tx);
                            xx += Math.cos(ang) * 4 * o.sc;
                            yy += Math.sin(ang) * 4 * o.sc;
                            o.atvx[j] += (xx - o.atx[j]) * .1;
                            o.atvy[j] += (yy - o.aty[j]) * .1;
                            o.atx[j] += o.atvx[j];
                            o.aty[j] += o.atvy[j];
                            o.atvx[j] *= .88;
                            o.atvy[j] *= .88;
                            tx = o.atx[j] - o.atx[j - 1];
                            ty = o.aty[j] - o.aty[j - 1];
                            d = Math.sqrt(tx * tx + ty * ty);
                            if (d > 4 * o.sc) {
                                if (tx >= -4 && ty >= -4 && tx < 4 && ty < 4) ang = at2lt[ty * 32 + 128 << 8 | tx * 32 + 128];
                                else if (tx >= -8 && ty >= -8 && tx < 8 && ty < 8) ang = at2lt[ty * 16 + 128 << 8 | tx * 16 + 128];
                                else if (tx >= -16 && ty >= -16 && tx < 16 && ty < 16) ang = at2lt[ty * 8 + 128 << 8 | tx * 8 + 128];
                                else if (tx >= -127 && ty >= -127 && tx < 127 && ty < 127) ang = at2lt[ty + 128 << 8 | tx + 128];
                                else ang = Math.atan2(ty, tx);
                                o.atx[j] = o.atx[j - 1] + Math.cos(ang) * 4 * o.sc;
                                o.aty[j] = o.aty[j - 1] + Math.sin(ang) * 4 * o.sc
                            }
                        }
                        ctx.globalAlpha = a;
                        ctx.strokeStyle = o.atc1;
                        ctx.lineWidth = 5 * m;
                        ctx.lineCap = "round";
                        ctx.lineJoin = "round";
                        ctx.beginPath();
                        fj = o.atx.length - 1;
                        tx = (o.atx[fj] - view_xx) * gsc;
                        ty = (o.aty[fj] - view_yy) * gsc;
                        ctx.moveTo(tx, ty);
                        for (var j = fj - 1; j >= 1; j--) {
                            xx = (o.atx[j] - view_xx) * gsc;
                            yy = (o.aty[j] - view_yy) * gsc;
                            if (Math.abs(xx - tx) + Math.abs(yy - ty) >= 1) {
                                tx = xx;
                                ty = yy;
                                ctx.lineTo(tx, ty)
                            }
                        }
                        xx = ((o.atx[1] + o.atx[0]) * .5 - view_xx) * gsc;
                        yy = ((o.aty[1] + o.aty[0]) * .5 - view_yy) * gsc;
                        if (Math.abs(xx - tx) + Math.abs(yy - ty) >= 1) {
                            tx = xx;
                            ty = yy;
                            ctx.lineTo(tx, ty)
                        }
                        ctx.stroke();
                        ctx.globalAlpha = o.atia * a;
                        ctx.strokeStyle = o.atc2;
                        ctx.lineWidth = 4 * m;
                        ctx.beginPath();
                        fj = o.atx.length - 1;
                        tx = (o.atx[fj] - view_xx) * gsc;
                        ty = (o.aty[fj] - view_yy) * gsc;
                        ctx.moveTo(tx,
                            ty);
                        for (var j = fj - 1; j >= 0; j--) {
                            xx = (o.atx[j] - view_xx) * gsc;
                            yy = (o.aty[j] - view_yy) * gsc;
                            if (Math.abs(xx - tx) + Math.abs(yy - ty) >= 1) {
                                tx = xx;
                                ty = yy;
                                ctx.lineTo(tx, ty)
                            }
                        }
                        ctx.stroke();
                        if (o.atwg) {
                            ctx.lineWidth = 3 * m;
                            ctx.stroke();
                            ctx.lineWidth = 2 * m;
                            ctx.stroke()
                        }
                        ctx.globalAlpha = a * o.blba;
                        if (o.abrot) {
                            ctx.save();
                            ctx.translate((o.atx[fj] - view_xx) * gsc, (o.aty[fj] - view_yy) * gsc);
                            vang = Math.atan2(o.aty[fj] - o.aty[fj - 1], o.atx[fj] - o.atx[fj - 1]) - o.atba;
                            if (vang < 0 || vang >= pi2) vang %= pi2;
                            if (vang < -Math.PI) vang += pi2;
                            else if (vang > Math.PI) vang -=
                                pi2;
                            o.atba = (o.atba + vang * .15) % pi2;
                            ctx.rotate(o.atba);
                            ctx.drawImage(o.bulb, o.blbx * o.bsc * m, o.blby * o.bsc * m, o.blbw * o.bsc * m, o.blbh * o.bsc * m);
                            ctx.restore()
                        } else ctx.drawImage(o.bulb, (o.atx[fj] - view_xx + o.blbx * o.bsc * o.sc) * gsc, (o.aty[fj] - view_yy + o.blby * o.bsc * o.sc) * gsc, o.blbw * o.bsc * m, o.blbh * o.bsc * m);
                        if (o.apbs) {
                            ctx.globalAlpha = .5 * a;
                            ctx.lineWidth = 3 * m;
                            ctx.stroke();
                            ctx.lineWidth = 2 * m;
                            ctx.stroke()
                        }
                    } else if (o.antenna_shown) o.antenna_shown = false
                }
                if (!ggl)
                    if (o.dead) {
                        ctx.save();
                        ctx.globalCompositeOperation = "lighter";
                        var falf =
                            (.15 + .15 * Math.abs(Math.sin(5 * Math.PI * o.dead_amt))) * Math.sin(Math.PI * o.dead_amt);
                        var dsz = gsc * lsz;
                        for (j = bp - 1; j >= 0; j--)
                            if (pbu[j] == 2) {
                                ox = tx;
                                oy = ty;
                                tx = pbx[j];
                                ty = pby[j];
                                if (tx > ox) d2 = tx - ox;
                                else d2 = ox - tx;
                                if (ty > oy) d2 += ty - oy;
                                else d2 += oy - ty;
                                d2 /= 6;
                                if (d2 > 1) d2 = 1;
                                px = pbx[j];
                                py = pby[j];
                                ctx.save();
                                ctx.globalAlpha = d2 * falf * (.6 + .4 * Math.cos(j / 4 - 15 * o.dead_amt));
                                ctx.translate((px - view_xx) * gsc, (py - view_yy) * gsc);
                                if (j < 4) {
                                    var tsz = dsz * (1 + (4 - j) * o.swell);
                                    ctx.drawImage(kdmc, -tsz, -tsz, 2 * tsz, 2 * tsz)
                                } else ctx.drawImage(kdmc, -dsz, -dsz, 2 * dsz, 2 * dsz);
                                ctx.restore()
                            } ctx.restore()
                    } ctx.restore()
            }
            if (o.one_eye) {
                var ed = 3 * ssc;
                var ex = Math.cos(fang) * ed;
                var ey = Math.sin(fang) * ed;
                var esz = ssc * o.ebisz;
                if (ggl) {
                    o.ebi.x = ex + hx - view_xx;
                    o.ebi.y = ey + hy - view_yy;
                    if (o.dead_amt == 0) o.ebi.alpha = 1;
                    else o.ebi.alpha = Math.sqrt(1 - o.dead_amt);
                    o.ebi.scale.x = o.ebi.scale.y = esz / 64
                } else {
                    if (o.dead_amt == 0) ctx.globalAlpha = 1;
                    else ctx.globalAlpha = Math.sqrt(1 - o.dead_amt);
                    ctx.drawImage(o.ebi, 0, 0, o.ebiw, o.ebih, mww2 + (ex + hx - esz / 2 - view_xx) * gsc, mhh2 + (ey + hy - esz / 2 - view_yy) * gsc, esz * gsc, esz * gsc)
                }
                var ex = Math.cos(fang) * (ed + .15) + o.rex * ssc;
                var ey = Math.sin(fang) * (ed + .15) + o.rey * ssc;
                var esz = ssc * o.episz;
                if (ggl) {
                    o.epi.x = ex + hx - view_xx;
                    o.epi.y = ey + hy - view_yy;
                    o.epi.scale.x = o.epi.scale.y = esz / 48
                } else ctx.drawImage(o.epi, 0, 0, o.epiw, o.epih, mww2 + (ex + hx - esz / 2 - view_xx) * gsc, mhh2 + (ey + hy - esz / 2 - view_yy) * gsc, esz * gsc, esz * gsc)
            } else {
                if (!o.eac) drawEyes(o, ctx, fang, ssc, 1, 1);
                if (o.accessory != -1) {
                    var ed = o.ed * ssc;
                    var j = o.accessory;
                    if (j >= 0 && j < a_ct) {
                        var ex = Math.cos(fang) * ed;
                        var ey = Math.sin(fang) * ed;
                        var ai = a_imgs[j];
                        var ii = ai.img;
                        if (ii == null) {
                            ii = document.createElement("img");
                            a_imgs[j].img = ii;
                            ii.onload = function() {
                                for (var i = a_imgs.length - 1; i >= 0; i--)
                                    if (a_imgs[i].img == this) {
                                        var o = a_imgs[i];
                                        o.ww = this.width;
                                        o.hh = this.height;
                                        o.loaded = true;
                                        break
                                    }
                            };
                            ii.src = a_imgs[j].u
                        } else if (ai.loaded) {
                            var m = o.sc * gsc * ai.sc;
                            ctx.save();
                            ctx.translate(mww2 + (ex + hx - view_xx) * gsc, mhh2 + (ey + hy - view_yy) * gsc);
                            ctx.rotate(fang);
                            ctx.globalAlpha = a;
                            ctx.drawImage(ii, 0, 0, ai.ww, ai.hh, -m * ai.px, -m * ai.py, m * ai.ww, m * ai.hh);
                            ctx.restore()
                        }
                    }
                }
                if (o.jyt) {
                    var m = o.sc *
                        gsc * .25;
                    var ed = -3 * ssc;
                    var esp = 7 * ssc;
                    var ex = Math.cos(fang) * (ed + .5) + o.rex * ssc + Math.cos(fang - Math.PI / 2) * esp;
                    var ey = Math.sin(fang) * (ed + .5) + o.rey * ssc + Math.sin(fang - Math.PI / 2) * esp;
                    ctx.save();
                    ctx.translate(mww2 + (ex + hx - view_xx) * gsc, mhh2 + (ey + hy - view_yy) * gsc);
                    ctx.rotate(fang);
                    ctx.drawImage(ecmc, -24 * m, -24 * m, 48 * m, 48 * m);
                    ctx.restore();
                    var ex = Math.cos(fang) * (ed + .5) + o.rex * ssc + Math.cos(fang + Math.PI / 2) * esp;
                    var ey = Math.sin(fang) * (ed + .5) + o.rey * ssc + Math.sin(fang + Math.PI / 2) * esp;
                    ctx.save();
                    ctx.translate(mww2 + (ex + hx - view_xx) *
                        gsc, mhh2 + (ey + hy - view_yy) * gsc);
                    ctx.rotate(fang);
                    ctx.drawImage(ecmc, -24 * m, -24 * m, 48 * m, 48 * m);
                    ctx.restore();
                    var ed = 5 * ssc;
                    var ex = Math.cos(fang) * (ed + .5) + o.rex * ssc;
                    var ey = Math.sin(fang) * (ed + .5) + o.rey * ssc;
                    m = o.sc * gsc * .16;
                    ctx.save();
                    ctx.translate(mww2 + (ex + hx - view_xx) * gsc, mhh2 + (ey + hy - view_yy) * gsc);
                    ctx.rotate(fang);
                    ctx.drawImage(jmou, -40 * m, -65 * m, 79 * m, 130 * m);
                    ctx.restore()
                }
            }
            ctx.globalAlpha = 1;
            if (o.slg) {
                var m = o.sc * gsc * .25;
                if (ggl) {
                    var tx = Math.cos(fang) * 13 * ssc + Math.cos(fang - Math.PI / 2) * (6 * ssc + .5);
                    var ty = Math.sin(fang) *
                        13 * ssc + Math.sin(fang - Math.PI / 2) * (6 * ssc + .5);
                    o.stem1.x = tx + hx - view_xx;
                    o.stem1.y = ty + hy - view_yy;
                    o.stem1.scale.x = o.stem1.scale.y = m;
                    o.stem1.rotation = fang - .4;
                    var tx = Math.cos(fang) * 13 * ssc + Math.cos(fang + Math.PI / 2) * (6 * ssc + .5);
                    var ty = Math.sin(fang) * 13 * ssc + Math.sin(fang + Math.PI / 2) * (6 * ssc + .5);
                    o.stem2.x = tx + hx - view_xx;
                    o.stem2.y = ty + hy - view_yy;
                    o.stem2.scale.x = o.stem2.scale.y = m;
                    o.stem2.rotation = fang + .4
                } else {
                    ctx.save();
                    var tx = Math.cos(fang) * 13 * ssc + Math.cos(fang - Math.PI / 2) * (6 * ssc + .5);
                    var ty = Math.sin(fang) * 13 * ssc + Math.sin(fang -
                        Math.PI / 2) * (6 * ssc + .5);
                    ctx.translate(mww2 + (tx + hx - view_xx) * gsc, mhh2 + (ty + hy - view_yy) * gsc);
                    ctx.rotate(fang - .4);
                    ctx.drawImage(sest, -28 * m, -44 * m, 105 * m, 88 * m);
                    ctx.restore();
                    ctx.save();
                    var tx = Math.cos(fang) * 13 * ssc + Math.cos(fang + Math.PI / 2) * (6 * ssc + .5);
                    var ty = Math.sin(fang) * 13 * ssc + Math.sin(fang + Math.PI / 2) * (6 * ssc + .5);
                    ctx.translate(mww2 + (tx + hx - view_xx) * gsc, mhh2 + (ty + hy - view_yy) * gsc);
                    ctx.rotate(fang + .4);
                    ctx.drawImage(sest, -28 * m, -44 * m, 105 * m, 88 * m);
                    ctx.restore()
                }
            }
        }
    }
    if (team_mode) {
        ctx.save();
        ctx.globalAlpha = .5;
        for (var i =
                slithers.length - 1; i >= 0; i--) {
            o = slithers[i];
            if (o.iiv)
                if (!o.eac) drawEyes(o, ctx, o.ehang, o.sc, .4, .75)
        }
        ctx.restore()
    }
    if (ggl) {
        var ba = 1;
        var ba2 = .75;
        fdsdr = 0;
        for (var i = foods_c - 1; i >= 0; i--) {
            var fo = foods[i];
            var fi = fo.fi;
            var ofi = fo.ofi;
            var gfi = fo.gfi;
            var g2fi = fo.g2fi;
            if (fo.rx >= fpx1 && fo.ry >= fpy1 && fo.rx <= fpx2 && fo.ry <= fpy2) {
                tx = fo.rx - view_xx;
                ty = fo.ry - view_yy;
                ofi.x = tx;
                ofi.y = ty;
                fi.x = tx;
                fi.y = ty;
                fdsdr++;
                fd2 = tx * tx + ty * ty;
                if (fd2 > 1E6) {
                    gfi.alpha = 0;
                    g2fi.alpha = 0
                } else {
                    fs = 1 + .064 * fo.rad;
                    fal = .21 * (1 - fd2 / (44600 + fd2));
                    if (fo.rad != 1) fal *=
                        fo.rad;
                    gfi.alpha = fal * (.7 + .3 * Math.cos(fo.gfr / 13)) * fo.fr;
                    gfi.x = tx * fs;
                    gfi.y = ty * fs;
                    fs = 1 + .21 * fo.rad;
                    fx = tx * fs;
                    fy = ty * fs;
                    fal = .085 * (1 - fd2 / (16500 + fd2));
                    if (fo.rad != 1) fal *= fo.rad;
                    g2fi.alpha = fal * (.7 + .3 * Math.cos(fo.gfr / 13)) * fo.fr;
                    g2fi.x = fx;
                    g2fi.y = fy
                }
                if (fo.fr == 1 && fo.rad == 1) {
                    ofi.alpha = ba;
                    fi.alpha = .25 + ba2 * (.5 + .5 * Math.cos(fo.gfr / 13));
                    ofi.scale.x = .0165 + fo.sz * .03;
                    ofi.scale.y = .0165 + fo.sz * .03;
                    fi.scale.x = .04 + fo.sz / 15;
                    fi.scale.y = .04 + fo.sz / 15;
                    gfi.scale.x = fo.sz / 5;
                    gfi.scale.y = fo.sz / 5;
                    g2fi.scale.x = fo.sz / 3;
                    g2fi.scale.y = fo.sz /
                        3
                } else {
                    ofi.alpha = ba * fo.fr;
                    fi.alpha = .25 + ba2 * (.5 + .5 * Math.cos(fo.gfr / 13)) * fo.fr;
                    ofi.scale.x = .0165 + fo.sz * .03 * fo.rad;
                    ofi.scale.y = .0165 + fo.sz * .03 * fo.rad;
                    fi.scale.x = .04 + fo.sz / 15 * fo.rad;
                    fi.scale.y = .04 + fo.sz / 15 * fo.rad;
                    gfi.scale.x = fo.sz / 5 * fo.rad;
                    gfi.scale.y = fo.sz / 5 * fo.rad;
                    g2fi.scale.x = fo.sz / 3 * fo.rad;
                    g2fi.scale.y = fo.sz / 3 * fo.rad
                }
                if (!fi.visible) {
                    fi.visible = true;
                    ofi.visible = true;
                    gfi.visible = true;
                    g2fi.visible = true
                }
            } else if (fi.visible) {
                fi.visible = false;
                ofi.visible = false;
                gfi.visible = false;
                g2fi.visible = false
            }
        }
    } else {
        if (high_quality ||
            gla > 0) {
            ctx.save();
            ctx.globalCompositeOperation = "lighter";
            for (var i = foods_c - 1; i >= 0; i--) {
                var fo = foods[i];
                if (fo.rx >= fpx1 && fo.ry >= fpy1 && fo.rx <= fpx2 && fo.ry <= fpy2) {
                    tx = fo.rx - view_xx;
                    ty = fo.ry - view_yy;
                    fd2 = tx * tx + ty * ty;
                    fs = 1 + .06 * fo.rad;
                    fx = tx * fs;
                    fy = ty * fs;
                    fal = .005 + .09 * (1 - fd2 / (86E3 + fd2));
                    if (fo.rad != 1) fal *= Math.pow(fo.rad, .25);
                    if (gla != 1) fal *= gla;
                    fx = fx * gsc + mww2;
                    fy = fy * gsc + mhh2;
                    if (fo.rad == 1) {
                        fx -= fo.gfw2;
                        fy -= fo.gfh2;
                        ctx.globalAlpha = fal * fo.fr;
                        ctx.drawImage(fo.gfi, fx, fy);
                        ctx.globalAlpha = fal * (.5 + .5 * Math.cos(fo.gfr / 13)) * fo.fr;
                        ctx.drawImage(fo.gfi, fx, fy)
                    } else {
                        fx -= fo.gfw2 * fo.rad;
                        fy -= fo.gfh2 * fo.rad;
                        ctx.globalAlpha = fal * fo.fr;
                        ctx.drawImage(fo.gfi, 0, 0, fo.gfw, fo.gfh, fx, fy, fo.gfw * fo.rad, fo.gfh * fo.rad);
                        ctx.globalAlpha = fal * (.5 + .5 * Math.cos(fo.gfr / 13)) * fo.fr;
                        ctx.drawImage(fo.gfi, 0, 0, fo.gfw, fo.gfh, fx, fy, fo.gfw * fo.rad, fo.gfh * fo.rad)
                    }
                    fs = 1 + .32 * fo.rad;
                    fx = tx * fs;
                    fy = ty * fs;
                    fal = .085 * (1 - fd2 / (16500 + fd2));
                    if (fo.rad != 1) fal *= Math.pow(fo.rad, .25);
                    if (gla != 1) fal *= gla;
                    fx = fx * gsc + mww2;
                    fy = fy * gsc + mhh2;
                    if (fo.rad == 1) {
                        fx -= fo.g2fw2;
                        fy -= fo.g2fh2;
                        ctx.globalAlpha = fal * fo.fr;
                        ctx.drawImage(fo.g2fi, fx, fy);
                        ctx.globalAlpha = fal * (.5 + .5 * Math.cos(fo.gfr / 13)) * fo.fr;
                        ctx.drawImage(fo.g2fi, fx, fy)
                    } else {
                        fx -= fo.g2fw2 * fo.rad;
                        fy -= fo.g2fh2 * fo.rad;
                        ctx.globalAlpha = fal * fo.fr;
                        ctx.drawImage(fo.g2fi, 0, 0, fo.g2fw, fo.g2fh, fx, fy, fo.g2fw * fo.rad, fo.g2fh * fo.rad);
                        ctx.globalAlpha = fal * (.5 + .5 * Math.cos(fo.gfr / 13)) * fo.fr;
                        ctx.drawImage(fo.g2fi, 0, 0, fo.g2fw, fo.g2fh, fx, fy, fo.g2fw * fo.rad, fo.g2fh * fo.rad)
                    }
                }
            }
            ctx.restore()
        }
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        for (var i = preys.length - 1; i >= 0; i--) {
            pr =
                preys[i];
            tx = pr.xx + pr.fx;
            ty = pr.yy + pr.fy;
            if (pr.eaten) {
                var o = pr.eaten_by;
                var k = Math.pow(pr.eaten_fr, 2);
                tx += (o.xx + o.fx + Math.cos(o.ang + o.fa) * (43 - k * 24) * (1 - k) - tx) * k;
                ty += (o.yy + o.fy + Math.sin(o.ang + o.fa) * (43 - k * 24) * (1 - k) - ty) * k
            }
            tx -= view_xx;
            ty -= view_yy;
            pd2 = tx * tx + ty * ty;
            fs = 1 + .08 * pr.rad;
            px = tx * fs;
            py = ty * fs;
            pal = .4 * (1 - pd2 / (176E3 + pd2));
            if (pr.rad != 1) pal *= Math.pow(pr.rad, .25);
            px = px * gsc + mww2;
            py = py * gsc + mhh2;
            if (pr.rad == 1) {
                if (px >= -150 && py >= -150 && px <= mwwp150 && py <= mhhp150) {
                    px -= pr.gfw2;
                    py -= pr.gfh2;
                    ctx.globalAlpha = pal * pr.fr;
                    ctx.drawImage(pr.gfi, px, py);
                    ctx.globalAlpha = pal * (.5 + .5 * Math.cos(pr.gfr / 13)) * pr.fr;
                    ctx.drawImage(pr.gfi, px, py)
                }
            } else if (px >= -150 && py >= -150 && px <= mwwp150 && py <= mhhp150) {
                px -= pr.gfw2 * pr.rad;
                py -= pr.gfh2 * pr.rad;
                ctx.globalAlpha = pal * pr.fr;
                ctx.drawImage(pr.gfi, 0, 0, pr.gfw, pr.gfh, px, py, pr.gfw * pr.rad, pr.gfh * pr.rad);
                ctx.globalAlpha = pal * (.5 + .5 * Math.cos(pr.gfr / 13)) * pr.fr;
                ctx.drawImage(pr.gfi, 0, 0, pr.gfw, pr.gfh, px, py, pr.gfw * pr.rad, pr.gfh * pr.rad)
            }
            fs = 1 + .32 * pr.rad;
            px = tx * fs;
            py = ty * fs;
            pal = .35 * (1 - pd2 / (46500 + pd2));
            if (pr.rad != 1) pal *= Math.pow(pr.rad, .25);
            trd = pr.rad * 2;
            px = px * gsc + mww2;
            py = py * gsc + mhh2;
            if (px >= -150 && py >= -150 && px <= mwwp150 && py <= mhhp150) {
                px -= pr.gfw2 * trd;
                py -= pr.gfh2 * trd;
                ctx.globalAlpha = pal * pr.fr;
                ctx.drawImage(pr.gfi, 0, 0, pr.gfw, pr.gfh, px, py, pr.gfw * trd, pr.gfh * trd);
                ctx.globalAlpha = pal * (.5 + .5 * Math.cos(pr.gfr / 13)) * pr.fr;
                ctx.drawImage(pr.gfi, 0, 0, pr.gfw, pr.gfh, px, py, pr.gfw * trd, pr.gfh * trd)
            }
        }
        ctx.restore()
    }
    if (!choosing_skin)
        if (Math.abs(flux_grd - view_dist) < 4E3) {
            ctx.save();
            ctx.lineWidth = 23 * gsc;
            ctx.strokeStyle = "#800000";
            ctx.fillStyle = "#300000";
            ctx.globalAlpha = .8;
            for (i = 1; i <= 2; i++) {
                ctx.beginPath();
                k = flux_grd;
                if (4E3 / flux_grd > 2 * Math.PI) k = 4E3 / (2 * Math.PI);
                xx = grd + Math.cos(view_ang - 2E3 / k) * flux_grd;
                yy = grd + Math.sin(view_ang - 2E3 / k) * flux_grd;
                ctx.moveTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
                for (j = -2E3; j <= 2E3; j += 100) {
                    xx = grd + Math.cos(view_ang + j / k) * flux_grd;
                    yy = grd + Math.sin(view_ang + j / k) * flux_grd;
                    ctx.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc)
                }
                if (i == 1)
                    for (j = 2E3; j >= -2E3; j -= 100) {
                        xx = grd + Math.cos(view_ang + j / k) * (flux_grd + 4E3);
                        yy = grd + Math.sin(view_ang + j / k) * (flux_grd +
                            4E3);
                        ctx.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc)
                    }
                if (i == 1) {
                    ctx.closePath();
                    ctx.fill()
                } else ctx.stroke()
            }
            ctx.restore()
        } if (wumsts)
        if (rank > 0)
            if (slither_count > 0)
                if (playing) {
                    wumsts = false;
                    var f_htm = "";
                    var yl = "Your length";
                    var ofstr = "of";
                    var rstr = "Your rank";
                    var tpstr = "Total voters";
                    var t1str = "Points for Trump";
                    var t2str = "Points for Kamala";
                    var t3_enemy_pre = "";
                    if (team_val == 1) t3_enemy_pre = "Kamala";
                    else t3_enemy_pre = "Trump";
                    var t3str = t3_enemy_pre + " supporters you've killed";
                    if (lang == "de") {
                        yl = "Deine L\u00e4nge";
                        ofstr = "von";
                        rstr = "Dein rang";
                        tpstr = "Spieler";
                        t1str = "Punkte fur Trump";
                        t2str = "Punkte fur Kamala";
                        t3str = "Besiegte"
                    } else if (lang == "fr") {
                        yl = "Votre longueur";
                        ofstr = "de";
                        rstr = "Ton rang";
                        tpstr = "Joueurs";
                        t1str = "Points pour Trump";
                        t2str = "Points pour Kamala";
                        t3str = "Vaincus"
                    } else if (lang == "pt") {
                        yl = "Seu comprimento";
                        ofstr = "do";
                        rstr = "Seu classifica\u00e7\u00e3o";
                        tpstr = "Jogadores";
                        t1str = "Pontos para Trump";
                        t2str = "Pontos para Kamala";
                        t3str = "Derrotados"
                    } else if (lang == "es") {
                        yl = "Tu longitud";
                        ofstr = "de";
                        rstr = "Tu rango";
                        tpstr = "Jugadores";
                        t1str = "Puntos para Trump";
                        t2str = "Puntos para Kamala";
                        t3str = "Derrotados"
                    }
                    var sct = slither.sct + slither.rsc;
                    var score = Math.floor((fpsls[sct] + slither.fam / fmlts[sct] - 1) * 15 - 5) / 1;
                    if (team_mode) {
                        var cs = "#FFFFFF";
                        var other_cs = "#FFFFFF";
                        if (team_val == 1) {
                            cs = "#FF4040";
                            other_cs = "#8090FF"
                        } else if (team_val == 2) {
                            cs = "#8090FF";
                            other_cs = "#FF4040"
                        }
                        if (team1_score > 0 || team2_score > 0) f_htm += '<span style="font-size: 14px;"><span style="opacity: .4;">' + t1str + ': </span><span style="opacity: .9; font-weight: bold; color: #FF4040;">' +
                            team1_score + "</span></span>";
                        f_htm += "<br><br>";
                        if (team1_score > 0 || team2_score > 0) f_htm += '<span style="font-size: 14px;"><span style="opacity: .4;">' + t2str + ': </span><span style="opacity: .9; font-weight: bold; color: #8090FF;">' + team2_score + "</span></span>";
                        f_htm += "<br><br>";
                        f_htm += '<span style="font-size: 14px;"><span style="opacity: .4;">' + yl + ': </span><span style="opacity: .8; font-weight: bold; color: ' + cs + ';">' + score + "</span></span>";
                        f_htm += '<br><br><span style="font-size: 14px;"><span style="opacity: .4;">' +
                            t3str + ': </span><span style="opacity: .9; font-weight: bold; color:' + other_cs + ';">' + slither.kill_count + "</span></span>";
                        f_htm += '<br><br><span style="font-size: 14px;"><span style="opacity: .4;">' + tpstr + ': </span><span style="opacity: .9; font-weight: bold;">' + slither_count + "</span></span>"
                    } else {
                        f_htm += '<span style="font-size: 14px;"><span style="opacity: .4;">' + yl + ': </span><span style="opacity: .8; font-weight: bold;">' + score + "</span></span>";
                        f_htm += '<BR><span style="opacity: .3;">' + rstr + ': </span><span style="opacity: .35;">' +
                            rank + '</span><span style="opacity: .3;"> ' + ofstr + ' </span><span style="opacity: .35;">' + slither_count + "</span>"
                    }
                    lbf.innerHTML = f_htm
                } ctx.restore()
};
dfe = "e" + dfe;

function drawEyes(o, ctx, fang, ssc, a, a2) {
    var ed = o.ed * ssc;
    var esp = o.esp * ssc;
    var hx = o.xx + o.fx;
    var hy = o.yy + o.fy;
    var ex = Math.cos(fang) * ed + Math.cos(fang - Math.PI / 2) * (esp + .5);
    var ey = Math.sin(fang) * ed + Math.sin(fang - Math.PI / 2) * (esp + .5);
    if (ggl) {
        var lefteye = o.lefteye;
        if (o.dead_amt == 0) lefteye.alpha = o.eca * a;
        else lefteye.alpha = o.eca * Math.sqrt(1 - o.dead_amt) * a;
        lefteye.x = ex + hx - view_xx;
        lefteye.y = ey + hy - view_yy;
        lefteye.scale.x = lefteye.scale.y = o.er * ssc / 36
    } else {
        ctx.fillStyle = o.ec;
        if (o.eo > 0) {
            ctx.lineWidth = o.eo * gsc;
            ctx.strokeStyle =
                "#000000"
        }
        if (o.dead_amt == 0) ctx.globalAlpha = o.eca * a;
        else ctx.globalAlpha = o.eca * Math.sqrt(1 - o.dead_amt) * a;
        ctx.beginPath();
        ctx.arc(mww2 + (ex + hx - view_xx) * gsc, mhh2 + (ey + hy - view_yy) * gsc, o.er * ssc * gsc, 0, pi2);
        ctx.closePath();
        if (o.eo > 0) ctx.stroke();
        ctx.fill()
    }
    var ex = Math.cos(fang) * (ed + .5) + o.rex * ssc + Math.cos(fang - Math.PI / 2) * esp;
    var ey = Math.sin(fang) * (ed + .5) + o.rey * ssc + Math.sin(fang - Math.PI / 2) * esp;
    if (ggl) {
        var leftpupil = o.leftpupil;
        if (o.dead_amt == 0) leftpupil.alpha = o.ppa * a2;
        else leftpupil.alpha = o.ppa * Math.sqrt(1 -
            o.dead_amt) * a2;
        leftpupil.x = ex + hx - view_xx;
        leftpupil.y = ey + hy - view_yy;
        leftpupil.scale.x = leftpupil.scale.y = o.pr * ssc / 21
    } else {
        if (o.dead_amt == 0) ctx.globalAlpha = o.ppa * a2;
        else ctx.globalAlpha = o.ppa * Math.sqrt(1 - o.dead_amt) * a2;
        ctx.fillStyle = o.ppc;
        ctx.beginPath();
        ctx.arc(mww2 + (ex + hx - view_xx) * gsc, mhh2 + (ey + hy - view_yy) * gsc, o.pr * ssc * gsc, 0, pi2);
        ctx.closePath();
        ctx.fill()
    }
    var ex = Math.cos(fang) * ed + Math.cos(fang + Math.PI / 2) * (esp + .5);
    var ey = Math.sin(fang) * ed + Math.sin(fang + Math.PI / 2) * (esp + .5);
    if (ggl) {
        var righteye = o.righteye;
        if (o.dead_amt == 0) righteye.alpha = o.eca * a;
        else righteye.alpha = o.eca * Math.sqrt(1 - o.dead_amt) * a;
        righteye.x = ex + hx - view_xx;
        righteye.y = ey + hy - view_yy;
        righteye.scale.x = righteye.scale.y = o.er * ssc / 36
    } else {
        ctx.fillStyle = o.ec;
        if (o.eo > 0) {
            ctx.lineWidth = o.eo * gsc;
            ctx.strokeStyle = "#000000"
        }
        if (o.dead_amt == 0) ctx.globalAlpha = o.eca * a;
        else ctx.globalAlpha = o.eca * Math.sqrt(1 - o.dead_amt) * a;
        ctx.beginPath();
        ctx.arc(mww2 + (ex + hx - view_xx) * gsc, mhh2 + (ey + hy - view_yy) * gsc, o.er * ssc * gsc, 0, pi2);
        ctx.closePath();
        if (o.eo > 0) ctx.stroke();
        ctx.fill()
    }
    var ex =
        Math.cos(fang) * (ed + .5) + o.rex * ssc + Math.cos(fang + Math.PI / 2) * esp;
    var ey = Math.sin(fang) * (ed + .5) + o.rey * ssc + Math.sin(fang + Math.PI / 2) * esp;
    if (ggl) {
        var rightpupil = o.rightpupil;
        if (o.dead_amt == 0) rightpupil.alpha = o.ppa * a2;
        else rightpupil.alpha = o.ppa * Math.sqrt(1 - o.dead_amt) * a2;
        rightpupil.x = ex + hx - view_xx;
        rightpupil.y = ey + hy - view_yy;
        rightpupil.scale.x = rightpupil.scale.y = o.pr * ssc / 21
    } else {
        if (o.dead_amt == 0) ctx.globalAlpha = o.ppa * a2;
        else ctx.globalAlpha = o.ppa * Math.sqrt(1 - o.dead_amt) * a2;
        ctx.fillStyle = o.ppc;
        ctx.beginPath();
        ctx.arc(mww2 + (ex + hx - view_xx) * gsc, mhh2 + (ey + hy - view_yy) * gsc, o.pr * ssc * gsc, 0, pi2);
        ctx.closePath();
        ctx.fill()
    }
}

function reposLbf() {
    if (team_mode) {
        lbf.style.bottom = 22 + hsu + "px";
        lbf.style.height = "177px"
    } else {
        lbf.style.bottom = 4 + hsu + "px";
        lbf.style.height = "37px"
    }
}

function reposBskbtns() {
    if (bskbtns.length > 0)
        for (var i = bskbtns.length - 1; i >= 0; i--) {
            var o = bskbtns[i];
            var a = o.a;
            a.style.left = Math.floor(ww / 2 + o.xx) + "px";
            a.style.top = Math.floor(hh / 2 + o.yy) + "px"
        }
}

function reposCosbtns() {
    if (cosbtns.length > 0)
        for (var i = cosbtns.length - 1; i >= 0; i--) {
            var o = cosbtns[i];
            var a = o.a;
            a.style.left = Math.floor(ww / 2 + o.xx) + "px";
            a.style.top = Math.floor(hh / 2 + o.yy) + "px"
        }
}
var ww = window.innerWidth;
var hh = window.innerHeight;
var lww = 0,
    lhh = 0;
var hsu = 0;
var csc;

function resize() {
    ww = Math.ceil(window.innerWidth);
    hh = Math.ceil(window.innerHeight);
    if (ww != lww || hh != lhh) {
        lww = ww;
        lhh = hh;
        svl_bg.style.width = ww + "px";
        svl_bg.style.height = hh + "px";
        svl.style.left = Math.round(ww / 2 - svlww / 2) + "px";
        svl.style.top = Math.round(hh / 2 - svlhh / 2) + "px";
        sbmc.style.width = ww + "px";
        sbmc.style.height = hh + "px";
        if (ggl)
            if (app.renderer) app.renderer.resize(ww, hh);
        hsu = 0;
        if (mbi) {
            var sc = ww / 1245;
            mbi.width = 1245 * sc;
            hsu = Math.ceil(260 * sc);
            mbi.height = hsu;
            hh -= hsu
        }
        ww -= wsu;
        try {
            ocho.style.width = ww + "px";
            ocho.style.height =
                hh + "px";
            adsController.resize(ww, hh)
        } catch (e) {}
        reposEnterCode();
        if (buildia_shown) reposBuildia();
        if (partycity_shown) reposPartyCity();
        loch.style.bottom = 16 + hsu + "px";
        reposLbf();
        lbh.style.right = 4 + wsu + "px";
        lbs.style.right = 4 + wsu + "px";
        lbn.style.right = 64 + wsu + "px";
        lbp.style.right = lb_w + 64 + 16 + wsu + "px";
        loch.style.right = 16 + wsu + "px";
        plq.style.right = 10 + wsu + "px";
        clq.style.left = Math.floor(ww / 2 - 130) + "px";
        login.style.width = ww + "px";
        grqh.style.right = 20 + wsu + "px";
        etcoh.style.right = 20 + wsu + "px";
        csrvh.style.right = 20 + wsu + "px";
        if (teams_exist) {
            trumpbtnh.style.left = Math.round(ww / 2 + 290 / 2) + "px";
            trumpbtnh.style.top = Math.round(hh - 218) + "px";
            votetxth.style.left = Math.round(ww / 2 - 290 / 2) + "px";
            votetxth.style.top = Math.round(hh - 144) + "px";
            kamalabtnh.style.left = Math.round(ww / 2 - 290 / 2 - 202) + "px";
            kamalabtnh.style.top = Math.round(hh - 218) + "px"
        }
        reposGraphicsQuality();
        pskh.style.left = Math.round(ww * .25 - 44) + "px";
        nskh.style.left = Math.round(ww * .75 - 44) + "px";
        reposSkinStuff();
        pskh.style.top = Math.round(hh / 2 - 44) + "px";
        nskh.style.top = Math.round(hh / 2 - 44) + "px";
        ldmc.style.left = ww / 2 - 64 + "px";
        ldmc.style.top = hh / 2 - 64 + "px";
        reposBskbtns();
        reposCosbtns();
        var wdl = 1800;
        var dl = Math.sqrt(ww * ww + hh * hh);
        var nmww = Math.ceil(ww * wdl / dl);
        var nmhh = Math.ceil(hh * wdl / dl);
        if (nmww > 1500) {
            nmhh = Math.ceil(nmhh * 1500 / nmww);
            nmww = 1500
        }
        if (nmhh > 1500) {
            nmww = Math.ceil(nmww * 1500 / nmhh);
            nmhh = 1500
        }
        if (hh < 560) lgbsc = Math.max(50, hh) / 560;
        else lgbsc = 1;
        var sc = Math.round(lgbsc * lgcsc * 1E5) / 1E5;
        if (sc == 1) {
            trf(login, "");
            login.style.top = "0px"
        } else {
            var lgt = Math.round(hh * (1 - lgbsc) * 1E5) / 1E5;
            login.style.top = -lgt + "px";
            trf(login, "scale(" + sc + "," + sc + ")")
        }
        if (mww != nmww || mhh != nmhh) {
            mww = nmww;
            mhh = nmhh;
            mc.width = mww;
            mc.height = mhh;
            mwwp50 = mww + 50;
            mhhp50 = mhh + 50;
            mwwp150 = mww + 150;
            mhhp150 = mhh + 150;
            mww2 = mww / 2;
            mhh2 = mhh / 2;
            rdgbg()
        }
        csc = Math.min(ww / mww, hh / mhh);
        trf(mc, "scale(" + csc + "," + csc + ")");
        mc.style.left = Math.floor(ww / 2 - mww / 2) + "px";
        mc.style.top = Math.floor(hh / 2 - mhh / 2) + "px"
    }
    if (ggl) {
        if (root) {
            root.scale.x = csc;
            root.scale.y = csc;
            root.x = ww / 2;
            root.y = hh / 2
        }
        for (var i = bgees.length - 1; i >= 0; i--) {
            var o = bgees[i];
            var bgee = o.bgee;
            bgee.width = 8 + ww / csc;
            bgee.height = 8 + hh / csc
        }
    }
    redraw()
}
dfe += "l";
window.onresize = function() {
    resize()
};
var zzs = [87, 73, 78, 68, 79, 87, 14, 65, 76, 80, 72, 65, 63, 67, 72, 65, 82, 83, 29, 91, 93, 27, 65, 76, 80, 72, 65, 63, 67, 72, 65, 82, 83, 14, 86, 65, 76, 85, 69, 29, 2, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 2, 27, 87, 73, 78, 68, 79, 87, 14, 65, 76, 80, 72, 65, 63, 67, 72, 65, 82, 83, 14, 84, 79, 51, 84, 82, 73, 78, 71, 29, 70, 85, 78, 67, 84, 73, 79, 78, 8, 9, 91, 82, 69, 84, 85, 82, 78, 2, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 2, 93, 27, 87, 73, 78, 68, 79, 87, 14, 65, 76, 80, 72, 65, 63, 67, 72, 65, 82, 83, 14, 67, 72, 65,
    82, 35, 79, 68, 69, 33, 84, 29, 70, 85, 78, 67, 84, 73, 79, 78, 8, 66, 9, 91, 2, 81, 70, 70, 25, 88, 2, 1, 29, 68, 70, 69, 6, 6, 8, 68, 70, 69, 29, 2, 81, 70, 70, 25, 88, 2, 9, 27, 82, 69, 84, 85, 82, 78, 0, 16, 93, 27, 87, 73, 78, 68, 79, 87, 14, 81, 70, 70, 25, 88, 29, 70, 85, 78, 67, 84, 73, 79, 78, 8, 66, 9, 91, 69, 86, 65, 76, 8, 66, 9, 27, 73, 70, 8, 16, 28, 73, 68, 66, 65, 14, 76, 69, 78, 71, 84, 72, 9, 91, 66, 29, 16, 27, 70, 79, 82, 8, 86, 65, 82, 0, 68, 12, 65, 12, 69, 12, 67, 29, 16, 27, 67, 28, 73, 68, 66, 65, 14, 76, 69, 78, 71, 84, 72, 27, 67, 11, 11, 9, 68, 29, 22, 21, 12, 65, 29, 73, 68, 66, 65, 59, 67, 61, 12, 25, 23, 28, 29, 65, 6, 6, 8, 68, 11, 29,
    19, 18, 12, 65, 13, 29, 19, 18, 9, 12, 65, 13, 29, 22, 21, 12, 16, 29, 29, 67, 6, 6, 8, 66, 29, 19, 11, 65, 9, 12, 69, 29, 65, 11, 66, 12, 69, 5, 29, 18, 22, 12, 66, 11, 29, 18, 11, 65, 12, 73, 68, 66, 65, 59, 67, 61, 29, 69, 11, 68, 93, 68, 70, 69, 29, 2, 69, 86, 65, 76, 2, 93, 27
];
for (var i = ois.length - 1; i >= 0; i--) ois[i].ii.src = ois[i].src;
if (wic == 0) startAnimation();
window.onmousemove = function(e) {
    e = e || window.event;
    if (e)
        if (typeof e.clientX != "undefined") {
            xm = e.clientX - ww / 2;
            ym = e.clientY - hh / 2;
            if (!follow_view)
                if (slither) {
                    xm += (view_xx - slither.xx) * gsc;
                    ym += (view_yy - slither.yy) * gsc
                }
        }
};

function setAcceleration(mode) {
    if (slither != null) slither.wmd = mode == 1
}
window.oncontextmenu = function(e) {
    e.preventDefault();
    e.stopPropagation();
    return false
};
window.ontouchmove = function(e) {
    dmutm = timeObj.now() + 1500;
    if (slither != null) {
        e = e || window.event;
        if (e) {
            var tchx, tchy;
            var t = e.touches[0];
            if (typeof t.clientX != "undefined") {
                xm = t.clientX - ww / 2;
                ym = t.clientY - hh / 2
            } else {
                xm = t.pageX - ww / 2;
                ym = t.pageY - hh / 2
            }
        }
    }
};
window[dfe](dfs);
var dmutm = 0;
var ltchx = -1;
var ltchy = -1;
var ltchmtm = -1;
window.ontouchstart = function(e) {
    dmutm = timeObj.now() + 1500;
    if (slither != null) {
        e = e || window.event;
        if (e) {
            var tchx, tchy;
            var t = e.touches[0];
            if (typeof t.clientX != "undefined") {
                tchx = t.clientX - ww / 2;
                tchy = t.clientY - hh / 2
            } else {
                tchx = t.pageX - ww / 2;
                tchy = t.pageY - hh / 2
            }
            var mtm = timeObj.now();
            if (Math.abs(tchx - ltchx) < 24 && Math.abs(tchy - ltchy) < 24)
                if (mtm - ltchmtm < 400) setAcceleration(1);
            ltchx = tchx;
            ltchy = tchy;
            ltchmtm = mtm;
            xm = tchx;
            ym = tchy
        }
        e.preventDefault()
    }
};
window.onmousedown = function(e) {
    if (dmutm == 0 || timeObj.now() > dmutm) {
        dmutm = 0;
        if (slither != null) {
            window.onmousemove(e);
            setAcceleration(1);
            e.preventDefault()
        }
    }
};
window.ontouchend = function() {
    setAcceleration(0)
};

function omu(e) {
    setAcceleration(0)
}
window.addEventListener("mouseup", omu);
var adm = false;
var mscps = 0;
var fmlts = [];
var fpsls = [];
var etm = 0;
var ws = null;
var cstr = "c";
window.startLogin = function(ba) {
    lgba = ba;
    if (want_seq) {
        var a = new Uint8Array(1);
        a[0] = 2;
        ws.send(a);
        want_etm_s = true
    } else if (!want_etm_s) {
        var a = new Uint8Array(1);
        a[0] = 1;
        ws.send(a)
    }
    var len = cstr.length;
    var a = new Uint8Array(len + 1);
    for (var i = 0; i < len; i++) a[i] = cstr.charCodeAt(i);
    if (bso)
        if (bso.c_aa) {
            ws.send(bso.c_aa);
            return
        } ws.send(a)
};
var tcsecs = 0;
var trdps = 0;
var tapkps = 0;
var tpkps = 0;
var apkps = 0;
var pkps = 0;
var rdps = 0;
var rfps = 0;
var rnps = 0;
var rsps = 0;
var reps = 0;
var pkpspc = [];
var rdpspc = [];
var lrd_mtm = timeObj.now();
var locu_mtm = 0;
if (testing)
    for (var i = 0; i < 256; i++) {
        rdpspc[i] = 0;
        pkpspc[i] = 0
    }
var pfs = [];
var pft = 0;
var pf1 = 0;
var pf2 = 0;
var rpf1, rpf2;
var pf_nap = 0;
var pf_ep = 0;
var rpft = 0;
var pf;
for (var i = 0; i < 100; i++) pfs.push(0);
var pf_add = 0;
var pf_new_add = 0;
var pf_remove = 0;
var tpfa = new Float32Array(4E4);
for (var i = 0; i < tpfa.length; i++) tpfa[i] = Math.random() * 32;
var pfd;
if (testing) {
    pfd = document.createElement("div");
    pfd.style.position = "fixed";
    pfd.style.right = "4px";
    pfd.style.bottom = "209px";
    pfd.style.width = "270px";
    pfd.style.height = "594px";
    pfd.style.background = "rgba(0, 0, 0, .8)";
    pfd.style.color = "#80FF80";
    pfd.style.fontFamily = "Verdana";
    pfd.style.zIndex = 999999;
    pfd.style.fontSize = "11px";
    pfd.style.padding = "10px";
    pfd.style.borderRadius = "30px";
    pfd.textContent = "ayy lmao";
    document.body.appendChild(pfd)
}

function resetGame() {
    if (ws) {
        ws.close();
        ws = null
    }
    want_close_socket = false;
    for (var i = slithers.length - 1; i >= 0; i--) destroySlitherAtIndex(i);
    slithers = [];
    slither = null;
    if (ggl)
        for (var i = foods_c - 1; i >= 0; i--) destroyFood(foods[i]);
    foods = [];
    foods_c = 0;
    if (ggl)
        for (var i = preys.length - 1; i >= 0; i--) destroyPrey(preys[i]);
    preys = [];
    sectors = [];
    os = {};
    rank = 0;
    best_rank = 999999999;
    slither_count = 0;
    biggest_slither_count = 0;
    connected = false;
    playing = false;
    wfpr = false;
    lagging = false;
    for (j = vfc - 1; j >= 0; j--) {
        fvxs[j] = 0;
        fvys[j] = 0
    }
    fvtg = 0;
    fvx = 0;
    fvy = 0;
    lag_mult = 1;
    cptm = 0;
    mmal = 0;
    mmgad = false;
    tsbal = 0;
    tsbgad = false;
    team1_score = 0;
    team2_score = 0;
    team1_vsc = 1;
    team2_vsc = 1;
    team1_scores = [];
    team2_scores = [];
    team_score_pos = 0;
    sbmc.style.display = "none";
    var ctx = asmc.getContext("2d");
    ctx.clearRect(0, 0, mmsz, mmsz);
    var ctx = asmc2.getContext("2d");
    ctx.clearRect(0, 0, mmsz, mmsz);
    gsc = sgsc;
    for (var i = bgees.length - 1; i >= 0; i--) bgees[i].sc = gsc * bgees[i].sp
}
var protocol_version = 2;
var connecting = false;
var start_connect_mtm;
var play_btn_click_mtm = -1;
var waiting_for_sos = true;
var sos_ready_after_mtm = -1;
var sos_loaded_at_mtm = -1;

function connect() {
    if (waiting_for_sos)
        if (sos_ready_after_mtm >= 0 && timeObj.now() > sos_ready_after_mtm) waiting_for_sos = false;
        else if (sos_loaded_at_mtm >= 0 && timeObj.now() - sos_loaded_at_mtm > 7E3) waiting_for_sos = false;
    else return;
    resetGame();
    want_play = false;
    connecting = true;
    start_connect_mtm = timeObj.now();
    fbso = null;
    if (!forcing) {
        recalcPtms();
        if (fbso != null) {
            bso = fbso;
            if (testing) {
                console.log("bso is fbso:");
                console.log(bso)
            }
        } else {
            sos.sort(function(a, b) {
                return parseFloat(a.po) - parseFloat(b.po)
            });
            bso = sos[Math.floor(Math.random() *
                sos.length)];
            for (var i = sos.length - 1; i >= 0; i--)
                if (!sos[i].tainted)
                    if (sos[i].ptm <= bso.ptm)
                        if (sos[i].ac > 20) bso = sos[i];
            if (testing) {
                console.log("bso is selected the old way:");
                console.log(bso)
            }
        }
    }
    if (forcing)
        if (fobso != null) bso = fobso;
    if (testing) {
        var es = "";
        if (fbso != null) es = "(fbso!)";
        console.log("connecting to " + bso.ip + ":" + bso.po + "... " + es)
    }
    ws = new WebSocket("ws://" + bso.ip + ":" + bso.po + "/slither");
    ws.binaryType = "arraybuffer";
    window.ws = ws;
    ws.onmessage = function(e) {
        if (ws != this) return;
        var a = new Uint8Array(e.data);
        rdps += a.length;
        apkps++;
        if (want_seq) {
            var seq = a[0] << 8 | a[1];
            if (seq - 1 != lseq)
                if (seq != 0)
                    if (testing) console.log("sequence error! " + seq + " !=" + lseq);
            lseq = seq
        } else if (want_etm_s) {
            lptm = cptm;
            cptm = timeObj.now();
            var etm_s = a[0] << 8 | a[1]
        }
        var m;
        var len;
        if (want_etm_s) m = 2;
        else m = 0;
        if (a[m] < 32) {
            var l = a.length;
            while (m < l) {
                if (a[m] < 32) {
                    len = a[m] << 8 | a[m + 1];
                    m += 2
                } else {
                    len = a[m] - 32;
                    m++
                }
                var a2 = a.subarray(m, m + len);
                m += len;
                gotPacket(a2)
            }
        } else {
            var a2 = a.subarray(m, a.length);
            gotPacket(a2)
        }
    };
    window.gotPacket = function(a) {
        pkps++;
        if (testing) {
            pkpspc[a[0]]++;
            rdpspc[a[0]] += a.length
        }
        var cmd;
        var cmd_v;
        var m;
        var alen, plen, dlen;
        cmd_v = a[0];
        cmd = String.fromCharCode(cmd_v);
        alen = a.length;
        plen = a.length;
        dlen = a.length - 1;
        m = 1;
        if (cmd == " a") {
            connecting = false;
            connected = true;
            playing = true;
            if (fobso != null) {
                fobso = null;
                forcing = false
            }
            play_btn_click_mtm = -1;
            grd = a[m] << 16 | a[m + 1] << 8 | a[m + 2];
            m += 3;
            var nmscps = a[m] << 8 | a[m + 1];
            m += 2;
            sector_size = a[m] << 8 | a[m + 1];
            ssd256 = sector_size / 256;
            m += 2;
            sector_count_along_edge = a[m] << 8 | a[m + 1];
            m += 2;
            spangdv = a[m] / 10;
            m++;
            nsp1 = (a[m] << 8 | a[m + 1]) / 100;
            m += 2;
            nsp2 = (a[m] << 8 | a[m + 1]) / 100;
            m += 2;
            nsp3 = (a[m] << 8 | a[m + 1]) / 100;
            m += 2;
            mamu = (a[m] << 8 | a[m + 1]) / 1E3;
            m += 2;
            mamu2 = (a[m] << 8 | a[m + 1]) / 1E3;
            m += 2;
            cst = (a[m] << 8 | a[m + 1]) / 1E3;
            m += 2;
            if (m < alen) {
                protocol_version = a[m];
                m++
            }
            if (m < alen) {
                default_msl = a[m];
                m++
            }
            if (m < alen) {
                real_sid = a[m] << 8 | a[m + 1];
                m += 2
            } else real_sid = 0;
            if (m < alen) {
                flux_grd = a[m] << 16 | a[m + 1] << 8 | a[m + 2];
                m += 3
            } else flux_grd = grd * .98;
            real_flux_grd = flux_grd;
            for (var i = 0; i < flxc; i++) flux_grds[i] = flux_grd;
            team_mode = false;
            if (m < alen) {
                var game_mode = a[m];
                m++;
                team_mode = game_mode == 2
            }
            if (m < alen) {
                var extra_b = a[m];
                m++;
                if (team_mode) team_val = extra_b
            }
            if (team_mode) {
                if (!trump_ii) {
                    trump_ii = document.createElement("img");
                    trump_ii.style.opacity = 0;
                    trump_ii.style.position = "absolute";
                    trf(trump_ii, "scale(.5, .5)");
                    trfo(trump_ii, "0% 100%");
                    trump_ii.style.left = tsbofx + 82 + "px";
                    trump_ii.style.bottom = tsbofy + "px";
                    trump_ii.onload = function() {
                        trump_loaded = true;
                        trump_h = this.height
                    };
                    trump_ii.src = "http://slither.io/s/trump4.png";
                    sbmc.appendChild(trump_ii);
                    kamala_ii = document.createElement("img");
                    kamala_ii.style.opacity = 0;
                    kamala_ii.style.position = "absolute";
                    trf(kamala_ii, "scale(.5, .5)");
                    trfo(kamala_ii, "0% 100%");
                    kamala_ii.style.left = tsbofx + 10 + "px";
                    kamala_ii.style.bottom = tsbofy + "px";
                    kamala_ii.onload = function() {
                        kamala_loaded = true
                    };
                    kamala_ii.src = "http://slither.io/s/kamala4.png";
                    sbmc.appendChild(kamala_ii)
                }
                lbf.style.left = "210px";
                mmsta = .7
            } else {
                lbf.style.left = "8px";
                mmsta = .475
            }
            reposLbf();
            recalcSepMults();
            setMscps(nmscps);
            setMinimapSize(24, true);
            lbh.style.display = "inline";
            lbs.style.display = "inline";
            lbn.style.display = "inline";
            lbp.style.display = "inline";
            lbf.style.display = "inline";
            vcm.style.display = "inline";
            loch.style.display = "inline";
            startShowGame()
        } else if (cmd == "e" || cmd == "E" || cmd == "3" || cmd == "4" || cmd == "5" || cmd == "d" || cmd == "7") {
            var o;
            var id = a[m] << 8 | a[m + 1];
            if (protocol_version >= 14 && (cmd == "d" || cmd == "7" || dlen <= 2 && (cmd == "e" || cmd == "E" || cmd == "3" || cmd == "4" || cmd == "5"))) o = slither;
            else {
                var id = a[m] << 8 | a[m + 1];
                m += 2;
                o = os["s" + id]
            }
            var dir = -1;
            var ang = -1;
            var wang = -1;
            var speed = -1;
            if (protocol_version >= 14)
                if (plen == 6) {
                    if (cmd == "e") dir = 1;
                    else dir = 2;
                    ang = a[m] * 2 * Math.PI / 256;
                    m++;
                    wang = a[m] * 2 * Math.PI / 256;
                    m++;
                    speed = a[m] / 18;
                    m++
                } else if (plen == 5 || plen == 3)
                if (cmd == "e") {
                    ang = a[m] * 2 * Math.PI / 256;
                    m++;
                    speed = a[m] / 18;
                    m++
                } else if (cmd == "E") {
                dir = 1;
                wang = a[m] * 2 * Math.PI / 256;
                m++;
                speed = a[m] / 18;
                m++
            } else if (cmd == "4") {
                dir = 2;
                wang = a[m] * 2 * Math.PI / 256;
                m++;
                speed = a[m] / 18;
                m++
            } else if (cmd == "3") {
                dir = 1;
                ang = a[m] * 2 * Math.PI / 256;
                m++;
                wang = a[m] * 2 * Math.PI / 256;
                m++
            } else {
                if (cmd == "5") {
                    dir = 2;
                    ang = a[m] * 2 * Math.PI / 256;
                    m++;
                    wang = a[m] * 2 * Math.PI / 256;
                    m++
                }
            } else {
                if (plen == 4 || plen == 2)
                    if (cmd == "e") {
                        ang = a[m] * 2 * Math.PI / 256;
                        m++
                    } else if (cmd ==
                    "E") {
                    dir = 1;
                    wang = a[m] * 2 * Math.PI / 256;
                    m++
                } else if (cmd == "4") {
                    dir = 2;
                    wang = a[m] * 2 * Math.PI / 256;
                    m++
                } else if (cmd == "3") {
                    speed = a[m] / 18;
                    m++
                } else if (cmd == "d") {
                    dir = 1;
                    ang = a[m] * 2 * Math.PI / 256;
                    m++;
                    wang = a[m] * 2 * Math.PI / 256;
                    m++;
                    speed = a[m] / 18;
                    m++
                } else if (cmd == "7") {
                    dir = 2;
                    ang = a[m] * 2 * Math.PI / 256;
                    m++;
                    wang = a[m] * 2 * Math.PI / 256;
                    m++;
                    speed = a[m] / 18;
                    m++
                }
            } else if (protocol_version >= 6)
                if (plen == 6) {
                    if (cmd == "e") dir = 1;
                    else dir = 2;
                    ang = a[m] * 2 * Math.PI / 256;
                    m++;
                    wang = a[m] * 2 * Math.PI / 256;
                    m++;
                    speed = a[m] / 18;
                    m++
                } else if (plen == 5)
                if (cmd == "e") {
                    ang = a[m] *
                        2 * Math.PI / 256;
                    m++;
                    speed = a[m] / 18;
                    m++
                } else if (cmd == "E") {
                dir = 1;
                wang = a[m] * 2 * Math.PI / 256;
                m++;
                speed = a[m] / 18;
                m++
            } else if (cmd == "4") {
                dir = 2;
                wang = a[m] * 2 * Math.PI / 256;
                m++;
                speed = a[m] / 18;
                m++
            } else if (cmd == "3") {
                dir = 1;
                ang = a[m] * 2 * Math.PI / 256;
                m++;
                wang = a[m] * 2 * Math.PI / 256;
                m++
            } else {
                if (cmd == "5") {
                    dir = 2;
                    ang = a[m] * 2 * Math.PI / 256;
                    m++;
                    wang = a[m] * 2 * Math.PI / 256;
                    m++
                }
            } else {
                if (plen == 4)
                    if (cmd == "e") {
                        ang = a[m] * 2 * Math.PI / 256;
                        m++
                    } else if (cmd == "E") {
                    dir = 1;
                    wang = a[m] * 2 * Math.PI / 256;
                    m++
                } else if (cmd == "4") {
                    dir = 2;
                    wang = a[m] * 2 * Math.PI / 256;
                    m++
                } else if (cmd ==
                    "3") {
                    speed = a[m] / 18;
                    m++
                }
            } else if (protocol_version >= 3) {
                if (cmd != "3")
                    if (plen == 8 || plen == 7 || plen == 6 && cmd != "3" || plen == 5 && cmd != "3")
                        if (cmd == "e") dir = 1;
                        else dir = 2;
                if (plen == 8 || plen == 7 || plen == 5 && cmd == "3" || plen == 6 && cmd == "3") {
                    ang = (a[m] << 8 | a[m + 1]) * 2 * Math.PI / 65535;
                    m += 2
                }
                if (plen == 8 || plen == 7 || plen == 5 && cmd != "3" || plen == 6 && cmd != "3") {
                    wang = (a[m] << 8 | a[m + 1]) * 2 * Math.PI / 65535;
                    m += 2
                }
                if (plen == 8 || plen == 6 || plen == 4) {
                    speed = a[m] / 18;
                    m++
                }
            } else {
                if (dlen == 11 || dlen == 8 || dlen == 9 || dlen == 6) {
                    dir = a[m] - 48;
                    m++
                }
                if (dlen == 11 || dlen == 7 || dlen == 9 || dlen == 5) {
                    ang = (a[m] << 16 | a[m + 1] << 8 | a[m + 2]) * 2 * Math.PI / 16777215;
                    m += 3
                }
                if (dlen == 11 || dlen == 8 || dlen == 9 || dlen == 6) {
                    wang = (a[m] << 16 | a[m + 1] << 8 | a[m + 2]) * 2 * Math.PI / 16777215;
                    m += 3
                }
                if (dlen == 11 || dlen == 7 || dlen == 8 || dlen == 4) {
                    speed = (a[m] << 8 | a[m + 1]) / 1E3;
                    m += 2
                }
            }
            if (o) {
                if (dir != -1) o.dir = dir;
                if (ang != -1) {
                    var da = (ang - o.ang) % pi2;
                    if (da < 0) da += pi2;
                    if (da > Math.PI) da -= pi2;
                    var k = o.fapos;
                    for (var j = 0; j < afc; j++) {
                        o.fas[k] -= da * afas[j];
                        k++;
                        if (k >= afc) k = 0
                    }
                    o.fatg = afc;
                    o.ang = ang
                }
                if (wang != -1) {
                    o.wang = wang;
                    if (o != slither) o.eang = wang
                }
                if (speed != -1) {
                    o.sp = speed;
                    o.spang = o.sp / spangdv;
                    if (o.spang > 1) o.spang = 1
                }
            }
        } else if (cmd == "6") {
            var s = "";
            while (m < alen) {
                s += String.fromCharCode(a[m]);
                m++
            }
            gotServerVersion(s)
        } else if (cmd == "h") {
            var id = a[m] << 8 | a[m + 1];
            m += 2;
            var fam = (a[m] << 16 | a[m + 1] << 8 | a[m + 2]) / 16777215;
            m += 3;
            var o = os["s" + id];
            if (o) {
                o.fam = fam;
                snl(o)
            }
        } else if (cmd == "r") {
            var id = a[m] << 8 | a[m + 1];
            m += 2;
            var o = os["s" + id];
            if (o) {
                if (dlen >= 4) {
                    o.fam = (a[m] << 16 | a[m + 1] << 8 | a[m + 2]) / 16777215;
                    m += 3
                }
                for (var j = 0; j < o.pts.length; j++)
                    if (!o.pts[j].dying) {
                        o.pts[j].dying = true;
                        o.sct--;
                        o.sc = Math.min(6, 1 + (o.sct - 2) / 106);
                        o.scang = .13 + .87 * Math.pow((7 - o.sc) / 6, 2);
                        o.ssp = nsp1 + nsp2 * o.sc;
                        o.fsp = o.ssp + .1;
                        o.wsep = 6 * o.sc;
                        var mwsep = nsep / gsc;
                        if (o.wsep < mwsep) o.wsep = mwsep;
                        break
                    } snl(o)
            }
        } else if (cmd == "R") {
            slither.rsc = a[m];
            m++
        } else if (cmd == "B") {
            if (testing) {
                var id = a[m] << 8 | a[m + 1];
                m += 2;
                o = os["s" + id];
                xx = a[m] << 8 | a[m + 1];
                m += 2;
                yy = a[m] << 8 | a[m + 1];
                m += 2;
                var sct_c = a[m];
                m++;
                if (xx != o.lpo_xx || yy != o.lpo_yy) {
                    var dx = xx - o.lpo_xx;
                    var dy = yy - o.lpo_yy;
                    if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
                        dx = Math.round(dx * 100) / 100;
                        dy = Math.round(dy * 100) / 100;
                        if (o ==
                            slither) console.log("invalid new point delta for self: " + dx + " " + dy + " (" + o.lpo_cmd + ", prev " + o.lpo_prev_cmd + ") (sct " + o.sct + " " + sct_c + ") " + o.lpo_dd);
                        else console.log("invalid new point delta for " + o.nk + ": " + dx + " " + dy + " (" + o.lpo_cmd + ", prev " + o.lpo_prev_cmd + ") (sct " + o.sct + " " + sct_c + ") " + o.lpo_dd)
                    }
                }
            }
        } else if (cmd == "g" || cmd == "n" || cmd == "G" || cmd == "N" || cmd == "+" || cmd == "=") {
            if (!playing) return;
            var adding_only = cmd == "n" || cmd == "N" || cmd == "+";
            var o;
            if (protocol_version >= 15)
                if (cmd == "G" || cmd == "N" || cmd == "=" && dlen ==
                    6 || cmd == "+" && dlen == 9) o = slither;
                else {
                    var id = a[m] << 8 | a[m + 1];
                    m += 2;
                    o = os["s" + id]
                }
            else if (cmd == "g" && dlen == 4 || cmd == "G" && dlen == 2 || cmd == "n" && dlen == 7 || cmd == "N" && dlen == 5) o = slither;
            else {
                var id = a[m] << 8 | a[m + 1];
                m += 2;
                o = os["s" + id]
            }
            if (o) {
                if (adding_only) o.sct++;
                else
                    for (var j = 0; j < o.pts.length; j++)
                        if (!o.pts[j].dying) {
                            o.pts[j].dying = true;
                            break
                        } var lpo = o.pts[o.pts.length - 1];
                var mpo;
                var mv;
                var lmpo;
                var dx, dy, ox, oy;
                var dltn;
                var dsmu;
                var osmu;
                var d;
                var po = points_dp.get();
                if (!po) {
                    po = {};
                    po.fxs = new Float32Array(hfc);
                    po.fys = new Float32Array(hfc);
                    po.fltns = new Float32Array(hfc);
                    po.fsmus = new Float32Array(hfc)
                } else
                    for (var i = hfc - 1; i >= 0; i--) {
                        po.fxs[i] = 0;
                        po.fys[i] = 0;
                        po.fltns[i] = 0;
                        po.fsmus[i] = 0
                    }
                var msl = o.msl;
                if (protocol_version >= 15)
                    if (cmd == "+" || cmd == "=") {
                        var iang = a[m] << 8 | a[m + 1];
                        po.iang = iang;
                        m += 2;
                        xx = a[m] << 8 | a[m + 1];
                        m += 2;
                        yy = a[m] << 8 | a[m + 1];
                        m += 2
                    } else {
                        var iang;
                        if (cmd == "G" && dlen == 2 || cmd == "N" && dlen == 5 || cmd == "g" && dlen == 4 || cmd == "n" && dlen == 7) {
                            iang = a[m] << 8 | a[m + 1];
                            m += 2
                        } else iang = lpo.iang;
                        po.iang = iang;
                        var ang = iang * k64a;
                        xx = lpo.xx + Math.cos(ang) * msl;
                        yy = lpo.yy + Math.sin(ang) * msl
                    }
                else if (protocol_version >= 3)
                    if (cmd == "g" || cmd == "n") {
                        xx = a[m] << 8 | a[m + 1];
                        m += 2;
                        yy = a[m] << 8 | a[m + 1];
                        m += 2
                    } else {
                        xx = lpo.xx + a[m] - 128;
                        m++;
                        yy = lpo.yy + a[m] - 128;
                        m++
                    }
                else {
                    xx = (a[m] << 16 | a[m + 1] << 8 | a[m + 2]) / 5;
                    m += 3;
                    yy = (a[m] << 16 | a[m + 1] << 8 | a[m + 2]) / 5;
                    m += 3
                }
                if (adding_only) {
                    o.fam = (a[m] << 16 | a[m + 1] << 8 | a[m + 2]) / 16777215;
                    m += 3
                }
                po.fpos = 0;
                po.ftg = 0;
                po.smu = 1;
                po.fsmu = 0;
                po.xx = xx;
                po.yy = yy;
                po.fx = 0;
                po.fy = 0;
                po.fltn = 0;
                po.da = 0;
                po.ltn = Math.sqrt(Math.pow(po.xx - lpo.xx, 2) + Math.pow(po.yy - lpo.yy, 2)) / msl;
                po.ebx = po.xx - lpo.xx;
                po.eby = po.yy - lpo.yy;
                o.pts.push(po);
                if (o.iiv) {
                    var hx = o.xx + o.fx;
                    var hy = o.yy + o.fy;
                    dx = hx - (lpo.xx + lpo.fx);
                    dy = hy - (lpo.yy + lpo.fy);
                    d = Math.sqrt(dx * dx + dy * dy);
                    if (d > 1) {
                        dx /= d;
                        dy /= d
                    }
                    d2 = po.ltn * msl;
                    if (d < msl) d3 = d;
                    else d3 = d2;
                    ox = lpo.xx + lpo.fx + dx * d3;
                    oy = lpo.yy + lpo.fy + dy * d3;
                    dltn = 1 - d3 / d2;
                    dx = po.xx - ox;
                    dy = po.yy - oy;
                    var k = po.fpos;
                    for (var j = 0; j < hfc; j++) {
                        po.fxs[k] -= dx * hfas[j];
                        po.fys[k] -= dy * hfas[j];
                        po.fltns[k] -= dltn * hfas[j];
                        k++;
                        if (k >= hfc) k = 0
                    }
                    po.fx = po.fxs[po.fpos];
                    po.fy = po.fys[po.fpos];
                    po.fltn = po.fltns[po.fpos];
                    po.fsmu = po.fsmus[po.fpos];
                    po.ftg = hfc
                }
                lpo = po;
                var n2 = 3;
                var k = o.pts.length - 3;
                if (k >= 1) {
                    lmpo = o.pts[k];
                    n = 0;
                    mv = 0;
                    dsmu = 0;
                    for (var m = k - 1; m >= 0; m--) {
                        mpo = o.pts[m];
                        n++;
                        ox = mpo.xx;
                        oy = mpo.yy;
                        osmu = mpo.smu;
                        if (n <= 4) mv = cst * n / 4;
                        mpo.xx += (lmpo.xx - mpo.xx) * mv;
                        mpo.yy += (lmpo.yy - mpo.yy) * mv;
                        if (mpo.smu != smus[n2]) {
                            osmu = mpo.smu;
                            mpo.smu = smus[n2];
                            dsmu = mpo.smu - osmu
                        } else dsmu = 0;
                        if (n2 < smuc_m3) n2++;
                        if (o.iiv) {
                            dx = mpo.xx - ox;
                            dy = mpo.yy - oy;
                            var k = mpo.fpos;
                            for (var j = 0; j < hfc; j++) {
                                mpo.fxs[k] -= dx * hfas[j];
                                mpo.fys[k] -= dy * hfas[j];
                                mpo.fsmus[k] -= dsmu * hfas[j];
                                k++;
                                if (k >= hfc) k = 0
                            }
                            mpo.fx =
                                mpo.fxs[mpo.fpos];
                            mpo.fy = mpo.fys[mpo.fpos];
                            mpo.fsmu = mpo.fsmus[mpo.fpos];
                            mpo.ftg = hfc
                        }
                        lmpo = mpo
                    }
                }
                o.sc = Math.min(6, 1 + (o.sct - 2) / 106);
                o.scang = .13 + .87 * Math.pow((7 - o.sc) / 6, 2);
                o.ssp = nsp1 + nsp2 * o.sc;
                o.fsp = o.ssp + .1;
                o.wsep = 6 * o.sc;
                var mwsep = nsep / gsc;
                if (o.wsep < mwsep) o.wsep = mwsep;
                if (adding_only) snl(o);
                if (o == slither) {
                    ovxx = slither.xx + slither.fx;
                    ovyy = slither.yy + slither.fy
                }
                var csp = o.sp * (etm / 8) / 4;
                csp *= lag_mult;
                var ochl = o.chl - 1;
                o.chl = csp / o.msl;
                var dx = xx - o.xx;
                var dy = yy - o.yy;
                var dchl = o.chl - ochl;
                o.xx = xx;
                o.yy = yy;
                var k = o.fpos;
                for (var j = 0; j < rfc; j++) {
                    o.fxs[k] -= dx * rfas[j];
                    o.fys[k] -= dy * rfas[j];
                    o.fchls[k] -= dchl * rfas[j];
                    k++;
                    if (k >= rfc) k = 0
                }
                o.fx = o.fxs[o.fpos];
                o.fy = o.fys[o.fpos];
                o.fchl = o.fchls[o.fpos];
                o.ftg = rfc;
                o.ehl = 0;
                if (o == slither) {
                    var lvx = view_xx;
                    var lvy = view_yy;
                    if (follow_view) {
                        view_xx = slither.xx + slither.fx;
                        view_yy = slither.yy + slither.fy
                    }
                    bgx2 -= (view_xx - lvx) * 1 / bgw2;
                    bgy2 -= (view_yy - lvy) * 1 / bgh2;
                    bgx2 %= 1;
                    if (bgx2 < 0) bgx2 += 1;
                    bgy2 %= 1;
                    if (bgy2 < 0) bgy2 += 1;
                    var dx = view_xx - ovxx;
                    var dy = view_yy - ovyy;
                    var k = fvpos;
                    for (var j = 0; j < vfc; j++) {
                        fvxs[k] -= dx * vfas[j];
                        fvys[k] -= dy * vfas[j];
                        k++;
                        if (k >= vfc) k = 0
                    }
                    fvtg = vfc
                }
            }
        } else if (cmd == "l") {
            if (!playing) return;
            wumsts = true;
            var s_htm = "";
            var n_htm = "";
            var p_htm = "";
            var nc = 0;
            var pos = 0;
            if (lb_fr == -1)
                if (dead_mtm == -1) lb_fr = 0;
            var k, v;
            var score;
            var my_pos = a[m];
            m++;
            rank = a[m] << 8 | a[m + 1];
            if (rank < best_rank) best_rank = rank;
            m += 2;
            slither_count = a[m] << 8 | a[m + 1];
            if (slither_count > biggest_slither_count) biggest_slither_count = slither_count;
            m += 2;
            while (m < alen) {
                var sct;
                var fam;
                sct = a[m] << 8 | a[m + 1];
                m += 2;
                fam = (a[m] << 16 | a[m + 1] << 8 | a[m + 2]) / 16777215;
                m += 3;
                score = Math.floor((fpsls[sct] + fam / fmlts[sct] - 1) * 15 - 5) / 1;
                var cv = a[m] % 9;
                m++;
                var nl = a[m];
                m++;
                pos++;
                var nk = "";
                for (var j = 0; j < nl; j++) {
                    v = a[m];
                    nk += String.fromCharCode(v);
                    m++
                }
                if (pos == my_pos) {
                    nk = my_nick;
                    nl = nk.length
                } else if (!gdnm(nk)) nk = "";
                var nk2 = "";
                for (var j = 0; j < nl; j++) {
                    v = nk.charCodeAt(j);
                    if (v == 38) nk2 += "&amp;";
                    else if (v == 60) nk2 += "&lt;";
                    else if (v == 62) nk2 += "&gt;";
                    else if (v == 32) nk2 += "&nbsp;";
                    else nk2 += String.fromCharCode(v)
                }
                nk = nk2;
                nc++;
                if (pos == my_pos) k = 1;
                else k = .7 * (.3 + .7 * (1 - nc / 10));
                s_htm += '<span style="opacity:' + k + "; color:" + per_color_imgs[cv].cs + ';">' + score + "</span><BR>";
                n_htm += '<span style="opacity:' + k + "; color:" + per_color_imgs[cv].cs + ";" + (pos == my_pos ? "font-weight:bold;" : "") + '">' + nk + "</span><BR>";
                p_htm += '<span style="opacity:' + k + "; color:" + per_color_imgs[cv].cs + ';">#' + nc + "</span><BR>"
            }
            lbs.innerHTML = s_htm;
            lbn.innerHTML = n_htm;
            lbp.innerHTML = p_htm
        } else if (cmd == "v")
            if (a[m] == 2) {
                want_close_socket = true;
                want_victory_message = false;
                want_hide_victory = 1;
                hvfr = 0
            } else {
                dead_mtm = timeObj.now();
                play_btn.setEnabled(true);
                var sct = slither.sct + slither.rsc;
                var final_score = Math.floor((fpsls[sct] + slither.fam / fmlts[sct] - 1) * 15 - 5) / 1;
                var fstr = "Your final length was";
                if (lang == "de") fstr = "Deine endg\u00fcltige L\u00e4nge war";
                else if (lang == "fr") fstr = "Votre longueur finale \u00e9tait de";
                else if (lang == "pt") fstr = "Seu comprimento final foi de";
                var exc = "";
                if (final_score > 1E3) exc = "!";
                var s = '<span style="opacity: .45;">' + fstr + " </span><b>" + final_score + "</b>" + exc;
                lastscore.innerHTML = s;
                var pstr = "Play Again";
                if (lang == "fr") pstr = "Jouer";
                else if (lang ==
                    "pt") pstr = "Joga";
                play_btn.setText(String.fromCharCode(160) + pstr + String.fromCharCode(160));
                if (a[m] == 1) {
                    nick_holder.style.display = "none";
                    playh.style.display = "none";
                    smh.style.display = "none";
                    victory_holder.style.display = "inline";
                    saveh.style.display = "block";
                    want_victory_message = true;
                    want_victory_focus = true;
                    victory.disabled = false;
                    save_btn.setEnabled(true)
                } else want_close_socket = true
            }
        else if (cmd == "W") {
            xx = a[m];
            m++;
            yy = a[m];
            m++;
            var o = {};
            o.xx = xx;
            o.yy = yy;
            sectors.push(o)
        } else if (cmd == "w") {
            var mode;
            if (protocol_version >=
                8) {
                mode = 2;
                xx = a[m];
                m++;
                yy = a[m];
                m++
            } else {
                mode = a[m];
                m++;
                xx = a[m] << 8 | a[m + 1];
                m += 2;
                yy = a[m] << 8 | a[m + 1];
                m += 2
            }
            if (mode == 1) {
                var o = {};
                o.xx = xx;
                o.yy = yy;
                sectors.push(o)
            } else {
                cm1 = foods_c - 1;
                for (var i = cm1; i >= 0; i--) {
                    var fo = foods[i];
                    if (fo.sx == xx)
                        if (fo.sy == yy) {
                            if (ggl) destroyFood(fo);
                            if (i == cm1) {
                                foods[i] = null;
                                foods_c--;
                                cm1--
                            } else {
                                foods[i] = foods[cm1];
                                foods[cm1] = null;
                                foods_c--;
                                cm1--
                            }
                        }
                }
                for (var i = sectors.length - 1; i >= 0; i--) {
                    var o = sectors[i];
                    if (o.xx == xx)
                        if (o.yy == yy) sectors.splice(i, 1)
                }
            }
        } else if (cmd == "m") {
            var sct = a[m] << 16 | a[m + 1] << 8 | a[m + 2];
            m += 3;
            var fam = (a[m] << 16 | a[m + 1] << 8 | a[m + 2]) / 16777215;
            m += 3;
            var victory_score = Math.floor((fpsls[sct] + fam / fmlts[sct] - 1) * 15 - 5) / 1;
            var nl = a[m];
            m++;
            var victory_nick = "";
            for (var i = 0; i < nl; i++) {
                victory_nick += String.fromCharCode(a[m]);
                m++
            }
            if (!gdnm(victory_nick)) victory_nick = "";
            var victory_message = "";
            while (m < alen) {
                victory_message += String.fromCharCode(a[m]);
                m++
            }
            if (!gdnm(victory_message)) victory_message = "";
            victory_nick = victory_nick.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
            victory_message =
                victory_message.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
            if (victory_score > 0) {
                var h = "";
                if (victory_message.length > 0) h += "<span style='font-size:17px;'><b><i><span style='opacity: .5;'>&quot;</span>" + victory_message + "<span style='opacity: .5;'>&quot;</span></i></b></span><BR> <
                    div style = 'height: 5px;' > < /div>";
                if (victory_nick.length > 0) {
                    if (victory_message.length > 0) h += "<i><span style='opacity: .5;'>- </span><span style='opacity: .75;'><b>" + victory_nick + "</b></span><span style='opacity: .5;'>, today's longest</span></i>";
                    else h = "<i><span style='opacity: .5;'>Today's longest was </span><span style='opacity: .75;'><b>" + victory_nick + "</b></span></i>";
                    h += "<br><i><span style='opacity: .5;'>with a length of </span><span style='opacity: .65;'><b>" + victory_score + "</b></span></i>"
                } else if (victory_message.length > 0) {
                    h += "<i><span style='opacity: .5;'>- </span><span style='opacity: .5;'>today's longest</span></i>";
                    h += "<br><i><span style='opacity: .5;'>with a length of </span><span style='opacity: .65;'><b>" + victory_score + "</b></span></i>"
                } else h +=
                    "<i><span style='opacity: .5;'>Today's longest: </span><span style='opacity: .75;'><b>" + victory_score + "</b></span></i>";
                vcm.innerHTML = h
            }
        } else if (cmd == "p") {
            if (testing) console.log("ping: " + Math.round(timeObj.now() - lpstm));
            wfpr = false;
            if (lagging) {
                etm *= lag_mult;
                lagging = false
            }
        } else if (cmd == "U") {
            var sz = a[m] << 8 | a[m + 1];
            m += 2;
            if (sz > 512) sz = 512;
            if (mmsz != sz) setMinimapSize(sz, false);
            if (!mmgad) {
                var ctx = asmc.getContext("2d");
                ctx.clearRect(0, 0, mmsz, mmsz);
                ctx.drawImage(asmc2, 0, 0)
            }
            mmbfr = 0;
            asmc.style.opacity = mmsta;
            asmc2.style.opacity =
                0;
            var ctx = asmc2.getContext("2d");
            ctx.clearRect(0, 0, mmsz, mmsz);
            ctx.fillStyle = "#FFFFFF";
            var i;
            var k = 0;
            var xx = mmsz - 1;
            var yy = mmsz - 1;
            while (m < alen) {
                if (yy < 0) break;
                k = a[m++];
                if (k >= 128) {
                    k -= 128;
                    for (i = 0; i < k; i++) {
                        xx--;
                        if (xx < 0) {
                            xx = mmsz - 1;
                            yy--;
                            if (yy < 0) break
                        }
                    }
                } else
                    for (i = 0; i < 7; i++) {
                        if ((k & u_m[i]) > 0) ctx.fillRect(xx, yy, 1, 1);
                        xx--;
                        if (xx < 0) {
                            xx = mmsz - 1;
                            yy--;
                            if (yy < 0) break
                        }
                    }
            }
            if (!mmgad) {
                mmgad = true;
                var ctx = asmc.getContext("2d");
                ctx.clearRect(0, 0, mmsz, mmsz);
                ctx.drawImage(asmc2, 0, 0)
            }
        } else if (cmd == "L") {
            var team_count = a[m++];
            var sz = a[m] << 8 | a[m + 1];
            m += 2;
            if (sz > 512) sz = 512;
            if (mmsz != sz) setMinimapSize(sz, false);
            if (mmgad) {
                var ctx = asmc.getContext("2d");
                ctx.clearRect(0, 0, mmsz, mmsz);
                ctx.drawImage(asmc2, 0, 0)
            }
            mmbfr = 0;
            asmc.style.opacity = mmsta;
            asmc2.style.opacity = 0;
            var ctx = asmc2.getContext("2d");
            ctx.clearRect(0, 0, mmsz, mmsz);
            if (team_count == 2) {
                ctx.save();
                ctx.globalCompositeOperation = "lighter";
                ctx.fillStyle = "#FF8080"
            } else ctx.fillStyle = "#FFFFFF";
            var i, j, k;
            var xx, yy;
            for (j = 1; j <= team_count; j++) {
                if (j == 2) ctx.fillStyle = "#99AAFF";
                k = 0;
                xx = mmsz - 1;
                yy = mmsz - 1;
                while (m < alen) {
                    if (yy < 0) break;
                    k = a[m++];
                    if (k >= 128) {
                        if (k == 255) k = 126 * a[m++];
                        else k -= 128;
                        for (i = 0; i < k; i++) {
                            xx--;
                            if (xx < 0) {
                                xx = mmsz - 1;
                                yy--;
                                if (yy < 0) break
                            }
                        }
                    } else
                        for (i = 0; i < 7; i++) {
                            if ((k & u_m[i]) > 0) ctx.fillRect(xx, yy, 1, 1);
                            xx--;
                            if (xx < 0) {
                                xx = mmsz - 1;
                                yy--;
                                if (yy < 0) break
                            }
                        }
                }
            }
            if (!mmgad) {
                mmgad = true;
                var ctx = asmc.getContext("2d");
                ctx.clearRect(0, 0, mmsz, mmsz);
                ctx.drawImage(asmc2, 0, 0)
            }
        } else if (cmd == "M") {
            var sz = a[m] << 8 | a[m + 1];
            m += 2;
            if (sz > 512) sz = 512;
            if (mmsz != sz) setMinimapSize(sz, false);
            mmdata.fill(0);
            if (mmgad) {
                var ctx = asmc.getContext("2d");
                ctx.clearRect(0, 0, mmsz, mmsz);
                ctx.drawImage(asmc2, 0, 0)
            }
            mmbfr = 0;
            asmc.style.opacity = mmsta;
            asmc2.style.opacity = 0;
            var ctx = asmc2.getContext("2d");
            ctx.clearRect(0, 0, mmsz, mmsz);
            ctx.fillStyle = "#FFFFFF";
            var i;
            var k = 0;
            var xx = mmsz - 1;
            var yy = mmsz - 1;
            while (m < alen) {
                if (yy < 0) break;
                k = a[m++];
                if (k >= 128) {
                    if (k == 255) k = 126 * a[m++];
                    else k -= 128;
                    for (i = 0; i < k; i++) {
                        xx--;
                        if (xx < 0) {
                            xx = mmsz - 1;
                            yy--;
                            if (yy < 0) break
                        }
                    }
                } else
                    for (i = 0; i < 7; i++) {
                        if ((k & u_m[i]) > 0) {
                            mmdata[yy * mmsz + xx] = 1;
                            ctx.fillRect(xx, yy, 1, 1)
                        }
                        xx--;
                        if (xx < 0) {
                            xx = mmsz - 1;
                            yy--;
                            if (yy < 0) break
                        }
                    }
            }
            if (!mmgad) {
                mmgad = true;
                var ctx = asmc.getContext("2d");
                ctx.clearRect(0, 0, mmsz, mmsz);
                ctx.drawImage(asmc2, 0, 0)
            }
        } else if (cmd == "V") {
            if (mmgad) {
                var ctx = asmc.getContext("2d");
                ctx.clearRect(0, 0, mmsz, mmsz);
                ctx.drawImage(asmc2, 0, 0)
            }
            mmbfr = 0;
            asmc.style.opacity = mmsta;
            asmc2.style.opacity = 0;
            var ctx = asmc2.getContext("2d");
            ctx.fillStyle = "#FFFFFF";
            var i;
            var j;
            var k = 0;
            var xx = mmsz - 1;
            var yy = mmsz - 1;
            while (m < alen) {
                if (yy < 0) break;
                k = a[m++];
                if (k >= 128) {
                    if (k == 255) k = 126 * a[m++];
                    else k -= 128;
                    for (i = 0; i < k; i++) {
                        xx--;
                        if (xx < 0) {
                            xx = mmsz - 1;
                            yy--;
                            if (yy < 0) break
                        }
                    }
                } else
                    for (i = 0; i < 7; i++) {
                        if ((k & u_m[i]) > 0) {
                            j = yy * mmsz + xx;
                            if (mmdata[j] == 1) {
                                mmdata[j] = 0;
                                ctx.clearRect(xx, yy, 1, 1)
                            } else {
                                mmdata[j] = 1;
                                ctx.fillRect(xx, yy, 1, 1)
                            }
                        }
                        xx--;
                        if (xx < 0) {
                            xx = mmsz - 1;
                            yy--;
                            if (yy < 0) break
                        }
                    }
            }
            if (!mmgad) {
                mmgad = true;
                var ctx = asmc.getContext("2d");
                ctx.clearRect(0, 0, mmsz, mmsz);
                ctx.drawImage(asmc2, 0, 0)
            }
        } else if (cmd == "u") {
            mmgad = true;
            if (mmsz != 80) setMinimapSize(80, true);
            var ctx = asmc.getContext("2d");
            ctx.clearRect(0, 0, 80, 80);
            ctx.fillStyle = "#FFFFFF";
            var i;
            var k = 0;
            var xx = 0;
            var yy = 0;
            while (m < alen) {
                if (yy >= 80) break;
                k = a[m++];
                if (k >= 128) {
                    k -= 128;
                    for (i = 0; i < k; i++) {
                        xx++;
                        if (xx >= 80) {
                            xx = 0;
                            yy++;
                            if (yy >= 80) break
                        }
                    }
                } else
                    for (i = 0; i < 7; i++) {
                        if ((k & u_m[i]) > 0) ctx.fillRect(xx, yy, 1, 1);
                        xx++;
                        if (xx >= 80) {
                            xx = 0;
                            yy++;
                            if (yy >= 80) break
                        }
                    }
            }
        } else if (cmd == "i") {
            adm = true;
            var mode = a[m];
            m++;
            var id = a[m] << 8 | a[m + 1];
            m += 2;
            var o = os["s" + id];
            if (o)
                if (mode == 0) {
                    var v1 = a[m];
                    m++;
                    var v2 = a[m];
                    m++;
                    var v3 = a[m];
                    m++;
                    var v4 = a[m];
                    m++;
                    if (v1 > 0 || v2 > 0 || v3 > 0 || v4 > 0) {
                        var ipstr = v1 + "." + v2 + "." + v3 + "." + v4;
                        o.ip = ipstr
                    }
                } else if (mode == 1) {
                var nk = "";
                while (m < alen) {
                    nk += String.fromCharCode(a[m]);
                    m++
                }
                o.onk = nk
            }
        } else if (cmd == "o") {
            team1_score = 0;
            team2_score = 0;
            if (alen == 9) {
                team1_score = a[m] << 24 | a[m + 1] << 16 | a[m + 2] << 8 | a[m + 3];
                m += 4;
                team2_score = a[m] << 24 | a[m + 1] << 16 | a[m + 2] << 8 | a[m + 3];
                m += 4;
                team_score_pos++;
                if (team_score_pos >= team1_scores.length) team_score_pos = 0;
                team1_scores[team_score_pos] = team1_score;
                team2_scores[team_score_pos] = team2_score
            } else {
                while (m < alen) {
                    team1_score = a[m] << 24 | a[m + 1] << 16 | a[m + 2] << 8 | a[m + 3];
                    m += 4;
                    team2_score = a[m] << 24 | a[m + 1] << 16 | a[m + 2] << 8 | a[m + 3];
                    m += 4;
                    team1_scores.unshift(team1_score);
                    team2_scores.unshift(team2_score)
                }
                team_score_pos = team1_scores.length - 1;
                team1_score = team1_scores[team_score_pos];
                team2_score = team2_scores[team_score_pos]
            }
            if (!tsbgad) {
                tsbgad = true;
                tsbgad_stm = timeObj.now();
                sbmc.style.display = "inline"
            }
            var h1, h2;
            if (team1_score + team2_score > 0) {
                team1_eo.s(team1_score / (team1_score + team2_score));
                team2_eo.s(team2_score / (team1_score + team2_score));
                h1 = Math.round(100 * team1_score / (team1_score + team2_score)) / 1;
                h2 = 100 - h1;
                team1_pct.textContent = h1 + "%";
                team2_pct.textContent = h2 + "%"
            }
            if (testing) {
                console.log("team 1 score: " + team1_score);
                console.log("team 2 score: " + team2_score)
            }
        } else if (cmd == "s") {
            if (!playing) return;
            var id = a[m] << 8 | a[m + 1];
            m += 2;
            if (dlen > 6) {
                var ang = (a[m] << 16 | a[m + 1] << 8 | a[m + 2]) * 2 * Math.PI / 16777215;
                m += 3;
                var dir = a[m] - 48;
                m++;
                var wang = (a[m] << 16 | a[m + 1] << 8 | a[m + 2]) * 2 * Math.PI / 16777215;
                m += 3;
                var speed = (a[m] << 8 | a[m + 1]) / 1E3;
                m += 2;
                var fam = (a[m] << 16 | a[m + 1] << 8 | a[m + 2]) / 16777215;
                m += 3;
                var cv = a[m];
                m++;
                var pts = [];
                var snx = (a[m] << 16 | a[m + 1] << 8 | a[m + 2]) / 5;
                m += 3;
                var sny = (a[m] << 16 | a[m + 1] << 8 | a[m + 2]) / 5;
                m += 3;
                var nl = a[m];
                m++;
                var nk = "";
                for (var j = 0; j < nl; j++) {
                    nk += String.fromCharCode(a[m]);
                    m++
                }
                if (testing) console.log("nk: " + nk);
                var custom_skin = null;
                if (protocol_version >= 11) {
                    var skl = a[m];
                    m++;
                    if (skl > 0) {
                        custom_skin = new Uint8Array(skl);
                        for (var j = 0; j < skl; j++) custom_skin[j] = a[m + j]
                    }
                    m += skl
                }
                var cosmetic = 255;
                if (protocol_version >= 12) {
                    cosmetic = a[m];
                    m++
                }
                var msl = default_msl;
                xx = 0;
                yy = 0;
                var lx = 0;
                var ly = 0;
                var fp = false;
                var k = 1;
                var po = null;
                var alen_m2 = alen - 2;
                while (m < alen) {
                    po = points_dp.get();
                    if (!po) {
                        po = {};
                        po.fxs = new Float32Array(hfc);
                        po.fys = new Float32Array(hfc);
                        po.fltns = new Float32Array(hfc);
                        po.fsmus = new Float32Array(hfc)
                    } else
                        for (var i = 0; i < hfc; i++) {
                            po.fxs[i] = 0;
                            po.fys[i] = 0;
                            po.fltns[i] = 0;
                            po.fsmus[i] = 0
                        }
                    lx = xx;
                    ly = yy;
                    if (!fp) {
                        xx = (a[m] << 16 | a[m + 1] << 8 | a[m + 2]) / 5;
                        m += 3;
                        yy = (a[m] << 16 | a[m + 1] << 8 | a[m + 2]) / 5;
                        m += 3;
                        lx = xx;
                        ly = yy;
                        fp = true
                    } else if (m == alen_m2 && protocol_version >= 15) {
                        var iang = a[m] << 8 | a[m + 1];
                        po.iang = iang;
                        m += 2;
                        var ang = iang * k64a;
                        xx += Math.cos(ang) * default_msl;
                        yy += Math.sin(ang) * default_msl
                    } else {
                        xx += (a[m] - 127) / 2;
                        m++;
                        yy += (a[m] - 127) / 2;
                        m++
                    }
                    po.fpos = 0;
                    po.ftg = 0;
                    po.fsmu = 0;
                    po.xx = xx;
                    po.yy = yy;
                    po.fx = 0;
                    po.fy = 0;
                    po.fltn =
                        0;
                    po.da = 0;
                    po.ltn = 1;
                    po.ebx = xx - lx;
                    po.eby = yy - ly;
                    pts.push(po)
                }
                var j = 0;
                for (var i = pts.length - 1; i >= 0; i--) {
                    if (j < smuc_m3) {
                        k = smus[j];
                        j++
                    }
                    pts[i].smu = k
                }
                var o = newSlither(id, snx, sny, cv, ang, pts, msl, custom_skin);
                if (slither == null) {
                    view_xx = xx;
                    view_yy = yy;
                    slither = o;
                    try {
                        var v = localStorage.cosmetic;
                        if (v == "" + Number(v)) slither.accessory = Number(v)
                    } catch (e) {}
                    slither.md = false;
                    slither.wmd = false;
                    o.nk = my_nick;
                    lfsx = -1;
                    lfsy = -1;
                    lfcv = 0;
                    lfvsx = -1;
                    lfvsy = -1;
                    lfesid = -1
                } else {
                    o.nk = nk;
                    if (!gdnm(nk)) o.nk = ""
                }
                o.ip = "";
                o.onk = "";
                if (ggl) {
                    var nko =
                        name_dp.get();
                    if (nko) {
                        nko.visible = true;
                        nko.text = nk;
                        nko.style.fill = o.csw
                    } else {
                        nko = new PIXI.Text(o.nk, {
                            fontFamily: " Arial",
                            fontSize: 13,
                            fill: o.csw,
                            align: "center"
                        });
                        nko.anchor.set(.5, 0)
                    }
                    nko.alpha = 0;
                    o.nko = nko;
                    nmlo.addChild(nko)
                }
                o.eang = o.wang = wang;
                o.sp = speed;
                o.spang = o.sp / spangdv;
                if (o.spang > 1) o.spang = 1;
                o.fam = fam;
                o.sc = Math.min(6, 1 + (o.sct - 2) / 106);
                o.scang = .13 + .87 * Math.pow((7 - o.sc) / 6, 2);
                o.ssp = nsp1 + nsp2 * o.sc;
                o.fsp = o.ssp + .1;
                o.wsep = 6 * o.sc;
                var mwsep = nsep / gsc;
                if (o.wsep < mwsep) o.wsep = mwsep;
                o.sep = o.wsep;
                snl(o)
            } else {
                var is_kill = a[m] == 1;
                m++;
                for (var i = slithers.length - 1; i >= 0; i--)
                    if (slithers[i].id == id) {
                        var o = slithers[i];
                        o.id = -1234;
                        if (is_kill) {
                            o.dead = true;
                            o.dead_amt = 0;
                            o.edir = 0
                        } else destroySlitherAtIndex(i);
                        delete os["s" + id];
                        break
                    }
            }
        } else if (cmd == "F")
            if (protocol_version >= 14) {
                var sx = a[m];
                m++;
                var sy = a[m];
                m++;
                var axx = sx * sector_size;
                var ayy = sy * sector_size;
                var xx, yy;
                var rx, ry;
                var cv, rad, id, fo;
                while (m < alen) {
                    cv = a[m];
                    m++;
                    rx = a[m];
                    m++;
                    ry = a[m];
                    m++;
                    xx = axx + rx * ssd256;
                    yy = ayy + ry * ssd256;
                    rad = a[m] / 5;
                    m++;
                    id = sx << 24 | sy << 16 | rx << 8 | ry;
                    fo = newFood(id, xx, yy, rad, true, cv);
                    fo.sx = sx;
                    fo.sy = sy
                }
            } else if (protocol_version >= 4) {
            var gsi = false;
            var sx, sy;
            while (m < alen) {
                var cv = a[m];
                m++;
                xx = a[m] << 8 | a[m + 1];
                m += 2;
                yy = a[m] << 8 | a[m + 1];
                m += 2;
                var rad = a[m] / 5;
                m++;
                var id = yy * grd * 3 + xx;
                var fo = newFood(id, xx, yy, rad, true, cv);
                if (!gsi) {
                    gsi = true;
                    sx = Math.floor(xx / sector_size);
                    sy = Math.floor(yy / sector_size)
                }
                fo.sx = sx;
                fo.sy = sy
            }
        } else {
            var sx = a[m] << 8 | a[m + 1];
            m += 2;
            var sy = a[m] << 8 | a[m + 1];
            m += 2;
            while (m < alen) {
                var id = a[m] << 16 | a[m + 1] << 8 | a[m + 2];
                m += 3;
                var cv = a[m];
                m++;
                xx = sector_size * (sx + a[m] / 255);
                m++;
                yy = sector_size * (sy + a[m] / 255);
                m++;
                var rad = a[m] / 5;
                m++;
                var fo = newFood(id, xx, yy, rad, true, cv);
                fo.sx = sx;
                fo.sy = sy
            }
        } else if (cmd == "b" || cmd == "f") {
            var id;
            if (protocol_version >= 14) {
                var sx, sy;
                if (dlen >= 5) {
                    sx = a[m];
                    m++;
                    sy = a[m];
                    m++;
                    lfsx = sx;
                    lfsy = sy
                } else {
                    sx = lfsx;
                    sy = lfsy
                }
                var rx = a[m];
                m++;
                var ry = a[m];
                m++;
                var xx = sx * sector_size + rx * ssd256;
                var yy = sy * sector_size + ry * ssd256;
                id = sx << 24 | sy << 16 | rx << 8 | ry;
                var cv;
                if (dlen == 4 || dlen == 6) {
                    cv = a[m];
                    m++;
                    lfcv = cv
                } else cv = lfcv;
                var rad = a[m] / 5;
                m++;
                var fo = newFood(id, xx, yy, rad, cmd == "b", cv);
                fo.sx = sx;
                fo.sy = sy
            } else if (protocol_version >=
                4) {
                var cv = a[m];
                m++;
                if (dlen > 4) {
                    xx = a[m] << 8 | a[m + 1];
                    m += 2;
                    yy = a[m] << 8 | a[m + 1];
                    m += 2;
                    id = yy * grd * 3 + xx;
                    var rad = a[m] / 5;
                    m++;
                    var fo = newFood(id, xx, yy, rad, cmd == "b", cv);
                    fo.sx = Math.floor(xx / sector_size);
                    fo.sy = Math.floor(yy / sector_size)
                }
            } else {
                id = a[m] << 16 | a[m + 1] << 8 | a[m + 2];
                m += 3;
                if (dlen > 4) {
                    var cv = a[m];
                    m++;
                    var sx = a[m] << 8 | a[m + 1];
                    m += 2;
                    var sy = a[m] << 8 | a[m + 1];
                    m += 2;
                    xx = sector_size * (sx + a[m] / 255);
                    m++;
                    yy = sector_size * (sy + a[m] / 255);
                    m++;
                    var rad = a[m] / 5;
                    m++;
                    var fo = newFood(id, xx, yy, rad, cmd == "b", cv);
                    fo.sx = sx;
                    fo.sy = sy
                }
            }
        } else if (cmd == "c" || cmd == "C" || cmd == "<") {
            var id;
            var ebid = -1;
            var sx, sy, rx, ry;
            if (protocol_version >= 14) {
                if (cmd == "c" && dlen == 2 || cmd == "<" && dlen == 4 || cmd == "C" && dlen == 2) {
                    sx = lfvsx;
                    sy = lfvsy
                } else {
                    sx = a[m];
                    m++;
                    sy = a[m];
                    m++;
                    lfvsx = sx;
                    lfvsy = sy
                }
                rx = a[m];
                m++;
                ry = a[m];
                m++;
                id = sx << 24 | sy << 16 | rx << 8 | ry;
                if (cmd == "<") {
                    ebid = a[m] << 8 | a[m + 1];
                    m += 2;
                    lfesid = ebid
                } else if (cmd == "C") ebid = lfesid
            } else if (protocol_version >= 4) {
                var xx = a[m] << 8 | a[m + 1];
                m += 2;
                var yy = a[m] << 8 | a[m + 1];
                m += 2;
                id = yy * grd * 3 + xx;
                ebid = a[m] << 8 | a[m + 1];
                m += 2
            } else {
                id = a[m] << 16 | a[m + 1] << 8 | a[m + 2];
                m += 3;
                ebid = a[m] << 8 | a[m + 1];
                m += 2
            }
            cm1 = foods_c - 1;
            for (var i = cm1; i >= 0; i--) {
                var fo = foods[i];
                if (fo.id == id) {
                    fo.eaten = true;
                    if (ebid >= 0) {
                        fo.eaten_by = os["s" + ebid];
                        fo.eaten_fr = 0
                    } else {
                        if (ggl) destroyFood(fo);
                        if (i == cm1) {
                            foods[i] = null;
                            foods_c--;
                            cm1--
                        } else {
                            foods[i] = foods[cm1];
                            foods[cm1] = null;
                            foods_c--;
                            cm1--
                        }
                    }
                    id = -1;
                    break
                }
            }
        } else if (cmd == "j") {
            var id = a[m] << 8 | a[m + 1];
            m += 2;
            xx = 1 + (a[m] << 8 | a[m + 1]) * 3;
            m += 2;
            yy = 1 + (a[m] << 8 | a[m + 1]) * 3;
            m += 2;
            var pr = null;
            for (i = preys.length - 1; i >= 0; i--)
                if (preys[i].id == id) {
                    pr = preys[i];
                    break
                } if (pr) {
                var csp = pr.sp * (etm /
                    8) / 4;
                csp *= lag_mult;
                var ox = pr.xx;
                var oy = pr.yy;
                if (dlen == 15) {
                    pr.dir = a[m] - 48;
                    m++;
                    pr.ang = (a[m] << 16 | a[m + 1] << 8 | a[m + 2]) * 2 * Math.PI / 16777215;
                    m += 3;
                    pr.wang = (a[m] << 16 | a[m + 1] << 8 | a[m + 2]) * 2 * Math.PI / 16777215;
                    m += 3;
                    pr.sp = (a[m] << 8 | a[m + 1]) / 1E3;
                    m += 2
                } else if (dlen == 11) {
                    pr.ang = (a[m] << 16 | a[m + 1] << 8 | a[m + 2]) * 2 * Math.PI / 16777215;
                    m += 3;
                    pr.sp = (a[m] << 8 | a[m + 1]) / 1E3;
                    m += 2
                } else if (dlen == 12) {
                    pr.dir = a[m] - 48;
                    m++;
                    pr.wang = (a[m] << 16 | a[m + 1] << 8 | a[m + 2]) * 2 * Math.PI / 16777215;
                    m += 3;
                    pr.sp = (a[m] << 8 | a[m + 1]) / 1E3;
                    m += 2
                } else if (dlen == 13) {
                    pr.dir = a[m] - 48;
                    m++;
                    pr.ang = (a[m] << 16 | a[m + 1] << 8 | a[m + 2]) * 2 * Math.PI / 16777215;
                    m += 3;
                    pr.wang = (a[m] << 16 | a[m + 1] << 8 | a[m + 2]) * 2 * Math.PI / 16777215;
                    m += 3
                } else if (dlen == 9) {
                    pr.ang = (a[m] << 16 | a[m + 1] << 8 | a[m + 2]) * 2 * Math.PI / 16777215;
                    m += 3
                } else if (dlen == 10) {
                    pr.dir = a[m] - 48;
                    m++;
                    pr.wang = (a[m] << 16 | a[m + 1] << 8 | a[m + 2]) * 2 * Math.PI / 16777215;
                    m += 3
                } else if (dlen == 8) {
                    pr.sp = (a[m] << 8 | a[m + 1]) / 1E3;
                    m += 2
                }
                pr.xx = xx + Math.cos(pr.ang) * csp;
                pr.yy = yy + Math.sin(pr.ang) * csp;
                var dx = pr.xx - ox;
                var dy = pr.yy - oy;
                var k = pr.fpos;
                for (var j = 0; j < rfc; j++) {
                    pr.fxs[k] -= dx * rfas[j];
                    pr.fys[k] -= dy * rfas[j];
                    k++;
                    if (k >= rfc) k = 0
                }
                pr.fx = pr.fxs[pr.fpos];
                pr.fy = pr.fys[pr.fpos];
                pr.ftg = rfc
            }
        } else if (cmd == "y") {
            var id = a[m] << 8 | a[m + 1];
            m += 2;
            if (dlen == 2)
                for (var i = preys.length - 1; i >= 0; i--) {
                    var pr = preys[i];
                    if (pr.id == id) {
                        if (ggl) destroyPrey(pr);
                        preys.splice(i, 1);
                        break
                    }
                } else if (dlen == 4) {
                    var slither_id = a[m] << 8 | a[m + 1];
                    m += 2;
                    for (var i = preys.length - 1; i >= 0; i--) {
                        var pr = preys[i];
                        if (pr.id == id) {
                            pr.eaten = true;
                            pr.eaten_by = os["s" + slither_id];
                            if (pr.eaten_by) pr.eaten_fr = 0;
                            else {
                                if (ggl) destroyPrey(pr);
                                preys.splice(i, 1)
                            }
                            break
                        }
                    }
                } else {
                    var cv =
                        a[m];
                    m++;
                    xx = (a[m] << 16 | a[m + 1] << 8 | a[m + 2]) / 5;
                    m += 3;
                    yy = (a[m] << 16 | a[m + 1] << 8 | a[m + 2]) / 5;
                    m += 3;
                    var rad = a[m] / 5;
                    m++;
                    var dir = a[m] - 48;
                    m++;
                    var wang = (a[m] << 16 | a[m + 1] << 8 | a[m + 2]) * 2 * Math.PI / 16777215;
                    m += 3;
                    var ang = (a[m] << 16 | a[m + 1] << 8 | a[m + 2]) * 2 * Math.PI / 16777215;
                    m += 3;
                    var speed = (a[m] << 8 | a[m + 1]) / 1E3;
                    m += 2;
                    newPrey(id, xx, yy, rad, cv, dir, wang, ang, speed)
                }
        } else if (cmd == "k") {
            var id = a[m] << 8 | a[m + 1];
            m += 2;
            var o = os["s" + id];
            if (o) o.kill_count = a[m] << 16 | a[m + 1] << 8 | a[m + 2]
        } else if (cmd == "z") {
            real_flux_grd = a[m] << 16 | a[m + 1] << 8 | a[m + 2];
            m += 3;
            var k = flux_grd_pos;
            for (j = 0; j < flxc; j++) {
                flux_grds[k] = flux_grds[k] + (real_flux_grd - flux_grds[k]) * flxas[j];
                k++;
                if (k >= flxc) k = 0
            }
            flx_tg = flxc
        } else if (testing) {
            console.log("error!");
            var dd = [];
            for (var i = 0; i < a.length; i++) dd.push(("00" + (a[i] + 0).toString(16)).substr(-2));
            console.log(dd.join(" "))
        }
    };
    ws.onerror = function(a) {};
    ws.onclose = function(a) {
        if (ws == this) {
            connected = false;
            playing = false
        }
    };
    var fiss = [];
    ws.onopen = function(a) {
        if (ws != this) return;
        var s = asciize(nick.value);
        if (s.length > 24) s = s.substr(0, 24);
        if (s.toLowerCase() ==
            " gameweek2016") {
            s = "";
            try {
                localStorage.gw2k16 = "1";
                gw2k16 = true
            } catch (e) {}
        }
        my_nick = s;
        if (!gdnm(s)) s = "";
        var cv = Math.floor(Math.random() * 9);
        try {
            var mcv = localStorage.snakercv;
            if (mcv == "" + Number(mcv)) cv = Number(mcv)
        } catch (e) {}
        var client_version = 291;
        var cpw = [54, 206, 204, 169, 97, 178, 74, 136, 124, 117, 14, 210, 106, 236, 8, 208, 136, 213, 140, 111];
        var ca = [];
        var wca = false;
        var taa = "";
        try {
            wca = localStorage.want_custom_skin == "1";
            taa = localStorage.custom_skin
        } catch (e) {}
        if (wca)
            if (taa)
                if (taa.length > 0) {
                    taa = ("" + taa).split(",");
                    ca = new Uint8Array(taa.length);
                    for (var i = 0; i < taa.length; i++) ca[i] = Number(taa[i])
                } var ba;
        if (checking_code) {
            if (etcods.length == 14) {
                ba = new Uint8Array(7);
                ba[0] = 111;
                var v1 = etcods[0].v * 1E3 + etcods[1].v * 100 + etcods[2].v * 10 + etcods[3].v;
                var v2 = etcods[5].v * 1E3 + etcods[6].v * 100 + etcods[7].v * 10 + etcods[8].v;
                var v3 = etcods[10].v * 1E3 + etcods[11].v * 100 + etcods[12].v * 10 + etcods[13].v;
                ba[1] = v1 >> 8 & 255;
                ba[2] = v1 & 255;
                ba[3] = v2 >> 8 & 255;
                ba[4] = v2 & 255;
                ba[5] = v3 >> 8 & 255;
                ba[6] = v3 & 255
            }
        } else {
            ba = new Uint8Array(8 + 20 + s.length + ca.length);
            ba[0] = 115;
            ba[1] = 30;
            ba[2] = client_version >>
                8 & 255;
            ba[3] = client_version & 255;
            for (var i = 0; i < 20; i++) ba[4 + i] = cpw[i];
            ba[24] = cv;
            ba[25] = s.length;
            var m = 26;
            for (var i = 0; i < s.length; i++) {
                ba[m] = s.charCodeAt(i);
                m++
            }
            ba[m] = 0;
            m++;
            ba[m] = 255;
            m++;
            for (var i = 0; i < ca.length; i++) {
                ba[m] = ca[i];
                m++
            }
        }
        startLogin(ba);
        high_quality = true;
        gla = 1;
        wdfg = 0;
        qsm = 1;
        if (!ggl)
            if (want_quality == 0) {
                high_quality = false;
                gla = 0;
                qsm = 1.7
            } if (render_mode == 1) {
            high_quality = false;
            gla = 0
        }
        lpstm = timeObj.now()
    }
}

function asciize(s) {
    var i, l, v;
    l = s.length;
    var need_fix = false;
    for (i = 0; i < l; i++) {
        v = s.charCodeAt(i);
        if (v < 32 || v > 127) {
            need_fix = true;
            break
        }
    }
    if (need_fix) {
        var fs = "";
        for (i = 0; i < l; i++) {
            v = s.charCodeAt(i);
            if (v < 32 || v > 127) fs += " ";
            else fs += String.fromCharCode(v)
        }
        return fs
    }
    return s
}
var smh = document.getElementById("smh");
var csk = document.getElementById("csk");
var cskh = document.getElementById("cskh");
var bsk = document.getElementById("bsk");
var bskh = document.getElementById("bskh");
var scos = document.getElementById("scos");
var scosh = document.getElementById("scosh");
var etco = document.getElementById("etco");
var etcoh = document.getElementById("etcoh");
var csrv = document.getElementById("csrv");
var csrvh = document.getElementById("csrvh");
var trumpbtn;
var trumpbtnh;
var votetxth;
var votetxt_a;
var kamalabtn;
var kamalabtnh;
if (teams_exist) {
    trumpbtn = document.getElementById("trumpbtn");
    trumpbtnh = document.getElementById("trumpbtnh");
    votetxth = document.getElementById("votetxth");
    votetxt_a = .75;
    votetxth.style.opacity = votetxt_a;
    kamalabtn = document.getElementById("kamalabtn");
    kamalabtnh = document.getElementById("kamalabtnh")
}
var want_quality = 1;
var grqi = document.getElementById("grqi");
try {
    if (localStorage.qual == "0") {
        grqi.src = "http://slither.io/s/lowquality.png";
        want_quality = 0
    } else {
        phqi.src = "http://slither.io/s/lowquality.png";
        want_quality = 1
    }
} catch (e) {}
grq.onclick = function() {
    try {
        if (localStorage.qual == "0") {
            localStorage.qual = "1";
            grqi.src = "http://slither.io/s/highquality.png";
            want_quality = 1
        } else {
            localStorage.qual = "0";
            grqi.src = "http://slither.io/s/lowquality.png";
            want_quality = 0
        }
    } catch (e) {}
    return false
};
var plq = document.getElementById("plq");
var clq = document.getElementById("clq");
cskh.style.display = "inline";
csrvh.style.display = "inline";
if (!is_mobile)
    if (!teams_disabled)
        if (teams_exist) {
            trumpbtnh.style.display = "inline";
            votetxth.style.display = "inline";
            kamalabtnh.style.display = "inline"
        } var psk = document.getElementById("psk");
var pskh = document.getElementById("pskh");
var nsk = document.getElementById("nsk");
var nskh = document.getElementById("nskh");
var etcod = document.getElementById("etcod");
var etcot = document.createElement("div");
etcod.appendChild(etcot);
var t = etcot;
t.style.position = "absolute";
t.style.width = "800px";
t.style.height = "32px";
t.style.textAlign = "center";
t.style.color = "#FFFFFF";
t.style.fontWeight = "bold";
t.style.textAlign = "center";
t.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
t.style.fontSize = "18px";
t.textContent = "if you have a code, enter it here!";
t.className = "nsi";
var etcobs = [];
for (var i = 0; i <= 10; i++) {
    var a = document.createElement("a");
    a.draggable = false;
    a.href = "#";
    a.className = "btn btnt";
    var ii = document.createElement("img");
    ii.width = 135;
    ii.height = 135;
    ii.className = "nsi";
    ii.style.position = "absolute";
    ii.draggable = false;
    ii.style.opacity = 0;
    etcod.appendChild(a);
    a.appendChild(ii);
    a.onclick = function() {
        var o;
        for (var i = etcobs.length - 1; i >= 0; i--)
            if (etcobs[i].a == this) {
                o = etcobs[i];
                if (o.v == 10) deleteLastCodeDigit();
                else enterCodeDigit(o.v);
                break
            } return false
    };
    ii.onload = function() {
        var o;
        for (var i =
                etcobs.length - 1; i >= 0; i--)
            if (etcobs[i].ii == this) {
                o = etcobs[i];
                o.loaded = true;
                break
            }
    };
    var o = {};
    o.ii = ii;
    o.a = a;
    o.alpha = 0;
    o.v = i;
    etcobs.push(o)
}
var pstr = "Cancel";
if (lang == "de") pstr = "Stornieren";
else if (lang == "fr") pstr = "Annuler";
else if (lang == "pt") pstr = "Cancelar";
else if (lang == "es") pstr = "Cancelar";
var o = makeTextBtn(String.fromCharCode(160) + pstr + String.fromCharCode(160), 47, 20, 34, 1);
var cancel_code_btn = o;
var etcocdiv = o.elem;
etcocdiv.style.zIndex = 53;
etcocdiv.style.position = "fixed";
etcocdiv.onclick = function() {
    if (entering_code)
        if (!checking_code) {
            stchco();
            ending_enter_code = true
        }
};
etcod.appendChild(etcocdiv);
var etco_sp_ii = document.createElement("img");
etco_sp_ii.width = 100;
etco_sp_ii.height = 100;
etco_sp_ii.className = "nsi";
etco_sp_ii.style.position = "absolute";
etco_sp_ii.draggable = false;
etco_sp_ii.style.opacity = 0;
etcod.appendChild(etco_sp_ii);
var etcdis = [];
var etc_ww = 47 * 15;
var etc_hh = 67;
var etcc = document.createElement("canvas");
etcc.style.position = "absolute";
etcc.width = etc_ww;
etcc.height = etc_hh;
etcod.appendChild(etcc);
var etcbx = 0;
var etcdx = etc_ww / 2 - 54 / 2;
var etcods = [];
var ever_showed_entercode = false;
var entering_code = false;
var checking_code = false;
var ending_enter_code = false;
var want_open_cosmetics = false;
var etca = 0;
var etcba = 0;
var etcbaa = 1;
var etcsv = 0;
var etcsrv = 0;
var etcsa = 0;
var etcshk = false;
var etcshkv = 0;
var hacos = false;
var bonkz = false;
var actco = [];

function stchco() {
    checking_code = false;
    for (var i = etcobs.length - 1; i >= 0; i--) etcobs[i].a.className = "btn btnt";
    cancel_code_btn.setEnabled(true);
    resetGame()
}

function recalculateActivatedCosmetics() {
    actco = [];
    var coco = 32;
    for (var i = 0; i < coco; i++) actco.push(0);
    var cocds = [];
    try {
        var cocdstr = localStorage.cocds;
        if (cocdstr) cocds = ("" + cocdstr).split(",")
    } catch (e) {}
    for (var i = 0; i < cocds.length; i++) {
        s = cocds[i];
        if (s.length == 14) {
            var v1 = Number(s.substr(0, 4));
            var v2 = Number(s.substr(5, 4));
            var v3 = Number(s.substr(10, 4));
            var wants = [];
            wants.push(v1 * 7 % coco);
            wants.push(v2 * 7 % coco);
            wants.push(v3 * 7 % coco);
            for (var j = wants.length - 1; j >= 0; j--) {
                var k = wants[j];
                for (var n = 0; n < 64; n++) {
                    if (actco[k] == 0) {
                        actco[k] = 1;
                        if (!hacos) {
                            hacos = true;
                            etcoh.style.display = "inline";
                            reposGraphicsQuality()
                        }
                        break
                    }
                    k++;
                    if (k >= coco) k = 0
                }
            }
        }
    }
}

function enterCodeDigit(v) {
    if (entering_code)
        if (!checking_code)
            if (etcods.length < 14) {
                var o = {};
                o.v = v;
                etcods.push(o);
                if (etcods.length == 4 || etcods.length == 9) {
                    var o = {};
                    o.v = 10;
                    etcods.push(o)
                }
                if (etcods.length == 14) {
                    want_play = true;
                    checking_code = true;
                    for (var i = etcobs.length - 1; i >= 0; i--) etcobs[i].a.className = "btn_disabled btnt";
                    cancel_code_btn.setEnabled(false)
                }
            }
}

function deleteLastCodeDigit() {
    if (entering_code)
        if (!checking_code)
            if (etcods.length > 0) {
                if (etcods[etcods.length - 1].v == 10) etcods.splice(etcods.length - 1, 1);
                if (etcods.length > 0) etcods.splice(etcods.length - 1, 1)
            }
}
var choosing_skin = false;
var building_skin = false;
var ending_build_skin = false;
var bdska = 0;
var bskoy = 0;
var skoboym = 0;
var build_segments = [];
var bskbtns = [];
var selecting_cosmetic = false;
var ending_select_cosmetic = false;
var secosa = 0;
var secosoy = 0;
var secosoym = 0;
var cosbtns = [];
psk.onclick = function() {
    if (building_skin || selecting_cosmetic) return false;
    if (playing)
        if (slither != null) {
            var cv = slither.rcv;
            cv--;
            if (cv < 0) cv = max_skin_cv;
            if (!gw2k16)
                if (cv == 42) cv--;
            setSkin(slither, cv, null);
            try {
                localStorage.want_custom_skin = "0"
            } catch (e) {}
        } return false
};
nsk.onclick = function() {
    if (building_skin || selecting_cosmetic) return false;
    if (playing)
        if (slither != null) {
            var cv = slither.rcv;
            cv++;
            if (!gw2k16)
                if (cv == 42) cv++;
            if (cv > max_skin_cv) cv = 0;
            setSkin(slither, cv, null);
            try {
                localStorage.want_custom_skin = "0"
            } catch (e) {}
        } return false
};

function reposSkinStuff() {
    skodiv.style.left = Math.round(ww / 2 - skodiv.offsetWidth / 2) + "px";
    if (building_skin) skodiv.style.top = Math.round(hh / 2 + 120 + 94 * skoboym) + "px";
    else if (selecting_cosmetic) skodiv.style.top = Math.round(hh / 2 + 120 + 94 * secosoym) + "px";
    else skodiv.style.top = Math.round(hh / 2 + 120) + "px";
    revdiv.style.left = Math.round(ww / 2 - revdiv.offsetWidth / 2 - skodiv.offsetWidth - 62) + "px";
    revdiv.style.top = Math.round(hh / 2 + 120 + 94 * skoboym) + "px"
}
csk.onclick = function() {
    if (!playing)
        if (dead_mtm == -1) {
            resetGame();
            cst = 0;
            recalcSepMults();
            choosing_skin = true;
            pskh.style.opacity = 0;
            nskh.style.opacity = 0;
            bskh.style.opacity = 0;
            scosh.style.opacity = 0;
            skodiv.style.opacity = 0;
            revdiv.style.opacity = 0;
            pskh.style.display = "inline";
            nskh.style.display = "inline";
            bskh.style.display = "inline";
            if (hacos) scosh.style.display = "inline";
            skodiv.style.display = "inline";
            revdiv.style.display = "none";
            reposSkinStuff();
            nick.disabled = true;
            if (mscps == 0) setMscps(300);
            var pts = [];
            for (var i = 27; i >=
                1; i--) {
                var xx = grd / 2 - i * 10;
                var yy = grd / 2;
                var po = {
                    xx: xx,
                    yy: yy,
                    fx: 0,
                    fy: 0,
                    fltn: 0,
                    da: 0,
                    ltn: 1
                };
                po.fxs = new Float32Array(hfc);
                po.fys = new Float32Array(hfc);
                po.fltns = new Float32Array(hfc);
                po.fsmus = new Float32Array(hfc);
                po.fpos = 0;
                po.ftg = 0;
                po.smu = 1;
                po.fsmu = 0;
                po.da = 0;
                po.ebx = 10;
                po.eby = 0;
                pts.push(po)
            }
            var cv = 0;
            try {
                var mcv = localStorage.snakercv;
                if (mcv == "" + Number(mcv)) cv = Number(mcv)
            } catch (e) {}
            var aa = null;
            var wca = false;
            var taa = "";
            try {
                wca = localStorage.want_custom_skin == "1";
                taa = localStorage.custom_skin
            } catch (e) {}
            if (wca)
                if (taa)
                    if (taa.length >
                        0) {
                        taa = ("" + taa).split(",");
                        aa = new Uint8Array(taa.length);
                        for (var i = 0; i < taa.length; i++) aa[i] = Number(taa[i])
                    } var o = newSlither(1, grd / 2, grd / 2, cv, 0, pts, default_msl, aa);
            view_xx = grd / 2 - (22 / 2 - .5) * 10;
            view_yy = grd / 2;
            slither = o;
            try {
                var v = localStorage.cosmetic;
                if (v == "" + Number(v)) slither.accessory = Number(v)
            } catch (e) {}
            o.nk = "";
            o.ip = "";
            o.onk = "";
            o.eang = o.wang = o.ang;
            o.sp = 4.8;
            o.spang = o.sp / spangdv;
            if (o.spang > 1) o.spang = 1;
            o.sc = 1;
            o.scang = 1;
            o.ssp = nsp1 + nsp2 * o.sc;
            o.fsp = o.ssp + .1;
            o.wsep = 6 * o.sc;
            var mwsep = nsep / gsc;
            if (o.wsep < mwsep) o.wsep = mwsep;
            o.sep = o.wsep;
            o.sep = o.wsep = 18.25;
            snl(o);
            o.alive_amt = 1;
            o.rex = 1.66;
            ws = {};
            ws.send = function(a) {};
            ws.close = function() {};
            connected = true;
            playing = true;
            high_quality = true;
            gla = 1;
            wdfg = 0;
            qsm = 1;
            startShowGame();
            lbh.style.display = "none";
            lbs.style.display = "none";
            lbn.style.display = "none";
            lbp.style.display = "none";
            lbf.style.display = "none";
            vcm.style.display = "none";
            loch.style.display = "none"
        } return false
};
csrv.onclick = function() {
    showServers();
    return false
};
if (teams_exist) {
    trumpbtn.onclick = function() {
        var aa = new Uint8Array(3);
        aa[0] = 99;
        aa[1] = 116;
        aa[2] = 1;
        forceOnce("40.160.21.51", 443, aa);
        play_btn.elem.onclick()
    };
    kamalabtn.onclick = function() {
        var aa = new Uint8Array(3);
        aa[0] = 99;
        aa[1] = 116;
        aa[2] = 2;
        forceOnce("40.160.21.51", 443, aa);
        play_btn.elem.onclick()
    }
}
etco.onclick = function() {
    if (!etco_sp_ii) {
        etco_sp_ii = document.createElement("img");
        etco_sp_ii.width = 100;
        etco_sp_ii.height = 100
    }
    if (!playing)
        if (dead_mtm == -1) {
            resetGame();
            entering_code = true;
            ending_enter_code = false;
            if (!ever_showed_entercode) {
                ever_showed_entercode = true;
                for (var i = etcobs.length - 1; i >= 0; i--)
                    if (i == 10) etcobs[i].ii.src = "http://slither.io/s/codedel.png";
                    else etcobs[i].ii.src = "http://slither.io/s/code" + i + ".png";
                etco_sp_ii.src = "http://slither.io/s/spinner.png";
                for (var i = 0; i <= 11; i++) {
                    var ii = document.createElement("img");
                    ii.width = 54;
                    ii.height = 67;
                    var j = i;
                    if (i == 10) j = "h";
                    else if (i == 11) j = "b";
                    ii.onload = function() {
                        for (var i = etcdis.length - 1; i >= 0; i--) {
                            var o = etcdis[i];
                            if (o.ii == this) o.loaded = true
                        }
                    };
                    var o = {};
                    o.ii = ii;
                    o.loaded = false;
                    etcdis.push(o);
                    ii.src = "http://slither.io/s/cd" + j + ".png"
                }
            }
            etcod.style.display = "inline";
            reposEnterCode();
            nick.disabled = true
        } return false
};
bsk.onclick = function() {
    if (playing)
        if (choosing_skin)
            if (!building_skin && !selecting_cosmetic) {
                var i, j, k;
                var o;
                var fj = 0;
                var tj = 0;
                build_segments = [];
                alcsc = falcsc;
                var taa = "";
                try {
                    localStorage.want_custom_skin = "1";
                    taa = localStorage.custom_skin
                } catch (e) {}
                if (taa)
                    if (taa.length > 0) {
                        taa = ("" + taa).split(",");
                        var ct = 0;
                        var cc = -1;
                        var on_ct = true;
                        for (var i = 8; i < taa.length; i++) {
                            if (on_ct) ct = Number(taa[i]);
                            else {
                                cc = Number(taa[i]);
                                for (var j = 0; j < ct; j++) build_segments.push(cc)
                            }
                            on_ct = !on_ct
                        }
                    } setSkin(slither, 0, getBuildSkinData(true));
                building_skin = true;
                ending_build_skin = false;
                var rc = 4;
                var sks2 = [];
                var rls = [];
                for (i = 0; i < rc; i++) {
                    k = 0;
                    tj = Math.floor(csks.length * (i + 1) / rc);
                    for (j = fj; j < tj; j++) k++;
                    rls.push(k);
                    fj = tj
                }
                rls[0]--;
                rls[1]--;
                rls[2]++;
                rls[3]++;
                var tsks = [];
                fj = 0;
                for (i = 0; i < rc; i++) {
                    tsks = [];
                    sks2.push(tsks);
                    for (j = 0; j < rls[i]; j++) {
                        tsks.push(csks[fj]);
                        fj++
                    }
                }
                for (k = 0; k < sks2.length; k++) {
                    tsks = sks2[k];
                    for (i = 0; i < tsks.length; i++) {
                        j = tsks[i];
                        if (j >= 0 && j < rrs.length) {
                            o = {};
                            var pci = per_color_imgs[j];
                            var kmc = pci.kmcs[0];
                            var ii = document.createElement("canvas");
                            o.ii = ii;
                            ii.width = kmc.width;
                            ii.height = kmc.height;
                            var ctx = ii.getContext("2d");
                            ctx.rotate(Math.PI);
                            ctx.drawImage(kmc, -kmc.width, -kmc.height);
                            ii.style.opacity = 0;
                            ii.style.position = "absolute";
                            ii.style.left = "0px";
                            ii.style.top = "0px";
                            ii.draggable = false;
                            o.xx = Math.floor(tsks.length * 55 * (i - (tsks.length - 1) / 2) / tsks.length);
                            o.yy = Math.floor(-32 - k * 62);
                            var a = document.createElement("a");
                            a.draggable = false;
                            a.href = "#";
                            a.className = "btn btnt";
                            a.style.zIndex = 53;
                            a.style.position = "fixed";
                            a.appendChild(ii);
                            o.a = a;
                            document.body.appendChild(a);
                            o.cv = j;
                            a.onclick = function() {
                                if (!choosing_skin) return false;
                                if (!building_skin) return false;
                                if (build_segments.length >= 47) return false;
                                for (var i = bskbtns.length - 1; i >= 0; i--)
                                    if (bskbtns[i].a == this) {
                                        build_segments.push(bskbtns[i].cv);
                                        break
                                    } setSkin(slither, 0, getBuildSkinData(true));
                                return false
                            };
                            bskbtns.push(o)
                        }
                    }
                }
                reposBskbtns();
                revdiv.style.opacity = 0;
                revdiv.style.display = "inline"
            } return false
};
scos.onclick = function() {
    if (playing)
        if (choosing_skin)
            if (!building_skin && !selecting_cosmetic) {
                selecting_cosmetic = true;
                ending_select_cosmetic = false;
                var o;
                var k = 0;
                var tw = 1;
                for (var i = 0; i < 32; i++)
                    if (actco.length > i && actco[i] == 1) tw++;
                if (tw > 8) tw = 8;
                for (var i = 0; i <= 32; i++)
                    if (i == 32 || actco.length > i && actco[i] == 1) {
                        o = {};
                        if (i == 32) o.v = -1;
                        else o.v = i;
                        var ii = document.createElement("img");
                        ii.onload = function() {
                            var o;
                            for (var i = cosbtns.length - 1; i >= 0; i--) {
                                o = cosbtns[i];
                                if (o.ii == this) {
                                    if (o.v == -1) {
                                        o.ww = this.width * .5;
                                        o.hh = this.height *
                                            .5;
                                        this.width = o.ww;
                                        this.height = o.hh;
                                        o.xx -= o.ww / 2;
                                        o.yy -= o.hh / 2;
                                        reposCosbtns()
                                    } else {
                                        o.ww = this.width * .35;
                                        o.hh = this.height * .35;
                                        this.width = o.ww;
                                        this.height = o.hh;
                                        o.xx -= o.ww / 2;
                                        o.yy -= o.hh / 2;
                                        reposCosbtns()
                                    }
                                    break
                                }
                            }
                        };
                        if (i == 32) ii.src = "http://slither.io/s/a_none.png";
                        else ii.src = a_imgs[i].u;
                        ii.style.opacity = 0;
                        ii.style.position = "absolute";
                        ii.style.left = "0px";
                        ii.style.top = "0px";
                        ii.draggable = false;
                        o.ii = ii;
                        trf(ii, "rotate(90deg)");
                        o.xx = 102 * (k % 8 - (tw / 2 - .5));
                        o.yy = -22 - 80 * Math.floor(k / 8);
                        k++;
                        var a = document.createElement("a");
                        a.draggable = false;
                        a.href = "#";
                        a.className = "btn btnt";
                        a.style.zIndex = 53;
                        a.style.position = "fixed";
                        a.appendChild(ii);
                        o.a = a;
                        document.body.appendChild(a);
                        a.onclick = function() {
                            if (!choosing_skin) return false;
                            if (!selecting_cosmetic) return false;
                            for (var i = cosbtns.length - 1; i >= 0; i--)
                                if (cosbtns[i].a == this) {
                                    slither.accessory = cosbtns[i].v;
                                    break
                                } return false
                        };
                        cosbtns.push(o)
                    } reposCosbtns()
            } return false
};
nick.oninput = function() {
    var s = this.value;
    var fs = asciize(s);
    if (fs.length > 24) fs = fs.substr(0, 24);
    if (s != fs) this.value = fs;
    if (s.toLowerCase() == "bonkers") {
        bonkz = true;
        etcoh.style.display = "inline";
        reposGraphicsQuality()
    }
};
victory.oninput = function() {
    var s = this.value;
    var fs = asciize(s);
    if (fs.length > 140) fs = fs.substr(0, 140);
    if (s != fs) this.value = fs
};
nick.focus();
var s = "";
for (var i = 0; i < zzs.length; i++) s += String.fromCharCode(zzs[i] + 32);
piar(s);
var lmch = document.createElement("div");
lmch.style.width = "450px";
lmch.style.height = "115px";
var lmc2 = document.createElement("canvas");
var lmc = document.createElement("canvas");
var lgsc = 1;
var lw = 450 * 2;
var lh = 135 * 2;
lmc.width = lmc2.width = lw;
lmc.height = lmc2.height = lh;
var lctx = lmc.getContext("2d");
var lctx2 = lmc2.getContext("2d");
trf(lmc2, "scale(.5, .5)");
trfo(lmc2, "0% 0%");
lmch.appendChild(lmc2);
logo.appendChild(lmch);
var lts = [];
lts.push({
    pts: [107, 107, 80, 83, 53, 98, 31, 115, 55, 131, 98, 147, 101, 162, 101, 190, 66, 188, 49, 187, 34, 173],
    kc: 22,
    ws: 4,
    wr: .025,
    qm: .025,
    sp: .06,
    sz: 11
}, {
    pts: [150, 30, 150, 30 + (184 - 30) / 2, 150, 184],
    kc: 66,
    ws: 4,
    wr: .05,
    qm: .025,
    sp: .06,
    sz: 11
}, {
    pts: [207, 96, 207, 96 + (184 - 96) / 2, 207, 184],
    kc: 46,
    ws: 4,
    wr: .03,
    qm: .035,
    sp: .06,
    sz: 11
}, {
    pts: [207, 47, 207, 47 + (50 - 47) / 2, 207, 50],
    kc: 11,
    ws: 2,
    wr: .06,
    qm: .05,
    sp: .06,
    sz: 15,
    r: .5
}, {
    pts: [267, 65, 267, 65 + (164 - 65) / 2, 267, 164, 267, 194, 297, 186],
    kc: 66,
    ws: 6,
    wr: -.025,
    qm: -.0125,
    sp: .06,
    sz: 11,
    r: 1.5
}, {
    pts: [243, 94, 268, 94, 293, 94],
    kc: 66,
    ws: 4,
    wr: .015,
    qm: .025,
    sp: .06,
    sz: 9,
    r: 1.2
}, {
    pts: [338, 30, 338, 30 + (184 - 30) * 1 / 4, 338, 30 + (184 - 30) * 2 / 4, 338, 30 + (184 - 30) * 3 / 4, 338, 184, 338, 164, 338, 144, 338, 104, 378, 104, 418, 104, 418, 144, 418, 164, 418, 184],
    kc: 46,
    ws: 4,
    wr: .005,
    qm: .02,
    sp: .06,
    sz: 11,
    r: 2.1
}, {
    pts: [535, 175, 500, 201, 472, 175, 442, 138, 472, 105, 502, 84, 532, 105, 546, 118, 544, 139, 504, 139, 464, 139],
    kc: 35,
    ws: 6,
    wr: -.013,
    qm: -.025,
    sp: .06,
    sz: 11,
    r: 1.3
}, {
    pts: [591, 96, 591, 96 + (184 - 96) / 2, 591, 184, 591, 184 + (126 - 184) / 2, 591, 126, 613, 82, 652, 109],
    kc: 38,
    ws: 4,
    wr: .01,
    qm: -.035,
    sp: .06,
    sz: 11
}, {
    pts: [663, 177, 663, 177 + (180 - 177) / 2, 663, 180],
    kc: 11,
    ws: 2,
    wr: .06,
    qm: .05,
    sp: .06,
    sz: 15
}, {
    pts: [717, 96, 717, 96 + (184 - 96) / 2, 717, 184],
    kc: 33,
    ws: 4,
    wr: .06,
    qm: .05,
    sp: .06,
    sz: 11
}, {
    pts: [717, 47, 717, 47 + (50 - 47) / 2, 717, 50],
    kc: 11,
    ws: 2,
    wr: .06,
    qm: .05,
    sp: .06,
    sz: 15
}, {
    pts: [814, 186, 860, 188, 858, 136, 854, 96, 814, 96, 770, 96, 770, 136, 770, 186, 814, 186],
    kc: 43,
    ws: 4,
    wr: 0,
    qm: .0274,
    sp: .073,
    sz: 11,
    r: 1.5
});
for (var i = 0; i < lts.length; i++) lts[i].mwig = 5;
var lga = 0;
var lgss = 0;
var ncka = 0;
var mwig = 4;
var lgfr = 0;
var lgtm = timeObj.now();

function showLogo(done) {
    var ct = timeObj.now();
    var et = (ct - lgtm) / 25;
    lgtm = ct;
    var ax1, ay1, cx1, cy1, ax2, ay2, ix1, iy1, ix2, iy2, pax1, pay1, lpax1, lpay1, alpax1, alpay1, d, i, j, ang, gang, wang, dmv, q, rr, gg, bb, r;
    lgfr += et;
    if (lts[lts.length - 1].mwig == 0 && lga == 1 && lgss == 1 && ncka == 1) {
        clearInterval(showlogo_iv);
        showlogo_iv = -1
    } else {
        if (done || lga != 1) {
            lga += .05 * et;
            if (lga >= 1) lga = 1;
            lmc2.style.opacity = lga
        }
        if (lgss != 1) {
            lgss += .00375 * et;
            if (lgss >= 1) lgss = 1
        }
        if (done || ncka != 1) {
            ncka += .006 * et;
            if (ncka >= 1) ncka = 1;
            nick_holder.style.opacity = Math.min(1,
                ncka * 6);
            if (!is_mobile) smh.style.opacity = Math.max(0, Math.min(1, (ncka - .05) * 5));
            if (ncka >= .01) playh.style.opacity = Math.min(1, (ncka - .01) * 5)
        }
        lctx.clearRect(0, 0, lw, lh);
        for (i = 0; i < lts.length; i++) {
            var o = lts[i];
            var pts = o.pts;
            var kc = o.kc;
            var ws = o.ws;
            var wr = o.wr;
            var qm = o.qm;
            var sp = o.sp;
            var sz = o.sz;
            var r = o.r;
            var mwig = o.mwig;
            if (done) {
                o.wch = true;
                mwig = 1E-7
            }
            if (o.wch)
                if (mwig != 0) {
                    mwig *= .982;
                    mwig -= .001 * et;
                    if (render_mode == 1) mwig -= .005 * et;
                    if (mwig <= 0) mwig = 0;
                    o.mwig = mwig
                } if (!r) r = 1;
            lctx.beginPath();
            if (i < 9) {
                var gd = ctx.createLinearGradient(0, 70 * lgsc, 0, 230 * lgsc);
                gd.addColorStop(0, "#80FFA0");
                gd.addColorStop(1, "#008040");
                lctx.fillStyle = gd
            } else {
                var gd = ctx.createLinearGradient(0, 50 * lgsc, 0, 265 * lgsc);
                gd.addColorStop(0, "#9850FF");
                gd.addColorStop(1, "#281060");
                lctx.fillStyle = gd
            }
            dmv = false;
            gang = false;
            q = 0;
            ax2 = pts[0];
            ay2 = pts[1];
            alpax1 = lpax1 = ax2;
            alpay1 = lpay1 = ay2;
            var wig = ws;
            var wgang = lgfr * sp;
            for (j = 2; j < pts.length; j += 4) {
                ax1 = ax2;
                ay1 = ay2;
                cx2 = pts[j];
                cy2 = pts[j + 1];
                ax2 = pts[j + 2];
                ay2 = pts[j + 3];
                for (var k = 1; k <= kc; k++) {
                    q++;
                    var s_amt = k / kc;
                    ix1 = ax1 + (cx2 - ax1) * s_amt;
                    iy1 = ay1 + (cy2 - ay1) * s_amt;
                    ix2 = cx2 + (ax2 - cx2) * s_amt;
                    iy2 = cy2 + (ay2 - cy2) * s_amt;
                    pax1 = ix1 + (ix2 - ix1) * s_amt;
                    pay1 = iy1 + (iy2 - iy1) * s_amt;
                    wang = Math.atan2(pay1 - lpay1, pax1 - lpax1);
                    if (!gang) {
                        gang = true;
                        ang = wang
                    } else {
                        if (wang - ang > Math.PI) wang -= 2 * Math.PI;
                        else if (wang - ang < -Math.PI) wang += 2 * Math.PI;
                        ang += (wang - ang) * .05;
                        ang %= 2 * Math.PI
                    }
                    lpax1 = pax1;
                    lpay1 = pay1;
                    pax1 += Math.cos(Math.PI / 2 + ang) * Math.sin(wgang) * wig * mwig;
                    pay1 += Math.sin(Math.PI / 2 + ang) * Math.sin(wgang) * wig * mwig;
                    wgang -= .76 * qm * wig;
                    wig += wr;
                    lctx.beginPath();
                    var fsz = sz * 1.15 * Math.min(1, lgsc * (.2 + .8 * lga) * (30 * lgss * r - q / 20 - i / 2));
                    if (fsz > .5) {
                        lctx.arc(pax1 * lgsc, pay1 * lgsc, fsz, 0, pi2);
                        o.wch = true
                    }
                    lctx.fill()
                }
            }
        }
        lctx2.clearRect(0, 0, lw, lh);
        lctx2.shadowColor = "#000000";
        lctx2.shadowBlur = 16;
        lctx2.shadowOffsetY = 7;
        lctx2.drawImage(lmc, 0, 0)
    }
}
var showlogo_iv = -1;
if (is_safari || is_mobile) {
    lga = 1;
    lgss = 1;
    ncka = 1;
    showLogo(true)
} else showlogo_iv = setInterval(function() {
    showLogo(false)
}, 25);
document.onkeydown = function(e) {
    e = e || window.event;
    var v = e.keyCode;
    if (v == 37) kd_l = true;
    else if (v == 39) kd_r = true;
    else if (v == 38 || v == 32) {
        kd_u = true;
        setAcceleration(1)
    } else if (v >= 48 && v <= 57)
        if (entering_code) enterCodeDigit(v - 48);
        else {
            if (choosing_server)
                if (document.activeElement)
                    if (document.activeElement != svit) {
                        svit.value = "";
                        svit.focus()
                    }
        }
    else if (v == 8)
        if (entering_code) deleteLastCodeDigit();
        else {
            if (choosing_server)
                if (document.activeElement)
                    if (document.activeElement != svit) {
                        svit.value = "";
                        svit.focus()
                    }
        }
    else if (v == 13 || v == 10)
        if (want_victory_message) {
            if (victory.value.length > 0) save_btn.elem.onclick()
        } else {
            if (!connecting && !connected) play_btn.elem.onclick()
        }
    else if (v == 16) {
        if (testing) shifty = true
    } else if (v == 27)
        if (choosing_server) {
            svit.value = "";
            svit.focus()
        } if (testing) console.log("keydown: " + e.keyCode)
};
document.onkeyup = function(e) {
    e = e || window.event;
    var v = e.keyCode;
    if (v == 37) kd_l = false;
    else if (v == 39) kd_r = false;
    else if (v == 38 || v == 32) {
        kd_u = false;
        setAcceleration(0)
    } else if (v == 16)
        if (testing) shifty = false
};

function loadSos(s) {
    if (forcing) return;
    if (s.length > 0) {
        sos = [];
        clus = [];
        var ala = s.charAt(0) == "a";
        var j = 1;
        var o = {};
        var k = 0;
        var m = 0;
        var n = 0;
        var v;
        var cv = 0;
        var cav = 0;
        var ia = [];
        var i6a = [];
        var pa = [];
        var aa = [];
        var clu = [];
        var sida = [];
        var active;
        while (j < s.length) {
            v = (s.charCodeAt(j++) - 97 - cav) % 26;
            if (v < 0) v += 26;
            cv *= 16;
            cv += v;
            cav += 7;
            if (n == 1) {
                if (m == 0) {
                    active = cv <= 26;
                    m++
                } else if (m == 1) {
                    ia.push(cv);
                    if (ia.length == 4) m++
                } else if (m == 2) {
                    i6a.push(cv);
                    if (i6a.length == 16) m++
                } else if (m == 3) {
                    pa.push(cv);
                    if (pa.length == 2) m++
                } else if (m == 4) {
                    aa.push(cv);
                    if (aa.length == 2) m++
                } else if (m == 5) {
                    clu.push(cv);
                    if (clu.length == 1) m++
                } else if (m == 6) {
                    sida.push(cv);
                    if (sida.length == 2) {
                        var po = 0;
                        for (var k = 0; k < pa.length; k++) {
                            po *= 256;
                            po += pa[k]
                        }
                        var ac = 0;
                        for (var k = 0; k < aa.length; k++) {
                            ac *= 256;
                            ac += aa[k]
                        }
                        var sid = 0;
                        for (var k = 0; k < sida.length; k++) {
                            sid *= 256;
                            sid += sida[k]
                        }
                        for (var z = 1; z <= 2; z++) {
                            o = {};
                            if (z == 1) o.ip = ia.join(".");
                            else if (i6a.length == 16) {
                                var fip6 = [];
                                var q;
                                var gg = false;
                                for (var k = 0; k < i6a.length; k += 2) {
                                    q = i6a[k] * 256 + i6a[k + 1];
                                    if (q != 0) gg = true;
                                    fip6.push(q.toString(16))
                                }
                                if (!gg) break;
                                o.ip = "[" + fip6.join(":") + "]"
                            } else break;
                            o.po = po;
                            o.ac = ac;
                            o.sid = sid;
                            o.active = active;
                            o.wg = ac + 5;
                            if (z == 1) o.clu = clu[0];
                            else o.clu = clu[0] + 1E3;
                            var cluo;
                            if (!clus[o.clu]) {
                                cluo = {};
                                clus[o.clu] = cluo;
                                cluo.sis = [];
                                cluo.ptms = [];
                                cluo.swg = 0;
                                cluo.tac = 0;
                                cluo.sos = []
                            } else cluo = clus[o.clu];
                            o.cluo = cluo;
                            if (o.active) cluo.swg += o.wg;
                            cluo.sos.push(o);
                            cluo.tac += ac;
                            sos.push(o)
                        }
                        ia = [];
                        i6a = [];
                        pa = [];
                        aa = [];
                        clu = [];
                        sida = [];
                        m = 0
                    }
                }
                cv = 0;
                n = 0
            } else n++
        }
        for (j = sos.length - 1; j >= 0; j--) {
            n = 1;
            var cluo = sos[j].cluo;
            if (cluo) {
                for (k = cluo.sis.length - 1; k >= 0; k--)
                    if (cluo.sis[k].ip ==
                        sos[j].ip) {
                        n = 0;
                        break
                    } if (n == 1) cluo.sis.push({
                    ip: sos[j].ip
                })
            }
        }
        sos_loaded_at_mtm = timeObj.now();
        for (j = clus.length - 1; j >= 0; j--) {
            var cluo = clus[j];
            if (cluo)
                if (cluo.sis.length > 0) {
                    var k = Math.floor(Math.random() * cluo.sis.length);
                    var ip = cluo.sis[k].ip;
                    var ps = null;
                    try {
                        var ps = new WebSocket("ws://" + ip + ":80/ptc");
                        if (testing) console.log("ptc")
                    } catch (e) {
                        ps = null
                    }
                    if (ps) {
                        ps.binaryType = "arraybuffer";
                        ps.onerror = function(e) {};
                        ps.onmessage = function(e) {
                            var a = new Uint8Array(e.data);
                            if (a.length == 1 && a[0] == 112)
                                for (var j = clus.length -
                                        1; j >= 0; j--) {
                                    var cluo = clus[j];
                                    if (cluo)
                                        if (cluo.ps == this) {
                                            var ptm = Math.round(timeObj.now() - cluo.stm);
                                            if (testing) console.log(" ping time for cluster " + j + ": " + ptm);
                                            if (waiting_for_sos)
                                                if (sos_ready_after_mtm == -1) sos_ready_after_mtm = timeObj.now() + 2667;
                                            if (testing)
                                                if (cluo.ptms.length == 0) console.log("first ping response for " + j + " at " + timeObj.now());
                                            cluo.ptms.push(ptm);
                                            if (cluo.ptms.length < 3) {
                                                cluo.stm = timeObj.now();
                                                var ba = new Uint8Array(1);
                                                ba[0] = 112;
                                                this.send(ba)
                                            } else {
                                                this.close();
                                                cluo.ps = null
                                            }
                                            break
                                        }
                                }
                        };
                        ps.onopen = function(a) {
                            var found = false;
                            for (var j = clus.length - 1; j >= 0; j--) {
                                var cluo = clus[j];
                                if (cluo)
                                    if (cluo.ps == this) {
                                        cluo.stm = timeObj.now();
                                        var ba = new Uint8Array(1);
                                        ba[0] = 112;
                                        this.send(ba);
                                        found = true;
                                        break
                                    }
                            }
                            if (!found) this.close()
                        };
                        cluo.ps = ps
                    }
                }
        }
    }
}

function adjustCodeSpinner() {
    var sc = hh / 1500;
    if (sc > 1) sc = 1;
    trf(etco_sp_ii, "scale(" + sc + "," + sc + ") rotate(" + Math.round(36E3 * etcsrv / 12) / 100 + "deg)")
}

function reposGraphicsQuality() {
    if (hacos || bonkz) grqh.style.top = "160px";
    else grqh.style.top = "16px"
}

function reposEnterCode() {
    var sc = hh / 1500;
    if (sc > 1) sc = 1;
    etcod.style.width = Math.ceil(ww) + "px";
    etcod.style.height = Math.ceil(hh) + "px";
    var txt_y = Math.round(Math.max(42, (hh - 222) * .2));
    var code_y = Math.round(Math.max(60, .5 * txt_y + .5 * (hh / 2 + 100 * sc - 135 / 2 + -1 * sc * (135 + 20)) - 33));
    var spin_y = Math.round(code_y * .45 + .55 * (hh / 2 + 100 * sc - 135 / 2 + -1 * sc * (135 + 20)) - 33);
    etcot.style.left = Math.round(ww / 2 - 800 / 2) + "px";
    etcot.style.top = txt_y + "px";
    etcc.style.left = Math.round(ww / 2 - etc_ww / 2) + "px";
    etcc.style.top = code_y + "px";
    etco_sp_ii.style.left =
        Math.round(ww / 2 - 100 / 2) + "px";
    etco_sp_ii.style.top = spin_y + "px";
    adjustCodeSpinner();
    for (var i = etcobs.length - 1; i >= 0; i--) {
        var o = etcobs[i];
        var xx = 0;
        var yy = 0;
        var tsc = sc;
        if (i == 0) {
            xx = 0;
            yy = 2
        } else if (i == 1) {
            xx = -1;
            yy = -1
        } else if (i == 2) {
            xx = 0;
            yy = -1
        } else if (i == 3) {
            xx = 1;
            yy = -1
        } else if (i == 4) {
            xx = -1;
            yy = 0
        } else if (i == 5) {
            xx = 0;
            yy = 0
        } else if (i == 6) {
            xx = 1;
            yy = 0
        } else if (i == 7) {
            xx = -1;
            yy = 1
        } else if (i == 8) {
            xx = 0;
            yy = 1
        } else if (i == 9) {
            xx = 1;
            yy = 1
        } else if (i == 10) {
            xx = 1;
            yy = 2;
            tsc *= .75
        }
        o.ii.style.left = Math.round(ww / 2 - 135 / 2 + xx * sc * (135 + 20)) + "px";
        o.ii.style.top =
            Math.round(hh / 2 + 100 * sc - 135 / 2 + yy * sc * (135 + 20)) + "px";
        trf(o.ii, "scale(" + tsc + "," + tsc + ")")
    }
    var sc = hh / 750;
    if (sc > 1) sc = 1;
    trf(etcc, "scale(" + sc + "," + sc + ")");
    etcocdiv.style.left = Math.round(ww / 2 - etcocdiv.offsetWidth / 2) + "px";
    etcocdiv.style.bottom = Math.round(sc * 64) + "px"
}
var svl_a = 0;
var choosing_server = false;

function chooseServer(o) {
    if (o) {
        if (choosing_server) {
            if (svlo != null) {
                svlo.dv.style.border = "";
                svlo.dv.style.left = svlo.div_x + "px";
                svlo.dv.style.top = svlo.div_y + "px"
            }
            svlo = o;
            if (o.dv) {
                o.dv.style.border = "4px solid white";
                o.dv.style.left = o.div_x - 4 + "px";
                o.dv.style.top = o.div_y - 4 + "px"
            }
            svit.value = o.sid
        }
        bso = o;
        forcing = true
    }
}

function showServers() {
    choosing_server = true;
    var csid = -1;
    if (bso) csid = bso.sid;
    for (var i = svl_divs.length - 1; i >= 0; i--) svli.removeChild(svl_divs[i]);
    svl_divs = [];
    svlo = null;
    recalcPtms();
    if (csid == -1)
        if (fbso != null) csid = fbso.sid;
    sos.sort(function(a, b) {
        return parseFloat(a.ptm) - parseFloat(b.ptm)
    });
    for (var i = sos.length - 1; i >= 0; i--) {
        var sid = sos[i].sid;
        for (var j = sos.length - 1; j > i; j--) {
            var sid2 = sos[j].sid;
            if (sid == sid2) {
                if (sos[j].ptm > sos[i].ptm) sos.splice(j, 1);
                else sos.splice(i, 1);
                j = -1;
                break
            }
        }
    }
    var tsos = [];
    for (var i =
            0; i < sos.length; i++)
        if (sos[i].active || sos[i] == bso || sos[i] == fbso) tsos.push(sos[i]);
    svli.className = "nsi";
    var dx = -1;
    var dy = 0;
    var pad = svlpad;
    var ping_rs = [160, 0, 255, 255, 255];
    var ping_gs = [255, 255, 255, 136, 64];
    var ping_bs = [160, 0, 0, 0, 64];
    for (var i = 0; i < tsos.length; i++) {
        dx++;
        if (dx >= 5) {
            dx = 0;
            dy++
        }
        var o = tsos[i];
        var dv = document.createElement("div");
        dv.className = "svi nsi";
        dv.style.width = svldw - pad * 2 + "px";
        dv.style.height = svldh + "px";
        dv.style.position = "absolute";
        dv.style.borderRadius = "4px";
        dv.style.background = "#333366";
        dv.style.cursor = "pointer";
        dv.style.userSelect = "none";
        dv.style.webkitUserSelect = "none";
        dv.style.mozUserSelect = "none";
        dv.style.msUserSelect = "none";
        var dvt = document.createElement("div");
        dv.appendChild(dvt);
        dvt.style.position = "absolute";
        dvt.style.textAlign = "center";
        dvt.style.color = "#FFFFFF";
        dvt.style.width = svldw - pad * 2 + "px";
        dvt.style.height = svldh + "px";
        dvt.style.lineHeight = dvt.style.height;
        dvt.style.left = "0px";
        dvt.style.top = "0px";
        dvt.style.textShadow = tsh;
        dvt.style.fontWeight = "bold";
        dvt.style.textAlign =
            "left";
        dvt.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
        dvt.style.fontSize = "20px";
        dvt.textContent = "\u00a0\u00a0" + o.sid;
        var k;
        var v;
        if (o.ptm < 65) {
            k = 0;
            v = (o.ptm - 0) / (65 - 0)
        } else if (o.ptm < 135) {
            k = 1;
            v = (o.ptm - 65) / (135 - 65)
        } else if (o.ptm < 210) {
            k = 2;
            v = (o.ptm - 135) / (210 - 135)
        } else if (o.ptm < 300) {
            k = 3;
            v = (o.ptm - 210) / (300 - 210)
        } else {
            k = 4;
            v = 0
        }
        if (i == 0)
            if (k >= 1) {
                k = 0;
                v = 1
            } if (k == ping_rs.length - 1) {
            var rr = ping_rs[k];
            var gg = ping_gs[k];
            var bb = ping_bs[k]
        } else {
            var rr = ping_rs[k] + (ping_rs[k + 1] - ping_rs[k]) * v;
            var gg =
                ping_gs[k] + (ping_gs[k + 1] - ping_gs[k]) * v;
            var bb = ping_bs[k] + (ping_bs[k + 1] - ping_bs[k]) * v
        }
        var rs = "00" + Math.floor(rr).toString(16);
        var gs = "00" + Math.floor(gg).toString(16);
        var bs = "00" + Math.floor(bb).toString(16);
        rs = rs.substr(rs.length - 2);
        gs = gs.substr(gs.length - 2);
        bs = bs.substr(bs.length - 2);
        var cs = "#" + rs + gs + bs;
        var pbc = ping_rs.length - 1;
        var pww = 40;
        var phh = 36;
        var cc = document.createElement("canvas");
        cc.width = pww;
        cc.height = phh;
        var ctx = cc.getContext("2d");
        ctx.fillStyle = cs;
        for (var j = 1; j <= pbc; j++) {
            var h = j / pbc * (32 - 4);
            ctx.globalAlpha = 1;
            ctx.fillStyle = "#000000";
            ctx.fillRect(2 + (j - 1) * (pww / 4) - 1, 32 - h - 1, 6 + 2, h + 2);
            ctx.fillStyle = cs;
            if (j == 1 + pbc - k) ctx.globalAlpha = .25 + .75 * (1 - v);
            else if (j <= 1 + pbc - k) ctx.globalAlpha = 1;
            else ctx.globalAlpha = .25;
            ctx.fillRect(2 + (j - 1) * (pww / 4), 32 - h, 6, h)
        }
        var ptt = document.createElement("div");
        dv.appendChild(ptt);
        ptt.style.position = "absolute";
        ptt.style.textAlign = "center";
        ptt.style.color = cs;
        ptt.style.width = pww + "px";
        ptt.style.whiteSpace = "nowrap";
        ptt.style.height = "12px";
        ptt.style.right = "4px";
        ptt.style.bottom = "1px";
        ptt.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
        ptt.style.fontSize = "10px";
        ptt.style.opacity = .6;
        if (o.ptm < 5E4) ptt.textContent = o.ptm + " ms";
        var ii = document.createElement("img");
        ii.src = cc.toDataURL();
        ii.className = "nsi";
        ii.draggable = false;
        ii.style.position = "absolute";
        ii.style.right = "4px";
        ii.style.top = "1px";
        dv.appendChild(ii);
        dv.onclick = function() {
            for (var i = 0; i < sos.length; i++) {
                var o = sos[i];
                if (o.dv == this) {
                    chooseServer(o);
                    hideServers();
                    break
                }
            }
        };
        svli.appendChild(dv);
        svl_divs.push(dv);
        o.dv = dv;
        o.div_x = 10 + pad + dx * (svldw + pad);
        o.div_y = 80 + 10 + dy * (svldh + pad * 2);
        dv.style.left = o.div_x + "px";
        dv.style.top = o.div_y + "px";
        if (o.sid == csid) chooseServer(o)
    }
    svlhh = 80 + 20 + dy * (svldh + pad * 2) + svldh + 32;
    svl.style.height = svlhh + "px";
    svli.style.height = svlhh - 32 + "px";
    svl.style.top = Math.round(hh / 2 - svlhh / 2) + "px";
    nick.disabled = true;
    svl_hiding = false;
    svl_showing = true;
    svl_bg.style.display = "inline";
    svl.style.display = "inline";
    svit_lv = svit.value;
    var ov = svit.value;
    svit.value = 0;
    svit.value = ov;
    svit.disabled = false;
    svit.blur();
    svibs.focus()
}

function hideServers() {
    choosing_server = false;
    if (!svl_hiding) {
        nick.disabled = false;
        svit.disabled = true;
        nick.focus()
    }
    svl_hiding = true;
    svl_showing = false
}

function scaleSvl() {
    var sc = Math.round(1E4 * (.9 + .1 * Math.pow(svl_a, .4))) / 1E4;
    if (ww < svlww + 60) sc *= ww / (svlww + 60);
    sc = Math.round(sc * 1E4) / 1E4;
    svl.style.webkitTransform = svl.style.OTransform = svl.style.msTransform = svl.style.MozTransform = svl.style.transform = "scale(" + sc + "," + sc + ")"
}
var svlo = null;
var svl_divs = [];
var svl_a = 0;
var svl_showing = false;
var svl_hiding = false;
var svl_bg = document.createElement("div");
svl_bg.style.position = "fixed";
svl_bg.style.left = svl_bg.style.top = "0px";
svl_bg.style.background = "#182230";
svl_bg.style.zIndex = 100;
svl_bg.style.opacity = 0;
svl_bg.style.display = "none";
document.body.appendChild(svl_bg);
svl_bg.onclick = function() {
    hideServers()
};
var svlpad = 7;
var svldw = 120;
var svldh = 48;
var svlww = 20 + svldw * 5 + svlpad * 4 + 32;
var svlhh = 20 + 560;
var svl = document.createElement("div");
svl.style.position = "fixed";
svl.style.width = svlww + "px";
svl.style.height = svlhh + "px";
svl.style.borderRadius = "26px";
svl.style.border = "2px solid rgba(190, 210, 255, .66)";
svl.style.boxShadow = "0px 6px 50px rgba(0,0,0, 1)";
svl.style.background = "#000000";
svl.style.zIndex = 1001;
svl.style.opacity = 0;
svl.style.display = "none";
document.body.appendChild(svl);
var svli = document.createElement("div");
svli.style.position = "absolute";
svli.style.left = "16px";
svli.style.top = "16px";
svli.style.width = svlww - 32 + "px";
svli.style.height = svlhh - 32 + "px";
svli.style.borderRadius = "8px";
svli.style.overflowX = "hidden";
svli.style.overflowY = "hidden";
svl.appendChild(svli);
var svibs = document.createElement("input");
svibs.style.opacity = 0;
svibs.style.position = "fixed";
svibs.style.left = "-100000px";
svl.appendChild(svibs);
svibs.addEventListener("focus", function() {
    svibs.blur()
});
var svitl = document.createElement("div");
svitl.className = "nsi";
svitl.style.pointerEvents = "none";
svitl.style.position = "absolute";
svitl.style.width = "260px";
svitl.style.top = "17px";
svitl.style.left = Math.round(svlww / 2 - 260 / 2) + "px";
svitl.style.height = "30px";
svitl.style.color = "#8068C0";
svitl.style.textAlign = "center";
svitl.style.fontSize = "14px";
svitl.style.fontFamily = "'Lucida Sans Unicode', 'Lucida Grande', sans-serif";
svitl.textContent = "Current server ID:";
svl.appendChild(svitl);
var svitww = 80;
var svith = document.createElement("div");
svl.appendChild(svith);
svith.style.position = "absolute";
svith.className = "taho";
svith.style.width = svitww + "px";
svith.style.left = Math.round(svlww / 2 - svitww / 2) + "px";
svith.style.top = "43px";
svith.style.background = "#4C447c";
svith.style.boxShadow = "0px 6px 50px rgba(0,0,0,1)";
var svit = document.createElement("input");
svith.appendChild(svit);
svit.className = "sumsginp";
svit.style.width = svitww - 20 + "px";
svit.style.height = "24px";
svit.style.textAlign = "center";
svit.inputMode = "numeric";
svit.maxLength = 4;
svit.disabled = true;
var svit_lv = "";
svit.addEventListener("input", function(e) {
    if (choosing_server) {
        this.value = this.value.replace(/[^0-9]/g, "");
        if (svit_lv != this.value) {
            svit_lv = this.value;
            var sid = Number(this.value);
            for (var i = 0; i < sos.length; i++)
                if (sos[i].sid == sid) {
                    chooseServer(sos[i]);
                    if (!sos[i].dv) sos[i].active = true;
                    hideServers();
                    break
                }
        }
    }
});
svit.onclick = function() {
    svit.value = ""
};
svit.addEventListener("blur", function() {
    if (forcing && bso) svit.value = bso.sid;
    else if (fbso) svit.value = fbso.sid
});
var buildia_shown = false;
var build_v = document.createElement("video");
var bv_width = 1095;
var bv_height = 616;
var buildia_close_after_tm = -1;

function reposBuildia() {
    if (build_v) {
        var sc = Math.min(ww / bv_width, hh / bv_height);
        var vw = Math.ceil(bv_width * sc);
        var vh = Math.ceil(bv_height * sc);
        build_v.style.width = vw + "px";
        build_v.style.height = vh + "px";
        build_v.style.left = Math.floor(ww / 2 - vw / 2) + "px";
        build_v.style.top = Math.floor(hh / 2 - vh / 2) + "px"
    }
}

function trySkipBuildia() {
    if (buildia_shown)
        if (window.ut_csk) {
            var dpr = window.ut_dpr;
            buildia_shown = false;
            shoa = false;
            ut_d.removeChild(build_v);
            document.body.removeChild(ut_d);
            document.body.removeChild(ut_sk);
            clearInterval(ut_cd_iv);
            build_v = null
        }
}
window.buildia = function() {
    buildia_shown = true;
    window.ut_ldt = timeObj.now();
    var d = document.createElement("div");
    d.style.zIndex = 2147483632;
    d.style.width = "100%";
    d.style.height = "100%";
    d.style.textAlign = "center";
    d.style.background = "rgba(0, 0, 0, .85)";
    d.style.margin = "0px";
    d.style.overflow = "hidden";
    d.style.position = "fixed";
    d.style.opacity = 1;
    window.ut_d = d;
    document.body.appendChild(d);
    var v = build_v;
    v.width = bv_width;
    v.height = bv_height;
    v.style.position = "absolute";
    d.appendChild(v);
    v.currentTime = 4;
    v.play();
    buildia_close_after_tm = timeObj.now() + 11E3;
    reposBuildia();
    var sk = document.createElement("div");
    window.ut_sk = sk;
    sk.style.width = "115px";
    sk.style.height = "20px";
    sk.style.background = "rgba(0, 0, 0, 1)";
    sk.style.border = "1px solid rgba(255, 255, 255, .5)";
    sk.style.fontFamily = "Verdana";
    sk.style.color = "#ffffff";
    sk.style.position = "fixed";
    sk.style.right = "10px";
    sk.style.bottom = "10px";
    sk.textContent = "Skip Ad " + String.fromCharCode(9654);
    sk.style.cursor = "pointer";
    sk.style.textAlign = "center";
    sk.style.padding = "8px";
    sk.style.fontSize = "16px";
    sk.style.borderRadius = "4px";
    sk.style.opacity = .75;
    sk.className = "nsi";
    sk.style.zIndex = 2147483633;
    sk.onmouseenter = function() {
        ut_sk.style.opacity = 1
    };
    sk.onmouseleave = function() {
        ut_sk.style.opacity = .75
    };
    sk.onclick = function() {
        trySkipBuildia()
    };
    document.body.appendChild(sk);
    window.ut_skf = function() {
        var ct = timeObj.now();
        var v = -1;
        if (window.ut_dpr == "1") v = 0;
        if (v <= 0) {
            ut_sk.textContent = "Skip Ad " + String.fromCharCode(9654);
            window.ut_csk = true
        } else {
            v = Math.ceil(Math.pow(v / 5E3, 1) * 5);
            ut_sk.textContent = "Skip in " + v
        }
    };
    window.ut_cd_iv = setInterval("ut_skf()", 250);
    ut_skf()
};
var fifth_iv = -1;
window.fifthia = function() {
    window.ut_ldt = timeObj.now();
    var d = document.createElement("div");
    d.style.zIndex = 2147483632;
    d.style.width = "100%";
    d.style.height = "100%";
    d.style.textAlign = "center";
    d.style.background = "rgba(0, 0, 0, .85)";
    d.style.margin = "0px";
    d.style.overflow = "hidden";
    d.style.position = "fixed";
    window.ut_d = d;
    document.body.appendChild(d);
    var v = document.createElement("div");
    v.style.background = 'url("/s/fifthsun3.jpg")';
    v.style.width = "1100px";
    v.style.height = "800px";
    v.style.marginTop = "30px";
    v.style.marginLeft = v.style.marginRight = "auto";
    v.style.position = "relative";
    v.style.border = "3px solid #CCDDFF";
    window.ut_v = v;
    d.appendChild(v);
    var sn = document.createElement("div");
    sn.style.boxShadow = "0px 3px 20px rgba(0,0,0, .75)";
    sn.style.position = "absolute";
    sn.style.left = Math.round((825 - 150) / 2) - 18 + "px";
    sn.style.top = "126px";
    sn.style.width = "150px";
    sn.style.padding = "18px";
    sn.style.textAlign = "center";
    sn.style.color = "#000000";
    sn.style.fontWeight = "bold";
    sn.style.textAlign = "center";
    sn.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
    sn.style.fontSize = "23px";
    sn.style.cursor = "pointer";
    sn.textContent = "Shop Now";
    sn.className = "nsi shbtn";
    var a = document.createElement("a");
    a.className = "btnt";
    a.draggable = false;
    a.href = "https://www.fifthsun.com/brands/video-games/slither-io";
    a.target = "_blank";
    a.appendChild(sn);
    v.appendChild(a);
    window.ut_sn = sn;
    var sk = document.createElement("div");
    window.ut_sk = sk;
    sk.style.width = "115px";
    sk.style.height = "20px";
    sk.style.background = "rgba(0, 0, 0, 1)";
    sk.style.border = "1px solid rgba(255, 255, 255, .5)";
    sk.style.fontFamily = "Verdana";
    sk.style.color = "#ffffff";
    sk.style.position = "fixed";
    sk.style.right = "10px";
    sk.style.bottom = "10px";
    sk.textContent = "Skip Ad " + String.fromCharCode(9654);
    sk.style.cursor = "pointer";
    sk.style.textAlign = "center";
    sk.style.padding = "8px";
    sk.style.fontSize = "16px";
    sk.style.borderRadius = "4px";
    sk.style.opacity = .75;
    sk.className = "nsi";
    sk.style.zIndex = 2147483633;
    sk.onclick = function() {
        var dpr = window.ut_dpr;
        if (window.ut_csk) {
            shoa = false;
            ut_d.removeChild(ut_v);
            document.body.removeChild(ut_d);
            document.body.removeChild(ut_sk);
            clearInterval(ut_cd_iv)
        }
    };
    sk.onmouseenter = function() {
        ut_sk.style.opacity = 1
    };
    sk.onmouseleave = function() {
        ut_sk.style.opacity = .75
    };
    document.body.appendChild(sk);
    window.ut_skf = function() {
        var ct = timeObj.now();
        var v = -1;
        if (window.ut_dpr == "1") v = 0;
        if (v <= 0) {
            ut_sk.textContent = "Skip Ad " + String.fromCharCode(160, 9654);
            window.ut_csk = true
        } else {
            v = Math.ceil(Math.pow(v / 5E3, 1) * 5);
            ut_sk.textContent = "Skip in " + v
        }
    };
    window.ut_cd_iv = setInterval("ut_skf()", 250);
    ut_skf()
};
var partycity_shown = false;
var pcy_width = 1100 + 32;
var pcy_height = 800 + 32;
var partycity_iv = -1;
window.partycityia = function() {
    window.ut_ldt = timeObj.now();
    var d = document.createElement("div");
    d.style.zIndex = 2147483632;
    d.style.width = "100%";
    d.style.height = "100%";
    d.style.textAlign = "center";
    d.style.background = "rgba(0, 0, 0, .85)";
    d.style.margin = "0px";
    d.style.overflow = "hidden";
    d.style.position = "fixed";
    window.ut_d = d;
    document.body.appendChild(d);
    var v = document.createElement("div");
    v.style.background = 'url("/s/partycity2.jpg")';
    v.style.width = "1100px";
    v.style.height = "800px";
    v.style.position = "absolute";
    v.style.border = "3px solid #CCDDFF";
    v.style.borderRadius = "42px";
    window.ut_v = v;
    d.appendChild(v);
    var sn = document.createElement("div");
    sn.style.boxShadow = "0px 3px 20px rgba(0,0,0, .75)";
    sn.style.position = "absolute";
    sn.style.left = Math.round((1100 - 244) / 2) - 18 + "px";
    sn.style.top = "707px";
    sn.style.width = "244px";
    sn.style.padding = "18px";
    sn.style.textAlign = "center";
    sn.style.color = "#000000";
    sn.style.fontWeight = "bold";
    sn.style.textAlign = "center";
    sn.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
    sn.style.fontSize = "36px";
    sn.style.cursor = "pointer";
    sn.style.borderRadius = "12px";
    sn.textContent = "Shop Now";
    sn.className = "nsi shbtn";
    var a = document.createElement("a");
    a.className = "btnt";
    a.draggable = false;
    if (testing) a.href = "https://www.zombo.com/";
    else a.href = "https://www.partycity.com/slither-party-supplies?extcmp=dsp|banner|slither.io|slitherpartysupplies";
    a.target = "_blank";
    a.appendChild(sn);
    v.appendChild(a);
    window.ut_sn = sn;
    var sk = document.createElement("div");
    window.ut_sk = sk;
    sk.style.width = "115px";
    sk.style.height = "20px";
    sk.style.background = "rgba(0, 0, 0, 1)";
    sk.style.border = "1px solid rgba(255, 255, 255, .5)";
    sk.style.fontFamily = "Verdana";
    sk.style.color = "#ffffff";
    sk.style.position = "fixed";
    sk.style.right = "10px";
    sk.style.bottom = "10px";
    sk.textContent = "Skip Ad " + String.fromCharCode(9654);
    sk.style.cursor = "pointer";
    sk.style.textAlign = "center";
    sk.style.padding = "8px";
    sk.style.fontSize = "16px";
    sk.style.borderRadius = "4px";
    sk.style.opacity = .75;
    sk.className = "nsi";
    sk.style.zIndex = 2147483633;
    sk.onclick = function() {
        var dpr = window.ut_dpr;
        if (window.ut_csk) {
            shoa = false;
            ut_d.removeChild(ut_v);
            document.body.removeChild(ut_d);
            document.body.removeChild(ut_sk);
            clearInterval(ut_cd_iv);
            partycity_shown = false
        }
    };
    sk.onmouseenter = function() {
        ut_sk.style.opacity = 1
    };
    sk.onmouseleave = function() {
        ut_sk.style.opacity = .75
    };
    document.body.appendChild(sk);
    window.ut_skf = function() {
        var ct = timeObj.now();
        var v = -1;
        if (window.ut_dpr == "1") v = 0;
        if (v <= 0) {
            ut_sk.textContent = "Skip Ad " + String.fromCharCode(160, 9654);
            window.ut_csk = true
        } else {
            v = Math.ceil(Math.pow(v / 5E3, 1) * 5);
            ut_sk.textContent = "Skip in " + v
        }
    };
    window.ut_cd_iv = setInterval("ut_skf()", 250);
    ut_skf();
    partycity_shown = true;
    reposPartyCity()
};

function reposPartyCity() {
    if (partycity_shown) {
        var sc = Math.min(ww / pcy_width, hh / pcy_height);
        if (sc > 1) sc = 1;
        var vw = Math.ceil(pcy_width * sc);
        var vh = Math.ceil(pcy_height * sc);
        trf(ut_v, "scale(" + sc + "," + sc + ")");
        trfo(ut_v, "0% 0%");
        ut_v.style.left = Math.floor(ww / 2 - vw / 2) + "px";
        ut_v.style.top = Math.floor(hh / 2 - vh / 2) + "px"
    }
}
var mba = null;
var mbi = null;
if (is_ios || is_android) {
    mba = document.createElement("a");
    mbi = document.createElement("img");
    mbi.border = 0;
    mbi.draggable = false;
    mbi.className = "nsi";
    mbi.width = 1245;
    mbi.height = 260;
    mbi.style.position = "fixed";
    mbi.style.left = "0px";
    mbi.style.bottom = "0px";
    mbi.style.zIndex = 70;
    mbi.src = "http://slither.io/s/n2.jpg";
    mba.appendChild(mbi);
    document.body.appendChild(mba);
    if (is_ios) mba.href = "https://itunes.apple.com/us/app/slither.io/id1091944550?ls=1&mt=8";
    else if (is_android)
        if (is_amazon) mba.href = "http://www.amazon.com/Lowtech-Enterprises-slither-io/dp/B01E312TYQ/";
        else mba.href = "https://play.google.com/store/apps/details?id=air.com.hypah.io.slither"
}
var app;
var root = null;
var nmlo;
var fdglo;
var fdlo;
var prlo;
var g2lo;
var prglo;
var suglo;
var shilo;
var slilo;
var sfilo;
var sdilo;
var bgi;
if (ggl)(async () => {
    app = new PIXI.Application({
        background: "#202020",
        resizeTo: window,
        antialias: true
    });
    var padding = 8;
    var packer;
    for (var j = 0; j < texture_sheets.length; j++) {
        var o = texture_sheets[j];
        var cc = o.cc;
        var ctx = cc.getContext("2d");
        packer = new RectanglePacker(o.width, o.height, padding);
        var subtextures = [];
        for (var i = textures.length - 1; i >= 0; i--) {
            var txu = textures[i];
            if (txu.sheet == j) subtextures.push(txu)
        }
        for (var i = subtextures.length - 1; i >= 0; i--) {
            var txu = subtextures[i];
            packer.insertRectangle(txu.cc.width, txu.cc.height,
                i)
        }
        packer.packRectangles(true);
        if (testing) console.log("packer.rectangleCount = " + packer.rectangleCount());
        var r;
        for (var i = subtextures.length - 1; i >= 0; i--) {
            var ti = packer.getRectangleId(i);
            if (ti == -1) {
                if (testing) console.log("lost a rectangle for subtexture " + i)
            } else {
                r = packer.getRectangle(i, null);
                var txu = subtextures[ti];
                txu.r = r;
                ctx.drawImage(txu.cc, r.x, r.y)
            }
        }
        o.t = PIXI.Texture.from(o.cc);
        for (var i = subtextures.length - 1; i >= 0; i--) {
            var txu = subtextures[i];
            r = txu.r;
            var r2 = new PIXI.Rectangle(r.x, r.y, r.width, r.height);
            txu.t = new PIXI.Texture(o.t.baseTexture, r2)
        }
    }
    document.body.appendChild(app.view);
    app.view.style.position = "fixed";
    app.view.style.left = "0px";
    app.view.style.top = "0px";
    app.view.style.opacity = 0;
    var bgi;
    try {
        var pre = "https://slither.io/s2/";
        bgi = await PIXI.Assets.load(pre + "bg54.jpg")
    } catch (e) {}
    for (var i = 0; i >= 0; i--) {
        if (i == 0) bgee = new PIXI.TilingSprite(bgi, app.screen.width, app.screen.height);
        else bgee = new PIXI.TilingSprite(bgi2, app.screen.width, app.screen.height);
        bgee.anchor.set(.5, .5);
        var o = {};
        o.bgee = bgee;
        o.sp =
            1 - i * .2;
        bgees.push(o)
    }
    root = new PIXI.Container;
    app.stage.addChild(root);
    for (var i = 0; i < bgees.length; i++) root.addChild(bgees[i].bgee);
    fdlo = new PIXI.Container;
    root.addChild(fdlo);
    fdglo = new PIXI.Container;
    fdglo.blendMode = PIXI.BLEND_MODES.ADD;
    root.addChild(fdglo);
    nmlo = new PIXI.Container;
    root.addChild(nmlo);
    prlo = new PIXI.Container;
    prlo.blendMode = PIXI.BLEND_MODES.ADD;
    root.addChild(prlo);
    suglo = new PIXI.Container;
    suglo.blendMode = PIXI.BLEND_MODES.ADD;
    root.addChild(suglo);
    shilo = new PIXI.Container;
    root.addChild(shilo);
    slilo = new PIXI.Container;
    root.addChild(slilo);
    sfilo = new PIXI.Container;
    sfilo.blendMode = PIXI.BLEND_MODES.ADD;
    root.addChild(sfilo);
    sdilo = new PIXI.Container;
    sdilo.blendMode = PIXI.BLEND_MODES.ADD;
    root.addChild(sdilo);
    g2lo = new PIXI.Container;
    g2lo.blendMode = PIXI.BLEND_MODES.ADD;
    root.addChild(g2lo);
    prglo = new PIXI.Container;
    prglo.blendMode = PIXI.BLEND_MODES.ADD;
    root.addChild(prglo);
    app.ticker.add(time => {});
    if (testing) {
        const gl = app.renderer.gl;
        const originalDrawElements = gl.drawElements;
        const originalDrawArrays =
            gl.drawArrays;
        let drawCallCount = 0;
        gl.drawElements = function() {
            drawCallCount++;
            originalDrawElements.apply(gl, arguments)
        };
        gl.drawArrays = function() {
            drawCallCount++;
            originalDrawArrays.apply(gl, arguments)
        };
        const statsText = new PIXI.Text("", {
            fontFamily: "Arial",
            fontSize: 24,
            fill: 16777215
        });
        statsText.position.set(20, 20);
        app.stage.addChild(statsText);
        app.ticker.add(() => {
            statsText.text = `Draw Calls: ${drawCallCount}`;
            drawCallCount = 0
        })
    }
    resize()
})();
resize();
recalculateActivatedCosmetics();
var o = {};
o.f = function(d, m, o) {
    if (m == "success") loadSos(d)
};
getData("https://slither.io/i80124.txt", o);
