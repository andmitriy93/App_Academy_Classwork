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

end