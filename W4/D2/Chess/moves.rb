require_relative "piece"

module Slideable
    def cardinal_moves(pos)
        return horizontal_moves(pos) + vertical_moves(pos)
    end

    def diagonal_moves(pos)
        return right_to_left(pos) + left_to_right(pos)
    end

    private

    def horizontal_moves(pos)
        horizontal = []
                
        (0..7).each do |row|
            horizontal << [row, pos[1]]
        end
        
        horizontal - pos
    end

    def vertical_moves(pos)
        vertical = []
        (0..7).each do |col|
            vertical << [pos[0], col]
        end
        vertical - pos
    end
    
    def left_diagonal(pos)
        left_to_right = []
        (0..7).each do |x|
            position = [x,x]
            left_to_right << position
        end
        left_to_right - pos
    end
    
    def right_diagonal(pos)
        right_to_left = []
        j = 7
        (0..7).each do |i|
            position = [i, j - i]
            right_to_left << position
        end
        right_to_left - pos
    end
end



module Stepable
    
    def knight_moves(pos)
        possible_moves = [
            [1, 2],
            [1, -2],
            [2, 1],
            [2, -1],
            [-1, 2],
            [-1, -2],
            [-2, 1],
            [-2, -1]]

        moves = []
        possible_moves.each do |knight| 
            ret = [knight[0] + pos[0], knight[1] + pos[1]]
            moves << ret if 0 <= ret[0] && ret[0] <= 7 && 0 <= ret[1] && ret[1] <= 7
        end
        moves
    end

    def king_moves(pos)
        possible_moves = [
            [0, 1],
            [1, 0],
            [1, 1],
            [1, -1],
            [-1, 1],
            [0, -1],
            [-1, 0],
            [-1, -1]]

        moves = []
        possible_moves.each do |move| 
            ret = [move[0] + pos[0], move[1] + pos[1]]
            moves << ret if 0 <= ret[0] && ret[0] <= 7 && 0 <= ret[1] && ret[1] <= 7
        end
        moves
    end


end
