const levels = [[
  "    #####",
  "    #   #",
  "    #$  #",
  "  ###  $##",
  "  #  $ $ #",
  "### # ## #   ######",
  "#   # ## #####  OO#",
  "# $  $          OO#",
  "##### ### #@##  OO#",
  "    #     #########",
  "    #######"
],
[
  "############",
  "#OO  #     ###",
  "#OO  # $  $  #",
  "#OO  #$####  #",
  "#OO    @ ##  #",
  "#OO  # #  $ ##",
  "###### ##$ $ #",
  "  # $  $ $ $ #",
  "  #    #     #",
  "  ############"
],
[
  "        ########",
  "        #     @#",
  "        # $#$ ##",
  "        # $  $#",
  "        ##$ $ #",
  "######### $ # ###",
  "#OOOO  ## $  $  #",
  "##OOO    $  $   #",
  "#OOOO  ##########",
  "########"
],
[
  "           ########",
  "           #  OOOO#",
  "############  OOOO#",
  "#    #  $ $   OOOO#",
  "# $$$#$  $ #  OOOO#",
  "#  $     $ #  OOOO#",
  "# $$ #$ $ $########",
  "#  $ #     #",
  "## #########",
  "#    #    ##",
  "#     $   ##",
  "#  $$#$$  @#",
  "#    #    ##",
  "###########"
],
[
  "        #####",
  "        #   #####",
  "        # #$##  #",
  "        #     $ #",
  "######### ###   #",
  "#OOOO  ## $  $###",
  "#OOOO    $ $$ ##",
  "#OOOO  ##$  $ @#",
  "#########  $  ##",
  "        # $ $  #",
  "        ### ## #",
  "          #    #",
  "          ######"
],
[
  "######  ###",
  "#OO  # ##@##",
  "#OO  ###   #",
  "#OO     $$ #",
  "#OO  # # $ #",
  "#OO### # $ #",
  "#### $ #$  #",
  "   #  $# $ #",
  "   # $  $  #",
  "   #  ##   #",
  "   #########"
],
[
  "       #####",
  " #######   ##",
  "## # @## $$ #",
  "#    $      #",
  "#  $  ###   #",
  "### #####$###",
  "# $  ### OO#",
  "# $ $ $ OOO#",
  "#    ###OOO#",
  "# $$ # #OOO#",
  "#  ### #####",
  "####"
],
[
  "  ####",
  "  #  ###########",
  "  #    $   $ $ #",
  "  # $# $ #  $  #",
  "  #  $ $  #    #",
  "### $# #  #### #",
  "#@#$ $ $  ##   #",
  "#    $ #$#   # #",
  "#   $    $ $ $ #",
  "#####  #########",
  "  #      #",
  "  #      #",
  "  #OOOOOO#",
  "  #OOOOOO#",
  "  #OOOOOO#",
  "  ########"
],
[
  "          #######",
  "          #  OOO#",
  "      #####  OOO#",
  "      #      O O#",
  "      #  ##  OOO#",
  "      ## ##  OOO#",
  "     ### ########",
  "     # $$$ ##",
  " #####  $ $ #####",
  "##   #$ $   #   #",
  "#@ $  $    $  $ #",
  "###### $$ $ #####",
  "     #      #",
  "     ########"
],
[
  " ###  #############",
  "##@####       #   #",
  "# $$   $$  $ $ OOO#",
  "#  $$$#    $  #OOO#",
  "# $   # $$ $$ #OOO#",
  "###   #  $    #OOO#",
  "#     # $ $ $ #OOO#",
  "#    ###### ###OOO#",
  "## #  #  $ $  #OOO#",
  "#  ## # $$ $ $##OO#",
  "# OO# #  $      #O#",
  "# OO# # $$$ $$$ #O#",
  "##### #       # #O#",
  "    # ######### #O#",
  "    #           #O#",
  "    ###############"
],
[
  "          ####",
  "     #### #  #",
  "   ### @###$ #",
  "  ##      $  #",
  " ##  $ $$## ##",
  " #  #$##     #",
  " # # $ $$ # ###",
  " #   $ #  # $ #####",
  "####    #  $$ #   #",
  "#### ## $         #",
  "#O    ###  ########",
  "#OO OO# ####",
  "#OOO#O#",
  "#OOOOO#",
  "#######"
],
[
  "################",
  "#              #",
  "# # ######     #",
  "# #  $ $ $ $#  #",
  "# #   $@$   ## ##",
  "# #  $ $ $###OOO#",
  "# #   $ $  ##OOO#",
  "# ###$$$ $ ##OOO#",
  "#     # ## ##OOO#",
  "#####   ## ##OOO#",
  "    #####     ###",
  "        #     #",
  "        #######"
],
[
  "   #########",
  "  ##   ##  ######",
  "###     #  #    ###",
  "#  $ #$ #  #  OOO #",
  "# # $#@$## # #O#O #",
  "#  # #$  #    O O #",
  "# $    $ # # #O#O #",
  "#   ##  ##$ $ O O #",
  "# $ #   #  #$#O#O #",
  "## $  $   $  $OOO #",
  " #$ ######    ##  #",
  " #  #    ##########",
  " ####"
],
[
  "       #######",
  " #######     #",
  " #     # $@$ #",
  " #$$ #   #########",
  " # ###OOOOOO##   #",
  " #   $OOOOOO## # #",
  " # ###OOOOOO     #",
  "##   #### ### #$##",
  "#  #$   #  $  # #",
  "#  $ $$$  # $## #",
  "#   $ $ ###$$ # #",
  "#####     $   # #",
  "    ### ###   # #",
  "      #     #   #",
  "      ########  #",
  "             ####"
],
[
  "   ########",
  "   #   #  #",
  "   #  $   #",
  " ### #$   ####",
  " #  $  ##$   #",
  " #  # @ $ # $#",
  " #  #      $ ####",
  " ## ####$##     #",
  " # $#OOOOO# #   #",
  " #  $OO**O $# ###",
  "##  #OOOOO#   #",
  "#   ### #######",
  "# $$  #  #",
  "#  #     #",
  "######   #",
  "     #####"
],
[
  "#####",
  "#   ##",
  "#    #  ####",
  "# $  ####  #",
  "#  $$ $   $#",
  "###@ #$    ##",
  " #  ##  $ $ ##",
  " # $  ## ## O#",
  " #  #$##$  #O#",
  " ###   $OO##O#",
  "  #    #O*OOO#",
  "  # $$ #OOOOO#",
  "  #  #########",
  "  #  #",
  "  ####"
],
[
  "   ##########",
  "   #OO  #   #",
  "   #OO      #",
  "   #OO  #  ####",
  "  #######  #  ##",
  "  #            #",
  "  #  #  ##  #  #",
  "#### ##  #### ##",
  "#  $  ##### #  #",
  "# # $  $  # $  #",
  "# @$  $   #   ##",
  "#### ## #######",
  "   #    #",
  "   ######"
],
[
  "     ###########",
  "     #  O  #   #",
  "     # #O    @ #",
  " ##### ##OO# ####",
  "##  # OO###     ###",
  "# $ #OOO   $ #  $ #",
  "#    OO ##  ## ## #",
  "####$##$# $ #   # #",
  "  ## #    #$ $$ # #",
  "  #  $ # #  # $## #",
  "  #               #",
  "  #  ###########  #",
  "  ####         ####"
],
[
  "  ######",
  "  #   @####",
  "##### $   #",
  "#   ##    ####",
  "# $ #  ##    #",
  "# $ #  ##### #",
  "## $  $    # #",
  "## $ $ ### # #",
  "## #  $  # # #",
  "## # #$#   # #",
  "## ###   # # ######",
  "#  $  #### # #OOOO#",
  "#    $    $   OO#O#",
  "####$  $# $   OOOO#",
  "#       #  ## OOOO#",
  "###################"
],
[
  "    ##########",
  "#####        ####",
  "#     #   $  #@ #",
  "# #######$####  ###",
  "# #    ## #  #$ OO#",
  "# # $     #  #  #O#",
  "# # $  #     #$ OO#",
  "# #  ### ##     #O#",
  "# ###  #  #  #$ OO#",
  "# #    #  ####  #O#",
  "# #$   $  $  #$ OO#",
  "#    $ # $ $ #  #O#",
  "#### $###    #$ OO#",
  "   #    $$ ###OOOO#",
  "   #      ## ######",
  "   ########"
],
[
  "#########",
  "#       #",
  "#       ####",
  "## #### #  #",
  "## #@##    #",
  "# $$$ $  $$#",
  "#  # ## $  #",
  "#  # ##  $ ####",
  "####  $$$ $#  #",
  " #   ##   OOOO#",
  " # #   # #OO O#",
  " #   # # ##OOO#",
  " ##### $  #OOO#",
  "     ##   #####",
  "      #####"
],
[
  "######     ####",
  "#    #######  #####",
  "#   $#  #  $  #   #",
  "#  $  $  $ # $ $  #",
  "##$ $   # @# $    #",
  "#  $ ########### ##",
  "# #   #OOOOOOO# $#",
  "# ##  # OOOOOO#  #",
  "# #   $OOOOOOOO$ #",
  "# # $ #OOOO OO#  #",
  "#  $ $####$#### $#",
  "# $   ### $   $  ##",
  "# $     $ $  $    #",
  "## ###### $ ##### #",
  "#         #       #",
  "###################"
],
[
  "    #######",
  "    #  #  ####",
  "##### $#$ #  ##",
  "#OO #  #  #   #",
  "#OO # $#$ #  $####",
  "#O  #     #$  #  #",
  "#OO   $#  # $    #",
  "#OO@#  #$ #$  #  #",
  "#OO # $#     $#  #",
  "#OO #  #$$#$  #  ##",
  "#OO # $#  #  $#$  #",
  "#OO #  #  #   #   #",
  "##O ####  #####   #",
  " ####  ####   #####"
],
[
  "###############",
  "#OOOOOOOOOO  O####",
  "#OOOOOOOOOO$$O#  #",
  "###########$ #   ##",
  "#      $  $     $ #",
  "## ####   #  $ #  #",
  "#      #   ##  # ##",
  "#  $#  # ##  ### ##",
  "# $ #$###    ### ##",
  "###  $ #  #  ### ##",
  "###    $ ## #  # ##",
  " # $  #  $  $ $   #",
  " #  $  $#$$$  #   #",
  " #  #  $      #####",
  " # @##  #  #  #",
  " ##############"
],
[
  "####",
  "#  ##############",
  "#  #   OO#OOOOOO#",
  "#  # # ##### OOO#",
  "##$#    OOOOOOOO#",
  "#   ##$######  ####",
  "# $ #     ######@ #",
  "##$ # $   ######  #",
  "#  $ #$$$##       #",
  "#      #    #$#$###",
  "# #### #$$$$$    #",
  "# #    $     #   #",
  "# #   ##        ###",
  "# ######$###### $ #",
  "#        #    #   #",
  "##########    #####"
],
[
  " #######",
  " #  #  #####",
  "##  #  #OOO###",
  "#  $#  #OOO  #",
  "# $ #$$ OOO  #",
  "#  $#  #OOO O#",
  "#   # $########",
  "##$       $ $ #",
  "##  #  $$ #   #",
  " ######  ##$$@#",
  "      #      ##",
  "      ########"
],
[
  " #################",
  " #OOO   #    #   ##",
  "##OOOOO  $## # #$ #",
  "#OOOOOO#  $  #    #",
  "#OOOOOO#  #  # #  #",
  "######### $  $ $  #",
  "  #     #$##$ ##$##",
  " ##   $    # $    #",
  " #  ## ### #  ##$ #",
  " # $ $$     $  $  #",
  " # $    $##$ ######",
  " #######  @ ##",
  "       ######"
],
[
  "         #####",
  "     #####   #",
  "    ## $  $  ####",
  "##### $  $ $ ##O#",
  "#       $$  ##OO#",
  "#  ###### ###OO #",
  "## #  #    #OOO #",
  "# $   #    #OOO #",
  "#@ #$ ## ####OOO#",
  "####  $ $$  ##OO#",
  "   ##  $ $  $OOO#",
  "    # $$  $ #  O#",
  "    #   $ $  ####",
  "    ######   #",
  "         #####"
],
[
  "#####",
  "#   ##",
  "# $  #########",
  "## # #       ######",
  "## #   $#$#@  #   #",
  "#  #      $ #   $ #",
  "#  ### ######### ##",
  "#  ## OO*OOOOO # ##",
  "## ## *O*OO*O* # ##",
  "# $########## ##$ #",
  "#  $   $  $    $  #",
  "#  #   #   #   #  #",
  "###################"
],
[
  "       ###########",
  "       #   #     #",
  "#####  #     $ $ #",
  "#   ##### $## # ##",
  "# $ ##   # ## $  #",
  "# $  @$$ # ##$$$ #",
  "## ###   # ##    #",
  "## #   ### #####$#",
  "## #     $  #OOOO#",
  "#  ### ## $ #OOOO##",
  "# $   $ #   #OO$O #",
  "#  ## $ #  ##OOOO #",
  "#####   ######OOO##",
  "    #####    #####"
],
[
  "  ####",
  "  #  #########",
  " ##  ##  #   #",
  " #  $# $@$   ####",
  " #$  $  # $ $#  ##",
  "##  $## #$ $     #",
  "#  #  # #   $$$  #",
  "# $    $  $## ####",
  "# $ $ #$#  #  #",
  "##  ###  ###$ #",
  " #  #OOOO     #",
  " ####OOOOOO####",
  "   #OOOO####",
  "   #OOO##",
  "   #OOO#",
  "   #####"
],
[
  "      ####",
  "  #####  #",
  " ##     $#",
  "## $  ## ###",
  "#@$ $ # $  #",
  "#### ##   $#",
  " #OOOO#$ $ #",
  " #OOOO#   $#",
  " #OOOO  $$ ##",
  " #OOO # $   #",
  " ######$ $  #",
  "      #   ###",
  "      #$ ###",
  "      #  #",
  "      ####"
],
[
  "############",
  "##     ##  #",
  "##   $   $ #",
  "#### ## $$ #",
  "#   $ #    #",
  "# $$$ # ####",
  "#   # # $ ##",
  "#  #  #  $ #",
  "# $# $#    #",
  "#   OO# ####",
  "####OO $ #@#",
  "#OOOOO# $# #",
  "##OOOO#  $ #",
  "###OO##    #",
  "############"
],
[
  " #########",
  " #OOOO   ##",
  " #O#O#  $ ##",
  "##OOOO# # @##",
  "# OOOO#  #  ##",
  "#     #$ ##$ #",
  "## ###  $    #",
  " #$  $ $ $#  #",
  " # #  $ $ ## #",
  " #  ###  ##  #",
  " #    ## ## ##",
  " #  $ #  $  #",
  " ###$ $   ###",
  "   #  #####",
  "   ####"
],
[
  "############ ######",
  "#   #    # ###OOOO#",
  "#   $$#   @  OOOOO#",
  "#   # ###   # OOOO#",
  "## ## ###  #  OOOO#",
  " # $ $     # # ####",
  " #  $ $##  #      #",
  "#### #  #### # ## #",
  "#  # #$   ## #    #",
  "# $  $  # ## #   ##",
  "# # $ $    # #   #",
  "#  $ ## ## # #####",
  "# $$     $$  #",
  "## ## ### $  #",
  " #    # #    #",
  " ###### ######"
],
[
  "            #####",
  "#####  ######   #",
  "#   ####  $ $ $ #",
  "# $   ## ## ##  ##",
  "#   $ $     $  $ #",
  "### $  ## ##     ##",
  "  # ##### #####$$ #",
  " ##$##### @##     #",
  " # $  ###$### $  ##",
  " # $  #   ###  ###",
  " # $$ $ #   $$ #",
  " #     #   ##  #",
  " #######OO O###",
  "    #OOOOOOOOO#",
  "    #OOOOOOOOO#",
  "    ###########"
],
[
  "###########",
  "#OOOOOO   #########",
  "#OOOOOO   #  ##   #",
  "#OO### $    $     #",
  "#OOO $ $ #   ##   #",
  "#OOO#$#####    #  #",
  "###    #   #$  #$ #",
  "  #  $$ $ $  $##  #",
  "  #  $   #$#$ ##$ #",
  "  ### ## #    ##  #",
  "   #  $ $ ## ######",
  "   #    $  $  #",
  "   ##   # #   #",
  "    #####@#####",
  "        ###"
],
[
  "      ####",
  "####### @#",
  "#     $  #",
  "#   $## $#",
  "##$#OOO# #",
  " # $OOO  #",
  " # #O O# ##",
  " #   # #$ #",
  " #$  $    #",
  " #  #######",
  " ####"
],
[
  "             ######",
  " #############OOOO#",
  "##   ##     ##OOOO#",
  "#  $$##  $ @##OOOO#",
  "#      $$ $#  OOOO#",
  "#  $ ## $$ # # OOO#",
  "#  $ ## $  #  OOOO#",
  "## ##### ### ##O###",
  "##   $  $ ##   O  #",
  "# $###  # ##### ###",
  "#   $   #       #",
  "#  $ #$ $ $###  #",
  "# $$$# $   # ####",
  "#    #  $$ #",
  "######   ###",
  "     #####"
],
[
  "    ############",
  "    #          ##",
  "    #  # #$$ $  #",
  "    #$ #$#  ## @#",
  "   ## ## # $ # ##",
  "   #   $ #$  # #",
  "   #   # $   # #",
  "   ## $ $   ## #",
  "   #  #  ##  $ #",
  "   #    ## $$# #",
  "######$$   #   #",
  "#OOOO#  ########",
  "#O#OOO ##",
  "#OOOO   #",
  "#OOOO   #",
  "#########"
],
[
  "           #####",
  "          ##   ##",
  "         ##     #",
  "        ##  $$  #",
  "       ## $$  $ #",
  "       # $    $ #",
  "####   #   $$ #####",
  "#  ######## ##    #",
  "#O            $$$@#",
  "#O# ####### ##   ##",
  "#O# #######O #$ $##",
  "#OOOOOOOOOOO #    #",
  "##############  $ #",
  "             ##  ##",
  "              ####"
],
[
  "     ########",
  "  ####      ######",
  "  #    ## $ $   @#",
  "  # ## ##$#$ $ $##",
  "### OOOOOO#  $$ ##",
  "#   OOOOOO#  #   #",
  "# # OOOOOO#$  $  #",
  "# #$OOOOOO $$# $ #",
  "#   ### ###$  $ ##",
  "###  $  $  $  $ #",
  "  #  $  $  $  $ #",
  "  ######   ######",
  "       #####"
],
[
  "        #######",
  "    #####  #  ####",
  "    #   #   $    #",
  " #### #$$ ## ##  #",
  "##      # #  ## ###",
  "#  ### $#$  $  $  #",
  "#OOO    # ##  #   #",
  "#OOO#    @ # ### ##",
  "#OOO#  ###  $  $  #",
  "######## ##   #   #",
  "          #########"
],
[
  " #####",
  " #   #",
  " # # #######",
  " #      $@######",
  " # $ ##$ ###   #",
  " # #### $    $ #",
  " # ##### #  #$ ####",
  "##  #### ##$      #",
  "#  $#  $  # ## ## #",
  "#         # #OOO# #",
  "######  ###  OOO  #",
  "     #### # #OOO# #",
  "          # ### # #",
  "          #       #",
  "          #########"
],
[
  "##### ####",
  "#OOO# #  ####",
  "#OOO###  $  #",
  "#OOOO## $  $###",
  "##OOOO##   $  #",
  "###OOO ## $ $ #",
  "# ##    #  $  #",
  "#  ## # ### ####",
  "# $ # #$  $    #",
  "#  $ @ $    $  #",
  "#   # $ $$ $ ###",
  "#  ######  ###",
  "# ##    ####",
  "###"
],
[
  "##########",
  "#        ####",
  "# ###### #  ##",
  "# # $ $ $  $ #",
  "#       #$   #",
  "###$  $$#  ###",
  "  #  ## # $##",
  "  ##$#   $ @#",
  "   #  $ $ ###",
  "   # #   $  #",
  "   # ##   # #",
  "  ##  ##### #",
  "  #         #",
  "  #OOOOOOO###",
  "  #OOOOOOO#",
  "  #########"
],
[
  "         ####",
  " #########  ##",
  "##  $      $ #####",
  "#   ## ##   ##OOO#",
  "# #$$ $ $$#$##OOO#",
  "# #   @   #   OOO#",
  "#  $# ###$$   OOO#",
  "# $  $$  $ ##OOOO#",
  "###$       #######",
  "  #  #######",
  "  ####"
],
[
  "  #########",
  "  #*O*#*O*#",
  "  #O*O*O*O#",
  "  #*O*O*O*#",
  "  #O*O*O*O#",
  "  #*O*O*O*#",
  "  ###   ###",
  "    #   #",
  "###### ######",
  "#           #",
  "# $ $ $ $ $ #",
  "## $ $ $ $ ##",
  " #$ $ $ $ $#",
  " #   $@$   #",
  " #  #####  #",
  " ####   ####"
],
[
  "       ####",
  "       #  ##",
  "       #   ##",
  "       # $$ ##",
  "     ###$  $ ##",
  "  ####    $   #",
  "###  # #####  #",
  "#    # #OOOO$ #",
  "# #   $ OOOO# #",
  "#  $ # #O*OO# #",
  "###  #### ### #",
  "  #### @$  ##$##",
  "     ### $     #",
  "       #  ##   #",
  "       #########"
],
[
  "      ############",
  "     ##OO    #   #",
  "    ##OO* $    $ #",
  "   ##OO*O# # # $##",
  "   #OO*O# # # $  #",
  "####OOO#  #    # #",
  "#  ## #          #",
  "# @$ $ ###  #   ##",
  "# $   $   # #   #",
  "###$$   # # # # #",
  "  #   $   # # #####",
  "  # $# #####      #",
  "  #$   #   #    # #",
  "  #  ###   ##     #",
  "  #  #      #    ##",
  "  ####      ######"
],
[
  " #########",
  " #       #",
  " # $ $$ $#",
  "### #  $ #",
  "#O#   $$ ##",
  "#O###   $ #",
  "#O#O $ ## ####",
  "#OOO  $## $  #",
  "#OOO$   $    #",
  "#OO###$### #@#",
  "#OO# #     ###",
  "#### #######"
],
[
  "           ########",
  "           #OOOOOO#",
  "   ####    #OOOOOO#",
  "   #  #########OOO#",
  "   # $   $    #OOO#",
  "   #  # # # # #   #",
  "##### # # #@# #   #",
  "#   # ### ### ## ##",
  "#    $ # $ $ $ # #",
  "# $$$  $   #     #",
  "#   # ###$###$## #",
  "### #  $   #     #",
  " ## $  # $ $ $ ###",
  " #  # ### ### ##",
  " # $          #",
  " #  ###########",
  " ####"
],
[
  "####################",
  "#                ###",
  "# $#   $ ##  $    ##",
  "#    $###    # $$ ##",
  "#O###     $ $ ##  ##",
  "#OOO#  #  #    #$  #",
  "#OO##$$#### $  #   #",
  "#OOO#      $ ##  ###",
  "#OOO$  ###  #    # #",
  "##OO  $#  ##   ##@ #",
  "###O#              #",
  "####################"
],
[
  "####################",
  "#   #    #   #   #@#",
  "# $      $   $   # #",
  "## ###OO## ###     #",
  "#   #OOOO#$#  $### #",
  "# $ #OOOO#  $  $ $ #",
  "#   #OOOO# # # $ $ #",
  "#   ##OO##   #$#   #",
  "##$##    ##  #  #$##",
  "#   $  $     #  #  #",
  "#   #    #   #     #",
  "####################"
],
[
  "####################",
  "#    @##      #   ##",
  "#    ##    $    $ ##",
  "#  ###OOOO# # #  ###",
  "#   #OOOO# # # $   #",
  "### #OOO#  #       #",
  "##  ##O#     $   $ #",
  "##  $ $ ###  # # ###",
  "## $       # # $   #",
  "#### $  $# # # # $ #",
  "####         # #  ##",
  "####################"
],
[
  "####################",
  "#  #  ##    #   @###",
  "##    $    # $###  #",
  "##$# $ ##$# $ $    #",
  "#   $#    $      ###",
  "# ##   $ ###  #OOOO#",
  "# # $# # # # #OOOO##",
  "#    $ $ #  #OOOO###",
  "##$ ###  $ #OOOO####",
  "#  # $        ######",
  "#      # #    ######",
  "####################"
],
[
  "####################",
  "#@     ###   #  #  #",
  "# # #  #  $  $     #",
  "#####     # $ $#$# #",
  "#O#OO#    ##$ $    #",
  "#OOOOO    $   #   ##",
  "#OOOOO    ###$##$###",
  "#O#OO#    $    #   #",
  "#####     #  #$  $ #",
  "#####  #  $    $ $ #",
  "#####  #  #  #  #  #",
  "####################"
],
[
  "####################",
  "##OOO   ## #    #  #",
  "#OOOO         $ ## #",
  "#OOOO# # #$###$    #",
  "#OOO#    #       # #",
  "##O#  #$ #     $## #",
  "#  #  # $ $ ###  $ #",
  "#     $  $ #  # ## #",
  "## # ## #$$# $#  # #",
  "#  #   $ $ #      ##",
  "#    #     #  #   @#",
  "####################"
],
[
  "####################",
  "#   #  #@# ##  #####",
  "# # #  $    $  #####",
  "# #    ###### $  ###",
  "#   #  #OOOO#  $$  #",
  "##$##$##OOOO#      #",
  "#      #OOOO##$##$##",
  "#  $$  #OOOO#      #",
  "# $  $  #  #  ###  #",
  "#####  $   $    $  #",
  "##### #    #  #   ##",
  "####################"
],
[
  "####################",
  "# #     #          #",
  "#       $  ## ### ##",
  "#####  ##   $  $   #",
  "##OO##  # # $ # #  #",
  "#OOOO  $     ##$# ##",
  "#OOOO  $#####   #$##",
  "##OO# #  #   #  $  #",
  "###O# #  $   $  # @#",
  "##  $  $ #   #  ####",
  "##       ###########",
  "####################"
],
[
  "####################",
  "#     ###OO###     #",
  "# $$  ###OO###  $@ #",
  "#  # ##OOOOOO#  $  #",
  "#     #OOOOOO#  $  #",
  "####  ###OO######$ #",
  "#   $$$ #OO#    #  #",
  "# $#   $  $  $$ #$ #",
  "#  #  ## $  ##  #  #",
  "# $    $ ## $    $ #",
  "#  #  ##    ##  #  #",
  "####################"
],
[
  "####################",
  "#    #  # #  #  #  #",
  "# @# # ## $   $   ##",
  "#### #    #  # $   #",
  "#    # ## #$ ## ## #",
  "#      $   $   $   #",
  "#OO###$$## $##$ ## #",
  "#OO#O#  # $   $ #  #",
  "#OOOO# $$   ##$ ####",
  "#OOOO#  #####      #",
  "#OOO###        ##  #",
  "####################"
],
[
  "####################",
  "#OOOO#       #  #  #",
  "#OOOO# # $  $      #",
  "#OOOO ##  $# # $#$ #",
  "#OOO#   $   $#  $  #",
  "#OO####  # $   $$  #",
  "#      #### #### ###",
  "#        #   #     #",
  "# ##   #   $ # $ $ #",
  "# ##    $ ## $  $  #",
  "#     @#     #   # #",
  "####################"
],
[
  "####################",
  "#OOOO###           #",
  "#OOOO##### #  #$# ##",
  "#OOOO###   #$  $   #",
  "#OOOO###    $  #$$##",
  "##  #### $#  #$ $  #",
  "##  ####  $  $  #  #",
  "#@  ####$###$## $  #",
  "##        #  #  $  #",
  "##   ###  #  $  ####",
  "########  #  #     #",
  "####################"
],
[
  "####################",
  "#     #     @#OOO###",
  "#     #      ##OOO##",
  "# # # ##$## ## OOOO#",
  "#   $ #   $$$  OOOO#",
  "###$### $$  ### ##O#",
  "#     $  #    # ####",
  "#  $  #  ###  # #  #",
  "## #$##    $  $$   #",
  "#   $ ##   #  # #  #",
  "#     #    #  #    #",
  "####################"
],
[
  "####################",
  "#     #  #OOO#@    #",
  "# #       OOOO#    #",
  "#  $  #   #OOOO#   #",
  "# ##$#### ##OOOO#  #",
  "# $   $  #  #OOO#  #",
  "# $$ #   #   # $$  #",
  "###  $$$#   $$  $  #",
  "# $  #  #    # $#  #",
  "#   $#  #       $  #",
  "#  #    #    #  #  #",
  "####################"
],
[
  "####################",
  "#####@###O##OOO##  #",
  "#####$  OO#OOO#    #",
  "####    OOOOOO#  $ #",
  "###  $ #OOOOO## # ##",
  "##  $$# #####  $ $ #",
  "## $# $    ##  $$  #",
  "##  #  #    # $  $ #",
  "##   $$ ### #$##   #",
  "## $#      $ $  $ ##",
  "###    #    #    ###",
  "####################"
],
[
  "####################",
  "#@     #   #       #",
  "## ### ##  #### # ##",
  "#    # #  $$       #",
  "#  # # # $ # $ ## ##",
  "#     $ #  #$$ #   #",
  "#  ###  #      ## ##",
  "#OO#O# $ #  $ #    #",
  "#OO#O#  $ # ## $$  #",
  "#OOOO##   $$  $  # #",
  "#OOOOO##        #  #",
  "####################"
],
[
  "####################",
  "#  #      #   #   ##",
  "# $# $ $ ##OOO$  $ #",
  "#  $  # ##OOOO# $  #",
  "# ## $ ##OOOO#   $ #",
  "# $    #OOOO## $   #",
  "# $##  #OOO#       #",
  "#   $$$##$##  ### ##",
  "# # #  #   #  #    #",
  "# $ #  $  ##       #",
  "#    #    #@       #",
  "####################"
],
[
  "####################",
  "#  #  # #    #  #  #",
  "#   $      $ $     #",
  "## #  #$###$##  ## #",
  "#   $     $  #  $  #",
  "# ###$##$#   # $   #",
  "# #   $ $  ###### $#",
  "# $  $$ $  #@#O#OOO#",
  "# #     #  # #O#OOO#",
  "# ########## #OOOOO#",
  "#            #OOOOO#",
  "####################"
],
[
  "####################",
  "#  #     #  ##    ##",
  "# $#   $ #     ##  #",
  "# $  $  #OO#     $ #",
  "# $ $  #OOOO#   # ##",
  "# $#  #OOOOOO### $ #",
  "#   #  #OOOO#  #$  #",
  "# $  ####OO#   #   #",
  "## $   ## # # $  $##",
  "### $    $#@$ $#   #",
  "####   #       #   #",
  "####################"
],
[
  "####################",
  "#      OOOO#    ####",
  "#      OOOO        #",
  "# # ##########     #",
  "# #$   #      ###OO#",
  "#  $   #$$###   #OO#",
  "# $ ### $   $   #OO#",
  "# $ #   $ $ #  ##OO#",
  "#  #  $$ # $ ##   ##",
  "#@## $#  $  $     ##",
  "##       ##   #  ###",
  "####################"
],
[
  "####################",
  "#        #   #@ #  #",
  "# $$  #$$# # #  ## #",
  "#  # $ $ #$$ #     #",
  "## #  #  # # #  #  #",
  "#   ##       #     #",
  "#   # $ #   #   #  #",
  "# $ #$ #   #  $ #OO#",
  "##$ #  ####    #OOO#",
  "#  $          #OOOO#",
  "#   #  #     #OOOOO#",
  "####################"
],
[
  "####################",
  "#     #   #####    #",
  "## $  #   ####  $  #",
  "#### $$   #OO#  #  #",
  "#  $  $  ##OO#### ##",
  "# $   ###OOOO   $$ #",
  "#  #$#   OOOO# # $ #",
  "# #  # $ OO###$#   #",
  "# #   $ #OO#   ##  #",
  "#   $#  ####   # $##",
  "# #  #    @#      ##",
  "####################"
],
[
  "####################",
  "#   #   #    #   #@#",
  "#   $  $     # $ # #",
  "##$# $### #    $$# #",
  "#  #  #O###  #$ $  #",
  "#  #$#OOOO#  # ### #",
  "# $  #OOOOO##    # #",
  "##$  #O#OOOO#$$ $  #",
  "#  ######OO## #  # #",
  "#  $         $ ### #",
  "#   #   #        # #",
  "####################"
],
[
  "####################",
  "# # # #   #@##   # #",
  "#             $    #",
  "#  ##$# ##### $ # ##",
  "##    ##OOOOO#  #  #",
  "##$##$#OOOOO###$#$ #",
  "#   # ##OOOOO#  # ##",
  "#  $    ##OO##  #  #",
  "# $ #   $   $  $$$ #",
  "## $  $# #  #  $   #",
  "#   ##   #  #      #",
  "####################"
],
[
  "######  #####",
  "#    #  #   #",
  "# $  #### $ #",
  "# $      $  #",
  "#  ###@###$ #",
  "########## ###",
  "#OO   ##     #",
  "#OO   ##$    #",
  "#OO   ## $   #",
  "#OO   ## $   #",
  "#OO     $ $  #",
  "###  #########",
  "  ####"
],
[
  "       ###########",
  "       #         #",
  "       #    $ $  #",
  "###### # $ ##### #",
  "#    ##### $  ##$#",
  "#       $ $      #",
  "#          ## ## #",
  "#    ##@##### ## #",
  "#    ####   # ## ##",
  "#OOOO#      # $   #",
  "#OOOO#      #     #",
  "######      #######"
],
[
  "#############",
  "#           #",
  "# ### $$    #",
  "#   # $  $  #",
  "#  $####$######",
  "# $ ##        #####",
  "#  $$ $        OOO#",
  "### ## $$#     OOO#",
  "  # ##   #     OOO#",
  "  #      #     OOO#",
  "  ###@#############",
  "    ###"
],
[
  "  #################",
  "###@##         OOO#",
  "#    #         OOO#",
  "# $  #         OOO#",
  "# $$ #         OOO#",
  "## $ ###$##########",
  " # ###  $ #",
  "##   $  $ #",
  "#  $ #  $ #",
  "# $  #    #",
  "#  $ #    #",
  "#    #    #",
  "###########"
],
[
  "              #####",
  "     ##########   #",
  "     #        #   #",
  "     #  $ $    $$ #",
  "     # ##### ## $ #",
  "     #$$   #$## $ #",
  "     # ### # ##$  #",
  "###### ### $ $    #",
  "#OOOO        ##   #",
  "#OOOO        ######",
  "#OOOO        #",
  "###########@##",
  "          ###"
],
[
  "    ######",
  " ####    #",
  " #    ## #",
  " # $     #",
  "### #### ########",
  "#  $   $ ##  OOO#",
  "#   $$ $$    OOO#",
  "#    $  $##  OOO#",
  "##@## ## ##  OOO#",
  " ###  $  ########",
  " #   $$  #",
  " #    #  #",
  " #########"
],
[
  "####### #########",
  "#     # #   ##  #",
  "# ### # #   $   #",
  "# # $ ###   $   #",
  "#   $$      ##$ #",
  "#    ####   ##  #",
  "#@############ ##",
  "###OO    #####$ #",
  "  #OO    ####   #",
  "  #OO       $$  #",
  "  #OO    #### $ #",
  "  #OO    #  #   #",
  "  ########  #####"
],
[
  "#######",
  "#     ##########",
  "#     #    #  ##",
  "# $   #   $ $  #",
  "#  $  #  $ ##  #",
  "# $$  ##$ $    #",
  "## #  ## #######",
  "## #  ##    OOO#",
  "#  #$       OOO#",
  "#   $$      OOO#",
  "#     ##@#  OOO#",
  "################"
],
[
  "############",
  "#      #   ##",
  "# $  $   #  ######",
  "####  #####      #",
  " #OO  #     #### #",
  " #O####  ####    #",
  " #OOOO    #  $ ####",
  " # OOO#   # $$$#  ##",
  "###O#### ##  $@$   #",
  "#     ##### $ #    #",
  "# #O# $      $###$ #",
  "# #O########  #  $ #",
  "# #OO        ##  $ #",
  "# # ####### $ # #  #",
  "#   #     #       ##",
  "#####     ##########"
],
[
  "################",
  "#       #@ #   #",
  "# # # # # $  $$#",
  "# #OOO# #$$$   #",
  "#  OOO# # $  $$##",
  "# ##O## # ##    #",
  "# #OOO     $    #",
  "# ## ###  #######",
  "#    # ####",
  "######"
],
[
  "    #####",
  " ####   ## #####",
  " #  $    ###   #",
  " # $@$ $    $  #",
  " # #$######## ##",
  " # #  $  #     #",
  " # # $ $ # #   #",
  "## #  $# # #####",
  "#  ##    #     #",
  "#    $ # ###   #",
  "##### ##  #OOOO#",
  "#    $     OOOO#",
  "#         #OOOO#",
  "################"
],
[
  "#############",
  "#OOOOOOOO####",
  "#OOO#### #  #####",
  "#OOO#  ###    $ #",
  "#OOO$$     $ $  #",
  "#  O#  $ $# $  ##",
  "#OOO# #$#   $  #",
  "#O# # $   $    #",
  "#O  #$###$####$#",
  "##  #   $ $    #",
  " #  #  $@$  #  #",
  " #  # #### $  $#",
  " #  #    ###   #",
  " #  # $$ # #####",
  " #  #    #",
  " #########"
],
[
  " ##################",
  " #   $       OOO#O##",
  " #       ####OOOOO #",
  " # #######  #OOOOO #",
  " # #    $ $ ##OOOO##",
  " # #  $ # # ###OOO#",
  " # # $@$ $  ##### #",
  "## #  $  $ $$   $ #",
  "#  #$# $#   # $## #",
  "# ##    ## ## $ # #",
  "# # $# $ $  #     #",
  "# #         #######",
  "# ########$##   #",
  "#        #  $   #",
  "########    #####",
  "       ###  #",
  "         ####"
],
[
  "####################",
  "#OO#    #          #",
  "#O$  $  #$$  $## $##",
  "#O$#  ###  ## ##   #",
  "#  # $ #  $$   $   #",
  "# ###  # #  #$  ####",
  "#  ## # $   #@ #   #",
  "# $    $  ##O##  $ #",
  "#  # $# $# $     ###",
  "#  #  #  #   ###   #",
  "#  ######## #      #",
  "#           #  #O#O#",
  "##$########$#   OOO#",
  "#    O*  #    ##O#O#",
  "# O*OOO*   $  OOOOO#",
  "####################"
]
];

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const statusText = document.getElementById('statusText');
const hintText = document.getElementById('hintText');
const legend = document.getElementById('legend');
const resetBtn = document.getElementById('resetBtn');
const rulesBtn = document.getElementById('rulesBtn');
const rulePanel = document.getElementById('rulePanel');
const ruleBody = document.getElementById('ruleBody');
const closeRule = document.getElementById('closeRule');
const levelSelect = document.getElementById('levelSelect');
const sokobanUndoBtn = document.getElementById('sokobanUndo');
const canvasWrap = document.querySelector('.canvas-wrap');
const gameArea = document.querySelector('.game-area');
const sideInfo = document.querySelector('.side-info');
const topbar = document.querySelector('.topbar');
const mainPanel = document.querySelector('.panel');
const panelHeader = document.querySelector('.panel-header');

const rules = `使用方向键或滑动移动角色，把所有箱子推到目标点上即获胜。
箱子只能推不能拉。`;

let touchStart = null;

function setCanvasSize() {
  const areaRect = gameArea.getBoundingClientRect();
  const infoRect = sideInfo.getBoundingClientRect();
  const topRect = topbar.getBoundingClientRect();
  const areaStyles = getComputedStyle(gameArea);
  const panelStyles = getComputedStyle(mainPanel);
  const columnGap = parseFloat(areaStyles.columnGap || areaStyles.gap || 0);
  const rowGap = parseFloat(panelStyles.rowGap || panelStyles.gap || 0);
  const panelPaddingTop = parseFloat(panelStyles.paddingTop || 0);
  const panelPaddingBottom = parseFloat(panelStyles.paddingBottom || 0);
  const headerRect = panelHeader.getBoundingClientRect();
  const availableWidth = areaRect.width - infoRect.width - columnGap;
  const stacked = availableWidth <= 0;
  const viewportHeight = document.documentElement.clientHeight;
  const panelHeight = viewportHeight - topRect.height - panelPaddingTop - panelPaddingBottom - 64;
  const contentHeight = panelHeight - headerRect.height - rowGap;
  const heightLimit = stacked ? contentHeight - infoRect.height - columnGap : contentHeight;
  const baseSize = Math.min(stacked ? areaRect.width : availableWidth, heightLimit, areaRect.height);
  const size = Math.max(220, Math.floor(baseSize));
  if (!Number.isFinite(size) || size <= 0) return;
  canvasWrap.style.width = `${size}px`;
  canvasWrap.style.height = `${size}px`;
  canvas.width = size;
  canvas.height = size;
}

window.addEventListener('resize', () => {
  setCanvasSize();
  draw();
});

const sokoban = {
  grid: 10,
  levelIndex: 0,
  player: { x: 0, y: 0 },
  boxes: [],
  goals: [],
  walls: [],
  history: []
};

function initSokoban() {
  sokoban.boxes = [];
  sokoban.goals = [];
  sokoban.walls = [];
  sokoban.player = { x: 0, y: 0 };
  sokoban.history = [];
  let playerFound = false;

  const level = levels[sokoban.levelIndex];
  const levelHeight = level.length;
  const levelWidth = Math.max(...level.map((row) => row.length));
  sokoban.grid = Math.max(levelWidth, levelHeight);
  const offsetX = Math.floor((sokoban.grid - levelWidth) / 2);
  const offsetY = Math.floor((sokoban.grid - levelHeight) / 2);

  level.forEach((row, y) => {
    [...row].forEach((cell, x) => {
      const px = x + offsetX;
      const py = y + offsetY;
      if (cell === '#') sokoban.walls.push({ x: px, y: py });
      if (cell === 'O') sokoban.goals.push({ x: px, y: py });
      if (cell === '$') sokoban.boxes.push({ x: px, y: py });
      if (cell === '*') {
        sokoban.boxes.push({ x: px, y: py });
        sokoban.goals.push({ x: px, y: py });
      }
      if (cell === '@') {
        sokoban.player = { x: px, y: py };
        playerFound = true;
      }
      if (cell === '+') {
        sokoban.player = { x: px, y: py };
        sokoban.goals.push({ x: px, y: py });
        playerFound = true;
      }
    });
  });
  if (!playerFound) {
    // Fallback: place player on first empty tile.
    for (let y = 0; y < sokoban.grid; y += 1) {
      for (let x = 0; x < sokoban.grid; x += 1) {
        if (!sokobanAt(sokoban.walls, x, y) && !sokobanAt(sokoban.boxes, x, y)) {
          sokoban.player = { x, y };
          playerFound = true;
          break;
        }
      }
      if (playerFound) break;
    }
  }
  updateStatus('推箱子', `第 ${sokoban.levelIndex + 1} 关`);
  updateLegend(['箱子不可拉', '全部到位即胜']);
}

function sokobanAt(list, x, y) {
  return list.find((p) => p.x === x && p.y === y);
}

function moveSokoban(dx, dy) {
  const nx = sokoban.player.x + dx;
  const ny = sokoban.player.y + dy;
  if (sokobanAt(sokoban.walls, nx, ny)) return;
  const snapshot = {
    player: { ...sokoban.player },
    boxes: sokoban.boxes.map((b) => ({ ...b }))
  };
  const box = sokobanAt(sokoban.boxes, nx, ny);
  if (box) {
    const bx = nx + dx;
    const by = ny + dy;
    if (sokobanAt(sokoban.walls, bx, by) || sokobanAt(sokoban.boxes, bx, by)) return;
    box.x = bx;
    box.y = by;
  }
  sokoban.player.x = nx;
  sokoban.player.y = ny;
  sokoban.history.push(snapshot);

  if (sokoban.goals.every((g) => sokobanAt(sokoban.boxes, g.x, g.y))) {
    updateStatus('恭喜过关！', '自动进入下一关');
    setTimeout(() => {
      if (sokoban.levelIndex + 1 < levels.length) {
        goToLevel(sokoban.levelIndex + 1);
      } else {
        updateStatus('全部通关！', '可以选择任意关卡重玩');
      }
    }, 600);
  }
  draw();
}

function undoSokoban() {
  const last = sokoban.history.pop();
  if (!last) return;
  sokoban.player = { ...last.player };
  sokoban.boxes = last.boxes.map((b) => ({ ...b }));
  draw();
}

function goToLevel(index) {
  const safeIndex = Math.max(0, Math.min(index, levels.length - 1));
  sokoban.levelIndex = safeIndex;
  levelSelect.value = String(safeIndex);
  initSokoban();
  draw();
}

function drawSokoban() {
  const cell = canvas.width / sokoban.grid;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#f1f5f9';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  sokoban.walls.forEach((w) => {
    ctx.fillStyle = '#1f2937';
    ctx.fillRect(w.x * cell, w.y * cell, cell, cell);
  });

  sokoban.goals.forEach((g) => {
    ctx.fillStyle = '#fde68a';
    ctx.beginPath();
    ctx.arc((g.x + 0.5) * cell, (g.y + 0.5) * cell, cell * 0.22, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#b45309';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(g.x * cell + cell * 0.25, g.y * cell + cell * 0.25);
    ctx.lineTo(g.x * cell + cell * 0.75, g.y * cell + cell * 0.75);
    ctx.moveTo(g.x * cell + cell * 0.75, g.y * cell + cell * 0.25);
    ctx.lineTo(g.x * cell + cell * 0.25, g.y * cell + cell * 0.75);
    ctx.stroke();
  });

  sokoban.boxes.forEach((b) => {
    ctx.fillStyle = '#f97316';
    ctx.fillRect(b.x * cell + cell * 0.1, b.y * cell + cell * 0.1, cell * 0.8, cell * 0.8);
    if (sokobanAt(sokoban.goals, b.x, b.y)) {
      ctx.strokeStyle = '#14532d';
      ctx.lineWidth = 3;
      ctx.strokeRect(b.x * cell + cell * 0.18, b.y * cell + cell * 0.18, cell * 0.64, cell * 0.64);
    }
  });

  ctx.fillStyle = '#2a6df4';
  ctx.beginPath();
  ctx.arc((sokoban.player.x + 0.5) * cell, (sokoban.player.y + 0.5) * cell, cell * 0.3, 0, Math.PI * 2);
  ctx.fill();
}

function updateStatus(main, hint) {
  statusText.textContent = main;
  hintText.textContent = hint;
}

function updateLegend(items) {
  legend.innerHTML = '';
  items.forEach((item) => {
    const p = document.createElement('div');
    p.textContent = `• ${item}`;
    legend.appendChild(p);
  });
}

function draw() {
  drawSokoban();
}

function initLevelOptions() {
  levelSelect.innerHTML = '';
  levels.forEach((_, index) => {
    const option = document.createElement('option');
    option.value = String(index);
    option.textContent = `第 ${index + 1} 关`;
    if (index === sokoban.levelIndex) option.selected = true;
    levelSelect.appendChild(option);
  });
}

levelSelect.addEventListener('change', () => {
  goToLevel(Number(levelSelect.value));
});

sokobanUndoBtn.addEventListener('click', undoSokoban);

resetBtn.addEventListener('click', () => {
  initSokoban();
  draw();
});

rulesBtn.addEventListener('click', () => {
  ruleBody.textContent = rules;
  rulePanel.classList.add('show');
  rulePanel.setAttribute('aria-hidden', 'false');
});

closeRule.addEventListener('click', () => {
  rulePanel.classList.remove('show');
  rulePanel.setAttribute('aria-hidden', 'true');
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp' || event.key === 'w') moveSokoban(0, -1);
  if (event.key === 'ArrowDown' || event.key === 's') moveSokoban(0, 1);
  if (event.key === 'ArrowLeft' || event.key === 'a') moveSokoban(-1, 0);
  if (event.key === 'ArrowRight' || event.key === 'd') moveSokoban(1, 0);
});

canvas.addEventListener('touchstart', (event) => {
  const touch = event.touches[0];
  touchStart = { x: touch.clientX, y: touch.clientY };
});

canvas.addEventListener('touchmove', (event) => {
  if (!touchStart) return;
  const touch = event.touches[0];
  const dx = touch.clientX - touchStart.x;
  const dy = touch.clientY - touchStart.y;
  if (Math.abs(dx) > 25 || Math.abs(dy) > 25) {
    if (Math.abs(dx) > Math.abs(dy)) {
      moveSokoban(dx > 0 ? 1 : -1, 0);
    } else {
      moveSokoban(0, dy > 0 ? 1 : -1);
    }
    touchStart = null;
  }
  event.preventDefault();
}, { passive: false });

canvas.addEventListener('touchend', () => {
  touchStart = null;
});

requestAnimationFrame(() => {
  setCanvasSize();
  initLevelOptions();
  initSokoban();
  draw();
});
