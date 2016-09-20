﻿/// <reference path="jsts.d.ts" />

import * as jsts from 'jsts';

var str: string;
var n: number;
var bool: boolean;
var obj: any;

var c: jsts.geom.Coordinate = new jsts.geom.Coordinate(n, n);
var e: jsts.geom.Envelope = new jsts.geom.Envelope(n, n, n, n);
var g: jsts.geom.Geometry = new jsts.geom.Geometry();
var lr: jsts.geom.LinearRing = new jsts.geom.LinearRing([c]);
var ls: jsts.geom.LineString = new jsts.geom.LineString([c]);
var p: jsts.geom.Point = new jsts.geom.Point(c);
var poly: jsts.geom.Polygon = new jsts.geom.Polygon(lr);

str = jsts.version;

c = new jsts.geom.Coordinate(c);
c = c.clone();
n = c.compareTo(c);
n = c.distance(c);
bool = c.equals(c);
bool = c.equals2D(c);
c.setCoordinate(c);
n = c.x;
n = c.y;
n = c.z;

e = new jsts.geom.Envelope(c);
e = new jsts.geom.Envelope(e);
e = new jsts.geom.Envelope(c, c);
c = e.centre();
e = e.clone();
bool = e.contains(e);
bool = e.contains(c);
bool = e.contains(n, n);
bool = e.covers(c);
bool = e.covers(e);
bool = e.covers(n, n);
n = e.distance(e);
bool = e.equals(e);
e.expandBy(n);
e.expandToInclude(c);
e.expandToInclude(e);
e.expandToInclude(n, n);
n = e.getArea();
n = e.getHeight();
n = e.getMaxX();
n = e.getMaxY();
n = e.getMinX();
n = e.getMinY();
n = e.getWidth();
e = e.intersection(e);
bool = e.intersects(e);
bool = e.intersects(c);
bool = e.intersects(n, n);
bool = e.isNull();
n = e.maxx;
n = e.maxy;
n = e.minx;
n = e.miny;
e.setToNull();
str = e.toString();
e.translate(n, n);

g.apply({});
g = g.buffer(n, n, n);
g.checkNotGeometryCollection(g);
g = g.clone();
n = g.compare([{}], [{}]);
n = g.compareTo(g);
n = g.compareToSameClass(g);
e = g.computeEnvelopeInternal();
bool = g.contains(g);
g = g.convexHull();
bool = g.coveredBy(g);
bool = g.covers(g);
bool = g.crosses(g);
g = g.difference(g);
bool = g.disjoint(g);
n = g.distance(g);
e = g.envelope;
bool = g.equal(c, c, n);
bool = g.equals(g);
bool = g.equalsExact(g, n);
bool = g.equalsNorm(g);
bool = g.equalsTopo(g);
n = g.getArea();
g = g.getBoundary();
n = g.getBoundaryDimension();
p = g.getCentroid();
c = g.getCoordinate();
var coords: jsts.geom.Coordinate[] = g.getCoordinates();
n = g.getDimension();
g = g.getEnvelope();
e = g.getEnvelopeInternal();
obj = g.getFactory();
g = g.getGeometryN(n);
str = g.getGeometryType();
p = g.getInteriorPoint();
n = g.getLength();
n = g.getNumGeometries();
n = g.getNumPoints();
obj = g.getPrecisionModel();
g = g.intersection(g);
bool = g.intersects(g);
bool = g.isEmpty();
bool = g.isEquivalentClass(g);
bool = g.isGeometryCollection();
bool = g.isGeometryCollectionBase();
bool = g.isRectangle();
bool = g.isSimple();
bool = g.isValid();
bool = g.isWithinDistance(g, n);
g = g.norm();
g.normalize();
bool = g.overlaps(g);
bool = g.relate(g, str);
obj = g.relate2(g);
g = g.symDifference(g);
str = g.toString();
bool = g.touches(g);
g = g.union(g);
bool = g.within(g);

c = ls.getCoordinateN(n);
p = ls.getEndPoint();
p = ls.getPointN(n);
p = ls.getStartPoint();
bool = ls.isClosed();
bool = ls.isRing();

n = p.getX();
n = p.getY();
p = p.reverse();

lr = poly.getExteriorRing();
lr = poly.getInteriorRingN(n);
n = poly.getNumInteriorRing();

var gjw: jsts.io.GeoJSONWriter = new jsts.io.GeoJSONWriter();
obj = gjw.write(g);

var wr: jsts.io.WKTReader = new jsts.io.WKTReader();
g = wr.read(str);
wr.reducePrecision(g);
