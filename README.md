nano start.sh




#!/bin/bash

JAVA_BIN=/usr/bin/java
JAR=mohist-1.20.1.jar

MIN_MEM=12G
MAX_MEM=24G

$JAVA_BIN -Xms$MIN_MEM -Xmx$MAX_MEM \
  -jar $JAR nogui
