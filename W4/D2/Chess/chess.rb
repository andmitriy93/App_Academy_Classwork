
require "Singleton"

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

class NullPiece < Piece
    include Singleton
end

class Board
    attr_reader :board, :null_piece
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

    def move_piece(start_pos, end_pos)
        piece = @board[start_pos]
        if piece != @null_piece
            raise StartError
        elsif !valid_pos?(end_pos)
            raise EndError
        end
        @board[end_pos] = piece
        @board[start_pos] = nil
    end

    def valid_pos?(pos)
    end

    def add_piece(piece, pos)
        @board[pos] = piece
        @board.map!.with_index do |row, idx|
            row.map! do |ele|
                ele = NullPiece.instance
            end
        end
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
