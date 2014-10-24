# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list

json.board @board, :id, :title
json.lists do @board.lists, :title

json.lists @board.lists do |json, list|
	json.list list, :title, :board_id
end
