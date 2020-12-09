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

    def move_piece(color, start_pos, end_pos) # finish later
    end

    def valid_pos?(pos)
        pos == @null_piece
    end

    def add_piece(piece, pos)
        @board[pos] = piece
    end

    def checkmate?(color)
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
