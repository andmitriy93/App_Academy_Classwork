require_relative "piece"

module Slideable
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

    def cardinal_moves(pos)
        line = horizontal_moves(pos) + vertical_moves(pos)
        diag = right_to_left(pos) + left_to_right(pos)
        line + diag
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


class Moves

end


