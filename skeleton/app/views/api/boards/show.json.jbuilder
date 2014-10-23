# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list

json.set! :id, @board.id
json.set! :title, @board.title
