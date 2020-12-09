require_relative "piece"

module Cardinal
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
        return horizontal_moves(pos) + vertical_moves(pos)
    end
end


class Moves

end


