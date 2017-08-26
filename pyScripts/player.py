import nflgame
import sys
import logging

inputArgs = sys.argv
for ar in range(0, len(inputArgs)):
    if inputArgs[ar] != 'pyScripts/player.py':
        playerName = inputArgs[ar]
        p = nflgame.find(playerName)
        for player in p:
            print player
