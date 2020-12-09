
class StartError < StandardError
    def message
        "No Piece at start position"
    end
end


class EndError < StandardError
    def message
        "No Piece at end position"
    end
end


class Board
    attr_reader :board, null_piece
    attr_writer :board
    def initialize
        @board = Array.new(8) {Array.new(8)}
        @null_piece = NullPiece
    end
    def [](pos)
        row, col = pos
        @board[row][col]
    end
    def []=(pos, value)
        row, col = pos
        @board[row][col] = value
    end

    def move_piece(start_pos, end_pos) # finish later
        if @board[start_pos] == @null_piece
            piece
            raise StartError
        elsif !valid_pos?(end_pos)
            raise EndError
        end

    end

    def valid_pos?(pos)
        pos == @null_piece
    end

    def add_piece(piece, pos)
        @board[pos] = piece
    end

    def checkmate?(color)
    end

    def in_check?(color)
    end

    def find_king(color)
        # assume pieces is an array of piece objects
        array = pieces
        array.each do |piece|
            if piece.is_a?(King) && piece.color == color
                return piece.pos
            end
        end
    end

    def pieces
    end

end

class Piece
    def initialize(color, board, pos)
        @color = color
        @board = Board.new
        @pos = pos
    end

    def to_s
    end

    def empty?
    end

    def valid_moves
        # possible moves for this type of Piece
    end

    def pos=(val)
        @pos = val
    end

    def Symbol
        @color
    end

    private
    def move_into_check?(end_pos)
        
    end

 end

class SlidingPiece < Piece
    def initialize
        super
    end

    def Symbol
        rook = :r
        bishop = :b
        queen = :q

    end

    private
    def move_dirs

    end
end
