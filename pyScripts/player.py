import nflgame
import sys

playerName = sys.argv[1]
p = nflgame.find(playerName)
for player in p:
    print player