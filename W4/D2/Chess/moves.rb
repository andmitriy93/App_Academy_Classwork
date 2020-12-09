require_relative "piece"

module Cardinal
    HORIZONTAL = [1, 0]
    VERTICAL = [0, 1]

    def horizontal_moves(pos)
        all_possible_moves = []
                
        (0..7).each do |col|
            all_possible_moves << [pos[0], col] if pos[1] != col
        end
        
        all_possible_moves
    end

    def vertical_moves(pos)
        possible_vertical_moves = []
    end
end

class Moves

end


